const __vite__fileDeps=["assets/slidev/DrawingControls-DDmHr524.js","assets/modules/unplugin-icons-C9t2vOSt.js","assets/modules/vue-CAxW5v3D.js","assets/modules/shiki-F44hlBEP.js","assets/modules/shiki-BSchMNmt.css","assets/slidev/DrawingPreview-B0EcXtni.js","assets/index-CWE4vvlN.js","assets/monaco/bundled-types-7IAynLt5.js","assets/modules/file-saver-DY7lxZlc.js","assets/monaco/bundled-types-DmsQD_Q4.css","assets/index-D2RzxvJl.css","assets/DrawingPreview-D8vO7PIV.css","assets/slidev/ContextMenu-DURgP0b-.js","assets/slidev/IconButton-DN7eO_mn.js","assets/slidev/title-renderer-D9_WKKYD.js","assets/slidev/context-BgwZz_OO.js","assets/ContextMenu-Dyumicxw.css","assets/DrawingControls-C5T1oZL5.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{a as b,g as B,h as H,_ as O}from"../monaco/bundled-types-7IAynLt5.js";import{d as g,a7 as $,o,c as r,H as e,b as _,e as i,f as R,i as M,g as n,ag as T,y as z,k as w,af as h,a6 as E,Q as x,l as p,F as I,x as N,v as U,t as A,h as L}from"../modules/vue-CAxW5v3D.js";import{_ as y,h as C,l as S,m as D,a as Q,n as W,o as P,w as F,q as G,r as j}from"../index-CWE4vvlN.js";import{Q as q,G as K,C as X,r as Y,u as J,S as Z,N as ee,o as le}from"./ContextMenu-DURgP0b-.js";import{c as oe,a as se}from"./DrawingPreview-B0EcXtni.js";import"../modules/file-saver-DY7lxZlc.js";import"../modules/shiki-F44hlBEP.js";import"../modules/unplugin-icons-C9t2vOSt.js";import"./IconButton-DN7eO_mn.js";import"./title-renderer-D9_WKKYD.js";import"./context-BgwZz_OO.js";const te="/slidev/assets/logo-BYkHSa_O.png",ae={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},ie=g({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(c,{emit:t}){const a=c,l=$(a,"modelValue",t);function s(){l.value=!1}return(f,u)=>(o(),r(T,null,[e(l)?(o(),_("div",ae,[i("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:u[0]||(u[0]=v=>s())}),i("div",{class:M(["m-auto rounded-md bg-main shadow",a.class]),"dark:border":"~ main"},[R(f.$slots,"default")],2)])):n("v-if",!0)],1024))}}),ne=y(ie,[["__file","/usr/local/share/npm-global/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/Modal.vue"]]),re={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},de=["innerHTML"],ue=i("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[i("div",{class:"flex gap-1 children:my-auto"},[i("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),i("img",{class:"w-5 h-5",src:te,alt:"Slidev logo"}),i("div",{style:{color:"#2082A6"}},[i("b",null,"Sli"),E("dev ")])])],-1),ce=g({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(c,{emit:t}){const l=$(c,"modelValue",t),s=z(()=>typeof b.info=="string");return(f,u)=>(o(),r(ne,{modelValue:e(l),"onUpdate:modelValue":u[0]||(u[0]=v=>h(l)?l.value=v:null),class:"px-6 py-4"},{default:w(()=>[i("div",re,[s.value?(o(),_("div",{key:0,class:"mb-4",innerHTML:e(b).info},null,8,de)):n("v-if",!0),ue])]),_:1},8,["modelValue"]))}}),me=y(ce,[["__file","/usr/local/share/npm-global/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/InfoDialog.vue"]]),pe=g({__name:"Controls",setup(c){const t=x(),a=x();return(d,l)=>(o(),_(I,null,[p(q,{modelValue:e(C),"onUpdate:modelValue":l[0]||(l[0]=s=>h(C)?C.value=s:null)},null,8,["modelValue"]),p(K),t.value?(o(),r(e(t),{key:0})):n("v-if",!0),a.value?(o(),r(e(a),{key:1,modelValue:e(S),"onUpdate:modelValue":l[1]||(l[1]=s=>h(S)?S.value=s:null)},null,8,["modelValue"])):n("v-if",!0),e(b).info?(o(),r(me,{key:2,modelValue:e(D),"onUpdate:modelValue":l[2]||(l[2]=s=>h(D)?D.value=s:null)},null,8,["modelValue"])):n("v-if",!0),p(X)],64))}}),fe=y(pe,[["__file","/usr/local/share/npm-global/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/Controls.vue"]]),ve=g({__name:"PrintStyle",setup(c){function t(a,{slots:d}){if(d.default)return U("style",d.default())}return(a,d)=>(o(),r(t,null,{default:w(()=>[E(" @page { size: "+N(e(B))+"px "+N(e(H))+"px; margin: 0px; } ",1)]),_:1}))}}),_e=y(ve,[["__file","/usr/local/share/npm-global/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/PrintStyle.vue"]]),ge=g({__name:"play",setup(c){Y();const{next:t,prev:a,isEmbedded:d,isPrintMode:l}=Q(),{isDrawing:s}=oe(),f=A();function u(m){var k;P.value||m.button===0&&((k=m.target)==null?void 0:k.id)==="slide-container"&&(m.pageX/window.innerWidth>.6?t():a())}J(f);const v=z(()=>W.value||P.value);x();const V=x();return O(()=>import("./DrawingControls-DDmHr524.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])).then(m=>V.value=m.default),(m,k)=>(o(),_(I,null,[e(l)?(o(),r(_e,{key:0})):n("v-if",!0),i("div",{id:"page-root",ref_key:"root",ref:f,class:M(["grid",e(j)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[p(se,{class:"w-full h-full",style:L({background:"var(--slidev-slide-container-background, black)"}),width:e(l)?e(F).width.value:void 0,scale:e(G),"is-main":!0,onPointerdown:u,onContextmenu:e(le)},{default:w(()=>[p(Z,{"render-context":"slide"})]),controls:w(()=>[e(l)?n("v-if",!0):(o(),_("div",{key:0,class:M(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[v.value?"!opacity-100 right-0":"opacity-0 p-2",e(s)?"pointer-events-none":""]])},[p(ee,{class:"m-auto",persist:v.value},null,8,["persist"])],2)),!e(b).drawings.presenterOnly&&!e(d)&&V.value?(o(),r(e(V),{key:1,class:"ml-0"})):n("v-if",!0)]),_:1},8,["style","width","scale","onContextmenu"]),n("v-if",!0)],2),e(l)?n("v-if",!0):(o(),r(fe,{key:1}))],64))}}),Ne=y(ge,[["__file","/usr/local/share/npm-global/lib/node_modules/@slidev/cli/node_modules/@slidev/client/pages/play.vue"]]);export{Ne as default};
