import{az as n,al as r,t as u,y as j,Y as $,aA as v}from"../modules/vue-BLmQdX0u.js";import{b as p,q as C,O as l,i as x,o as S,l as k,m as R,k as T,P as E,Q as F}from"../index-B4sGbReV.js";function O(){const t=n(x),s=r(t,"nav"),i=n(S).value,e=r(i,"current"),a=n(k),c=n(R),o=n(l,{}),d=n(T,void 0),m=n(p,u(1)),f=n(C,j(()=>1));return{$slidev:t,$nav:s,$clicksContext:i,$clicks:e,$page:a,$route:d,$renderContext:c,$frontmatter:o,$scale:m,$zoom:f}}function A(t){var a,c;$(l,t);const{$slidev:s,$page:i}=O(),e=s.nav.slides.find(o=>o.no===i.value);if((c=(a=e==null?void 0:e.meta)==null?void 0:a.slide)!=null&&c.frontmatter){for(const o of Object.keys(e.meta.slide.frontmatter))o in t||delete e.meta.slide.frontmatter[o];Object.assign(e.meta.slide.frontmatter,t)}}function L(t,s){return{...v(t,s===0?E:F),frontmatter:t}}export{L as f,A as p,O as u};