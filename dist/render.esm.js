function d(c,n){let e=[...document.querySelectorAll(`[data-render=${c}]`)];for(let t of e){let a=t.dataset;fetch(n,{method:"get"}).then(r=>r.text()).then(r=>{let i=Array.from(r.matchAll(/{{(.*?)}}/g)).map(o=>o[1]);for(let o of i)r=r.replace(`{{${o}}}`,a[o]||"");t.innerHTML=r})}}function s(c){return new Promise(n=>{let e=document.querySelector(`[data-render="${c}"]`);if(e.innerHTML)return n(e);let t=new MutationObserver(()=>{e.innerHTML&&(n(e),t.disconnect())});t.observe(document.body,{childList:!0,subtree:!0})})}var l={renderHtml:d,waitForRender:s};export{l as default};
