import"../chunks/CWj6FrbW.js";import{A as y,B as Q,X as q,J as ge,K as me,U as ve,ak as pe,a0 as he,$ as _e,R as X,Q as Y,a2 as ke,V as be,T as $e,al as ye,p as ne,t as z,a as re,c as p,s as R,h as we,r as h,f as F,i as t,am as M,k as D,E as Ce,l as w}from"../chunks/ZCrrH9wl.js";import{i as xe,d as Pe,s as Ee}from"../chunks/DKt29UY_.js";import{i as Ne,s as Le,a as Se}from"../chunks/CVUsDN2D.js";import{e as se,b as Z,i as Ue,m as Ae,g as Re,c as ze,d as Ie,a as ee}from"../chunks/BxEAK-5_.js";import{b as Te,n as Be,a as x,c as G,t as K}from"../chunks/CQjnH1Cc.js";import{p as te}from"../chunks/vBU8t69o.js";import{o as Me}from"../chunks/DbhwGAId.js";import{a as ae}from"../chunks/DMQZ8zXF.js";import"../chunks/C9bT8FLL.js";import{s as V}from"../chunks/DVlighzV.js";import{l as W,p as L,s as oe}from"../chunks/vodOx_S_.js";import{i as We}from"../chunks/CoaNk3M5.js";function je(m,r,v,_,s,n){let a=y;y&&Q();var l,k,o=null;y&&q.nodeType===1&&(o=q,Q());var P=y?q:m,c;ge(()=>{const d=r()||null;var b=pe;d!==l&&(c&&(d===null?be(c,()=>{c=null,k=null}):d===k?$e(c):ye(c)),d&&d!==k&&(c=ve(()=>{if(o=y?o:document.createElementNS(b,d),Te(o,o),_){y&&xe(d)&&o.append(document.createComment(""));var $=y?he(o):o.appendChild(_e());y&&($===null?X(!1):Y($)),_(o,$)}ke.nodes_end=o,P.before(o)})),l=d,l&&(k=l))},me),a&&(X(!0),Y(P))}/**
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
 */const Oe={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var qe=Be("<svg><!><!></svg>");function ie(m,r){const v=W(r,["children","$$slots","$$events","$$legacy"]),_=W(v,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);ne(r,!1);let s=L(r,"name",8,void 0),n=L(r,"color",8,"currentColor"),a=L(r,"size",8,24),l=L(r,"strokeWidth",8,2),k=L(r,"absoluteStrokeWidth",8,!1),o=L(r,"iconNode",24,()=>[]);const P=(...u)=>u.filter((g,E,N)=>!!g&&N.indexOf(g)===E).join(" ");We();var c=qe();let d;var b=p(c);se(b,1,o,Ue,(u,g)=>{let E=()=>t(g)[0],N=()=>t(g)[1];var I=G(),S=F(I);je(S,E,!0,(U,j)=>{let T;z(()=>T=Z(U,T,{...N()}))}),x(u,I)});var $=R(b);V($,r,"default",{}),h(c),z((u,g)=>d=Z(c,d,{...Oe,..._,width:a(),height:a(),stroke:n(),"stroke-width":u,class:g}),[()=>k()?Number(l())*24/Number(a()):l(),()=>P("lucide-icon","lucide",s()?`lucide-${s()}`:"",v.class)],we),x(m,c),re()}function De(m,r){const v=W(r,["children","$$slots","$$events","$$legacy"]);ie(m,oe({name:"chevron-left"},()=>v,{iconNode:[["path",{d:"m15 18-6-6 6-6"}]],children:(s,n)=>{var a=G(),l=F(a);V(l,r,"default",{}),x(s,a)},$$slots:{default:!0}}))}function Fe(m,r){const v=W(r,["children","$$slots","$$events","$$legacy"]);ie(m,oe({name:"chevron-right"},()=>v,{iconNode:[["path",{d:"m9 18 6-6-6-6"}]],children:(s,n)=>{var a=G(),l=F(a);V(l,r,"default",{}),x(s,a)},$$slots:{default:!0}}))}var Ge=K('<img alt="Manga Page">'),Ke=K('<audio class="background-sound" loop><source type="audio/ogg"></audio>'),Ve=K('<div class="container svelte-3n9rkk"><div class="header"><h1> </h1></div> <div class="manga-container svelte-3n9rkk" role="presentation"><button class="nav-button prev-button svelte-3n9rkk"><!></button> <div class="manga-content svelte-3n9rkk"><!> <!></div> <button class="nav-button next-button svelte-3n9rkk"><!></button></div></div>');function it(m,r){ne(r,!0);const[v,_]=Le(),s=()=>Se(Ae,"$manga",v);let n=M(D(parseInt(te.params.chapterIndex))),a=M(D(parseInt(te.params.pageIndex))),l={};const k=async({page:e,chapterIndex:i})=>{const f=`${i}-${e}`;return l[f]===void 0&&(l[f]=URL.createObjectURL(await Re({chapterIndex:i,page:e}))),l[f]};let o={};const P=async e=>(o[e]===void 0&&(o[e]=URL.createObjectURL(await ze(e))),o[e]);let c={};const d=async e=>(c[e]===void 0&&(c[e]=URL.createObjectURL(await Ie(e))),c[e]);let b=M(null),$=M(D([]));function u(e){g(),e instanceof KeyboardEvent&&(e.key==="ArrowLeft"?(e.preventDefault(),E()):e.key==="ArrowRight"&&(e.preventDefault(),N()))}function g(){document.querySelectorAll(".background-sound").forEach(i=>{i instanceof HTMLAudioElement&&i.play().then(()=>{}).catch(f=>{console.error("Background sound play failed:",f)})})}function E(){if(t(a)>0)w(a,t(a)-1);else if(t(n)>0){if(s()&&s().chapters[t(n)-1]){const e=s().chapters[t(n)-1].pages.length-1;w(n,t(n)-1),w(a,e)}}else alert("No more pages");ae(`/chapter/${t(n)}/${t(a)}`,{})}function N(){s()&&s().chapters[t(n)]&&t(a)<s().chapters[t(n)].pages.length-1?w(a,t(a)+1):s()&&t(n)<s().chapters.length-1?(w(a,0),w(n,t(n)+1)):alert("No more pages"),ae(`/chapter/${t(n)}/${t(a)}`,{})}const I=async({page:e,bgm:i,se:f})=>{w(b,await k({page:e,chapterIndex:t(n)}),!0);let C=[];i!==null&&(C=[...C,await P(i)]);for(const fe of f)C=[...C,await d(fe)];w($,C,!0),setTimeout(g,100)};Ce(()=>{if(s()===null){alert("Manga not initialized");return}const e=s().chapters[t(n)];if(e===void 0){alert(`Chapter ${t(n)+1} not found`);return}const i=e.pages[t(a)];if(i===void 0){alert(`Page ${t(a)+1} not found`);return}I(i)}),Me(()=>(document.addEventListener("click",u),document.addEventListener("keydown",u),()=>{document.removeEventListener("click",u),document.removeEventListener("keydown",u)}));var S=Ve(),U=p(S),j=p(U),T=p(j);h(j),h(U);var H=R(U,2),B=p(H);B.__click=E;var le=p(B);De(le,{size:48}),h(B);var A=R(B,2);A.__click=u,A.__keydown=u;var J=p(A);{var ce=e=>{var i=Ge();z(()=>ee(i,"src",t(b))),x(e,i)};Ne(J,e=>{t(b)!==null&&e(ce)})}var de=R(J,2);se(de,16,()=>t($),e=>e,(e,i)=>{var f=Ke(),C=p(f);h(f),z(()=>ee(C,"src",i)),x(e,f)}),h(A);var O=R(A,2);O.__click=N;var ue=p(O);Fe(ue,{size:48}),h(O),h(H),h(S),z(()=>Ee(T,`Chapter ${t(n)+1} - Page ${t(a)+1}`)),x(m,S),re(),_()}Pe(["click","keydown"]);export{it as component};
