import{S as x,i as ee,s as le,e as p,t as w,k as V,c as b,a as k,g as N,d as _,n as C,b as v,f as D,G as m,W as K,T as te,ac as F,P as ae,aH as se,J as re,K as ie,L as ne,x as oe,u as ce,a5 as W,ap as Y}from"../../chunks/vendor-cbe15da5.js";import{p as he,n as fe}from"../../chunks/app-c8aa22ea.js";function z(n,l,t){const a=n.slice();return a[6]=l[t].title,a[7]=l[t].links,a}function O(n,l,t){const a=n.slice();return a[10]=l[t].href,a[11]=l[t].value,a[12]=l[t].children,a}function Q(n,l,t){const a=n.slice();return a[10]=l[t].href,a[11]=l[t].value,a}function R(n){let l,t=n[12],a=[];for(let i=0;i<t.length;i+=1)a[i]=X(Q(n,t,i));return{c(){l=p("ul");for(let i=0;i<a.length;i+=1)a[i].c();this.h()},l(i){l=b(i,"UL",{class:!0});var o=k(l);for(let s=0;s<a.length;s+=1)a[s].l(o);o.forEach(_),this.h()},h(){v(l,"class","sidebar-children svelte-1egakv9")},m(i,o){D(i,l,o);for(let s=0;s<a.length;s+=1)a[s].m(l,null)},p(i,o){if(o&2){t=i[12];let s;for(s=0;s<t.length;s+=1){const f=Q(i,t,s);a[s]?a[s].p(f,o):(a[s]=X(f),a[s].c(),a[s].m(l,null))}for(;s<a.length;s+=1)a[s].d(1);a.length=t.length}},d(i){i&&_(l),F(a,i)}}}function X(n){let l,t,a=n[11]+"",i,o;return{c(){l=p("li"),t=p("a"),i=w(a),this.h()},l(s){l=b(s,"LI",{class:!0});var f=k(l);t=b(f,"A",{href:!0,class:!0});var r=k(t);i=N(r,a),r.forEach(_),f.forEach(_),this.h()},h(){v(t,"href",o=n[10]),v(t,"class","sidebar-link svelte-1egakv9"),v(l,"class","sidebar-child")},m(s,f){D(s,l,f),m(l,t),m(t,i)},p:te,d(s){s&&_(l)}}}function Z(n){let l,t,a=n[11]+"",i,o,s,f=n[12]&&n[0](n[10]),r=f&&R(n);return{c(){l=p("li"),t=p("a"),i=w(a),s=V(),r&&r.c(),this.h()},l(e){l=b(e,"LI",{class:!0});var u=k(l);t=b(u,"A",{href:!0,class:!0});var c=k(t);i=N(c,a),c.forEach(_),s=C(u),r&&r.l(u),u.forEach(_),this.h()},h(){v(t,"href",o="/docs/"+n[10]),v(t,"class","sidebar-link svelte-1egakv9"),K(t,"active",n[0](n[10])),v(l,"class","sidebar-item svelte-1egakv9")},m(e,u){D(e,l,u),m(l,t),m(t,i),m(l,s),r&&r.m(l,null)},p(e,u){u&3&&K(t,"active",e[0](e[10])),u&1&&(f=e[12]&&e[0](e[10])),f?r?r.p(e,u):(r=R(e),r.c(),r.m(l,null)):r&&(r.d(1),r=null)},d(e){e&&_(l),r&&r.d()}}}function $(n){let l,t=n[6]+"",a,i,o,s,f=n[7],r=[];for(let e=0;e<f.length;e+=1)r[e]=Z(O(n,f,e));return{c(){l=p("h4"),a=w(t),i=V(),o=p("ul");for(let e=0;e<r.length;e+=1)r[e].c();s=V(),this.h()},l(e){l=b(e,"H4",{class:!0});var u=k(l);a=N(u,t),u.forEach(_),i=C(e),o=b(e,"UL",{class:!0});var c=k(o);for(let I=0;I<r.length;I+=1)r[I].l(c);s=C(c),c.forEach(_),this.h()},h(){v(l,"class","sidebar-title svelte-1egakv9"),v(o,"class","sidebar-items svelte-1egakv9")},m(e,u){D(e,l,u),m(l,a),D(e,i,u),D(e,o,u);for(let c=0;c<r.length;c+=1)r[c].m(o,null);m(o,s)},p(e,u){if(u&3){f=e[7];let c;for(c=0;c<f.length;c+=1){const I=O(e,f,c);r[c]?r[c].p(I,u):(r[c]=Z(I),r[c].c(),r[c].m(o,s))}for(;c<r.length;c+=1)r[c].d(1);r.length=f.length}},d(e){e&&_(l),e&&_(i),e&&_(o),F(r,e)}}}function ue(n){let l,t,a,i,o,s,f,r,e,u,c,I,L,S,y=n[1],g=[];for(let h=0;h<y.length;h+=1)g[h]=$(z(n,y,h));const U=n[5].default,E=ae(U,n,n[4],null);return{c(){l=V(),t=p("div"),a=p("div"),i=p("div"),o=p("div"),s=p("aside"),f=p("ul"),r=p("li"),e=p("a"),u=w("Home"),c=V();for(let h=0;h<g.length;h+=1)g[h].c();I=V(),L=p("main"),E&&E.c(),this.h()},l(h){se('[data-svelte="svelte-1k18fai"]',document.head).forEach(_),l=C(h),t=b(h,"DIV",{class:!0});var d=k(t);a=b(d,"DIV",{class:!0});var H=k(a);i=b(H,"DIV",{class:!0});var M=k(i);o=b(M,"DIV",{class:!0});var T=k(o);s=b(T,"ASIDE",{class:!0});var j=k(s);f=b(j,"UL",{class:!0});var P=k(f);r=b(P,"LI",{class:!0});var B=k(r);e=b(B,"A",{href:!0,class:!0});var G=k(e);u=N(G,"Home"),G.forEach(_),B.forEach(_),P.forEach(_),c=C(j);for(let q=0;q<g.length;q+=1)g[q].l(j);j.forEach(_),I=C(T),L=b(T,"MAIN",{class:!0});var J=k(L);E&&E.l(J),J.forEach(_),T.forEach(_),M.forEach(_),H.forEach(_),d.forEach(_),this.h()},h(){document.title="Docs - Theme Editor",v(e,"href","/"),v(e,"class","sidebar-link svelte-1egakv9"),v(r,"class","sidebar-item svelte-1egakv9"),v(f,"class","sidebar-items svelte-1egakv9"),v(s,"class","sidebar svelte-1egakv9"),v(L,"class","markdown"),v(o,"class","docs svelte-1egakv9"),v(i,"class","wrapper"),v(a,"class","scroller-inner"),v(t,"class","container scroller")},m(h,A){D(h,l,A),D(h,t,A),m(t,a),m(a,i),m(i,o),m(o,s),m(s,f),m(f,r),m(r,e),m(e,u),m(s,c);for(let d=0;d<g.length;d+=1)g[d].m(s,null);m(o,I),m(o,L),E&&E.m(L,null),S=!0},p(h,[A]){if(A&3){y=h[1];let d;for(d=0;d<y.length;d+=1){const H=z(h,y,d);g[d]?g[d].p(H,A):(g[d]=$(H),g[d].c(),g[d].m(s,null))}for(;d<g.length;d+=1)g[d].d(1);g.length=y.length}E&&E.p&&(!S||A&16)&&re(E,U,h,h[4],S?ne(U,h[4],A,null):ie(h[4]),null)},i(h){S||(oe(E,h),S=!0)},o(h){ce(E,h),S=!1},d(h){h&&_(l),h&&_(t),F(g,h),E&&E.d(h)}}}function _e(n,l,t){let a,i,o;W(n,he,e=>t(2,i=e)),W(n,fe,e=>t(3,o=e));let{$$slots:s={},$$scope:f}=l;const r=[{title:"Adding your theme",links:[{href:"submit/config-file",value:"Config File"},{href:"submit/variables-config",value:"Variables Config",children:[{href:"#colour",value:"Colour"},{href:"#font",value:"Font"},{href:"#image",value:"Image"},{href:"#number",value:"Number"},{href:"#select",value:"Select"},{href:"#slider",value:"Slider"},{href:"#example",value:"Example variables config"}]},{href:"submit/betterdiscord-meta",value:"BetterDiscord META"},{href:"submit/submitting-theme",value:"Submitting Your Theme"}]}];return n.$$set=e=>{"$$scope"in e&&t(4,f=e.$$scope)},n.$$.update=()=>{n.$$.dirty&8&&(o?Y.start():Y.done()),n.$$.dirty&4&&t(0,a=e=>i.path.split("/").filter(c=>c&&c!=="docs").join("/")===e)},[a,r,i,o,f,s]}class me extends x{constructor(l){super();ee(this,l,_e,ue,le,{})}}export{me as default};
