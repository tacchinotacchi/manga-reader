import{n as dr,R as hr,ah as fr,c as U,p as T,g as _r,h as gr,A as J,z as Ar,U as br,V as Q,s as R,d as M,e as Er,W as ir,o as er,X as pr,ai as q,l as sr,aj as Nr,t as Z,ak as B,al as j,am as z,N as Tr,v as y,an as Sr,ao as Ir,ap as Cr,k as Lr,aq as wr,ar as Mr,as as Or,a as kr,at as Rr,au as Hr,av as Dr,aw as $r,ax as Vr}from"./DXORa8Mb.js";import{f as Ur,g as qr,d as Pr,j as Yr,n as Br,k as zr,m as Xr}from"./Cc8CCPXp.js";function aa(r,f){return f}function Gr(r,f,a,i){for(var e=[],u=f.length,l=0;l<u;l++)Cr(f[l].e,e,!0);var d=u>0&&e.length===0&&a!==null;if(d){var A=a.parentNode;Lr(A),A.append(a),i.clear(),L(r,f[0].prev,f[u-1].next)}wr(e,()=>{for(var v=0;v<u;v++){var h=f[v];d||(i.delete(h.k),L(r,h.prev,h.next)),Mr(h.e,!d)}})}function fa(r,f,a,i,e,u=null){var l=r,d={flags:f,items:new Map,first:null},A=(f&fr)!==0;if(A){var v=r;l=T?U(_r(v)):v.appendChild(dr())}T&&gr();var h=null,b=!1,t=Ar(()=>{var _=a();return Sr(_)?_:_==null?[]:sr(_)});hr(()=>{var _=J(t),n=_.length;if(b&&n===0)return;b=n===0;let N=!1;if(T){var p=l.data===br;p!==(n===0)&&(l=Q(),U(l),R(!1),N=!0)}if(T){for(var g=null,S,c=0;c<n;c++){if(M.nodeType===8&&M.data===Er){l=M,N=!0,R(!1);break}var s=_[c],o=i(s,c);S=ur(M,d,g,null,s,o,c,e,f,a),d.items.set(o,S),g=S}n>0&&U(Q())}T||Kr(_,d,l,e,f,i,a),u!==null&&(n===0?h?ir(h):h=er(()=>u(l)):h!==null&&pr(h,()=>{h=null})),N&&R(!0),J(t)}),T&&(l=M)}function Kr(r,f,a,i,e,u,l){var X,G,K,W;var d=(e&Ir)!==0,A=(e&(B|z))!==0,v=r.length,h=f.items,b=f.first,t=b,_,n=null,N,p=[],g=[],S,c,s,o;if(d)for(o=0;o<v;o+=1)S=r[o],c=u(S,o),s=h.get(c),s!==void 0&&((X=s.a)==null||X.measure(),(N??(N=new Set)).add(s));for(o=0;o<v;o+=1){if(S=r[o],c=u(S,o),s=h.get(c),s===void 0){var C=t?t.e.nodes_start:a;n=ur(C,f,n,n===null?f.first:n.next,S,c,o,i,e,l),h.set(c,n),p=[],g=[],t=n.next;continue}if(A&&Wr(s,S,o,e),(s.e.f&q)!==0&&(ir(s.e),d&&((G=s.a)==null||G.unfix(),(N??(N=new Set)).delete(s))),s!==t){if(_!==void 0&&_.has(s)){if(p.length<g.length){var E=g[0],I;n=E.prev;var H=p[0],$=p[p.length-1];for(I=0;I<p.length;I+=1)m(p[I],E,a);for(I=0;I<g.length;I+=1)_.delete(g[I]);L(f,H.prev,$.next),L(f,n,H),L(f,$,E),t=E,n=$,o-=1,p=[],g=[]}else _.delete(s),m(s,t,a),L(f,s.prev,s.next),L(f,s,n===null?f.first:n.next),L(f,n,s),n=s;continue}for(p=[],g=[];t!==null&&t.k!==c;)(t.e.f&q)===0&&(_??(_=new Set)).add(t),g.push(t),t=t.next;if(t===null)continue;s=t}p.push(s),n=s,t=s.next}if(t!==null||_!==void 0){for(var w=_===void 0?[]:sr(_);t!==null;)(t.e.f&q)===0&&w.push(t),t=t.next;var V=w.length;if(V>0){var vr=(e&fr)!==0&&v===0?a:null;if(d){for(o=0;o<V;o+=1)(K=w[o].a)==null||K.measure();for(o=0;o<V;o+=1)(W=w[o].a)==null||W.fix()}Gr(f,w,vr,h)}}d&&Nr(()=>{var F;if(N!==void 0)for(s of N)(F=s.a)==null||F.apply()}),Z.first=f.first&&f.first.e,Z.last=n&&n.e}function Wr(r,f,a,i){(i&B)!==0&&j(r.v,f),(i&z)!==0?j(r.i,a):r.i=a}function ur(r,f,a,i,e,u,l,d,A,v){var h=(A&B)!==0,b=(A&Or)===0,t=h?b?Tr(e):y(e):e,_=(A&z)===0?l:y(l),n={i:_,v:t,k:u,a:null,e:null,prev:a,next:i};try{return n.e=er(()=>d(r,t,_,v),T),n.e.prev=a&&a.e,n.e.next=i&&i.e,a===null?f.first=n:(a.next=n,a.e.next=n.e),i!==null&&(i.prev=n,i.e.prev=n.e),n}finally{}}function m(r,f,a){for(var i=r.next?r.next.e.nodes_start:a,e=f?f.e.nodes_start:a,u=r.e.nodes_start;u!==i;){var l=kr(u);e.before(u),u=l}}function L(r,f,a){f===null?r.first=a:(f.next=a,f.e.next=a&&a.e),a!==null&&(a.prev=f,a.e.prev=f&&f.e)}function tr(r){var f,a,i="";if(typeof r=="string"||typeof r=="number")i+=r;else if(typeof r=="object")if(Array.isArray(r)){var e=r.length;for(f=0;f<e;f++)r[f]&&(a=tr(r[f]))&&(i&&(i+=" "),i+=a)}else for(a in r)r[a]&&(i&&(i+=" "),i+=a);return i}function Fr(){for(var r,f,a=0,i="",e=arguments.length;a<e;a++)(r=arguments[a])&&(f=tr(r))&&(i&&(i+=" "),i+=f);return i}function Jr(r){return typeof r=="object"?Fr(r):r??""}const x=[...` 	
\r\f \v\uFEFF`];function Qr(r,f,a){var i=r==null?"":""+r;if(a){for(var e in a)if(a[e])i=i?i+" "+e:e;else if(i.length)for(var u=e.length,l=0;(l=i.indexOf(e,l))>=0;){var d=l+u;(l===0||x.includes(i[l-1]))&&(d===i.length||x.includes(i[d]))?i=(l===0?"":i.substring(0,l))+i.substring(d+1):l=d}}return i===""?null:i}function rr(r,f=!1){var a=f?" !important;":";",i="";for(var e in r){var u=r[e];u!=null&&u!==""&&(i+=" "+e+": "+u+a)}return i}function P(r){return r[0]!=="-"||r[1]!=="-"?r.toLowerCase():r}function Zr(r,f){if(f){var a="",i,e;if(Array.isArray(f)?(i=f[0],e=f[1]):i=f,r){r=String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var u=!1,l=0,d=!1,A=[];i&&A.push(...Object.keys(i).map(P)),e&&A.push(...Object.keys(e).map(P));var v=0,h=-1;const N=r.length;for(var b=0;b<N;b++){var t=r[b];if(d?t==="/"&&r[b-1]==="*"&&(d=!1):u?u===t&&(u=!1):t==="/"&&r[b+1]==="*"?d=!0:t==='"'||t==="'"?u=t:t==="("?l++:t===")"&&l--,!d&&u===!1&&l===0){if(t===":"&&h===-1)h=b;else if(t===";"||b===N-1){if(h!==-1){var _=P(r.substring(v,h).trim());if(!A.includes(_)){t!==";"&&b++;var n=r.substring(v,b).trim();a+=" "+n+";"}}v=b+1,h=-1}}}}return i&&(a+=rr(i)),e&&(a+=rr(e,!0)),a=a.trim(),a===""?null:a}return r==null?null:String(r)}function jr(r,f,a,i,e,u){var l=r.__className;if(T||l!==a||l===void 0){var d=Qr(a,i,u);(!T||d!==r.getAttribute("class"))&&(d==null?r.removeAttribute("class"):f?r.className=d:r.setAttribute("class",d)),r.__className=a}else if(u&&e!==u)for(var A in u){var v=!!u[A];(e==null||v!==!!e[A])&&r.classList.toggle(A,v)}return u}function Y(r,f={},a,i){for(var e in a){var u=a[e];f[e]!==u&&(a[e]==null?r.style.removeProperty(e):r.style.setProperty(e,u,i))}}function yr(r,f,a,i){var e=r.__style;if(T||e!==f){var u=Zr(f,i);(!T||u!==r.getAttribute("style"))&&(u==null?r.removeAttribute("style"):r.style.cssText=u),r.__style=f}else i&&(Array.isArray(i)?(Y(r,a==null?void 0:a[0],i[0]),Y(r,a==null?void 0:a[1],i[1],"important")):Y(r,a,i));return i}const O=Symbol("class"),k=Symbol("style"),lr=Symbol("is custom element"),nr=Symbol("is html");function ia(r){if(T){var f=!1,a=()=>{if(!f){if(f=!0,r.hasAttribute("value")){var i=r.value;D(r,"value",null),r.value=i}if(r.hasAttribute("checked")){var e=r.checked;D(r,"checked",null),r.checked=e}}};r.__on_r=a,Vr(a),Xr()}}function mr(r,f){f?r.hasAttribute("selected")||r.setAttribute("selected",""):r.removeAttribute("selected")}function D(r,f,a,i){var e=or(r);T&&(e[f]=r.getAttribute(f),f==="src"||f==="srcset"||f==="href"&&r.nodeName==="LINK")||e[f]!==(e[f]=a)&&(f==="loading"&&(r[Dr]=a),a==null?r.removeAttribute(f):typeof a!="string"&&cr(r).includes(f)?r[f]=a:r.setAttribute(f,a))}function ea(r,f,a,i,e=!1){var u=or(r),l=u[lr],d=!u[nr];let A=T&&l;A&&R(!1);var v=f||{},h=r.tagName==="OPTION";for(var b in f)b in a||(a[b]=null);a.class?a.class=Jr(a.class):a[O]&&(a.class=null),a[k]&&(a.style??(a.style=null));var t=cr(r);for(const c in a){let s=a[c];if(h&&c==="value"&&s==null){r.value=r.__value="",v[c]=s;continue}if(c==="class"){var _=r.namespaceURI==="http://www.w3.org/1999/xhtml";jr(r,_,s,i,f==null?void 0:f[O],a[O]),v[c]=s,v[O]=a[O];continue}if(c==="style"){yr(r,s,f==null?void 0:f[k],a[k]),v[c]=s,v[k]=a[k];continue}var n=v[c];if(s!==n){v[c]=s;var N=c[0]+c[1];if(N!=="$$")if(N==="on"){const o={},C="$$"+c;let E=c.slice(2);var p=zr(E);if(Ur(E)&&(E=E.slice(0,-7),o.capture=!0),!p&&n){if(s!=null)continue;r.removeEventListener(E,v[C],o),v[C]=null}if(s!=null)if(p)r[`__${E}`]=s,Pr([E]);else{let I=function(H){v[c].call(this,H)};v[C]=qr(E,r,I,o)}else p&&(r[`__${E}`]=void 0)}else if(c==="style")D(r,c,s);else if(c==="autofocus")Yr(r,!!s);else if(!l&&(c==="__value"||c==="value"&&s!=null))r.value=r.__value=s;else if(c==="selected"&&h)mr(r,s);else{var g=c;d||(g=Br(g));var S=g==="defaultValue"||g==="defaultChecked";if(s==null&&!l&&!S)if(u[c]=null,g==="value"||g==="checked"){let o=r;const C=f===void 0;if(g==="value"){let E=o.defaultValue;o.removeAttribute(g),o.defaultValue=E,o.value=o.__value=C?E:null}else{let E=o.defaultChecked;o.removeAttribute(g),o.defaultChecked=E,o.checked=C?E:!1}}else r.removeAttribute(c);else S||t.includes(g)&&(l||typeof s!="string")?r[g]=s:typeof s!="function"&&D(r,g,s)}}}return A&&R(!0),v}function or(r){return r.__attributes??(r.__attributes={[lr]:r.nodeName.includes("-"),[nr]:r.namespaceURI===Rr})}var ar=new Map;function cr(r){var f=ar.get(r.nodeName);if(f)return f;ar.set(r.nodeName,f=[]);for(var a,i=r,e=Element.prototype;e!==i;){a=$r(i);for(var u in a)a[u].set&&f.push(u);i=Hr(i)}return f}export{D as a,ea as b,fa as e,aa as i,ia as r,yr as s};
