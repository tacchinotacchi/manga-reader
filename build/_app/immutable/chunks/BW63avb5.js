import{T as D,p as _,h as U,U as h,H,V as O,W as Y,c as y,s as g,X as I,o as N,Y as A,Z as F,d as L,_ as E,N as Z,$,a0 as k,A as q,a1 as w,a2 as C,D as M}from"./BVU-3qzR.js";function V(e,n,[a,s]=[0,0]){_&&a===0&&U();var u=e,f=null,t=null,r=F,R=a>0?h:0,c=!1;const S=(o,i=!0)=>{c=!0,v(i,o)},v=(o,i)=>{if(r===(r=o))return;let T=!1;if(_&&s!==-1){if(a===0){const b=u.data;b===H?s=0:b===O?s=1/0:(s=parseInt(b.substring(1)),s!==s&&(s=r?1/0:-1))}const m=s>a;!!r===m&&(u=Y(),y(u),g(!1),T=!0,s=-1)}r?(f?I(f):i&&(f=N(()=>i(u))),t&&A(t,()=>{t=null})):(t?I(t):i&&(t=N(()=>i(u,[a+1,s]))),f&&A(f,()=>{f=null})),T&&g(!0)};D(()=>{c=!1,n(S),c||v(null,null)},R),_&&(u=L)}let l=!1,p=Symbol();function W(e,n,a){const s=a[n]??(a[n]={store:null,source:Z(void 0),unsubscribe:E});if(s.store!==e&&!(p in a))if(s.unsubscribe(),s.store=e??null,e==null)s.source.v=void 0,s.unsubscribe=E;else{var u=!0;s.unsubscribe=$(e,f=>{u?s.source.v=f:M(s.source,f)}),u=!1}return e&&p in a?k(e):q(s.source)}function X(e,n){return e.set(n),n}function d(){const e={};function n(){w(()=>{for(var a in e)e[a].unsubscribe();C(e,p,{enumerable:!1,value:!0})})}return[e,n]}function j(e){var n=l;try{return l=!1,[e(),l]}finally{l=n}}export{d as a,X as b,j as c,V as i,W as s};
