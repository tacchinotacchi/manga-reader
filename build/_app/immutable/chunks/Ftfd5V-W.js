import{a8 as P,a9 as w,aa as E,ab as V,a3 as R,Z as B,_ as H,ac as Y,ad as k,$,M as q,ae as x,af as T,R as b,Q as I,B as U,X as h,ag as X,ah as z,ai as F,aj as G,ak as Q,al as Z,a4 as J,U as K,A as L,p as ee,C as te,a as re}from"./B_07pKug.js";import{b as ae}from"./CUgi9AwD.js";function pe(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ne=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ve(e){return ne.includes(e)}const oe={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function he(e){return e=e.toLowerCase(),oe[e]??e}const ie=["touchstart","touchmove"];function se(e){return ie.includes(e)}const ue=["textarea","script","style","title"];function ye(e){return ue.includes(e)}function ge(e,t){if(t){const r=document.body;e.autofocus=!0,P(()=>{document.activeElement===r&&e.focus()})}}let O=!1;function ce(){O||(O=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function D(e){var t=V,r=R;w(null),E(null);try{return e()}finally{w(t),E(r)}}function be(e,t,r,i=r){e.addEventListener(t,()=>D(r));const n=e.__on_r;n?e.__on_r=()=>{n(),i(!0)}:e.__on_r=()=>i(!0),ce()}const M=new Set,S=new Set;function le(e,t,r,i={}){function n(a){if(i.capture||y.call(t,a),!a.cancelBubble)return D(()=>r==null?void 0:r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?P(()=>{t.addEventListener(e,n,i)}):t.addEventListener(e,n,i),n}function we(e,t,r,i,n){var a={capture:i,passive:n},u=le(e,t,r,a);(t===document.body||t===window||t===document)&&B(()=>{t.removeEventListener(e,u,a)})}function Ee(e){for(var t=0;t<e.length;t++)M.add(e[t]);for(var r of S)r(e)}function y(e){var N;var t=this,r=t.ownerDocument,i=e.type,n=((N=e.composedPath)==null?void 0:N.call(e))||[],a=n[0]||e.target,u=0,_=e.__root;if(_){var f=n.indexOf(_);if(f!==-1&&(t===document||t===window)){e.__root=t;return}var p=n.indexOf(t);if(p===-1)return;f<=p&&(u=f)}if(a=n[u]||e.target,a!==t){H(e,"currentTarget",{configurable:!0,get(){return a||r}});var m=V,c=R;w(null),E(null);try{for(var o,s=[];a!==null;){var l=a.assignedSlot||a.parentNode||a.host||null;try{var d=a["__"+i];if(d!=null&&(!a.disabled||e.target===a))if(Y(d)){var[W,...j]=d;W.apply(a,[e,...j])}else d.call(a,e)}catch(g){o?s.push(g):o=g}if(e.cancelBubble||l===t||l===null)break;a=l}if(o){for(let g of s)queueMicrotask(()=>{throw g});throw o}}finally{e.__root=t,delete e.currentTarget,w(m),E(c)}}}function me(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r+"")}function fe(e,t){return C(e,t)}function Te(e,t){k(),t.intro=t.intro??!1;const r=t.target,i=L,n=h;try{for(var a=$(r);a&&(a.nodeType!==8||a.data!==q);)a=x(a);if(!a)throw T;b(!0),I(a),U();const u=C(e,{...t,anchor:a});if(h===null||h.nodeType!==8||h.data!==X)throw z(),T;return b(!1),u}catch(u){if(u===T)return t.recover===!1&&F(),k(),G(r),b(!1),fe(e,t);throw u}finally{b(i),I(n)}}const v=new Map;function C(e,{target:t,anchor:r,props:i={},events:n,context:a,intro:u=!0}){k();var _=new Set,f=c=>{for(var o=0;o<c.length;o++){var s=c[o];if(!_.has(s)){_.add(s);var l=se(s);t.addEventListener(s,y,{passive:l});var d=v.get(s);d===void 0?(document.addEventListener(s,y,{passive:l}),v.set(s,1)):v.set(s,d+1)}}};f(Q(M)),S.add(f);var p=void 0,m=Z(()=>{var c=r??t.appendChild(J());return K(()=>{if(a){ee({});var o=te;o.c=a}n&&(i.$$events=n),L&&ae(c,null),p=e(c,i)||{},L&&(R.nodes_end=h),a&&re()}),()=>{var l;for(var o of _){t.removeEventListener(o,y);var s=v.get(o);--s===0?(document.removeEventListener(o,y),v.delete(o)):v.set(o,s)}S.delete(f),c!==r&&((l=c.parentNode)==null||l.removeChild(c))}});return A.set(p,m),p}let A=new WeakMap;function ke(e,t){const r=A.get(e);return r?(A.delete(e),r(t)):Promise.resolve()}export{pe as a,ge as b,le as c,Ee as d,we as e,ve as f,ce as g,Te as h,ye as i,be as l,fe as m,he as n,me as s,ke as u};
