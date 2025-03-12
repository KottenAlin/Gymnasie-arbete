const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CK9JjIFK.js","./vA54R5Sf.js","./DYtzTcOL.js"])))=>i.map(i=>d[i]);
var cE=Object.defineProperty;var lE=(t,e,n)=>e in t?cE(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var jn=(t,e,n)=>lE(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function nu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const De={},ps=[],on=()=>{},uE=()=>!1,zi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ru=t=>t.startsWith("onUpdate:"),tt=Object.assign,su=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},hE=Object.prototype.hasOwnProperty,Ce=(t,e)=>hE.call(t,e),ue=Array.isArray,gs=t=>Gi(t)==="[object Map]",lg=t=>Gi(t)==="[object Set]",fE=t=>Gi(t)==="[object RegExp]",fe=t=>typeof t=="function",He=t=>typeof t=="string",Dn=t=>typeof t=="symbol",xe=t=>t!==null&&typeof t=="object",ug=t=>(xe(t)||fe(t))&&fe(t.then)&&fe(t.catch),hg=Object.prototype.toString,Gi=t=>hg.call(t),dE=t=>Gi(t).slice(8,-1),fg=t=>Gi(t)==="[object Object]",iu=t=>He(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ms=nu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Va=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},pE=/-(\w)/g,jt=Va(t=>t.replace(pE,(e,n)=>n?n.toUpperCase():"")),gE=/\B([A-Z])/g,Wr=Va(t=>t.replace(gE,"-$1").toLowerCase()),xa=Va(t=>t.charAt(0).toUpperCase()+t.slice(1)),Tc=Va(t=>t?`on${xa(t)}`:""),sr=(t,e)=>!Object.is(t,e),gi=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},dg=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},mE=t=>{const e=parseFloat(t);return isNaN(e)?t:e},pg=t=>{const e=He(t)?Number(t):NaN;return isNaN(e)?t:e};let Ef;const Ma=()=>Ef||(Ef=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ou(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=He(r)?EE(r):ou(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(He(t)||xe(t))return t}const _E=/;(?![^(]*\))/g,yE=/:([^]+)/,vE=/\/\*[^]*?\*\//g;function EE(t){const e={};return t.replace(vE,"").split(_E).forEach(n=>{if(n){const r=n.split(yE);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function au(t){let e="";if(He(t))e=t;else if(ue(t))for(let n=0;n<t.length;n++){const r=au(t[n]);r&&(e+=r+" ")}else if(xe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const TE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wE=nu(TE);function gg(t){return!!t||t===""}const mg=t=>!!(t&&t.__v_isRef===!0),Zc=t=>He(t)?t:t==null?"":ue(t)||xe(t)&&(t.toString===hg||!fe(t.toString))?mg(t)?Zc(t.value):JSON.stringify(t,_g,2):String(t),_g=(t,e)=>mg(e)?_g(t,e.value):gs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[wc(r,i)+" =>"]=s,n),{})}:lg(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>wc(n))}:Dn(e)?wc(e):xe(e)&&!ue(e)&&!fg(e)?String(e):e,wc=(t,e="")=>{var n;return Dn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Nt;class yg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Nt,!e&&Nt&&(this.index=(Nt.scopes||(Nt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Nt;try{return Nt=this,e()}finally{Nt=n}}}on(){Nt=this}off(){Nt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function IE(t){return new yg(t)}function vg(){return Nt}let Ne;const Ic=new WeakSet;class Eg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Nt&&Nt.active&&Nt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ic.has(this)&&(Ic.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||wg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Tf(this),Ig(this);const e=Ne,n=Qt;Ne=this,Qt=!0;try{return this.fn()}finally{bg(this),Ne=e,Qt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)uu(e);this.deps=this.depsTail=void 0,Tf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ic.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){el(this)&&this.run()}get dirty(){return el(this)}}let Tg=0,mi,_i;function wg(t,e=!1){if(t.flags|=8,e){t.next=_i,_i=t;return}t.next=mi,mi=t}function cu(){Tg++}function lu(){if(--Tg>0)return;if(_i){let e=_i;for(_i=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;mi;){let e=mi;for(mi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Ig(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function bg(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),uu(r),bE(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function el(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ag(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Ag(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ki))return;t.globalVersion=ki;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!el(t)){t.flags&=-3;return}const n=Ne,r=Qt;Ne=t,Qt=!0;try{Ig(t);const s=t.fn(t._value);(e.version===0||sr(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ne=n,Qt=r,bg(t),t.flags&=-3}}function uu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)uu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function bE(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Qt=!0;const Rg=[];function vr(){Rg.push(Qt),Qt=!1}function Er(){const t=Rg.pop();Qt=t===void 0?!0:t}function Tf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ne;Ne=void 0;try{e()}finally{Ne=n}}}let ki=0;class AE{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class hu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ne||!Qt||Ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ne)n=this.activeLink=new AE(Ne,this),Ne.deps?(n.prevDep=Ne.depsTail,Ne.depsTail.nextDep=n,Ne.depsTail=n):Ne.deps=Ne.depsTail=n,Sg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ne.depsTail,n.nextDep=void 0,Ne.depsTail.nextDep=n,Ne.depsTail=n,Ne.deps===n&&(Ne.deps=r)}return n}trigger(e){this.version++,ki++,this.notify(e)}notify(e){cu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{lu()}}}function Sg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Sg(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ea=new WeakMap,Vr=Symbol(""),tl=Symbol(""),Oi=Symbol("");function mt(t,e,n){if(Qt&&Ne){let r=ea.get(t);r||ea.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new hu),s.map=r,s.key=n),s.track()}}function En(t,e,n,r,s,i){const o=ea.get(t);if(!o){ki++;return}const c=l=>{l&&l.trigger()};if(cu(),e==="clear")o.forEach(c);else{const l=ue(t),h=l&&iu(n);if(l&&n==="length"){const u=Number(r);o.forEach((d,g)=>{(g==="length"||g===Oi||!Dn(g)&&g>=u)&&c(d)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),h&&c(o.get(Oi)),e){case"add":l?h&&c(o.get("length")):(c(o.get(Vr)),gs(t)&&c(o.get(tl)));break;case"delete":l||(c(o.get(Vr)),gs(t)&&c(o.get(tl)));break;case"set":gs(t)&&c(o.get(Vr));break}}lu()}function RE(t,e){const n=ea.get(t);return n&&n.get(e)}function rs(t){const e=Ae(t);return e===t?e:(mt(e,"iterate",Oi),Jt(t)?e:e.map(bt))}function fu(t){return mt(t=Ae(t),"iterate",Oi),t}const SE={__proto__:null,[Symbol.iterator](){return bc(this,Symbol.iterator,bt)},concat(...t){return rs(this).concat(...t.map(e=>ue(e)?rs(e):e))},entries(){return bc(this,"entries",t=>(t[1]=bt(t[1]),t))},every(t,e){return mn(this,"every",t,e,void 0,arguments)},filter(t,e){return mn(this,"filter",t,e,n=>n.map(bt),arguments)},find(t,e){return mn(this,"find",t,e,bt,arguments)},findIndex(t,e){return mn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return mn(this,"findLast",t,e,bt,arguments)},findLastIndex(t,e){return mn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return mn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ac(this,"includes",t)},indexOf(...t){return Ac(this,"indexOf",t)},join(t){return rs(this).join(t)},lastIndexOf(...t){return Ac(this,"lastIndexOf",t)},map(t,e){return mn(this,"map",t,e,void 0,arguments)},pop(){return oi(this,"pop")},push(...t){return oi(this,"push",t)},reduce(t,...e){return wf(this,"reduce",t,e)},reduceRight(t,...e){return wf(this,"reduceRight",t,e)},shift(){return oi(this,"shift")},some(t,e){return mn(this,"some",t,e,void 0,arguments)},splice(...t){return oi(this,"splice",t)},toReversed(){return rs(this).toReversed()},toSorted(t){return rs(this).toSorted(t)},toSpliced(...t){return rs(this).toSpliced(...t)},unshift(...t){return oi(this,"unshift",t)},values(){return bc(this,"values",bt)}};function bc(t,e,n){const r=fu(t),s=r[e]();return r!==t&&!Jt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const CE=Array.prototype;function mn(t,e,n,r,s,i){const o=fu(t),c=o!==t&&!Jt(t),l=o[e];if(l!==CE[e]){const d=l.apply(t,i);return c?bt(d):d}let h=n;o!==t&&(c?h=function(d,g){return n.call(this,bt(d),g,t)}:n.length>2&&(h=function(d,g){return n.call(this,d,g,t)}));const u=l.call(o,h,r);return c&&s?s(u):u}function wf(t,e,n,r){const s=fu(t);let i=n;return s!==t&&(Jt(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,bt(c),l,t)}),s[e](i,...r)}function Ac(t,e,n){const r=Ae(t);mt(r,"iterate",Oi);const s=r[e](...n);return(s===-1||s===!1)&&gu(n[0])?(n[0]=Ae(n[0]),r[e](...n)):s}function oi(t,e,n=[]){vr(),cu();const r=Ae(t)[e].apply(t,n);return lu(),Er(),r}const PE=nu("__proto__,__v_isRef,__isVue"),Cg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Dn));function kE(t){Dn(t)||(t=String(t));const e=Ae(this);return mt(e,"has",t),e.hasOwnProperty(t)}class Pg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?BE:Dg:i?Ng:Og).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ue(e);if(!s){let l;if(o&&(l=SE[n]))return l;if(n==="hasOwnProperty")return kE}const c=Reflect.get(e,n,et(e)?e:r);return(Dn(n)?Cg.has(n):PE(n))||(s||mt(e,"get",n),i)?c:et(c)?o&&iu(n)?c:c.value:xe(c)?s?Vg(c):Tr(c):c}}class kg extends Pg{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=fr(i);if(!Jt(r)&&!fr(r)&&(i=Ae(i),r=Ae(r)),!ue(e)&&et(i)&&!et(r))return l?!1:(i.value=r,!0)}const o=ue(e)&&iu(n)?Number(n)<e.length:Ce(e,n),c=Reflect.set(e,n,r,et(e)?e:s);return e===Ae(s)&&(o?sr(r,i)&&En(e,"set",n,r):En(e,"add",n,r)),c}deleteProperty(e,n){const r=Ce(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&En(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Dn(n)||!Cg.has(n))&&mt(e,"has",n),r}ownKeys(e){return mt(e,"iterate",ue(e)?"length":Vr),Reflect.ownKeys(e)}}class OE extends Pg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const NE=new kg,DE=new OE,VE=new kg(!0);const nl=t=>t,bo=t=>Reflect.getPrototypeOf(t);function xE(t,e,n){return function(...r){const s=this.__v_raw,i=Ae(s),o=gs(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,h=s[t](...r),u=n?nl:e?rl:bt;return!e&&mt(i,"iterate",l?tl:Vr),{next(){const{value:d,done:g}=h.next();return g?{value:d,done:g}:{value:c?[u(d[0]),u(d[1])]:u(d),done:g}},[Symbol.iterator](){return this}}}}function Ao(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function ME(t,e){const n={get(s){const i=this.__v_raw,o=Ae(i),c=Ae(s);t||(sr(s,c)&&mt(o,"get",s),mt(o,"get",c));const{has:l}=bo(o),h=e?nl:t?rl:bt;if(l.call(o,s))return h(i.get(s));if(l.call(o,c))return h(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&mt(Ae(s),"iterate",Vr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Ae(i),c=Ae(s);return t||(sr(s,c)&&mt(o,"has",s),mt(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Ae(c),h=e?nl:t?rl:bt;return!t&&mt(l,"iterate",Vr),c.forEach((u,d)=>s.call(i,h(u),h(d),o))}};return tt(n,t?{add:Ao("add"),set:Ao("set"),delete:Ao("delete"),clear:Ao("clear")}:{add(s){!e&&!Jt(s)&&!fr(s)&&(s=Ae(s));const i=Ae(this);return bo(i).has.call(i,s)||(i.add(s),En(i,"add",s,s)),this},set(s,i){!e&&!Jt(i)&&!fr(i)&&(i=Ae(i));const o=Ae(this),{has:c,get:l}=bo(o);let h=c.call(o,s);h||(s=Ae(s),h=c.call(o,s));const u=l.call(o,s);return o.set(s,i),h?sr(i,u)&&En(o,"set",s,i):En(o,"add",s,i),this},delete(s){const i=Ae(this),{has:o,get:c}=bo(i);let l=o.call(i,s);l||(s=Ae(s),l=o.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&En(i,"delete",s,void 0),h},clear(){const s=Ae(this),i=s.size!==0,o=s.clear();return i&&En(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=xE(s,t,e)}),n}function du(t,e){const n=ME(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ce(n,s)&&s in r?n:r,s,i)}const LE={get:du(!1,!1)},FE={get:du(!1,!0)},UE={get:du(!0,!1)};const Og=new WeakMap,Ng=new WeakMap,Dg=new WeakMap,BE=new WeakMap;function jE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $E(t){return t.__v_skip||!Object.isExtensible(t)?0:jE(dE(t))}function Tr(t){return fr(t)?t:pu(t,!1,NE,LE,Og)}function Tn(t){return pu(t,!1,VE,FE,Ng)}function Vg(t){return pu(t,!0,DE,UE,Dg)}function pu(t,e,n,r,s){if(!xe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=$E(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function _s(t){return fr(t)?_s(t.__v_raw):!!(t&&t.__v_isReactive)}function fr(t){return!!(t&&t.__v_isReadonly)}function Jt(t){return!!(t&&t.__v_isShallow)}function gu(t){return t?!!t.__v_raw:!1}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function HE(t){return!Ce(t,"__v_skip")&&Object.isExtensible(t)&&dg(t,"__v_skip",!0),t}const bt=t=>xe(t)?Tr(t):t,rl=t=>xe(t)?Vg(t):t;function et(t){return t?t.__v_isRef===!0:!1}function An(t){return xg(t,!1)}function Ni(t){return xg(t,!0)}function xg(t,e){return et(t)?t:new qE(t,e)}class qE{constructor(e,n){this.dep=new hu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ae(e),this._value=n?e:bt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Jt(e)||fr(e);e=r?e:Ae(e),sr(e,n)&&(this._rawValue=e,this._value=r?e:bt(e),this.dep.trigger())}}function ze(t){return et(t)?t.value:t}const WE={get:(t,e,n)=>e==="__v_raw"?t:ze(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return et(s)&&!et(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Mg(t){return _s(t)?t:new Proxy(t,WE)}class KE{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return RE(Ae(this._object),this._key)}}class zE{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function GE(t,e,n){return et(t)?t:fe(t)?new zE(t):xe(t)&&arguments.length>1?QE(t,e,n):An(t)}function QE(t,e,n){const r=t[e];return et(r)?r:new KE(t,e,n)}class JE{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new hu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ki-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ne!==this)return wg(this,!0),!0}get value(){const e=this.dep.track();return Ag(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function XE(t,e,n=!1){let r,s;return fe(t)?r=t:(r=t.get,s=t.set),new JE(r,s,n)}const Ro={},ta=new WeakMap;let Or;function YE(t,e=!1,n=Or){if(n){let r=ta.get(n);r||ta.set(n,r=[]),r.push(t)}}function ZE(t,e,n=De){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,h=k=>s?k:Jt(k)||s===!1||s===0?Jn(k,1):Jn(k);let u,d,g,m,I=!1,b=!1;if(et(t)?(d=()=>t.value,I=Jt(t)):_s(t)?(d=()=>h(t),I=!0):ue(t)?(b=!0,I=t.some(k=>_s(k)||Jt(k)),d=()=>t.map(k=>{if(et(k))return k.value;if(_s(k))return h(k);if(fe(k))return l?l(k,2):k()})):fe(t)?e?d=l?()=>l(t,2):t:d=()=>{if(g){vr();try{g()}finally{Er()}}const k=Or;Or=u;try{return l?l(t,3,[m]):t(m)}finally{Or=k}}:d=on,e&&s){const k=d,V=s===!0?1/0:s;d=()=>Jn(k(),V)}const O=vg(),D=()=>{u.stop(),O&&O.active&&su(O.effects,u)};if(i&&e){const k=e;e=(...V)=>{k(...V),D()}}let N=b?new Array(t.length).fill(Ro):Ro;const w=k=>{if(!(!(u.flags&1)||!u.dirty&&!k))if(e){const V=u.run();if(s||I||(b?V.some((F,R)=>sr(F,N[R])):sr(V,N))){g&&g();const F=Or;Or=u;try{const R=[V,N===Ro?void 0:b&&N[0]===Ro?[]:N,m];l?l(e,3,R):e(...R),N=V}finally{Or=F}}}else u.run()};return c&&c(w),u=new Eg(d),u.scheduler=o?()=>o(w,!1):w,m=k=>YE(k,!1,u),g=u.onStop=()=>{const k=ta.get(u);if(k){if(l)l(k,4);else for(const V of k)V();ta.delete(u)}},e?r?w(!0):N=u.run():o?o(w.bind(null,!0),!0):u.run(),D.pause=u.pause.bind(u),D.resume=u.resume.bind(u),D.stop=D,D}function Jn(t,e=1/0,n){if(e<=0||!xe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,et(t))Jn(t.value,e,n);else if(ue(t))for(let r=0;r<t.length;r++)Jn(t[r],e,n);else if(lg(t)||gs(t))t.forEach(r=>{Jn(r,e,n)});else if(fg(t)){for(const r in t)Jn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Jn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Qi(t,e,n,r){try{return r?t(...r):t()}catch(s){Bs(s,e,n)}}function Xt(t,e,n,r){if(fe(t)){const s=Qi(t,e,n,r);return s&&ug(s)&&s.catch(i=>{Bs(i,e,n)}),s}if(ue(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Xt(t[i],e,n,r));return s}}function Bs(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||De;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const u=c.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,l,h)===!1)return}c=c.parent}if(i){vr(),Qi(i,null,10,[t,l,h]),Er();return}}eT(t,n,s,r,o)}function eT(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const At=[];let tn=-1;const ys=[];let qn=null,is=0;const Lg=Promise.resolve();let na=null;function js(t){const e=na||Lg;return t?e.then(this?t.bind(this):t):e}function tT(t){let e=tn+1,n=At.length;for(;e<n;){const r=e+n>>>1,s=At[r],i=Di(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function mu(t){if(!(t.flags&1)){const e=Di(t),n=At[At.length-1];!n||!(t.flags&2)&&e>=Di(n)?At.push(t):At.splice(tT(e),0,t),t.flags|=1,Fg()}}function Fg(){na||(na=Lg.then(Ug))}function sl(t){ue(t)?ys.push(...t):qn&&t.id===-1?qn.splice(is+1,0,t):t.flags&1||(ys.push(t),t.flags|=1),Fg()}function If(t,e,n=tn+1){for(;n<At.length;n++){const r=At[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;At.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function ra(t){if(ys.length){const e=[...new Set(ys)].sort((n,r)=>Di(n)-Di(r));if(ys.length=0,qn){qn.push(...e);return}for(qn=e,is=0;is<qn.length;is++){const n=qn[is];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}qn=null,is=0}}const Di=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ug(t){try{for(tn=0;tn<At.length;tn++){const e=At[tn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Qi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;tn<At.length;tn++){const e=At[tn];e&&(e.flags&=-2)}tn=-1,At.length=0,ra(),na=null,(At.length||ys.length)&&Ug()}}let ct=null,Bg=null;function sa(t){const e=ct;return ct=t,Bg=t&&t.type.__scopeId||null,e}function _u(t,e=ct,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&xf(-1);const i=sa(e);let o;try{o=t(...s)}finally{sa(i),r._d&&xf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function nn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(vr(),Xt(l,n,8,[t.el,c,t,e]),Er())}}const nT=Symbol("_vte"),jg=t=>t.__isTeleport,Wn=Symbol("_leaveCb"),So=Symbol("_enterCb");function rT(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return vu(()=>{t.isMounted=!0}),Eu(()=>{t.isUnmounting=!0}),t}const Mt=[Function,Array],$g={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Mt,onEnter:Mt,onAfterEnter:Mt,onEnterCancelled:Mt,onBeforeLeave:Mt,onLeave:Mt,onAfterLeave:Mt,onLeaveCancelled:Mt,onBeforeAppear:Mt,onAppear:Mt,onAfterAppear:Mt,onAppearCancelled:Mt},Hg=t=>{const e=t.subTree;return e.component?Hg(e.component):e},sT={name:"BaseTransition",props:$g,setup(t,{slots:e}){const n=bu(),r=rT();return()=>{const s=e.default&&Kg(e.default(),!0);if(!s||!s.length)return;const i=qg(s),o=Ae(t),{mode:c}=o;if(r.isLeaving)return Rc(i);const l=bf(i);if(!l)return Rc(i);let h=il(l,o,r,n,d=>h=d);l.type!==ot&&Rs(l,h);let u=n.subTree&&bf(n.subTree);if(u&&u.type!==ot&&!zt(l,u)&&Hg(n).type!==ot){let d=il(u,o,r,n);if(Rs(u,d),c==="out-in"&&l.type!==ot)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},Rc(i);c==="in-out"&&l.type!==ot?d.delayLeave=(g,m,I)=>{const b=Wg(r,u);b[String(u.key)]=u,g[Wn]=()=>{m(),g[Wn]=void 0,delete h.delayedLeave,u=void 0},h.delayedLeave=()=>{I(),delete h.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return i}}};function qg(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==ot){e=n;break}}return e}const iT=sT;function Wg(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function il(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:h,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:g,onLeave:m,onAfterLeave:I,onLeaveCancelled:b,onBeforeAppear:O,onAppear:D,onAfterAppear:N,onAppearCancelled:w}=e,k=String(t.key),V=Wg(n,t),F=(y,E)=>{y&&Xt(y,r,9,E)},R=(y,E)=>{const P=E[1];F(y,E),ue(y)?y.every(S=>S.length<=1)&&P():y.length<=1&&P()},v={mode:o,persisted:c,beforeEnter(y){let E=l;if(!n.isMounted)if(i)E=O||l;else return;y[Wn]&&y[Wn](!0);const P=V[k];P&&zt(t,P)&&P.el[Wn]&&P.el[Wn](),F(E,[y])},enter(y){let E=h,P=u,S=d;if(!n.isMounted)if(i)E=D||h,P=N||u,S=w||d;else return;let T=!1;const ge=y[So]=_e=>{T||(T=!0,_e?F(S,[y]):F(P,[y]),v.delayedLeave&&v.delayedLeave(),y[So]=void 0)};E?R(E,[y,ge]):ge()},leave(y,E){const P=String(t.key);if(y[So]&&y[So](!0),n.isUnmounting)return E();F(g,[y]);let S=!1;const T=y[Wn]=ge=>{S||(S=!0,E(),ge?F(b,[y]):F(I,[y]),y[Wn]=void 0,V[P]===t&&delete V[P])};V[P]=t,m?R(m,[y,T]):T()},clone(y){const E=il(y,e,n,r,s);return s&&s(E),E}};return v}function Rc(t){if(Ji(t))return t=Sn(t),t.children=null,t}function bf(t){if(!Ji(t))return jg(t.type)&&t.children?qg(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&fe(n.default))return n.default()}}function Rs(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Rs(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Kg(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===_t?(o.patchFlag&128&&s++,r=r.concat(Kg(o.children,e,c))):(e||o.type!==ot)&&r.push(c!=null?Sn(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function wr(t,e){return fe(t)?tt({name:t.name},e,{setup:t}):t}function yu(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Vi(t,e,n,r,s=!1){if(ue(t)){t.forEach((I,b)=>Vi(I,e&&(ue(e)?e[b]:e),n,r,s));return}if(ir(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Vi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Au(r.component):r.el,o=s?null:i,{i:c,r:l}=t,h=e&&e.r,u=c.refs===De?c.refs={}:c.refs,d=c.setupState,g=Ae(d),m=d===De?()=>!1:I=>Ce(g,I);if(h!=null&&h!==l&&(He(h)?(u[h]=null,m(h)&&(d[h]=null)):et(h)&&(h.value=null)),fe(l))Qi(l,c,12,[o,u]);else{const I=He(l),b=et(l);if(I||b){const O=()=>{if(t.f){const D=I?m(l)?d[l]:u[l]:l.value;s?ue(D)&&su(D,i):ue(D)?D.includes(i)||D.push(i):I?(u[l]=[i],m(l)&&(d[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else I?(u[l]=o,m(l)&&(d[l]=o)):b&&(l.value=o,t.k&&(u[t.k]=o))};o?(O.id=-1,st(O,n)):O()}}}let Af=!1;const ss=()=>{Af||(console.error("Hydration completed but contains mismatches."),Af=!0)},oT=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",aT=t=>t.namespaceURI.includes("MathML"),Co=t=>{if(t.nodeType===1){if(oT(t))return"svg";if(aT(t))return"mathml"}},hs=t=>t.nodeType===8;function cT(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:c,insert:l,createComment:h}}=t,u=(w,k)=>{if(!k.hasChildNodes()){n(null,w,k),ra(),k._vnode=w;return}d(k.firstChild,w,null,null,null),ra(),k._vnode=w},d=(w,k,V,F,R,v=!1)=>{v=v||!!k.dynamicChildren;const y=hs(w)&&w.data==="[",E=()=>b(w,k,V,F,R,y),{type:P,ref:S,shapeFlag:T,patchFlag:ge}=k;let _e=w.nodeType;k.el=w,ge===-2&&(v=!1,k.dynamicChildren=null);let te=null;switch(P){case Lr:_e!==3?k.children===""?(l(k.el=s(""),o(w),w),te=w):te=E():(w.data!==k.children&&(ss(),w.data=k.children),te=i(w));break;case ot:N(w)?(te=i(w),D(k.el=w.content.firstChild,w,V)):_e!==8||y?te=E():te=i(w);break;case vi:if(y&&(w=i(w),_e=w.nodeType),_e===1||_e===3){te=w;const le=!k.children.length;for(let ee=0;ee<k.staticCount;ee++)le&&(k.children+=te.nodeType===1?te.outerHTML:te.data),ee===k.staticCount-1&&(k.anchor=te),te=i(te);return y?i(te):te}else E();break;case _t:y?te=I(w,k,V,F,R,v):te=E();break;default:if(T&1)(_e!==1||k.type.toLowerCase()!==w.tagName.toLowerCase())&&!N(w)?te=E():te=g(w,k,V,F,R,v);else if(T&6){k.slotScopeIds=R;const le=o(w);if(y?te=O(w):hs(w)&&w.data==="teleport start"?te=O(w,w.data,"teleport end"):te=i(w),e(k,le,null,V,F,Co(le),v),ir(k)&&!k.type.__asyncResolved){let ee;y?(ee=$e(_t),ee.anchor=te?te.previousSibling:le.lastChild):ee=w.nodeType===3?Sm(""):$e("div"),ee.el=w,k.component.subTree=ee}}else T&64?_e!==8?te=E():te=k.type.hydrate(w,k,V,F,R,v,t,m):T&128&&(te=k.type.hydrate(w,k,V,F,Co(o(w)),R,v,t,d))}return S!=null&&Vi(S,null,F,k),te},g=(w,k,V,F,R,v)=>{v=v||!!k.dynamicChildren;const{type:y,props:E,patchFlag:P,shapeFlag:S,dirs:T,transition:ge}=k,_e=y==="input"||y==="option";if(_e||P!==-1){T&&nn(k,null,V,"created");let te=!1;if(N(w)){te=gm(null,ge)&&V&&V.vnode.props&&V.vnode.props.appear;const ee=w.content.firstChild;te&&ge.beforeEnter(ee),D(ee,w,V),k.el=w=ee}if(S&16&&!(E&&(E.innerHTML||E.textContent))){let ee=m(w.firstChild,k,w,V,F,R,v);for(;ee;){Po(w,1)||ss();const Le=ee;ee=ee.nextSibling,c(Le)}}else if(S&8){let ee=k.children;ee[0]===`
`&&(w.tagName==="PRE"||w.tagName==="TEXTAREA")&&(ee=ee.slice(1)),w.textContent!==ee&&(Po(w,0)||ss(),w.textContent=k.children)}if(E){if(_e||!v||P&48){const ee=w.tagName.includes("-");for(const Le in E)(_e&&(Le.endsWith("value")||Le==="indeterminate")||zi(Le)&&!ms(Le)||Le[0]==="."||ee)&&r(w,Le,null,E[Le],void 0,V)}else if(E.onClick)r(w,"onClick",null,E.onClick,void 0,V);else if(P&4&&_s(E.style))for(const ee in E.style)E.style[ee]}let le;(le=E&&E.onVnodeBeforeMount)&&St(le,V,k),T&&nn(k,null,V,"beforeMount"),((le=E&&E.onVnodeMounted)||T||te)&&wm(()=>{le&&St(le,V,k),te&&ge.enter(w),T&&nn(k,null,V,"mounted")},F)}return w.nextSibling},m=(w,k,V,F,R,v,y)=>{y=y||!!k.dynamicChildren;const E=k.children,P=E.length;for(let S=0;S<P;S++){const T=y?E[S]:E[S]=Dt(E[S]),ge=T.type===Lr;w?(ge&&!y&&S+1<P&&Dt(E[S+1]).type===Lr&&(l(s(w.data.slice(T.children.length)),V,i(w)),w.data=T.children),w=d(w,T,F,R,v,y)):ge&&!T.children?l(T.el=s(""),V):(Po(V,1)||ss(),n(null,T,V,null,F,R,Co(V),v))}return w},I=(w,k,V,F,R,v)=>{const{slotScopeIds:y}=k;y&&(R=R?R.concat(y):y);const E=o(w),P=m(i(w),k,E,V,F,R,v);return P&&hs(P)&&P.data==="]"?i(k.anchor=P):(ss(),l(k.anchor=h("]"),E,P),P)},b=(w,k,V,F,R,v)=>{if(Po(w.parentElement,1)||ss(),k.el=null,v){const P=O(w);for(;;){const S=i(w);if(S&&S!==P)c(S);else break}}const y=i(w),E=o(w);return c(w),n(null,k,E,y,V,F,Co(E),R),V&&(V.vnode.el=k.el,Ua(V,k.el)),y},O=(w,k="[",V="]")=>{let F=0;for(;w;)if(w=i(w),w&&hs(w)&&(w.data===k&&F++,w.data===V)){if(F===0)return i(w);F--}return w},D=(w,k,V)=>{const F=k.parentNode;F&&F.replaceChild(w,k);let R=V;for(;R;)R.vnode.el===k&&(R.vnode.el=R.subTree.el=w),R=R.parent},N=w=>w.nodeType===1&&w.tagName==="TEMPLATE";return[u,d]}const Rf="data-allow-mismatch",lT={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function Po(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(Rf);)t=t.parentElement;const n=t&&t.getAttribute(Rf);if(n==null)return!1;if(n==="")return!0;{const r=n.split(",");return e===0&&r.includes("children")?!0:n.split(",").includes(lT[e])}}Ma().requestIdleCallback;Ma().cancelIdleCallback;function uT(t,e){if(hs(t)&&t.data==="["){let n=1,r=t.nextSibling;for(;r;){if(r.nodeType===1){if(e(r)===!1)break}else if(hs(r))if(r.data==="]"){if(--n===0)break}else r.data==="["&&n++;r=r.nextSibling}}else e(t)}const ir=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function hT(t){fe(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,hydrate:i,timeout:o,suspensible:c=!0,onError:l}=t;let h=null,u,d=0;const g=()=>(d++,h=null,m()),m=()=>{let I;return h||(I=h=e().catch(b=>{if(b=b instanceof Error?b:new Error(String(b)),l)return new Promise((O,D)=>{l(b,()=>O(g()),()=>D(b),d+1)});throw b}).then(b=>I!==h&&h?h:(b&&(b.__esModule||b[Symbol.toStringTag]==="Module")&&(b=b.default),u=b,b)))};return wr({name:"AsyncComponentWrapper",__asyncLoader:m,__asyncHydrate(I,b,O){const D=i?()=>{const N=i(O,w=>uT(I,w));N&&(b.bum||(b.bum=[])).push(N)}:O;u?D():m().then(()=>!b.isUnmounted&&D())},get __asyncResolved(){return u},setup(){const I=Ge;if(yu(I),u)return()=>Sc(u,I);const b=w=>{h=null,Bs(w,I,13,!r)};if(c&&I.suspense||Cs)return m().then(w=>()=>Sc(w,I)).catch(w=>(b(w),()=>r?$e(r,{error:w}):null));const O=An(!1),D=An(),N=An(!!s);return s&&setTimeout(()=>{N.value=!1},s),o!=null&&setTimeout(()=>{if(!O.value&&!D.value){const w=new Error(`Async component timed out after ${o}ms.`);b(w),D.value=w}},o),m().then(()=>{O.value=!0,I.parent&&Ji(I.parent.vnode)&&I.parent.update()}).catch(w=>{b(w),D.value=w}),()=>{if(O.value&&u)return Sc(u,I);if(D.value&&r)return $e(r,{error:D.value});if(n&&!N.value)return $e(n)}}})}function Sc(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=$e(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const Ji=t=>t.type.__isKeepAlive,fT={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=bu(),r=n.ctx;if(!r.renderer)return()=>{const N=e.default&&e.default();return N&&N.length===1?N[0]:N};const s=new Map,i=new Set;let o=null;const c=n.suspense,{renderer:{p:l,m:h,um:u,o:{createElement:d}}}=r,g=d("div");r.activate=(N,w,k,V,F)=>{const R=N.component;h(N,w,k,0,c),l(R.vnode,N,w,k,R,c,V,N.slotScopeIds,F),st(()=>{R.isDeactivated=!1,R.a&&gi(R.a);const v=N.props&&N.props.onVnodeMounted;v&&St(v,R.parent,N)},c)},r.deactivate=N=>{const w=N.component;oa(w.m),oa(w.a),h(N,g,null,1,c),st(()=>{w.da&&gi(w.da);const k=N.props&&N.props.onVnodeUnmounted;k&&St(k,w.parent,N),w.isDeactivated=!0},c)};function m(N){Cc(N),u(N,n,c,!0)}function I(N){s.forEach((w,k)=>{const V=dl(w.type);V&&!N(V)&&b(k)})}function b(N){const w=s.get(N);w&&(!o||!zt(w,o))?m(w):o&&Cc(o),s.delete(N),i.delete(N)}vs(()=>[t.include,t.exclude],([N,w])=>{N&&I(k=>ui(N,k)),w&&I(k=>!ui(w,k))},{flush:"post",deep:!0});let O=null;const D=()=>{O!=null&&(aa(n.subTree.type)?st(()=>{s.set(O,ko(n.subTree))},n.subTree.suspense):s.set(O,ko(n.subTree)))};return vu(D),Gg(D),Eu(()=>{s.forEach(N=>{const{subTree:w,suspense:k}=n,V=ko(w);if(N.type===V.type&&N.key===V.key){Cc(V);const F=V.component.da;F&&st(F,k);return}m(N)})}),()=>{if(O=null,!e.default)return o=null;const N=e.default(),w=N[0];if(N.length>1)return o=null,N;if(!Ur(w)||!(w.shapeFlag&4)&&!(w.shapeFlag&128))return o=null,w;let k=ko(w);if(k.type===ot)return o=null,k;const V=k.type,F=dl(ir(k)?k.type.__asyncResolved||{}:V),{include:R,exclude:v,max:y}=t;if(R&&(!F||!ui(R,F))||v&&F&&ui(v,F))return k.shapeFlag&=-257,o=k,w;const E=k.key==null?V:k.key,P=s.get(E);return k.el&&(k=Sn(k),w.shapeFlag&128&&(w.ssContent=k)),O=E,P?(k.el=P.el,k.component=P.component,k.transition&&Rs(k,k.transition),k.shapeFlag|=512,i.delete(E),i.add(E)):(i.add(E),y&&i.size>parseInt(y,10)&&b(i.values().next().value)),k.shapeFlag|=256,o=k,aa(w.type)?w:k}}},dT=fT;function ui(t,e){return ue(t)?t.some(n=>ui(n,e)):He(t)?t.split(",").includes(e):fE(t)?(t.lastIndex=0,t.test(e)):!1}function pT(t,e){zg(t,"a",e)}function gT(t,e){zg(t,"da",e)}function zg(t,e,n=Ge){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(La(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ji(s.parent.vnode)&&mT(r,e,n,s),s=s.parent}}function mT(t,e,n,r){const s=La(e,t,r,!0);Qg(()=>{su(r[e],s)},n)}function Cc(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function ko(t){return t.shapeFlag&128?t.ssContent:t}function La(t,e,n=Ge,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{vr();const c=Xi(n),l=Xt(e,n,t,o);return c(),Er(),l});return r?s.unshift(i):s.push(i),i}}const Vn=t=>(e,n=Ge)=>{(!Cs||t==="sp")&&La(t,(...r)=>e(...r),n)},_T=Vn("bm"),vu=Vn("m"),yT=Vn("bu"),Gg=Vn("u"),Eu=Vn("bum"),Qg=Vn("um"),vT=Vn("sp"),ET=Vn("rtg"),TT=Vn("rtc");function Jg(t,e=Ge){La("ec",t,e)}const Xg="components";function eD(t,e){return Zg(Xg,t,!0,e)||t}const Yg=Symbol.for("v-ndc");function wT(t){return He(t)?Zg(Xg,t,!1)||t:t||Yg}function Zg(t,e,n=!0,r=!1){const s=ct||Ge;if(s){const i=s.type;{const c=dl(i,!1);if(c&&(c===e||c===jt(e)||c===xa(jt(e))))return i}const o=Sf(s[t]||i[t],e)||Sf(s.appContext[t],e);return!o&&r?i:o}}function Sf(t,e){return t&&(t[e]||t[jt(e)]||t[xa(jt(e))])}function tD(t,e,n={},r,s){if(ct.ce||ct.parent&&ir(ct.parent)&&ct.parent.ce)return Kt(),Xn(_t,null,[$e("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),Kt();const o=i&&em(i(n)),c=n.key||o&&o.key,l=Xn(_t,{key:(c&&!Dn(c)?c:`_${e}`)+""},o||[],o&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function em(t){return t.some(e=>Ur(e)?!(e.type===ot||e.type===_t&&!em(e.children)):!0)?t:null}const ol=t=>t?Pm(t)?Au(t):ol(t.parent):null,yi=tt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ol(t.parent),$root:t=>ol(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>nm(t),$forceUpdate:t=>t.f||(t.f=()=>{mu(t.update)}),$nextTick:t=>t.n||(t.n=js.bind(t.proxy)),$watch:t=>$T.bind(t)}),Pc=(t,e)=>t!==De&&!t.__isScriptSetup&&Ce(t,e),IT={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Pc(r,e))return o[e]=1,r[e];if(s!==De&&Ce(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&Ce(h,e))return o[e]=3,i[e];if(n!==De&&Ce(n,e))return o[e]=4,n[e];al&&(o[e]=0)}}const u=yi[e];let d,g;if(u)return e==="$attrs"&&mt(t.attrs,"get",""),u(t);if((d=c.__cssModules)&&(d=d[e]))return d;if(n!==De&&Ce(n,e))return o[e]=4,n[e];if(g=l.config.globalProperties,Ce(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Pc(s,e)?(s[e]=n,!0):r!==De&&Ce(r,e)?(r[e]=n,!0):Ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==De&&Ce(t,o)||Pc(e,o)||(c=i[0])&&Ce(c,o)||Ce(r,o)||Ce(yi,o)||Ce(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Cf(t){return ue(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let al=!0;function bT(t){const e=nm(t),n=t.proxy,r=t.ctx;al=!1,e.beforeCreate&&Pf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:h,created:u,beforeMount:d,mounted:g,beforeUpdate:m,updated:I,activated:b,deactivated:O,beforeDestroy:D,beforeUnmount:N,destroyed:w,unmounted:k,render:V,renderTracked:F,renderTriggered:R,errorCaptured:v,serverPrefetch:y,expose:E,inheritAttrs:P,components:S,directives:T,filters:ge}=e;if(h&&AT(h,r,null),o)for(const le in o){const ee=o[le];fe(ee)&&(r[le]=ee.bind(n))}if(s){const le=s.call(n,n);xe(le)&&(t.data=Tr(le))}if(al=!0,i)for(const le in i){const ee=i[le],Le=fe(ee)?ee.bind(n,n):fe(ee.get)?ee.get.bind(n,n):on,Ht=!fe(ee)&&fe(ee.set)?ee.set.bind(n):on,Vt=Ft({get:Le,set:Ht});Object.defineProperty(r,le,{enumerable:!0,configurable:!0,get:()=>Vt.value,set:Fe=>Vt.value=Fe})}if(c)for(const le in c)tm(c[le],r,n,le);if(l){const le=fe(l)?l.call(n):l;Reflect.ownKeys(le).forEach(ee=>{Mr(ee,le[ee])})}u&&Pf(u,t,"c");function te(le,ee){ue(ee)?ee.forEach(Le=>le(Le.bind(n))):ee&&le(ee.bind(n))}if(te(_T,d),te(vu,g),te(yT,m),te(Gg,I),te(pT,b),te(gT,O),te(Jg,v),te(TT,F),te(ET,R),te(Eu,N),te(Qg,k),te(vT,y),ue(E))if(E.length){const le=t.exposed||(t.exposed={});E.forEach(ee=>{Object.defineProperty(le,ee,{get:()=>n[ee],set:Le=>n[ee]=Le})})}else t.exposed||(t.exposed={});V&&t.render===on&&(t.render=V),P!=null&&(t.inheritAttrs=P),S&&(t.components=S),T&&(t.directives=T),y&&yu(t)}function AT(t,e,n=on){ue(t)&&(t=cl(t));for(const r in t){const s=t[r];let i;xe(s)?"default"in s?i=kt(s.from||r,s.default,!0):i=kt(s.from||r):i=kt(s),et(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Pf(t,e,n){Xt(ue(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function tm(t,e,n,r){let s=r.includes(".")?vm(n,r):()=>n[r];if(He(t)){const i=e[t];fe(i)&&vs(s,i)}else if(fe(t))vs(s,t.bind(n));else if(xe(t))if(ue(t))t.forEach(i=>tm(i,e,n,r));else{const i=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(i)&&vs(s,i,t)}}function nm(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>ia(l,h,o,!0)),ia(l,e,o)),xe(e)&&i.set(e,l),l}function ia(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ia(t,i,n,!0),s&&s.forEach(o=>ia(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=RT[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const RT={data:kf,props:Of,emits:Of,methods:hi,computed:hi,beforeCreate:It,created:It,beforeMount:It,mounted:It,beforeUpdate:It,updated:It,beforeDestroy:It,beforeUnmount:It,destroyed:It,unmounted:It,activated:It,deactivated:It,errorCaptured:It,serverPrefetch:It,components:hi,directives:hi,watch:CT,provide:kf,inject:ST};function kf(t,e){return e?t?function(){return tt(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function ST(t,e){return hi(cl(t),cl(e))}function cl(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function It(t,e){return t?[...new Set([].concat(t,e))]:e}function hi(t,e){return t?tt(Object.create(null),t,e):e}function Of(t,e){return t?ue(t)&&ue(e)?[...new Set([...t,...e])]:tt(Object.create(null),Cf(t),Cf(e??{})):e}function CT(t,e){if(!t)return e;if(!e)return t;const n=tt(Object.create(null),t);for(const r in e)n[r]=It(t[r],e[r]);return n}function rm(){return{app:null,config:{isNativeTag:uE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let PT=0;function kT(t,e){return function(r,s=null){fe(r)||(r=tt({},r)),s!=null&&!xe(s)&&(s=null);const i=rm(),o=new WeakSet,c=[];let l=!1;const h=i.app={_uid:PT++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:hw,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&fe(u.install)?(o.add(u),u.install(h,...d)):fe(u)&&(o.add(u),u(h,...d))),h},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),h},component(u,d){return d?(i.components[u]=d,h):i.components[u]},directive(u,d){return d?(i.directives[u]=d,h):i.directives[u]},mount(u,d,g){if(!l){const m=h._ceVNode||$e(r,s);return m.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),d&&e?e(m,u):t(m,u,g),l=!0,h._container=u,u.__vue_app__=h,Au(m.component)}},onUnmount(u){c.push(u)},unmount(){l&&(Xt(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(u,d){return i.provides[u]=d,h},runWithContext(u){const d=xr;xr=h;try{return u()}finally{xr=d}}};return h}}let xr=null;function Mr(t,e){if(Ge){let n=Ge.provides;const r=Ge.parent&&Ge.parent.provides;r===n&&(n=Ge.provides=Object.create(r)),n[t]=e}}function kt(t,e,n=!1){const r=Ge||ct;if(r||xr){const s=xr?xr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&fe(e)?e.call(r&&r.proxy):e}}function sm(){return!!(Ge||ct||xr)}const im={},om=()=>Object.create(im),am=t=>Object.getPrototypeOf(t)===im;function OT(t,e,n,r=!1){const s={},i=om();t.propsDefaults=Object.create(null),cm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Tn(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function NT(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ae(s),[l]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let g=u[d];if(Fa(t.emitsOptions,g))continue;const m=e[g];if(l)if(Ce(i,g))m!==i[g]&&(i[g]=m,h=!0);else{const I=jt(g);s[I]=ll(l,c,I,m,t,!1)}else m!==i[g]&&(i[g]=m,h=!0)}}}else{cm(t,e,s,i)&&(h=!0);let u;for(const d in c)(!e||!Ce(e,d)&&((u=Wr(d))===d||!Ce(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=ll(l,c,d,void 0,t,!0)):delete s[d]);if(i!==c)for(const d in i)(!e||!Ce(e,d))&&(delete i[d],h=!0)}h&&En(t.attrs,"set","")}function cm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(ms(l))continue;const h=e[l];let u;s&&Ce(s,u=jt(l))?!i||!i.includes(u)?n[u]=h:(c||(c={}))[u]=h:Fa(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,o=!0)}if(i){const l=Ae(n),h=c||De;for(let u=0;u<i.length;u++){const d=i[u];n[d]=ll(s,l,d,h[d],t,!Ce(h,d))}}return o}function ll(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Ce(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&fe(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const u=Xi(s);r=h[n]=l.call(null,e),u()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Wr(n))&&(r=!0))}return r}const DT=new WeakMap;function lm(t,e,n=!1){const r=n?DT:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!fe(t)){const u=d=>{l=!0;const[g,m]=lm(d,e,!0);tt(o,g),m&&c.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return xe(t)&&r.set(t,ps),ps;if(ue(i))for(let u=0;u<i.length;u++){const d=jt(i[u]);Nf(d)&&(o[d]=De)}else if(i)for(const u in i){const d=jt(u);if(Nf(d)){const g=i[u],m=o[d]=ue(g)||fe(g)?{type:g}:tt({},g),I=m.type;let b=!1,O=!0;if(ue(I))for(let D=0;D<I.length;++D){const N=I[D],w=fe(N)&&N.name;if(w==="Boolean"){b=!0;break}else w==="String"&&(O=!1)}else b=fe(I)&&I.name==="Boolean";m[0]=b,m[1]=O,(b||Ce(m,"default"))&&c.push(d)}}const h=[o,c];return xe(t)&&r.set(t,h),h}function Nf(t){return t[0]!=="$"&&!ms(t)}const um=t=>t[0]==="_"||t==="$stable",Tu=t=>ue(t)?t.map(Dt):[Dt(t)],VT=(t,e,n)=>{if(e._n)return e;const r=_u((...s)=>Tu(e(...s)),n);return r._c=!1,r},hm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(um(s))continue;const i=t[s];if(fe(i))e[s]=VT(s,i,r);else if(i!=null){const o=Tu(i);e[s]=()=>o}}},fm=(t,e)=>{const n=Tu(e);t.slots.default=()=>n},dm=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},xT=(t,e,n)=>{const r=t.slots=om();if(t.vnode.shapeFlag&32){const s=e._;s?(dm(r,e,n),n&&dg(r,"_",s,!0)):hm(e,r)}else e&&fm(t,e)},MT=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=De;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:dm(s,e,n):(i=!e.$stable,hm(e,s)),o=e}else e&&(fm(t,e),o={default:1});if(i)for(const c in s)!um(c)&&o[c]==null&&delete s[c]},st=wm;function LT(t){return pm(t)}function FT(t){return pm(t,cT)}function pm(t,e){const n=Ma();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:h,setElementText:u,parentNode:d,nextSibling:g,setScopeId:m=on,insertStaticContent:I}=t,b=(A,C,M,$=null,U=null,q=null,Q=void 0,z=null,K=!!C.dynamicChildren)=>{if(A===C)return;A&&!zt(A,C)&&($=B(A),Fe(A,U,q,!0),A=null),C.patchFlag===-2&&(K=!1,C.dynamicChildren=null);const{type:W,ref:ie,shapeFlag:X}=C;switch(W){case Lr:O(A,C,M,$);break;case ot:D(A,C,M,$);break;case vi:A==null&&N(C,M,$,Q);break;case _t:S(A,C,M,$,U,q,Q,z,K);break;default:X&1?V(A,C,M,$,U,q,Q,z,K):X&6?T(A,C,M,$,U,q,Q,z,K):(X&64||X&128)&&W.process(A,C,M,$,U,q,Q,z,K,ne)}ie!=null&&U&&Vi(ie,A&&A.ref,q,C||A,!C)},O=(A,C,M,$)=>{if(A==null)r(C.el=c(C.children),M,$);else{const U=C.el=A.el;C.children!==A.children&&h(U,C.children)}},D=(A,C,M,$)=>{A==null?r(C.el=l(C.children||""),M,$):C.el=A.el},N=(A,C,M,$)=>{[A.el,A.anchor]=I(A.children,C,M,$,A.el,A.anchor)},w=({el:A,anchor:C},M,$)=>{let U;for(;A&&A!==C;)U=g(A),r(A,M,$),A=U;r(C,M,$)},k=({el:A,anchor:C})=>{let M;for(;A&&A!==C;)M=g(A),s(A),A=M;s(C)},V=(A,C,M,$,U,q,Q,z,K)=>{C.type==="svg"?Q="svg":C.type==="math"&&(Q="mathml"),A==null?F(C,M,$,U,q,Q,z,K):y(A,C,U,q,Q,z,K)},F=(A,C,M,$,U,q,Q,z)=>{let K,W;const{props:ie,shapeFlag:X,transition:se,dirs:re}=A;if(K=A.el=o(A.type,q,ie&&ie.is,ie),X&8?u(K,A.children):X&16&&v(A.children,K,null,$,U,kc(A,q),Q,z),re&&nn(A,null,$,"created"),R(K,A,A.scopeId,Q,$),ie){for(const Re in ie)Re!=="value"&&!ms(Re)&&i(K,Re,null,ie[Re],q,$);"value"in ie&&i(K,"value",null,ie.value,q),(W=ie.onVnodeBeforeMount)&&St(W,$,A)}re&&nn(A,null,$,"beforeMount");const ce=gm(U,se);ce&&se.beforeEnter(K),r(K,C,M),((W=ie&&ie.onVnodeMounted)||ce||re)&&st(()=>{W&&St(W,$,A),ce&&se.enter(K),re&&nn(A,null,$,"mounted")},U)},R=(A,C,M,$,U)=>{if(M&&m(A,M),$)for(let q=0;q<$.length;q++)m(A,$[q]);if(U){let q=U.subTree;if(C===q||aa(q.type)&&(q.ssContent===C||q.ssFallback===C)){const Q=U.vnode;R(A,Q,Q.scopeId,Q.slotScopeIds,U.parent)}}},v=(A,C,M,$,U,q,Q,z,K=0)=>{for(let W=K;W<A.length;W++){const ie=A[W]=z?zn(A[W]):Dt(A[W]);b(null,ie,C,M,$,U,q,Q,z)}},y=(A,C,M,$,U,q,Q)=>{const z=C.el=A.el;let{patchFlag:K,dynamicChildren:W,dirs:ie}=C;K|=A.patchFlag&16;const X=A.props||De,se=C.props||De;let re;if(M&&Sr(M,!1),(re=se.onVnodeBeforeUpdate)&&St(re,M,C,A),ie&&nn(C,A,M,"beforeUpdate"),M&&Sr(M,!0),(X.innerHTML&&se.innerHTML==null||X.textContent&&se.textContent==null)&&u(z,""),W?E(A.dynamicChildren,W,z,M,$,kc(C,U),q):Q||ee(A,C,z,null,M,$,kc(C,U),q,!1),K>0){if(K&16)P(z,X,se,M,U);else if(K&2&&X.class!==se.class&&i(z,"class",null,se.class,U),K&4&&i(z,"style",X.style,se.style,U),K&8){const ce=C.dynamicProps;for(let Re=0;Re<ce.length;Re++){const Ie=ce[Re],ut=X[Ie],Ye=se[Ie];(Ye!==ut||Ie==="value")&&i(z,Ie,ut,Ye,U,M)}}K&1&&A.children!==C.children&&u(z,C.children)}else!Q&&W==null&&P(z,X,se,M,U);((re=se.onVnodeUpdated)||ie)&&st(()=>{re&&St(re,M,C,A),ie&&nn(C,A,M,"updated")},$)},E=(A,C,M,$,U,q,Q)=>{for(let z=0;z<C.length;z++){const K=A[z],W=C[z],ie=K.el&&(K.type===_t||!zt(K,W)||K.shapeFlag&70)?d(K.el):M;b(K,W,ie,null,$,U,q,Q,!0)}},P=(A,C,M,$,U)=>{if(C!==M){if(C!==De)for(const q in C)!ms(q)&&!(q in M)&&i(A,q,C[q],null,U,$);for(const q in M){if(ms(q))continue;const Q=M[q],z=C[q];Q!==z&&q!=="value"&&i(A,q,z,Q,U,$)}"value"in M&&i(A,"value",C.value,M.value,U)}},S=(A,C,M,$,U,q,Q,z,K)=>{const W=C.el=A?A.el:c(""),ie=C.anchor=A?A.anchor:c("");let{patchFlag:X,dynamicChildren:se,slotScopeIds:re}=C;re&&(z=z?z.concat(re):re),A==null?(r(W,M,$),r(ie,M,$),v(C.children||[],M,ie,U,q,Q,z,K)):X>0&&X&64&&se&&A.dynamicChildren?(E(A.dynamicChildren,se,M,U,q,Q,z),(C.key!=null||U&&C===U.subTree)&&mm(A,C,!0)):ee(A,C,M,ie,U,q,Q,z,K)},T=(A,C,M,$,U,q,Q,z,K)=>{C.slotScopeIds=z,A==null?C.shapeFlag&512?U.ctx.activate(C,M,$,Q,K):ge(C,M,$,U,q,Q,K):_e(A,C,K)},ge=(A,C,M,$,U,q,Q)=>{const z=A.component=iw(A,$,U);if(Ji(A)&&(z.ctx.renderer=ne),ow(z,!1,Q),z.asyncDep){if(U&&U.registerDep(z,te,Q),!A.el){const K=z.subTree=$e(ot);D(null,K,C,M)}}else te(z,A,C,M,U,q,Q)},_e=(A,C,M)=>{const $=C.component=A.component;if(GT(A,C,M))if($.asyncDep&&!$.asyncResolved){le($,C,M);return}else $.next=C,$.update();else C.el=A.el,$.vnode=C},te=(A,C,M,$,U,q,Q)=>{const z=()=>{if(A.isMounted){let{next:X,bu:se,u:re,parent:ce,vnode:Re}=A;{const ht=_m(A);if(ht){X&&(X.el=Re.el,le(A,X,Q)),ht.asyncDep.then(()=>{A.isUnmounted||z()});return}}let Ie=X,ut;Sr(A,!1),X?(X.el=Re.el,le(A,X,Q)):X=Re,se&&gi(se),(ut=X.props&&X.props.onVnodeBeforeUpdate)&&St(ut,ce,X,Re),Sr(A,!0);const Ye=Oc(A),nt=A.subTree;A.subTree=Ye,b(nt,Ye,d(nt.el),B(nt),A,U,q),X.el=Ye.el,Ie===null&&Ua(A,Ye.el),re&&st(re,U),(ut=X.props&&X.props.onVnodeUpdated)&&st(()=>St(ut,ce,X,Re),U)}else{let X;const{el:se,props:re}=C,{bm:ce,m:Re,parent:Ie,root:ut,type:Ye}=A,nt=ir(C);if(Sr(A,!1),ce&&gi(ce),!nt&&(X=re&&re.onVnodeBeforeMount)&&St(X,Ie,C),Sr(A,!0),se&&ke){const ht=()=>{A.subTree=Oc(A),ke(se,A.subTree,A,U,null)};nt&&Ye.__asyncHydrate?Ye.__asyncHydrate(se,A,ht):ht()}else{ut.ce&&ut.ce._injectChildStyle(Ye);const ht=A.subTree=Oc(A);b(null,ht,M,$,A,U,q),C.el=ht.el}if(Re&&st(Re,U),!nt&&(X=re&&re.onVnodeMounted)){const ht=C;st(()=>St(X,Ie,ht),U)}(C.shapeFlag&256||Ie&&ir(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&A.a&&st(A.a,U),A.isMounted=!0,C=M=$=null}};A.scope.on();const K=A.effect=new Eg(z);A.scope.off();const W=A.update=K.run.bind(K),ie=A.job=K.runIfDirty.bind(K);ie.i=A,ie.id=A.uid,K.scheduler=()=>mu(ie),Sr(A,!0),W()},le=(A,C,M)=>{C.component=A;const $=A.vnode.props;A.vnode=C,A.next=null,NT(A,C.props,$,M),MT(A,C.children,M),vr(),If(A),Er()},ee=(A,C,M,$,U,q,Q,z,K=!1)=>{const W=A&&A.children,ie=A?A.shapeFlag:0,X=C.children,{patchFlag:se,shapeFlag:re}=C;if(se>0){if(se&128){Ht(W,X,M,$,U,q,Q,z,K);return}else if(se&256){Le(W,X,M,$,U,q,Q,z,K);return}}re&8?(ie&16&&Rt(W,U,q),X!==W&&u(M,X)):ie&16?re&16?Ht(W,X,M,$,U,q,Q,z,K):Rt(W,U,q,!0):(ie&8&&u(M,""),re&16&&v(X,M,$,U,q,Q,z,K))},Le=(A,C,M,$,U,q,Q,z,K)=>{A=A||ps,C=C||ps;const W=A.length,ie=C.length,X=Math.min(W,ie);let se;for(se=0;se<X;se++){const re=C[se]=K?zn(C[se]):Dt(C[se]);b(A[se],re,M,null,U,q,Q,z,K)}W>ie?Rt(A,U,q,!0,!1,X):v(C,M,$,U,q,Q,z,K,X)},Ht=(A,C,M,$,U,q,Q,z,K)=>{let W=0;const ie=C.length;let X=A.length-1,se=ie-1;for(;W<=X&&W<=se;){const re=A[W],ce=C[W]=K?zn(C[W]):Dt(C[W]);if(zt(re,ce))b(re,ce,M,null,U,q,Q,z,K);else break;W++}for(;W<=X&&W<=se;){const re=A[X],ce=C[se]=K?zn(C[se]):Dt(C[se]);if(zt(re,ce))b(re,ce,M,null,U,q,Q,z,K);else break;X--,se--}if(W>X){if(W<=se){const re=se+1,ce=re<ie?C[re].el:$;for(;W<=se;)b(null,C[W]=K?zn(C[W]):Dt(C[W]),M,ce,U,q,Q,z,K),W++}}else if(W>se)for(;W<=X;)Fe(A[W],U,q,!0),W++;else{const re=W,ce=W,Re=new Map;for(W=ce;W<=se;W++){const Tt=C[W]=K?zn(C[W]):Dt(C[W]);Tt.key!=null&&Re.set(Tt.key,W)}let Ie,ut=0;const Ye=se-ce+1;let nt=!1,ht=0;const Ln=new Array(Ye);for(W=0;W<Ye;W++)Ln[W]=0;for(W=re;W<=X;W++){const Tt=A[W];if(ut>=Ye){Fe(Tt,U,q,!0);continue}let xt;if(Tt.key!=null)xt=Re.get(Tt.key);else for(Ie=ce;Ie<=se;Ie++)if(Ln[Ie-ce]===0&&zt(Tt,C[Ie])){xt=Ie;break}xt===void 0?Fe(Tt,U,q,!0):(Ln[xt-ce]=W+1,xt>=ht?ht=xt:nt=!0,b(Tt,C[xt],M,null,U,q,Q,z,K),ut++)}const Xr=nt?UT(Ln):ps;for(Ie=Xr.length-1,W=Ye-1;W>=0;W--){const Tt=ce+W,xt=C[Tt],Yr=Tt+1<ie?C[Tt+1].el:$;Ln[W]===0?b(null,xt,M,Yr,U,q,Q,z,K):nt&&(Ie<0||W!==Xr[Ie]?Vt(xt,M,Yr,2):Ie--)}}},Vt=(A,C,M,$,U=null)=>{const{el:q,type:Q,transition:z,children:K,shapeFlag:W}=A;if(W&6){Vt(A.component.subTree,C,M,$);return}if(W&128){A.suspense.move(C,M,$);return}if(W&64){Q.move(A,C,M,ne);return}if(Q===_t){r(q,C,M);for(let X=0;X<K.length;X++)Vt(K[X],C,M,$);r(A.anchor,C,M);return}if(Q===vi){w(A,C,M);return}if($!==2&&W&1&&z)if($===0)z.beforeEnter(q),r(q,C,M),st(()=>z.enter(q),U);else{const{leave:X,delayLeave:se,afterLeave:re}=z,ce=()=>r(q,C,M),Re=()=>{X(q,()=>{ce(),re&&re()})};se?se(q,ce,Re):Re()}else r(q,C,M)},Fe=(A,C,M,$=!1,U=!1)=>{const{type:q,props:Q,ref:z,children:K,dynamicChildren:W,shapeFlag:ie,patchFlag:X,dirs:se,cacheIndex:re}=A;if(X===-2&&(U=!1),z!=null&&Vi(z,null,M,A,!0),re!=null&&(C.renderCache[re]=void 0),ie&256){C.ctx.deactivate(A);return}const ce=ie&1&&se,Re=!ir(A);let Ie;if(Re&&(Ie=Q&&Q.onVnodeBeforeUnmount)&&St(Ie,C,A),ie&6)en(A.component,M,$);else{if(ie&128){A.suspense.unmount(M,$);return}ce&&nn(A,null,C,"beforeUnmount"),ie&64?A.type.remove(A,C,M,ne,$):W&&!W.hasOnce&&(q!==_t||X>0&&X&64)?Rt(W,C,M,!1,!0):(q===_t&&X&384||!U&&ie&16)&&Rt(K,C,M),$&&Ue(A)}(Re&&(Ie=Q&&Q.onVnodeUnmounted)||ce)&&st(()=>{Ie&&St(Ie,C,A),ce&&nn(A,null,C,"unmounted")},M)},Ue=A=>{const{type:C,el:M,anchor:$,transition:U}=A;if(C===_t){Mn(M,$);return}if(C===vi){k(A);return}const q=()=>{s(M),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(A.shapeFlag&1&&U&&!U.persisted){const{leave:Q,delayLeave:z}=U,K=()=>Q(M,q);z?z(A.el,q,K):K()}else q()},Mn=(A,C)=>{let M;for(;A!==C;)M=g(A),s(A),A=M;s(C)},en=(A,C,M)=>{const{bum:$,scope:U,job:q,subTree:Q,um:z,m:K,a:W}=A;oa(K),oa(W),$&&gi($),U.stop(),q&&(q.flags|=8,Fe(Q,A,C,M)),z&&st(z,C),st(()=>{A.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},Rt=(A,C,M,$=!1,U=!1,q=0)=>{for(let Q=q;Q<A.length;Q++)Fe(A[Q],C,M,$,U)},B=A=>{if(A.shapeFlag&6)return B(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const C=g(A.anchor||A.el),M=C&&C[nT];return M?g(M):C};let Y=!1;const J=(A,C,M)=>{A==null?C._vnode&&Fe(C._vnode,null,null,!0):b(C._vnode||null,A,C,null,null,null,M),C._vnode=A,Y||(Y=!0,If(),ra(),Y=!1)},ne={p:b,um:Fe,m:Vt,r:Ue,mt:ge,mc:v,pc:ee,pbc:E,n:B,o:t};let Ee,ke;return e&&([Ee,ke]=e(ne)),{render:J,hydrate:Ee,createApp:kT(J,Ee)}}function kc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Sr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function gm(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function mm(t,e,n=!1){const r=t.children,s=e.children;if(ue(r)&&ue(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=zn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&mm(o,c)),c.type===Lr&&(c.el=o.el)}}function UT(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<h?i=c+1:o=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function _m(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:_m(e)}function oa(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const BT=Symbol.for("v-scx"),jT=()=>kt(BT);function vs(t,e,n){return ym(t,e,n)}function ym(t,e,n=De){const{immediate:r,deep:s,flush:i,once:o}=n,c=tt({},n),l=e&&r||!e&&i!=="post";let h;if(Cs){if(i==="sync"){const m=jT();h=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=on,m.resume=on,m.pause=on,m}}const u=Ge;c.call=(m,I,b)=>Xt(m,u,I,b);let d=!1;i==="post"?c.scheduler=m=>{st(m,u&&u.suspense)}:i!=="sync"&&(d=!0,c.scheduler=(m,I)=>{I?m():mu(m)}),c.augmentJob=m=>{e&&(m.flags|=4),d&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const g=ZE(t,e,c);return Cs&&(h?h.push(g):l&&g()),g}function $T(t,e,n){const r=this.proxy,s=He(t)?t.includes(".")?vm(r,t):()=>r[t]:t.bind(r,r);let i;fe(e)?i=e:(i=e.handler,n=e);const o=Xi(this),c=ym(s,i.bind(r),n);return o(),c}function vm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const HT=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${jt(e)}Modifiers`]||t[`${Wr(e)}Modifiers`];function qT(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||De;let s=n;const i=e.startsWith("update:"),o=i&&HT(r,e.slice(7));o&&(o.trim&&(s=n.map(u=>He(u)?u.trim():u)),o.number&&(s=n.map(mE)));let c,l=r[c=Tc(e)]||r[c=Tc(jt(e))];!l&&i&&(l=r[c=Tc(Wr(e))]),l&&Xt(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Xt(h,t,6,s)}}function Em(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!fe(t)){const l=h=>{const u=Em(h,e,!0);u&&(c=!0,tt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(xe(t)&&r.set(t,null),null):(ue(i)?i.forEach(l=>o[l]=null):tt(o,i),xe(t)&&r.set(t,o),o)}function Fa(t,e){return!t||!zi(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ce(t,e[0].toLowerCase()+e.slice(1))||Ce(t,Wr(e))||Ce(t,e))}function Oc(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:h,renderCache:u,props:d,data:g,setupState:m,ctx:I,inheritAttrs:b}=t,O=sa(t);let D,N;try{if(n.shapeFlag&4){const k=s||r,V=k;D=Dt(h.call(V,k,u,d,m,g,I)),N=c}else{const k=e;D=Dt(k.length>1?k(d,{attrs:c,slots:o,emit:l}):k(d,null)),N=e.props?c:KT(c)}}catch(k){Ei.length=0,Bs(k,t,1),D=$e(ot)}let w=D;if(N&&b!==!1){const k=Object.keys(N),{shapeFlag:V}=w;k.length&&V&7&&(i&&k.some(ru)&&(N=zT(N,i)),w=Sn(w,N,!1,!0))}return n.dirs&&(w=Sn(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&Rs(w,n.transition),D=w,sa(O),D}function WT(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(Ur(s)){if(s.type!==ot||s.children==="v-if"){if(n)return;n=s}}else return}return n}const KT=t=>{let e;for(const n in t)(n==="class"||n==="style"||zi(n))&&((e||(e={}))[n]=t[n]);return e},zT=(t,e)=>{const n={};for(const r in t)(!ru(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function GT(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Df(r,o,h):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const g=u[d];if(o[g]!==r[g]&&!Fa(h,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Df(r,o,h):!0:!!o;return!1}function Df(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Fa(n,i))return!0}return!1}function Ua({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const aa=t=>t.__isSuspense;let ul=0;const QT={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,c,l,h){if(t==null)JT(e,n,r,s,i,o,c,l,h);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}XT(t,e,n,r,s,o,c,l,h)}},hydrate:YT,normalize:ZT},wu=QT;function xi(t,e){const n=t.props&&t.props[e];fe(n)&&n()}function JT(t,e,n,r,s,i,o,c,l){const{p:h,o:{createElement:u}}=l,d=u("div"),g=t.suspense=Tm(t,s,r,e,d,n,i,o,c,l);h(null,g.pendingBranch=t.ssContent,d,null,r,g,i,o),g.deps>0?(xi(t,"onPending"),xi(t,"onFallback"),h(null,t.ssFallback,e,n,r,null,i,o),Es(g,t.ssFallback)):g.resolve(!1,!0)}function XT(t,e,n,r,s,i,o,c,{p:l,um:h,o:{createElement:u}}){const d=e.suspense=t.suspense;d.vnode=e,e.el=t.el;const g=e.ssContent,m=e.ssFallback,{activeBranch:I,pendingBranch:b,isInFallback:O,isHydrating:D}=d;if(b)d.pendingBranch=g,zt(g,b)?(l(b,g,d.hiddenContainer,null,s,d,i,o,c),d.deps<=0?d.resolve():O&&(D||(l(I,m,n,r,s,null,i,o,c),Es(d,m)))):(d.pendingId=ul++,D?(d.isHydrating=!1,d.activeBranch=b):h(b,s,d),d.deps=0,d.effects.length=0,d.hiddenContainer=u("div"),O?(l(null,g,d.hiddenContainer,null,s,d,i,o,c),d.deps<=0?d.resolve():(l(I,m,n,r,s,null,i,o,c),Es(d,m))):I&&zt(g,I)?(l(I,g,n,r,s,d,i,o,c),d.resolve(!0)):(l(null,g,d.hiddenContainer,null,s,d,i,o,c),d.deps<=0&&d.resolve()));else if(I&&zt(g,I))l(I,g,n,r,s,d,i,o,c),Es(d,g);else if(xi(e,"onPending"),d.pendingBranch=g,g.shapeFlag&512?d.pendingId=g.component.suspenseId:d.pendingId=ul++,l(null,g,d.hiddenContainer,null,s,d,i,o,c),d.deps<=0)d.resolve();else{const{timeout:N,pendingId:w}=d;N>0?setTimeout(()=>{d.pendingId===w&&d.fallback(m)},N):N===0&&d.fallback(m)}}function Tm(t,e,n,r,s,i,o,c,l,h,u=!1){const{p:d,m:g,um:m,n:I,o:{parentNode:b,remove:O}}=h;let D;const N=ew(t);N&&e&&e.pendingBranch&&(D=e.pendingId,e.deps++);const w=t.props?pg(t.props.timeout):void 0,k=i,V={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:ul++,timeout:typeof w=="number"?w:-1,activeBranch:null,pendingBranch:null,isInFallback:!u,isHydrating:u,isUnmounted:!1,effects:[],resolve(F=!1,R=!1){const{vnode:v,activeBranch:y,pendingBranch:E,pendingId:P,effects:S,parentComponent:T,container:ge}=V;let _e=!1;V.isHydrating?V.isHydrating=!1:F||(_e=y&&E.transition&&E.transition.mode==="out-in",_e&&(y.transition.afterLeave=()=>{P===V.pendingId&&(g(E,ge,i===k?I(y):i,0),sl(S))}),y&&(b(y.el)===ge&&(i=I(y)),m(y,T,V,!0)),_e||g(E,ge,i,0)),Es(V,E),V.pendingBranch=null,V.isInFallback=!1;let te=V.parent,le=!1;for(;te;){if(te.pendingBranch){te.effects.push(...S),le=!0;break}te=te.parent}!le&&!_e&&sl(S),V.effects=[],N&&e&&e.pendingBranch&&D===e.pendingId&&(e.deps--,e.deps===0&&!R&&e.resolve()),xi(v,"onResolve")},fallback(F){if(!V.pendingBranch)return;const{vnode:R,activeBranch:v,parentComponent:y,container:E,namespace:P}=V;xi(R,"onFallback");const S=I(v),T=()=>{V.isInFallback&&(d(null,F,E,S,y,null,P,c,l),Es(V,F))},ge=F.transition&&F.transition.mode==="out-in";ge&&(v.transition.afterLeave=T),V.isInFallback=!0,m(v,y,null,!0),ge||T()},move(F,R,v){V.activeBranch&&g(V.activeBranch,F,R,v),V.container=F},next(){return V.activeBranch&&I(V.activeBranch)},registerDep(F,R,v){const y=!!V.pendingBranch;y&&V.deps++;const E=F.vnode.el;F.asyncDep.catch(P=>{Bs(P,F,0)}).then(P=>{if(F.isUnmounted||V.isUnmounted||V.pendingId!==F.suspenseId)return;F.asyncResolved=!0;const{vnode:S}=F;fl(F,P),E&&(S.el=E);const T=!E&&F.subTree.el;R(F,S,b(E||F.subTree.el),E?null:I(F.subTree),V,o,v),T&&O(T),Ua(F,S.el),y&&--V.deps===0&&V.resolve()})},unmount(F,R){V.isUnmounted=!0,V.activeBranch&&m(V.activeBranch,n,F,R),V.pendingBranch&&m(V.pendingBranch,n,F,R)}};return V}function YT(t,e,n,r,s,i,o,c,l){const h=e.suspense=Tm(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,c,!0),u=l(t,h.pendingBranch=e.ssContent,n,h,i,o);return h.deps===0&&h.resolve(!1,!0),u}function ZT(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=Vf(r?n.default:n),t.ssFallback=r?Vf(n.fallback):$e(ot)}function Vf(t){let e;if(fe(t)){const n=Ss&&t._c;n&&(t._d=!1,Kt()),t=t(),n&&(t._d=!0,e=Pt,Im())}return ue(t)&&(t=WT(t)),t=Dt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function wm(t,e){e&&e.pendingBranch?ue(t)?e.effects.push(...t):e.effects.push(t):sl(t)}function Es(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,Ua(r,s))}function ew(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const _t=Symbol.for("v-fgt"),Lr=Symbol.for("v-txt"),ot=Symbol.for("v-cmt"),vi=Symbol.for("v-stc"),Ei=[];let Pt=null;function Kt(t=!1){Ei.push(Pt=t?null:[])}function Im(){Ei.pop(),Pt=Ei[Ei.length-1]||null}let Ss=1;function xf(t,e=!1){Ss+=t,t<0&&Pt&&e&&(Pt.hasOnce=!0)}function bm(t){return t.dynamicChildren=Ss>0?Pt||ps:null,Im(),Ss>0&&Pt&&Pt.push(t),t}function Am(t,e,n,r,s,i){return bm(Kn(t,e,n,r,s,i,!0))}function Xn(t,e,n,r,s){return bm($e(t,e,n,r,s,!0))}function Ur(t){return t?t.__v_isVNode===!0:!1}function zt(t,e){return t.type===e.type&&t.key===e.key}const Rm=({key:t})=>t??null,Bo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?He(t)||et(t)||fe(t)?{i:ct,r:t,k:e,f:!!n}:t:null);function Kn(t,e=null,n=null,r=0,s=null,i=t===_t?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Rm(e),ref:e&&Bo(e),scopeId:Bg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ct};return c?(Iu(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=He(n)?8:16),Ss>0&&!o&&Pt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Pt.push(l),l}const $e=tw;function tw(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Yg)&&(t=ot),Ur(t)){const c=Sn(t,e,!0);return n&&Iu(c,n),Ss>0&&!i&&Pt&&(c.shapeFlag&6?Pt[Pt.indexOf(t)]=c:Pt.push(c)),c.patchFlag=-2,c}if(uw(t)&&(t=t.__vccOpts),e){e=nw(e);let{class:c,style:l}=e;c&&!He(c)&&(e.class=au(c)),xe(l)&&(gu(l)&&!ue(l)&&(l=tt({},l)),e.style=ou(l))}const o=He(t)?1:aa(t)?128:jg(t)?64:xe(t)?4:fe(t)?2:0;return Kn(t,e,n,r,s,o,i,!0)}function nw(t){return t?gu(t)||am(t)?tt({},t):t:null}function Sn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,h=e?Cm(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Rm(h),ref:e&&e.ref?n&&i?ue(i)?i.concat(Bo(e)):[i,Bo(e)]:Bo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==_t?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Sn(t.ssContent),ssFallback:t.ssFallback&&Sn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Rs(u,l.clone(u)),u}function Sm(t=" ",e=0){return $e(Lr,null,t,e)}function nD(t,e){const n=$e(vi,null,t);return n.staticCount=e,n}function Dt(t){return t==null||typeof t=="boolean"?$e(ot):ue(t)?$e(_t,null,t.slice()):Ur(t)?zn(t):$e(Lr,null,String(t))}function zn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Sn(t)}function Iu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ue(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Iu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!am(e)?e._ctx=ct:s===3&&ct&&(ct.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:ct},n=32):(e=String(e),r&64?(n=16,e=[Sm(e)]):n=8);t.children=e,t.shapeFlag|=n}function Cm(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=au([e.class,r.class]));else if(s==="style")e.style=ou([e.style,r.style]);else if(zi(s)){const i=e[s],o=r[s];o&&i!==o&&!(ue(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function St(t,e,n,r=null){Xt(t,e,7,[n,r])}const rw=rm();let sw=0;function iw(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||rw,i={uid:sw++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new yg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lm(r,s),emitsOptions:Em(r,s),emit:null,emitted:null,propsDefaults:De,inheritAttrs:r.inheritAttrs,ctx:De,data:De,props:De,attrs:De,slots:De,refs:De,setupState:De,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=qT.bind(null,i),t.ce&&t.ce(i),i}let Ge=null;const bu=()=>Ge||ct;let ca,hl;{const t=Ma(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ca=e("__VUE_INSTANCE_SETTERS__",n=>Ge=n),hl=e("__VUE_SSR_SETTERS__",n=>Cs=n)}const Xi=t=>{const e=Ge;return ca(t),t.scope.on(),()=>{t.scope.off(),ca(e)}},Mf=()=>{Ge&&Ge.scope.off(),ca(null)};function Pm(t){return t.vnode.shapeFlag&4}let Cs=!1;function ow(t,e=!1,n=!1){e&&hl(e);const{props:r,children:s}=t.vnode,i=Pm(t);OT(t,r,i,e),xT(t,s,n);const o=i?aw(t,e):void 0;return e&&hl(!1),o}function aw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,IT);const{setup:r}=n;if(r){vr();const s=t.setupContext=r.length>1?lw(t):null,i=Xi(t),o=Qi(r,t,0,[t.props,s]),c=ug(o);if(Er(),i(),(c||t.sp)&&!ir(t)&&yu(t),c){if(o.then(Mf,Mf),e)return o.then(l=>{fl(t,l)}).catch(l=>{Bs(l,t,0)});t.asyncDep=o}else fl(t,o)}else km(t)}function fl(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:xe(e)&&(t.setupState=Mg(e)),km(t)}function km(t,e,n){const r=t.type;t.render||(t.render=r.render||on);{const s=Xi(t);vr();try{bT(t)}finally{Er(),s()}}}const cw={get(t,e){return mt(t,"get",""),t[e]}};function lw(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,cw),slots:t.slots,emit:t.emit,expose:e}}function Au(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Mg(HE(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in yi)return yi[n](t)},has(e,n){return n in e||n in yi}})):t.proxy}function dl(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function uw(t){return fe(t)&&"__vccOpts"in t}const Ft=(t,e)=>XE(t,e,Cs);function vt(t,e,n){const r=arguments.length;return r===2?xe(e)&&!ue(e)?Ur(e)?$e(t,null,[e]):$e(t,e):$e(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ur(n)&&(n=[n]),$e(t,e,n))}const hw="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let pl;const Lf=typeof window<"u"&&window.trustedTypes;if(Lf)try{pl=Lf.createPolicy("vue",{createHTML:t=>t})}catch{}const Om=pl?t=>pl.createHTML(t):t=>t,fw="http://www.w3.org/2000/svg",dw="http://www.w3.org/1998/Math/MathML",vn=typeof document<"u"?document:null,Ff=vn&&vn.createElement("template"),pw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?vn.createElementNS(fw,t):e==="mathml"?vn.createElementNS(dw,t):n?vn.createElement(t,{is:n}):vn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>vn.createTextNode(t),createComment:t=>vn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>vn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ff.innerHTML=Om(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Ff.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},$n="transition",ai="animation",Mi=Symbol("_vtc"),Nm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},gw=tt({},$g,Nm),mw=t=>(t.displayName="Transition",t.props=gw,t),_w=mw((t,{slots:e})=>vt(iT,yw(t),e)),Cr=(t,e=[])=>{ue(t)?t.forEach(n=>n(...e)):t&&t(...e)},Uf=t=>t?ue(t)?t.some(e=>e.length>1):t.length>1:!1;function yw(t){const e={};for(const S in t)S in Nm||(e[S]=t[S]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:h=o,appearToClass:u=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,I=vw(s),b=I&&I[0],O=I&&I[1],{onBeforeEnter:D,onEnter:N,onEnterCancelled:w,onLeave:k,onLeaveCancelled:V,onBeforeAppear:F=D,onAppear:R=N,onAppearCancelled:v=w}=e,y=(S,T,ge,_e)=>{S._enterCancelled=_e,Pr(S,T?u:c),Pr(S,T?h:o),ge&&ge()},E=(S,T)=>{S._isLeaving=!1,Pr(S,d),Pr(S,m),Pr(S,g),T&&T()},P=S=>(T,ge)=>{const _e=S?R:N,te=()=>y(T,S,ge);Cr(_e,[T,te]),Bf(()=>{Pr(T,S?l:i),_n(T,S?u:c),Uf(_e)||jf(T,r,b,te)})};return tt(e,{onBeforeEnter(S){Cr(D,[S]),_n(S,i),_n(S,o)},onBeforeAppear(S){Cr(F,[S]),_n(S,l),_n(S,h)},onEnter:P(!1),onAppear:P(!0),onLeave(S,T){S._isLeaving=!0;const ge=()=>E(S,T);_n(S,d),S._enterCancelled?(_n(S,g),qf()):(qf(),_n(S,g)),Bf(()=>{S._isLeaving&&(Pr(S,d),_n(S,m),Uf(k)||jf(S,r,O,ge))}),Cr(k,[S,ge])},onEnterCancelled(S){y(S,!1,void 0,!0),Cr(w,[S])},onAppearCancelled(S){y(S,!0,void 0,!0),Cr(v,[S])},onLeaveCancelled(S){E(S),Cr(V,[S])}})}function vw(t){if(t==null)return null;if(xe(t))return[Nc(t.enter),Nc(t.leave)];{const e=Nc(t);return[e,e]}}function Nc(t){return pg(t)}function _n(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Mi]||(t[Mi]=new Set)).add(e)}function Pr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Mi];n&&(n.delete(e),n.size||(t[Mi]=void 0))}function Bf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Ew=0;function jf(t,e,n,r){const s=t._endId=++Ew,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=Tw(t,e);if(!o)return r();const h=o+"end";let u=0;const d=()=>{t.removeEventListener(h,g),i()},g=m=>{m.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},c+1),t.addEventListener(h,g)}function Tw(t,e){const n=window.getComputedStyle(t),r=I=>(n[I]||"").split(", "),s=r(`${$n}Delay`),i=r(`${$n}Duration`),o=$f(s,i),c=r(`${ai}Delay`),l=r(`${ai}Duration`),h=$f(c,l);let u=null,d=0,g=0;e===$n?o>0&&(u=$n,d=o,g=i.length):e===ai?h>0&&(u=ai,d=h,g=l.length):(d=Math.max(o,h),u=d>0?o>h?$n:ai:null,g=u?u===$n?i.length:l.length:0);const m=u===$n&&/\b(transform|all)(,|$)/.test(r(`${$n}Property`).toString());return{type:u,timeout:d,propCount:g,hasTransform:m}}function $f(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Hf(n)+Hf(t[r])))}function Hf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function qf(){return document.body.offsetHeight}function ww(t,e,n){const r=t[Mi];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Wf=Symbol("_vod"),Iw=Symbol("_vsh"),bw=Symbol(""),Aw=/(^|;)\s*display\s*:/;function Rw(t,e,n){const r=t.style,s=He(n);let i=!1;if(n&&!s){if(e)if(He(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&jo(r,c,"")}else for(const o in e)n[o]==null&&jo(r,o,"");for(const o in n)o==="display"&&(i=!0),jo(r,o,n[o])}else if(s){if(e!==n){const o=r[bw];o&&(n+=";"+o),r.cssText=n,i=Aw.test(n)}}else e&&t.removeAttribute("style");Wf in t&&(t[Wf]=i?r.display:"",t[Iw]&&(r.display="none"))}const Kf=/\s*!important$/;function jo(t,e,n){if(ue(n))n.forEach(r=>jo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Sw(t,e);Kf.test(n)?t.setProperty(Wr(r),n.replace(Kf,""),"important"):t[r]=n}}const zf=["Webkit","Moz","ms"],Dc={};function Sw(t,e){const n=Dc[e];if(n)return n;let r=jt(e);if(r!=="filter"&&r in t)return Dc[e]=r;r=xa(r);for(let s=0;s<zf.length;s++){const i=zf[s]+r;if(i in t)return Dc[e]=i}return e}const Gf="http://www.w3.org/1999/xlink";function Qf(t,e,n,r,s,i=wE(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Gf,e.slice(6,e.length)):t.setAttributeNS(Gf,e,n):n==null||i&&!gg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Dn(n)?String(n):n)}function Jf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Om(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=gg(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Cw(t,e,n,r){t.addEventListener(e,n,r)}function Pw(t,e,n,r){t.removeEventListener(e,n,r)}const Xf=Symbol("_vei");function kw(t,e,n,r,s=null){const i=t[Xf]||(t[Xf]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=Ow(e);if(r){const h=i[e]=Vw(r,s);Cw(t,c,h,l)}else o&&(Pw(t,c,o,l),i[e]=void 0)}}const Yf=/(?:Once|Passive|Capture)$/;function Ow(t){let e;if(Yf.test(t)){e={};let r;for(;r=t.match(Yf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Wr(t.slice(2)),e]}let Vc=0;const Nw=Promise.resolve(),Dw=()=>Vc||(Nw.then(()=>Vc=0),Vc=Date.now());function Vw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Xt(xw(r,n.value),e,5,[r])};return n.value=t,n.attached=Dw(),n}function xw(t,e){if(ue(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Zf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Mw=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?ww(t,r,o):e==="style"?Rw(t,n,r):zi(e)?ru(e)||kw(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Lw(t,e,r,o))?(Jf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Qf(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!He(r))?Jf(t,jt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Qf(t,e,r,o))};function Lw(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Zf(e)&&fe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Zf(e)&&He(n)?!1:e in t}const Dm=tt({patchProp:Mw},pw);let Ti,ed=!1;function Fw(){return Ti||(Ti=LT(Dm))}function Uw(){return Ti=ed?Ti:FT(Dm),ed=!0,Ti}const Bw=(...t)=>{const e=Fw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=xm(r);if(!s)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Vm(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},jw=(...t)=>{const e=Uw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=xm(r);if(s)return n(s,!0,Vm(s))},e};function Vm(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function xm(t){return He(t)?document.querySelector(t):t}const $w=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,Hw=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,qw=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function Ww(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){Kw(t);return}return e}function Kw(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function la(t,e={}){if(typeof t!="string")return t;const n=t.trim();if(t[0]==='"'&&t.endsWith('"')&&!t.includes("\\"))return n.slice(1,-1);if(n.length<=9){const r=n.toLowerCase();if(r==="true")return!0;if(r==="false")return!1;if(r==="undefined")return;if(r==="null")return null;if(r==="nan")return Number.NaN;if(r==="infinity")return Number.POSITIVE_INFINITY;if(r==="-infinity")return Number.NEGATIVE_INFINITY}if(!qw.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if($w.test(t)||Hw.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,Ww)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}const zw=/#/g,Gw=/&/g,Qw=/\//g,Jw=/=/g,Ru=/\+/g,Xw=/%5e/gi,Yw=/%60/gi,Zw=/%7c/gi,eI=/%20/gi;function tI(t){return encodeURI(""+t).replace(Zw,"|")}function gl(t){return tI(typeof t=="string"?t:JSON.stringify(t)).replace(Ru,"%2B").replace(eI,"+").replace(zw,"%23").replace(Gw,"%26").replace(Yw,"`").replace(Xw,"^").replace(Qw,"%2F")}function xc(t){return gl(t).replace(Jw,"%3D")}function ua(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function nI(t){return ua(t.replace(Ru," "))}function rI(t){return ua(t.replace(Ru," "))}function Mm(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=nI(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=rI(r[2]||"");e[s]===void 0?e[s]=i:Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]}return e}function sI(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${xc(t)}=${gl(n)}`).join("&"):`${xc(t)}=${gl(e)}`:xc(t)}function iI(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>sI(e,t[e])).filter(Boolean).join("&")}const oI=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,aI=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,cI=/^([/\\]\s*){2,}[^/\\]/,lI=/^[\s\0]*(blob|data|javascript|vbscript):$/i,uI=/\/$|\/\?|\/#/,hI=/^\.?\//;function Kr(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?oI.test(t):aI.test(t)||(e.acceptRelative?cI.test(t):!1)}function fI(t){return!!t&&lI.test(t)}function ml(t="",e){return e?uI.test(t):t.endsWith("/")}function Su(t="",e){if(!e)return(ml(t)?t.slice(0,-1):t)||"/";if(!ml(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");s>=0&&(n=t.slice(0,s),r=t.slice(s));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+r}function _l(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(ml(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");if(s>=0&&(n=t.slice(0,s),r=t.slice(s),!n))return r;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+r}function dI(t=""){return t.startsWith("/")}function td(t=""){return dI(t)?t:"/"+t}function pI(t,e){if(Fm(e)||Kr(t))return t;const n=Su(e);return t.startsWith(n)?t:Cu(n,t)}function nd(t,e){if(Fm(e))return t;const n=Su(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function Lm(t,e){const n=jm(t),r={...Mm(n.search),...e};return n.search=iI(r),_I(n)}function Fm(t){return!t||t==="/"}function gI(t){return t&&t!=="/"}function Cu(t,...e){let n=t||"";for(const r of e.filter(s=>gI(s)))if(n){const s=r.replace(hI,"");n=_l(n)+s}else n=r;return n}function Um(...t){var o,c,l,h;const e=/\/(?!\/)/,n=t.filter(Boolean),r=[];let s=0;for(const u of n)if(!(!u||u==="/")){for(const[d,g]of u.split(e).entries())if(!(!g||g===".")){if(g===".."){if(r.length===1&&Kr(r[0]))continue;r.pop(),s--;continue}if(d===1&&((o=r[r.length-1])!=null&&o.endsWith(":/"))){r[r.length-1]+="/"+g;continue}r.push(g),s++}}let i=r.join("/");return s>=0?(c=n[0])!=null&&c.startsWith("/")&&!i.startsWith("/")?i="/"+i:(l=n[0])!=null&&l.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*s)+i,(h=n[n.length-1])!=null&&h.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function mI(t,e,n={}){return n.trailingSlash||(t=_l(t),e=_l(e)),n.leadingSlash||(t=td(t),e=td(e)),n.encoding||(t=ua(t),e=ua(e)),t===e}const Bm=Symbol.for("ufo:protocolRelative");function jm(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,d,g=""]=n;return{protocol:d.toLowerCase(),pathname:g,href:d+g,auth:"",host:"",search:"",hash:""}}if(!Kr(t,{acceptRelative:!0}))return rd(t);const[,r="",s,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",c=""]=i.match(/([^#/?]*)(.*)?/)||[];r==="file:"&&(c=c.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:h,hash:u}=rd(c);return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:l,search:h,hash:u,[Bm]:!r}}function rd(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function _I(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",s=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol||t[Bm]?(t.protocol||"")+"//":"")+s+i+e+n+r}class yI extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function vI(t){var l,h,u,d,g;const e=((l=t.error)==null?void 0:l.message)||((h=t.error)==null?void 0:h.toString())||"",n=((u=t.request)==null?void 0:u.method)||((d=t.options)==null?void 0:d.method)||"GET",r=((g=t.request)==null?void 0:g.url)||String(t.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${s}: ${i}${e?` ${e}`:""}`,c=new yI(o,t.error?{cause:t.error}:void 0);for(const m of["request","options","response"])Object.defineProperty(c,m,{get(){return t[m]}});for(const[m,I]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(c,m,{get(){return t.response&&t.response[I]}});return c}const EI=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function sd(t="GET"){return EI.has(t.toUpperCase())}function TI(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const wI=new Set(["image/svg","application/xml","application/xhtml","application/html"]),II=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function bI(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return II.test(e)?"json":wI.has(e)||e.startsWith("text/")?"text":"blob"}function AI(t,e,n,r){const s=RI((e==null?void 0:e.headers)??(t==null?void 0:t.headers),n==null?void 0:n.headers,r);let i;return(n!=null&&n.query||n!=null&&n.params||e!=null&&e.params||e!=null&&e.query)&&(i={...n==null?void 0:n.params,...n==null?void 0:n.query,...e==null?void 0:e.params,...e==null?void 0:e.query}),{...n,...e,query:i,params:i,headers:s}}function RI(t,e,n){if(!e)return new n(t);const r=new n(e);if(t)for(const[s,i]of Symbol.iterator in t||Array.isArray(t)?t:new n(t))r.set(s,i);return r}async function Oo(t,e){if(e)if(Array.isArray(e))for(const n of e)await n(t);else await e(t)}const SI=new Set([408,409,425,429,500,502,503,504]),CI=new Set([101,204,205,304]);function $m(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=t;async function s(c){const l=c.error&&c.error.name==="AbortError"&&!c.options.timeout||!1;if(c.options.retry!==!1&&!l){let u;typeof c.options.retry=="number"?u=c.options.retry:u=sd(c.options.method)?0:1;const d=c.response&&c.response.status||500;if(u>0&&(Array.isArray(c.options.retryStatusCodes)?c.options.retryStatusCodes.includes(d):SI.has(d))){const g=typeof c.options.retryDelay=="function"?c.options.retryDelay(c):c.options.retryDelay||0;return g>0&&await new Promise(m=>setTimeout(m,g)),i(c.request,{...c.options,retry:u-1})}}const h=vI(c);throw Error.captureStackTrace&&Error.captureStackTrace(h,i),h}const i=async function(l,h={}){const u={request:l,options:AI(l,h,t.defaults,n),response:void 0,error:void 0};u.options.method&&(u.options.method=u.options.method.toUpperCase()),u.options.onRequest&&await Oo(u,u.options.onRequest),typeof u.request=="string"&&(u.options.baseURL&&(u.request=pI(u.request,u.options.baseURL)),u.options.query&&(u.request=Lm(u.request,u.options.query),delete u.options.query),"query"in u.options&&delete u.options.query,"params"in u.options&&delete u.options.params),u.options.body&&sd(u.options.method)&&(TI(u.options.body)?(u.options.body=typeof u.options.body=="string"?u.options.body:JSON.stringify(u.options.body),u.options.headers=new n(u.options.headers||{}),u.options.headers.has("content-type")||u.options.headers.set("content-type","application/json"),u.options.headers.has("accept")||u.options.headers.set("accept","application/json")):("pipeTo"in u.options.body&&typeof u.options.body.pipeTo=="function"||typeof u.options.body.pipe=="function")&&("duplex"in u.options||(u.options.duplex="half")));let d;if(!u.options.signal&&u.options.timeout){const m=new r;d=setTimeout(()=>{const I=new Error("[TimeoutError]: The operation was aborted due to timeout");I.name="TimeoutError",I.code=23,m.abort(I)},u.options.timeout),u.options.signal=m.signal}try{u.response=await e(u.request,u.options)}catch(m){return u.error=m,u.options.onRequestError&&await Oo(u,u.options.onRequestError),await s(u)}finally{d&&clearTimeout(d)}if((u.response.body||u.response._bodyInit)&&!CI.has(u.response.status)&&u.options.method!=="HEAD"){const m=(u.options.parseResponse?"json":u.options.responseType)||bI(u.response.headers.get("content-type")||"");switch(m){case"json":{const I=await u.response.text(),b=u.options.parseResponse||la;u.response._data=b(I);break}case"stream":{u.response._data=u.response.body||u.response._bodyInit;break}default:u.response._data=await u.response[m]()}}return u.options.onResponse&&await Oo(u,u.options.onResponse),!u.options.ignoreResponseError&&u.response.status>=400&&u.response.status<600?(u.options.onResponseError&&await Oo(u,u.options.onResponseError),await s(u)):u.response},o=async function(l,h){return(await i(l,h))._data};return o.raw=i,o.native=(...c)=>e(...c),o.create=(c={},l={})=>$m({...t,...l,defaults:{...t.defaults,...l.defaults,...c}}),o}const ha=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),PI=ha.fetch?(...t)=>ha.fetch(...t):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),kI=ha.Headers,OI=ha.AbortController,NI=$m({fetch:PI,Headers:kI,AbortController:OI}),DI=NI,VI=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},fa=VI().app,xI=()=>fa.baseURL,MI=()=>fa.buildAssetsDir,Pu=(...t)=>Um(Hm(),MI(),...t),Hm=(...t)=>{const e=fa.cdnURL||fa.baseURL;return t.length?Um(e,...t):e};globalThis.__buildAssetsURL=Pu,globalThis.__publicAssetsURL=Hm;globalThis.$fetch||(globalThis.$fetch=DI.create({baseURL:xI()}));function yl(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?yl(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const LI={run:t=>t()},FI=()=>LI,qm=typeof console.createTask<"u"?console.createTask:FI;function UI(t,e){const n=e.shift(),r=qm(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function BI(t,e){const n=e.shift(),r=qm(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function Mc(t,e){for(const n of[...t])n(e)}class jI{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=yl(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=yl(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(UI,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(BI,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&Mc(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&Mc(this._after,s)}):(this._after&&s&&Mc(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function Wm(){return new jI}function $I(t={}){let e,n=!1;const r=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,c)=>{c||r(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,c)=>{r(o),e=o;try{return s?s.run(o,c):c()}finally{n||(e=void 0)}},async callAsync(o,c){e=o;const l=()=>{e=o},h=()=>e===o?l:void 0;vl.add(h);try{const u=s?s.run(o,c):c();return n||(e=void 0),await u}finally{vl.delete(h)}}}}function HI(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=$I({...t,...r})),e[n]}}}const da=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},id="__unctx__",qI=da[id]||(da[id]=HI()),WI=(t,e={})=>qI.get(t,e),od="__unctx_async_handlers__",vl=da[od]||(da[od]=new Set);function Ts(t){const e=[];for(const s of vl){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const KI=!1,El=!1,zI=!1,rD={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},GI=null,QI="#__nuxt",Km="nuxt-app",ad=36e5,JI="vite:preloadError";function zm(t=Km){return WI(t,{asyncContext:!1})}const XI="__nuxt_plugin";function YI(t){var s;let e=0;const n={_id:t.id||Km||"nuxt-app",_scope:IE(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.16.0"},get vue(){return n.vueApp.version}},payload:Tn({...((s=t.ssrContext)==null?void 0:s.payload)||{},data:Tn({}),state:Tr({}),once:new Set,_errors:Tn({})}),static:{data:{}},runWithContext(i){return n._scope.active&&!vg()?n._scope.run(()=>cd(n,i)):cd(n,i)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let i=!1;return()=>{if(!i&&(i=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:Tn({}),_payloadRevivers:{},...t};{const i=window.__NUXT__;if(i)for(const o in i)switch(o){case"data":case"state":case"_errors":Object.assign(n.payload[o],i[o]);break;default:n.payload[o]=i[o]}}n.hooks=Wm(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(i,o)=>{const c="$"+i;No(n,c,o),No(n.vueApp.config.globalProperties,c,o)},No(n.vueApp,"$nuxt",n),No(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(JI,o=>{n.callHook("app:chunkError",{error:o.payload}),(n.isHydrating||o.payload.message.includes("Unable to preload CSS"))&&o.preventDefault()}),window.useNuxtApp||(window.useNuxtApp=We);const i=n.hook("app:error",(...o)=>{console.error("[nuxt] error caught during app initialization",...o)});n.hook("app:mounted",i)}const r=n.payload.config;return n.provide("config",r),n}function ZI(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function eb(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}}async function tb(t,e){const n=[],r=[],s=[],i=[];let o=0;async function c(l){var u;const h=((u=l.dependsOn)==null?void 0:u.filter(d=>e.some(g=>g._name===d)&&!n.includes(d)))??[];if(h.length>0)r.push([new Set(h),l]);else{const d=eb(t,l).then(async()=>{l._name&&(n.push(l._name),await Promise.all(r.map(async([g,m])=>{g.has(l._name)&&(g.delete(l._name),g.size===0&&(o++,await c(m)))})))});l.parallel?s.push(d.catch(g=>i.push(g))):await d}}for(const l of e)ZI(t,l);for(const l of e)await c(l);if(await Promise.all(s),o)for(let l=0;l<o;l++)await Promise.all(s);if(i.length)throw i[0]}function dn(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[XI]:!0,_name:e})}function cd(t,e,n){const r=()=>e();return zm(t._id).set(t),t.vueApp.runWithContext(r)}function nb(t){var n;let e;return sm()&&(e=(n=bu())==null?void 0:n.appContext.app.$nuxt),e||(e=zm(t).tryUse()),e||null}function We(t){const e=nb(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function Ba(t){return We().$config}function No(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function rb(t,e){return{ctx:{table:t},matchAll:n=>Qm(n,t)}}function Gm(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([r,s])=>[r,Gm(s)])):new Map(Object.entries(t[n]));return e}function sb(t){return rb(Gm(t))}function Qm(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const r=[];for(const[i,o]of ld(e.wildcard))(t===i||t.startsWith(i+"/"))&&r.push(o);for(const[i,o]of ld(e.dynamic))if(t.startsWith(i+"/")){const c="/"+t.slice(i.length).split("/").splice(2).join("/");r.push(...Qm(c,o))}const s=e.static.get(t);return s&&r.push(s),r.filter(Boolean)}function ld(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function Lc(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function Tl(t,e,n=".",r){if(!Lc(e))return Tl(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:Lc(o)&&Lc(s[i])?s[i]=Tl(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function ib(t){return(...e)=>e.reduce((n,r)=>Tl(n,r,"",t),{})}const Jm=ib();function ob(t,e){try{return e in t}catch{return!1}}class wl extends Error{constructor(n,r={}){super(n,r);jn(this,"statusCode",500);jn(this,"fatal",!1);jn(this,"unhandled",!1);jn(this,"statusMessage");jn(this,"data");jn(this,"cause");r.cause&&!this.cause&&(this.cause=r.cause)}toJSON(){const n={message:this.message,statusCode:bl(this.statusCode,500)};return this.statusMessage&&(n.statusMessage=Xm(this.statusMessage)),this.data!==void 0&&(n.data=this.data),n}}jn(wl,"__h3_error__",!0);function Il(t){if(typeof t=="string")return new wl(t);if(ab(t))return t;const e=new wl(t.message??t.statusMessage??"",{cause:t.cause||t});if(ob(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=bl(t.statusCode,e.statusCode):t.status&&(e.statusCode=bl(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;Xm(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function ab(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const cb=/[^\u0009\u0020-\u007E]/g;function Xm(t=""){return t.replace(cb,"")}function bl(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const Ym=Symbol("layout-meta"),Yi=Symbol("route"),$t=()=>{var t;return(t=We())==null?void 0:t.$router},ku=()=>sm()?kt(Yi,We()._route):We()._route;const lb=()=>{try{if(We()._processingMiddleware)return!0}catch{return!1}return!1},sD=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:"path"in t?ub(t):$t().resolve(t).href;if(e!=null&&e.open){const{target:l="_blank",windowFeatures:h={}}=e.open,u=Object.entries(h).filter(([d,g])=>g!==void 0).map(([d,g])=>`${d.toLowerCase()}=${g}`).join(", ");return open(n,l,u),Promise.resolve()}const r=Kr(n,{acceptRelative:!0}),s=(e==null?void 0:e.external)||r;if(s){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:l}=new URL(n,window.location.href);if(l&&fI(l))throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)}const i=lb();if(!s&&i){if(e!=null&&e.replace){if(typeof t=="string"){const{pathname:l,search:h,hash:u}=jm(t);return{path:l,...h&&{query:Mm(h)},...u&&{hash:u},replace:!0}}return{...t,replace:!0}}return t}const o=$t(),c=We();return s?(c._scope.stop(),e!=null&&e.replace?location.replace(n):location.href=n,i?c.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?o.replace(t):o.push(t)};function ub(t){return Lm(t.path||"",t.query||{})+(t.hash||"")}const Zm="__nuxt_error",ja=()=>GE(We().payload,"error"),fs=t=>{const e=$a(t);try{const n=We(),r=ja();n.hooks.callHook("app:error",e),r.value||(r.value=e)}catch{throw e}return e},e_=async(t={})=>{const e=We(),n=ja();e.callHook("app:error:cleared",t),t.redirect&&await $t().replace(t.redirect),n.value=GI},hb=t=>!!t&&typeof t=="object"&&Zm in t,$a=t=>{const e=Il(t);return Object.defineProperty(e,Zm,{value:!0,configurable:!1,writable:!1}),e};function ud(t){const e=db(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let s=0;s<n.byteLength;s++)r.setUint8(s,e.charCodeAt(s));return n}const fb="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function db(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let s=0;s<t.length;s++)n<<=6,n|=fb.indexOf(t[s]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const pb=-1,gb=-2,mb=-3,_b=-4,yb=-5,vb=-6;function Eb(t,e){return Tb(JSON.parse(t),e)}function Tb(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function s(i,o=!1){if(i===pb)return;if(i===mb)return NaN;if(i===_b)return 1/0;if(i===yb)return-1/0;if(i===vb)return-0;if(o)throw new Error("Invalid input");if(i in r)return r[i];const c=n[i];if(!c||typeof c!="object")r[i]=c;else if(Array.isArray(c))if(typeof c[0]=="string"){const l=c[0],h=e==null?void 0:e[l];if(h)return r[i]=h(s(c[1]));switch(l){case"Date":r[i]=new Date(c[1]);break;case"Set":const u=new Set;r[i]=u;for(let m=1;m<c.length;m+=1)u.add(s(c[m]));break;case"Map":const d=new Map;r[i]=d;for(let m=1;m<c.length;m+=2)d.set(s(c[m]),s(c[m+1]));break;case"RegExp":r[i]=new RegExp(c[1],c[2]);break;case"Object":r[i]=Object(c[1]);break;case"BigInt":r[i]=BigInt(c[1]);break;case"null":const g=Object.create(null);r[i]=g;for(let m=1;m<c.length;m+=2)g[c[m]]=s(c[m+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const m=globalThis[l],I=c[1],b=ud(I),O=new m(b);r[i]=O;break}case"ArrayBuffer":{const m=c[1],I=ud(m);r[i]=I;break}default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(c.length);r[i]=l;for(let h=0;h<c.length;h+=1){const u=c[h];u!==gb&&(l[h]=s(u))}}else{const l={};r[i]=l;for(const h in c){const u=c[h];l[h]=s(u)}}return r[i]}return s(0)}const wb=new Set(["link","style","script","noscript"]),Ib=new Set(["title","titleTemplate","script","style","noscript"]),hd=new Set(["base","meta","link","style","script","noscript"]),bb=new Set(["title","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),Ab=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),Rb=new Set(["key","tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent","processTemplateParams"]),Sb=new Set(["templateParams","htmlAttrs","bodyAttrs"]),Cb=new Set(["theme-color","google-site-verification","og","article","book","profile","twitter","author"]);const Pb=["name","property","http-equiv"];function t_(t){const e=t.split(":")[1];return Cb.has(e)}function Al(t){const{props:e,tag:n}=t;if(Ab.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(t.tag==="meta"){for(const r of Pb)if(e[r]!==void 0)return`${n}:${e[r]}`}if(t.key)return`${n}:key:${t.key}`;if(e.id)return`${n}:id:${e.id}`;if(Ib.has(n)){const r=t.textContent||t.innerHTML;if(r)return`${n}:content:${r}`}}function fd(t){const e=t._h||t._d;if(e)return e;const n=t.textContent||t.innerHTML;return n||`${t.tag}:${Object.entries(t.props).map(([r,s])=>`${r}:${String(s)}`).join(",")}`}function Rl(t,e,n){typeof t==="function"&&(!n||n!=="titleTemplate"&&!(n[0]==="o"&&n[1]==="n"))&&(t=t());let s;if(e&&(s=e(n,t)),Array.isArray(s))return s.map(i=>Rl(i,e));if((s==null?void 0:s.constructor)===Object){const i={};for(const o of Object.keys(s))i[o]=Rl(s[o],e,o);return i}return s}function kb(t,e){const n=t==="style"?new Map:new Set;function r(s){const i=s.trim();if(i)if(t==="style"){const[o,...c]=i.split(":").map(l=>l.trim());o&&c.length&&n.set(o,c.join(":"))}else i.split(" ").filter(Boolean).forEach(o=>n.add(o))}return typeof e=="string"?t==="style"?e.split(";").forEach(r):r(e):Array.isArray(e)?e.forEach(s=>r(s)):e&&typeof e=="object"&&Object.entries(e).forEach(([s,i])=>{i&&i!=="false"&&(t==="style"?n.set(s.trim(),i):r(s))}),n}function n_(t,e){return t.props=t.props||{},e&&Object.entries(e).forEach(([n,r])=>{if(r===null){t.props[n]=null;return}if(n==="class"||n==="style"){t.props[n]=kb(n,r);return}if(Rb.has(n)){if(["textContent","innerHTML"].includes(n)&&typeof r=="object"){let o=e.type;if(e.type||(o="application/json"),!(o!=null&&o.endsWith("json"))&&o!=="speculationrules")return;e.type=o,t.props.type=o,t[n]=JSON.stringify(r)}else t[n]=r;return}const s=String(r),i=n.startsWith("data-");s==="true"||s===""?t.props[n]=i?"true":!0:!r&&i&&s==="false"?t.props[n]="false":r!==void 0&&(t.props[n]=r)}),t}function Ob(t,e){const n=typeof e=="object"&&typeof e!="function"?e:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},r=n_({tag:t,props:{}},n);return r.key&&wb.has(r.tag)&&(r.props["data-hid"]=r._h=r.key),r.tag==="script"&&typeof r.innerHTML=="object"&&(r.innerHTML=JSON.stringify(r.innerHTML),r.props.type=r.props.type||"application/json"),Array.isArray(r.props.content)?r.props.content.map(s=>({...r,props:{...r.props,content:s}})):r}function Nb(t,e){if(!t)return[];typeof t=="function"&&(t=t());const n=(s,i)=>{for(let o=0;o<e.length;o++)i=e[o](s,i);return i};t=n(void 0,t);const r=[];return t=Rl(t,n),Object.entries(t||{}).forEach(([s,i])=>{if(i!==void 0)for(const o of Array.isArray(i)?i:[i])r.push(Ob(s,o))}),r.flat()}const Sl=(t,e)=>t._w===e._w?t._p-e._p:t._w-e._w,dd={base:-10,title:10},Db={critical:-8,high:-1,low:2},pd={meta:{"content-security-policy":-30,charset:-20,viewport:-15},link:{preconnect:20,stylesheet:60,preload:70,modulepreload:70,prefetch:90,"dns-prefetch":90,prerender:90},script:{async:30,defer:80,sync:50},style:{imported:40,sync:60}},Vb=/@import/,ci=t=>t===""||t===!0;function xb(t,e){var i;if(typeof e.tagPriority=="number")return e.tagPriority;let n=100;const r=Db[e.tagPriority]||0,s=t.resolvedOptions.disableCapoSorting?{link:{},script:{},style:{}}:pd;if(e.tag in dd)n=dd[e.tag];else if(e.tag==="meta"){const o=e.props["http-equiv"]==="content-security-policy"?"content-security-policy":e.props.charset?"charset":e.props.name==="viewport"?"viewport":null;o&&(n=pd.meta[o])}else e.tag==="link"&&e.props.rel?n=s.link[e.props.rel]:e.tag==="script"?ci(e.props.async)?n=s.script.async:e.props.src&&!ci(e.props.defer)&&!ci(e.props.async)&&e.props.type!=="module"&&!((i=e.props.type)!=null&&i.endsWith("json"))?n=s.script.sync:ci(e.props.defer)&&e.props.src&&!ci(e.props.async)&&(n=s.script.defer):e.tag==="style"&&(n=e.innerHTML&&Vb.test(e.innerHTML)?s.style.imported:s.style.sync);return(n||100)+r}function gd(t,e){const n=typeof e=="function"?e(t):e,r=n.key||String(t.plugins.size+1);t.plugins.get(r)||(t.plugins.set(r,n),t.hooks.addHooks(n.hooks||{}))}function Mb(t={}){var c;const e=Wm();e.addHooks(t.hooks||{});const n=!t.document,r=new Map,s=new Map,i=[],o={_entryCount:1,plugins:s,dirty:!1,resolvedOptions:t,hooks:e,ssr:n,entries:r,headEntries(){return[...r.values()]},use:l=>gd(o,l),push(l,h){const u={...h||{}};delete u.head;const d=u._index??o._entryCount++,g={_i:d,input:l,options:u},m={_poll(I=!1){o.dirty=!0,!I&&i.push(d),e.callHook("entries:updated",o)},dispose(){r.delete(d)&&m._poll(!0)},patch(I){(!u.mode||u.mode==="server"&&n||u.mode==="client"&&!n)&&(g.input=I,r.set(d,g),m._poll())}};return m.patch(l),m},async resolveTags(){var m;const l={tagMap:new Map,tags:[],entries:[...o.entries.values()]};for(await e.callHook("entries:resolve",l);i.length;){const I=i.shift(),b=r.get(I);if(b){const O={tags:Nb(b.input,t.propResolvers||[]).map(D=>Object.assign(D,b.options)),entry:b};await e.callHook("entries:normalize",O),b._tags=O.tags.map((D,N)=>(D._w=xb(o,D),D._p=(b._i<<10)+N,D._d=Al(D),D))}}let h=!1;l.entries.flatMap(I=>(I._tags||[]).map(b=>({...b,props:{...b.props}}))).sort(Sl).reduce((I,b)=>{const O=String(b._d||b._p);if(!I.has(O))return I.set(O,b);const D=I.get(O);if(((b==null?void 0:b.tagDuplicateStrategy)||(Sb.has(b.tag)?"merge":null)||(b.key&&b.key===D.key?"merge":null))==="merge"){const w={...D.props};Object.entries(b.props).forEach(([k,V])=>w[k]=k==="style"?new Map([...D.props.style||new Map,...V]):k==="class"?new Set([...D.props.class||new Set,...V]):V),I.set(O,{...b,props:w})}else b._p>>10===D._p>>10&&t_(b._d)?(I.set(O,Object.assign([...Array.isArray(D)?D:[D],b],b)),h=!0):(b._w===D._w?b._p>D._p:(b==null?void 0:b._w)<(D==null?void 0:D._w))&&I.set(O,b);return I},l.tagMap);const u=l.tagMap.get("title"),d=l.tagMap.get("titleTemplate");if(o._title=u==null?void 0:u.textContent,d){const I=d==null?void 0:d.textContent;if(o._titleTemplate=typeof I=="string"?I:void 0,I){let b=typeof I=="function"?I(u==null?void 0:u.textContent):I;typeof b=="string"&&!o.plugins.has("template-params")&&(b=b.replace("%s",(u==null?void 0:u.textContent)||"")),u?b===null?l.tagMap.delete("title"):l.tagMap.set("title",{...u,textContent:b}):(d.tag="title",d.textContent=b)}}l.tags=Array.from(l.tagMap.values()),h&&(l.tags=l.tags.flat().sort(Sl)),await e.callHook("tags:beforeResolve",l),await e.callHook("tags:resolve",l),await e.callHook("tags:afterResolve",l);const g=[];for(const I of l.tags){const{innerHTML:b,tag:O,props:D}=I;if(bb.has(O)&&!(Object.keys(D).length===0&&!I.innerHTML&&!I.textContent)&&!(O==="meta"&&!D.content&&!D["http-equiv"]&&!D.charset)){if(O==="script"&&b){if((m=D.type)!=null&&m.endsWith("json")){const N=typeof b=="string"?b:JSON.stringify(b);I.innerHTML=N.replace(/</g,"\\u003C")}else typeof b=="string"&&(I.innerHTML=b.replace(new RegExp(`</${O}`,"g"),`<\\/${O}`));I._d=Al(I)}g.push(I)}}return g}};return((t==null?void 0:t.plugins)||[]).forEach(l=>gd(o,l)),o.hooks.callHook("init",o),(c=t.init)==null||c.forEach(l=>l&&o.push(l)),o}const Gn="%separator",Lb=new RegExp(`${Gn}(?:\\s*${Gn})*`,"g");function Fb(t,e,n=!1){var s;let r;if(e==="s"||e==="pageTitle")r=t.pageTitle;else if(e.includes(".")){const i=e.indexOf(".");r=(s=t[e.substring(0,i)])==null?void 0:s[e.substring(i+1)]}else r=t[e];if(r!==void 0)return n?(r||"").replace(/</g,"\\u003C").replace(/"/g,'\\"'):r||""}function Do(t,e,n,r=!1){if(typeof t!="string"||!t.includes("%"))return t;let s=t;try{s=decodeURI(t)}catch{}const i=s.match(/%\w+(?:\.\w+)?/g);if(!i)return t;const o=t.includes(Gn);return t=t.replace(/%\w+(?:\.\w+)?/g,c=>{if(c===Gn||!i.includes(c))return c;const l=Fb(e,c.slice(1),r);return l!==void 0?l:c}).trim(),o&&(t.endsWith(Gn)&&(t=t.slice(0,-Gn.length)),t.startsWith(Gn)&&(t=t.slice(Gn.length)),t=t.replace(Lb,n||"").trim()),t}const md=t=>t.includes(":key")?t:t.split(":").join(":key:"),Ub={key:"aliasSorting",hooks:{"tags:resolve":t=>{let e=!1;for(const n of t.tags){const r=n.tagPriority;if(!r)continue;const s=String(r);if(s.startsWith("before:")){const i=md(s.slice(7)),o=t.tagMap.get(i);o&&(typeof o.tagPriority=="number"&&(n.tagPriority=o.tagPriority),n._p=o._p-1,e=!0)}else if(s.startsWith("after:")){const i=md(s.slice(6)),o=t.tagMap.get(i);o&&(typeof o.tagPriority=="number"&&(n.tagPriority=o.tagPriority),n._p=o._p+1,e=!0)}}e&&(t.tags=t.tags.sort(Sl))}}},Bb={key:"deprecations",hooks:{"entries:normalize":({tags:t})=>{for(const e of t)e.props.children&&(e.innerHTML=e.props.children,delete e.props.children),e.props.hid&&(e.key=e.props.hid,delete e.props.hid),e.props.vmid&&(e.key=e.props.vmid,delete e.props.vmid),e.props.body&&(e.tagPosition="bodyClose",delete e.props.body)}}};async function Cl(t){if(typeof t==="function")return t;if(t instanceof Promise)return await t;if(Array.isArray(t))return await Promise.all(t.map(n=>Cl(n)));if((t==null?void 0:t.constructor)===Object){const n={};for(const r of Object.keys(t))n[r]=await Cl(t[r]);return n}return t}const jb={key:"promises",hooks:{"entries:resolve":async t=>{const e=[];for(const n in t.entries)t.entries[n]._promisesProcessed||e.push(Cl(t.entries[n].input).then(r=>{t.entries[n].input=r,t.entries[n]._promisesProcessed=!0}));await Promise.all(e)}}},$b={meta:"content",link:"href",htmlAttrs:"lang"},Hb=["innerHTML","textContent"],qb=t=>({key:"template-params",hooks:{"tags:resolve":({tagMap:e,tags:n})=>{var i;const r=((i=e.get("templateParams"))==null?void 0:i.props)||{},s=r.separator||"|";delete r.separator,r.pageTitle=Do(r.pageTitle||t._title||"",r,s);for(const o of n){if(o.processTemplateParams===!1)continue;const c=$b[o.tag];if(c&&typeof o.props[c]=="string")o.props[c]=Do(o.props[c],r,s);else if(o.processTemplateParams||o.tag==="titleTemplate"||o.tag==="title")for(const l of Hb)typeof o[l]=="string"&&(o[l]=Do(o[l],r,s,o.tag==="script"&&o.props.type.endsWith("json")))}t._templateParams=r,t._separator=s},"tags:afterResolve":({tagMap:e})=>{const n=e.get("title");n!=null&&n.textContent&&n.processTemplateParams!==!1&&(n.textContent=Do(n.textContent,t._templateParams,t._separator))}}}),Wb="usehead";function Kb(t){return{install(n){n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(Wb,t)}}.install}const zb="modulepreload",Gb=function(t,e){return new URL(t,e).href},_d={},$o=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=Promise.allSettled(n.map(h=>{if(h=Gb(h,r),h in _d)return;_d[h]=!0;const u=h.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(!!r)for(let I=o.length-1;I>=0;I--){const b=o[I];if(b.href===h&&(!u||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${d}`))return;const m=document.createElement("link");if(m.rel=u?"stylesheet":zb,u||(m.as="script"),m.crossOrigin="",m.href=h,l&&m.setAttribute("nonce",l),document.head.appendChild(m),u)return new Promise((I,b)=>{m.addEventListener("load",I),m.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${h}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};let Ho,qo;function Qb(){return Ho=$fetch(Pu(`builds/meta/${Ba().app.buildId}.json`),{responseType:"json"}),Ho.then(t=>{qo=sb(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),Ho}function Ha(){return Ho||Qb()}async function Ou(t){const e=typeof t=="string"?t:t.path;if(await Ha(),!qo)return console.error("[nuxt] Error creating app manifest matcher.",qo),{};try{return Jm({},...qo.matchAll(e).reverse())}catch(n){return console.error("[nuxt] Error matching route rules.",n),{}}}async function yd(t,e={}){const n=await Xb(t,e),r=We(),s=r._payloadCache||(r._payloadCache={});return n in s?s[n]||null:(s[n]=s_(t).then(i=>i?r_(n).then(o=>o||(delete s[n],null)):(s[n]=null,null)),s[n])}const Jb="_payload.json";async function Xb(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||Kr(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const r=Ba(),s=e.hash||(e.fresh?Date.now():r.app.buildId),i=r.app.cdnURL,o=i&&await s_(t)?i:r.app.baseURL;return Cu(o,n.pathname,Jb+(s?`?${s}`:""))}async function r_(t){const e=fetch(t).then(n=>n.text().then(i_));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function s_(t=ku().path){const e=We();return t=Su(t),(await Ha()).prerendered.includes(t)?!0:e.runWithContext(async()=>{const r=await Ou({path:t});return!!r.prerender&&!r.redirect})}let kr=null;async function Yb(){var r;if(kr)return kr;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await i_(t.textContent||""),n=t.dataset.src?await r_(t.dataset.src):void 0;return kr={...e,...n,...window.__NUXT__},(r=kr.config)!=null&&r.public&&(kr.config.public=Tr(kr.config.public)),kr}async function i_(t){return await Eb(t,We()._payloadRevivers)}function Zb(t,e){We()._payloadRevivers[t]=e}const e0=[["NuxtError",t=>$a(t)],["EmptyShallowRef",t=>Ni(t==="_"?void 0:t==="0n"?BigInt(0):la(t))],["EmptyRef",t=>An(t==="_"?void 0:t==="0n"?BigInt(0):la(t))],["ShallowRef",t=>Ni(t)],["ShallowReactive",t=>Tn(t)],["Ref",t=>An(t)],["Reactive",t=>Tr(t)]],t0=dn({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const[r,s]of e0)Zb(r,s);Object.assign(t.payload,([e,n]=Ts(()=>t.runWithContext(Yb)),e=await e,n(),e)),window.__NUXT__=t.payload}});async function Nu(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const r={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!!r.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async s=>{var m;const i=new Map,o=new Promise(I=>{t.resolveTags().then(b=>{I(b.map(O=>{const D=i.get(O._d)||0,N={tag:O,id:(D?`${O._d}:${D}`:O._d)||fd(O),shouldRender:!0};return O._d&&t_(O._d)&&i.set(O._d,D+1),N}))})});let c=t._dom;if(!c){c={title:n.title,elMap:new Map().set("htmlAttrs",n.documentElement).set("bodyAttrs",n.body)};for(const I of["body","head"]){const b=(m=n[I])==null?void 0:m.children;for(const O of b){const D=O.tagName.toLowerCase();if(!hd.has(D))continue;const N=n_({tag:D,props:{}},{innerHTML:O.innerHTML,...O.getAttributeNames().reduce((w,k)=>(w[k]=O.getAttribute(k),w),{})||{}});if(N.key=O.getAttribute("data-hid")||void 0,N._d=Al(N)||fd(N),c.elMap.has(N._d)){let w=1,k=N._d;for(;c.elMap.has(k);)k=`${N._d}:${w++}`;c.elMap.set(k,O)}else c.elMap.set(N._d,O)}}}c.pendingSideEffects={...c.sideEffects},c.sideEffects={};function l(I,b,O){const D=`${I}:${b}`;c.sideEffects[D]=O,delete c.pendingSideEffects[D]}function h({id:I,$el:b,tag:O}){const D=O.tag.endsWith("Attrs");c.elMap.set(I,b),D||(O.textContent&&O.textContent!==b.textContent&&(b.textContent=O.textContent),O.innerHTML&&O.innerHTML!==b.innerHTML&&(b.innerHTML=O.innerHTML),l(I,"el",()=>{b==null||b.remove(),c.elMap.delete(I)}));for(const N in O.props){if(!Object.hasOwn(O.props,N))continue;const w=O.props[N];if(N.startsWith("on")&&typeof w=="function"){const V=b==null?void 0:b.dataset;if(V&&V[`${N}fired`]){const F=N.slice(0,-5);w.call(b,new Event(F.substring(2)))}b.getAttribute(`data-${N}`)!==""&&((O.tag==="bodyAttrs"?n.defaultView:b).addEventListener(N.substring(2),w.bind(b)),b.setAttribute(`data-${N}`,""));continue}const k=`attr:${N}`;if(N==="class"){if(!w)continue;for(const V of w)D&&l(I,`${k}:${V}`,()=>b.classList.remove(V)),!b.classList.contains(V)&&b.classList.add(V)}else if(N==="style"){if(!w)continue;for(const[V,F]of w)l(I,`${k}:${V}`,()=>{b.style.removeProperty(V)}),b.style.setProperty(V,F)}else w!==!1&&w!==null&&(b.getAttribute(N)!==w&&b.setAttribute(N,w===!0?"":String(w)),D&&l(I,k,()=>b.removeAttribute(N)))}}const u=[],d={bodyClose:void 0,bodyOpen:void 0,head:void 0},g=await o;for(const I of g){const{tag:b,shouldRender:O,id:D}=I;if(O){if(b.tag==="title"){n.title=b.textContent,l("title","",()=>n.title=c.title);continue}I.$el=I.$el||c.elMap.get(D),I.$el?h(I):hd.has(b.tag)&&u.push(I)}}for(const I of u){const b=I.tag.tagPosition||"head";I.$el=n.createElement(I.tag.tag),h(I),d[b]=d[b]||n.createDocumentFragment(),d[b].appendChild(I.$el)}for(const I of g)await t.hooks.callHook("dom:renderTag",I,n,l);d.head&&n.head.appendChild(d.head),d.bodyOpen&&n.body.insertBefore(d.bodyOpen,n.body.firstChild),d.bodyClose&&n.body.appendChild(d.bodyClose);for(const I in c.pendingSideEffects)c.pendingSideEffects[I]();t._dom=c,await t.hooks.callHook("dom:rendered",{renders:g}),s()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function n0(t={}){var r,s,i;const e=((r=t.domOptions)==null?void 0:r.render)||Nu;t.document=t.document||(typeof window<"u"?document:void 0);const n=((i=(s=t.document)==null?void 0:s.head.querySelector('script[id="unhead:payload"]'))==null?void 0:i.innerHTML)||!1;return Mb({...t,plugins:[...t.plugins||[],{key:"client",hooks:{"entries:updated":e}}],init:[n?JSON.parse(n):!1,...t.init||[]]})}function r0(t,e){let n=0;return()=>{const r=++n;e(()=>{n===r&&t()})}}function s0(t={}){const e=n0({domOptions:{render:r0(()=>Nu(e),js)},...t});return e.install=Kb(e),e}const i0={disableDefaults:!0,disableCapoSorting:!1,plugins:[Bb,jb,qb,Ub]},o0=dn({name:"nuxt:head",enforce:"pre",setup(t){const e=s0(i0);t.vueApp.use(e);{let n=!0;const r=async()=>{n=!1,await Nu(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||r()}),t.hooks.hook("app:error",r),t.hooks.hook("app:suspense:resolve",r)}}});/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const os=typeof document<"u";function o_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function a0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&o_(t.default)}const Se=Object.assign;function Fc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Yt(s)?s.map(t):t(s)}return n}const wi=()=>{},Yt=Array.isArray,a_=/#/g,c0=/&/g,l0=/\//g,u0=/=/g,h0=/\?/g,c_=/\+/g,f0=/%5B/g,d0=/%5D/g,l_=/%5E/g,p0=/%60/g,u_=/%7B/g,g0=/%7C/g,h_=/%7D/g,m0=/%20/g;function Du(t){return encodeURI(""+t).replace(g0,"|").replace(f0,"[").replace(d0,"]")}function _0(t){return Du(t).replace(u_,"{").replace(h_,"}").replace(l_,"^")}function Pl(t){return Du(t).replace(c_,"%2B").replace(m0,"+").replace(a_,"%23").replace(c0,"%26").replace(p0,"`").replace(u_,"{").replace(h_,"}").replace(l_,"^")}function y0(t){return Pl(t).replace(u0,"%3D")}function v0(t){return Du(t).replace(a_,"%23").replace(h0,"%3F")}function E0(t){return t==null?"":v0(t).replace(l0,"%2F")}function Li(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const T0=/\/$/,w0=t=>t.replace(T0,"");function Uc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=R0(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Li(o)}}function I0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function vd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function b0(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ps(e.matched[r],n.matched[s])&&f_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ps(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function f_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!A0(t[n],e[n]))return!1;return!0}function A0(t,e){return Yt(t)?Ed(t,e):Yt(e)?Ed(e,t):t===e}function Ed(t,e){return Yt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function R0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Wt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Fi;(function(t){t.pop="pop",t.push="push"})(Fi||(Fi={}));var Ii;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ii||(Ii={}));function S0(t){if(!t)if(os){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),w0(t)}const C0=/^[^#]+#/;function P0(t,e){return t.replace(C0,"#")+e}function k0(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const qa=()=>({left:window.scrollX,top:window.scrollY});function O0(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=k0(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Td(t,e){return(history.state?history.state.position-e:-1)+t}const kl=new Map;function N0(t,e){kl.set(t,e)}function D0(t){const e=kl.get(t);return kl.delete(t),e}let V0=()=>location.protocol+"//"+location.host;function d_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),vd(l,"")}return vd(n,t)+r+s}function x0(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const m=d_(t,location),I=n.value,b=e.value;let O=0;if(g){if(n.value=m,e.value=g,o&&o===I){o=null;return}O=b?g.position-b.position:0}else r(m);s.forEach(D=>{D(n.value,I,{delta:O,type:Fi.pop,direction:O?O>0?Ii.forward:Ii.back:Ii.unknown})})};function l(){o=n.value}function h(g){s.push(g);const m=()=>{const I=s.indexOf(g);I>-1&&s.splice(I,1)};return i.push(m),m}function u(){const{history:g}=window;g.state&&g.replaceState(Se({},g.state,{scroll:qa()}),"")}function d(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:h,destroy:d}}function wd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?qa():null}}function M0(t){const{history:e,location:n}=window,r={value:d_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,u){const d=t.indexOf("#"),g=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:V0()+t+l;try{e[u?"replaceState":"pushState"](h,"",g),s.value=h}catch(m){console.error(m),n[u?"replace":"assign"](g)}}function o(l,h){const u=Se({},e.state,wd(s.value.back,l,s.value.forward,!0),h,{position:s.value.position});i(l,u,!0),r.value=l}function c(l,h){const u=Se({},s.value,e.state,{forward:l,scroll:qa()});i(u.current,u,!0);const d=Se({},wd(r.value,l,null),{position:u.position+1},h);i(l,d,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function L0(t){t=S0(t);const e=M0(t),n=x0(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Se({location:"",base:t,go:r,createHref:P0.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function F0(t){return typeof t=="string"||t&&typeof t=="object"}function p_(t){return typeof t=="string"||typeof t=="symbol"}const g_=Symbol("");var Id;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Id||(Id={}));function ks(t,e){return Se(new Error,{type:t,[g_]:!0},e)}function yn(t,e){return t instanceof Error&&g_ in t&&(e==null||!!(t.type&e))}const bd="[^/]+?",U0={sensitive:!1,strict:!1,start:!0,end:!0},B0=/[.+*?^${}()[\]/\\]/g;function j0(t,e){const n=Se({},U0,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const u=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let d=0;d<h.length;d++){const g=h[d];let m=40+(n.sensitive?.25:0);if(g.type===0)d||(s+="/"),s+=g.value.replace(B0,"\\$&"),m+=40;else if(g.type===1){const{value:I,repeatable:b,optional:O,regexp:D}=g;i.push({name:I,repeatable:b,optional:O});const N=D||bd;if(N!==bd){m+=10;try{new RegExp(`(${N})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${I}" (${N}): `+k.message)}}let w=b?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;d||(w=O&&h.length<2?`(?:/${w})`:"/"+w),O&&(w+="?"),s+=w,m+=20,O&&(m+=-8),b&&(m+=-20),N===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(h){const u=h.match(o),d={};if(!u)return null;for(let g=1;g<u.length;g++){const m=u[g]||"",I=i[g-1];d[I.name]=m&&I.repeatable?m.split("/"):m}return d}function l(h){let u="",d=!1;for(const g of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of g)if(m.type===0)u+=m.value;else if(m.type===1){const{value:I,repeatable:b,optional:O}=m,D=I in h?h[I]:"";if(Yt(D)&&!b)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const N=Yt(D)?D.join("/"):D;if(!N)if(O)g.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${I}"`);u+=N}}return u||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function $0(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function m_(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=$0(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Ad(r))return 1;if(Ad(s))return-1}return s.length-r.length}function Ad(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const H0={type:0,value:""},q0=/[a-zA-Z0-9_]/;function W0(t){if(!t)return[[]];if(t==="/")return[[H0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${h}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,h="",u="";function d(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(h&&d(),o()):l===":"?(d(),n=1):g();break;case 4:g(),n=r;break;case 1:l==="("?n=2:q0.test(l)?g():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),d(),o(),s}function K0(t,e,n){const r=j0(W0(t.path),n),s=Se(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function z0(t,e){const n=[],r=new Map;e=Pd({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,g,m){const I=!m,b=Sd(d);b.aliasOf=m&&m.record;const O=Pd(e,d),D=[b];if("alias"in d){const k=typeof d.alias=="string"?[d.alias]:d.alias;for(const V of k)D.push(Sd(Se({},b,{components:m?m.record.components:b.components,path:V,aliasOf:m?m.record:b})))}let N,w;for(const k of D){const{path:V}=k;if(g&&V[0]!=="/"){const F=g.record.path,R=F[F.length-1]==="/"?"":"/";k.path=g.record.path+(V&&R+V)}if(N=K0(k,g,O),m?m.alias.push(N):(w=w||N,w!==N&&w.alias.push(N),I&&d.name&&!Cd(N)&&o(d.name)),__(N)&&l(N),b.children){const F=b.children;for(let R=0;R<F.length;R++)i(F[R],N,m&&m.children[R])}m=m||N}return w?()=>{o(w)}:wi}function o(d){if(p_(d)){const g=r.get(d);g&&(r.delete(d),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(d);g>-1&&(n.splice(g,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function c(){return n}function l(d){const g=J0(d,n);n.splice(g,0,d),d.record.name&&!Cd(d)&&r.set(d.record.name,d)}function h(d,g){let m,I={},b,O;if("name"in d&&d.name){if(m=r.get(d.name),!m)throw ks(1,{location:d});O=m.record.name,I=Se(Rd(g.params,m.keys.filter(w=>!w.optional).concat(m.parent?m.parent.keys.filter(w=>w.optional):[]).map(w=>w.name)),d.params&&Rd(d.params,m.keys.map(w=>w.name))),b=m.stringify(I)}else if(d.path!=null)b=d.path,m=n.find(w=>w.re.test(b)),m&&(I=m.parse(b),O=m.record.name);else{if(m=g.name?r.get(g.name):n.find(w=>w.re.test(g.path)),!m)throw ks(1,{location:d,currentLocation:g});O=m.record.name,I=Se({},g.params,d.params),b=m.stringify(I)}const D=[];let N=m;for(;N;)D.unshift(N.record),N=N.parent;return{name:O,path:b,params:I,matched:D,meta:Q0(D)}}t.forEach(d=>i(d));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:u,getRoutes:c,getRecordMatcher:s}}function Rd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Sd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:G0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function G0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Cd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Q0(t){return t.reduce((e,n)=>Se(e,n.meta),{})}function Pd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function J0(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;m_(t,e[i])<0?r=i:n=i+1}const s=X0(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function X0(t){let e=t;for(;e=e.parent;)if(__(e)&&m_(t,e)===0)return e}function __({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Y0(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(c_," "),o=i.indexOf("="),c=Li(o<0?i:i.slice(0,o)),l=o<0?null:Li(i.slice(o+1));if(c in e){let h=e[c];Yt(h)||(h=e[c]=[h]),h.push(l)}else e[c]=l}return e}function kd(t){let e="";for(let n in t){const r=t[n];if(n=y0(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Yt(r)?r.map(i=>i&&Pl(i)):[r&&Pl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Z0(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Yt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const eA=Symbol(""),Od=Symbol(""),Vu=Symbol(""),xu=Symbol(""),Ol=Symbol("");function li(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Qn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const h=g=>{g===!1?l(ks(4,{from:n,to:e})):g instanceof Error?l(g):F0(g)?l(ks(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),c())},u=i(()=>t.call(r&&r.instances[s],e,n,h));let d=Promise.resolve(u);t.length<3&&(d=d.then(h)),d.catch(g=>l(g))})}function Bc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(o_(l)){const u=(l.__vccOpts||l)[e];u&&i.push(Qn(u,n,r,o,c,s))}else{let h=l();i.push(()=>h.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const d=a0(u)?u.default:u;o.mods[c]=u,o.components[c]=d;const m=(d.__vccOpts||d)[e];return m&&Qn(m,n,r,o,c,s)()}))}}return i}function Nd(t){const e=kt(Vu),n=kt(xu),r=Ft(()=>{const l=ze(t.to);return e.resolve(l)}),s=Ft(()=>{const{matched:l}=r.value,{length:h}=l,u=l[h-1],d=n.matched;if(!u||!d.length)return-1;const g=d.findIndex(Ps.bind(null,u));if(g>-1)return g;const m=Dd(l[h-2]);return h>1&&Dd(u)===m&&d[d.length-1].path!==m?d.findIndex(Ps.bind(null,l[h-2])):g}),i=Ft(()=>s.value>-1&&iA(n.params,r.value.params)),o=Ft(()=>s.value>-1&&s.value===n.matched.length-1&&f_(n.params,r.value.params));function c(l={}){if(sA(l)){const h=e[ze(t.replace)?"replace":"push"](ze(t.to)).catch(wi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Ft(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function tA(t){return t.length===1?t[0]:t}const nA=wr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Nd,setup(t,{slots:e}){const n=Tr(Nd(t)),{options:r}=kt(Vu),s=Ft(()=>({[Vd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Vd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&tA(e.default(n));return t.custom?i:vt("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),rA=nA;function sA(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function iA(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Yt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Dd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Vd=(t,e,n)=>t??e??n,oA=wr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=kt(Ol),s=Ft(()=>t.route||r.value),i=kt(Od,0),o=Ft(()=>{let h=ze(i);const{matched:u}=s.value;let d;for(;(d=u[h])&&!d.components;)h++;return h}),c=Ft(()=>s.value.matched[o.value]);Mr(Od,Ft(()=>o.value+1)),Mr(eA,c),Mr(Ol,s);const l=An();return vs(()=>[l.value,c.value,t.name],([h,u,d],[g,m,I])=>{u&&(u.instances[d]=h,m&&m!==u&&h&&h===g&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),h&&u&&(!m||!Ps(u,m)||!g)&&(u.enterCallbacks[d]||[]).forEach(b=>b(h))},{flush:"post"}),()=>{const h=s.value,u=t.name,d=c.value,g=d&&d.components[u];if(!g)return xd(n.default,{Component:g,route:h});const m=d.props[u],I=m?m===!0?h.params:typeof m=="function"?m(h):m:null,O=vt(g,Se({},I,e,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return xd(n.default,{Component:O,route:h})||O}}});function xd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const y_=oA;function aA(t){const e=z0(t.routes,t),n=t.parseQuery||Y0,r=t.stringifyQuery||kd,s=t.history,i=li(),o=li(),c=li(),l=Ni(Wt);let h=Wt;os&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Fc.bind(null,B=>""+B),d=Fc.bind(null,E0),g=Fc.bind(null,Li);function m(B,Y){let J,ne;return p_(B)?(J=e.getRecordMatcher(B),ne=Y):ne=B,e.addRoute(ne,J)}function I(B){const Y=e.getRecordMatcher(B);Y&&e.removeRoute(Y)}function b(){return e.getRoutes().map(B=>B.record)}function O(B){return!!e.getRecordMatcher(B)}function D(B,Y){if(Y=Se({},Y||l.value),typeof B=="string"){const C=Uc(n,B,Y.path),M=e.resolve({path:C.path},Y),$=s.createHref(C.fullPath);return Se(C,M,{params:g(M.params),hash:Li(C.hash),redirectedFrom:void 0,href:$})}let J;if(B.path!=null)J=Se({},B,{path:Uc(n,B.path,Y.path).path});else{const C=Se({},B.params);for(const M in C)C[M]==null&&delete C[M];J=Se({},B,{params:d(C)}),Y.params=d(Y.params)}const ne=e.resolve(J,Y),Ee=B.hash||"";ne.params=u(g(ne.params));const ke=I0(r,Se({},B,{hash:_0(Ee),path:ne.path})),A=s.createHref(ke);return Se({fullPath:ke,hash:Ee,query:r===kd?Z0(B.query):B.query||{}},ne,{redirectedFrom:void 0,href:A})}function N(B){return typeof B=="string"?Uc(n,B,l.value.path):Se({},B)}function w(B,Y){if(h!==B)return ks(8,{from:Y,to:B})}function k(B){return R(B)}function V(B){return k(Se(N(B),{replace:!0}))}function F(B){const Y=B.matched[B.matched.length-1];if(Y&&Y.redirect){const{redirect:J}=Y;let ne=typeof J=="function"?J(B):J;return typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=N(ne):{path:ne},ne.params={}),Se({query:B.query,hash:B.hash,params:ne.path!=null?{}:B.params},ne)}}function R(B,Y){const J=h=D(B),ne=l.value,Ee=B.state,ke=B.force,A=B.replace===!0,C=F(J);if(C)return R(Se(N(C),{state:typeof C=="object"?Se({},Ee,C.state):Ee,force:ke,replace:A}),Y||J);const M=J;M.redirectedFrom=Y;let $;return!ke&&b0(r,ne,J)&&($=ks(16,{to:M,from:ne}),Vt(ne,ne,!0,!1)),($?Promise.resolve($):E(M,ne)).catch(U=>yn(U)?yn(U,2)?U:Ht(U):ee(U,M,ne)).then(U=>{if(U){if(yn(U,2))return R(Se({replace:A},N(U.to),{state:typeof U.to=="object"?Se({},Ee,U.to.state):Ee,force:ke}),Y||M)}else U=S(M,ne,!0,A,Ee);return P(M,ne,U),U})}function v(B,Y){const J=w(B,Y);return J?Promise.reject(J):Promise.resolve()}function y(B){const Y=Mn.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(B):B()}function E(B,Y){let J;const[ne,Ee,ke]=cA(B,Y);J=Bc(ne.reverse(),"beforeRouteLeave",B,Y);for(const C of ne)C.leaveGuards.forEach(M=>{J.push(Qn(M,B,Y))});const A=v.bind(null,B,Y);return J.push(A),Rt(J).then(()=>{J=[];for(const C of i.list())J.push(Qn(C,B,Y));return J.push(A),Rt(J)}).then(()=>{J=Bc(Ee,"beforeRouteUpdate",B,Y);for(const C of Ee)C.updateGuards.forEach(M=>{J.push(Qn(M,B,Y))});return J.push(A),Rt(J)}).then(()=>{J=[];for(const C of ke)if(C.beforeEnter)if(Yt(C.beforeEnter))for(const M of C.beforeEnter)J.push(Qn(M,B,Y));else J.push(Qn(C.beforeEnter,B,Y));return J.push(A),Rt(J)}).then(()=>(B.matched.forEach(C=>C.enterCallbacks={}),J=Bc(ke,"beforeRouteEnter",B,Y,y),J.push(A),Rt(J))).then(()=>{J=[];for(const C of o.list())J.push(Qn(C,B,Y));return J.push(A),Rt(J)}).catch(C=>yn(C,8)?C:Promise.reject(C))}function P(B,Y,J){c.list().forEach(ne=>y(()=>ne(B,Y,J)))}function S(B,Y,J,ne,Ee){const ke=w(B,Y);if(ke)return ke;const A=Y===Wt,C=os?history.state:{};J&&(ne||A?s.replace(B.fullPath,Se({scroll:A&&C&&C.scroll},Ee)):s.push(B.fullPath,Ee)),l.value=B,Vt(B,Y,J,A),Ht()}let T;function ge(){T||(T=s.listen((B,Y,J)=>{if(!en.listening)return;const ne=D(B),Ee=F(ne);if(Ee){R(Se(Ee,{replace:!0,force:!0}),ne).catch(wi);return}h=ne;const ke=l.value;os&&N0(Td(ke.fullPath,J.delta),qa()),E(ne,ke).catch(A=>yn(A,12)?A:yn(A,2)?(R(Se(N(A.to),{force:!0}),ne).then(C=>{yn(C,20)&&!J.delta&&J.type===Fi.pop&&s.go(-1,!1)}).catch(wi),Promise.reject()):(J.delta&&s.go(-J.delta,!1),ee(A,ne,ke))).then(A=>{A=A||S(ne,ke,!1),A&&(J.delta&&!yn(A,8)?s.go(-J.delta,!1):J.type===Fi.pop&&yn(A,20)&&s.go(-1,!1)),P(ne,ke,A)}).catch(wi)}))}let _e=li(),te=li(),le;function ee(B,Y,J){Ht(B);const ne=te.list();return ne.length?ne.forEach(Ee=>Ee(B,Y,J)):console.error(B),Promise.reject(B)}function Le(){return le&&l.value!==Wt?Promise.resolve():new Promise((B,Y)=>{_e.add([B,Y])})}function Ht(B){return le||(le=!B,ge(),_e.list().forEach(([Y,J])=>B?J(B):Y()),_e.reset()),B}function Vt(B,Y,J,ne){const{scrollBehavior:Ee}=t;if(!os||!Ee)return Promise.resolve();const ke=!J&&D0(Td(B.fullPath,0))||(ne||!J)&&history.state&&history.state.scroll||null;return js().then(()=>Ee(B,Y,ke)).then(A=>A&&O0(A)).catch(A=>ee(A,B,Y))}const Fe=B=>s.go(B);let Ue;const Mn=new Set,en={currentRoute:l,listening:!0,addRoute:m,removeRoute:I,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:b,resolve:D,options:t,push:k,replace:V,go:Fe,back:()=>Fe(-1),forward:()=>Fe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:te.add,isReady:Le,install(B){const Y=this;B.component("RouterLink",rA),B.component("RouterView",y_),B.config.globalProperties.$router=Y,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>ze(l)}),os&&!Ue&&l.value===Wt&&(Ue=!0,k(s.location).catch(Ee=>{}));const J={};for(const Ee in Wt)Object.defineProperty(J,Ee,{get:()=>l.value[Ee],enumerable:!0});B.provide(Vu,Y),B.provide(xu,Tn(J)),B.provide(Ol,l);const ne=B.unmount;Mn.add(B),B.unmount=function(){Mn.delete(B),Mn.size<1&&(h=Wt,T&&T(),T=null,l.value=Wt,Ue=!1,le=!1),ne()}}};function Rt(B){return B.reduce((Y,J)=>Y.then(()=>y(J)),Promise.resolve())}return en}function cA(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(h=>Ps(h,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(h=>Ps(h,l))||s.push(l))}return[n,r,s]}function lA(t){return kt(xu)}const uA=/(:\w+)\([^)]+\)/g,hA=/(:\w+)[?+*]/g,fA=/:\w+/g,dA=(t,e)=>e.path.replace(uA,"$1").replace(hA,"$1").replace(fA,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""}),Nl=(t,e)=>{const n=t.route.matched.find(s=>{var i;return((i=s.components)==null?void 0:i.default)===t.Component.type}),r=e??(n==null?void 0:n.meta.key)??(n&&dA(t.route,n));return typeof r=="function"?r(t.route):r},pA=(t,e)=>({default:()=>t?vt(dT,t===!0?{}:t,e):e});function Mu(t){return Array.isArray(t)?t:[t]}const jc=[{name:"about",path:"/about",component:()=>$o(()=>import("./Bjy_emH3.js"),[],import.meta.url)},{name:"dashboard",path:"/dashboard",component:()=>$o(()=>import("./BuF8RUG-.js"),[],import.meta.url)},{name:"index",path:"/",component:()=>$o(()=>import("./CK9JjIFK.js"),__vite__mapDeps([0,1]),import.meta.url)}],v_=(t,e)=>({default:()=>{var n;return t?vt(_w,t===!0?{}:t,e):(n=e.default)==null?void 0:n.call(e)}}),gA=/(:\w+)\([^)]+\)/g,mA=/(:\w+)[?+*]/g,_A=/:\w+/g;function Md(t){const e=(t==null?void 0:t.meta.key)??t.path.replace(gA,"$1").replace(mA,"$1").replace(_A,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""});return typeof e=="function"?e(t):e}function yA(t,e){return t===e||e===Wt?!1:Md(t)!==Md(e)?!0:!t.matched.every((r,s)=>{var i,o;return r.components&&r.components.default===((o=(i=e.matched[s])==null?void 0:i.components)==null?void 0:o.default)})}const vA={scrollBehavior(t,e,n){var h;const r=We(),s=((h=$t().options)==null?void 0:h.scrollBehaviorType)??"auto";let i=n||void 0;const o=typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop;if(!i&&e&&t&&o!==!1&&yA(t,e)&&(i={left:0,top:0}),t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:Ld(t.hash),behavior:s}:!1;const c=u=>!!(u.meta.pageTransition??El),l=c(e)&&c(t)?"page:transition:finish":"page:finish";return new Promise(u=>{r.hooks.hookOnce(l,async()=>{await new Promise(d=>setTimeout(d,0)),t.hash&&(i={el:t.hash,top:Ld(t.hash),behavior:s}),u(i)})})}};function Ld(t){try{const e=document.querySelector(t);if(e)return(Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}const EA={hashMode:!1,scrollBehaviorType:"auto"},Lt={...EA,...vA},TA=async t=>{var l;let e,n;if(!((l=t.meta)!=null&&l.validate))return;const r=We(),s=$t(),i=([e,n]=Ts(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e);if(i===!0)return;const o=$a({statusCode:i&&i.statusCode||404,statusMessage:i&&i.statusMessage||`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}}),c=s.beforeResolve(h=>{if(c(),h===t){const u=s.afterEach(async()=>{u(),await r.runWithContext(()=>fs(o)),window==null||window.history.pushState({},"",t.fullPath)});return!1}})},wA=async t=>{let e,n;const r=([e,n]=Ts(()=>Ou({path:t.path})),e=await e,n(),e);if(r.redirect)return Kr(r.redirect,{acceptRelative:!0})?(window.location.href=r.redirect,!1):r.redirect},IA=[TA,wA],bi={};function bA(t,e,n){const{pathname:r,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){const h=i.includes(t.slice(o))?t.slice(o).length:1;let u=i.slice(h);return u[0]!=="/"&&(u="/"+u),nd(u,"")}const c=nd(r,t),l=!n||mI(c,n,{trailingSlash:!0})?c:n;return l+(l.includes("?")?"":s)+i}const AA=dn({name:"nuxt:router",enforce:"pre",async setup(t){var O;let e,n,r=Ba().app.baseURL;const s=((O=Lt.history)==null?void 0:O.call(Lt,r))??L0(r),i=Lt.routes?([e,n]=Ts(()=>Lt.routes(jc)),e=await e,n(),e??jc):jc;let o;const c=aA({...Lt,scrollBehavior:(D,N,w)=>{if(N===Wt){o=w;return}if(Lt.scrollBehavior){if(c.options.scrollBehavior=Lt.scrollBehavior,"scrollRestoration"in window.history){const k=c.beforeEach(()=>{k(),window.history.scrollRestoration="manual"})}return Lt.scrollBehavior(D,Wt,o||w)}},history:s,routes:i});Lt.routes&&Lt.routes,"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(c);const l=Ni(c.currentRoute.value);c.afterEach((D,N)=>{l.value=N}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const h=bA(r,window.location,t.payload.path),u=Ni(c.currentRoute.value),d=()=>{u.value=c.currentRoute.value};t.hook("page:finish",d),c.afterEach((D,N)=>{var w,k,V,F;((k=(w=D.matched[0])==null?void 0:w.components)==null?void 0:k.default)===((F=(V=N.matched[0])==null?void 0:V.components)==null?void 0:F.default)&&d()});const g={};for(const D in u.value)Object.defineProperty(g,D,{get:()=>u.value[D],enumerable:!0});t._route=Tn(g),t._middleware||(t._middleware={global:[],named:{}});const m=ja();c.afterEach(async(D,N,w)=>{delete t._processingMiddleware,!t.isHydrating&&m.value&&await t.runWithContext(e_),w&&await t.callHook("page:loading:end")});try{[e,n]=Ts(()=>c.isReady()),await e,n()}catch(D){[e,n]=Ts(()=>t.runWithContext(()=>fs(D))),await e,n()}const I=h!==c.currentRoute.value.fullPath?c.resolve(h):c.currentRoute.value;d();const b=t.payload.state._layout;return c.beforeEach(async(D,N)=>{var w;await t.callHook("page:loading:start"),D.meta=Tr(D.meta),t.isHydrating&&b&&!fr(D.meta.layout)&&(D.meta.layout=b),t._processingMiddleware=!0;{const k=new Set([...IA,...t._middleware.global]);for(const V of D.matched){const F=V.meta.middleware;if(F)for(const R of Mu(F))k.add(R)}{const V=await t.runWithContext(()=>Ou({path:D.path}));if(V.appMiddleware)for(const F in V.appMiddleware)V.appMiddleware[F]?k.add(F):k.delete(F)}for(const V of k){const F=typeof V=="string"?t._middleware.named[V]||await((w=bi[V])==null?void 0:w.call(bi).then(v=>v.default||v)):V;if(!F)throw new Error(`Unknown route middleware: '${V}'.`);const R=await t.runWithContext(()=>F(D,N));if(!t.payload.serverRendered&&t.isHydrating&&(R===!1||R instanceof Error)){const v=R||Il({statusCode:404,statusMessage:`Page Not Found: ${h}`});return await t.runWithContext(()=>fs(v)),!1}if(R!==!0&&(R||R===!1))return R}}}),c.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),c.afterEach(async(D,N)=>{D.matched.length===0&&await t.runWithContext(()=>fs(Il({statusCode:404,fatal:!1,statusMessage:`Page not found: ${D.fullPath}`,data:{path:D.fullPath}})))}),t.hooks.hookOnce("app:created",async()=>{try{"name"in I&&(I.name=void 0),await c.replace({...I,force:!0}),c.options.scrollBehavior=Lt.scrollBehavior}catch(D){await t.runWithContext(()=>fs(D))}}),{provide:{router:c}}}}),Fd=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),iD=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),Lu=t=>{const e=We();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{Fd(()=>t())}):Fd(()=>t())},RA=dn({name:"nuxt:payload",setup(t){$t().beforeResolve(async(e,n)=>{if(e.path===n.path)return;const r=await yd(e.path);r&&Object.assign(t.static.data,r.data)}),Lu(()=>{var e;t.hooks.hook("link:prefetch",async n=>{const{hostname:r}=new URL(n,window.location.href);r===window.location.hostname&&await yd(n)}),((e=navigator.connection)==null?void 0:e.effectiveType)!=="slow-2g"&&setTimeout(Ha,1e3)})}}),SA=dn(()=>{const t=$t();Lu(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),CA=dn(t=>{let e;async function n(){const r=await Ha();e&&clearTimeout(e),e=setTimeout(n,ad);try{const s=await $fetch(Pu("builds/latest.json")+`?${Date.now()}`);s.id!==r.id&&t.hooks.callHook("app:manifest:update",s)}catch{}}Lu(()=>{e=setTimeout(n,ad)})});function PA(t={}){const e=t.path||window.location.pathname;let n={};try{n=la(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:We().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const kA=dn({name:"nuxt:chunk-reload",setup(t){const e=$t(),n=Ba(),r=new Set;e.beforeEach(()=>{r.clear()}),t.hook("app:chunkError",({error:i})=>{r.add(i)});function s(i){const c="href"in i&&i.href[0]==="#"?n.app.baseURL+i.href:Cu(n.app.baseURL,i.fullPath);PA({path:c,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(s)}),e.onError((i,o)=>{r.has(i)&&s(o)})}}),OA=dn({name:"nuxt:global-components"}),nr={default:hT(()=>$o(()=>import("./DYtzTcOL.js"),__vite__mapDeps([2,1]),import.meta.url).then(t=>t.default||t))},NA=dn({name:"nuxt:prefetch",setup(t){const e=$t();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var s;const r=(s=n==null?void 0:n.meta)==null?void 0:s.layout;r&&typeof nr[r]=="function"&&await nr[r]()})}),t.hooks.hook("link:prefetch",n=>{if(Kr(n))return;const r=e.resolve(n);if(!r)return;const s=r.meta.layout;let i=Mu(r.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof bi[o]=="function"&&bi[o]();s&&typeof nr[s]=="function"&&nr[s]()})}}),DA=()=>{};var Ud={};/**
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
 */const E_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},VA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},T_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,u=i>>2,d=(i&3)<<4|c>>4;let g=(c&15)<<2|h>>6,m=h&63;l||(m=64,o||(g=64)),r.push(n[u],n[d],n[g],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(E_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):VA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||d==null)throw new xA;const g=i<<2|c>>4;if(r.push(g),h!==64){const m=c<<4&240|h>>2;if(r.push(m),d!==64){const I=h<<6&192|d;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class xA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const MA=function(t){const e=E_(t);return T_.encodeByteArray(e,!0)},pa=function(t){return MA(t).replace(/\./g,"")},w_=function(t){try{return T_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function LA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const FA=()=>LA().__FIREBASE_DEFAULTS__,UA=()=>{if(typeof process>"u"||typeof Ud>"u")return;const t=Ud.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},BA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&w_(t[1]);return e&&JSON.parse(e)},Wa=()=>{try{return DA()||FA()||UA()||BA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},I_=t=>{var e,n;return(n=(e=Wa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},jA=t=>{const e=I_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},b_=()=>{var t;return(t=Wa())===null||t===void 0?void 0:t.config},A_=t=>{var e;return(e=Wa())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class $A{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function HA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[pa(JSON.stringify(n)),pa(JSON.stringify(o)),""].join(".")}/**
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
 */function Et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Et())}function WA(){var t;const e=(t=Wa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(globalThis.process)==="[object process]"}catch{return!1}}function KA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function zA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function GA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function QA(){const t=Et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function JA(){return!WA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function XA(){try{return typeof indexedDB=="object"}catch{return!1}}function YA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const ZA="FirebaseError";class xn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ZA,Object.setPrototypeOf(this,xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zi.prototype.create)}}class Zi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?eR(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new xn(s,c,r)}}function eR(t,e){return t.replace(tR,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const tR=/\{\$([^}]+)}/g;function nR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Br(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Bd(i)&&Bd(o)){if(!Br(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Bd(t){return t!==null&&typeof t=="object"}/**
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
 */function eo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function rR(t,e){const n=new sR(t,e);return n.subscribe.bind(n)}class sR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");iR(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=$c),s.error===void 0&&(s.error=$c),s.complete===void 0&&(s.complete=$c);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function iR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $c(){}/**
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
 */function Zt(t){return t&&t._delegate?t._delegate:t}class jr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Nr="[DEFAULT]";/**
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
 */class oR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new $A;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cR(e))try{this.getOrInitializeService({instanceIdentifier:Nr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nr){return this.instances.has(e)}getOptions(e=Nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:aR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Nr){return this.component?this.component.multipleInstances?e:Nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function aR(t){return t===Nr?void 0:t}function cR(t){return t.instantiationMode==="EAGER"}/**
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
 */class lR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new oR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const uR={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},hR=ye.INFO,fR={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},dR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=fR[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fu{constructor(e){this.name=e,this._logLevel=hR,this._logHandler=dR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const pR=(t,e)=>e.some(n=>t instanceof n);let jd,$d;function gR(){return jd||(jd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mR(){return $d||($d=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const R_=new WeakMap,Dl=new WeakMap,S_=new WeakMap,Hc=new WeakMap,Uu=new WeakMap;function _R(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(or(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&R_.set(n,t)}).catch(()=>{}),Uu.set(e,t),e}function yR(t){if(Dl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Dl.set(t,e)}let Vl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Dl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||S_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return or(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function vR(t){Vl=t(Vl)}function ER(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(qc(this),e,...n);return S_.set(r,e.sort?e.sort():[e]),or(r)}:mR().includes(t)?function(...e){return t.apply(qc(this),e),or(R_.get(this))}:function(...e){return or(t.apply(qc(this),e))}}function TR(t){return typeof t=="function"?ER(t):(t instanceof IDBTransaction&&yR(t),pR(t,gR())?new Proxy(t,Vl):t)}function or(t){if(t instanceof IDBRequest)return _R(t);if(Hc.has(t))return Hc.get(t);const e=TR(t);return e!==t&&(Hc.set(t,e),Uu.set(e,t)),e}const qc=t=>Uu.get(t);function wR(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=or(o);return r&&o.addEventListener("upgradeneeded",l=>{r(or(o.result),l.oldVersion,l.newVersion,or(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const IR=["get","getKey","getAll","getAllKeys","count"],bR=["put","add","delete","clear"],Wc=new Map;function Hd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wc.get(e))return Wc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=bR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||IR.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return Wc.set(e,i),i}vR(t=>({...t,get:(e,n,r)=>Hd(e,n)||t.get(e,n,r),has:(e,n)=>!!Hd(e,n)||t.has(e,n)}));/**
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
 */class AR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(RR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function RR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xl="@firebase/app",qd="0.11.2";/**
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
 */const Cn=new Fu("@firebase/app"),SR="@firebase/app-compat",CR="@firebase/analytics-compat",PR="@firebase/analytics",kR="@firebase/app-check-compat",OR="@firebase/app-check",NR="@firebase/auth",DR="@firebase/auth-compat",VR="@firebase/database",xR="@firebase/data-connect",MR="@firebase/database-compat",LR="@firebase/functions",FR="@firebase/functions-compat",UR="@firebase/installations",BR="@firebase/installations-compat",jR="@firebase/messaging",$R="@firebase/messaging-compat",HR="@firebase/performance",qR="@firebase/performance-compat",WR="@firebase/remote-config",KR="@firebase/remote-config-compat",zR="@firebase/storage",GR="@firebase/storage-compat",QR="@firebase/firestore",JR="@firebase/vertexai",XR="@firebase/firestore-compat",YR="firebase",ZR="11.4.0";/**
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
 */const Ml="[DEFAULT]",eS={[xl]:"fire-core",[SR]:"fire-core-compat",[PR]:"fire-analytics",[CR]:"fire-analytics-compat",[OR]:"fire-app-check",[kR]:"fire-app-check-compat",[NR]:"fire-auth",[DR]:"fire-auth-compat",[VR]:"fire-rtdb",[xR]:"fire-data-connect",[MR]:"fire-rtdb-compat",[LR]:"fire-fn",[FR]:"fire-fn-compat",[UR]:"fire-iid",[BR]:"fire-iid-compat",[jR]:"fire-fcm",[$R]:"fire-fcm-compat",[HR]:"fire-perf",[qR]:"fire-perf-compat",[WR]:"fire-rc",[KR]:"fire-rc-compat",[zR]:"fire-gcs",[GR]:"fire-gcs-compat",[QR]:"fire-fst",[XR]:"fire-fst-compat",[JR]:"fire-vertex","fire-js":"fire-js",[YR]:"fire-js-all"};/**
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
 */const ga=new Map,tS=new Map,Ll=new Map;function Wd(t,e){try{t.container.addComponent(e)}catch(n){Cn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Os(t){const e=t.name;if(Ll.has(e))return Cn.debug(`There were multiple attempts to register component ${e}.`),!1;Ll.set(e,t);for(const n of ga.values())Wd(n,t);for(const n of tS.values())Wd(n,t);return!0}function Bu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function sn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const nS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ar=new Zi("app","Firebase",nS);/**
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
 */class rS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new jr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ar.create("app-deleted",{appName:this._name})}}/**
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
 */const $s=ZR;function C_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ml,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw ar.create("bad-app-name",{appName:String(s)});if(n||(n=b_()),!n)throw ar.create("no-options");const i=ga.get(s);if(i){if(Br(n,i.options)&&Br(r,i.config))return i;throw ar.create("duplicate-app",{appName:s})}const o=new lR(s);for(const l of Ll.values())o.addComponent(l);const c=new rS(n,r,o);return ga.set(s,c),c}function P_(t=Ml){const e=ga.get(t);if(!e&&t===Ml&&b_())return C_();if(!e)throw ar.create("no-app",{appName:t});return e}function cr(t,e,n){var r;let s=(r=eS[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cn.warn(c.join(" "));return}Os(new jr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const sS="firebase-heartbeat-database",iS=1,Ui="firebase-heartbeat-store";let Kc=null;function k_(){return Kc||(Kc=wR(sS,iS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ui)}catch(n){console.warn(n)}}}}).catch(t=>{throw ar.create("idb-open",{originalErrorMessage:t.message})})),Kc}async function oS(t){try{const n=(await k_()).transaction(Ui),r=await n.objectStore(Ui).get(O_(t));return await n.done,r}catch(e){if(e instanceof xn)Cn.warn(e.message);else{const n=ar.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cn.warn(n.message)}}}async function Kd(t,e){try{const r=(await k_()).transaction(Ui,"readwrite");await r.objectStore(Ui).put(e,O_(t)),await r.done}catch(n){if(n instanceof xn)Cn.warn(n.message);else{const r=ar.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Cn.warn(r.message)}}}function O_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const aS=1024,cS=30;class lS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=zd();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>cS){const o=fS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Cn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=zd(),{heartbeatsToSend:r,unsentEntries:s}=uS(this._heartbeatsCache.heartbeats),i=pa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Cn.warn(n),""}}}function zd(){return new Date().toISOString().substring(0,10)}function uS(t,e=aS){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Gd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Gd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class hS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return XA()?YA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await oS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Kd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Kd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Gd(t){return pa(JSON.stringify({version:2,heartbeats:t})).length}function fS(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function dS(t){Os(new jr("platform-logger",e=>new AR(e),"PRIVATE")),Os(new jr("heartbeat",e=>new lS(e),"PRIVATE")),cr(xl,qd,t),cr(xl,qd,"esm2017"),cr("fire-js","")}dS("");var pS="firebase",gS="11.4.0";/**
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
 */cr(pS,gS,"app");var Qd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var lr,N_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,v){function y(){}y.prototype=v.prototype,R.D=v.prototype,R.prototype=new y,R.prototype.constructor=R,R.C=function(E,P,S){for(var T=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)T[ge-2]=arguments[ge];return v.prototype[P].apply(E,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(R,v,y){y||(y=0);var E=Array(16);if(typeof v=="string")for(var P=0;16>P;++P)E[P]=v.charCodeAt(y++)|v.charCodeAt(y++)<<8|v.charCodeAt(y++)<<16|v.charCodeAt(y++)<<24;else for(P=0;16>P;++P)E[P]=v[y++]|v[y++]<<8|v[y++]<<16|v[y++]<<24;v=R.g[0],y=R.g[1],P=R.g[2];var S=R.g[3],T=v+(S^y&(P^S))+E[0]+3614090360&4294967295;v=y+(T<<7&4294967295|T>>>25),T=S+(P^v&(y^P))+E[1]+3905402710&4294967295,S=v+(T<<12&4294967295|T>>>20),T=P+(y^S&(v^y))+E[2]+606105819&4294967295,P=S+(T<<17&4294967295|T>>>15),T=y+(v^P&(S^v))+E[3]+3250441966&4294967295,y=P+(T<<22&4294967295|T>>>10),T=v+(S^y&(P^S))+E[4]+4118548399&4294967295,v=y+(T<<7&4294967295|T>>>25),T=S+(P^v&(y^P))+E[5]+1200080426&4294967295,S=v+(T<<12&4294967295|T>>>20),T=P+(y^S&(v^y))+E[6]+2821735955&4294967295,P=S+(T<<17&4294967295|T>>>15),T=y+(v^P&(S^v))+E[7]+4249261313&4294967295,y=P+(T<<22&4294967295|T>>>10),T=v+(S^y&(P^S))+E[8]+1770035416&4294967295,v=y+(T<<7&4294967295|T>>>25),T=S+(P^v&(y^P))+E[9]+2336552879&4294967295,S=v+(T<<12&4294967295|T>>>20),T=P+(y^S&(v^y))+E[10]+4294925233&4294967295,P=S+(T<<17&4294967295|T>>>15),T=y+(v^P&(S^v))+E[11]+2304563134&4294967295,y=P+(T<<22&4294967295|T>>>10),T=v+(S^y&(P^S))+E[12]+1804603682&4294967295,v=y+(T<<7&4294967295|T>>>25),T=S+(P^v&(y^P))+E[13]+4254626195&4294967295,S=v+(T<<12&4294967295|T>>>20),T=P+(y^S&(v^y))+E[14]+2792965006&4294967295,P=S+(T<<17&4294967295|T>>>15),T=y+(v^P&(S^v))+E[15]+1236535329&4294967295,y=P+(T<<22&4294967295|T>>>10),T=v+(P^S&(y^P))+E[1]+4129170786&4294967295,v=y+(T<<5&4294967295|T>>>27),T=S+(y^P&(v^y))+E[6]+3225465664&4294967295,S=v+(T<<9&4294967295|T>>>23),T=P+(v^y&(S^v))+E[11]+643717713&4294967295,P=S+(T<<14&4294967295|T>>>18),T=y+(S^v&(P^S))+E[0]+3921069994&4294967295,y=P+(T<<20&4294967295|T>>>12),T=v+(P^S&(y^P))+E[5]+3593408605&4294967295,v=y+(T<<5&4294967295|T>>>27),T=S+(y^P&(v^y))+E[10]+38016083&4294967295,S=v+(T<<9&4294967295|T>>>23),T=P+(v^y&(S^v))+E[15]+3634488961&4294967295,P=S+(T<<14&4294967295|T>>>18),T=y+(S^v&(P^S))+E[4]+3889429448&4294967295,y=P+(T<<20&4294967295|T>>>12),T=v+(P^S&(y^P))+E[9]+568446438&4294967295,v=y+(T<<5&4294967295|T>>>27),T=S+(y^P&(v^y))+E[14]+3275163606&4294967295,S=v+(T<<9&4294967295|T>>>23),T=P+(v^y&(S^v))+E[3]+4107603335&4294967295,P=S+(T<<14&4294967295|T>>>18),T=y+(S^v&(P^S))+E[8]+1163531501&4294967295,y=P+(T<<20&4294967295|T>>>12),T=v+(P^S&(y^P))+E[13]+2850285829&4294967295,v=y+(T<<5&4294967295|T>>>27),T=S+(y^P&(v^y))+E[2]+4243563512&4294967295,S=v+(T<<9&4294967295|T>>>23),T=P+(v^y&(S^v))+E[7]+1735328473&4294967295,P=S+(T<<14&4294967295|T>>>18),T=y+(S^v&(P^S))+E[12]+2368359562&4294967295,y=P+(T<<20&4294967295|T>>>12),T=v+(y^P^S)+E[5]+4294588738&4294967295,v=y+(T<<4&4294967295|T>>>28),T=S+(v^y^P)+E[8]+2272392833&4294967295,S=v+(T<<11&4294967295|T>>>21),T=P+(S^v^y)+E[11]+1839030562&4294967295,P=S+(T<<16&4294967295|T>>>16),T=y+(P^S^v)+E[14]+4259657740&4294967295,y=P+(T<<23&4294967295|T>>>9),T=v+(y^P^S)+E[1]+2763975236&4294967295,v=y+(T<<4&4294967295|T>>>28),T=S+(v^y^P)+E[4]+1272893353&4294967295,S=v+(T<<11&4294967295|T>>>21),T=P+(S^v^y)+E[7]+4139469664&4294967295,P=S+(T<<16&4294967295|T>>>16),T=y+(P^S^v)+E[10]+3200236656&4294967295,y=P+(T<<23&4294967295|T>>>9),T=v+(y^P^S)+E[13]+681279174&4294967295,v=y+(T<<4&4294967295|T>>>28),T=S+(v^y^P)+E[0]+3936430074&4294967295,S=v+(T<<11&4294967295|T>>>21),T=P+(S^v^y)+E[3]+3572445317&4294967295,P=S+(T<<16&4294967295|T>>>16),T=y+(P^S^v)+E[6]+76029189&4294967295,y=P+(T<<23&4294967295|T>>>9),T=v+(y^P^S)+E[9]+3654602809&4294967295,v=y+(T<<4&4294967295|T>>>28),T=S+(v^y^P)+E[12]+3873151461&4294967295,S=v+(T<<11&4294967295|T>>>21),T=P+(S^v^y)+E[15]+530742520&4294967295,P=S+(T<<16&4294967295|T>>>16),T=y+(P^S^v)+E[2]+3299628645&4294967295,y=P+(T<<23&4294967295|T>>>9),T=v+(P^(y|~S))+E[0]+4096336452&4294967295,v=y+(T<<6&4294967295|T>>>26),T=S+(y^(v|~P))+E[7]+1126891415&4294967295,S=v+(T<<10&4294967295|T>>>22),T=P+(v^(S|~y))+E[14]+2878612391&4294967295,P=S+(T<<15&4294967295|T>>>17),T=y+(S^(P|~v))+E[5]+4237533241&4294967295,y=P+(T<<21&4294967295|T>>>11),T=v+(P^(y|~S))+E[12]+1700485571&4294967295,v=y+(T<<6&4294967295|T>>>26),T=S+(y^(v|~P))+E[3]+2399980690&4294967295,S=v+(T<<10&4294967295|T>>>22),T=P+(v^(S|~y))+E[10]+4293915773&4294967295,P=S+(T<<15&4294967295|T>>>17),T=y+(S^(P|~v))+E[1]+2240044497&4294967295,y=P+(T<<21&4294967295|T>>>11),T=v+(P^(y|~S))+E[8]+1873313359&4294967295,v=y+(T<<6&4294967295|T>>>26),T=S+(y^(v|~P))+E[15]+4264355552&4294967295,S=v+(T<<10&4294967295|T>>>22),T=P+(v^(S|~y))+E[6]+2734768916&4294967295,P=S+(T<<15&4294967295|T>>>17),T=y+(S^(P|~v))+E[13]+1309151649&4294967295,y=P+(T<<21&4294967295|T>>>11),T=v+(P^(y|~S))+E[4]+4149444226&4294967295,v=y+(T<<6&4294967295|T>>>26),T=S+(y^(v|~P))+E[11]+3174756917&4294967295,S=v+(T<<10&4294967295|T>>>22),T=P+(v^(S|~y))+E[2]+718787259&4294967295,P=S+(T<<15&4294967295|T>>>17),T=y+(S^(P|~v))+E[9]+3951481745&4294967295,R.g[0]=R.g[0]+v&4294967295,R.g[1]=R.g[1]+(P+(T<<21&4294967295|T>>>11))&4294967295,R.g[2]=R.g[2]+P&4294967295,R.g[3]=R.g[3]+S&4294967295}r.prototype.u=function(R,v){v===void 0&&(v=R.length);for(var y=v-this.blockSize,E=this.B,P=this.h,S=0;S<v;){if(P==0)for(;S<=y;)s(this,R,S),S+=this.blockSize;if(typeof R=="string"){for(;S<v;)if(E[P++]=R.charCodeAt(S++),P==this.blockSize){s(this,E),P=0;break}}else for(;S<v;)if(E[P++]=R[S++],P==this.blockSize){s(this,E),P=0;break}}this.h=P,this.o+=v},r.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var v=1;v<R.length-8;++v)R[v]=0;var y=8*this.o;for(v=R.length-8;v<R.length;++v)R[v]=y&255,y/=256;for(this.u(R),R=Array(16),v=y=0;4>v;++v)for(var E=0;32>E;E+=8)R[y++]=this.g[v]>>>E&255;return R};function i(R,v){var y=c;return Object.prototype.hasOwnProperty.call(y,R)?y[R]:y[R]=v(R)}function o(R,v){this.h=v;for(var y=[],E=!0,P=R.length-1;0<=P;P--){var S=R[P]|0;E&&S==v||(y[P]=S,E=!1)}this.g=y}var c={};function l(R){return-128<=R&&128>R?i(R,function(v){return new o([v|0],0>v?-1:0)}):new o([R|0],0>R?-1:0)}function h(R){if(isNaN(R)||!isFinite(R))return d;if(0>R)return O(h(-R));for(var v=[],y=1,E=0;R>=y;E++)v[E]=R/y|0,y*=4294967296;return new o(v,0)}function u(R,v){if(R.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(R.charAt(0)=="-")return O(u(R.substring(1),v));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(v,8)),E=d,P=0;P<R.length;P+=8){var S=Math.min(8,R.length-P),T=parseInt(R.substring(P,P+S),v);8>S?(S=h(Math.pow(v,S)),E=E.j(S).add(h(T))):(E=E.j(y),E=E.add(h(T)))}return E}var d=l(0),g=l(1),m=l(16777216);t=o.prototype,t.m=function(){if(b(this))return-O(this).m();for(var R=0,v=1,y=0;y<this.g.length;y++){var E=this.i(y);R+=(0<=E?E:4294967296+E)*v,v*=4294967296}return R},t.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(I(this))return"0";if(b(this))return"-"+O(this).toString(R);for(var v=h(Math.pow(R,6)),y=this,E="";;){var P=k(y,v).g;y=D(y,P.j(v));var S=((0<y.g.length?y.g[0]:y.h)>>>0).toString(R);if(y=P,I(y))return S+E;for(;6>S.length;)S="0"+S;E=S+E}},t.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function I(R){if(R.h!=0)return!1;for(var v=0;v<R.g.length;v++)if(R.g[v]!=0)return!1;return!0}function b(R){return R.h==-1}t.l=function(R){return R=D(this,R),b(R)?-1:I(R)?0:1};function O(R){for(var v=R.g.length,y=[],E=0;E<v;E++)y[E]=~R.g[E];return new o(y,~R.h).add(g)}t.abs=function(){return b(this)?O(this):this},t.add=function(R){for(var v=Math.max(this.g.length,R.g.length),y=[],E=0,P=0;P<=v;P++){var S=E+(this.i(P)&65535)+(R.i(P)&65535),T=(S>>>16)+(this.i(P)>>>16)+(R.i(P)>>>16);E=T>>>16,S&=65535,T&=65535,y[P]=T<<16|S}return new o(y,y[y.length-1]&-2147483648?-1:0)};function D(R,v){return R.add(O(v))}t.j=function(R){if(I(this)||I(R))return d;if(b(this))return b(R)?O(this).j(O(R)):O(O(this).j(R));if(b(R))return O(this.j(O(R)));if(0>this.l(m)&&0>R.l(m))return h(this.m()*R.m());for(var v=this.g.length+R.g.length,y=[],E=0;E<2*v;E++)y[E]=0;for(E=0;E<this.g.length;E++)for(var P=0;P<R.g.length;P++){var S=this.i(E)>>>16,T=this.i(E)&65535,ge=R.i(P)>>>16,_e=R.i(P)&65535;y[2*E+2*P]+=T*_e,N(y,2*E+2*P),y[2*E+2*P+1]+=S*_e,N(y,2*E+2*P+1),y[2*E+2*P+1]+=T*ge,N(y,2*E+2*P+1),y[2*E+2*P+2]+=S*ge,N(y,2*E+2*P+2)}for(E=0;E<v;E++)y[E]=y[2*E+1]<<16|y[2*E];for(E=v;E<2*v;E++)y[E]=0;return new o(y,0)};function N(R,v){for(;(R[v]&65535)!=R[v];)R[v+1]+=R[v]>>>16,R[v]&=65535,v++}function w(R,v){this.g=R,this.h=v}function k(R,v){if(I(v))throw Error("division by zero");if(I(R))return new w(d,d);if(b(R))return v=k(O(R),v),new w(O(v.g),O(v.h));if(b(v))return v=k(R,O(v)),new w(O(v.g),v.h);if(30<R.g.length){if(b(R)||b(v))throw Error("slowDivide_ only works with positive integers.");for(var y=g,E=v;0>=E.l(R);)y=V(y),E=V(E);var P=F(y,1),S=F(E,1);for(E=F(E,2),y=F(y,2);!I(E);){var T=S.add(E);0>=T.l(R)&&(P=P.add(y),S=T),E=F(E,1),y=F(y,1)}return v=D(R,P.j(v)),new w(P,v)}for(P=d;0<=R.l(v);){for(y=Math.max(1,Math.floor(R.m()/v.m())),E=Math.ceil(Math.log(y)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),S=h(y),T=S.j(v);b(T)||0<T.l(R);)y-=E,S=h(y),T=S.j(v);I(S)&&(S=g),P=P.add(S),R=D(R,T)}return new w(P,R)}t.A=function(R){return k(this,R).h},t.and=function(R){for(var v=Math.max(this.g.length,R.g.length),y=[],E=0;E<v;E++)y[E]=this.i(E)&R.i(E);return new o(y,this.h&R.h)},t.or=function(R){for(var v=Math.max(this.g.length,R.g.length),y=[],E=0;E<v;E++)y[E]=this.i(E)|R.i(E);return new o(y,this.h|R.h)},t.xor=function(R){for(var v=Math.max(this.g.length,R.g.length),y=[],E=0;E<v;E++)y[E]=this.i(E)^R.i(E);return new o(y,this.h^R.h)};function V(R){for(var v=R.g.length+1,y=[],E=0;E<v;E++)y[E]=R.i(E)<<1|R.i(E-1)>>>31;return new o(y,R.h)}function F(R,v){var y=v>>5;v%=32;for(var E=R.g.length-y,P=[],S=0;S<E;S++)P[S]=0<v?R.i(S+y)>>>v|R.i(S+y+1)<<32-v:R.i(S+y);return new o(P,R.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,N_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=u,lr=o}).apply(typeof Qd<"u"?Qd:typeof self<"u"?self:typeof window<"u"?window:{});var Vo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var D_,fi,V_,Wo,Fl,x_,M_,L_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,f,p){return a==Array.prototype||a==Object.prototype||(a[f]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vo=="object"&&Vo];for(var f=0;f<a.length;++f){var p=a[f];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,f){if(f)e:{var p=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var x=a[_];if(!(x in p))break e;p=p[x]}a=a[a.length-1],_=p[a],f=f(_),f!=_&&f!=null&&e(p,a,{configurable:!0,writable:!0,value:f})}}function i(a,f){a instanceof String&&(a+="");var p=0,_=!1,x={next:function(){if(!_&&p<a.length){var L=p++;return{value:f(L,a[L]),done:!1}}return _=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}s("Array.prototype.values",function(a){return a||function(){return i(this,function(f,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var f=typeof a;return f=f!="object"?f:a?Array.isArray(a)?"array":f:"null",f=="array"||f=="object"&&typeof a.length=="number"}function h(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function u(a,f,p){return a.call.apply(a.bind,arguments)}function d(a,f,p){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,_),a.apply(f,x)}}return function(){return a.apply(f,arguments)}}function g(a,f,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?u:d,g.apply(null,arguments)}function m(a,f){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function I(a,f){function p(){}p.prototype=f.prototype,a.aa=f.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(_,x,L){for(var G=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)G[Oe-2]=arguments[Oe];return f.prototype[x].apply(_,G)}}function b(a){const f=a.length;if(0<f){const p=Array(f);for(let _=0;_<f;_++)p[_]=a[_];return p}return[]}function O(a,f){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(l(_)){const x=a.length||0,L=_.length||0;a.length=x+L;for(let G=0;G<L;G++)a[x+G]=_[G]}else a.push(_)}}class D{constructor(f,p){this.i=f,this.j=p,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function N(a){return/^[\s\xa0]*$/.test(a)}function w(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function k(a){return k[" "](a),a}k[" "]=function(){};var V=w().indexOf("Gecko")!=-1&&!(w().toLowerCase().indexOf("webkit")!=-1&&w().indexOf("Edge")==-1)&&!(w().indexOf("Trident")!=-1||w().indexOf("MSIE")!=-1)&&w().indexOf("Edge")==-1;function F(a,f,p){for(const _ in a)f.call(p,a[_],_,a)}function R(a,f){for(const p in a)f.call(void 0,a[p],p,a)}function v(a){const f={};for(const p in a)f[p]=a[p];return f}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,f){let p,_;for(let x=1;x<arguments.length;x++){_=arguments[x];for(p in _)a[p]=_[p];for(let L=0;L<y.length;L++)p=y[L],Object.prototype.hasOwnProperty.call(_,p)&&(a[p]=_[p])}}function P(a){var f=1;a=a.split(":");const p=[];for(;0<f&&a.length;)p.push(a.shift()),f--;return a.length&&p.push(a.join(":")),p}function S(a){c.setTimeout(()=>{throw a},0)}function T(){var a=Le;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class ge{constructor(){this.h=this.g=null}add(f,p){const _=_e.get();_.set(f,p),this.h?this.h.next=_:this.g=_,this.h=_}}var _e=new D(()=>new te,a=>a.reset());class te{constructor(){this.next=this.g=this.h=null}set(f,p){this.h=f,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let le,ee=!1,Le=new ge,Ht=()=>{const a=c.Promise.resolve(void 0);le=()=>{a.then(Vt)}};var Vt=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(p){S(p)}var f=_e;f.j(a),100>f.h&&(f.h++,a.next=f.g,f.g=a)}ee=!1};function Fe(){this.s=this.s,this.C=this.C}Fe.prototype.s=!1,Fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ue(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}Ue.prototype.h=function(){this.defaultPrevented=!0};var Mn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};c.addEventListener("test",p,f),c.removeEventListener("test",p,f)}catch{}return a}();function en(a,f){if(Ue.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget){if(V){e:{try{k(f.nodeName);var x=!0;break e}catch{}x=!1}x||(f=null)}}else p=="mouseover"?f=a.fromElement:p=="mouseout"&&(f=a.toElement);this.relatedTarget=f,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Rt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&en.aa.h.call(this)}}I(en,Ue);var Rt={2:"touch",3:"pen",4:"mouse"};en.prototype.h=function(){en.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var B="closure_listenable_"+(1e6*Math.random()|0),Y=0;function J(a,f,p,_,x){this.listener=a,this.proxy=null,this.src=f,this.type=p,this.capture=!!_,this.ha=x,this.key=++Y,this.da=this.fa=!1}function ne(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ee(a){this.src=a,this.g={},this.h=0}Ee.prototype.add=function(a,f,p,_,x){var L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);var G=A(a,f,_,x);return-1<G?(f=a[G],p||(f.fa=!1)):(f=new J(f,this.src,L,!!_,x),f.fa=p,a.push(f)),f};function ke(a,f){var p=f.type;if(p in a.g){var _=a.g[p],x=Array.prototype.indexOf.call(_,f,void 0),L;(L=0<=x)&&Array.prototype.splice.call(_,x,1),L&&(ne(f),a.g[p].length==0&&(delete a.g[p],a.h--))}}function A(a,f,p,_){for(var x=0;x<a.length;++x){var L=a[x];if(!L.da&&L.listener==f&&L.capture==!!p&&L.ha==_)return x}return-1}var C="closure_lm_"+(1e6*Math.random()|0),M={};function $(a,f,p,_,x){if(Array.isArray(f)){for(var L=0;L<f.length;L++)$(a,f[L],p,_,x);return null}return p=se(p),a&&a[B]?a.K(f,p,h(_)?!!_.capture:!1,x):U(a,f,p,!1,_,x)}function U(a,f,p,_,x,L){if(!f)throw Error("Invalid event type");var G=h(x)?!!x.capture:!!x,Oe=ie(a);if(Oe||(a[C]=Oe=new Ee(a)),p=Oe.add(f,p,_,G,L),p.proxy)return p;if(_=q(),p.proxy=_,_.src=a,_.listener=p,a.addEventListener)Mn||(x=G),x===void 0&&(x=!1),a.addEventListener(f.toString(),_,x);else if(a.attachEvent)a.attachEvent(K(f.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function q(){function a(p){return f.call(a.src,a.listener,p)}const f=W;return a}function Q(a,f,p,_,x){if(Array.isArray(f))for(var L=0;L<f.length;L++)Q(a,f[L],p,_,x);else _=h(_)?!!_.capture:!!_,p=se(p),a&&a[B]?(a=a.i,f=String(f).toString(),f in a.g&&(L=a.g[f],p=A(L,p,_,x),-1<p&&(ne(L[p]),Array.prototype.splice.call(L,p,1),L.length==0&&(delete a.g[f],a.h--)))):a&&(a=ie(a))&&(f=a.g[f.toString()],a=-1,f&&(a=A(f,p,_,x)),(p=-1<a?f[a]:null)&&z(p))}function z(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[B])ke(f.i,a);else{var p=a.type,_=a.proxy;f.removeEventListener?f.removeEventListener(p,_,a.capture):f.detachEvent?f.detachEvent(K(p),_):f.addListener&&f.removeListener&&f.removeListener(_),(p=ie(f))?(ke(p,a),p.h==0&&(p.src=null,f[C]=null)):ne(a)}}}function K(a){return a in M?M[a]:M[a]="on"+a}function W(a,f){if(a.da)a=!0;else{f=new en(f,this);var p=a.listener,_=a.ha||a.src;a.fa&&z(a),a=p.call(_,f)}return a}function ie(a){return a=a[C],a instanceof Ee?a:null}var X="__closure_events_fn_"+(1e9*Math.random()>>>0);function se(a){return typeof a=="function"?a:(a[X]||(a[X]=function(f){return a.handleEvent(f)}),a[X])}function re(){Fe.call(this),this.i=new Ee(this),this.M=this,this.F=null}I(re,Fe),re.prototype[B]=!0,re.prototype.removeEventListener=function(a,f,p,_){Q(this,a,f,p,_)};function ce(a,f){var p,_=a.F;if(_)for(p=[];_;_=_.F)p.push(_);if(a=a.M,_=f.type||f,typeof f=="string")f=new Ue(f,a);else if(f instanceof Ue)f.target=f.target||a;else{var x=f;f=new Ue(_,a),E(f,x)}if(x=!0,p)for(var L=p.length-1;0<=L;L--){var G=f.g=p[L];x=Re(G,_,!0,f)&&x}if(G=f.g=a,x=Re(G,_,!0,f)&&x,x=Re(G,_,!1,f)&&x,p)for(L=0;L<p.length;L++)G=f.g=p[L],x=Re(G,_,!1,f)&&x}re.prototype.N=function(){if(re.aa.N.call(this),this.i){var a=this.i,f;for(f in a.g){for(var p=a.g[f],_=0;_<p.length;_++)ne(p[_]);delete a.g[f],a.h--}}this.F=null},re.prototype.K=function(a,f,p,_){return this.i.add(String(a),f,!1,p,_)},re.prototype.L=function(a,f,p,_){return this.i.add(String(a),f,!0,p,_)};function Re(a,f,p,_){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();for(var x=!0,L=0;L<f.length;++L){var G=f[L];if(G&&!G.da&&G.capture==p){var Oe=G.listener,rt=G.ha||G.src;G.fa&&ke(a.i,G),x=Oe.call(rt,_)!==!1&&x}}return x&&!_.defaultPrevented}function Ie(a,f,p){if(typeof a=="function")p&&(a=g(a,p));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:c.setTimeout(a,f||0)}function ut(a){a.g=Ie(()=>{a.g=null,a.i&&(a.i=!1,ut(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class Ye extends Fe{constructor(f,p){super(),this.m=f,this.l=p,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:ut(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function nt(a){Fe.call(this),this.h=a,this.g={}}I(nt,Fe);var ht=[];function Ln(a){F(a.g,function(f,p){this.g.hasOwnProperty(p)&&z(f)},a),a.g={}}nt.prototype.N=function(){nt.aa.N.call(this),Ln(this)},nt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xr=c.JSON.stringify,Tt=c.JSON.parse,xt=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Yr(){}Yr.prototype.h=null;function Ch(a){return a.h||(a.h=a.i())}function Ph(){}var Gs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ac(){Ue.call(this,"d")}I(ac,Ue);function cc(){Ue.call(this,"c")}I(cc,Ue);var Ir={},kh=null;function co(){return kh=kh||new re}Ir.La="serverreachability";function Oh(a){Ue.call(this,Ir.La,a)}I(Oh,Ue);function Qs(a){const f=co();ce(f,new Oh(f))}Ir.STAT_EVENT="statevent";function Nh(a,f){Ue.call(this,Ir.STAT_EVENT,a),this.stat=f}I(Nh,Ue);function wt(a){const f=co();ce(f,new Nh(f,a))}Ir.Ma="timingevent";function Dh(a,f){Ue.call(this,Ir.Ma,a),this.size=f}I(Dh,Ue);function Js(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},f)}function Xs(){this.g=!0}Xs.prototype.xa=function(){this.g=!1};function Uv(a,f,p,_,x,L){a.info(function(){if(a.g)if(L)for(var G="",Oe=L.split("&"),rt=0;rt<Oe.length;rt++){var be=Oe[rt].split("=");if(1<be.length){var ft=be[0];be=be[1];var dt=ft.split("_");G=2<=dt.length&&dt[1]=="type"?G+(ft+"="+be+"&"):G+(ft+"=redacted&")}}else G=null;else G=L;return"XMLHTTP REQ ("+_+") [attempt "+x+"]: "+f+`
`+p+`
`+G})}function Bv(a,f,p,_,x,L,G){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+x+"]: "+f+`
`+p+`
`+L+" "+G})}function Zr(a,f,p,_){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+$v(a,p)+(_?" "+_:"")})}function jv(a,f){a.info(function(){return"TIMEOUT: "+f})}Xs.prototype.info=function(){};function $v(a,f){if(!a.g)return f;if(!f)return null;try{var p=JSON.parse(f);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var _=p[a];if(!(2>_.length)){var x=_[1];if(Array.isArray(x)&&!(1>x.length)){var L=x[0];if(L!="noop"&&L!="stop"&&L!="close")for(var G=1;G<x.length;G++)x[G]=""}}}}return Xr(p)}catch{return f}}var lo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Vh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},lc;function uo(){}I(uo,Yr),uo.prototype.g=function(){return new XMLHttpRequest},uo.prototype.i=function(){return{}},lc=new uo;function Fn(a,f,p,_){this.j=a,this.i=f,this.l=p,this.R=_||1,this.U=new nt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new xh}function xh(){this.i=null,this.g="",this.h=!1}var Mh={},uc={};function hc(a,f,p){a.L=1,a.v=go(pn(f)),a.m=p,a.P=!0,Lh(a,null)}function Lh(a,f){a.F=Date.now(),ho(a),a.A=pn(a.v);var p=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),Xh(p.i,"t",_),a.C=0,p=a.j.J,a.h=new xh,a.g=mf(a.j,p?f:null,!a.m),0<a.O&&(a.M=new Ye(g(a.Y,a,a.g),a.O)),f=a.U,p=a.g,_=a.ca;var x="readystatechange";Array.isArray(x)||(x&&(ht[0]=x.toString()),x=ht);for(var L=0;L<x.length;L++){var G=$(p,x[L],_||f.handleEvent,!1,f.h||f);if(!G)break;f.g[G.key]=G}f=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,f)):(a.u="GET",a.g.ea(a.A,a.u,null,f)),Qs(),Uv(a.i,a.u,a.A,a.l,a.R,a.m)}Fn.prototype.ca=function(a){a=a.target;const f=this.M;f&&gn(a)==3?f.j():this.Y(a)},Fn.prototype.Y=function(a){try{if(a==this.g)e:{const dt=gn(this.g);var f=this.g.Ba();const ns=this.g.Z();if(!(3>dt)&&(dt!=3||this.g&&(this.h.h||this.g.oa()||sf(this.g)))){this.J||dt!=4||f==7||(f==8||0>=ns?Qs(3):Qs(2)),fc(this);var p=this.g.Z();this.X=p;t:if(Fh(this)){var _=sf(this.g);a="";var x=_.length,L=gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){br(this),Ys(this);var G="";break t}this.h.i=new c.TextDecoder}for(f=0;f<x;f++)this.h.h=!0,a+=this.h.i.decode(_[f],{stream:!(L&&f==x-1)});_.length=0,this.h.g+=a,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=p==200,Bv(this.i,this.u,this.A,this.l,this.R,dt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Oe,rt=this.g;if((Oe=rt.g?rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(Oe)){var be=Oe;break t}}be=null}if(p=be)Zr(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,dc(this,p);else{this.o=!1,this.s=3,wt(12),br(this),Ys(this);break e}}if(this.P){p=!0;let qt;for(;!this.J&&this.C<G.length;)if(qt=Hv(this,G),qt==uc){dt==4&&(this.s=4,wt(14),p=!1),Zr(this.i,this.l,null,"[Incomplete Response]");break}else if(qt==Mh){this.s=4,wt(15),Zr(this.i,this.l,G,"[Invalid Chunk]"),p=!1;break}else Zr(this.i,this.l,qt,null),dc(this,qt);if(Fh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),dt!=4||G.length!=0||this.h.h||(this.s=1,wt(16),p=!1),this.o=this.o&&p,!p)Zr(this.i,this.l,G,"[Invalid Chunked Response]"),br(this),Ys(this);else if(0<G.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),vc(ft),ft.M=!0,wt(11))}}else Zr(this.i,this.l,G,null),dc(this,G);dt==4&&br(this),this.o&&!this.J&&(dt==4?ff(this.j,this):(this.o=!1,ho(this)))}else oE(this.g),p==400&&0<G.indexOf("Unknown SID")?(this.s=3,wt(12)):(this.s=0,wt(13)),br(this),Ys(this)}}}catch{}finally{}};function Fh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Hv(a,f){var p=a.C,_=f.indexOf(`
`,p);return _==-1?uc:(p=Number(f.substring(p,_)),isNaN(p)?Mh:(_+=1,_+p>f.length?uc:(f=f.slice(_,_+p),a.C=_+p,f)))}Fn.prototype.cancel=function(){this.J=!0,br(this)};function ho(a){a.S=Date.now()+a.I,Uh(a,a.I)}function Uh(a,f){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Js(g(a.ba,a),f)}function fc(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Fn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(jv(this.i,this.A),this.L!=2&&(Qs(),wt(17)),br(this),this.s=2,Ys(this)):Uh(this,this.S-a)};function Ys(a){a.j.G==0||a.J||ff(a.j,a)}function br(a){fc(a);var f=a.M;f&&typeof f.ma=="function"&&f.ma(),a.M=null,Ln(a.U),a.g&&(f=a.g,a.g=null,f.abort(),f.ma())}function dc(a,f){try{var p=a.j;if(p.G!=0&&(p.g==a||pc(p.h,a))){if(!a.K&&pc(p.h,a)&&p.G==3){try{var _=p.Da.g.parse(f)}catch{_=null}if(Array.isArray(_)&&_.length==3){var x=_;if(x[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)To(p),vo(p);else break e;yc(p),wt(18)}}else p.za=x[1],0<p.za-p.T&&37500>x[2]&&p.F&&p.v==0&&!p.C&&(p.C=Js(g(p.Za,p),6e3));if(1>=$h(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Rr(p,11)}else if((a.K||p.g==a)&&To(p),!N(f))for(x=p.Da.g.parse(f),f=0;f<x.length;f++){let be=x[f];if(p.T=be[0],be=be[1],p.G==2)if(be[0]=="c"){p.K=be[1],p.ia=be[2];const ft=be[3];ft!=null&&(p.la=ft,p.j.info("VER="+p.la));const dt=be[4];dt!=null&&(p.Aa=dt,p.j.info("SVER="+p.Aa));const ns=be[5];ns!=null&&typeof ns=="number"&&0<ns&&(_=1.5*ns,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const qt=a.g;if(qt){const Io=qt.g?qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Io){var L=_.h;L.g||Io.indexOf("spdy")==-1&&Io.indexOf("quic")==-1&&Io.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(gc(L,L.h),L.h=null))}if(_.D){const Ec=qt.g?qt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ec&&(_.ya=Ec,Ve(_.I,_.D,Ec))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var G=a;if(_.qa=gf(_,_.J?_.ia:null,_.W),G.K){Hh(_.h,G);var Oe=G,rt=_.L;rt&&(Oe.I=rt),Oe.B&&(fc(Oe),ho(Oe)),_.g=G}else uf(_);0<p.i.length&&Eo(p)}else be[0]!="stop"&&be[0]!="close"||Rr(p,7);else p.G==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?Rr(p,7):_c(p):be[0]!="noop"&&p.l&&p.l.ta(be),p.v=0)}}Qs(4)}catch{}}var qv=class{constructor(a,f){this.g=a,this.map=f}};function Bh(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function jh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function $h(a){return a.h?1:a.g?a.g.size:0}function pc(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function gc(a,f){a.g?a.g.add(f):a.h=f}function Hh(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}Bh.prototype.cancel=function(){if(this.i=qh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function qh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const p of a.g.values())f=f.concat(p.D);return f}return b(a.i)}function Wv(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var f=[],p=a.length,_=0;_<p;_++)f.push(a[_]);return f}f=[],p=0;for(_ in a)f[p++]=a[_];return f}function Kv(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var f=[];a=a.length;for(var p=0;p<a;p++)f.push(p);return f}f=[],p=0;for(const _ in a)f[p++]=_;return f}}}function Wh(a,f){if(a.forEach&&typeof a.forEach=="function")a.forEach(f,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,f,void 0);else for(var p=Kv(a),_=Wv(a),x=_.length,L=0;L<x;L++)f.call(void 0,_[L],p&&p[L],a)}var Kh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zv(a,f){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var _=a[p].indexOf("="),x=null;if(0<=_){var L=a[p].substring(0,_);x=a[p].substring(_+1)}else L=a[p];f(L,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function Ar(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Ar){this.h=a.h,fo(this,a.j),this.o=a.o,this.g=a.g,po(this,a.s),this.l=a.l;var f=a.i,p=new ti;p.i=f.i,f.g&&(p.g=new Map(f.g),p.h=f.h),zh(this,p),this.m=a.m}else a&&(f=String(a).match(Kh))?(this.h=!1,fo(this,f[1]||"",!0),this.o=Zs(f[2]||""),this.g=Zs(f[3]||"",!0),po(this,f[4]),this.l=Zs(f[5]||"",!0),zh(this,f[6]||"",!0),this.m=Zs(f[7]||"")):(this.h=!1,this.i=new ti(null,this.h))}Ar.prototype.toString=function(){var a=[],f=this.j;f&&a.push(ei(f,Gh,!0),":");var p=this.g;return(p||f=="file")&&(a.push("//"),(f=this.o)&&a.push(ei(f,Gh,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(ei(p,p.charAt(0)=="/"?Jv:Qv,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",ei(p,Yv)),a.join("")};function pn(a){return new Ar(a)}function fo(a,f,p){a.j=p?Zs(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function po(a,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);a.s=f}else a.s=null}function zh(a,f,p){f instanceof ti?(a.i=f,Zv(a.i,a.h)):(p||(f=ei(f,Xv)),a.i=new ti(f,a.h))}function Ve(a,f,p){a.i.set(f,p)}function go(a){return Ve(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Zs(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ei(a,f,p){return typeof a=="string"?(a=encodeURI(a).replace(f,Gv),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Gv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Gh=/[#\/\?@]/g,Qv=/[#\?:]/g,Jv=/[#\?]/g,Xv=/[#\?@]/g,Yv=/#/g;function ti(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function Un(a){a.g||(a.g=new Map,a.h=0,a.i&&zv(a.i,function(f,p){a.add(decodeURIComponent(f.replace(/\+/g," ")),p)}))}t=ti.prototype,t.add=function(a,f){Un(this),this.i=null,a=es(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(f),this.h+=1,this};function Qh(a,f){Un(a),f=es(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function Jh(a,f){return Un(a),f=es(a,f),a.g.has(f)}t.forEach=function(a,f){Un(this),this.g.forEach(function(p,_){p.forEach(function(x){a.call(f,x,_,this)},this)},this)},t.na=function(){Un(this);const a=Array.from(this.g.values()),f=Array.from(this.g.keys()),p=[];for(let _=0;_<f.length;_++){const x=a[_];for(let L=0;L<x.length;L++)p.push(f[_])}return p},t.V=function(a){Un(this);let f=[];if(typeof a=="string")Jh(this,a)&&(f=f.concat(this.g.get(es(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)f=f.concat(a[p])}return f},t.set=function(a,f){return Un(this),this.i=null,a=es(this,a),Jh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},t.get=function(a,f){return a?(a=this.V(a),0<a.length?String(a[0]):f):f};function Xh(a,f,p){Qh(a,f),0<p.length&&(a.i=null,a.g.set(es(a,f),b(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(var p=0;p<f.length;p++){var _=f[p];const L=encodeURIComponent(String(_)),G=this.V(_);for(_=0;_<G.length;_++){var x=L;G[_]!==""&&(x+="="+encodeURIComponent(String(G[_]))),a.push(x)}}return this.i=a.join("&")};function es(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function Zv(a,f){f&&!a.j&&(Un(a),a.i=null,a.g.forEach(function(p,_){var x=_.toLowerCase();_!=x&&(Qh(this,_),Xh(this,x,p))},a)),a.j=f}function eE(a,f){const p=new Xs;if(c.Image){const _=new Image;_.onload=m(Bn,p,"TestLoadImage: loaded",!0,f,_),_.onerror=m(Bn,p,"TestLoadImage: error",!1,f,_),_.onabort=m(Bn,p,"TestLoadImage: abort",!1,f,_),_.ontimeout=m(Bn,p,"TestLoadImage: timeout",!1,f,_),c.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else f(!1)}function tE(a,f){const p=new Xs,_=new AbortController,x=setTimeout(()=>{_.abort(),Bn(p,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:_.signal}).then(L=>{clearTimeout(x),L.ok?Bn(p,"TestPingServer: ok",!0,f):Bn(p,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(x),Bn(p,"TestPingServer: error",!1,f)})}function Bn(a,f,p,_,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),_(p)}catch{}}function nE(){this.g=new xt}function rE(a,f,p){const _=p||"";try{Wh(a,function(x,L){let G=x;h(x)&&(G=Xr(x)),f.push(_+L+"="+encodeURIComponent(G))})}catch(x){throw f.push(_+"type="+encodeURIComponent("_badmap")),x}}function mo(a){this.l=a.Ub||null,this.j=a.eb||!1}I(mo,Yr),mo.prototype.g=function(){return new _o(this.l,this.j)},mo.prototype.i=function(a){return function(){return a}}({});function _o(a,f){re.call(this),this.D=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(_o,re),t=_o.prototype,t.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=f,this.readyState=1,ri(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(f.body=a),(this.D||c).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ni(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ri(this)),this.g&&(this.readyState=3,ri(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Yh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Yh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?ni(this):ri(this),this.readyState==3&&Yh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ni(this))},t.Qa=function(a){this.g&&(this.response=a,ni(this))},t.ga=function(){this.g&&ni(this)};function ni(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ri(a)}t.setRequestHeader=function(a,f){this.u.append(a,f)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var p=f.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=f.next();return a.join(`\r
`)};function ri(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(_o.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Zh(a){let f="";return F(a,function(p,_){f+=_,f+=":",f+=p,f+=`\r
`}),f}function mc(a,f,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=Zh(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):Ve(a,f,p))}function je(a){re.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(je,re);var sE=/^https?$/i,iE=["POST","PUT"];t=je.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,f,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():lc.g(),this.v=this.o?Ch(this.o):Ch(lc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch(L){ef(this,L);return}if(a=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var x in _)p.set(x,_[x]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const L of _.keys())p.set(L,_.get(L));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(L=>L.toLowerCase()=="content-type"),x=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(iE,f,void 0))||_||x||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,G]of p)this.g.setRequestHeader(L,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{rf(this),this.u=!0,this.g.send(a),this.u=!1}catch(L){ef(this,L)}};function ef(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.m=5,tf(a),yo(a)}function tf(a){a.A||(a.A=!0,ce(a,"complete"),ce(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ce(this,"complete"),ce(this,"abort"),yo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yo(this,!0)),je.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?nf(this):this.bb())},t.bb=function(){nf(this)};function nf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||gn(a)!=4||a.Z()!=2)){if(a.u&&gn(a)==4)Ie(a.Ea,0,a);else if(ce(a,"readystatechange"),gn(a)==4){a.h=!1;try{const G=a.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var p;if(!(p=f)){var _;if(_=G===0){var x=String(a.D).match(Kh)[1]||null;!x&&c.self&&c.self.location&&(x=c.self.location.protocol.slice(0,-1)),_=!sE.test(x?x.toLowerCase():"")}p=_}if(p)ce(a,"complete"),ce(a,"success");else{a.m=6;try{var L=2<gn(a)?a.g.statusText:""}catch{L=""}a.l=L+" ["+a.Z()+"]",tf(a)}}finally{yo(a)}}}}function yo(a,f){if(a.g){rf(a);const p=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,f||ce(a,"ready");try{p.onreadystatechange=_}catch{}}}function rf(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function gn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<gn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),Tt(f)}};function sf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function oE(a){const f={};a=(a.g&&2<=gn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(N(a[_]))continue;var p=P(a[_]);const x=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const L=f[x]||[];f[x]=L,L.push(p)}R(f,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function si(a,f,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||f}function of(a){this.Aa=0,this.i=[],this.j=new Xs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=si("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=si("baseRetryDelayMs",5e3,a),this.cb=si("retryDelaySeedMs",1e4,a),this.Wa=si("forwardChannelMaxRetries",2,a),this.wa=si("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Bh(a&&a.concurrentRequestLimit),this.Da=new nE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=of.prototype,t.la=8,t.G=1,t.connect=function(a,f,p,_){wt(0),this.W=a,this.H=f||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=gf(this,null,this.W),Eo(this)};function _c(a){if(af(a),a.G==3){var f=a.U++,p=pn(a.I);if(Ve(p,"SID",a.K),Ve(p,"RID",f),Ve(p,"TYPE","terminate"),ii(a,p),f=new Fn(a,a.j,f),f.L=2,f.v=go(pn(p)),p=!1,c.navigator&&c.navigator.sendBeacon)try{p=c.navigator.sendBeacon(f.v.toString(),"")}catch{}!p&&c.Image&&(new Image().src=f.v,p=!0),p||(f.g=mf(f.j,null),f.g.ea(f.v)),f.F=Date.now(),ho(f)}pf(a)}function vo(a){a.g&&(vc(a),a.g.cancel(),a.g=null)}function af(a){vo(a),a.u&&(c.clearTimeout(a.u),a.u=null),To(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Eo(a){if(!jh(a.h)&&!a.s){a.s=!0;var f=a.Ga;le||Ht(),ee||(le(),ee=!0),Le.add(f,a),a.B=0}}function aE(a,f){return $h(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=f.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Js(g(a.Ga,a,f),df(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const x=new Fn(this,this.j,a);let L=this.o;if(this.S&&(L?(L=v(L),E(L,this.S)):L=this.S),this.m!==null||this.O||(x.H=L,L=null),this.P)e:{for(var f=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(f+=_,4096<f){f=p;break e}if(f===4096||p===this.i.length-1){f=p+1;break e}}f=1e3}else f=1e3;f=lf(this,x,f),p=pn(this.I),Ve(p,"RID",a),Ve(p,"CVER",22),this.D&&Ve(p,"X-HTTP-Session-Id",this.D),ii(this,p),L&&(this.O?f="headers="+encodeURIComponent(String(Zh(L)))+"&"+f:this.m&&mc(p,this.m,L)),gc(this.h,x),this.Ua&&Ve(p,"TYPE","init"),this.P?(Ve(p,"$req",f),Ve(p,"SID","null"),x.T=!0,hc(x,p,null)):hc(x,p,f),this.G=2}}else this.G==3&&(a?cf(this,a):this.i.length==0||jh(this.h)||cf(this))};function cf(a,f){var p;f?p=f.l:p=a.U++;const _=pn(a.I);Ve(_,"SID",a.K),Ve(_,"RID",p),Ve(_,"AID",a.T),ii(a,_),a.m&&a.o&&mc(_,a.m,a.o),p=new Fn(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),f&&(a.i=f.D.concat(a.i)),f=lf(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),gc(a.h,p),hc(p,_,f)}function ii(a,f){a.H&&F(a.H,function(p,_){Ve(f,_,p)}),a.l&&Wh({},function(p,_){Ve(f,_,p)})}function lf(a,f,p){p=Math.min(a.i.length,p);var _=a.l?g(a.l.Na,a.l,a):null;e:{var x=a.i;let L=-1;for(;;){const G=["count="+p];L==-1?0<p?(L=x[0].g,G.push("ofs="+L)):L=0:G.push("ofs="+L);let Oe=!0;for(let rt=0;rt<p;rt++){let be=x[rt].g;const ft=x[rt].map;if(be-=L,0>be)L=Math.max(0,x[rt].g-100),Oe=!1;else try{rE(ft,G,"req"+be+"_")}catch{_&&_(ft)}}if(Oe){_=G.join("&");break e}}}return a=a.i.splice(0,p),f.D=a,_}function uf(a){if(!a.g&&!a.u){a.Y=1;var f=a.Fa;le||Ht(),ee||(le(),ee=!0),Le.add(f,a),a.v=0}}function yc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Js(g(a.Fa,a),df(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,hf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Js(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,wt(10),vo(this),hf(this))};function vc(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function hf(a){a.g=new Fn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var f=pn(a.qa);Ve(f,"RID","rpc"),Ve(f,"SID",a.K),Ve(f,"AID",a.T),Ve(f,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ve(f,"TO",a.ja),Ve(f,"TYPE","xmlhttp"),ii(a,f),a.m&&a.o&&mc(f,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=go(pn(f)),p.m=null,p.P=!0,Lh(p,a)}t.Za=function(){this.C!=null&&(this.C=null,vo(this),yc(this),wt(19))};function To(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function ff(a,f){var p=null;if(a.g==f){To(a),vc(a),a.g=null;var _=2}else if(pc(a.h,f))p=f.D,Hh(a.h,f),_=1;else return;if(a.G!=0){if(f.o)if(_==1){p=f.m?f.m.length:0,f=Date.now()-f.F;var x=a.B;_=co(),ce(_,new Dh(_,p)),Eo(a)}else uf(a);else if(x=f.s,x==3||x==0&&0<f.X||!(_==1&&aE(a,f)||_==2&&yc(a)))switch(p&&0<p.length&&(f=a.h,f.i=f.i.concat(p)),x){case 1:Rr(a,5);break;case 4:Rr(a,10);break;case 3:Rr(a,6);break;default:Rr(a,2)}}}function df(a,f){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*f}function Rr(a,f){if(a.j.info("Error code "+f),f==2){var p=g(a.fb,a),_=a.Xa;const x=!_;_=new Ar(_||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||fo(_,"https"),go(_),x?eE(_.toString(),p):tE(_.toString(),p)}else wt(2);a.G=0,a.l&&a.l.sa(f),pf(a),af(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),wt(2)):(this.j.info("Failed to ping google.com"),wt(1))};function pf(a){if(a.G=0,a.ka=[],a.l){const f=qh(a.h);(f.length!=0||a.i.length!=0)&&(O(a.ka,f),O(a.ka,a.i),a.h.i.length=0,b(a.i),a.i.length=0),a.l.ra()}}function gf(a,f,p){var _=p instanceof Ar?pn(p):new Ar(p);if(_.g!="")f&&(_.g=f+"."+_.g),po(_,_.s);else{var x=c.location;_=x.protocol,f=f?f+"."+x.hostname:x.hostname,x=+x.port;var L=new Ar(null);_&&fo(L,_),f&&(L.g=f),x&&po(L,x),p&&(L.l=p),_=L}return p=a.D,f=a.ya,p&&f&&Ve(_,p,f),Ve(_,"VER",a.la),ii(a,_),_}function mf(a,f,p){if(f&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Ca&&!a.pa?new je(new mo({eb:p})):new je(a.pa),f.Ha(a.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function _f(){}t=_f.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function wo(){}wo.prototype.g=function(a,f){return new Ot(a,f)};function Ot(a,f){re.call(this),this.g=new of(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(a?a["X-WebChannel-Client-Profile"]=f.va:a={"X-WebChannel-Client-Profile":f.va}),this.g.S=a,(a=f&&f.Sb)&&!N(a)&&(this.g.m=a),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!N(f)&&(this.g.D=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new ts(this)}I(Ot,re),Ot.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ot.prototype.close=function(){_c(this.g)},Ot.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=Xr(a),a=p);f.i.push(new qv(f.Ya++,a)),f.G==3&&Eo(f)},Ot.prototype.N=function(){this.g.l=null,delete this.j,_c(this.g),delete this.g,Ot.aa.N.call(this)};function yf(a){ac.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const p in f){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}I(yf,ac);function vf(){cc.call(this),this.status=1}I(vf,cc);function ts(a){this.g=a}I(ts,_f),ts.prototype.ua=function(){ce(this.g,"a")},ts.prototype.ta=function(a){ce(this.g,new yf(a))},ts.prototype.sa=function(a){ce(this.g,new vf)},ts.prototype.ra=function(){ce(this.g,"b")},wo.prototype.createWebChannel=wo.prototype.g,Ot.prototype.send=Ot.prototype.o,Ot.prototype.open=Ot.prototype.m,Ot.prototype.close=Ot.prototype.close,L_=function(){return new wo},M_=function(){return co()},x_=Ir,Fl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},lo.NO_ERROR=0,lo.TIMEOUT=8,lo.HTTP_ERROR=6,Wo=lo,Vh.COMPLETE="complete",V_=Vh,Ph.EventType=Gs,Gs.OPEN="a",Gs.CLOSE="b",Gs.ERROR="c",Gs.MESSAGE="d",re.prototype.listen=re.prototype.K,fi=Ph,je.prototype.listenOnce=je.prototype.L,je.prototype.getLastError=je.prototype.Ka,je.prototype.getLastErrorCode=je.prototype.Ba,je.prototype.getStatus=je.prototype.Z,je.prototype.getResponseJson=je.prototype.Oa,je.prototype.getResponseText=je.prototype.oa,je.prototype.send=je.prototype.ea,je.prototype.setWithCredentials=je.prototype.Ha,D_=je}).apply(typeof Vo<"u"?Vo:typeof self<"u"?self:typeof window<"u"?window:{});const Jd="@firebase/firestore",Xd="4.7.9";/**
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
 */class gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
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
 */let Hs="11.4.0";/**
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
 */const $r=new Fu("@firebase/firestore");function as(){return $r.logLevel}function Z(t,...e){if($r.logLevel<=ye.DEBUG){const n=e.map(ju);$r.debug(`Firestore (${Hs}): ${t}`,...n)}}function Pn(t,...e){if($r.logLevel<=ye.ERROR){const n=e.map(ju);$r.error(`Firestore (${Hs}): ${t}`,...n)}}function Ns(t,...e){if($r.logLevel<=ye.WARN){const n=e.map(ju);$r.warn(`Firestore (${Hs}): ${t}`,...n)}}function ju(t){if(typeof t=="string")return t;try{/**
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
 */function de(t="Unexpected state"){const e=`FIRESTORE (${Hs}) INTERNAL ASSERTION FAILED: `+t;throw Pn(e),new Error(e)}function Pe(t,e){t||de()}function me(t,e){return t}/**
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
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oe extends xn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ur{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class F_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(gt.UNAUTHENTICATED))}shutdown(){}}class _S{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class yS{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Pe(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new ur;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ur,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ur)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Pe(typeof r.accessToken=="string"),new F_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Pe(e===null||typeof e=="string"),new gt(e)}}class vS{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class ES{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new vS(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Yd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class TS{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,sn(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){Pe(this.o===void 0);const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Yd(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Pe(typeof n.token=="string"),this.R=n.token,new Yd(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function wS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class U_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=wS(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Te(t,e){return t<e?-1:t>e?1:0}function Ds(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const Zd=-62135596800,ep=1e6;class Je{static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*ep);return new Je(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new oe(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new oe(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Zd)throw new oe(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oe(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ep}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Zd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class pe{static fromTimestamp(e){return new pe(e)}static min(){return new pe(new Je(0,0))}static max(){return new pe(new Je(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const tp="__name__";class rn{constructor(e,n,r){n===void 0?n=0:n>e.length&&de(),r===void 0?r=e.length-n:r>e.length-n&&de(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return rn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof rn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=rn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Math.sign(e.length-n.length)}static compareSegments(e,n){const r=rn.isNumericId(e),s=rn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?rn.extractNumericId(e).compare(rn.extractNumericId(n)):e<n?-1:e>n?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return lr.fromString(e.substring(4,e.length-2))}}class Me extends rn{construct(e,n,r){return new Me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new oe(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Me(n)}static emptyPath(){return new Me([])}}const IS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends rn{construct(e,n,r){return new at(e,n,r)}static isValidIdentifier(e){return IS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===tp}static keyField(){return new at([tp])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new oe(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new oe(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new oe(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new oe(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(n)}static emptyPath(){return new at([])}}/**
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
 */class ae{constructor(e){this.path=e}static fromPath(e){return new ae(Me.fromString(e))}static fromName(e){return new ae(Me.fromString(e).popFirst(5))}static empty(){return new ae(Me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ae(new Me(e.slice()))}}/**
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
 */const Bi=-1;function bS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=pe.fromTimestamp(r===1e9?new Je(n+1,0):new Je(n,r));return new dr(s,ae.empty(),e)}function AS(t){return new dr(t.readTime,t.key,Bi)}class dr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new dr(pe.min(),ae.empty(),Bi)}static max(){return new dr(pe.max(),ae.empty(),Bi)}}function RS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ae.comparator(t.documentKey,e.documentKey),n!==0?n:Te(t.largestBatchId,e.largestBatchId))}/**
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
 */const SS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class CS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function qs(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==SS)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&de(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(s=>s?j.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new j((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(u=>{o[h]=u,++c,c===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new j((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function PS(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ws(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ka{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Ka.ae=-1;/**
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
 */const $u=-1;function za(t){return t==null}function ma(t){return t===0&&1/t==-1/0}function kS(t){return typeof t=="number"&&Number.isInteger(t)&&!ma(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const B_="";function OS(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=np(e)),e=NS(t.get(n),e);return np(e)}function NS(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case B_:n+="";break;default:n+=i}}return n}function np(t){return t+B_+""}/**
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
 */function rp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function zr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function j_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Be{constructor(e,n){this.comparator=e,this.root=n||it.EMPTY}insert(e,n){return new Be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,it.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,it.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xo(this.root,e,this.comparator,!1)}getReverseIterator(){return new xo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xo(this.root,e,this.comparator,!0)}}class xo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class it{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??it.RED,this.left=s??it.EMPTY,this.right=i??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new it(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return it.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw de();const e=this.left.check();if(e!==this.right.check())throw de();return e+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw de()}get value(){throw de()}get color(){throw de()}get left(){throw de()}get right(){throw de()}copy(e,n,r,s,i){return this}insert(e,n,r){return new it(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Xe{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new sp(this.data.getIterator())}getIteratorFrom(e){return new sp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Xe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Xe(this.comparator);return n.data=e,n}}class sp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Gt{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new Gt([])}unionWith(e){let n=new Xe(at.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Gt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ds(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class $_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class lt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new $_("Invalid base64 string: "+i):i}}(e);return new lt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new lt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const DS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pr(t){if(Pe(!!t),typeof t=="string"){let e=0;const n=DS.exec(t);if(Pe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function gr(t){return typeof t=="string"?lt.fromBase64String(t):lt.fromUint8Array(t)}/**
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
 */const H_="server_timestamp",q_="__type__",W_="__previous_value__",K_="__local_write_time__";function Hu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[q_])===null||n===void 0?void 0:n.stringValue)===H_}function Ga(t){const e=t.mapValue.fields[W_];return Hu(e)?Ga(e):e}function ji(t){const e=pr(t.mapValue.fields[K_].timestampValue);return new Je(e.seconds,e.nanos)}/**
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
 */class VS{constructor(e,n,r,s,i,o,c,l,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}const _a="(default)";class $i{constructor(e,n){this.projectId=e,this.database=n||_a}static empty(){return new $i("","")}get isDefaultDatabase(){return this.database===_a}isEqual(e){return e instanceof $i&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const z_="__type__",xS="__max__",Mo={mapValue:{}},G_="__vector__",ya="value";function mr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Hu(t)?4:LS(t)?9007199254740991:MS(t)?10:11:de()}function hn(t,e){if(t===e)return!0;const n=mr(t);if(n!==mr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ji(t).isEqual(ji(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=pr(s.timestampValue),c=pr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return gr(s.bytesValue).isEqual(gr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return qe(s.geoPointValue.latitude)===qe(i.geoPointValue.latitude)&&qe(s.geoPointValue.longitude)===qe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return qe(s.integerValue)===qe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=qe(s.doubleValue),c=qe(i.doubleValue);return o===c?ma(o)===ma(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return Ds(t.arrayValue.values||[],e.arrayValue.values||[],hn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(rp(o)!==rp(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!hn(o[l],c[l])))return!1;return!0}(t,e);default:return de()}}function Hi(t,e){return(t.values||[]).find(n=>hn(n,e))!==void 0}function Vs(t,e){if(t===e)return 0;const n=mr(t),r=mr(e);if(n!==r)return Te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Te(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=qe(i.integerValue||i.doubleValue),l=qe(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return ip(t.timestampValue,e.timestampValue);case 4:return ip(ji(t),ji(e));case 5:return Te(t.stringValue,e.stringValue);case 6:return function(i,o){const c=gr(i),l=gr(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const u=Te(c[h],l[h]);if(u!==0)return u}return Te(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=Te(qe(i.latitude),qe(o.latitude));return c!==0?c:Te(qe(i.longitude),qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return op(t.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,h,u;const d=i.fields||{},g=o.fields||{},m=(c=d[ya])===null||c===void 0?void 0:c.arrayValue,I=(l=g[ya])===null||l===void 0?void 0:l.arrayValue,b=Te(((h=m==null?void 0:m.values)===null||h===void 0?void 0:h.length)||0,((u=I==null?void 0:I.values)===null||u===void 0?void 0:u.length)||0);return b!==0?b:op(m,I)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Mo.mapValue&&o===Mo.mapValue)return 0;if(i===Mo.mapValue)return 1;if(o===Mo.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},u=Object.keys(h);l.sort(),u.sort();for(let d=0;d<l.length&&d<u.length;++d){const g=Te(l[d],u[d]);if(g!==0)return g;const m=Vs(c[l[d]],h[u[d]]);if(m!==0)return m}return Te(l.length,u.length)}(t.mapValue,e.mapValue);default:throw de()}}function ip(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Te(t,e);const n=pr(t),r=pr(e),s=Te(n.seconds,r.seconds);return s!==0?s:Te(n.nanos,r.nanos)}function op(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Vs(n[s],r[s]);if(i)return i}return Te(n.length,r.length)}function xs(t){return Ul(t)}function Ul(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=pr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return gr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ae.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ul(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ul(n.fields[o])}`;return s+"}"}(t.mapValue):de()}function Ko(t){switch(mr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ga(t);return e?16+Ko(e):16;case 5:return 2*t.stringValue.length;case 6:return gr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ko(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return zr(r.fields,(i,o)=>{s+=i.length+Ko(o)}),s}(t.mapValue);default:throw de()}}function Bl(t){return!!t&&"integerValue"in t}function qu(t){return!!t&&"arrayValue"in t}function ap(t){return!!t&&"nullValue"in t}function cp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function zo(t){return!!t&&"mapValue"in t}function MS(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[z_])===null||n===void 0?void 0:n.stringValue)===G_}function Ai(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return zr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ai(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ai(t.arrayValue.values[n]);return e}return Object.assign({},t)}function LS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===xS}/**
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
 */class Ut{constructor(e){this.value=e}static empty(){return new Ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!zo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ai(n)}setAll(e){let n=at.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Ai(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());zo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return hn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];zo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){zr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ut(Ai(this.value))}}function Q_(t){const e=[];return zr(t.fields,(n,r)=>{const s=new at([n]);if(zo(r)){const i=Q_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Gt(e)}/**
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
 */class yt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new yt(e,0,pe.min(),pe.min(),pe.min(),Ut.empty(),0)}static newFoundDocument(e,n,r,s){return new yt(e,1,n,pe.min(),r,s,0)}static newNoDocument(e,n){return new yt(e,2,n,pe.min(),pe.min(),Ut.empty(),0)}static newUnknownDocument(e,n){return new yt(e,3,n,pe.min(),pe.min(),Ut.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof yt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class va{constructor(e,n){this.position=e,this.inclusive=n}}function lp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ae.comparator(ae.fromName(o.referenceValue),n.key):r=Vs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function up(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!hn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ea{constructor(e,n="asc"){this.field=e,this.dir=n}}function FS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class J_{}class Qe extends J_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new BS(e,n,r):n==="array-contains"?new HS(e,r):n==="in"?new qS(e,r):n==="not-in"?new WS(e,r):n==="array-contains-any"?new KS(e,r):new Qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new jS(e,r):new $S(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Vs(n,this.value)):n!==null&&mr(this.value)===mr(n)&&this.matchesComparison(Vs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class fn extends J_{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new fn(e,n)}matches(e){return X_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function X_(t){return t.op==="and"}function Y_(t){return US(t)&&X_(t)}function US(t){for(const e of t.filters)if(e instanceof fn)return!1;return!0}function jl(t){if(t instanceof Qe)return t.field.canonicalString()+t.op.toString()+xs(t.value);if(Y_(t))return t.filters.map(e=>jl(e)).join(",");{const e=t.filters.map(n=>jl(n)).join(",");return`${t.op}(${e})`}}function Z_(t,e){return t instanceof Qe?function(r,s){return s instanceof Qe&&r.op===s.op&&r.field.isEqual(s.field)&&hn(r.value,s.value)}(t,e):t instanceof fn?function(r,s){return s instanceof fn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&Z_(o,s.filters[c]),!0):!1}(t,e):void de()}function ey(t){return t instanceof Qe?function(n){return`${n.field.canonicalString()} ${n.op} ${xs(n.value)}`}(t):t instanceof fn?function(n){return n.op.toString()+" {"+n.getFilters().map(ey).join(" ,")+"}"}(t):"Filter"}class BS extends Qe{constructor(e,n,r){super(e,n,r),this.key=ae.fromName(r.referenceValue)}matches(e){const n=ae.comparator(e.key,this.key);return this.matchesComparison(n)}}class jS extends Qe{constructor(e,n){super(e,"in",n),this.keys=ty("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $S extends Qe{constructor(e,n){super(e,"not-in",n),this.keys=ty("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ty(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ae.fromName(r.referenceValue))}class HS extends Qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return qu(n)&&Hi(n.arrayValue,this.value)}}class qS extends Qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Hi(this.value.arrayValue,n)}}class WS extends Qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Hi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Hi(this.value.arrayValue,n)}}class KS extends Qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!qu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Hi(this.value.arrayValue,r))}}/**
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
 */class zS{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.le=null}}function hp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new zS(t,e,n,r,s,i,o)}function Wu(t){const e=me(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>jl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),za(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>xs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>xs(r)).join(",")),e.le=n}return e.le}function Ku(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!FS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Z_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!up(t.startAt,e.startAt)&&up(t.endAt,e.endAt)}function $l(t){return ae.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Qa{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function GS(t,e,n,r,s,i,o,c){return new Qa(t,e,n,r,s,i,o,c)}function zu(t){return new Qa(t)}function fp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function QS(t){return t.collectionGroup!==null}function Ri(t){const e=me(t);if(e.he===null){e.he=[];const n=new Set;for(const i of e.explicitOrderBy)e.he.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Xe(at.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.he.push(new Ea(i,r))}),n.has(at.keyField().canonicalString())||e.he.push(new Ea(at.keyField(),r))}return e.he}function an(t){const e=me(t);return e.Pe||(e.Pe=JS(e,Ri(t))),e.Pe}function JS(t,e){if(t.limitType==="F")return hp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ea(s.field,i)});const n=t.endAt?new va(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new va(t.startAt.position,t.startAt.inclusive):null;return hp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Hl(t,e,n){return new Qa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ja(t,e){return Ku(an(t),an(e))&&t.limitType===e.limitType}function ny(t){return`${Wu(an(t))}|lt:${t.limitType}`}function cs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>ey(s)).join(", ")}]`),za(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>xs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>xs(s)).join(",")),`Target(${r})`}(an(t))}; limitType=${t.limitType})`}function Xa(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ae.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ri(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const h=lp(o,c,l);return o.inclusive?h<=0:h<0}(r.startAt,Ri(r),s)||r.endAt&&!function(o,c,l){const h=lp(o,c,l);return o.inclusive?h>=0:h>0}(r.endAt,Ri(r),s))}(t,e)}function XS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ry(t){return(e,n)=>{let r=!1;for(const s of Ri(t)){const i=YS(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function YS(t,e,n){const r=t.field.isKeyField()?ae.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?Vs(l,h):de()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return de()}}/**
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
 */class Gr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){zr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return j_(this.inner)}size(){return this.innerSize}}/**
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
 */const ZS=new Be(ae.comparator);function kn(){return ZS}const sy=new Be(ae.comparator);function di(...t){let e=sy;for(const n of t)e=e.insert(n.key,n);return e}function iy(t){let e=sy;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Dr(){return Si()}function oy(){return Si()}function Si(){return new Gr(t=>t.toString(),(t,e)=>t.isEqual(e))}const eC=new Be(ae.comparator),tC=new Xe(ae.comparator);function ve(...t){let e=tC;for(const n of t)e=e.add(n);return e}const nC=new Xe(Te);function rC(){return nC}/**
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
 */function Gu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ma(e)?"-0":e}}function ay(t){return{integerValue:""+t}}function sC(t,e){return kS(e)?ay(e):Gu(t,e)}/**
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
 */class Ya{constructor(){this._=void 0}}function iC(t,e,n){return t instanceof Ta?function(s,i){const o={fields:{[q_]:{stringValue:H_},[K_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Hu(i)&&(i=Ga(i)),i&&(o.fields[W_]=i),{mapValue:o}}(n,e):t instanceof qi?ly(t,e):t instanceof Wi?uy(t,e):function(s,i){const o=cy(s,i),c=dp(o)+dp(s.Ie);return Bl(o)&&Bl(s.Ie)?ay(c):Gu(s.serializer,c)}(t,e)}function oC(t,e,n){return t instanceof qi?ly(t,e):t instanceof Wi?uy(t,e):n}function cy(t,e){return t instanceof wa?function(r){return Bl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ta extends Ya{}class qi extends Ya{constructor(e){super(),this.elements=e}}function ly(t,e){const n=hy(e);for(const r of t.elements)n.some(s=>hn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Wi extends Ya{constructor(e){super(),this.elements=e}}function uy(t,e){let n=hy(e);for(const r of t.elements)n=n.filter(s=>!hn(s,r));return{arrayValue:{values:n}}}class wa extends Ya{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function dp(t){return qe(t.integerValue||t.doubleValue)}function hy(t){return qu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function aC(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof qi&&s instanceof qi||r instanceof Wi&&s instanceof Wi?Ds(r.elements,s.elements,hn):r instanceof wa&&s instanceof wa?hn(r.Ie,s.Ie):r instanceof Ta&&s instanceof Ta}(t.transform,e.transform)}class cC{constructor(e,n){this.version=e,this.transformResults=n}}class Rn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Rn}static exists(e){return new Rn(void 0,e)}static updateTime(e){return new Rn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Go(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Za{}function fy(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new py(t.key,Rn.none()):new to(t.key,t.data,Rn.none());{const n=t.data,r=Ut.empty();let s=new Xe(at.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Qr(t.key,r,new Gt(s.toArray()),Rn.none())}}function lC(t,e,n){t instanceof to?function(s,i,o){const c=s.value.clone(),l=gp(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Qr?function(s,i,o){if(!Go(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=gp(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(dy(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ci(t,e,n,r){return t instanceof to?function(i,o,c,l){if(!Go(i.precondition,o))return c;const h=i.value.clone(),u=mp(i.fieldTransforms,l,o);return h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Qr?function(i,o,c,l){if(!Go(i.precondition,o))return c;const h=mp(i.fieldTransforms,l,o),u=o.data;return u.setAll(dy(i)),u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,o,c){return Go(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function uC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=cy(r.transform,s||null);i!=null&&(n===null&&(n=Ut.empty()),n.set(r.field,i))}return n||null}function pp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ds(r,s,(i,o)=>aC(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class to extends Za{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Qr extends Za{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function dy(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function gp(t,e,n){const r=new Map;Pe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,oC(o,c,n[s]))}return r}function mp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,iC(i,o,e))}return r}class py extends Za{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hC extends Za{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class fC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&lC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ci(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ci(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=oy();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=fy(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(pe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ve())}isEqual(e){return this.batchId===e.batchId&&Ds(this.mutations,e.mutations,(n,r)=>pp(n,r))&&Ds(this.baseMutations,e.baseMutations,(n,r)=>pp(n,r))}}class Qu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Pe(e.mutations.length===r.length);let s=function(){return eC}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Qu(e,n,r,s)}}/**
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
 */class dC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class pC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ke,we;function gC(t){switch(t){case H.OK:return de();case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return de()}}function gy(t){if(t===void 0)return Pn("GRPC error has no .code"),H.UNKNOWN;switch(t){case Ke.OK:return H.OK;case Ke.CANCELLED:return H.CANCELLED;case Ke.UNKNOWN:return H.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return H.INTERNAL;case Ke.UNAVAILABLE:return H.UNAVAILABLE;case Ke.UNAUTHENTICATED:return H.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case Ke.NOT_FOUND:return H.NOT_FOUND;case Ke.ALREADY_EXISTS:return H.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return H.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case Ke.ABORTED:return H.ABORTED;case Ke.OUT_OF_RANGE:return H.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return H.UNIMPLEMENTED;case Ke.DATA_LOSS:return H.DATA_LOSS;default:return de()}}(we=Ke||(Ke={}))[we.OK=0]="OK",we[we.CANCELLED=1]="CANCELLED",we[we.UNKNOWN=2]="UNKNOWN",we[we.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",we[we.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",we[we.NOT_FOUND=5]="NOT_FOUND",we[we.ALREADY_EXISTS=6]="ALREADY_EXISTS",we[we.PERMISSION_DENIED=7]="PERMISSION_DENIED",we[we.UNAUTHENTICATED=16]="UNAUTHENTICATED",we[we.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",we[we.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",we[we.ABORTED=10]="ABORTED",we[we.OUT_OF_RANGE=11]="OUT_OF_RANGE",we[we.UNIMPLEMENTED=12]="UNIMPLEMENTED",we[we.INTERNAL=13]="INTERNAL",we[we.UNAVAILABLE=14]="UNAVAILABLE",we[we.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function mC(){return new TextEncoder}/**
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
 */const _C=new lr([4294967295,4294967295],0);function _p(t){const e=mC().encode(t),n=new N_;return n.update(e),new Uint8Array(n.digest())}function yp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new lr([n,r],0),new lr([s,i],0)]}class Ju{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new pi(`Invalid padding: ${n}`);if(r<0)throw new pi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new pi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new pi(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=lr.fromNumber(this.Ee)}Ae(e,n,r){let s=e.add(n.multiply(lr.fromNumber(r)));return s.compare(_C)===1&&(s=new lr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const n=_p(e),[r,s]=yp(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);if(!this.Re(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Ju(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ee===0)return;const n=_p(e),[r,s]=yp(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);this.Ve(o)}}Ve(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class pi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ec{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,no.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ec(pe.min(),s,new Be(Te),kn(),ve())}}class no{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new no(r,n,ve(),ve(),ve())}}/**
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
 */class Qo{constructor(e,n,r,s){this.me=e,this.removedTargetIds=n,this.key=r,this.fe=s}}class my{constructor(e,n){this.targetId=e,this.ge=n}}class _y{constructor(e,n,r=lt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class vp{constructor(){this.pe=0,this.ye=Ep(),this.we=lt.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.we=e)}Fe(){let e=ve(),n=ve(),r=ve();return this.ye.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:de()}}),new no(this.we,this.be,e,n,r)}Me(){this.Se=!1,this.ye=Ep()}xe(e,n){this.Se=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.Se=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Pe(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class yC{constructor(e){this.ke=e,this.qe=new Map,this.Qe=kn(),this.$e=Lo(),this.Ke=Lo(),this.Ue=new Be(Te)}We(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(n,e.fe):this.ze(n,e.key,e.fe);for(const n of e.removedTargetIds)this.ze(n,e.key,e.fe)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.Je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Ce(e.resumeToken));break;default:de()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((r,s)=>{this.Je(s)&&n(s)})}Ze(e){const n=e.targetId,r=e.ge.count,s=this.Xe(n);if(s){const i=s.target;if($l(i))if(r===0){const o=new ae(i.path);this.ze(n,o,yt.newNoDocument(o,pe.min()))}else Pe(r===1);else{const o=this.et(n);if(o!==r){const c=this.tt(e),l=c?this.nt(c,e,o):1;if(l!==0){this.Ye(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(n,h)}}}}}tt(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=gr(r).toUint8Array()}catch(l){if(l instanceof $_)return Ns("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Ju(o,s,i)}catch(l){return Ns(l instanceof pi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ee===0?null:c}nt(e,n,r){return n.ge.count===r-this.st(e,n.targetId)?0:2}st(e,n){const r=this.ke.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ke.it(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.ze(n,i,null),s++)}),s}ot(e){const n=new Map;this.qe.forEach((i,o)=>{const c=this.Xe(o);if(c){if(i.current&&$l(c.target)){const l=new ae(c.target.path);this._t(l).has(o)||this.ut(o,l)||this.ze(o,l,yt.newNoDocument(l,e))}i.ve&&(n.set(o,i.Fe()),i.Me())}});let r=ve();this.Ke.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.Xe(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.Qe.forEach((i,o)=>o.setReadTime(e));const s=new ec(e,n,this.Ue,this.Qe,r);return this.Qe=kn(),this.$e=Lo(),this.Ke=Lo(),this.Ue=new Be(Te),s}Ge(e,n){if(!this.Je(e))return;const r=this.ut(e,n.key)?2:0;this.He(e).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e)),this.Ke=this.Ke.insert(n.key,this.ct(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const s=this.He(e);this.ut(e,n)?s.xe(n,1):s.Oe(n),this.Ke=this.Ke.insert(n,this.ct(n).delete(e)),this.Ke=this.Ke.insert(n,this.ct(n).add(e)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(e){this.qe.delete(e)}et(e){const n=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let n=this.qe.get(e);return n||(n=new vp,this.qe.set(e,n)),n}ct(e){let n=this.Ke.get(e);return n||(n=new Xe(Te),this.Ke=this.Ke.insert(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new Xe(Te),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new vp),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ut(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function Lo(){return new Be(ae.comparator)}function Ep(){return new Be(ae.comparator)}const vC={asc:"ASCENDING",desc:"DESCENDING"},EC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},TC={and:"AND",or:"OR"};class wC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ql(t,e){return t.useProto3Json||za(e)?e:{value:e}}function Ia(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yy(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function IC(t,e){return Ia(t,e.toTimestamp())}function cn(t){return Pe(!!t),pe.fromTimestamp(function(n){const r=pr(n);return new Je(r.seconds,r.nanos)}(t))}function Xu(t,e){return Wl(t,e).canonicalString()}function Wl(t,e){const n=function(s){return new Me(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function vy(t){const e=Me.fromString(t);return Pe(by(e)),e}function Kl(t,e){return Xu(t.databaseId,e.path)}function zc(t,e){const n=vy(e);if(n.get(1)!==t.databaseId.projectId)throw new oe(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new oe(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ae(Ty(n))}function Ey(t,e){return Xu(t.databaseId,e)}function bC(t){const e=vy(t);return e.length===4?Me.emptyPath():Ty(e)}function zl(t){return new Me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ty(t){return Pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Tp(t,e,n){return{name:Kl(t,e),fields:n.value.mapValue.fields}}function AC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:de()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,u){return h.useProto3Json?(Pe(u===void 0||typeof u=="string"),lt.fromBase64String(u||"")):(Pe(u===void 0||u instanceof Buffer||u instanceof Uint8Array),lt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const u=h.code===void 0?H.UNKNOWN:gy(h.code);return new oe(u,h.message||"")}(o);n=new _y(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=zc(t,r.document.name),i=cn(r.document.updateTime),o=r.document.createTime?cn(r.document.createTime):pe.min(),c=new Ut({mapValue:{fields:r.document.fields}}),l=yt.newFoundDocument(s,i,o,c),h=r.targetIds||[],u=r.removedTargetIds||[];n=new Qo(h,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=zc(t,r.document),i=r.readTime?cn(r.readTime):pe.min(),o=yt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Qo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=zc(t,r.document),i=r.removedTargetIds||[];n=new Qo([],i,s,null)}else{if(!("filter"in e))return de();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new pC(s,i),c=r.targetId;n=new my(c,o)}}return n}function RC(t,e){let n;if(e instanceof to)n={update:Tp(t,e.key,e.value)};else if(e instanceof py)n={delete:Kl(t,e.key)};else if(e instanceof Qr)n={update:Tp(t,e.key,e.data),updateMask:xC(e.fieldMask)};else{if(!(e instanceof hC))return de();n={verify:Kl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Ta)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof qi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Wi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof wa)return{fieldPath:o.field.canonicalString(),increment:c.Ie};throw de()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:IC(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:de()}(t,e.precondition)),n}function SC(t,e){return t&&t.length>0?(Pe(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?cn(s.updateTime):cn(i);return o.isEqual(pe.min())&&(o=cn(i)),new cC(o,s.transformResults||[])}(n,e))):[]}function CC(t,e){return{documents:[Ey(t,e.path)]}}function PC(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Ey(t,s);const i=function(h){if(h.length!==0)return Iy(fn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(u=>function(g){return{field:ls(g.field),direction:NC(g.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=ql(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ht:n,parent:s}}function kC(t){let e=bC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Pe(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(d){const g=wy(d);return g instanceof fn&&Y_(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(g=>function(I){return new Ea(us(I.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(d){let g;return g=typeof d=="object"?d.value:d,za(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(d){const g=!!d.before,m=d.values||[];return new va(m,g)}(n.startAt));let h=null;return n.endAt&&(h=function(d){const g=!d.before,m=d.values||[];return new va(m,g)}(n.endAt)),GS(e,s,o,i,c,"F",l,h)}function OC(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return de()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function wy(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=us(n.unaryFilter.field);return Qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=us(n.unaryFilter.field);return Qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=us(n.unaryFilter.field);return Qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=us(n.unaryFilter.field);return Qe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return de()}}(t):t.fieldFilter!==void 0?function(n){return Qe.create(us(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return de()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return fn.create(n.compositeFilter.filters.map(r=>wy(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return de()}}(n.compositeFilter.op))}(t):de()}function NC(t){return vC[t]}function DC(t){return EC[t]}function VC(t){return TC[t]}function ls(t){return{fieldPath:t.canonicalString()}}function us(t){return at.fromServerFormat(t.fieldPath)}function Iy(t){return t instanceof Qe?function(n){if(n.op==="=="){if(cp(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NAN"}};if(ap(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(cp(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NOT_NAN"}};if(ap(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ls(n.field),op:DC(n.op),value:n.value}}}(t):t instanceof fn?function(n){const r=n.getFilters().map(s=>Iy(s));return r.length===1?r[0]:{compositeFilter:{op:VC(n.op),filters:r}}}(t):de()}function xC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function by(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class rr{constructor(e,n,r,s,i=pe.min(),o=pe.min(),c=lt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new rr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class MC{constructor(e){this.Tt=e}}function LC(t){const e=kC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Hl(e,e.limit,"L"):e}/**
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
 */class FC{constructor(){this.Tn=new UC}addToCollectionParentIndex(e,n){return this.Tn.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(dr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(dr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class UC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Xe(Me.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Xe(Me.comparator)).toArray()}}/**
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
 */const wp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ay=41943040;class Ct{static withCacheSize(e){return new Ct(e,Ct.DEFAULT_COLLECTION_PERCENTILE,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Ct.DEFAULT_COLLECTION_PERCENTILE=10,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ct.DEFAULT=new Ct(Ay,Ct.DEFAULT_COLLECTION_PERCENTILE,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ct.DISABLED=new Ct(-1,0,0);/**
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
 */class Ms{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new Ms(0)}static Un(){return new Ms(-1)}}/**
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
 */const Ip="LruGarbageCollector",BC=1048576;function bp([t,e],[n,r]){const s=Te(t,n);return s===0?Te(e,r):s}class jC{constructor(e){this.Hn=e,this.buffer=new Xe(bp),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();bp(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class $C{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){Z(Ip,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ws(n)?Z(Ip,"Ignoring IndexedDB error during garbage collection: ",n):await qs(n)}await this.er(3e5)})}}class HC{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return j.resolve(Ka.ae);const r=new jC(n);return this.tr.forEachTarget(e,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(e,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.tr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(wp)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),wp):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let r,s,i,o,c,l,h;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),s=this.params.maximumSequenceNumbersToCollect):s=d,o=Date.now(),this.nthSequenceNumber(e,s))).next(d=>(r=d,c=Date.now(),this.removeTargets(e,r,n))).next(d=>(i=d,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(h=Date.now(),as()<=ye.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-u}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${d} documents in `+(h-l)+`ms
Total Duration: ${h-u}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:d})))}}function qC(t,e){return new HC(t,e)}/**
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
 */class WC{constructor(){this.changes=new Gr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,yt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class KC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class zC{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ci(r.mutation,s,Gt.empty(),Je.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ve()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ve()){const s=Dr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=di();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Dr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ve()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=kn();const o=Si(),c=function(){return Si()}();return n.forEach((l,h)=>{const u=r.get(h.key);s.has(h.key)&&(u===void 0||u.mutation instanceof Qr)?i=i.insert(h.key,h):u!==void 0?(o.set(h.key,u.mutation.getFieldMask()),Ci(u.mutation,h,u.mutation.getFieldMask(),Je.now())):o.set(h.key,Gt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,u)=>o.set(h,u)),n.forEach((h,u)=>{var d;return c.set(h,new KC(u,(d=o.get(h))!==null&&d!==void 0?d:null))}),c))}recalculateAndSaveOverlays(e,n){const r=Si();let s=new Be((o,c)=>o-c),i=ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let u=r.get(l)||Gt.empty();u=c.applyToLocalView(h,u),r.set(l,u);const d=(s.get(c.batchId)||ve()).add(l);s=s.insert(c.batchId,d)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,u=l.value,d=oy();u.forEach(g=>{if(!i.has(g)){const m=fy(n.get(g),r.get(g));m!==null&&d.set(g,m),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,d))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ae.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):QS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):j.resolve(Dr());let c=Bi,l=i;return o.next(h=>j.forEach(h,(u,d)=>(c<d.largestBatchId&&(c=d.largestBatchId),i.get(u)?j.resolve():this.remoteDocumentCache.getEntry(e,u).next(g=>{l=l.insert(u,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,ve())).next(u=>({batchId:c,changes:iy(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ae(n)).next(r=>{let s=di();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=di();return this.indexManager.getCollectionParents(e,i).next(c=>j.forEach(c,l=>{const h=function(d,g){return new Qa(g,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(u=>{u.forEach((d,g)=>{o=o.insert(d,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,h)=>{const u=h.getKey();o.get(u)===null&&(o=o.insert(u,yt.newInvalidDocument(u)))});let c=di();return o.forEach((l,h)=>{const u=i.get(l);u!==void 0&&Ci(u.mutation,h,Gt.empty(),Je.now()),Xa(n,h)&&(c=c.insert(l,h))}),c})}}/**
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
 */class GC{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return j.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:cn(s.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(s){return{name:s.name,query:LC(s.bundledQuery),readTime:cn(s.readTime)}}(n)),j.resolve()}}/**
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
 */class QC{constructor(){this.overlays=new Be(ae.comparator),this.Rr=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Dr();return j.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Et(e,n,i)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const s=Dr(),i=n.length+1,o=new ae(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return j.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Be((h,u)=>h-u);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let u=i.get(h.largestBatchId);u===null&&(u=Dr(),i=i.insert(h.largestBatchId,u)),u.set(h.getKey(),h)}}const c=Dr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,u)=>c.set(h,u)),!(c.size()>=s)););return j.resolve(c)}Et(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new dC(n,r));let i=this.Rr.get(n);i===void 0&&(i=ve(),this.Rr.set(n,i)),this.Rr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class JC{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
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
 */class Yu{constructor(){this.Vr=new Xe(Ze.mr),this.gr=new Xe(Ze.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.wr(new Ze(e,n))}br(e,n){e.forEach(r=>this.removeReference(r,n))}Sr(e){const n=new ae(new Me([])),r=new Ze(n,e),s=new Ze(n,e+1),i=[];return this.gr.forEachInRange([r,s],o=>{this.wr(o),i.push(o.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new ae(new Me([])),r=new Ze(n,e),s=new Ze(n,e+1);let i=ve();return this.gr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ze(e,0),r=this.Vr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return ae.comparator(e.key,n.key)||Te(e.Cr,n.Cr)}static pr(e,n){return Te(e.Cr,n.Cr)||ae.comparator(e.key,n.key)}}/**
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
 */class XC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new Xe(Ze.mr)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new fC(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Mr=this.Mr.add(new Ze(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Nr(r),i=s<0?0:s;return j.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?$u:this.Fr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),s=new Ze(n,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,s],o=>{const c=this.Or(o.Cr);i.push(c)}),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Xe(Te);return n.forEach(s=>{const i=new Ze(s,0),o=new Ze(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,o],c=>{r=r.add(c.Cr)})}),j.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ae.isDocumentKey(i)||(i=i.child(""));const o=new Ze(new ae(i),0);let c=new Xe(Te);return this.Mr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Cr)),!0)},o),j.resolve(this.Br(c))}Br(e){const n=[];return e.forEach(r=>{const s=this.Or(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Pe(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return j.forEach(n.mutations,s=>{const i=new Ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,n){const r=new Ze(n,0),s=this.Mr.firstAfterOrEqual(r);return j.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class YC{constructor(e){this.kr=e,this.docs=function(){return new Be(ae.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.kr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():yt.newInvalidDocument(n))}getEntries(e,n){let r=kn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():yt.newInvalidDocument(s))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=kn();const o=n.path,c=new ae(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:u}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||RS(AS(u),r)<=0||(s.has(u.key)||Xa(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,n,r,s){de()}qr(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new ZC(this)}getSize(e){return j.resolve(this.size)}}class ZC extends WC{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Ir.addEntry(e,s)):this.Ir.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
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
 */class eP{constructor(e){this.persistence=e,this.Qr=new Gr(n=>Wu(n),Ku),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.$r=0,this.Kr=new Yu,this.targetCount=0,this.Ur=Ms.Kn()}forEachTarget(e,n){return this.Qr.forEach((r,s)=>n(s)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$r&&(this.$r=n),j.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ur=new Ms(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.zn(n),j.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Kr.Sr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Qr.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Qr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),j.waitFor(i).next(()=>s)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.Qr.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.Kr.yr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.Kr.br(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),j.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Kr.Sr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Kr.vr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.Kr.containsKey(n))}}/**
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
 */class Ry{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new Ka(0),this.zr=!1,this.zr=!0,this.jr=new JC,this.referenceDelegate=e(this),this.Hr=new eP(this),this.indexManager=new FC,this.remoteDocumentCache=function(s){return new YC(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new MC(n),this.Yr=new GC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new QC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Wr[e.toKey()];return r||(r=new XC(n,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new tP(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(i=>this.referenceDelegate.Xr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}ei(e,n){return j.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,n)))}}class tP extends CS{constructor(e){super(),this.currentSequenceNumber=e}}class Zu{constructor(e){this.persistence=e,this.ti=new Yu,this.ni=null}static ri(e){return new Zu(e)}get ii(){if(this.ni)return this.ni;throw de()}addReference(e,n,r){return this.ti.addReference(r,n),this.ii.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.ti.removeReference(r,n),this.ii.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),j.resolve()}removeTarget(e,n){this.ti.Sr(n.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ii.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.ii,r=>{const s=ae.fromPath(r);return this.si(e,s).next(i=>{i||n.removeEntry(s,pe.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(r=>{r?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return j.or([()=>j.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class ba{constructor(e,n){this.persistence=e,this.oi=new Gr(r=>OS(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=qC(this,n)}static ri(e,n){return new ba(e,n)}Zr(){}Xr(e){return j.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}sr(e){let n=0;return this.rr(e,r=>{n++}).next(()=>n)}rr(e,n){return j.forEach(this.oi,(r,s)=>this.ar(e,r,s).next(i=>i?j.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(e,o=>this.ar(e,o,n).next(c=>{c||(r++,i.removeEntry(o,pe.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),j.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),j.resolve()}removeReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),j.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ko(e.data.value)),n}ar(e,n,r){return j.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.oi.get(n);return j.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class eh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Hi=r,this.Ji=s}static Yi(e,n){let r=ve(),s=ve();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new eh(e,n.fromCache,r,s)}}/**
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
 */class nP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class rP{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return JA()?8:PS(Et())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.rs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ss(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new nP;return this._s(e,n,o).next(c=>{if(i.result=c,this.Xi)return this.us(e,n,o,c.size)})}).next(()=>i.result)}us(e,n,r,s){return r.documentReadCount<this.es?(as()<=ye.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",cs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),j.resolve()):(as()<=ye.DEBUG&&Z("QueryEngine","Query:",cs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(as()<=ye.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",cs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,an(n))):j.resolve())}rs(e,n){if(fp(n))return j.resolve(null);let r=an(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Hl(n,null,"F"),r=an(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ve(...i);return this.ns.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.cs(n,c);return this.ls(n,h,o,l.readTime)?this.rs(e,Hl(n,null,"F")):this.hs(e,h,n,l)}))})))}ss(e,n,r,s){return fp(n)||s.isEqual(pe.min())?j.resolve(null):this.ns.getDocuments(e,r).next(i=>{const o=this.cs(n,i);return this.ls(n,o,r,s)?j.resolve(null):(as()<=ye.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),cs(n)),this.hs(e,o,n,bS(s,Bi)).next(c=>c))})}cs(e,n){let r=new Xe(ry(e));return n.forEach((s,i)=>{Xa(e,i)&&(r=r.add(i))}),r}ls(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(e,n,r){return as()<=ye.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",cs(n)),this.ns.getDocumentsMatchingQuery(e,n,dr.min(),r)}hs(e,n,r,s){return this.ns.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const th="LocalStore",sP=3e8;class iP{constructor(e,n,r,s){this.persistence=e,this.Ps=n,this.serializer=s,this.Ts=new Be(Te),this.Is=new Gr(i=>Wu(i),Ku),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zC(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function oP(t,e,n,r){return new iP(t,e,n,r)}async function Sy(t,e){const n=me(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.As(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=ve();for(const h of s){o.push(h.batchId);for(const u of h.mutations)l=l.add(u.key)}for(const h of i){c.push(h.batchId);for(const u of h.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(h=>({Rs:h,removedBatchIds:o,addedBatchIds:c}))})})}function aP(t,e){const n=me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ds.newChangeBuffer({trackRemovals:!0});return function(c,l,h,u){const d=h.batch,g=d.keys();let m=j.resolve();return g.forEach(I=>{m=m.next(()=>u.getEntry(l,I)).next(b=>{const O=h.docVersions.get(I);Pe(O!==null),b.version.compareTo(O)<0&&(d.applyToRemoteDocument(b,h),b.isValidDocument()&&(b.setReadTime(h.commitVersion),u.addEntry(b)))})}),m.next(()=>c.mutationQueue.removeMutationBatch(l,d))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=ve();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Cy(t){const e=me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function cP(t,e){const n=me(t),r=e.snapshotVersion;let s=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ds.newChangeBuffer({trackRemovals:!0});s=n.Ts;const c=[];e.targetChanges.forEach((u,d)=>{const g=s.get(d);if(!g)return;c.push(n.Hr.removeMatchingKeys(i,u.removedDocuments,d).next(()=>n.Hr.addMatchingKeys(i,u.addedDocuments,d)));let m=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?m=m.withResumeToken(lt.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,r)),s=s.insert(d,m),function(b,O,D){return b.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=sP?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(g,m,u)&&c.push(n.Hr.updateTargetData(i,m))});let l=kn(),h=ve();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),c.push(lP(i,o,e.documentUpdates).next(u=>{l=u.Vs,h=u.fs})),!r.isEqual(pe.min())){const u=n.Hr.getLastRemoteSnapshotVersion(i).next(d=>n.Hr.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(u)}return j.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.Ts=s,i))}function lP(t,e,n){let r=ve(),s=ve();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=kn();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(pe.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):Z(th,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Vs:o,fs:s}})}function uP(t,e){const n=me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=$u),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function hP(t,e){const n=me(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Hr.getTargetData(r,e).next(i=>i?(s=i,j.resolve(s)):n.Hr.allocateTargetId(r).next(o=>(s=new rr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(r.targetId,r),n.Is.set(e,r.targetId)),r})}async function Gl(t,e,n){const r=me(t),s=r.Ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ws(o))throw o;Z(th,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ts=r.Ts.remove(e),r.Is.delete(s.target)}function Ap(t,e,n){const r=me(t);let s=pe.min(),i=ve();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,u){const d=me(l),g=d.Is.get(u);return g!==void 0?j.resolve(d.Ts.get(g)):d.Hr.getTargetData(h,u)}(r,o,an(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.Ps.getDocumentsMatchingQuery(o,e,n?s:pe.min(),n?i:ve())).next(c=>(fP(r,XS(e),c),{documents:c,gs:i})))}function fP(t,e,n){let r=t.Es.get(e)||pe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Es.set(e,r)}class Rp{constructor(){this.activeTargetIds=rC()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class dP{constructor(){this.ho=new Rp,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,r){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Rp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class pP{To(e){}shutdown(){}}/**
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
 */const Sp="ConnectivityMonitor";class Cp{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){Z(Sp,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){Z(Sp,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Fo=null;function Ql(){return Fo===null?Fo=function(){return 268435456+Math.round(2147483648*Math.random())}():Fo++,"0x"+Fo.toString(16)}/**
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
 */const Gc="RestConnection",gP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class mP{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===_a?`project_id=${r}`:`project_id=${r}&database_id=${s}`}bo(e,n,r,s,i){const o=Ql(),c=this.So(e,n.toUriEncodedString());Z(Gc,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(l,s,i),this.vo(e,c,l,r).then(h=>(Z(Gc,`Received RPC '${e}' ${o}: `,h),h),h=>{throw Ns(Gc,`RPC '${e}' ${o} failed with error: `,h,"url: ",c,"request:",r),h})}Co(e,n,r,s,i,o){return this.bo(e,n,r,s,i)}Do(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Hs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}So(e,n){const r=gP[e];return`${this.po}/v1/${n}:${r}`}terminate(){}}/**
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
 */class _P{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
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
 */const pt="WebChannelConnection";class yP extends mP{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,s){const i=Ql();return new Promise((o,c)=>{const l=new D_;l.setWithCredentials(!0),l.listenOnce(V_.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Wo.NO_ERROR:const u=l.getResponseJson();Z(pt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Wo.TIMEOUT:Z(pt,`RPC '${e}' ${i} timed out`),c(new oe(H.DEADLINE_EXCEEDED,"Request time out"));break;case Wo.HTTP_ERROR:const d=l.getStatus();if(Z(pt,`RPC '${e}' ${i} failed with status:`,d,"response text:",l.getResponseText()),d>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const m=g==null?void 0:g.error;if(m&&m.status&&m.message){const I=function(O){const D=O.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(D)>=0?D:H.UNKNOWN}(m.status);c(new oe(I,m.message))}else c(new oe(H.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new oe(H.UNAVAILABLE,"Connection failed."));break;default:de()}}finally{Z(pt,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);Z(pt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",h,r,15)})}Wo(e,n,r){const s=Ql(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=L_(),c=M_(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=i.join("");Z(pt,`Creating RPC '${e}' stream ${s}: ${u}`,l);const d=o.createWebChannel(u,l);let g=!1,m=!1;const I=new _P({Fo:O=>{m?Z(pt,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(g||(Z(pt,`Opening RPC '${e}' stream ${s} transport.`),d.open(),g=!0),Z(pt,`RPC '${e}' stream ${s} sending:`,O),d.send(O))},Mo:()=>d.close()}),b=(O,D,N)=>{O.listen(D,w=>{try{N(w)}catch(k){setTimeout(()=>{throw k},0)}})};return b(d,fi.EventType.OPEN,()=>{m||(Z(pt,`RPC '${e}' stream ${s} transport opened.`),I.Qo())}),b(d,fi.EventType.CLOSE,()=>{m||(m=!0,Z(pt,`RPC '${e}' stream ${s} transport closed`),I.Ko())}),b(d,fi.EventType.ERROR,O=>{m||(m=!0,Ns(pt,`RPC '${e}' stream ${s} transport errored:`,O),I.Ko(new oe(H.UNAVAILABLE,"The operation could not be completed")))}),b(d,fi.EventType.MESSAGE,O=>{var D;if(!m){const N=O.data[0];Pe(!!N);const w=N,k=(w==null?void 0:w.error)||((D=w[0])===null||D===void 0?void 0:D.error);if(k){Z(pt,`RPC '${e}' stream ${s} received error:`,k);const V=k.status;let F=function(y){const E=Ke[y];if(E!==void 0)return gy(E)}(V),R=k.message;F===void 0&&(F=H.INTERNAL,R="Unknown error status: "+V+" with message "+k.message),m=!0,I.Ko(new oe(F,R)),d.close()}else Z(pt,`RPC '${e}' stream ${s} received:`,N),I.Uo(N)}}),b(c,x_.STAT_EVENT,O=>{O.stat===Fl.PROXY?Z(pt,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===Fl.NOPROXY&&Z(pt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{I.$o()},0),I}}function Qc(){return typeof document<"u"?document:null}/**
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
 */function tc(t){return new wC(t,!0)}/**
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
 */class Py{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ti=e,this.timerId=n,this.Go=r,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,n-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const Pp="PersistentStream";class ky{constructor(e,n,r,s,i,o,c,l){this.Ti=e,this.n_=r,this.r_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Py(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(Pn(n.toString()),Pn("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===n&&this.V_(r,s)},r=>{e(()=>{const s=new oe(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(e,n){const r=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return Z(Pp,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(Z(Pp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vP extends ky{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}f_(e,n){return this.connection.Wo("Listen",e,n)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const n=AC(this.serializer,e),r=function(i){if(!("targetChange"in i))return pe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?pe.min():o.readTime?cn(o.readTime):pe.min()}(e);return this.listener.p_(n,r)}y_(e){const n={};n.database=zl(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=$l(l)?{documents:CC(i,l)}:{query:PC(i,l).ht},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=yy(i,o.resumeToken);const h=ql(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(pe.min())>0){c.readTime=Ia(i,o.snapshotVersion.toTimestamp());const h=ql(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=OC(this.serializer,e);r&&(n.labels=r),this.I_(n)}w_(e){const n={};n.database=zl(this.serializer),n.removeTarget=e,this.I_(n)}}class EP extends ky{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return Pe(!!e.streamToken),this.lastStreamToken=e.streamToken,Pe(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Pe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=SC(e.writeResults,e.commitTime),r=cn(e.commitTime);return this.listener.v_(r,n)}C_(){const e={};e.database=zl(this.serializer),this.I_(e)}S_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>RC(this.serializer,r))};this.I_(n)}}/**
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
 */class TP{}class wP extends TP{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new oe(H.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.bo(e,Wl(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new oe(H.UNKNOWN,i.toString())})}Co(e,n,r,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Co(e,Wl(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new oe(H.UNKNOWN,o.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class IP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Pn(n),this.N_=!1):Z("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const Hr="RemoteStore";class bP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(o=>{r.enqueueAndForget(async()=>{Jr(this)&&(Z(Hr,"Restarting streams for network reachability change."),await async function(l){const h=me(l);h.W_.add(4),await ro(h),h.j_.set("Unknown"),h.W_.delete(4),await nc(h)}(this))})}),this.j_=new IP(r,s)}}async function nc(t){if(Jr(t))for(const e of t.G_)await e(!0)}async function ro(t){for(const e of t.G_)await e(!1)}function Oy(t,e){const n=me(t);n.U_.has(e.targetId)||(n.U_.set(e.targetId,e),ih(n)?sh(n):Ks(n).c_()&&rh(n,e))}function nh(t,e){const n=me(t),r=Ks(n);n.U_.delete(e),r.c_()&&Ny(n,e),n.U_.size===0&&(r.c_()?r.P_():Jr(n)&&n.j_.set("Unknown"))}function rh(t,e){if(t.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(pe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ks(t).y_(e)}function Ny(t,e){t.H_.Ne(e),Ks(t).w_(e)}function sh(t){t.H_=new yC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.U_.get(e)||null,it:()=>t.datastore.serializer.databaseId}),Ks(t).start(),t.j_.B_()}function ih(t){return Jr(t)&&!Ks(t).u_()&&t.U_.size>0}function Jr(t){return me(t).W_.size===0}function Dy(t){t.H_=void 0}async function AP(t){t.j_.set("Online")}async function RP(t){t.U_.forEach((e,n)=>{rh(t,e)})}async function SP(t,e){Dy(t),ih(t)?(t.j_.q_(e),sh(t)):t.j_.set("Unknown")}async function CP(t,e,n){if(t.j_.set("Online"),e instanceof _y&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.U_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.U_.delete(c),s.H_.removeTarget(c))}(t,e)}catch(r){Z(Hr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Aa(t,r)}else if(e instanceof Qo?t.H_.We(e):e instanceof my?t.H_.Ze(e):t.H_.je(e),!n.isEqual(pe.min()))try{const r=await Cy(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.H_.ot(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const u=i.U_.get(h);u&&i.U_.set(h,u.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const u=i.U_.get(l);if(!u)return;i.U_.set(l,u.withResumeToken(lt.EMPTY_BYTE_STRING,u.snapshotVersion)),Ny(i,l);const d=new rr(u.target,l,h,u.sequenceNumber);rh(i,d)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){Z(Hr,"Failed to raise snapshot:",r),await Aa(t,r)}}async function Aa(t,e,n){if(!Ws(e))throw e;t.W_.add(1),await ro(t),t.j_.set("Offline"),n||(n=()=>Cy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z(Hr,"Retrying IndexedDB access"),await n(),t.W_.delete(1),await nc(t)})}function Vy(t,e){return e().catch(n=>Aa(t,n,e))}async function rc(t){const e=me(t),n=_r(e);let r=e.K_.length>0?e.K_[e.K_.length-1].batchId:$u;for(;PP(e);)try{const s=await uP(e.localStore,r);if(s===null){e.K_.length===0&&n.P_();break}r=s.batchId,kP(e,s)}catch(s){await Aa(e,s)}xy(e)&&My(e)}function PP(t){return Jr(t)&&t.K_.length<10}function kP(t,e){t.K_.push(e);const n=_r(t);n.c_()&&n.b_&&n.S_(e.mutations)}function xy(t){return Jr(t)&&!_r(t).u_()&&t.K_.length>0}function My(t){_r(t).start()}async function OP(t){_r(t).C_()}async function NP(t){const e=_r(t);for(const n of t.K_)e.S_(n.mutations)}async function DP(t,e,n){const r=t.K_.shift(),s=Qu.from(r,e,n);await Vy(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await rc(t)}async function VP(t,e){e&&_r(t).b_&&await async function(r,s){if(function(o){return gC(o)&&o!==H.ABORTED}(s.code)){const i=r.K_.shift();_r(r).h_(),await Vy(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await rc(r)}}(t,e),xy(t)&&My(t)}async function kp(t,e){const n=me(t);n.asyncQueue.verifyOperationInProgress(),Z(Hr,"RemoteStore received new credentials");const r=Jr(n);n.W_.add(3),await ro(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await nc(n)}async function xP(t,e){const n=me(t);e?(n.W_.delete(2),await nc(n)):e||(n.W_.add(2),await ro(n),n.j_.set("Unknown"))}function Ks(t){return t.J_||(t.J_=function(n,r,s){const i=me(n);return i.M_(),new vP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:AP.bind(null,t),No:RP.bind(null,t),Lo:SP.bind(null,t),p_:CP.bind(null,t)}),t.G_.push(async e=>{e?(t.J_.h_(),ih(t)?sh(t):t.j_.set("Unknown")):(await t.J_.stop(),Dy(t))})),t.J_}function _r(t){return t.Y_||(t.Y_=function(n,r,s){const i=me(n);return i.M_(),new EP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:()=>Promise.resolve(),No:OP.bind(null,t),Lo:VP.bind(null,t),D_:NP.bind(null,t),v_:DP.bind(null,t)}),t.G_.push(async e=>{e?(t.Y_.h_(),await rc(t)):(await t.Y_.stop(),t.K_.length>0&&(Z(Hr,`Stopping write stream with ${t.K_.length} pending writes`),t.K_=[]))})),t.Y_}/**
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
 */class oh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ur,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new oh(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ah(t,e){if(Pn("AsyncQueue",`${e}: ${t}`),Ws(t))return new oe(H.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ws{static emptySet(e){return new ws(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ae.comparator(n.key,r.key):(n,r)=>ae.comparator(n.key,r.key),this.keyedMap=di(),this.sortedSet=new Be(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ws)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ws;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Op{constructor(){this.Z_=new Be(ae.comparator)}track(e){const n=e.doc.key,r=this.Z_.get(n);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(n,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(n):e.type===1&&r.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):de():this.Z_=this.Z_.insert(n,e)}X_(){const e=[];return this.Z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ls{constructor(e,n,r,s,i,o,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new Ls(e,n,ws.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ja(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class MP{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class LP{constructor(){this.queries=Np(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,r){const s=me(n),i=s.queries;s.queries=Np(),i.forEach((o,c)=>{for(const l of c.ta)l.onError(r)})})(this,new oe(H.ABORTED,"Firestore shutting down"))}}function Np(){return new Gr(t=>ny(t),Ja)}async function FP(t,e){const n=me(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.na()&&e.ra()&&(r=2):(i=new MP,r=e.ra()?0:1);try{switch(r){case 0:i.ea=await n.onListen(s,!0);break;case 1:i.ea=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=ah(o,`Initialization of query '${cs(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.ta.push(e),e.sa(n.onlineState),i.ea&&e.oa(i.ea)&&ch(n)}async function UP(t,e){const n=me(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ta.indexOf(e);o>=0&&(i.ta.splice(o,1),i.ta.length===0?s=e.ra()?0:1:!i.na()&&e.ra()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function BP(t,e){const n=me(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.ta)c.oa(s)&&(r=!0);o.ea=s}}r&&ch(n)}function jP(t,e,n){const r=me(t),s=r.queries.get(e);if(s)for(const i of s.ta)i.onError(n);r.queries.delete(e)}function ch(t){t.ia.forEach(e=>{e.next()})}var Jl,Dp;(Dp=Jl||(Jl={}))._a="default",Dp.Cache="cache";class $P{constructor(e,n,r){this.query=e,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ls(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ua?this.la(e)&&(this.aa.next(e),n=!0):this.ha(e,this.onlineState)&&(this.Pa(e),n=!0),this.ca=e,n}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),n=!0),n}ha(e,n){if(!e.fromCache||!this.ra())return!0;const r=n!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}la(e){if(e.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(e){e=Ls.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Jl.Cache}}/**
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
 */class Ly{constructor(e){this.key=e}}class Fy{constructor(e){this.key=e}}class HP{constructor(e,n){this.query=e,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=ve(),this.mutatedKeys=ve(),this.ya=ry(e),this.wa=new ws(this.ya)}get ba(){return this.fa}Sa(e,n){const r=n?n.Da:new Op,s=n?n.wa:this.wa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,d)=>{const g=s.get(u),m=Xa(this.query,d)?d:null,I=!!g&&this.mutatedKeys.has(g.key),b=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let O=!1;g&&m?g.data.isEqual(m.data)?I!==b&&(r.track({type:3,doc:m}),O=!0):this.va(g,m)||(r.track({type:2,doc:m}),O=!0,(l&&this.ya(m,l)>0||h&&this.ya(m,h)<0)&&(c=!0)):!g&&m?(r.track({type:0,doc:m}),O=!0):g&&!m&&(r.track({type:1,doc:g}),O=!0,(l||h)&&(c=!0)),O&&(m?(o=o.add(m),i=b?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{wa:o,Da:r,ls:c,mutatedKeys:i}}va(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const o=e.Da.X_();o.sort((u,d)=>function(m,I){const b=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return de()}};return b(m)-b(I)}(u.type,d.type)||this.ya(u.doc,d.doc)),this.Ca(r),s=s!=null&&s;const c=n&&!s?this.Fa():[],l=this.pa.size===0&&this.current&&!s?1:0,h=l!==this.ga;return this.ga=l,o.length!==0||h?{snapshot:new Ls(this.query,e.wa,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:c}:{Ma:c}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Op,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=ve(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const n=[];return e.forEach(r=>{this.pa.has(r)||n.push(new Fy(r))}),this.pa.forEach(r=>{e.has(r)||n.push(new Ly(r))}),n}Oa(e){this.fa=e.gs,this.pa=ve();const n=this.Sa(e.documents);return this.applyChanges(n,!0)}Na(){return Ls.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const lh="SyncEngine";class qP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class WP{constructor(e){this.key=e,this.Ba=!1}}class KP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.La={},this.ka=new Gr(c=>ny(c),Ja),this.qa=new Map,this.Qa=new Set,this.$a=new Be(ae.comparator),this.Ka=new Map,this.Ua=new Yu,this.Wa={},this.Ga=new Map,this.za=Ms.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function zP(t,e,n=!0){const r=qy(t);let s;const i=r.ka.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Na()):s=await Uy(r,e,n,!0),s}async function GP(t,e){const n=qy(t);await Uy(n,e,!0,!1)}async function Uy(t,e,n,r){const s=await hP(t.localStore,an(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await QP(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Oy(t.remoteStore,s),c}async function QP(t,e,n,r,s){t.Ha=(d,g,m)=>async function(b,O,D,N){let w=O.view.Sa(D);w.ls&&(w=await Ap(b.localStore,O.query,!1).then(({documents:R})=>O.view.Sa(R,w)));const k=N&&N.targetChanges.get(O.targetId),V=N&&N.targetMismatches.get(O.targetId)!=null,F=O.view.applyChanges(w,b.isPrimaryClient,k,V);return xp(b,O.targetId,F.Ma),F.snapshot}(t,d,g,m);const i=await Ap(t.localStore,e,!0),o=new HP(e,i.gs),c=o.Sa(i.documents),l=no.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(c,t.isPrimaryClient,l);xp(t,n,h.Ma);const u=new qP(e,n,o);return t.ka.set(e,u),t.qa.has(n)?t.qa.get(n).push(e):t.qa.set(n,[e]),h.snapshot}async function JP(t,e,n){const r=me(t),s=r.ka.get(e),i=r.qa.get(s.targetId);if(i.length>1)return r.qa.set(s.targetId,i.filter(o=>!Ja(o,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Gl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&nh(r.remoteStore,s.targetId),Xl(r,s.targetId)}).catch(qs)):(Xl(r,s.targetId),await Gl(r.localStore,s.targetId,!0))}async function XP(t,e){const n=me(t),r=n.ka.get(e),s=n.qa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),nh(n.remoteStore,r.targetId))}async function YP(t,e,n){const r=ik(t);try{const s=await function(o,c){const l=me(o),h=Je.now(),u=c.reduce((m,I)=>m.add(I.key),ve());let d,g;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let I=kn(),b=ve();return l.ds.getEntries(m,u).next(O=>{I=O,I.forEach((D,N)=>{N.isValidDocument()||(b=b.add(D))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,I)).next(O=>{d=O;const D=[];for(const N of c){const w=uC(N,d.get(N.key).overlayedDocument);w!=null&&D.push(new Qr(N.key,w,Q_(w.value.mapValue),Rn.exists(!0)))}return l.mutationQueue.addMutationBatch(m,h,D,c)}).next(O=>{g=O;const D=O.applyToLocalDocumentSet(d,b);return l.documentOverlayCache.saveOverlays(m,O.batchId,D)})}).then(()=>({batchId:g.batchId,changes:iy(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let h=o.Wa[o.currentUser.toKey()];h||(h=new Be(Te)),h=h.insert(c,l),o.Wa[o.currentUser.toKey()]=h}(r,s.batchId,n),await so(r,s.changes),await rc(r.remoteStore)}catch(s){const i=ah(s,"Failed to persist write");n.reject(i)}}async function By(t,e){const n=me(t);try{const r=await cP(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ka.get(i);o&&(Pe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ba=!0:s.modifiedDocuments.size>0?Pe(o.Ba):s.removedDocuments.size>0&&(Pe(o.Ba),o.Ba=!1))}),await so(n,r,e)}catch(r){await qs(r)}}function Vp(t,e,n){const r=me(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ka.forEach((i,o)=>{const c=o.view.sa(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=me(o);l.onlineState=c;let h=!1;l.queries.forEach((u,d)=>{for(const g of d.ta)g.sa(c)&&(h=!0)}),h&&ch(l)}(r.eventManager,e),s.length&&r.La.p_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ZP(t,e,n){const r=me(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ka.get(e),i=s&&s.key;if(i){let o=new Be(ae.comparator);o=o.insert(i,yt.newNoDocument(i,pe.min()));const c=ve().add(i),l=new ec(pe.min(),new Map,new Be(Te),o,c);await By(r,l),r.$a=r.$a.remove(i),r.Ka.delete(e),uh(r)}else await Gl(r.localStore,e,!1).then(()=>Xl(r,e,n)).catch(qs)}async function ek(t,e){const n=me(t),r=e.batch.batchId;try{const s=await aP(n.localStore,e);$y(n,r,null),jy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await so(n,s)}catch(s){await qs(s)}}async function tk(t,e,n){const r=me(t);try{const s=await function(o,c){const l=me(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let u;return l.mutationQueue.lookupMutationBatch(h,c).next(d=>(Pe(d!==null),u=d.keys(),l.mutationQueue.removeMutationBatch(h,d))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,u,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,u)).next(()=>l.localDocuments.getDocuments(h,u))})}(r.localStore,e);$y(r,e,n),jy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await so(r,s)}catch(s){await qs(s)}}function jy(t,e){(t.Ga.get(e)||[]).forEach(n=>{n.resolve()}),t.Ga.delete(e)}function $y(t,e,n){const r=me(t);let s=r.Wa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Wa[r.currentUser.toKey()]=s}}function Xl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.qa.get(e))t.ka.delete(r),n&&t.La.Ja(r,n);t.qa.delete(e),t.isPrimaryClient&&t.Ua.Sr(e).forEach(r=>{t.Ua.containsKey(r)||Hy(t,r)})}function Hy(t,e){t.Qa.delete(e.path.canonicalString());const n=t.$a.get(e);n!==null&&(nh(t.remoteStore,n),t.$a=t.$a.remove(e),t.Ka.delete(n),uh(t))}function xp(t,e,n){for(const r of n)r instanceof Ly?(t.Ua.addReference(r.key,e),nk(t,r)):r instanceof Fy?(Z(lh,"Document no longer in limbo: "+r.key),t.Ua.removeReference(r.key,e),t.Ua.containsKey(r.key)||Hy(t,r.key)):de()}function nk(t,e){const n=e.key,r=n.path.canonicalString();t.$a.get(n)||t.Qa.has(r)||(Z(lh,"New document in limbo: "+n),t.Qa.add(r),uh(t))}function uh(t){for(;t.Qa.size>0&&t.$a.size<t.maxConcurrentLimboResolutions;){const e=t.Qa.values().next().value;t.Qa.delete(e);const n=new ae(Me.fromString(e)),r=t.za.next();t.Ka.set(r,new WP(n)),t.$a=t.$a.insert(n,r),Oy(t.remoteStore,new rr(an(zu(n.path)),r,"TargetPurposeLimboResolution",Ka.ae))}}async function so(t,e,n){const r=me(t),s=[],i=[],o=[];r.ka.isEmpty()||(r.ka.forEach((c,l)=>{o.push(r.Ha(l,e,n).then(h=>{var u;if((h||n)&&r.isPrimaryClient){const d=h?!h.fromCache:(u=n==null?void 0:n.targetChanges.get(l.targetId))===null||u===void 0?void 0:u.current;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(h){s.push(h);const d=eh.Yi(l.targetId,h);i.push(d)}}))}),await Promise.all(o),r.La.p_(s),await async function(l,h){const u=me(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>j.forEach(h,g=>j.forEach(g.Hi,m=>u.persistence.referenceDelegate.addReference(d,g.targetId,m)).next(()=>j.forEach(g.Ji,m=>u.persistence.referenceDelegate.removeReference(d,g.targetId,m)))))}catch(d){if(!Ws(d))throw d;Z(th,"Failed to update sequence numbers: "+d)}for(const d of h){const g=d.targetId;if(!d.fromCache){const m=u.Ts.get(g),I=m.snapshotVersion,b=m.withLastLimboFreeSnapshotVersion(I);u.Ts=u.Ts.insert(g,b)}}}(r.localStore,i))}async function rk(t,e){const n=me(t);if(!n.currentUser.isEqual(e)){Z(lh,"User change. New user:",e.toKey());const r=await Sy(n.localStore,e);n.currentUser=e,function(i,o){i.Ga.forEach(c=>{c.forEach(l=>{l.reject(new oe(H.CANCELLED,o))})}),i.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await so(n,r.Rs)}}function sk(t,e){const n=me(t),r=n.Ka.get(e);if(r&&r.Ba)return ve().add(r.key);{let s=ve();const i=n.qa.get(e);if(!i)return s;for(const o of i){const c=n.ka.get(o);s=s.unionWith(c.view.ba)}return s}}function qy(t){const e=me(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=By.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=sk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ZP.bind(null,e),e.La.p_=BP.bind(null,e.eventManager),e.La.Ja=jP.bind(null,e.eventManager),e}function ik(t){const e=me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ek.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tk.bind(null,e),e}class Ra{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=tc(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return oP(this.persistence,new rP,e.initialUser,this.serializer)}Xa(e){return new Ry(Zu.ri,this.serializer)}Za(e){return new dP}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ra.provider={build:()=>new Ra};class ok extends Ra{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){Pe(this.persistence.referenceDelegate instanceof ba);const r=this.persistence.referenceDelegate.garbageCollector;return new $C(r,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?Ct.withCacheSize(this.cacheSizeBytes):Ct.DEFAULT;return new Ry(r=>ba.ri(r,n),this.serializer)}}class Yl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Vp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=rk.bind(null,this.syncEngine),await xP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new LP}()}createDatastore(e){const n=tc(e.databaseInfo.databaseId),r=function(i){return new yP(i)}(e.databaseInfo);return function(i,o,c,l){return new wP(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new bP(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Vp(this.syncEngine,n,0),function(){return Cp.D()?new Cp:new pP}())}createSyncEngine(e,n){return function(s,i,o,c,l,h,u){const d=new KP(s,i,o,c,l,h);return u&&(d.ja=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=me(s);Z(Hr,"RemoteStore shutting down."),i.W_.add(5),await ro(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Yl.provider={build:()=>new Yl};/**
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
 */class ak{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Pn("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const yr="FirestoreClient";class ck{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=gt.UNAUTHENTICATED,this.clientId=U_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{Z(yr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Z(yr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ur;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ah(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Jc(t,e){t.asyncQueue.verifyOperationInProgress(),Z(yr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Sy(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Mp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await lk(t);Z(yr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>kp(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>kp(e.remoteStore,s)),t._onlineComponents=e}async function lk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z(yr,"Using user provided OfflineComponentProvider");try{await Jc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===H.FAILED_PRECONDITION||s.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ns("Error using user provided cache. Falling back to memory cache: "+n),await Jc(t,new Ra)}}else Z(yr,"Using default OfflineComponentProvider"),await Jc(t,new ok(void 0));return t._offlineComponents}async function Wy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z(yr,"Using user provided OnlineComponentProvider"),await Mp(t,t._uninitializedComponentsProvider._online)):(Z(yr,"Using default OnlineComponentProvider"),await Mp(t,new Yl))),t._onlineComponents}function uk(t){return Wy(t).then(e=>e.syncEngine)}async function hk(t){const e=await Wy(t),n=e.eventManager;return n.onListen=zP.bind(null,e.syncEngine),n.onUnlisten=JP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=GP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=XP.bind(null,e.syncEngine),n}function fk(t,e,n={}){const r=new ur;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const u=new ak({next:g=>{u.su(),o.enqueueAndForget(()=>UP(i,d));const m=g.docs.has(c);!m&&g.fromCache?h.reject(new oe(H.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&g.fromCache&&l&&l.source==="server"?h.reject(new oe(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),d=new $P(zu(c.path),u,{includeMetadataChanges:!0,Ta:!0});return FP(i,d)}(await hk(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Ky(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Lp=new Map;/**
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
 */function zy(t,e,n){if(!n)throw new oe(H.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function dk(t,e,n,r){if(e===!0&&r===!0)throw new oe(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Fp(t){if(!ae.isDocumentKey(t))throw new oe(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Up(t){if(ae.isDocumentKey(t))throw new oe(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function hh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":de()}function Sa(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new oe(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=hh(t);throw new oe(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const Gy="firestore.googleapis.com",Bp=!0;class jp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new oe(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Gy,this.ssl=Bp}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Bp;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Ay;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<BC)throw new oe(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}dk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ky((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new oe(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new oe(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new oe(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class sc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new oe(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new oe(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new mS;switch(r.type){case"firstParty":return new ES(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new oe(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Lp.get(n);r&&(Z("ComponentProvider","Removing Datastore"),Lp.delete(n),r.terminate())}(this),Promise.resolve()}}function pk(t,e,n,r={}){var s;const i=(t=Sa(t,sc))._getSettings(),o=Object.assign(Object.assign({},i),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i.host!==Gy&&i.host!==c&&Ns("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l=Object.assign(Object.assign({},i),{host:c,ssl:!1,emulatorOptions:r});if(!Br(l,o)&&(t._setSettings(l),r.mockUserToken)){let h,u;if(typeof r.mockUserToken=="string")h=r.mockUserToken,u=gt.MOCK_USER;else{h=HA(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new oe(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new gt(d)}t._authCredentials=new _S(new F_(h,u))}}/**
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
 */class fh{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new fh(this.firestore,e,this._query)}}class Bt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Bt(this.firestore,e,this._key)}}class hr extends fh{constructor(e,n,r){super(e,n,zu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Bt(this.firestore,null,new ae(e))}withConverter(e){return new hr(this.firestore,e,this._path)}}function aD(t,e,...n){if(t=Zt(t),zy("collection","path",e),t instanceof sc){const r=Me.fromString(e,...n);return Up(r),new hr(t,null,r)}{if(!(t instanceof Bt||t instanceof hr))throw new oe(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Me.fromString(e,...n));return Up(r),new hr(t.firestore,null,r)}}function gk(t,e,...n){if(t=Zt(t),arguments.length===1&&(e=U_.newId()),zy("doc","path",e),t instanceof sc){const r=Me.fromString(e,...n);return Fp(r),new Bt(t,null,new ae(r))}{if(!(t instanceof Bt||t instanceof hr))throw new oe(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Me.fromString(e,...n));return Fp(r),new Bt(t.firestore,t instanceof hr?t.converter:null,new ae(r))}}/**
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
 */const $p="AsyncQueue";class Hp{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Py(this,"async_queue_retry"),this.bu=()=>{const r=Qc();r&&Z($p,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.Su=e;const n=Qc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=Qc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new ur;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Ws(e))throw e;Z($p,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.Su.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw Pn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.Su=n,n}enqueueAfterDelay(e,n,r){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const s=oh.createAndSchedule(this,e,n,r,i=>this.Fu(i));return this.fu.push(s),s}Du(){this.gu&&de()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}class dh extends sc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Hp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Hp(e),this._firestoreClient=void 0,await e}}}function mk(t,e){const n=typeof t=="object"?t:P_(),r=typeof t=="string"?t:_a,s=Bu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=jA("firestore");i&&pk(s,...i)}return s}function Qy(t){if(t._terminated)throw new oe(H.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||_k(t),t._firestoreClient}function _k(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,h,u){return new VS(c,l,h,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Ky(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new ck(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
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
 */class Fs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Fs(lt.fromBase64String(e))}catch(n){throw new oe(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Fs(lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ph{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new oe(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Jy{constructor(e){this._methodName=e}}/**
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
 */class gh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new oe(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new oe(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class mh{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const yk=/^__.*__$/;class vk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Qr(e,this.data,this.fieldMask,n,this.fieldTransforms):new to(e,this.data,n,this.fieldTransforms)}}function Xy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de()}}class _h{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new _h(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.$u(e),s}Ku(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Ca(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(Xy(this.Lu)&&yk.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class Ek{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||tc(e)}ju(e,n,r,s=!1){return new _h({Lu:e,methodName:n,zu:r,path:at.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Tk(t){const e=t._freezeSettings(),n=tc(t._databaseId);return new Ek(t._databaseId,!!e.ignoreUndefinedProperties,n)}function wk(t,e,n,r,s,i={}){const o=t.ju(i.merge||i.mergeFields?2:0,e,n,s);tv("Data must be an object, but it was:",o,r);const c=Zy(r,o);let l,h;if(i.merge)l=new Gt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const d of i.mergeFields){const g=Ik(e,d,n);if(!o.contains(g))throw new oe(H.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Ak(u,g)||u.push(g)}l=new Gt(u),h=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,h=o.fieldTransforms;return new vk(new Ut(c),l,h)}function Yy(t,e){if(ev(t=Zt(t)))return tv("Unsupported field value:",e,t),Zy(t,e);if(t instanceof Jy)return function(r,s){if(!Xy(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=Yy(c,s.Uu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Zt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return sC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Je.fromDate(r);return{timestampValue:Ia(s.serializer,i)}}if(r instanceof Je){const i=new Je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ia(s.serializer,i)}}if(r instanceof gh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Fs)return{bytesValue:yy(s.serializer,r._byteString)};if(r instanceof Bt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Wu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Xu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof mh)return function(o,c){return{mapValue:{fields:{[z_]:{stringValue:G_},[ya]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw c.Wu("VectorValues must only contain numeric values.");return Gu(c.serializer,h)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${hh(r)}`)}(t,e)}function Zy(t,e){const n={};return j_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):zr(t,(r,s)=>{const i=Yy(s,e.qu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function ev(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Je||t instanceof gh||t instanceof Fs||t instanceof Bt||t instanceof Jy||t instanceof mh)}function tv(t,e,n){if(!ev(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=hh(n);throw r==="an object"?e.Wu(t+" a custom object"):e.Wu(t+" "+r)}}function Ik(t,e,n){if((e=Zt(e))instanceof ph)return e._internalPath;if(typeof e=="string")return nv(t,e);throw Ca("Field path arguments must be of type string or ",t,!1,void 0,n)}const bk=new RegExp("[~\\*/\\[\\]]");function nv(t,e,n){if(e.search(bk)>=0)throw Ca(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ph(...e.split("."))._internalPath}catch{throw Ca(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ca(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new oe(H.INVALID_ARGUMENT,c+t+l)}function Ak(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class rv{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Rk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(sv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Rk extends rv{data(){return super.data()}}function sv(t,e){return typeof e=="string"?nv(t,e):e instanceof ph?e._internalPath:e._delegate._internalPath}class Sk{convertValue(e,n="none"){switch(mr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(gr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw de()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return zr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[ya].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>qe(o.doubleValue));return new mh(i)}convertGeoPoint(e){return new gh(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ga(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ji(e));default:return null}}convertTimestamp(e){const n=pr(e);return new Je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Me.fromString(e);Pe(by(r));const s=new $i(r.get(1),r.get(3)),i=new ae(r.popFirst(5));return s.isEqual(n)||Pn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Ck(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class Pk{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class iv extends rv{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new kk(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(sv("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class kk extends iv{data(e={}){return super.data(e)}}/**
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
 */function cD(t){t=Sa(t,Bt);const e=Sa(t.firestore,dh);return fk(Qy(e),t._key).then(n=>Dk(e,t,n))}class Ok extends Sk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Bt(this.firestore,null,n)}}function lD(t,e){const n=Sa(t.firestore,dh),r=gk(t),s=Ck(t.converter,e);return Nk(n,[wk(Tk(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Rn.exists(!1))]).then(()=>r)}function Nk(t,e){return function(r,s){const i=new ur;return r.asyncQueue.enqueueAndForget(async()=>YP(await uk(r),s,i)),i.promise}(Qy(t),e)}function Dk(t,e,n){const r=n.docs.get(e._key),s=new Ok(t);return new iv(t,s,e._key,r,new Pk(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Hs=s})($s),Os(new jr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new dh(new yS(r.getProvider("auth-internal")),new TS(o,r.getProvider("app-check-internal")),function(h,u){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new oe(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $i(h.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),cr(Jd,Xd,e),cr(Jd,Xd,"esm2017")})();function yh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function ov(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Vk=ov,av=new Zi("auth","Firebase",ov());/**
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
 */const Pa=new Fu("@firebase/auth");function xk(t,...e){Pa.logLevel<=ye.WARN&&Pa.warn(`Auth (${$s}): ${t}`,...e)}function Jo(t,...e){Pa.logLevel<=ye.ERROR&&Pa.error(`Auth (${$s}): ${t}`,...e)}/**
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
 */function On(t,...e){throw vh(t,...e)}function ln(t,...e){return vh(t,...e)}function cv(t,e,n){const r=Object.assign(Object.assign({},Vk()),{[e]:n});return new Zi("auth","Firebase",r).create(e,{appName:t.name})}function Fr(t){return cv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function vh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return av.create(t,...e)}function he(t,e,...n){if(!t)throw vh(e,...n)}function wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Jo(e),new Error(e)}function Nn(t,e){t||wn(e)}/**
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
 */function Zl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Mk(){return qp()==="http:"||qp()==="https:"}function qp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Lk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Mk()||zA()||"connection"in navigator)?navigator.onLine:!0}function Fk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class io{constructor(e,n){this.shortDelay=e,this.longDelay=n,Nn(n>e,"Short delay should be less than long delay!"),this.isMobile=qA()||GA()}get(){return Lk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Eh(t,e){Nn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class lv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Uk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Bk=new io(3e4,6e4);function Th(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function zs(t,e,n,r,s={}){return uv(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=eo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:l},i);return KA()||(h.referrerPolicy="no-referrer"),lv.fetch()(hv(t,t.config.apiHost,n,c),h)})}async function uv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Uk),e);try{const s=new $k(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Uo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Uo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Uo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Uo(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw cv(t,u,h);On(t,u)}}catch(s){if(s instanceof xn)throw s;On(t,"network-request-failed",{message:String(s)})}}async function jk(t,e,n,r,s={}){const i=await zs(t,e,n,r,s);return"mfaPendingCredential"in i&&On(t,"multi-factor-auth-required",{_serverResponse:i}),i}function hv(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Eh(t.config,s):`${t.config.apiScheme}://${s}`}class $k{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ln(this.auth,"network-request-failed")),Bk.get())})}}function Uo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ln(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function Hk(t,e){return zs(t,"POST","/v1/accounts:delete",e)}async function fv(t,e){return zs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Pi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qk(t,e=!1){const n=Zt(t),r=await n.getIdToken(e),s=wh(r);he(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Pi(Xc(s.auth_time)),issuedAtTime:Pi(Xc(s.iat)),expirationTime:Pi(Xc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Xc(t){return Number(t)*1e3}function wh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Jo("JWT malformed, contained fewer than 3 sections"),null;try{const s=w_(n);return s?JSON.parse(s):(Jo("Failed to decode base64 JWT payload"),null)}catch(s){return Jo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Wp(t){const e=wh(t);return he(e,"internal-error"),he(typeof e.exp<"u","internal-error"),he(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ki(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof xn&&Wk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Wk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Kk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class eu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pi(this.lastLoginAt),this.creationTime=Pi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ka(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ki(t,fv(n,{idToken:r}));he(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?dv(i.providerUserInfo):[],c=Gk(t.providerData,o),l=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),u=l?h:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new eu(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function zk(t){const e=Zt(t);await ka(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Gk(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function dv(t){return t.map(e=>{var{providerId:n}=e,r=yh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Qk(t,e){const n=await uv(t,{},async()=>{const r=eo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=hv(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",lv.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Jk(t,e){return zs(t,"POST","/v2/accounts:revokeToken",Th(t,e))}/**
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
 */class Is{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){he(e.idToken,"internal-error"),he(typeof e.idToken<"u","internal-error"),he(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){he(e.length!==0,"internal-error");const n=Wp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(he(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Qk(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Is;return r&&(he(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(he(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(he(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Is,this.toJSON())}_performRefresh(){return wn("not implemented")}}/**
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
 */function Hn(t,e){he(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class In{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=yh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Kk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new eu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ki(this,this.stsTokenManager.getToken(this.auth,e));return he(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return qk(this,e)}reload(){return zk(this)}_assign(e){this!==e&&(he(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new In(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){he(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ka(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(sn(this.auth.app))return Promise.reject(Fr(this.auth));const e=await this.getIdToken();return await Ki(this,Hk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,h,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(c=n.tenantId)!==null&&c!==void 0?c:void 0,O=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,D=(h=n.createdAt)!==null&&h!==void 0?h:void 0,N=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:w,emailVerified:k,isAnonymous:V,providerData:F,stsTokenManager:R}=n;he(w&&R,e,"internal-error");const v=Is.fromJSON(this.name,R);he(typeof w=="string",e,"internal-error"),Hn(d,e.name),Hn(g,e.name),he(typeof k=="boolean",e,"internal-error"),he(typeof V=="boolean",e,"internal-error"),Hn(m,e.name),Hn(I,e.name),Hn(b,e.name),Hn(O,e.name),Hn(D,e.name),Hn(N,e.name);const y=new In({uid:w,auth:e,email:g,emailVerified:k,displayName:d,isAnonymous:V,photoURL:I,phoneNumber:m,tenantId:b,stsTokenManager:v,createdAt:D,lastLoginAt:N});return F&&Array.isArray(F)&&(y.providerData=F.map(E=>Object.assign({},E))),O&&(y._redirectEventId=O),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new Is;s.updateFromServerResponse(n);const i=new In({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ka(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];he(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?dv(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Is;c.updateFromIdToken(r);const l=new In({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new eu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
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
 */const Kp=new Map;function bn(t){Nn(t instanceof Function,"Expected a class definition");let e=Kp.get(t);return e?(Nn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Kp.set(t,e),e)}/**
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
 */class pv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}pv.type="NONE";const zp=pv;/**
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
 */function Xo(t,e,n){return`firebase:${t}:${e}:${n}`}class bs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Xo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Xo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?In._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new bs(bn(zp),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||bn(zp);const o=Xo(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const u=await h._get(o);if(u){const d=In._fromJSON(e,u);h!==i&&(c=d),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new bs(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new bs(i,e,r))}}/**
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
 */function Gp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ev(e))return"Blackberry";if(Tv(e))return"Webos";if(mv(e))return"Safari";if((e.includes("chrome/")||_v(e))&&!e.includes("edge/"))return"Chrome";if(vv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function gv(t=Et()){return/firefox\//i.test(t)}function mv(t=Et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _v(t=Et()){return/crios\//i.test(t)}function yv(t=Et()){return/iemobile/i.test(t)}function vv(t=Et()){return/android/i.test(t)}function Ev(t=Et()){return/blackberry/i.test(t)}function Tv(t=Et()){return/webos/i.test(t)}function Ih(t=Et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Xk(t=Et()){var e;return Ih(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Yk(){return QA()&&document.documentMode===10}function wv(t=Et()){return Ih(t)||vv(t)||Tv(t)||Ev(t)||/windows phone/i.test(t)||yv(t)}/**
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
 */function Iv(t,e=[]){let n;switch(t){case"Browser":n=Gp(Et());break;case"Worker":n=`${Gp(Et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$s}/${r}`}/**
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
 */class Zk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function eO(t,e={}){return zs(t,"GET","/v2/passwordPolicy",Th(t,e))}/**
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
 */const tO=6;class nO{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:tO,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class rO{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qp(this),this.idTokenSubscription=new Qp(this),this.beforeStateQueue=new Zk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=av,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=bn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await bs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await fv(this,{idToken:e}),r=await In._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(sn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return he(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ka(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Fk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(sn(this.app))return Promise.reject(Fr(this));const n=e?Zt(e):null;return n&&he(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&he(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return sn(this.app)?Promise.reject(Fr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return sn(this.app)?Promise.reject(Fr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await eO(this),n=new nO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Zi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Jk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&bn(e)||this._popupRedirectResolver;he(n,this,"argument-error"),this.redirectPersistenceManager=await bs.create(this,[bn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(he(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return he(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Iv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(sn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&xk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function bh(t){return Zt(t)}class Qp{constructor(e){this.auth=e,this.observer=null,this.addObserver=rR(n=>this.observer=n)}get next(){return he(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ah={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sO(t){Ah=t}function iO(t){return Ah.loadJS(t)}function oO(){return Ah.gapiScript}function aO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function cO(t,e){const n=Bu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Br(i,e??{}))return s;On(s,"already-initialized")}return n.initialize({options:e})}function lO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(bn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function uO(t,e,n){const r=bh(t);he(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=bv(e),{host:o,port:c}=hO(e),l=c===null?"":`:${c}`,h={url:`${i}//${o}${l}/`},u=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){he(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),he(Br(h,r.config.emulator)&&Br(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,fO()}function bv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function hO(t){const e=bv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Jp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Jp(o)}}}function Jp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function fO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Av{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return wn("not implemented")}_getIdTokenResponse(e){return wn("not implemented")}_linkToIdToken(e,n){return wn("not implemented")}_getReauthenticationResolver(e){return wn("not implemented")}}/**
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
 */async function As(t,e){return jk(t,"POST","/v1/accounts:signInWithIdp",Th(t,e))}/**
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
 */const dO="http://localhost";class qr extends Av{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):On("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=yh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new qr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return As(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,As(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,As(e,n)}buildRequest(){const e={requestUri:dO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=eo(n)}return e}}/**
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
 */class Rv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class oo extends Rv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Yn extends oo{constructor(){super("facebook.com")}static credential(e){return qr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yn.PROVIDER_ID="facebook.com";/**
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
 */class Zn extends oo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.GOOGLE_SIGN_IN_METHOD="google.com";Zn.PROVIDER_ID="google.com";/**
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
 */class er extends oo{constructor(){super("github.com")}static credential(e){return qr._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return er.credential(e.oauthAccessToken)}catch{return null}}}er.GITHUB_SIGN_IN_METHOD="github.com";er.PROVIDER_ID="github.com";/**
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
 */class tr extends oo{constructor(){super("twitter.com")}static credential(e,n){return qr._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return tr.credential(n,r)}catch{return null}}}tr.TWITTER_SIGN_IN_METHOD="twitter.com";tr.PROVIDER_ID="twitter.com";/**
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
 */class Us{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await In._fromIdTokenResponse(e,r,s),o=Xp(r);return new Us({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Xp(r);return new Us({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Xp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Oa extends xn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Oa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Oa(e,n,r,s)}}function Sv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Oa._fromErrorAndOperation(t,i,e,r):i})}async function pO(t,e,n=!1){const r=await Ki(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Us._forOperation(t,"link",r)}/**
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
 */async function gO(t,e,n=!1){const{auth:r}=t;if(sn(r.app))return Promise.reject(Fr(r));const s="reauthenticate";try{const i=await Ki(t,Sv(r,s,e,t),n);he(i.idToken,r,"internal-error");const o=wh(i.idToken);he(o,r,"internal-error");const{sub:c}=o;return he(t.uid===c,r,"user-mismatch"),Us._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&On(r,"user-mismatch"),i}}/**
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
 */async function mO(t,e,n=!1){if(sn(t.app))return Promise.reject(Fr(t));const r="signIn",s=await Sv(t,r,e),i=await Us._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function _O(t,e,n,r){return Zt(t).onIdTokenChanged(e,n,r)}function yO(t,e,n){return Zt(t).beforeAuthStateChanged(e,n)}const Na="__sak";/**
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
 */class Cv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Na,"1"),this.storage.removeItem(Na),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const vO=1e3,EO=10;class Pv extends Cv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=wv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Yk()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,EO):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},vO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Pv.type="LOCAL";const TO=Pv;/**
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
 */class kv extends Cv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}kv.type="SESSION";const Ov=kv;/**
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
 */function wO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ic{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ic(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(n.origin,i)),l=await wO(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ic.receivers=[];/**
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
 */function Rh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class IO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=Rh("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const g=d;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function un(){return window}function bO(t){un().location.href=t}/**
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
 */function Nv(){return typeof un().WorkerGlobalScope<"u"&&typeof un().importScripts=="function"}async function AO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function RO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function SO(){return Nv()?self:null}/**
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
 */const Dv="firebaseLocalStorageDb",CO=1,Da="firebaseLocalStorage",Vv="fbase_key";class ao{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function oc(t,e){return t.transaction([Da],e?"readwrite":"readonly").objectStore(Da)}function PO(){const t=indexedDB.deleteDatabase(Dv);return new ao(t).toPromise()}function tu(){const t=indexedDB.open(Dv,CO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Da,{keyPath:Vv})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Da)?e(r):(r.close(),await PO(),e(await tu()))})})}async function Yp(t,e,n){const r=oc(t,!0).put({[Vv]:e,value:n});return new ao(r).toPromise()}async function kO(t,e){const n=oc(t,!1).get(e),r=await new ao(n).toPromise();return r===void 0?null:r.value}function Zp(t,e){const n=oc(t,!0).delete(e);return new ao(n).toPromise()}const OO=800,NO=3;class xv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>NO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Nv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ic._getInstance(SO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await AO(),!this.activeServiceWorker)return;this.sender=new IO(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||RO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tu();return await Yp(e,Na,"1"),await Zp(e,Na),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Yp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>kO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=oc(s,!1).getAll();return new ao(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),OO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xv.type="LOCAL";const DO=xv;new io(3e4,6e4);/**
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
 */function VO(t,e){return e?bn(e):(he(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Sh extends Av{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return As(e,this._buildIdpRequest())}_linkToIdToken(e,n){return As(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return As(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xO(t){return mO(t.auth,new Sh(t),t.bypassAuthState)}function MO(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),gO(n,new Sh(t),t.bypassAuthState)}async function LO(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),pO(n,new Sh(t),t.bypassAuthState)}/**
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
 */class Mv{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xO;case"linkViaPopup":case"linkViaRedirect":return LO;case"reauthViaPopup":case"reauthViaRedirect":return MO;default:On(this.auth,"internal-error")}}resolve(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const FO=new io(2e3,1e4);class ds extends Mv{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ds.currentPopupAction&&ds.currentPopupAction.cancel(),ds.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return he(e,this.auth,"internal-error"),e}async onExecution(){Nn(this.filter.length===1,"Popup operations only handle one event");const e=Rh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ds.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ln(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,FO.get())};e()}}ds.currentPopupAction=null;/**
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
 */const UO="pendingRedirect",Yo=new Map;class BO extends Mv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Yo.get(this.auth._key());if(!e){try{const r=await jO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Yo.set(this.auth._key(),e)}return this.bypassAuthState||Yo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jO(t,e){const n=qO(e),r=HO(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function $O(t,e){Yo.set(t._key(),e)}function HO(t){return bn(t._redirectPersistence)}function qO(t){return Xo(UO,t.config.apiKey,t.name)}async function WO(t,e,n=!1){if(sn(t.app))return Promise.reject(Fr(t));const r=bh(t),s=VO(r,e),o=await new BO(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const KO=10*60*1e3;class zO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!GO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Lv(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ln(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=KO&&this.cachedEventUids.clear(),this.cachedEventUids.has(eg(e))}saveEventToCache(e){this.cachedEventUids.add(eg(e)),this.lastProcessedEventTime=Date.now()}}function eg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Lv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function GO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lv(t);default:return!1}}/**
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
 */async function QO(t,e={}){return zs(t,"GET","/v1/projects",e)}/**
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
 */const JO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,XO=/^https?/;async function YO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await QO(t);for(const n of e)try{if(ZO(n))return}catch{}On(t,"unauthorized-domain")}function ZO(t){const e=Zl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!XO.test(n))return!1;if(JO.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const eN=new io(3e4,6e4);function tg(){const t=un().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function tN(t){return new Promise((e,n)=>{var r,s,i;function o(){tg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{tg(),n(ln(t,"network-request-failed"))},timeout:eN.get()})}if(!((s=(r=un().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=un().gapi)===null||i===void 0)&&i.load)o();else{const c=aO("iframefcb");return un()[c]=()=>{gapi.load?o():n(ln(t,"network-request-failed"))},iO(`${oO()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Zo=null,e})}let Zo=null;function nN(t){return Zo=Zo||tN(t),Zo}/**
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
 */const rN=new io(5e3,15e3),sN="__/auth/iframe",iN="emulator/auth/iframe",oN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cN(t){const e=t.config;he(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Eh(e,iN):`https://${t.config.authDomain}/${sN}`,r={apiKey:e.apiKey,appName:t.name,v:$s},s=aN.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${eo(r).slice(1)}`}async function lN(t){const e=await nN(t),n=un().gapi;return he(n,t,"internal-error"),e.open({where:document.body,url:cN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oN,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ln(t,"network-request-failed"),c=un().setTimeout(()=>{i(o)},rN.get());function l(){un().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const uN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hN=500,fN=600,dN="_blank",pN="http://localhost";class ng{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gN(t,e,n,r=hN,s=fN){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},uN),{width:r.toString(),height:s.toString(),top:i,left:o}),h=Et().toLowerCase();n&&(c=_v(h)?dN:n),gv(h)&&(e=e||pN,l.scrollbars="yes");const u=Object.entries(l).reduce((g,[m,I])=>`${g}${m}=${I},`,"");if(Xk(h)&&c!=="_self")return mN(e||"",c),new ng(null);const d=window.open(e||"",c,u);he(d,t,"popup-blocked");try{d.focus()}catch{}return new ng(d)}function mN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const _N="__/auth/handler",yN="emulator/auth/handler",vN=encodeURIComponent("fac");async function rg(t,e,n,r,s,i){he(t.config.authDomain,t,"auth-domain-config-required"),he(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:$s,eventId:s};if(e instanceof Rv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",nR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof oo){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const u of Object.keys(c))c[u]===void 0&&delete c[u];const l=await t._getAppCheckToken(),h=l?`#${vN}=${encodeURIComponent(l)}`:"";return`${EN(t)}?${eo(c).slice(1)}${h}`}function EN({config:t}){return t.emulator?Eh(t,yN):`https://${t.authDomain}/${_N}`}/**
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
 */const Yc="webStorageSupport";class TN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ov,this._completeRedirectFn=WO,this._overrideRedirectResult=$O}async _openPopup(e,n,r,s){var i;Nn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await rg(e,n,r,Zl(),s);return gN(e,o,Rh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await rg(e,n,r,Zl(),s);return bO(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Nn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await lN(e),r=new zO(e);return n.register("authEvent",s=>(he(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Yc,{type:Yc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Yc];o!==void 0&&n(!!o),On(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=YO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return wv()||mv()||Ih()}}const wN=TN;var sg="@firebase/auth",ig="1.9.1";/**
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
 */class IN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){he(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function bN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function AN(t){Os(new jr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;he(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Iv(t)},h=new rO(r,s,i,l);return lO(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Os(new jr("auth-internal",e=>{const n=bh(e.getProvider("auth").getImmediate());return(r=>new IN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),cr(sg,ig,bN(t)),cr(sg,ig,"esm2017")}/**
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
 */const RN=5*60,SN=A_("authIdTokenMaxAge")||RN;let og=null;const CN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>SN)return;const s=n==null?void 0:n.token;og!==s&&(og=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function PN(t=P_()){const e=Bu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=cO(t,{popupRedirectResolver:wN,persistence:[DO,TO,Ov]}),r=A_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=CN(i.toString());yO(n,o,()=>o(n.currentUser)),_O(n,c=>o(c))}}const s=I_("auth");return s&&uO(n,`http://${s}`),n}function kN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}sO({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=ln("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",kN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});AN("Browser");const ON=dn(()=>{const e=C_({apiKey:"AIzaSyAn4Zf1Voe3DHW9broHihiIYxovjF-g4vs",authDomain:"drones-75132.firebaseapp.com",projectId:"drones-75132",storageBucket:"drones-75132.firebasestorage.app",messagingSenderId:"298616140479",appId:"1:298616140479:web:766a140c2b975fcceccc0a",measurementId:"G-0P7NXCNXN0"}),n=mk(e),r=PN(e);return{provide:{firbaseapp:e,db:n,auth:r}}}),NN=[t0,o0,AA,RA,SA,CA,kA,OA,NA,ON],Fv=(t="RouteProvider")=>wr({name:t,props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(e){const n=e.renderKey,r=e.route,s={};for(const i in e.route)Object.defineProperty(s,i,{get:()=>n===e.renderKey?e.route[i]:r[i],enumerable:!0});return Mr(Yi,Tn(s)),()=>vt(e.vnode,{ref:e.vnodeRef})}}),DN=Fv(),VN=wr({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:r}){const s=We(),i=An(),o=kt(Yi,null);let c;r({pageRef:i});const l=kt(Ym,null);let h;const u=s.deferHydration();if(s.isHydrating){const m=s.hooks.hookOnce("app:error",u);$t().beforeEach(m)}t.pageKey&&vs(()=>t.pageKey,(m,I)=>{m!==I&&s.callHook("page:loading:start")});let d=!1;const g=new WeakMap;return()=>vt(y_,{name:t.name,route:t.route,...e},{default:m=>{const I=MN(o,m.route,m.Component),b=o&&o.matched.length===m.route.matched.length;if(!m.Component){if(h&&!b)return h;u();return}if(h&&l&&!l.isCurrent(m.route))return h;if(I&&o&&(!l||l!=null&&l.isCurrent(o)))return b?h:null;const O=Nl(m,t.pageKey);!s.isHydrating&&!LN(o,m.route,m.Component)&&c===O&&(s.callHook("page:loading:end"),d=!0),c=O;const D=!!(t.transition??m.route.meta.pageTransition??El),N=D&&xN([t.transition,m.route.meta.pageTransition,El,{onAfterLeave:()=>{s.callHook("page:transition:finish",m.Component)}}].filter(Boolean)),w=t.keepalive??m.route.meta.keepalive??zI;return h=v_(D&&N,pA(w,vt(wu,{suspensible:!0,onPending:()=>s.callHook("page:start",m.Component),onResolve:()=>{js(()=>s.callHook("page:finish",m.Component).then(()=>{if(!d)return s.callHook("page:loading:end");d=!1}).finally(u))}},{default:()=>{const k={key:O||void 0,vnode:n.default?FN(n.default,m):m.Component,route:m.route,renderKey:O||void 0,trackRootNodes:D,vnodeRef:i};if(!w)return vt(DN,k);const V=m.Component.type;let F=g.get(V);return F||(F=Fv(V.name||V.__name),g.set(V,F)),vt(F,k)}}))).default(),h}})}});function xN(t){const e=t.map(n=>({...n,onAfterLeave:n.onAfterLeave?Mu(n.onAfterLeave):void 0}));return Jm(...e)}function MN(t,e,n){if(!t)return!1;const r=e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)});return!r||r===-1?!1:e.matched.slice(0,r).some((s,i)=>{var o,c,l;return((o=s.components)==null?void 0:o.default)!==((l=(c=t.matched[i])==null?void 0:c.components)==null?void 0:l.default)})||n&&Nl({route:e,Component:n})!==Nl({route:t,Component:n})}function LN(t,e,n){return t?e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)})<e.matched.length-1:!1}function FN(t,e){const n=t(e);return n.length===1?vt(n[0]):vt(_t,void 0,n)}const UN=wr({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},setup(t,e){return()=>vt(nr[t.name],t.layoutProps,e.slots)}}),BN={name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},jN=wr({name:"NuxtLayout",inheritAttrs:!1,props:BN,setup(t,e){const n=We(),r=kt(Yi),s=r===ku()?lA():r,i=Ft(()=>{let l=ze(t.name)??s.meta.layout??"default";return l&&!(l in nr)&&t.fallback&&(l=ze(t.fallback)),l}),o=An();e.expose({layoutRef:o});const c=n.deferHydration();if(n.isHydrating){const l=n.hooks.hookOnce("app:error",c);$t().beforeEach(l)}return()=>{const l=i.value&&i.value in nr,h=s.meta.layoutTransition??KI;return v_(l&&h,{default:()=>vt(wu,{suspensible:!0,onResolve:()=>{js(c)}},{default:()=>vt($N,{layoutProps:Cm(e.attrs,{ref:o}),key:i.value||void 0,name:i.value,shouldProvide:!t.name,hasTransition:!!h},e.slots)})}).default()}}}),$N=wr({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,e){const n=t.name;return t.shouldProvide&&Mr(Ym,{isCurrent:r=>n===(r.meta.layout??"default")}),()=>{var r,s;return!n||typeof n=="string"&&!(n in nr)?(s=(r=e.slots).default)==null?void 0:s.call(r):vt(UN,{key:n,layoutProps:t.layoutProps,name:n},e.slots)}}}),HN=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},qN={};function WN(t,e){const n=VN,r=jN;return Kt(),Xn(r,null,{default:_u(()=>[$e(n)]),_:1})}const KN=HN(qN,[["render",WN]]),zN={class:"min-h-screen flex items-center justify-center bg-gray-100"},GN={class:"bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center"},QN={class:"text-red-500 text-7xl font-bold mb-4"},JN={class:"text-gray-600 mb-6"},XN={__name:"error",props:["error"],setup(t){function e(){e_({redirect:"/"})}return(n,r)=>(Kt(),Am("div",zN,[Kn("div",GN,[Kn("h1",QN,Zc(t.error.statusCode),1),r[0]||(r[0]=Kn("p",{class:"text-gray-700 text-2xl mb-4"},"Something went wrong",-1)),Kn("p",JN,Zc(t.error.message),1),Kn("div",{class:"flex justify-center"},[Kn("button",{class:"mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition",onClick:e}," Back to home ")])])]))}},YN={key:0},ag={__name:"nuxt-root",setup(t){const e=()=>null,n=We(),r=n.deferHydration();if(n.isHydrating){const l=n.hooks.hookOnce("app:error",r);$t().beforeEach(l)}const s=!1;Mr(Yi,ku()),n.hooks.callHookWith(l=>l.map(h=>h()),"vue:setup");const i=ja(),o=!1;Jg((l,h,u)=>{if(n.hooks.callHook("vue:error",l,h,u).catch(d=>console.error("[nuxt] Error in `vue:error` hook",d)),hb(l)&&(l.fatal||l.unhandled))return n.runWithContext(()=>fs(l)),!1});const c=!1;return(l,h)=>(Kt(),Xn(wu,{onResolve:ze(r)},{default:_u(()=>[ze(o)?(Kt(),Am("div",YN)):ze(i)?(Kt(),Xn(ze(XN),{key:1,error:ze(i)},null,8,["error"])):ze(c)?(Kt(),Xn(ze(e),{key:2,context:ze(c)},null,8,["context"])):ze(s)?(Kt(),Xn(wT(ze(s)),{key:3})):(Kt(),Xn(ze(KN),{key:4}))]),_:1},8,["onResolve"]))}};let cg;{let t;cg=async function(){var o,c;if(t)return t;const r=!!(((o=window.__NUXT__)==null?void 0:o.serverRendered)??((c=document.getElementById("__NUXT_DATA__"))==null?void 0:c.dataset.ssr)==="true")?jw(ag):Bw(ag),s=YI({vueApp:r});async function i(l){var h;await s.callHook("app:error",l),(h=s.payload).error||(h.error=$a(l))}r.config.errorHandler=i,s.hook("app:suspense:resolve",()=>{r.config.errorHandler===i&&(r.config.errorHandler=void 0)});try{await tb(s,NN)}catch(l){i(l)}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(QI),await s.hooks.callHook("app:mounted",r),await js()}catch(l){i(l)}return r},t=cg().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{sD as A,Kr as B,Cu as C,Ba as D,rD as E,_l as F,Su as G,HN as _,Kn as a,nD as b,Am as c,vu as d,$e as e,lD as f,aD as g,cD as h,Sm as i,$t as j,wr as k,An as l,Lu as m,Fd as n,Kt as o,Eu as p,iD as q,tD as r,vt as s,Zc as t,We as u,eD as v,_u as w,Mm as x,ub as y,Ft as z};
