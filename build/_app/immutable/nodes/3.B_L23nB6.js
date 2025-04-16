import{b as de,o as ue,p as fe,c as P,q as D,d as ge,t as F}from"../chunks/Cc8CCPXp.js";import{p as y,h as K,d as q,R as me,T as he,o as ve,ay as pe,g as _e,n as ke,s as X,c as J,t as be,X as ye,W as $e,ar as we,q as te,a9 as W,u as ae,aa as w,ac as I,z as Ce,ab as C,a8 as G,A as t,az as T,C as Pe,a2 as Le,D as m}from"../chunks/DXORa8Mb.js";import{i as xe}from"../chunks/Bxv1uYZc.js";import{e as ne,b as Q,i as Ee,a as Y}from"../chunks/CYoyBcLu.js";import{a as Ne,s as Ue}from"../chunks/C3NEGiT9.js";import{m as Se,g as Re,a as je,c as ze,e as Ae}from"../chunks/B524W00X.js";import{o as Z}from"../chunks/eGBEAET3.js";import{a as ee}from"../chunks/CDzZJT79.js";import{i as Te}from"../chunks/ChyuBLAQ.js";import{s as V}from"../chunks/RQ3NXl-3.js";import{l as B,p as N,s as re}from"../chunks/mYDVGgDj.js";function Ie(h,r,v,p,s,n){let a=y;y&&K();var c,_,i=null;y&&q.nodeType===1&&(i=q,K());var L=y?q:h,l;me(()=>{const u=r()||null;var k=pe;u!==c&&(l&&(u===null?ye(l,()=>{l=null,_=null}):u===_?$e(l):we(l)),u&&u!==_&&(l=ve(()=>{if(i=y?i:document.createElementNS(k,u),de(i,i),p){y&&ue(u)&&i.append(document.createComment(""));var b=y?_e(i):i.appendChild(ke());y&&(b===null?X(!1):J(b)),p(i,b)}be.nodes_end=i,L.before(i)})),c=u,c&&(_=c))},he),a&&(X(!0),J(L))}/**
 * @license lucide-svelte v0.474.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 */const We={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Be=fe("<svg><!><!></svg>");function oe(h,r){const v=B(r,["children","$$slots","$$events","$$legacy"]),p=B(v,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);te(r,!1);let s=N(r,"name",8,void 0),n=N(r,"color",8,"currentColor"),a=N(r,"size",8,24),c=N(r,"strokeWidth",8,2),_=N(r,"absoluteStrokeWidth",8,!1),i=N(r,"iconNode",24,()=>[]);const L=(...f)=>f.filter((g,x,E)=>!!g&&E.indexOf(g)===x).join(" ");Te();var l=Be();let u;var k=w(l);ne(k,1,i,Ee,(f,g)=>{let x=()=>t(g)[0],E=()=>t(g)[1];var j=D(),U=G(j);Ie(U,x,!0,(z,S)=>{let A;W(()=>A=Q(z,A,{...E()}))}),P(f,j)});var b=I(k);V(b,r,"default",{}),C(l),W((f,g)=>u=Q(l,u,{...We,...p,width:a(),height:a(),stroke:n(),"stroke-width":f,class:g}),[()=>_()?Number(c())*24/Number(a()):c(),()=>L("lucide-icon","lucide",s()?`lucide-${s()}`:"",v.class)],Ce),P(h,l),ae()}function Me(h,r){const v=B(r,["children","$$slots","$$events","$$legacy"]);oe(h,re({name:"chevron-left"},()=>v,{iconNode:[["path",{d:"m15 18-6-6 6-6"}]],children:(s,n)=>{var a=D(),c=G(a);V(c,r,"default",{}),P(s,a)},$$slots:{default:!0}}))}function Oe(h,r){const v=B(r,["children","$$slots","$$events","$$legacy"]);oe(h,re({name:"chevron-right"},()=>v,{iconNode:[["path",{d:"m9 18 6-6-6-6"}]],children:(s,n)=>{var a=D(),c=G(a);V(c,r,"default",{}),P(s,a)},$$slots:{default:!0}}))}var qe=F('<img alt="Manga Page">'),De=F('<audio class="background-sound" loop><source type="audio/ogg"></audio>'),Fe=F('<div class="container svelte-1e9j59m"><div class="manga-container svelte-1e9j59m" role="presentation"><button class="nav-button svelte-1e9j59m"><!></button> <div class="manga-content svelte-1e9j59m"><!> <!></div> <button class="nav-button svelte-1e9j59m"><!></button></div></div>');function at(h,r){te(r,!0);const[v,p]=Ne(),s=()=>Ue(Se,"$manga",v);let n=T(0),a=T(0);Z(()=>{{const e=new URLSearchParams(window.location.search),o=e.get("chapter"),d=e.get("page");o&&m(n,parseInt(o,10)||0,!0),d&&m(a,parseInt(d,10)||0,!0)}});let c={};const _=async({page:e,chapterIndex:o})=>{const d=`${o}-${e}`;return c[d]===void 0&&(c[d]=URL.createObjectURL(await je({chapterIndex:o,page:e}))),c[d]};let i={};const L=async e=>(i[e]===void 0&&(i[e]=URL.createObjectURL(await ze(e))),i[e]);let l={};const u=async e=>(l[e]===void 0&&(l[e]=URL.createObjectURL(await Ae(e))),l[e]);let k=T(null),b=T(Pe([]));function f(e){g(),e instanceof KeyboardEvent&&(e.key==="ArrowLeft"?(e.preventDefault(),x()):e.key==="ArrowRight"&&(e.preventDefault(),E()))}function g(){document.querySelectorAll(".background-sound").forEach(o=>{o instanceof HTMLAudioElement&&o.play().then(()=>{}).catch(d=>{console.error("Background sound play failed:",d)})})}function x(){if(t(a)>0)m(a,t(a)-1);else if(t(n)>0){if(s()&&s().chapters[t(n)-1]){const e=s().chapters[t(n)-1].pages.length-1;m(n,t(n)-1),m(a,e)}}else{alert("No more pages");return}ee(`/reader/?chapter=${t(n)}&page=${t(a)}`,{})}function E(){if(s()&&s().chapters[t(n)]&&t(a)<s().chapters[t(n)].pages.length-1)m(a,t(a)+1);else if(s()&&t(n)<s().chapters.length-1)m(a,0),m(n,t(n)+1);else{alert("No more pages");return}ee(`/reader/?chapter=${t(n)}&page=${t(a)}`,{})}const j=async({page:e,bgm:o,se:d,voice:O})=>{m(k,await _({page:e,chapterIndex:t(n)}),!0);let $=[];o!==null&&($=[...$,await L(o)]);for(const le of d)$=[...$,await u(le)];O&&($=[...$,URL.createObjectURL(await Re({chapterIndex:t(n),page:e}))]),m(b,$,!0),setTimeout(g,100)};Le(()=>{if(s()===null){alert("Manga not initialized");return}const e=s().chapters[t(n)];if(e===void 0){alert(`Chapter ${t(n)+1} not found`);return}const o=e.pages[t(a)];if(o===void 0){alert(`Page ${t(a)+1} not found`);return}j(o)}),Z(()=>(document.addEventListener("click",f),document.addEventListener("keydown",f),()=>{document.removeEventListener("click",f),document.removeEventListener("keydown",f)}));var U=Fe(),z=w(U),S=w(z);S.__click=x;var A=w(S);Me(A,{size:48}),C(S);var R=I(S,2);R.__click=f,R.__keydown=f;var H=w(R);{var se=e=>{var o=qe();W(()=>Y(o,"src",t(k))),P(e,o)};xe(H,e=>{t(k)!==null&&e(se)})}var ie=I(H,2);ne(ie,16,()=>t(b),e=>e,(e,o)=>{var d=De(),O=w(d);C(d),W(()=>Y(O,"src",o)),P(e,d)}),C(R);var M=I(R,2);M.__click=E;var ce=w(M);Oe(ce,{size:48}),C(M),C(z),C(U),P(h,U),ae(),p()}ge(["click","keydown"]);export{at as component};
