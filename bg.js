// Background animation disabled

// ── Notes Panel ────────────────────────────────────────────
(function() {
  // Inject CSS
  var style = document.createElement('style');
  style.textContent = `
    #notes-panel {
      position: fixed;
      top: 0; right: -420px; bottom: 0;
      width: 380px;
      min-width: 260px;
      max-width: 640px;
      background: #050d1a;
      border-left: 3px solid #29B5E8;
      z-index: 1000;
      display: flex;
      flex-direction: column;
      transition: right .28s cubic-bezier(.4,0,.2,1);
      box-shadow: -8px 0 32px rgba(0,0,0,.4);
    }
    #notes-panel.open { right: 0; }

    #notes-drag {
      position: absolute;
      top: 0; left: -6px; bottom: 0;
      width: 12px;
      cursor: col-resize;
      z-index: 10;
    }
    #notes-drag:hover, #notes-drag.dragging {
      background: rgba(41,181,232,.15);
    }

    #notes-header {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 16px;
      background: #29B5E8;
      flex-shrink: 0;
    }
    #notes-header-title {
      flex: 1;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
      font-size: .95rem;
      font-weight: 700;
      color: #fff;
      letter-spacing: .5px;
    }
    #notes-author-picker {
      display: flex;
      align-items: center;
      gap: 5px;
      flex-shrink: 0;
    }
    #notes-author-picker .nap-label {
      font-size: .6rem;
      font-weight: 700;
      letter-spacing: .6px;
      text-transform: uppercase;
      color: rgba(255,255,255,.6);
    }
    #notes-author-picker select {
      background: rgba(0,0,0,.2);
      border: 1px solid rgba(255,255,255,.3);
      color: #fff;
      font-size: .7rem;
      font-weight: 600;
      letter-spacing: .3px;
      padding: 2px 6px;
      border-radius: 4px;
      cursor: pointer;
      outline: none;
      max-width: 140px;
    }
    #notes-author-picker select option {
      background: #050d1a;
      color: rgba(255,255,255,.85);
    }
    #notes-close {
      width: 26px; height: 26px;
      border-radius: 50%;
      background: rgba(255,255,255,.2);
      border: none;
      color: #fff;
      font-size: 14px;
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
    }
    #notes-close:hover { background: rgba(255,255,255,.35); }

    #btn-notes {
      padding: 5px 14px; border-radius: 100px;
      font-size: .72rem; font-weight: 600; letter-spacing: .4px;
      cursor: pointer; border: 1px solid rgba(41,181,232,.3); transition: all .17s;
      background: rgba(41,181,232,.1); color: #29B5E8;
    }
    #btn-notes:hover { background: rgba(41,181,232,.22); border-color: #29B5E8; }
    #btn-notes.active { background: rgba(41,181,232,.25); border-color: #29B5E8; }

    #notes-body {
      flex: 1;
      overflow-y: auto;
      padding: 18px 20px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
      color: rgba(255,255,255,.85);
      font-size: .88rem;
      line-height: 1.65;
    }
    #notes-body h3 {
      font-size: .78rem;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #29B5E8;
      margin: 18px 0 8px;
    }
    #notes-body h3:first-child { margin-top: 0; }
    #notes-body p { margin-bottom: 10px; color: rgba(255,255,255,.78); }
    #notes-body ul { padding-left: 18px; margin-bottom: 10px; }
    #notes-body li { margin-bottom: 5px; color: rgba(255,255,255,.78); }
    #notes-body strong { color: #fff; font-weight: 600; }
    #notes-body .note-tag {
      display: inline-block;
      padding: 1px 7px;
      border-radius: 4px;
      background: rgba(41,181,232,.2);
      border: 1px solid rgba(41,181,232,.35);
      font-size: .72rem;
      font-weight: 700;
      color: #29B5E8;
      letter-spacing: .3px;
      text-transform: uppercase;
      vertical-align: middle;
    }
    #notes-empty {
      color: rgba(255,255,255,.35);
      font-style: italic;
      text-align: center;
      margin-top: 40px;
    }
  `;
  document.head.appendChild(style);

  // Inject HTML
  var panel = document.createElement('div');
  panel.id = 'notes-panel';
  panel.innerHTML =
    '<div id="notes-drag"></div>' +
    '<div id="notes-header">' +
      '<span id="notes-header-title">Talk Track Notes</span>' +
      '<span id="notes-picker-slot"></span>' +
      '<button id="notes-close">&#x2715;</button>' +
    '</div>' +
    '<div id="notes-body"></div>';
  document.body.appendChild(panel);

  // ── Toggle ─────────────────────────────────────────────
  function openNotes() {
    var body = document.getElementById('notes-body');
    var content = window.PAGE_NOTES ||
      '<div id="notes-empty">No talk-track notes for this page yet.</div>';
    body.innerHTML = content;
    panel.classList.add('open');
    var btn = document.getElementById('btn-notes');
    if (btn) btn.classList.add('active');
  }

  function closeNotes() {
    panel.classList.remove('open');
    panel.style.right = '';  // clear any inline right set by drag handler
    var btn = document.getElementById('btn-notes');
    if (btn) btn.classList.remove('active');
  }

  function toggleNotes() {
    if (panel.classList.contains('open')) closeNotes();
    else openNotes();
  }

  document.getElementById('notes-close').addEventListener('click', closeNotes);

  // ── Drag to resize ─────────────────────────────────────
  var drag = document.getElementById('notes-drag');
  var dragging = false;
  var startX, startWidth;

  drag.addEventListener('mousedown', function(e) {
    dragging = true;
    startX = e.clientX;
    startWidth = panel.offsetWidth;
    drag.classList.add('dragging');
    e.preventDefault();
  });

  document.addEventListener('mousemove', function(e) {
    if (!dragging) return;
    var delta = startX - e.clientX; // drag left = increase width
    var newWidth = Math.min(640, Math.max(260, startWidth + delta));
    panel.style.width = newWidth + 'px';
    // Shift right offset if panel is open so edge stays fixed
    if (panel.classList.contains('open')) {
      panel.style.right = '0px';
    }
  });

  document.addEventListener('mouseup', function() {
    if (dragging) {
      dragging = false;
      drag.classList.remove('dragging');
    }
  });

  // ── Expose toggle ──────────────────────────────────────
  window.__notesToggle = toggleNotes;

  // Re-render the panel body if it is already open (used when
  // user-notes.js resolves after the panel was opened).
  window.__notesRefresh = function() {
    if (panel.classList.contains('open')) openNotes();
  };

})();

