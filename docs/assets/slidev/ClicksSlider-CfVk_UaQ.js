import{n as h}from"../modules/unplugin-icons-C9t2vOSt.js";import{d as y,y as i,o as u,b as c,e as o,l as S,H as w,F as f,x as m,g as I,ad as z,aa as V,ab as $,h as x,i as d,p as B,a as D}from"../modules/vue-CAxW5v3D.js";import{c as F,r as M}from"../monaco/bundled-types-7IAynLt5.js";import{C as N,_ as L}from"../index-CWE4vvlN.js";const b=a=>(B("data-v-f514934b"),a=a(),D(),a),T=["title"],j={class:"flex gap-0.5 items-center min-w-16 font-mono mr1"},q=b(()=>o("div",{"flex-auto":""},null,-1)),A={"text-primary":""},E=b(()=>o("span",{op25:""},"/",-1)),H={op50:""},K=["min","max"],R=y({__name:"ClicksSlider",props:{clicksContext:{type:null,required:!0}},setup(a){const n=a,l=i(()=>n.clicksContext.total),p=i(()=>F(0,n.clicksContext.clicksStart,l.value)),r=i(()=>l.value-p.value+1),t=i({get(){return n.clicksContext.current>l.value?-1:n.clicksContext.current},set(v){n.clicksContext.current=v}}),k=i(()=>M(p.value,l.value+1));function C(){(t.value<0||t.value>l.value)&&(t.value=0)}return(v,s)=>{const g=h;return u(),c("div",{class:d(["flex gap-1 items-center select-none",r.value?"":"op50"]),title:`Clicks in this slide: ${r.value}`},[o("div",j,[S(g,{"text-sm":"",op50:""}),q,t.value>=0&&t.value!==w(N)?(u(),c(f,{key:0},[o("span",A,m(t.value),1),E],64)):I("v-if",!0),o("span",H,m(l.value),1)]),o("div",{relative:"","flex-auto":"",h5:"","font-mono":"",flex:"~",onDblclick:s[2]||(s[2]=e=>t.value=v.clicksContext.total)},[(u(!0),c(f,null,z(k.value,e=>(u(),c("div",{key:e,border:"y main","of-hidden":"",relative:"",class:d([e===0?"rounded-l border-l":"",e===l.value?"rounded-r border-r":""]),style:x({width:r.value>0?`${1/r.value*100}%`:"100%"})},[o("div",{absolute:"","inset-0":"",class:d(e<=t.value?"bg-primary op15":"")},null,2),o("div",{class:d([+e==+t.value?"text-primary font-bold op100 border-primary":"op30 border-main",e===0?"rounded-l":"",e===l.value?"rounded-r":"border-r-2"]),"w-full":"","h-full":"","text-xs":"",flex:"","items-center":"","justify-center":"","z-1":""},m(e),3)],6))),128)),V(o("input",{"onUpdate:modelValue":s[0]||(s[0]=e=>t.value=e),class:"range",absolute:"","inset-0":"",type:"range",min:p.value,max:l.value,step:1,"z-10":"",op0:"",style:x({"--thumb-width":`${1/(r.value+1)*100}%`}),onMousedown:C,onFocus:s[1]||(s[1]=e=>{var _;return(_=e.currentTarget)==null?void 0:_.blur()})},null,44,K),[[$,t.value]])],32)],10,T)}}}),O=L(R,[["__scopeId","data-v-f514934b"],["__file","/usr/local/share/npm-global/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/ClicksSlider.vue"]]);export{O as C};