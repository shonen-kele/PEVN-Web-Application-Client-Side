import{_ as A,l as E,r as h,w as F,m as M,p as N,e as d,f as _,i as l,j as o,h as w,F as y,q as S,o as u,k as m,c as V,u as p,s as j,v as q}from"./entry.00c971bc.js";import{u as J}from"./fetch.46c279e9.js";import{u as O}from"./argument.a4c74e9a.js";const P=c=>(j("data-v-bfbfb3b2"),c=c(),q(),c),Y=P(()=>w("h1",null,"The explore page",-1)),$={id:"argument-container"},L={__name:"explore",async setup(c){let i,C;const f=O(),I=E(),v=h(null),R=h(null),r=h([{id:1,arguments:[]},{id:2,arguments:[]},{id:3,arguments:[]},{id:4,arguments:[]}]);let k=0;for(let e=0;e<r.value.length;e++){const t=r.value[e];k+=t.arguments.length}const{data:T}=([i,C]=F(()=>J("/api/displayArguments",{method:"POST",body:{offset:k}},"$IRT4q0JbYJ")),i=await i,C(),i);let g=T.value.arguments;for(let e=0;e<4;e++){let t=g[e];r.value[e].arguments.push(t)}return M(async()=>{let e=[];for(let t=4;t<g.length;t++){for(let a=0;a<4;a++){const x=v.value[a].getBoundingClientRect().bottom,b=v.value[a].lastElementChild.getBoundingClientRect().bottom;e[a]=x-b}let s=Math.max.apply(Math,e);r.value[e.indexOf(s)].arguments.push(g[t]),await N()}}),(e,t)=>{const s=d("v-btn"),a=d("v-flex"),x=d("v-card-actions"),b=d("v-card");return u(),_(y,null,[Y,l(s,{onClick:t[0]||(t[0]=()=>e.displayArguments)},{default:o(()=>[m("Refresh page")]),_:1}),w("div",$,[(u(!0),_(y,null,S(r.value,B=>(u(),_("div",{key:B.id,ref_for:!0,ref_key:"columns",ref:v,class:"column"},[(u(!0),_(y,null,S(B.arguments,n=>(u(),V(b,{title:n.title,subtitle:n.email,text:n.argument,ref_for:!0,ref_key:"vCards",ref:R,variant:"tonal"},{default:o(()=>[l(x,null,{default:o(()=>[l(a,null,{default:o(()=>[l(s,{variant:"text",onClick:()=>{p(f).argumentTitle=n.title,p(f).argumentBody=n.argument,p(f).email=n.email,p(I).push(`/arena-${n.id}`)}},{default:o(()=>[m("Rebute")]),_:2},1032,["onClick"]),l(s,{variant:"text"},{default:o(()=>[m("Entail")]),_:1}),l(s,{variant:"text"},{default:o(()=>[m("Comment")]),_:1})]),_:2},1024)]),_:2},1024)]),_:2},1032,["title","subtitle","text"]))),256))]))),128))])],64)}}},G=A(L,[["__scopeId","data-v-bfbfb3b2"],["__file","C:/Users/kmba2/Coding/Projects in coding/Yessay/client/src/pages/explore.vue"]]);export{G as default};