import{_ as h,a as i}from"../monaco/bundled-types-CgjbzAqm.js";import{d as c,t as u,_ as g,o as p,b as _,F as k,g as w,e as x,y as f,Y as s,al as v,c as S,h as j,i as $,aj as b,H as B,am as F,v as L}from"../modules/vue-BLmQdX0u.js";import{_ as y,k as q,l as z,m as A,n as O,o as P,q as R}from"../index-B4sGbReV.js";function H(n,e=""){var l,o;const t=["slidev-page",e],a=(o=(l=n==null?void 0:n.meta)==null?void 0:l.slide)==null?void 0:o.no;return a!=null&&t.push(`slidev-page-${a}`),t.filter(Boolean).join(" ")}async function Y(){const{saveAs:n}=await h(()=>import("../modules/file-saver-DY7lxZlc.js").then(e=>e.F),[]);n(typeof i.download=="string"?i.download:i.exportFilename?`${i.exportFilename}.pdf`:"/slidev-exported.pdf",`${i.title}.pdf`)}const D={class:"h-full w-full flex items-center justify-center gap-2 slidev-slide-loading"},E=x("div",{class:"i-svg-spinners-90-ring-with-bg text-xl"},null,-1),G=x("div",null,"Loading slide...",-1),T=c({__name:"SlideLoading",setup(n){const e=u(!1);return g(()=>{setTimeout(()=>{e.value=!0},200)}),(t,a)=>(p(),_("div",D,[e.value?(p(),_(k,{key:0},[E,G],64)):w("v-if",!0)]))}}),V=y(T,[["__file","/workspaces/slidev/tiers-network-poc/node_modules/@slidev/client/internals/SlideLoading.vue"]]),W=c({__name:"SlideWrapper",props:{clicksContext:{type:Object,required:!0},renderContext:{type:String,default:"slide"},active:{type:Boolean,default:!1},is:{type:Function,required:!0},route:{type:Object,required:!0}},setup(n){const e=n,t=f(()=>{var o,r;return((r=(o=e.route.meta)==null?void 0:o.slide)==null?void 0:r.frontmatter.zoom)??1});s(q,e.route),s(z,u(e.route.no)),s(A,u(e.renderContext)),s(O,v(e,"active")),s(P,v(e,"clicksContext")),s(R,t);const a=f(()=>t.value===1?void 0:{width:`${100/t.value}%`,height:`${100/t.value}%`,transformOrigin:"top left",transform:`scale(${t.value})`}),l=F({loader:async()=>{const o=await e.is();return c({setup(r,{attrs:C}){return g(()=>{var d,m;(m=(d=e.clicksContext)==null?void 0:d.onMounted)==null||m.call(d)}),()=>L(o.default,C)}})},delay:300,loadingComponent:V});return(o,r)=>(p(),S(b(B(l)),{style:j(a.value),"data-slidev-no":e.route.no,class:$({"disable-view-transition":!["slide","presenter"].includes(e.renderContext)})},null,8,["style","data-slidev-no","class"]))}}),Z=y(W,[["__scopeId","data-v-026ee359"],["__file","/workspaces/slidev/tiers-network-poc/node_modules/@slidev/client/internals/SlideWrapper.vue"]]),J={render(){return[]}},K={render(){return[]}};export{K as G,Z as S,J as a,Y as d,H as g};