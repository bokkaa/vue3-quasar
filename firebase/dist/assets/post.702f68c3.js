import{aR as a,aS as n,aT as e,aU as u,aV as r,aW as P,aX as h,aY as f,aZ as i,a_ as y,a$ as b,b0 as d,b1 as _,b2 as k,b3 as $,b4 as A}from"./index.a776dc34.js";async function B(t){const o=await a(n(e,"users",t));if(o.exists()){const s=o.data();return{id:t,...s,createdAt:s.createdAt.toDate()}}return null}async function R(t){return(await _(i(e,"posts"),{...t,readCount:0,likeCount:0,commentCount:0,bookmarkCount:0,createdAt:d()})).id}async function U(t){const o=[];t!=null&&t.category&&o.push(u("category","==",t.category)),(t==null?void 0:t.tags)&&(t==null?void 0:t.tags.length)>0&&o.push(u("tags","array-contains-any",t==null?void 0:t.tags)),t!=null&&t.sort&&o.push(r(t.sort,"desc")),t!=null&&t.start&&o.push(P(t.start)),t!=null&&t.limit&&o.push(h(t.limit));const s=f(i(e,"posts"),...o),c=await y(s),S=c.docs.map(l=>{var w;const g=l.data();return{...g,id:l.id,createdAt:(w=g.createdAt)==null?void 0:w.toDate()}}),q=c.docs[c.docs.length-1];return{items:S,lastItem:q}}async function D(t){var c;const o=await a(n(e,"posts",t));if(!o.exists())throw new Error("No such Document!");const s=o.data();return console.log(s),{id:o.id,...s,createdAt:(c=s.createdAt)==null?void 0:c.toDate()}}async function C(t){await b(n(e,"posts",t),{readCount:$(1)})}async function v(t){await C(t);const o=await D(t),s=await B(o.uid);return{post:o,postUser:s}}async function L(t,o){await b(n(e,"posts",t),{...o,updatedAt:d()})}async function T(t){await k(n(e,"posts",t))}async function j(t,o){await A(n(e,"post_likes",`${t}_${o}`),{uid:t,postId:o,createdAt:d()})}async function E(t,o){await k(n(e,"post_likes",`${t}_${o}`))}async function I(t,o){return(await a(n(e,"post_likes",`${t}_${o}`))).exists()}async function N(t,o){await A(n(e,"users",t,"bookmark",o),{createdAt:d()})}async function V(t,o){await k(n(e,"users",t,"bookmark",o))}async function W(t,o){return(await a(n(e,"users",t,"bookmark",o))).exists()}async function X(t){const o=f(i(e,"users",t,"bookmark"),r("createdAt","desc"),h(6)),s=await y(o);return Promise.all(s.docs.map(c=>D(c.id)))}async function Y(){const t=f(i(e,"tags"),u("count",">",0),r("count","desc")),o=await y(t);return console.log(o),o.docs.map(s=>s.data())}export{U as a,B as b,R as c,j as d,W as e,V as f,Y as g,I as h,N as i,X as j,v as k,T as l,D as m,E as r,L as u};
