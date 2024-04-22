import{d as v,ac as D,aA as b,o as _,b as B,f as A,H as i,h as C,az as x,c as E,k as t,l as r,m as p,aa as S,e as s,q as w,s as q,a6 as o}from"../modules/vue-CAxW5v3D.js";import{ad as F,_ as u,ae as g}from"../index-CWE4vvlN.js";import{_ as V}from"./CodeBlockWrapper-BcoIYmOt.js";import{I as P}from"./default-D3AnC7-L.js";import{p as U,u as z,f as N}from"./context-BgwZz_OO.js";import"../monaco/bundled-types-7IAynLt5.js";import"../modules/file-saver-DY7lxZlc.js";import"../modules/shiki-F44hlBEP.js";import"../modules/unplugin-icons-C9t2vOSt.js";const $=["data-drag-id"],I=v({__name:"VDrag",props:{pos:{type:String,required:!1},markdownSource:{type:Array,required:!1}},setup(d){const a=d,{id:h,container:e,containerStyle:l,mounted:n,unmounted:m,startDragging:k}=F(null,a.pos,a.markdownSource);return D(n),b(m),(f,c)=>(_(),B("div",{ref_key:"container",ref:e,"data-drag-id":i(h),style:C(i(l)),class:"p-1",onDblclick:c[0]||(c[0]=(...y)=>i(k)&&i(k)(...y))},[A(f.$slots,"default")],44,$))}}),T=u(I,[["__file","/usr/local/share/npm-global/lib/node_modules/@slidev/cli/node_modules/@slidev/client/builtin/VDrag.vue"]]),j=s("h1",null,"Draggable Elements",-1),H=s("p",null,"Double-click on the draggable elements to edit their positions.",-1),L=s("br",null,null,-1),M=s("h6",null,"Directive Usage",-1),R=s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-md"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"img"),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," v-drag"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},`"'`),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"square"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},`'"`),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," src"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"https://sli.dev/logo.png"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])])],-1),W=s("br",null,null,-1),G=s("h6",null,"Component Usage",-1),J=s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-md"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"v-drag"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," text-3xl"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"  <"),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"carbon:arrow-up"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"  Use the `v-drag` component to have a draggable container!")]),o(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"</"),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"v-drag"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])])],-1),K=s("div",{"text-center":"","text-3xl":"",border:"","border-main":"",rounded:""}," Double-click me! ",-1),O={markdownSource:[39,40,5],src:"https://sli.dev/logo.png"},Q={__name:"13",setup(d){return U(g),z(),(a,h)=>{const e=V,l=T,n=x("drag");return _(),E(P,w(q(i(N)(i(g),12))),{default:t(()=>[j,H,L,M,r(e,p({},{ranges:[]}),{default:t(()=>[R]),_:1},16),W,G,r(e,p({},{ranges:[]}),{default:t(()=>[J]),_:1},16),r(l,{markdownSource:[23,28,0],pos:"671,205,253,_,-15"},{default:t(()=>[K]),_:1}),S(s("img",O,null,512),[[n,"square"]])]),_:1},16)}}},ns=u(Q,[["__file","/@slidev/slides/13.md"]]);export{ns as default};