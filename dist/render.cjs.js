var d=Object.defineProperty;var f=r=>d(r,"__esModule",{value:!0});var l=(r,t)=>{f(r);for(var e in t)d(r,e,{get:t[e],enumerable:!0})};l(exports,{default:()=>m});function s(r,t){let e=[...document.querySelectorAll(`[data-render=${r}]`)];for(let o of e){let i=o.dataset;fetch(t,{method:"get"}).then(n=>n.text()).then(n=>{let u=Array.from(n.matchAll(/{{(.*?)}}/g)).map(c=>c[1]);for(let c of u)n=n.replace(`{{${c}}}`,i[c]||"");o.innerHTML=n})}}function a(r){return new Promise(t=>{let e=document.querySelector(`[data-render="${r}"]`);if(e.innerHTML)return t(e);let o=new MutationObserver(()=>{e.innerHTML&&(t(e),o.disconnect())});o.observe(document.body,{childList:!0,subtree:!0})})}var m={renderHtml:s,waitForRender:a};0&&(module.exports={});
