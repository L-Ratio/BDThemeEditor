import{S as s,i as t,s as a,k as e,e as r,t as o,j as n,aO as c,d as l,n as f,c as u,a as m,g as $,m as i,b as p,f as h,H as d,o as v,h as g,x as y,u as j,v as E,W as x,aD as k,U as z}from"../chunks/vendor-265e0988.js";import{B as D}from"../chunks/Button-4b7ba817.js";/* empty css                                                     */function b(s){let t;return{c(){t=o("Return Home")},l(s){t=$(s,"Return Home")},m(s,a){h(s,t,a)},d(s){s&&l(t)}}}function B(s){let t,a;return t=new x({props:{src:k}}),{c(){n(t.$$.fragment)},l(s){i(t.$$.fragment,s)},m(s,e){v(t,s,e),a=!0},p:z,i(s){a||(y(t.$$.fragment,s),a=!0)},o(s){j(t.$$.fragment,s),a=!1},d(s){E(t,s)}}}function H(s){let t,a,x,k,z,H,w,I,V,R,L,O,P,S=s[0].message+"";return R=new D({props:{type:"primary",href:"/",$$slots:{iconL:[B],default:[b]},$$scope:{ctx:s}}}),{c(){t=e(),a=r("div"),x=r("div"),k=r("h1"),z=o(s[1]),H=e(),w=r("p"),I=o(S),V=e(),n(R.$$.fragment),L=e(),O=r("div"),this.h()},l(e){c('[data-svelte="svelte-y4183x"]',document.head).forEach(l),t=f(e),a=u(e,"DIV",{class:!0});var r=m(a);x=u(r,"DIV",{class:!0});var o=m(x);k=u(o,"H1",{class:!0});var n=m(k);z=$(n,s[1]),n.forEach(l),H=f(o),w=u(o,"P",{class:!0});var p=m(w);I=$(p,S),p.forEach(l),V=f(o),i(R.$$.fragment,o),o.forEach(l),L=f(r),O=u(r,"DIV",{class:!0}),m(O).forEach(l),r.forEach(l),this.h()},h(){document.title="Error - BDThemeEditor",p(k,"class","svelte-6tzfyj"),p(w,"class","svelte-6tzfyj"),p(x,"class","info svelte-6tzfyj"),p(O,"class","stack svelte-6tzfyj"),p(a,"class","error wrapper svelte-6tzfyj")},m(s,e){h(s,t,e),h(s,a,e),d(a,x),d(x,k),d(k,z),d(x,H),d(x,w),d(w,I),d(x,V),v(R,x,null),d(a,L),d(a,O),P=!0},p(s,[t]){(!P||2&t)&&g(z,s[1]),(!P||1&t)&&S!==(S=s[0].message+"")&&g(I,S);const a={};4&t&&(a.$$scope={dirty:t,ctx:s}),R.$set(a)},i(s){P||(y(R.$$.fragment,s),P=!0)},o(s){j(R.$$.fragment,s),P=!1},d(s){s&&l(t),s&&l(a),E(R)}}}const w=({status:s,error:t})=>({props:{error:t,status:s}});function I(s,t,a){let{error:e}=t,{status:r}=t;return s.$$set=s=>{"error"in s&&a(0,e=s.error),"status"in s&&a(1,r=s.status)},[e,r]}class V extends s{constructor(s){super(),t(this,s,I,H,a,{error:0,status:1})}}export{V as default,w as load};