// ── Pages Nav Panel ─────────────────────────────────────────
(function() {
  var NAV_SECTIONS = [
    { title: 'Platform', pages: [
      { name: 'Platform Architecture',      file: 'index.html', isRoot: true },
      { name: 'Snowflake Pillars',          file: 'pillars.html' },
      { name: 'AI Data Cloud',              file: 'ai-data-cloud.html' },
      { name: 'Data Lakehouse',             file: 'data-lakehouse.html' },
      { name: 'Data Warehouse',             file: 'data-warehouse.html' },
      { name: 'Snowgrid & Cross-Cloud',     file: 'snowgrid.html' },
      { name: 'Business Continuity & DR',   file: 'bcdr.html' },
      { name: 'Cost Management',            file: 'cost-management.html' },
      { name: 'Well-Architected Framework', file: 'well-architected-framework.html' },
      { name: 'Partner Ecosystem',          file: 'partners.html' },
    ]},
    { title: 'Storage & Tables', pages: [
      { name: 'Storage Hub',                      file: 'storage.html' },
      { name: 'Micro-Partitioning',               file: 'storage-micropartitions.html' },
      { name: 'Clustering & Search Optimization', file: 'storage-clustering.html' },
      { name: 'Native Tables',                    file: 'snowflake-tables.html' },
    ]},
    { title: 'Compute', pages: [
      { name: 'Compute Hub',         file: 'compute.html' },
      { name: 'Virtual Warehouses',  file: 'compute-warehouses.html' },
      { name: 'Compute Scaling',     file: 'compute-scaling.html' },
      { name: 'Specialized Compute', file: 'compute-specialized.html' },
      { name: 'Serverless Compute',  file: 'compute-serverless.html' },
      { name: 'GPU / AI Compute',    file: 'gpu.html' },
      { name: 'SPCS Containers',     file: 'containers.html' },
      { name: 'Apache Spark',        file: 'apache-spark.html' },
    ]},
    { title: 'Transactions & OLTP', pages: [
      { name: 'Transactions Hub',    file: 'transactions.html' },
      { name: 'Interactive Tables',  file: 'interactive-tables.html' },
      { name: 'Snowflake Postgres',  file: 'snowflake-postgres.html' },
      { name: 'Postgres Mirroring',  file: 'postgres-mirroring.html' },
    ]},
    { title: 'Iceberg', pages: [
      { name: 'Apache Iceberg',             file: 'iceberg.html' },
      { name: 'Iceberg — Snowflake Managed', file: 'iceberg-snowflake.html' },
      { name: 'Iceberg — Catalog-Linked DB', file: 'iceberg-catalog-linked.html' },
      { name: 'Iceberg v3',                 file: 'iceberg-v3.html' },
      { name: 'Delta Direct',               file: 'delta-direct.html' },
      { name: 'External Tables',            file: 'external-tables.html' },
      { name: 'External Engines',           file: 'external-engines.html' },
    ]},
    { title: 'Data Engineering', pages: [
      { name: 'Data Engineering Hub',  file: 'data-engineering.html' },
      { name: 'Snowpark',              file: 'snowpark.html' },
      { name: 'CLI + Git Integration', file: 'cli-git.html' },
      { name: 'DevOps / DCM',          file: 'devops-dcm.html' },
      { name: 'Apps & Collaboration',  file: 'apps-collaboration.html' },
    ]},
    { title: 'Analytics', pages: [
      { name: 'SQL Analytics',          file: 'sql-analytics.html' },
      { name: 'SQL — Semi-Structured',  file: 'sql-analytics-semistructured.html' },
      { name: 'SQL — Time Series',      file: 'sql-analytics-timeseries.html' },
      { name: 'SQL — Window Functions', file: 'sql-analytics-windows.html' },
      { name: 'SQL — Geospatial',       file: 'sql-analytics-geospatial.html' },
      { name: 'Snowflake Notebooks',    file: 'snowflake-notebooks.html' },
      { name: 'Streamlit-in-Snowflake', file: 'streamlit.html' },
    ]},
    { title: 'Data Mesh & Sharing', pages: [
      { name: 'Data Mesh',               file: 'data-mesh.html' },
      { name: 'Data Sharing',            file: 'data-sharing.html' },
      { name: 'Native Apps',             file: 'native-apps.html' },
      { name: 'Snowflake Marketplace',   file: 'marketplace.html' },
      { name: 'Internal Marketplace',    file: 'internal-marketplace.html' },
      { name: 'Organizational Listings', file: 'org-listings.html' },
      { name: 'Data Clean Rooms',        file: 'data-clean-rooms.html' },
    ]},
    { title: 'Governance', pages: [
      { name: 'Horizon Catalog',      file: 'horizon.html' },
      { name: 'Search & Discovery',   file: 'horizon-search.html' },
      { name: 'Tagging',              file: 'horizon-tagging.html' },
      { name: 'Classification',       file: 'horizon-classification.html' },
      { name: 'Lineage',              file: 'horizon-lineage.html' },
      { name: 'Data Quality (DMF)',   file: 'horizon-dmf.html' },
      { name: 'Trust Center',         file: 'horizon-trust.html' },
      { name: 'Access',               file: 'horizon-access.html' },
      { name: 'Policies',             file: 'horizon-policies.html' },
    ]},
    { title: 'Cortex AI', pages: [
      { name: 'Cortex AI',             file: 'cortex-ai.html' },
      { name: 'AI Functions',          file: 'cortex-ai-functions.html' },
      { name: 'Cortex Search',         file: 'cortex-search.html' },
      { name: 'Cortex Analyst',        file: 'cortex-analyst.html' },
      { name: 'Cortex Agents',         file: 'cortex-agents.html' },
      { name: 'Document AI',           file: 'document-ai.html' },
      { name: 'Cortex Code (CoCo)',    file: 'cortex-code.html' },
      { name: 'Snowflake CoWork',      file: 'snowflake-cowork.html' },
      { name: 'CoWork at Snowflake',   file: 'snowflake-cowork-internal.html' },
      { name: 'MCP & Connectors',      file: 'mcp-connectors.html' },
      { name: 'Cortex Sense',          file: 'cortex-sense.html' },
      { name: 'Agent Skills',          file: 'cortex-sense-skills.html' },
    ]},
    { title: 'Snowflake ML', pages: [
      { name: 'Snowflake ML',        file: 'snowflake-ml.html' },
      { name: 'In-SQL ML Functions', file: 'ml-functions.html' },
      { name: 'MLOps',               file: 'mlops.html' },
      { name: 'ML Agent',            file: 'ml-agent.html' },
    ]},
  ];

  // Compute href for a page entry
  function pageHref(entry) {
    var inPages = location.pathname.includes('/pages/');
    if (entry.isRoot) return inPages ? '../index.html' : './index.html';
    return inPages ? './' + entry.file : './pages/' + entry.file;
  }

  // Detect current page filename for highlighting
  function currentFile() {
    var parts = location.pathname.split('/');
    return parts[parts.length - 1] || 'index.html';
  }

  // Build panel body HTML
  function buildBody() {
    var cur = currentFile();
    var html = '';
    NAV_SECTIONS.forEach(function(section) {
      html += '<div class="pnav-section-title">' + section.title + '</div>';
      section.pages.forEach(function(entry) {
        var file = entry.isRoot ? 'index.html' : entry.file;
        var isActive = file === cur;
        html += '<a href="' + pageHref(entry) + '" class="pnav-link' + (isActive ? ' pnav-link-active' : '') + '">' +
          (isActive ? '<span class="pnav-dot"></span>' : '') +
          entry.name +
        '</a>';
      });
    });
    return html;
  }

  // ── Inject CSS ─────────────────────────────────────────────
  var style = document.createElement('style');
  style.textContent = `
    #pages-panel {
      position: fixed;
      top: 0; left: -360px; bottom: 0;
      width: 320px;
      min-width: 220px;
      max-width: 560px;
      background: #050d1a;
      border-right: 3px solid #29B5E8;
      z-index: 1000;
      display: flex;
      flex-direction: column;
      transition: left .28s cubic-bezier(.4,0,.2,1);
      box-shadow: 8px 0 32px rgba(0,0,0,.4);
    }
    #pages-panel.open { left: 0; }

    #pages-drag {
      position: absolute;
      top: 0; right: -6px; bottom: 0;
      width: 12px;
      cursor: col-resize;
      z-index: 10;
    }
    #pages-drag:hover, #pages-drag.dragging {
      background: rgba(41,181,232,.15);
    }

    #pages-header {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 16px;
      background: #29B5E8;
      flex-shrink: 0;
    }
    #pages-header-title {
      flex: 1;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
      font-size: .95rem;
      font-weight: 700;
      color: #fff;
      letter-spacing: .5px;
    }
    #pages-key-hint {
      font-size: .72rem;
      color: rgba(255,255,255,.6);
      background: rgba(0,0,0,.2);
      padding: 2px 7px;
      border-radius: 4px;
    }
    #pages-close {
      width: 26px; height: 26px;
      border-radius: 50%;
      background: rgba(255,255,255,.2);
      border: none;
      color: #fff;
      font-size: 14px;
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
    }
    #pages-close:hover { background: rgba(255,255,255,.35); }

    #btn-pages {
      padding: 5px 14px; border-radius: 100px;
      font-size: .72rem; font-weight: 600; letter-spacing: .4px;
      cursor: pointer; border: 1px solid rgba(41,181,232,.3); transition: all .17s;
      background: rgba(41,181,232,.1); color: #29B5E8;
    }
    #btn-pages:hover { background: rgba(41,181,232,.22); border-color: #29B5E8; }
    #btn-pages.active { background: rgba(41,181,232,.25); border-color: #29B5E8; }

    #pages-body {
      flex: 1;
      overflow-y: auto;
      padding: 12px 0 20px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
    }
    .pnav-section-title {
      font-size: .68rem;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #29B5E8;
      padding: 14px 18px 5px;
    }
    .pnav-section-title:first-child { padding-top: 6px; }
    .pnav-link {
      display: flex;
      align-items: center;
      gap: 7px;
      padding: 5px 18px;
      font-size: .84rem;
      color: rgba(255,255,255,.7);
      text-decoration: none;
      transition: background .12s, color .12s;
      line-height: 1.4;
    }
    .pnav-link:hover {
      background: rgba(41,181,232,.1);
      color: #fff;
    }
    .pnav-link-active {
      color: #fff;
      font-weight: 600;
      background: rgba(41,181,232,.12);
    }
    .pnav-dot {
      width: 6px; height: 6px;
      border-radius: 50%;
      background: #29B5E8;
      flex-shrink: 0;
    }
  `;
  document.head.appendChild(style);

  // ── Inject HTML ────────────────────────────────────────────
  var panel = document.createElement('div');
  panel.id = 'pages-panel';
  panel.innerHTML =
    '<div id="pages-drag"></div>' +
    '<div id="pages-header">' +
      '<span id="pages-header-title">Pages</span>' +
      '<span id="pages-key-hint">P to toggle</span>' +
      '<button id="pages-close">&#x2715;</button>' +
    '</div>' +
    '<div id="pages-body"></div>';
  document.body.appendChild(panel);

  // ── Toggle ─────────────────────────────────────────────────
  function openPages() {
    document.getElementById('pages-body').innerHTML = buildBody();
    panel.classList.add('open');
    var btn = document.getElementById('btn-pages');
    if (btn) btn.classList.add('active');
  }

  function closePages() {
    panel.classList.remove('open');
    panel.style.left = '';
    var btn = document.getElementById('btn-pages');
    if (btn) btn.classList.remove('active');
  }

  function togglePages() {
    if (panel.classList.contains('open')) closePages();
    else openPages();
  }

  document.getElementById('pages-close').addEventListener('click', closePages);

  // ── Drag to resize ─────────────────────────────────────────
  var drag = document.getElementById('pages-drag');
  var dragging = false;
  var startX, startWidth;

  drag.addEventListener('mousedown', function(e) {
    dragging = true;
    startX = e.clientX;
    startWidth = panel.offsetWidth;
    drag.classList.add('dragging');
    e.preventDefault();
  });

  document.addEventListener('mousemove', function(e) {
    if (!dragging) return;
    var delta = e.clientX - startX; // drag right = increase width
    var newWidth = Math.min(560, Math.max(220, startWidth + delta));
    panel.style.width = newWidth + 'px';
    if (panel.classList.contains('open')) panel.style.left = '0px';
  });

  document.addEventListener('mouseup', function() {
    if (dragging) { dragging = false; drag.classList.remove('dragging'); }
  });

  // ── Expose toggle ──────────────────────────────────────────
  window.__pagesToggle = togglePages;
  window.__pagesClose  = closePages;

})();

