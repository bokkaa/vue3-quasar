import{bj as Ve,V as z,_ as ee,S as Ae,bk as ke,Z as N,a0 as ae,a5 as J,W as C,ba as Fe,bl as xe,bc as _e,bm as de,J as ie,$ as Y,aB as Ce,aC as we,h as R,E as G,O as Ee,Q as Be,bn as $e,a9 as fe,bo as Oe,a3 as X,bp as Pe,aw as Te,z as Ie,L as Se,G as ce,aA as je,bq as De}from"./index.e805e3f8.js";let re,te=0;const D=new Array(256);for(let e=0;e<256;e++)D[e]=(e+256).toString(16).substring(1);const ze=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const u=new Uint8Array(t);return e.getRandomValues(u),u}}return t=>{const u=[];for(let i=t;i>0;i--)u.push(Math.floor(Math.random()*256));return u}})(),ve=4096;function Me(){(re===void 0||te+16>ve)&&(te=0,re=ze(ve));const e=Array.prototype.slice.call(re,te,te+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,D[e[0]]+D[e[1]]+D[e[2]]+D[e[3]]+"-"+D[e[4]]+D[e[5]]+"-"+D[e[6]]+D[e[7]]+"-"+D[e[8]]+D[e[9]]+"-"+D[e[10]]+D[e[11]]+D[e[12]]+D[e[13]]+D[e[14]]+D[e[15]]}function Re(e,t){return e===void 0?t===!0?`f_${Me()}`:void 0:e}function Le(e,t=!0){if(Ve.value===!0){const u=z(e);return t===!0&&e===void 0&&ee(()=>{u.value=`f_${Me()}`}),u}return z(Re(e,t))}function Ze({validate:e,resetValidation:t,requiresQForm:u}){const i=Ae(ke,!1);if(i!==!1){const{props:f,proxy:d}=J();Object.assign(d,{validate:e,resetValidation:t}),N(()=>f.disable,c=>{c===!0?(typeof t=="function"&&t(),i.unbindComponent(d)):i.bindComponent(d)}),ee(()=>{f.disable!==!0&&i.bindComponent(d)}),ae(()=>{f.disable!==!0&&i.unbindComponent(d)})}else u===!0&&console.error("Parent QForm not found on useFormChild()!")}const me=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,ge=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,he=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,ne=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,oe=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ue={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>me.test(e),hexaColor:e=>ge.test(e),hexOrHexaColor:e=>he.test(e),rgbColor:e=>ne.test(e),rgbaColor:e=>oe.test(e),rgbOrRgbaColor:e=>ne.test(e)||oe.test(e),hexOrRgbColor:e=>me.test(e)||ne.test(e),hexaOrRgbaColor:e=>ge.test(e)||oe.test(e),anyColor:e=>he.test(e)||ne.test(e)||oe.test(e)},Ne=[!0,!1,"ondemand"],Ke={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>Ne.includes(e)}};function Ue(e,t){const{props:u,proxy:i}=J(),f=z(!1),d=z(null),c=z(!1);Ze({validate:T,resetValidation:F});let y=0,B;const M=C(()=>u.rules!==void 0&&u.rules!==null&&u.rules.length!==0),k=C(()=>u.disable!==!0&&M.value===!0&&t.value===!1),m=C(()=>u.error===!0||f.value===!0),H=C(()=>typeof u.errorMessage=="string"&&u.errorMessage.length!==0?u.errorMessage:d.value);N(()=>u.modelValue,()=>{c.value=!0,k.value===!0&&u.lazyRules===!1&&I()});function v(){u.lazyRules!=="ondemand"&&k.value===!0&&c.value===!0&&I()}N(()=>u.reactiveRules,L=>{L===!0?B===void 0&&(B=N(()=>u.rules,v,{immediate:!0,deep:!0})):B!==void 0&&(B(),B=void 0)},{immediate:!0}),N(()=>u.lazyRules,v),N(e,L=>{L===!0?c.value=!0:k.value===!0&&u.lazyRules!=="ondemand"&&I()});function F(){y++,t.value=!1,c.value=!1,f.value=!1,d.value=null,I.cancel()}function T(L=u.modelValue){if(u.disable===!0||M.value===!1)return!0;const $=++y,V=t.value!==!0?()=>{c.value=!0}:()=>{},A=(w,x)=>{w===!0&&V(),f.value=w,d.value=x||null,t.value=!1},_=[];for(let w=0;w<u.rules.length;w++){const x=u.rules[w];let j;if(typeof x=="function"?j=x(L,ue):typeof x=="string"&&ue[x]!==void 0&&(j=ue[x](L)),j===!1||typeof j=="string")return A(!0,j),!1;j!==!0&&j!==void 0&&_.push(j)}return _.length===0?(A(!1),!0):(t.value=!0,Promise.all(_).then(w=>{if(w===void 0||Array.isArray(w)===!1||w.length===0)return $===y&&A(!1),!0;const x=w.find(j=>j===!1||typeof j=="string");return $===y&&A(x!==void 0,x),x===void 0},w=>($===y&&(console.error(w),A(!0)),!1)))}const I=Fe(T,0);return ae(()=>{B!==void 0&&B(),I.cancel()}),Object.assign(i,{resetValidation:F,validate:T}),xe(i,"hasError",()=>m.value),{isDirtyModel:c,hasRules:M,hasError:m,errorMessage:H,validate:T,resetValidation:F}}const be=/^on[A-Z]/;function He(e,t){const u={listeners:z({}),attributes:z({})};function i(){const f={},d={};for(const c in e)c!=="class"&&c!=="style"&&be.test(c)===!1&&(f[c]=e[c]);for(const c in t.props)be.test(c)===!0&&(d[c]=t.props[c]);u.attributes.value=f,u.listeners.value=d}return _e(i),i(),u}function se(e){return e!=null&&(""+e).length!==0}const Qe={...Ee,...Ke,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Ye=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function We({requiredForAttr:e=!0,tagProp:t}={}){const{props:u,attrs:i,proxy:f,vnode:d}=J(),c=Be(u,f.$q),y=Le(u.for,e);return{requiredForAttr:e,tag:t===!0?C(()=>u.tag):{value:"label"},isDark:c,editable:C(()=>u.disable!==!0&&u.readonly!==!0),innerLoading:z(!1),focused:z(!1),hasPopupOpen:!1,splitAttrs:He(i,d),targetUid:y,rootRef:z(null),targetRef:z(null),controlRef:z(null)}}function Je(e){const{props:t,emit:u,slots:i,attrs:f,proxy:d}=J(),{$q:c}=d;let y=null;e.hasValue===void 0&&(e.hasValue=C(()=>se(t.modelValue))),e.emitValue===void 0&&(e.emitValue=n=>{u("update:modelValue",n)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:a,onFocusout:l}),Object.assign(e,{clearValue:s,onControlFocusin:a,onControlFocusout:l,focus:x}),e.computedCounter===void 0&&(e.computedCounter=C(()=>{if(t.counter!==!1){const n=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,h=t.maxlength!==void 0?t.maxlength:t.maxValues;return n+(h!==void 0?" / "+h:"")}}));const{isDirtyModel:B,hasRules:M,hasError:k,errorMessage:m,resetValidation:H}=Ue(e.focused,e.innerLoading),v=e.floatingLabel!==void 0?C(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):C(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),F=C(()=>t.bottomSlots===!0||t.hint!==void 0||M.value===!0||t.counter===!0||t.error!==null),T=C(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),I=C(()=>`q-field row no-wrap items-start q-field--${T.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(v.value===!0?" q-field--float":"")+($.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(k.value===!0?" q-field--error":"")+(k.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&F.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),L=C(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(k.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),$=C(()=>t.labelSlot===!0||t.label!==void 0),V=C(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&k.value!==!0?` text-${t.labelColor}`:"")),A=C(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:v.value,modelValue:t.modelValue,emitValue:e.emitValue})),_=C(()=>{const n={};return e.targetUid.value&&(n.for=e.targetUid.value),t.disable===!0&&(n["aria-disabled"]="true"),n});N(()=>t.for,n=>{e.targetUid.value=Re(n,e.requiredForAttr)});function w(){const n=document.activeElement;let h=e.targetRef!==void 0&&e.targetRef.value;h&&(n===null||n.id!==e.targetUid.value)&&(h.hasAttribute("tabindex")===!0||(h=h.querySelector("[tabindex]")),h&&h!==n&&h.focus({preventScroll:!0}))}function x(){de(w)}function j(){$e(w);const n=document.activeElement;n!==null&&e.rootRef.value.contains(n)&&n.blur()}function a(n){y!==null&&(clearTimeout(y),y=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,u("focus",n))}function l(n,h){y!==null&&clearTimeout(y),y=setTimeout(()=>{y=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,u("blur",n)),h!==void 0&&h())})}function s(n){ie(n),c.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),u("update:modelValue",null),u("clear",t.modelValue),Y(()=>{const h=B.value;H(),B.value=h})}function r(){const n=[];return i.prepend!==void 0&&n.push(R("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:G},i.prepend())),n.push(R("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},b())),k.value===!0&&t.noErrorIcon===!1&&n.push(q("error",[R(fe,{name:c.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?n.push(q("inner-loading-append",i.loading!==void 0?i.loading():[R(Oe,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&n.push(q("inner-clearable-append",[R(fe,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||c.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:s})])),i.append!==void 0&&n.push(R("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:G},i.append())),e.getInnerAppend!==void 0&&n.push(q("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&n.push(e.getControlChild()),n}function b(){const n=[];return t.prefix!==void 0&&t.prefix!==null&&n.push(R("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&n.push(e.getShadowControl()),e.getControl!==void 0?n.push(e.getControl()):i.rawControl!==void 0?n.push(i.rawControl()):i.control!==void 0&&n.push(R("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},i.control(A.value))),$.value===!0&&n.push(R("div",{class:V.value},X(i.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&n.push(R("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),n.concat(X(i.default))}function g(){let n,h;k.value===!0?m.value!==null?(n=[R("div",{role:"alert"},m.value)],h=`q--slot-error-${m.value}`):(n=X(i.error),h="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(n=[R("div",t.hint)],h=`q--slot-hint-${t.hint}`):(n=X(i.hint),h="q--slot-hint"));const K=t.counter===!0||i.counter!==void 0;if(t.hideBottomSpace===!0&&K===!1&&n===void 0)return;const S=R("div",{key:h,class:"q-field__messages col"},n);return R("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:G},[t.hideBottomSpace===!0?S:R(Pe,{name:"q-transition--field-message"},()=>S),K===!0?R("div",{class:"q-field__counter"},i.counter!==void 0?i.counter():e.computedCounter.value):null])}function q(n,h){return h===null?null:R("div",{key:n,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},h)}let p=!1;return Ce(()=>{p=!0}),we(()=>{p===!0&&t.autofocus===!0&&d.focus()}),t.autofocus===!0&&ee(()=>{d.focus()}),ae(()=>{y!==null&&clearTimeout(y)}),Object.assign(d,{focus:x,blur:j}),function(){const h=e.getControl===void 0&&i.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,..._.value}:_.value;return R(e.tag.value,{ref:e.rootRef,class:[I.value,f.class],style:f.style,...h},[i.before!==void 0?R("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:G},i.before()):null,R("div",{class:"q-field__inner relative-position col self-stretch"},[R("div",{ref:e.controlRef,class:L.value,tabindex:-1,...e.controlEvents},r()),F.value===!0?g():null]),i.after!==void 0?R("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:G},i.after()):null])}}const pe={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},le={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},qe=Object.keys(le);qe.forEach(e=>{le[e].regex=new RegExp(le[e].pattern)});const Ge=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+qe.join("")+"])|(.)","g"),ye=/[.*+?^${}()|[\]\\]/g,O=String.fromCharCode(1),Xe={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function et(e,t,u,i){let f,d,c,y,B,M;const k=z(null),m=z(v());function H(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}N(()=>e.type+e.autogrow,T),N(()=>e.mask,a=>{if(a!==void 0)I(m.value,!0);else{const l=x(m.value);T(),e.modelValue!==l&&t("update:modelValue",l)}}),N(()=>e.fillMask+e.reverseFillMask,()=>{k.value===!0&&I(m.value,!0)}),N(()=>e.unmaskedValue,()=>{k.value===!0&&I(m.value)});function v(){if(T(),k.value===!0){const a=_(x(e.modelValue));return e.fillMask!==!1?j(a):a}return e.modelValue}function F(a){if(a<f.length)return f.slice(-a);let l="",s=f;const r=s.indexOf(O);if(r>-1){for(let b=a-s.length;b>0;b--)l+=O;s=s.slice(0,r)+l+s.slice(r)}return s}function T(){if(k.value=e.mask!==void 0&&e.mask.length!==0&&H(),k.value===!1){y=void 0,f="",d="";return}const a=pe[e.mask]===void 0?e.mask:pe[e.mask],l=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",s=l.replace(ye,"\\$&"),r=[],b=[],g=[];let q=e.reverseFillMask===!0,p="",n="";a.replace(Ge,(P,o,E,Q,U)=>{if(Q!==void 0){const Z=le[Q];g.push(Z),n=Z.negate,q===!0&&(b.push("(?:"+n+"+)?("+Z.pattern+"+)?(?:"+n+"+)?("+Z.pattern+"+)?"),q=!1),b.push("(?:"+n+"+)?("+Z.pattern+")?")}else if(E!==void 0)p="\\"+(E==="\\"?"":E),g.push(E),r.push("([^"+p+"]+)?"+p+"?");else{const Z=o!==void 0?o:U;p=Z==="\\"?"\\\\\\\\":Z.replace(ye,"\\\\$&"),g.push(Z),r.push("([^"+p+"]+)?"+p+"?")}});const h=new RegExp("^"+r.join("")+"("+(p===""?".":"[^"+p+"]")+"+)?"+(p===""?"":"["+p+"]*")+"$"),K=b.length-1,S=b.map((P,o)=>o===0&&e.reverseFillMask===!0?new RegExp("^"+s+"*"+P):o===K?new RegExp("^"+P+"("+(n===""?".":n)+"+)?"+(e.reverseFillMask===!0?"$":s+"*")):new RegExp("^"+P));c=g,y=P=>{const o=h.exec(e.reverseFillMask===!0?P:P.slice(0,g.length+1));o!==null&&(P=o.slice(1).join(""));const E=[],Q=S.length;for(let U=0,Z=P;U<Q;U++){const W=S[U].exec(Z);if(W===null)break;Z=Z.slice(W.shift().length),E.push(...W)}return E.length!==0?E.join(""):P},f=g.map(P=>typeof P=="string"?P:O).join(""),d=f.split(O).join(l)}function I(a,l,s){const r=i.value,b=r.selectionEnd,g=r.value.length-b,q=x(a);l===!0&&T();const p=_(q),n=e.fillMask!==!1?j(p):p,h=m.value!==n;r.value!==n&&(r.value=n),h===!0&&(m.value=n),document.activeElement===r&&Y(()=>{if(n===d){const S=e.reverseFillMask===!0?d.length:0;r.setSelectionRange(S,S,"forward");return}if(s==="insertFromPaste"&&e.reverseFillMask!==!0){const S=r.selectionEnd;let P=b-1;for(let o=B;o<=P&&o<S;o++)f[o]!==O&&P++;$.right(r,P);return}if(["deleteContentBackward","deleteContentForward"].indexOf(s)>-1){const S=e.reverseFillMask===!0?b===0?n.length>p.length?1:0:Math.max(0,n.length-(n===d?0:Math.min(p.length,g)+1))+1:b;r.setSelectionRange(S,S,"forward");return}if(e.reverseFillMask===!0)if(h===!0){const S=Math.max(0,n.length-(n===d?0:Math.min(p.length,g+1)));S===1&&b===1?r.setSelectionRange(S,S,"forward"):$.rightReverse(r,S)}else{const S=n.length-g;r.setSelectionRange(S,S,"backward")}else if(h===!0){const S=Math.max(0,f.indexOf(O),Math.min(p.length,b)-1);$.right(r,S)}else{const S=b-1;$.right(r,S)}});const K=e.unmaskedValue===!0?x(n):n;String(e.modelValue)!==K&&(e.modelValue!==null||K!=="")&&u(K,!0)}function L(a,l,s){const r=_(x(a.value));l=Math.max(0,f.indexOf(O),Math.min(r.length,l)),B=l,a.setSelectionRange(l,s,"forward")}const $={left(a,l){const s=f.slice(l-1).indexOf(O)===-1;let r=Math.max(0,l-1);for(;r>=0;r--)if(f[r]===O){l=r,s===!0&&l++;break}if(r<0&&f[l]!==void 0&&f[l]!==O)return $.right(a,0);l>=0&&a.setSelectionRange(l,l,"backward")},right(a,l){const s=a.value.length;let r=Math.min(s,l+1);for(;r<=s;r++)if(f[r]===O){l=r;break}else f[r-1]===O&&(l=r);if(r>s&&f[l-1]!==void 0&&f[l-1]!==O)return $.left(a,s);a.setSelectionRange(l,l,"forward")},leftReverse(a,l){const s=F(a.value.length);let r=Math.max(0,l-1);for(;r>=0;r--)if(s[r-1]===O){l=r;break}else if(s[r]===O&&(l=r,r===0))break;if(r<0&&s[l]!==void 0&&s[l]!==O)return $.rightReverse(a,0);l>=0&&a.setSelectionRange(l,l,"backward")},rightReverse(a,l){const s=a.value.length,r=F(s),b=r.slice(0,l+1).indexOf(O)===-1;let g=Math.min(s,l+1);for(;g<=s;g++)if(r[g-1]===O){l=g,l>0&&b===!0&&l--;break}if(g>s&&r[l-1]!==void 0&&r[l-1]!==O)return $.leftReverse(a,s);a.setSelectionRange(l,l,"forward")}};function V(a){t("click",a),M=void 0}function A(a){if(t("keydown",a),Te(a)===!0||a.altKey===!0)return;const l=i.value,s=l.selectionStart,r=l.selectionEnd;if(a.shiftKey||(M=void 0),a.keyCode===37||a.keyCode===39){a.shiftKey&&M===void 0&&(M=l.selectionDirection==="forward"?s:r);const b=$[(a.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(a.preventDefault(),b(l,M===s?r:s),a.shiftKey){const g=l.selectionStart;l.setSelectionRange(Math.min(M,g),Math.max(M,g),"forward")}}else a.keyCode===8&&e.reverseFillMask!==!0&&s===r?($.left(l,s),l.setSelectionRange(l.selectionStart,r,"backward")):a.keyCode===46&&e.reverseFillMask===!0&&s===r&&($.rightReverse(l,r),l.setSelectionRange(s,l.selectionEnd,"forward"))}function _(a){if(a==null||a==="")return"";if(e.reverseFillMask===!0)return w(a);const l=c;let s=0,r="";for(let b=0;b<l.length;b++){const g=a[s],q=l[b];if(typeof q=="string")r+=q,g===q&&s++;else if(g!==void 0&&q.regex.test(g))r+=q.transform!==void 0?q.transform(g):g,s++;else return r}return r}function w(a){const l=c,s=f.indexOf(O);let r=a.length-1,b="";for(let g=l.length-1;g>=0&&r>-1;g--){const q=l[g];let p=a[r];if(typeof q=="string")b=q+b,p===q&&r--;else if(p!==void 0&&q.regex.test(p))do b=(q.transform!==void 0?q.transform(p):p)+b,r--,p=a[r];while(s===g&&p!==void 0&&q.regex.test(p));else return b}return b}function x(a){return typeof a!="string"||y===void 0?typeof a=="number"?y(""+a):a:y(a)}function j(a){return d.length-a.length<=0?a:e.reverseFillMask===!0&&a.length!==0?d.slice(0,-a.length)+a:a+d.slice(a.length)}return{innerValue:m,hasMask:k,moveCursorForPaste:L,updateMaskValue:I,onMaskedKeydown:A,onMaskedClick:V}}const tt={name:String};function nt(e){return C(()=>e.name||e.for)}function ot(e,t){function u(){const i=e.modelValue;try{const f="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(i)===i&&("length"in i?Array.from(i):[i]).forEach(d=>{f.items.add(d)}),{files:f.files}}catch{return{files:void 0}}}return t===!0?C(()=>{if(e.type==="file")return u()}):C(u)}const lt=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,at=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,rt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,ut=/[a-z0-9_ -]$/i;function it(e){return function(u){if(u.type==="compositionend"||u.type==="change"){if(u.target.qComposing!==!0)return;u.target.qComposing=!1,e(u)}else u.type==="compositionupdate"&&u.target.qComposing!==!0&&typeof u.data=="string"&&(Ie.is.firefox===!0?ut.test(u.data)===!1:lt.test(u.data)===!0||at.test(u.data)===!0||rt.test(u.data)===!0)===!0&&(u.target.qComposing=!0)}}var dt=Se({name:"QInput",inheritAttrs:!1,props:{...Qe,...Xe,...tt,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Ye,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:u}){const{proxy:i}=J(),{$q:f}=i,d={};let c=NaN,y,B,M=null,k;const m=z(null),H=nt(e),{innerValue:v,hasMask:F,moveCursorForPaste:T,updateMaskValue:I,onMaskedKeydown:L,onMaskedClick:$}=et(e,t,p,m),V=ot(e,!0),A=C(()=>se(v.value)),_=it(g),w=We(),x=C(()=>e.type==="textarea"||e.autogrow===!0),j=C(()=>x.value===!0||["text","search","url","tel","password"].includes(e.type)),a=C(()=>{const o={...w.splitAttrs.listeners.value,onInput:g,onPaste:b,onChange:h,onBlur:K,onFocus:ce};return o.onCompositionstart=o.onCompositionupdate=o.onCompositionend=_,F.value===!0&&(o.onKeydown=L,o.onClick=$),e.autogrow===!0&&(o.onAnimationend=q),o}),l=C(()=>{const o={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:H.value,...w.splitAttrs.attributes.value,id:w.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return x.value===!1&&(o.type=e.type),e.autogrow===!0&&(o.rows=1),o});N(()=>e.type,()=>{m.value&&(m.value.value=e.modelValue)}),N(()=>e.modelValue,o=>{if(F.value===!0){if(B===!0&&(B=!1,String(o)===c))return;I(o)}else v.value!==o&&(v.value=o,e.type==="number"&&d.hasOwnProperty("value")===!0&&(y===!0?y=!1:delete d.value));e.autogrow===!0&&Y(n)}),N(()=>e.autogrow,o=>{o===!0?Y(n):m.value!==null&&u.rows>0&&(m.value.style.height="auto")}),N(()=>e.dense,()=>{e.autogrow===!0&&Y(n)});function s(){de(()=>{const o=document.activeElement;m.value!==null&&m.value!==o&&(o===null||o.id!==w.targetUid.value)&&m.value.focus({preventScroll:!0})})}function r(){m.value!==null&&m.value.select()}function b(o){if(F.value===!0&&e.reverseFillMask!==!0){const E=o.target;T(E,E.selectionStart,E.selectionEnd)}t("paste",o)}function g(o){if(!o||!o.target)return;if(e.type==="file"){t("update:modelValue",o.target.files);return}const E=o.target.value;if(o.target.qComposing===!0){d.value=E;return}if(F.value===!0)I(E,!1,o.inputType);else if(p(E),j.value===!0&&o.target===document.activeElement){const{selectionStart:Q,selectionEnd:U}=o.target;Q!==void 0&&U!==void 0&&Y(()=>{o.target===document.activeElement&&E.indexOf(o.target.value)===0&&o.target.setSelectionRange(Q,U)})}e.autogrow===!0&&n()}function q(o){t("animationend",o),n()}function p(o,E){k=()=>{M=null,e.type!=="number"&&d.hasOwnProperty("value")===!0&&delete d.value,e.modelValue!==o&&c!==o&&(c=o,E===!0&&(B=!0),t("update:modelValue",o),Y(()=>{c===o&&(c=NaN)})),k=void 0},e.type==="number"&&(y=!0,d.value=o),e.debounce!==void 0?(M!==null&&clearTimeout(M),d.value=o,M=setTimeout(k,e.debounce)):k()}function n(){requestAnimationFrame(()=>{const o=m.value;if(o!==null){const E=o.parentNode.style,{scrollTop:Q}=o,{overflowY:U,maxHeight:Z}=f.platform.is.firefox===!0?{}:window.getComputedStyle(o),W=U!==void 0&&U!=="scroll";W===!0&&(o.style.overflowY="hidden"),E.marginBottom=o.scrollHeight-1+"px",o.style.height="1px",o.style.height=o.scrollHeight+"px",W===!0&&(o.style.overflowY=parseInt(Z,10)<o.scrollHeight?"auto":"hidden"),E.marginBottom="",o.scrollTop=Q}})}function h(o){_(o),M!==null&&(clearTimeout(M),M=null),k!==void 0&&k(),t("change",o.target.value)}function K(o){o!==void 0&&ce(o),M!==null&&(clearTimeout(M),M=null),k!==void 0&&k(),y=!1,B=!1,delete d.value,e.type!=="file"&&setTimeout(()=>{m.value!==null&&(m.value.value=v.value!==void 0?v.value:"")})}function S(){return d.hasOwnProperty("value")===!0?d.value:v.value!==void 0?v.value:""}ae(()=>{K()}),ee(()=>{e.autogrow===!0&&n()}),Object.assign(w,{innerValue:v,fieldClass:C(()=>`q-${x.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:C(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:m,emitValue:p,hasValue:A,floatingLabel:C(()=>A.value===!0&&(e.type!=="number"||isNaN(v.value)===!1)||se(e.displayValue)),getControl:()=>R(x.value===!0?"textarea":"input",{ref:m,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...l.value,...a.value,...e.type!=="file"?{value:S()}:V.value}),getShadowControl:()=>R("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(x.value===!0?"":" text-no-wrap")},[R("span",{class:"invisible"},S()),R("span",e.shadowText)])});const P=Je(w);return Object.assign(i,{focus:s,select:r,getNativeElement:()=>m.value}),xe(i,"nativeEl",()=>m.value),P}}),ft=Se({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(e,{slots:t,emit:u}){const i=J(),f=z(null);let d=0;const c=[];function y(v){const F=typeof v=="boolean"?v:e.noErrorFocus!==!0,T=++d,I=(V,A)=>{u("validation"+(V===!0?"Success":"Error"),A)},L=V=>{const A=V.validate();return typeof A.then=="function"?A.then(_=>({valid:_,comp:V}),_=>({valid:!1,comp:V,err:_})):Promise.resolve({valid:A,comp:V})};return(e.greedy===!0?Promise.all(c.map(L)).then(V=>V.filter(A=>A.valid!==!0)):c.reduce((V,A)=>V.then(()=>L(A).then(_=>{if(_.valid===!1)return Promise.reject(_)})),Promise.resolve()).catch(V=>[V])).then(V=>{if(V===void 0||V.length===0)return T===d&&I(!0),!0;if(T===d){const{comp:A,err:_}=V[0];if(_!==void 0&&console.error(_),I(!1,A),F===!0){const w=V.find(({comp:x})=>typeof x.focus=="function"&&De(x.$)===!1);w!==void 0&&w.comp.focus()}}return!1})}function B(){d++,c.forEach(v=>{typeof v.resetValidation=="function"&&v.resetValidation()})}function M(v){v!==void 0&&ie(v);const F=d+1;y().then(T=>{F===d&&T===!0&&(e.onSubmit!==void 0?u("submit",v):v!==void 0&&v.target!==void 0&&typeof v.target.submit=="function"&&v.target.submit())})}function k(v){v!==void 0&&ie(v),u("reset"),Y(()=>{B(),e.autofocus===!0&&e.noResetFocus!==!0&&m()})}function m(){de(()=>{if(f.value===null)return;const v=f.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||f.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||f.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(f.value.querySelectorAll("[tabindex]"),F=>F.tabIndex>-1);v!=null&&v.focus({preventScroll:!0})})}je(ke,{bindComponent(v){c.push(v)},unbindComponent(v){const F=c.indexOf(v);F>-1&&c.splice(F,1)}});let H=!1;return Ce(()=>{H=!0}),we(()=>{H===!0&&e.autofocus===!0&&m()}),ee(()=>{e.autofocus===!0&&m()}),Object.assign(i.proxy,{validate:y,resetValidation:B,submit:M,reset:k,focus:m,getValidationComponents:()=>c}),()=>R("form",{class:"q-form",ref:f,onSubmit:M,onReset:k},X(t.default))}});export{dt as Q,Qe as a,Ye as b,Je as c,We as d,tt as e,nt as f,se as g,it as h,ft as i,Me as u};