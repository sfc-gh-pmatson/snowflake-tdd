"""
Interactive TDD — Usage Analytics Dashboard

Local Streamlit app showing distinct users, page views, view days, and
average daily users for the Interactive TDD site, sourced from the
TDD_PAGE_VIEWS view (parsed SPCS nginx access logs).

Run locally:
    SNOWFLAKE_DEFAULT_CONNECTION_NAME=Snowhouse \
        python3 -m streamlit run streamlit_app.py
"""

import pandas as pd
import streamlit as st

st.set_page_config(
    page_title="Interactive TDD — Usage Analytics",
    page_icon=":material/monitoring:",
    layout="wide",
)

# =============================================================================
# Environment config — each environment has its own TDD_PAGE_VIEWS view
# =============================================================================

ENVIRONMENTS = {
    "Snowhouse": {
        "connection_name": "Snowhouse",
        "view": "TEMP.PMATSON.TDD_PAGE_VIEWS",
    },
    "Demo Account": {
        "connection_name": "Demo_Account",
        "view": "DEMO.PUBLIC.TDD_PAGE_VIEWS",
    },
}


def get_snowflake_connection(connection_name: str):
    """Get a named Snowflake connection via st.connection.

    Displays an error and stops the app if the connection fails.
    """
    try:
        return st.connection(connection_name, type="snowflake")
    except Exception as e:
        st.error(f"Failed to connect to Snowflake ({connection_name}): {e}")
        st.info(
            "Make sure this connection is defined in `~/.snowflake/connections.toml` "
            "and `SNOWFLAKE_DEFAULT_CONNECTION_NAME` matches it if needed."
        )
        st.stop()


@st.cache_data(ttl=300, show_spinner="Loading usage data from Snowflake...")
def load_page_views(connection_name: str, view: str) -> pd.DataFrame:
    conn = get_snowflake_connection(connection_name)
    df = conn.query(f"SELECT * FROM {view}", ttl=0)
    df.columns = df.columns.str.lower()
    df["timestamp"] = pd.to_datetime(df["timestamp"])
    df["day"] = df["timestamp"].dt.date
    return df


# =============================================================================
# Metric computation
# =============================================================================


def compute_metrics(df: pd.DataFrame) -> dict:
    if df.empty:
        return {
            "distinct_users": 0,
            "page_views": 0,
            "view_days": 0,
            "avg_daily_users": 0.0,
            "date_range_days": 0,
        }

    distinct_users = df["snowflake_user"].nunique()
    page_views = len(df)

    # view_days: number of distinct (user, page, day) combinations —
    # i.e. total count of "a page was viewed on a given day by a given user"
    view_days = df.drop_duplicates(subset=["snowflake_user", "request_path", "day"]).shape[0]

    # average daily users: distinct users per day, averaged across the
    # observed date range (days with zero activity count as 0 users)
    date_range_days = (df["day"].max() - df["day"].min()).days + 1
    daily_user_counts = df.groupby("day")["snowflake_user"].nunique()
    avg_daily_users = daily_user_counts.sum() / date_range_days if date_range_days > 0 else 0.0

    return {
        "distinct_users": distinct_users,
        "page_views": page_views,
        "view_days": view_days,
        "avg_daily_users": round(avg_daily_users, 2),
        "date_range_days": date_range_days,
    }


# =============================================================================
# Sidebar — environment selector
# =============================================================================

with st.sidebar:
    st.markdown("### Environment")
    env_name = st.radio(
        "Data source",
        options=list(ENVIRONMENTS.keys()),
        label_visibility="collapsed",
    )
    env = ENVIRONMENTS[env_name]
    st.caption(f"Connection: `{env['connection_name']}`")
    st.caption(f"View: `{env['view']}`")

    if st.button(":material/refresh: Refresh data", type="tertiary"):
        st.cache_data.clear()
        st.rerun()

# =============================================================================
# Load data
# =============================================================================

df = load_page_views(env["connection_name"], env["view"])
metrics = compute_metrics(df)

# =============================================================================
# Page header
# =============================================================================

st.markdown("# :material/monitoring: Interactive TDD Usage Analytics")
st.caption(f":material/cloud: {env_name} · last {metrics['date_range_days']} day(s) of activity")

if df.empty:
    st.warning("No page-view data found. Visit the app and check back after a few minutes.")
    st.stop()

# =============================================================================
# Metric cards
# =============================================================================

cols = st.columns(4)

with cols[0]:
    st.metric("Distinct Users", metrics["distinct_users"])

with cols[1]:
    st.metric("Page Views", metrics["page_views"])

with cols[2]:
    st.metric(
        "View Days",
        metrics["view_days"],
        help="Distinct (user, page, day) combinations — total count of days a page "
        "was viewed by a given user, summed across all users and pages.",
    )

with cols[3]:
    st.metric(
        "Avg Daily Users",
        metrics["avg_daily_users"],
        help="Distinct users per day, averaged over the observed date range "
        "(days with zero activity count as 0).",
    )

st.divider()

# =============================================================================
# Supporting detail: daily active users + top pages
# =============================================================================

left, right = st.columns(2)

with left:
    st.markdown("**Daily Active Users**")
    dau = (
        df.groupby("day")["snowflake_user"]
        .nunique()
        .reset_index(name="distinct_users")
        .sort_values("day")
    )
    st.bar_chart(dau, x="day", y="distinct_users", height=300)

with right:
    st.markdown("**Top Pages**")
    top_pages = (
        df.groupby("request_path")
        .agg(views=("request_path", "size"), unique_users=("snowflake_user", "nunique"))
        .reset_index()
        .sort_values("views", ascending=False)
        .head(15)
    )
    st.dataframe(top_pages, use_container_width=True, hide_index=True, height=300)

st.divider()

st.markdown("**Recent Activity**")
recent = df.sort_values("timestamp", ascending=False)[
    ["timestamp", "snowflake_user", "request_path", "status_code", "session_number"]
].head(50)
st.dataframe(recent, use_container_width=True, hide_index=True, height=300)