// ── Help (?) + Feedback buttons — injected on every page ────
(function() {
  var KBD = 'background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);border-radius:3px;padding:1px 5px;font-family:monospace;';
  var shortcutRows = [
    ['&#8592;', 'Back'],
    ['P', 'Page Navigator'],
    ['N', 'Talk Track Notes'],
    ['S', 'Speaker Notes Window'],
    '---',
    ['H', 'Home'],
    ['M', 'Snowflake ML'],
    ['A', 'Cortex AI'],
    ['G', 'Governance'],
    ['E', 'Data Engineering'],
    ['L', 'Data Lakehouse'],
    ['C', 'Compute'],
    ['W', 'Well-Architected Framework'],
  ];

  var isIndex = !location.pathname.includes('/pages/');

  var popupHTML =
    '<span style="color:#fff;font-weight:700;font-size:12px;margin-bottom:2px;">Interactive TDD</span>' +
    (isIndex ? '<span>Click any block to drill into that topic</span>' : '') +
    '<div style="height:1px;background:rgba(41,181,232,.2);margin:2px 0;"></div>' +
    shortcutRows.map(function(r) {
      if (r === '---') return '<div style="height:1px;background:rgba(41,181,232,.2);margin:2px 0;"></div>';
      return '<span><kbd style="' + KBD + '">' + r[0] + '</kbd>&ensp;' + r[1] + '</span>';
    }).join('');

  function getPageName() {
    var label = document.querySelector('.nav-label');
    if (label) return label.textContent.trim();
    var title = document.title.replace(/\s*[—–-].*$/, '').trim();
    return title || 'Interactive TDD';
  }

  function buildFeedbackHref() {
    var page = getPageName();
    var body = 'Include the page, screenshot, and your specific feedback or request.\nPage: ' + page;
    return 'https://mail.google.com/mail/?view=cm&to=peter.matson@snowflake.com&su=Interactive%20TDD%20Feedback&body=' + encodeURIComponent(body);
  }

  var BTN_BASE = 'position:fixed;bottom:16px;display:flex;align-items:center;border-radius:100px;background:rgba(5,13,26,.8);border:1px solid rgba(41,181,232,.35);color:rgba(255,255,255,.45);font-size:11px;font-weight:600;letter-spacing:.3px;z-index:900;transition:border-color .15s,color .15s;cursor:pointer;';
  var HOVER_ON  = function(el){ el.style.borderColor='#29B5E8'; el.style.color='#29B5E8'; };
  var HOVER_OFF = function(el){ el.style.borderColor='rgba(41,181,232,.35)'; el.style.color='rgba(255,255,255,.45)'; };

  // ── Feedback button ──────────────────────────────────────
  var fbBtn = document.createElement('a');
  fbBtn.id = 'global-feedback-btn';
  fbBtn.target = '_blank';
  fbBtn.rel = 'noopener';
  fbBtn.style.cssText = BTN_BASE + 'left:16px;padding:5px 12px;gap:6px;text-decoration:none;';
  fbBtn.innerHTML = '&#9993;&ensp;Feedback';
  fbBtn.addEventListener('mouseover', function(){ HOVER_ON(fbBtn); });
  fbBtn.addEventListener('mouseout',  function(){ HOVER_OFF(fbBtn); });
  fbBtn.addEventListener('click', function(){ fbBtn.href = buildFeedbackHref(); });
  document.body.appendChild(fbBtn);

  // ── Help (?) button + popup ──────────────────────────────
  var helpBtn = document.createElement('button');
  helpBtn.id = 'global-help-btn';
  helpBtn.setAttribute('aria-label', 'Keyboard shortcuts');
  helpBtn.style.cssText = BTN_BASE + 'right:16px;width:28px;height:28px;justify-content:center;padding:0;border-radius:50%;font-size:13px;line-height:1;';
  helpBtn.textContent = '?';
  helpBtn.addEventListener('mouseover', function(){ HOVER_ON(helpBtn); });
  helpBtn.addEventListener('mouseout',  function(){ HOVER_OFF(helpBtn); });

  var popup = document.createElement('div');
  popup.id = 'global-help-popup';
  popup.style.cssText = 'position:fixed;bottom:52px;right:16px;display:none;flex-direction:column;gap:7px;padding:12px 16px;border-radius:10px;background:rgba(5,13,26,.94);border:1px solid rgba(41,181,232,.3);font-size:11px;color:rgba(255,255,255,.6);z-index:901;min-width:240px;box-shadow:0 4px 24px rgba(0,0,0,.55);';
  popup.innerHTML = popupHTML;

  helpBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    popup.style.display = popup.style.display === 'flex' ? 'none' : 'flex';
  });
  document.addEventListener('click', function() { popup.style.display = 'none'; });

  document.body.appendChild(helpBtn);
  document.body.appendChild(popup);
})();

