import{d as l,t as i,ac as u,D as c,J as m,o as p,b as d,i as f,H as s}from"../modules/vue-CAxW5v3D.js";import{u as _}from"./context-BsMs538X.js";import{c as v}from"./DrawingPreview-DZtsDUoq.js";import{_ as g}from"../index-DwkwTwz7.js";import"../monaco/bundled-types-7IAynLt5.js";import"../modules/file-saver-DY7lxZlc.js";import"../modules/shiki-F44hlBEP.js";const w=l({__name:"DrawingLayer",setup(b){const{drauu:e,drawingEnabled:a,loadCanvas:t}=v(),r=_().$scale,o=i();return u(()=>{e.mount(o.value,o.value.parentElement),c(r,n=>e.options.coordinateScale=1/n,{immediate:!0}),t()}),m(()=>{e.unmount()}),(n,h)=>(p(),d("svg",{ref_key:"svg",ref:o,class:f(["w-full h-full absolute top-0",{"pointer-events-none":!s(a),"touch-none":s(a)}])},null,2))}}),L=g(w,[["__file","/usr/local/share/npm-global/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/DrawingLayer.vue"]]);export{L as default};