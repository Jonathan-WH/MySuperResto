import{d as a,e as c}from"./chunk-5BQFGZNH.js";import"./chunk-F7XBNY6P.js";import{a as i}from"./chunk-CL2FVWQJ.js";import{l as r,m as s}from"./chunk-K5M52WWL.js";import{e as n}from"./chunk-AGYSVWMR.js";var h=()=>{let e=window;e.addEventListener("statusTap",()=>{r(()=>{let m=e.innerWidth,d=e.innerHeight,o=document.elementFromPoint(m/2,d/2);if(!o)return;let t=a(o);t&&new Promise(l=>i(t,l)).then(()=>{s(()=>n(void 0,null,function*(){t.style.setProperty("--overflow","hidden"),yield c(t,300),t.style.removeProperty("--overflow")}))})})})};export{h as startStatusTap};