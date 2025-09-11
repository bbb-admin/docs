// content/support-whatsapp.js
(function () {
  const phone = "6281514231000";
  const baseText = "Hello bitbybit team, I need some assistance\n";
  const selectors = [
    ".topbar-cta-button",
    "[data-identifier='TopbarCtaButton']",
    "[data-testid='topbar-cta-button']",
    "#topbar-cta-button",
    "a[href*='api.whatsapp.com']",
  ];

  function makeHref() {
    const extra = window.location.href;
    return `https://api.whatsapp.com/send/?phone=${phone}&text=${encodeURIComponent(
      baseText + extra,
    )}`;
  }

  function findButtons() {
    const nodes = new Set();
    selectors.forEach((s) => {
      document.querySelectorAll(s).forEach((n) => nodes.add(n));
    });
    return Array.from(nodes);
  }

  function attachBehavior(el) {
    if (!el || el.__supportInjected) return;
    el.__supportInjected = true;

    function refreshHref() {
      if (el.tagName && el.tagName.toLowerCase() === "a") {
        el.setAttribute("href", makeHref());
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener noreferrer");
      }
    }

    refreshHref();

    el.addEventListener("click", () => {
      refreshHref();
    });
  }

  function updateAll() {
    const buttons = findButtons();
    if (!buttons.length) return;
    buttons.forEach(attachBehavior);
    buttons.forEach((el) => {
      if (el.tagName && el.tagName.toLowerCase() === "a") {
        el.setAttribute("href", makeHref());
      }
    });
  }

  (function patchHistory() {
    const _push = history.pushState;
    history.pushState = function () {
      const res = _push.apply(this, arguments);
      window.dispatchEvent(new Event("locationchange"));
      return res;
    };
    const _replace = history.replaceState;
    history.replaceState = function () {
      const res = _replace.apply(this, arguments);
      window.dispatchEvent(new Event("locationchange"));
      return res;
    };
    window.addEventListener("popstate", () =>
      window.dispatchEvent(new Event("locationchange")),
    );
  })();

  window.addEventListener("locationchange", () => setTimeout(updateAll, 50));

  const mo = new MutationObserver(() => updateAll());
  mo.observe(document.body, {childList: true, subtree: true});

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateAll);
  } else {
    updateAll();
  }
})();
