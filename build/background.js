(()=>{"use strict";const r={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let e;const o=new Uint8Array(16);function t(){if(!e&&(e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!e))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return e(o)}const n=[];for(let r=0;r<256;++r)n.push((r+256).toString(16).slice(1));const s=function(e,o,s){if(r.randomUUID&&!o&&!e)return r.randomUUID();const a=(e=e||{}).random||(e.rng||t)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,o){s=s||0;for(let r=0;r<16;++r)o[s+r]=a[r];return o}return function(r,e=0){return(n[r[e+0]]+n[r[e+1]]+n[r[e+2]]+n[r[e+3]]+"-"+n[r[e+4]]+n[r[e+5]]+"-"+n[r[e+6]]+n[r[e+7]]+"-"+n[r[e+8]]+n[r[e+9]]+"-"+n[r[e+10]]+n[r[e+11]]+n[r[e+12]]+n[r[e+13]]+n[r[e+14]]+n[r[e+15]]).toLowerCase()}(a)};chrome.runtime.onMessage.addListener(((r,e,o)=>{if("get_current_tab_url"===r.message)try{chrome.tabs.query({active:!0,currentWindow:!0},(r=>{if(!r||!r.length)return console.log("Error: No active tab found"),void o({error:"Error: No active tab found"});const e=r[0].url;if(!e)throw new Error("tabs[0].url is undefined");const t=new URL(e);try{if("https:"!==t.protocol&&"http:"!==t.protocol)throw new Error(`Cannot set cookie for internal page: ${e}`)}catch(r){return console.log(`Error handling response: ${r}`),void o({error:r.message})}let n={url:e,domain:t.hostname};const a=new Date(Date.now()+15778476e3);chrome.cookies.get({url:e,name:"userId"},(r=>{let c;c=r?r.value:s(),n.userId=c,console.log(r),chrome.cookies.set({url:e,name:"userId",value:c,httpOnly:!0,expirationDate:Math.floor(a.getTime()/1e3),domain:t.hostname},(async r=>{chrome.runtime.lastError&&(o({error:chrome.runtime.lastError.message}),console.log(chrome.runtime.lastError.message)),o(n)}))}))}))}catch(r){console.log(`Error handling response: ${r}`),o({error:r.message})}return!0}))})();
//# sourceMappingURL=background.js.map