var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire7bc7;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequire7bc7=o);var r=o("iQIUW");const i=document.querySelector("form.form");function l(e,t){let n={position:e,delay:t};return new Promise(((e,o)=>{setTimeout((()=>{Math.random()>.3?e(n):o(n)}),t)}))}i.addEventListener("submit",(function(e){e.preventDefault();let t=Number(i.elements.amount.value),n=Number(i.elements.delay.value),o=Number(i.elements.step.value);for(let e=0;e<t;e++){l(e,n+o*e).then((({position:e,delay:t})=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{r.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)}))}}));
//# sourceMappingURL=03-promises.fe8b1a7d.js.map
