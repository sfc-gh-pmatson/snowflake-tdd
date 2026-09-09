// ─────────────────────────────────────────────────────────────
// notes/pmatson.js — talk-track notes for Peter Matson
// ─────────────────────────────────────────────────────────────
//
// This file is self-declaring: drop it in the notes/ folder and it
// appears in the notes picker in the top bar. No registry to update.
//
// KEY = page filename without .html ('index' for the root page)
//       e.g. pages/sql-analytics.html  ->  'sql-analytics'
//
// Pages with an entry here show these notes; pages without one fall
// back to that page's own built-in notes (window.PAGE_NOTES) automatically.
// If a page has neither, the panel says "No talk-track notes for this page
// yet." — so check tools/add-talk-tracks.py / the page itself before assuming
// a gap here is covered downstream.
//
// Markup conventions (match the built-in notes so rendering is identical):
//   <h3>Section Header</h3>
//   <p>Paragraph text.</p>
//   <ul><li><strong>Lead-in:</strong> detail.</li></ul>
//
// NOTE ON VISIBILITY: this file ships with the deployed app and is
// publicly fetchable by anyone in the account who can reach the app.
// Keep it free of anything you would not want a colleague reading.

window.TDD_NOTES_REGISTER({

  id: 'pmatson',
  name: 'Peter Matson',

  notes: {

    'sql-analytics': `
<h3>My Talk Track</h3>
<p>Open with the multi-modal single-SELECT point, then go straight to the SQL extensions — QUALIFY and ASOF JOIN are the two that get a visible reaction from technical audiences.</p>

<h3>Audience Adjustments</h3>
<ul>
  <li><strong>Finance / trading:</strong> lead with ASOF JOIN. Temporal alignment of quotes and trades is a problem they already have.</li>
  <li><strong>Retail / logistics:</strong> lead with geospatial + H3.</li>
  <li><strong>Platform teams:</strong> lead with the zero-copy point — no separate geo DB, no time-series store, no JSON ETL.</li>
</ul>

<h3>Reminders</h3>
<ul>
  <li>Do not read the sub-page cards aloud — let them pick which one to go deep on.</li>
  <li>Have the time-series sub-page ready in a second tab.</li>
</ul>`,

    'sql-analytics-timeseries': `
<h3>My Talk Track</h3>
<p>The pitch here is elimination of code, not new capability. Frame each feature as "here is the CTE pile this replaces."</p>

<h3>Reminders</h3>
<ul>
  <li>Ask what they use for gap-filling today before showing DATE_SPINE — the answer is usually a hand-rolled calendar table.</li>
  <li>If they push on performance, redirect to clustering + pruning rather than defending syntax.</li>
</ul>`,

  },

});
