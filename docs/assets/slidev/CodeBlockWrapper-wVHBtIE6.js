import{z as L,A as B}from"../modules/unplugin-icons-BaoYVvhx.js";import{d as N,t as I,au as q,E as v,_ as z,y as k,ay as V,o as i,b as C,f as $,H as d,c as b,g as M,i as D,h as R}from"../modules/vue-BLmQdX0u.js";import{a as x}from"../monaco/bundled-types-CgjbzAqm.js";import{x as W,H as K,z as U,_ as j}from"../index-B4sGbReV.js";import{u as F}from"./context-SOhjfFzr.js";const G=["title"],J=N({__name:"CodeBlockWrapper",props:{ranges:{type:Array,default:()=>[]},finally:{type:[String,Number],default:"last"},startLine:{type:Number,default:1},lines:{type:Boolean,default:x.lineNumbers},at:{type:[String,Number],default:"+1"},maxHeight:{type:String,default:void 0}},setup(S){const e=S,{$clicksContext:a}=F(),o=I(),p=W();q(()=>{a.unregister(p)}),v(()=>{var t;(t=o.value)==null||t.classList.toggle("slidev-code-line-numbers",e.lines)}),z(()=>{var m;if(!a||!((m=e.ranges)!=null&&m.length))return;const{start:t,end:s,delta:l}=a.resolve(e.at,e.ranges.length-1);a.register(p,{max:s,delta:l});const r=k(()=>Math.max(0,a.current-t+1)),c=k(()=>e.finally==="last"?e.ranges.at(-1):e.finally.toString());v(()=>{if(!o.value)return;let u=e.ranges[r.value]??c.value;const f=u==="hide";o.value.classList.toggle(K,f),f&&(u=e.ranges[r.value+1]??c.value);const h=o.value.querySelector(".shiki"),_=Array.from(h.querySelectorAll("code > .line")),A=_.length;if(U(u,A,e.startLine,n=>[_[n]]),e.maxHeight){const n=Array.from(h.querySelectorAll(".line.highlighted"));n.reduce((y,E)=>E.offsetHeight+y,0)>o.value.offsetHeight?n[0].scrollIntoView({behavior:"smooth",block:"start"}):n.length>0&&n[Math.round((n.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}})});const{copied:g,copy:H}=V();function w(){var s,l;const t=(l=(s=o.value)==null?void 0:s.querySelector(".slidev-code"))==null?void 0:l.textContent;t&&H(t)}return(t,s)=>{const l=L,r=B;return i(),C("div",{ref_key:"el",ref:o,class:D(["slidev-code-wrapper relative group",{"slidev-code-line-numbers":e.lines}]),style:R({"max-height":e.maxHeight,"overflow-y":e.maxHeight?"scroll":void 0,"--start":e.startLine})},[$(t.$slots,"default"),d(x).codeCopy?(i(),C("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:d(g)?"Copied":"Copy",onClick:s[0]||(s[0]=c=>w())},[d(g)?(i(),b(l,{key:0,class:"p-2 w-8 h-8"})):(i(),b(r,{key:1,class:"p-2 w-8 h-8"}))],8,G)):M("v-if",!0)],6)}}}),Z=j(J,[["__file","/workspaces/slidev/tiers-network-poc/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]);export{Z as _};