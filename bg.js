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
    #notes-key-hint {
      font-size: .72rem;
      color: rgba(255,255,255,.6);
      background: rgba(0,0,0,.2);
      padding: 2px 7px;
      border-radius: 4px;
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
      '<span id="notes-key-hint">N to toggle</span>' +
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
  }

  function closeNotes() {
    panel.classList.remove('open');
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
})();

// ── Global keyboard navigation ─────────────────────────────
document.addEventListener('keydown', function(e) {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

  var notesOpen = document.getElementById('notes-panel') &&
    document.getElementById('notes-panel').classList.contains('open');

  // N toggles notes (works regardless of other panels)
  if (e.key === 'n' || e.key === 'N') {
    if (window.__notesToggle) window.__notesToggle();
    return;
  }

  // Escape closes notes if open
  if (e.key === 'Escape' && notesOpen) {
    document.getElementById('notes-panel').classList.remove('open');
    return;
  }

  // Suppress nav shortcuts when any modal is open
  var anyModalOpen =
    notesOpen ||
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
  if (e.key === 'h' || e.key === 'H') {
    var depth = location.pathname.includes('/pages/') ? '../index.html' : 'index.html';
    location.href = depth;
  }
  if (e.key === 'w' || e.key === 'W') {
    var wafPath = location.pathname.includes('/pages/') ? './well-architected-framework.html' : './pages/well-architected-framework.html';
    location.href = wafPath;
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
