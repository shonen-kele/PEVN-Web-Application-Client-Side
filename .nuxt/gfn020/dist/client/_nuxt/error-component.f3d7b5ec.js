import{_ as l,o as m,c as g,n as E,g as f,u as s,d as n,a}from"./entry.00c971bc.js";const x={__name:"nuxt-error-page",props:{error:Object},setup(c){const{error:t}=c;(t.stack||"").split(`
`).splice(1).map(e=>({text:e.replace("webpack:/","").replace(".vue",".js").trim(),internal:e.includes("node_modules")&&!e.includes(".cache")||e.includes("internal")||e.includes("new Promise")})).map(e=>`<span class="stack${e.internal?" internal":""}">${e.text}</span>`).join(`
`);const r=Number(t.statusCode||500),o=r===404,u=t.statusMessage??(o?"Page Not Found":"Internal Server Error"),i=t.message||t.toString(),p=void 0,_=o?n(()=>a(()=>import("./error-404.f6a73f30.js"),["./error-404.f6a73f30.js","./entry.00c971bc.js","./entry.cfae151b.css","./error-404.0ae2a08a.css"],import.meta.url).then(e=>e.default||e)):n(()=>a(()=>import("./error-500.e34a6218.js"),["./error-500.e34a6218.js","./entry.00c971bc.js","./entry.cfae151b.css","./error-500.b721e678.css"],import.meta.url).then(e=>e.default||e));return(e,d)=>(m(),g(s(_),E(f({statusCode:s(r),statusMessage:s(u),description:s(i),stack:s(p)})),null,16))}},C=l(x,[["__file","C:/Users/kmba2/Coding/Projects in coding/Yessay/client/node_modules/nuxt/dist/app/components/nuxt-error-page.vue"]]);export{C as default};