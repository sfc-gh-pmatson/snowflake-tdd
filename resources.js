// resources.js — renders .resource-bar from page-defined window.RESOURCE_CONFIG
// and manages the Code modal lifecycle.
//
// Per-page setup:
//   1. Define window.RESOURCE_CONFIG before sourcing this file:
//        <script>
//          window.RESOURCE_CONFIG = {
//            docs:  'https://docs.snowflake.com/...',  // URL = show button
//            code:  true,                              // true = show Code button
//            guide: 'https://quickstarts.snowflake.com/...',
//            blog:  null,                              // null = hide button
//          };
//        </script>
//        <script src="../resources.js"></script>
//
//   2. Add <div class="resource-bar"></div> as the last child of .sf-slide.
//
//   3. For the Code button: add a hidden <div id="code-modal-content"> anywhere
//      in the page body with two direct children:
//        <div class="code-modal-code"><pre class="code-block"><code>...</code></pre></div>
//        <div class="code-modal-explain">...</div>
//      resources.js moves these into the modal automatically.

(function () {
  // Button definitions — fixed order: docs, code, guide, blog
  var DEFS = [
    { key: 'docs',  label: 'Docs',  icon: 'sf-icon-resource-docs'  },
    { key: 'code',  label: 'Code',  icon: 'sf-icon-resource-code'  },
    { key: 'guide', label: 'Guide', icon: 'sf-icon-resource-guide' },
    { key: 'blog',  label: 'Blog',  icon: 'sf-icon-resource-blog'  },
  ];

  document.addEventListener('DOMContentLoaded', function () {
    var config = window.RESOURCE_CONFIG || {};
    var bar = document.querySelector('.resource-bar');
    if (!bar) return;

    DEFS.forEach(function (def) {
      var val = config[def.key];
      if (!val) return;

      var inner =
        '<span class="rb-circle">' +
          '<span class="sf-img rb-icon ' + def.icon + '"></span>' +
        '</span>' +
        '<span class="rb-label">' + def.label + '</span>';

      if (def.key === 'code' && val !== true && typeof val === 'string' && val.startsWith('http')) {
        // code is a URL — render as link, not modal button
        var a = document.createElement('a');
        a.href = val;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.className = 'resource-btn';
        a.setAttribute('aria-label', 'View code / repo');
        a.innerHTML = inner;
        bar.appendChild(a);
      } else if (def.key === 'code') {
        var btn = document.createElement('button');
        btn.className = 'resource-btn';
        btn.setAttribute('aria-label', 'View code example');
        btn.innerHTML = inner;
        btn.addEventListener('click', openCodeModal);
        bar.appendChild(btn);
      } else {
        var a = document.createElement('a');
        a.href = val;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.className = 'resource-btn';
        a.setAttribute('aria-label', def.label);
        a.innerHTML = inner;
        bar.appendChild(a);
      }
    });

    // Build modal structure if page has code content
    buildCodeModal();
  });

  // ── Modal ──────────────────────────────────────────────────────────────────

  function buildCodeModal() {
    var content = document.getElementById('code-modal-content');
    if (!content) return;

    var overlay = document.createElement('div');
    overlay.className = 'code-modal-overlay';
    overlay.id = 'code-modal-overlay';
    overlay.innerHTML =
      '<div class="code-modal" role="dialog" aria-modal="true">' +
        '<div class="code-modal-header">' +
          '<span class="code-modal-title">Code Example</span>' +
          '<button class="code-modal-close" id="code-modal-close" aria-label="Close">&times;</button>' +
        '</div>' +
        '<div class="code-modal-body" id="code-modal-body"></div>' +
      '</div>';

    document.body.appendChild(overlay);

    // Move page-authored content into modal body
    var body = document.getElementById('code-modal-body');
    while (content.firstChild) {
      body.appendChild(content.firstChild);
    }

    // Close handlers
    document.getElementById('code-modal-close')
      .addEventListener('click', closeCodeModal);

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeCodeModal();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeCodeModal();
    });
  }

  function openCodeModal() {
    var o = document.getElementById('code-modal-overlay');
    if (o) o.classList.add('open');
  }

  function closeCodeModal() {
    var o = document.getElementById('code-modal-overlay');
    if (o) o.classList.remove('open');
  }

})();
