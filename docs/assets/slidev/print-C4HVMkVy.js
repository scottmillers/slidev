import{d as _,$ as u,y as h,b as a,e as t,x as s,H as c,F as f,Z as v,o as n,a0 as g,l as x,g as b}from"../modules/vue-BLmQdX0u.js";import{u as y,d as N,_ as k}from"../index-B4sGbReV.js";import{a as m}from"../monaco/bundled-types-CgjbzAqm.js";import{N as w}from"./NoteDisplay-DNHng62k.js";import"../modules/shiki-vbwtq7uO.js";import"../modules/file-saver-DY7lxZlc.js";const H={id:"page-root"},L={class:"m-4"},T={class:"mb-10"},V={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},D={class:"text-lg"},S={class:"font-bold flex gap-2"},C={class:"opacity-50"},F=t("div",{class:"flex-auto"},null,-1),M={key:0,class:"border-main mb-8"},$=_({__name:"print",setup(j){const{slides:p,total:d}=y();u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),N({title:`Notes - ${m.title}`});const l=h(()=>p.value.map(o=>{var i;return(i=o.meta)==null?void 0:i.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,i)=>(n(),a("div",H,[t("div",L,[t("div",T,[t("h1",V,s(c(m).title),1),t("div",B,s(new Date().toLocaleString()),1)]),(n(!0),a(f,null,v(l.value,(e,r)=>(n(),a("div",{key:r,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",D,[t("div",S,[t("div",C,s(e==null?void 0:e.no)+"/"+s(c(d)),1),g(" "+s(e==null?void 0:e.title)+" ",1),F])]),x(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),r<l.value.length-1?(n(),a("hr",M)):b("v-if",!0)]))),128))])]))}}),G=k($,[["__file","/workspaces/slidev/tiers-network-poc/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{G as default};