// ── Speaker View ─────────────────────────────────────────────
(function() {
  var STORAGE_KEY = 'tdd-speaker-state';

  function getPageTitle() {
    var label = document.querySelector('.nav-label');
    if (label) return label.textContent.trim();
    return document.title.replace(/\s*[—–-].*$/, '').trim();
  }
  function getCategoryTag() {
    var tag = document.querySelector('.nav-bar .slide-tag');
    return tag ? tag.textContent.trim() : '';
  }
  function publishState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        title: getPageTitle(),
        category: getCategoryTag(),
        notes: window.PAGE_NOTES || '',
        authors: window.__notesAuthorList || [],
        author: window.__notesAuthor || 'builtin',
        ts: Date.now()
      }));
    } catch(e) {}
  }

  function speakerWindowHTML() {
    return '<!DOCTYPE html><html><head><meta charset="utf-8"><title>Speaker Notes \u2014 TDD</title><style>' +
      '* { margin:0; padding:0; box-sizing:border-box; }' +
      'body { background:#050d1a; font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif; color:rgba(255,255,255,.85); height:100vh; display:flex; flex-direction:column; }' +
      '#hdr { background:#29B5E8; padding:11px 20px; display:flex; align-items:center; gap:12px; flex-shrink:0; }' +
      '#cat { font-size:10px; font-weight:700; letter-spacing:1px; text-transform:uppercase; color:rgba(255,255,255,.7); background:rgba(0,0,0,.2); padding:2px 8px; border-radius:4px; }' +
      '#ttl { font-size:1rem; font-weight:700; color:#fff; flex:1; }' +
      '#clk { font-size:.85rem; color:rgba(255,255,255,.75); font-variant-numeric:tabular-nums; letter-spacing:.5px; }' +
      '#nap { display:flex; align-items:center; gap:5px; flex-shrink:0; }' +
      '#nap span { font-size:.6rem; font-weight:700; letter-spacing:.6px; text-transform:uppercase; color:rgba(255,255,255,.6); }' +
      '#nap select { background:rgba(0,0,0,.2); border:1px solid rgba(255,255,255,.3); color:#fff; font-size:.7rem; font-weight:600; padding:2px 6px; border-radius:4px; cursor:pointer; outline:none; max-width:140px; }' +
      '#nap select option { background:#050d1a; color:rgba(255,255,255,.85); }' +
      '#body { flex:1; overflow-y:auto; padding:20px 24px; font-size:.9rem; line-height:1.65; }' +
      '#body h3 { font-size:.74rem; font-weight:700; letter-spacing:1px; text-transform:uppercase; color:#29B5E8; margin:18px 0 8px; }' +
      '#body h3:first-child { margin-top:0; }' +
      '#body p { margin-bottom:10px; color:rgba(255,255,255,.75); }' +
      '#body ul { padding-left:18px; margin-bottom:10px; }' +
      '#body li { margin-bottom:6px; color:rgba(255,255,255,.75); }' +
      '#body strong { color:#fff; }' +
      '#empty { color:rgba(255,255,255,.3); font-style:italic; text-align:center; margin-top:60px; }' +
      '#ftr { padding:7px 20px; border-top:1px solid rgba(41,181,232,.15); font-size:.7rem; color:rgba(255,255,255,.28); flex-shrink:0; }' +
      '</style></head><body>' +
      '<div id="hdr"><span id="cat"></span><span id="ttl">Waiting\u2026</span><span id="nap"><span>Notes</span><select id="napsel" aria-label="Whose notes to use"></select></span><span id="clk"></span></div>' +
      '<div id="body"><div id="empty">Navigate to a slide to load notes.</div></div>' +
      '<div id="ftr">Snowflake Interactive TDD \u00b7 Speaker Notes \u00b7 Press S on the main window to open/focus</div>' +
      '<script>var K="tdd-speaker-state";var AK="tdd-notes-author";' +
      'function paint(s){' +
        'var sel=document.getElementById("napsel");' +
        'var list=s.authors||[];' +
        'var want=(list.map(function(a){return a.id+"|"+a.name;}).join(",")); ' +
        'if(sel.getAttribute("data-sig")!==want){' +
          'sel.innerHTML="";' +
          'list.forEach(function(a){var o=document.createElement("option");o.value=a.id;o.textContent=a.name;sel.appendChild(o);});' +
          'sel.setAttribute("data-sig",want);' +
        '}' +
        'document.getElementById("nap").style.display=list.length?"flex":"none";' +
        'if(s.author&&sel.value!==s.author)sel.value=s.author;' +
      '}' +
      'function upd(s){' +
        'document.getElementById("ttl").textContent=s.title||"";' +
        'document.getElementById("cat").textContent=s.category||"";' +
        'paint(s);' +
        'var b=document.getElementById("body");' +
        'b.innerHTML=s.notes&&s.notes.trim()?s.notes:"<div id=\\"empty\\">No notes for this page.</div>";' +
        'b.scrollTop=0;' +
      '}' +
      // Writing AK fires a storage event in the main window, which re-applies
      // the selection and republishes state back to us.
      'document.getElementById("napsel").addEventListener("change",function(){try{localStorage.setItem(AK,this.value);}catch(e){}});' +
      'try{var r=localStorage.getItem(K);if(r)upd(JSON.parse(r));}catch(e){}' +
      'window.addEventListener("storage",function(e){if(e.key===K&&e.newValue){try{upd(JSON.parse(e.newValue));}catch(x){}}});' +
      'function tick(){var n=new Date();document.getElementById("clk").textContent=[n.getHours(),n.getMinutes(),n.getSeconds()].map(function(v){return v.toString().padStart(2,"0");}).join(":");}' +
      'tick();setInterval(tick,1000);' +
      'window.tddSpeakerReady=true;' +
      '<\/script></body></html>';
  }

  function openSpeaker() {
    publishState();
    var win = window.open('', 'tdd-speaker', 'width=820,height=640,menubar=no,toolbar=no,location=no,status=no');
    if (!win) { return; } // popup blocked
    if (!win.tddSpeakerReady) {
      win.document.open();
      win.document.write(speakerWindowHTML());
      win.document.close();
      // Re-publish after a tick so the window's storage listener is ready
      setTimeout(publishState, 120);
    } else {
      win.focus();
    }
  }

  // Publish on every page load so the open speaker window stays in sync
  document.addEventListener('DOMContentLoaded', publishState);

  window.__speakerOpen = openSpeaker;
  window.__speakerPublish = publishState;
})();

