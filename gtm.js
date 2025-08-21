// Google Tag Manager (Head)
(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({"gtm.start": new Date().getTime(), event: "gtm.js"});
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != "dataLayer" ? "&l=" + l : "";
  j.async = true;
  j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
  f.parentNode.insertBefore(j, f);
  console.log("Google Tag Manager script loaded (Head part)");
})(window, document, "script", "dataLayer", "GTM-T6ZQ7DCB");

// Google Tag Manager (noscript)
var noscript = document.createElement("noscript");
noscript.innerHTML =
  '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T6ZQ7DCB" height="0" width="0" style="display:none;visibility:hidden"></iframe>';
document.body.appendChild(noscript);
console.log("Google Tag Manager noscript added (Body part)");
