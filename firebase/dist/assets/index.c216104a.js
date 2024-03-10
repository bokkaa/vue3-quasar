const r0=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),rp={},i0="/",ke=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${i0}${r}`,r in rp)return;rp[r]=!0;const i=r.endsWith(".css"),s=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${s}`))return;const o=document.createElement("link");if(o.rel=i?"stylesheet":r0,i||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),i)return new Promise((a,l)=>{o.addEventListener("load",a),o.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};/**
* @vue/shared v3.4.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Yh(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const Ve={},Mi=[],Bt=()=>{},s0=()=>!1,Ll=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Jh=t=>t.startsWith("onUpdate:"),nt=Object.assign,Xh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},o0=Object.prototype.hasOwnProperty,be=(t,e)=>o0.call(t,e),ie=Array.isArray,Fi=t=>Vl(t)==="[object Map]",S_=t=>Vl(t)==="[object Set]",he=t=>typeof t=="function",Ue=t=>typeof t=="string",ds=t=>typeof t=="symbol",Le=t=>t!==null&&typeof t=="object",C_=t=>(Le(t)||he(t))&&he(t.then)&&he(t.catch),P_=Object.prototype.toString,Vl=t=>P_.call(t),a0=t=>Vl(t).slice(8,-1),k_=t=>Vl(t)==="[object Object]",Zh=t=>Ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Fs=Yh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ml=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},l0=/-(\w)/g,xn=Ml(t=>t.replace(l0,(e,n)=>n?n.toUpperCase():"")),c0=/\B([A-Z])/g,pi=Ml(t=>t.replace(c0,"-$1").toLowerCase()),Fl=Ml(t=>t.charAt(0).toUpperCase()+t.slice(1)),Kc=Ml(t=>t?`on${Fl(t)}`:""),Er=(t,e)=>!Object.is(t,e),Gc=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ga=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},u0=t=>{const e=parseFloat(t);return isNaN(e)?t:e},h0=t=>{const e=Ue(t)?Number(t):NaN;return isNaN(e)?t:e};let ip;const x_=()=>ip||(ip=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});function Do(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=Ue(r)?m0(r):Do(r);if(i)for(const s in i)e[s]=i[s]}return e}else if(Ue(t)||Le(t))return t}const d0=/;(?![^(]*\))/g,f0=/:([^]+)/,p0=/\/\*[^]*?\*\//g;function m0(t){const e={};return t.replace(p0,"").split(d0).forEach(n=>{if(n){const r=n.split(f0);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ul(t){let e="";if(Ue(t))e=t;else if(ie(t))for(let n=0;n<t.length;n++){const r=Ul(t[n]);r&&(e+=r+" ")}else if(Le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function lU(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Ue(e)&&(t.class=Ul(e)),n&&(t.style=Do(n)),t}const g0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_0=Yh(g0);function O_(t){return!!t||t===""}const cU=t=>Ue(t)?t:t==null?"":ie(t)||Le(t)&&(t.toString===P_||!he(t.toString))?JSON.stringify(t,D_,2):String(t),D_=(t,e)=>e&&e.__v_isRef?D_(t,e.value):Fi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i],s)=>(n[Qc(r,s)+" =>"]=i,n),{})}:S_(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Qc(n))}:ds(e)?Qc(e):Le(e)&&!ie(e)&&!k_(e)?String(e):e,Qc=(t,e="")=>{var n;return ds(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $t;class N_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=$t,!e&&$t&&(this.index=($t.scopes||($t.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=$t;try{return $t=this,e()}finally{$t=n}}}on(){$t=this}off(){$t=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function L_(t){return new N_(t)}function y0(t,e=$t){e&&e.active&&e.effects.push(t)}function ed(){return $t}function V_(t){$t&&$t.cleanups.push(t)}let Gr;class td{constructor(e,n,r,i){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,y0(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,mi();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(v0(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),gi()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=gr,n=Gr;try{return gr=!0,Gr=this,this._runnings++,sp(this),this.fn()}finally{op(this),this._runnings--,Gr=n,gr=e}}stop(){var e;this.active&&(sp(this),op(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function v0(t){return t.value}function sp(t){t._trackId++,t._depsLength=0}function op(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)M_(t.deps[e],t);t.deps.length=t._depsLength}}function M_(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let gr=!0,zu=0;const F_=[];function mi(){F_.push(gr),gr=!1}function gi(){const t=F_.pop();gr=t===void 0?!0:t}function nd(){zu++}function rd(){for(zu--;!zu&&Hu.length;)Hu.shift()()}function U_(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&M_(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Hu=[];function $_(t,e,n){nd();for(const r of t.keys()){let i;r._dirtyLevel<e&&(i!=null?i:i=t.get(r)===r._trackId)&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(i!=null?i:i=t.get(r)===r._trackId)&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Hu.push(r.scheduler)))}rd()}const B_=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Qa=new WeakMap,Qr=Symbol(""),Wu=Symbol("");function Mt(t,e,n){if(gr&&Gr){let r=Qa.get(t);r||Qa.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=B_(()=>r.delete(n))),U_(Gr,i)}}function jn(t,e,n,r,i,s){const o=Qa.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ie(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||!ds(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ie(t)?Zh(n)&&a.push(o.get("length")):(a.push(o.get(Qr)),Fi(t)&&a.push(o.get(Wu)));break;case"delete":ie(t)||(a.push(o.get(Qr)),Fi(t)&&a.push(o.get(Wu)));break;case"set":Fi(t)&&a.push(o.get(Qr));break}nd();for(const l of a)l&&$_(l,4);rd()}function w0(t,e){var n;return(n=Qa.get(t))==null?void 0:n.get(e)}const E0=Yh("__proto__,__v_isRef,__isVue"),q_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ds)),ap=T0();function T0(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=we(this);for(let s=0,o=this.length;s<o;s++)Mt(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(we)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){mi(),nd();const r=we(this)[e].apply(this,n);return rd(),gi(),r}}),t}function I0(t){const e=we(this);return Mt(e,"has",t),e.hasOwnProperty(t)}class j_{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const i=this._isReadonly,s=this._shallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(i?s?V0:K_:s?W_:H_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ie(e);if(!i){if(o&&be(ap,n))return Reflect.get(ap,n,r);if(n==="hasOwnProperty")return I0}const a=Reflect.get(e,n,r);return(ds(n)?q_.has(n):E0(n))||(i||Mt(e,"get",n),s)?a:ze(a)?o&&Zh(n)?a:a.value:Le(a)?i?Bl(a):ln(a):a}}class z_ extends j_{constructor(e=!1){super(!1,e)}set(e,n,r,i){let s=e[n];if(!this._shallow){const l=Ji(s);if(!Ya(r)&&!Ji(r)&&(s=we(s),r=we(r)),!ie(e)&&ze(s)&&!ze(r))return l?!1:(s.value=r,!0)}const o=ie(e)&&Zh(n)?Number(n)<e.length:be(e,n),a=Reflect.set(e,n,r,i);return e===we(i)&&(o?Er(r,s)&&jn(e,"set",n,r):jn(e,"add",n,r)),a}deleteProperty(e,n){const r=be(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&r&&jn(e,"delete",n,void 0),i}has(e,n){const r=Reflect.has(e,n);return(!ds(n)||!q_.has(n))&&Mt(e,"has",n),r}ownKeys(e){return Mt(e,"iterate",ie(e)?"length":Qr),Reflect.ownKeys(e)}}class b0 extends j_{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const A0=new z_,R0=new b0,S0=new z_(!0),id=t=>t,$l=t=>Reflect.getPrototypeOf(t);function ca(t,e,n=!1,r=!1){t=t.__v_raw;const i=we(t),s=we(e);n||(Er(e,s)&&Mt(i,"get",e),Mt(i,"get",s));const{has:o}=$l(i),a=r?id:n?ad:to;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function ua(t,e=!1){const n=this.__v_raw,r=we(n),i=we(t);return e||(Er(t,i)&&Mt(r,"has",t),Mt(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function ha(t,e=!1){return t=t.__v_raw,!e&&Mt(we(t),"iterate",Qr),Reflect.get(t,"size",t)}function lp(t){t=we(t);const e=we(this);return $l(e).has.call(e,t)||(e.add(t),jn(e,"add",t,t)),this}function cp(t,e){e=we(e);const n=we(this),{has:r,get:i}=$l(n);let s=r.call(n,t);s||(t=we(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?Er(e,o)&&jn(n,"set",t,e):jn(n,"add",t,e),this}function up(t){const e=we(this),{has:n,get:r}=$l(e);let i=n.call(e,t);i||(t=we(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&jn(e,"delete",t,void 0),s}function hp(){const t=we(this),e=t.size!==0,n=t.clear();return e&&jn(t,"clear",void 0,void 0),n}function da(t,e){return function(r,i){const s=this,o=s.__v_raw,a=we(o),l=e?id:t?ad:to;return!t&&Mt(a,"iterate",Qr),o.forEach((c,u)=>r.call(i,l(c),l(u),s))}}function fa(t,e,n){return function(...r){const i=this.__v_raw,s=we(i),o=Fi(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...r),u=n?id:e?ad:to;return!e&&Mt(s,"iterate",l?Wu:Qr),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Zn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function C0(){const t={get(s){return ca(this,s)},get size(){return ha(this)},has:ua,add:lp,set:cp,delete:up,clear:hp,forEach:da(!1,!1)},e={get(s){return ca(this,s,!1,!0)},get size(){return ha(this)},has:ua,add:lp,set:cp,delete:up,clear:hp,forEach:da(!1,!0)},n={get(s){return ca(this,s,!0)},get size(){return ha(this,!0)},has(s){return ua.call(this,s,!0)},add:Zn("add"),set:Zn("set"),delete:Zn("delete"),clear:Zn("clear"),forEach:da(!0,!1)},r={get(s){return ca(this,s,!0,!0)},get size(){return ha(this,!0)},has(s){return ua.call(this,s,!0)},add:Zn("add"),set:Zn("set"),delete:Zn("delete"),clear:Zn("clear"),forEach:da(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=fa(s,!1,!1),n[s]=fa(s,!0,!1),e[s]=fa(s,!1,!0),r[s]=fa(s,!0,!0)}),[t,n,e,r]}const[P0,k0,x0,O0]=C0();function sd(t,e){const n=e?t?O0:x0:t?k0:P0;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(be(n,i)&&i in r?n:r,i,s)}const D0={get:sd(!1,!1)},N0={get:sd(!1,!0)},L0={get:sd(!0,!1)},H_=new WeakMap,W_=new WeakMap,K_=new WeakMap,V0=new WeakMap;function M0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function F0(t){return t.__v_skip||!Object.isExtensible(t)?0:M0(a0(t))}function ln(t){return Ji(t)?t:od(t,!1,A0,D0,H_)}function G_(t){return od(t,!1,S0,N0,W_)}function Bl(t){return od(t,!0,R0,L0,K_)}function od(t,e,n,r,i){if(!Le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=F0(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function zn(t){return Ji(t)?zn(t.__v_raw):!!(t&&t.__v_isReactive)}function Ji(t){return!!(t&&t.__v_isReadonly)}function Ya(t){return!!(t&&t.__v_isShallow)}function Q_(t){return zn(t)||Ji(t)}function we(t){const e=t&&t.__v_raw;return e?we(e):t}function Sr(t){return Object.isExtensible(t)&&Ga(t,"__v_skip",!0),t}const to=t=>Le(t)?ln(t):t,ad=t=>Le(t)?Bl(t):t;class Y_{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new td(()=>e(this._value),()=>Us(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=we(this);return(!e._cacheable||e.effect.dirty)&&Er(e._value,e._value=e.effect.run())&&Us(e,4),ld(e),e.effect._dirtyLevel>=2&&Us(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function U0(t,e,n=!1){let r,i;const s=he(t);return s?(r=t,i=Bt):(r=t.get,i=t.set),new Y_(r,i,s||!i,n)}function ld(t){var e;gr&&Gr&&(t=we(t),U_(Gr,(e=t.dep)!=null?e:t.dep=B_(()=>t.dep=void 0,t instanceof Y_?t:void 0)))}function Us(t,e=4,n){t=we(t);const r=t.dep;r&&$_(r,e)}function ze(t){return!!(t&&t.__v_isRef===!0)}function _e(t){return J_(t,!1)}function Ja(t){return J_(t,!0)}function J_(t,e){return ze(t)?t:new $0(t,e)}class $0{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:we(e),this._value=n?e:to(e)}get value(){return ld(this),this._value}set value(e){const n=this.__v_isShallow||Ya(e)||Ji(e);e=n?e:we(e),Er(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:to(e),Us(this,4))}}function Ot(t){return ze(t)?t.value:t}const B0={get:(t,e,n)=>Ot(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return ze(i)&&!ze(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function X_(t){return zn(t)?t:new Proxy(t,B0)}class q0{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=e(()=>ld(this),()=>Us(this));this._get=n,this._set=r}get value(){return this._get()}set value(e){this._set(e)}}function j0(t){return new q0(t)}function z0(t){const e=ie(t)?new Array(t.length):{};for(const n in t)e[n]=ey(t,n);return e}class H0{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return w0(we(this._object),this._key)}}class W0{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Z_(t,e,n){return ze(t)?t:he(t)?new W0(t):Le(t)&&arguments.length>1?ey(t,e,n):_e(t)}function ey(t,e,n){const r=t[e];return ze(r)?r:new H0(t,e,n)}/**
* @vue/runtime-core v3.4.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _r(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){No(s,e,n)}return i}function Jt(t,e,n,r){if(he(t)){const s=_r(t,e,n,r);return s&&C_(s)&&s.catch(o=>{No(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(Jt(t[s],e,n,r));return i}function No(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){_r(l,null,10,[t,o,a]);return}}K0(t,n,i,r)}function K0(t,e,n,r=!0){console.error(t)}let no=!1,Ku=!1;const Tt=[];let wn=0;const Ui=[];let sr=null,Mr=0;const ty=Promise.resolve();let cd=null;function un(t){const e=cd||ty;return t?e.then(this?t.bind(this):t):e}function G0(t){let e=wn+1,n=Tt.length;for(;e<n;){const r=e+n>>>1,i=Tt[r],s=ro(i);s<t||s===t&&i.pre?e=r+1:n=r}return e}function ql(t){(!Tt.length||!Tt.includes(t,no&&t.allowRecurse?wn+1:wn))&&(t.id==null?Tt.push(t):Tt.splice(G0(t.id),0,t),ny())}function ny(){!no&&!Ku&&(Ku=!0,cd=ty.then(iy))}function Q0(t){const e=Tt.indexOf(t);e>wn&&Tt.splice(e,1)}function Y0(t){ie(t)?Ui.push(...t):(!sr||!sr.includes(t,t.allowRecurse?Mr+1:Mr))&&Ui.push(t),ny()}function dp(t,e,n=no?wn+1:0){for(;n<Tt.length;n++){const r=Tt[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;Tt.splice(n,1),n--,r()}}}function ry(t){if(Ui.length){const e=[...new Set(Ui)].sort((n,r)=>ro(n)-ro(r));if(Ui.length=0,sr){sr.push(...e);return}for(sr=e,Mr=0;Mr<sr.length;Mr++)sr[Mr]();sr=null,Mr=0}}const ro=t=>t.id==null?1/0:t.id,J0=(t,e)=>{const n=ro(t)-ro(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function iy(t){Ku=!1,no=!0,Tt.sort(J0);const e=Bt;try{for(wn=0;wn<Tt.length;wn++){const n=Tt[wn];n&&n.active!==!1&&_r(n,null,14)}}finally{wn=0,Tt.length=0,ry(),no=!1,cd=null,(Tt.length||Ui.length)&&iy()}}function X0(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ve;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Ve;d&&(i=n.map(f=>Ue(f)?f.trim():f)),h&&(i=n.map(u0))}let a,l=r[a=Kc(e)]||r[a=Kc(xn(e))];!l&&s&&(l=r[a=Kc(pi(e))]),l&&Jt(l,t,6,i);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Jt(c,t,6,i)}}function sy(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!he(t)){const l=c=>{const u=sy(c,e,!0);u&&(a=!0,nt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(Le(t)&&r.set(t,null),null):(ie(s)?s.forEach(l=>o[l]=null):nt(o,s),Le(t)&&r.set(t,o),o)}function jl(t,e){return!t||!Ll(e)?!1:(e=e.slice(2).replace(/Once$/,""),be(t,e[0].toLowerCase()+e.slice(1))||be(t,pi(e))||be(t,e))}let tt=null,oy=null;function Xa(t){const e=tt;return tt=t,oy=t&&t.type.__scopeId||null,e}function je(t,e=tt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Rp(-1);const s=Xa(e);let o;try{o=t(...i)}finally{Xa(s),r._d&&Rp(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Yc(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:p,inheritAttrs:v}=t;let _,w;const y=Xa(t);try{if(n.shapeFlag&4){const T=i||r,b=T;_=vn(u.call(b,T,h,s,f,d,p)),w=l}else{const T=e;_=vn(T.length>1?T(s,{attrs:l,slots:a,emit:c}):T(s,null)),w=e.props?l:Z0(l)}}catch(T){js.length=0,No(T,t,1),_=oe(Xt)}let E=_;if(w&&v!==!1){const T=Object.keys(w),{shapeFlag:b}=E;T.length&&b&7&&(o&&T.some(Jh)&&(w=eb(w,o)),E=Tr(E,w))}return n.dirs&&(E=Tr(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),_=E,Xa(y),_}const Z0=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ll(n))&&((e||(e={}))[n]=t[n]);return e},eb=(t,e)=>{const n={};for(const r in t)(!Jh(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function tb(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?fp(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!jl(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?fp(r,o,c):!0:!!o;return!1}function fp(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!jl(n,s))return!0}return!1}function nb({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const ud="components";function ay(t,e){return cy(ud,t,!0,e)||t}const ly=Symbol.for("v-ndc");function rb(t){return Ue(t)?cy(ud,t,!1)||t:t||ly}function cy(t,e,n=!0,r=!1){const i=tt||it;if(i){const s=i.type;if(t===ud){const a=Jb(s,!1);if(a&&(a===e||a===xn(e)||a===Fl(xn(e))))return s}const o=pp(i[t]||s[t],e)||pp(i.appContext[t],e);return!o&&r?s:o}}function pp(t,e){return t&&(t[e]||t[xn(e)]||t[Fl(xn(e))])}const ib=t=>t.__isSuspense;function sb(t,e){e&&e.pendingBranch?ie(t)?e.effects.push(...t):e.effects.push(t):Y0(t)}const ob=Symbol.for("v-scx"),ab=()=>Pt(ob);function uU(t,e){return hd(t,null,e)}const pa={};function xe(t,e,n){return hd(t,e,n)}function hd(t,e,{immediate:n,deep:r,flush:i,once:s,onTrack:o,onTrigger:a}=Ve){if(e&&s){const x=e;e=(...N)=>{x(...N),b()}}const l=it,c=x=>r===!0?x:$r(x,r===!1?1:void 0);let u,h=!1,d=!1;if(ze(t)?(u=()=>t.value,h=Ya(t)):zn(t)?(u=()=>c(t),h=!0):ie(t)?(d=!0,h=t.some(x=>zn(x)||Ya(x)),u=()=>t.map(x=>{if(ze(x))return x.value;if(zn(x))return c(x);if(he(x))return _r(x,l,2)})):he(t)?e?u=()=>_r(t,l,2):u=()=>(f&&f(),Jt(t,l,3,[p])):u=Bt,e&&r){const x=u;u=()=>$r(x())}let f,p=x=>{f=E.onStop=()=>{_r(x,l,4),f=E.onStop=void 0}},v;if(Mo)if(p=Bt,e?n&&Jt(e,l,3,[u(),d?[]:void 0,p]):u(),i==="sync"){const x=ab();v=x.__watcherHandles||(x.__watcherHandles=[])}else return Bt;let _=d?new Array(t.length).fill(pa):pa;const w=()=>{if(!(!E.active||!E.dirty))if(e){const x=E.run();(r||h||(d?x.some((N,A)=>Er(N,_[A])):Er(x,_)))&&(f&&f(),Jt(e,l,3,[x,_===pa?void 0:d&&_[0]===pa?[]:_,p]),_=x)}else E.run()};w.allowRecurse=!!e;let y;i==="sync"?y=w:i==="post"?y=()=>xt(w,l&&l.suspense):(w.pre=!0,l&&(w.id=l.uid),y=()=>ql(w));const E=new td(u,Bt,y),T=ed(),b=()=>{E.stop(),T&&Xh(T.effects,E)};return e?n?w():_=E.run():i==="post"?xt(E.run.bind(E),l&&l.suspense):E.run(),v&&v.push(b),b}function lb(t,e,n){const r=this.proxy,i=Ue(t)?t.includes(".")?uy(r,t):()=>r[t]:t.bind(r,r);let s;he(e)?s=e:(s=e.handler,n=e);const o=Vo(this),a=hd(i,s.bind(r),n);return o(),a}function uy(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function $r(t,e,n=0,r){if(!Le(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),ze(t))$r(t.value,e,n,r);else if(ie(t))for(let i=0;i<t.length;i++)$r(t[i],e,n,r);else if(S_(t)||Fi(t))t.forEach(i=>{$r(i,e,n,r)});else if(k_(t))for(const i in t)$r(t[i],e,n,r);return t}function $i(t,e){if(tt===null)return t;const n=Yl(tt)||tt.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[s,o,a,l=Ve]=e[i];s&&(he(s)&&(s={mounted:s,updated:s}),s.deep&&$r(o),r.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Or(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(mi(),Jt(l,n,8,[t.el,a,t,e]),gi())}}const or=Symbol("_leaveCb"),ma=Symbol("_enterCb");function hy(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Hn(()=>{t.isMounted=!0}),Ft(()=>{t.isUnmounting=!0}),t}const Gt=[Function,Array],dy={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Gt,onEnter:Gt,onAfterEnter:Gt,onEnterCancelled:Gt,onBeforeLeave:Gt,onLeave:Gt,onAfterLeave:Gt,onLeaveCancelled:Gt,onBeforeAppear:Gt,onAppear:Gt,onAfterAppear:Gt,onAppearCancelled:Gt},cb={name:"BaseTransition",props:dy,setup(t,{slots:e}){const n=Qe(),r=hy();let i;return()=>{const s=e.default&&dd(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const v of s)if(v.type!==Xt){o=v;break}}const a=we(t),{mode:l}=a;if(r.isLeaving)return Jc(o);const c=mp(o);if(!c)return Jc(o);const u=io(c,a,r,n);so(c,u);const h=n.subTree,d=h&&mp(h);let f=!1;const{getTransitionKey:p}=c.type;if(p){const v=p();i===void 0?i=v:v!==i&&(i=v,f=!0)}if(d&&d.type!==Xt&&(!Fr(c,d)||f)){const v=io(d,a,r,n);if(so(d,v),l==="out-in")return r.isLeaving=!0,v.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Jc(o);l==="in-out"&&c.type!==Xt&&(v.delayLeave=(_,w,y)=>{const E=fy(r,d);E[String(d.key)]=d,_[or]=()=>{w(),_[or]=void 0,delete u.delayedLeave},u.delayedLeave=y})}return o}}},ub=cb;function fy(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function io(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:v,onAppear:_,onAfterAppear:w,onAppearCancelled:y}=e,E=String(t.key),T=fy(n,t),b=(A,R)=>{A&&Jt(A,r,9,R)},x=(A,R)=>{const $=R[1];b(A,R),ie(A)?A.every(Q=>Q.length<=1)&&$():A.length<=1&&$()},N={mode:s,persisted:o,beforeEnter(A){let R=a;if(!n.isMounted)if(i)R=v||a;else return;A[or]&&A[or](!0);const $=T[E];$&&Fr(t,$)&&$.el[or]&&$.el[or](),b(R,[A])},enter(A){let R=l,$=c,Q=u;if(!n.isMounted)if(i)R=_||l,$=w||c,Q=y||u;else return;let F=!1;const re=A[ma]=z=>{F||(F=!0,z?b(Q,[A]):b($,[A]),N.delayedLeave&&N.delayedLeave(),A[ma]=void 0)};R?x(R,[A,re]):re()},leave(A,R){const $=String(t.key);if(A[ma]&&A[ma](!0),n.isUnmounting)return R();b(h,[A]);let Q=!1;const F=A[or]=re=>{Q||(Q=!0,R(),re?b(p,[A]):b(f,[A]),A[or]=void 0,T[$]===t&&delete T[$])};T[$]=t,d?x(d,[A,F]):F()},clone(A){return io(A,e,n,r)}};return N}function Jc(t){if(Lo(t))return t=Tr(t),t.children=null,t}function mp(t){return Lo(t)?t.children?t.children[0]:void 0:t}function so(t,e){t.shapeFlag&6&&t.component?so(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function dd(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Dt?(o.patchFlag&128&&i++,r=r.concat(dd(o.children,e,a))):(e||o.type!==Xt)&&r.push(a!=null?Tr(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function zl(t,e){return he(t)?(()=>nt({name:t.name},e,{setup:t}))():t}const $s=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Xc(t){he(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:i=200,timeout:s,suspensible:o=!0,onError:a}=t;let l=null,c,u=0;const h=()=>(u++,l=null,d()),d=()=>{let f;return l||(f=l=e().catch(p=>{if(p=p instanceof Error?p:new Error(String(p)),a)return new Promise((v,_)=>{a(p,()=>v(h()),()=>_(p),u+1)});throw p}).then(p=>f!==l&&l?l:(p&&(p.__esModule||p[Symbol.toStringTag]==="Module")&&(p=p.default),c=p,p)))};return zl({name:"AsyncComponentWrapper",__asyncLoader:d,get __asyncResolved(){return c},setup(){const f=it;if(c)return()=>Zc(c,f);const p=y=>{l=null,No(y,f,13,!r)};if(o&&f.suspense||Mo)return d().then(y=>()=>Zc(y,f)).catch(y=>(p(y),()=>r?oe(r,{error:y}):null));const v=_e(!1),_=_e(),w=_e(!!i);return i&&setTimeout(()=>{w.value=!1},i),s!=null&&setTimeout(()=>{if(!v.value&&!_.value){const y=new Error(`Async component timed out after ${s}ms.`);p(y),_.value=y}},s),d().then(()=>{v.value=!0,f.parent&&Lo(f.parent.vnode)&&(f.parent.effect.dirty=!0,ql(f.parent.update))}).catch(y=>{p(y),_.value=y}),()=>{if(v.value&&c)return Zc(c,f);if(_.value&&r)return oe(r,{error:_.value});if(n&&!w.value)return oe(n)}}})}function Zc(t,e){const{ref:n,props:r,children:i,ce:s}=e.vnode,o=oe(t,r,i);return o.ref=n,o.ce=s,delete e.vnode.ce,o}const Lo=t=>t.type.__isKeepAlive;function hb(t,e){py(t,"a",e)}function fd(t,e){py(t,"da",e)}function py(t,e,n=it){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Hl(e,r,n),n){let i=n.parent;for(;i&&i.parent;)Lo(i.parent.vnode)&&db(r,e,n,i),i=i.parent}}function db(t,e,n,r){const i=Hl(e,t,r,!0);Wl(()=>{Xh(r[e],i)},n)}function Hl(t,e,n=it,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;mi();const a=Vo(n),l=Jt(e,n,t,o);return a(),gi(),l});return r?i.unshift(s):i.push(s),s}}const Qn=t=>(e,n=it)=>(!Mo||t==="sp")&&Hl(t,(...r)=>e(...r),n),fb=Qn("bm"),Hn=Qn("m"),pb=Qn("bu"),my=Qn("u"),Ft=Qn("bum"),Wl=Qn("um"),mb=Qn("sp"),gb=Qn("rtg"),_b=Qn("rtc");function gy(t,e=it){Hl("ec",t,e)}function hU(t,e,n,r){let i;const s=n&&n[r];if(ie(t)||Ue(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(Le(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}function dU(t,e){for(let n=0;n<e.length;n++){const r=e[n];if(ie(r))for(let i=0;i<r.length;i++)t[r[i].name]=r[i].fn;else r&&(t[r.name]=r.key?(...i)=>{const s=r.fn(...i);return s&&(s.key=r.key),s}:r.fn)}return t}function fU(t,e,n={},r,i){if(tt.isCE||tt.parent&&$s(tt.parent)&&tt.parent.isCE)return e!=="default"&&(n.name=e),oe("slot",n,r&&r());let s=t[e];s&&s._c&&(s._d=!1),an();const o=s&&_y(s(n)),a=En(Dt,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function _y(t){return t.some(e=>el(e)?!(e.type===Xt||e.type===Dt&&!_y(e.children)):!0)?t:null}const Gu=t=>t?ky(t)?Yl(t)||t.proxy:Gu(t.parent):null,Bs=nt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Gu(t.parent),$root:t=>Gu(t.root),$emit:t=>t.emit,$options:t=>pd(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,ql(t.update)}),$nextTick:t=>t.n||(t.n=un.bind(t.proxy)),$watch:t=>lb.bind(t)}),eu=(t,e)=>t!==Ve&&!t.__isScriptSetup&&be(t,e),yb={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(eu(r,e))return o[e]=1,r[e];if(i!==Ve&&be(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&be(c,e))return o[e]=3,s[e];if(n!==Ve&&be(n,e))return o[e]=4,n[e];Qu&&(o[e]=0)}}const u=Bs[e];let h,d;if(u)return e==="$attrs"&&Mt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ve&&be(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,be(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return eu(i,e)?(i[e]=n,!0):r!==Ve&&be(r,e)?(r[e]=n,!0):be(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==Ve&&be(t,o)||eu(e,o)||(a=s[0])&&be(a,o)||be(r,o)||be(Bs,o)||be(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:be(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function gp(t){return ie(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Qu=!0;function vb(t){const e=pd(t),n=t.proxy,r=t.ctx;Qu=!1,e.beforeCreate&&_p(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:p,activated:v,deactivated:_,beforeDestroy:w,beforeUnmount:y,destroyed:E,unmounted:T,render:b,renderTracked:x,renderTriggered:N,errorCaptured:A,serverPrefetch:R,expose:$,inheritAttrs:Q,components:F,directives:re,filters:z}=e;if(c&&wb(c,r,null),o)for(const me in o){const de=o[me];he(de)&&(r[me]=de.bind(n))}if(i){const me=i.call(n,n);Le(me)&&(t.data=ln(me))}if(Qu=!0,s)for(const me in s){const de=s[me],Be=he(de)?de.bind(n,n):he(de.get)?de.get.bind(n,n):Bt,ut=!he(de)&&he(de.set)?de.set.bind(n):Bt,ht=V({get:Be,set:ut});Object.defineProperty(r,me,{enumerable:!0,configurable:!0,get:()=>ht.value,set:qe=>ht.value=qe})}if(a)for(const me in a)yy(a[me],r,n,me);if(l){const me=he(l)?l.call(n):l;Reflect.ownKeys(me).forEach(de=>{qi(de,me[de])})}u&&_p(u,t,"c");function ee(me,de){ie(de)?de.forEach(Be=>me(Be.bind(n))):de&&me(de.bind(n))}if(ee(fb,h),ee(Hn,d),ee(pb,f),ee(my,p),ee(hb,v),ee(fd,_),ee(gy,A),ee(_b,x),ee(gb,N),ee(Ft,y),ee(Wl,T),ee(mb,R),ie($))if($.length){const me=t.exposed||(t.exposed={});$.forEach(de=>{Object.defineProperty(me,de,{get:()=>n[de],set:Be=>n[de]=Be})})}else t.exposed||(t.exposed={});b&&t.render===Bt&&(t.render=b),Q!=null&&(t.inheritAttrs=Q),F&&(t.components=F),re&&(t.directives=re)}function wb(t,e,n=Bt){ie(t)&&(t=Yu(t));for(const r in t){const i=t[r];let s;Le(i)?"default"in i?s=Pt(i.from||r,i.default,!0):s=Pt(i.from||r):s=Pt(i),ze(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function _p(t,e,n){Jt(ie(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function yy(t,e,n,r){const i=r.includes(".")?uy(n,r):()=>n[r];if(Ue(t)){const s=e[t];he(s)&&xe(i,s)}else if(he(t))xe(i,t.bind(n));else if(Le(t))if(ie(t))t.forEach(s=>yy(s,e,n,r));else{const s=he(t.handler)?t.handler.bind(n):e[t.handler];he(s)&&xe(i,s,t)}}function pd(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(c=>Za(l,c,o,!0)),Za(l,e,o)),Le(e)&&s.set(e,l),l}function Za(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Za(t,s,n,!0),i&&i.forEach(o=>Za(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Eb[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Eb={data:yp,props:vp,emits:vp,methods:Cs,computed:Cs,beforeCreate:St,created:St,beforeMount:St,mounted:St,beforeUpdate:St,updated:St,beforeDestroy:St,beforeUnmount:St,destroyed:St,unmounted:St,activated:St,deactivated:St,errorCaptured:St,serverPrefetch:St,components:Cs,directives:Cs,watch:Ib,provide:yp,inject:Tb};function yp(t,e){return e?t?function(){return nt(he(t)?t.call(this,this):t,he(e)?e.call(this,this):e)}:e:t}function Tb(t,e){return Cs(Yu(t),Yu(e))}function Yu(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function St(t,e){return t?[...new Set([].concat(t,e))]:e}function Cs(t,e){return t?nt(Object.create(null),t,e):e}function vp(t,e){return t?ie(t)&&ie(e)?[...new Set([...t,...e])]:nt(Object.create(null),gp(t),gp(e!=null?e:{})):e}function Ib(t,e){if(!t)return e;if(!e)return t;const n=nt(Object.create(null),t);for(const r in e)n[r]=St(t[r],e[r]);return n}function vy(){return{app:null,config:{isNativeTag:s0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let bb=0;function Ab(t,e){return function(r,i=null){he(r)||(r=nt({},r)),i!=null&&!Le(i)&&(i=null);const s=vy(),o=new WeakSet;let a=!1;const l=s.app={_uid:bb++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Zb,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&he(c.install)?(o.add(c),c.install(l,...u)):he(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const d=oe(r,i);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Yl(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){const u=Bi;Bi=l;try{return c()}finally{Bi=u}}};return l}}let Bi=null;function qi(t,e){if(it){let n=it.provides;const r=it.parent&&it.parent.provides;r===n&&(n=it.provides=Object.create(r)),n[t]=e}}function Pt(t,e,n=!1){const r=it||tt;if(r||Bi){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Bi._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&he(e)?e.call(r&&r.proxy):e}}function Rb(){return!!(it||tt||Bi)}function Sb(t,e,n,r=!1){const i={},s={};Ga(s,Gl,1),t.propsDefaults=Object.create(null),wy(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:G_(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function Cb(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=we(i),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(jl(t.emitsOptions,d))continue;const f=e[d];if(l)if(be(s,d))f!==s[d]&&(s[d]=f,c=!0);else{const p=xn(d);i[p]=Ju(l,a,p,f,t,!1)}else f!==s[d]&&(s[d]=f,c=!0)}}}else{wy(t,e,i,s)&&(c=!0);let u;for(const h in a)(!e||!be(e,h)&&((u=pi(h))===h||!be(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Ju(l,a,h,void 0,t,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!be(e,h)&&!0)&&(delete s[h],c=!0)}c&&jn(t,"set","$attrs")}function wy(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Fs(l))continue;const c=e[l];let u;i&&be(i,u=xn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:jl(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(s){const l=we(n),c=a||Ve;for(let u=0;u<s.length;u++){const h=s[u];n[h]=Ju(i,l,h,c[h],t,!be(c,h))}}return o}function Ju(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=be(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&he(l)){const{propsDefaults:c}=i;if(n in c)r=c[n];else{const u=Vo(i);r=c[n]=l.call(null,e),u()}}else r=l}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===pi(n))&&(r=!0))}return r}function Ey(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let l=!1;if(!he(t)){const u=h=>{l=!0;const[d,f]=Ey(h,e,!0);nt(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return Le(t)&&r.set(t,Mi),Mi;if(ie(s))for(let u=0;u<s.length;u++){const h=xn(s[u]);wp(h)&&(o[h]=Ve)}else if(s)for(const u in s){const h=xn(u);if(wp(h)){const d=s[u],f=o[h]=ie(d)||he(d)?{type:d}:nt({},d);if(f){const p=Ip(Boolean,f.type),v=Ip(String,f.type);f[0]=p>-1,f[1]=v<0||p<v,(p>-1||be(f,"default"))&&a.push(h)}}}const c=[o,a];return Le(t)&&r.set(t,c),c}function wp(t){return t[0]!=="$"&&!Fs(t)}function Ep(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Tp(t,e){return Ep(t)===Ep(e)}function Ip(t,e){return ie(e)?e.findIndex(n=>Tp(n,t)):he(e)&&Tp(e,t)?0:-1}const Ty=t=>t[0]==="_"||t==="$stable",md=t=>ie(t)?t.map(vn):[vn(t)],Pb=(t,e,n)=>{if(e._n)return e;const r=je((...i)=>md(e(...i)),n);return r._c=!1,r},Iy=(t,e,n)=>{const r=t._ctx;for(const i in t){if(Ty(i))continue;const s=t[i];if(he(s))e[i]=Pb(i,s,r);else if(s!=null){const o=md(s);e[i]=()=>o}}},by=(t,e)=>{const n=md(e);t.slots.default=()=>n},kb=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=we(e),Ga(e,"_",n)):Iy(e,t.slots={})}else t.slots={},e&&by(t,e);Ga(t.slots,Gl,1)},xb=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=Ve;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(nt(i,e),!n&&a===1&&delete i._):(s=!e.$stable,Iy(e,i)),o=e}else e&&(by(t,e),o={default:1});if(s)for(const a in i)!Ty(a)&&o[a]==null&&delete i[a]};function Xu(t,e,n,r,i=!1){if(ie(t)){t.forEach((d,f)=>Xu(d,e&&(ie(e)?e[f]:e),n,r,i));return}if($s(r)&&!i)return;const s=r.shapeFlag&4?Yl(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ve?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Ue(c)?(u[c]=null,be(h,c)&&(h[c]=null)):ze(c)&&(c.value=null)),he(l))_r(l,a,12,[o,u]);else{const d=Ue(l),f=ze(l);if(d||f){const p=()=>{if(t.f){const v=d?be(h,l)?h[l]:u[l]:l.value;i?ie(v)&&Xh(v,s):ie(v)?v.includes(s)||v.push(s):d?(u[l]=[s],be(h,l)&&(h[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,be(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(p.id=-1,xt(p,n)):p()}}}const xt=sb;function Ob(t){return Db(t)}function Db(t,e){const n=x_();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=Bt,insertStaticContent:p}=t,v=(m,g,I,O=null,k=null,U=null,G=void 0,M=null,q=!!g.dynamicChildren)=>{if(m===g)return;m&&!Fr(m,g)&&(O=S(m),qe(m,k,U,!0),m=null),g.patchFlag===-2&&(q=!1,g.dynamicChildren=null);const{type:L,ref:Y,shapeFlag:te}=g;switch(L){case Kl:_(m,g,I,O);break;case Xt:w(m,g,I,O);break;case Da:m==null&&y(g,I,O,G);break;case Dt:F(m,g,I,O,k,U,G,M,q);break;default:te&1?b(m,g,I,O,k,U,G,M,q):te&6?re(m,g,I,O,k,U,G,M,q):(te&64||te&128)&&L.process(m,g,I,O,k,U,G,M,q,J)}Y!=null&&k&&Xu(Y,m&&m.ref,U,g||m,!g)},_=(m,g,I,O)=>{if(m==null)r(g.el=a(g.children),I,O);else{const k=g.el=m.el;g.children!==m.children&&c(k,g.children)}},w=(m,g,I,O)=>{m==null?r(g.el=l(g.children||""),I,O):g.el=m.el},y=(m,g,I,O)=>{[m.el,m.anchor]=p(m.children,g,I,O,m.el,m.anchor)},E=({el:m,anchor:g},I,O)=>{let k;for(;m&&m!==g;)k=d(m),r(m,I,O),m=k;r(g,I,O)},T=({el:m,anchor:g})=>{let I;for(;m&&m!==g;)I=d(m),i(m),m=I;i(g)},b=(m,g,I,O,k,U,G,M,q)=>{g.type==="svg"?G="svg":g.type==="math"&&(G="mathml"),m==null?x(g,I,O,k,U,G,M,q):R(m,g,k,U,G,M,q)},x=(m,g,I,O,k,U,G,M)=>{let q,L;const{props:Y,shapeFlag:te,transition:Z,dirs:ce}=m;if(q=m.el=o(m.type,U,Y&&Y.is,Y),te&8?u(q,m.children):te&16&&A(m.children,q,null,O,k,tu(m,U),G,M),ce&&Or(m,null,O,"created"),N(q,m,m.scopeId,G,O),Y){for(const Pe in Y)Pe!=="value"&&!Fs(Pe)&&s(q,Pe,null,Y[Pe],U,m.children,O,k,ge);"value"in Y&&s(q,"value",null,Y.value,U),(L=Y.onVnodeBeforeMount)&&yn(L,O,m)}ce&&Or(m,null,O,"beforeMount");const ye=Nb(k,Z);ye&&Z.beforeEnter(q),r(q,g,I),((L=Y&&Y.onVnodeMounted)||ye||ce)&&xt(()=>{L&&yn(L,O,m),ye&&Z.enter(q),ce&&Or(m,null,O,"mounted")},k)},N=(m,g,I,O,k)=>{if(I&&f(m,I),O)for(let U=0;U<O.length;U++)f(m,O[U]);if(k){let U=k.subTree;if(g===U){const G=k.vnode;N(m,G,G.scopeId,G.slotScopeIds,k.parent)}}},A=(m,g,I,O,k,U,G,M,q=0)=>{for(let L=q;L<m.length;L++){const Y=m[L]=M?ar(m[L]):vn(m[L]);v(null,Y,g,I,O,k,U,G,M)}},R=(m,g,I,O,k,U,G)=>{const M=g.el=m.el;let{patchFlag:q,dynamicChildren:L,dirs:Y}=g;q|=m.patchFlag&16;const te=m.props||Ve,Z=g.props||Ve;let ce;if(I&&Dr(I,!1),(ce=Z.onVnodeBeforeUpdate)&&yn(ce,I,g,m),Y&&Or(g,m,I,"beforeUpdate"),I&&Dr(I,!0),L?$(m.dynamicChildren,L,M,I,O,tu(g,k),U):G||de(m,g,M,null,I,O,tu(g,k),U,!1),q>0){if(q&16)Q(M,g,te,Z,I,O,k);else if(q&2&&te.class!==Z.class&&s(M,"class",null,Z.class,k),q&4&&s(M,"style",te.style,Z.style,k),q&8){const ye=g.dynamicProps;for(let Pe=0;Pe<ye.length;Pe++){const Fe=ye[Pe],ot=te[Fe],rn=Z[Fe];(rn!==ot||Fe==="value")&&s(M,Fe,ot,rn,k,m.children,I,O,ge)}}q&1&&m.children!==g.children&&u(M,g.children)}else!G&&L==null&&Q(M,g,te,Z,I,O,k);((ce=Z.onVnodeUpdated)||Y)&&xt(()=>{ce&&yn(ce,I,g,m),Y&&Or(g,m,I,"updated")},O)},$=(m,g,I,O,k,U,G)=>{for(let M=0;M<g.length;M++){const q=m[M],L=g[M],Y=q.el&&(q.type===Dt||!Fr(q,L)||q.shapeFlag&70)?h(q.el):I;v(q,L,Y,null,O,k,U,G,!0)}},Q=(m,g,I,O,k,U,G)=>{if(I!==O){if(I!==Ve)for(const M in I)!Fs(M)&&!(M in O)&&s(m,M,I[M],null,G,g.children,k,U,ge);for(const M in O){if(Fs(M))continue;const q=O[M],L=I[M];q!==L&&M!=="value"&&s(m,M,L,q,G,g.children,k,U,ge)}"value"in O&&s(m,"value",I.value,O.value,G)}},F=(m,g,I,O,k,U,G,M,q)=>{const L=g.el=m?m.el:a(""),Y=g.anchor=m?m.anchor:a("");let{patchFlag:te,dynamicChildren:Z,slotScopeIds:ce}=g;ce&&(M=M?M.concat(ce):ce),m==null?(r(L,I,O),r(Y,I,O),A(g.children||[],I,Y,k,U,G,M,q)):te>0&&te&64&&Z&&m.dynamicChildren?($(m.dynamicChildren,Z,I,k,U,G,M),(g.key!=null||k&&g===k.subTree)&&gd(m,g,!0)):de(m,g,I,Y,k,U,G,M,q)},re=(m,g,I,O,k,U,G,M,q)=>{g.slotScopeIds=M,m==null?g.shapeFlag&512?k.ctx.activate(g,I,O,G,q):z(g,I,O,k,U,G,q):se(m,g,q)},z=(m,g,I,O,k,U,G)=>{const M=m.component=Wb(m,O,k);if(Lo(m)&&(M.ctx.renderer=J),Kb(M),M.asyncDep){if(k&&k.registerDep(M,ee),!m.el){const q=M.subTree=oe(Xt);w(null,q,g,I)}}else ee(M,m,g,I,k,U,G)},se=(m,g,I)=>{const O=g.component=m.component;if(tb(m,g,I))if(O.asyncDep&&!O.asyncResolved){me(O,g,I);return}else O.next=g,Q0(O.update),O.effect.dirty=!0,O.update();else g.el=m.el,O.vnode=g},ee=(m,g,I,O,k,U,G)=>{const M=()=>{if(m.isMounted){let{next:Y,bu:te,u:Z,parent:ce,vnode:ye}=m;{const bi=Ay(m);if(bi){Y&&(Y.el=ye.el,me(m,Y,G)),bi.asyncDep.then(()=>{m.isUnmounted||M()});return}}let Pe=Y,Fe;Dr(m,!1),Y?(Y.el=ye.el,me(m,Y,G)):Y=ye,te&&Gc(te),(Fe=Y.props&&Y.props.onVnodeBeforeUpdate)&&yn(Fe,ce,Y,ye),Dr(m,!0);const ot=Yc(m),rn=m.subTree;m.subTree=ot,v(rn,ot,h(rn.el),S(rn),m,k,U),Y.el=ot.el,Pe===null&&nb(m,ot.el),Z&&xt(Z,k),(Fe=Y.props&&Y.props.onVnodeUpdated)&&xt(()=>yn(Fe,ce,Y,ye),k)}else{let Y;const{el:te,props:Z}=g,{bm:ce,m:ye,parent:Pe}=m,Fe=$s(g);if(Dr(m,!1),ce&&Gc(ce),!Fe&&(Y=Z&&Z.onVnodeBeforeMount)&&yn(Y,Pe,g),Dr(m,!0),te&&Oe){const ot=()=>{m.subTree=Yc(m),Oe(te,m.subTree,m,k,null)};Fe?g.type.__asyncLoader().then(()=>!m.isUnmounted&&ot()):ot()}else{const ot=m.subTree=Yc(m);v(null,ot,I,O,m,k,U),g.el=ot.el}if(ye&&xt(ye,k),!Fe&&(Y=Z&&Z.onVnodeMounted)){const ot=g;xt(()=>yn(Y,Pe,ot),k)}(g.shapeFlag&256||Pe&&$s(Pe.vnode)&&Pe.vnode.shapeFlag&256)&&m.a&&xt(m.a,k),m.isMounted=!0,g=I=O=null}},q=m.effect=new td(M,Bt,()=>ql(L),m.scope),L=m.update=()=>{q.dirty&&q.run()};L.id=m.uid,Dr(m,!0),L()},me=(m,g,I)=>{g.component=m;const O=m.vnode.props;m.vnode=g,m.next=null,Cb(m,g.props,O,I),xb(m,g.children,I),mi(),dp(m),gi()},de=(m,g,I,O,k,U,G,M,q=!1)=>{const L=m&&m.children,Y=m?m.shapeFlag:0,te=g.children,{patchFlag:Z,shapeFlag:ce}=g;if(Z>0){if(Z&128){ut(L,te,I,O,k,U,G,M,q);return}else if(Z&256){Be(L,te,I,O,k,U,G,M,q);return}}ce&8?(Y&16&&ge(L,k,U),te!==L&&u(I,te)):Y&16?ce&16?ut(L,te,I,O,k,U,G,M,q):ge(L,k,U,!0):(Y&8&&u(I,""),ce&16&&A(te,I,O,k,U,G,M,q))},Be=(m,g,I,O,k,U,G,M,q)=>{m=m||Mi,g=g||Mi;const L=m.length,Y=g.length,te=Math.min(L,Y);let Z;for(Z=0;Z<te;Z++){const ce=g[Z]=q?ar(g[Z]):vn(g[Z]);v(m[Z],ce,I,null,k,U,G,M,q)}L>Y?ge(m,k,U,!0,!1,te):A(g,I,O,k,U,G,M,q,te)},ut=(m,g,I,O,k,U,G,M,q)=>{let L=0;const Y=g.length;let te=m.length-1,Z=Y-1;for(;L<=te&&L<=Z;){const ce=m[L],ye=g[L]=q?ar(g[L]):vn(g[L]);if(Fr(ce,ye))v(ce,ye,I,null,k,U,G,M,q);else break;L++}for(;L<=te&&L<=Z;){const ce=m[te],ye=g[Z]=q?ar(g[Z]):vn(g[Z]);if(Fr(ce,ye))v(ce,ye,I,null,k,U,G,M,q);else break;te--,Z--}if(L>te){if(L<=Z){const ce=Z+1,ye=ce<Y?g[ce].el:O;for(;L<=Z;)v(null,g[L]=q?ar(g[L]):vn(g[L]),I,ye,k,U,G,M,q),L++}}else if(L>Z)for(;L<=te;)qe(m[L],k,U,!0),L++;else{const ce=L,ye=L,Pe=new Map;for(L=ye;L<=Z;L++){const Ut=g[L]=q?ar(g[L]):vn(g[L]);Ut.key!=null&&Pe.set(Ut.key,L)}let Fe,ot=0;const rn=Z-ye+1;let bi=!1,ep=0;const vs=new Array(rn);for(L=0;L<rn;L++)vs[L]=0;for(L=ce;L<=te;L++){const Ut=m[L];if(ot>=rn){qe(Ut,k,U,!0);continue}let _n;if(Ut.key!=null)_n=Pe.get(Ut.key);else for(Fe=ye;Fe<=Z;Fe++)if(vs[Fe-ye]===0&&Fr(Ut,g[Fe])){_n=Fe;break}_n===void 0?qe(Ut,k,U,!0):(vs[_n-ye]=L+1,_n>=ep?ep=_n:bi=!0,v(Ut,g[_n],I,null,k,U,G,M,q),ot++)}const tp=bi?Lb(vs):Mi;for(Fe=tp.length-1,L=rn-1;L>=0;L--){const Ut=ye+L,_n=g[Ut],np=Ut+1<Y?g[Ut+1].el:O;vs[L]===0?v(null,_n,I,np,k,U,G,M,q):bi&&(Fe<0||L!==tp[Fe]?ht(_n,I,np,2):Fe--)}}},ht=(m,g,I,O,k=null)=>{const{el:U,type:G,transition:M,children:q,shapeFlag:L}=m;if(L&6){ht(m.component.subTree,g,I,O);return}if(L&128){m.suspense.move(g,I,O);return}if(L&64){G.move(m,g,I,J);return}if(G===Dt){r(U,g,I);for(let te=0;te<q.length;te++)ht(q[te],g,I,O);r(m.anchor,g,I);return}if(G===Da){E(m,g,I);return}if(O!==2&&L&1&&M)if(O===0)M.beforeEnter(U),r(U,g,I),xt(()=>M.enter(U),k);else{const{leave:te,delayLeave:Z,afterLeave:ce}=M,ye=()=>r(U,g,I),Pe=()=>{te(U,()=>{ye(),ce&&ce()})};Z?Z(U,ye,Pe):Pe()}else r(U,g,I)},qe=(m,g,I,O=!1,k=!1)=>{const{type:U,props:G,ref:M,children:q,dynamicChildren:L,shapeFlag:Y,patchFlag:te,dirs:Z}=m;if(M!=null&&Xu(M,null,I,m,!0),Y&256){g.ctx.deactivate(m);return}const ce=Y&1&&Z,ye=!$s(m);let Pe;if(ye&&(Pe=G&&G.onVnodeBeforeUnmount)&&yn(Pe,g,m),Y&6)pe(m.component,I,O);else{if(Y&128){m.suspense.unmount(I,O);return}ce&&Or(m,null,g,"beforeUnmount"),Y&64?m.type.remove(m,g,I,k,J,O):L&&(U!==Dt||te>0&&te&64)?ge(L,g,I,!1,!0):(U===Dt&&te&384||!k&&Y&16)&&ge(q,g,I),O&&_t(m)}(ye&&(Pe=G&&G.onVnodeUnmounted)||ce)&&xt(()=>{Pe&&yn(Pe,g,m),ce&&Or(m,null,g,"unmounted")},I)},_t=m=>{const{type:g,el:I,anchor:O,transition:k}=m;if(g===Dt){Kt(I,O);return}if(g===Da){T(m);return}const U=()=>{i(I),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(m.shapeFlag&1&&k&&!k.persisted){const{leave:G,delayLeave:M}=k,q=()=>G(I,U);M?M(m.el,U,q):q()}else U()},Kt=(m,g)=>{let I;for(;m!==g;)I=d(m),i(m),m=I;i(g)},pe=(m,g,I)=>{const{bum:O,scope:k,update:U,subTree:G,um:M}=m;O&&Gc(O),k.stop(),U&&(U.active=!1,qe(G,m,g,I)),M&&xt(M,g),xt(()=>{m.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},ge=(m,g,I,O=!1,k=!1,U=0)=>{for(let G=U;G<m.length;G++)qe(m[G],g,I,O,k)},S=m=>m.shapeFlag&6?S(m.component.subTree):m.shapeFlag&128?m.suspense.next():d(m.anchor||m.el);let H=!1;const P=(m,g,I)=>{m==null?g._vnode&&qe(g._vnode,null,null,!0):v(g._vnode||null,m,g,null,null,null,I),H||(H=!0,dp(),ry(),H=!1),g._vnode=m},J={p:v,um:qe,m:ht,r:_t,mt:z,mc:A,pc:de,pbc:$,n:S,o:t};let Ee,Oe;return e&&([Ee,Oe]=e(J)),{render:P,hydrate:Ee,createApp:Ab(P,Ee)}}function tu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Dr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Nb(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function gd(t,e,n=!1){const r=t.children,i=e.children;if(ie(r)&&ie(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=ar(i[s]),a.el=o.el),n||gd(o,a)),a.type===Kl&&(a.el=o.el)}}function Lb(t){const e=t.slice(),n=[0];let r,i,s,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function Ay(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ay(e)}const Vb=t=>t.__isTeleport,qs=t=>t&&(t.disabled||t.disabled===""),bp=t=>typeof SVGElement!="undefined"&&t instanceof SVGElement,Ap=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Zu=(t,e)=>{const n=t&&t.to;return Ue(n)?e?e(n):null:n},Mb={name:"Teleport",__isTeleport:!0,process(t,e,n,r,i,s,o,a,l,c){const{mc:u,pc:h,pbc:d,o:{insert:f,querySelector:p,createText:v,createComment:_}}=c,w=qs(e.props);let{shapeFlag:y,children:E,dynamicChildren:T}=e;if(t==null){const b=e.el=v(""),x=e.anchor=v("");f(b,n,r),f(x,n,r);const N=e.target=Zu(e.props,p),A=e.targetAnchor=v("");N&&(f(A,N),o==="svg"||bp(N)?o="svg":(o==="mathml"||Ap(N))&&(o="mathml"));const R=($,Q)=>{y&16&&u(E,$,Q,i,s,o,a,l)};w?R(n,x):N&&R(N,A)}else{e.el=t.el;const b=e.anchor=t.anchor,x=e.target=t.target,N=e.targetAnchor=t.targetAnchor,A=qs(t.props),R=A?n:x,$=A?b:N;if(o==="svg"||bp(x)?o="svg":(o==="mathml"||Ap(x))&&(o="mathml"),T?(d(t.dynamicChildren,T,R,i,s,o,a),gd(t,e,!0)):l||h(t,e,R,$,i,s,o,a,!1),w)A?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):ga(e,n,b,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const Q=e.target=Zu(e.props,p);Q&&ga(e,Q,null,c,0)}else A&&ga(e,x,N,c,1)}Ry(e)},remove(t,e,n,r,{um:i,o:{remove:s}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:h,props:d}=t;if(h&&s(u),o&&s(c),a&16){const f=o||!qs(d);for(let p=0;p<l.length;p++){const v=l[p];i(v,e,n,f,!!v.dynamicChildren)}}},move:ga,hydrate:Fb};function ga(t,e,n,{o:{insert:r},m:i},s=2){s===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,h=s===2;if(h&&r(o,e,n),(!h||qs(u))&&l&16)for(let d=0;d<c.length;d++)i(c[d],e,n,2);h&&r(a,e,n)}function Fb(t,e,n,r,i,s,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=Zu(e.props,l);if(u){const h=u._lpa||u.firstChild;if(e.shapeFlag&16)if(qs(e.props))e.anchor=c(o(t),e,a(t),n,r,i,s),e.targetAnchor=h;else{e.anchor=o(t);let d=h;for(;d;)if(d=o(d),d&&d.nodeType===8&&d.data==="teleport anchor"){e.targetAnchor=d,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(h,e,u,n,r,i,s)}Ry(e)}return e.anchor&&o(e.anchor)}const Ub=Mb;function Ry(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const Dt=Symbol.for("v-fgt"),Kl=Symbol.for("v-txt"),Xt=Symbol.for("v-cmt"),Da=Symbol.for("v-stc"),js=[];let cn=null;function an(t=!1){js.push(cn=t?null:[])}function $b(){js.pop(),cn=js[js.length-1]||null}let oo=1;function Rp(t){oo+=t}function Sy(t){return t.dynamicChildren=oo>0?cn||Mi:null,$b(),oo>0&&cn&&cn.push(t),t}function Bb(t,e,n,r,i,s){return Sy(Ql(t,e,n,r,i,s,!0))}function En(t,e,n,r,i){return Sy(oe(t,e,n,r,i,!0))}function el(t){return t?t.__v_isVNode===!0:!1}function Fr(t,e){return t.type===e.type&&t.key===e.key}const Gl="__vInternal",Cy=({key:t})=>t!=null?t:null,Na=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ue(t)||ze(t)||he(t)?{i:tt,r:t,k:e,f:!!n}:t:null);function Ql(t,e=null,n=null,r=0,i=null,s=t===Dt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Cy(e),ref:e&&Na(e),scopeId:oy,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:tt};return a?(_d(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Ue(n)?8:16),oo>0&&!o&&cn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&cn.push(l),l}const oe=qb;function qb(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===ly)&&(t=Xt),el(t)){const a=Tr(t,e,!0);return n&&_d(a,n),oo>0&&!s&&cn&&(a.shapeFlag&6?cn[cn.indexOf(t)]=a:cn.push(a)),a.patchFlag|=-2,a}if(Xb(t)&&(t=t.__vccOpts),e){e=jb(e);let{class:a,style:l}=e;a&&!Ue(a)&&(e.class=Ul(a)),Le(l)&&(Q_(l)&&!ie(l)&&(l=nt({},l)),e.style=Do(l))}const o=Ue(t)?1:ib(t)?128:Vb(t)?64:Le(t)?4:he(t)?2:0;return Ql(t,e,n,r,i,o,s,!0)}function jb(t){return t?Q_(t)||Gl in t?nt({},t):t:null}function Tr(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?Py(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Cy(a),ref:e&&e.ref?n&&i?ie(i)?i.concat(Na(e)):[i,Na(e)]:Na(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Dt?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Tr(t.ssContent),ssFallback:t.ssFallback&&Tr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ps(t=" ",e=0){return oe(Kl,null,t,e)}function pU(t,e){const n=oe(Da,null,t);return n.staticCount=e,n}function Sp(t="",e=!1){return e?(an(),En(Xt,null,t)):oe(Xt,null,t)}function vn(t){return t==null||typeof t=="boolean"?oe(Xt):ie(t)?oe(Dt,null,t.slice()):typeof t=="object"?ar(t):oe(Kl,null,String(t))}function ar(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Tr(t)}function _d(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ie(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),_d(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Gl in e)?e._ctx=tt:i===3&&tt&&(tt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else he(e)?(e={default:e,_ctx:tt},n=32):(e=String(e),r&64?(n=16,e=[Ps(e)]):n=8);t.children=e,t.shapeFlag|=n}function Py(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Ul([e.class,r.class]));else if(i==="style")e.style=Do([e.style,r.style]);else if(Ll(i)){const s=e[i],o=r[i];o&&s!==o&&!(ie(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function yn(t,e,n,r=null){Jt(t,e,7,[n,r])}const zb=vy();let Hb=0;function Wb(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||zb,s={uid:Hb++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new N_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ey(r,i),emitsOptions:sy(r,i),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:r.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=X0.bind(null,s),t.ce&&t.ce(s),s}let it=null;const Qe=()=>it||tt;let tl,eh;{const t=x_(),e=(n,r)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(r),s=>{i.length>1?i.forEach(o=>o(s)):i[0](s)}};tl=e("__VUE_INSTANCE_SETTERS__",n=>it=n),eh=e("__VUE_SSR_SETTERS__",n=>Mo=n)}const Vo=t=>{const e=it;return tl(t),t.scope.on(),()=>{t.scope.off(),tl(e)}},Cp=()=>{it&&it.scope.off(),tl(null)};function ky(t){return t.vnode.shapeFlag&4}let Mo=!1;function Kb(t,e=!1){e&&eh(e);const{props:n,children:r}=t.vnode,i=ky(t);Sb(t,n,i,e),kb(t,r);const s=i?Gb(t,e):void 0;return e&&eh(!1),s}function Gb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Sr(new Proxy(t.ctx,yb));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?Yb(t):null,s=Vo(t);mi();const o=_r(r,t,0,[t.props,i]);if(gi(),s(),C_(o)){if(o.then(Cp,Cp),e)return o.then(a=>{Pp(t,a,e)}).catch(a=>{No(a,t,0)});t.asyncDep=o}else Pp(t,o,e)}else xy(t,e)}function Pp(t,e,n){he(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Le(e)&&(t.setupState=X_(e)),xy(t,n)}let kp;function xy(t,e,n){const r=t.type;if(!t.render){if(!e&&kp&&!r.render){const i=r.template||pd(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=nt(nt({isCustomElement:s,delimiters:a},o),l);r.render=kp(i,c)}}t.render=r.render||Bt}{const i=Vo(t);mi();try{vb(t)}finally{gi(),i()}}}function Qb(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Mt(t,"get","$attrs"),e[n]}}))}function Yb(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Qb(t)},slots:t.slots,emit:t.emit,expose:e}}function Yl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(X_(Sr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Bs)return Bs[n](t)},has(e,n){return n in e||n in Bs}}))}function Jb(t,e=!0){return he(t)?t.displayName||t.name:t.name||e&&t.__name}function Xb(t){return he(t)&&"__vccOpts"in t}const V=(t,e)=>U0(t,e,Mo);function j(t,e,n){const r=arguments.length;return r===2?Le(e)&&!ie(e)?el(e)?oe(t,null,[e]):oe(t,e):oe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&el(n)&&(n=[n]),oe(t,e,n))}const Zb="3.4.18";/**
* @vue/runtime-dom v3.4.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const eA="http://www.w3.org/2000/svg",tA="http://www.w3.org/1998/Math/MathML",lr=typeof document!="undefined"?document:null,xp=lr&&lr.createElement("template"),nA={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e==="svg"?lr.createElementNS(eA,t):e==="mathml"?lr.createElementNS(tA,t):lr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>lr.createTextNode(t),createComment:t=>lr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>lr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{xp.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=xp.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},er="transition",ws="animation",Xi=Symbol("_vtc"),Zi=(t,{slots:e})=>j(ub,Dy(t),e);Zi.displayName="Transition";const Oy={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},rA=Zi.props=nt({},dy,Oy),Nr=(t,e=[])=>{ie(t)?t.forEach(n=>n(...e)):t&&t(...e)},Op=t=>t?ie(t)?t.some(e=>e.length>1):t.length>1:!1;function Dy(t){const e={};for(const F in t)F in Oy||(e[F]=t[F]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,p=iA(i),v=p&&p[0],_=p&&p[1],{onBeforeEnter:w,onEnter:y,onEnterCancelled:E,onLeave:T,onLeaveCancelled:b,onBeforeAppear:x=w,onAppear:N=y,onAppearCancelled:A=E}=e,R=(F,re,z)=>{rr(F,re?u:a),rr(F,re?c:o),z&&z()},$=(F,re)=>{F._isLeaving=!1,rr(F,h),rr(F,f),rr(F,d),re&&re()},Q=F=>(re,z)=>{const se=F?N:y,ee=()=>R(re,F,z);Nr(se,[re,ee]),Dp(()=>{rr(re,F?l:s),Vn(re,F?u:a),Op(se)||Np(re,r,v,ee)})};return nt(e,{onBeforeEnter(F){Nr(w,[F]),Vn(F,s),Vn(F,o)},onBeforeAppear(F){Nr(x,[F]),Vn(F,l),Vn(F,c)},onEnter:Q(!1),onAppear:Q(!0),onLeave(F,re){F._isLeaving=!0;const z=()=>$(F,re);Vn(F,h),Ly(),Vn(F,d),Dp(()=>{!F._isLeaving||(rr(F,h),Vn(F,f),Op(T)||Np(F,r,_,z))}),Nr(T,[F,z])},onEnterCancelled(F){R(F,!1),Nr(E,[F])},onAppearCancelled(F){R(F,!0),Nr(A,[F])},onLeaveCancelled(F){$(F),Nr(b,[F])}})}function iA(t){if(t==null)return null;if(Le(t))return[nu(t.enter),nu(t.leave)];{const e=nu(t);return[e,e]}}function nu(t){return h0(t)}function Vn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Xi]||(t[Xi]=new Set)).add(e)}function rr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Xi];n&&(n.delete(e),n.size||(t[Xi]=void 0))}function Dp(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let sA=0;function Np(t,e,n,r){const i=t._endId=++sA,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=Ny(t,e);if(!o)return r();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,d),s()},d=f=>{f.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,d)}function Ny(t,e){const n=window.getComputedStyle(t),r=p=>(n[p]||"").split(", "),i=r(`${er}Delay`),s=r(`${er}Duration`),o=Lp(i,s),a=r(`${ws}Delay`),l=r(`${ws}Duration`),c=Lp(a,l);let u=null,h=0,d=0;e===er?o>0&&(u=er,h=o,d=s.length):e===ws?c>0&&(u=ws,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?er:ws:null,d=u?u===er?s.length:l.length:0);const f=u===er&&/\b(transform|all)(,|$)/.test(r(`${er}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function Lp(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Vp(n)+Vp(t[r])))}function Vp(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Ly(){return document.body.offsetHeight}function oA(t,e,n){const r=t[Xi];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Mp=Symbol("_vod"),aA=Symbol(""),lA=/(^|;)\s*display\s*:/;function cA(t,e,n){const r=t.style,i=Ue(n),s=r.display;let o=!1;if(n&&!i){if(e&&!Ue(e))for(const a in e)n[a]==null&&th(r,a,"");for(const a in n)a==="display"&&(o=!0),th(r,a,n[a])}else if(i){if(e!==n){const a=r[aA];a&&(n+=";"+a),r.cssText=n,o=lA.test(n)}}else e&&t.removeAttribute("style");Mp in t&&(t[Mp]=o?r.display:"",r.display=s)}const Fp=/\s*!important$/;function th(t,e,n){if(ie(n))n.forEach(r=>th(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=uA(t,e);Fp.test(n)?t.setProperty(pi(r),n.replace(Fp,""),"important"):t[r]=n}}const Up=["Webkit","Moz","ms"],ru={};function uA(t,e){const n=ru[e];if(n)return n;let r=xn(e);if(r!=="filter"&&r in t)return ru[e]=r;r=Fl(r);for(let i=0;i<Up.length;i++){const s=Up[i]+r;if(s in t)return ru[e]=s}return e}const $p="http://www.w3.org/1999/xlink";function hA(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS($p,e.slice(6,e.length)):t.setAttributeNS($p,e,n);else{const s=_0(e);n==null||s&&!O_(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function dA(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n==null?"":n;return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n==null?"":n;c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=O_(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function fA(t,e,n,r){t.addEventListener(e,n,r)}function pA(t,e,n,r){t.removeEventListener(e,n,r)}const Bp=Symbol("_vei");function mA(t,e,n,r,i=null){const s=t[Bp]||(t[Bp]={}),o=s[e];if(r&&o)o.value=r;else{const[a,l]=gA(e);if(r){const c=s[e]=vA(r,i);fA(t,a,c,l)}else o&&(pA(t,a,o,l),s[e]=void 0)}}const qp=/(?:Once|Passive|Capture)$/;function gA(t){let e;if(qp.test(t)){e={};let r;for(;r=t.match(qp);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):pi(t.slice(2)),e]}let iu=0;const _A=Promise.resolve(),yA=()=>iu||(_A.then(()=>iu=0),iu=Date.now());function vA(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Jt(wA(r,n.value),e,5,[r])};return n.value=t,n.attached=yA(),n}function wA(t,e){if(ie(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const jp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,EA=(t,e,n,r,i,s,o,a,l)=>{const c=i==="svg";e==="class"?oA(t,r,c):e==="style"?cA(t,n,r):Ll(e)?Jh(e)||mA(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):TA(t,e,r,c))?dA(t,e,r,s,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),hA(t,e,r,c))};function TA(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&jp(e)&&he(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return jp(e)&&Ue(n)?!1:e in t}const Vy=new WeakMap,My=new WeakMap,nl=Symbol("_moveCb"),zp=Symbol("_enterCb"),Fy={name:"TransitionGroup",props:nt({},rA,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Qe(),r=hy();let i,s;return my(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!CA(i[0].el,n.vnode.el,o))return;i.forEach(AA),i.forEach(RA);const a=i.filter(SA);Ly(),a.forEach(l=>{const c=l.el,u=c.style;Vn(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=c[nl]=d=>{d&&d.target!==c||(!d||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",h),c[nl]=null,rr(c,o))};c.addEventListener("transitionend",h)})}),()=>{const o=we(t),a=Dy(o);let l=o.tag||Dt;i=s,s=e.default?dd(e.default()):[];for(let c=0;c<s.length;c++){const u=s[c];u.key!=null&&so(u,io(u,a,r,n))}if(i)for(let c=0;c<i.length;c++){const u=i[c];so(u,io(u,a,r,n)),Vy.set(u,u.el.getBoundingClientRect())}return oe(l,null,s)}}},IA=t=>delete t.mode;Fy.props;const bA=Fy;function AA(t){const e=t.el;e[nl]&&e[nl](),e[zp]&&e[zp]()}function RA(t){My.set(t,t.el.getBoundingClientRect())}function SA(t){const e=Vy.get(t),n=My.get(t),r=e.left-n.left,i=e.top-n.top;if(r||i){const s=t.el.style;return s.transform=s.webkitTransform=`translate(${r}px,${i}px)`,s.transitionDuration="0s",t}}function CA(t,e,n){const r=t.cloneNode(),i=t[Xi];i&&i.forEach(a=>{a.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&r.classList.add(a)),r.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(r);const{hasTransform:o}=Ny(r);return s.removeChild(r),o}const PA=["ctrl","shift","alt","meta"],kA={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>PA.some(n=>t[`${n}Key`]&&!e.includes(n))},mU=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(i,...s)=>{for(let o=0;o<e.length;o++){const a=kA[e[o]];if(a&&a(i,e))return}return t(i,...s)})},xA={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},gU=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=i=>{if(!("key"in i))return;const s=pi(i.key);if(e.some(o=>o===s||xA[o]===s))return t(i)})},OA=nt({patchProp:EA},nA);let Hp;function DA(){return Hp||(Hp=Ob(OA))}const Uy=(...t)=>{const e=DA().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=LA(r);if(!i)return;const s=e._component;!he(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,NA(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function NA(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function LA(t){return Ue(t)?document.querySelector(t):t}function Jl(t,e,n,r){return Object.defineProperty(t,e,{get:n,set:r,enumerable:!0}),t}const Ir=_e(!1);let Xl;function VA(t,e){const n=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(t)||/(opr)[\/]([\w.]+)/.exec(t)||/(vivaldi)[\/]([\w.]+)/.exec(t)||/(chrome|crios)[\/]([\w.]+)/.exec(t)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t)||/(firefox|fxios)[\/]([\w.]+)/.exec(t)||/(webkit)[\/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(t)||[];return{browser:n[5]||n[3]||n[1]||"",version:n[2]||n[4]||"0",versionNumber:n[4]||n[2]||"0",platform:e[0]||""}}function MA(t){return/(ipad)/.exec(t)||/(ipod)/.exec(t)||/(windows phone)/.exec(t)||/(iphone)/.exec(t)||/(kindle)/.exec(t)||/(silk)/.exec(t)||/(android)/.exec(t)||/(win)/.exec(t)||/(mac)/.exec(t)||/(linux)/.exec(t)||/(cros)/.exec(t)||/(playbook)/.exec(t)||/(bb)/.exec(t)||/(blackberry)/.exec(t)||[]}const $y="ontouchstart"in window||window.navigator.maxTouchPoints>0;function FA(t){Xl={is:{...t}},delete t.mac,delete t.desktop;const e=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(t,{mobile:!0,ios:!0,platform:e,[e]:!0})}function UA(t){const e=t.toLowerCase(),n=MA(e),r=VA(e,n),i={};r.browser&&(i[r.browser]=!0,i.version=r.version,i.versionNumber=parseInt(r.versionNumber,10)),r.platform&&(i[r.platform]=!0);const s=i.android||i.ios||i.bb||i.blackberry||i.ipad||i.iphone||i.ipod||i.kindle||i.playbook||i.silk||i["windows phone"];return s===!0||e.indexOf("mobile")>-1?(i.mobile=!0,i.edga||i.edgios?(i.edge=!0,r.browser="edge"):i.crios?(i.chrome=!0,r.browser="chrome"):i.fxios&&(i.firefox=!0,r.browser="firefox")):i.desktop=!0,(i.ipod||i.ipad||i.iphone)&&(i.ios=!0),i["windows phone"]&&(i.winphone=!0,delete i["windows phone"]),(i.chrome||i.opr||i.safari||i.vivaldi||i.mobile===!0&&i.ios!==!0&&s!==!0)&&(i.webkit=!0),i.edg&&(r.browser="edgechromium",i.edgeChromium=!0),(i.safari&&i.blackberry||i.bb)&&(r.browser="blackberry",i.blackberry=!0),i.safari&&i.playbook&&(r.browser="playbook",i.playbook=!0),i.opr&&(r.browser="opera",i.opera=!0),i.safari&&i.android&&(r.browser="android",i.android=!0),i.safari&&i.kindle&&(r.browser="kindle",i.kindle=!0),i.safari&&i.silk&&(r.browser="silk",i.silk=!0),i.vivaldi&&(r.browser="vivaldi",i.vivaldi=!0),i.name=r.browser,i.platform=r.platform,e.indexOf("electron")>-1?i.electron=!0:document.location.href.indexOf("-extension://")>-1?i.bex=!0:(window.Capacitor!==void 0?(i.capacitor=!0,i.nativeMobile=!0,i.nativeMobileWrapper="capacitor"):(window._cordovaNative!==void 0||window.cordova!==void 0)&&(i.cordova=!0,i.nativeMobile=!0,i.nativeMobileWrapper="cordova"),$y===!0&&i.mac===!0&&(i.desktop===!0&&i.safari===!0||i.nativeMobile===!0&&i.android!==!0&&i.ios!==!0&&i.ipad!==!0)&&FA(i)),i}const Wp=navigator.userAgent||navigator.vendor||window.opera,$A={has:{touch:!1,webStorage:!1},within:{iframe:!1}},Ge={userAgent:Wp,is:UA(Wp),has:{touch:$y},within:{iframe:window.self!==window.top}},rl={install(t){const{$q:e}=t;Ir.value===!0?(t.onSSRHydrated.push(()=>{Object.assign(e.platform,Ge),Ir.value=!1,Xl=void 0}),e.platform=ln(this)):e.platform=this}};{let t;Jl(Ge.has,"webStorage",()=>{if(t!==void 0)return t;try{if(window.localStorage)return t=!0,!0}catch{}return t=!1,!1}),Ge.is.ios===!0&&window.navigator.vendor.toLowerCase().indexOf("apple"),Ir.value===!0?Object.assign(rl,Ge,Xl,$A):Object.assign(rl,Ge)}var Zl=(t,e)=>{const n=ln(t);for(const r in t)Jl(e,r,()=>n[r],i=>{n[r]=i});return e};const Ze={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const t=Object.defineProperty({},"passive",{get(){Object.assign(Ze,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,t),window.removeEventListener("qtest",null,t)}catch{}function ni(){}function _U(t){return t.button===0}function By(t){return t.touches&&t.touches[0]?t=t.touches[0]:t.changedTouches&&t.changedTouches[0]?t=t.changedTouches[0]:t.targetTouches&&t.targetTouches[0]&&(t=t.targetTouches[0]),{top:t.clientY,left:t.clientX}}function BA(t){if(t.path)return t.path;if(t.composedPath)return t.composedPath();const e=[];let n=t.target;for(;n;){if(e.push(n),n.tagName==="HTML")return e.push(document),e.push(window),e;n=n.parentElement}}function qy(t){t.stopPropagation()}function ao(t){t.cancelable!==!1&&t.preventDefault()}function Fn(t){t.cancelable!==!1&&t.preventDefault(),t.stopPropagation()}function yU(t,e){if(t===void 0||e===!0&&t.__dragPrevented===!0)return;const n=e===!0?r=>{r.__dragPrevented=!0,r.addEventListener("dragstart",ao,Ze.notPassiveCapture)}:r=>{delete r.__dragPrevented,r.removeEventListener("dragstart",ao,Ze.notPassiveCapture)};t.querySelectorAll("a, img").forEach(n)}function nh(t,e,n){const r=`__q_${e}_evt`;t[r]=t[r]!==void 0?t[r].concat(n):n,n.forEach(i=>{i[0].addEventListener(i[1],t[i[2]],Ze[i[3]])})}function jy(t,e){const n=`__q_${e}_evt`;t[n]!==void 0&&(t[n].forEach(r=>{r[0].removeEventListener(r[1],t[r[2]],Ze[r[3]])}),t[n]=void 0)}function qA(t,e=250,n){let r=null;function i(){const s=arguments,o=()=>{r=null,n!==!0&&t.apply(this,s)};r!==null?clearTimeout(r):n===!0&&t.apply(this,s),r=setTimeout(o,e)}return i.cancel=()=>{r!==null&&clearTimeout(r)},i}const su=["sm","md","lg","xl"],{passive:Kp}=Ze;var jA=Zl({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:ni,setDebounce:ni,install({$q:t,onSSRHydrated:e}){if(t.screen=this,this.__installed===!0){t.config.screen!==void 0&&(t.config.screen.bodyClasses===!1?document.body.classList.remove(`screen--${this.name}`):this.__update(!0));return}const{visualViewport:n}=window,r=n||window,i=document.scrollingElement||document.documentElement,s=n===void 0||Ge.is.mobile===!0?()=>[Math.max(window.innerWidth,i.clientWidth),Math.max(window.innerHeight,i.clientHeight)]:()=>[n.width*n.scale+window.innerWidth-i.clientWidth,n.height*n.scale+window.innerHeight-i.clientHeight],o=t.config.screen!==void 0&&t.config.screen.bodyClasses===!0;this.__update=h=>{const[d,f]=s();if(f!==this.height&&(this.height=f),d!==this.width)this.width=d;else if(h!==!0)return;let p=this.sizes;this.gt.xs=d>=p.sm,this.gt.sm=d>=p.md,this.gt.md=d>=p.lg,this.gt.lg=d>=p.xl,this.lt.sm=d<p.sm,this.lt.md=d<p.md,this.lt.lg=d<p.lg,this.lt.xl=d<p.xl,this.xs=this.lt.sm,this.sm=this.gt.xs===!0&&this.lt.md===!0,this.md=this.gt.sm===!0&&this.lt.lg===!0,this.lg=this.gt.md===!0&&this.lt.xl===!0,this.xl=this.gt.lg,p=this.xs===!0&&"xs"||this.sm===!0&&"sm"||this.md===!0&&"md"||this.lg===!0&&"lg"||"xl",p!==this.name&&(o===!0&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${p}`)),this.name=p)};let a,l={},c=16;this.setSizes=h=>{su.forEach(d=>{h[d]!==void 0&&(l[d]=h[d])})},this.setDebounce=h=>{c=h};const u=()=>{const h=getComputedStyle(document.body);h.getPropertyValue("--q-size-sm")&&su.forEach(d=>{this.sizes[d]=parseInt(h.getPropertyValue(`--q-size-${d}`),10)}),this.setSizes=d=>{su.forEach(f=>{d[f]&&(this.sizes[f]=d[f])}),this.__update(!0)},this.setDebounce=d=>{a!==void 0&&r.removeEventListener("resize",a,Kp),a=d>0?qA(this.__update,d):this.__update,r.addEventListener("resize",a,Kp)},this.setDebounce(c),Object.keys(l).length!==0?(this.setSizes(l),l=void 0):this.__update(),o===!0&&this.name==="xs"&&document.body.classList.add("screen--xs")};Ir.value===!0?e.push(u):u()}});const vt=Zl({isActive:!1,mode:!1},{__media:void 0,set(t){vt.mode=t,t==="auto"?(vt.__media===void 0&&(vt.__media=window.matchMedia("(prefers-color-scheme: dark)"),vt.__updateMedia=()=>{vt.set("auto")},vt.__media.addListener(vt.__updateMedia)),t=vt.__media.matches):vt.__media!==void 0&&(vt.__media.removeListener(vt.__updateMedia),vt.__media=void 0),vt.isActive=t===!0,document.body.classList.remove(`body--${t===!0?"light":"dark"}`),document.body.classList.add(`body--${t===!0?"dark":"light"}`)},toggle(){vt.set(vt.isActive===!1)},install({$q:t,ssrContext:e}){const{dark:n}=t.config;t.dark=this,this.__installed!==!0&&this.set(n!==void 0?n:!1)}}),zy=()=>!0;function zA(t){return typeof t=="string"&&t!==""&&t!=="/"&&t!=="#/"}function HA(t){return t.startsWith("#")===!0&&(t=t.substring(1)),t.startsWith("/")===!1&&(t="/"+t),t.endsWith("/")===!0&&(t=t.substring(0,t.length-1)),"#"+t}function WA(t){if(t.backButtonExit===!1)return()=>!1;if(t.backButtonExit==="*")return zy;const e=["#/"];return Array.isArray(t.backButtonExit)===!0&&e.push(...t.backButtonExit.filter(zA).map(HA)),()=>e.includes(window.location.hash)}var rh={__history:[],add:ni,remove:ni,install({$q:t}){if(this.__installed===!0)return;const{cordova:e,capacitor:n}=Ge.is;if(e!==!0&&n!==!0)return;const r=t.config[e===!0?"cordova":"capacitor"];if(r!==void 0&&r.backButton===!1||n===!0&&(window.Capacitor===void 0||window.Capacitor.Plugins.App===void 0))return;this.add=o=>{o.condition===void 0&&(o.condition=zy),this.__history.push(o)},this.remove=o=>{const a=this.__history.indexOf(o);a>=0&&this.__history.splice(a,1)};const i=WA(Object.assign({backButtonExit:!0},r)),s=()=>{if(this.__history.length){const o=this.__history[this.__history.length-1];o.condition()===!0&&(this.__history.pop(),o.handler())}else i()===!0?navigator.app.exitApp():window.history.back()};e===!0?document.addEventListener("deviceready",()=>{document.addEventListener("backbutton",s,!1)}):window.Capacitor.Plugins.App.addListener("backButton",s)}},Gp={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh",expand:t=>t?`Expand "${t}"`:"Expand",collapse:t=>t?`Collapse "${t}"`:"Collapse"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days"},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:t=>t===1?"1 record selected.":(t===0?"No":t)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(t,e,n)=>t+"-"+e+" of "+n,columns:"Columns"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function Qp(){const t=Array.isArray(navigator.languages)===!0&&navigator.languages.length!==0?navigator.languages[0]:navigator.language;if(typeof t=="string")return t.split(/[-_]/).map((e,n)=>n===0?e.toLowerCase():n>1||e.length<4?e.toUpperCase():e[0].toUpperCase()+e.slice(1).toLowerCase()).join("-")}const sn=Zl({__langPack:{}},{getLocale:Qp,set(t=Gp,e){const n={...t,rtl:t.rtl===!0,getLocale:Qp};{if(n.set=sn.set,sn.__langConfig===void 0||sn.__langConfig.noHtmlAttrs!==!0){const r=document.documentElement;r.setAttribute("dir",n.rtl===!0?"rtl":"ltr"),r.setAttribute("lang",n.isoName)}Object.assign(sn.__langPack,n),sn.props=n,sn.isoName=n.isoName,sn.nativeName=n.nativeName}},install({$q:t,lang:e,ssrContext:n}){t.lang=sn.__langPack,sn.__langConfig=t.config.lang,this.__installed===!0?e!==void 0&&this.set(e):this.set(e||Gp)}});function KA(t,e,n=document.body){if(typeof t!="string")throw new TypeError("Expected a string as propName");if(typeof e!="string")throw new TypeError("Expected a string as value");if(!(n instanceof Element))throw new TypeError("Expected a DOM element");n.style.setProperty(`--q-${t}`,e)}let Hy=!1;function GA(t){Hy=t.isComposing===!0}function QA(t){return Hy===!0||t!==Object(t)||t.isComposing===!0||t.qKeyEvent===!0}function ri(t,e){return QA(t)===!0?!1:[].concat(e).includes(t.keyCode)}function Wy(t){if(t.ios===!0)return"ios";if(t.android===!0)return"android"}function YA({is:t,has:e,within:n},r){const i=[t.desktop===!0?"desktop":"mobile",`${e.touch===!1?"no-":""}touch`];if(t.mobile===!0){const s=Wy(t);s!==void 0&&i.push("platform-"+s)}if(t.nativeMobile===!0){const s=t.nativeMobileWrapper;i.push(s),i.push("native-mobile"),t.ios===!0&&(r[s]===void 0||r[s].iosStatusBarPadding!==!1)&&i.push("q-ios-padding")}else t.electron===!0?i.push("electron"):t.bex===!0&&i.push("bex");return n.iframe===!0&&i.push("within-iframe"),i}function JA(){const{is:t}=Ge,e=document.body.className,n=new Set(e.replace(/ {2}/g," ").split(" "));if(Xl!==void 0)n.delete("desktop"),n.add("platform-ios"),n.add("mobile");else if(t.nativeMobile!==!0&&t.electron!==!0&&t.bex!==!0){if(t.desktop===!0)n.delete("mobile"),n.delete("platform-ios"),n.delete("platform-android"),n.add("desktop");else if(t.mobile===!0){n.delete("desktop"),n.add("mobile");const i=Wy(t);i!==void 0?(n.add(`platform-${i}`),n.delete(`platform-${i==="ios"?"android":"ios"}`)):(n.delete("platform-ios"),n.delete("platform-android"))}}Ge.has.touch===!0&&(n.delete("no-touch"),n.add("touch")),Ge.within.iframe===!0&&n.add("within-iframe");const r=Array.from(n).join(" ");e!==r&&(document.body.className=r)}function XA(t){for(const e in t)KA(e,t[e])}var ZA={install(t){if(this.__installed!==!0){if(Ir.value===!0)JA();else{const{$q:e}=t;e.config.brand!==void 0&&XA(e.config.brand);const n=YA(Ge,e.config);document.body.classList.add.apply(document.body.classList,n)}Ge.is.ios===!0&&document.body.addEventListener("touchstart",ni),window.addEventListener("keydown",GA,!0)}}},eR={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}};const il=Zl({iconMapFn:null,__icons:{}},{set(t,e){const n={...t,rtl:t.rtl===!0};n.set=il.set,Object.assign(il.__icons,n)},install({$q:t,iconSet:e,ssrContext:n}){t.config.iconMapFn!==void 0&&(this.iconMapFn=t.config.iconMapFn),t.iconSet=this.__icons,Jl(t,"iconMapFn",()=>this.iconMapFn,r=>{this.iconMapFn=r}),this.__installed===!0?e!==void 0&&this.set(e):this.set(e||eR)}}),Ky="_q_",yd="_q_l_",tR="_q_pc_",vU="_q_fo_",wU="_q_tabs_",ji=()=>{},sl={};let Gy=!1;function nR(){Gy=!0}function ou(t,e){if(t===e)return!0;if(t!==null&&e!==null&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;let n,r;if(t.constructor===Array){if(n=t.length,n!==e.length)return!1;for(r=n;r--!==0;)if(ou(t[r],e[r])!==!0)return!1;return!0}if(t.constructor===Map){if(t.size!==e.size)return!1;let s=t.entries();for(r=s.next();r.done!==!0;){if(e.has(r.value[0])!==!0)return!1;r=s.next()}for(s=t.entries(),r=s.next();r.done!==!0;){if(ou(r.value[1],e.get(r.value[0]))!==!0)return!1;r=s.next()}return!0}if(t.constructor===Set){if(t.size!==e.size)return!1;const s=t.entries();for(r=s.next();r.done!==!0;){if(e.has(r.value[0])!==!0)return!1;r=s.next()}return!0}if(t.buffer!=null&&t.buffer.constructor===ArrayBuffer){if(n=t.length,n!==e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();const i=Object.keys(t).filter(s=>t[s]!==void 0);if(n=i.length,n!==Object.keys(e).filter(s=>e[s]!==void 0).length)return!1;for(r=n;r--!==0;){const s=i[r];if(ou(t[s],e[s])!==!0)return!1}return!0}return t!==t&&e!==e}function lo(t){return t!==null&&typeof t=="object"&&Array.isArray(t)!==!0}function EU(t){return Object.prototype.toString.call(t)==="[object Date]"}const Yp=[rl,ZA,vt,jA,rh,sn,il];function rR(t,e){const n=Uy(t);n.config.globalProperties=e.config.globalProperties;const{reload:r,...i}=e._context;return Object.assign(n._context,i),n}function Jp(t,e){e.forEach(n=>{n.install(t),n.__installed=!0})}function iR(t,e,n){t.config.globalProperties.$q=n.$q,t.provide(Ky,n.$q),Jp(n,Yp),e.components!==void 0&&Object.values(e.components).forEach(r=>{lo(r)===!0&&r.name!==void 0&&t.component(r.name,r)}),e.directives!==void 0&&Object.values(e.directives).forEach(r=>{lo(r)===!0&&r.name!==void 0&&t.directive(r.name,r)}),e.plugins!==void 0&&Jp(n,Object.values(e.plugins).filter(r=>typeof r.install=="function"&&Yp.includes(r)===!1)),Ir.value===!0&&(n.$q.onSSRHydrated=()=>{n.onSSRHydrated.forEach(r=>{r()}),n.$q.onSSRHydrated=()=>{}})}var sR=function(t,e={}){const n={version:"2.14.3"};Gy===!1?(e.config!==void 0&&Object.assign(sl,e.config),n.config={...sl},nR()):n.config=e.config||{},iR(t,e,{parentApp:t,$q:n,lang:e.lang,iconSet:e.iconSet,onSSRHydrated:[]})},oR={version:"2.14.3",install:sR,lang:sn,iconSet:il};const aR={__name:"App",setup(t){return gy(e=>{console.log("### onErrorCaptured ###"),console.log("err: ",e)}),(e,n)=>{const r=ay("router-view");return an(),En(r)}}};function TU(t){return t}var lR=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Qy;const ec=t=>Qy=t,Yy=Symbol();function ih(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var zs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(zs||(zs={}));function cR(){const t=L_(!0),e=t.run(()=>_e({}));let n=[],r=[];const i=Sr({install(s){ec(i),i._a=s,s.provide(Yy,i),s.config.globalProperties.$pinia=i,r.forEach(o=>n.push(o)),r=[]},use(s){return!this._a&&!lR?r.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Jy=()=>{};function Xp(t,e,n,r=Jy){t.push(e);const i=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),r())};return!n&&ed()&&V_(i),i}function Ai(t,...e){t.slice().forEach(n=>{n(...e)})}const uR=t=>t();function sh(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],i=t[n];ih(i)&&ih(r)&&t.hasOwnProperty(n)&&!ze(r)&&!zn(r)?t[n]=sh(i,r):t[n]=r}return t}const hR=Symbol();function dR(t){return!ih(t)||!t.hasOwnProperty(hR)}const{assign:ir}=Object;function fR(t){return!!(ze(t)&&t.effect)}function pR(t,e,n,r){const{state:i,actions:s,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=z0(n.state.value[t]);return ir(u,s,Object.keys(o||{}).reduce((h,d)=>(h[d]=Sr(V(()=>{ec(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return l=Xy(t,c,e,n,r,!0),l}function Xy(t,e,n={},r,i,s){let o;const a=ir({actions:{}},n),l={deep:!0};let c,u,h=[],d=[],f;const p=r.state.value[t];!s&&!p&&(r.state.value[t]={}),_e({});let v;function _(A){let R;c=u=!1,typeof A=="function"?(A(r.state.value[t]),R={type:zs.patchFunction,storeId:t,events:f}):(sh(r.state.value[t],A),R={type:zs.patchObject,payload:A,storeId:t,events:f});const $=v=Symbol();un().then(()=>{v===$&&(c=!0)}),u=!0,Ai(h,R,r.state.value[t])}const w=s?function(){const{state:R}=n,$=R?R():{};this.$patch(Q=>{ir(Q,$)})}:Jy;function y(){o.stop(),h=[],d=[],r._s.delete(t)}function E(A,R){return function(){ec(r);const $=Array.from(arguments),Q=[],F=[];function re(ee){Q.push(ee)}function z(ee){F.push(ee)}Ai(d,{args:$,name:A,store:b,after:re,onError:z});let se;try{se=R.apply(this&&this.$id===t?this:b,$)}catch(ee){throw Ai(F,ee),ee}return se instanceof Promise?se.then(ee=>(Ai(Q,ee),ee)).catch(ee=>(Ai(F,ee),Promise.reject(ee))):(Ai(Q,se),se)}}const T={_p:r,$id:t,$onAction:Xp.bind(null,d),$patch:_,$reset:w,$subscribe(A,R={}){const $=Xp(h,A,R.detached,()=>Q()),Q=o.run(()=>xe(()=>r.state.value[t],F=>{(R.flush==="sync"?u:c)&&A({storeId:t,type:zs.direct,events:f},F)},ir({},l,R)));return $},$dispose:y},b=ln(T);r._s.set(t,b);const N=(r._a&&r._a.runWithContext||uR)(()=>r._e.run(()=>(o=L_()).run(e)));for(const A in N){const R=N[A];if(ze(R)&&!fR(R)||zn(R))s||(p&&dR(R)&&(ze(R)?R.value=p[A]:sh(R,p[A])),r.state.value[t][A]=R);else if(typeof R=="function"){const $=E(A,R);N[A]=$,a.actions[A]=R}}return ir(b,N),ir(we(b),N),Object.defineProperty(b,"$state",{get:()=>r.state.value[t],set:A=>{_(R=>{ir(R,A)})}}),r._p.forEach(A=>{ir(b,o.run(()=>A({store:b,app:r._a,pinia:r,options:a})))}),p&&s&&n.hydrate&&n.hydrate(b.$state,p),c=!0,u=!0,b}function mR(t,e,n){let r,i;const s=typeof e=="function";typeof t=="string"?(r=t,i=s?n:e):(i=t,r=t.id);function o(a,l){const c=Rb();return a=a||(c?Pt(Yy,null):null),a&&ec(a),a=Qy,a._s.has(r)||(s?Xy(r,e,i,a):pR(r,i,a)),a._s.get(r)}return o.$id=r,o}function IU(t){{t=we(t);const e={};for(const n in t){const r=t[n];(ze(r)||zn(r))&&(e[n]=Z_(t,n))}return e}}var au=()=>cR();const Zp=[{path:"/",name:"/",component:()=>ke(()=>import("./index.e86ecf81.js"),["assets/index.e86ecf81.js","assets/index.6b170cf0.css","assets/QPage.67891981.js","assets/post.ad5c1677.js","assets/PostList.cfff0276.js","assets/PostItem.603ce876.js","assets/QChip.b717a8c6.js","assets/useBookmark.6c3e2fff.js","assets/QForm.6c27b7ca.js","assets/PostForm.30e043e1.js","assets/PostForm.8bae2150.css","assets/QItemLabel.c02fa86e.js","assets/format.c860d4da.js","assets/QCardActions.472a03ec.js","assets/index.385e8952.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/validate-rules.ce7e6efc.js"])},{path:"/_admin",name:"/_admin",component:()=>ke(()=>import("./_admin.f5d62ae9.js"),["assets/_admin.f5d62ae9.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/:ath(.*)",name:"/[..path]",component:()=>ke(()=>import("./_..path_.eeb1d6ee.js"),["assets/_..path_.eeb1d6ee.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/about",name:"/about",component:()=>ke(()=>import("./about.b8332429.js"),["assets/about.b8332429.js","assets/route-block.1e6a8648.js","assets/plugin-vue_export-helper.21dcd24c.js"]),meta:{layout:"admin"}},{path:"/admin",children:[{path:"",name:"/admin/",component:()=>ke(()=>import("./index.f6fc21e9.js"),["assets/index.f6fc21e9.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"dashboard",name:"/admin/dashboard",component:()=>ke(()=>import("./dashboard.e3997040.js"),["assets/dashboard.e3997040.js","assets/route-block.1e6a8648.js","assets/plugin-vue_export-helper.21dcd24c.js"]),meta:{layout:"admin"}}]},{path:"/docs",children:[{path:"",name:"/docs/",component:()=>ke(()=>import("./index.e059959b.js"),["assets/index.e059959b.js","assets/plugin-vue_export-helper.21dcd24c.js"])}]},{path:"/ErrorNotFound",name:"/ErrorNotFound",component:()=>ke(()=>import("./ErrorNotFound.214e7292.js"),["assets/ErrorNotFound.214e7292.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/home",name:"home-page",component:()=>ke(()=>import("./home.2ed422fa.js"),["assets/home.2ed422fa.js","assets/QPage.67891981.js","assets/route-block.1e6a8648.js","assets/plugin-vue_export-helper.21dcd24c.js"]),meta:{requiresAuth:!0,width:"600px"}},{path:"/IndexPage",name:"/IndexPage",component:()=>ke(()=>import("./IndexPage.c918eeef.js"),["assets/IndexPage.c918eeef.js","assets/QPage.67891981.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/mypage",name:"/mypage",component:()=>ke(()=>import("./mypage.fd2efedd.js"),["assets/mypage.fd2efedd.js","assets/QPage.67891981.js","assets/BaseCard.bdc0c5f1.js","assets/route-block.1e6a8648.js"]),children:[{path:"bookmark",name:"/mypage/bookmark",component:()=>ke(()=>import("./bookmark.80452d4c.js"),["assets/bookmark.80452d4c.js","assets/PostList.cfff0276.js","assets/PostItem.603ce876.js","assets/QChip.b717a8c6.js","assets/useBookmark.6c3e2fff.js","assets/post.ad5c1677.js"])},{path:"password",name:"/mypage/password",component:()=>ke(()=>import("./password.6b51df71.js"),["assets/password.6b51df71.js","assets/QForm.6c27b7ca.js","assets/QCardActions.472a03ec.js","assets/BaseCard.bdc0c5f1.js","assets/error-message.b0f15c3d.js"])},{path:"profile",name:"/mypage/profile",component:()=>ke(()=>import("./profile.2f7d5b47.js"),["assets/profile.2f7d5b47.js","assets/QForm.6c27b7ca.js","assets/QCardActions.472a03ec.js","assets/BaseCard.bdc0c5f1.js","assets/error-message.b0f15c3d.js"])}],meta:{requiresAuth:!0}},{path:"/posts",children:[{path:":id",children:[{path:"",name:"/posts/[id]/",component:()=>ke(()=>import("./index.42cd2a1a.js"),["assets/index.42cd2a1a.js","assets/index.4a640d70.css","assets/QPage.67891981.js","assets/post.ad5c1677.js","assets/format.c860d4da.js","assets/useBookmark.6c3e2fff.js","assets/BaseCard.bdc0c5f1.js","assets/index.385e8952.js","assets/QForm.6c27b7ca.js","assets/validate-rules.ce7e6efc.js","assets/route-block.1e6a8648.js"]),meta:{width:"800px"}},{path:"edit",name:"/posts/[id]/edit",component:()=>ke(()=>import("./edit.d62e0580.js"),["assets/edit.d62e0580.js","assets/QPage.67891981.js","assets/BaseCard.bdc0c5f1.js","assets/PostForm.30e043e1.js","assets/PostForm.8bae2150.css","assets/QForm.6c27b7ca.js","assets/QChip.b717a8c6.js","assets/QItemLabel.c02fa86e.js","assets/format.c860d4da.js","assets/QCardActions.472a03ec.js","assets/index.385e8952.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/validate-rules.ce7e6efc.js","assets/post.ad5c1677.js","assets/route-block.1e6a8648.js"]),meta:{width:"800px"}}]}]},{path:"/search",children:[{path:"",name:"/search/",component:()=>ke(()=>import("./index.8ab40eff.js"),["assets/index.8ab40eff.js","assets/index.2ea60985.css","assets/QPage.67891981.js","assets/PostItem.603ce876.js","assets/QChip.b717a8c6.js","assets/useBookmark.6c3e2fff.js","assets/post.ad5c1677.js"])}]},{path:"/vueuse",children:[{path:"",name:"/vueuse/",component:()=>ke(()=>import("./index.100c33d2.js"),["assets/index.100c33d2.js","assets/QPage.67891981.js"])}]}];/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ki=typeof window!="undefined";function gR(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Re=Object.assign;function lu(t,e){const n={};for(const r in e){const i=e[r];n[r]=hn(i)?i.map(t):t(i)}return n}const Hs=()=>{},hn=Array.isArray,_R=/\/$/,yR=t=>t.replace(_R,"");function cu(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=TR(r!=null?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function vR(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function em(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function wR(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&es(e.matched[r],n.matched[i])&&Zy(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function es(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Zy(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!ER(t[n],e[n]))return!1;return!0}function ER(t,e){return hn(t)?tm(t,e):hn(e)?tm(e,t):t===e}function tm(t,e){return hn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function TR(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var co;(function(t){t.pop="pop",t.push="push"})(co||(co={}));var Ws;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ws||(Ws={}));function IR(t){if(!t)if(ki){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),yR(t)}const bR=/^[^#]+#/;function AR(t,e){return t.replace(bR,"#")+e}function RR(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const tc=()=>({left:window.pageXOffset,top:window.pageYOffset});function SR(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=RR(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function nm(t,e){return(history.state?history.state.position-e:-1)+t}const oh=new Map;function CR(t,e){oh.set(t,e)}function PR(t){const e=oh.get(t);return oh.delete(t),e}let kR=()=>location.protocol+"//"+location.host;function ev(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),em(l,"")}return em(n,t)+r+i}function xR(t,e,n,r){let i=[],s=[],o=null;const a=({state:d})=>{const f=ev(t,location),p=n.value,v=e.value;let _=0;if(d){if(n.value=f,e.value=d,o&&o===p){o=null;return}_=v?d.position-v.position:0}else r(f);i.forEach(w=>{w(n.value,p,{delta:_,type:co.pop,direction:_?_>0?Ws.forward:Ws.back:Ws.unknown})})};function l(){o=n.value}function c(d){i.push(d);const f=()=>{const p=i.indexOf(d);p>-1&&i.splice(p,1)};return s.push(f),f}function u(){const{history:d}=window;!d.state||d.replaceState(Re({},d.state,{scroll:tc()}),"")}function h(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function rm(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?tc():null}}function OR(t){const{history:e,location:n}=window,r={value:ev(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:kR()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(l,c){const u=Re({},e.state,rm(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});s(l,u,!0),r.value=l}function a(l,c){const u=Re({},i.value,e.state,{forward:l,scroll:tc()});s(u.current,u,!0);const h=Re({},rm(r.value,l,null),{position:u.position+1},c);s(l,h,!1),r.value=l}return{location:r,state:i,push:a,replace:o}}function DR(t){t=IR(t);const e=OR(t),n=xR(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=Re({location:"",base:t,go:r,createHref:AR.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function NR(t){return typeof t=="string"||t&&typeof t=="object"}function tv(t){return typeof t=="string"||typeof t=="symbol"}const tr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},nv=Symbol("");var im;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(im||(im={}));function ts(t,e){return Re(new Error,{type:t,[nv]:!0},e)}function Ln(t,e){return t instanceof Error&&nv in t&&(e==null||!!(t.type&e))}const sm="[^/]+?",LR={sensitive:!1,strict:!1,start:!0,end:!0},VR=/[.+*?^${}()[\]/\\]/g;function MR(t,e){const n=Re({},LR,e),r=[];let i=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(VR,"\\$&"),f+=40;else if(d.type===1){const{value:p,repeatable:v,optional:_,regexp:w}=d;s.push({name:p,repeatable:v,optional:_});const y=w||sm;if(y!==sm){f+=10;try{new RegExp(`(${y})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${p}" (${y}): `+T.message)}}let E=v?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;h||(E=_&&c.length<2?`(?:/${E})`:"/"+E),_&&(E+="?"),i+=E,f+=20,_&&(f+=-8),v&&(f+=-20),y===".*"&&(f+=-50)}u.push(f)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",p=s[d-1];h[p.name]=f&&p.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:p,repeatable:v,optional:_}=f,w=p in c?c[p]:"";if(hn(w)&&!v)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const y=hn(w)?w.join("/"):w;if(!y)if(_)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);u+=y}}return u||"/"}return{re:o,score:r,keys:s,parse:a,stringify:l}}function FR(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function UR(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=FR(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(om(r))return 1;if(om(i))return-1}return i.length-r.length}function om(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const $R={type:0,value:""},BR=/[a-zA-Z0-9_]/;function qR(t){if(!t)return[[]];if(t==="/")return[[$R]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,l,c="",u="";function h(){!c||(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:l==="("?n=2:BR.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function jR(t,e,n){const r=MR(qR(t.path),n),i=Re(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function zR(t,e){const n=[],r=new Map;e=cm({strict:!1,end:!0,sensitive:!1},e);function i(u){return r.get(u)}function s(u,h,d){const f=!d,p=HR(u);p.aliasOf=d&&d.record;const v=cm(e,u),_=[p];if("alias"in u){const E=typeof u.alias=="string"?[u.alias]:u.alias;for(const T of E)_.push(Re({},p,{components:d?d.record.components:p.components,path:T,aliasOf:d?d.record:p}))}let w,y;for(const E of _){const{path:T}=E;if(h&&T[0]!=="/"){const b=h.record.path,x=b[b.length-1]==="/"?"":"/";E.path=h.record.path+(T&&x+T)}if(w=jR(E,h,v),d?d.alias.push(w):(y=y||w,y!==w&&y.alias.push(w),f&&u.name&&!lm(w)&&o(u.name)),p.children){const b=p.children;for(let x=0;x<b.length;x++)s(b[x],w,d&&d.children[x])}d=d||w,(w.record.components&&Object.keys(w.record.components).length||w.record.name||w.record.redirect)&&l(w)}return y?()=>{o(y)}:Hs}function o(u){if(tv(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&UR(u,n[h])>=0&&(u.record.path!==n[h].record.path||!rv(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!lm(u)&&r.set(u.record.name,u)}function c(u,h){let d,f={},p,v;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw ts(1,{location:u});v=d.record.name,f=Re(am(h.params,d.keys.filter(y=>!y.optional).map(y=>y.name)),u.params&&am(u.params,d.keys.map(y=>y.name))),p=d.stringify(f)}else if("path"in u)p=u.path,d=n.find(y=>y.re.test(p)),d&&(f=d.parse(p),v=d.record.name);else{if(d=h.name?r.get(h.name):n.find(y=>y.re.test(h.path)),!d)throw ts(1,{location:u,currentLocation:h});v=d.record.name,f=Re({},h.params,u.params),p=d.stringify(f)}const _=[];let w=d;for(;w;)_.unshift(w.record),w=w.parent;return{name:v,path:p,params:f,matched:_,meta:KR(_)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function am(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function HR(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:WR(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function WR(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function lm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function KR(t){return t.reduce((e,n)=>Re(e,n.meta),{})}function cm(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function rv(t,e){return e.children.some(n=>n===t||rv(t,n))}const iv=/#/g,GR=/&/g,QR=/\//g,YR=/=/g,JR=/\?/g,sv=/\+/g,XR=/%5B/g,ZR=/%5D/g,ov=/%5E/g,eS=/%60/g,av=/%7B/g,tS=/%7C/g,lv=/%7D/g,nS=/%20/g;function vd(t){return encodeURI(""+t).replace(tS,"|").replace(XR,"[").replace(ZR,"]")}function rS(t){return vd(t).replace(av,"{").replace(lv,"}").replace(ov,"^")}function ah(t){return vd(t).replace(sv,"%2B").replace(nS,"+").replace(iv,"%23").replace(GR,"%26").replace(eS,"`").replace(av,"{").replace(lv,"}").replace(ov,"^")}function iS(t){return ah(t).replace(YR,"%3D")}function sS(t){return vd(t).replace(iv,"%23").replace(JR,"%3F")}function oS(t){return t==null?"":sS(t).replace(QR,"%2F")}function ol(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function aS(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(sv," "),o=s.indexOf("="),a=ol(o<0?s:s.slice(0,o)),l=o<0?null:ol(s.slice(o+1));if(a in e){let c=e[a];hn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function um(t){let e="";for(let n in t){const r=t[n];if(n=iS(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(hn(r)?r.map(s=>s&&ah(s)):[r&&ah(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function lS(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=hn(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const cS=Symbol(""),hm=Symbol(""),nc=Symbol(""),wd=Symbol(""),lh=Symbol("");function Es(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function cr(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(ts(4,{from:n,to:e})):h instanceof Error?a(h):NR(h)?a(ts(2,{from:e,to:h})):(s&&r.enterCallbacks[i]===s&&typeof h=="function"&&s.push(h),o())},c=t.call(r&&r.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function uu(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(uS(a)){const c=(a.__vccOpts||a)[e];c&&i.push(cr(c,n,r,s,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=gR(c)?c.default:c;s.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&cr(d,n,r,s,o)()}))}}return i}function uS(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function dm(t){const e=Pt(nc),n=Pt(wd),r=V(()=>e.resolve(Ot(t.to))),i=V(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(es.bind(null,u));if(d>-1)return d;const f=fm(l[c-2]);return c>1&&fm(u)===f&&h[h.length-1].path!==f?h.findIndex(es.bind(null,l[c-2])):d}),s=V(()=>i.value>-1&&pS(n.params,r.value.params)),o=V(()=>i.value>-1&&i.value===n.matched.length-1&&Zy(n.params,r.value.params));function a(l={}){return fS(l)?e[Ot(t.replace)?"replace":"push"](Ot(t.to)).catch(Hs):Promise.resolve()}return{route:r,href:V(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const hS=zl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:dm,setup(t,{slots:e}){const n=ln(dm(t)),{options:r}=Pt(nc),i=V(()=>({[pm(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[pm(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:j("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),dS=hS;function fS(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function pS(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!hn(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function fm(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const pm=(t,e,n)=>t!=null?t:e!=null?e:n,mS=zl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Pt(lh),i=V(()=>t.route||r.value),s=Pt(hm,0),o=V(()=>{let c=Ot(s);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=V(()=>i.value.matched[o.value]);qi(hm,V(()=>o.value+1)),qi(cS,a),qi(lh,i);const l=_e();return xe(()=>[l.value,a.value,t.name],([c,u,h],[d,f,p])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!es(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return mm(n.default,{Component:d,route:c});const f=h.props[u],p=f?f===!0?c.params:typeof f=="function"?f(c):f:null,_=j(d,Re({},p,e,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return mm(n.default,{Component:_,route:c})||_}}});function mm(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const gS=mS;function _S(t){const e=zR(t.routes,t),n=t.parseQuery||aS,r=t.stringifyQuery||um,i=t.history,s=Es(),o=Es(),a=Es(),l=Ja(tr);let c=tr;ki&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=lu.bind(null,S=>""+S),h=lu.bind(null,oS),d=lu.bind(null,ol);function f(S,H){let P,J;return tv(S)?(P=e.getRecordMatcher(S),J=H):J=S,e.addRoute(J,P)}function p(S){const H=e.getRecordMatcher(S);H&&e.removeRoute(H)}function v(){return e.getRoutes().map(S=>S.record)}function _(S){return!!e.getRecordMatcher(S)}function w(S,H){if(H=Re({},H||l.value),typeof S=="string"){const g=cu(n,S,H.path),I=e.resolve({path:g.path},H),O=i.createHref(g.fullPath);return Re(g,I,{params:d(I.params),hash:ol(g.hash),redirectedFrom:void 0,href:O})}let P;if("path"in S)P=Re({},S,{path:cu(n,S.path,H.path).path});else{const g=Re({},S.params);for(const I in g)g[I]==null&&delete g[I];P=Re({},S,{params:h(g)}),H.params=h(H.params)}const J=e.resolve(P,H),Ee=S.hash||"";J.params=u(d(J.params));const Oe=vR(r,Re({},S,{hash:rS(Ee),path:J.path})),m=i.createHref(Oe);return Re({fullPath:Oe,hash:Ee,query:r===um?lS(S.query):S.query||{}},J,{redirectedFrom:void 0,href:m})}function y(S){return typeof S=="string"?cu(n,S,l.value.path):Re({},S)}function E(S,H){if(c!==S)return ts(8,{from:H,to:S})}function T(S){return N(S)}function b(S){return T(Re(y(S),{replace:!0}))}function x(S){const H=S.matched[S.matched.length-1];if(H&&H.redirect){const{redirect:P}=H;let J=typeof P=="function"?P(S):P;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=y(J):{path:J},J.params={}),Re({query:S.query,hash:S.hash,params:"path"in J?{}:S.params},J)}}function N(S,H){const P=c=w(S),J=l.value,Ee=S.state,Oe=S.force,m=S.replace===!0,g=x(P);if(g)return N(Re(y(g),{state:typeof g=="object"?Re({},Ee,g.state):Ee,force:Oe,replace:m}),H||P);const I=P;I.redirectedFrom=H;let O;return!Oe&&wR(r,J,P)&&(O=ts(16,{to:I,from:J}),ht(J,J,!0,!1)),(O?Promise.resolve(O):$(I,J)).catch(k=>Ln(k)?Ln(k,2)?k:ut(k):de(k,I,J)).then(k=>{if(k){if(Ln(k,2))return N(Re({replace:m},y(k.to),{state:typeof k.to=="object"?Re({},Ee,k.to.state):Ee,force:Oe}),H||I)}else k=F(I,J,!0,m,Ee);return Q(I,J,k),k})}function A(S,H){const P=E(S,H);return P?Promise.reject(P):Promise.resolve()}function R(S){const H=Kt.values().next().value;return H&&typeof H.runWithContext=="function"?H.runWithContext(S):S()}function $(S,H){let P;const[J,Ee,Oe]=yS(S,H);P=uu(J.reverse(),"beforeRouteLeave",S,H);for(const g of J)g.leaveGuards.forEach(I=>{P.push(cr(I,S,H))});const m=A.bind(null,S,H);return P.push(m),ge(P).then(()=>{P=[];for(const g of s.list())P.push(cr(g,S,H));return P.push(m),ge(P)}).then(()=>{P=uu(Ee,"beforeRouteUpdate",S,H);for(const g of Ee)g.updateGuards.forEach(I=>{P.push(cr(I,S,H))});return P.push(m),ge(P)}).then(()=>{P=[];for(const g of Oe)if(g.beforeEnter)if(hn(g.beforeEnter))for(const I of g.beforeEnter)P.push(cr(I,S,H));else P.push(cr(g.beforeEnter,S,H));return P.push(m),ge(P)}).then(()=>(S.matched.forEach(g=>g.enterCallbacks={}),P=uu(Oe,"beforeRouteEnter",S,H),P.push(m),ge(P))).then(()=>{P=[];for(const g of o.list())P.push(cr(g,S,H));return P.push(m),ge(P)}).catch(g=>Ln(g,8)?g:Promise.reject(g))}function Q(S,H,P){a.list().forEach(J=>R(()=>J(S,H,P)))}function F(S,H,P,J,Ee){const Oe=E(S,H);if(Oe)return Oe;const m=H===tr,g=ki?history.state:{};P&&(J||m?i.replace(S.fullPath,Re({scroll:m&&g&&g.scroll},Ee)):i.push(S.fullPath,Ee)),l.value=S,ht(S,H,P,m),ut()}let re;function z(){re||(re=i.listen((S,H,P)=>{if(!pe.listening)return;const J=w(S),Ee=x(J);if(Ee){N(Re(Ee,{replace:!0}),J).catch(Hs);return}c=J;const Oe=l.value;ki&&CR(nm(Oe.fullPath,P.delta),tc()),$(J,Oe).catch(m=>Ln(m,12)?m:Ln(m,2)?(N(m.to,J).then(g=>{Ln(g,20)&&!P.delta&&P.type===co.pop&&i.go(-1,!1)}).catch(Hs),Promise.reject()):(P.delta&&i.go(-P.delta,!1),de(m,J,Oe))).then(m=>{m=m||F(J,Oe,!1),m&&(P.delta&&!Ln(m,8)?i.go(-P.delta,!1):P.type===co.pop&&Ln(m,20)&&i.go(-1,!1)),Q(J,Oe,m)}).catch(Hs)}))}let se=Es(),ee=Es(),me;function de(S,H,P){ut(S);const J=ee.list();return J.length?J.forEach(Ee=>Ee(S,H,P)):console.error(S),Promise.reject(S)}function Be(){return me&&l.value!==tr?Promise.resolve():new Promise((S,H)=>{se.add([S,H])})}function ut(S){return me||(me=!S,z(),se.list().forEach(([H,P])=>S?P(S):H()),se.reset()),S}function ht(S,H,P,J){const{scrollBehavior:Ee}=t;if(!ki||!Ee)return Promise.resolve();const Oe=!P&&PR(nm(S.fullPath,0))||(J||!P)&&history.state&&history.state.scroll||null;return un().then(()=>Ee(S,H,Oe)).then(m=>m&&SR(m)).catch(m=>de(m,S,H))}const qe=S=>i.go(S);let _t;const Kt=new Set,pe={currentRoute:l,listening:!0,addRoute:f,removeRoute:p,hasRoute:_,getRoutes:v,resolve:w,options:t,push:T,replace:b,go:qe,back:()=>qe(-1),forward:()=>qe(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:ee.add,isReady:Be,install(S){const H=this;S.component("RouterLink",dS),S.component("RouterView",gS),S.config.globalProperties.$router=H,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>Ot(l)}),ki&&!_t&&l.value===tr&&(_t=!0,T(i.location).catch(Ee=>{}));const P={};for(const Ee in tr)Object.defineProperty(P,Ee,{get:()=>l.value[Ee],enumerable:!0});S.provide(nc,H),S.provide(wd,G_(P)),S.provide(lh,l);const J=S.unmount;Kt.add(S),S.unmount=function(){Kt.delete(S),Kt.size<1&&(c=tr,re&&re(),re=null,l.value=tr,_t=!1,me=!1),J()}}};function ge(S){return S.reduce((H,P)=>H.then(()=>R(P)),Promise.resolve())}return pe}function yS(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>es(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>es(c,l))||i.push(l))}return[n,r,i]}function bU(){return Pt(nc)}function vS(){return Pt(wd)}function wS(t){const{extendRoutes:e}=t;return _S(Object.assign(t,{routes:typeof e=="function"?e(Zp):Zp}))}const ch={xs:18,sm:24,md:32,lg:38,xl:46},Ed={size:String};function Td(t,e=ch){return V(()=>t.size!==void 0?{fontSize:t.size in e?`${e[t.size]}px`:t.size}:null)}const Ye=t=>Sr(zl(t)),cv=t=>Sr(t);function Nn(t,e){return t!==void 0&&t()||e}function uv(t,e){if(t!==void 0){const n=t();if(n!=null)return n.slice()}return e}function Li(t,e){return t!==void 0?e.concat(t()):e}function ES(t,e){return t===void 0?e:e!==void 0?e.concat(t()):t()}function AU(t,e,n,r,i,s){e.key=r+i;const o=j(t,e,n);return i===!0?$i(o,s()):o}const gm="0 0 24 24",_m=t=>t,hu=t=>`ionicons ${t}`,hv={"mdi-":t=>`mdi ${t}`,"icon-":_m,"bt-":t=>`bt ${t}`,"eva-":t=>`eva ${t}`,"ion-md":hu,"ion-ios":hu,"ion-logo":hu,"iconfont ":_m,"ti-":t=>`themify-icon ${t}`,"bi-":t=>`bootstrap-icons ${t}`},dv={o_:"-outlined",r_:"-round",s_:"-sharp"},fv={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},TS=new RegExp("^("+Object.keys(hv).join("|")+")"),IS=new RegExp("^("+Object.keys(dv).join("|")+")"),ym=new RegExp("^("+Object.keys(fv).join("|")+")"),bS=/^[Mm]\s?[-+]?\.?\d/,AS=/^img:/,RS=/^svguse:/,SS=/^ion-/,CS=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var al=Ye({name:"QIcon",props:{...Ed,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(t,{slots:e}){const{proxy:{$q:n}}=Qe(),r=Td(t),i=V(()=>"q-icon"+(t.left===!0?" on-left":"")+(t.right===!0?" on-right":"")+(t.color!==void 0?` text-${t.color}`:"")),s=V(()=>{let o,a=t.name;if(a==="none"||!a)return{none:!0};if(n.iconMapFn!==null){const u=n.iconMapFn(a);if(u!==void 0)if(u.icon!==void 0){if(a=u.icon,a==="none"||!a)return{none:!0}}else return{cls:u.cls,content:u.content!==void 0?u.content:" "}}if(bS.test(a)===!0){const[u,h=gm]=a.split("|");return{svg:!0,viewBox:h,nodes:u.split("&&").map(d=>{const[f,p,v]=d.split("@@");return j("path",{style:p,d:f,transform:v})})}}if(AS.test(a)===!0)return{img:!0,src:a.substring(4)};if(RS.test(a)===!0){const[u,h=gm]=a.split("|");return{svguse:!0,src:u.substring(7),viewBox:h}}let l=" ";const c=a.match(TS);if(c!==null)o=hv[c[1]](a);else if(CS.test(a)===!0)o=a;else if(SS.test(a)===!0)o=`ionicons ion-${n.platform.is.ios===!0?"ios":"md"}${a.substring(3)}`;else if(ym.test(a)===!0){o="notranslate material-symbols";const u=a.match(ym);u!==null&&(a=a.substring(6),o+=fv[u[1]]),l=a}else{o="notranslate material-icons";const u=a.match(IS);u!==null&&(a=a.substring(2),o+=dv[u[1]]),l=a}return{cls:o,content:l}});return()=>{const o={class:i.value,style:r.value,"aria-hidden":"true",role:"presentation"};return s.value.none===!0?j(t.tag,o,Nn(e.default)):s.value.img===!0?j(t.tag,o,Li(e.default,[j("img",{src:s.value.src})])):s.value.svg===!0?j(t.tag,o,Li(e.default,[j("svg",{viewBox:s.value.viewBox||"0 0 24 24"},s.value.nodes)])):s.value.svguse===!0?j(t.tag,o,Li(e.default,[j("svg",{viewBox:s.value.viewBox},[j("use",{"xlink:href":s.value.src})])])):(s.value.cls!==void 0&&(o.class+=" "+s.value.cls),j(t.tag,o,Li(e.default,[s.value.content])))}}}),uh=Ye({name:"QAvatar",props:{...Ed,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(t,{slots:e}){const n=Td(t),r=V(()=>"q-avatar"+(t.color?` bg-${t.color}`:"")+(t.textColor?` text-${t.textColor} q-chip--colored`:"")+(t.square===!0?" q-avatar--square":t.rounded===!0?" rounded-borders":"")),i=V(()=>t.fontSize?{fontSize:t.fontSize}:null);return()=>{const s=t.icon!==void 0?[j(al,{name:t.icon})]:void 0;return j("div",{class:r.value,style:n.value},[j("div",{class:"q-avatar__content row flex-center overflow-hidden",style:i.value},ES(e.default,s))])}}}),PS=Ye({name:"QToolbarTitle",props:{shrink:Boolean},setup(t,{slots:e}){const n=V(()=>"q-toolbar__title ellipsis"+(t.shrink===!0?" col-shrink":""));return()=>j("div",{class:n.value},Nn(e.default))}});const kS={size:{type:[Number,String],default:"1em"},color:String};function xS(t){return{cSize:V(()=>t.size in ch?`${ch[t.size]}px`:t.size),classes:V(()=>"q-spinner"+(t.color?` text-${t.color}`:""))}}var pv=Ye({name:"QSpinner",props:{...kS,thickness:{type:Number,default:5}},setup(t){const{cSize:e,classes:n}=xS(t);return()=>j("svg",{class:n.value+" q-spinner-mat",width:e.value,height:e.value,viewBox:"25 25 50 50"},[j("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":t.thickness,"stroke-miterlimit":"10"})])}});function hh(t,e){const n=t.style;for(const r in e)n[r]=e[r]}function OS(t){if(t==null)return;if(typeof t=="string")try{return document.querySelector(t)||void 0}catch{return}const e=Ot(t);if(e)return e.$el||e}function mv(t,e){if(t==null||t.contains(e)===!0)return!0;for(let n=t.nextElementSibling;n!==null;n=n.nextElementSibling)if(n.contains(e))return!0;return!1}function DS(t,e=250){let n=!1,r;return function(){return n===!1&&(n=!0,setTimeout(()=>{n=!1},e),r=t.apply(this,arguments)),r}}function vm(t,e,n,r){n.modifiers.stop===!0&&qy(t);const i=n.modifiers.color;let s=n.modifiers.center;s=s===!0||r===!0;const o=document.createElement("span"),a=document.createElement("span"),l=By(t),{left:c,top:u,width:h,height:d}=e.getBoundingClientRect(),f=Math.sqrt(h*h+d*d),p=f/2,v=`${(h-f)/2}px`,_=s?v:`${l.left-c-p}px`,w=`${(d-f)/2}px`,y=s?w:`${l.top-u-p}px`;a.className="q-ripple__inner",hh(a,{height:`${f}px`,width:`${f}px`,transform:`translate3d(${_},${y},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${i?" text-"+i:""}`,o.setAttribute("dir","ltr"),o.appendChild(a),e.appendChild(o);const E=()=>{o.remove(),clearTimeout(T)};n.abort.push(E);let T=setTimeout(()=>{a.classList.add("q-ripple__inner--enter"),a.style.transform=`translate3d(${v},${w},0) scale3d(1,1,1)`,a.style.opacity=.2,T=setTimeout(()=>{a.classList.remove("q-ripple__inner--enter"),a.classList.add("q-ripple__inner--leave"),a.style.opacity=0,T=setTimeout(()=>{o.remove(),n.abort.splice(n.abort.indexOf(E),1)},275)},250)},50)}function wm(t,{modifiers:e,value:n,arg:r}){const i=Object.assign({},t.cfg.ripple,e,n);t.modifiers={early:i.early===!0,stop:i.stop===!0,center:i.center===!0,color:i.color||r,keyCodes:[].concat(i.keyCodes||13)}}var NS=cv({name:"ripple",beforeMount(t,e){const n=e.instance.$.appContext.config.globalProperties.$q.config||{};if(n.ripple===!1)return;const r={cfg:n,enabled:e.value!==!1,modifiers:{},abort:[],start(i){r.enabled===!0&&i.qSkipRipple!==!0&&i.type===(r.modifiers.early===!0?"pointerdown":"click")&&vm(i,t,r,i.qKeyEvent===!0)},keystart:DS(i=>{r.enabled===!0&&i.qSkipRipple!==!0&&ri(i,r.modifiers.keyCodes)===!0&&i.type===`key${r.modifiers.early===!0?"down":"up"}`&&vm(i,t,r,!0)},300)};wm(r,e),t.__qripple=r,nh(r,"main",[[t,"pointerdown","start","passive"],[t,"click","start","passive"],[t,"keydown","keystart","passive"],[t,"keyup","keystart","passive"]])},updated(t,e){if(e.oldValue!==e.value){const n=t.__qripple;n!==void 0&&(n.enabled=e.value!==!1,n.enabled===!0&&Object(e.value)===e.value&&wm(n,e))}},beforeUnmount(t){const e=t.__qripple;e!==void 0&&(e.abort.forEach(n=>{n()}),jy(e,"main"),delete t._qripple)}});const gv={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},LS=Object.keys(gv),VS={align:{type:String,validator:t=>LS.includes(t)}};function MS(t){return V(()=>{const e=t.align===void 0?t.vertical===!0?"stretch":"left":t.align;return`${t.vertical===!0?"items":"justify"}-${gv[e]}`})}function La(t){if(Object(t.$parent)===t.$parent)return t.$parent;let{parent:e}=t.$;for(;Object(e)===e;){if(Object(e.proxy)===e.proxy)return e.proxy;e=e.parent}}function _v(t){return t.appContext.config.globalProperties.$router!==void 0}function yv(t){return t.isUnmounted===!0||t.isDeactivated===!0}function Em(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}function Tm(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function FS(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(Array.isArray(i)===!1||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function Im(t,e){return Array.isArray(e)===!0?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function US(t,e){return Array.isArray(t)===!0?Im(t,e):Array.isArray(e)===!0?Im(e,t):t===e}function $S(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(US(t[n],e[n])===!1)return!1;return!0}const vv={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function wv({fallbackTag:t,useDisableForRouterLinkProps:e=!0}={}){const n=Qe(),{props:r,proxy:i,emit:s}=n,o=_v(n),a=V(()=>r.disable!==!0&&r.href!==void 0),l=V(e===!0?()=>o===!0&&r.disable!==!0&&a.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!=="":()=>o===!0&&a.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==""),c=V(()=>l.value===!0?y(r.to):null),u=V(()=>c.value!==null),h=V(()=>a.value===!0||u.value===!0),d=V(()=>r.type==="a"||h.value===!0?"a":r.tag||t||"div"),f=V(()=>a.value===!0?{href:r.href,target:r.target}:u.value===!0?{href:c.value.href,target:r.target}:{}),p=V(()=>{if(u.value===!1)return-1;const{matched:b}=c.value,{length:x}=b,N=b[x-1];if(N===void 0)return-1;const A=i.$route.matched;if(A.length===0)return-1;const R=A.findIndex(Tm.bind(null,N));if(R>-1)return R;const $=Em(b[x-2]);return x>1&&Em(N)===$&&A[A.length-1].path!==$?A.findIndex(Tm.bind(null,b[x-2])):R}),v=V(()=>u.value===!0&&p.value!==-1&&FS(i.$route.params,c.value.params)),_=V(()=>v.value===!0&&p.value===i.$route.matched.length-1&&$S(i.$route.params,c.value.params)),w=V(()=>u.value===!0?_.value===!0?` ${r.exactActiveClass} ${r.activeClass}`:r.exact===!0?"":v.value===!0?` ${r.activeClass}`:"":"");function y(b){try{return i.$router.resolve(b)}catch{}return null}function E(b,{returnRouterError:x,to:N=r.to,replace:A=r.replace}={}){if(r.disable===!0)return b.preventDefault(),Promise.resolve(!1);if(b.metaKey||b.altKey||b.ctrlKey||b.shiftKey||b.button!==void 0&&b.button!==0||r.target==="_blank")return Promise.resolve(!1);b.preventDefault();const R=i.$router[A===!0?"replace":"push"](N);return x===!0?R:R.then(()=>{}).catch(()=>{})}function T(b){if(u.value===!0){const x=N=>E(b,N);s("click",b,x),b.defaultPrevented!==!0&&x()}else s("click",b)}return{hasRouterLink:u,hasHrefLink:a,hasLink:h,linkTag:d,resolvedLink:c,linkIsActive:v,linkIsExactActive:_,linkClass:w,linkAttrs:f,getLink:y,navigateToRouterLink:E,navigateOnClick:T}}const bm={none:0,xs:4,sm:8,md:16,lg:24,xl:32},BS={xs:8,sm:10,md:14,lg:20,xl:24},qS=["button","submit","reset"],jS=/[^\s]\/[^\s]/,zS=["flat","outline","push","unelevated"],HS=(t,e)=>t.flat===!0?"flat":t.outline===!0?"outline":t.push===!0?"push":t.unelevated===!0?"unelevated":e,WS={...Ed,...vv,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...zS.reduce((t,e)=>(t[e]=Boolean)&&t,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...VS.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function KS(t){const e=Td(t,BS),n=MS(t),{hasRouterLink:r,hasLink:i,linkTag:s,linkAttrs:o,navigateOnClick:a}=wv({fallbackTag:"button"}),l=V(()=>{const _=t.fab===!1&&t.fabMini===!1?e.value:{};return t.padding!==void 0?Object.assign({},_,{padding:t.padding.split(/\s+/).map(w=>w in bm?bm[w]+"px":w).join(" "),minWidth:"0",minHeight:"0"}):_}),c=V(()=>t.rounded===!0||t.fab===!0||t.fabMini===!0),u=V(()=>t.disable!==!0&&t.loading!==!0),h=V(()=>u.value===!0?t.tabindex||0:-1),d=V(()=>HS(t,"standard")),f=V(()=>{const _={tabindex:h.value};return i.value===!0?Object.assign(_,o.value):qS.includes(t.type)===!0&&(_.type=t.type),s.value==="a"?(t.disable===!0?_["aria-disabled"]="true":_.href===void 0&&(_.role="button"),r.value!==!0&&jS.test(t.type)===!0&&(_.type=t.type)):t.disable===!0&&(_.disabled="",_["aria-disabled"]="true"),t.loading===!0&&t.percentage!==void 0&&Object.assign(_,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":t.percentage}),_}),p=V(()=>{let _;t.color!==void 0?t.flat===!0||t.outline===!0?_=`text-${t.textColor||t.color}`:_=`bg-${t.color} text-${t.textColor||"white"}`:t.textColor&&(_=`text-${t.textColor}`);const w=t.round===!0?"round":`rectangle${c.value===!0?" q-btn--rounded":t.square===!0?" q-btn--square":""}`;return`q-btn--${d.value} q-btn--${w}`+(_!==void 0?" "+_:"")+(u.value===!0?" q-btn--actionable q-focusable q-hoverable":t.disable===!0?" disabled":"")+(t.fab===!0?" q-btn--fab":t.fabMini===!0?" q-btn--fab-mini":"")+(t.noCaps===!0?" q-btn--no-uppercase":"")+(t.dense===!0?" q-btn--dense":"")+(t.stretch===!0?" no-border-radius self-stretch":"")+(t.glossy===!0?" glossy":"")+(t.square?" q-btn--square":"")}),v=V(()=>n.value+(t.stack===!0?" column":" row")+(t.noWrap===!0?" no-wrap text-no-wrap":"")+(t.loading===!0?" q-btn__content--hidden":""));return{classes:p,style:l,innerClasses:v,attributes:f,hasLink:i,linkTag:s,navigateOnClick:a,isActionable:u}}const{passiveCapture:Qt}=Ze;let Ri=null,Si=null,Ci=null;var Mn=Ye({name:"QBtn",props:{...WS,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(t,{slots:e,emit:n}){const{proxy:r}=Qe(),{classes:i,style:s,innerClasses:o,attributes:a,hasLink:l,linkTag:c,navigateOnClick:u,isActionable:h}=KS(t),d=_e(null),f=_e(null);let p=null,v,_=null;const w=V(()=>t.label!==void 0&&t.label!==null&&t.label!==""),y=V(()=>t.disable===!0||t.ripple===!1?!1:{keyCodes:l.value===!0?[13,32]:[13],...t.ripple===!0?{}:t.ripple}),E=V(()=>({center:t.round})),T=V(()=>{const z=Math.max(0,Math.min(100,t.percentage));return z>0?{transition:"transform 0.6s",transform:`translateX(${z-100}%)`}:{}}),b=V(()=>{if(t.loading===!0)return{onMousedown:re,onTouchstart:re,onClick:re,onKeydown:re,onKeyup:re};if(h.value===!0){const z={onClick:N,onKeydown:A,onMousedown:$};if(r.$q.platform.has.touch===!0){const se=t.onTouchstart!==void 0?"":"Passive";z[`onTouchstart${se}`]=R}return z}return{onClick:Fn}}),x=V(()=>({ref:d,class:"q-btn q-btn-item non-selectable no-outline "+i.value,style:s.value,...a.value,...b.value}));function N(z){if(d.value!==null){if(z!==void 0){if(z.defaultPrevented===!0)return;const se=document.activeElement;if(t.type==="submit"&&se!==document.body&&d.value.contains(se)===!1&&se.contains(d.value)===!1){d.value.focus();const ee=()=>{document.removeEventListener("keydown",Fn,!0),document.removeEventListener("keyup",ee,Qt),d.value!==null&&d.value.removeEventListener("blur",ee,Qt)};document.addEventListener("keydown",Fn,!0),document.addEventListener("keyup",ee,Qt),d.value.addEventListener("blur",ee,Qt)}}u(z)}}function A(z){d.value!==null&&(n("keydown",z),ri(z,[13,32])===!0&&Si!==d.value&&(Si!==null&&F(),z.defaultPrevented!==!0&&(d.value.focus(),Si=d.value,d.value.classList.add("q-btn--active"),document.addEventListener("keyup",Q,!0),d.value.addEventListener("blur",Q,Qt)),Fn(z)))}function R(z){d.value!==null&&(n("touchstart",z),z.defaultPrevented!==!0&&(Ri!==d.value&&(Ri!==null&&F(),Ri=d.value,p=z.target,p.addEventListener("touchcancel",Q,Qt),p.addEventListener("touchend",Q,Qt)),v=!0,_!==null&&clearTimeout(_),_=setTimeout(()=>{_=null,v=!1},200)))}function $(z){d.value!==null&&(z.qSkipRipple=v===!0,n("mousedown",z),z.defaultPrevented!==!0&&Ci!==d.value&&(Ci!==null&&F(),Ci=d.value,d.value.classList.add("q-btn--active"),document.addEventListener("mouseup",Q,Qt)))}function Q(z){if(d.value!==null&&!(z!==void 0&&z.type==="blur"&&document.activeElement===d.value)){if(z!==void 0&&z.type==="keyup"){if(Si===d.value&&ri(z,[13,32])===!0){const se=new MouseEvent("click",z);se.qKeyEvent=!0,z.defaultPrevented===!0&&ao(se),z.cancelBubble===!0&&qy(se),d.value.dispatchEvent(se),Fn(z),z.qKeyEvent=!0}n("keyup",z)}F()}}function F(z){const se=f.value;z!==!0&&(Ri===d.value||Ci===d.value)&&se!==null&&se!==document.activeElement&&(se.setAttribute("tabindex",-1),se.focus()),Ri===d.value&&(p!==null&&(p.removeEventListener("touchcancel",Q,Qt),p.removeEventListener("touchend",Q,Qt)),Ri=p=null),Ci===d.value&&(document.removeEventListener("mouseup",Q,Qt),Ci=null),Si===d.value&&(document.removeEventListener("keyup",Q,!0),d.value!==null&&d.value.removeEventListener("blur",Q,Qt),Si=null),d.value!==null&&d.value.classList.remove("q-btn--active")}function re(z){Fn(z),z.qSkipRipple=!0}return Ft(()=>{F(!0)}),Object.assign(r,{click:N}),()=>{let z=[];t.icon!==void 0&&z.push(j(al,{name:t.icon,left:t.stack!==!0&&w.value===!0,role:"img","aria-hidden":"true"})),w.value===!0&&z.push(j("span",{class:"block"},[t.label])),z=Li(e.default,z),t.iconRight!==void 0&&t.round===!1&&z.push(j(al,{name:t.iconRight,right:t.stack!==!0&&w.value===!0,role:"img","aria-hidden":"true"}));const se=[j("span",{class:"q-focus-helper",ref:f})];return t.loading===!0&&t.percentage!==void 0&&se.push(j("span",{class:"q-btn__progress absolute-full overflow-hidden"+(t.darkPercentage===!0?" q-btn__progress--dark":"")},[j("span",{class:"q-btn__progress-indicator fit block",style:T.value})])),se.push(j("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+o.value},z)),t.loading!==null&&se.push(j(Zi,{name:"q-transition--fade"},()=>t.loading===!0?[j("span",{key:"loading",class:"absolute-full flex flex-center"},e.loading!==void 0?e.loading():[j(pv)])]:null)),$i(j(c.value,x.value,se),[[NS,y.value,void 0,E.value]])}}});const GS=j("div",{class:"q-space"});var Ev=Ye({name:"QSpace",setup(){return()=>GS}});const Fo={dark:{type:Boolean,default:null}};function Uo(t,e){return V(()=>t.dark===null?e.dark.isActive:t.dark)}const QS={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},du={xs:2,sm:4,md:8,lg:16,xl:24};var YS=Ye({name:"QSeparator",props:{...Fo,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(t){const e=Qe(),n=Uo(t,e.proxy.$q),r=V(()=>t.vertical===!0?"vertical":"horizontal"),i=V(()=>` q-separator--${r.value}`),s=V(()=>t.inset!==!1?`${i.value}-${QS[t.inset]}`:""),o=V(()=>`q-separator${i.value}${s.value}`+(t.color!==void 0?` bg-${t.color}`:"")+(n.value===!0?" q-separator--dark":"")),a=V(()=>{const l={};if(t.size!==void 0&&(l[t.vertical===!0?"width":"height"]=t.size),t.spaced!==!1){const c=t.spaced===!0?`${du.md}px`:t.spaced in du?`${du[t.spaced]}px`:t.spaced,u=t.vertical===!0?["Left","Right"]:["Top","Bottom"];l[`margin${u[0]}`]=l[`margin${u[1]}`]=c}return l});return()=>j("hr",{class:o.value,style:a.value,"aria-orientation":r.value})}}),fu=Ye({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(t,{slots:e}){const n=V(()=>`q-item__section column q-item__section--${t.avatar===!0||t.side===!0||t.thumbnail===!0?"side":"main"}`+(t.top===!0?" q-item__section--top justify-start":" justify-center")+(t.avatar===!0?" q-item__section--avatar":"")+(t.thumbnail===!0?" q-item__section--thumbnail":"")+(t.noWrap===!0?" q-item__section--nowrap":""));return()=>j("div",{class:n.value},Nn(e.default))}}),pu=Ye({name:"QItem",props:{...Fo,...vv,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(t,{slots:e,emit:n}){const{proxy:{$q:r}}=Qe(),i=Uo(t,r),{hasLink:s,linkAttrs:o,linkClass:a,linkTag:l,navigateOnClick:c}=wv(),u=_e(null),h=_e(null),d=V(()=>t.clickable===!0||s.value===!0||t.tag==="label"),f=V(()=>t.disable!==!0&&d.value===!0),p=V(()=>"q-item q-item-type row no-wrap"+(t.dense===!0?" q-item--dense":"")+(i.value===!0?" q-item--dark":"")+(s.value===!0&&t.active===null?a.value:t.active===!0?` q-item--active${t.activeClass!==void 0?` ${t.activeClass}`:""}`:"")+(t.disable===!0?" disabled":"")+(f.value===!0?" q-item--clickable q-link cursor-pointer "+(t.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(t.focused===!0?" q-manual-focusable--focused":""):"")),v=V(()=>{if(t.insetLevel===void 0)return null;const E=r.lang.rtl===!0?"Right":"Left";return{["padding"+E]:16+t.insetLevel*56+"px"}});function _(E){f.value===!0&&(h.value!==null&&(E.qKeyEvent!==!0&&document.activeElement===u.value?h.value.focus():document.activeElement===h.value&&u.value.focus()),c(E))}function w(E){if(f.value===!0&&ri(E,[13,32])===!0){Fn(E),E.qKeyEvent=!0;const T=new MouseEvent("click",E);T.qKeyEvent=!0,u.value.dispatchEvent(T)}n("keyup",E)}function y(){const E=uv(e.default,[]);return f.value===!0&&E.unshift(j("div",{class:"q-focus-helper",tabindex:-1,ref:h})),E}return()=>{const E={ref:u,class:p.value,style:v.value,role:"listitem",onClick:_,onKeyup:w};return f.value===!0?(E.tabindex=t.tabindex||"0",Object.assign(E,o.value)):d.value===!0&&(E["aria-disabled"]="true"),j(l.value,E,y())}}}),JS=Ye({name:"QList",props:{...Fo,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(t,{slots:e}){const n=Qe(),r=Uo(t,n.proxy.$q),i=V(()=>"q-list"+(t.bordered===!0?" q-list--bordered":"")+(t.dense===!0?" q-list--dense":"")+(t.separator===!0?" q-list--separator":"")+(r.value===!0?" q-list--dark":"")+(t.padding===!0?" q-list--padding":""));return()=>j(t.tag,{class:i.value},Nn(e.default))}});function XS(){if(window.getSelection!==void 0){const t=window.getSelection();t.empty!==void 0?t.empty():t.removeAllRanges!==void 0&&(t.removeAllRanges(),rl.is.mobile!==!0&&t.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const ZS={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function eC({showing:t,avoidEmit:e,configureAnchorEl:n}){const{props:r,proxy:i,emit:s}=Qe(),o=_e(null);let a=null;function l(f){return o.value===null?!1:f===void 0||f.touches===void 0||f.touches.length<=1}const c={};n===void 0&&(Object.assign(c,{hide(f){i.hide(f)},toggle(f){i.toggle(f),f.qAnchorHandled=!0},toggleKey(f){ri(f,13)===!0&&c.toggle(f)},contextClick(f){i.hide(f),ao(f),un(()=>{i.show(f),f.qAnchorHandled=!0})},prevent:ao,mobileTouch(f){if(c.mobileCleanup(f),l(f)!==!0)return;i.hide(f),o.value.classList.add("non-selectable");const p=f.target;nh(c,"anchor",[[p,"touchmove","mobileCleanup","passive"],[p,"touchend","mobileCleanup","passive"],[p,"touchcancel","mobileCleanup","passive"],[o.value,"contextmenu","prevent","notPassive"]]),a=setTimeout(()=>{a=null,i.show(f),f.qAnchorHandled=!0},300)},mobileCleanup(f){o.value.classList.remove("non-selectable"),a!==null&&(clearTimeout(a),a=null),t.value===!0&&f!==void 0&&XS()}}),n=function(f=r.contextMenu){if(r.noParentEvent===!0||o.value===null)return;let p;f===!0?i.$q.platform.is.mobile===!0?p=[[o.value,"touchstart","mobileTouch","passive"]]:p=[[o.value,"mousedown","hide","passive"],[o.value,"contextmenu","contextClick","notPassive"]]:p=[[o.value,"click","toggle","passive"],[o.value,"keyup","toggleKey","passive"]],nh(c,"anchor",p)});function u(){jy(c,"anchor")}function h(f){for(o.value=f;o.value.classList.contains("q-anchor--skip");)o.value=o.value.parentNode;n()}function d(){if(r.target===!1||r.target===""||i.$el.parentNode===null)o.value=null;else if(r.target===!0)h(i.$el.parentNode);else{let f=r.target;if(typeof r.target=="string")try{f=document.querySelector(r.target)}catch{f=void 0}f!=null?(o.value=f.$el||f,n()):(o.value=null,console.error(`Anchor: target "${r.target}" not found`))}}return xe(()=>r.contextMenu,f=>{o.value!==null&&(u(),n(f))}),xe(()=>r.target,()=>{o.value!==null&&u(),d()}),xe(()=>r.noParentEvent,f=>{o.value!==null&&(f===!0?u():n())}),Hn(()=>{d(),e!==!0&&r.modelValue===!0&&o.value===null&&s("update:modelValue",!1)}),Ft(()=>{a!==null&&clearTimeout(a),u()}),{anchorEl:o,canShow:l,anchorEvents:c}}function tC(t,e){const n=_e(null);let r;function i(a,l){const c=`${l!==void 0?"add":"remove"}EventListener`,u=l!==void 0?l:r;a!==window&&a[c]("scroll",u,Ze.passive),window[c]("scroll",u,Ze.passive),r=l}function s(){n.value!==null&&(i(n.value),n.value=null)}const o=xe(()=>t.noParentEvent,()=>{n.value!==null&&(s(),e())});return Ft(o),{localScrollTarget:n,unconfigureScrollTarget:s,changeScrollEvent:i}}const Tv={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Iv=["beforeShow","show","beforeHide","hide"];function bv({showing:t,canShow:e,hideOnRouteChange:n,handleShow:r,handleHide:i,processOnMount:s}){const o=Qe(),{props:a,emit:l,proxy:c}=o;let u;function h(y){t.value===!0?p(y):d(y)}function d(y){if(a.disable===!0||y!==void 0&&y.qAnchorHandled===!0||e!==void 0&&e(y)!==!0)return;const E=a["onUpdate:modelValue"]!==void 0;E===!0&&(l("update:modelValue",!0),u=y,un(()=>{u===y&&(u=void 0)})),(a.modelValue===null||E===!1)&&f(y)}function f(y){t.value!==!0&&(t.value=!0,l("beforeShow",y),r!==void 0?r(y):l("show",y))}function p(y){if(a.disable===!0)return;const E=a["onUpdate:modelValue"]!==void 0;E===!0&&(l("update:modelValue",!1),u=y,un(()=>{u===y&&(u=void 0)})),(a.modelValue===null||E===!1)&&v(y)}function v(y){t.value!==!1&&(t.value=!1,l("beforeHide",y),i!==void 0?i(y):l("hide",y))}function _(y){a.disable===!0&&y===!0?a["onUpdate:modelValue"]!==void 0&&l("update:modelValue",!1):y===!0!==t.value&&(y===!0?f:v)(u)}xe(()=>a.modelValue,_),n!==void 0&&_v(o)===!0&&xe(()=>c.$route.fullPath,()=>{n.value===!0&&t.value===!0&&p()}),s===!0&&Hn(()=>{_(a.modelValue)});const w={show:d,hide:p,toggle:h};return Object.assign(c,w),w}let Br=[],uo=[];function Av(t){uo=uo.filter(e=>e!==t)}function nC(t){Av(t),uo.push(t)}function Am(t){Av(t),uo.length===0&&Br.length!==0&&(Br[Br.length-1](),Br=[])}function Rv(t){uo.length===0?t():Br.push(t)}function RU(t){Br=Br.filter(e=>e!==t)}let rC=1,iC=document.body;function Sv(t,e){const n=document.createElement("div");if(n.id=e!==void 0?`q-portal--${e}--${rC++}`:t,sl.globalNodes!==void 0){const r=sl.globalNodes.class;r!==void 0&&(n.className=r)}return iC.appendChild(n),n}function sC(t){t.remove()}const zi=[];function oC(t){return zi.find(e=>e.contentEl!==null&&e.contentEl.contains(t))}function Cv(t,e){do{if(t.$options.name==="QMenu"){if(t.hide(e),t.$props.separateClosePopup===!0)return La(t)}else if(t.__qPortal===!0){const n=La(t);return n!==void 0&&n.$options.name==="QPopupProxy"?(t.hide(e),n):t}t=La(t)}while(t!=null)}function aC(t,e,n){for(;n!==0&&t!==void 0&&t!==null;){if(t.__qPortal===!0){if(n--,t.$options.name==="QMenu"){t=Cv(t,e);continue}t.hide(e)}t=La(t)}}function lC(t){for(t=t.parent;t!=null;){if(t.type.name==="QGlobalDialog")return!0;if(t.type.name==="QDialog"||t.type.name==="QMenu")return!1;t=t.parent}return!1}function Pv(t,e,n,r){const i=_e(!1),s=_e(!1);let o=null;const a={},l=r==="dialog"&&lC(t);function c(h){if(h===!0){Am(a),s.value=!0;return}s.value=!1,i.value===!1&&(l===!1&&o===null&&(o=Sv(!1,r)),i.value=!0,zi.push(t.proxy),nC(a))}function u(h){if(s.value=!1,h!==!0)return;Am(a),i.value=!1;const d=zi.indexOf(t.proxy);d!==-1&&zi.splice(d,1),o!==null&&(sC(o),o=null)}return Wl(()=>{u(!0)}),t.proxy.__qPortal=!0,Jl(t.proxy,"contentEl",()=>e.value),{showPortal:c,hidePortal:u,portalIsActive:i,portalIsAccessible:s,renderPortal:()=>l===!0?n():i.value===!0?[j(Ub,{to:o},n())]:void 0}}const kv={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function xv(t,e=()=>{},n=()=>{}){return{transitionProps:V(()=>{const r=`q-transition--${t.transitionShow||e()}`,i=`q-transition--${t.transitionHide||n()}`;return{appear:!0,enterFromClass:`${r}-enter-from`,enterActiveClass:`${r}-enter-active`,enterToClass:`${r}-enter-to`,leaveFromClass:`${i}-leave-from`,leaveActiveClass:`${i}-leave-active`,leaveToClass:`${i}-leave-to`}}),transitionStyle:V(()=>`--q-transition-duration: ${t.transitionDuration}ms`)}}function Ov(){let t;const e=Qe();function n(){t=void 0}return fd(n),Ft(n),{removeTick:n,registerTick(r){t=r,un(()=>{t===r&&(yv(e)===!1&&t(),t=void 0)})}}}function Dv(){let t=null;const e=Qe();function n(){t!==null&&(clearTimeout(t),t=null)}return fd(n),Ft(n),{removeTimeout:n,registerTimeout(r,i){n(),yv(e)===!1&&(t=setTimeout(r,i))}}}const cC=[null,document,document.body,document.scrollingElement,document.documentElement];function Nv(t,e){let n=OS(e);if(n===void 0){if(t==null)return window;n=t.closest(".scroll,.scroll-y,.overflow-auto")}return cC.includes(n)?window:n}function Lv(t){return t===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:t.scrollTop}function Vv(t){return t===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:t.scrollLeft}let _a;function Va(){if(_a!==void 0)return _a;const t=document.createElement("p"),e=document.createElement("div");hh(t,{width:"100%",height:"200px"}),hh(e,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.appendChild(t),document.body.appendChild(e);const n=t.offsetWidth;e.style.overflow="scroll";let r=t.offsetWidth;return n===r&&(r=e.clientWidth),e.remove(),_a=n-r,_a}function uC(t,e=!0){return!t||t.nodeType!==Node.ELEMENT_NODE?!1:e?t.scrollHeight>t.clientHeight&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-y"])):t.scrollWidth>t.clientWidth&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-x"]))}const Yr=[];let ns;function hC(t){ns=t.keyCode===27}function dC(){ns===!0&&(ns=!1)}function fC(t){ns===!0&&(ns=!1,ri(t,27)===!0&&Yr[Yr.length-1](t))}function Mv(t){window[t]("keydown",hC),window[t]("blur",dC),window[t]("keyup",fC),ns=!1}function Fv(t){Ge.is.desktop===!0&&(Yr.push(t),Yr.length===1&&Mv("addEventListener"))}function ll(t){const e=Yr.indexOf(t);e>-1&&(Yr.splice(e,1),Yr.length===0&&Mv("removeEventListener"))}const Jr=[];function Uv(t){Jr[Jr.length-1](t)}function $v(t){Ge.is.desktop===!0&&(Jr.push(t),Jr.length===1&&document.body.addEventListener("focusin",Uv))}function dh(t){const e=Jr.indexOf(t);e>-1&&(Jr.splice(e,1),Jr.length===0&&document.body.removeEventListener("focusin",Uv))}const{notPassiveCapture:cl}=Ze,Xr=[];function ul(t){const e=t.target;if(e===void 0||e.nodeType===8||e.classList.contains("no-pointer-events")===!0)return;let n=zi.length-1;for(;n>=0;){const r=zi[n].$;if(r.type.name==="QTooltip"){n--;continue}if(r.type.name!=="QDialog")break;if(r.props.seamless!==!0)return;n--}for(let r=Xr.length-1;r>=0;r--){const i=Xr[r];if((i.anchorEl.value===null||i.anchorEl.value.contains(e)===!1)&&(e===document.body||i.innerRef.value!==null&&i.innerRef.value.contains(e)===!1))t.qClickOutside=!0,i.onClickOutside(t);else return}}function pC(t){Xr.push(t),Xr.length===1&&(document.addEventListener("mousedown",ul,cl),document.addEventListener("touchstart",ul,cl))}function Rm(t){const e=Xr.findIndex(n=>n===t);e>-1&&(Xr.splice(e,1),Xr.length===0&&(document.removeEventListener("mousedown",ul,cl),document.removeEventListener("touchstart",ul,cl)))}let Sm,Cm;function Pm(t){const e=t.split(" ");return e.length!==2?!1:["top","center","bottom"].includes(e[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(e[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function mC(t){return t?!(t.length!==2||typeof t[0]!="number"||typeof t[1]!="number"):!0}const fh={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(t=>{fh[`${t}#ltr`]=t,fh[`${t}#rtl`]=t});function km(t,e){const n=t.split(" ");return{vertical:n[0],horizontal:fh[`${n[1]}#${e===!0?"rtl":"ltr"}`]}}function gC(t,e){let{top:n,left:r,right:i,bottom:s,width:o,height:a}=t.getBoundingClientRect();return e!==void 0&&(n-=e[1],r-=e[0],s+=e[1],i+=e[0],o+=e[0],a+=e[1]),{top:n,bottom:s,height:a,left:r,right:i,width:o,middle:r+(i-r)/2,center:n+(s-n)/2}}function _C(t,e,n){let{top:r,left:i}=t.getBoundingClientRect();return r+=e.top,i+=e.left,n!==void 0&&(r+=n[1],i+=n[0]),{top:r,bottom:r+1,height:1,left:i,right:i+1,width:1,middle:i,center:r}}function yC(t,e){return{top:0,center:e/2,bottom:e,left:0,middle:t/2,right:t}}function xm(t,e,n,r){return{top:t[n.vertical]-e[r.vertical],left:t[n.horizontal]-e[r.horizontal]}}function Bv(t,e=0){if(t.targetEl===null||t.anchorEl===null||e>5)return;if(t.targetEl.offsetHeight===0||t.targetEl.offsetWidth===0){setTimeout(()=>{Bv(t,e+1)},10);return}const{targetEl:n,offset:r,anchorEl:i,anchorOrigin:s,selfOrigin:o,absoluteOffset:a,fit:l,cover:c,maxHeight:u,maxWidth:h}=t;if(Ge.is.ios===!0&&window.visualViewport!==void 0){const x=document.body.style,{offsetLeft:N,offsetTop:A}=window.visualViewport;N!==Sm&&(x.setProperty("--q-pe-left",N+"px"),Sm=N),A!==Cm&&(x.setProperty("--q-pe-top",A+"px"),Cm=A)}const{scrollLeft:d,scrollTop:f}=n,p=a===void 0?gC(i,c===!0?[0,0]:r):_C(i,a,r);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:h||"100vw",maxHeight:u||"100vh",visibility:"visible"});const{offsetWidth:v,offsetHeight:_}=n,{elWidth:w,elHeight:y}=l===!0||c===!0?{elWidth:Math.max(p.width,v),elHeight:c===!0?Math.max(p.height,_):_}:{elWidth:v,elHeight:_};let E={maxWidth:h,maxHeight:u};(l===!0||c===!0)&&(E.minWidth=p.width+"px",c===!0&&(E.minHeight=p.height+"px")),Object.assign(n.style,E);const T=yC(w,y);let b=xm(p,T,s,o);if(a===void 0||r===void 0)mu(b,p,T,s,o);else{const{top:x,left:N}=b;mu(b,p,T,s,o);let A=!1;if(b.top!==x){A=!0;const R=2*r[1];p.center=p.top-=R,p.bottom-=R+2}if(b.left!==N){A=!0;const R=2*r[0];p.middle=p.left-=R,p.right-=R+2}A===!0&&(b=xm(p,T,s,o),mu(b,p,T,s,o))}E={top:b.top+"px",left:b.left+"px"},b.maxHeight!==void 0&&(E.maxHeight=b.maxHeight+"px",p.height>b.maxHeight&&(E.minHeight=E.maxHeight)),b.maxWidth!==void 0&&(E.maxWidth=b.maxWidth+"px",p.width>b.maxWidth&&(E.minWidth=E.maxWidth)),Object.assign(n.style,E),n.scrollTop!==f&&(n.scrollTop=f),n.scrollLeft!==d&&(n.scrollLeft=d)}function mu(t,e,n,r,i){const s=n.bottom,o=n.right,a=Va(),l=window.innerHeight-a,c=document.body.clientWidth;if(t.top<0||t.top+s>l)if(i.vertical==="center")t.top=e[r.vertical]>l/2?Math.max(0,l-s):0,t.maxHeight=Math.min(s,l);else if(e[r.vertical]>l/2){const u=Math.min(l,r.vertical==="center"?e.center:r.vertical===i.vertical?e.bottom:e.top);t.maxHeight=Math.min(s,u),t.top=Math.max(0,u-s)}else t.top=Math.max(0,r.vertical==="center"?e.center:r.vertical===i.vertical?e.top:e.bottom),t.maxHeight=Math.min(s,l-t.top);if(t.left<0||t.left+o>c)if(t.maxWidth=Math.min(o,c),i.horizontal==="middle")t.left=e[r.horizontal]>c/2?Math.max(0,c-o):0;else if(e[r.horizontal]>c/2){const u=Math.min(c,r.horizontal==="middle"?e.middle:r.horizontal===i.horizontal?e.right:e.left);t.maxWidth=Math.min(o,u),t.left=Math.max(0,u-t.maxWidth)}else t.left=Math.max(0,r.horizontal==="middle"?e.middle:r.horizontal===i.horizontal?e.left:e.right),t.maxWidth=Math.min(o,c-t.left)}var vC=Ye({name:"QMenu",inheritAttrs:!1,props:{...ZS,...Tv,...Fo,...kv,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:Pm},self:{type:String,validator:Pm},offset:{type:Array,validator:mC},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Iv,"click","escapeKey"],setup(t,{slots:e,emit:n,attrs:r}){let i=null,s,o,a;const l=Qe(),{proxy:c}=l,{$q:u}=c,h=_e(null),d=_e(!1),f=V(()=>t.persistent!==!0&&t.noRouteDismiss!==!0),p=Uo(t,u),{registerTick:v,removeTick:_}=Ov(),{registerTimeout:w}=Dv(),{transitionProps:y,transitionStyle:E}=xv(t),{localScrollTarget:T,changeScrollEvent:b,unconfigureScrollTarget:x}=tC(t,_t),{anchorEl:N,canShow:A}=eC({showing:d}),{hide:R}=bv({showing:d,canShow:A,handleShow:ut,handleHide:ht,hideOnRouteChange:f,processOnMount:!0}),{showPortal:$,hidePortal:Q,renderPortal:F}=Pv(l,h,H,"menu"),re={anchorEl:N,innerRef:h,onClickOutside(P){if(t.persistent!==!0&&d.value===!0)return R(P),(P.type==="touchstart"||P.target.classList.contains("q-dialog__backdrop"))&&Fn(P),!0}},z=V(()=>km(t.anchor||(t.cover===!0?"center middle":"bottom start"),u.lang.rtl)),se=V(()=>t.cover===!0?z.value:km(t.self||"top start",u.lang.rtl)),ee=V(()=>(t.square===!0?" q-menu--square":"")+(p.value===!0?" q-menu--dark q-dark":"")),me=V(()=>t.autoClose===!0?{onClick:Kt}:{}),de=V(()=>d.value===!0&&t.persistent!==!0);xe(de,P=>{P===!0?(Fv(ge),pC(re)):(ll(ge),Rm(re))});function Be(){Rv(()=>{let P=h.value;P&&P.contains(document.activeElement)!==!0&&(P=P.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||P.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||P.querySelector("[autofocus], [data-autofocus]")||P,P.focus({preventScroll:!0}))})}function ut(P){if(i=t.noRefocus===!1?document.activeElement:null,$v(pe),$(),_t(),s=void 0,P!==void 0&&(t.touchPosition||t.contextMenu)){const J=By(P);if(J.left!==void 0){const{top:Ee,left:Oe}=N.value.getBoundingClientRect();s={left:J.left-Oe,top:J.top-Ee}}}o===void 0&&(o=xe(()=>u.screen.width+"|"+u.screen.height+"|"+t.self+"|"+t.anchor+"|"+u.lang.rtl,S)),t.noFocus!==!0&&document.activeElement.blur(),v(()=>{S(),t.noFocus!==!0&&Be()}),w(()=>{u.platform.is.ios===!0&&(a=t.autoClose,h.value.click()),S(),$(!0),n("show",P)},t.transitionDuration)}function ht(P){_(),Q(),qe(!0),i!==null&&(P===void 0||P.qClickOutside!==!0)&&(((P&&P.type.indexOf("key")===0?i.closest('[tabindex]:not([tabindex^="-"])'):void 0)||i).focus(),i=null),w(()=>{Q(!0),n("hide",P)},t.transitionDuration)}function qe(P){s=void 0,o!==void 0&&(o(),o=void 0),(P===!0||d.value===!0)&&(dh(pe),x(),Rm(re),ll(ge)),P!==!0&&(i=null)}function _t(){(N.value!==null||t.scrollTarget!==void 0)&&(T.value=Nv(N.value,t.scrollTarget),b(T.value,S))}function Kt(P){a!==!0?(Cv(c,P),n("click",P)):a=!1}function pe(P){de.value===!0&&t.noFocus!==!0&&mv(h.value,P.target)!==!0&&Be()}function ge(P){n("escapeKey"),R(P)}function S(){Bv({targetEl:h.value,offset:t.offset,anchorEl:N.value,anchorOrigin:z.value,selfOrigin:se.value,absoluteOffset:s,fit:t.fit,cover:t.cover,maxHeight:t.maxHeight,maxWidth:t.maxWidth})}function H(){return j(Zi,y.value,()=>d.value===!0?j("div",{role:"menu",...r,ref:h,tabindex:-1,class:["q-menu q-position-engine scroll"+ee.value,r.class],style:[r.style,E.value],...me.value},Nn(e.default)):null)}return Ft(qe),Object.assign(c,{focus:Be,updatePosition:S}),F}}),wC=Ye({name:"QToolbar",props:{inset:Boolean},setup(t,{slots:e}){const n=V(()=>"q-toolbar row no-wrap items-center"+(t.inset===!0?" q-toolbar--inset":""));return()=>j("div",{class:n.value,role:"toolbar"},Nn(e.default))}});function EC(){const t=_e(!Ir.value);return t.value===!1&&Hn(()=>{t.value=!0}),t}const qv=typeof ResizeObserver!="undefined",Om=qv===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var ph=Ye({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(t,{emit:e}){let n=null,r,i={width:-1,height:-1};function s(l){l===!0||t.debounce===0||t.debounce==="0"?o():n===null&&(n=setTimeout(o,t.debounce))}function o(){if(n!==null&&(clearTimeout(n),n=null),r){const{offsetWidth:l,offsetHeight:c}=r;(l!==i.width||c!==i.height)&&(i={width:l,height:c},e("resize",i))}}const{proxy:a}=Qe();if(a.trigger=s,qv===!0){let l;const c=u=>{r=a.$el.parentNode,r?(l=new ResizeObserver(s),l.observe(r),o()):u!==!0&&un(()=>{c(!0)})};return Hn(()=>{c()}),Ft(()=>{n!==null&&clearTimeout(n),l!==void 0&&(l.disconnect!==void 0?l.disconnect():r&&l.unobserve(r))}),ni}else{let u=function(){n!==null&&(clearTimeout(n),n=null),c!==void 0&&(c.removeEventListener!==void 0&&c.removeEventListener("resize",s,Ze.passive),c=void 0)},h=function(){u(),r&&r.contentDocument&&(c=r.contentDocument.defaultView,c.addEventListener("resize",s,Ze.passive),o())};const l=EC();let c;return Hn(()=>{un(()=>{r=a.$el,r&&h()})}),Ft(u),()=>{if(l.value===!0)return j("object",{style:Om.style,tabindex:-1,type:"text/html",data:Om.url,"aria-hidden":"true",onLoad:h})}}}}),TC=Ye({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:e,emit:n}){const{proxy:{$q:r}}=Qe(),i=Pt(yd,ji);if(i===ji)return console.error("QHeader needs to be child of QLayout"),ji;const s=_e(parseInt(t.heightHint,10)),o=_e(!0),a=V(()=>t.reveal===!0||i.view.value.indexOf("H")>-1||r.platform.is.ios&&i.isContainer.value===!0),l=V(()=>{if(t.modelValue!==!0)return 0;if(a.value===!0)return o.value===!0?s.value:0;const y=s.value-i.scroll.value.position;return y>0?y:0}),c=V(()=>t.modelValue!==!0||a.value===!0&&o.value!==!0),u=V(()=>t.modelValue===!0&&c.value===!0&&t.reveal===!0),h=V(()=>"q-header q-layout__section--marginal "+(a.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(c.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),d=V(()=>{const y=i.rows.value.top,E={};return y[0]==="l"&&i.left.space===!0&&(E[r.lang.rtl===!0?"right":"left"]=`${i.left.size}px`),y[2]==="r"&&i.right.space===!0&&(E[r.lang.rtl===!0?"left":"right"]=`${i.right.size}px`),E});function f(y,E){i.update("header",y,E)}function p(y,E){y.value!==E&&(y.value=E)}function v({height:y}){p(s,y),f("size",y)}function _(y){u.value===!0&&p(o,!0),n("focusin",y)}xe(()=>t.modelValue,y=>{f("space",y),p(o,!0),i.animate()}),xe(l,y=>{f("offset",y)}),xe(()=>t.reveal,y=>{y===!1&&p(o,t.modelValue)}),xe(o,y=>{i.animate(),n("reveal",y)}),xe(i.scroll,y=>{t.reveal===!0&&p(o,y.direction==="up"||y.position<=t.revealOffset||y.position-y.inflectionPoint<100)});const w={};return i.instances.header=w,t.modelValue===!0&&f("size",s.value),f("space",t.modelValue),f("offset",l.value),Ft(()=>{i.instances.header===w&&(i.instances.header=void 0,f("size",0),f("offset",0),f("space",!1))}),()=>{const y=uv(e.default,[]);return t.elevated===!0&&y.push(j("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),y.push(j(ph,{debounce:0,onResize:v})),j("header",{class:h.value,style:d.value,onFocusin:_},y)}}}),IC=Ye({name:"QPageContainer",setup(t,{slots:e}){const{proxy:{$q:n}}=Qe(),r=Pt(yd,ji);if(r===ji)return console.error("QPageContainer needs to be child of QLayout"),ji;qi(tR,!0);const i=V(()=>{const s={};return r.header.space===!0&&(s.paddingTop=`${r.header.size}px`),r.right.space===!0&&(s[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${r.right.size}px`),r.footer.space===!0&&(s.paddingBottom=`${r.footer.size}px`),r.left.space===!0&&(s[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${r.left.size}px`),s});return()=>j("div",{class:"q-page-container",style:i.value},Nn(e.default))}});const{passive:Dm}=Ze,bC=["both","horizontal","vertical"];var AC=Ye({name:"QScrollObserver",props:{axis:{type:String,validator:t=>bC.includes(t),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(t,{emit:e}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let r=null,i,s;xe(()=>t.scrollTarget,()=>{l(),a()});function o(){r!==null&&r();const h=Math.max(0,Lv(i)),d=Vv(i),f={top:h-n.position.top,left:d-n.position.left};if(t.axis==="vertical"&&f.top===0||t.axis==="horizontal"&&f.left===0)return;const p=Math.abs(f.top)>=Math.abs(f.left)?f.top<0?"up":"down":f.left<0?"left":"right";n.position={top:h,left:d},n.directionChanged=n.direction!==p,n.delta=f,n.directionChanged===!0&&(n.direction=p,n.inflectionPoint=n.position),e("scroll",{...n})}function a(){i=Nv(s,t.scrollTarget),i.addEventListener("scroll",c,Dm),c(!0)}function l(){i!==void 0&&(i.removeEventListener("scroll",c,Dm),i=void 0)}function c(h){if(h===!0||t.debounce===0||t.debounce==="0")o();else if(r===null){const[d,f]=t.debounce?[setTimeout(o,t.debounce),clearTimeout]:[requestAnimationFrame(o),cancelAnimationFrame];r=()=>{f(d),r=null}}}const{proxy:u}=Qe();return xe(()=>u.$q.lang.rtl,o),Hn(()=>{s=u.$el.parentNode,a()}),Ft(()=>{r!==null&&r(),l()}),Object.assign(u,{trigger:c,getPosition:()=>n}),ni}}),RC=Ye({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:t=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(t.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(t,{slots:e,emit:n}){const{proxy:{$q:r}}=Qe(),i=_e(null),s=_e(r.screen.height),o=_e(t.container===!0?0:r.screen.width),a=_e({position:0,direction:"down",inflectionPoint:0}),l=_e(0),c=_e(Ir.value===!0?0:Va()),u=V(()=>"q-layout q-layout--"+(t.container===!0?"containerized":"standard")),h=V(()=>t.container===!1?{minHeight:r.screen.height+"px"}:null),d=V(()=>c.value!==0?{[r.lang.rtl===!0?"left":"right"]:`${c.value}px`}:null),f=V(()=>c.value!==0?{[r.lang.rtl===!0?"right":"left"]:0,[r.lang.rtl===!0?"left":"right"]:`-${c.value}px`,width:`calc(100% + ${c.value}px)`}:null);function p(T){if(t.container===!0||document.qScrollPrevented!==!0){const b={position:T.position.top,direction:T.direction,directionChanged:T.directionChanged,inflectionPoint:T.inflectionPoint.top,delta:T.delta.top};a.value=b,t.onScroll!==void 0&&n("scroll",b)}}function v(T){const{height:b,width:x}=T;let N=!1;s.value!==b&&(N=!0,s.value=b,t.onScrollHeight!==void 0&&n("scrollHeight",b),w()),o.value!==x&&(N=!0,o.value=x),N===!0&&t.onResize!==void 0&&n("resize",T)}function _({height:T}){l.value!==T&&(l.value=T,w())}function w(){if(t.container===!0){const T=s.value>l.value?Va():0;c.value!==T&&(c.value=T)}}let y=null;const E={instances:{},view:V(()=>t.view),isContainer:V(()=>t.container),rootRef:i,height:s,containerHeight:l,scrollbarWidth:c,totalWidth:V(()=>o.value+c.value),rows:V(()=>{const T=t.view.toLowerCase().split(" ");return{top:T[0].split(""),middle:T[1].split(""),bottom:T[2].split("")}}),header:ln({size:0,offset:0,space:!1}),right:ln({size:300,offset:0,space:!1}),footer:ln({size:0,offset:0,space:!1}),left:ln({size:300,offset:0,space:!1}),scroll:a,animate(){y!==null?clearTimeout(y):document.body.classList.add("q-body--layout-animate"),y=setTimeout(()=>{y=null,document.body.classList.remove("q-body--layout-animate")},155)},update(T,b,x){E[T][b]=x}};if(qi(yd,E),Va()>0){let x=function(){T=null,b.classList.remove("hide-scrollbar")},N=function(){if(T===null){if(b.scrollHeight>r.screen.height)return;b.classList.add("hide-scrollbar")}else clearTimeout(T);T=setTimeout(x,300)},A=function(R){T!==null&&R==="remove"&&(clearTimeout(T),x()),window[`${R}EventListener`]("resize",N)},T=null;const b=document.body;xe(()=>t.container!==!0?"add":"remove",A),t.container!==!0&&A("add"),Wl(()=>{A("remove")})}return()=>{const T=Li(e.default,[j(AC,{onScroll:p}),j(ph,{onResize:v})]),b=j("div",{class:u.value,style:h.value,ref:t.container===!0?void 0:i,tabindex:-1},T);return t.container===!0?j("div",{class:"q-layout-container overflow-hidden",ref:i},[j(ph,{onResize:_}),j("div",{class:"absolute-full",style:d.value},[j("div",{class:"scroll",style:f.value},[b])])]):b}}});function Nm(t){if(t===!1)return 0;if(t===!0||t===void 0)return 1;const e=parseInt(t,10);return isNaN(e)?0:e}var Ma=cv({name:"close-popup",beforeMount(t,{value:e}){const n={depth:Nm(e),handler(r){n.depth!==0&&setTimeout(()=>{const i=oC(t);i!==void 0&&aC(i,r,n.depth)})},handlerKey(r){ri(r,13)===!0&&n.handler(r)}};t.__qclosepopup=n,t.addEventListener("click",n.handler),t.addEventListener("keyup",n.handlerKey)},updated(t,{value:e,oldValue:n}){e!==n&&(t.__qclosepopup.depth=Nm(e))},beforeUnmount(t){const e=t.__qclosepopup;t.removeEventListener("click",e.handler),t.removeEventListener("keyup",e.handlerKey),delete t.__qclosepopup}});function SC(t){return ed()?(V_(t),!0):!1}function ur(t){return typeof t=="function"?t():Ot(t)}const $o=typeof window!="undefined"&&typeof document!="undefined";typeof WorkerGlobalScope!="undefined"&&globalThis instanceof WorkerGlobalScope;const SU=t=>t!=null,CC=Object.prototype.toString,PC=t=>CC.call(t)==="[object Object]",hl=()=>{},CU=kC();function kC(){var t,e;return $o&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((e=window==null?void 0:window.navigator)==null?void 0:e.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function xC(t,e){function n(...r){return new Promise((i,s)=>{Promise.resolve(t(()=>e.apply(this,r),{fn:e,thisArg:this,args:r})).then(i).catch(s)})}return n}const jv=t=>t();function OC(t=jv){const e=_e(!0);function n(){e.value=!1}function r(){e.value=!0}const i=(...s)=>{e.value&&t(...s)};return{isActive:Bl(e),pause:n,resume:r,eventFilter:i}}const PU={mounted:"mounted",updated:"updated",unmounted:"unmounted"};function mh(t,e=!1,n="Timeout"){return new Promise((r,i)=>{setTimeout(e?()=>i(n):r,t)})}function DC(t){return t||Qe()}function kU(...t){if(t.length!==1)return Z_(...t);const e=t[0];return typeof e=="function"?Bl(j0(()=>({get:e,set:hl}))):_e(e)}function NC(t,e,n={}){const{eventFilter:r=jv,...i}=n;return xe(t,xC(r,e),i)}function LC(t,e,n={}){const{eventFilter:r,...i}=n,{eventFilter:s,pause:o,resume:a,isActive:l}=OC(r);return{stop:NC(t,e,{...i,eventFilter:s}),pause:o,resume:a,isActive:l}}function VC(t,e=!0,n){DC()?Hn(t,n):e?t():un(t)}function gh(t,e=!1){function n(h,{flush:d="sync",deep:f=!1,timeout:p,throwOnTimeout:v}={}){let _=null;const y=[new Promise(E=>{_=xe(t,T=>{h(T)!==e&&(_==null||_(),E(T))},{flush:d,deep:f,immediate:!0})})];return p!=null&&y.push(mh(p,v).then(()=>ur(t)).finally(()=>_==null?void 0:_())),Promise.race(y)}function r(h,d){if(!ze(h))return n(T=>T===h,d);const{flush:f="sync",deep:p=!1,timeout:v,throwOnTimeout:_}=d!=null?d:{};let w=null;const E=[new Promise(T=>{w=xe([t,h],([b,x])=>{e!==(b===x)&&(w==null||w(),T(b))},{flush:f,deep:p,immediate:!0})})];return v!=null&&E.push(mh(v,_).then(()=>ur(t)).finally(()=>(w==null||w(),ur(t)))),Promise.race(E)}function i(h){return n(d=>Boolean(d),h)}function s(h){return r(null,h)}function o(h){return r(void 0,h)}function a(h){return n(Number.isNaN,h)}function l(h,d){return n(f=>{const p=Array.from(f);return p.includes(h)||p.includes(ur(h))},d)}function c(h){return u(1,h)}function u(h=1,d){let f=-1;return n(()=>(f+=1,f>=h),d)}return Array.isArray(ur(t))?{toMatch:n,toContains:l,changed:c,changedTimes:u,get not(){return gh(t,!e)}}:{toMatch:n,toBe:r,toBeTruthy:i,toBeNull:s,toBeNaN:a,toBeUndefined:o,changed:c,changedTimes:u,get not(){return gh(t,!e)}}}function MC(t){return gh(t)}function FC(t){var e;const n=ur(t);return(e=n==null?void 0:n.$el)!=null?e:n}const dl=$o?window:void 0;$o&&window.document;$o&&window.navigator;$o&&window.location;function Lm(...t){let e,n,r,i;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,r,i]=t,e=dl):[e,n,r,i]=t,!e)return hl;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const s=[],o=()=>{s.forEach(u=>u()),s.length=0},a=(u,h,d,f)=>(u.addEventListener(h,d,f),()=>u.removeEventListener(h,d,f)),l=xe(()=>[FC(e),ur(i)],([u,h])=>{if(o(),!u)return;const d=PC(h)?{...h}:h;s.push(...n.flatMap(f=>r.map(p=>a(u,f,p,d))))},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return SC(c),c}function xU(t,e,n){const{immediate:r=!0,delay:i=0,onError:s=hl,onSuccess:o=hl,resetOnExecute:a=!0,shallow:l=!0,throwError:c}=n!=null?n:{},u=l?Ja(e):_e(e),h=_e(!1),d=_e(!1),f=Ja(void 0);async function p(w=0,...y){a&&(u.value=e),f.value=void 0,h.value=!1,d.value=!0,w>0&&await mh(w);const E=typeof t=="function"?t(...y):t;try{const T=await E;u.value=T,h.value=!0,o(T)}catch(T){if(f.value=T,s(T),c)throw T}finally{d.value=!1}return u.value}r&&p(i);const v={state:u,isReady:h,isLoading:d,error:f,execute:p};function _(){return new Promise((w,y)=>{MC(d).toBe(!1).then(()=>w(v)).catch(y)})}return{...v,then(w,y){return _().then(w,y)}}}const ya=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},va="__vueuse_ssr_handlers__",UC=$C();function $C(){return va in ya||(ya[va]=ya[va]||{}),ya[va]}function BC(t,e){return UC[t]||e}function qC(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const zv={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},Vm="vueuse-storage";function jC(t,e,n,r={}){var i;const{flush:s="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:l=!0,mergeDefaults:c=!1,shallow:u,window:h=dl,eventFilter:d,onError:f=R=>{console.error(R)},initOnMounted:p}=r,v=(u?Ja:_e)(typeof e=="function"?e():e);if(!n)try{n=BC("getDefaultStorage",()=>{var R;return(R=dl)==null?void 0:R.localStorage})()}catch(R){f(R)}if(!n)return v;const _=ur(e),w=qC(_),y=(i=r.serializer)!=null?i:zv[w],{pause:E,resume:T}=LC(v,()=>b(v.value),{flush:s,deep:o,eventFilter:d});return h&&a&&VC(()=>{Lm(h,"storage",A),Lm(h,Vm,N),p&&A()}),p||A(),v;function b(R){try{const $=n.getItem(t),Q=F=>{h&&h.dispatchEvent(new CustomEvent(Vm,{detail:{key:t,oldValue:$,newValue:F,storageArea:n}}))};if(R==null)Q(null),n.removeItem(t);else{const F=y.write(R);$!==F&&(n.setItem(t,F),Q(F))}}catch($){f($)}}function x(R){const $=R?R.newValue:n.getItem(t);if($==null)return l&&_!=null&&n.setItem(t,y.write(_)),_;if(!R&&c){const Q=y.read($);return typeof c=="function"?c(Q,_):w==="object"&&!Array.isArray(Q)?{..._,...Q}:Q}else return typeof $!="string"?$:y.read($)}function N(R){A(R.detail)}function A(R){if(!(R&&R.storageArea!==n)){if(R&&R.key==null){v.value=_;return}if(!(R&&R.key!==t)){E();try{(R==null?void 0:R.newValue)!==y.write(v.value)&&(v.value=x(R))}catch($){f($)}finally{R?un(T):T()}}}}}function zC(t,e,n={}){const{window:r=dl}=n;return jC(t,e,r==null?void 0:r.localStorage,n)}const Hv=mR("auth",()=>{const t=zC("auth/user",null,{serializer:zv.object});//!! => boolean 타입 반환
const e=V(()=>!!t.value),n=V(()=>{var s;return((s=t.value)==null?void 0:s.uid)||null});return{user:t,uid:n,isAuthenticated:e,setUser:s=>{t.value=s,s?t.value={uid:s.uid,phothURL:s.phothURL,displayName:s.displayName,email:s.email,emailVerified:s.emailVerified}:t.value=null},hasOwnContent:s=>e.value?n.value=s:!1}});var Mm=Ye({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(t,{slots:e}){const n=V(()=>`q-card__section q-card__section--${t.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>j(t.tag,{class:n.value},Nn(e.default))}}),HC=Ye({name:"QCard",props:{...Fo,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(t,{slots:e}){const{proxy:{$q:n}}=Qe(),r=Uo(t,n),i=V(()=>"q-card"+(r.value===!0?" q-card--dark q-dark":"")+(t.bordered===!0?" q-card--bordered":"")+(t.square===!0?" q-card--square no-border-radius":"")+(t.flat===!0?" q-card--flat no-shadow":""));return()=>j(t.tag,{class:i.value},Nn(e.default))}});function WC(t,e,n){let r;function i(){r!==void 0&&(rh.remove(r),r=void 0)}return Ft(()=>{t.value===!0&&i()}),{removeFromHistory:i,addToHistory(){r={condition:()=>n.value===!0,handler:e},rh.add(r)}}}let Ts=0,gu,_u,ks,yu=!1,Fm,Um,$m,Lr=null;function KC(t){GC(t)&&Fn(t)}function GC(t){if(t.target===document.body||t.target.classList.contains("q-layout__backdrop"))return!0;const e=BA(t),n=t.shiftKey&&!t.deltaX,r=!n&&Math.abs(t.deltaX)<=Math.abs(t.deltaY),i=n||r?t.deltaY:t.deltaX;for(let s=0;s<e.length;s++){const o=e[s];if(uC(o,r))return r?i<0&&o.scrollTop===0?!0:i>0&&o.scrollTop+o.clientHeight===o.scrollHeight:i<0&&o.scrollLeft===0?!0:i>0&&o.scrollLeft+o.clientWidth===o.scrollWidth}return!0}function Bm(t){t.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function wa(t){yu!==!0&&(yu=!0,requestAnimationFrame(()=>{yu=!1;const{height:e}=t.target,{clientHeight:n,scrollTop:r}=document.scrollingElement;(ks===void 0||e!==window.innerHeight)&&(ks=n-e,document.scrollingElement.scrollTop=r),r>ks&&(document.scrollingElement.scrollTop-=Math.ceil((r-ks)/8))}))}function qm(t){const e=document.body,n=window.visualViewport!==void 0;if(t==="add"){const{overflowY:r,overflowX:i}=window.getComputedStyle(e);gu=Vv(window),_u=Lv(window),Fm=e.style.left,Um=e.style.top,$m=window.location.href,e.style.left=`-${gu}px`,e.style.top=`-${_u}px`,i!=="hidden"&&(i==="scroll"||e.scrollWidth>window.innerWidth)&&e.classList.add("q-body--force-scrollbar-x"),r!=="hidden"&&(r==="scroll"||e.scrollHeight>window.innerHeight)&&e.classList.add("q-body--force-scrollbar-y"),e.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,Ge.is.ios===!0&&(n===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",wa,Ze.passiveCapture),window.visualViewport.addEventListener("scroll",wa,Ze.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Bm,Ze.passiveCapture))}Ge.is.desktop===!0&&Ge.is.mac===!0&&window[`${t}EventListener`]("wheel",KC,Ze.notPassive),t==="remove"&&(Ge.is.ios===!0&&(n===!0?(window.visualViewport.removeEventListener("resize",wa,Ze.passiveCapture),window.visualViewport.removeEventListener("scroll",wa,Ze.passiveCapture)):window.removeEventListener("scroll",Bm,Ze.passiveCapture)),e.classList.remove("q-body--prevent-scroll"),e.classList.remove("q-body--force-scrollbar-x"),e.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,e.style.left=Fm,e.style.top=Um,window.location.href===$m&&window.scrollTo(gu,_u),ks=void 0)}function QC(t){let e="add";if(t===!0){if(Ts++,Lr!==null){clearTimeout(Lr),Lr=null;return}if(Ts>1)return}else{if(Ts===0||(Ts--,Ts>0))return;if(e="remove",Ge.is.ios===!0&&Ge.is.nativeMobile===!0){Lr!==null&&clearTimeout(Lr),Lr=setTimeout(()=>{qm(e),Lr=null},100);return}}qm(e)}function YC(){let t;return{preventBodyScroll(e){e!==t&&(t!==void 0||e===!0)&&(t=e,QC(e))}}}let Ea=0;const JC={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},jm={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var XC=Ye({name:"QDialog",inheritAttrs:!1,props:{...Tv,...kv,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:t=>t==="standard"||["top","bottom","left","right"].includes(t)}},emits:[...Iv,"shake","click","escapeKey"],setup(t,{slots:e,emit:n,attrs:r}){const i=Qe(),s=_e(null),o=_e(!1),a=_e(!1);let l=null,c=null,u,h;const d=V(()=>t.persistent!==!0&&t.noRouteDismiss!==!0&&t.seamless!==!0),{preventBodyScroll:f}=YC(),{registerTimeout:p}=Dv(),{registerTick:v,removeTick:_}=Ov(),{transitionProps:w,transitionStyle:y}=xv(t,()=>jm[t.position][0],()=>jm[t.position][1]),{showPortal:E,hidePortal:T,portalIsAccessible:b,renderPortal:x}=Pv(i,s,Kt,"dialog"),{hide:N}=bv({showing:o,hideOnRouteChange:d,handleShow:z,handleHide:se,processOnMount:!0}),{addToHistory:A,removeFromHistory:R}=WC(o,N,d),$=V(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${t.maximized===!0?"maximized":"minimized"} q-dialog__inner--${t.position} ${JC[t.position]}`+(a.value===!0?" q-dialog__inner--animating":"")+(t.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(t.fullHeight===!0?" q-dialog__inner--fullheight":"")+(t.square===!0?" q-dialog__inner--square":"")),Q=V(()=>o.value===!0&&t.seamless!==!0),F=V(()=>t.autoClose===!0?{onClick:ht}:{}),re=V(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${Q.value===!0?"modal":"seamless"}`,r.class]);xe(()=>t.maximized,pe=>{o.value===!0&&ut(pe)}),xe(Q,pe=>{f(pe),pe===!0?($v(_t),Fv(de)):(dh(_t),ll(de))});function z(pe){A(),c=t.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,ut(t.maximized),E(),a.value=!0,t.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),v(ee)):_(),p(()=>{if(i.proxy.$q.platform.is.ios===!0){if(t.seamless!==!0&&document.activeElement){const{top:ge,bottom:S}=document.activeElement.getBoundingClientRect(),{innerHeight:H}=window,P=window.visualViewport!==void 0?window.visualViewport.height:H;ge>0&&S>P/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-P,S>=H?1/0:Math.ceil(document.scrollingElement.scrollTop+S-P/2))),document.activeElement.scrollIntoView()}h=!0,s.value.click(),h=!1}E(!0),a.value=!1,n("show",pe)},t.transitionDuration)}function se(pe){_(),R(),Be(!0),a.value=!0,T(),c!==null&&(((pe&&pe.type.indexOf("key")===0?c.closest('[tabindex]:not([tabindex^="-"])'):void 0)||c).focus(),c=null),p(()=>{T(!0),a.value=!1,n("hide",pe)},t.transitionDuration)}function ee(pe){Rv(()=>{let ge=s.value;ge===null||ge.contains(document.activeElement)===!0||(ge=(pe!==""?ge.querySelector(pe):null)||ge.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||ge.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||ge.querySelector("[autofocus], [data-autofocus]")||ge,ge.focus({preventScroll:!0}))})}function me(pe){pe&&typeof pe.focus=="function"?pe.focus({preventScroll:!0}):ee(),n("shake");const ge=s.value;ge!==null&&(ge.classList.remove("q-animate--scale"),ge.classList.add("q-animate--scale"),l!==null&&clearTimeout(l),l=setTimeout(()=>{l=null,s.value!==null&&(ge.classList.remove("q-animate--scale"),ee())},170))}function de(){t.seamless!==!0&&(t.persistent===!0||t.noEscDismiss===!0?t.maximized!==!0&&t.noShake!==!0&&me():(n("escapeKey"),N()))}function Be(pe){l!==null&&(clearTimeout(l),l=null),(pe===!0||o.value===!0)&&(ut(!1),t.seamless!==!0&&(f(!1),dh(_t),ll(de))),pe!==!0&&(c=null)}function ut(pe){pe===!0?u!==!0&&(Ea<1&&document.body.classList.add("q-body--dialog"),Ea++,u=!0):u===!0&&(Ea<2&&document.body.classList.remove("q-body--dialog"),Ea--,u=!1)}function ht(pe){h!==!0&&(N(pe),n("click",pe))}function qe(pe){t.persistent!==!0&&t.noBackdropDismiss!==!0?N(pe):t.noShake!==!0&&me()}function _t(pe){t.allowFocusOutside!==!0&&b.value===!0&&mv(s.value,pe.target)!==!0&&ee('[tabindex]:not([tabindex="-1"])')}Object.assign(i.proxy,{focus:ee,shake:me,__updateRefocusTarget(pe){c=pe||null}}),Ft(Be);function Kt(){return j("div",{role:"dialog","aria-modal":Q.value===!0?"true":"false",...r,class:re.value},[j(Zi,{name:"q-transition--fade",appear:!0},()=>Q.value===!0?j("div",{class:"q-dialog__backdrop fixed-full",style:y.value,"aria-hidden":"true",tabindex:-1,onClick:qe}):null),j(Zi,w.value,()=>o.value===!0?j("div",{ref:s,class:$.value,style:y.value,tabindex:-1,...F.value},Nn(e.default)):null)])}return x}});const ZC={__name:"AuthDialog",emits:["update:modelValue"],setup(t,{emit:e}){const n=e,r=_e("SignInForm"),i=a=>{r.value=a},s={SignInForm:Xc(()=>ke(()=>import("./SignInForm.b0cca2b0.js"),["assets/SignInForm.b0cca2b0.js","assets/QForm.6c27b7ca.js","assets/error-message.b0f15c3d.js"])),SignUpForm:Xc(()=>ke(()=>import("./SignUpForm.cf516030.js"),["assets/SignUpForm.cf516030.js","assets/QForm.6c27b7ca.js","assets/validate-rules.ce7e6efc.js"])),FindPasswordForm:Xc(()=>ke(()=>import("./FindPasswordForm.5b3398bb.js"),["assets/FindPasswordForm.5b3398bb.js","assets/QForm.6c27b7ca.js"]))},o=()=>{n("update:modelValue",!1)};return(a,l)=>(an(),En(XC,Py(a.$attrs,{"transition-show":"none","transition-hide":"none",onHide:l[0]||(l[0]=c=>i("SignInForm"))}),{default:je(()=>[oe(HC,{style:{width:"400px"}},{default:je(()=>[oe(Mm,{class:"flex"},{default:je(()=>[oe(Ev),$i(oe(Mn,{icon:"close",flat:"",round:"",dense:""},null,512),[[Ma]])]),_:1}),oe(Mm,{class:"q-px-xl q-pb-xl"},{default:je(()=>[(an(),En(rb(s[r.value]),{onCloseDialog:o,onChangeView:i},null,32))]),_:1})]),_:1})]),_:1},16))}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},eP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Kv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),r.push(n[u],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Wv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):eP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw new tP;const d=s<<2|a>>4;if(r.push(d),c!==64){const f=a<<4&240|c>>2;if(r.push(f),h!==64){const p=c<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class tP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nP=function(t){const e=Wv(t);return Kv.encodeByteArray(e,!0)},fl=function(t){return nP(t).replace(/\./g,"")},Gv=function(t){try{return Kv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rP(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iP=()=>rP().__FIREBASE_DEFAULTS__,sP=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},oP=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Gv(t[1]);return e&&JSON.parse(e)},rc=()=>{try{return iP()||sP()||oP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Qv=t=>{var e,n;return(n=(e=rc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Yv=t=>{const e=Qv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Jv=()=>{var t;return(t=rc())===null||t===void 0?void 0:t.config},Xv=t=>{var e;return(e=rc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[fl(JSON.stringify(n)),fl(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lP(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function cP(){var t;const e=(t=rc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ew(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function uP(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hP(){const t=rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function dP(){return!cP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Id(){try{return typeof indexedDB=="object"}catch{return!1}}function tw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function fP(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pP="FirebaseError";class nn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=pP,Object.setPrototypeOf(this,nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_i.prototype.create)}}class _i{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?mP(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new nn(i,a,r)}}function mP(t,e){return t.replace(gP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const gP=/\{\$([^}]+)}/g;function _P(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ho(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(zm(s)&&zm(o)){if(!ho(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function zm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Os(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function yP(t,e){const n=new vP(t,e);return n.subscribe.bind(n)}class vP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");wP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=vu),i.error===void 0&&(i.error=vu),i.complete===void 0&&(i.complete=vu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function vu(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EP=1e3,TP=2,IP=4*60*60*1e3,bP=.5;function Hm(t,e=EP,n=TP){const r=e*Math.pow(n,t),i=Math.round(bP*r*(Math.random()-.5)*2);return Math.min(IP,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(t){return t&&t._delegate?t._delegate:t}class en{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new aP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(SP(e))try{this.getOrInitializeService({instanceIdentifier:Vr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vr){return this.instances.has(e)}getOptions(e=Vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:RP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vr){return this.component?this.component.multipleInstances?e:Vr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RP(t){return t===Vr?void 0:t}function SP(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new AP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Te||(Te={}));const PP={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},kP=Te.INFO,xP={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},OP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=xP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ic{constructor(e){this.name=e,this._logLevel=kP,this._logHandler=OP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?PP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const DP=(t,e)=>e.some(n=>t instanceof n);let Wm,Km;function NP(){return Wm||(Wm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function LP(){return Km||(Km=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nw=new WeakMap,_h=new WeakMap,rw=new WeakMap,wu=new WeakMap,bd=new WeakMap;function VP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(yr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&nw.set(n,t)}).catch(()=>{}),bd.set(e,t),e}function MP(t){if(_h.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});_h.set(t,e)}let yh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _h.get(t);if(e==="objectStoreNames")return t.objectStoreNames||rw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function FP(t){yh=t(yh)}function UP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Eu(this),e,...n);return rw.set(r,e.sort?e.sort():[e]),yr(r)}:LP().includes(t)?function(...e){return t.apply(Eu(this),e),yr(nw.get(this))}:function(...e){return yr(t.apply(Eu(this),e))}}function $P(t){return typeof t=="function"?UP(t):(t instanceof IDBTransaction&&MP(t),DP(t,NP())?new Proxy(t,yh):t)}function yr(t){if(t instanceof IDBRequest)return VP(t);if(wu.has(t))return wu.get(t);const e=$P(t);return e!==t&&(wu.set(t,e),bd.set(e,t)),e}const Eu=t=>bd.get(t);function iw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=yr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(yr(o.result),l.oldVersion,l.newVersion,yr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const BP=["get","getKey","getAll","getAllKeys","count"],qP=["put","add","delete","clear"],Tu=new Map;function Gm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Tu.get(e))return Tu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=qP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||BP.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Tu.set(e,s),s}FP(t=>({...t,get:(e,n,r)=>Gm(e,n)||t.get(e,n,r),has:(e,n)=>!!Gm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function zP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vh="@firebase/app",Qm="0.9.28";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=new ic("@firebase/app"),HP="@firebase/app-compat",WP="@firebase/analytics-compat",KP="@firebase/analytics",GP="@firebase/app-check-compat",QP="@firebase/app-check",YP="@firebase/auth",JP="@firebase/auth-compat",XP="@firebase/database",ZP="@firebase/database-compat",ek="@firebase/functions",tk="@firebase/functions-compat",nk="@firebase/installations",rk="@firebase/installations-compat",ik="@firebase/messaging",sk="@firebase/messaging-compat",ok="@firebase/performance",ak="@firebase/performance-compat",lk="@firebase/remote-config",ck="@firebase/remote-config-compat",uk="@firebase/storage",hk="@firebase/storage-compat",dk="@firebase/firestore",fk="@firebase/firestore-compat",pk="firebase",mk="10.8.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh="[DEFAULT]",gk={[vh]:"fire-core",[HP]:"fire-core-compat",[KP]:"fire-analytics",[WP]:"fire-analytics-compat",[QP]:"fire-app-check",[GP]:"fire-app-check-compat",[YP]:"fire-auth",[JP]:"fire-auth-compat",[XP]:"fire-rtdb",[ZP]:"fire-rtdb-compat",[ek]:"fire-fn",[tk]:"fire-fn-compat",[nk]:"fire-iid",[rk]:"fire-iid-compat",[ik]:"fire-fcm",[sk]:"fire-fcm-compat",[ok]:"fire-perf",[ak]:"fire-perf-compat",[lk]:"fire-rc",[ck]:"fire-rc-compat",[uk]:"fire-gcs",[hk]:"fire-gcs-compat",[dk]:"fire-fst",[fk]:"fire-fst-compat","fire-js":"fire-js",[pk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl=new Map,Eh=new Map;function _k(t,e){try{t.container.addComponent(e)}catch(n){ii.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function dn(t){const e=t.name;if(Eh.has(e))return ii.debug(`There were multiple attempts to register component ${e}.`),!1;Eh.set(e,t);for(const n of pl.values())_k(n,t);return!0}function Cr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yk={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},vr=new _i("app","Firebase",yk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new en("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=mk;function sw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:wh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw vr.create("bad-app-name",{appName:String(i)});if(n||(n=Jv()),!n)throw vr.create("no-options");const s=pl.get(i);if(s){if(ho(n,s.options)&&ho(r,s.config))return s;throw vr.create("duplicate-app",{appName:i})}const o=new CP(i);for(const l of Eh.values())o.addComponent(l);const a=new vk(n,r,o);return pl.set(i,a),a}function sc(t=wh){const e=pl.get(t);if(!e&&t===wh&&Jv())return sw();if(!e)throw vr.create("no-app",{appName:t});return e}function Lt(t,e,n){var r;let i=(r=gk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ii.warn(a.join(" "));return}dn(new en(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk="firebase-heartbeat-database",Ek=1,fo="firebase-heartbeat-store";let Iu=null;function ow(){return Iu||(Iu=iw(wk,Ek,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(fo)}catch(n){console.warn(n)}}}}).catch(t=>{throw vr.create("idb-open",{originalErrorMessage:t.message})})),Iu}async function Tk(t){try{const n=(await ow()).transaction(fo),r=await n.objectStore(fo).get(aw(t));return await n.done,r}catch(e){if(e instanceof nn)ii.warn(e.message);else{const n=vr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ii.warn(n.message)}}}async function Ym(t,e){try{const r=(await ow()).transaction(fo,"readwrite");await r.objectStore(fo).put(e,aw(t)),await r.done}catch(n){if(n instanceof nn)ii.warn(n.message);else{const r=vr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ii.warn(r.message)}}}function aw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ik=1024,bk=30*24*60*60*1e3;class Ak{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Sk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Jm();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=bk}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Jm(),{heartbeatsToSend:r,unsentEntries:i}=Rk(this._heartbeatsCache.heartbeats),s=fl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Jm(){return new Date().toISOString().substring(0,10)}function Rk(t,e=Ik){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Xm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Xm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Sk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Id()?tw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Tk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ym(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ym(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Xm(t){return fl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ck(t){dn(new en("platform-logger",e=>new jP(e),"PRIVATE")),dn(new en("heartbeat",e=>new Ak(e),"PRIVATE")),Lt(vh,Qm,t),Lt(vh,Qm,"esm2017"),Lt("fire-js","")}Ck("");function Ad(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function lw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Pk=lw,cw=new _i("auth","Firebase",lw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml=new ic("@firebase/auth");function kk(t,...e){ml.logLevel<=Te.WARN&&ml.warn(`Auth (${yi}): ${t}`,...e)}function Fa(t,...e){ml.logLevel<=Te.ERROR&&ml.error(`Auth (${yi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(t,...e){throw Rd(t,...e)}function Rn(t,...e){return Rd(t,...e)}function uw(t,e,n){const r=Object.assign(Object.assign({},Pk()),{[e]:n});return new _i("auth","Firebase",r).create(e,{appName:t.name})}function xk(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&tn(t,"argument-error"),uw(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Rd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return cw.create(t,...e)}function ne(t,e,...n){if(!t)throw Rd(e,...n)}function $n(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Fa(e),new Error(e)}function Wn(t,e){t||$n(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ok(){return Zm()==="http:"||Zm()==="https:"}function Zm(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dk(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ok()||ew()||"connection"in navigator)?navigator.onLine:!0}function Nk(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Wn(n>e,"Short delay should be less than long delay!"),this.isMobile=lP()||uP()}get(){return Dk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(t,e){Wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;$n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;$n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;$n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk=new qo(3e4,6e4);function Yn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function gn(t,e,n,r,i={}){return dw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Bo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),hw.fetch()(fw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function dw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Lk),e);try{const i=new Fk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ta(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ta(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ta(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ta(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw uw(t,u,c);tn(t,u)}}catch(i){if(i instanceof nn)throw i;tn(t,"network-request-failed",{message:String(i)})}}async function jo(t,e,n,r,i={}){const s=await gn(t,e,n,r,i);return"mfaPendingCredential"in s&&tn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function fw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Sd(t.config,i):`${t.config.apiScheme}://${i}`}function Mk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Fk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Rn(this.auth,"network-request-failed")),Vk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ta(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Rn(t,e,r);return i.customData._tokenResponse=n,i}function eg(t){return t!==void 0&&t.enterprise!==void 0}class Uk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Mk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function $k(t,e){return gn(t,"GET","/v2/recaptchaConfig",Yn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bk(t,e){return gn(t,"POST","/v1/accounts:delete",e)}async function qk(t,e){return gn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jk(t,e=!1){const n=Se(t),r=await n.getIdToken(e),i=Cd(r);ne(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ks(bu(i.auth_time)),issuedAtTime:Ks(bu(i.iat)),expirationTime:Ks(bu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function bu(t){return Number(t)*1e3}function Cd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Fa("JWT malformed, contained fewer than 3 sections"),null;try{const i=Gv(n);return i?JSON.parse(i):(Fa("Failed to decode base64 JWT payload"),null)}catch(i){return Fa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function zk(t){const e=Cd(t);return ne(e,"internal-error"),ne(typeof e.exp!="undefined","internal-error"),ne(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function si(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof nn&&Hk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Hk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ks(this.lastLoginAt),this.creationTime=Ks(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await si(t,qk(n,{idToken:r}));ne(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Qk(s.providerUserInfo):[],a=Gk(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new pw(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Kk(t){const e=Se(t);await gl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Gk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Qk(t){return t.map(e=>{var{providerId:n}=e,r=Ad(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yk(t,e){const n=await dw(t,{},async()=>{const r=Bo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=fw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",hw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Jk(t,e){return gn(t,"POST","/v2/accounts:revokeToken",Yn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken!="undefined","internal-error"),ne(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):zk(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ne(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Yk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new po;return r&&(ne(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ne(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ne(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new po,this.toJSON())}_performRefresh(){return $n("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t,e){ne(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Zr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Ad(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Wk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new pw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await si(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jk(this,e)}reload(){return Kk(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Zr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await gl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await si(this,Bk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,w=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:E,emailVerified:T,isAnonymous:b,providerData:x,stsTokenManager:N}=n;ne(E&&N,e,"internal-error");const A=po.fromJSON(this.name,N);ne(typeof E=="string",e,"internal-error"),nr(h,e.name),nr(d,e.name),ne(typeof T=="boolean",e,"internal-error"),ne(typeof b=="boolean",e,"internal-error"),nr(f,e.name),nr(p,e.name),nr(v,e.name),nr(_,e.name),nr(w,e.name),nr(y,e.name);const R=new Zr({uid:E,auth:e,email:d,emailVerified:T,displayName:h,isAnonymous:b,photoURL:p,phoneNumber:f,tenantId:v,stsTokenManager:A,createdAt:w,lastLoginAt:y});return x&&Array.isArray(x)&&(R.providerData=x.map($=>Object.assign({},$))),_&&(R._redirectEventId=_),R}static async _fromIdTokenResponse(e,n,r=!1){const i=new po;i.updateFromServerResponse(n);const s=new Zr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await gl(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg=new Map;function Bn(t){Wn(t instanceof Function,"Expected a class definition");let e=tg.get(t);return e?(Wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,tg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}mw.type="NONE";const ng=mw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(t,e,n){return`firebase:${t}:${e}:${n}`}class Hi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ua(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ua("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Zr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Hi(Bn(ng),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Bn(ng);const o=Ua(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Zr._fromJSON(e,u);c!==s&&(a=h),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Hi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Hi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ww(e))return"Blackberry";if(Ew(e))return"Webos";if(Pd(e))return"Safari";if((e.includes("chrome/")||_w(e))&&!e.includes("edge/"))return"Chrome";if(vw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function gw(t=rt()){return/firefox\//i.test(t)}function Pd(t=rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _w(t=rt()){return/crios\//i.test(t)}function yw(t=rt()){return/iemobile/i.test(t)}function vw(t=rt()){return/android/i.test(t)}function ww(t=rt()){return/blackberry/i.test(t)}function Ew(t=rt()){return/webos/i.test(t)}function oc(t=rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Xk(t=rt()){var e;return oc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Zk(){return hP()&&document.documentMode===10}function Tw(t=rt()){return oc(t)||vw(t)||Ew(t)||ww(t)||/windows phone/i.test(t)||yw(t)}function ex(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iw(t,e=[]){let n;switch(t){case"Browser":n=rg(rt());break;case"Worker":n=`${rg(rt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nx(t,e={}){return gn(t,"GET","/v2/passwordPolicy",Yn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx=6;class ix{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:rx,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ig(this),this.idTokenSubscription=new ig(this),this.beforeStateQueue=new tx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Bn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Hi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await gl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Nk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Se(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Bn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await nx(this),n=new ix(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _i("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Jk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Bn(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await Hi.create(this,[Bn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Iw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&kk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Jn(t){return Se(t)}class ig{constructor(e){this.auth=e,this.observer=null,this.addObserver=yP(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ac={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ox(t){ac=t}function bw(t){return ac.loadJS(t)}function ax(){return ac.recaptchaEnterpriseScript}function lx(){return ac.gapiScript}function cx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const ux="recaptcha-enterprise",hx="NO_RECAPTCHA";class dx{constructor(e){this.type=ux,this.auth=Jn(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{$k(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Uk(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;eg(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(hx)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&eg(window.grecaptcha))i(a,s,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=ax();l.length!==0&&(l+=a),bw(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function sg(t,e,n,r=!1){const i=new dx(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function _l(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await sg(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await sg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fx(t,e){const n=Cr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ho(s,e!=null?e:{}))return i;tn(i,"already-initialized")}return n.initialize({options:e})}function px(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Bn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function mx(t,e,n){const r=Jn(t);ne(r._canInitEmulator,r,"emulator-config-failed"),ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Aw(e),{host:o,port:a}=gx(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||_x()}function Aw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function gx(t){const e=Aw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:og(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:og(o)}}}function og(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function _x(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return $n("not implemented")}_getIdTokenResponse(e){return $n("not implemented")}_linkToIdToken(e,n){return $n("not implemented")}_getReauthenticationResolver(e){return $n("not implemented")}}async function yx(t,e){return gn(t,"POST","/v1/accounts:update",e)}async function vx(t,e){return gn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wx(t,e){return jo(t,"POST","/v1/accounts:signInWithPassword",Yn(t,e))}async function Rw(t,e){return gn(t,"POST","/v1/accounts:sendOobCode",Yn(t,e))}async function Ex(t,e){return Rw(t,e)}async function Tx(t,e){return Rw(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ix(t,e){return jo(t,"POST","/v1/accounts:signInWithEmailLink",Yn(t,e))}async function bx(t,e){return jo(t,"POST","/v1/accounts:signInWithEmailLink",Yn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo extends kd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new mo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new mo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _l(e,n,"signInWithPassword",wx);case"emailLink":return Ix(e,{email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _l(e,r,"signUpPassword",vx);case"emailLink":return bx(e,{idToken:n,email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wi(t,e){return jo(t,"POST","/v1/accounts:signInWithIdp",Yn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ax="http://localhost";class oi extends kd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new oi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Ad(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new oi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Wi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Wi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Wi(e,n)}buildRequest(){const e={requestUri:Ax,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Bo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Sx(t){const e=xs(Os(t)).link,n=e?xs(Os(e)).deep_link_id:null,r=xs(Os(t)).deep_link_id;return(r?xs(Os(r)).link:null)||r||n||e||t}class xd{constructor(e){var n,r,i,s,o,a;const l=xs(Os(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,h=Rx((i=l.mode)!==null&&i!==void 0?i:null);ne(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Sx(e);try{return new xd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(){this.providerId=fs.PROVIDER_ID}static credential(e,n){return mo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=xd.parseLink(n);return ne(r,"argument-error"),mo._fromEmailAndCode(e,r.code,r.tenantId)}}fs.PROVIDER_ID="password";fs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo extends Od{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends zo{constructor(){super("facebook.com")}static credential(e){return oi._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.FACEBOOK_SIGN_IN_METHOD="facebook.com";hr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends zo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return oi._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Un.credential(n,r)}catch{return null}}}Un.GOOGLE_SIGN_IN_METHOD="google.com";Un.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends zo{constructor(){super("github.com")}static credential(e){return oi._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch{return null}}}dr.GITHUB_SIGN_IN_METHOD="github.com";dr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends zo{constructor(){super("twitter.com")}static credential(e,n){return oi._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return fr.credential(n,r)}catch{return null}}}fr.TWITTER_SIGN_IN_METHOD="twitter.com";fr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cx(t,e){return jo(t,"POST","/v1/accounts:signUp",Yn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Zr._fromIdTokenResponse(e,r,i),o=ag(r);return new ai({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ag(r);return new ai({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ag(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl extends nn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,yl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new yl(e,n,r,i)}}function Sw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?yl._fromErrorAndOperation(t,s,e,r):s})}async function Px(t,e,n=!1){const r=await si(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ai._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kx(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await si(t,Sw(r,i,e,t),n);ne(s.idToken,r,"internal-error");const o=Cd(s.idToken);ne(o,r,"internal-error");const{sub:a}=o;return ne(t.uid===a,r,"user-mismatch"),ai._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&tn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cw(t,e,n=!1){const r="signIn",i=await Sw(t,r,e),s=await ai._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function xx(t,e){return Cw(Jn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pw(t,e,n){var r;ne(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),ne(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(ne(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(ne(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kw(t){const e=Jn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Ox(t,e,n){const r=Jn(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Pw(r,i,n),await _l(r,i,"getOobCode",Tx)}async function Dx(t,e,n){const r=Jn(t),o=await _l(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Cx).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&kw(t),l}),a=await ai._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Nx(t,e,n){return xx(Se(t),fs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&kw(t),r})}async function Lx(t,e){const n=Se(t),r=await t.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:r};e&&Pw(n.auth,i,e);const{email:s}=await Ex(n.auth,i);s!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vx(t,e){return gn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xw(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Se(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await si(r,Vx(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Mx(t,e){return Ow(Se(t),e,null)}function Fx(t,e){return Ow(Se(t),null,e)}async function Ow(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await si(t,yx(r,s));await t._updateTokensIfNecessary(o,!0)}function Ux(t,e,n,r){return Se(t).onIdTokenChanged(e,n,r)}function $x(t,e,n){return Se(t).beforeAuthStateChanged(e,n)}function Bx(t,e,n,r){return Se(t).onAuthStateChanged(e,n,r)}function qx(t){return Se(t).signOut()}const vl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(vl,"1"),this.storage.removeItem(vl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jx(){const t=rt();return Pd(t)||oc(t)}const zx=1e3,Hx=10;class Nw extends Dw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=jx()&&ex(),this.fallbackToPolling=Tw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Zk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Hx):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},zx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Nw.type="LOCAL";const Wx=Nw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw extends Dw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Lw.type="SESSION";const Vw=Lw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kx(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new lc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await Kx(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Dd("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(){return window}function Qx(t){Sn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(){return typeof Sn().WorkerGlobalScope!="undefined"&&typeof Sn().importScripts=="function"}async function Yx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Jx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Xx(){return Mw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw="firebaseLocalStorageDb",Zx=1,wl="firebaseLocalStorage",Uw="fbase_key";class Ho{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function cc(t,e){return t.transaction([wl],e?"readwrite":"readonly").objectStore(wl)}function e1(){const t=indexedDB.deleteDatabase(Fw);return new Ho(t).toPromise()}function Ih(){const t=indexedDB.open(Fw,Zx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(wl,{keyPath:Uw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(wl)?e(r):(r.close(),await e1(),e(await Ih()))})})}async function lg(t,e,n){const r=cc(t,!0).put({[Uw]:e,value:n});return new Ho(r).toPromise()}async function t1(t,e){const n=cc(t,!1).get(e),r=await new Ho(n).toPromise();return r===void 0?null:r.value}function cg(t,e){const n=cc(t,!0).delete(e);return new Ho(n).toPromise()}const n1=800,r1=3;class $w{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ih(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>r1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lc._getInstance(Xx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Yx(),!this.activeServiceWorker)return;this.sender=new Gx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Jx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ih();return await lg(e,vl,"1"),await cg(e,vl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>lg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>t1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=cc(i,!1).getAll();return new Ho(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),n1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$w.type="LOCAL";const i1=$w;new qo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bw(t,e){return e?Bn(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd extends kd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Wi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Wi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function s1(t){return Cw(t.auth,new Nd(t),t.bypassAuthState)}function o1(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),kx(n,new Nd(t),t.bypassAuthState)}async function a1(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),Px(n,new Nd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return s1;case"linkViaPopup":case"linkViaRedirect":return a1;case"reauthViaPopup":case"reauthViaRedirect":return o1;default:tn(this.auth,"internal-error")}}resolve(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l1=new qo(2e3,1e4);async function c1(t,e,n){const r=Jn(t);xk(t,e,Od);const i=Bw(r,n);return new qr(r,"signInViaPopup",e,i).executeNotNull()}class qr extends qw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,qr.currentPopupAction&&qr.currentPopupAction.cancel(),qr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){Wn(this.filter.length===1,"Popup operations only handle one event");const e=Dd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,l1.get())};e()}}qr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1="pendingRedirect",$a=new Map;class h1 extends qw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=$a.get(this.auth._key());if(!e){try{const r=await d1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}$a.set(this.auth._key(),e)}return this.bypassAuthState||$a.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function d1(t,e){const n=m1(e),r=p1(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function f1(t,e){$a.set(t._key(),e)}function p1(t){return Bn(t._redirectPersistence)}function m1(t){return Ua(u1,t.config.apiKey,t.name)}async function g1(t,e,n=!1){const r=Jn(t),i=Bw(r,e),o=await new h1(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _1=10*60*1e3;class y1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!v1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!jw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Rn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_1&&this.cachedEventUids.clear(),this.cachedEventUids.has(ug(e))}saveEventToCache(e){this.cachedEventUids.add(ug(e)),this.lastProcessedEventTime=Date.now()}}function ug(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function jw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function v1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w1(t,e={}){return gn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,T1=/^https?/;async function I1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await w1(t);for(const n of e)try{if(b1(n))return}catch{}tn(t,"unauthorized-domain")}function b1(t){const e=Th(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!T1.test(n))return!1;if(E1.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1=new qo(3e4,6e4);function hg(){const t=Sn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function R1(t){return new Promise((e,n)=>{var r,i,s;function o(){hg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hg(),n(Rn(t,"network-request-failed"))},timeout:A1.get()})}if(!((i=(r=Sn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Sn().gapi)===null||s===void 0)&&s.load)o();else{const a=cx("iframefcb");return Sn()[a]=()=>{gapi.load?o():n(Rn(t,"network-request-failed"))},bw(`${lx()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ba=null,e})}let Ba=null;function S1(t){return Ba=Ba||R1(t),Ba}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1=new qo(5e3,15e3),P1="__/auth/iframe",k1="emulator/auth/iframe",x1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},O1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function D1(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Sd(e,k1):`https://${t.config.authDomain}/${P1}`,r={apiKey:e.apiKey,appName:t.name,v:yi},i=O1.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Bo(r).slice(1)}`}async function N1(t){const e=await S1(t),n=Sn().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:D1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:x1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Rn(t,"network-request-failed"),a=Sn().setTimeout(()=>{s(o)},C1.get());function l(){Sn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},V1=500,M1=600,F1="_blank",U1="http://localhost";class dg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $1(t,e,n,r=V1,i=M1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},L1),{width:r.toString(),height:i.toString(),top:s,left:o}),c=rt().toLowerCase();n&&(a=_w(c)?F1:n),gw(c)&&(e=e||U1,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(Xk(c)&&a!=="_self")return B1(e||"",a),new dg(null);const h=window.open(e||"",a,u);ne(h,t,"popup-blocked");try{h.focus()}catch{}return new dg(h)}function B1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1="__/auth/handler",j1="emulator/auth/handler",z1=encodeURIComponent("fac");async function fg(t,e,n,r,i,s){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:yi,eventId:i};if(e instanceof Od){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_P(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(s||{}))o[u]=h}if(e instanceof zo){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${z1}=${encodeURIComponent(l)}`:"";return`${H1(t)}?${Bo(a).slice(1)}${c}`}function H1({config:t}){return t.emulator?Sd(t,j1):`https://${t.authDomain}/${q1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au="webStorageSupport";class W1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vw,this._completeRedirectFn=g1,this._overrideRedirectResult=f1}async _openPopup(e,n,r,i){var s;Wn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await fg(e,n,r,Th(),i);return $1(e,o,Dd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await fg(e,n,r,Th(),i);return Qx(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Wn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await N1(e),r=new y1(e);return n.register("authEvent",i=>(ne(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Au,{type:Au},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Au];o!==void 0&&n(!!o),tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=I1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Tw()||Pd()||oc()}}const K1=W1;var pg="@firebase/auth",mg="1.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Y1(t){dn(new en("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ne(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Iw(t)},c=new sx(r,i,s,l);return px(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),dn(new en("auth-internal",e=>{const n=Jn(e.getProvider("auth").getImmediate());return(r=>new G1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Lt(pg,mg,Q1(t)),Lt(pg,mg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1=5*60,X1=Xv("authIdTokenMaxAge")||J1;let gg=null;const Z1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>X1)return;const i=n==null?void 0:n.token;gg!==i&&(gg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function eO(t=sc()){const e=Cr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=fx(t,{popupRedirectResolver:K1,persistence:[i1,Wx,Vw]}),r=Xv("authTokenSyncURL");if(r){const s=Z1(r);$x(n,s,()=>s(n.currentUser)),Ux(n,o=>s(o))}const i=Qv("auth");return i&&mx(n,`http://${i}`),n}function tO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}ox({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Rn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",tO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Y1("Browser");var nO=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},K,Ld=Ld||{},le=nO||self;function uc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Wo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function rO(t){return Object.prototype.hasOwnProperty.call(t,Ru)&&t[Ru]||(t[Ru]=++iO)}var Ru="closure_uid_"+(1e9*Math.random()>>>0),iO=0;function sO(t,e,n){return t.call.apply(t.bind,arguments)}function oO(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function It(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?It=sO:It=oO,It.apply(null,arguments)}function Ia(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ct(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Pr(){this.s=this.s,this.o=this.o}var aO=0;Pr.prototype.s=!1;Pr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),aO!=0)&&rO(this)};Pr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const zw=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Vd(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function _g(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(uc(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function bt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}bt.prototype.h=function(){this.defaultPrevented=!0};var lO=function(){if(!le.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};le.addEventListener("test",n,e),le.removeEventListener("test",n,e)}catch{}return t}();function go(t){return/^[\s\xa0]*$/.test(t)}function hc(){var t=le.navigator;return t&&(t=t.userAgent)?t:""}function Tn(t){return hc().indexOf(t)!=-1}function Md(t){return Md[" "](t),t}Md[" "]=function(){};function cO(t,e){var n=tD;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var uO=Tn("Opera"),rs=Tn("Trident")||Tn("MSIE"),Hw=Tn("Edge"),bh=Hw||rs,Ww=Tn("Gecko")&&!(hc().toLowerCase().indexOf("webkit")!=-1&&!Tn("Edge"))&&!(Tn("Trident")||Tn("MSIE"))&&!Tn("Edge"),hO=hc().toLowerCase().indexOf("webkit")!=-1&&!Tn("Edge");function Kw(){var t=le.document;return t?t.documentMode:void 0}var Ah;e:{var Su="",Cu=function(){var t=hc();if(Ww)return/rv:([^\);]+)(\)|;)/.exec(t);if(Hw)return/Edge\/([\d\.]+)/.exec(t);if(rs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(hO)return/WebKit\/(\S+)/.exec(t);if(uO)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Cu&&(Su=Cu?Cu[1]:""),rs){var Pu=Kw();if(Pu!=null&&Pu>parseFloat(Su)){Ah=String(Pu);break e}}Ah=Su}var Rh;if(le.document&&rs){var yg=Kw();Rh=yg||parseInt(Ah,10)||void 0}else Rh=void 0;var dO=Rh;function _o(t,e){if(bt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ww){e:{try{Md(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:fO[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&_o.$.h.call(this)}}ct(_o,bt);var fO={2:"touch",3:"pen",4:"mouse"};_o.prototype.h=function(){_o.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ko="closure_listenable_"+(1e6*Math.random()|0),pO=0;function mO(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++pO,this.fa=this.ia=!1}function dc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Fd(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function gO(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Gw(t){const e={};for(const n in t)e[n]=t[n];return e}const vg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Qw(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<vg.length;s++)n=vg[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function fc(t){this.src=t,this.g={},this.h=0}fc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Ch(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new mO(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Sh(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=zw(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(dc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ch(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Ud="closure_lm_"+(1e6*Math.random()|0),ku={};function Yw(t,e,n,r,i){if(r&&r.once)return Xw(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Yw(t,e[s],n,r,i);return null}return n=qd(n),t&&t[Ko]?t.O(e,n,Wo(r)?!!r.capture:!!r,i):Jw(t,e,n,!1,r,i)}function Jw(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Wo(i)?!!i.capture:!!i,a=Bd(t);if(a||(t[Ud]=a=new fc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=_O(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)lO||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(eE(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function _O(){function t(n){return e.call(t.src,t.listener,n)}const e=yO;return t}function Xw(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Xw(t,e[s],n,r,i);return null}return n=qd(n),t&&t[Ko]?t.P(e,n,Wo(r)?!!r.capture:!!r,i):Jw(t,e,n,!0,r,i)}function Zw(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Zw(t,e[s],n,r,i);else r=Wo(r)?!!r.capture:!!r,n=qd(n),t&&t[Ko]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Ch(s,n,r,i),-1<n&&(dc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Bd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ch(e,n,r,i)),(n=-1<t?e[t]:null)&&$d(n))}function $d(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ko])Sh(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(eE(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Bd(e))?(Sh(n,t),n.h==0&&(n.src=null,e[Ud]=null)):dc(t)}}}function eE(t){return t in ku?ku[t]:ku[t]="on"+t}function yO(t,e){if(t.fa)t=!0;else{e=new _o(e,this);var n=t.listener,r=t.la||t.src;t.ia&&$d(t),t=n.call(r,e)}return t}function Bd(t){return t=t[Ud],t instanceof fc?t:null}var xu="__closure_events_fn_"+(1e9*Math.random()>>>0);function qd(t){return typeof t=="function"?t:(t[xu]||(t[xu]=function(e){return t.handleEvent(e)}),t[xu])}function lt(){Pr.call(this),this.i=new fc(this),this.S=this,this.J=null}ct(lt,Pr);lt.prototype[Ko]=!0;lt.prototype.removeEventListener=function(t,e,n,r){Zw(this,t,e,n,r)};function mt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new bt(e,t);else if(e instanceof bt)e.target=e.target||t;else{var i=e;e=new bt(r,t),Qw(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=ba(o,r,!0,e)&&i}if(o=e.g=t,i=ba(o,r,!0,e)&&i,i=ba(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=ba(o,r,!1,e)&&i}lt.prototype.N=function(){if(lt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)dc(n[r]);delete t.g[e],t.h--}}this.J=null};lt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};lt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ba(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Sh(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var jd=le.JSON.stringify;class vO{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function wO(){var t=zd;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class EO{constructor(){this.h=this.g=null}add(e,n){const r=tE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var tE=new vO(()=>new TO,t=>t.reset());class TO{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function IO(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function bO(t){le.setTimeout(()=>{throw t},0)}let yo,vo=!1,zd=new EO,nE=()=>{const t=le.Promise.resolve(void 0);yo=()=>{t.then(AO)}};var AO=()=>{for(var t;t=wO();){try{t.h.call(t.g)}catch(n){bO(n)}var e=tE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}vo=!1};function pc(t,e){lt.call(this),this.h=t||1,this.g=e||le,this.j=It(this.qb,this),this.l=Date.now()}ct(pc,lt);K=pc.prototype;K.ga=!1;K.T=null;K.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),mt(this,"tick"),this.ga&&(Hd(this),this.start()))}};K.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Hd(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}K.N=function(){pc.$.N.call(this),Hd(this),delete this.g};function Wd(t,e,n){if(typeof t=="function")n&&(t=It(t,n));else if(t&&typeof t.handleEvent=="function")t=It(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:le.setTimeout(t,e||0)}function rE(t){t.g=Wd(()=>{t.g=null,t.i&&(t.i=!1,rE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class RO extends Pr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:rE(this)}N(){super.N(),this.g&&(le.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wo(t){Pr.call(this),this.h=t,this.g={}}ct(wo,Pr);var wg=[];function iE(t,e,n,r){Array.isArray(n)||(n&&(wg[0]=n.toString()),n=wg);for(var i=0;i<n.length;i++){var s=Yw(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function sE(t){Fd(t.g,function(e,n){this.g.hasOwnProperty(n)&&$d(e)},t),t.g={}}wo.prototype.N=function(){wo.$.N.call(this),sE(this)};wo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function mc(){this.g=!0}mc.prototype.Ea=function(){this.g=!1};function SO(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function CO(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Vi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+kO(t,n)+(r?" "+r:"")})}function PO(t,e){t.info(function(){return"TIMEOUT: "+e})}mc.prototype.info=function(){};function kO(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return jd(n)}catch{return e}}var vi={},Eg=null;function gc(){return Eg=Eg||new lt}vi.Ta="serverreachability";function oE(t){bt.call(this,vi.Ta,t)}ct(oE,bt);function Eo(t){const e=gc();mt(e,new oE(e))}vi.STAT_EVENT="statevent";function aE(t,e){bt.call(this,vi.STAT_EVENT,t),this.stat=e}ct(aE,bt);function Ct(t){const e=gc();mt(e,new aE(e,t))}vi.Ua="timingevent";function lE(t,e){bt.call(this,vi.Ua,t),this.size=e}ct(lE,bt);function Go(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return le.setTimeout(function(){t()},e)}var _c={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},cE={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Kd(){}Kd.prototype.h=null;function Tg(t){return t.h||(t.h=t.i())}function uE(){}var Qo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Gd(){bt.call(this,"d")}ct(Gd,bt);function Qd(){bt.call(this,"c")}ct(Qd,bt);var Ph;function yc(){}ct(yc,Kd);yc.prototype.g=function(){return new XMLHttpRequest};yc.prototype.i=function(){return{}};Ph=new yc;function Yo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new wo(this),this.P=xO,t=bh?125:void 0,this.V=new pc(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new hE}function hE(){this.i=null,this.g="",this.h=!1}var xO=45e3,dE={},kh={};K=Yo.prototype;K.setTimeout=function(t){this.P=t};function xh(t,e,n){t.L=1,t.A=wc(Kn(e)),t.u=n,t.S=!0,fE(t,null)}function fE(t,e){t.G=Date.now(),Jo(t),t.B=Kn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),EE(n.i,"t",r),t.o=0,n=t.l.J,t.h=new hE,t.g=qE(t.l,n?e:null,!t.u),0<t.O&&(t.M=new RO(It(t.Pa,t,t.g),t.O)),iE(t.U,t.g,"readystatechange",t.nb),e=t.I?Gw(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Eo(),SO(t.j,t.v,t.B,t.m,t.W,t.u)}K.nb=function(t){t=t.target;const e=this.M;e&&In(t)==3?e.l():this.Pa(t)};K.Pa=function(t){try{if(t==this.g)e:{const u=In(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||bh||this.g&&(this.h.h||this.g.ja()||Rg(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Eo(3):Eo(2)),vc(this);var n=this.g.da();this.ca=n;t:if(pE(this)){var r=Rg(this.g);t="";var i=r.length,s=In(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){jr(this),Gs(this);var o="";break t}this.h.i=new le.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,CO(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!go(a)){var c=a;break t}}c=null}if(n=c)Vi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Oh(this,n);else{this.i=!1,this.s=3,Ct(12),jr(this),Gs(this);break e}}this.S?(mE(this,u,o),bh&&this.i&&u==3&&(iE(this.U,this.V,"tick",this.mb),this.V.start())):(Vi(this.j,this.m,o,null),Oh(this,o)),u==4&&jr(this),this.i&&!this.J&&(u==4?FE(this.l,this):(this.i=!1,Jo(this)))}else XO(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Ct(12)):(this.s=0,Ct(13)),jr(this),Gs(this)}}}catch{}finally{}};function pE(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function mE(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=OO(t,n),i==kh){e==4&&(t.s=4,Ct(14),r=!1),Vi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==dE){t.s=4,Ct(15),Vi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Vi(t.j,t.m,i,null),Oh(t,i);pE(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,Ct(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),tf(e),e.M=!0,Ct(11))):(Vi(t.j,t.m,n,"[Invalid Chunked Response]"),jr(t),Gs(t))}K.mb=function(){if(this.g){var t=In(this.g),e=this.g.ja();this.o<e.length&&(vc(this),mE(this,t,e),this.i&&t!=4&&Jo(this))}};function OO(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?kh:(n=Number(e.substring(n,r)),isNaN(n)?dE:(r+=1,r+n>e.length?kh:(e=e.slice(r,r+n),t.o=r+n,e)))}K.cancel=function(){this.J=!0,jr(this)};function Jo(t){t.Y=Date.now()+t.P,gE(t,t.P)}function gE(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Go(It(t.lb,t),e)}function vc(t){t.C&&(le.clearTimeout(t.C),t.C=null)}K.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(PO(this.j,this.B),this.L!=2&&(Eo(),Ct(17)),jr(this),this.s=2,Gs(this)):gE(this,this.Y-t)};function Gs(t){t.l.H==0||t.J||FE(t.l,t)}function jr(t){vc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Hd(t.V),sE(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Oh(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Dh(n.i,t))){if(!t.K&&Dh(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Il(n),bc(n);else break e;ef(n),Ct(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Go(It(n.ib,n),6e3));if(1>=bE(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else zr(n,11)}else if((t.K||n.g==t)&&Il(n),!go(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var s=r.i;s.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Yd(s,s.h),s.h=null))}if(r.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,Me(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=BE(r,r.J?r.pa:null,r.Y),o.K){AE(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(vc(a),Jo(a)),r.g=o}else VE(r);0<n.j.length&&Ac(n)}else c[0]!="stop"&&c[0]!="close"||zr(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?zr(n,7):Zd(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Eo(4)}catch{}}function DO(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map!="undefined"&&t instanceof Map||typeof Set!="undefined"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(uc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function NO(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map!="undefined"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set!="undefined"&&t instanceof Set)){if(uc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function _E(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(uc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=NO(t),r=DO(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var yE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function LO(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ei(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ei){this.h=t.h,El(this,t.j),this.s=t.s,this.g=t.g,Tl(this,t.m),this.l=t.l;var e=t.i,n=new To;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ig(this,n),this.o=t.o}else t&&(e=String(t).match(yE))?(this.h=!1,El(this,e[1]||"",!0),this.s=Ds(e[2]||""),this.g=Ds(e[3]||"",!0),Tl(this,e[4]),this.l=Ds(e[5]||"",!0),Ig(this,e[6]||"",!0),this.o=Ds(e[7]||"")):(this.h=!1,this.i=new To(null,this.h))}ei.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ns(e,bg,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ns(e,bg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ns(n,n.charAt(0)=="/"?FO:MO,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ns(n,$O)),t.join("")};function Kn(t){return new ei(t)}function El(t,e,n){t.j=n?Ds(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Tl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ig(t,e,n){e instanceof To?(t.i=e,BO(t.i,t.h)):(n||(e=Ns(e,UO)),t.i=new To(e,t.h))}function Me(t,e,n){t.i.set(e,n)}function wc(t){return Me(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ds(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ns(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,VO),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function VO(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var bg=/[#\/\?@]/g,MO=/[#\?:]/g,FO=/[#\?]/g,UO=/[#\?@]/g,$O=/#/g;function To(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function kr(t){t.g||(t.g=new Map,t.h=0,t.i&&LO(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}K=To.prototype;K.add=function(t,e){kr(this),this.i=null,t=ps(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function vE(t,e){kr(t),e=ps(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function wE(t,e){return kr(t),e=ps(t,e),t.g.has(e)}K.forEach=function(t,e){kr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};K.ta=function(){kr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};K.Z=function(t){kr(this);let e=[];if(typeof t=="string")wE(this,t)&&(e=e.concat(this.g.get(ps(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};K.set=function(t,e){return kr(this),this.i=null,t=ps(this,t),wE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};K.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function EE(t,e,n){vE(t,e),0<n.length&&(t.i=null,t.g.set(ps(t,e),Vd(n)),t.h+=n.length)}K.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function ps(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function BO(t,e){e&&!t.j&&(kr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(vE(this,r),EE(this,i,n))},t)),t.j=e}var qO=class{constructor(t,e){this.g=t,this.map=e}};function TE(t){this.l=t||jO,le.PerformanceNavigationTiming?(t=le.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(le.g&&le.g.Ka&&le.g.Ka()&&le.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var jO=10;function IE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function bE(t){return t.h?1:t.g?t.g.size:0}function Dh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Yd(t,e){t.g?t.g.add(e):t.h=e}function AE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}TE.prototype.cancel=function(){if(this.i=RE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function RE(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Vd(t.i)}var zO=class{stringify(t){return le.JSON.stringify(t,void 0)}parse(t){return le.JSON.parse(t,void 0)}};function HO(){this.g=new zO}function WO(t,e,n){const r=n||"";try{_E(t,function(i,s){let o=i;Wo(i)&&(o=jd(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function KO(t,e){const n=new mc;if(le.Image){const r=new Image;r.onload=Ia(Aa,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ia(Aa,n,r,"TestLoadImage: error",!1,e),r.onabort=Ia(Aa,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ia(Aa,n,r,"TestLoadImage: timeout",!1,e),le.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Aa(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Ec(t){this.l=t.ec||null,this.j=t.ob||!1}ct(Ec,Kd);Ec.prototype.g=function(){return new Tc(this.l,this.j)};Ec.prototype.i=function(t){return function(){return t}}({});function Tc(t,e){lt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Jd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ct(Tc,lt);var Jd=0;K=Tc.prototype;K.open=function(t,e){if(this.readyState!=Jd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Io(this)};K.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||le).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};K.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xo(this)),this.readyState=Jd};K.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Io(this)),this.g&&(this.readyState=3,Io(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof le.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;SE(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function SE(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}K.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Xo(this):Io(this),this.readyState==3&&SE(this)}};K.Za=function(t){this.g&&(this.response=this.responseText=t,Xo(this))};K.Ya=function(t){this.g&&(this.response=t,Xo(this))};K.ka=function(){this.g&&Xo(this)};function Xo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Io(t)}K.setRequestHeader=function(t,e){this.v.append(t,e)};K.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};K.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Io(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Tc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var GO=le.JSON.parse;function He(t){lt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=CE,this.L=this.M=!1}ct(He,lt);var CE="",QO=/^https?$/i,YO=["POST","PUT"];K=He.prototype;K.Oa=function(t){this.M=t};K.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ph.g(),this.C=this.u?Tg(this.u):Tg(Ph),this.g.onreadystatechange=It(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Ag(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=le.FormData&&t instanceof le.FormData,!(0<=zw(YO,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{xE(this),0<this.B&&((this.L=JO(this.g))?(this.g.timeout=this.B,this.g.ontimeout=It(this.ua,this)):this.A=Wd(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Ag(this,s)}};function JO(t){return rs&&typeof t.timeout=="number"&&t.ontimeout!==void 0}K.ua=function(){typeof Ld!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,mt(this,"timeout"),this.abort(8))};function Ag(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,PE(t),Ic(t)}function PE(t){t.F||(t.F=!0,mt(t,"complete"),mt(t,"error"))}K.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,mt(this,"complete"),mt(this,"abort"),Ic(this))};K.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ic(this,!0)),He.$.N.call(this)};K.La=function(){this.s||(this.G||this.v||this.l?kE(this):this.kb())};K.kb=function(){kE(this)};function kE(t){if(t.h&&typeof Ld!="undefined"&&(!t.C[1]||In(t)!=4||t.da()!=2)){if(t.v&&In(t)==4)Wd(t.La,0,t);else if(mt(t,"readystatechange"),In(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(yE)[1]||null;!i&&le.self&&le.self.location&&(i=le.self.location.protocol.slice(0,-1)),r=!QO.test(i?i.toLowerCase():"")}n=r}if(n)mt(t,"complete"),mt(t,"success");else{t.m=6;try{var s=2<In(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",PE(t)}}finally{Ic(t)}}}}function Ic(t,e){if(t.g){xE(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||mt(t,"ready");try{n.onreadystatechange=r}catch{}}}function xE(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(le.clearTimeout(t.A),t.A=null)}K.isActive=function(){return!!this.g};function In(t){return t.g?t.g.readyState:0}K.da=function(){try{return 2<In(this)?this.g.status:-1}catch{return-1}};K.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};K.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),GO(e)}};function Rg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case CE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function XO(t){const e={};t=(t.g&&2<=In(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(go(t[r]))continue;var n=IO(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}gO(e,function(r){return r.join(", ")})}K.Ia=function(){return this.m};K.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function OE(t){let e="";return Fd(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Xd(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=OE(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Me(t,e,n))}function Is(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function DE(t){this.Ga=0,this.j=[],this.l=new mc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Is("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Is("baseRetryDelayMs",5e3,t),this.hb=Is("retryDelaySeedMs",1e4,t),this.eb=Is("forwardChannelMaxRetries",2,t),this.xa=Is("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new TE(t&&t.concurrentRequestLimit),this.Ja=new HO,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}K=DE.prototype;K.ra=8;K.H=1;function Zd(t){if(NE(t),t.H==3){var e=t.W++,n=Kn(t.I);if(Me(n,"SID",t.K),Me(n,"RID",e),Me(n,"TYPE","terminate"),Zo(t,n),e=new Yo(t,t.l,e),e.L=2,e.A=wc(Kn(n)),n=!1,le.navigator&&le.navigator.sendBeacon)try{n=le.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&le.Image&&(new Image().src=e.A,n=!0),n||(e.g=qE(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Jo(e)}$E(t)}function bc(t){t.g&&(tf(t),t.g.cancel(),t.g=null)}function NE(t){bc(t),t.u&&(le.clearTimeout(t.u),t.u=null),Il(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&le.clearTimeout(t.m),t.m=null)}function Ac(t){if(!IE(t.i)&&!t.m){t.m=!0;var e=t.Na;yo||nE(),vo||(yo(),vo=!0),zd.add(e,t),t.C=0}}function ZO(t,e){return bE(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Go(It(t.Na,t,e),UE(t,t.C)),t.C++,!0)}K.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Yo(this,this.l,t);let s=this.s;if(this.U&&(s?(s=Gw(s),Qw(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=LE(this,i,e),n=Kn(this.I),Me(n,"RID",t),Me(n,"CVER",22),this.F&&Me(n,"X-HTTP-Session-Id",this.F),Zo(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(OE(s)))+"&"+e:this.o&&Xd(n,this.o,s)),Yd(this.i,i),this.bb&&Me(n,"TYPE","init"),this.P?(Me(n,"$req",e),Me(n,"SID","null"),i.aa=!0,xh(i,n,null)):xh(i,n,e),this.H=2}}else this.H==3&&(t?Sg(this,t):this.j.length==0||IE(this.i)||Sg(this))};function Sg(t,e){var n;e?n=e.m:n=t.W++;const r=Kn(t.I);Me(r,"SID",t.K),Me(r,"RID",n),Me(r,"AID",t.V),Zo(t,r),t.o&&t.s&&Xd(r,t.o,t.s),n=new Yo(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=LE(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Yd(t.i,n),xh(n,r,e)}function Zo(t,e){t.na&&Fd(t.na,function(n,r){Me(e,r,n)}),t.h&&_E({},function(n,r){Me(e,r,n)})}function LE(t,e,n){n=Math.min(t.j.length,n);var r=t.h?It(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let c=i[l].g;const u=i[l].map;if(c-=s,0>c)s=Math.max(0,i[l].g-100),a=!1;else try{WO(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function VE(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;yo||nE(),vo||(yo(),vo=!0),zd.add(e,t),t.A=0}}function ef(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Go(It(t.Ma,t),UE(t,t.A)),t.A++,!0)}K.Ma=function(){if(this.u=null,ME(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Go(It(this.jb,this),t)}};K.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ct(10),bc(this),ME(this))};function tf(t){t.B!=null&&(le.clearTimeout(t.B),t.B=null)}function ME(t){t.g=new Yo(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Kn(t.wa);Me(e,"RID","rpc"),Me(e,"SID",t.K),Me(e,"AID",t.V),Me(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Me(e,"TO",t.qa),Me(e,"TYPE","xmlhttp"),Zo(t,e),t.o&&t.s&&Xd(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=wc(Kn(e)),n.u=null,n.S=!0,fE(n,t)}K.ib=function(){this.v!=null&&(this.v=null,bc(this),ef(this),Ct(19))};function Il(t){t.v!=null&&(le.clearTimeout(t.v),t.v=null)}function FE(t,e){var n=null;if(t.g==e){Il(t),tf(t),t.g=null;var r=2}else if(Dh(t.i,e))n=e.F,AE(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=gc(),mt(r,new lE(r,n)),Ac(t)}else VE(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&ZO(t,e)||r==2&&ef(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:zr(t,5);break;case 4:zr(t,10);break;case 3:zr(t,6);break;default:zr(t,2)}}}function UE(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function zr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=It(t.pb,t);n||(n=new ei("//www.google.com/images/cleardot.gif"),le.location&&le.location.protocol=="http"||El(n,"https"),wc(n)),KO(n.toString(),r)}else Ct(2);t.H=0,t.h&&t.h.za(e),$E(t),NE(t)}K.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Ct(2)):(this.l.info("Failed to ping google.com"),Ct(1))};function $E(t){if(t.H=0,t.ma=[],t.h){const e=RE(t.i);(e.length!=0||t.j.length!=0)&&(_g(t.ma,e),_g(t.ma,t.j),t.i.i.length=0,Vd(t.j),t.j.length=0),t.h.ya()}}function BE(t,e,n){var r=n instanceof ei?Kn(n):new ei(n);if(r.g!="")e&&(r.g=e+"."+r.g),Tl(r,r.m);else{var i=le.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ei(null);r&&El(s,r),e&&(s.g=e),i&&Tl(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Me(r,n,e),Me(r,"VER",t.ra),Zo(t,r),r}function qE(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new He(new Ec({ob:n})):new He(t.va),e.Oa(t.J),e}K.isActive=function(){return!!this.h&&this.h.isActive(this)};function jE(){}K=jE.prototype;K.Ba=function(){};K.Aa=function(){};K.za=function(){};K.ya=function(){};K.isActive=function(){return!0};K.Va=function(){};function bl(){if(rs&&!(10<=Number(dO)))throw Error("Environmental error: no available transport.")}bl.prototype.g=function(t,e){return new Ht(t,e)};function Ht(t,e){lt.call(this),this.g=new DE(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!go(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!go(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ms(this)}ct(Ht,lt);Ht.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Ct(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=BE(t,null,t.Y),Ac(t)};Ht.prototype.close=function(){Zd(this.g)};Ht.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=jd(t),t=n);e.j.push(new qO(e.fb++,t)),e.H==3&&Ac(e)};Ht.prototype.N=function(){this.g.h=null,delete this.j,Zd(this.g),delete this.g,Ht.$.N.call(this)};function zE(t){Gd.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ct(zE,Gd);function HE(){Qd.call(this),this.status=1}ct(HE,Qd);function ms(t){this.g=t}ct(ms,jE);ms.prototype.Ba=function(){mt(this.g,"a")};ms.prototype.Aa=function(t){mt(this.g,new zE(t))};ms.prototype.za=function(t){mt(this.g,new HE)};ms.prototype.ya=function(){mt(this.g,"b")};function eD(){this.blockSize=-1}function fn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ct(fn,eD);fn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ou(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}fn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Ou(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Ou(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Ou(this,r),i=0;break}}this.h=i,this.i+=e};fn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Ce(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var tD={};function nf(t){return-128<=t&&128>t?cO(t,function(e){return new Ce([e|0],0>e?-1:0)}):new Ce([t|0],0>t?-1:0)}function bn(t){if(isNaN(t)||!isFinite(t))return Ki;if(0>t)return ft(bn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Nh;return new Ce(e,0)}function WE(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ft(WE(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=bn(Math.pow(e,8)),r=Ki,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=bn(Math.pow(e,s)),r=r.R(s).add(bn(o))):(r=r.R(n),r=r.add(bn(o)))}return r}var Nh=4294967296,Ki=nf(0),Lh=nf(1),Cg=nf(16777216);K=Ce.prototype;K.ea=function(){if(Yt(this))return-ft(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Nh+r)*e,e*=Nh}return t};K.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(qn(this))return"0";if(Yt(this))return"-"+ft(this).toString(t);for(var e=bn(Math.pow(t,6)),n=this,r="";;){var i=Rl(n,e).g;n=Al(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,qn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};K.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function qn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Yt(t){return t.h==-1}K.X=function(t){return t=Al(this,t),Yt(t)?-1:qn(t)?0:1};function ft(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Ce(n,~t.h).add(Lh)}K.abs=function(){return Yt(this)?ft(this):this};K.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Ce(n,n[n.length-1]&-2147483648?-1:0)};function Al(t,e){return t.add(ft(e))}K.R=function(t){if(qn(this)||qn(t))return Ki;if(Yt(this))return Yt(t)?ft(this).R(ft(t)):ft(ft(this).R(t));if(Yt(t))return ft(this.R(ft(t)));if(0>this.X(Cg)&&0>t.X(Cg))return bn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Ra(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Ra(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Ra(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Ra(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Ce(n,0)};function Ra(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function bs(t,e){this.g=t,this.h=e}function Rl(t,e){if(qn(e))throw Error("division by zero");if(qn(t))return new bs(Ki,Ki);if(Yt(t))return e=Rl(ft(t),e),new bs(ft(e.g),ft(e.h));if(Yt(e))return e=Rl(t,ft(e)),new bs(ft(e.g),e.h);if(30<t.g.length){if(Yt(t)||Yt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Lh,r=e;0>=r.X(t);)n=Pg(n),r=Pg(r);var i=Pi(n,1),s=Pi(r,1);for(r=Pi(r,2),n=Pi(n,2);!qn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Pi(r,1),n=Pi(n,1)}return e=Al(t,i.R(e)),new bs(i,e)}for(i=Ki;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=bn(n),o=s.R(e);Yt(o)||0<o.X(t);)n-=r,s=bn(n),o=s.R(e);qn(s)&&(s=Lh),i=i.add(s),t=Al(t,o)}return new bs(i,t)}K.gb=function(t){return Rl(this,t).h};K.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Ce(n,this.h&t.h)};K.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Ce(n,this.h|t.h)};K.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Ce(n,this.h^t.h)};function Pg(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Ce(n,t.h)}function Pi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Ce(i,t.h)}bl.prototype.createWebChannel=bl.prototype.g;Ht.prototype.send=Ht.prototype.u;Ht.prototype.open=Ht.prototype.m;Ht.prototype.close=Ht.prototype.close;_c.NO_ERROR=0;_c.TIMEOUT=8;_c.HTTP_ERROR=6;cE.COMPLETE="complete";uE.EventType=Qo;Qo.OPEN="a";Qo.CLOSE="b";Qo.ERROR="c";Qo.MESSAGE="d";lt.prototype.listen=lt.prototype.O;He.prototype.listenOnce=He.prototype.P;He.prototype.getLastError=He.prototype.Sa;He.prototype.getLastErrorCode=He.prototype.Ia;He.prototype.getStatus=He.prototype.da;He.prototype.getResponseJson=He.prototype.Wa;He.prototype.getResponseText=He.prototype.ja;He.prototype.send=He.prototype.ha;He.prototype.setWithCredentials=He.prototype.Oa;fn.prototype.digest=fn.prototype.l;fn.prototype.reset=fn.prototype.reset;fn.prototype.update=fn.prototype.j;Ce.prototype.add=Ce.prototype.add;Ce.prototype.multiply=Ce.prototype.R;Ce.prototype.modulo=Ce.prototype.gb;Ce.prototype.compare=Ce.prototype.X;Ce.prototype.toNumber=Ce.prototype.ea;Ce.prototype.toString=Ce.prototype.toString;Ce.prototype.getBits=Ce.prototype.D;Ce.fromNumber=bn;Ce.fromString=WE;var nD=function(){return new bl},rD=function(){return gc()},Du=_c,iD=cE,sD=vi,kg={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Sa=uE,oD=He,aD=fn,Gi=Ce;const xg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}wt.UNAUTHENTICATED=new wt(null),wt.GOOGLE_CREDENTIALS=new wt("google-credentials-uid"),wt.FIRST_PARTY=new wt("first-party-uid"),wt.MOCK_USER=new wt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gs="10.8.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=new ic("@firebase/firestore");function As(){return li.logLevel}function W(t,...e){if(li.logLevel<=Te.DEBUG){const n=e.map(rf);li.debug(`Firestore (${gs}): ${t}`,...n)}}function On(t,...e){if(li.logLevel<=Te.ERROR){const n=e.map(rf);li.error(`Firestore (${gs}): ${t}`,...n)}}function is(t,...e){if(li.logLevel<=Te.WARN){const n=e.map(rf);li.warn(`Firestore (${gs}): ${t}`,...n)}}function rf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t="Unexpected state"){const e=`FIRESTORE (${gs}) INTERNAL ASSERTION FAILED: `+t;throw On(e),new Error(e)}function Ne(t,e){t||ae()}function fe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends nn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class lD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(wt.UNAUTHENTICATED))}shutdown(){}}class cD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class uD{constructor(e){this.t=e,this.currentUser=wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Cn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Cn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Cn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ne(typeof r.accessToken=="string"),new KE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string"),new wt(e)}}class hD{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=wt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class dD{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new hD(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pD{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ne(typeof n.token=="string"),this.R=n.token,new fD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mD(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=mD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Ae(t,e){return t<e?-1:t>e?1:0}function ss(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return st.fromMillis(Date.now())}static fromDate(e){return st.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new st(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ue(e)}static min(){return new ue(new st(0,0))}static max(){return new ue(new st(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n,r){n===void 0?n=0:n>e.length&&ae(),r===void 0?r=e.length-n:r>e.length-n&&ae(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return bo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof bo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class De extends bo{construct(e,n,r){return new De(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new De(n)}static emptyPath(){return new De([])}}const gD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pt extends bo{construct(e,n,r){return new pt(e,n,r)}static isValidIdentifier(e){return gD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new pt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new B(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new B(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new B(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pt(n)}static emptyPath(){return new pt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(De.fromString(e))}static fromName(e){return new X(De.fromString(e).popFirst(5))}static empty(){return new X(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return De.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new De(e.slice()))}}function _D(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ue.fromTimestamp(r===1e9?new st(n+1,0):new st(n,r));return new br(i,X.empty(),e)}function yD(t){return new br(t.readTime,t.key,-1)}class br{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new br(ue.min(),X.empty(),-1)}static max(){return new br(ue.max(),X.empty(),-1)}}function vD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:Ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ED{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ea(t){if(t.code!==C.FAILED_PRECONDITION||t.message!==wD)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ae(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new D((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof D?n:D.resolve(n)}catch(n){return D.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):D.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):D.reject(n)}static resolve(e){return new D((n,r)=>{n(e)})}static reject(e){return new D((n,r)=>{r(e)})}static waitFor(e){return new D((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=D.resolve(!1);for(const r of e)n=n.next(i=>i?D.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new D((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(e,n){return new D((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new Cn,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Qs(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=of(r.target.error);this.V.reject(new Qs(e,i))}}static open(e,n,r,i){try{return new sf(n,e.transaction(i,r))}catch(s){throw new Qs(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(W("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new ID(n)}}class Hr{constructor(e,n,r){this.name=e,this.version=n,this.p=r,Hr.S(rt())===12.2&&On("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return W("SimpleDb","Removing database:",e),Ur(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Id())return!1;if(Hr.C())return!0;const e=rt(),n=Hr.S(e),r=0<n&&n<10,i=Hr.v(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process!="undefined"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(W("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Qs(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new B(C.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new B(C.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Qs(e,o))},i.onupgradeneeded=s=>{W("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{W("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=sf.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),D.reject(c))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,c=l.name!=="FirebaseError"&&o<3;if(W("SimpleDb","Transaction failed with error:",l.message,"Retrying:",c),this.close(),!c)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class TD{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return Ur(this.k.delete())}}class Qs extends B{constructor(e,n){super(C.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function ta(t){return t.name==="IndexedDbTransactionError"}class ID{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(W("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(W("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Ur(r)}add(e){return W("SimpleDb","ADD",this.store.name,e,e),Ur(this.store.add(e))}get(e){return Ur(this.store.get(e)).next(n=>(n===void 0&&(n=null),W("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return W("SimpleDb","DELETE",this.store.name,e),Ur(this.store.delete(e))}count(){return W("SimpleDb","COUNT",this.store.name),Ur(this.store.count())}W(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new D((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.G(s,(a,l)=>{o.push(l)}).next(()=>o)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new D((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(e,n){W("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.G(i,n)}Z(e){const n=this.cursor({});return new D((r,i)=>{n.onerror=s=>{const o=of(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new D((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new TD(a),c=n(a.primaryKey,a.value,l);if(c instanceof D){const u=c.catch(h=>(l.done(),D.reject(h)));r.push(u)}l.isDone?i():l.$===null?a.continue():a.continue(l.$)}}).next(()=>D.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Ur(t){return new D((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=of(r.target.error);n(i)}})}let Og=!1;function of(t){const e=Hr.S(rt());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new B("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Og||(Og=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}af._e=-1;function Rc(t){return t==null}function Sl(t){return t===0&&1/t==-1/0}function bD(t){return typeof t=="number"&&Number.isInteger(t)&&!Sl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function wi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function QE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n){this.comparator=e,this.root=n||dt.EMPTY}insert(e,n){return new $e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,dt.BLACK,null,null))}remove(e){return new $e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,dt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ca(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ca(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ca(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ca(this.root,e,this.comparator,!0)}}class Ca{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class dt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:dt.RED,this.left=i!=null?i:dt.EMPTY,this.right=s!=null?s:dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new dt(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return dt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ae();const e=this.left.check();if(e!==this.right.check())throw ae();return e+(this.isRed()?0:1)}}dt.EMPTY=null,dt.RED=!0,dt.BLACK=!1;dt.EMPTY=new class{constructor(){this.size=0}get key(){throw ae()}get value(){throw ae()}get color(){throw ae()}get left(){throw ae()}get right(){throw ae()}copy(e,n,r,i,s){return this}insert(e,n,r){return new dt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ng(this.data.getIterator())}getIteratorFrom(e){return new Ng(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof gt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new gt(this.comparator);return n.data=e,n}}class Ng{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.fields=e,e.sort(pt.comparator)}static empty(){return new qt([])}unionWith(e){let n=new gt(pt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ss(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException!="undefined"&&s instanceof DOMException?new YE("Invalid base64 string: "+s):s}}(e);return new At(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new At(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}At.EMPTY_BYTE_STRING=new At("");const AD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ar(t){if(Ne(!!t),typeof t=="string"){let e=0;const n=AD.exec(t);if(Ne(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Xe(t.seconds),nanos:Xe(t.nanos)}}function Xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ci(t){return typeof t=="string"?At.fromBase64String(t):At.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function lf(t){const e=t.mapValue.fields.__previous_value__;return Sc(e)?lf(e):e}function Ao(t){const e=Ar(t.mapValue.fields.__local_write_time__.timestampValue);return new st(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Ro{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ro("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ro&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ui(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Sc(t)?4:SD(t)?9007199254740991:10:ae()}function Dn(t,e){if(t===e)return!0;const n=ui(t);if(n!==ui(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ao(t).isEqual(Ao(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ar(i.timestampValue),a=Ar(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ci(i.bytesValue).isEqual(ci(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Xe(i.geoPointValue.latitude)===Xe(s.geoPointValue.latitude)&&Xe(i.geoPointValue.longitude)===Xe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Xe(i.integerValue)===Xe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Xe(i.doubleValue),a=Xe(s.doubleValue);return o===a?Sl(o)===Sl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ss(t.arrayValue.values||[],e.arrayValue.values||[],Dn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Dg(o)!==Dg(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Dn(o[l],a[l])))return!1;return!0}(t,e);default:return ae()}}function So(t,e){return(t.values||[]).find(n=>Dn(n,e))!==void 0}function os(t,e){if(t===e)return 0;const n=ui(t),r=ui(e);if(n!==r)return Ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ae(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Xe(s.integerValue||s.doubleValue),l=Xe(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Lg(t.timestampValue,e.timestampValue);case 4:return Lg(Ao(t),Ao(e));case 5:return Ae(t.stringValue,e.stringValue);case 6:return function(s,o){const a=ci(s),l=ci(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=Ae(a[c],l[c]);if(u!==0)return u}return Ae(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Ae(Xe(s.latitude),Xe(o.latitude));return a!==0?a:Ae(Xe(s.longitude),Xe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=os(a[c],l[c]);if(u)return u}return Ae(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Pa.mapValue&&o===Pa.mapValue)return 0;if(s===Pa.mapValue)return 1;if(o===Pa.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=Ae(l[h],u[h]);if(d!==0)return d;const f=os(a[l[h]],c[u[h]]);if(f!==0)return f}return Ae(l.length,u.length)}(t.mapValue,e.mapValue);default:throw ae()}}function Lg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ae(t,e);const n=Ar(t),r=Ar(e),i=Ae(n.seconds,r.seconds);return i!==0?i:Ae(n.nanos,r.nanos)}function as(t){return Vh(t)}function Vh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ar(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ci(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Vh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Vh(n.fields[o])}`;return i+"}"}(t.mapValue):ae()}function Cl(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Mh(t){return!!t&&"integerValue"in t}function cf(t){return!!t&&"arrayValue"in t}function Vg(t){return!!t&&"nullValue"in t}function Mg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function qa(t){return!!t&&"mapValue"in t}function Ys(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return wi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ys(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ys(t.arrayValue.values[n]);return e}return Object.assign({},t)}function SD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.value=e}static empty(){return new Nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!qa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ys(n)}setAll(e){let n=pt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ys(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());qa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];qa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){wi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Nt(Ys(this.value))}}function JE(t){const e=[];return wi(t.fields,(n,r)=>{const i=new pt([n]);if(qa(r)){const s=JE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new qt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Et(e,0,ue.min(),ue.min(),ue.min(),Nt.empty(),0)}static newFoundDocument(e,n,r,i){return new Et(e,1,n,ue.min(),r,i,0)}static newNoDocument(e,n){return new Et(e,2,n,ue.min(),ue.min(),Nt.empty(),0)}static newUnknownDocument(e,n){return new Et(e,3,n,ue.min(),ue.min(),Nt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,n){this.position=e,this.inclusive=n}}function Fg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=X.comparator(X.fromName(o.referenceValue),n.key):r=os(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ug(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Dn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,n="asc"){this.field=e,this.dir=n}}function CD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{}class et extends XE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new kD(e,n,r):n==="array-contains"?new DD(e,r):n==="in"?new ND(e,r):n==="not-in"?new LD(e,r):n==="array-contains-any"?new VD(e,r):new et(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new xD(e,r):new OD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(os(n,this.value)):n!==null&&ui(this.value)===ui(n)&&this.matchesComparison(os(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ae()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pn extends XE{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new pn(e,n)}matches(e){return ZE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function ZE(t){return t.op==="and"}function eT(t){return PD(t)&&ZE(t)}function PD(t){for(const e of t.filters)if(e instanceof pn)return!1;return!0}function Fh(t){if(t instanceof et)return t.field.canonicalString()+t.op.toString()+as(t.value);if(eT(t))return t.filters.map(e=>Fh(e)).join(",");{const e=t.filters.map(n=>Fh(n)).join(",");return`${t.op}(${e})`}}function tT(t,e){return t instanceof et?function(r,i){return i instanceof et&&r.op===i.op&&r.field.isEqual(i.field)&&Dn(r.value,i.value)}(t,e):t instanceof pn?function(r,i){return i instanceof pn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&tT(o,i.filters[a]),!0):!1}(t,e):void ae()}function nT(t){return t instanceof et?function(n){return`${n.field.canonicalString()} ${n.op} ${as(n.value)}`}(t):t instanceof pn?function(n){return n.op.toString()+" {"+n.getFilters().map(nT).join(" ,")+"}"}(t):"Filter"}class kD extends et{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class xD extends et{constructor(e,n){super(e,"in",n),this.keys=rT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class OD extends et{constructor(e,n){super(e,"not-in",n),this.keys=rT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function rT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class DD extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return cf(n)&&So(n.arrayValue,this.value)}}class ND extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&So(this.value.arrayValue,n)}}class LD extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(So(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!So(this.value.arrayValue,n)}}class VD extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!cf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>So(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function $g(t,e=null,n=[],r=[],i=null,s=null,o=null){return new MD(t,e,n,r,i,s,o)}function uf(t){const e=fe(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Fh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Rc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>as(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>as(r)).join(",")),e.ce=n}return e.ce}function hf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!CD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!tT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ug(t.startAt,e.startAt)&&Ug(t.endAt,e.endAt)}function Uh(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function FD(t,e,n,r,i,s,o,a){return new Ei(t,e,n,r,i,s,o,a)}function df(t){return new Ei(t)}function Bg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ff(t){return t.collectionGroup!==null}function Qi(t){const e=fe(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new gt(pt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new Co(s,r))}),n.has(pt.keyField().canonicalString())||e.le.push(new Co(pt.keyField(),r))}return e.le}function Pn(t){const e=fe(t);return e.he||(e.he=UD(e,Qi(t))),e.he}function UD(t,e){if(t.limitType==="F")return $g(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Co(i.field,s)});const n=t.endAt?new ls(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ls(t.startAt.position,t.startAt.inclusive):null;return $g(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function $h(t,e){const n=t.filters.concat([e]);return new Ei(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Pl(t,e,n){return new Ei(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Cc(t,e){return hf(Pn(t),Pn(e))&&t.limitType===e.limitType}function iT(t){return`${uf(Pn(t))}|lt:${t.limitType}`}function xi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>nT(i)).join(", ")}]`),Rc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>as(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>as(i)).join(",")),`Target(${r})`}(Pn(t))}; limitType=${t.limitType})`}function Pc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):X.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Qi(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=Fg(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,Qi(r),i)||r.endAt&&!function(o,a,l){const c=Fg(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,Qi(r),i))}(t,e)}function $D(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function sT(t){return(e,n)=>{let r=!1;for(const i of Qi(t)){const s=BD(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function BD(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?os(l,c):ae()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ae()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){wi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return QE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qD=new $e(X.comparator);function Gn(){return qD}const oT=new $e(X.comparator);function Ls(...t){let e=oT;for(const n of t)e=e.insert(n.key,n);return e}function aT(t){let e=oT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Wr(){return Js()}function lT(){return Js()}function Js(){return new _s(t=>t.toString(),(t,e)=>t.isEqual(e))}const jD=new $e(X.comparator),zD=new gt(X.comparator);function ve(...t){let e=zD;for(const n of t)e=e.add(n);return e}const HD=new gt(Ae);function WD(){return HD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Sl(e)?"-0":e}}function uT(t){return{integerValue:""+t}}function hT(t,e){return bD(e)?uT(e):cT(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(){this._=void 0}}function KD(t,e,n){return t instanceof Po?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Sc(s)&&(s=lf(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ko?fT(t,e):t instanceof xo?pT(t,e):function(i,s){const o=dT(i,s),a=qg(o)+qg(i.Ie);return Mh(o)&&Mh(i.Ie)?uT(a):cT(i.serializer,a)}(t,e)}function GD(t,e,n){return t instanceof ko?fT(t,e):t instanceof xo?pT(t,e):n}function dT(t,e){return t instanceof Oo?function(r){return Mh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Po extends kc{}class ko extends kc{constructor(e){super(),this.elements=e}}function fT(t,e){const n=mT(e);for(const r of t.elements)n.some(i=>Dn(i,r))||n.push(r);return{arrayValue:{values:n}}}class xo extends kc{constructor(e){super(),this.elements=e}}function pT(t,e){let n=mT(e);for(const r of t.elements)n=n.filter(i=>!Dn(i,r));return{arrayValue:{values:n}}}class Oo extends kc{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function qg(t){return Xe(t.integerValue||t.doubleValue)}function mT(t){return cf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e,n){this.field=e,this.transform=n}}function QD(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ko&&i instanceof ko||r instanceof xo&&i instanceof xo?ss(r.elements,i.elements,Dn):r instanceof Oo&&i instanceof Oo?Dn(r.Ie,i.Ie):r instanceof Po&&i instanceof Po}(t.transform,e.transform)}class YD{constructor(e,n){this.version=e,this.transformResults=n}}class Zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Zt}static exists(e){return new Zt(void 0,e)}static updateTime(e){return new Zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ja(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class xc{}function _T(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new pf(t.key,Zt.none()):new na(t.key,t.data,Zt.none());{const n=t.data,r=Nt.empty();let i=new gt(pt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new xr(t.key,r,new qt(i.toArray()),Zt.none())}}function JD(t,e,n){t instanceof na?function(i,s,o){const a=i.value.clone(),l=zg(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof xr?function(i,s,o){if(!ja(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=zg(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(yT(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Xs(t,e,n,r){return t instanceof na?function(s,o,a,l){if(!ja(s.precondition,o))return a;const c=s.value.clone(),u=Hg(s.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof xr?function(s,o,a,l){if(!ja(s.precondition,o))return a;const c=Hg(s.fieldTransforms,l,o),u=o.data;return u.setAll(yT(s)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return ja(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function XD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=dT(r.transform,i||null);s!=null&&(n===null&&(n=Nt.empty()),n.set(r.field,s))}return n||null}function jg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ss(r,i,(s,o)=>QD(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class na extends xc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class xr extends xc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function yT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function zg(t,e,n){const r=new Map;Ne(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,GD(o,a,n[i]))}return r}function Hg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,KD(s,o,e))}return r}class pf extends xc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ZD extends xc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&JD(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Xs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Xs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=lT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=_T(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(ue.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ve())}isEqual(e){return this.batchId===e.batchId&&ss(this.mutations,e.mutations,(n,r)=>jg(n,r))&&ss(this.baseMutations,e.baseMutations,(n,r)=>jg(n,r))}}class mf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ne(e.mutations.length===r.length);let i=function(){return jD}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new mf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Je,Ie;function rN(t){switch(t){default:return ae();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function vT(t){if(t===void 0)return On("GRPC error has no .code"),C.UNKNOWN;switch(t){case Je.OK:return C.OK;case Je.CANCELLED:return C.CANCELLED;case Je.UNKNOWN:return C.UNKNOWN;case Je.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case Je.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case Je.INTERNAL:return C.INTERNAL;case Je.UNAVAILABLE:return C.UNAVAILABLE;case Je.UNAUTHENTICATED:return C.UNAUTHENTICATED;case Je.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case Je.NOT_FOUND:return C.NOT_FOUND;case Je.ALREADY_EXISTS:return C.ALREADY_EXISTS;case Je.PERMISSION_DENIED:return C.PERMISSION_DENIED;case Je.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case Je.ABORTED:return C.ABORTED;case Je.OUT_OF_RANGE:return C.OUT_OF_RANGE;case Je.UNIMPLEMENTED:return C.UNIMPLEMENTED;case Je.DATA_LOSS:return C.DATA_LOSS;default:return ae()}}(Ie=Je||(Je={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iN(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sN=new Gi([4294967295,4294967295],0);function Wg(t){const e=iN().encode(t),n=new aD;return n.update(e),new Uint8Array(n.digest())}function Kg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Gi([n,r],0),new Gi([i,s],0)]}class gf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Vs(`Invalid padding: ${n}`);if(r<0)throw new Vs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Vs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Vs(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Gi.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(Gi.fromNumber(r)));return i.compare(sN)===1&&(i=new Gi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Wg(e),[r,i]=Kg(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new gf(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Wg(e),[r,i]=Kg(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Vs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ra.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Oc(ue.min(),i,new $e(Ae),Gn(),ve())}}class ra{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ra(r,n,ve(),ve(),ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class wT{constructor(e,n){this.targetId=e,this.fe=n}}class ET{constructor(e,n,r=At.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Gg{constructor(){this.ge=0,this.pe=Yg(),this.ye=At.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=ve(),n=ve(),r=ve();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ae()}}),new ra(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=Yg()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,Ne(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class oN{constructor(e){this.Le=e,this.ke=new Map,this.qe=Gn(),this.Qe=Qg(),this.Ke=new $e(Ae)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:ae()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(Uh(s))if(r===0){const o=new X(s.path);this.We(n,o,Et.newNoDocument(o,ue.min()))}else Ne(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=ci(r).toUint8Array()}catch(l){if(l instanceof YE)return is("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new gf(o,i,s)}catch(l){return is(l instanceof Vs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&Uh(a.target)){const l=new X(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,Et.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=ve();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ye(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new Oc(e,n,this.Ke,this.qe,r);return this.qe=Gn(),this.Qe=Qg(),this.Ke=new $e(Ae),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new Gg,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new gt(Ae),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new Gg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Qg(){return new $e(X.comparator)}function Yg(){return new $e(X.comparator)}const aN=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),lN=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),cN=(()=>({and:"AND",or:"OR"}))();class uN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Bh(t,e){return t.useProto3Json||Rc(e)?e:{value:e}}function kl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function TT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function hN(t,e){return kl(t,e.toTimestamp())}function kn(t){return Ne(!!t),ue.fromTimestamp(function(n){const r=Ar(n);return new st(r.seconds,r.nanos)}(t))}function _f(t,e){return qh(t,e).canonicalString()}function qh(t,e){const n=function(i){return new De(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function IT(t){const e=De.fromString(t);return Ne(CT(e)),e}function jh(t,e){return _f(t.databaseId,e.path)}function Nu(t,e){const n=IT(e);if(n.get(1)!==t.databaseId.projectId)throw new B(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(AT(n))}function bT(t,e){return _f(t.databaseId,e)}function dN(t){const e=IT(t);return e.length===4?De.emptyPath():AT(e)}function zh(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function AT(t){return Ne(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Jg(t,e,n){return{name:jh(t,e),fields:n.value.mapValue.fields}}function fN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ae()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,u){return c.useProto3Json?(Ne(u===void 0||typeof u=="string"),At.fromBase64String(u||"")):(Ne(u===void 0||u instanceof Uint8Array),At.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?C.UNKNOWN:vT(c.code);return new B(u,c.message||"")}(o);n=new ET(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Nu(t,r.document.name),s=kn(r.document.updateTime),o=r.document.createTime?kn(r.document.createTime):ue.min(),a=new Nt({mapValue:{fields:r.document.fields}}),l=Et.newFoundDocument(i,s,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new za(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Nu(t,r.document),s=r.readTime?kn(r.readTime):ue.min(),o=Et.newNoDocument(i,s),a=r.removedTargetIds||[];n=new za([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Nu(t,r.document),s=r.removedTargetIds||[];n=new za([],s,i,null)}else{if(!("filter"in e))return ae();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new nN(i,s),a=r.targetId;n=new wT(a,o)}}return n}function pN(t,e){let n;if(e instanceof na)n={update:Jg(t,e.key,e.value)};else if(e instanceof pf)n={delete:jh(t,e.key)};else if(e instanceof xr)n={update:Jg(t,e.key,e.data),updateMask:IN(e.fieldMask)};else{if(!(e instanceof ZD))return ae();n={verify:jh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Po)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ko)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof xo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Oo)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw ae()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:hN(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ae()}(t,e.precondition)),n}function mN(t,e){return t&&t.length>0?(Ne(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?kn(i.updateTime):kn(s);return o.isEqual(ue.min())&&(o=kn(s)),new YD(o,i.transformResults||[])}(n,e))):[]}function gN(t,e){return{documents:[bT(t,e.path)]}}function _N(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=bT(t,i);const s=function(c){if(c.length!==0)return ST(pn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(u=>function(d){return{field:Oi(d.field),direction:wN(d.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Bh(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ut:n,parent:i}}function yN(t){let e=dN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ne(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=function(h){const d=RT(h);return d instanceof pn&&eT(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(p){return new Co(Di(p.field),function(_){switch(_){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(p.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Rc(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new ls(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new ls(f,d)}(n.endAt)),FD(e,i,o,s,a,"F",l,c)}function vN(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ae()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function RT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Di(n.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Di(n.unaryFilter.field);return et.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Di(n.unaryFilter.field);return et.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Di(n.unaryFilter.field);return et.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ae()}}(t):t.fieldFilter!==void 0?function(n){return et.create(Di(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ae()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return pn.create(n.compositeFilter.filters.map(r=>RT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ae()}}(n.compositeFilter.op))}(t):ae()}function wN(t){return aN[t]}function EN(t){return lN[t]}function TN(t){return cN[t]}function Oi(t){return{fieldPath:t.canonicalString()}}function Di(t){return pt.fromServerFormat(t.fieldPath)}function ST(t){return t instanceof et?function(n){if(n.op==="=="){if(Mg(n.value))return{unaryFilter:{field:Oi(n.field),op:"IS_NAN"}};if(Vg(n.value))return{unaryFilter:{field:Oi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Mg(n.value))return{unaryFilter:{field:Oi(n.field),op:"IS_NOT_NAN"}};if(Vg(n.value))return{unaryFilter:{field:Oi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Oi(n.field),op:EN(n.op),value:n.value}}}(t):t instanceof pn?function(n){const r=n.getFilters().map(i=>ST(i));return r.length===1?r[0]:{compositeFilter:{op:TN(n.op),filters:r}}}(t):ae()}function IN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function CT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,n,r,i,s=ue.min(),o=ue.min(),a=At.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new mr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(e){this.ct=e}}function AN(t){const e=yN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Pl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{constructor(){this._n=new SN}addToCollectionParentIndex(e,n){return this._n.add(n),D.resolve()}getCollectionParents(e,n){return D.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return D.resolve()}deleteFieldIndex(e,n){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,n){return D.resolve()}getDocumentsMatchingTarget(e,n){return D.resolve(null)}getIndexType(e,n){return D.resolve(0)}getFieldIndexes(e,n){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,n){return D.resolve(br.min())}getMinOffsetFromCollectionGroup(e,n){return D.resolve(br.min())}updateCollectionGroup(e,n,r){return D.resolve()}updateIndexEntries(e,n){return D.resolve()}}class SN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new gt(De.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new gt(De.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new cs(0)}static Bn(){return new cs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN{constructor(){this.changes=new _s(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?D.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Xs(r.mutation,i,qt.empty(),st.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ve()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ve()){const i=Wr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ls();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Wr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ve()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Gn();const o=Js(),a=function(){return Js()}();return n.forEach((l,c)=>{const u=r.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof xr)?s=s.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Xs(u.mutation,c,u.mutation.getFieldMask(),st.now())):o.set(c.key,qt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new PN(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Js();let i=new $e((o,a)=>o-a),s=ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||qt.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(i.get(a.batchId)||ve()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=lT();u.forEach(d=>{if(!s.has(d)){const f=_T(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return D.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return X.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ff(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):D.resolve(Wr());let a=-1,l=s;return o.next(c=>D.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?D.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,ve())).next(u=>({batchId:a,changes:aT(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(r=>{let i=Ls();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ls();return this.indexManager.getCollectionParents(e,s).next(a=>D.forEach(a,l=>{const c=function(h,d){return new Ei(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,Et.newInvalidDocument(u)))});let a=Ls();return o.forEach((l,c)=>{const u=s.get(l);u!==void 0&&Xs(u.mutation,c,qt.empty(),st.now()),Pc(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return D.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:kn(i.createTime)}}(n)),D.resolve()}getNamedQuery(e,n){return D.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:AN(i.bundledQuery),readTime:kn(i.readTime)}}(n)),D.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(){this.overlays=new $e(X.comparator),this.hr=new Map}getOverlay(e,n){return D.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Wr();return D.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),D.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),D.resolve()}getOverlaysForCollection(e,n,r){const i=Wr(),s=n.length+1,o=new X(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return D.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new $e((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=s.get(c.largestBatchId);u===null&&(u=Wr(),s=s.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Wr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return D.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new tN(n,r));let s=this.hr.get(n);s===void 0&&(s=ve(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(){this.Pr=new gt(at.Ir),this.Tr=new gt(at.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new at(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new at(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new X(new De([])),r=new at(n,e),i=new at(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new X(new De([])),r=new at(n,e),i=new at(n,e+1);let s=ve();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new at(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class at{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return X.comparator(e.key,n.key)||Ae(e.pr,n.pr)}static Er(e,n){return Ae(e.pr,n.pr)||X.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new gt(at.Ir)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new eN(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new at(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return D.resolve(o)}lookupMutationBatch(e,n){return D.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return D.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new at(n,0),i=new at(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),D.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new gt(Ae);return n.forEach(i=>{const s=new at(i,0),o=new at(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),D.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;X.isDocumentKey(s)||(s=s.child(""));const o=new at(new X(s),0);let a=new gt(Ae);return this.wr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.pr)),!0)},o),D.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ne(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return D.forEach(n.mutations,i=>{const s=new at(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new at(n,0),i=this.wr.firstAfterOrEqual(r);return D.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(e){this.vr=e,this.docs=function(){return new $e(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return D.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(n))}getEntries(e,n){let r=Gn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Et.newInvalidDocument(i))}),D.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Gn();const o=n.path,a=new X(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||vD(yD(u),r)<=0||(i.has(u.key)||Pc(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return D.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ae()}Fr(e,n){return D.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new LN(this)}getSize(e){return D.resolve(this.size)}}class LN extends CN{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),D.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN{constructor(e){this.persistence=e,this.Mr=new _s(n=>uf(n),hf),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.Or=0,this.Nr=new yf,this.targetCount=0,this.Br=cs.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),D.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new cs(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,D.resolve()}updateTargetData(e,n){return this.qn(n),D.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),D.waitFor(s).next(()=>i)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return D.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),D.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),D.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),D.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return D.resolve(r)}containsKey(e,n){return D.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(e,n){this.Lr={},this.overlays={},this.kr=new af(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new VN(this),this.indexManager=new RN,this.remoteDocumentCache=function(i){return new NN(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new bN(n),this.$r=new xN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ON,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new DN(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new FN(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return D.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class FN extends ED{constructor(e){super(),this.currentSequenceNumber=e}}class vf{constructor(e){this.persistence=e,this.zr=new yf,this.jr=null}static Hr(e){return new vf(e)}get Jr(){if(this.jr)return this.jr;throw ae()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),D.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),D.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.Jr,r=>{const i=X.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,ue.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return D.or([()=>D.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=ve(),i=ve();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new wf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return dP()?8:Hr.v(rt())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new UN;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(As()<=Te.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",xi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),D.resolve()):(As()<=Te.DEBUG&&W("QueryEngine","Query:",xi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(As()<=Te.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",xi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Pn(n))):D.resolve())}ji(e,n){if(Bg(n))return D.resolve(null);let r=Pn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Pl(n,null,"F"),r=Pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ve(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Zi(n,a);return this.Xi(n,c,o,l.readTime)?this.ji(e,Pl(n,null,"F")):this.es(e,c,n,l)}))})))}Hi(e,n,r,i){return Bg(n)||i.isEqual(ue.min())?D.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?D.resolve(null):(As()<=Te.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),xi(n)),this.es(e,o,n,_D(i,-1)).next(a=>a))})}Zi(e,n){let r=new gt(sT(e));return n.forEach((i,s)=>{Pc(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return As()<=Te.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",xi(n)),this.zi.getDocumentsMatchingQuery(e,n,br.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new $e(Ae),this.rs=new _s(s=>uf(s),hf),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new kN(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function qN(t,e,n,r){return new BN(t,e,n,r)}async function PT(t,e){const n=fe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ve();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of s){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function jN(t,e){const n=fe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let f=D.resolve();return d.forEach(p=>{f=f.next(()=>u.getEntry(l,p)).next(v=>{const _=c.docVersions.get(p);Ne(_!==null),v.version.compareTo(_)<0&&(h.applyToRemoteDocument(v,c),v.isValidDocument()&&(v.setReadTime(c.commitVersion),u.addEntry(v)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ve();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function kT(t){const e=fe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function zN(t,e){const n=fe(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(s,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(s,u.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(At.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),i=i.insert(h,f),function(v,_,w){return v.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,f,u)&&a.push(n.Qr.updateTargetData(s,f))});let l=Gn(),c=ve();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(HN(s,o,e.documentUpdates).next(u=>{l=u.cs,c=u.ls})),!r.isEqual(ue.min())){const u=n.Qr.getLastRemoteSnapshotVersion(s).next(h=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return D.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.ns=i,s))}function HN(t,e,n){let r=ve(),i=ve();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Gn();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ue.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):W("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{cs:o,ls:i}})}function WN(t,e){const n=fe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function KN(t,e){const n=fe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,D.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new mr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Hh(t,e,n){const r=fe(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ta(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function Xg(t,e,n){const r=fe(t);let i=ue.min(),s=ve();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=fe(l),d=h.rs.get(u);return d!==void 0?D.resolve(h.ns.get(d)):h.Qr.getTargetData(c,u)}(r,o,Pn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:ue.min(),n?s:ve())).next(a=>(GN(r,$D(e),a),{documents:a,hs:s})))}function GN(t,e,n){let r=t.ss.get(e)||ue.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class Zg{constructor(){this.activeTargetIds=WD()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class QN{constructor(){this.no=new Zg,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Zg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ka=null;function Lu(){return ka===null?ka=function(){return 268435456+Math.round(2147483648*Math.random())}():ka++,"0x"+ka.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="WebChannelConnection";class ZN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(n,r,i,s,o){const a=Lu(),l=this.bo(n,r.toUriEncodedString());W("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(c,s,o),this.Co(n,l,c,i).then(u=>(W("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw is("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",i),u})}vo(n,r,i,s,o,a){return this.So(n,r,i,s,o)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+gs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}bo(n,r){const i=JN[n];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,i){const s=Lu();return new Promise((o,a)=>{const l=new oD;l.setWithCredentials(!0),l.listenOnce(iD.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Du.NO_ERROR:const u=l.getResponseJson();W(yt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case Du.TIMEOUT:W(yt,`RPC '${e}' ${s} timed out`),a(new B(C.DEADLINE_EXCEEDED,"Request time out"));break;case Du.HTTP_ERROR:const h=l.getStatus();if(W(yt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const p=function(_){const w=_.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(w)>=0?w:C.UNKNOWN}(f.status);a(new B(p,f.message))}else a(new B(C.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new B(C.UNAVAILABLE,"Connection failed."));break;default:ae()}}finally{W(yt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);W(yt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Fo(e,n,r){const i=Lu(),s=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=nD(),a=rD(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");W(yt,`Creating RPC '${e}' stream ${i}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,f=!1;const p=new XN({lo:_=>{f?W(yt,`Not sending because RPC '${e}' stream ${i} is closed:`,_):(d||(W(yt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),W(yt,`RPC '${e}' stream ${i} sending:`,_),h.send(_))},ho:()=>h.close()}),v=(_,w,y)=>{_.listen(w,E=>{try{y(E)}catch(T){setTimeout(()=>{throw T},0)}})};return v(h,Sa.EventType.OPEN,()=>{f||W(yt,`RPC '${e}' stream ${i} transport opened.`)}),v(h,Sa.EventType.CLOSE,()=>{f||(f=!0,W(yt,`RPC '${e}' stream ${i} transport closed`),p.Vo())}),v(h,Sa.EventType.ERROR,_=>{f||(f=!0,is(yt,`RPC '${e}' stream ${i} transport errored:`,_),p.Vo(new B(C.UNAVAILABLE,"The operation could not be completed")))}),v(h,Sa.EventType.MESSAGE,_=>{var w;if(!f){const y=_.data[0];Ne(!!y);const E=y,T=E.error||((w=E[0])===null||w===void 0?void 0:w.error);if(T){W(yt,`RPC '${e}' stream ${i} received error:`,T);const b=T.status;let x=function(R){const $=Je[R];if($!==void 0)return vT($)}(b),N=T.message;x===void 0&&(x=C.INTERNAL,N="Unknown error status: "+b+" with message "+T.message),f=!0,p.Vo(new B(x,N)),h.close()}else W(yt,`RPC '${e}' stream ${i} received:`,y),p.mo(y)}}),v(a,sD.STAT_EVENT,_=>{_.stat===kg.PROXY?W(yt,`RPC '${e}' stream ${i} detected buffering proxy`):_.stat===kg.NOPROXY&&W(yt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.Ro()},0),p}}function Vu(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(t){return new uN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new xT(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===C.RESOURCE_EXHAUSTED?(On(n.toString()),On("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{e(()=>{const i=new B(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class eL extends OT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=fN(this.serializer,e),r=function(s){if(!("targetChange"in s))return ue.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ue.min():o.readTime?kn(o.readTime):ue.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=zh(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Uh(l)?{documents:gN(s,l)}:{query:_N(s,l).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=TT(s,o.resumeToken);const c=Bh(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ue.min())>0){a.readTime=kl(s,o.snapshotVersion.toTimestamp());const c=Bh(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=vN(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=zh(this.serializer),n.removeTarget=e,this.t_(n)}}class tL extends OT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=mN(e.writeResults,e.commitTime),r=kn(e.commitTime);return this.listener.T_(r,n)}return Ne(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=zh(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>pN(this.serializer,r))};this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nL extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new B(C.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,qh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(C.UNKNOWN,s.toString())})}vo(e,n,r,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,qh(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(C.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class rL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(On(n),this.g_=!1):W("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iL{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{Ti(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=fe(l);c.v_.add(4),await ia(c),c.x_.set("Unknown"),c.v_.delete(4),await Nc(c)}(this))})}),this.x_=new rL(r,i)}}async function Nc(t){if(Ti(t))for(const e of t.F_)await e(!0)}async function ia(t){for(const e of t.F_)await e(!1)}function DT(t,e){const n=fe(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),If(n)?Tf(n):ys(n).Jo()&&Ef(n,e))}function NT(t,e){const n=fe(t),r=ys(n);n.C_.delete(e),r.Jo()&&LT(n,e),n.C_.size===0&&(r.Jo()?r.Xo():Ti(n)&&n.x_.set("Unknown"))}function Ef(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ys(t).c_(e)}function LT(t,e){t.O_.Oe(e),ys(t).l_(e)}function Tf(t){t.O_=new oN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),ys(t).start(),t.x_.p_()}function If(t){return Ti(t)&&!ys(t).Ho()&&t.C_.size>0}function Ti(t){return fe(t).v_.size===0}function VT(t){t.O_=void 0}async function sL(t){t.C_.forEach((e,n)=>{Ef(t,e)})}async function oL(t,e){VT(t),If(t)?(t.x_.S_(e),Tf(t)):t.x_.set("Unknown")}async function aL(t,e,n){if(t.x_.set("Online"),e instanceof ET&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await xl(t,r)}else if(e instanceof za?t.O_.$e(e):e instanceof wT?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(ue.min()))try{const r=await kT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.O_.it(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=s.C_.get(c);u&&s.C_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=s.C_.get(l);if(!u)return;s.C_.set(l,u.withResumeToken(At.EMPTY_BYTE_STRING,u.snapshotVersion)),LT(s,l);const h=new mr(u.target,l,c,u.sequenceNumber);Ef(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await xl(t,r)}}async function xl(t,e,n){if(!ta(e))throw e;t.v_.add(1),await ia(t),t.x_.set("Offline"),n||(n=()=>kT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await Nc(t)})}function MT(t,e){return e().catch(n=>xl(t,n,e))}async function Lc(t){const e=fe(t),n=Rr(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;lL(e);)try{const i=await WN(e.localStore,r);if(i===null){e.D_.length===0&&n.Xo();break}r=i.batchId,cL(e,i)}catch(i){await xl(e,i)}FT(e)&&UT(e)}function lL(t){return Ti(t)&&t.D_.length<10}function cL(t,e){t.D_.push(e);const n=Rr(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function FT(t){return Ti(t)&&!Rr(t).Ho()&&t.D_.length>0}function UT(t){Rr(t).start()}async function uL(t){Rr(t).d_()}async function hL(t){const e=Rr(t);for(const n of t.D_)e.I_(n.mutations)}async function dL(t,e,n){const r=t.D_.shift(),i=mf.from(r,e,n);await MT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Lc(t)}async function fL(t,e){e&&Rr(t).P_&&await async function(r,i){if(function(o){return rN(o)&&o!==C.ABORTED}(i.code)){const s=r.D_.shift();Rr(r).Zo(),await MT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Lc(r)}}(t,e),FT(t)&&UT(t)}async function t_(t,e){const n=fe(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=Ti(n);n.v_.add(3),await ia(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await Nc(n)}async function pL(t,e){const n=fe(t);e?(n.v_.delete(2),await Nc(n)):e||(n.v_.add(2),await ia(n),n.x_.set("Unknown"))}function ys(t){return t.N_||(t.N_=function(n,r,i){const s=fe(n);return s.R_(),new eL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:sL.bind(null,t),To:oL.bind(null,t),u_:aL.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),If(t)?Tf(t):t.x_.set("Unknown")):(await t.N_.stop(),VT(t))})),t.N_}function Rr(t){return t.B_||(t.B_=function(n,r,i){const s=fe(n);return s.R_(),new tL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:uL.bind(null,t),To:fL.bind(null,t),E_:hL.bind(null,t),T_:dL.bind(null,t)}),t.F_.push(async e=>{e?(t.B_.Zo(),await Lc(t)):(await t.B_.stop(),t.D_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.B_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Cn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new bf(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Af(t,e){if(On("AsyncQueue",`${e}: ${t}`),ta(t))return new B(C.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=Ls(),this.sortedSet=new $e(this.comparator)}static emptySet(e){return new Yi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Yi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Yi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(){this.L_=new $e(X.comparator)}track(e){const n=e.doc.key,r=this.L_.get(n);r?e.type!==0&&r.type===3?this.L_=this.L_.insert(n,e):e.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.L_=this.L_.remove(n):e.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):ae():this.L_=this.L_.insert(n,e)}k_(){const e=[];return this.L_.inorderTraversal((n,r)=>{e.push(r)}),e}}class us{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new us(e,n,Yi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Cc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mL{constructor(){this.q_=void 0,this.Q_=[]}}class gL{constructor(){this.queries=new _s(e=>iT(e),Cc),this.onlineState="Unknown",this.K_=new Set}}async function $T(t,e){const n=fe(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new mL),i)try{s.q_=await n.onListen(r)}catch(o){const a=Af(o,`Initialization of query '${xi(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.Q_.push(e),e.U_(n.onlineState),s.q_&&e.W_(s.q_)&&Rf(n)}async function BT(t,e){const n=fe(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.Q_.indexOf(e);o>=0&&(s.Q_.splice(o,1),i=s.Q_.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function _L(t,e){const n=fe(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.Q_)a.W_(i)&&(r=!0);o.q_=i}}r&&Rf(n)}function yL(t,e,n){const r=fe(t),i=r.queries.get(e);if(i)for(const s of i.Q_)s.onError(n);r.queries.delete(e)}function Rf(t){t.K_.forEach(e=>{e.next()})}class qT{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new us(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=us.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e){this.key=e}}class zT{constructor(e){this.key=e}}class vL{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=ve(),this.mutatedKeys=ve(),this.ua=sT(e),this.ca=new Yi(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new n_,i=n?n.ca:this.ca;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=Pc(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let _=!1;d&&f?d.data.isEqual(f.data)?p!==v&&(r.track({type:3,doc:f}),_=!0):this.Ia(d,f)||(r.track({type:2,doc:f}),_=!0,(l&&this.ua(f,l)>0||c&&this.ua(f,c)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),_=!0):d&&!f&&(r.track({type:1,doc:d}),_=!0,(l||c)&&(a=!0)),_&&(f?(o=o.add(f),s=v?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{ca:o,Pa:r,Xi:a,mutatedKeys:s}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const o=e.Pa.k_();o.sort((u,h)=>function(f,p){const v=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ae()}};return v(f)-v(p)}(u.type,h.type)||this.ua(u.doc,h.doc)),this.Ta(r),i=i!=null&&i;const a=n&&!i?this.Ea():[],l=this.aa.size===0&&this.current&&!i?1:0,c=l!==this._a;return this._a=l,o.length!==0||c?{snapshot:new us(this.query,e.ca,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new n_,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}Ta(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ea(){if(!this.current)return[];const e=this.aa;this.aa=ve(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new zT(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new jT(r))}),n}Ra(e){this.oa=e.hs,this.aa=ve();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return us.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class wL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class EL{constructor(e){this.key=e,this.ma=!1}}class TL{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new _s(a=>iT(a),Cc),this.pa=new Map,this.ya=new Set,this.wa=new $e(X.comparator),this.Sa=new Map,this.ba=new yf,this.Da={},this.Ca=new Map,this.va=cs.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function IL(t,e){const n=DL(t);let r,i;const s=n.ga.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await KN(n.localStore,Pn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await bL(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&DT(n.remoteStore,o)}return i}async function bL(t,e,n,r,i){t.Ma=(h,d,f)=>async function(v,_,w,y){let E=_.view.ha(w);E.Xi&&(E=await Xg(v.localStore,_.query,!1).then(({documents:N})=>_.view.ha(N,E)));const T=y&&y.targetChanges.get(_.targetId),b=y&&y.targetMismatches.get(_.targetId)!=null,x=_.view.applyChanges(E,v.isPrimaryClient,T,b);return i_(v,_.targetId,x.da),x.snapshot}(t,h,d,f);const s=await Xg(t.localStore,e,!0),o=new vL(e,s.hs),a=o.ha(s.documents),l=ra.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);i_(t,n,c.da);const u=new wL(e,n,o);return t.ga.set(e,u),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),c.snapshot}async function AL(t,e){const n=fe(t),r=n.ga.get(e),i=n.pa.get(r.targetId);if(i.length>1)return n.pa.set(r.targetId,i.filter(s=>!Cc(s,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Hh(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),NT(n.remoteStore,r.targetId),Wh(n,r.targetId)}).catch(ea)):(Wh(n,r.targetId),await Hh(n.localStore,r.targetId,!0))}async function RL(t,e,n){const r=NL(t);try{const i=await function(o,a){const l=fe(o),c=st.now(),u=a.reduce((f,p)=>f.add(p.key),ve());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let p=Gn(),v=ve();return l.os.getEntries(f,u).next(_=>{p=_,p.forEach((w,y)=>{y.isValidDocument()||(v=v.add(w))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,p)).next(_=>{h=_;const w=[];for(const y of a){const E=XD(y,h.get(y.key).overlayedDocument);E!=null&&w.push(new xr(y.key,E,JE(E.value.mapValue),Zt.exists(!0)))}return l.mutationQueue.addMutationBatch(f,c,w,a)}).next(_=>{d=_;const w=_.applyToLocalDocumentSet(h,v);return l.documentOverlayCache.saveOverlays(f,_.batchId,w)})}).then(()=>({batchId:d.batchId,changes:aT(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.Da[o.currentUser.toKey()];c||(c=new $e(Ae)),c=c.insert(a,l),o.Da[o.currentUser.toKey()]=c}(r,i.batchId,n),await sa(r,i.changes),await Lc(r.remoteStore)}catch(i){const s=Af(i,"Failed to persist write");n.reject(s)}}async function HT(t,e){const n=fe(t);try{const r=await zN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Sa.get(s);o&&(Ne(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?Ne(o.ma):i.removedDocuments.size>0&&(Ne(o.ma),o.ma=!1))}),await sa(n,r,e)}catch(r){await ea(r)}}function r_(t,e,n){const r=fe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=fe(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.Q_)d.U_(a)&&(c=!0)}),c&&Rf(l)}(r.eventManager,e),i.length&&r.fa.u_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function SL(t,e,n){const r=fe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Sa.get(e),s=i&&i.key;if(s){let o=new $e(X.comparator);o=o.insert(s,Et.newNoDocument(s,ue.min()));const a=ve().add(s),l=new Oc(ue.min(),new Map,new $e(Ae),o,a);await HT(r,l),r.wa=r.wa.remove(s),r.Sa.delete(e),Sf(r)}else await Hh(r.localStore,e,!1).then(()=>Wh(r,e,n)).catch(ea)}async function CL(t,e){const n=fe(t),r=e.batch.batchId;try{const i=await jN(n.localStore,e);KT(n,r,null),WT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await sa(n,i)}catch(i){await ea(i)}}async function PL(t,e,n){const r=fe(t);try{const i=await function(o,a){const l=fe(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(Ne(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,e);KT(r,e,n),WT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await sa(r,i)}catch(i){await ea(i)}}function WT(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function KT(t,e,n){const r=fe(t);let i=r.Da[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Da[r.currentUser.toKey()]=i}}function Wh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.Vr(e).forEach(r=>{t.ba.containsKey(r)||GT(t,r)})}function GT(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(NT(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),Sf(t))}function i_(t,e,n){for(const r of n)r instanceof jT?(t.ba.addReference(r.key,e),kL(t,r)):r instanceof zT?(W("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||GT(t,r.key)):ae()}function kL(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(W("SyncEngine","New document in limbo: "+n),t.ya.add(r),Sf(t))}function Sf(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new X(De.fromString(e)),r=t.va.next();t.Sa.set(r,new EL(n)),t.wa=t.wa.insert(n,r),DT(t.remoteStore,new mr(Pn(df(n.path)),r,"TargetPurposeLimboResolution",af._e))}}async function sa(t,e,n){const r=fe(t),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,l)=>{o.push(r.Ma(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=wf.Ki(l.targetId,c);s.push(u)}}))}),await Promise.all(o),r.fa.u_(i),await async function(l,c){const u=fe(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>D.forEach(c,d=>D.forEach(d.qi,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>D.forEach(d.Qi,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!ta(h))throw h;W("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.ns.get(d),p=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(p);u.ns=u.ns.insert(d,v)}}}(r.localStore,s))}async function xL(t,e){const n=fe(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await PT(n.localStore,e);n.currentUser=e,function(s,o){s.Ca.forEach(a=>{a.forEach(l=>{l.reject(new B(C.CANCELLED,o))})}),s.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await sa(n,r.us)}}function OL(t,e){const n=fe(t),r=n.Sa.get(e);if(r&&r.ma)return ve().add(r.key);{let i=ve();const s=n.pa.get(e);if(!s)return i;for(const o of s){const a=n.ga.get(o);i=i.unionWith(a.view.la)}return i}}function DL(t){const e=fe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=HT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=OL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=SL.bind(null,e),e.fa.u_=_L.bind(null,e.eventManager),e.fa.xa=yL.bind(null,e.eventManager),e}function NL(t){const e=fe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=CL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=PL.bind(null,e),e}class s_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Dc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return qN(this.persistence,new $N,e.initialUser,this.serializer)}createPersistence(e){return new MN(vf.Hr,this.serializer)}createSharedClientState(e){return new QN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class LL{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>r_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=xL.bind(null,this.syncEngine),await pL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new gL}()}createDatastore(e){const n=Dc(e.databaseInfo.databaseId),r=function(s){return new ZN(s)}(e.databaseInfo);return function(s,o,a,l){return new nL(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new iL(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>r_(this.syncEngine,n,0),function(){return e_.D()?new e_:new YN}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,u){const h=new TL(i,s,o,a,l,c);return u&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=fe(r);W("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await ia(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):On("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VL{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=wt.UNAUTHENTICATED,this.clientId=GE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{W("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(W("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(C.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Cn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Af(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Mu(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await PT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function o_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await FL(t);W("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>t_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>t_(e.remoteStore,i)),t._onlineComponents=e}function ML(t){return t.name==="FirebaseError"?t.code===C.FAILED_PRECONDITION||t.code===C.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function FL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await Mu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!ML(n))throw n;is("Error using user provided cache. Falling back to memory cache: "+n),await Mu(t,new s_)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await Mu(t,new s_);return t._offlineComponents}async function YT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await o_(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await o_(t,new LL))),t._onlineComponents}function UL(t){return YT(t).then(e=>e.syncEngine)}async function JT(t){const e=await YT(t),n=e.eventManager;return n.onListen=IL.bind(null,e.syncEngine),n.onUnlisten=AL.bind(null,e.syncEngine),n}function $L(t,e,n={}){const r=new Cn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const u=new QT({next:d=>{o.enqueueAndForget(()=>BT(s,h));const f=d.docs.has(a);!f&&d.fromCache?c.reject(new B(C.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?c.reject(new B(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new qT(df(a.path),u,{includeMetadataChanges:!0,Z_:!0});return $T(s,h)}(await JT(t),t.asyncQueue,e,n,r)),r.promise}function BL(t,e,n={}){const r=new Cn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const u=new QT({next:d=>{o.enqueueAndForget(()=>BT(s,h)),d.fromCache&&l.source==="server"?c.reject(new B(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new qT(a,u,{includeMetadataChanges:!0,Z_:!0});return $T(s,h)}(await JT(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(t,e,n){if(!n)throw new B(C.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function qL(t,e,n,r){if(e===!0&&r===!0)throw new B(C.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function l_(t){if(!X.isDocumentKey(t))throw new B(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function c_(t){if(X.isDocumentKey(t))throw new B(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Vc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ae()}function mn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vc(t);throw new B(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function jL(t,e){if(e<=0)throw new B(C.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}qL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=XT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new B(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new B(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new B(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Mc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new u_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new B(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new u_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new lD;switch(r.type){case"firstParty":return new dD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=a_.get(n);r&&(W("ComponentProvider","Removing Datastore"),a_.delete(n),r.terminate())}(this),Promise.resolve()}}function zL(t,e,n,r={}){var i;const s=(t=mn(t,Mc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&is("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=wt.MOCK_USER;else{a=Zv(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new B(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new wt(c)}t._authCredentials=new cD(new KE(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Xn(this.firestore,e,this._query)}}class kt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new kt(this.firestore,e,this._key)}}class wr extends Xn{constructor(e,n,r){super(e,n,df(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new kt(this.firestore,null,new X(e))}withConverter(e){return new wr(this.firestore,e,this._path)}}function LU(t,e,...n){if(t=Se(t),ZT("collection","path",e),t instanceof Mc){const r=De.fromString(e,...n);return c_(r),new wr(t,null,r)}{if(!(t instanceof kt||t instanceof wr))throw new B(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return c_(r),new wr(t.firestore,null,r)}}function Cf(t,e,...n){if(t=Se(t),arguments.length===1&&(e=GE.newId()),ZT("doc","path",e),t instanceof Mc){const r=De.fromString(e,...n);return l_(r),new kt(t,null,new X(r))}{if(!(t instanceof kt||t instanceof wr))throw new B(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return l_(r),new kt(t.firestore,t instanceof wr?t.converter:null,new X(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HL{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new xT(this,"async_queue_retry"),this._u=()=>{const n=Vu();n&&W("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=Vu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.au(),this.uu(e)}enterRestrictedMode(e){if(!this.tu){this.tu=!0,this.su=e||!1;const n=Vu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(e){if(this.au(),this.tu)return new Promise(()=>{});const n=new Cn;return this.uu(()=>this.tu&&this.su?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.eu.push(e),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(e){if(!ta(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(e){const n=this.Xa.then(()=>(this.iu=!0,e().catch(r=>{this.ru=r,this.iu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw On("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.iu=!1,r))));return this.Xa=n,n}enqueueAfterDelay(e,n,r){this.au(),this.ou.indexOf(e)>-1&&(n=0);const i=bf.createAndSchedule(this,e,n,r,s=>this.lu(s));return this.nu.push(i),i}au(){this.ru&&ae()}verifyOperationInProgress(){}async hu(){let e;do e=this.Xa,await e;while(e!==this.Xa)}Pu(e){for(const n of this.nu)if(n.timerId===e)return!0;return!1}Iu(e){return this.hu().then(()=>{this.nu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.nu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.hu()})}Tu(e){this.ou.push(e)}lu(e){const n=this.nu.indexOf(e);this.nu.splice(n,1)}}class Ii extends Mc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new HL}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||eI(this),this._firestoreClient.terminate()}}function WL(t,e){const n=typeof t=="object"?t:sc(),r=typeof t=="string"?t:e||"(default)",i=Cr(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Yv("firestore");s&&zL(i,...s)}return i}function Pf(t){return t._firestoreClient||eI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function eI(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,c,u){return new RD(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,XT(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new VL(t._authCredentials,t._appCheckCredentials,t._queue,s),((n=i.localCache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((r=i.localCache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hs(At.fromBase64String(e))}catch(n){throw new B(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new hs(At.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KL=/^__.*__$/;class GL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new xr(e,this.data,this.fieldMask,n,this.fieldTransforms):new na(e,this.data,n,this.fieldTransforms)}}class tI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new xr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function nI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ae()}}class xf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Eu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(e){return new xf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Au({path:r,Vu:!1});return i.mu(e),i}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Au({path:r,Vu:!1});return i.Eu(),i}gu(e){return this.Au({path:void 0,Vu:!0})}pu(e){return Ol(e,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Eu(){if(this.path)for(let e=0;e<this.path.length;e++)this.mu(this.path.get(e))}mu(e){if(e.length===0)throw this.pu("Document fields must not be empty");if(nI(this.du)&&KL.test(e))throw this.pu('Document fields cannot begin and end with "__"')}}class QL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Dc(e)}Su(e,n,r,i=!1){return new xf({du:e,methodName:n,wu:r,path:pt.emptyPath(),Vu:!1,yu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function aa(t){const e=t._freezeSettings(),n=Dc(t._databaseId);return new QL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function rI(t,e,n,r,i,s={}){const o=t.Su(s.merge||s.mergeFields?2:0,e,n,i);Nf("Data must be an object, but it was:",o,r);const a=sI(r,o);let l,c;if(s.merge)l=new qt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const d=Kh(e,h,n);if(!o.contains(d))throw new B(C.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);aI(u,d)||u.push(d)}l=new qt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new GL(new Nt(a),l,c)}class Uc extends oa{_toFieldTransform(e){if(e.du!==2)throw e.du===1?e.pu(`${this._methodName}() can only appear at the top level of your update data`):e.pu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Uc}}class Of extends oa{_toFieldTransform(e){return new gT(e.path,new Po)}isEqual(e){return e instanceof Of}}class Df extends oa{constructor(e,n){super(e),this.Du=n}_toFieldTransform(e){const n=new Oo(e.serializer,hT(e.serializer,this.Du));return new gT(e.path,n)}isEqual(e){return e instanceof Df&&this.Du===e.Du}}function YL(t,e,n,r){const i=t.Su(1,e,n);Nf("Data must be an object, but it was:",i,r);const s=[],o=Nt.empty();wi(r,(l,c)=>{const u=Lf(e,l,n);c=Se(c);const h=i.fu(u);if(c instanceof Uc)s.push(u);else{const d=la(c,h);d!=null&&(s.push(u),o.set(u,d))}});const a=new qt(s);return new tI(o,a,i.fieldTransforms)}function JL(t,e,n,r,i,s){const o=t.Su(1,e,n),a=[Kh(e,r,n)],l=[i];if(s.length%2!=0)throw new B(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Kh(e,s[d])),l.push(s[d+1]);const c=[],u=Nt.empty();for(let d=a.length-1;d>=0;--d)if(!aI(c,a[d])){const f=a[d];let p=l[d];p=Se(p);const v=o.fu(f);if(p instanceof Uc)c.push(f);else{const _=la(p,v);_!=null&&(c.push(f),u.set(f,_))}}const h=new qt(c);return new tI(u,h,o.fieldTransforms)}function iI(t,e,n,r=!1){return la(n,t.Su(r?4:3,e))}function la(t,e){if(oI(t=Se(t)))return Nf("Unsupported field value:",e,t),sI(t,e);if(t instanceof oa)return function(r,i){if(!nI(i.du))throw i.pu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.pu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Vu&&e.du!==4)throw e.pu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=la(a,i.gu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Se(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return hT(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=st.fromDate(r);return{timestampValue:kl(i.serializer,s)}}if(r instanceof st){const s=new st(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:kl(i.serializer,s)}}if(r instanceof kf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof hs)return{bytesValue:TT(i.serializer,r._byteString)};if(r instanceof kt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.pu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:_f(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.pu(`Unsupported field value: ${Vc(r)}`)}(t,e)}function sI(t,e){const n={};return QE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):wi(t,(r,i)=>{const s=la(i,e.Ru(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function oI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof st||t instanceof kf||t instanceof hs||t instanceof kt||t instanceof oa)}function Nf(t,e,n){if(!oI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Vc(n);throw r==="an object"?e.pu(t+" a custom object"):e.pu(t+" "+r)}}function Kh(t,e,n){if((e=Se(e))instanceof Fc)return e._internalPath;if(typeof e=="string")return Lf(t,e);throw Ol("Field path arguments must be of type string or ",t,!1,void 0,n)}const XL=new RegExp("[~\\*/\\[\\]]");function Lf(t,e,n){if(e.search(XL)>=0)throw Ol(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Fc(...e.split("."))._internalPath}catch{throw Ol(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ol(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new B(C.INVALID_ARGUMENT,a+t+l)}function aI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ZL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field($c("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ZL extends Vf{data(){return super.data()}}function $c(t,e){return typeof e=="string"?Lf(t,e):e instanceof Fc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eV(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Mf{}class Bc extends Mf{}function VU(t,e,...n){let r=[];e instanceof Mf&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof Ff).length,a=s.filter(l=>l instanceof qc).length;if(o>1||o>0&&a>0)throw new B(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class qc extends Bc{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new qc(e,n,r)}_apply(e){const n=this._parse(e);return lI(e._query,n),new Xn(e.firestore,e.converter,$h(e._query,n))}_parse(e){const n=aa(e.firestore);return function(s,o,a,l,c,u,h){let d;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new B(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){d_(h,u);const f=[];for(const p of h)f.push(h_(l,s,p));d={arrayValue:{values:f}}}else d=h_(l,s,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||d_(h,u),d=iI(a,o,h,u==="in"||u==="not-in");return et.create(c,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function MU(t,e,n){const r=e,i=$c("where",t);return qc._create(i,r,n)}class Ff extends Mf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ff(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:pn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)lI(o,l),o=$h(o,l)}(e._query,n),new Xn(e.firestore,e.converter,$h(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Uf extends Bc{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Uf(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new B(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new B(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Co(s,o)}(e._query,this._field,this._direction);return new Xn(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Ei(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function FU(t,e="asc"){const n=e,r=$c("orderBy",t);return Uf._create(r,n)}class $f extends Bc{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new $f(e,n,r)}_apply(e){return new Xn(e.firestore,e.converter,Pl(e._query,this._limit,this._limitType))}}function UU(t){return jL("limit",t),$f._create("limit",t,"F")}class Bf extends Bc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Bf(e,n,r)}_apply(e){const n=tV(e,this.type,this._docOrFields,this._inclusive);return new Xn(e.firestore,e.converter,function(i,s){return new Ei(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function $U(...t){return Bf._create("startAfter",t,!1)}function tV(t,e,n,r){if(n[0]=Se(n[0]),n[0]instanceof Vf)return function(s,o,a,l,c){if(!l)throw new B(C.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const u=[];for(const h of Qi(s))if(h.field.isKeyField())u.push(Cl(o,l.key));else{const d=l.data.field(h.field);if(Sc(d))throw new B(C.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const f=h.field.canonicalString();throw new B(C.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}u.push(d)}return new ls(u,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=aa(t.firestore);return function(o,a,l,c,u,h){const d=o.explicitOrderBy;if(u.length>d.length)throw new B(C.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let p=0;p<u.length;p++){const v=u[p];if(d[p].field.isKeyField()){if(typeof v!="string")throw new B(C.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof v}`);if(!ff(o)&&v.indexOf("/")!==-1)throw new B(C.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${v}' contains a slash.`);const _=o.path.child(De.fromString(v));if(!X.isDocumentKey(_))throw new B(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${_}' is not because it contains an odd number of segments.`);const w=new X(_);f.push(Cl(a,w))}else{const _=iI(l,c,v);f.push(_)}}return new ls(f,h)}(t._query,t.firestore._databaseId,i,e,n,r)}}function h_(t,e,n){if(typeof(n=Se(n))=="string"){if(n==="")throw new B(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ff(e)&&n.indexOf("/")!==-1)throw new B(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(De.fromString(n));if(!X.isDocumentKey(r))throw new B(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Cl(t,new X(r))}if(n instanceof kt)return Cl(t,n._key);throw new B(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Vc(n)}.`)}function d_(t,e){if(!Array.isArray(t)||t.length===0)throw new B(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function lI(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class nV{convertValue(e,n="none"){switch(ui(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ci(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ae()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return wi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new kf(Xe(e.latitude),Xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=lf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ao(e));default:return null}}convertTimestamp(e){const n=Ar(e);return new st(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=De.fromString(e);Ne(CT(r));const i=new Ro(r.get(1),r.get(3)),s=new X(r.popFirst(5));return i.isEqual(n)||On(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cI(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class uI extends Vf{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ha(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field($c("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ha extends uI{data(e={}){return super.data(e)}}class rV{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ms(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ha(this._firestore,this._userDataWriter,r.key,r,new Ms(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Ha(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ms(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Ha(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ms(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:iV(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function iV(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ae()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BU(t){t=mn(t,kt);const e=mn(t.firestore,Ii);return $L(Pf(e),t._key).then(n=>sV(e,t,n))}class hI extends nV{constructor(e){super(),this.firestore=e}convertBytes(e){return new hs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new kt(this.firestore,null,n)}}function qU(t){t=mn(t,Xn);const e=mn(t.firestore,Ii),n=Pf(e),r=new hI(e);return eV(t._query),BL(n,t._query).then(i=>new rV(e,r,t,i))}function jU(t,e,n){t=mn(t,kt);const r=mn(t.firestore,Ii),i=cI(t.converter,e,n);return jc(r,[rI(aa(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Zt.none())])}function dI(t,e,n,...r){t=mn(t,kt);const i=mn(t.firestore,Ii),s=aa(i);let o;return o=typeof(e=Se(e))=="string"||e instanceof Fc?JL(s,"updateDoc",t._key,e,n,r):YL(s,"updateDoc",t._key,e),jc(i,[o.toMutation(t._key,Zt.exists(!0))])}function zU(t){return jc(mn(t.firestore,Ii),[new pf(t._key,Zt.none())])}function HU(t,e){const n=mn(t.firestore,Ii),r=Cf(t),i=cI(t.converter,e);return jc(n,[rI(aa(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Zt.exists(!1))]).then(()=>r)}function jc(t,e){return function(r,i){const s=new Cn;return r.asyncQueue.enqueueAndForget(async()=>RL(await UL(r),i,s)),s.promise}(Pf(t),e)}function sV(t,e,n){const r=n.docs.get(e._key),i=new hI(t);return new uI(t,i,e._key,r,new Ms(n.hasPendingWrites,n.fromCache),e.converter)}function WU(){return new Of("serverTimestamp")}function KU(t){return new Df("increment",t)}(function(e,n=!0){(function(i){gs=i})(yi),dn(new en("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ii(new uD(r.getProvider("auth-internal")),new pD(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new B(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ro(c.options.projectId,u)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Lt(xg,"4.4.3",e),Lt(xg,"4.4.3","esm2017")})();const fI="@firebase/installations",qf="0.6.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI=1e4,mI=`w:${qf}`,gI="FIS_v2",oV="https://firebaseinstallations.googleapis.com/v1",aV=60*60*1e3,lV="installations",cV="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uV={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},hi=new _i(lV,cV,uV);function _I(t){return t instanceof nn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yI({projectId:t}){return`${oV}/projects/${t}/installations`}function vI(t){return{token:t.token,requestStatus:2,expiresIn:dV(t.expiresIn),creationTime:Date.now()}}async function wI(t,e){const r=(await e.json()).error;return hi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function EI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function hV(t,{refreshToken:e}){const n=EI(t);return n.append("Authorization",fV(e)),n}async function TI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function dV(t){return Number(t.replace("s","000"))}function fV(t){return`${gI} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pV({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=yI(t),i=EI(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:gI,appId:t.appId,sdkVersion:mI},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await TI(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:vI(c.authToken)}}else throw await wI("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function II(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mV(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gV=/^[cdef][\w-]{21}$/,Gh="";function _V(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=yV(t);return gV.test(n)?n:Gh}catch{return Gh}}function yV(t){return mV(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI=new Map;function AI(t,e){const n=zc(t);RI(n,e),vV(n,e)}function RI(t,e){const n=bI.get(t);if(!!n)for(const r of n)r(e)}function vV(t,e){const n=wV();n&&n.postMessage({key:t,fid:e}),EV()}let Kr=null;function wV(){return!Kr&&"BroadcastChannel"in self&&(Kr=new BroadcastChannel("[Firebase] FID Change"),Kr.onmessage=t=>{RI(t.data.key,t.data.fid)}),Kr}function EV(){bI.size===0&&Kr&&(Kr.close(),Kr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TV="firebase-installations-database",IV=1,di="firebase-installations-store";let Fu=null;function jf(){return Fu||(Fu=iw(TV,IV,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(di)}}})),Fu}async function Dl(t,e){const n=zc(t),i=(await jf()).transaction(di,"readwrite"),s=i.objectStore(di),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&AI(t,e.fid),e}async function SI(t){const e=zc(t),r=(await jf()).transaction(di,"readwrite");await r.objectStore(di).delete(e),await r.done}async function Hc(t,e){const n=zc(t),i=(await jf()).transaction(di,"readwrite"),s=i.objectStore(di),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&AI(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zf(t){let e;const n=await Hc(t.appConfig,r=>{const i=bV(r),s=AV(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Gh?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function bV(t){const e=t||{fid:_V(),registrationStatus:0};return CI(e)}function AV(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(hi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=RV(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:SV(t)}:{installationEntry:e}}async function RV(t,e){try{const n=await pV(t,e);return Dl(t.appConfig,n)}catch(n){throw _I(n)&&n.customData.serverCode===409?await SI(t.appConfig):await Dl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function SV(t){let e=await f_(t.appConfig);for(;e.registrationStatus===1;)await II(100),e=await f_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await zf(t);return r||n}return e}function f_(t){return Hc(t,e=>{if(!e)throw hi.create("installation-not-found");return CI(e)})}function CI(t){return CV(t)?{fid:t.fid,registrationStatus:0}:t}function CV(t){return t.registrationStatus===1&&t.registrationTime+pI<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PV({appConfig:t,heartbeatServiceProvider:e},n){const r=kV(t,n),i=hV(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:mI,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await TI(()=>fetch(r,a));if(l.ok){const c=await l.json();return vI(c)}else throw await wI("Generate Auth Token",l)}function kV(t,{fid:e}){return`${yI(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hf(t,e=!1){let n;const r=await Hc(t.appConfig,s=>{if(!PI(s))throw hi.create("not-registered");const o=s.authToken;if(!e&&DV(o))return s;if(o.requestStatus===1)return n=xV(t,e),s;{if(!navigator.onLine)throw hi.create("app-offline");const a=LV(s);return n=OV(t,a),a}});return n?await n:r.authToken}async function xV(t,e){let n=await p_(t.appConfig);for(;n.authToken.requestStatus===1;)await II(100),n=await p_(t.appConfig);const r=n.authToken;return r.requestStatus===0?Hf(t,e):r}function p_(t){return Hc(t,e=>{if(!PI(e))throw hi.create("not-registered");const n=e.authToken;return VV(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function OV(t,e){try{const n=await PV(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Dl(t.appConfig,r),n}catch(n){if(_I(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await SI(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Dl(t.appConfig,r)}throw n}}function PI(t){return t!==void 0&&t.registrationStatus===2}function DV(t){return t.requestStatus===2&&!NV(t)}function NV(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+aV}function LV(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function VV(t){return t.requestStatus===1&&t.requestTime+pI<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MV(t){const e=t,{installationEntry:n,registrationPromise:r}=await zf(e);return r?r.catch(console.error):Hf(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FV(t,e=!1){const n=t;return await UV(n),(await Hf(n,e)).token}async function UV(t){const{registrationPromise:e}=await zf(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $V(t){if(!t||!t.options)throw Uu("App Configuration");if(!t.name)throw Uu("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Uu(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Uu(t){return hi.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI="installations",BV="installations-internal",qV=t=>{const e=t.getProvider("app").getImmediate(),n=$V(e),r=Cr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},jV=t=>{const e=t.getProvider("app").getImmediate(),n=Cr(e,kI).getImmediate();return{getId:()=>MV(n),getToken:i=>FV(n,i)}};function zV(){dn(new en(kI,qV,"PUBLIC")),dn(new en(BV,jV,"PRIVATE"))}zV();Lt(fI,qf);Lt(fI,qf,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl="analytics",HV="firebase_id",WV="origin",KV=60*1e3,GV="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Wf="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt=new ic("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QV={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},zt=new _i("analytics","Analytics",QV);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YV(t){if(!t.startsWith(Wf)){const e=zt.create("invalid-gtag-resource",{gtagURL:t});return Vt.warn(e.message),""}return t}function xI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function JV(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function XV(t,e){const n=JV("firebase-js-sdk-policy",{createScriptURL:YV}),r=document.createElement("script"),i=`${Wf}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function ZV(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function eM(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await xI(n)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){Vt.error(a)}t("config",i,s)}async function tM(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await xI(n);for(const l of o){const c=a.find(h=>h.measurementId===l),u=c&&e[c.appId];if(u)s.push(u);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Vt.error(s)}}function nM(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await tM(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await eM(t,e,n,r,a,l)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){Vt.error(a)}}return i}function rM(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=nM(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function iM(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Wf)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sM=30,oM=1e3;class aM{constructor(e={},n=oM){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const OI=new aM;function lM(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function cM(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:lM(r)},s=GV.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw zt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function uM(t,e=OI,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw zt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw zt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new fM;return setTimeout(async()=>{a.abort()},n!==void 0?n:KV),DI({appId:r,apiKey:i,measurementId:s},o,a,e)}async function DI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=OI){var s;const{appId:o,measurementId:a}=t;try{await hM(r,e)}catch(l){if(a)return Vt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await cM(t);return i.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!dM(c)){if(i.deleteThrottleMetadata(o),a)return Vt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const u=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?Hm(n,i.intervalMillis,sM):Hm(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,h),Vt.debug(`Calling attemptFetch again in ${u} millis`),DI(t,h,r,i)}}function hM(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(zt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function dM(t){if(!(t instanceof nn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class fM{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function pM(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mM(){if(Id())try{await tw()}catch(t){return Vt.warn(zt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Vt.warn(zt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function gM(t,e,n,r,i,s,o){var a;const l=uM(t);l.then(f=>{n[f.measurementId]=f.appId,t.options.measurementId&&f.measurementId!==t.options.measurementId&&Vt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>Vt.error(f)),e.push(l);const c=mM().then(f=>{if(f)return r.getId()}),[u,h]=await Promise.all([l,c]);iM(s)||XV(s,u.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[WV]="firebase",d.update=!0,h!=null&&(d[HV]=h),i("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _M{constructor(e){this.app=e}_delete(){return delete Zs[this.app.options.appId],Promise.resolve()}}let Zs={},m_=[];const g_={};let $u="dataLayer",yM="gtag",__,NI,y_=!1;function vM(){const t=[];if(ew()&&t.push("This is a browser extension environment."),fP()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=zt.create("invalid-analytics-context",{errorInfo:e});Vt.warn(n.message)}}function wM(t,e,n){vM();const r=t.options.appId;if(!r)throw zt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Vt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw zt.create("no-api-key");if(Zs[r]!=null)throw zt.create("already-exists",{id:r});if(!y_){ZV($u);const{wrappedGtag:s,gtagCore:o}=rM(Zs,m_,g_,$u,yM);NI=s,__=o,y_=!0}return Zs[r]=gM(t,m_,g_,e,__,$u,n),new _M(t)}function EM(t=sc()){t=Se(t);const e=Cr(t,Nl);return e.isInitialized()?e.getImmediate():TM(t)}function TM(t,e={}){const n=Cr(t,Nl);if(n.isInitialized()){const i=n.getImmediate();if(ho(e,n.getOptions()))return i;throw zt.create("already-initialized")}return n.initialize({options:e})}function IM(t,e,n,r){t=Se(t),pM(NI,Zs[t.app.options.appId],e,n,r).catch(i=>Vt.error(i))}const v_="@firebase/analytics",w_="0.10.1";function bM(){dn(new en(Nl,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return wM(r,i,n)},"PUBLIC")),dn(new en("analytics-internal",t,"PRIVATE")),Lt(v_,w_),Lt(v_,w_,"esm2017");function t(e){try{const n=e.getProvider(Nl).getImmediate();return{logEvent:(r,i,s)=>IM(n,r,i,s)}}catch(n){throw zt.create("interop-component-reg-failed",{reason:n})}}}bM();var AM="firebase",RM="10.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt(AM,RM,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI="firebasestorage.googleapis.com",VI="storageBucket",SM=2*60*1e3,CM=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke extends nn{constructor(e,n,r=0){super(Bu(e),`Firebase Storage: ${n} (${Bu(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ke.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Bu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var We;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(We||(We={}));function Bu(t){return"storage/"+t}function Kf(){const t="An unknown error occurred, please check the error payload for server response.";return new Ke(We.UNKNOWN,t)}function PM(t){return new Ke(We.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function kM(t){return new Ke(We.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function xM(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ke(We.UNAUTHENTICATED,t)}function OM(){return new Ke(We.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function DM(t){return new Ke(We.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function NM(){return new Ke(We.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function LM(){return new Ke(We.CANCELED,"User canceled the upload/download.")}function VM(t){return new Ke(We.INVALID_URL,"Invalid URL '"+t+"'.")}function MM(t){return new Ke(We.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function FM(){return new Ke(We.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+VI+"' property when initializing the app?")}function UM(){return new Ke(We.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function $M(){return new Ke(We.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function BM(t){return new Ke(We.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Qh(t){return new Ke(We.INVALID_ARGUMENT,t)}function MI(){return new Ke(We.APP_DELETED,"The Firebase app was deleted.")}function qM(t){return new Ke(We.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function eo(t,e){return new Ke(We.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Rs(t){throw new Ke(We.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=jt.makeFromUrl(e,n)}catch{return new jt(e,"")}if(r.path==="")return r;throw MM(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(T){T.path.charAt(T.path.length-1)==="/"&&(T.path_=T.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(T){T.path_=decodeURIComponent(T.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),p={bucket:1,path:3},v=n===LI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",w=new RegExp(`^https?://${v}/${i}/${_}`,"i"),E=[{regex:a,indices:l,postModify:s},{regex:f,indices:p,postModify:c},{regex:w,indices:{bucket:1,path:2},postModify:c}];for(let T=0;T<E.length;T++){const b=E[T],x=b.regex.exec(e);if(x){const N=x[b.indices.bucket];let A=x[b.indices.path];A||(A=""),r=new jt(N,A),b.postModify(r);break}}if(r==null)throw VM(e);return r}}class jM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zM(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(..._){c||(c=!0,e.apply(null,_))}function h(_){i=setTimeout(()=>{i=null,t(f,l())},_)}function d(){s&&clearTimeout(s)}function f(_,...w){if(c){d();return}if(_){d(),u.call(null,_,...w);return}if(l()||o){d(),u.call(null,_,...w);return}r<64&&(r*=2);let E;a===1?(a=2,E=0):E=(r+Math.random())*1e3,h(E)}let p=!1;function v(_){p||(p=!0,d(),!c&&(i!==null?(_||(a=2),clearTimeout(i),h(0)):_||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function HM(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WM(t){return t!==void 0}function KM(t){return typeof t=="object"&&!Array.isArray(t)}function Gf(t){return typeof t=="string"||t instanceof String}function E_(t){return Qf()&&t instanceof Blob}function Qf(){return typeof Blob!="undefined"}function T_(t,e,n,r){if(r<e)throw Qh(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Qh(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function FI(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ti;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ti||(ti={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GM(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QM{constructor(e,n,r,i,s,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,p)=>{this.resolve_=f,this.reject_=p,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new xa(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ti.NO_ERROR,l=s.getStatus();if(!a||GM(l,this.additionalRetryCodes_)&&this.retry){const u=s.getErrorCode()===ti.ABORT;r(!1,new xa(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new xa(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());WM(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Kf();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?MI():LM();o(l)}else{const l=NM();o(l)}};this.canceled_?n(!1,new xa(!1,null,!0)):this.backoffId_=zM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&HM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class xa{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function YM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function JM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function XM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function ZM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function eF(t,e,n,r,i,s,o=!0){const a=FI(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return XM(c,e),YM(c,n),JM(c,s),ZM(c,r),new QM(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tF(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function nF(...t){const e=tF();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Qf())return new Blob(t);throw new Ke(We.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function rF(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iF(t){if(typeof atob=="undefined")throw BM("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class qu{constructor(e,n){this.data=e,this.contentType=n||null}}function sF(t,e){switch(t){case An.RAW:return new qu(UI(e));case An.BASE64:case An.BASE64URL:return new qu($I(t,e));case An.DATA_URL:return new qu(aF(e),lF(e))}throw Kf()}function UI(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function oF(t){let e;try{e=decodeURIComponent(t)}catch{throw eo(An.DATA_URL,"Malformed data URL.")}return UI(e)}function $I(t,e){switch(t){case An.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw eo(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case An.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw eo(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=iF(e)}catch(i){throw i.message.includes("polyfill")?i:eo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class BI{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw eo(An.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=cF(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function aF(t){const e=new BI(t);return e.base64?$I(An.BASE64,e.rest):oF(e.rest)}function lF(t){return new BI(t).contentType}function cF(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n){let r=0,i="";E_(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(E_(this.data_)){const r=this.data_,i=rF(r,e,n);return i===null?null:new pr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new pr(r,!0)}}static getBlob(...e){if(Qf()){const n=e.map(r=>r instanceof pr?r.data_:r);return new pr(nF.apply(null,n))}else{const n=e.map(o=>Gf(o)?sF(An.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new pr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qI(t){let e;try{e=JSON.parse(t)}catch{return null}return KM(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uF(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function hF(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function jI(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dF(t,e){return e}class Rt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||dF}}let Oa=null;function fF(t){return!Gf(t)||t.length<2?t:jI(t)}function zI(){if(Oa)return Oa;const t=[];t.push(new Rt("bucket")),t.push(new Rt("generation")),t.push(new Rt("metageneration")),t.push(new Rt("name","fullPath",!0));function e(s,o){return fF(o)}const n=new Rt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Rt("size");return i.xform=r,t.push(i),t.push(new Rt("timeCreated")),t.push(new Rt("updated")),t.push(new Rt("md5Hash",null,!0)),t.push(new Rt("cacheControl",null,!0)),t.push(new Rt("contentDisposition",null,!0)),t.push(new Rt("contentEncoding",null,!0)),t.push(new Rt("contentLanguage",null,!0)),t.push(new Rt("contentType",null,!0)),t.push(new Rt("metadata","customMetadata",!0)),Oa=t,Oa}function pF(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new jt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function mF(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return pF(r,t),r}function HI(t,e,n){const r=qI(e);return r===null?null:mF(t,r,n)}function gF(t,e,n,r){const i=qI(e);if(i===null||!Gf(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),f=Yf(d,n,r),p=FI({alt:"media",token:c});return f+p})[0]}function _F(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class WI{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KI(t){if(!t)throw Kf()}function yF(t,e){function n(r,i){const s=HI(t,i,e);return KI(s!==null),s}return n}function vF(t,e){function n(r,i){const s=HI(t,i,e);return KI(s!==null),gF(s,i,t.host,t._protocol)}return n}function GI(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=OM():i=xM():n.getStatus()===402?i=kM(t.bucket):n.getStatus()===403?i=DM(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function wF(t){const e=GI(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=PM(t.path)),s.serverResponse=i.serverResponse,s}return n}function EF(t,e,n){const r=e.fullServerUrl(),i=Yf(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new WI(i,s,vF(t,n),o);return a.errorHandler=wF(e),a}function TF(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function IF(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=TF(null,e)),r}function bF(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let E="";for(let T=0;T<2;T++)E=E+Math.random().toString().slice(2);return E}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=IF(e,r,i),u=_F(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+l+"--",f=pr.getBlob(h,r,d);if(f===null)throw UM();const p={name:c.fullPath},v=Yf(s,t.host,t._protocol),_="POST",w=t.maxUploadRetryTime,y=new WI(v,_,yF(t,n),w);return y.urlParams=p,y.headers=o,y.body=f.uploadData(),y.errorHandler=GI(e),y}class AF{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ti.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ti.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ti.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Rs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Rs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Rs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Rs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Rs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class RF extends AF{initXhr(){this.xhr_.responseType="text"}}function QI(){return new RF}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,n){this._service=e,n instanceof jt?this._location=n:this._location=jt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new fi(e,n)}get root(){const e=new jt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return jI(this._location.path)}get storage(){return this._service}get parent(){const e=uF(this._location.path);if(e===null)return null;const n=new jt(this._location.bucket,e);return new fi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw qM(e)}}function SF(t,e,n){t._throwIfRoot("uploadBytes");const r=bF(t.storage,t._location,zI(),new pr(e,!0),n);return t.storage.makeRequestWithTokens(r,QI).then(i=>({metadata:i,ref:t}))}function CF(t){t._throwIfRoot("getDownloadURL");const e=EF(t.storage,t._location,zI());return t.storage.makeRequestWithTokens(e,QI).then(n=>{if(n===null)throw $M();return n})}function PF(t,e){const n=hF(t._location.path,e),r=new jt(t._location.bucket,n);return new fi(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kF(t){return/^[A-Za-z]+:\/\//.test(t)}function xF(t,e){return new fi(t,e)}function YI(t,e){if(t instanceof Jf){const n=t;if(n._bucket==null)throw FM();const r=new fi(n,n._bucket);return e!=null?YI(r,e):r}else return e!==void 0?PF(t,e):t}function OF(t,e){if(e&&kF(e)){if(t instanceof Jf)return xF(t,e);throw Qh("To use ref(service, url), the first argument must be a Storage instance.")}else return YI(t,e)}function I_(t,e){const n=e==null?void 0:e[VI];return n==null?null:jt.makeFromBucketSpec(n,t)}function DF(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Zv(i,t.app.options.projectId))}class Jf{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=LI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=SM,this._maxUploadRetryTime=CM,this._requests=new Set,i!=null?this._bucket=jt.makeFromBucketSpec(i,this._host):this._bucket=I_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=jt.makeFromBucketSpec(this._url,e):this._bucket=I_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){T_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){T_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new fi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new jM(MI());{const o=eF(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const b_="@firebase/storage",A_="0.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI="storage";function GU(t,e,n){return t=Se(t),SF(t,e,n)}function QU(t){return t=Se(t),CF(t)}function YU(t,e){return t=Se(t),OF(t,e)}function NF(t=sc(),e){t=Se(t);const r=Cr(t,JI).getImmediate({identifier:e}),i=Yv("storage");return i&&LF(r,...i),r}function LF(t,e,n,r={}){DF(t,e,n,r)}function VF(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Jf(n,r,i,e,yi)}function MF(){dn(new en(JI,VF,"PUBLIC").setMultipleInstances(!0)),Lt(b_,A_,""),Lt(b_,A_,"esm2017")}MF();const FF={apiKey:"AIzaSyDdXSbtZ88kvBJeN46WJImaEQBqRnjKBXU",authDomain:"vue3-firebase-app-79156.firebaseapp.com",projectId:"vue3-firebase-app-79156",storageBucket:"vue3-firebase-app-79156.appspot.com",messagingSenderId:"435779038073",appId:"1:435779038073:web:389cd4fb78a8488a829da8",measurementId:"G-Q7PRWRVCW0"},Wc=sw(FF),Wt=eO(Wc),Xf=WL(Wc),UF=NF(Wc);EM(Wc);var $F=async()=>{const t=Hv();Bx(Wt,e=>{console.log("###user",e),t.setUser(e)})},BF=Object.freeze(Object.defineProperty({__proto__:null,auth:Wt,db:Xf,storage:UF,default:$F},Symbol.toStringTag,{value:"Module"}));const qF="https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=";async function JU(){const t=new Un,{user:e}=await c1(Wt,t);return e}async function jF(){await qx(Wt)}async function XU({email:t,password:e}){const{user:n}=await Dx(Wt,t,e);await xw(n,{displayName:t.split("@")[0],photoURL:XI(n.uid)}),ZI()}function XI(t){return`${qF}${t}`}async function ZU({email:t,password:e}){const{user:n}=await Nx(Wt,t,e);return n}async function e2(t){await Ox(Wt,t)}async function t2(t){await Fx(Wt.currentUser,t)}async function ZI(){await Lx(Wt.currentUser)}async function n2(t){await xw(Wt.currentUser,{displayName:t}),await dI(Cf(Xf,"users",Wt.currentUser.uid),{displayName:t})}async function r2(t){await Mx(Wt.currentUser,t),await dI(Cf(Xf,"users",Wt.currentUser.uid),{email:t})}var zF={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(self,()=>(()=>{var n={d:(h,d)=>{for(var f in d)n.o(d,f)&&!n.o(h,f)&&Object.defineProperty(h,f,{enumerable:!0,get:d[f]})},o:(h,d)=>Object.prototype.hasOwnProperty.call(h,d),r:h=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(h,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(h,"__esModule",{value:!0})}},r={};function i(){return document.createElement("canvas")}function s(h){for(var d=atob(h.split(",")[1]),f=h.split(",")[0].split(":")[1].split(";")[0],p=new ArrayBuffer(d.length),v=new Uint8Array(p),_=0;_<d.length;_++)v[_]=d.charCodeAt(_);return new Blob([p],{type:f})}function o(h,d){var f=d.width/d.height,p=Math.min(d.width,h.maxWidth,f*h.maxHeight);return h.maxSize>0&&h.maxSize<d.width*d.height/1e3&&(p=Math.min(p,Math.floor(1e3*h.maxSize/d.height))),h.scaleRatio&&(p=Math.min(p,Math.floor(h.scaleRatio*d.width))),h.debug&&(console.log("browser-image-resizer: original image size = "+d.width+" px (width) X "+d.height+" px (height)"),console.log("browser-image-resizer: scaled image size = "+p+" px (width) X "+Math.floor(p/f)+" px (height)")),p<=0&&(p=1,console.warn("browser-image-resizer: image size is too small")),p}function a(h,d){var f=document.createElement("canvas"),p=d.outputWidth/h.width;f.width=h.width*p,f.height=h.height*p;var v=h.getContext("2d").getImageData(0,0,h.width,h.height),_=f.getContext("2d").createImageData(f.width,f.height);return function(w,y,E){function T(Kt,pe,ge,S,H,P){var J=1-H,Ee=1-P;return Kt*J*Ee+pe*H*Ee+ge*J*P+S*H*P}var b,x,N,A,R,$,Q,F,re,z,se,ee,me,de,Be,ut,ht,qe,_t;for(b=0;b<y.height;++b)for(N=b/E,A=Math.floor(N),R=Math.ceil(N)>w.height-1?w.height-1:Math.ceil(N),x=0;x<y.width;++x)$=x/E,Q=Math.floor($),F=Math.ceil($)>w.width-1?w.width-1:Math.ceil($),re=4*(x+y.width*b),z=4*(Q+w.width*A),se=4*(F+w.width*A),ee=4*(Q+w.width*R),me=4*(F+w.width*R),de=$-Q,Be=N-A,ut=T(w.data[z],w.data[se],w.data[ee],w.data[me],de,Be),y.data[re]=ut,ht=T(w.data[z+1],w.data[se+1],w.data[ee+1],w.data[me+1],de,Be),y.data[re+1]=ht,qe=T(w.data[z+2],w.data[se+2],w.data[ee+2],w.data[me+2],de,Be),y.data[re+2]=qe,_t=T(w.data[z+3],w.data[se+3],w.data[ee+3],w.data[me+3],de,Be),y.data[re+3]=_t}(v,_,p),f.getContext("2d").putImageData(_,0,0),f}function l(h){var d=document.createElement("canvas");return d.width=h.width/2,d.height=h.height/2,d.getContext("2d").drawImage(h,0,0,d.width,d.height),d}n.r(r),n.d(r,{readAndCompressImage:()=>u});var c={quality:.5,maxWidth:800,maxHeight:600,autoRotate:!0,debug:!1,mimeType:"image/jpeg"};function u(h,d){return new Promise(function(f,p){var v=document.createElement("img"),_=new FileReader,w=Object.assign({},c,d);_.onload=function(y){v.onerror=function(){p("cannot load image.")},v.onload=function(){var E={img:v,config:w};try{var T=function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},x=b.img,N=b.config,A=(b.orientation,i());A.width=x.width,A.height=x.height;var R=A.getContext("2d");N.mimeType==="image/jpeg"&&(R.fillStyle="#ffffff",R.fillRect(0,0,A.width,A.height),R.save()),R.drawImage(x,0,0),R.restore();for(var $=o(N,A);A.width>=2*$;)A=l(A);A.width>$&&(A=a(A,Object.assign(N,{outputWidth:$})));var Q=A.toDataURL(N.mimeType,N.quality);return typeof N.onScale=="function"&&N.onScale(Q),s(Q)}(E);f(T)}catch(b){p(b)}},v.src=y.target.result};try{_.onerror=function(){p("cannot read image file.")},_.readAsDataURL(h)}catch(y){p(y)}})}return r})())})(zF);function HF(){return Pt(Ky)}const WF=Ql("img",{src:"/icons/favicon-16x16.png"},null,-1),KF=["src"],GF={__name:"default",setup(t){const e=Hv(),n=HF(),r=vS(),i=V(()=>{var c;return{maxWidth:((c=r.meta)==null?void 0:c.width)||"1080px",margin:"0 auto"}}),s=_e(!1),o=()=>{s.value=!0},a=async()=>{n.notify("\uB85C\uADF8\uC544\uC6C3 \uB418\uC5C8\uC2B5\uB2C8\uB2E4."),await jF()},l=async()=>{await ZI(),n.notify("\uC774\uBA54\uC77C\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694.")};return(c,u)=>{const h=ay("router-view");return an(),Bb(Dt,null,[oe(RC,{view:"lHh Lpr lff",class:"bg-grey-2"},{default:je(()=>[oe(TC,{bordered:"",class:"bg-white text-grey-9"},{default:je(()=>[oe(wC,null,{default:je(()=>[oe(Mn,{flat:"",dense:"",to:"/"},{default:je(()=>[oe(PS,null,{default:je(()=>[oe(uh,null,{default:je(()=>[WF]),_:1}),Ps(" \uC9D0\uCF54\uB529 \uD074\uB7FD ")]),_:1})]),_:1}),oe(Ev),oe(Mn,{stretch:"",flat:"",label:"Home",to:"/home"}),oe(Mn,{stretch:"",flat:"",label:"\uC218\uAC15\uD558\uAE30",href:"https://google.com",target:"_blank"}),oe(Mn,{stretch:"",flat:"",label:"\uC628\uB77C\uC778 \uAC15\uC758",href:"https://google.com",target:"_blank"}),oe(Mn,{stretch:"",flat:"",label:"\uC720\uD29C\uBE0C",href:"https://google.com",target:"_blank"}),oe(YS,{class:"q-my-md q-mr-md",vertical:""}),Ot(e).isAuthenticated?Sp("",!0):(an(),En(Mn,{key:0,unelevated:"",rounded:"",color:"primary",label:"\uB85C\uADF8\uC778 / \uD68C\uC6D0\uAC00\uC785",onClick:o})),Ot(e).isAuthenticated?(an(),En(Mn,{key:1,round:"",flat:""},{default:je(()=>[oe(uh,null,{default:je(()=>[Ql("img",{src:Ot(e).user.photoURL||Ot(XI)(Ot(e).user.uid)},null,8,KF)]),_:1}),oe(vC,null,{default:je(()=>[oe(JS,{style:{"min-width":"140px"}},{default:je(()=>[Ot(e).user.emailVerified?$i((an(),En(pu,{key:0,clickable:"",to:"/mypage/profile"},{default:je(()=>[oe(fu,null,{default:je(()=>[Ps("\uD504\uB85C\uD544")]),_:1})]),_:1})),[[Ma]]):$i((an(),En(pu,{key:1,clickable:""},{default:je(()=>[oe(fu,{class:"text-red",onClick:l},{default:je(()=>[Ps("\uC774\uBA54\uC77C\uC744 \uC778\uC99D\uD574\uC8FC\uC138\uC694")]),_:1})]),_:1})),[[Ma]]),$i((an(),En(pu,{clickable:"",onClick:a},{default:je(()=>[oe(fu,null,{default:je(()=>[Ps("\uB85C\uADF8\uC544\uC6C3")]),_:1})]),_:1})),[[Ma]])]),_:1})]),_:1})]),_:1})):Sp("",!0)]),_:1})]),_:1}),oe(IC,{style:Do(i.value)},{default:je(()=>[oe(h)]),_:1},8,["style"])]),_:1}),oe(ZC,{modelValue:s.value,"onUpdate:modelValue":u[0]||(u[0]=d=>s.value=d)},null,8,["modelValue"])],64)}}},QF={admin:()=>ke(()=>import("./admin.0b744c47.js"),["assets/admin.0b744c47.js","assets/plugin-vue_export-helper.21dcd24c.js"]),default:GF,MainLayout:()=>ke(()=>import("./MainLayout.82329d44.js"),["assets/MainLayout.82329d44.js","assets/QItemLabel.c02fa86e.js","assets/format.c860d4da.js","assets/plugin-vue_export-helper.21dcd24c.js"])};function YF(t){return t.map(e=>{var n;return{path:e.path,meta:e.meta,component:QF[((n=e.meta)==null?void 0:n.layout)||"default"],children:e.path==="/"?[e]:[{...e,path:""}]}})}var ju=function(){return wS({scrollBehavior:()=>({left:0,top:0}),history:DR("/"),extendRoutes:n=>YF(n.map(r=>(r.path.includes("admin")&&(r={...r,meta:{...r.meta,layout:"admin"}}),r)))})};async function JF(t,e){const n=t(aR);n.use(oR,e);const r=typeof au=="function"?await au({}):au;n.use(r);const i=Sr(typeof ju=="function"?await ju({store:r}):ju);return r.use(({store:s})=>{s.router=i}),{app:n,store:r,router:i}}let XF=0;const Wa={},Ka={},on={},e0={},ZF=/^\s*$/,t0=[],eU=[void 0,null,!0,!1,""],Zf=["top-left","top-right","bottom-left","bottom-right","top","bottom","left","right","center"],tU=["top-left","top-right","bottom-left","bottom-right"],Ni={positive:{icon:t=>t.iconSet.type.positive,color:"positive"},negative:{icon:t=>t.iconSet.type.negative,color:"negative"},warning:{icon:t=>t.iconSet.type.warning,color:"warning",textColor:"dark"},info:{icon:t=>t.iconSet.type.info,color:"info"},ongoing:{group:!1,timeout:0,spinner:!0,color:"grey-8"}};function n0(t,e,n){if(!t)return Ss("parameter required");let r;const i={textColor:"white"};if(t.ignoreDefaults!==!0&&Object.assign(i,Wa),lo(t)===!1&&(i.type&&Object.assign(i,Ni[i.type]),t={message:t}),Object.assign(i,Ni[t.type||i.type],t),typeof i.icon=="function"&&(i.icon=i.icon(e)),i.spinner?(i.spinner===!0&&(i.spinner=pv),i.spinner=Sr(i.spinner)):i.spinner=!1,i.meta={hasMedia:Boolean(i.spinner!==!1||i.icon||i.avatar),hasText:R_(i.message)||R_(i.caption)},i.position){if(Zf.includes(i.position)===!1)return Ss("wrong position",t)}else i.position="bottom";if(eU.includes(i.timeout)===!0)i.timeout=5e3;else{const l=Number(i.timeout);if(isNaN(l)||l<0)return Ss("wrong timeout",t);i.timeout=Number.isFinite(l)?l:0}i.timeout===0?i.progress=!1:i.progress===!0&&(i.meta.progressClass="q-notification__progress"+(i.progressClass?` ${i.progressClass}`:""),i.meta.progressStyle={animationDuration:`${i.timeout+1e3}ms`});const s=(Array.isArray(t.actions)===!0?t.actions:[]).concat(t.ignoreDefaults!==!0&&Array.isArray(Wa.actions)===!0?Wa.actions:[]).concat(Ni[t.type]!==void 0&&Array.isArray(Ni[t.type].actions)===!0?Ni[t.type].actions:[]),{closeBtn:o}=i;if(o&&s.push({label:typeof o=="string"?o:e.lang.label.close}),i.actions=s.map(({handler:l,noDismiss:c,...u})=>({flat:!0,...u,onClick:typeof l=="function"?()=>{l(),c!==!0&&a()}:()=>{a()}})),i.multiLine===void 0&&(i.multiLine=i.actions.length>1),Object.assign(i.meta,{class:`q-notification row items-stretch q-notification--${i.multiLine===!0?"multi-line":"standard"}`+(i.color!==void 0?` bg-${i.color}`:"")+(i.textColor!==void 0?` text-${i.textColor}`:"")+(i.classes!==void 0?` ${i.classes}`:""),wrapperClass:"q-notification__wrapper col relative-position border-radius-inherit "+(i.multiLine===!0?"column no-wrap justify-center":"row items-center"),contentClass:"q-notification__content row items-center"+(i.multiLine===!0?"":" col"),leftClass:i.meta.hasText===!0?"additional":"single",attrs:{role:"alert",...i.attrs}}),i.group===!1?(i.group=void 0,i.meta.group=void 0):((i.group===void 0||i.group===!0)&&(i.group=[i.message,i.caption,i.multiline].concat(i.actions.map(l=>`${l.label}*${l.icon}`)).join("|")),i.meta.group=i.group+"|"+i.position),i.actions.length===0?i.actions=void 0:i.meta.actionsClass="q-notification__actions row items-center "+(i.multiLine===!0?"justify-end":"col-auto")+(i.meta.hasMedia===!0?" q-notification__actions--with-media":""),n!==void 0){n.notif.meta.timer&&(clearTimeout(n.notif.meta.timer),n.notif.meta.timer=void 0),i.meta.uid=n.notif.meta.uid;const l=on[i.position].value.indexOf(n.notif);on[i.position].value[l]=i}else{const l=Ka[i.meta.group];if(l===void 0){if(i.meta.uid=XF++,i.meta.badge=1,["left","right","center"].indexOf(i.position)!==-1)on[i.position].value.splice(Math.floor(on[i.position].value.length/2),0,i);else{const c=i.position.indexOf("top")>-1?"unshift":"push";on[i.position].value[c](i)}i.group!==void 0&&(Ka[i.meta.group]=i)}else{if(l.meta.timer&&(clearTimeout(l.meta.timer),l.meta.timer=void 0),i.badgePosition!==void 0){if(tU.includes(i.badgePosition)===!1)return Ss("wrong badgePosition",t)}else i.badgePosition=`top-${i.position.indexOf("left")>-1?"right":"left"}`;i.meta.uid=l.meta.uid,i.meta.badge=l.meta.badge+1,i.meta.badgeClass=`q-notification__badge q-notification__badge--${i.badgePosition}`+(i.badgeColor!==void 0?` bg-${i.badgeColor}`:"")+(i.badgeTextColor!==void 0?` text-${i.badgeTextColor}`:"")+(i.badgeClass?` ${i.badgeClass}`:"");const c=on[i.position].value.indexOf(l);on[i.position].value[c]=Ka[i.meta.group]=i}}const a=()=>{nU(i),r=void 0};if(i.timeout>0&&(i.meta.timer=setTimeout(()=>{i.meta.timer=void 0,a()},i.timeout+1e3)),i.group!==void 0)return l=>{l!==void 0?Ss("trying to update a grouped one which is forbidden",t):a()};if(r={dismiss:a,config:t,notif:i},n!==void 0){Object.assign(n,r);return}return l=>{if(r!==void 0)if(l===void 0)r.dismiss();else{const c=Object.assign({},r.config,l,{group:!1,position:i.position});n0(c,e,r)}}}function nU(t){t.meta.timer&&(clearTimeout(t.meta.timer),t.meta.timer=void 0);const e=on[t.position].value.indexOf(t);if(e!==-1){t.group!==void 0&&delete Ka[t.meta.group];const n=t0[""+t.meta.uid];if(n){const{width:r,height:i}=getComputedStyle(n);n.style.left=`${n.offsetLeft}px`,n.style.width=r,n.style.height=i}on[t.position].value.splice(e,1),typeof t.onDismiss=="function"&&t.onDismiss()}}function R_(t){return t!=null&&ZF.test(t)!==!0}function Ss(t,e){return console.error(`Notify: ${t}`,e),!1}function rU(){return Ye({name:"QNotifications",devtools:{hide:!0},setup(){return()=>j("div",{class:"q-notifications"},Zf.map(t=>j(bA,{key:t,class:e0[t],tag:"div",name:`q-notification--${t}`},()=>on[t].value.map(e=>{const n=e.meta,r=[];if(n.hasMedia===!0&&(e.spinner!==!1?r.push(j(e.spinner,{class:"q-notification__spinner q-notification__spinner--"+n.leftClass,color:e.spinnerColor,size:e.spinnerSize})):e.icon?r.push(j(al,{class:"q-notification__icon q-notification__icon--"+n.leftClass,name:e.icon,color:e.iconColor,size:e.iconSize,role:"img"})):e.avatar&&r.push(j(uh,{class:"q-notification__avatar q-notification__avatar--"+n.leftClass},()=>j("img",{src:e.avatar,"aria-hidden":"true"})))),n.hasText===!0){let s;const o={class:"q-notification__message col"};if(e.html===!0)o.innerHTML=e.caption?`<div>${e.message}</div><div class="q-notification__caption">${e.caption}</div>`:e.message;else{const a=[e.message];s=e.caption?[j("div",a),j("div",{class:"q-notification__caption"},[e.caption])]:a}r.push(j("div",o,s))}const i=[j("div",{class:n.contentClass},r)];return e.progress===!0&&i.push(j("div",{key:`${n.uid}|p|${n.badge}`,class:n.progressClass,style:n.progressStyle})),e.actions!==void 0&&i.push(j("div",{class:n.actionsClass},e.actions.map(s=>j(Mn,s)))),n.badge>1&&i.push(j("div",{key:`${n.uid}|${n.badge}`,class:e.meta.badgeClass,style:e.badgeStyle},[n.badge])),j("div",{ref:s=>{t0[""+n.uid]=s},key:n.uid,class:n.class,...n.attrs},[j("div",{class:n.wrapperClass},i)])}))))}})}var iU={setDefaults(t){lo(t)===!0&&Object.assign(Wa,t)},registerType(t,e){lo(e)===!0&&(Ni[t]=e)},install({$q:t,parentApp:e}){if(t.notify=this.create=n=>n0(n,t),t.notify.setDefaults=this.setDefaults,t.notify.registerType=this.registerType,t.config.notify!==void 0&&this.setDefaults(t.config.notify),this.__installed!==!0){Zf.forEach(r=>{on[r]=_e([]);const i=["left","center","right"].includes(r)===!0?"center":r.indexOf("top")>-1?"top":"bottom",s=r.indexOf("left")>-1?"start":r.indexOf("right")>-1?"end":"center",o=["left","right"].includes(r)?`items-${r==="left"?"start":"end"} justify-center`:r==="center"?"flex-center":`items-${s}`;e0[r]=`q-notifications__list q-notifications__list--${i} fixed column no-wrap ${o}`});const n=Sv("q-notify");rR(rU(),e).mount(n)}}},sU={config:{notify:{position:"top"}},plugins:{Notify:iU}};const oU="/";async function aU({app:t,router:e,store:n},r){let i=!1;const s=l=>{try{return e.resolve(l).href}catch{}return Object(l)===l?null:l},o=l=>{if(i=!0,typeof l=="string"&&/^https?:\/\//.test(l)){window.location.href=l;return}const c=s(l);c!==null&&(window.location.href=c)},a=window.location.href.replace(window.location.origin,"");for(let l=0;i===!1&&l<r.length;l++)try{await r[l]({app:t,router:e,store:n,ssrContext:null,redirect:o,urlPath:a,publicPath:oU})}catch(c){if(c&&c.url){o(c.url);return}console.error("[Quasar] boot error:",c);return}i!==!0&&(t.use(e),t.mount("#q-app"))}JF(Uy,sU).then(t=>{const[e,n]=Promise.allSettled!==void 0?["allSettled",r=>r.map(i=>{if(i.status==="rejected"){console.error("[Quasar] boot error:",i.reason);return}return i.value.default})]:["all",r=>r.map(i=>i.default)];return Promise[e]([ke(()=>Promise.resolve().then(function(){return BF}),void 0),ke(()=>import("./error-handler.dc213adb.js"),["assets/error-handler.dc213adb.js","assets/error-message.b0f15c3d.js"]),ke(()=>import("./navigation-guard.82ebea36.js"),[]),ke(()=>import("./algoliasearch.b38b83c3.js"),[])]).then(r=>{const i=n(r).filter(s=>typeof s=="function");aU(t,i)})});export{un as $,ni as A,_U as B,nh as C,yU as D,ao as E,Dt as F,qy as G,By as H,jy as I,Fn as J,XS as K,Ye as L,Tv as M,iU as N,Fo as O,Iv as P,Uo as Q,Dv as R,Pt as S,ji as T,yd as U,_e as V,V as W,bv as X,WC as Y,xe as Z,Hn as _,Ps as a,WU as a$,Ft as a0,$i as a1,AU as a2,Nn as a3,Qe as a4,YC as a5,zl as a6,fu as a7,al as a8,pu as a9,fd as aA,hb as aB,ph as aC,Ev as aD,HC as aE,Ot as aF,Z_ as aG,xU as aH,uh as aI,Mm as aJ,gU as aK,Ma as aL,YS as aM,XC as aN,ze as aO,tR as aP,BU as aQ,Cf as aR,Xf as aS,MU as aT,FU as aU,$U as aV,UU as aW,VU as aX,LU as aY,qU as aZ,dI as a_,RC as aa,wC as ab,Mn as ac,PS as ad,TC as ae,JS as af,IC as ag,PU as ah,ur as ai,SU as aj,hl as ak,SC as al,kU as am,$o as an,CU as ao,PC as ap,vS as aq,bU as ar,wU as as,NS as at,ri as au,QA as av,Li as aw,ou as ax,Ov as ay,qi as az,TU as b,HU as b0,zU as b1,KU as b2,jU as b3,YU as b4,GU as b5,QU as b6,zF as b7,UF as b8,qA as b9,Nv as bA,km as bB,pC as bC,Bl as bD,VS as bE,MS as bF,uU as bG,Ub as bH,Ja as bI,ln as bJ,Sr as bK,j0 as bL,t2 as bM,n2 as bN,r2 as bO,sn as bP,EU as bQ,Gp as bR,ZU as bS,JU as bT,XU as bU,e2 as bV,fb as ba,pb as bb,my as bc,vC as bd,HF as be,Ir as bf,vU as bg,Jl as bh,Rv as bi,RU as bj,pv as bk,Zi as bl,yv as bm,Ed as bn,Td as bo,ES as bp,ZS as bq,kv as br,Pm as bs,mC as bt,xv as bu,tC as bv,eC as bw,Pv as bx,Rm as by,Bv as bz,Ql as c,Bb as d,Sp as e,hU as f,ay as g,j as h,En as i,oe as j,pU as k,lU as l,jb as m,Ul as n,an as o,dU as p,je as q,fU as r,IU as s,cU as t,Hv as u,Zb as v,mU as w,Py as x,cv as y,Ge as z};