// ── Notes author picker (notes/*.js) ────────────────────────
// Lets the presenter choose whose talk-track notes to use.
//
// Discovery is manifest-free: the notes/ directory is listed by the web
// server (nginx `autoindex on`, or python http.server locally), and every
// notes/<id>.js found there self-declares its own id and display name via
// window.TDD_NOTES_REGISTER(). Drop a file in the folder and it appears.
//
// Selection persists in localStorage and applies across page navigation.
// Both the notes panel and Speaker View read window.PAGE_NOTES, so
// swapping that single global covers both.
//
// Degrades quietly: if the directory listing is unavailable (opened over
// file://, or autoindex disabled) no picker is shown and every page keeps
// its own built-in notes.
(function() {
  var STORE_KEY = 'tdd-notes-author';
  var BUILTIN = 'builtin';

  var inPages = location.pathname.includes('/pages/');
  var base = (inPages ? '../' : './') + 'notes/';

  var authors = [];   // [{ id, name, notes }]

  // Notes files call this as they load.
  window.TDD_NOTES_REGISTER = function(entry) {
    if (!entry || !entry.id) return;
    authors.push({
      id: entry.id,
      name: entry.name || entry.id,
      notes: entry.notes || {}
    });
  };

  function pageSlug() {
    var file = location.pathname.split('/').pop() || '';
    return file.replace(/\.html$/i, '') || 'index';
  }

  // Stash the page's own notes before anything overrides them, so
  // switching back to "Built-in" can always restore the original.
  window.PAGE_NOTES_DEFAULT = window.PAGE_NOTES || '';

  function getSelection() {
    try { return localStorage.getItem(STORE_KEY) || BUILTIN; }
    catch (e) { return BUILTIN; }
  }
  function setSelection(id) {
    try { localStorage.setItem(STORE_KEY, id); } catch (e) {}
  }

  function findAuthor(id) {
    for (var i = 0; i < authors.length; i++) {
      if (authors[i].id === id) return authors[i];
    }
    return null;
  }

  // Resolve and apply notes for the given author, falling back to the
  // page's built-in notes when that author has nothing for this page.
  function applyNotes(authorId) {
    var notes = null;
    var author = authorId !== BUILTIN ? findAuthor(authorId) : null;
    if (author) {
      var candidate = author.notes[pageSlug()];
      if (candidate && String(candidate).trim()) notes = candidate;
    }

    window.PAGE_NOTES = notes || window.PAGE_NOTES_DEFAULT;
    window.__notesAuthor = authorId;
    window.__notesIsFallback = (authorId !== BUILTIN && !notes);

    syncPickerUI(authorId);
    if (window.__speakerPublish) window.__speakerPublish();
    if (window.__notesRefresh) window.__notesRefresh();
  }

  function selectAuthor(authorId) {
    setSelection(authorId);
    applyNotes(authorId);
  }

  // Re-resolve notes against the current author. The i18n layer calls this
  // after swapping PAGE_NOTES_DEFAULT to a translation, so a selected
  // author keeps priority over the translated built-in notes.
  window.__notesReapply = function() {
    applyNotes(getSelection());
  };

  // ── Picker UI (lives in the notes panel header) ─────────────
  function buildPicker() {
    var slot = document.getElementById('notes-picker-slot');
    if (!slot) return getSelection();

    var current = getSelection();
    // Selection may point at a file that has since been removed.
    if (current !== BUILTIN && !findAuthor(current)) current = BUILTIN;

    slot.innerHTML = '';
    var wrap = document.createElement('span');
    wrap.id = 'notes-author-picker';

    var label = document.createElement('span');
    label.className = 'nap-label';
    label.textContent = 'Notes';

    var select = document.createElement('select');
    select.setAttribute('aria-label', 'Whose notes to use');

    var opts = [{ id: BUILTIN, name: 'Built-in' }].concat(authors);
    opts.forEach(function(a) {
      var o = document.createElement('option');
      o.value = a.id;
      o.textContent = a.name;
      if (a.id === current) o.selected = true;
      select.appendChild(o);
    });

    select.addEventListener('change', function() { selectAuthor(select.value); });

    wrap.appendChild(label);
    wrap.appendChild(select);
    slot.appendChild(wrap);

    return current;
  }

  // Keep the panel's select in sync when the choice changes elsewhere
  // (e.g. from the external Speaker View window).
  function syncPickerUI(authorId) {
    var select = document.querySelector('#notes-author-picker select');
    if (select && select.value !== authorId) select.value = authorId;
  }

  function whenReady(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  function finish() {
    authors.sort(function(a, b) { return a.name.localeCompare(b.name); });

    // Expose the roster so the Speaker View window can render its own picker.
    window.__notesAuthorList = [{ id: BUILTIN, name: 'Built-in' }].concat(
      authors.map(function(a) { return { id: a.id, name: a.name }; })
    );

    whenReady(function() {
      var current = authors.length ? buildPicker() : getSelection();
      selectAuthor(authors.length ? current : BUILTIN);
    });
  }

  // The external Speaker View window changes the selection by writing to
  // localStorage; storage events only fire in *other* windows, so this
  // picks up its changes without looping back on our own writes.
  window.addEventListener('storage', function(e) {
    if (e.key !== STORE_KEY || !e.newValue) return;
    if (e.newValue === window.__notesAuthor) return;
    applyNotes(e.newValue);
  });

  // Parse an autoindex page for notes/<id>.js filenames.
  function parseListing(html) {
    var doc = new DOMParser().parseFromString(html, 'text/html');
    var hrefs = [].map.call(doc.querySelectorAll('a[href]'), function(a) {
      return a.getAttribute('href');
    });
    var files = [];
    hrefs.forEach(function(h) {
      var name = (h || '').split('/').pop().split('?')[0];
      if (!/\.js$/i.test(name)) return;
      if (name === 'authors.js') return;            // legacy manifest, ignore
      if (name === 'notes_template.js') return;     // template, not a note set
      if (files.indexOf(name) === -1) files.push(name);
    });
    return files;
  }

  function loadAll(files) {
    var pending = files.length;
    if (!pending) { finish(); return; }
    files.forEach(function(file) {
      var s = document.createElement('script');
      s.src = base + file;
      s.onload = s.onerror = function() {
        if (--pending === 0) finish();
      };
      document.head.appendChild(s);
    });
  }

  fetch(base)
    .then(function(r) { return r.ok ? r.text() : Promise.reject(); })
    .then(function(html) { loadAll(parseListing(html)); })
    .catch(function() { finish(); });   // no listing: built-in notes only
})();

// ── Language / i18n loader ─────────────────────────────────
// Mirrors the notes loader: drop a languages/<code>.js file in the folder
// and it self-registers via window.TDD_LANG_REGISTER(). Discovery relies on
// the nginx autoindex listing for /languages/ — no manifest to maintain.
//
// Only elements carrying data-i18n / data-i18n-html are ever touched, so
// code panels (.code-kw, .code-fn, ...) can never be altered by a
// translation. Untranslated keys are left as-is, so a partial language
// file yields a partially translated page rather than blanks.
(function() {
  var STORE_KEY = 'tdd-lang';
  var EN = 'en';
  var inPages = location.pathname.includes('/pages/');
  var base = (inPages ? '../' : './') + 'languages/';
  var langs = [];   // [{ code, name, global, pages, notes }]

  var style = document.createElement('style');
  style.textContent = `
    #lang-picker { position: relative; display: flex; align-items: center; flex-shrink: 0; }

    /* Globe button — icon only, mirrors the language control on snowflake.com */
    #lang-globe {
      display: flex; align-items: center; justify-content: center;
      width: 28px; height: 28px; padding: 0;
      background: none; border: none; border-radius: 50%;
      color: rgba(255,255,255,.55);
      cursor: pointer;
      transition: color .15s, background .15s;
    }
    #lang-globe:hover, #lang-globe[aria-expanded="true"] {
      color: #29B5E8;
      background: rgba(41,181,232,.12);
    }
    /* No ring on mouse click, but keep one for keyboard users. */
    #lang-globe:focus { outline: none; }
    #lang-globe:focus-visible { outline: 2px solid #29B5E8; outline-offset: 2px; }
    #lang-menu button:focus { outline: none; }
    #lang-menu button:focus-visible { outline: 2px solid #29B5E8; outline-offset: -2px; }
    #lang-globe svg { width: 18px; height: 18px; display: block; }

    /* Dropdown panel — light surface like the website's language menu */
    #lang-menu {
      position: absolute; top: calc(100% + 8px); right: 0;
      min-width: 180px; padding: 14px 0 8px;
      background: #fff;
      border-radius: 4px;
      box-shadow: 0 6px 28px rgba(0,0,0,.35);
      z-index: 950;
      display: none;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
    }
    #lang-menu.open { display: block; }
    #lang-menu .lm-title {
      padding: 0 20px 10px;
      font-size: .62rem; font-weight: 700; letter-spacing: 1.2px;
      text-transform: uppercase; color: #29B5E8;
    }
    #lang-menu button {
      display: flex; align-items: center; gap: 8px;
      width: 100%; padding: 7px 20px 7px 12px;
      background: none; border: none;
      font-size: .82rem; color: #1a2b3c; text-align: left;
      cursor: pointer;
    }
    #lang-menu button:hover { background: rgba(41,181,232,.1); }
    #lang-menu .lm-check {
      width: 14px; flex-shrink: 0;
      color: #1a2b3c; font-size: .8rem; line-height: 1;
    }
    #lang-picker.lp-floating {
      position: fixed; top: 8px; right: 12px; z-index: 900;
    }
  `;
  (document.head || document.documentElement).appendChild(style);

  window.TDD_LANG_REGISTER = function(entry) {
    if (!entry || !entry.code) return;
    // Merge, because a split layout's per-page file may register before
    // _global.js arrives — script load order is not guaranteed.
    var lang = findLang(entry.code);
    if (!lang) {
      lang = { code: entry.code, name: entry.code, global: {}, pages: {},
               blocks: {}, notes: {} };
      langs.push(lang);
    }
    if (entry.name) lang.name = entry.name;
    ['global', 'pages', 'blocks', 'notes'].forEach(function(k) {
      var src = entry[k];
      if (!src) return;
      for (var key in src) {
        if (Object.prototype.hasOwnProperty.call(src, key)) lang[k][key] = src[key];
      }
    });
  };

  function pageSlug() {
    var file = location.pathname.split('/').pop() || '';
    return file.replace(/\.html$/i, '') || 'index';
  }

  // The notes loader already stashed the page's own notes; keep the English
  // original so switching back out of a translation can restore it.
  var NOTES_EN = window.PAGE_NOTES_DEFAULT || window.PAGE_NOTES || '';

  function getSelection() {
    try { return localStorage.getItem(STORE_KEY) || EN; }
    catch (e) { return EN; }
  }
  function setSelection(code) {
    try { localStorage.setItem(STORE_KEY, code); } catch (e) {}
  }

  function findLang(code) {
    for (var i = 0; i < langs.length; i++) {
      if (langs[i].code === code) return langs[i];
    }
    return null;
  }

  // Page-specific keys win over shared chrome keys.
  function lookup(lang, key) {
    var page = lang.pages[pageSlug()];
    if (page && page[key] != null) return page[key];
    if (lang.global[key] != null) return lang.global[key];
    return null;
  }

  // Shared chrome lives in each page's HTML rather than being injected, so
  // tag it centrally here instead of editing 79 files. Matching is limited
  // to a fixed dictionary of known chrome strings inside narrow selectors —
  // page content and code panels are never inspected.
  var CHROME = {
    '\u2190 Back': 'back',
    'Generally Available': 'tag.ga',
    'Public Preview': 'tag.pupr',
    'Private Preview': 'tag.prpr',
    'Business Critical': 'tag.bc',
    'Enterprise': 'tag.ent',
    '\u00a9 2026 Snowflake Inc. All Rights Reserved': 'footer.copyright'
  };

  function tagGlobalChrome() {
    var sel = '.btn-back, .nav-tag, .arch-footer';
    [].forEach.call(document.querySelectorAll(sel), function(el) {
      if (el.hasAttribute('data-i18n')) return;
      var key = CHROME[el.textContent.trim()];
      if (key) el.setAttribute('data-i18n', key);
    });
  }

  function translate(lang) {
    // textContent form — safe default.
    [].forEach.call(document.querySelectorAll('[data-i18n]'), function(el) {
      var val = lookup(lang, el.getAttribute('data-i18n'));
      if (val == null) return;
      if (el.dataset.i18nEnText === undefined) el.dataset.i18nEnText = el.textContent;
      el.textContent = val;
    });
    // innerHTML form — only for blocks with inline markup (e.g. <br>).
    // Values come from the language file, never from user input.
    [].forEach.call(document.querySelectorAll('[data-i18n-html]'), function(el) {
      var val = lookup(lang, el.getAttribute('data-i18n-html'));
      if (val == null) return;
      if (el.dataset.i18nEnHtml === undefined) el.dataset.i18nEnHtml = el.innerHTML;
      el.innerHTML = val;
    });
  }

  function revert() {
    [].forEach.call(document.querySelectorAll('[data-i18n-en-text]'), function(el) {
      el.textContent = el.dataset.i18nEnText;
    });
    [].forEach.call(document.querySelectorAll('[data-i18n-en-html]'), function(el) {
      el.innerHTML = el.dataset.i18nEnHtml;
    });
  }

  function applyLang(code) {
    var lang = code !== EN ? findLang(code) : null;

    tagGlobalChrome();

    // Always revert first so switching between two languages can't leave
    // strings from the previous one behind.
    revert();
    if (lang) translate(lang);

    document.documentElement.setAttribute('lang', lang ? lang.code : EN);
    window.__lang = lang ? lang.code : EN;

    // Translate the *built-in* notes only. The notes loader resolves
    // "author notes || PAGE_NOTES_DEFAULT", so a selected author keeps
    // winning without any special-casing here.
    var translated = lang ? lang.notes[pageSlug()] : null;
    window.PAGE_NOTES_DEFAULT = (translated && String(translated).trim())
      ? translated
      : NOTES_EN;

    syncPickerUI(window.__lang);

    if (window.__notesReapply) {
      window.__notesReapply();
    } else {
      // Notes loader hasn't settled yet; it will pick up the new default.
      window.PAGE_NOTES = window.PAGE_NOTES_DEFAULT;
      if (window.__speakerPublish) window.__speakerPublish();
      if (window.__notesRefresh) window.__notesRefresh();
    }

    // Let page scripts re-render any JS-built content they own.
    notifyChange();
  }

  function selectLang(code) {
    setSelection(code);
    applyLang(code);
  }

  // ── Public API for page scripts ────────────────────────────────
  // Some pages build content in JS and inject it as innerHTML (interactive
  // explain panels, for example), so there is no element for data-i18n to
  // target. Those pages ask for a translated block by key and re-render
  // themselves whenever the language changes.
  var changeHandlers = [];

  window.TDD_I18N = {
    // Current language code ('en' when untranslated).
    lang: function() { return window.__lang || EN; },

    // Translated HTML block for this page, or null to use the page's own.
    block: function(key) {
      var lang = findLang(window.__lang);
      if (!lang) return null;
      var page = lang.blocks[pageSlug()];
      var val = page && page[key];
      return (val != null && String(val).trim()) ? val : null;
    },

    // Register a callback fired after every language change.
    onChange: function(fn) {
      if (typeof fn === 'function') changeHandlers.push(fn);
    }
  };

  function notifyChange() {
    (changeHandlers || []).forEach(function(fn) {
      try { fn(window.__lang || EN); } catch (e) {}
    });
  }

  function syncPickerUI(code) {
    var menu = document.getElementById('lang-menu');
    if (!menu) return;
    [].forEach.call(menu.querySelectorAll('button'), function(b) {
      var on = b.dataset.code === code;
      b.querySelector('.lm-check').textContent = on ? '\u2713' : '';
      b.setAttribute('aria-checked', on ? 'true' : 'false');
    });
  }

  // ── Picker UI (globe + dropdown, nav bar) ─────────────────────
  // Mirrors the language control on snowflake.com: an icon-only globe
  // that opens a light panel listing the available languages, with a
  // checkmark against the active one.
  var GLOBE_SVG =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" ' +
    'stroke-linecap="round" aria-hidden="true">' +
    '<circle cx="12" cy="12" r="9"></circle>' +
    '<path d="M3 12h18"></path>' +
    '<path d="M12 3c2.5 2.4 3.9 5.6 3.9 9s-1.4 6.6-3.9 9c-2.5-2.4-3.9-5.6-3.9-9S9.5 5.4 12 3z"></path>' +
    '</svg>';

  function closeMenu() {
    var menu = document.getElementById('lang-menu');
    var btn = document.getElementById('lang-globe');
    if (menu) menu.classList.remove('open');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  }

  function buildPicker(current) {
    if (document.getElementById('lang-picker')) return;

    var wrap = document.createElement('div');
    wrap.id = 'lang-picker';

    var btn = document.createElement('button');
    btn.id = 'lang-globe';
    btn.type = 'button';
    btn.innerHTML = GLOBE_SVG;
    btn.setAttribute('aria-label', 'Select language');
    btn.setAttribute('aria-haspopup', 'true');
    btn.setAttribute('aria-expanded', 'false');

    var menu = document.createElement('div');
    menu.id = 'lang-menu';
    menu.setAttribute('role', 'menu');

    var title = document.createElement('div');
    title.className = 'lm-title';
    title.textContent = 'Languages';
    menu.appendChild(title);

    [{ code: EN, name: 'English' }].concat(langs).forEach(function(l) {
      var item = document.createElement('button');
      item.type = 'button';
      item.dataset.code = l.code;
      item.setAttribute('role', 'menuitemradio');

      var check = document.createElement('span');
      check.className = 'lm-check';
      check.textContent = l.code === current ? '\u2713' : '';

      var label = document.createElement('span');
      label.textContent = l.name;

      item.appendChild(check);
      item.appendChild(label);
      item.addEventListener('click', function() {
        selectLang(l.code);
        closeMenu();
      });
      menu.appendChild(item);
    });

    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      var open = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.addEventListener('click', function(e) { e.stopPropagation(); });

    document.addEventListener('click', closeMenu);
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeMenu();
    });

    wrap.appendChild(btn);
    wrap.appendChild(menu);

    var navBar = document.querySelector('.nav-bar');
    if (navBar) {
      var navTags = navBar.querySelector('.nav-tags');
      // .nav-tags owns margin-left:auto, so sit just before it.
      if (navTags) navBar.insertBefore(wrap, navTags);
      else navBar.appendChild(wrap);
    } else {
      // index.html has no nav bar — use a fixed control instead.
      wrap.classList.add('lp-floating');
      document.body.appendChild(wrap);
    }

    syncPickerUI(current);
  }

  function whenReady(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  function finish() {
    langs.sort(function(a, b) { return a.name.localeCompare(b.name); });

    window.__langList = [{ code: EN, name: 'English' }].concat(
      langs.map(function(l) { return { code: l.code, name: l.name }; })
    );

    whenReady(function() {
      var current = getSelection();
      // Stored choice may point at a language file that's since been removed.
      if (current !== EN && !findLang(current)) current = EN;
      if (langs.length) buildPicker(current);
      applyLang(current);
    });
  }

  // Another window (e.g. a second deck tab) changed the language.
  // storage events only fire in *other* windows, so this can't loop.
  window.addEventListener('storage', function(e) {
    if (e.key !== STORE_KEY || !e.newValue) return;
    if (e.newValue === window.__lang) return;
    applyLang(e.newValue);
  });

  // Per-page registration. Split layouts call this from
  // languages/<code>/<slug>.js so a page view only ever downloads its own
  // slice, keeping the cost of a page load independent of how much of the
  // deck has been translated.
  window.TDD_LANG_PAGE = function(entry) {
    if (!entry || !entry.code || !entry.slug) return;
    var lang = findLang(entry.code);
    if (!lang) {
      lang = { code: entry.code, name: entry.code, global: {}, pages: {},
               blocks: {}, notes: {} };
      langs.push(lang);
    }
    if (entry.page) lang.pages[entry.slug] = entry.page;
    if (entry.blocks) lang.blocks[entry.slug] = entry.blocks;
    if (entry.notes) lang.notes[entry.slug] = entry.notes;
  };

  // Returns { files: ['es.js'], dirs: ['es'] } from an autoindex listing.
  function parseListing(html) {
    var doc = new DOMParser().parseFromString(html, 'text/html');
    var files = [], dirs = [];
    [].forEach.call(doc.querySelectorAll('a[href]'), function(a) {
      var h = a.getAttribute('href') || '';
      var isDir = /\/$/.test(h);
      var name = h.replace(/\/$/, '').split('/').pop().split('?')[0];
      if (!name || name === '..' || name.charAt(0) === '.') return;
      if (isDir) {
        if (dirs.indexOf(name) === -1) dirs.push(name);
      } else {
        if (!/\.js$/i.test(name)) return;
        if (name === 'language_template.js') return;   // template, not a language
        if (files.indexOf(name) === -1) files.push(name);
      }
    });
    return { files: files, dirs: dirs };
  }

  function loadScripts(urls, done) {
    var pending = urls.length;
    if (!pending) { done(); return; }
    urls.forEach(function(url) {
      var s = document.createElement('script');
      s.src = url;
      // onerror fires for a missing per-page file, which is expected for any
      // page that has not been translated yet — treat it as "nothing to add".
      s.onload = s.onerror = function() {
        if (--pending === 0) done();
      };
      document.head.appendChild(s);
    });
  }

  function loadAll(listing) {
    var urls = [];
    var slug = pageSlug();
    listing.files.forEach(function(f) { urls.push(base + f); });
    listing.dirs.forEach(function(d) {
      urls.push(base + d + '/_global.js');       // language name + chrome
      urls.push(base + d + '/' + slug + '.js');  // this page only
    });
    loadScripts(urls, finish);
  }

  fetch(base)
    .then(function(r) { return r.ok ? r.text() : Promise.reject(); })
    .then(function(html) { loadAll(parseListing(html)); })
    .catch(function() { finish(); });   // no listing: English only
})();

