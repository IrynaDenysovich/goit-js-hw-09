!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequire7bc7;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequire7bc7=o);var r=o("h6c0i"),i=document.querySelector("form.form");function a(e,n){var t={position:e,delay:n};return new Promise((function(e,o){setTimeout((function(){Math.random()>.3?e(t):o(t)}),n)}))}i.addEventListener("submit",(function(e){e.preventDefault();for(var n=Number(i.elements.amount.value),t=Number(i.elements.delay.value),o=Number(i.elements.step.value),u=0;u<n;u++){a(u+1,t+o*u).then((function(e){var n=e.position,t=e.delay;r.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;r.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}))}i.reset()}))}();
//# sourceMappingURL=03-promises.abe41f75.js.map