// ── Global keyboard navigation ─────────────────────────────
document.addEventListener('keydown', function(e) {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

  var notesOpen = document.getElementById('notes-panel') &&
    document.getElementById('notes-panel').classList.contains('open');
  var pagesOpen = document.getElementById('pages-panel') &&
    document.getElementById('pages-panel').classList.contains('open');

  // N toggles notes, P toggles pages, S opens speaker window
  if (e.key === 'n' || e.key === 'N') {
    if (window.__notesToggle) window.__notesToggle();
    return;
  }
  if (e.key === 's' || e.key === 'S') {
    if (window.__speakerOpen) window.__speakerOpen();
    return;
  }
  if (e.key === 'p' || e.key === 'P') {
    if (window.__pagesToggle) window.__pagesToggle();
    return;
  }

  // Escape closes whichever panel is open
  if (e.key === 'Escape' && notesOpen) {
    document.getElementById('notes-panel').classList.remove('open');
    return;
  }
  if (e.key === 'Escape' && pagesOpen) {
    if (window.__pagesClose) window.__pagesClose();
    return;
  }

  // Suppress nav shortcuts when any modal is open
  var anyModalOpen =
    notesOpen ||
    pagesOpen ||
    document.querySelector('.cag-panel-overlay.open') ||
    document.querySelector('.caf-panel-overlay.open') ||
    document.querySelector('.sp-panel-overlay.open') ||
    document.querySelector('.mlo-panel-overlay.open') ||
    document.querySelector('.dai-panel-overlay.open') ||
    document.querySelector('#cai-panel.open') ||
    document.querySelector('.code-modal.open');
  if (anyModalOpen) return;

  if (e.key === 'ArrowLeft') {
    history.back();
  }

  var inPages = location.pathname.includes('/pages/');

  // Home (index)
  if (e.key === 'h' || e.key === 'H') {
    location.href = inPages ? '../index.html' : 'index.html';
  }
  // Core category hubs
  if (e.key === 'm' || e.key === 'M') {
    location.href = inPages ? './snowflake-ml.html' : './pages/snowflake-ml.html';
  }
  if (e.key === 'a' || e.key === 'A') {
    location.href = inPages ? './cortex-ai.html' : './pages/cortex-ai.html';
  }
  if (e.key === 'g' || e.key === 'G') {
    location.href = inPages ? './horizon.html' : './pages/horizon.html';
  }
  if (e.key === 'e' || e.key === 'E') {
    location.href = inPages ? './data-engineering.html' : './pages/data-engineering.html';
  }
  if (e.key === 'l' || e.key === 'L') {
    location.href = inPages ? './data-lakehouse.html' : './pages/data-lakehouse.html';
  }
  if (e.key === 'c' || e.key === 'C') {
    location.href = inPages ? './compute.html' : './pages/compute.html';
  }
  // WAF
  if (e.key === 'w' || e.key === 'W') {
    location.href = inPages ? './well-architected-framework.html' : './pages/well-architected-framework.html';
  }
});

// ── Dynamic back button ─────────────────────────────────────
// Use history.back() so the back button always returns to wherever
// the user actually navigated from, not a hard-coded href.
// Falls back to the href only when there is no browser history
// (e.g. page was opened directly via URL).
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.btn-back').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      if (history.length > 1) {
        e.preventDefault();
        history.back();
      }
    });
  });
});
