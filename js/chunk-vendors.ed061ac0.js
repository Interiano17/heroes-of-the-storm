"use strict";(self["webpackChunkheroes_of_the_storm"]=self["webpackChunkheroes_of_the_storm"]||[]).push([[998],{4444:function(e,t,n){n.d(t,{BH:function(){return w},G6:function(){return x},L:function(){return c},LL:function(){return L},Pz:function(){return y},Sg:function(){return b},UG:function(){return S},ZB:function(){return l},ZR:function(){return D},aH:function(){return v},b$:function(){return C},eu:function(){return O},hl:function(){return A},jU:function(){return E},m9:function(){return K},ne:function(){return z},pd:function(){return U},r3:function(){return M},ru:function(){return T},tV:function(){return u},uI:function(){return I},vZ:function(){return F},w1:function(){return k},xO:function(){return B},xb:function(){return $},z$:function(){return _},zd:function(){return j}});
/**
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
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,a=s?n[e.charAt(i)]:0;++i;const c=i<e.length,u=c?n[e.charAt(i)]:64;++i;const l=i<e.length,h=l?n[e.charAt(i)]:64;if(++i,null==t||null==a||null==u||null==h)throw new o;const d=t<<2|a>>4;if(r.push(d),64!==u){const e=a<<4&240|u>>2;if(r.push(e),64!==h){const e=u<<6&192|h;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
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
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(e){const t=r(e);return s.encodeByteArray(t,!0)},c=function(e){return a(e).replace(/\./g,"")},u=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function l(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&h(n)&&(e[n]=l(e[n],t[n]));return e}function h(e){return"__proto__"!==e}
/**
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
 */function d(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
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
 */const f=()=>d().__FIREBASE_DEFAULTS__,p=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/heroes-of-the-storm/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},m=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&u(e[1]);return t&&JSON.parse(t)},g=()=>{try{return f()||p()||m()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},v=()=>{var e;return null===(e=g())||void 0===e?void 0:e.config},y=e=>{var t;return null===(t=g())||void 0===t?void 0:t[`_${e}`]};
/**
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
 */
class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
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
 */function b(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[c(JSON.stringify(n)),c(JSON.stringify(o)),a].join(".")}
/**
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
 */function _(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function I(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_())}function S(){var e;const t=null===(e=g())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function E(){return"object"===typeof self&&self.self===self}function T(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function C(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function k(){const e=_();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function x(){return!S()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function A(){try{return"object"===typeof indexedDB}catch(e){return!1}}function O(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
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
 */
const N="FirebaseError";class D extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=N,Object.setPrototypeOf(this,D.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,L.prototype.create)}}class L{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?P(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new D(r,o,n);return a}}function P(e,t){return e.replace(R,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const R=/\{\$([^}]+)}/g;
/**
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
 */
/**
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
 */
function M(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function $(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function F(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(V(n)&&V(s)){if(!F(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function V(e){return null!==e&&"object"===typeof e}
/**
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
 */
/**
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
 */
function B(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function j(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function U(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
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
 */function z(e,t){const n=new q(e,t);return n.subscribe.bind(n)}class q{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=H(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=G),void 0===r.error&&(r.error=G),void 0===r.complete&&(r.complete=G);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function H(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function G(){}
/**
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
 */
/**
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
 */
function K(e){return e&&e._delegate?e._delegate:e}},1001:function(e,t,n){function r(e,t,n,r,i,s,o,a){var c,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),o?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(e,t){return c.call(t),l(e,t)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:e,options:u}}n.d(t,{Z:function(){return r}})},1096:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(3276),i=n(4987),s=(0,i.Z)(r.Z).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark(){return this.$vuetify.theme.dark}},beforeCreate(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://v2.vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render(e){const t=e("div",{staticClass:"v-application--wrap"},this.$slots.default);return e("div",{staticClass:"v-application",class:{"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl,...this.themeClasses},attrs:{"data-app":!0},domProps:{id:this.id}},[t])}})},1392:function(e,t,n){n.d(t,{Z:function(){return C}});n(560),n(1719);var r=n(8085),i=n(1558),s=n(9196),o=n(4987),a=n(1050),c=(0,o.Z)(s.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},(0,a.z9)(this))}},render(e){return e("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),u=c,l=n(3276),h=n(2653),d=n(6596);const f="undefined"!==typeof window&&"IntersectionObserver"in window;var p=(0,o.Z)(u,l.Z).extend({name:"v-img",directives:{intersect:i.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const e=[],t=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&e.push(`linear-gradient(${this.gradient})`),t&&e.push(`url("${t}")`);const n=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:e.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[n]):n}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(e,t,n){if(!f||n||this.eager){if(this.normalisedSrc.lazySrc){const e=new Image;e.src=this.normalisedSrc.lazySrc,this.pollForSize(e,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const e=new Image;this.image=e,e.onload=()=>{e.decode?e.decode().catch((e=>{(0,d.Kd)(`Failed to decode image, trying to render anyway\n\nsrc: ${this.normalisedSrc.src}`+(e.message?`\nOriginal error: ${e.message}`:""),this)})).then(this.onLoad):this.onLoad()},e.onerror=this.onError,this.hasError=!1,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),e.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize(e,t=100){const n=()=>{const{naturalHeight:r,naturalWidth:i}=e;r||i?(this.naturalWidth=i,this.calculatedAspectRatio=i/r):e.complete||!this.isLoading||this.hasError||null==t||setTimeout(n,t)};n()},genContent(){const e=u.options.methods.genContent.call(this);return this.naturalWidth&&this._b(e.data,"div",{style:{width:`${this.naturalWidth}px`}}),e},__genPlaceholder(){const e=(0,a.z9)(this,"placeholder");if(e){const t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},e)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render(e){const t=u.options.render.call(this,e),n=(0,h.ZP)(t.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:f?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return t.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],e(t.tag,n,t.children)}}),m=r.Z.extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:()=>({isExtended:!1}),computed:{computedHeight(){const e=this.computedContentHeight;if(!this.isExtended)return e;const t=parseInt(this.extensionHeight);return this.isCollapsed?e:e+(isNaN(t)?0:t)},computedContentHeight(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes(){return{...r.Z.options.computed.classes.call(this),"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent}},isCollapsed(){return this.collapse},isProminent(){return this.prominent},styles(){return{...this.measurableStyles,height:(0,a.kb)(this.computedHeight)}}},created(){const e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((([e,t])=>{this.$attrs.hasOwnProperty(e)&&(0,d.fK)(e,t,this)}))},methods:{genBackground(){const e={height:(0,a.kb)(this.computedHeight),src:this.src},t=this.$scopedSlots.img?this.$scopedSlots.img({props:e}):this.$createElement(p,{props:e});return this.$createElement("div",{staticClass:"v-toolbar__image"},[t])},genContent(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:(0,a.kb)(this.computedContentHeight)}},(0,a.z9)(this))},genExtension(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:(0,a.kb)(this.extensionHeight)}},(0,a.z9)(this,"extension"))}},render(e){this.isExtended=this.extended||!!this.$scopedSlots.extension;const t=[this.genContent()],n=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&t.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&t.unshift(this.genBackground()),e(this.tag,n,t)}});function g(e,t,n){const{self:r=!1}=t.modifiers||{},i=t.value,s="object"===typeof i&&i.options||{passive:!0},o="function"===typeof i||"handleEvent"in i?i:i.handler,a=r?e:t.arg?document.querySelector(t.arg):window;a&&(a.addEventListener("scroll",o,s),e._onScroll=Object(e._onScroll),e._onScroll[n.context._uid]={handler:o,options:s,target:r?void 0:a})}function v(e,t,n){var r;if(!(null===(r=e._onScroll)||void 0===r?void 0:r[n.context._uid]))return;const{handler:i,options:s,target:o=e}=e._onScroll[n.context._uid];o.removeEventListener("scroll",i,s),delete e._onScroll[n.context._uid]}const y={inserted:g,unbind:v};var w=y,b=n(3651),_=n(144),I=_.ZP.extend({name:"scrollable",directives:{Scroll:y},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:()=>({currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}),computed:{canScroll(){return"undefined"!==typeof window},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp(){this.savedScroll=this.savedScroll||this.currentScroll},isActive(){this.savedScroll=0}},mounted(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||(0,d.Kd)(`Unable to locate element with identifier ${this.scrollTarget}`,this))},methods:{onScroll(){this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((()=>{Math.abs(this.currentScroll-this.savedScroll)>this.computedScrollThreshold&&this.thresholdMet()})))},thresholdMet(){}}}),S=n(8574),E=n(6470);const T=(0,o.Z)(m,I,S.Z,E.Z,(0,b.Z)("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));var C=T.extend({name:"v-app-bar",directives:{Scroll:w},provide(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data(){return{isActive:this.value}},computed:{applicationProperty(){return this.bottom?"bottom":"top"},canScroll(){return I.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes(){return{...m.options.computed.classes.call(this),"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll}},scrollRatio(){const e=this.computedScrollThreshold;return Math.max((e-this.currentScroll)/e,0)},computedContentHeight(){if(!this.shrinkOnScroll)return m.options.computed.computedContentHeight.call(this);const e=this.dense?48:56,t=this.computedOriginalHeight;return e+(t-e)*this.scrollRatio},computedFontSize(){if(!this.isProminent)return;const e=1.25,t=1.5;return e+(t-e)*this.scrollRatio},computedLeft(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop(){return this.app?this.$vuetify.application.bar:0},computedOpacity(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight(){let e=m.options.computed.computedContentHeight.call(this);return this.isExtended&&(e+=parseInt(this.extensionHeight)),e},computedRight(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;const e=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?e:-e},hideShadow(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed(){return this.collapseOnScroll?this.currentScroll>0:m.options.computed.isCollapsed.call(this)},isProminent(){return m.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles(){return{...m.options.computed.styles.call(this),fontSize:(0,a.kb)(this.computedFontSize,"rem"),marginTop:(0,a.kb)(this.computedMarginTop),transform:`translateY(${(0,a.kb)(this.computedTransform)})`,left:(0,a.kb)(this.computedLeft),right:(0,a.kb)(this.computedRight)}}},watch:{canScroll:"onScroll",computedTransform(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll(e){this.isActive=!e||0!==this.currentScroll},hideOnScroll(e){this.isActive=!e||this.currentScroll<this.computedScrollThreshold}},created(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground(){const e=m.options.methods.genBackground.call(this);return e.data=this._b(e.data||{},e.tag,{style:{opacity:this.computedOpacity}}),e},updateApplication(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render(e){const t=m.options.render.call(this,e);return t.data=t.data||{},this.canScroll&&(t.data.directives=t.data.directives||[],t.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),t}})},831:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(2925),i=n(1558),s=n(8914),o=n(1050),a=s.Z.extend({name:"v-progress-circular",directives:{intersect:i.Z},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:()=>({radius:20,isVisible:!0}),computed:{calculatedSize(){return Number(this.size)+(this.button?8:0)},circumference(){return 2*Math.PI*this.radius},classes(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles(){return{height:(0,o.kb)(this.calculatedSize),width:(0,o.kb)(this.calculatedSize)}},svgStyles(){return{transform:`rotate(${Number(this.rotate)}deg)`}},viewBoxSize(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle(e,t){return this.$createElement("circle",{class:`v-progress-circular__${e}`,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":t}})},genSvg(){const e=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`${this.viewBoxSize} ${this.viewBoxSize} ${2*this.viewBoxSize} ${2*this.viewBoxSize}`}},e)},genInfo(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve(e,t,n){this.isVisible=n}},render(e){return e("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}}),c=a,u=n(380);function l(e,t,n){return(0,u.f)(e,t,n).extend({name:"groupable",props:{activeClass:{type:String,default(){if(this[e])return this[e].activeClass}},disabled:Boolean},data(){return{isActive:!1}},computed:{groupClasses(){return this.activeClass?{[this.activeClass]:this.isActive}:{}}},created(){this[e]&&this[e].register(this)},beforeDestroy(){this[e]&&this[e].unregister(this)},methods:{toggle(e){this.disabled&&e?e.preventDefault():this.$emit("change")}}})}l("itemGroup");var h=n(6470),d=n(5303),f=n(8386),p=n(4040),m=n(281),g=n(4987),v=n(6596);const y=(0,g.Z)(r.Z,p.Z,f.Z,m.Z,l("btnToggle"),(0,h.d)("inputValue"));var w=y.extend().extend({name:"v-btn",props:{activeClass:{type:String,default(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:()=>({proxyClass:"v-btn--active"}),computed:{classes(){return{"v-btn":!0,...p.Z.options.computed.classes.call(this),"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top,...this.themeClasses,...this.groupClasses,...this.elevationClasses,...this.sizeableClasses}},computedElevation(){if(!this.disabled)return d.Z.options.computed.computedElevation.call(this)},computedRipple(){var e;const t=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!==(e=this.ripple)&&void 0!==e?e:t)},hasBg(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound(){return Boolean(this.icon||this.fab)},styles(){return{...this.measurableStyles}}},created(){const e=[["flat","text"],["outline","outlined"],["round","rounded"]];e.forEach((([e,t])=>{this.$attrs.hasOwnProperty(e)&&(0,v.fK)(e,t,this)}))},methods:{click(e){!this.retainFocusOnClick&&!this.fab&&e.detail&&this.$el.blur(),this.$emit("click",e),this.btnToggle&&this.toggle()},genContent(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(c,{props:{indeterminate:!0,size:23,width:2}})])}},render(e){const t=[this.genContent(),this.loading&&this.genLoader()],{tag:n,data:r}=this.generateRouteLink(),i=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===n&&(r.attrs.type=this.type,r.attrs.disabled=this.disabled),r.attrs.value=["string","number"].includes(typeof this.value)?this.value:JSON.stringify(this.value),e(n,this.disabled?r:i(this.color,r),t)}})},9781:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(2925),i=n(9246),s=n(4040),o=n(4987),a=(0,o.Z)(i.Z,s.Z,r.Z).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...s.Z.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...r.Z.options.computed.classes.call(this)}},styles(){const e={...r.Z.options.computed.styles.call(this)};return this.img&&(e.background=`url("${this.img}") center center / cover no-repeat`),e}},methods:{genProgress(){const e=i.Z.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render(e){const{tag:t,data:n}=this.generateRouteLink();return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),e(t,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}})},5223:function(e,t,n){n.d(t,{EB:function(){return c},ZB:function(){return a},h7:function(){return s}});var r=n(9781),i=n(1050);const s=(0,i.Ji)("v-card__actions"),o=(0,i.Ji)("v-card__subtitle"),a=(0,i.Ji)("v-card__text"),c=(0,i.Ji)("v-card__title");r.Z},4735:function(e,t,n){n.d(t,{Z:function(){return P}});var r=n(3276),i=r.Z.extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark(){return this.root?this.rootIsDark:r.Z.options.computed.isDark.call(this)}},render(){return this.$slots.default&&this.$slots.default.find((e=>!e.isComment&&" "!==e.text))}}),s=n(144),o=s.ZP.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:()=>({openTimeout:void 0,closeTimeout:void 0}),methods:{clearDelay(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay(e,t){this.clearDelay();const n=parseInt(this[`${e}Delay`],10);this[`${e}Timeout`]=setTimeout(t||(()=>{this.isActive={open:!0,close:!1}[e]}),n)}}}),a=n(6470),c=n(4987),u=n(1050),l=n(6596);const h=(0,c.Z)(o,a.Z);var d=h.extend({name:"activatable",props:{activator:{default:null,validator:e=>["string","object"].includes(typeof e)},disabled:Boolean,internalActivator:Boolean,openOnClick:{type:Boolean,default:!0},openOnHover:Boolean,openOnFocus:Boolean},data:()=>({activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave","focus"],listeners:{}}),watch:{activator:"resetActivator",openOnFocus:"resetActivator",openOnHover:"resetActivator"},mounted(){const e=(0,u.sp)(this,"activator",!0);e&&["v-slot","normal"].includes(e)&&(0,l.N6)('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy(){this.removeActivatorEvents()},methods:{addActivatorEvents(){if(!this.activator||this.disabled||!this.getActivator())return;this.listeners=this.genActivatorListeners();const e=Object.keys(this.listeners);for(const t of e)this.getActivator().addEventListener(t,this.listeners[t])},genActivator(){const e=(0,u.z9)(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=e,e},genActivatorAttributes(){return{role:this.openOnClick&&!this.openOnHover?"button":void 0,"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners(){if(this.disabled)return{};const e={};return this.openOnHover?(e.mouseenter=e=>{this.getActivator(e),this.runDelay("open")},e.mouseleave=e=>{this.getActivator(e),this.runDelay("close")}):this.openOnClick&&(e.click=e=>{const t=this.getActivator(e);t&&t.focus(),e.stopPropagation(),this.isActive=!this.isActive}),this.openOnFocus&&(e.focus=e=>{this.getActivator(e),e.stopPropagation(),this.isActive=!this.isActive}),e},getActivator(e){if(this.activatorElement)return this.activatorElement;let t=null;if(this.activator){const e=this.internalActivator?this.$el:document;t="string"===typeof this.activator?e.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!e){const e=this.activatorNode[0].componentInstance;t=e&&e.$options.mixins&&e.$options.mixins.some((e=>e.options&&["activatable","menuable"].includes(e.options.name)))?e.getActivator():this.activatorNode[0].elm}else e&&(t=e.currentTarget||e.target);return this.activatorElement=(null===t||void 0===t?void 0:t.nodeType)===Node.ELEMENT_NODE?t:null,this.activatorElement},getContentSlot(){return(0,u.z9)(this,"default",this.getValueProxy(),!0)},getValueProxy(){const e=this;return{get value(){return e.isActive},set value(t){e.isActive=t}}},removeActivatorEvents(){if(!this.activator||!this.activatorElement)return;const e=Object.keys(this.listeners);for(const t of e)this.activatorElement.removeEventListener(t,this.listeners[t]);this.listeners={}},resetActivator(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}});n(560);function f(e){const t=[];for(let n=0;n<e.length;n++){const r=e[n];r.isActive&&r.isDependent?t.push(r):t.push(...f(r.$children))}return t}var p=(0,c.Z)().extend({name:"dependent",data(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive(e){if(e)return;const t=this.getOpenDependents();for(let n=0;n<t.length;n++)t[n].isActive=!1}},methods:{getOpenDependents(){return this.closeDependents?f(this.$children):[]},getOpenDependentElements(){const e=[],t=this.getOpenDependents();for(let n=0;n<t.length;n++)e.push(...t[n].getClickableDependentElements());return e},getClickableDependentElements(){const e=[this.$el];return this.$refs.content&&e.push(this.$refs.content),this.overlay&&e.push(this.overlay.$el),e.push(...this.getOpenDependentElements()),e}}}),m=s.ZP.extend().extend({name:"bootable",props:{eager:Boolean},data:()=>({isBooted:!1}),computed:{hasContent(){return this.isBooted||this.eager||this.isActive}},watch:{isActive(){this.isBooted=!0}},created(){"lazy"in this.$attrs&&(0,l.Jk)("lazy",this)},methods:{showLazyContent(e){return this.hasContent&&e?e():[this.$createElement()]}}});function g(e){const t=typeof e;return"boolean"===t||"string"===t||e.nodeType===Node.ELEMENT_NODE}function v(e){e.forEach((e=>{e.elm&&e.elm.parentNode&&e.elm.parentNode.removeChild(e.elm)}))}var y=(0,c.Z)(m).extend({name:"detachable",props:{attach:{default:!1,validator:g},contentClass:{type:String,default:""}},data:()=>({activatorNode:null,hasDetached:!1}),watch:{attach(){this.hasDetached=!1,this.initDetach()},hasContent(){this.$nextTick(this.initDetach)}},beforeMount(){this.$nextTick((()=>{if(this.activatorNode){const e=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];e.forEach((e=>{if(!e.elm)return;if(!this.$el.parentNode)return;const t=this.$el===this.$el.parentNode.firstChild?this.$el:this.$el.nextSibling;this.$el.parentNode.insertBefore(e.elm,t)}))}}))},mounted(){this.hasContent&&this.initDetach()},deactivated(){this.isActive=!1},beforeDestroy(){this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content)},destroyed(){if(this.activatorNode){const e=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];if(this.$el.isConnected){const t=new MutationObserver((n=>{n.some((e=>Array.from(e.removedNodes).includes(this.$el)))&&(t.disconnect(),v(e))}));t.observe(this.$el.parentNode,{subtree:!1,childList:!0})}else v(e)}},methods:{getScopeIdAttrs(){const e=(0,u.vO)(this.$vnode,"context.$options._scopeId");return e&&{[e]:""}},initDetach(){if(this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach)return;let e;e=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,e?(e.appendChild(this.$refs.content),this.hasDetached=!0):(0,l.Kd)(`Unable to locate target ${this.attach||"[data-app]"}`,this)}}}),w=n(8914),b=(0,c.Z)(w.Z,r.Z,a.Z).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const e=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",e)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(e){const t=[this.__scrim];return this.isActive&&t.push(this.genContent()),e("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},t)}}),_=b,I=s.ZP.extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data(){return{animationFrame:0,overlay:null}},watch:{hideOverlay(e){this.isActive&&(e?this.removeOverlay():this.genOverlay())}},beforeDestroy(){this.removeOverlay()},methods:{createOverlay(){const e=new _({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});e.$mount();const t=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");t&&t.insertBefore(e.$el,t.firstChild),this.overlay=e},genOverlay(){if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((()=>{this.overlay&&(void 0!==this.activeZIndex?this.overlay.zIndex=String(this.activeZIndex-1):this.$el&&(this.overlay.zIndex=(0,u.KK)(this.$el)),this.overlay.value=!0)})),!0},removeOverlay(e=!0){this.overlay&&((0,u.qh)(this.overlay.$el,"transitionend",(()=>{this.overlay&&this.overlay.$el&&this.overlay.$el.parentNode&&!this.overlay.value&&!this.isActive&&(this.overlay.$el.parentNode.removeChild(this.overlay.$el),this.overlay.$destroy(),this.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),e&&this.showScroll()},scrollListener(e){if("key"in e){if(["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName)||e.target.isContentEditable)return;const t=[u.Do.up,u.Do.pageup],n=[u.Do.down,u.Do.pagedown];if(t.includes(e.keyCode))e.deltaY=-1;else{if(!n.includes(e.keyCode))return;e.deltaY=1}}(e.target===this.overlay||"keydown"!==e.type&&e.target===document.body||this.checkPath(e))&&e.preventDefault()},hasScrollbar(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return(["auto","scroll"].includes(t.overflowY)||"SELECT"===e.tagName)&&e.scrollHeight>e.clientHeight||["auto","scroll"].includes(t.overflowX)&&e.scrollWidth>e.clientWidth},shouldScroll(e,t){if(e.hasAttribute("data-app"))return!1;const n=t.shiftKey||t.deltaX?"x":"y",r="y"===n?t.deltaY:t.deltaX||t.deltaY;let i,s;"y"===n?(i=0===e.scrollTop,s=e.scrollTop+e.clientHeight===e.scrollHeight):(i=0===e.scrollLeft,s=e.scrollLeft+e.clientWidth===e.scrollWidth);const o=r<0,a=r>0;return!(i||!o)||(!(s||!a)||!(!i&&!s||!e.parentNode)&&this.shouldScroll(e.parentNode,t))},isInside(e,t){return e===t||null!==e&&e!==document.body&&this.isInside(e.parentNode,t)},checkPath(e){const t=(0,u.iZ)(e);if("keydown"===e.type&&t[0]===document.body){const t=this.$refs.dialog,n=window.getSelection().anchorNode;return!(t&&this.hasScrollbar(t)&&this.isInside(n,t))||!this.shouldScroll(t,e)}for(let n=0;n<t.length;n++){const r=t[n];if(r===document)return!0;if(r===document.documentElement)return!0;if(r===this.$refs.content)return!0;if(this.hasScrollbar(r))return!this.shouldScroll(r,e)}return!0},hideScroll(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):((0,u.lj)(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}}),S=s.ZP.extend({name:"returnable",props:{returnValue:null},data:()=>({isActive:!1,originalValue:null}),watch:{isActive(e){e?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save(e){this.originalValue=e,setTimeout((()=>{this.isActive=!1}))}}}),E=s.ZP.extend().extend({name:"stackable",data(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex(){if("undefined"===typeof window)return 0;const e=this.stackElement||this.$refs.content,t=this.isActive?this.getMaxZIndex(this.stackExclude||[e])+2:(0,u.KK)(e);return null==t?t:parseInt(t)}},methods:{getMaxZIndex(e=[]){const t=this.$el,n=[this.stackMinZIndex,(0,u.KK)(t)],r=[...document.getElementsByClassName("v-menu__content--active"),...document.getElementsByClassName("v-dialog__content--active")];for(let i=0;i<r.length;i++)e.includes(r[i])||n.push((0,u.KK)(r[i]));return Math.max(...n)}}}),T=n(6044);function C(){return!0}function k(e,t,n){if(!e||!1===x(e,n))return!1;const r=(0,T.e)(t);if("undefined"!==typeof ShadowRoot&&r instanceof ShadowRoot&&r.host===e.target)return!1;const i=("object"===typeof n.value&&n.value.include||(()=>[]))();return i.push(t),!i.some((t=>t.contains(e.target)))}function x(e,t){const n="object"===typeof t.value&&t.value.closeConditional||C;return n(e)}function A(e,t,n){const r="function"===typeof n.value?n.value:n.value.handler;t._clickOutside.lastMousedownWasOutside&&k(e,t,n)&&setTimeout((()=>{x(e,n)&&r&&r(e)}),0)}function O(e,t){const n=(0,T.e)(e);t(document),"undefined"!==typeof ShadowRoot&&n instanceof ShadowRoot&&t(n)}const N={inserted(e,t,n){const r=n=>A(n,e,t),i=n=>{e._clickOutside.lastMousedownWasOutside=k(n,e,t)};O(e,(e=>{e.addEventListener("click",r,!0),e.addEventListener("mousedown",i,!0)})),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!0}),e._clickOutside[n.context._uid]={onClick:r,onMousedown:i}},unbind(e,t,n){e._clickOutside&&(O(e,(t=>{var r;if(!t||!(null===(r=e._clickOutside)||void 0===r?void 0:r[n.context._uid]))return;const{onClick:i,onMousedown:s}=e._clickOutside[n.context._uid];t.removeEventListener("click",i,!0),t.removeEventListener("mousedown",s,!0)})),delete e._clickOutside[n.context._uid])}};var D=N;const L=(0,c.Z)(p,y,I,S,E,d);var P=L.extend({name:"v-dialog",directives:{ClickOutside:D},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes(){return{[`v-dialog ${this.contentClass}`.trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(e){var t;e?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null===(t=this.previousActiveElement)||void 0===t||t.focus())},fullscreen(e){this.isActive&&(e?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&(0,l.Jk)("full-width",this)},beforeMount(){this.$nextTick((()=>{this.isBooted=this.isActive,this.isActive&&this.show()}))},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick((()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout((()=>this.animate=!1),150)}))},closeConditional(e){const t=e.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(t)||this.overlay&&t&&!this.overlay.$el.contains(t))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):I.options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((()=>{this.$nextTick((()=>{var e,t;(null===(e=this.$refs.dialog)||void 0===e?void 0:e.contains(document.activeElement))||(this.previousActiveElement=document.activeElement,null===(t=this.$refs.dialog)||void 0===t||t.focus()),this.bind()}))}))},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(e){this.$emit("click:outside",e),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(e){if(e.keyCode===u.Do.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const e=this.getActivator();this.$nextTick((()=>e&&e.focus()))}this.$emit("keydown",e)},onFocusin(e){if(!e||!this.retainFocus)return;const t=e.target;if(t&&this.$refs.dialog&&![document,this.$refs.dialog].includes(t)&&!this.$refs.dialog.contains(t)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((e=>e.contains(t)))){const e=this.$refs.dialog.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'),t=[...e].find((e=>!e.hasAttribute("disabled")&&!e.matches('[tabindex="-1"]')));t&&t.focus()}},genContent(){return this.showLazyContent((()=>[this.$createElement(i,{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"dialog","aria-modal":this.hideOverlay?void 0:"true",...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])]))},genTransition(){const e=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[e]):e},genInnerContent(){const e={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(e.style={...e.style,maxWidth:(0,u.kb)(this.maxWidth),width:(0,u.kb)(this.width)}),this.$createElement("div",e,this.getContentSlot())}},render(e){return e("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},3584:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(8085),i=n(3651),s=n(8574),o=n(4987),a=n(1050),c=(0,o.Z)(r.Z,(0,i.Z)("footer",["height","inset"]),s.Z).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty(){return this.inset?"insetFooter":"footer"},classes(){return{...r.Z.options.computed.classes.call(this),"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset}},computedBottom(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned(){return Boolean(this.absolute||this.fixed||this.app)},styles(){const e=parseInt(this.height);return{...r.Z.options.computed.styles.call(this),height:isNaN(e)?e:(0,a.kb)(e),left:(0,a.kb)(this.computedLeft),right:(0,a.kb)(this.computedRight),bottom:(0,a.kb)(this.computedBottom)}}},methods:{updateApplication(){const e=parseInt(this.height);return isNaN(e)?this.$el?this.$el.clientHeight:0:e}},render(e){const t=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return e(this.tag,t,this.$slots.default)}})},6904:function(e,t,n){n(560);var r=n(4987),i=n(4609),s=n(380);t.Z=(0,r.Z)(i.Z,(0,s.J)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(e){const t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput(e){const t=e=>e.$watch("hasError",(t=>{this.$set(this.errorBag,e._uid,t)}),{immediate:!0}),n={_uid:e._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?n.shouldValidate=e.$watch("shouldValidate",(r=>{r&&(this.errorBag.hasOwnProperty(e._uid)||(n.valid=t(e)))})):n.valid=t(e),n},validate(){return 0===this.inputs.filter((e=>!e.validate(!0))).length},reset(){this.inputs.forEach((e=>e.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((e=>e.resetValidation())),this.resetErrorBag()},register(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister(e){const t=this.inputs.find((t=>t._uid===e._uid));if(!t)return;const n=this.watchers.find((e=>e._uid===t._uid));n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter((e=>e._uid!==t._uid)),this.inputs=this.inputs.filter((e=>e._uid!==t._uid)),this.$delete(this.errorBag,t._uid)}},render(e){return e("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:e=>this.$emit("submit",e)}},this.$slots.default)}})},4437:function(e,t,n){n(560),n(1884);var r=n(144),i=n(2653),s=n(1050);const o=["sm","md","lg","xl"],a=(()=>o.reduce(((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e)),{}))(),c=(()=>o.reduce(((e,t)=>(e["offset"+(0,s.jC)(t)]={type:[String,Number],default:null},e)),{}))(),u=(()=>o.reduce(((e,t)=>(e["order"+(0,s.jC)(t)]={type:[String,Number],default:null},e)),{}))(),l={col:Object.keys(a),offset:Object.keys(c),order:Object.keys(u)};function h(e,t,n){let r=e;if(null!=n&&!1!==n){if(t){const n=t.replace(e,"");r+=`-${n}`}return"col"!==e||""!==n&&!0!==n?(r+=`-${n}`,r.toLowerCase()):r.toLowerCase()}}const d=new Map;t.Z=r.ZP.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...a,offset:{type:[String,Number],default:null},...c,order:{type:[String,Number],default:null},...u,alignSelf:{type:String,default:null,validator:e=>["auto","start","end","center","baseline","stretch"].includes(e)},tag:{type:String,default:"div"}},render(e,{props:t,data:n,children:r,parent:s}){let o="";for(const i in t)o+=String(t[i]);let a=d.get(o);if(!a){let e;for(e in a=[],l)l[e].forEach((n=>{const r=t[n],i=h(e,n,r);i&&a.push(i)}));const n=a.some((e=>e.startsWith("col-")));a.push({col:!n||!t.cols,[`col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),d.set(o,a)}return e(t.tag,(0,i.ZP)(n,{class:a}),r)}})},6035:function(e,t,n){n.d(t,{Z:function(){return o}});n(9027),n(1884);var r=n(144);function i(e){return r.ZP.extend({name:`v-${e}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(t,{props:n,data:r,children:i}){r.staticClass=`${e} ${r.staticClass||""}`.trim();const{attrs:s}=r;if(s){r.attrs={};const e=Object.keys(s).filter((e=>{if("slot"===e)return!1;const t=s[e];return e.startsWith("data-")?(r.attrs[e]=t,!1):t||"string"===typeof t}));e.length&&(r.staticClass+=` ${e.join(" ")}`)}return n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),t(n.tag,r,i)}})}var s=n(2653),o=i("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(e,{props:t,data:n,children:r}){let i;const{attrs:o}=n;return o&&(n.attrs={},i=Object.keys(o).filter((e=>{if("slot"===e)return!1;const t=o[e];return e.startsWith("data-")?(n.attrs[e]=t,!1):t||"string"===typeof t}))),t.id&&(n.domProps=n.domProps||{},n.domProps.id=t.id),e(t.tag,(0,s.ZP)(n,{staticClass:"container",class:Array({"container--fluid":t.fluid}).concat(i||[])}),r)}})},5294:function(e,t,n){n(560),n(1884);var r=n(144),i=n(2653),s=n(1050);const o=["sm","md","lg","xl"],a=["start","end","center"];function c(e,t){return o.reduce(((n,r)=>(n[e+(0,s.jC)(r)]=t(),n)),{})}const u=e=>[...a,"baseline","stretch"].includes(e),l=c("align",(()=>({type:String,default:null,validator:u}))),h=e=>[...a,"space-between","space-around"].includes(e),d=c("justify",(()=>({type:String,default:null,validator:h}))),f=e=>[...a,"space-between","space-around","stretch"].includes(e),p=c("alignContent",(()=>({type:String,default:null,validator:f}))),m={align:Object.keys(l),justify:Object.keys(d),alignContent:Object.keys(p)},g={align:"align",justify:"justify",alignContent:"align-content"};function v(e,t,n){let r=g[e];if(null!=n){if(t){const n=t.replace(e,"");r+=`-${n}`}return r+=`-${n}`,r.toLowerCase()}}const y=new Map;t.Z=r.ZP.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u},...l,justify:{type:String,default:null,validator:h},...d,alignContent:{type:String,default:null,validator:f},...p},render(e,{props:t,data:n,children:r}){let s="";for(const i in t)s+=String(t[i]);let o=y.get(s);if(!o){let e;for(e in o=[],m)m[e].forEach((n=>{const r=t[n],i=v(e,n,r);i&&o.push(i)}));o.push({"no-gutters":t.noGutters,"row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),y.set(s,o)}return e(t.tag,(0,i.ZP)(n,{staticClass:"row",class:o}),r)}})},5234:function(e,t,n){n(9027);var r=n(1050);t.Z=(0,r.Ji)("spacer","div","v-spacer")},5057:function(e,t,n){n.d(t,{Z:function(){return p}});n(560);var r,i=n(4609),s=n(8914),o=n(281),a=n(3276),c=n(1050),u=n(144),l=n(4987);function h(e){return["fas","far","fal","fab","fad","fak"].some((t=>e.includes(t)))}function d(e){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(e)&&/[\dz]$/i.test(e)&&e.length>4}(function(e){e["xSmall"]="12px",e["small"]="16px",e["default"]="24px",e["medium"]="28px",e["large"]="36px",e["xLarge"]="40px"})(r||(r={}));const f=(0,l.Z)(i.Z,s.Z,o.Z,a.Z).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium(){return!1},hasClickListener(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon(){let e="";return this.$slots.default&&(e=this.$slots.default[0].text.trim()),(0,c.RB)(this,e)},getSize(){const e={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},t=(0,c.XP)(e).find((t=>e[t]));return t&&r[t]||(0,c.kb)(this.size)},getDefaultData(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:{"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0,...this.attrs$},on:this.listeners$}},getSvgWrapperData(){const e=this.getSize(),t={...this.getDefaultData(),style:e?{fontSize:e,height:e,width:e}:void 0};return this.applyColors(t),t},applyColors(e){e.class={...e.class,...this.themeClasses},this.setTextColor(this.color,e)},renderFontIcon(e,t){const n=[],r=this.getDefaultData();let i="material-icons";const s=e.indexOf("-"),o=s<=-1;o?n.push(e):(i=e.slice(0,s),h(i)&&(i="")),r.class[i]=!0,r.class[e]=!o;const a=this.getSize();return a&&(r.style={fontSize:a}),this.applyColors(r),t(this.hasClickListener?"button":this.tag,r,n)},renderSvgIcon(e,t){const n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},r=this.getSize();return r&&(n.style={fontSize:r,height:r,width:r}),t(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[t("svg",n,[t("path",{attrs:{d:e}})])])},renderSvgIconComponent(e,t){const n={class:{"v-icon__component":!0}},r=this.getSize();r&&(n.style={fontSize:r,height:r,width:r}),this.applyColors(n);const i=e.component;return n.props=e.props,n.nativeOn=n.on,t(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[t(i,n)])}},render(e){const t=this.getIcon();return"string"===typeof t?d(t)?this.renderSvgIcon(t,e):this.renderFontIcon(t,e):this.renderSvgIconComponent(t,e)}});var p=u.ZP.extend({name:"v-icon",$_wrapperFor:f,functional:!0,render(e,{data:t,children:n}){let r="";return t.domProps&&(r=t.domProps.textContent||t.domProps.innerHTML||r,delete t.domProps.textContent,delete t.domProps.innerHTML),e(f,t,r?[r]:n)}})},3551:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(8574),i=r.Z.extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles(){const{bar:e,top:t,right:n,footer:r,insetFooter:i,bottom:s,left:o}=this.$vuetify.application;return{paddingTop:`${t+e}px`,paddingRight:`${n}px`,paddingBottom:`${r+i+s}px`,paddingLeft:`${o}px`}}},render(e){const t={staticClass:"v-main",style:this.styles,ref:"main"};return e(this.tag,t,[e("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})},8085:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(4609),i=n(8914),s=n(5303),o=n(9196),a=(n(560),n(144)),c=a.ZP.extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses(){const e=[],t="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)e.push("rounded-0");else if("string"===typeof t){const n=t.split(" ");for(const t of n)e.push(`rounded-${t}`)}else t&&e.push("rounded");return e.length>0?{[e.join(" ")]:!0}:{}}}}),u=n(3276),l=n(4987),h=(0,l.Z)(r.Z,i.Z,s.Z,o.Z,c,u.Z).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes(){return{"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped,...this.themeClasses,...this.elevationClasses,...this.roundedClasses}},styles(){return this.measurableStyles}},render(e){const t={class:this.classes,style:this.styles,on:this.listeners$};return e(this.tag,this.setBackgroundColor(this.color,t),this.$slots.default)}})},2925:function(e,t,n){var r=n(8085);t.Z=r.Z},8103:function(e,t,n){n.d(t,{Z:function(){return M}});n(560),n(1719);var r=n(5057),i=r.Z,s=n(8914),o=n(3276),a=n(4987),c=n(1050),u=n(2653),l=(0,a.Z)(o.Z).extend({name:"v-label",functional:!0,props:{absolute:Boolean,color:{type:String,default:"primary"},disabled:Boolean,focused:Boolean,for:String,left:{type:[Number,String],default:0},right:{type:[Number,String],default:"auto"},value:Boolean},render(e,t){const{children:n,listeners:r,props:i,data:a}=t,l=(0,u.ZP)({staticClass:"v-label",class:{"v-label--active":i.value,"v-label--is-disabled":i.disabled,...(0,o.X)(t)},attrs:{for:i.for,"aria-hidden":!i.for},on:r,style:{left:(0,c.kb)(i.left),right:(0,c.kb)(i.right),position:i.absolute?"absolute":"relative"},ref:"label"},a);return e("label",s.Z.options.methods.setTextColor(i.focused&&i.color,l),n)}}),h=l,d=(0,a.Z)(s.Z,o.Z).extend({name:"v-messages",props:{value:{type:Array,default:()=>[]}},methods:{genChildren(){return this.$createElement("transition-group",{staticClass:"v-messages__wrapper",attrs:{name:"message-transition",tag:"div"}},this.value.map(this.genMessage))},genMessage(e,t){return this.$createElement("div",{staticClass:"v-messages__message",key:t},(0,c.z9)(this,"default",{message:e,key:t})||[e])}},render(e){return e("div",this.setTextColor(this.color,{staticClass:"v-messages",class:this.themeClasses}),[this.genChildren()])}}),f=d,p=n(4609),m=n(380),g=n(6596);const v=(0,a.Z)(s.Z,(0,m.f)("form"),o.Z);var y=v.extend({name:"validatable",props:{disabled:{type:Boolean,default:null},error:Boolean,errorCount:{type:[Number,String],default:1},errorMessages:{type:[String,Array],default:()=>[]},messages:{type:[String,Array],default:()=>[]},readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},success:Boolean,successMessages:{type:[String,Array],default:()=>[]},validateOnBlur:Boolean,value:{required:!1}},data(){return{errorBucket:[],hasColor:!1,hasFocused:!1,hasInput:!1,isFocused:!1,isResetting:!1,lazyValue:this.value,valid:!1}},computed:{computedColor(){if(!this.isDisabled)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},hasError(){return this.internalErrorMessages.length>0||this.errorBucket.length>0||this.error},hasSuccess(){return this.internalSuccessMessages.length>0||this.success},externalError(){return this.internalErrorMessages.length>0||this.error},hasMessages(){return this.validationTarget.length>0},hasState(){return!this.isDisabled&&(this.hasSuccess||this.shouldValidate&&this.hasError)},internalErrorMessages(){return this.genInternalMessages(this.errorMessages)},internalMessages(){return this.genInternalMessages(this.messages)},internalSuccessMessages(){return this.genInternalMessages(this.successMessages)},internalValue:{get(){return this.lazyValue},set(e){this.lazyValue=e,this.$emit("input",e)}},isDisabled(){var e;return null!==(e=this.disabled)&&void 0!==e?e:!!this.form&&this.form.disabled},isInteractive(){return!this.isDisabled&&!this.isReadonly},isReadonly(){var e;return null!==(e=this.readonly)&&void 0!==e?e:!!this.form&&this.form.readonly},shouldValidate(){return!!this.externalError||!this.isResetting&&(this.validateOnBlur?this.hasFocused&&!this.isFocused:this.hasInput||this.hasFocused)},validations(){return this.validationTarget.slice(0,Number(this.errorCount))},validationState(){if(!this.isDisabled)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.computedColor:void 0},validationTarget(){return this.internalErrorMessages.length>0?this.internalErrorMessages:this.successMessages&&this.successMessages.length>0?this.internalSuccessMessages:this.messages&&this.messages.length>0?this.internalMessages:this.shouldValidate?this.errorBucket:[]}},watch:{rules:{handler(e,t){(0,c.vZ)(e,t)||this.validate()},deep:!0},internalValue(){this.hasInput=!0,this.validateOnBlur||this.$nextTick(this.validate)},isFocused(e){e||this.isDisabled||(this.hasFocused=!0,this.validateOnBlur&&this.$nextTick(this.validate))},isResetting(){setTimeout((()=>{this.hasInput=!1,this.hasFocused=!1,this.isResetting=!1,this.validate()}),0)},hasError(e){this.shouldValidate&&this.$emit("update:error",e)},value(e){this.lazyValue=e}},beforeMount(){this.validate()},created(){this.form&&this.form.register(this)},beforeDestroy(){this.form&&this.form.unregister(this)},methods:{genInternalMessages(e){return e?Array.isArray(e)?e:[e]:[]},reset(){this.isResetting=!0,this.internalValue=Array.isArray(this.internalValue)?[]:null},resetValidation(){this.isResetting=!0},validate(e=!1,t){const n=[];t=t||this.internalValue,e&&(this.hasInput=this.hasFocused=!0);for(let r=0;r<this.rules.length;r++){const e=this.rules[r],i="function"===typeof e?e(t):e;!1===i||"string"===typeof i?n.push(i||""):"boolean"!==typeof i&&(0,g.N6)(`Rules should return a string or boolean, received '${typeof i}' instead`,this)}return this.errorBucket=n,this.valid=0===n.length,this.valid}}});const w=(0,a.Z)(p.Z,y);var b=w.extend().extend({name:"v-input",inheritAttrs:!1,props:{appendIcon:String,backgroundColor:{type:String,default:""},dense:Boolean,height:[Number,String],hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,id:String,label:String,loading:Boolean,persistentHint:Boolean,prependIcon:String,value:null},data(){return{lazyValue:this.value,hasMouseDown:!1}},computed:{classes(){return{"v-input--has-state":this.hasState,"v-input--hide-details":!this.showDetails,"v-input--is-label-active":this.isLabelActive,"v-input--is-dirty":this.isDirty,"v-input--is-disabled":this.isDisabled,"v-input--is-focused":this.isFocused,"v-input--is-loading":!1!==this.loading&&null!=this.loading,"v-input--is-readonly":this.isReadonly,"v-input--dense":this.dense,"v-input--hide-spin-buttons":this.hideSpinButtons,...this.themeClasses}},computedId(){return this.id||`input-${this._uid}`},hasDetails(){return this.messagesToDisplay.length>0},hasHint(){return!this.hasMessages&&!!this.hint&&(this.persistentHint||this.isFocused)},hasLabel(){return!(!this.$slots.label&&!this.label)},internalValue:{get(){return this.lazyValue},set(e){this.lazyValue=e,this.$emit(this.$_modelEvent,e)}},isDirty(){return!!this.lazyValue},isLabelActive(){return this.isDirty},messagesToDisplay(){return this.hasHint?[this.hint]:this.hasMessages?this.validations.map((e=>{if("string"===typeof e)return e;const t=e(this.internalValue);return"string"===typeof t?t:""})).filter((e=>""!==e)):[]},showDetails(){return!1===this.hideDetails||"auto"===this.hideDetails&&this.hasDetails}},watch:{value(e){this.lazyValue=e}},beforeCreate(){this.$_modelEvent=this.$options.model&&this.$options.model.event||"input"},methods:{genContent(){return[this.genPrependSlot(),this.genControl(),this.genAppendSlot()]},genControl(){return this.$createElement("div",{staticClass:"v-input__control",attrs:{title:this.attrs$.title}},[this.genInputSlot(),this.genMessages()])},genDefaultSlot(){return[this.genLabel(),this.$slots.default]},genIcon(e,t,n={}){var r;const s=this[`${e}Icon`],o=`click:${(0,c.GL)(e)}`,a=!(!this.listeners$[o]&&!t),l={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendOuter:"appendAction",clear:"clear"}[e],h=a&&l?this.$vuetify.lang.t(`$vuetify.input.${l}`,null!==(r=this.label)&&void 0!==r?r:""):void 0,d=(0,u.ZP)({attrs:{"aria-label":h,color:this.validationState,dark:this.dark,disabled:this.isDisabled,light:this.light,tabindex:"clear"===e?-1:void 0},on:a?{click:e=>{e.preventDefault(),e.stopPropagation(),this.$emit(o,e),t&&t(e)},mouseup:e=>{e.preventDefault(),e.stopPropagation()}}:void 0},n);return this.$createElement("div",{staticClass:"v-input__icon",class:e?`v-input__icon--${(0,c.GL)(e)}`:void 0},[this.$createElement(i,d,s)])},genInputSlot(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:(0,c.kb)(this.height)},on:{click:this.onClick,mousedown:this.onMouseDown,mouseup:this.onMouseUp},ref:"input-slot"}),[this.genDefaultSlot()])},genLabel(){return this.hasLabel?this.$createElement(h,{props:{color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:this.hasState,for:this.computedId,light:this.light}},this.$slots.label||this.label):null},genMessages(){return this.showDetails?this.$createElement(f,{props:{color:this.hasHint?"":this.validationState,dark:this.dark,light:this.light,value:this.messagesToDisplay},attrs:{role:this.hasMessages?"alert":null},scopedSlots:{default:e=>(0,c.z9)(this,"message",e)}}):null},genSlot(e,t,n){if(!n.length)return null;const r=`${e}-${t}`;return this.$createElement("div",{staticClass:`v-input__${r}`,ref:r},n)},genPrependSlot(){const e=[];return this.$slots.prepend?e.push(this.$slots.prepend):this.prependIcon&&e.push(this.genIcon("prepend")),this.genSlot("prepend","outer",e)},genAppendSlot(){const e=[];return this.$slots.append?e.push(this.$slots.append):this.appendIcon&&e.push(this.genIcon("append")),this.genSlot("append","outer",e)},onClick(e){this.$emit("click",e)},onMouseDown(e){this.hasMouseDown=!0,this.$emit("mousedown",e)},onMouseUp(e){this.hasMouseDown=!1,this.$emit("mouseup",e)}},render(e){return e("div",this.setTextColor(this.validationState,{staticClass:"v-input",class:this.classes}),this.genContent())}}),_=b,I=(0,a.Z)(o.Z).extend({name:"v-counter",functional:!0,props:{value:{type:[Number,String],default:""},max:[Number,String]},render(e,t){const{props:n}=t,r=parseInt(n.max,10),i=parseInt(n.value,10),s=r?`${i} / ${r}`:String(n.value),a=r&&i>r;return e("div",{staticClass:"v-counter",class:{"error--text":a,...(0,o.X)(t)}},s)}}),S=I,E=n(1558),T=n(144);function C(e){return T.ZP.extend({name:"intersectable",data:()=>({isIntersecting:!1}),mounted(){E.Z.inserted(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},destroyed(){E.Z.unbind(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},methods:{onObserve(t,n,r){if(this.isIntersecting=r,r)for(let i=0,s=e.onVisible.length;i<s;i++){const t=this[e.onVisible[i]];"function"!==typeof t?(0,g.Kd)(e.onVisible[i]+" method is not available on the instance but referenced in intersectable mixin options"):t()}}}})}var k=n(9246);function x(e,t,n){const r=t.value,i=t.options||{passive:!0};window.addEventListener("resize",r,i),e._onResize=Object(e._onResize),e._onResize[n.context._uid]={callback:r,options:i},t.modifiers&&t.modifiers.quiet||r()}function A(e,t,n){var r;if(!(null===(r=e._onResize)||void 0===r?void 0:r[n.context._uid]))return;const{callback:i,options:s}=e._onResize[n.context._uid];window.removeEventListener("resize",i,s),delete e._onResize[n.context._uid]}const O={inserted:x,unbind:A};var N=O,D=n(3176),L=n(6044);const P=(0,a.Z)(_,C({onVisible:["onResize","tryAutofocus"]}),k.Z),R=["color","file","time","date","datetime-local","week","month"];var M=P.extend().extend({name:"v-text-field",directives:{resize:N,ripple:D.Z},inheritAttrs:!1,props:{appendOuterIcon:String,autofocus:Boolean,clearable:Boolean,clearIcon:{type:String,default:"$clear"},counter:[Boolean,Number,String],counterValue:Function,filled:Boolean,flat:Boolean,fullWidth:Boolean,label:String,outlined:Boolean,placeholder:String,prefix:String,prependInnerIcon:String,persistentPlaceholder:Boolean,reverse:Boolean,rounded:Boolean,shaped:Boolean,singleLine:Boolean,solo:Boolean,soloInverted:Boolean,suffix:String,type:{type:String,default:"text"}},data:()=>({badInput:!1,labelWidth:0,prefixWidth:0,prependWidth:0,initialValue:null,isBooted:!1,isClearing:!1}),computed:{classes(){return{..._.options.computed.classes.call(this),"v-text-field":!0,"v-text-field--full-width":this.fullWidth,"v-text-field--prefix":this.prefix,"v-text-field--single-line":this.isSingle,"v-text-field--solo":this.isSolo,"v-text-field--solo-inverted":this.soloInverted,"v-text-field--solo-flat":this.flat,"v-text-field--filled":this.filled,"v-text-field--is-booted":this.isBooted,"v-text-field--enclosed":this.isEnclosed,"v-text-field--reverse":this.reverse,"v-text-field--outlined":this.outlined,"v-text-field--placeholder":this.placeholder,"v-text-field--rounded":this.rounded,"v-text-field--shaped":this.shaped}},computedColor(){const e=y.options.computed.computedColor.call(this);return this.soloInverted&&this.isFocused?this.color||"primary":e},computedCounterValue(){return"function"===typeof this.counterValue?this.counterValue(this.internalValue):[...(this.internalValue||"").toString()].length},hasCounter(){return!1!==this.counter&&null!=this.counter},hasDetails(){return _.options.computed.hasDetails.call(this)||this.hasCounter},internalValue:{get(){return this.lazyValue},set(e){this.lazyValue=e,this.$emit("input",this.lazyValue)}},isDirty(){var e;return(null===(e=this.lazyValue)||void 0===e?void 0:e.toString().length)>0||this.badInput},isEnclosed(){return this.filled||this.isSolo||this.outlined},isLabelActive(){return this.isDirty||R.includes(this.type)},isSingle(){return this.isSolo||this.singleLine||this.fullWidth||this.filled&&!this.hasLabel},isSolo(){return this.solo||this.soloInverted},labelPosition(){let e=this.prefix&&!this.labelValue?this.prefixWidth:0;return this.labelValue&&this.prependWidth&&(e-=this.prependWidth),this.$vuetify.rtl===this.reverse?{left:e,right:"auto"}:{left:"auto",right:e}},showLabel(){return this.hasLabel&&!(this.isSingle&&this.labelValue)},labelValue(){return this.isFocused||this.isLabelActive||this.persistentPlaceholder}},watch:{outlined:"setLabelWidth",label(){this.$nextTick(this.setLabelWidth)},prefix(){this.$nextTick(this.setPrefixWidth)},isFocused:"updateValue",value(e){this.lazyValue=e}},created(){this.$attrs.hasOwnProperty("box")&&(0,g.fK)("box","filled",this),this.$attrs.hasOwnProperty("browser-autocomplete")&&(0,g.fK)("browser-autocomplete","autocomplete",this),this.shaped&&!(this.filled||this.outlined||this.isSolo)&&(0,g.Kd)("shaped should be used with either filled or outlined",this)},mounted(){this.$watch((()=>this.labelValue),this.setLabelWidth),this.autofocus&&this.tryAutofocus(),requestAnimationFrame((()=>{this.isBooted=!0,requestAnimationFrame((()=>{this.isIntersecting||this.onResize()}))}))},methods:{focus(){this.onFocus()},blur(e){window.requestAnimationFrame((()=>{this.$refs.input&&this.$refs.input.blur()}))},clearableCallback(){this.$refs.input&&this.$refs.input.focus(),this.$nextTick((()=>this.internalValue=null))},genAppendSlot(){const e=[];return this.$slots["append-outer"]?e.push(this.$slots["append-outer"]):this.appendOuterIcon&&e.push(this.genIcon("appendOuter")),this.genSlot("append","outer",e)},genPrependInnerSlot(){const e=[];return this.$slots["prepend-inner"]?e.push(this.$slots["prepend-inner"]):this.prependInnerIcon&&e.push(this.genIcon("prependInner")),this.genSlot("prepend","inner",e)},genIconSlot(){const e=[];return this.$slots.append?e.push(this.$slots.append):this.appendIcon&&e.push(this.genIcon("append")),this.genSlot("append","inner",e)},genInputSlot(){const e=_.options.methods.genInputSlot.call(this),t=this.genPrependInnerSlot();return t&&(e.children=e.children||[],e.children.unshift(t)),e},genClearIcon(){return this.clearable?this.isDirty?this.genSlot("append","inner",[this.genIcon("clear",this.clearableCallback)]):this.genSlot("append","inner",[this.$createElement("div")]):null},genCounter(){var e,t,n;if(!this.hasCounter)return null;const r=!0===this.counter?this.attrs$.maxlength:this.counter,i={dark:this.dark,light:this.light,max:r,value:this.computedCounterValue};return null!==(n=null===(t=(e=this.$scopedSlots).counter)||void 0===t?void 0:t.call(e,{props:i}))&&void 0!==n?n:this.$createElement(S,{props:i})},genControl(){return _.options.methods.genControl.call(this)},genDefaultSlot(){return[this.genFieldset(),this.genTextFieldSlot(),this.genClearIcon(),this.genIconSlot(),this.genProgress()]},genFieldset(){return this.outlined?this.$createElement("fieldset",{attrs:{"aria-hidden":!0}},[this.genLegend()]):null},genLabel(){if(!this.showLabel)return null;const e={props:{absolute:!0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:!this.isSingle&&(this.isFocused||!!this.validationState),for:this.computedId,left:this.labelPosition.left,light:this.light,right:this.labelPosition.right,value:this.labelValue}};return this.$createElement(h,e,this.$slots.label||this.label)},genLegend(){const e=this.singleLine||!this.labelValue&&!this.isDirty?0:this.labelWidth,t=this.$createElement("span",{domProps:{innerHTML:"&#8203;"},staticClass:"notranslate"});return this.$createElement("legend",{style:{width:this.isSingle?void 0:(0,c.kb)(e)}},[t])},genInput(){const e=Object.assign({},this.listeners$);delete e.change;const{title:t,...n}=this.attrs$;return this.$createElement("input",{style:{},domProps:{value:"number"===this.type&&Object.is(this.lazyValue,-0)?"-0":this.lazyValue},attrs:{...n,autofocus:this.autofocus,disabled:this.isDisabled,id:this.computedId,placeholder:this.persistentPlaceholder||this.isFocused||!this.hasLabel?this.placeholder:void 0,readonly:this.isReadonly,type:this.type},on:Object.assign(e,{blur:this.onBlur,input:this.onInput,focus:this.onFocus,keydown:this.onKeyDown}),ref:"input",directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]})},genMessages(){if(!this.showDetails)return null;const e=_.options.methods.genMessages.call(this),t=this.genCounter();return this.$createElement("div",{staticClass:"v-text-field__details"},[e,t])},genTextFieldSlot(){return this.$createElement("div",{staticClass:"v-text-field__slot"},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,this.genInput(),this.suffix?this.genAffix("suffix"):null])},genAffix(e){return this.$createElement("div",{class:`v-text-field__${e}`,ref:e},this[e])},onBlur(e){this.isFocused=!1,e&&this.$nextTick((()=>this.$emit("blur",e)))},onClick(){this.isFocused||this.isDisabled||!this.$refs.input||this.$refs.input.focus()},onFocus(e){if(!this.$refs.input)return;const t=(0,L.e)(this.$el);return t?t.activeElement!==this.$refs.input?this.$refs.input.focus():void(this.isFocused||(this.isFocused=!0,e&&this.$emit("focus",e))):void 0},onInput(e){const t=e.target;this.internalValue=t.value,this.badInput=t.validity&&t.validity.badInput},onKeyDown(e){e.keyCode===c.Do.enter&&this.lazyValue!==this.initialValue&&(this.initialValue=this.lazyValue,this.$emit("change",this.initialValue)),this.$emit("keydown",e)},onMouseDown(e){e.target!==this.$refs.input&&(e.preventDefault(),e.stopPropagation()),_.options.methods.onMouseDown.call(this,e)},onMouseUp(e){this.hasMouseDown&&this.focus(),_.options.methods.onMouseUp.call(this,e)},setLabelWidth(){this.outlined&&(this.labelWidth=this.$refs.label?Math.min(.75*this.$refs.label.scrollWidth+6,this.$el.offsetWidth-24):0)},setPrefixWidth(){this.$refs.prefix&&(this.prefixWidth=this.$refs.prefix.offsetWidth)},setPrependWidth(){this.outlined&&this.$refs["prepend-inner"]&&(this.prependWidth=this.$refs["prepend-inner"].offsetWidth)},tryAutofocus(){if(!this.autofocus||"undefined"===typeof document||!this.$refs.input)return!1;const e=(0,L.e)(this.$el);return!(!e||e.activeElement===this.$refs.input)&&(this.$refs.input.focus(),!0)},updateValue(e){this.hasColor=e,e?this.initialValue=this.lazyValue:this.initialValue!==this.lazyValue&&this.$emit("change",this.lazyValue)},onResize(){this.setLabelWidth(),this.setPrefixWidth(),this.setPrependWidth()}}})},1558:function(e,t,n){function r(e,t,n){if("undefined"===typeof window||!("IntersectionObserver"in window))return;const r=t.modifiers||{},s=t.value,{handler:o,options:a}="object"===typeof s?s:{handler:s,options:{}},c=new IntersectionObserver(((s=[],a)=>{var c;const u=null===(c=e._observe)||void 0===c?void 0:c[n.context._uid];if(!u)return;const l=s.some((e=>e.isIntersecting));!o||r.quiet&&!u.init||r.once&&!l&&!u.init||o(s,a,l),l&&r.once?i(e,t,n):u.init=!0}),a);e._observe=Object(e._observe),e._observe[n.context._uid]={init:!1,observer:c},c.observe(e)}function i(e,t,n){var r;const i=null===(r=e._observe)||void 0===r?void 0:r[n.context._uid];i&&(i.observer.unobserve(e),delete e._observe[n.context._uid])}const s={inserted:r,unbind:i};t.Z=s},3176:function(e,t,n){n.d(t,{Z:function(){return E}});var r=n(1050);const i=80;function s(e,t){e.style.transform=t,e.style.webkitTransform=t}function o(e){return"TouchEvent"===e.constructor.name}function a(e){return"KeyboardEvent"===e.constructor.name}const c=(e,t,n={})=>{let r=0,i=0;if(!a(e)){const n=t.getBoundingClientRect(),s=o(e)?e.touches[e.touches.length-1]:e;r=s.clientX-n.left,i=s.clientY-n.top}let s=0,c=.3;t._ripple&&t._ripple.circle?(c=.15,s=t.clientWidth/2,s=n.center?s:s+Math.sqrt((r-s)**2+(i-s)**2)/4):s=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const u=(t.clientWidth-2*s)/2+"px",l=(t.clientHeight-2*s)/2+"px",h=n.center?u:r-s+"px",d=n.center?l:i-s+"px";return{radius:s,scale:c,x:h,y:d,centerX:u,centerY:l}},u={show(e,t,n={}){if(!t._ripple||!t._ripple.enabled)return;const r=document.createElement("span"),i=document.createElement("span");r.appendChild(i),r.className="v-ripple__container",n.class&&(r.className+=` ${n.class}`);const{radius:o,scale:a,x:u,y:l,centerX:h,centerY:d}=c(e,t,n),f=2*o+"px";i.className="v-ripple__animation",i.style.width=f,i.style.height=f,t.appendChild(r);const p=window.getComputedStyle(t);p&&"static"===p.position&&(t.style.position="relative",t.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),s(i,`translate(${u}, ${l}) scale3d(${a},${a},${a})`),i.dataset.activated=String(performance.now()),setTimeout((()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),s(i,`translate(${h}, ${d}) scale3d(1,1,1)`)}),0)},hide(e){if(!e||!e._ripple||!e._ripple.enabled)return;const t=e.getElementsByClassName("v-ripple__animation");if(0===t.length)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const r=performance.now()-Number(n.dataset.activated),i=Math.max(250-r,0);setTimeout((()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout((()=>{var t;const r=e.getElementsByClassName("v-ripple__animation");1===r.length&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),(null===(t=n.parentNode)||void 0===t?void 0:t.parentNode)===e&&e.removeChild(n.parentNode)}),300)}),i)}};function l(e){return"undefined"===typeof e||!!e}function h(e){const t={},n=e.currentTarget;if(n&&n._ripple&&!n._ripple.touched&&!e.rippleStop){if(e.rippleStop=!0,o(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||a(e),n._ripple.class&&(t.class=n._ripple.class),o(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{u.show(e,n,t)},n._ripple.showTimer=window.setTimeout((()=>{n&&n._ripple&&n._ripple.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)}),i)}else u.show(e,n,t)}}function d(e){const t=e.currentTarget;if(t&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),"touchend"===e.type&&t._ripple.showTimerCommit)return t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,void(t._ripple.showTimer=setTimeout((()=>{d(e)})));window.setTimeout((()=>{t._ripple&&(t._ripple.touched=!1)})),u.hide(t)}}function f(e){const t=e.currentTarget;t&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let p=!1;function m(e){p||e.keyCode!==r.Do.enter&&e.keyCode!==r.Do.space||(p=!0,h(e))}function g(e){p=!1,d(e)}function v(e){!0===p&&(p=!1,d(e))}function y(e,t,n){const r=l(t.value);r||u.hide(e),e._ripple=e._ripple||{},e._ripple.enabled=r;const i=t.value||{};i.center&&(e._ripple.centered=!0),i.class&&(e._ripple.class=t.value.class),i.circle&&(e._ripple.circle=i.circle),r&&!n?(e.addEventListener("touchstart",h,{passive:!0}),e.addEventListener("touchend",d,{passive:!0}),e.addEventListener("touchmove",f,{passive:!0}),e.addEventListener("touchcancel",d),e.addEventListener("mousedown",h),e.addEventListener("mouseup",d),e.addEventListener("mouseleave",d),e.addEventListener("keydown",m),e.addEventListener("keyup",g),e.addEventListener("blur",v),e.addEventListener("dragstart",d,{passive:!0})):!r&&n&&w(e)}function w(e){e.removeEventListener("mousedown",h),e.removeEventListener("touchstart",h),e.removeEventListener("touchend",d),e.removeEventListener("touchmove",f),e.removeEventListener("touchcancel",d),e.removeEventListener("mouseup",d),e.removeEventListener("mouseleave",d),e.removeEventListener("keydown",m),e.removeEventListener("keyup",g),e.removeEventListener("dragstart",d),e.removeEventListener("blur",v)}function b(e,t,n){y(e,t,!1)}function _(e){delete e._ripple,w(e)}function I(e,t){if(t.value===t.oldValue)return;const n=l(t.oldValue);y(e,t,n)}const S={bind:b,unbind:_,update:I};var E=S},3806:function(e,t,n){n.d(t,{Z:function(){return we}});var r={};n.r(r),n.d(r,{easeInCubic:function(){return y},easeInOutCubic:function(){return b},easeInOutQuad:function(){return v},easeInOutQuart:function(){return S},easeInOutQuint:function(){return C},easeInQuad:function(){return m},easeInQuart:function(){return _},easeInQuint:function(){return E},easeOutCubic:function(){return w},easeOutQuad:function(){return g},easeOutQuart:function(){return I},easeOutQuint:function(){return T},linear:function(){return p}});n(560);var i=n(144),s=n(6596);function o(e,t={}){if(o.installed)return;o.installed=!0,i.ZP!==e&&(0,s.N6)("Multiple instances of Vue detected\nSee https://github.com/vuetifyjs/vuetify/issues/4068\n\nIf you're seeing \"$attrs is readonly\", it's caused by this");const n=t.components||{},r=t.directives||{};for(const i in r){const t=r[i];e.directive(i,t)}(function t(n){if(n){for(const r in n){const i=n[r];i&&!t(i.$_vuetify_subcomponents)&&e.component(r,i)}return!0}return!1})(n),e.$_vuetify_installed||(e.$_vuetify_installed=!0,e.mixin({beforeCreate(){const t=this.$options;t.vuetify?(t.vuetify.init(this,this.$ssrContext),this.$vuetify=e.observable(t.vuetify.framework)):this.$vuetify=t.parent&&t.parent.$vuetify||this},beforeMount(){this.$options.vuetify&&this.$el&&this.$el.hasAttribute("data-server-rendered")&&(this.$vuetify.isHydrating=!0,this.$vuetify.breakpoint.update(!0))},mounted(){this.$options.vuetify&&this.$vuetify.isHydrating&&(this.$vuetify.isHydrating=!1,this.$vuetify.breakpoint.update())}}))}var a={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{wrapper:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Goto Page {0}",currentPage:"Current Page, Page {0}"}},rating:{ariaLabel:{icon:"Rating {0} of {1}"}},loading:"Loading..."};const c={breakpoint:{mobileBreakpoint:1264,scrollBarWidth:16,thresholds:{xs:600,sm:960,md:1280,lg:1920}},icons:{iconfont:"mdi",values:{}},lang:{current:"en",locales:{en:a},t:void 0},rtl:!1,theme:{dark:!1,default:"light",disable:!1,options:{cspNonce:void 0,customProperties:void 0,minifyTheme:void 0,themeCache:void 0,variations:!0},themes:{light:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},dark:{primary:"#2196F3",secondary:"#424242",accent:"#FF4081",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"}}}};var u=n(1050);class l{constructor(){this.framework={}}init(e,t){}}class h extends l{constructor(e,t){super();const n=(0,u.Ee)({},c),{userPreset:r}=t,{preset:i={},...o}=r;null!=i.preset&&(0,s.Kd)("Global presets do not support the **preset** option, it can be safely omitted"),t.preset=(0,u.Ee)((0,u.Ee)(n,i),o)}}h.property="presets";class d extends l{constructor(){super(...arguments),this.bar=0,this.top=0,this.left=0,this.insetFooter=0,this.right=0,this.bottom=0,this.footer=0,this.application={bar:{},top:{},left:{},insetFooter:{},right:{},bottom:{},footer:{}}}register(e,t,n){this.application[t][e]=n,this.update(t)}unregister(e,t){null!=this.application[t][e]&&(delete this.application[t][e],this.update(t))}update(e){this[e]=Object.values(this.application[e]).reduce(((e,t)=>e+t),0)}}d.property="application";class f extends l{constructor(e){super(),this.xs=!1,this.sm=!1,this.md=!1,this.lg=!1,this.xl=!1,this.xsOnly=!1,this.smOnly=!1,this.smAndDown=!1,this.smAndUp=!1,this.mdOnly=!1,this.mdAndDown=!1,this.mdAndUp=!1,this.lgOnly=!1,this.lgAndDown=!1,this.lgAndUp=!1,this.xlOnly=!1,this.name="xs",this.height=0,this.width=0,this.mobile=!0,this.resizeTimeout=0;const{mobileBreakpoint:t,scrollBarWidth:n,thresholds:r}=e[f.property];this.mobileBreakpoint=t,this.scrollBarWidth=n,this.thresholds=r}init(){this.update(),"undefined"!==typeof window&&window.addEventListener("resize",this.onResize.bind(this),{passive:!0})}update(e=!1){const t=e?0:this.getClientHeight(),n=e?0:this.getClientWidth(),r=n<this.thresholds.xs,i=n<this.thresholds.sm&&!r,s=n<this.thresholds.md-this.scrollBarWidth&&!(i||r),o=n<this.thresholds.lg-this.scrollBarWidth&&!(s||i||r),a=n>=this.thresholds.lg-this.scrollBarWidth;switch(this.height=t,this.width=n,this.xs=r,this.sm=i,this.md=s,this.lg=o,this.xl=a,this.xsOnly=r,this.smOnly=i,this.smAndDown=(r||i)&&!(s||o||a),this.smAndUp=!r&&(i||s||o||a),this.mdOnly=s,this.mdAndDown=(r||i||s)&&!(o||a),this.mdAndUp=!(r||i)&&(s||o||a),this.lgOnly=o,this.lgAndDown=(r||i||s||o)&&!a,this.lgAndUp=!(r||i||s)&&(o||a),this.xlOnly=a,!0){case r:this.name="xs";break;case i:this.name="sm";break;case s:this.name="md";break;case o:this.name="lg";break;default:this.name="xl";break}if("number"===typeof this.mobileBreakpoint)return void(this.mobile=n<parseInt(this.mobileBreakpoint,10));const c={xs:0,sm:1,md:2,lg:3,xl:4},u=c[this.name],l=c[this.mobileBreakpoint];this.mobile=u<=l}onResize(){clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.update.bind(this),200)}getClientWidth(){return"undefined"===typeof document?0:Math.max(document.documentElement.clientWidth,window.innerWidth||0)}getClientHeight(){return"undefined"===typeof document?0:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}}f.property="breakpoint";const p=e=>e,m=e=>e**2,g=e=>e*(2-e),v=e=>e<.5?2*e**2:(4-2*e)*e-1,y=e=>e**3,w=e=>--e**3+1,b=e=>e<.5?4*e**3:(e-1)*(2*e-2)*(2*e-2)+1,_=e=>e**4,I=e=>1- --e**4,S=e=>e<.5?8*e*e*e*e:1-8*--e*e*e*e,E=e=>e**5,T=e=>1+--e**5,C=e=>e<.5?16*e**5:1+16*--e**5;function k(e){if("number"===typeof e)return e;let t=O(e);if(!t)throw"string"===typeof e?new Error(`Target element "${e}" not found.`):new TypeError(`Target must be a Number/Selector/HTMLElement/VueComponent, received ${A(e)} instead.`);let n=0;while(t)n+=t.offsetTop,t=t.offsetParent;return n}function x(e){const t=O(e);if(t)return t;throw"string"===typeof e?new Error(`Container element "${e}" not found.`):new TypeError(`Container must be a Selector/HTMLElement/VueComponent, received ${A(e)} instead.`)}function A(e){return null==e?e:e.constructor.name}function O(e){return"string"===typeof e?document.querySelector(e):e&&e._isVue?e.$el:e instanceof HTMLElement?e:null}function N(e,t={}){const n={container:document.scrollingElement||document.body||document.documentElement,duration:500,offset:0,easing:"easeInOutCubic",appOffset:!0,...t},i=x(n.container);if(n.appOffset&&N.framework.application){const e=i.classList.contains("v-navigation-drawer"),t=i.classList.contains("v-navigation-drawer--clipped"),{bar:r,top:s}=N.framework.application;n.offset+=r,e&&!t||(n.offset+=s)}const s=performance.now();let o;o="number"===typeof e?k(e)-n.offset:k(e)-k(i)-n.offset;const a=i.scrollTop;if(o===a)return Promise.resolve(o);const c="function"===typeof n.easing?n.easing:r[n.easing];if(!c)throw new TypeError(`Easing function "${n.easing}" not found.`);return new Promise((e=>requestAnimationFrame((function t(r){const u=r-s,l=Math.abs(n.duration?Math.min(u/n.duration,1):1);i.scrollTop=Math.floor(a+(o-a)*c(l));const h=i===document.body?document.documentElement.clientHeight:i.clientHeight,d=h+i.scrollTop>=i.scrollHeight;if(1===l||o>i.scrollTop&&d)return e(o);requestAnimationFrame(t)}))))}N.framework={},N.init=()=>{};class D extends l{constructor(){return super(),N}}D.property="goTo";const L={complete:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",cancel:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",close:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",delete:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",clear:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",success:"M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z",info:"M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2ZM13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",warning:"M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",error:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",prev:"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",next:"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",checkboxOn:"M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",checkboxOff:"M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z",checkboxIndeterminate:"M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",delimiter:"M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",sort:"M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z",expand:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",menu:"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",subgroup:"M7,10L12,15L17,10H7Z",dropdown:"M7,10L12,15L17,10H7Z",radioOn:"M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z",radioOff:"M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",edit:"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",ratingEmpty:"M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",ratingFull:"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z",ratingHalf:"M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",loading:"M19,8L15,12H18C18,15.31 15.31,18 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20C16.42,20 20,16.42 20,12H23M6,12C6,8.69 8.69,6 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4C7.58,4 4,7.58 4,12H1L5,16L9,12",first:"M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z",last:"M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z",unfold:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z",file:"M16.5,6V17.5C16.5,19.71 14.71,21.5 12.5,21.5C10.29,21.5 8.5,19.71 8.5,17.5V5C8.5,3.62 9.62,2.5 11,2.5C12.38,2.5 13.5,3.62 13.5,5V15.5C13.5,16.05 13.05,16.5 12.5,16.5C11.95,16.5 11.5,16.05 11.5,15.5V6H10V15.5C10,16.88 11.12,18 12.5,18C13.88,18 15,16.88 15,15.5V5C15,2.79 13.21,1 11,1C8.79,1 7,2.79 7,5V17.5C7,20.54 9.46,23 12.5,23C15.54,23 18,20.54 18,17.5V6H16.5Z",plus:"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",minus:"M19,13H5V11H19V13Z"};var P=L;const R={complete:"check",cancel:"cancel",close:"close",delete:"cancel",clear:"clear",success:"check_circle",info:"info",warning:"priority_high",error:"warning",prev:"chevron_left",next:"chevron_right",checkboxOn:"check_box",checkboxOff:"check_box_outline_blank",checkboxIndeterminate:"indeterminate_check_box",delimiter:"fiber_manual_record",sort:"arrow_upward",expand:"keyboard_arrow_down",menu:"menu",subgroup:"arrow_drop_down",dropdown:"arrow_drop_down",radioOn:"radio_button_checked",radioOff:"radio_button_unchecked",edit:"edit",ratingEmpty:"star_border",ratingFull:"star",ratingHalf:"star_half",loading:"cached",first:"first_page",last:"last_page",unfold:"unfold_more",file:"attach_file",plus:"add",minus:"remove"};var M=R;const $={complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-exclamation",error:"mdi-alert",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sort:"mdi-arrow-up",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"};var F=$;const V={complete:"fas fa-check",cancel:"fas fa-times-circle",close:"fas fa-times",delete:"fas fa-times-circle",clear:"fas fa-times-circle",success:"fas fa-check-circle",info:"fas fa-info-circle",warning:"fas fa-exclamation-circle",error:"fas fa-exclamation-triangle",prev:"fas fa-chevron-left",next:"fas fa-chevron-right",checkboxOn:"fas fa-check-square",checkboxOff:"far fa-square",checkboxIndeterminate:"fas fa-minus-square",delimiter:"fas fa-circle",sort:"fas fa-sort-up",expand:"fas fa-chevron-down",menu:"fas fa-bars",subgroup:"fas fa-caret-down",dropdown:"fas fa-caret-down",radioOn:"far fa-dot-circle",radioOff:"far fa-circle",edit:"fas fa-edit",ratingEmpty:"far fa-star",ratingFull:"fas fa-star",ratingHalf:"fas fa-star-half",loading:"fas fa-sync",first:"fas fa-step-backward",last:"fas fa-step-forward",unfold:"fas fa-arrows-alt-v",file:"fas fa-paperclip",plus:"fas fa-plus",minus:"fas fa-minus"};var B=V;const j={complete:"fa fa-check",cancel:"fa fa-times-circle",close:"fa fa-times",delete:"fa fa-times-circle",clear:"fa fa-times-circle",success:"fa fa-check-circle",info:"fa fa-info-circle",warning:"fa fa-exclamation",error:"fa fa-exclamation-triangle",prev:"fa fa-chevron-left",next:"fa fa-chevron-right",checkboxOn:"fa fa-check-square",checkboxOff:"fa fa-square-o",checkboxIndeterminate:"fa fa-minus-square",delimiter:"fa fa-circle",sort:"fa fa-sort-up",expand:"fa fa-chevron-down",menu:"fa fa-bars",subgroup:"fa fa-caret-down",dropdown:"fa fa-caret-down",radioOn:"fa fa-dot-circle-o",radioOff:"fa fa-circle-o",edit:"fa fa-pencil",ratingEmpty:"fa fa-star-o",ratingFull:"fa fa-star",ratingHalf:"fa fa-star-half-o",loading:"fa fa-refresh",first:"fa fa-step-backward",last:"fa fa-step-forward",unfold:"fa fa-angle-double-down",file:"fa fa-paperclip",plus:"fa fa-plus",minus:"fa fa-minus"};var U=j;function z(e,t){const n={};for(const r in t)n[r]={component:e,props:{icon:t[r].split(" fa-")}};return n}var q=z("font-awesome-icon",B),H=Object.freeze({mdiSvg:P,md:M,mdi:F,fa:B,fa4:U,faSvg:q});class G extends l{constructor(e){super();const{iconfont:t,values:n,component:r}=e[G.property];this.component=r,this.iconfont=t,this.values=(0,u.Ee)(H[t],n)}}G.property="icons";const K="$vuetify.",W=Symbol("Lang fallback");function Z(e,t,n=!1,r){const i=t.replace(K,"");let o=(0,u.vO)(e,i,W);return o===W&&(n?((0,s.N6)(`Translation key "${i}" not found in fallback`),o=t):((0,s.Kd)(`Translation key "${i}" not found, falling back to default`),o=Z(r,t,!0,r))),o}class Q extends l{constructor(e){super(),this.defaultLocale="en";const{current:t,locales:n,t:r}=e[Q.property];this.current=t,this.locales=n,this.translator=r||this.defaultTranslator}currentLocale(e){const t=this.locales[this.current],n=this.locales[this.defaultLocale];return Z(t,e,!1,n)}t(e,...t){return e.startsWith(K)?this.translator(e,...t):this.replace(e,t)}defaultTranslator(e,...t){return this.replace(this.currentLocale(e),t)}replace(e,t){return e.replace(/\{(\d+)\}/g,((e,n)=>String(t[+n])))}}Q.property="lang";var J=n(8604);const Y=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],X=e=>e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055,ee=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],te=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function ne(e){const t=Array(3),n=X,r=Y;for(let i=0;i<3;++i)t[i]=Math.round(255*(0,u.uZ)(n(r[i][0]*e[0]+r[i][1]*e[1]+r[i][2]*e[2])));return(t[0]<<16)+(t[1]<<8)+(t[2]<<0)}function re(e){const t=[0,0,0],n=te,r=ee,i=n((e>>16&255)/255),s=n((e>>8&255)/255),o=n((e>>0&255)/255);for(let a=0;a<3;++a)t[a]=r[a][0]*i+r[a][1]*s+r[a][2]*o;return t}const ie=.20689655172413793,se=e=>e>ie**3?Math.cbrt(e):e/(3*ie**2)+4/29,oe=e=>e>ie?e**3:3*ie**2*(e-4/29);function ae(e){const t=se,n=t(e[1]);return[116*n-16,500*(t(e[0]/.95047)-n),200*(n-t(e[2]/1.08883))]}function ce(e){const t=oe,n=(e[0]+16)/116;return[.95047*t(n+e[1]/500),t(n),1.08883*t(n-e[2]/200)]}function ue(e,t=!1,n=!0){const{anchor:r,...i}=e,s=Object.keys(i),o={};for(let a=0;a<s.length;++a){const r=s[a],i=e[r];null!=i&&(n?t?("base"===r||r.startsWith("lighten")||r.startsWith("darken"))&&(o[r]=(0,J.hq)(i)):o[r]="object"===typeof i?ue(i,!0,n):me(r,(0,J.jx)(i)):o[r]={base:(0,J.I4)((0,J.jx)(i))})}return t||(o.anchor=r||o.base||o.primary.base),o}const le=(e,t)=>`\n.v-application .${e} {\n  background-color: ${t} !important;\n  border-color: ${t} !important;\n}\n.v-application .${e}--text {\n  color: ${t} !important;\n  caret-color: ${t} !important;\n}`,he=(e,t,n)=>{const[r,i]=t.split(/(\d)/,2);return`\n.v-application .${e}.${r}-${i} {\n  background-color: ${n} !important;\n  border-color: ${n} !important;\n}\n.v-application .${e}--text.text--${r}-${i} {\n  color: ${n} !important;\n  caret-color: ${n} !important;\n}`},de=(e,t="base")=>`--v-${e}-${t}`,fe=(e,t="base")=>`var(${de(e,t)})`;function pe(e,t=!1){const{anchor:n,...r}=e,i=Object.keys(r);if(!i.length)return"";let s="",o="";const a=t?fe("anchor"):n;o+=`.v-application a { color: ${a}; }`,t&&(s+=`  ${de("anchor")}: ${n};\n`);for(let c=0;c<i.length;++c){const n=i[c],r=e[n];o+=le(n,t?fe(n):r.base),t&&(s+=`  ${de(n)}: ${r.base};\n`);const a=(0,u.XP)(r);for(let e=0;e<a.length;++e){const i=a[e],c=r[i];"base"!==i&&(o+=he(n,i,t?fe(n,i):c),t&&(s+=`  ${de(n,i)}: ${c};\n`))}}return t&&(s=`:root {\n${s}}\n\n`),s+o}function me(e,t){const n={base:(0,J.I4)(t)};for(let r=5;r>0;--r)n[`lighten${r}`]=(0,J.I4)(ge(t,r));for(let r=1;r<=4;++r)n[`darken${r}`]=(0,J.I4)(ve(t,r));return n}function ge(e,t){const n=ae(re(e));return n[0]=n[0]+10*t,ne(ce(n))}function ve(e,t){const n=ae(re(e));return n[0]=n[0]-10*t,ne(ce(n))}class ye extends l{constructor(e){super(),this.disabled=!1,this.isDark=null,this.unwatch=null,this.vueMeta=null;const{dark:t,disable:n,options:r,themes:i}=e[ye.property];this.dark=Boolean(t),this.defaults=this.themes=i,this.options=r,n?this.disabled=!0:this.themes={dark:this.fillVariant(i.dark,!0),light:this.fillVariant(i.light,!1)}}set css(e){this.vueMeta?this.isVueMeta23&&this.applyVueMeta23():this.checkOrCreateStyleElement()&&(this.styleEl.innerHTML=e)}set dark(e){const t=this.isDark;this.isDark=e,null!=t&&this.applyTheme()}get dark(){return Boolean(this.isDark)}applyTheme(){if(this.disabled)return this.clearCss();this.css=this.generatedStyles}clearCss(){this.css=""}init(e,t){this.disabled||(e.$meta?this.initVueMeta(e):t&&this.initSSR(t),this.initTheme(e))}setTheme(e,t){this.themes[e]=Object.assign(this.themes[e],t),this.applyTheme()}resetThemes(){this.themes.light=Object.assign({},this.defaults.light),this.themes.dark=Object.assign({},this.defaults.dark),this.applyTheme()}checkOrCreateStyleElement(){return this.styleEl=document.getElementById("vuetify-theme-stylesheet"),!!this.styleEl||(this.genStyleElement(),Boolean(this.styleEl))}fillVariant(e={},t){const n=this.themes[t?"dark":"light"];return Object.assign({},n,e)}genStyleElement(){"undefined"!==typeof document&&(this.styleEl=document.createElement("style"),this.styleEl.type="text/css",this.styleEl.id="vuetify-theme-stylesheet",this.options.cspNonce&&this.styleEl.setAttribute("nonce",this.options.cspNonce),document.head.appendChild(this.styleEl))}initVueMeta(e){if(this.vueMeta=e.$meta(),this.isVueMeta23)return void e.$nextTick((()=>{this.applyVueMeta23()}));const t="function"===typeof this.vueMeta.getOptions?this.vueMeta.getOptions().keyName:"metaInfo",n=e.$options[t]||{};e.$options[t]=()=>{n.style=n.style||[];const e=n.style.find((e=>"vuetify-theme-stylesheet"===e.id));return e?e.cssText=this.generatedStyles:n.style.push({cssText:this.generatedStyles,type:"text/css",id:"vuetify-theme-stylesheet",nonce:(this.options||{}).cspNonce}),n}}applyVueMeta23(){const{set:e}=this.vueMeta.addApp("vuetify");e({style:[{cssText:this.generatedStyles,type:"text/css",id:"vuetify-theme-stylesheet",nonce:this.options.cspNonce}]})}initSSR(e){const t=this.options.cspNonce?` nonce="${this.options.cspNonce}"`:"";e.head=e.head||"",e.head+=`<style type="text/css" id="vuetify-theme-stylesheet"${t}>${this.generatedStyles}</style>`}initTheme(e){"undefined"!==typeof document&&(this.unwatch&&(this.unwatch(),this.unwatch=null),e.$once("hook:created",(()=>{const t=i.ZP.observable({themes:this.themes});this.unwatch=e.$watch((()=>t.themes),(()=>this.applyTheme()),{deep:!0})})),this.applyTheme())}get currentTheme(){const e=this.dark?"dark":"light";return this.themes[e]}get generatedStyles(){const e=this.parsedTheme,t=this.options||{};let n;return null!=t.themeCache&&(n=t.themeCache.get(e),null!=n)||(n=pe(e,t.customProperties),null!=t.minifyTheme&&(n=t.minifyTheme(n)),null!=t.themeCache&&t.themeCache.set(e,n)),n}get parsedTheme(){return ue(this.currentTheme||{},void 0,(0,u.qw)(this.options,["variations"],!0))}get isVueMeta23(){return"function"===typeof this.vueMeta.addApp}}ye.property="theme";class we{constructor(e={}){this.framework={isHydrating:!1},this.installed=[],this.preset={},this.userPreset={},this.userPreset=e,this.use(h),this.use(d),this.use(f),this.use(D),this.use(G),this.use(Q),this.use(ye)}init(e,t){this.installed.forEach((n=>{const r=this.framework[n];r.framework=this.framework,r.init(e,t)})),this.framework.rtl=Boolean(this.preset.rtl)}use(e){const t=e.property;this.installed.includes(t)||(this.framework[t]=new e(this.preset,this),this.installed.push(t))}}we.install=o,we.installed=!1,we.version="2.7.1",we.config={silent:!1}},3651:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(8386),i=n(4987);function s(e,t=[]){return(0,i.Z)((0,r.d)(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty(){return e}},watch:{app(e,t){t?this.removeApplication(!0):this.callUpdate()},applicationProperty(e,t){this.$vuetify.application.unregister(this._uid,t)}},activated(){this.callUpdate()},created(){for(let e=0,n=t.length;e<n;e++)this.$watch(t[e],this.callUpdate);this.callUpdate()},mounted(){this.callUpdate()},deactivated(){this.removeApplication()},destroyed(){this.removeApplication()},methods:{callUpdate(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication(e=!1){(e||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:()=>0}})}},4609:function(e,t,n){var r=n(144);function i(e){return function(t,n){for(const r in n)Object.prototype.hasOwnProperty.call(t,r)||this.$delete(this.$data[e],r);for(const r in t)this.$set(this.$data[e],r,t[r])}}t.Z=r.ZP.extend({data:()=>({attrs$:{},listeners$:{}}),created(){this.$watch("$attrs",i("attrs$"),{immediate:!0}),this.$watch("$listeners",i("listeners$"),{immediate:!0})}})},8914:function(e,t,n){var r=n(144),i=n(6596),s=n(8604);t.Z=r.ZP.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor(e,t={}){return"string"===typeof t.style?((0,i.N6)("style must be an object",this),t):"string"===typeof t.class?((0,i.N6)("class must be an object",this),t):((0,s.NA)(e)?t.style={...t.style,"background-color":`${e}`,"border-color":`${e}`}:e&&(t.class={...t.class,[e]:!0}),t)},setTextColor(e,t={}){if("string"===typeof t.style)return(0,i.N6)("style must be an object",this),t;if("string"===typeof t.class)return(0,i.N6)("class must be an object",this),t;if((0,s.NA)(e))t.style={...t.style,color:`${e}`,"caret-color":`${e}`};else if(e){const[n,r]=e.toString().trim().split(" ",2);t.class={...t.class,[n+"--text"]:!0},r&&(t.class["text--"+r]=!0)}return t}}})},5303:function(e,t,n){var r=n(144);t.Z=r.ZP.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation(){return this.elevation},elevationClasses(){const e=this.computedElevation;return null==e||isNaN(parseInt(e))?{}:{[`elevation-${this.elevation}`]:!0}}}})},9246:function(e,t,n){n.d(t,{Z:function(){return S}});var r=n(144),i=n(2653);function s(e=[],...t){return Array().concat(e,...t)}function o(e,t="top center 0",n){return{name:e,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:n},origin:{type:String,default:t}},render(t,n){const r="transition"+(n.props.group?"-group":""),o={props:{name:e,mode:n.props.mode},on:{beforeEnter(e){e.style.transformOrigin=n.props.origin,e.style.webkitTransformOrigin=n.props.origin}}};return n.props.leaveAbsolute&&(o.on.leave=s(o.on.leave,(e=>{const{offsetTop:t,offsetLeft:n,offsetWidth:r,offsetHeight:i}=e;e._transitionInitialStyles={position:e.style.position,top:e.style.top,left:e.style.left,width:e.style.width,height:e.style.height},e.style.position="absolute",e.style.top=t+"px",e.style.left=n+"px",e.style.width=r+"px",e.style.height=i+"px"})),o.on.afterLeave=s(o.on.afterLeave,(e=>{if(e&&e._transitionInitialStyles){const{position:t,top:n,left:r,width:i,height:s}=e._transitionInitialStyles;delete e._transitionInitialStyles,e.style.position=t||"",e.style.top=n||"",e.style.left=r||"",e.style.width=i||"",e.style.height=s||""}}))),n.props.hideOnLeave&&(o.on.leave=s(o.on.leave,(e=>{e.style.setProperty("display","none","important")}))),t(r,(0,i.ZP)(n.data,o),n.children)}}}function a(e,t,n="in-out"){return{name:e,functional:!0,props:{mode:{type:String,default:n}},render(n,r){return n("transition",(0,i.ZP)(r.data,{props:{name:e},on:t}),r.children)}}}var c=n(1050);function u(e="",t=!1){const n=t?"width":"height",r=`offset${(0,c.jC)(n)}`;return{beforeEnter(e){e._parent=e.parentNode,e._initialStyle={transition:e.style.transition,overflow:e.style.overflow,[n]:e.style[n]}},enter(t){const i=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";const s=`${t[r]}px`;t.style[n]="0",t.offsetHeight,t.style.transition=i.transition,e&&t._parent&&t._parent.classList.add(e),requestAnimationFrame((()=>{t.style[n]=s}))},afterEnter:s,enterCancelled:s,leave(e){e._initialStyle={transition:"",overflow:e.style.overflow,[n]:e.style[n]},e.style.overflow="hidden",e.style[n]=`${e[r]}px`,e.offsetHeight,requestAnimationFrame((()=>e.style[n]="0"))},afterLeave:i,leaveCancelled:i};function i(t){e&&t._parent&&t._parent.classList.remove(e),s(t)}function s(e){const t=e._initialStyle[n];e.style.overflow=e._initialStyle.overflow,null!=t&&(e.style[n]=t),delete e._initialStyle}}o("carousel-transition"),o("carousel-reverse-transition"),o("tab-transition"),o("tab-reverse-transition"),o("menu-transition"),o("fab-transition","center center","out-in"),o("dialog-transition"),o("dialog-bottom-transition"),o("dialog-top-transition");const l=o("fade-transition"),h=(o("scale-transition"),o("scroll-x-transition"),o("scroll-x-reverse-transition"),o("scroll-y-transition"),o("scroll-y-reverse-transition"),o("slide-x-transition"));o("slide-x-reverse-transition"),o("slide-y-transition"),o("slide-y-reverse-transition"),a("expand-transition",u()),a("expand-x-transition",u("",!0));var d=n(1558),f=n(8914),p=n(8386);function m(e="value",t="change"){return r.ZP.extend({name:"proxyable",model:{prop:e,event:t},props:{[e]:{required:!1}},data(){return{internalLazyValue:this[e]}},computed:{internalValue:{get(){return this.internalLazyValue},set(e){e!==this.internalLazyValue&&(this.internalLazyValue=e,this.$emit(t,e))}}},watch:{[e](e){this.internalLazyValue=e}}})}const g=m();var v=g,y=n(3276),w=n(4987);const b=(0,w.Z)(f.Z,(0,p.d)(["absolute","fixed","top","bottom"]),v,y.Z);var _=b.extend({name:"v-progress-linear",directives:{intersect:d.Z},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:(0,c.kb)(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:(0,c.kb)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:e,[this.isReversed?"right":"left"]:(0,c.kb)(this.normalizedValue,"%"),width:(0,c.kb)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible,...this.themeClasses}},computedTransition(){return this.indeterminate?l:h},isReversed(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=(0,c.kb)(this.normalizedBuffer,"%")),e}},methods:{genContent(){const e=(0,c.z9)(this,"default",{value:this.internalLazyValue});return e?this.$createElement("div",{staticClass:"v-progress-linear__content"},e):null},genListeners(){const e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[e]:!0}}))},onClick(e){if(!this.reactive)return;const{width:t}=this.$el.getBoundingClientRect();this.internalValue=e.offsetX/t*100},onObserve(e,t,n){this.isVisible=n},normalize(e){return e<0?0:e>100?100:parseFloat(e)}},render(e){const t={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?(0,c.kb)(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return e("div",t,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),I=_,S=r.ZP.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(I,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},9196:function(e,t,n){var r=n(1050),i=n(144);t.Z=i.ZP.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles(){const e={},t=(0,r.kb)(this.height),n=(0,r.kb)(this.minHeight),i=(0,r.kb)(this.minWidth),s=(0,r.kb)(this.maxHeight),o=(0,r.kb)(this.maxWidth),a=(0,r.kb)(this.width);return t&&(e.height=t),n&&(e.minHeight=n),i&&(e.minWidth=i),s&&(e.maxHeight=s),o&&(e.maxWidth=o),a&&(e.width=a),e}}})},8386:function(e,t,n){n.d(t,{d:function(){return o}});var r=n(144),i=n(1050);const s={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function o(e=[]){return r.ZP.extend({name:"positionable",props:e.length?(0,i.ji)(s,e):s})}t.Z=o()},380:function(e,t,n){n.d(t,{J:function(){return a},f:function(){return o}});var r=n(144),i=n(6596);function s(e,t){return()=>(0,i.Kd)(`The ${e} component must be used inside a ${t}`)}function o(e,t,n){const i=t&&n?{register:s(t,n),unregister:s(t,n)}:null;return r.ZP.extend({name:"registrable-inject",inject:{[e]:{default:i}}})}function a(e,t=!1){return r.ZP.extend({name:"registrable-provide",provide(){return{[e]:t?this:{register:this.register,unregister:this.unregister}}}})}},4040:function(e,t,n){var r=n(144),i=n(3176),s=n(1050);t.Z=r.ZP.extend({name:"routable",directives:{Ripple:i.Z},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:()=>({isActive:!1,proxyClass:""}),computed:{classes(){const e={};return this.to||(this.activeClass&&(e[this.activeClass]=this.isActive),this.proxyClass&&(e[this.proxyClass]=this.isActive)),e},computedRipple(){var e;return null!==(e=this.ripple)&&void 0!==e?e:!this.disabled&&this.isClickable},isClickable(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink(){return this.to||this.href||this.link},styles:()=>({})},watch:{$route:"onRouteChange"},mounted(){this.onRouteChange()},methods:{generateRouteLink(){let e,t=this.exact;const n={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}],[this.to?"nativeOn":"on"]:{...this.$listeners,..."click"in this?{click:this.click}:void 0},ref:"link"};if("undefined"===typeof this.exact&&(t="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){let r=this.activeClass,i=this.exactActiveClass||r;this.proxyClass&&(r=`${r} ${this.proxyClass}`.trim(),i=`${i} ${this.proxyClass}`.trim()),e=this.nuxt?"nuxt-link":"router-link",Object.assign(n.props,{to:this.to,exact:t,exactPath:this.exactPath,activeClass:r,exactActiveClass:i,append:this.append,replace:this.replace})}else e=(this.href?"a":this.tag)||"div","a"===e&&this.href&&(n.attrs.href=this.href);return this.target&&(n.attrs.target=this.target),{tag:e,data:n}},onRouteChange(){if(!this.to||!this.$refs.link||!this.$route)return;const e=`${this.activeClass||""} ${this.proxyClass||""}`.trim(),t=`${this.exactActiveClass||""} ${this.proxyClass||""}`.trim()||e,n="_vnode.data.class."+(this.exact?t:e);this.$nextTick((()=>{!(0,s.vO)(this.$refs.link,n)===this.isActive&&this.toggle()}))},toggle(){this.isActive=!this.isActive}}})},281:function(e,t,n){var r=n(144);t.Z=r.ZP.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},8574:function(e,t,n){var r=n(144);t.Z=r.ZP.extend({name:"ssr-bootable",data:()=>({isBooted:!1}),mounted(){window.requestAnimationFrame((()=>{this.$el.setAttribute("data-booted","true"),this.isBooted=!0}))}})},3276:function(e,t,n){n.d(t,{X:function(){return s}});var r=n(144);const i=r.ZP.extend().extend({name:"themeable",provide(){return{theme:this.themeableProvide}},inject:{theme:{default:{isDark:!1}}},props:{dark:{type:Boolean,default:null},light:{type:Boolean,default:null}},data(){return{themeableProvide:{isDark:!1}}},computed:{appIsDark(){return this.$vuetify.theme.dark||!1},isDark(){return!0===this.dark||!0!==this.light&&this.theme.isDark},themeClasses(){return{"theme--dark":this.isDark,"theme--light":!this.isDark}},rootIsDark(){return!0===this.dark||!0!==this.light&&this.appIsDark},rootThemeClasses(){return{"theme--dark":this.rootIsDark,"theme--light":!this.rootIsDark}}},watch:{isDark:{handler(e,t){e!==t&&(this.themeableProvide.isDark=this.isDark)},immediate:!0}}});function s(e){const t={...e.props,...e.injections},n=i.options.computed.isDark.call(t);return i.options.computed.themeClasses.call({isDark:n})}t.Z=i},6470:function(e,t,n){n.d(t,{d:function(){return i}});var r=n(144);function i(e="value",t="input"){return r.ZP.extend({name:"toggleable",model:{prop:e,event:t},props:{[e]:{required:!1}},data(){return{isActive:!!this[e]}},watch:{[e](e){this.isActive=!!e},isActive(n){!!n!==this[e]&&this.$emit(t,n)}}})}const s=i();t.Z=s},8604:function(e,t,n){n.d(t,{I4:function(){return o},NA:function(){return i},hq:function(){return a},jx:function(){return s}});var r=n(6596);function i(e){return!!e&&!!e.match(/^(#|var\(--|(rgb|hsl)a?\()/)}function s(e){let t;if("number"===typeof e)t=e;else{if("string"!==typeof e)throw new TypeError(`Colors can only be numbers or strings, recieved ${null==e?e:e.constructor.name} instead`);{let n="#"===e[0]?e.substring(1):e;3===n.length&&(n=n.split("").map((e=>e+e)).join("")),6!==n.length&&(0,r.Kd)(`'${e}' is not a valid rgb color`),t=parseInt(n,16)}}return t<0?((0,r.Kd)(`Colors cannot be negative: '${e}'`),t=0):(t>16777215||isNaN(t))&&((0,r.Kd)(`'${e}' is not a valid rgb color`),t=16777215),t}function o(e){let t=e.toString(16);return t.length<6&&(t="0".repeat(6-t.length)+t),"#"+t}function a(e){return o(s(e))}},6596:function(e,t,n){n.d(t,{Jk:function(){return c},Kd:function(){return s},N6:function(){return o},fK:function(){return a}});n(560);var r=n(3806);function i(e,t,n){if(!r.Z.config.silent){if(n&&(t={_isVue:!0,$parent:n,$options:t}),t){if(t.$_alreadyWarned=t.$_alreadyWarned||[],t.$_alreadyWarned.includes(e))return;t.$_alreadyWarned.push(e)}return`[Vuetify] ${e}`+(t?d(t):"")}}function s(e,t,n){const r=i(e,t,n);null!=r&&console.warn(r)}function o(e,t,n){const r=i(e,t,n);null!=r&&console.error(r)}function a(e,t,n,r){o(`[BREAKING] '${e}' has been removed, use '${t}' instead. For more information, see the upgrade guide https://github.com/vuetifyjs/vuetify/releases/tag/v2.0.0#user-content-upgrade-guide`,n,r)}function c(e,t,n){s(`[REMOVED] '${e}' has been removed. You can safely omit it.`,t,n)}const u=/(?:^|[-_])(\w)/g,l=e=>e.replace(u,(e=>e.toUpperCase())).replace(/[-_]/g,"");function h(e,t){if(e.$root===e)return"<Root>";const n="function"===typeof e&&null!=e.cid?e.options:e._isVue?e.$options||e.constructor.options:e||{};let r=n.name||n._componentTag;const i=n.__file;if(!r&&i){const e=i.match(/([^/\\]+)\.vue$/);r=e&&e[1]}return(r?`<${l(r)}>`:"<Anonymous>")+(i&&!1!==t?` at ${i}`:"")}function d(e){if(e._isVue&&e.$parent){const t=[];let n=0;while(e){if(t.length>0){const r=t[t.length-1];if(r.constructor===e.constructor){n++,e=e.$parent;continue}n>0&&(t[t.length-1]=[r,n],n=0)}t.push(e),e=e.$parent}return"\n\nfound in\n\n"+t.map(((e,t)=>`${0===t?"---\x3e ":" ".repeat(5+2*t)}${Array.isArray(e)?`${h(e[0])}... (${e[1]} recursive calls)`:h(e)}`)).join("\n")}return`\n\n(found in ${h(e)})`}},6044:function(e,t,n){function r(e){if("function"!==typeof e.getRootNode){while(e.parentNode)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}n.d(t,{e:function(){return r}})},1050:function(e,t,n){n.d(t,{Do:function(){return g},Ee:function(){return C},GL:function(){return p},Ji:function(){return i},KK:function(){return h},RB:function(){return v},TI:function(){return I},XP:function(){return y},_A:function(){return b},iZ:function(){return k},jC:function(){return _},ji:function(){return d},kb:function(){return f},lj:function(){return a},qh:function(){return s},qw:function(){return c},sp:function(){return S},uZ:function(){return T},vO:function(){return l},vZ:function(){return u},z9:function(){return E}});n(560);var r=n(144);function i(e,t="div",n){return r.ZP.extend({name:n||e.replace(/__/g,"-"),functional:!0,props:{tag:{type:String,default:t}},render(t,{data:n,props:r,children:i}){return n.staticClass=`${e} ${n.staticClass||""}`.trim(),t(r.tag,n,i)}})}function s(e,t,n,r=!1){const i=s=>{n(s),e.removeEventListener(t,i,r)};e.addEventListener(t,i,r)}let o=!1;try{if("undefined"!==typeof window){const e=Object.defineProperty({},"passive",{get:()=>{o=!0}});window.addEventListener("testListener",e,e),window.removeEventListener("testListener",e,e)}}catch(x){console.warn(x)}function a(e,t,n,r){e.addEventListener(t,n,!!o&&r)}function c(e,t,n){const r=t.length-1;if(r<0)return void 0===e?n:e;for(let i=0;i<r;i++){if(null==e)return n;e=e[t[i]]}return null==e||void 0===e[t[r]]?n:e[t[r]]}function u(e,t){if(e===t)return!0;if(e instanceof Date&&t instanceof Date&&e.getTime()!==t.getTime())return!1;if(e!==Object(e)||t!==Object(t))return!1;const n=Object.keys(e);return n.length===Object.keys(t).length&&n.every((n=>u(e[n],t[n])))}function l(e,t,n){return null!=e&&t&&"string"===typeof t?void 0!==e[t]?e[t]:(t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,""),c(e,t.split("."),n)):n}function h(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return 0;const t=+window.getComputedStyle(e).getPropertyValue("z-index");return t||h(e.parentNode)}function d(e,t){const n={};for(let r=0;r<t.length;r++){const i=t[r];"undefined"!==typeof e[i]&&(n[i]=e[i])}return n}function f(e,t="px"){return null==e||""===e?void 0:isNaN(+e)?String(e):`${Number(e)}${t}`}function p(e){return(e||"").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function m(e){return null!==e&&"object"===typeof e}const g=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function v(e,t){const n=e.$vuetify.icons.component;if(t.startsWith("$")){const n=`$vuetify.icons.values.${t.split("$").pop().split(".").pop()}`,r=l(e,n,t);if("string"!==typeof r)return r;t=r}return null==n?t:{component:n,props:{icon:t}}}function y(e){return Object.keys(e)}const w=/-(\w)/g,b=e=>e.replace(w,((e,t)=>t?t.toUpperCase():""));function _(e){return e.charAt(0).toUpperCase()+e.slice(1)}function I(e){return null!=e?Array.isArray(e)?e:[e]:[]}function S(e,t,n){return e.$slots.hasOwnProperty(t)&&e.$scopedSlots.hasOwnProperty(t)&&e.$scopedSlots[t].name?n?"v-slot":"scoped":e.$slots.hasOwnProperty(t)?"normal":e.$scopedSlots.hasOwnProperty(t)?"scoped":void 0}function E(e,t="default",n,r=!1){return e.$scopedSlots.hasOwnProperty(t)?e.$scopedSlots[t](n instanceof Function?n():n):!e.$slots.hasOwnProperty(t)||n&&!r?void 0:e.$slots[t]}function T(e,t=0,n=1){return Math.max(t,Math.min(n,e))}function C(e={},t={}){for(const n in t){const r=e[n],i=t[n];m(r)&&m(i)?e[n]=C(r,i):e[n]=i}return e}function k(e){if(e.composedPath)return e.composedPath();const t=[];let n=e.target;while(n){if(t.push(n),"HTML"===n.tagName)return t.push(document),t.push(window),t;n=n.parentElement}return t}},2653:function(e,t,n){n.d(t,{ZP:function(){return o}});var r=n(1050);const i={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function s(e){const t={};for(const n of e.split(i.styleList)){let[e,s]=n.split(i.styleProp);e=e.trim(),e&&("string"===typeof s&&(s=s.trim()),t[(0,r._A)(e)]=s)}return t}function o(){const e={};let t,n=arguments.length;while(n--)for(t of Object.keys(arguments[n]))switch(t){case"class":case"directives":arguments[n][t]&&(e[t]=c(e[t],arguments[n][t]));break;case"style":arguments[n][t]&&(e[t]=a(e[t],arguments[n][t]));break;case"staticClass":if(!arguments[n][t])break;void 0===e[t]&&(e[t]=""),e[t]&&(e[t]+=" "),e[t]+=arguments[n][t].trim();break;case"on":case"nativeOn":arguments[n][t]&&(e[t]=u(e[t],arguments[n][t]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[n][t])break;e[t]||(e[t]={}),e[t]={...arguments[n][t],...e[t]};break;default:e[t]||(e[t]=arguments[n][t])}return e}function a(e,t){return e?t?(e=(0,r.TI)("string"===typeof e?s(e):e),e.concat("string"===typeof t?s(t):t)):e:t}function c(e,t){return t?e&&e?(0,r.TI)(e).concat(t):t:e}function u(...e){if(!e[0])return e[1];if(!e[1])return e[0];const t={};for(let n=2;n--;){const r=e[n];for(const e in r)r[e]&&(t[e]?t[e]=[].concat(r[e],t[e]):t[e]=r[e])}return t}},4987:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(144);function i(...e){return r.ZP.extend({mixins:e})}},1884:function(){},9027:function(){},8345:function(e,t,n){function r(e,t){for(var n in t)e[n]=t[n];return e}n.d(t,{ZP:function(){return It}});var i=/[!'()*]/g,s=function(e){return"%"+e.charCodeAt(0).toString(16)},o=/%2C/g,a=function(e){return encodeURIComponent(e).replace(i,s).replace(o,",")};function c(e){try{return decodeURIComponent(e)}catch(t){0}return e}function u(e,t,n){void 0===t&&(t={});var r,i=n||h;try{r=i(e||"")}catch(a){r={}}for(var s in t){var o=t[s];r[s]=Array.isArray(o)?o.map(l):l(o)}return r}var l=function(e){return null==e||"object"===typeof e?e:String(e)};function h(e){var t={};return e=e.trim().replace(/^(\?|#|&)/,""),e?(e.split("&").forEach((function(e){var n=e.replace(/\+/g," ").split("="),r=c(n.shift()),i=n.length>0?c(n.join("=")):null;void 0===t[r]?t[r]=i:Array.isArray(t[r])?t[r].push(i):t[r]=[t[r],i]})),t):t}function d(e){var t=e?Object.keys(e).map((function(t){var n=e[t];if(void 0===n)return"";if(null===n)return a(t);if(Array.isArray(n)){var r=[];return n.forEach((function(e){void 0!==e&&(null===e?r.push(a(t)):r.push(a(t)+"="+a(e)))})),r.join("&")}return a(t)+"="+a(n)})).filter((function(e){return e.length>0})).join("&"):null;return t?"?"+t:""}var f=/\/?$/;function p(e,t,n,r){var i=r&&r.options.stringifyQuery,s=t.query||{};try{s=m(s)}catch(a){}var o={name:t.name||e&&e.name,meta:e&&e.meta||{},path:t.path||"/",hash:t.hash||"",query:s,params:t.params||{},fullPath:y(t,i),matched:e?v(e):[]};return n&&(o.redirectedFrom=y(n,i)),Object.freeze(o)}function m(e){if(Array.isArray(e))return e.map(m);if(e&&"object"===typeof e){var t={};for(var n in e)t[n]=m(e[n]);return t}return e}var g=p(null,{path:"/"});function v(e){var t=[];while(e)t.unshift(e),e=e.parent;return t}function y(e,t){var n=e.path,r=e.query;void 0===r&&(r={});var i=e.hash;void 0===i&&(i="");var s=t||d;return(n||"/")+s(r)+i}function w(e,t,n){return t===g?e===t:!!t&&(e.path&&t.path?e.path.replace(f,"")===t.path.replace(f,"")&&(n||e.hash===t.hash&&b(e.query,t.query)):!(!e.name||!t.name)&&(e.name===t.name&&(n||e.hash===t.hash&&b(e.query,t.query)&&b(e.params,t.params))))}function b(e,t){if(void 0===e&&(e={}),void 0===t&&(t={}),!e||!t)return e===t;var n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((function(n,i){var s=e[n],o=r[i];if(o!==n)return!1;var a=t[n];return null==s||null==a?s===a:"object"===typeof s&&"object"===typeof a?b(s,a):String(s)===String(a)}))}function _(e,t){return 0===e.path.replace(f,"/").indexOf(t.path.replace(f,"/"))&&(!t.hash||e.hash===t.hash)&&I(e.query,t.query)}function I(e,t){for(var n in t)if(!(n in e))return!1;return!0}function S(e){for(var t=0;t<e.matched.length;t++){var n=e.matched[t];for(var r in n.instances){var i=n.instances[r],s=n.enteredCbs[r];if(i&&s){delete n.enteredCbs[r];for(var o=0;o<s.length;o++)i._isBeingDestroyed||s[o](i)}}}}var E={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(e,t){var n=t.props,i=t.children,s=t.parent,o=t.data;o.routerView=!0;var a=s.$createElement,c=n.name,u=s.$route,l=s._routerViewCache||(s._routerViewCache={}),h=0,d=!1;while(s&&s._routerRoot!==s){var f=s.$vnode?s.$vnode.data:{};f.routerView&&h++,f.keepAlive&&s._directInactive&&s._inactive&&(d=!0),s=s.$parent}if(o.routerViewDepth=h,d){var p=l[c],m=p&&p.component;return m?(p.configProps&&T(m,o,p.route,p.configProps),a(m,o,i)):a()}var g=u.matched[h],v=g&&g.components[c];if(!g||!v)return l[c]=null,a();l[c]={component:v},o.registerRouteInstance=function(e,t){var n=g.instances[c];(t&&n!==e||!t&&n===e)&&(g.instances[c]=t)},(o.hook||(o.hook={})).prepatch=function(e,t){g.instances[c]=t.componentInstance},o.hook.init=function(e){e.data.keepAlive&&e.componentInstance&&e.componentInstance!==g.instances[c]&&(g.instances[c]=e.componentInstance),S(u)};var y=g.props&&g.props[c];return y&&(r(l[c],{route:u,configProps:y}),T(v,o,u,y)),a(v,o,i)}};function T(e,t,n,i){var s=t.props=C(n,i);if(s){s=t.props=r({},s);var o=t.attrs=t.attrs||{};for(var a in s)e.props&&a in e.props||(o[a]=s[a],delete s[a])}}function C(e,t){switch(typeof t){case"undefined":return;case"object":return t;case"function":return t(e);case"boolean":return t?e.params:void 0;default:0}}function k(e,t,n){var r=e.charAt(0);if("/"===r)return e;if("?"===r||"#"===r)return t+e;var i=t.split("/");n&&i[i.length-1]||i.pop();for(var s=e.replace(/^\//,"").split("/"),o=0;o<s.length;o++){var a=s[o];".."===a?i.pop():"."!==a&&i.push(a)}return""!==i[0]&&i.unshift(""),i.join("/")}function x(e){var t="",n="",r=e.indexOf("#");r>=0&&(t=e.slice(r),e=e.slice(0,r));var i=e.indexOf("?");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{path:e,query:n,hash:t}}function A(e){return e.replace(/\/(?:\s*\/)+/g,"/")}var O=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)},N=Q,D=$,L=F,P=j,R=Z,M=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function $(e,t){var n,r=[],i=0,s=0,o="",a=t&&t.delimiter||"/";while(null!=(n=M.exec(e))){var c=n[0],u=n[1],l=n.index;if(o+=e.slice(s,l),s=l+c.length,u)o+=u[1];else{var h=e[s],d=n[2],f=n[3],p=n[4],m=n[5],g=n[6],v=n[7];o&&(r.push(o),o="");var y=null!=d&&null!=h&&h!==d,w="+"===g||"*"===g,b="?"===g||"*"===g,_=n[2]||a,I=p||m;r.push({name:f||i++,prefix:d||"",delimiter:_,optional:b,repeat:w,partial:y,asterisk:!!v,pattern:I?z(I):v?".*":"[^"+U(_)+"]+?"})}}return s<e.length&&(o+=e.substr(s)),o&&r.push(o),r}function F(e,t){return j($(e,t),t)}function V(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function B(e){return encodeURI(e).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function j(e,t){for(var n=new Array(e.length),r=0;r<e.length;r++)"object"===typeof e[r]&&(n[r]=new RegExp("^(?:"+e[r].pattern+")$",H(t)));return function(t,r){for(var i="",s=t||{},o=r||{},a=o.pretty?V:encodeURIComponent,c=0;c<e.length;c++){var u=e[c];if("string"!==typeof u){var l,h=s[u.name];if(null==h){if(u.optional){u.partial&&(i+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(O(h)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var d=0;d<h.length;d++){if(l=a(h[d]),!n[c].test(l))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===d?u.prefix:u.delimiter)+l}}else{if(l=u.asterisk?B(h):a(h),!n[c].test(l))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+l+'"');i+=u.prefix+l}}else i+=u}return i}}function U(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function z(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function q(e,t){return e.keys=t,e}function H(e){return e&&e.sensitive?"":"i"}function G(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return q(e,t)}function K(e,t,n){for(var r=[],i=0;i<e.length;i++)r.push(Q(e[i],t,n).source);var s=new RegExp("(?:"+r.join("|")+")",H(n));return q(s,t)}function W(e,t,n){return Z($(e,n),t,n)}function Z(e,t,n){O(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,i=!1!==n.end,s="",o=0;o<e.length;o++){var a=e[o];if("string"===typeof a)s+=U(a);else{var c=U(a.prefix),u="(?:"+a.pattern+")";t.push(a),a.repeat&&(u+="(?:"+c+u+")*"),u=a.optional?a.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")",s+=u}}var l=U(n.delimiter||"/"),h=s.slice(-l.length)===l;return r||(s=(h?s.slice(0,-l.length):s)+"(?:"+l+"(?=$))?"),s+=i?"$":r&&h?"":"(?="+l+"|$)",q(new RegExp("^"+s,H(n)),t)}function Q(e,t,n){return O(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?G(e,t):O(e)?K(e,t,n):W(e,t,n)}N.parse=D,N.compile=L,N.tokensToFunction=P,N.tokensToRegExp=R;var J=Object.create(null);function Y(e,t,n){t=t||{};try{var r=J[e]||(J[e]=N.compile(e));return"string"===typeof t.pathMatch&&(t[0]=t.pathMatch),r(t,{pretty:!0})}catch(i){return""}finally{delete t[0]}}function X(e,t,n,i){var s="string"===typeof e?{path:e}:e;if(s._normalized)return s;if(s.name){s=r({},e);var o=s.params;return o&&"object"===typeof o&&(s.params=r({},o)),s}if(!s.path&&s.params&&t){s=r({},s),s._normalized=!0;var a=r(r({},t.params),s.params);if(t.name)s.name=t.name,s.params=a;else if(t.matched.length){var c=t.matched[t.matched.length-1].path;s.path=Y(c,a,"path "+t.path)}else 0;return s}var l=x(s.path||""),h=t&&t.path||"/",d=l.path?k(l.path,h,n||s.append):h,f=u(l.query,s.query,i&&i.options.parseQuery),p=s.hash||l.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:d,query:f,hash:p}}var ee,te=[String,Object],ne=[String,Array],re=function(){},ie={name:"RouterLink",props:{to:{type:te,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:ne,default:"click"}},render:function(e){var t=this,n=this.$router,i=this.$route,s=n.resolve(this.to,i,this.append),o=s.location,a=s.route,c=s.href,u={},l=n.options.linkActiveClass,h=n.options.linkExactActiveClass,d=null==l?"router-link-active":l,f=null==h?"router-link-exact-active":h,m=null==this.activeClass?d:this.activeClass,g=null==this.exactActiveClass?f:this.exactActiveClass,v=a.redirectedFrom?p(null,X(a.redirectedFrom),null,n):a;u[g]=w(i,v,this.exactPath),u[m]=this.exact||this.exactPath?u[g]:_(i,v);var y=u[g]?this.ariaCurrentValue:null,b=function(e){se(e)&&(t.replace?n.replace(o,re):n.push(o,re))},I={click:se};Array.isArray(this.event)?this.event.forEach((function(e){I[e]=b})):I[this.event]=b;var S={class:u},E=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:b,isActive:u[m],isExactActive:u[g]});if(E){if(1===E.length)return E[0];if(E.length>1||!E.length)return 0===E.length?e():e("span",{},E)}if("a"===this.tag)S.on=I,S.attrs={href:c,"aria-current":y};else{var T=oe(this.$slots.default);if(T){T.isStatic=!1;var C=T.data=r({},T.data);for(var k in C.on=C.on||{},C.on){var x=C.on[k];k in I&&(C.on[k]=Array.isArray(x)?x:[x])}for(var A in I)A in C.on?C.on[A].push(I[A]):C.on[A]=b;var O=T.data.attrs=r({},T.data.attrs);O.href=c,O["aria-current"]=y}else S.on=I}return e(this.tag,S,this.$slots.default)}};function se(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){var t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function oe(e){if(e)for(var t,n=0;n<e.length;n++){if(t=e[n],"a"===t.tag)return t;if(t.children&&(t=oe(t.children)))return t}}function ae(e){if(!ae.installed||ee!==e){ae.installed=!0,ee=e;var t=function(e){return void 0!==e},n=function(e,n){var r=e.$options._parentVnode;t(r)&&t(r=r.data)&&t(r=r.registerRouteInstance)&&r(e,n)};e.mixin({beforeCreate:function(){t(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),e.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(e.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(e.prototype,"$route",{get:function(){return this._routerRoot._route}}),e.component("RouterView",E),e.component("RouterLink",ie);var r=e.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var ce="undefined"!==typeof window;function ue(e,t,n,r,i){var s=t||[],o=n||Object.create(null),a=r||Object.create(null);e.forEach((function(e){le(s,o,a,e,i)}));for(var c=0,u=s.length;c<u;c++)"*"===s[c]&&(s.push(s.splice(c,1)[0]),u--,c--);return{pathList:s,pathMap:o,nameMap:a}}function le(e,t,n,r,i,s){var o=r.path,a=r.name;var c=r.pathToRegexpOptions||{},u=de(o,i,c.strict);"boolean"===typeof r.caseSensitive&&(c.sensitive=r.caseSensitive);var l={path:u,regex:he(u,c),components:r.components||{default:r.component},alias:r.alias?"string"===typeof r.alias?[r.alias]:r.alias:[],instances:{},enteredCbs:{},name:a,parent:i,matchAs:s,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach((function(r){var i=s?A(s+"/"+r.path):void 0;le(e,t,n,r,l,i)})),t[l.path]||(e.push(l.path),t[l.path]=l),void 0!==r.alias)for(var h=Array.isArray(r.alias)?r.alias:[r.alias],d=0;d<h.length;++d){var f=h[d];0;var p={path:f,children:r.children};le(e,t,n,p,i,l.path||"/")}a&&(n[a]||(n[a]=l))}function he(e,t){var n=N(e,[],t);return n}function de(e,t,n){return n||(e=e.replace(/\/$/,"")),"/"===e[0]||null==t?e:A(t.path+"/"+e)}function fe(e,t){var n=ue(e),r=n.pathList,i=n.pathMap,s=n.nameMap;function o(e){ue(e,r,i,s)}function a(e,t){var n="object"!==typeof e?s[e]:void 0;ue([t||e],r,i,s,n),n&&n.alias.length&&ue(n.alias.map((function(e){return{path:e,children:[t]}})),r,i,s,n)}function c(){return r.map((function(e){return i[e]}))}function u(e,n,o){var a=X(e,n,!1,t),c=a.name;if(c){var u=s[c];if(!u)return d(null,a);var l=u.regex.keys.filter((function(e){return!e.optional})).map((function(e){return e.name}));if("object"!==typeof a.params&&(a.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in a.params)&&l.indexOf(h)>-1&&(a.params[h]=n.params[h]);return a.path=Y(u.path,a.params,'named route "'+c+'"'),d(u,a,o)}if(a.path){a.params={};for(var f=0;f<r.length;f++){var p=r[f],m=i[p];if(pe(m.regex,a.path,a.params))return d(m,a,o)}}return d(null,a)}function l(e,n){var r=e.redirect,i="function"===typeof r?r(p(e,n,null,t)):r;if("string"===typeof i&&(i={path:i}),!i||"object"!==typeof i)return d(null,n);var o=i,a=o.name,c=o.path,l=n.query,h=n.hash,f=n.params;if(l=o.hasOwnProperty("query")?o.query:l,h=o.hasOwnProperty("hash")?o.hash:h,f=o.hasOwnProperty("params")?o.params:f,a){s[a];return u({_normalized:!0,name:a,query:l,hash:h,params:f},void 0,n)}if(c){var m=me(c,e),g=Y(m,f,'redirect route with path "'+m+'"');return u({_normalized:!0,path:g,query:l,hash:h},void 0,n)}return d(null,n)}function h(e,t,n){var r=Y(n,t.params,'aliased route with path "'+n+'"'),i=u({_normalized:!0,path:r});if(i){var s=i.matched,o=s[s.length-1];return t.params=i.params,d(o,t)}return d(null,t)}function d(e,n,r){return e&&e.redirect?l(e,r||n):e&&e.matchAs?h(e,n,e.matchAs):p(e,n,r,t)}return{match:u,addRoute:a,getRoutes:c,addRoutes:o}}function pe(e,t,n){var r=t.match(e);if(!r)return!1;if(!n)return!0;for(var i=1,s=r.length;i<s;++i){var o=e.keys[i-1];o&&(n[o.name||"pathMatch"]="string"===typeof r[i]?c(r[i]):r[i])}return!0}function me(e,t){return k(e,t.parent?t.parent.path:"/",!0)}var ge=ce&&window.performance&&window.performance.now?window.performance:Date;function ve(){return ge.now().toFixed(3)}var ye=ve();function we(){return ye}function be(e){return ye=e}var _e=Object.create(null);function Ie(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var e=window.location.protocol+"//"+window.location.host,t=window.location.href.replace(e,""),n=r({},window.history.state);return n.key=we(),window.history.replaceState(n,"",t),window.addEventListener("popstate",Te),function(){window.removeEventListener("popstate",Te)}}function Se(e,t,n,r){if(e.app){var i=e.options.scrollBehavior;i&&e.app.$nextTick((function(){var s=Ce(),o=i.call(e,t,n,r?s:null);o&&("function"===typeof o.then?o.then((function(e){Le(e,s)})).catch((function(e){0})):Le(o,s))}))}}function Ee(){var e=we();e&&(_e[e]={x:window.pageXOffset,y:window.pageYOffset})}function Te(e){Ee(),e.state&&e.state.key&&be(e.state.key)}function Ce(){var e=we();if(e)return _e[e]}function ke(e,t){var n=document.documentElement,r=n.getBoundingClientRect(),i=e.getBoundingClientRect();return{x:i.left-r.left-t.x,y:i.top-r.top-t.y}}function xe(e){return Ne(e.x)||Ne(e.y)}function Ae(e){return{x:Ne(e.x)?e.x:window.pageXOffset,y:Ne(e.y)?e.y:window.pageYOffset}}function Oe(e){return{x:Ne(e.x)?e.x:0,y:Ne(e.y)?e.y:0}}function Ne(e){return"number"===typeof e}var De=/^#\d/;function Le(e,t){var n="object"===typeof e;if(n&&"string"===typeof e.selector){var r=De.test(e.selector)?document.getElementById(e.selector.slice(1)):document.querySelector(e.selector);if(r){var i=e.offset&&"object"===typeof e.offset?e.offset:{};i=Oe(i),t=ke(r,i)}else xe(e)&&(t=Ae(e))}else n&&xe(e)&&(t=Ae(e));t&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:t.x,top:t.y,behavior:e.behavior}):window.scrollTo(t.x,t.y))}var Pe=ce&&function(){var e=window.navigator.userAgent;return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Re(e,t){Ee();var n=window.history;try{if(t){var i=r({},n.state);i.key=we(),n.replaceState(i,"",e)}else n.pushState({key:be(ve())},"",e)}catch(s){window.location[t?"replace":"assign"](e)}}function Me(e){Re(e,!0)}var $e={redirected:2,aborted:4,cancelled:8,duplicated:16};function Fe(e,t){return Ue(e,t,$e.redirected,'Redirected when going from "'+e.fullPath+'" to "'+qe(t)+'" via a navigation guard.')}function Ve(e,t){var n=Ue(e,t,$e.duplicated,'Avoided redundant navigation to current location: "'+e.fullPath+'".');return n.name="NavigationDuplicated",n}function Be(e,t){return Ue(e,t,$e.cancelled,'Navigation cancelled from "'+e.fullPath+'" to "'+t.fullPath+'" with a new navigation.')}function je(e,t){return Ue(e,t,$e.aborted,'Navigation aborted from "'+e.fullPath+'" to "'+t.fullPath+'" via a navigation guard.')}function Ue(e,t,n,r){var i=new Error(r);return i._isRouter=!0,i.from=e,i.to=t,i.type=n,i}var ze=["params","query","hash"];function qe(e){if("string"===typeof e)return e;if("path"in e)return e.path;var t={};return ze.forEach((function(n){n in e&&(t[n]=e[n])})),JSON.stringify(t,null,2)}function He(e){return Object.prototype.toString.call(e).indexOf("Error")>-1}function Ge(e,t){return He(e)&&e._isRouter&&(null==t||e.type===t)}function Ke(e,t,n){var r=function(i){i>=e.length?n():e[i]?t(e[i],(function(){r(i+1)})):r(i+1)};r(0)}function We(e){return function(t,n,r){var i=!1,s=0,o=null;Ze(e,(function(e,t,n,a){if("function"===typeof e&&void 0===e.cid){i=!0,s++;var c,u=Xe((function(t){Ye(t)&&(t=t.default),e.resolved="function"===typeof t?t:ee.extend(t),n.components[a]=t,s--,s<=0&&r()})),l=Xe((function(e){var t="Failed to resolve async component "+a+": "+e;o||(o=He(e)?e:new Error(t),r(o))}));try{c=e(u,l)}catch(d){l(d)}if(c)if("function"===typeof c.then)c.then(u,l);else{var h=c.component;h&&"function"===typeof h.then&&h.then(u,l)}}})),i||r()}}function Ze(e,t){return Qe(e.map((function(e){return Object.keys(e.components).map((function(n){return t(e.components[n],e.instances[n],e,n)}))})))}function Qe(e){return Array.prototype.concat.apply([],e)}var Je="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Ye(e){return e.__esModule||Je&&"Module"===e[Symbol.toStringTag]}function Xe(e){var t=!1;return function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];if(!t)return t=!0,e.apply(this,n)}}var et=function(e,t){this.router=e,this.base=tt(t),this.current=g,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function tt(e){if(!e)if(ce){var t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^https?:\/\/[^\/]+/,"")}else e="/";return"/"!==e.charAt(0)&&(e="/"+e),e.replace(/\/$/,"")}function nt(e,t){var n,r=Math.max(e.length,t.length);for(n=0;n<r;n++)if(e[n]!==t[n])break;return{updated:t.slice(0,n),activated:t.slice(n),deactivated:e.slice(n)}}function rt(e,t,n,r){var i=Ze(e,(function(e,r,i,s){var o=it(e,t);if(o)return Array.isArray(o)?o.map((function(e){return n(e,r,i,s)})):n(o,r,i,s)}));return Qe(r?i.reverse():i)}function it(e,t){return"function"!==typeof e&&(e=ee.extend(e)),e.options[t]}function st(e){return rt(e,"beforeRouteLeave",at,!0)}function ot(e){return rt(e,"beforeRouteUpdate",at)}function at(e,t){if(t)return function(){return e.apply(t,arguments)}}function ct(e){return rt(e,"beforeRouteEnter",(function(e,t,n,r){return ut(e,n,r)}))}function ut(e,t,n){return function(r,i,s){return e(r,i,(function(e){"function"===typeof e&&(t.enteredCbs[n]||(t.enteredCbs[n]=[]),t.enteredCbs[n].push(e)),s(e)}))}}et.prototype.listen=function(e){this.cb=e},et.prototype.onReady=function(e,t){this.ready?e():(this.readyCbs.push(e),t&&this.readyErrorCbs.push(t))},et.prototype.onError=function(e){this.errorCbs.push(e)},et.prototype.transitionTo=function(e,t,n){var r,i=this;try{r=this.router.match(e,this.current)}catch(o){throw this.errorCbs.forEach((function(e){e(o)})),o}var s=this.current;this.confirmTransition(r,(function(){i.updateRoute(r),t&&t(r),i.ensureURL(),i.router.afterHooks.forEach((function(e){e&&e(r,s)})),i.ready||(i.ready=!0,i.readyCbs.forEach((function(e){e(r)})))}),(function(e){n&&n(e),e&&!i.ready&&(Ge(e,$e.redirected)&&s===g||(i.ready=!0,i.readyErrorCbs.forEach((function(t){t(e)}))))}))},et.prototype.confirmTransition=function(e,t,n){var r=this,i=this.current;this.pending=e;var s=function(e){!Ge(e)&&He(e)&&(r.errorCbs.length?r.errorCbs.forEach((function(t){t(e)})):console.error(e)),n&&n(e)},o=e.matched.length-1,a=i.matched.length-1;if(w(e,i)&&o===a&&e.matched[o]===i.matched[a])return this.ensureURL(),e.hash&&Se(this.router,i,e,!1),s(Ve(i,e));var c=nt(this.current.matched,e.matched),u=c.updated,l=c.deactivated,h=c.activated,d=[].concat(st(l),this.router.beforeHooks,ot(u),h.map((function(e){return e.beforeEnter})),We(h)),f=function(t,n){if(r.pending!==e)return s(Be(i,e));try{t(e,i,(function(t){!1===t?(r.ensureURL(!0),s(je(i,e))):He(t)?(r.ensureURL(!0),s(t)):"string"===typeof t||"object"===typeof t&&("string"===typeof t.path||"string"===typeof t.name)?(s(Fe(i,e)),"object"===typeof t&&t.replace?r.replace(t):r.push(t)):n(t)}))}catch(o){s(o)}};Ke(d,f,(function(){var n=ct(h),o=n.concat(r.router.resolveHooks);Ke(o,f,(function(){if(r.pending!==e)return s(Be(i,e));r.pending=null,t(e),r.router.app&&r.router.app.$nextTick((function(){S(e)}))}))}))},et.prototype.updateRoute=function(e){this.current=e,this.cb&&this.cb(e)},et.prototype.setupListeners=function(){},et.prototype.teardown=function(){this.listeners.forEach((function(e){e()})),this.listeners=[],this.current=g,this.pending=null};var lt=function(e){function t(t,n){e.call(this,t,n),this._startLocation=ht(this.base)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router,n=t.options.scrollBehavior,r=Pe&&n;r&&this.listeners.push(Ie());var i=function(){var n=e.current,i=ht(e.base);e.current===g&&i===e._startLocation||e.transitionTo(i,(function(e){r&&Se(t,e,n,!0)}))};window.addEventListener("popstate",i),this.listeners.push((function(){window.removeEventListener("popstate",i)}))}},t.prototype.go=function(e){window.history.go(e)},t.prototype.push=function(e,t,n){var r=this,i=this,s=i.current;this.transitionTo(e,(function(e){Re(A(r.base+e.fullPath)),Se(r.router,e,s,!1),t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this,i=this,s=i.current;this.transitionTo(e,(function(e){Me(A(r.base+e.fullPath)),Se(r.router,e,s,!1),t&&t(e)}),n)},t.prototype.ensureURL=function(e){if(ht(this.base)!==this.current.fullPath){var t=A(this.base+this.current.fullPath);e?Re(t):Me(t)}},t.prototype.getCurrentLocation=function(){return ht(this.base)},t}(et);function ht(e){var t=window.location.pathname,n=t.toLowerCase(),r=e.toLowerCase();return!e||n!==r&&0!==n.indexOf(A(r+"/"))||(t=t.slice(e.length)),(t||"/")+window.location.search+window.location.hash}var dt=function(e){function t(t,n,r){e.call(this,t,n),r&&ft(this.base)||pt()}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router,n=t.options.scrollBehavior,r=Pe&&n;r&&this.listeners.push(Ie());var i=function(){var t=e.current;pt()&&e.transitionTo(mt(),(function(n){r&&Se(e.router,n,t,!0),Pe||yt(n.fullPath)}))},s=Pe?"popstate":"hashchange";window.addEventListener(s,i),this.listeners.push((function(){window.removeEventListener(s,i)}))}},t.prototype.push=function(e,t,n){var r=this,i=this,s=i.current;this.transitionTo(e,(function(e){vt(e.fullPath),Se(r.router,e,s,!1),t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this,i=this,s=i.current;this.transitionTo(e,(function(e){yt(e.fullPath),Se(r.router,e,s,!1),t&&t(e)}),n)},t.prototype.go=function(e){window.history.go(e)},t.prototype.ensureURL=function(e){var t=this.current.fullPath;mt()!==t&&(e?vt(t):yt(t))},t.prototype.getCurrentLocation=function(){return mt()},t}(et);function ft(e){var t=ht(e);if(!/^\/#/.test(t))return window.location.replace(A(e+"/#"+t)),!0}function pt(){var e=mt();return"/"===e.charAt(0)||(yt("/"+e),!1)}function mt(){var e=window.location.href,t=e.indexOf("#");return t<0?"":(e=e.slice(t+1),e)}function gt(e){var t=window.location.href,n=t.indexOf("#"),r=n>=0?t.slice(0,n):t;return r+"#"+e}function vt(e){Pe?Re(gt(e)):window.location.hash=e}function yt(e){Pe?Me(gt(e)):window.location.replace(gt(e))}var wt=function(e){function t(t,n){e.call(this,t,n),this.stack=[],this.index=-1}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.push=function(e,t,n){var r=this;this.transitionTo(e,(function(e){r.stack=r.stack.slice(0,r.index+1).concat(e),r.index++,t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this;this.transitionTo(e,(function(e){r.stack=r.stack.slice(0,r.index).concat(e),t&&t(e)}),n)},t.prototype.go=function(e){var t=this,n=this.index+e;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){var e=t.current;t.index=n,t.updateRoute(r),t.router.afterHooks.forEach((function(t){t&&t(r,e)}))}),(function(e){Ge(e,$e.duplicated)&&(t.index=n)}))}},t.prototype.getCurrentLocation=function(){var e=this.stack[this.stack.length-1];return e?e.fullPath:"/"},t.prototype.ensureURL=function(){},t}(et),bt=function(e){void 0===e&&(e={}),this.app=null,this.apps=[],this.options=e,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=fe(e.routes||[],this);var t=e.mode||"hash";switch(this.fallback="history"===t&&!Pe&&!1!==e.fallback,this.fallback&&(t="hash"),ce||(t="abstract"),this.mode=t,t){case"history":this.history=new lt(this,e.base);break;case"hash":this.history=new dt(this,e.base,this.fallback);break;case"abstract":this.history=new wt(this,e.base);break;default:0}},_t={currentRoute:{configurable:!0}};bt.prototype.match=function(e,t,n){return this.matcher.match(e,t,n)},_t.currentRoute.get=function(){return this.history&&this.history.current},bt.prototype.init=function(e){var t=this;if(this.apps.push(e),e.$once("hook:destroyed",(function(){var n=t.apps.indexOf(e);n>-1&&t.apps.splice(n,1),t.app===e&&(t.app=t.apps[0]||null),t.app||t.history.teardown()})),!this.app){this.app=e;var n=this.history;if(n instanceof lt||n instanceof dt){var r=function(e){var r=n.current,i=t.options.scrollBehavior,s=Pe&&i;s&&"fullPath"in e&&Se(t,e,r,!1)},i=function(e){n.setupListeners(),r(e)};n.transitionTo(n.getCurrentLocation(),i,i)}n.listen((function(e){t.apps.forEach((function(t){t._route=e}))}))}},bt.prototype.beforeEach=function(e){return St(this.beforeHooks,e)},bt.prototype.beforeResolve=function(e){return St(this.resolveHooks,e)},bt.prototype.afterEach=function(e){return St(this.afterHooks,e)},bt.prototype.onReady=function(e,t){this.history.onReady(e,t)},bt.prototype.onError=function(e){this.history.onError(e)},bt.prototype.push=function(e,t,n){var r=this;if(!t&&!n&&"undefined"!==typeof Promise)return new Promise((function(t,n){r.history.push(e,t,n)}));this.history.push(e,t,n)},bt.prototype.replace=function(e,t,n){var r=this;if(!t&&!n&&"undefined"!==typeof Promise)return new Promise((function(t,n){r.history.replace(e,t,n)}));this.history.replace(e,t,n)},bt.prototype.go=function(e){this.history.go(e)},bt.prototype.back=function(){this.go(-1)},bt.prototype.forward=function(){this.go(1)},bt.prototype.getMatchedComponents=function(e){var t=e?e.matched?e:this.resolve(e).route:this.currentRoute;return t?[].concat.apply([],t.matched.map((function(e){return Object.keys(e.components).map((function(t){return e.components[t]}))}))):[]},bt.prototype.resolve=function(e,t,n){t=t||this.history.current;var r=X(e,t,n,this),i=this.match(r,t),s=i.redirectedFrom||i.fullPath,o=this.history.base,a=Et(o,s,this.mode);return{location:r,route:i,href:a,normalizedTo:r,resolved:i}},bt.prototype.getRoutes=function(){return this.matcher.getRoutes()},bt.prototype.addRoute=function(e,t){this.matcher.addRoute(e,t),this.history.current!==g&&this.history.transitionTo(this.history.getCurrentLocation())},bt.prototype.addRoutes=function(e){this.matcher.addRoutes(e),this.history.current!==g&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(bt.prototype,_t);var It=bt;function St(e,t){return e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function Et(e,t,n){var r="hash"===n?"#"+t:t;return e?A(e+"/"+r):r}bt.install=ae,bt.version="3.6.5",bt.isNavigationFailure=Ge,bt.NavigationFailureType=$e,bt.START_LOCATION=g,ce&&window.Vue&&window.Vue.use(bt)},144:function(e,t,n){n.d(t,{ZP:function(){return Qr}});
/*!
 * Vue.js v2.7.14
 * (c) 2014-2022 Evan You
 * Released under the MIT License.
 */
var r=Object.freeze({}),i=Array.isArray;function s(e){return void 0===e||null===e}function o(e){return void 0!==e&&null!==e}function a(e){return!0===e}function c(e){return!1===e}function u(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function l(e){return"function"===typeof e}function h(e){return null!==e&&"object"===typeof e}var d=Object.prototype.toString;function f(e){return"[object Object]"===d.call(e)}function p(e){return"[object RegExp]"===d.call(e)}function m(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function g(e){return o(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function v(e){return null==e?"":Array.isArray(e)||f(e)&&e.toString===d?JSON.stringify(e,null,2):String(e)}function y(e){var t=parseFloat(e);return isNaN(t)?e:t}function w(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}w("slot,component",!0);var b=w("key,ref,slot,slot-scope,is");function _(e,t){var n=e.length;if(n){if(t===e[n-1])return void(e.length=n-1);var r=e.indexOf(t);if(r>-1)return e.splice(r,1)}}var I=Object.prototype.hasOwnProperty;function S(e,t){return I.call(e,t)}function E(e){var t=Object.create(null);return function(n){var r=t[n];return r||(t[n]=e(n))}}var T=/-(\w)/g,C=E((function(e){return e.replace(T,(function(e,t){return t?t.toUpperCase():""}))})),k=E((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})),x=/\B([A-Z])/g,A=E((function(e){return e.replace(x,"-$1").toLowerCase()}));function O(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function N(e,t){return e.bind(t)}var D=Function.prototype.bind?N:O;function L(e,t){t=t||0;var n=e.length-t,r=new Array(n);while(n--)r[n]=e[n+t];return r}function P(e,t){for(var n in t)e[n]=t[n];return e}function R(e){for(var t={},n=0;n<e.length;n++)e[n]&&P(t,e[n]);return t}function M(e,t,n){}var $=function(e,t,n){return!1},F=function(e){return e};function V(e,t){if(e===t)return!0;var n=h(e),r=h(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{var i=Array.isArray(e),s=Array.isArray(t);if(i&&s)return e.length===t.length&&e.every((function(e,n){return V(e,t[n])}));if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(i||s)return!1;var o=Object.keys(e),a=Object.keys(t);return o.length===a.length&&o.every((function(n){return V(e[n],t[n])}))}catch(c){return!1}}function B(e,t){for(var n=0;n<e.length;n++)if(V(e[n],t))return n;return-1}function j(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}function U(e,t){return e===t?0===e&&1/e!==1/t:e===e||t===t}var z="data-server-rendered",q=["component","directive","filter"],H=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch","renderTracked","renderTriggered"],G={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:$,isReservedAttr:$,isUnknownElement:$,getTagNamespace:M,parsePlatformTagName:F,mustUseProp:$,async:!0,_lifecycleHooks:H},K=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function W(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function Z(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var Q=new RegExp("[^".concat(K.source,".$_\\d]"));function J(e){if(!Q.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}var Y="__proto__"in{},X="undefined"!==typeof window,ee=X&&window.navigator.userAgent.toLowerCase(),te=ee&&/msie|trident/.test(ee),ne=ee&&ee.indexOf("msie 9.0")>0,re=ee&&ee.indexOf("edge/")>0;ee&&ee.indexOf("android");var ie=ee&&/iphone|ipad|ipod|ios/.test(ee);ee&&/chrome\/\d+/.test(ee),ee&&/phantomjs/.test(ee);var se,oe=ee&&ee.match(/firefox\/(\d+)/),ae={}.watch,ce=!1;if(X)try{var ue={};Object.defineProperty(ue,"passive",{get:function(){ce=!0}}),window.addEventListener("test-passive",null,ue)}catch(Jo){}var le=function(){return void 0===se&&(se=!X&&"undefined"!==typeof n.g&&(n.g["process"]&&"server"===n.g["process"].env.VUE_ENV)),se},he=X&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function de(e){return"function"===typeof e&&/native code/.test(e.toString())}var fe,pe="undefined"!==typeof Symbol&&de(Symbol)&&"undefined"!==typeof Reflect&&de(Reflect.ownKeys);fe="undefined"!==typeof Set&&de(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var me=null;function ge(e){void 0===e&&(e=null),e||me&&me._scope.off(),me=e,e&&e._scope.on()}var ve=function(){function e(e,t,n,r,i,s,o,a){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=s,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1}return Object.defineProperty(e.prototype,"child",{get:function(){return this.componentInstance},enumerable:!1,configurable:!0}),e}(),ye=function(e){void 0===e&&(e="");var t=new ve;return t.text=e,t.isComment=!0,t};function we(e){return new ve(void 0,void 0,void 0,String(e))}function be(e){var t=new ve(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var _e=0,Ie=[],Se=function(){for(var e=0;e<Ie.length;e++){var t=Ie[e];t.subs=t.subs.filter((function(e){return e})),t._pending=!1}Ie.length=0},Ee=function(){function e(){this._pending=!1,this.id=_e++,this.subs=[]}return e.prototype.addSub=function(e){this.subs.push(e)},e.prototype.removeSub=function(e){this.subs[this.subs.indexOf(e)]=null,this._pending||(this._pending=!0,Ie.push(this))},e.prototype.depend=function(t){e.target&&e.target.addDep(this)},e.prototype.notify=function(e){var t=this.subs.filter((function(e){return e}));for(var n=0,r=t.length;n<r;n++){var i=t[n];0,i.update()}},e}();Ee.target=null;var Te=[];function Ce(e){Te.push(e),Ee.target=e}function ke(){Te.pop(),Ee.target=Te[Te.length-1]}var xe=Array.prototype,Ae=Object.create(xe),Oe=["push","pop","shift","unshift","splice","sort","reverse"];Oe.forEach((function(e){var t=xe[e];Z(Ae,e,(function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i,s=t.apply(this,n),o=this.__ob__;switch(e){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&o.observeArray(i),o.dep.notify(),s}))}));var Ne=Object.getOwnPropertyNames(Ae),De={},Le=!0;function Pe(e){Le=e}var Re={notify:M,depend:M,addSub:M,removeSub:M},Me=function(){function e(e,t,n){if(void 0===t&&(t=!1),void 0===n&&(n=!1),this.value=e,this.shallow=t,this.mock=n,this.dep=n?Re:new Ee,this.vmCount=0,Z(e,"__ob__",this),i(e)){if(!n)if(Y)e.__proto__=Ae;else for(var r=0,s=Ne.length;r<s;r++){var o=Ne[r];Z(e,o,Ae[o])}t||this.observeArray(e)}else{var a=Object.keys(e);for(r=0;r<a.length;r++){o=a[r];Fe(e,o,De,void 0,t,n)}}}return e.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)$e(e[t],!1,this.mock)},e}();function $e(e,t,n){return e&&S(e,"__ob__")&&e.__ob__ instanceof Me?e.__ob__:!Le||!n&&le()||!i(e)&&!f(e)||!Object.isExtensible(e)||e.__v_skip||He(e)||e instanceof ve?void 0:new Me(e,t,n)}function Fe(e,t,n,r,s,o){var a=new Ee,c=Object.getOwnPropertyDescriptor(e,t);if(!c||!1!==c.configurable){var u=c&&c.get,l=c&&c.set;u&&!l||n!==De&&2!==arguments.length||(n=e[t]);var h=!s&&$e(n,!1,o);return Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=u?u.call(e):n;return Ee.target&&(a.depend(),h&&(h.dep.depend(),i(t)&&je(t))),He(t)&&!s?t.value:t},set:function(t){var r=u?u.call(e):n;if(U(r,t)){if(l)l.call(e,t);else{if(u)return;if(!s&&He(r)&&!He(t))return void(r.value=t);n=t}h=!s&&$e(t,!1,o),a.notify()}}}),a}}function Ve(e,t,n){if(!qe(e)){var r=e.__ob__;return i(e)&&m(t)?(e.length=Math.max(e.length,t),e.splice(t,1,n),r&&!r.shallow&&r.mock&&$e(n,!1,!0),n):t in e&&!(t in Object.prototype)?(e[t]=n,n):e._isVue||r&&r.vmCount?n:r?(Fe(r.value,t,n,void 0,r.shallow,r.mock),r.dep.notify(),n):(e[t]=n,n)}}function Be(e,t){if(i(e)&&m(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||qe(e)||S(e,t)&&(delete e[t],n&&n.dep.notify())}}function je(e){for(var t=void 0,n=0,r=e.length;n<r;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),i(t)&&je(t)}function Ue(e){return ze(e,!0),Z(e,"__v_isShallow",!0),e}function ze(e,t){if(!qe(e)){$e(e,t,le());0}}function qe(e){return!(!e||!e.__v_isReadonly)}function He(e){return!(!e||!0!==e.__v_isRef)}function Ge(e,t,n){Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:function(){var e=t[n];if(He(e))return e.value;var r=e&&e.__ob__;return r&&r.dep.depend(),e},set:function(e){var r=t[n];He(r)&&!He(e)?r.value=e:t[n]=e}})}var Ke="watcher";"".concat(Ke," callback"),"".concat(Ke," getter"),"".concat(Ke," cleanup");var We;var Ze=function(){function e(e){void 0===e&&(e=!1),this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=We,!e&&We&&(this.index=(We.scopes||(We.scopes=[])).push(this)-1)}return e.prototype.run=function(e){if(this.active){var t=We;try{return We=this,e()}finally{We=t}}else 0},e.prototype.on=function(){We=this},e.prototype.off=function(){We=this.parent},e.prototype.stop=function(e){if(this.active){var t=void 0,n=void 0;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].teardown();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){var r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}},e}();function Qe(e,t){void 0===t&&(t=We),t&&t.active&&t.effects.push(e)}function Je(e){var t=e._provided,n=e.$parent&&e.$parent._provided;return n===t?e._provided=Object.create(n):t}var Ye=E((function(e){var t="&"===e.charAt(0);e=t?e.slice(1):e;var n="~"===e.charAt(0);e=n?e.slice(1):e;var r="!"===e.charAt(0);return e=r?e.slice(1):e,{name:e,once:n,capture:r,passive:t}}));function Xe(e,t){function n(){var e=n.fns;if(!i(e))return Zt(e,null,arguments,t,"v-on handler");for(var r=e.slice(),s=0;s<r.length;s++)Zt(r[s],null,arguments,t,"v-on handler")}return n.fns=e,n}function et(e,t,n,r,i,o){var c,u,l,h;for(c in e)u=e[c],l=t[c],h=Ye(c),s(u)||(s(l)?(s(u.fns)&&(u=e[c]=Xe(u,o)),a(h.once)&&(u=e[c]=i(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,e[c]=l));for(c in t)s(e[c])&&(h=Ye(c),r(h.name,t[c],h.capture))}function tt(e,t,n){var r;e instanceof ve&&(e=e.data.hook||(e.data.hook={}));var i=e[t];function c(){n.apply(this,arguments),_(r.fns,c)}s(i)?r=Xe([c]):o(i.fns)&&a(i.merged)?(r=i,r.fns.push(c)):r=Xe([i,c]),r.merged=!0,e[t]=r}function nt(e,t,n){var r=t.options.props;if(!s(r)){var i={},a=e.attrs,c=e.props;if(o(a)||o(c))for(var u in r){var l=A(u);rt(i,c,u,l,!0)||rt(i,a,u,l,!1)}return i}}function rt(e,t,n,r,i){if(o(t)){if(S(t,n))return e[n]=t[n],i||delete t[n],!0;if(S(t,r))return e[n]=t[r],i||delete t[r],!0}return!1}function it(e){for(var t=0;t<e.length;t++)if(i(e[t]))return Array.prototype.concat.apply([],e);return e}function st(e){return u(e)?[we(e)]:i(e)?at(e):void 0}function ot(e){return o(e)&&o(e.text)&&c(e.isComment)}function at(e,t){var n,r,c,l,h=[];for(n=0;n<e.length;n++)r=e[n],s(r)||"boolean"===typeof r||(c=h.length-1,l=h[c],i(r)?r.length>0&&(r=at(r,"".concat(t||"","_").concat(n)),ot(r[0])&&ot(l)&&(h[c]=we(l.text+r[0].text),r.shift()),h.push.apply(h,r)):u(r)?ot(l)?h[c]=we(l.text+r):""!==r&&h.push(we(r)):ot(r)&&ot(l)?h[c]=we(l.text+r.text):(a(e._isVList)&&o(r.tag)&&s(r.key)&&o(t)&&(r.key="__vlist".concat(t,"_").concat(n,"__")),h.push(r)));return h}function ct(e,t){var n,r,s,a,c=null;if(i(e)||"string"===typeof e)for(c=new Array(e.length),n=0,r=e.length;n<r;n++)c[n]=t(e[n],n);else if("number"===typeof e)for(c=new Array(e),n=0;n<e;n++)c[n]=t(n+1,n);else if(h(e))if(pe&&e[Symbol.iterator]){c=[];var u=e[Symbol.iterator](),l=u.next();while(!l.done)c.push(t(l.value,c.length)),l=u.next()}else for(s=Object.keys(e),c=new Array(s.length),n=0,r=s.length;n<r;n++)a=s[n],c[n]=t(e[a],a,n);return o(c)||(c=[]),c._isVList=!0,c}function ut(e,t,n,r){var i,s=this.$scopedSlots[e];s?(n=n||{},r&&(n=P(P({},r),n)),i=s(n)||(l(t)?t():t)):i=this.$slots[e]||(l(t)?t():t);var o=n&&n.slot;return o?this.$createElement("template",{slot:o},i):i}function lt(e){return Sr(this.$options,"filters",e,!0)||F}function ht(e,t){return i(e)?-1===e.indexOf(t):e!==t}function dt(e,t,n,r,i){var s=G.keyCodes[t]||n;return i&&r&&!G.keyCodes[t]?ht(i,r):s?ht(s,e):r?A(r)!==t:void 0===e}function ft(e,t,n,r,s){if(n)if(h(n)){i(n)&&(n=R(n));var o=void 0,a=function(i){if("class"===i||"style"===i||b(i))o=e;else{var a=e.attrs&&e.attrs.type;o=r||G.mustUseProp(t,a,i)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var c=C(i),u=A(i);if(!(c in o)&&!(u in o)&&(o[i]=n[i],s)){var l=e.on||(e.on={});l["update:".concat(i)]=function(e){n[i]=e}}};for(var c in n)a(c)}else;return e}function pt(e,t){var n=this._staticTrees||(this._staticTrees=[]),r=n[e];return r&&!t||(r=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,this._c,this),gt(r,"__static__".concat(e),!1)),r}function mt(e,t,n){return gt(e,"__once__".concat(t).concat(n?"_".concat(n):""),!0),e}function gt(e,t,n){if(i(e))for(var r=0;r<e.length;r++)e[r]&&"string"!==typeof e[r]&&vt(e[r],"".concat(t,"_").concat(r),n);else vt(e,t,n)}function vt(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function yt(e,t){if(t)if(f(t)){var n=e.on=e.on?P({},e.on):{};for(var r in t){var i=n[r],s=t[r];n[r]=i?[].concat(i,s):s}}else;return e}function wt(e,t,n,r){t=t||{$stable:!n};for(var s=0;s<e.length;s++){var o=e[s];i(o)?wt(o,t,n):o&&(o.proxy&&(o.fn.proxy=!0),t[o.key]=o.fn)}return r&&(t.$key=r),t}function bt(e,t){for(var n=0;n<t.length;n+=2){var r=t[n];"string"===typeof r&&r&&(e[t[n]]=t[n+1])}return e}function _t(e,t){return"string"===typeof e?t+e:e}function It(e){e._o=mt,e._n=y,e._s=v,e._l=ct,e._t=ut,e._q=V,e._i=B,e._m=pt,e._f=lt,e._k=dt,e._b=ft,e._v=we,e._e=ye,e._u=wt,e._g=yt,e._d=bt,e._p=_t}function St(e,t){if(!e||!e.length)return{};for(var n={},r=0,i=e.length;r<i;r++){var s=e[r],o=s.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,s.context!==t&&s.fnContext!==t||!o||null==o.slot)(n.default||(n.default=[])).push(s);else{var a=o.slot,c=n[a]||(n[a]=[]);"template"===s.tag?c.push.apply(c,s.children||[]):c.push(s)}}for(var u in n)n[u].every(Et)&&delete n[u];return n}function Et(e){return e.isComment&&!e.asyncFactory||" "===e.text}function Tt(e){return e.isComment&&e.asyncFactory}function Ct(e,t,n,i){var s,o=Object.keys(n).length>0,a=t?!!t.$stable:!o,c=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&i&&i!==r&&c===i.$key&&!o&&!i.$hasNormal)return i;for(var u in s={},t)t[u]&&"$"!==u[0]&&(s[u]=kt(e,n,u,t[u]))}else s={};for(var l in n)l in s||(s[l]=xt(n,l));return t&&Object.isExtensible(t)&&(t._normalized=s),Z(s,"$stable",a),Z(s,"$key",c),Z(s,"$hasNormal",o),s}function kt(e,t,n,r){var s=function(){var t=me;ge(e);var n=arguments.length?r.apply(null,arguments):r({});n=n&&"object"===typeof n&&!i(n)?[n]:st(n);var s=n&&n[0];return ge(t),n&&(!s||1===n.length&&s.isComment&&!Tt(s))?void 0:n};return r.proxy&&Object.defineProperty(t,n,{get:s,enumerable:!0,configurable:!0}),s}function xt(e,t){return function(){return e[t]}}function At(e){var t=e.$options,n=t.setup;if(n){var r=e._setupContext=Ot(e);ge(e),Ce();var i=Zt(n,null,[e._props||Ue({}),r],e,"setup");if(ke(),ge(),l(i))t.render=i;else if(h(i))if(e._setupState=i,i.__sfc){var s=e._setupProxy={};for(var o in i)"__sfc"!==o&&Ge(s,i,o)}else for(var o in i)W(o)||Ge(e,i,o);else 0}}function Ot(e){return{get attrs(){if(!e._attrsProxy){var t=e._attrsProxy={};Z(t,"_v_attr_proxy",!0),Nt(t,e.$attrs,r,e,"$attrs")}return e._attrsProxy},get listeners(){if(!e._listenersProxy){var t=e._listenersProxy={};Nt(t,e.$listeners,r,e,"$listeners")}return e._listenersProxy},get slots(){return Lt(e)},emit:D(e.$emit,e),expose:function(t){t&&Object.keys(t).forEach((function(n){return Ge(e,t,n)}))}}}function Nt(e,t,n,r,i){var s=!1;for(var o in t)o in e?t[o]!==n[o]&&(s=!0):(s=!0,Dt(e,o,r,i));for(var o in e)o in t||(s=!0,delete e[o]);return s}function Dt(e,t,n,r){Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){return n[r][t]}})}function Lt(e){return e._slotsProxy||Pt(e._slotsProxy={},e.$scopedSlots),e._slotsProxy}function Pt(e,t){for(var n in t)e[n]=t[n];for(var n in e)n in t||delete e[n]}function Rt(e){e._vnode=null,e._staticTrees=null;var t=e.$options,n=e.$vnode=t._parentVnode,i=n&&n.context;e.$slots=St(t._renderChildren,i),e.$scopedSlots=n?Ct(e.$parent,n.data.scopedSlots,e.$slots):r,e._c=function(t,n,r,i){return qt(e,t,n,r,i,!1)},e.$createElement=function(t,n,r,i){return qt(e,t,n,r,i,!0)};var s=n&&n.data;Fe(e,"$attrs",s&&s.attrs||r,null,!0),Fe(e,"$listeners",t._parentListeners||r,null,!0)}var Mt=null;function $t(e){It(e.prototype),e.prototype.$nextTick=function(e){return cn(e,this)},e.prototype._render=function(){var e,t=this,n=t.$options,r=n.render,s=n._parentVnode;s&&t._isMounted&&(t.$scopedSlots=Ct(t.$parent,s.data.scopedSlots,t.$slots,t.$scopedSlots),t._slotsProxy&&Pt(t._slotsProxy,t.$scopedSlots)),t.$vnode=s;try{ge(t),Mt=t,e=r.call(t._renderProxy,t.$createElement)}catch(Jo){Wt(Jo,t,"render"),e=t._vnode}finally{Mt=null,ge()}return i(e)&&1===e.length&&(e=e[0]),e instanceof ve||(e=ye()),e.parent=s,e}}function Ft(e,t){return(e.__esModule||pe&&"Module"===e[Symbol.toStringTag])&&(e=e.default),h(e)?t.extend(e):e}function Vt(e,t,n,r,i){var s=ye();return s.asyncFactory=e,s.asyncMeta={data:t,context:n,children:r,tag:i},s}function Bt(e,t){if(a(e.error)&&o(e.errorComp))return e.errorComp;if(o(e.resolved))return e.resolved;var n=Mt;if(n&&o(e.owners)&&-1===e.owners.indexOf(n)&&e.owners.push(n),a(e.loading)&&o(e.loadingComp))return e.loadingComp;if(n&&!o(e.owners)){var r=e.owners=[n],i=!0,c=null,u=null;n.$on("hook:destroyed",(function(){return _(r,n)}));var l=function(e){for(var t=0,n=r.length;t<n;t++)r[t].$forceUpdate();e&&(r.length=0,null!==c&&(clearTimeout(c),c=null),null!==u&&(clearTimeout(u),u=null))},d=j((function(n){e.resolved=Ft(n,t),i?r.length=0:l(!0)})),f=j((function(t){o(e.errorComp)&&(e.error=!0,l(!0))})),p=e(d,f);return h(p)&&(g(p)?s(e.resolved)&&p.then(d,f):g(p.component)&&(p.component.then(d,f),o(p.error)&&(e.errorComp=Ft(p.error,t)),o(p.loading)&&(e.loadingComp=Ft(p.loading,t),0===p.delay?e.loading=!0:c=setTimeout((function(){c=null,s(e.resolved)&&s(e.error)&&(e.loading=!0,l(!1))}),p.delay||200)),o(p.timeout)&&(u=setTimeout((function(){u=null,s(e.resolved)&&f(null)}),p.timeout)))),i=!1,e.loading?e.loadingComp:e.resolved}}function jt(e){if(i(e))for(var t=0;t<e.length;t++){var n=e[t];if(o(n)&&(o(n.componentOptions)||Tt(n)))return n}}var Ut=1,zt=2;function qt(e,t,n,r,s,o){return(i(n)||u(n))&&(s=r,r=n,n=void 0),a(o)&&(s=zt),Ht(e,t,n,r,s)}function Ht(e,t,n,r,s){if(o(n)&&o(n.__ob__))return ye();if(o(n)&&o(n.is)&&(t=n.is),!t)return ye();var a,c;if(i(r)&&l(r[0])&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),s===zt?r=st(r):s===Ut&&(r=it(r)),"string"===typeof t){var u=void 0;c=e.$vnode&&e.$vnode.ns||G.getTagNamespace(t),a=G.isReservedTag(t)?new ve(G.parsePlatformTagName(t),n,r,void 0,void 0,e):n&&n.pre||!o(u=Sr(e.$options,"components",t))?new ve(t,n,r,void 0,void 0,e):or(u,n,e,r,t)}else a=or(t,n,e,r);return i(a)?a:o(a)?(o(c)&&Gt(a,c),o(n)&&Kt(n),a):ye()}function Gt(e,t,n){if(e.ns=t,"foreignObject"===e.tag&&(t=void 0,n=!0),o(e.children))for(var r=0,i=e.children.length;r<i;r++){var c=e.children[r];o(c.tag)&&(s(c.ns)||a(n)&&"svg"!==c.tag)&&Gt(c,t,n)}}function Kt(e){h(e.style)&&fn(e.style),h(e.class)&&fn(e.class)}function Wt(e,t,n){Ce();try{if(t){var r=t;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var s=0;s<i.length;s++)try{var o=!1===i[s].call(r,e,t,n);if(o)return}catch(Jo){Qt(Jo,r,"errorCaptured hook")}}}Qt(e,t,n)}finally{ke()}}function Zt(e,t,n,r,i){var s;try{s=n?e.apply(t,n):e.call(t),s&&!s._isVue&&g(s)&&!s._handled&&(s.catch((function(e){return Wt(e,r,i+" (Promise/async)")})),s._handled=!0)}catch(Jo){Wt(Jo,r,i)}return s}function Qt(e,t,n){if(G.errorHandler)try{return G.errorHandler.call(null,e,t,n)}catch(Jo){Jo!==e&&Jt(Jo,null,"config.errorHandler")}Jt(e,t,n)}function Jt(e,t,n){if(!X||"undefined"===typeof console)throw e;console.error(e)}var Yt,Xt=!1,en=[],tn=!1;function nn(){tn=!1;var e=en.slice(0);en.length=0;for(var t=0;t<e.length;t++)e[t]()}if("undefined"!==typeof Promise&&de(Promise)){var rn=Promise.resolve();Yt=function(){rn.then(nn),ie&&setTimeout(M)},Xt=!0}else if(te||"undefined"===typeof MutationObserver||!de(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())Yt="undefined"!==typeof setImmediate&&de(setImmediate)?function(){setImmediate(nn)}:function(){setTimeout(nn,0)};else{var sn=1,on=new MutationObserver(nn),an=document.createTextNode(String(sn));on.observe(an,{characterData:!0}),Yt=function(){sn=(sn+1)%2,an.data=String(sn)},Xt=!0}function cn(e,t){var n;if(en.push((function(){if(e)try{e.call(t)}catch(Jo){Wt(Jo,t,"nextTick")}else n&&n(t)})),tn||(tn=!0,Yt()),!e&&"undefined"!==typeof Promise)return new Promise((function(e){n=e}))}function un(e){return function(t,n){if(void 0===n&&(n=me),n)return ln(n,e,t)}}function ln(e,t,n){var r=e.$options;r[t]=mr(r[t],n)}un("beforeMount"),un("mounted"),un("beforeUpdate"),un("updated"),un("beforeDestroy"),un("destroyed"),un("activated"),un("deactivated"),un("serverPrefetch"),un("renderTracked"),un("renderTriggered"),un("errorCaptured");var hn="2.7.14";var dn=new fe;function fn(e){return pn(e,dn),dn.clear(),e}function pn(e,t){var n,r,s=i(e);if(!(!s&&!h(e)||e.__v_skip||Object.isFrozen(e)||e instanceof ve)){if(e.__ob__){var o=e.__ob__.dep.id;if(t.has(o))return;t.add(o)}if(s){n=e.length;while(n--)pn(e[n],t)}else if(He(e))pn(e.value,t);else{r=Object.keys(e),n=r.length;while(n--)pn(e[r[n]],t)}}}var mn,gn=0,vn=function(){function e(e,t,n,r,i){Qe(this,We&&!We._vm?We:e?e._scope:void 0),(this.vm=e)&&i&&(e._watcher=this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++gn,this.active=!0,this.post=!1,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new fe,this.newDepIds=new fe,this.expression="",l(t)?this.getter=t:(this.getter=J(t),this.getter||(this.getter=M)),this.value=this.lazy?void 0:this.get()}return e.prototype.get=function(){var e;Ce(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(Jo){if(!this.user)throw Jo;Wt(Jo,t,'getter for watcher "'.concat(this.expression,'"'))}finally{this.deep&&fn(e),ke(),this.cleanupDeps()}return e},e.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},e.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},e.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Zn(this)},e.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||h(e)||this.deep){var t=this.value;if(this.value=e,this.user){var n='callback for watcher "'.concat(this.expression,'"');Zt(this.cb,this.vm,[e,t],this.vm,n)}else this.cb.call(this.vm,e,t)}}},e.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},e.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},e.prototype.teardown=function(){if(this.vm&&!this.vm._isBeingDestroyed&&_(this.vm._scope.effects,this),this.active){var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1,this.onStop&&this.onStop()}},e}();function yn(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&In(e,t)}function wn(e,t){mn.$on(e,t)}function bn(e,t){mn.$off(e,t)}function _n(e,t){var n=mn;return function r(){var i=t.apply(null,arguments);null!==i&&n.$off(e,r)}}function In(e,t,n){mn=e,et(t,n||{},wn,bn,_n,e),mn=void 0}function Sn(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this;if(i(e))for(var s=0,o=e.length;s<o;s++)r.$on(e[s],n);else(r._events[e]||(r._events[e]=[])).push(n),t.test(e)&&(r._hasHookEvent=!0);return r},e.prototype.$once=function(e,t){var n=this;function r(){n.$off(e,r),t.apply(n,arguments)}return r.fn=t,n.$on(e,r),n},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(i(e)){for(var r=0,s=e.length;r<s;r++)n.$off(e[r],t);return n}var o,a=n._events[e];if(!a)return n;if(!t)return n._events[e]=null,n;var c=a.length;while(c--)if(o=a[c],o===t||o.fn===t){a.splice(c,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?L(n):n;for(var r=L(arguments,1),i='event handler for "'.concat(e,'"'),s=0,o=n.length;s<o;s++)Zt(n[s],t,r,t,i)}return t}}var En=null;function Tn(e){var t=En;return En=e,function(){En=t}}function Cn(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._provided=n?n._provided:Object.create(null),e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function kn(e){e.prototype._update=function(e,t){var n=this,r=n.$el,i=n._vnode,s=Tn(n);n._vnode=e,n.$el=i?n.__patch__(i,e):n.__patch__(n.$el,e,t,!1),s(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n);var o=n;while(o&&o.$vnode&&o.$parent&&o.$vnode===o.$parent._vnode)o.$parent.$el=o.$el,o=o.$parent},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Ln(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||_(t.$children,e),e._scope.stop(),e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Ln(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function xn(e,t,n){var r;e.$el=t,e.$options.render||(e.$options.render=ye),Ln(e,"beforeMount"),r=function(){e._update(e._render(),n)};var i={before:function(){e._isMounted&&!e._isDestroyed&&Ln(e,"beforeUpdate")}};new vn(e,r,M,i,!0),n=!1;var s=e._preWatchers;if(s)for(var o=0;o<s.length;o++)s[o].run();return null==e.$vnode&&(e._isMounted=!0,Ln(e,"mounted")),e}function An(e,t,n,i,s){var o=i.data.scopedSlots,a=e.$scopedSlots,c=!!(o&&!o.$stable||a!==r&&!a.$stable||o&&e.$scopedSlots.$key!==o.$key||!o&&e.$scopedSlots.$key),u=!!(s||e.$options._renderChildren||c),l=e.$vnode;e.$options._parentVnode=i,e.$vnode=i,e._vnode&&(e._vnode.parent=i),e.$options._renderChildren=s;var h=i.data.attrs||r;e._attrsProxy&&Nt(e._attrsProxy,h,l.data&&l.data.attrs||r,e,"$attrs")&&(u=!0),e.$attrs=h,n=n||r;var d=e.$options._parentListeners;if(e._listenersProxy&&Nt(e._listenersProxy,n,d||r,e,"$listeners"),e.$listeners=e.$options._parentListeners=n,In(e,n,d),t&&e.$options.props){Pe(!1);for(var f=e._props,p=e.$options._propKeys||[],m=0;m<p.length;m++){var g=p[m],v=e.$options.props;f[g]=Er(g,v,t,e)}Pe(!0),e.$options.propsData=t}u&&(e.$slots=St(s,i.context),e.$forceUpdate())}function On(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function Nn(e,t){if(t){if(e._directInactive=!1,On(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)Nn(e.$children[n]);Ln(e,"activated")}}function Dn(e,t){if((!t||(e._directInactive=!0,!On(e)))&&!e._inactive){e._inactive=!0;for(var n=0;n<e.$children.length;n++)Dn(e.$children[n]);Ln(e,"deactivated")}}function Ln(e,t,n,r){void 0===r&&(r=!0),Ce();var i=me;r&&ge(e);var s=e.$options[t],o="".concat(t," hook");if(s)for(var a=0,c=s.length;a<c;a++)Zt(s[a],e,n||null,e,o);e._hasHookEvent&&e.$emit("hook:"+t),r&&ge(i),ke()}var Pn=[],Rn=[],Mn={},$n=!1,Fn=!1,Vn=0;function Bn(){Vn=Pn.length=Rn.length=0,Mn={},$n=Fn=!1}var jn=0,Un=Date.now;if(X&&!te){var zn=window.performance;zn&&"function"===typeof zn.now&&Un()>document.createEvent("Event").timeStamp&&(Un=function(){return zn.now()})}var qn=function(e,t){if(e.post){if(!t.post)return 1}else if(t.post)return-1;return e.id-t.id};function Hn(){var e,t;for(jn=Un(),Fn=!0,Pn.sort(qn),Vn=0;Vn<Pn.length;Vn++)e=Pn[Vn],e.before&&e.before(),t=e.id,Mn[t]=null,e.run();var n=Rn.slice(),r=Pn.slice();Bn(),Wn(n),Gn(r),Se(),he&&G.devtools&&he.emit("flush")}function Gn(e){var t=e.length;while(t--){var n=e[t],r=n.vm;r&&r._watcher===n&&r._isMounted&&!r._isDestroyed&&Ln(r,"updated")}}function Kn(e){e._inactive=!1,Rn.push(e)}function Wn(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,Nn(e[t],!0)}function Zn(e){var t=e.id;if(null==Mn[t]&&(e!==Ee.target||!e.noRecurse)){if(Mn[t]=!0,Fn){var n=Pn.length-1;while(n>Vn&&Pn[n].id>e.id)n--;Pn.splice(n+1,0,e)}else Pn.push(e);$n||($n=!0,cn(Hn))}}function Qn(e){var t=e.$options.provide;if(t){var n=l(t)?t.call(e):t;if(!h(n))return;for(var r=Je(e),i=pe?Reflect.ownKeys(n):Object.keys(n),s=0;s<i.length;s++){var o=i[s];Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(n,o))}}}function Jn(e){var t=Yn(e.$options.inject,e);t&&(Pe(!1),Object.keys(t).forEach((function(n){Fe(e,n,t[n])})),Pe(!0))}function Yn(e,t){if(e){for(var n=Object.create(null),r=pe?Reflect.ownKeys(e):Object.keys(e),i=0;i<r.length;i++){var s=r[i];if("__ob__"!==s){var o=e[s].from;if(o in t._provided)n[s]=t._provided[o];else if("default"in e[s]){var a=e[s].default;n[s]=l(a)?a.call(t):a}else 0}}return n}}function Xn(e,t,n,s,o){var c,u=this,l=o.options;S(s,"_uid")?(c=Object.create(s),c._original=s):(c=s,s=s._original);var h=a(l._compiled),d=!h;this.data=e,this.props=t,this.children=n,this.parent=s,this.listeners=e.on||r,this.injections=Yn(l.inject,s),this.slots=function(){return u.$slots||Ct(s,e.scopedSlots,u.$slots=St(n,s)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Ct(s,e.scopedSlots,this.slots())}}),h&&(this.$options=l,this.$slots=this.slots(),this.$scopedSlots=Ct(s,e.scopedSlots,this.$slots)),l._scopeId?this._c=function(e,t,n,r){var o=qt(c,e,t,n,r,d);return o&&!i(o)&&(o.fnScopeId=l._scopeId,o.fnContext=s),o}:this._c=function(e,t,n,r){return qt(c,e,t,n,r,d)}}function er(e,t,n,s,a){var c=e.options,u={},l=c.props;if(o(l))for(var h in l)u[h]=Er(h,l,t||r);else o(n.attrs)&&nr(u,n.attrs),o(n.props)&&nr(u,n.props);var d=new Xn(n,u,a,s,e),f=c.render.call(null,d._c,d);if(f instanceof ve)return tr(f,n,d.parent,c,d);if(i(f)){for(var p=st(f)||[],m=new Array(p.length),g=0;g<p.length;g++)m[g]=tr(p[g],n,d.parent,c,d);return m}}function tr(e,t,n,r,i){var s=be(e);return s.fnContext=n,s.fnOptions=r,t.slot&&((s.data||(s.data={})).slot=t.slot),s}function nr(e,t){for(var n in t)e[C(n)]=t[n]}function rr(e){return e.name||e.__name||e._componentTag}It(Xn.prototype);var ir={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var n=e;ir.prepatch(n,n)}else{var r=e.componentInstance=ar(e,En);r.$mount(t?e.elm:void 0,t)}},prepatch:function(e,t){var n=t.componentOptions,r=t.componentInstance=e.componentInstance;An(r,n.propsData,n.listeners,t,n.children)},insert:function(e){var t=e.context,n=e.componentInstance;n._isMounted||(n._isMounted=!0,Ln(n,"mounted")),e.data.keepAlive&&(t._isMounted?Kn(n):Nn(n,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?Dn(t,!0):t.$destroy())}},sr=Object.keys(ir);function or(e,t,n,r,i){if(!s(e)){var c=n.$options._base;if(h(e)&&(e=c.extend(e)),"function"===typeof e){var u;if(s(e.cid)&&(u=e,e=Bt(u,c),void 0===e))return Vt(u,t,n,r,i);t=t||{},Wr(e),o(t.model)&&lr(e.options,t);var l=nt(t,e,i);if(a(e.options.functional))return er(e,l,t,n,r);var d=t.on;if(t.on=t.nativeOn,a(e.options.abstract)){var f=t.slot;t={},f&&(t.slot=f)}cr(t);var p=rr(e.options)||i,m=new ve("vue-component-".concat(e.cid).concat(p?"-".concat(p):""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:l,listeners:d,tag:i,children:r},u);return m}}}function ar(e,t){var n={_isComponent:!0,_parentVnode:e,parent:t},r=e.data.inlineTemplate;return o(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new e.componentOptions.Ctor(n)}function cr(e){for(var t=e.hook||(e.hook={}),n=0;n<sr.length;n++){var r=sr[n],i=t[r],s=ir[r];i===s||i&&i._merged||(t[r]=i?ur(s,i):s)}}function ur(e,t){var n=function(n,r){e(n,r),t(n,r)};return n._merged=!0,n}function lr(e,t){var n=e.model&&e.model.prop||"value",r=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[n]=t.model.value;var s=t.on||(t.on={}),a=s[r],c=t.model.callback;o(a)?(i(a)?-1===a.indexOf(c):a!==c)&&(s[r]=[c].concat(a)):s[r]=c}var hr=M,dr=G.optionMergeStrategies;function fr(e,t,n){if(void 0===n&&(n=!0),!t)return e;for(var r,i,s,o=pe?Reflect.ownKeys(t):Object.keys(t),a=0;a<o.length;a++)r=o[a],"__ob__"!==r&&(i=e[r],s=t[r],n&&S(e,r)?i!==s&&f(i)&&f(s)&&fr(i,s):Ve(e,r,s));return e}function pr(e,t,n){return n?function(){var r=l(t)?t.call(n,n):t,i=l(e)?e.call(n,n):e;return r?fr(r,i):i}:t?e?function(){return fr(l(t)?t.call(this,this):t,l(e)?e.call(this,this):e)}:t:e}function mr(e,t){var n=t?e?e.concat(t):i(t)?t:[t]:e;return n?gr(n):n}function gr(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}function vr(e,t,n,r){var i=Object.create(e||null);return t?P(i,t):i}dr.data=function(e,t,n){return n?pr(e,t,n):t&&"function"!==typeof t?e:pr(e,t)},H.forEach((function(e){dr[e]=mr})),q.forEach((function(e){dr[e+"s"]=vr})),dr.watch=function(e,t,n,r){if(e===ae&&(e=void 0),t===ae&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var s={};for(var o in P(s,e),t){var a=s[o],c=t[o];a&&!i(a)&&(a=[a]),s[o]=a?a.concat(c):i(c)?c:[c]}return s},dr.props=dr.methods=dr.inject=dr.computed=function(e,t,n,r){if(!e)return t;var i=Object.create(null);return P(i,e),t&&P(i,t),i},dr.provide=function(e,t){return e?function(){var n=Object.create(null);return fr(n,l(e)?e.call(this):e),t&&fr(n,l(t)?t.call(this):t,!1),n}:t};var yr=function(e,t){return void 0===t?e:t};function wr(e,t){var n=e.props;if(n){var r,s,o,a={};if(i(n)){r=n.length;while(r--)s=n[r],"string"===typeof s&&(o=C(s),a[o]={type:null})}else if(f(n))for(var c in n)s=n[c],o=C(c),a[o]=f(s)?s:{type:s};else 0;e.props=a}}function br(e,t){var n=e.inject;if(n){var r=e.inject={};if(i(n))for(var s=0;s<n.length;s++)r[n[s]]={from:n[s]};else if(f(n))for(var o in n){var a=n[o];r[o]=f(a)?P({from:o},a):{from:a}}else 0}}function _r(e){var t=e.directives;if(t)for(var n in t){var r=t[n];l(r)&&(t[n]={bind:r,update:r})}}function Ir(e,t,n){if(l(t)&&(t=t.options),wr(t,n),br(t,n),_r(t),!t._base&&(t.extends&&(e=Ir(e,t.extends,n)),t.mixins))for(var r=0,i=t.mixins.length;r<i;r++)e=Ir(e,t.mixins[r],n);var s,o={};for(s in e)a(s);for(s in t)S(e,s)||a(s);function a(r){var i=dr[r]||yr;o[r]=i(e[r],t[r],n,r)}return o}function Sr(e,t,n,r){if("string"===typeof n){var i=e[t];if(S(i,n))return i[n];var s=C(n);if(S(i,s))return i[s];var o=k(s);if(S(i,o))return i[o];var a=i[n]||i[s]||i[o];return a}}function Er(e,t,n,r){var i=t[e],s=!S(n,e),o=n[e],a=Ar(Boolean,i.type);if(a>-1)if(s&&!S(i,"default"))o=!1;else if(""===o||o===A(e)){var c=Ar(String,i.type);(c<0||a<c)&&(o=!0)}if(void 0===o){o=Tr(r,i,e);var u=Le;Pe(!0),$e(o),Pe(u)}return o}function Tr(e,t,n){if(S(t,"default")){var r=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:l(r)&&"Function"!==kr(t.type)?r.call(e):r}}var Cr=/^\s*function (\w+)/;function kr(e){var t=e&&e.toString().match(Cr);return t?t[1]:""}function xr(e,t){return kr(e)===kr(t)}function Ar(e,t){if(!i(t))return xr(t,e)?0:-1;for(var n=0,r=t.length;n<r;n++)if(xr(t[n],e))return n;return-1}var Or={enumerable:!0,configurable:!0,get:M,set:M};function Nr(e,t,n){Or.get=function(){return this[t][n]},Or.set=function(e){this[t][n]=e},Object.defineProperty(e,n,Or)}function Dr(e){var t=e.$options;if(t.props&&Lr(e,t.props),At(e),t.methods&&jr(e,t.methods),t.data)Pr(e);else{var n=$e(e._data={});n&&n.vmCount++}t.computed&&$r(e,t.computed),t.watch&&t.watch!==ae&&Ur(e,t.watch)}function Lr(e,t){var n=e.$options.propsData||{},r=e._props=Ue({}),i=e.$options._propKeys=[],s=!e.$parent;s||Pe(!1);var o=function(s){i.push(s);var o=Er(s,t,n,e);Fe(r,s,o),s in e||Nr(e,"_props",s)};for(var a in t)o(a);Pe(!0)}function Pr(e){var t=e.$options.data;t=e._data=l(t)?Rr(t,e):t||{},f(t)||(t={});var n=Object.keys(t),r=e.$options.props,i=(e.$options.methods,n.length);while(i--){var s=n[i];0,r&&S(r,s)||W(s)||Nr(e,"_data",s)}var o=$e(t);o&&o.vmCount++}function Rr(e,t){Ce();try{return e.call(t,t)}catch(Jo){return Wt(Jo,t,"data()"),{}}finally{ke()}}var Mr={lazy:!0};function $r(e,t){var n=e._computedWatchers=Object.create(null),r=le();for(var i in t){var s=t[i],o=l(s)?s:s.get;0,r||(n[i]=new vn(e,o||M,M,Mr)),i in e||Fr(e,i,s)}}function Fr(e,t,n){var r=!le();l(n)?(Or.get=r?Vr(t):Br(n),Or.set=M):(Or.get=n.get?r&&!1!==n.cache?Vr(t):Br(n.get):M,Or.set=n.set||M),Object.defineProperty(e,t,Or)}function Vr(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),Ee.target&&t.depend(),t.value}}function Br(e){return function(){return e.call(this,this)}}function jr(e,t){e.$options.props;for(var n in t)e[n]="function"!==typeof t[n]?M:D(t[n],e)}function Ur(e,t){for(var n in t){var r=t[n];if(i(r))for(var s=0;s<r.length;s++)zr(e,n,r[s]);else zr(e,n,r)}}function zr(e,t,n,r){return f(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=e[n]),e.$watch(t,n,r)}function qr(e){var t={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=Ve,e.prototype.$delete=Be,e.prototype.$watch=function(e,t,n){var r=this;if(f(t))return zr(r,e,t,n);n=n||{},n.user=!0;var i=new vn(r,e,t,n);if(n.immediate){var s='callback for immediate watcher "'.concat(i.expression,'"');Ce(),Zt(t,r,[i.value],r,s),ke()}return function(){i.teardown()}}}var Hr=0;function Gr(e){e.prototype._init=function(e){var t=this;t._uid=Hr++,t._isVue=!0,t.__v_skip=!0,t._scope=new Ze(!0),t._scope._vm=!0,e&&e._isComponent?Kr(t,e):t.$options=Ir(Wr(t.constructor),e||{},t),t._renderProxy=t,t._self=t,Cn(t),yn(t),Rt(t),Ln(t,"beforeCreate",void 0,!1),Jn(t),Dr(t),Qn(t),Ln(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}function Kr(e,t){var n=e.$options=Object.create(e.constructor.options),r=t._parentVnode;n.parent=t.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function Wr(e){var t=e.options;if(e.super){var n=Wr(e.super),r=e.superOptions;if(n!==r){e.superOptions=n;var i=Zr(e);i&&P(e.extendOptions,i),t=e.options=Ir(n,e.extendOptions),t.name&&(t.components[t.name]=e)}}return t}function Zr(e){var t,n=e.options,r=e.sealedOptions;for(var i in n)n[i]!==r[i]&&(t||(t={}),t[i]=n[i]);return t}function Qr(e){this._init(e)}function Jr(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=L(arguments,1);return n.unshift(this),l(e.install)?e.install.apply(e,n):l(e)&&e.apply(null,n),t.push(e),this}}function Yr(e){e.mixin=function(e){return this.options=Ir(this.options,e),this}}function Xr(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var s=rr(e)||rr(n.options);var o=function(e){this._init(e)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=t++,o.options=Ir(n.options,e),o["super"]=n,o.options.props&&ei(o),o.options.computed&&ti(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,q.forEach((function(e){o[e]=n[e]})),s&&(o.options.components[s]=o),o.superOptions=n.options,o.extendOptions=e,o.sealedOptions=P({},o.options),i[r]=o,o}}function ei(e){var t=e.options.props;for(var n in t)Nr(e.prototype,"_props",n)}function ti(e){var t=e.options.computed;for(var n in t)Fr(e.prototype,n,t[n])}function ni(e){q.forEach((function(t){e[t]=function(e,n){return n?("component"===t&&f(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&l(n)&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}}))}function ri(e){return e&&(rr(e.Ctor.options)||e.tag)}function ii(e,t){return i(e)?e.indexOf(t)>-1:"string"===typeof e?e.split(",").indexOf(t)>-1:!!p(e)&&e.test(t)}function si(e,t){var n=e.cache,r=e.keys,i=e._vnode;for(var s in n){var o=n[s];if(o){var a=o.name;a&&!t(a)&&oi(n,s,r,i)}}}function oi(e,t,n,r){var i=e[t];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),e[t]=null,_(n,t)}Gr(Qr),qr(Qr),Sn(Qr),kn(Qr),$t(Qr);var ai=[String,RegExp,Array],ci={name:"keep-alive",abstract:!0,props:{include:ai,exclude:ai,max:[String,Number]},methods:{cacheVNode:function(){var e=this,t=e.cache,n=e.keys,r=e.vnodeToCache,i=e.keyToCache;if(r){var s=r.tag,o=r.componentInstance,a=r.componentOptions;t[i]={name:ri(a),tag:s,componentInstance:o},n.push(i),this.max&&n.length>parseInt(this.max)&&oi(t,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)oi(this.cache,e,this.keys)},mounted:function(){var e=this;this.cacheVNode(),this.$watch("include",(function(t){si(e,(function(e){return ii(t,e)}))})),this.$watch("exclude",(function(t){si(e,(function(e){return!ii(t,e)}))}))},updated:function(){this.cacheVNode()},render:function(){var e=this.$slots.default,t=jt(e),n=t&&t.componentOptions;if(n){var r=ri(n),i=this,s=i.include,o=i.exclude;if(s&&(!r||!ii(s,r))||o&&r&&ii(o,r))return t;var a=this,c=a.cache,u=a.keys,l=null==t.key?n.Ctor.cid+(n.tag?"::".concat(n.tag):""):t.key;c[l]?(t.componentInstance=c[l].componentInstance,_(u,l),u.push(l)):(this.vnodeToCache=t,this.keyToCache=l),t.data.keepAlive=!0}return t||e&&e[0]}},ui={KeepAlive:ci};function li(e){var t={get:function(){return G}};Object.defineProperty(e,"config",t),e.util={warn:hr,extend:P,mergeOptions:Ir,defineReactive:Fe},e.set=Ve,e.delete=Be,e.nextTick=cn,e.observable=function(e){return $e(e),e},e.options=Object.create(null),q.forEach((function(t){e.options[t+"s"]=Object.create(null)})),e.options._base=e,P(e.options.components,ui),Jr(e),Yr(e),Xr(e),ni(e)}li(Qr),Object.defineProperty(Qr.prototype,"$isServer",{get:le}),Object.defineProperty(Qr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Qr,"FunctionalRenderContext",{value:Xn}),Qr.version=hn;var hi=w("style,class"),di=w("input,textarea,option,select,progress"),fi=function(e,t,n){return"value"===n&&di(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},pi=w("contenteditable,draggable,spellcheck"),mi=w("events,caret,typing,plaintext-only"),gi=function(e,t){return _i(t)||"false"===t?"false":"contenteditable"===e&&mi(t)?t:"true"},vi=w("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),yi="http://www.w3.org/1999/xlink",wi=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},bi=function(e){return wi(e)?e.slice(6,e.length):""},_i=function(e){return null==e||!1===e};function Ii(e){var t=e.data,n=e,r=e;while(o(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(t=Si(r.data,t));while(o(n=n.parent))n&&n.data&&(t=Si(t,n.data));return Ei(t.staticClass,t.class)}function Si(e,t){return{staticClass:Ti(e.staticClass,t.staticClass),class:o(e.class)?[e.class,t.class]:t.class}}function Ei(e,t){return o(e)||o(t)?Ti(e,Ci(t)):""}function Ti(e,t){return e?t?e+" "+t:e:t||""}function Ci(e){return Array.isArray(e)?ki(e):h(e)?xi(e):"string"===typeof e?e:""}function ki(e){for(var t,n="",r=0,i=e.length;r<i;r++)o(t=Ci(e[r]))&&""!==t&&(n&&(n+=" "),n+=t);return n}function xi(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}var Ai={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Oi=w("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Ni=w("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Di=function(e){return Oi(e)||Ni(e)};function Li(e){return Ni(e)?"svg":"math"===e?"math":void 0}var Pi=Object.create(null);function Ri(e){if(!X)return!0;if(Di(e))return!1;if(e=e.toLowerCase(),null!=Pi[e])return Pi[e];var t=document.createElement(e);return e.indexOf("-")>-1?Pi[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:Pi[e]=/HTMLUnknownElement/.test(t.toString())}var Mi=w("text,number,password,search,email,tel,url");function $i(e){if("string"===typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}function Fi(e,t){var n=document.createElement(e);return"select"!==e||t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function Vi(e,t){return document.createElementNS(Ai[e],t)}function Bi(e){return document.createTextNode(e)}function ji(e){return document.createComment(e)}function Ui(e,t,n){e.insertBefore(t,n)}function zi(e,t){e.removeChild(t)}function qi(e,t){e.appendChild(t)}function Hi(e){return e.parentNode}function Gi(e){return e.nextSibling}function Ki(e){return e.tagName}function Wi(e,t){e.textContent=t}function Zi(e,t){e.setAttribute(t,"")}var Qi=Object.freeze({__proto__:null,createElement:Fi,createElementNS:Vi,createTextNode:Bi,createComment:ji,insertBefore:Ui,removeChild:zi,appendChild:qi,parentNode:Hi,nextSibling:Gi,tagName:Ki,setTextContent:Wi,setStyleScope:Zi}),Ji={create:function(e,t){Yi(t)},update:function(e,t){e.data.ref!==t.data.ref&&(Yi(e,!0),Yi(t))},destroy:function(e){Yi(e,!0)}};function Yi(e,t){var n=e.data.ref;if(o(n)){var r=e.context,s=e.componentInstance||e.elm,a=t?null:s,c=t?void 0:s;if(l(n))Zt(n,r,[a],r,"template ref function");else{var u=e.data.refInFor,h="string"===typeof n||"number"===typeof n,d=He(n),f=r.$refs;if(h||d)if(u){var p=h?f[n]:n.value;t?i(p)&&_(p,s):i(p)?p.includes(s)||p.push(s):h?(f[n]=[s],Xi(r,n,f[n])):n.value=[s]}else if(h){if(t&&f[n]!==s)return;f[n]=c,Xi(r,n,a)}else if(d){if(t&&n.value!==s)return;n.value=a}else 0}}}function Xi(e,t,n){var r=e._setupState;r&&S(r,t)&&(He(r[t])?r[t].value=n:r[t]=n)}var es=new ve("",{},[]),ts=["create","activate","update","remove","destroy"];function ns(e,t){return e.key===t.key&&e.asyncFactory===t.asyncFactory&&(e.tag===t.tag&&e.isComment===t.isComment&&o(e.data)===o(t.data)&&rs(e,t)||a(e.isAsyncPlaceholder)&&s(t.asyncFactory.error))}function rs(e,t){if("input"!==e.tag)return!0;var n,r=o(n=e.data)&&o(n=n.attrs)&&n.type,i=o(n=t.data)&&o(n=n.attrs)&&n.type;return r===i||Mi(r)&&Mi(i)}function is(e,t,n){var r,i,s={};for(r=t;r<=n;++r)i=e[r].key,o(i)&&(s[i]=r);return s}function ss(e){var t,n,r={},c=e.modules,l=e.nodeOps;for(t=0;t<ts.length;++t)for(r[ts[t]]=[],n=0;n<c.length;++n)o(c[n][ts[t]])&&r[ts[t]].push(c[n][ts[t]]);function h(e){return new ve(l.tagName(e).toLowerCase(),{},[],void 0,e)}function d(e,t){function n(){0===--n.listeners&&f(e)}return n.listeners=t,n}function f(e){var t=l.parentNode(e);o(t)&&l.removeChild(t,e)}function p(e,t,n,r,i,s,c){if(o(e.elm)&&o(s)&&(e=s[c]=be(e)),e.isRootInsert=!i,!m(e,t,n,r)){var u=e.data,h=e.children,d=e.tag;o(d)?(e.elm=e.ns?l.createElementNS(e.ns,d):l.createElement(d,e),S(e),b(e,h,t),o(u)&&I(e,t),y(n,e.elm,r)):a(e.isComment)?(e.elm=l.createComment(e.text),y(n,e.elm,r)):(e.elm=l.createTextNode(e.text),y(n,e.elm,r))}}function m(e,t,n,r){var i=e.data;if(o(i)){var s=o(e.componentInstance)&&i.keepAlive;if(o(i=i.hook)&&o(i=i.init)&&i(e,!1),o(e.componentInstance))return g(e,t),y(n,e.elm,r),a(s)&&v(e,t,n,r),!0}}function g(e,t){o(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,_(e)?(I(e,t),S(e)):(Yi(e),t.push(e))}function v(e,t,n,i){var s,a=e;while(a.componentInstance)if(a=a.componentInstance._vnode,o(s=a.data)&&o(s=s.transition)){for(s=0;s<r.activate.length;++s)r.activate[s](es,a);t.push(a);break}y(n,e.elm,i)}function y(e,t,n){o(e)&&(o(n)?l.parentNode(n)===e&&l.insertBefore(e,t,n):l.appendChild(e,t))}function b(e,t,n){if(i(t)){0;for(var r=0;r<t.length;++r)p(t[r],n,e.elm,null,!0,t,r)}else u(e.text)&&l.appendChild(e.elm,l.createTextNode(String(e.text)))}function _(e){while(e.componentInstance)e=e.componentInstance._vnode;return o(e.tag)}function I(e,n){for(var i=0;i<r.create.length;++i)r.create[i](es,e);t=e.data.hook,o(t)&&(o(t.create)&&t.create(es,e),o(t.insert)&&n.push(e))}function S(e){var t;if(o(t=e.fnScopeId))l.setStyleScope(e.elm,t);else{var n=e;while(n)o(t=n.context)&&o(t=t.$options._scopeId)&&l.setStyleScope(e.elm,t),n=n.parent}o(t=En)&&t!==e.context&&t!==e.fnContext&&o(t=t.$options._scopeId)&&l.setStyleScope(e.elm,t)}function E(e,t,n,r,i,s){for(;r<=i;++r)p(n[r],s,e,t,!1,n,r)}function T(e){var t,n,i=e.data;if(o(i))for(o(t=i.hook)&&o(t=t.destroy)&&t(e),t=0;t<r.destroy.length;++t)r.destroy[t](e);if(o(t=e.children))for(n=0;n<e.children.length;++n)T(e.children[n])}function C(e,t,n){for(;t<=n;++t){var r=e[t];o(r)&&(o(r.tag)?(k(r),T(r)):f(r.elm))}}function k(e,t){if(o(t)||o(e.data)){var n,i=r.remove.length+1;for(o(t)?t.listeners+=i:t=d(e.elm,i),o(n=e.componentInstance)&&o(n=n._vnode)&&o(n.data)&&k(n,t),n=0;n<r.remove.length;++n)r.remove[n](e,t);o(n=e.data.hook)&&o(n=n.remove)?n(e,t):t()}else f(e.elm)}function x(e,t,n,r,i){var a,c,u,h,d=0,f=0,m=t.length-1,g=t[0],v=t[m],y=n.length-1,w=n[0],b=n[y],_=!i;while(d<=m&&f<=y)s(g)?g=t[++d]:s(v)?v=t[--m]:ns(g,w)?(O(g,w,r,n,f),g=t[++d],w=n[++f]):ns(v,b)?(O(v,b,r,n,y),v=t[--m],b=n[--y]):ns(g,b)?(O(g,b,r,n,y),_&&l.insertBefore(e,g.elm,l.nextSibling(v.elm)),g=t[++d],b=n[--y]):ns(v,w)?(O(v,w,r,n,f),_&&l.insertBefore(e,v.elm,g.elm),v=t[--m],w=n[++f]):(s(a)&&(a=is(t,d,m)),c=o(w.key)?a[w.key]:A(w,t,d,m),s(c)?p(w,r,e,g.elm,!1,n,f):(u=t[c],ns(u,w)?(O(u,w,r,n,f),t[c]=void 0,_&&l.insertBefore(e,u.elm,g.elm)):p(w,r,e,g.elm,!1,n,f)),w=n[++f]);d>m?(h=s(n[y+1])?null:n[y+1].elm,E(e,h,n,f,y,r)):f>y&&C(t,d,m)}function A(e,t,n,r){for(var i=n;i<r;i++){var s=t[i];if(o(s)&&ns(e,s))return i}}function O(e,t,n,i,c,u){if(e!==t){o(t.elm)&&o(i)&&(t=i[c]=be(t));var h=t.elm=e.elm;if(a(e.isAsyncPlaceholder))o(t.asyncFactory.resolved)?L(e.elm,t,n):t.isAsyncPlaceholder=!0;else if(a(t.isStatic)&&a(e.isStatic)&&t.key===e.key&&(a(t.isCloned)||a(t.isOnce)))t.componentInstance=e.componentInstance;else{var d,f=t.data;o(f)&&o(d=f.hook)&&o(d=d.prepatch)&&d(e,t);var p=e.children,m=t.children;if(o(f)&&_(t)){for(d=0;d<r.update.length;++d)r.update[d](e,t);o(d=f.hook)&&o(d=d.update)&&d(e,t)}s(t.text)?o(p)&&o(m)?p!==m&&x(h,p,m,n,u):o(m)?(o(e.text)&&l.setTextContent(h,""),E(h,null,m,0,m.length-1,n)):o(p)?C(p,0,p.length-1):o(e.text)&&l.setTextContent(h,""):e.text!==t.text&&l.setTextContent(h,t.text),o(f)&&o(d=f.hook)&&o(d=d.postpatch)&&d(e,t)}}}function N(e,t,n){if(a(n)&&o(e.parent))e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r])}var D=w("attrs,class,staticClass,staticStyle,key");function L(e,t,n,r){var i,s=t.tag,c=t.data,u=t.children;if(r=r||c&&c.pre,t.elm=e,a(t.isComment)&&o(t.asyncFactory))return t.isAsyncPlaceholder=!0,!0;if(o(c)&&(o(i=c.hook)&&o(i=i.init)&&i(t,!0),o(i=t.componentInstance)))return g(t,n),!0;if(o(s)){if(o(u))if(e.hasChildNodes())if(o(i=c)&&o(i=i.domProps)&&o(i=i.innerHTML)){if(i!==e.innerHTML)return!1}else{for(var l=!0,h=e.firstChild,d=0;d<u.length;d++){if(!h||!L(h,u[d],n,r)){l=!1;break}h=h.nextSibling}if(!l||h)return!1}else b(t,u,n);if(o(c)){var f=!1;for(var p in c)if(!D(p)){f=!0,I(t,n);break}!f&&c["class"]&&fn(c["class"])}}else e.data!==t.text&&(e.data=t.text);return!0}return function(e,t,n,i){if(!s(t)){var c=!1,u=[];if(s(e))c=!0,p(t,u);else{var d=o(e.nodeType);if(!d&&ns(e,t))O(e,t,u,null,null,i);else{if(d){if(1===e.nodeType&&e.hasAttribute(z)&&(e.removeAttribute(z),n=!0),a(n)&&L(e,t,u))return N(t,u,!0),e;e=h(e)}var f=e.elm,m=l.parentNode(f);if(p(t,u,f._leaveCb?null:m,l.nextSibling(f)),o(t.parent)){var g=t.parent,v=_(t);while(g){for(var y=0;y<r.destroy.length;++y)r.destroy[y](g);if(g.elm=t.elm,v){for(var w=0;w<r.create.length;++w)r.create[w](es,g);var b=g.data.hook.insert;if(b.merged)for(var I=1;I<b.fns.length;I++)b.fns[I]()}else Yi(g);g=g.parent}}o(m)?C([e],0,0):o(e.tag)&&T(e)}}return N(t,u,c),t.elm}o(e)&&T(e)}}var os={create:as,update:as,destroy:function(e){as(e,es)}};function as(e,t){(e.data.directives||t.data.directives)&&cs(e,t)}function cs(e,t){var n,r,i,s=e===es,o=t===es,a=ls(e.data.directives,e.context),c=ls(t.data.directives,t.context),u=[],l=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,ds(i,"update",t,e),i.def&&i.def.componentUpdated&&l.push(i)):(ds(i,"bind",t,e),i.def&&i.def.inserted&&u.push(i));if(u.length){var h=function(){for(var n=0;n<u.length;n++)ds(u[n],"inserted",t,e)};s?tt(t,"insert",h):h()}if(l.length&&tt(t,"postpatch",(function(){for(var n=0;n<l.length;n++)ds(l[n],"componentUpdated",t,e)})),!s)for(n in a)c[n]||ds(a[n],"unbind",e,e,o)}var us=Object.create(null);function ls(e,t){var n,r,i=Object.create(null);if(!e)return i;for(n=0;n<e.length;n++){if(r=e[n],r.modifiers||(r.modifiers=us),i[hs(r)]=r,t._setupState&&t._setupState.__sfc){var s=r.def||Sr(t,"_setupState","v-"+r.name);r.def="function"===typeof s?{bind:s,update:s}:s}r.def=r.def||Sr(t.$options,"directives",r.name,!0)}return i}function hs(e){return e.rawName||"".concat(e.name,".").concat(Object.keys(e.modifiers||{}).join("."))}function ds(e,t,n,r,i){var s=e.def&&e.def[t];if(s)try{s(n.elm,e,n,r,i)}catch(Jo){Wt(Jo,n.context,"directive ".concat(e.name," ").concat(t," hook"))}}var fs=[Ji,os];function ps(e,t){var n=t.componentOptions;if((!o(n)||!1!==n.Ctor.options.inheritAttrs)&&(!s(e.data.attrs)||!s(t.data.attrs))){var r,i,c,u=t.elm,l=e.data.attrs||{},h=t.data.attrs||{};for(r in(o(h.__ob__)||a(h._v_attr_proxy))&&(h=t.data.attrs=P({},h)),h)i=h[r],c=l[r],c!==i&&ms(u,r,i,t.data.pre);for(r in(te||re)&&h.value!==l.value&&ms(u,"value",h.value),l)s(h[r])&&(wi(r)?u.removeAttributeNS(yi,bi(r)):pi(r)||u.removeAttribute(r))}}function ms(e,t,n,r){r||e.tagName.indexOf("-")>-1?gs(e,t,n):vi(t)?_i(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):pi(t)?e.setAttribute(t,gi(t,n)):wi(t)?_i(n)?e.removeAttributeNS(yi,bi(t)):e.setAttributeNS(yi,t,n):gs(e,t,n)}function gs(e,t,n){if(_i(n))e.removeAttribute(t);else{if(te&&!ne&&"TEXTAREA"===e.tagName&&"placeholder"===t&&""!==n&&!e.__ieph){var r=function(t){t.stopImmediatePropagation(),e.removeEventListener("input",r)};e.addEventListener("input",r),e.__ieph=!0}e.setAttribute(t,n)}}var vs={create:ps,update:ps};function ys(e,t){var n=t.elm,r=t.data,i=e.data;if(!(s(r.staticClass)&&s(r.class)&&(s(i)||s(i.staticClass)&&s(i.class)))){var a=Ii(t),c=n._transitionClasses;o(c)&&(a=Ti(a,Ci(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var ws,bs={create:ys,update:ys},_s="__r",Is="__c";function Ss(e){if(o(e[_s])){var t=te?"change":"input";e[t]=[].concat(e[_s],e[t]||[]),delete e[_s]}o(e[Is])&&(e.change=[].concat(e[Is],e.change||[]),delete e[Is])}function Es(e,t,n){var r=ws;return function i(){var s=t.apply(null,arguments);null!==s&&ks(e,i,n,r)}}var Ts=Xt&&!(oe&&Number(oe[1])<=53);function Cs(e,t,n,r){if(Ts){var i=jn,s=t;t=s._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=i||e.timeStamp<=0||e.target.ownerDocument!==document)return s.apply(this,arguments)}}ws.addEventListener(e,t,ce?{capture:n,passive:r}:n)}function ks(e,t,n,r){(r||ws).removeEventListener(e,t._wrapper||t,n)}function xs(e,t){if(!s(e.data.on)||!s(t.data.on)){var n=t.data.on||{},r=e.data.on||{};ws=t.elm||e.elm,Ss(n),et(n,r,Cs,ks,Es,t.context),ws=void 0}}var As,Os={create:xs,update:xs,destroy:function(e){return xs(e,es)}};function Ns(e,t){if(!s(e.data.domProps)||!s(t.data.domProps)){var n,r,i=t.elm,c=e.data.domProps||{},u=t.data.domProps||{};for(n in(o(u.__ob__)||a(u._v_attr_proxy))&&(u=t.data.domProps=P({},u)),c)n in u||(i[n]="");for(n in u){if(r=u[n],"textContent"===n||"innerHTML"===n){if(t.children&&(t.children.length=0),r===c[n])continue;1===i.childNodes.length&&i.removeChild(i.childNodes[0])}if("value"===n&&"PROGRESS"!==i.tagName){i._value=r;var l=s(r)?"":String(r);Ds(i,l)&&(i.value=l)}else if("innerHTML"===n&&Ni(i.tagName)&&s(i.innerHTML)){As=As||document.createElement("div"),As.innerHTML="<svg>".concat(r,"</svg>");var h=As.firstChild;while(i.firstChild)i.removeChild(i.firstChild);while(h.firstChild)i.appendChild(h.firstChild)}else if(r!==c[n])try{i[n]=r}catch(Jo){}}}}function Ds(e,t){return!e.composing&&("OPTION"===e.tagName||Ls(e,t)||Ps(e,t))}function Ls(e,t){var n=!0;try{n=document.activeElement!==e}catch(Jo){}return n&&e.value!==t}function Ps(e,t){var n=e.value,r=e._vModifiers;if(o(r)){if(r.number)return y(n)!==y(t);if(r.trim)return n.trim()!==t.trim()}return n!==t}var Rs={create:Ns,update:Ns},Ms=E((function(e){var t={},n=/;(?![^(]*\))/g,r=/:(.+)/;return e.split(n).forEach((function(e){if(e){var n=e.split(r);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}));function $s(e){var t=Fs(e.style);return e.staticStyle?P(e.staticStyle,t):t}function Fs(e){return Array.isArray(e)?R(e):"string"===typeof e?Ms(e):e}function Vs(e,t){var n,r={};if(t){var i=e;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=$s(i.data))&&P(r,n)}(n=$s(e.data))&&P(r,n);var s=e;while(s=s.parent)s.data&&(n=$s(s.data))&&P(r,n);return r}var Bs,js=/^--/,Us=/\s*!important$/,zs=function(e,t,n){if(js.test(t))e.style.setProperty(t,n);else if(Us.test(n))e.style.setProperty(A(t),n.replace(Us,""),"important");else{var r=Hs(t);if(Array.isArray(n))for(var i=0,s=n.length;i<s;i++)e.style[r]=n[i];else e.style[r]=n}},qs=["Webkit","Moz","ms"],Hs=E((function(e){if(Bs=Bs||document.createElement("div").style,e=C(e),"filter"!==e&&e in Bs)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<qs.length;n++){var r=qs[n]+t;if(r in Bs)return r}}));function Gs(e,t){var n=t.data,r=e.data;if(!(s(n.staticStyle)&&s(n.style)&&s(r.staticStyle)&&s(r.style))){var i,a,c=t.elm,u=r.staticStyle,l=r.normalizedStyle||r.style||{},h=u||l,d=Fs(t.data.style)||{};t.data.normalizedStyle=o(d.__ob__)?P({},d):d;var f=Vs(t,!0);for(a in h)s(f[a])&&zs(c,a,"");for(a in f)i=f[a],i!==h[a]&&zs(c,a,null==i?"":i)}}var Ks={create:Gs,update:Gs},Ws=/\s+/;function Zs(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Ws).forEach((function(t){return e.classList.add(t)})):e.classList.add(t);else{var n=" ".concat(e.getAttribute("class")||""," ");n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function Qs(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Ws).forEach((function(t){return e.classList.remove(t)})):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{var n=" ".concat(e.getAttribute("class")||""," "),r=" "+t+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?e.setAttribute("class",n):e.removeAttribute("class")}}function Js(e){if(e){if("object"===typeof e){var t={};return!1!==e.css&&P(t,Ys(e.name||"v")),P(t,e),t}return"string"===typeof e?Ys(e):void 0}}var Ys=E((function(e){return{enterClass:"".concat(e,"-enter"),enterToClass:"".concat(e,"-enter-to"),enterActiveClass:"".concat(e,"-enter-active"),leaveClass:"".concat(e,"-leave"),leaveToClass:"".concat(e,"-leave-to"),leaveActiveClass:"".concat(e,"-leave-active")}})),Xs=X&&!ne,eo="transition",to="animation",no="transition",ro="transitionend",io="animation",so="animationend";Xs&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(no="WebkitTransition",ro="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(io="WebkitAnimation",so="webkitAnimationEnd"));var oo=X?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function ao(e){oo((function(){oo(e)}))}function co(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),Zs(e,t))}function uo(e,t){e._transitionClasses&&_(e._transitionClasses,t),Qs(e,t)}function lo(e,t,n){var r=fo(e,t),i=r.type,s=r.timeout,o=r.propCount;if(!i)return n();var a=i===eo?ro:so,c=0,u=function(){e.removeEventListener(a,l),n()},l=function(t){t.target===e&&++c>=o&&u()};setTimeout((function(){c<o&&u()}),s+1),e.addEventListener(a,l)}var ho=/\b(transform|all)(,|$)/;function fo(e,t){var n,r=window.getComputedStyle(e),i=(r[no+"Delay"]||"").split(", "),s=(r[no+"Duration"]||"").split(", "),o=po(i,s),a=(r[io+"Delay"]||"").split(", "),c=(r[io+"Duration"]||"").split(", "),u=po(a,c),l=0,h=0;t===eo?o>0&&(n=eo,l=o,h=s.length):t===to?u>0&&(n=to,l=u,h=c.length):(l=Math.max(o,u),n=l>0?o>u?eo:to:null,h=n?n===eo?s.length:c.length:0);var d=n===eo&&ho.test(r[no+"Property"]);return{type:n,timeout:l,propCount:h,hasTransform:d}}function po(e,t){while(e.length<t.length)e=e.concat(e);return Math.max.apply(null,t.map((function(t,n){return mo(t)+mo(e[n])})))}function mo(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function go(e,t){var n=e.elm;o(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=Js(e.data.transition);if(!s(r)&&!o(n._enterCb)&&1===n.nodeType){var i=r.css,a=r.type,c=r.enterClass,u=r.enterToClass,d=r.enterActiveClass,f=r.appearClass,p=r.appearToClass,m=r.appearActiveClass,g=r.beforeEnter,v=r.enter,w=r.afterEnter,b=r.enterCancelled,_=r.beforeAppear,I=r.appear,S=r.afterAppear,E=r.appearCancelled,T=r.duration,C=En,k=En.$vnode;while(k&&k.parent)C=k.context,k=k.parent;var x=!C._isMounted||!e.isRootInsert;if(!x||I||""===I){var A=x&&f?f:c,O=x&&m?m:d,N=x&&p?p:u,D=x&&_||g,L=x&&l(I)?I:v,P=x&&S||w,R=x&&E||b,M=y(h(T)?T.enter:T);0;var $=!1!==i&&!ne,F=wo(L),V=n._enterCb=j((function(){$&&(uo(n,N),uo(n,O)),V.cancelled?($&&uo(n,A),R&&R(n)):P&&P(n),n._enterCb=null}));e.data.show||tt(e,"insert",(function(){var t=n.parentNode,r=t&&t._pending&&t._pending[e.key];r&&r.tag===e.tag&&r.elm._leaveCb&&r.elm._leaveCb(),L&&L(n,V)})),D&&D(n),$&&(co(n,A),co(n,O),ao((function(){uo(n,A),V.cancelled||(co(n,N),F||(yo(M)?setTimeout(V,M):lo(n,a,V)))}))),e.data.show&&(t&&t(),L&&L(n,V)),$||F||V()}}}function vo(e,t){var n=e.elm;o(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=Js(e.data.transition);if(s(r)||1!==n.nodeType)return t();if(!o(n._leaveCb)){var i=r.css,a=r.type,c=r.leaveClass,u=r.leaveToClass,l=r.leaveActiveClass,d=r.beforeLeave,f=r.leave,p=r.afterLeave,m=r.leaveCancelled,g=r.delayLeave,v=r.duration,w=!1!==i&&!ne,b=wo(f),_=y(h(v)?v.leave:v);0;var I=n._leaveCb=j((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[e.key]=null),w&&(uo(n,u),uo(n,l)),I.cancelled?(w&&uo(n,c),m&&m(n)):(t(),p&&p(n)),n._leaveCb=null}));g?g(S):S()}function S(){I.cancelled||(!e.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[e.key]=e),d&&d(n),w&&(co(n,c),co(n,l),ao((function(){uo(n,c),I.cancelled||(co(n,u),b||(yo(_)?setTimeout(I,_):lo(n,a,I)))}))),f&&f(n,I),w||b||I())}}function yo(e){return"number"===typeof e&&!isNaN(e)}function wo(e){if(s(e))return!1;var t=e.fns;return o(t)?wo(Array.isArray(t)?t[0]:t):(e._length||e.length)>1}function bo(e,t){!0!==t.data.show&&go(t)}var _o=X?{create:bo,activate:bo,remove:function(e,t){!0!==e.data.show?vo(e,t):t()}}:{},Io=[vs,bs,Os,Rs,Ks,_o],So=Io.concat(fs),Eo=ss({nodeOps:Qi,modules:So});ne&&document.addEventListener("selectionchange",(function(){var e=document.activeElement;e&&e.vmodel&&Do(e,"input")}));var To={inserted:function(e,t,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?tt(n,"postpatch",(function(){To.componentUpdated(e,t,n)})):Co(e,t,n.context),e._vOptions=[].map.call(e.options,Ao)):("textarea"===n.tag||Mi(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",Oo),e.addEventListener("compositionend",No),e.addEventListener("change",No),ne&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){Co(e,t,n.context);var r=e._vOptions,i=e._vOptions=[].map.call(e.options,Ao);if(i.some((function(e,t){return!V(e,r[t])}))){var s=e.multiple?t.value.some((function(e){return xo(e,i)})):t.value!==t.oldValue&&xo(t.value,i);s&&Do(e,"change")}}}};function Co(e,t,n){ko(e,t,n),(te||re)&&setTimeout((function(){ko(e,t,n)}),0)}function ko(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var s,o,a=0,c=e.options.length;a<c;a++)if(o=e.options[a],i)s=B(r,Ao(o))>-1,o.selected!==s&&(o.selected=s);else if(V(Ao(o),r))return void(e.selectedIndex!==a&&(e.selectedIndex=a));i||(e.selectedIndex=-1)}}function xo(e,t){return t.every((function(t){return!V(t,e)}))}function Ao(e){return"_value"in e?e._value:e.value}function Oo(e){e.target.composing=!0}function No(e){e.target.composing&&(e.target.composing=!1,Do(e.target,"input"))}function Do(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function Lo(e){return!e.componentInstance||e.data&&e.data.transition?e:Lo(e.componentInstance._vnode)}var Po={bind:function(e,t,n){var r=t.value;n=Lo(n);var i=n.data&&n.data.transition,s=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i?(n.data.show=!0,go(n,(function(){e.style.display=s}))):e.style.display=r?s:"none"},update:function(e,t,n){var r=t.value,i=t.oldValue;if(!r!==!i){n=Lo(n);var s=n.data&&n.data.transition;s?(n.data.show=!0,r?go(n,(function(){e.style.display=e.__vOriginalDisplay})):vo(n,(function(){e.style.display="none"}))):e.style.display=r?e.__vOriginalDisplay:"none"}},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}},Ro={model:To,show:Po},Mo={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function $o(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?$o(jt(t.children)):e}function Fo(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var r in i)t[C(r)]=i[r];return t}function Vo(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}function Bo(e){while(e=e.parent)if(e.data.transition)return!0}function jo(e,t){return t.key===e.key&&t.tag===e.tag}var Uo=function(e){return e.tag||Tt(e)},zo=function(e){return"show"===e.name},qo={name:"transition",props:Mo,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(Uo),n.length)){0;var r=this.mode;0;var i=n[0];if(Bo(this.$vnode))return i;var s=$o(i);if(!s)return i;if(this._leaving)return Vo(e,i);var o="__transition-".concat(this._uid,"-");s.key=null==s.key?s.isComment?o+"comment":o+s.tag:u(s.key)?0===String(s.key).indexOf(o)?s.key:o+s.key:s.key;var a=(s.data||(s.data={})).transition=Fo(this),c=this._vnode,l=$o(c);if(s.data.directives&&s.data.directives.some(zo)&&(s.data.show=!0),l&&l.data&&!jo(s,l)&&!Tt(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=P({},a);if("out-in"===r)return this._leaving=!0,tt(h,"afterLeave",(function(){t._leaving=!1,t.$forceUpdate()})),Vo(e,i);if("in-out"===r){if(Tt(s))return c;var d,f=function(){d()};tt(a,"afterEnter",f),tt(a,"enterCancelled",f),tt(h,"delayLeave",(function(e){d=e}))}}return i}}},Ho=P({tag:String,moveClass:String},Mo);delete Ho.mode;var Go={props:Ho,beforeMount:function(){var e=this,t=this._update;this._update=function(n,r){var i=Tn(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,i(),t.call(e,n,r)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],s=this.children=[],o=Fo(this),a=0;a<i.length;a++){var c=i[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))s.push(c),n[c.key]=c,(c.data||(c.data={})).transition=o;else;}if(r){var u=[],l=[];for(a=0;a<r.length;a++){c=r[a];c.data.transition=o,c.data.pos=c.elm.getBoundingClientRect(),n[c.key]?u.push(c):l.push(c)}this.kept=e(t,null,u),this.removed=l}return e(t,null,s)},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(Ko),e.forEach(Wo),e.forEach(Zo),this._reflow=document.body.offsetHeight,e.forEach((function(e){if(e.data.moved){var n=e.elm,r=n.style;co(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(ro,n._moveCb=function e(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(ro,e),n._moveCb=null,uo(n,t))})}})))},methods:{hasMove:function(e,t){if(!Xs)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach((function(e){Qs(n,e)})),Zs(n,t),n.style.display="none",this.$el.appendChild(n);var r=fo(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function Ko(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function Wo(e){e.data.newPos=e.elm.getBoundingClientRect()}function Zo(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var s=e.elm.style;s.transform=s.WebkitTransform="translate(".concat(r,"px,").concat(i,"px)"),s.transitionDuration="0s"}}var Qo={Transition:qo,TransitionGroup:Go};Qr.config.mustUseProp=fi,Qr.config.isReservedTag=Di,Qr.config.isReservedAttr=hi,Qr.config.getTagNamespace=Li,Qr.config.isUnknownElement=Ri,P(Qr.options.directives,Ro),P(Qr.options.components,Qo),Qr.prototype.__patch__=X?Eo:M,Qr.prototype.$mount=function(e,t){return e=e&&X?$i(e):void 0,xn(this,e,t)},X&&setTimeout((function(){G.devtools&&he&&he.emit("init",Qr)}),0)},629:function(e,t,n){
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function r(e){var t=Number(e.version.split(".")[0]);if(t>=2)e.mixin({beforeCreate:r});else{var n=e.prototype._init;e.prototype._init=function(e){void 0===e&&(e={}),e.init=e.init?[r].concat(e.init):r,n.call(this,e)}}function r(){var e=this.$options;e.store?this.$store="function"===typeof e.store?e.store():e.store:e.parent&&e.parent.$store&&(this.$store=e.parent.$store)}}n.d(t,{nv:function(){return M},rn:function(){return L}});var i="undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{},s=i.__VUE_DEVTOOLS_GLOBAL_HOOK__;function o(e){s&&(e._devtoolHook=s,s.emit("vuex:init",e),s.on("vuex:travel-to-state",(function(t){e.replaceState(t)})),e.subscribe((function(e,t){s.emit("vuex:mutation",e,t)}),{prepend:!0}),e.subscribeAction((function(e,t){s.emit("vuex:action",e,t)}),{prepend:!0}))}function a(e,t){return e.filter(t)[0]}function c(e,t){if(void 0===t&&(t=[]),null===e||"object"!==typeof e)return e;var n=a(t,(function(t){return t.original===e}));if(n)return n.copy;var r=Array.isArray(e)?[]:{};return t.push({original:e,copy:r}),Object.keys(e).forEach((function(n){r[n]=c(e[n],t)})),r}function u(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function l(e){return null!==e&&"object"===typeof e}function h(e){return e&&"function"===typeof e.then}function d(e,t){return function(){return e(t)}}var f=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},p={namespaced:{configurable:!0}};p.namespaced.get=function(){return!!this._rawModule.namespaced},f.prototype.addChild=function(e,t){this._children[e]=t},f.prototype.removeChild=function(e){delete this._children[e]},f.prototype.getChild=function(e){return this._children[e]},f.prototype.hasChild=function(e){return e in this._children},f.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},f.prototype.forEachChild=function(e){u(this._children,e)},f.prototype.forEachGetter=function(e){this._rawModule.getters&&u(this._rawModule.getters,e)},f.prototype.forEachAction=function(e){this._rawModule.actions&&u(this._rawModule.actions,e)},f.prototype.forEachMutation=function(e){this._rawModule.mutations&&u(this._rawModule.mutations,e)},Object.defineProperties(f.prototype,p);var m=function(e){this.register([],e,!1)};function g(e,t,n){if(t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return void 0;g(e.concat(r),t.getChild(r),n.modules[r])}}m.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},m.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},m.prototype.update=function(e){g([],this.root,e)},m.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0);var i=new f(t,n);if(0===e.length)this.root=i;else{var s=this.get(e.slice(0,-1));s.addChild(e[e.length-1],i)}t.modules&&u(t.modules,(function(t,i){r.register(e.concat(i),t,n)}))},m.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r&&r.runtime&&t.removeChild(n)},m.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};var v;var y=function(e){var t=this;void 0===e&&(e={}),!v&&"undefined"!==typeof window&&window.Vue&&D(window.Vue);var n=e.plugins;void 0===n&&(n=[]);var r=e.strict;void 0===r&&(r=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new m(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new v,this._makeLocalGettersCache=Object.create(null);var i=this,s=this,a=s.dispatch,c=s.commit;this.dispatch=function(e,t){return a.call(i,e,t)},this.commit=function(e,t,n){return c.call(i,e,t,n)},this.strict=r;var u=this._modules.root.state;S(this,u,[],this._modules.root),I(this,u),n.forEach((function(e){return e(t)}));var l=void 0!==e.devtools?e.devtools:v.config.devtools;l&&o(this)},w={state:{configurable:!0}};function b(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function _(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;S(e,n,[],e._modules.root,!0),I(e,n,t)}function I(e,t,n){var r=e._vm;e.getters={},e._makeLocalGettersCache=Object.create(null);var i=e._wrappedGetters,s={};u(i,(function(t,n){s[n]=d(t,e),Object.defineProperty(e.getters,n,{get:function(){return e._vm[n]},enumerable:!0})}));var o=v.config.silent;v.config.silent=!0,e._vm=new v({data:{$$state:t},computed:s}),v.config.silent=o,e.strict&&A(e),r&&(n&&e._withCommit((function(){r._data.$$state=null})),v.nextTick((function(){return r.$destroy()})))}function S(e,t,n,r,i){var s=!n.length,o=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[o],e._modulesNamespaceMap[o]=r),!s&&!i){var a=O(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit((function(){v.set(a,c,r.state)}))}var u=r.context=E(e,o,n);r.forEachMutation((function(t,n){var r=o+n;C(e,r,t,u)})),r.forEachAction((function(t,n){var r=t.root?n:o+n,i=t.handler||t;k(e,r,i,u)})),r.forEachGetter((function(t,n){var r=o+n;x(e,r,t,u)})),r.forEachChild((function(r,s){S(e,t,n.concat(s),r,i)}))}function E(e,t,n){var r=""===t,i={dispatch:r?e.dispatch:function(n,r,i){var s=N(n,r,i),o=s.payload,a=s.options,c=s.type;return a&&a.root||(c=t+c),e.dispatch(c,o)},commit:r?e.commit:function(n,r,i){var s=N(n,r,i),o=s.payload,a=s.options,c=s.type;a&&a.root||(c=t+c),e.commit(c,o,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return e.getters}:function(){return T(e,t)}},state:{get:function(){return O(e.state,n)}}}),i}function T(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(i){if(i.slice(0,r)===t){var s=i.slice(r);Object.defineProperty(n,s,{get:function(){return e.getters[i]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function C(e,t,n,r){var i=e._mutations[t]||(e._mutations[t]=[]);i.push((function(t){n.call(e,r.state,t)}))}function k(e,t,n,r){var i=e._actions[t]||(e._actions[t]=[]);i.push((function(t){var i=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return h(i)||(i=Promise.resolve(i)),e._devtoolHook?i.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):i}))}function x(e,t,n,r){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)})}function A(e){e._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}function O(e,t){return t.reduce((function(e,t){return e[t]}),e)}function N(e,t,n){return l(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}function D(e){v&&e===v||(v=e,r(v))}w.state.get=function(){return this._vm._data.$$state},w.state.set=function(e){0},y.prototype.commit=function(e,t,n){var r=this,i=N(e,t,n),s=i.type,o=i.payload,a=(i.options,{type:s,payload:o}),c=this._mutations[s];c&&(this._withCommit((function(){c.forEach((function(e){e(o)}))})),this._subscribers.slice().forEach((function(e){return e(a,r.state)})))},y.prototype.dispatch=function(e,t){var n=this,r=N(e,t),i=r.type,s=r.payload,o={type:i,payload:s},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(o,n.state)}))}catch(u){0}var c=a.length>1?Promise.all(a.map((function(e){return e(s)}))):a[0](s);return new Promise((function(e,t){c.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(o,n.state)}))}catch(u){0}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(o,n.state,e)}))}catch(u){0}t(e)}))}))}},y.prototype.subscribe=function(e,t){return b(e,this._subscribers,t)},y.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return b(n,this._actionSubscribers,t)},y.prototype.watch=function(e,t,n){var r=this;return this._watcherVM.$watch((function(){return e(r.state,r.getters)}),t,n)},y.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._vm._data.$$state=e}))},y.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),this._modules.register(e,t),S(this,this.state,e,this._modules.get(e),n.preserveState),I(this,this.state)},y.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){var n=O(t.state,e.slice(0,-1));v.delete(n,e[e.length-1])})),_(this)},y.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),this._modules.isRegistered(e)},y.prototype.hotUpdate=function(e){this._modules.update(e),_(this,!0)},y.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(y.prototype,w);var L=B((function(e,t){var n={};return F(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var r=j(this.$store,"mapState",e);if(!r)return;t=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,t,n):t[i]},n[r].vuex=!0})),n})),P=B((function(e,t){var n={};return F(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.commit;if(e){var s=j(this.$store,"mapMutations",e);if(!s)return;r=s.context.commit}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n})),R=B((function(e,t){var n={};return F(t).forEach((function(t){var r=t.key,i=t.val;i=e+i,n[r]=function(){if(!e||j(this.$store,"mapGetters",e))return this.$store.getters[i]},n[r].vuex=!0})),n})),M=B((function(e,t){var n={};return F(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.dispatch;if(e){var s=j(this.$store,"mapActions",e);if(!s)return;r=s.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n})),$=function(e){return{mapState:L.bind(null,e),mapGetters:R.bind(null,e),mapMutations:P.bind(null,e),mapActions:M.bind(null,e)}};function F(e){return V(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function V(e){return Array.isArray(e)||l(e)}function B(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function j(e,t,n){var r=e._modulesNamespaceMap[n];return r}function U(e){void 0===e&&(e={});var t=e.collapsed;void 0===t&&(t=!0);var n=e.filter;void 0===n&&(n=function(e,t,n){return!0});var r=e.transformer;void 0===r&&(r=function(e){return e});var i=e.mutationTransformer;void 0===i&&(i=function(e){return e});var s=e.actionFilter;void 0===s&&(s=function(e,t){return!0});var o=e.actionTransformer;void 0===o&&(o=function(e){return e});var a=e.logMutations;void 0===a&&(a=!0);var u=e.logActions;void 0===u&&(u=!0);var l=e.logger;return void 0===l&&(l=console),function(e){var h=c(e.state);"undefined"!==typeof l&&(a&&e.subscribe((function(e,s){var o=c(s);if(n(e,h,o)){var a=H(),u=i(e),d="mutation "+e.type+a;z(l,d,t),l.log("%c prev state","color: #9E9E9E; font-weight: bold",r(h)),l.log("%c mutation","color: #03A9F4; font-weight: bold",u),l.log("%c next state","color: #4CAF50; font-weight: bold",r(o)),q(l)}h=o})),u&&e.subscribeAction((function(e,n){if(s(e,n)){var r=H(),i=o(e),a="action "+e.type+r;z(l,a,t),l.log("%c action","color: #03A9F4; font-weight: bold",i),q(l)}})))}}function z(e,t,n){var r=n?e.groupCollapsed:e.group;try{r.call(e,t)}catch(i){e.log(t)}}function q(e){try{e.groupEnd()}catch(t){e.log("—— log end ——")}}function H(){var e=new Date;return" @ "+K(e.getHours(),2)+":"+K(e.getMinutes(),2)+":"+K(e.getSeconds(),2)+"."+K(e.getMilliseconds(),3)}function G(e,t){return new Array(t+1).join(e)}function K(e,t){return G("0",t-e.toString().length)+e}var W={Store:y,install:D,version:"3.6.2",mapState:L,mapMutations:P,mapGetters:R,mapActions:M,createNamespacedHelpers:$,createLogger:U};t.ZP=W},509:function(e,t,n){var r=n(9985),i=n(3691),s=TypeError;e.exports=function(e){if(r(e))return e;throw new s(i(e)+" is not a function")}},5027:function(e,t,n){var r=n(8999),i=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw new s(i(e)+" is not an object")}},4328:function(e,t,n){var r=n(5290),i=n(7578),s=n(6310),o=function(e){return function(t,n,o){var a,c=r(t),u=s(c),l=i(o,u);if(e&&n!==n){while(u>l)if(a=c[l++],a!==a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},5649:function(e,t,n){var r=n(7697),i=n(2297),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!o(e,"length").writable)throw new s("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},6648:function(e,t,n){var r=n(8844),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},8758:function(e,t,n){var r=n(6812),i=n(9152),s=n(2474),o=n(2560);e.exports=function(e,t,n){for(var a=i(t),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},5773:function(e,t,n){var r=n(7697),i=n(2560),s=n(5684);e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},5684:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},1880:function(e,t,n){var r=n(9985),i=n(2560),s=n(8702),o=n(5014);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:t;if(r(n)&&s(n,u,a),a.global)c?e[t]=n:o(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(l){}c?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},5014:function(e,t,n){var r=n(9037),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},8494:function(e,t,n){var r=n(3691),i=TypeError;e.exports=function(e,t){if(!delete e[t])throw new i("Cannot delete property "+r(t)+" of "+r(e))}},7697:function(e,t,n){var r=n(3689);e.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},2659:function(e){var t="object"==typeof document&&document.all,n="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},6420:function(e,t,n){var r=n(9037),i=n(8999),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},5565:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},71:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},3615:function(e,t,n){var r,i,s=n(9037),o=n(71),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},2739:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},9989:function(e,t,n){var r=n(9037),i=n(2474).f,s=n(5773),o=n(1880),a=n(5014),c=n(8758),u=n(5266);e.exports=function(e,t){var n,l,h,d,f,p,m=e.target,g=e.global,v=e.stat;if(l=g?r:v?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(g?h:m+(v?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,e)}}},3689:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},7215:function(e,t,n){var r=n(3689);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},2615:function(e,t,n){var r=n(7215),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},1236:function(e,t,n){var r=n(7697),i=n(6812),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},8844:function(e,t,n){var r=n(7215),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);e.exports=r?o:function(e){return function(){return s.apply(e,arguments)}}},6058:function(e,t,n){var r=n(9037),i=n(9985),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},4849:function(e,t,n){var r=n(509),i=n(981);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},9037:function(e,t,n){var r=function(e){return e&&e.Math===Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||this||Function("return this")()},6812:function(e,t,n){var r=n(8844),i=n(690),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},7248:function(e){e.exports={}},8506:function(e,t,n){var r=n(7697),i=n(3689),s=n(6420);e.exports=!r&&!i((function(){return 7!==Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},4413:function(e,t,n){var r=n(8844),i=n(3689),s=n(6648),o=Object,a=r("".split);e.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"===s(e)?a(e,""):o(e)}:o},6738:function(e,t,n){var r=n(8844),i=n(9985),s=n(4091),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},618:function(e,t,n){var r,i,s,o=n(9834),a=n(9037),c=n(8999),u=n(5773),l=n(6812),h=n(4091),d=n(2713),f=n(7248),p="Object already initialized",m=a.TypeError,g=a.WeakMap,v=function(e){return s(e)?i(e):r(e,{})},y=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw new m("Incompatible receiver, "+e+" required");return n}};if(o||h.state){var w=h.state||(h.state=new g);w.get=w.get,w.has=w.has,w.set=w.set,r=function(e,t){if(w.has(e))throw new m(p);return t.facade=e,w.set(e,t),t},i=function(e){return w.get(e)||{}},s=function(e){return w.has(e)}}else{var b=d("state");f[b]=!0,r=function(e,t){if(l(e,b))throw new m(p);return t.facade=e,u(e,b,t),t},i=function(e){return l(e,b)?e[b]:{}},s=function(e){return l(e,b)}}e.exports={set:r,get:i,has:s,enforce:v,getterFor:y}},2297:function(e,t,n){var r=n(6648);e.exports=Array.isArray||function(e){return"Array"===r(e)}},9985:function(e,t,n){var r=n(2659),i=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===i}:function(e){return"function"==typeof e}},5266:function(e,t,n){var r=n(3689),i=n(9985),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n===l||n!==u&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";e.exports=o},981:function(e){e.exports=function(e){return null===e||void 0===e}},8999:function(e,t,n){var r=n(9985),i=n(2659),s=i.all;e.exports=i.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===s}:function(e){return"object"==typeof e?null!==e:r(e)}},3931:function(e){e.exports=!1},734:function(e,t,n){var r=n(6058),i=n(9985),s=n(3622),o=n(9525),a=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&s(t.prototype,a(e))}},6310:function(e,t,n){var r=n(3126);e.exports=function(e){return r(e.length)}},8702:function(e,t,n){var r=n(8844),i=n(3689),s=n(9985),o=n(6812),a=n(7697),c=n(1236).CONFIGURABLE,u=n(6738),l=n(618),h=l.enforce,d=l.get,f=String,p=Object.defineProperty,m=r("".slice),g=r("".replace),v=r([].join),y=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),w=String(String).split("String"),b=e.exports=function(e,t,n){"Symbol("===m(f(t),0,7)&&(t="["+g(f(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!o(e,"name")||c&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),y&&n&&o(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=h(e);return o(r,"source")||(r.source=v(w,"string"==typeof t?t:"")),e};Function.prototype.toString=b((function(){return s(this)&&d(this).source||u(this)}),"toString")},8828:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},2560:function(e,t,n){var r=n(7697),i=n(8506),s=n(5648),o=n(5027),a=n(8360),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=r?s?function(e,t,n){if(o(e),t=a(t),o(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=l(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(o(e),t=a(t),o(n),i)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},2474:function(e,t,n){var r=n(7697),i=n(2615),s=n(9556),o=n(5684),a=n(5290),c=n(8360),u=n(6812),l=n(8506),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return o(!i(s.f,e,t),e[t])}},2741:function(e,t,n){var r=n(4948),i=n(2739),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},7518:function(e,t){t.f=Object.getOwnPropertySymbols},3622:function(e,t,n){var r=n(8844);e.exports=r({}.isPrototypeOf)},4948:function(e,t,n){var r=n(8844),i=n(6812),s=n(5290),o=n(4328).indexOf,a=n(7248),c=r([].push);e.exports=function(e,t){var n,r=s(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~o(l,n)||c(l,n));return l}},9556:function(e,t){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},5899:function(e,t,n){var r=n(2615),i=n(9985),s=n(8999),o=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!s(a=r(n,e)))return a;if(i(n=e.valueOf)&&!s(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!s(a=r(n,e)))return a;throw new o("Can't convert object to primitive value")}},9152:function(e,t,n){var r=n(6058),i=n(8844),s=n(2741),o=n(7518),a=n(5027),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},4684:function(e,t,n){var r=n(981),i=TypeError;e.exports=function(e){if(r(e))throw new i("Can't call method on "+e);return e}},2713:function(e,t,n){var r=n(3430),i=n(4630),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},4091:function(e,t,n){var r=n(9037),i=n(5014),s="__core-js_shared__",o=r[s]||i(s,{});e.exports=o},3430:function(e,t,n){var r=n(3931),i=n(4091);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.33.1",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.1/LICENSE",source:"https://github.com/zloirock/core-js"})},146:function(e,t,n){var r=n(3615),i=n(3689),s=n(9037),o=s.String;e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol("symbol detection");return!o(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},7578:function(e,t,n){var r=n(8700),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},5290:function(e,t,n){var r=n(4413),i=n(4684);e.exports=function(e){return r(i(e))}},8700:function(e,t,n){var r=n(8828);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},3126:function(e,t,n){var r=n(8700),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},690:function(e,t,n){var r=n(4684),i=Object;e.exports=function(e){return i(r(e))}},8732:function(e,t,n){var r=n(2615),i=n(8999),s=n(734),o=n(4849),a=n(5899),c=n(4201),u=TypeError,l=c("toPrimitive");e.exports=function(e,t){if(!i(e)||s(e))return e;var n,c=o(e,l);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||s(n))return n;throw new u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},8360:function(e,t,n){var r=n(8732),i=n(734);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},3691:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},4630:function(e,t,n){var r=n(8844),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},9525:function(e,t,n){var r=n(146);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5648:function(e,t,n){var r=n(7697),i=n(3689);e.exports=r&&i((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},9834:function(e,t,n){var r=n(9037),i=n(9985),s=r.WeakMap;e.exports=i(s)&&/native code/.test(String(s))},4201:function(e,t,n){var r=n(9037),i=n(3430),s=n(6812),o=n(4630),a=n(146),c=n(9525),u=r.Symbol,l=i("wks"),h=c?u["for"]||u:u&&u.withoutSetter||o;e.exports=function(e){return s(l,e)||(l[e]=a&&s(u,e)?u[e]:h("Symbol."+e)),l[e]}},560:function(e,t,n){var r=n(9989),i=n(690),s=n(6310),o=n(5649),a=n(5565),c=n(3689),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(e){var t=i(this),n=s(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return o(t,n),n}})},1719:function(e,t,n){var r=n(9989),i=n(690),s=n(6310),o=n(5649),a=n(8494),c=n(5565),u=1!==[].unshift(0),l=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{unshift:function(e){var t=i(this),n=s(t),r=arguments.length;if(r){c(n+r);var u=n;while(u--){var l=u+r;u in t?t[l]=t[u]:a(t,l)}for(var h=0;h<r;h++)t[h]=arguments[h]}return o(t,n+r)}})},8180:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(4444),i=n(8463),s=n(5816),o=n(3333);
/**
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
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,(0,s._addComponent)(e,new i.wA("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),(0,s.deleteApp)(this._delegate))))}_getService(e,t=s._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=s._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){(0,s._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,s._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
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
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new r.LL("app-compat","Firebase",c);
/**
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
 */
function l(e){const t={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:s.registerVersion,setLogLevel:s.setLogLevel,onLog:s.onLog,apps:null,SDK_VERSION:s.SDK_VERSION,INTERNAL:{registerComponent:l,removeApp:i,useAsService:h,modularAPIs:s}};function i(e){delete t[e]}function o(e){if(e=e||s._DEFAULT_ENTRY_NAME,!(0,r.r3)(t,e))throw u.create("no-app",{appName:e});return t[e]}function a(i,o={}){const a=s.initializeApp(i,o);if((0,r.r3)(t,a.name))return t[a.name];const c=new e(a,n);return t[a.name]=c,c}function c(){return Object.keys(t).map((e=>t[e]))}function l(t){const i=t.name,a=i.replace("-compat","");if(s._registerComponent(t)&&"PUBLIC"===t.type){const s=(e=o())=>{if("function"!==typeof e[a])throw u.create("invalid-app-argument",{appName:i});return e[a]()};void 0!==t.serviceProps&&(0,r.ZB)(s,t.serviceProps),n[a]=s,e.prototype[a]=function(...e){const n=this._getService.bind(this,i);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null}function h(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),o["App"]=e,n}
/**
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
 */function h(){const e=l(a);function t(t){(0,r.ZB)(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:h,extendNamespace:t,createSubscribe:r.ne,ErrorFactory:r.LL,deepExtend:r.ZB}),e}const d=h(),f=new o.Yd("@firebase/app-compat"),p="@firebase/app-compat",m="0.2.20";
/**
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
 */
/**
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
 */
function g(e){(0,s.registerVersion)(p,m,e)}
/**
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
 */if((0,r.jU)()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const v=d;g()},5816:function(e,t,n){n.r(t),n.d(t,{FirebaseError:function(){return s.ZR},SDK_VERSION:function(){return ye},_DEFAULT_ENTRY_NAME:function(){return se},_addComponent:function(){return ue},_addOrOverwriteComponent:function(){return le},_apps:function(){return ae},_clearComponents:function(){return pe},_components:function(){return ce},_getProvider:function(){return de},_registerComponent:function(){return he},_removeServiceInstance:function(){return fe},deleteApp:function(){return Ie},getApp:function(){return be},getApps:function(){return _e},initializeApp:function(){return we},onLog:function(){return Ee},registerVersion:function(){return Se},setLogLevel:function(){return Te}});var r=n(8463),i=n(3333),s=n(4444);const o=(e,t)=>t.some((t=>e instanceof t));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function g(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(I(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),m.set(t,e),t}function v(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));d.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return I(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function w(e){y=e(y)}function b(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(S(this),t),I(h.get(this))}:function(...t){return I(e.apply(S(this),t))}:function(t,...n){const r=e.call(S(this),t,...n);return f.set(r,t.sort?t.sort():[t]),I(r)}}function _(e){return"function"===typeof e?b(e):(e instanceof IDBTransaction&&v(e),o(e,u())?new Proxy(e,y):e)}function I(e){if(e instanceof IDBRequest)return g(e);if(p.has(e))return p.get(e);const t=_(e);return t!==e&&(p.set(e,t),m.set(t,e)),t}const S=e=>m.get(e);function E(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=I(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(I(o.result),e.oldVersion,e.newVersion,I(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const T=["get","getKey","getAll","getAllKeys","count"],C=["put","add","delete","clear"],k=new Map;function x(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(k.get(t))return k.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=C.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!T.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return k.set(t,s),s}w((e=>({...e,get:(t,n,r)=>x(t,n)||e.get(t,n,r),has:(t,n)=>!!x(t,n)||e.has(t,n)})));
/**
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
 */
class A{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(O(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function O(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const N="@firebase/app",D="0.9.20",L=new i.Yd("@firebase/app"),P="@firebase/app-compat",R="@firebase/analytics-compat",M="@firebase/analytics",$="@firebase/app-check-compat",F="@firebase/app-check",V="@firebase/auth",B="@firebase/auth-compat",j="@firebase/database",U="@firebase/database-compat",z="@firebase/functions",q="@firebase/functions-compat",H="@firebase/installations",G="@firebase/installations-compat",K="@firebase/messaging",W="@firebase/messaging-compat",Z="@firebase/performance",Q="@firebase/performance-compat",J="@firebase/remote-config",Y="@firebase/remote-config-compat",X="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="10.5.0",se="[DEFAULT]",oe={[N]:"fire-core",[P]:"fire-core-compat",[M]:"fire-analytics",[R]:"fire-analytics-compat",[F]:"fire-app-check",[$]:"fire-app-check-compat",[V]:"fire-auth",[B]:"fire-auth-compat",[j]:"fire-rtdb",[U]:"fire-rtdb-compat",[z]:"fire-fn",[q]:"fire-fn-compat",[H]:"fire-iid",[G]:"fire-iid-compat",[K]:"fire-fcm",[W]:"fire-fcm-compat",[Z]:"fire-perf",[Q]:"fire-perf-compat",[J]:"fire-rc",[Y]:"fire-rc-compat",[X]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function ue(e,t){try{e.container.addComponent(t)}catch(n){L.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function le(e,t){e.container.addOrOverwriteComponent(t)}function he(e){const t=e.name;if(ce.has(t))return L.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())ue(n,e);return!0}function de(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function fe(e,t,n=se){de(e,t).clearInstance(n)}function pe(){ce.clear()}
/**
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
 */const me={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ge=new s.LL("app","Firebase",me);
/**
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
 */
class ve{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ge.create("app-deleted",{appName:this._name})}}
/**
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
 */const ye=ie;function we(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!==typeof o||!o)throw ge.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.aH)()),!n)throw ge.create("no-options");const a=ae.get(o);if(a){if((0,s.vZ)(n,a.options)&&(0,s.vZ)(i,a.config))return a;throw ge.create("duplicate-app",{appName:o})}const c=new r.H0(o);for(const r of ce.values())c.addComponent(r);const u=new ve(n,i,c);return ae.set(o,u),u}function be(e=se){const t=ae.get(e);if(!t&&e===se&&(0,s.aH)())return we();if(!t)throw ge.create("no-app",{appName:e});return t}function _e(){return Array.from(ae.values())}async function Ie(e){const t=e.name;ae.has(t)&&(ae.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function Se(e,t,n){var i;let s=null!==(i=oe[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void L.warn(e.join(" "))}he(new r.wA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}function Ee(e,t){if(null!==e&&"function"!==typeof e)throw ge.create("invalid-log-argument");(0,i.Am)(e,t)}function Te(e){(0,i.Ub)(e)}
/**
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
 */const Ce="firebase-heartbeat-database",ke=1,xe="firebase-heartbeat-store";let Ae=null;function Oe(){return Ae||(Ae=E(Ce,ke,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(xe)}}}).catch((e=>{throw ge.create("idb-open",{originalErrorMessage:e.message})}))),Ae}async function Ne(e){try{const t=await Oe(),n=await t.transaction(xe).objectStore(xe).get(Le(e));return n}catch(t){if(t instanceof s.ZR)L.warn(t.message);else{const e=ge.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});L.warn(e.message)}}}async function De(e,t){try{const n=await Oe(),r=n.transaction(xe,"readwrite"),i=r.objectStore(xe);await i.put(t,Le(e)),await r.done}catch(n){if(n instanceof s.ZR)L.warn(n.message);else{const e=ge.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});L.warn(e.message)}}}function Le(e){return`${e.name}!${e.options.appId}`}
/**
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
 */const Pe=1024,Re=2592e6;class Me{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ve(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=$e();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Re})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=$e(),{heartbeatsToSend:t,unsentEntries:n}=Fe(this._heartbeatsCache.heartbeats),r=(0,s.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function $e(){const e=new Date;return e.toISOString().substring(0,10)}function Fe(e,t=Pe){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Be(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Be(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ve{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Ne(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return De(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return De(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Be(e){return(0,s.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
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
 */function je(e){he(new r.wA("platform-logger",(e=>new A(e)),"PRIVATE")),he(new r.wA("heartbeat",(e=>new Me(e)),"PRIVATE")),Se(N,D,e),Se(N,D,"esm2017"),Se("fire-js","")}je("")},8463:function(e,t,n){n.d(t,{H0:function(){return u},wA:function(){return i}});var r=n(4444);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
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
 */const s="[DEFAULT]";
/**
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
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
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
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3333:function(e,t,n){n.d(t,{Am:function(){return h},Ub:function(){return l},Yd:function(){return u},in:function(){return i}});
/**
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
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function l(e){r.forEach((t=>{t.setLogLevel(e)}))}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map((e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((e=>e)).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:o,args:s,type:t.name})}}}},6154:function(e,t,n){function r(e,t){return function(){return e.apply(t,arguments)}}n.d(t,{Z:function(){return Vt}});const{toString:i}=Object.prototype,{getPrototypeOf:s}=Object,o=(e=>t=>{const n=i.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),a=e=>(e=e.toLowerCase(),t=>o(t)===e),c=e=>t=>typeof t===e,{isArray:u}=Array,l=c("undefined");function h(e){return null!==e&&!l(e)&&null!==e.constructor&&!l(e.constructor)&&m(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const d=a("ArrayBuffer");function f(e){let t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&d(e.buffer),t}const p=c("string"),m=c("function"),g=c("number"),v=e=>null!==e&&"object"===typeof e,y=e=>!0===e||!1===e,w=e=>{if("object"!==o(e))return!1;const t=s(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},b=a("Date"),_=a("File"),I=a("Blob"),S=a("FileList"),E=e=>v(e)&&m(e.pipe),T=e=>{let t;return e&&("function"===typeof FormData&&e instanceof FormData||m(e.append)&&("formdata"===(t=o(e))||"object"===t&&m(e.toString)&&"[object FormData]"===e.toString()))},C=a("URLSearchParams"),k=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function x(e,t,{allOwnKeys:n=!1}={}){if(null===e||"undefined"===typeof e)return;let r,i;if("object"!==typeof e&&(e=[e]),u(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let o;for(r=0;r<s;r++)o=i[r],t.call(null,e[o],o,e)}}function A(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,i=n.length;while(i-- >0)if(r=n[i],t===r.toLowerCase())return r;return null}const O=(()=>"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global)(),N=e=>!l(e)&&e!==O;function D(){const{caseless:e}=N(this)&&this||{},t={},n=(n,r)=>{const i=e&&A(t,r)||r;w(t[i])&&w(n)?t[i]=D(t[i],n):w(n)?t[i]=D({},n):u(n)?t[i]=n.slice():t[i]=n};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&x(arguments[r],n);return t}const L=(e,t,n,{allOwnKeys:i}={})=>(x(t,((t,i)=>{n&&m(t)?e[i]=r(t,n):e[i]=t}),{allOwnKeys:i}),e),P=e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),R=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},M=(e,t,n,r)=>{let i,o,a;const c={};if(t=t||{},null==e)return t;do{i=Object.getOwnPropertyNames(e),o=i.length;while(o-- >0)a=i[o],r&&!r(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==n&&s(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},$=(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},F=e=>{if(!e)return null;if(u(e))return e;let t=e.length;if(!g(t))return null;const n=new Array(t);while(t-- >0)n[t]=e[t];return n},V=(e=>t=>e&&t instanceof e)("undefined"!==typeof Uint8Array&&s(Uint8Array)),B=(e,t)=>{const n=e&&e[Symbol.iterator],r=n.call(e);let i;while((i=r.next())&&!i.done){const n=i.value;t.call(e,n[0],n[1])}},j=(e,t)=>{let n;const r=[];while(null!==(n=e.exec(t)))r.push(n);return r},U=a("HTMLFormElement"),z=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),q=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),H=a("RegExp"),G=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};x(n,((n,i)=>{let s;!1!==(s=t(n,i,e))&&(r[i]=s||n)})),Object.defineProperties(e,r)},K=e=>{G(e,((t,n)=>{if(m(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];m(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},W=(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return u(e)?r(e):r(String(e).split(t)),n},Z=()=>{},Q=(e,t)=>(e=+e,Number.isFinite(e)?e:t),J="abcdefghijklmnopqrstuvwxyz",Y="0123456789",X={DIGIT:Y,ALPHA:J,ALPHA_DIGIT:J+J.toUpperCase()+Y},ee=(e=16,t=X.ALPHA_DIGIT)=>{let n="";const{length:r}=t;while(e--)n+=t[Math.random()*r|0];return n};function te(e){return!!(e&&m(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])}const ne=e=>{const t=new Array(10),n=(e,r)=>{if(v(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const i=u(e)?[]:{};return x(e,((e,t)=>{const s=n(e,r+1);!l(s)&&(i[t]=s)})),t[r]=void 0,i}}return e};return n(e,0)},re=a("AsyncFunction"),ie=e=>e&&(v(e)||m(e))&&m(e.then)&&m(e.catch);var se={isArray:u,isArrayBuffer:d,isBuffer:h,isFormData:T,isArrayBufferView:f,isString:p,isNumber:g,isBoolean:y,isObject:v,isPlainObject:w,isUndefined:l,isDate:b,isFile:_,isBlob:I,isRegExp:H,isFunction:m,isStream:E,isURLSearchParams:C,isTypedArray:V,isFileList:S,forEach:x,merge:D,extend:L,trim:k,stripBOM:P,inherits:R,toFlatObject:M,kindOf:o,kindOfTest:a,endsWith:$,toArray:F,forEachEntry:B,matchAll:j,isHTMLForm:U,hasOwnProperty:q,hasOwnProp:q,reduceDescriptors:G,freezeMethods:K,toObjectSet:W,toCamelCase:z,noop:Z,toFiniteNumber:Q,findKey:A,global:O,isContextDefined:N,ALPHABET:X,generateString:ee,isSpecCompliantForm:te,toJSONObject:ne,isAsyncFn:re,isThenable:ie};function oe(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}se.inherits(oe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:se.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ae=oe.prototype,ce={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{ce[e]={value:e}})),Object.defineProperties(oe,ce),Object.defineProperty(ae,"isAxiosError",{value:!0}),oe.from=(e,t,n,r,i,s)=>{const o=Object.create(ae);return se.toFlatObject(e,o,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),oe.call(o,e.message,t,n,r,i),o.cause=e,o.name=e.name,s&&Object.assign(o,s),o};var ue=oe,le=null;function he(e){return se.isPlainObject(e)||se.isArray(e)}function de(e){return se.endsWith(e,"[]")?e.slice(0,-2):e}function fe(e,t,n){return e?e.concat(t).map((function(e,t){return e=de(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}function pe(e){return se.isArray(e)&&!e.some(he)}const me=se.toFlatObject(se,{},null,(function(e){return/^is[A-Z]/.test(e)}));function ge(e,t,n){if(!se.isObject(e))throw new TypeError("target must be an object");t=t||new(le||FormData),n=se.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!se.isUndefined(t[e])}));const r=n.metaTokens,i=n.visitor||l,s=n.dots,o=n.indexes,a=n.Blob||"undefined"!==typeof Blob&&Blob,c=a&&se.isSpecCompliantForm(t);if(!se.isFunction(i))throw new TypeError("visitor must be a function");function u(e){if(null===e)return"";if(se.isDate(e))return e.toISOString();if(!c&&se.isBlob(e))throw new ue("Blob is not supported. Use a Buffer instead.");return se.isArrayBuffer(e)||se.isTypedArray(e)?c&&"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,n,i){let a=e;if(e&&!i&&"object"===typeof e)if(se.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(se.isArray(e)&&pe(e)||(se.isFileList(e)||se.endsWith(n,"[]"))&&(a=se.toArray(e)))return n=de(n),a.forEach((function(e,r){!se.isUndefined(e)&&null!==e&&t.append(!0===o?fe([n],r,s):null===o?n:n+"[]",u(e))})),!1;return!!he(e)||(t.append(fe(i,n,s),u(e)),!1)}const h=[],d=Object.assign(me,{defaultVisitor:l,convertValue:u,isVisitable:he});function f(e,n){if(!se.isUndefined(e)){if(-1!==h.indexOf(e))throw Error("Circular reference detected in "+n.join("."));h.push(e),se.forEach(e,(function(e,r){const s=!(se.isUndefined(e)||null===e)&&i.call(t,e,se.isString(r)?r.trim():r,n,d);!0===s&&f(e,n?n.concat(r):[r])})),h.pop()}}if(!se.isObject(e))throw new TypeError("data must be an object");return f(e),t}var ve=ge;function ye(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function we(e,t){this._pairs=[],e&&ve(e,this,t)}const be=we.prototype;be.append=function(e,t){this._pairs.push([e,t])},be.toString=function(e){const t=e?function(t){return e.call(this,t,ye)}:ye;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var _e=we;function Ie(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Se(e,t,n){if(!t)return e;const r=n&&n.encode||Ie,i=n&&n.serialize;let s;if(s=i?i(t,n):se.isURLSearchParams(t)?t.toString():new _e(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}class Ee{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){se.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}var Te=Ee,Ce={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ke="undefined"!==typeof URLSearchParams?URLSearchParams:_e,xe="undefined"!==typeof FormData?FormData:null,Ae="undefined"!==typeof Blob?Blob:null;const Oe=(()=>{let e;return("undefined"===typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!==typeof window&&"undefined"!==typeof document)})(),Ne=(()=>"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts)();var De={isBrowser:!0,classes:{URLSearchParams:ke,FormData:xe,Blob:Ae},isStandardBrowserEnv:Oe,isStandardBrowserWebWorkerEnv:Ne,protocols:["http","https","file","blob","url","data"]};function Le(e,t){return ve(e,new De.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return De.isNode&&se.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}function Pe(e){return se.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}function Re(e){const t={},n=Object.keys(e);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],t[s]=e[s];return t}function Me(e){function t(e,n,r,i){let s=e[i++];const o=Number.isFinite(+s),a=i>=e.length;if(s=!s&&se.isArray(r)?r.length:s,a)return se.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!o;r[s]&&se.isObject(r[s])||(r[s]=[]);const c=t(e,n,r[s],i);return c&&se.isArray(r[s])&&(r[s]=Re(r[s])),!o}if(se.isFormData(e)&&se.isFunction(e.entries)){const n={};return se.forEachEntry(e,((e,r)=>{t(Pe(e),r,n,0)})),n}return null}var $e=Me;function Fe(e,t,n){if(se.isString(e))try{return(t||JSON.parse)(e),se.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}const Ve={transitional:Ce,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,i=se.isObject(e);i&&se.isHTMLForm(e)&&(e=new FormData(e));const s=se.isFormData(e);if(s)return r&&r?JSON.stringify($e(e)):e;if(se.isArrayBuffer(e)||se.isBuffer(e)||se.isStream(e)||se.isFile(e)||se.isBlob(e))return e;if(se.isArrayBufferView(e))return e.buffer;if(se.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Le(e,this.formSerializer).toString();if((o=se.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return ve(o?{"files[]":e}:e,t&&new t,this.formSerializer)}}return i||r?(t.setContentType("application/json",!1),Fe(e)):e}],transformResponse:[function(e){const t=this.transitional||Ve.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&se.isString(e)&&(n&&!this.responseType||r)){const n=t&&t.silentJSONParsing,s=!n&&r;try{return JSON.parse(e)}catch(i){if(s){if("SyntaxError"===i.name)throw ue.from(i,ue.ERR_BAD_RESPONSE,this,null,this.response);throw i}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:De.classes.FormData,Blob:De.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};se.forEach(["delete","get","head","post","put","patch"],(e=>{Ve.headers[e]={}}));var Be=Ve;const je=se.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var Ue=e=>{const t={};let n,r,i;return e&&e.split("\n").forEach((function(e){i=e.indexOf(":"),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim(),!n||t[n]&&je[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t};const ze=Symbol("internals");function qe(e){return e&&String(e).trim().toLowerCase()}function He(e){return!1===e||null==e?e:se.isArray(e)?e.map(He):String(e)}function Ge(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;while(r=n.exec(e))t[r[1]]=r[2];return t}const Ke=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function We(e,t,n,r,i){return se.isFunction(r)?r.call(this,t,n):(i&&(t=n),se.isString(t)?se.isString(r)?-1!==t.indexOf(r):se.isRegExp(r)?r.test(t):void 0:void 0)}function Ze(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}function Qe(e,t){const n=se.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})}))}class Je{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function i(e,t,n){const i=qe(t);if(!i)throw new Error("header name must be a non-empty string");const s=se.findKey(r,i);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=He(e))}const s=(e,t)=>se.forEach(e,((e,n)=>i(e,n,t)));return se.isPlainObject(e)||e instanceof this.constructor?s(e,t):se.isString(e)&&(e=e.trim())&&!Ke(e)?s(Ue(e),t):null!=e&&i(t,e,n),this}get(e,t){if(e=qe(e),e){const n=se.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return Ge(e);if(se.isFunction(t))return t.call(this,e,n);if(se.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=qe(e),e){const n=se.findKey(this,e);return!(!n||void 0===this[n]||t&&!We(this,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function i(e){if(e=qe(e),e){const i=se.findKey(n,e);!i||t&&!We(n,n[i],i,t)||(delete n[i],r=!0)}}return se.isArray(e)?e.forEach(i):i(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;while(n--){const i=t[n];e&&!We(this,this[i],i,e,!0)||(delete this[i],r=!0)}return r}normalize(e){const t=this,n={};return se.forEach(this,((r,i)=>{const s=se.findKey(n,i);if(s)return t[s]=He(r),void delete t[i];const o=e?Ze(i):String(i).trim();o!==i&&delete t[i],t[o]=He(r),n[o]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return se.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&se.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=this[ze]=this[ze]={accessors:{}},n=t.accessors,r=this.prototype;function i(e){const t=qe(e);n[t]||(Qe(r,e),n[t]=!0)}return se.isArray(e)?e.forEach(i):i(e),this}}Je.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),se.reduceDescriptors(Je.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),se.freezeMethods(Je);var Ye=Je;function Xe(e,t){const n=this||Be,r=t||n,i=Ye.from(r.headers);let s=r.data;return se.forEach(e,(function(e){s=e.call(n,s,i.normalize(),t?t.status:void 0)})),i.normalize(),s}function et(e){return!(!e||!e.__CANCEL__)}function tt(e,t,n){ue.call(this,null==e?"canceled":e,ue.ERR_CANCELED,t,n),this.name="CanceledError"}se.inherits(tt,ue,{__CANCEL__:!0});var nt=tt;function rt(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new ue("Request failed with status code "+n.status,[ue.ERR_BAD_REQUEST,ue.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}var it=De.isStandardBrowserEnv?function(){return{write:function(e,t,n,r,i,s){const o=[];o.push(e+"="+encodeURIComponent(t)),se.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),se.isString(r)&&o.push("path="+r),se.isString(i)&&o.push("domain="+i),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function st(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function ot(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function at(e,t){return e&&!st(t)?ot(e,t):t}var ct=De.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=se.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return function(){return!0}}();function ut(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function lt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i,s=0,o=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[o];i||(i=c),n[s]=a,r[s]=c;let l=o,h=0;while(l!==s)h+=n[l++],l%=e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-i<t)return;const d=u&&c-u;return d?Math.round(1e3*h/d):void 0}}var ht=lt;function dt(e,t){let n=0;const r=ht(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-n,c=r(a),u=s<=o;n=s;const l={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&u?(o-s)/c:void 0,event:i};l[t?"download":"upload"]=!0,e(l)}}const ft="undefined"!==typeof XMLHttpRequest;var pt=ft&&function(e){return new Promise((function(t,n){let r=e.data;const i=Ye.from(e.headers).normalize(),s=e.responseType;let o,a;function c(){e.cancelToken&&e.cancelToken.unsubscribe(o),e.signal&&e.signal.removeEventListener("abort",o)}se.isFormData(r)&&(De.isStandardBrowserEnv||De.isStandardBrowserWebWorkerEnv?i.setContentType(!1):i.getContentType(/^\s*multipart\/form-data/)?se.isString(a=i.getContentType())&&i.setContentType(a.replace(/^\s*(multipart\/form-data);+/,"$1")):i.setContentType("multipart/form-data"));let u=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(t+":"+n))}const l=at(e.baseURL,e.url);function h(){if(!u)return;const r=Ye.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),i=s&&"text"!==s&&"json"!==s?u.response:u.responseText,o={data:i,status:u.status,statusText:u.statusText,headers:r,config:e,request:u};rt((function(e){t(e),c()}),(function(e){n(e),c()}),o),u=null}if(u.open(e.method.toUpperCase(),Se(l,e.params,e.paramsSerializer),!0),u.timeout=e.timeout,"onloadend"in u?u.onloadend=h:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&setTimeout(h)},u.onabort=function(){u&&(n(new ue("Request aborted",ue.ECONNABORTED,e,u)),u=null)},u.onerror=function(){n(new ue("Network Error",ue.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||Ce;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new ue(t,r.clarifyTimeoutError?ue.ETIMEDOUT:ue.ECONNABORTED,e,u)),u=null},De.isStandardBrowserEnv){const t=(e.withCredentials||ct(l))&&e.xsrfCookieName&&it.read(e.xsrfCookieName);t&&i.set(e.xsrfHeaderName,t)}void 0===r&&i.setContentType(null),"setRequestHeader"in u&&se.forEach(i.toJSON(),(function(e,t){u.setRequestHeader(t,e)})),se.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),s&&"json"!==s&&(u.responseType=e.responseType),"function"===typeof e.onDownloadProgress&&u.addEventListener("progress",dt(e.onDownloadProgress,!0)),"function"===typeof e.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",dt(e.onUploadProgress)),(e.cancelToken||e.signal)&&(o=t=>{u&&(n(!t||t.type?new nt(null,e,u):t),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(o),e.signal&&(e.signal.aborted?o():e.signal.addEventListener("abort",o)));const d=ut(l);d&&-1===De.protocols.indexOf(d)?n(new ue("Unsupported protocol "+d+":",ue.ERR_BAD_REQUEST,e)):u.send(r||null)}))};const mt={http:le,xhr:pt};se.forEach(mt,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}}));const gt=e=>`- ${e}`,vt=e=>se.isFunction(e)||null===e||!1===e;var yt={getAdapter:e=>{e=se.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let s=0;s<t;s++){let t;if(n=e[s],r=n,!vt(n)&&(r=mt[(t=String(n)).toLowerCase()],void 0===r))throw new ue(`Unknown adapter '${t}'`);if(r)break;i[t||"#"+s]=r}if(!r){const e=Object.entries(i).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));let n=t?e.length>1?"since :\n"+e.map(gt).join("\n"):" "+gt(e[0]):"as no adapter specified";throw new ue("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r},adapters:mt};function wt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new nt(null,e)}function bt(e){wt(e),e.headers=Ye.from(e.headers),e.data=Xe.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);const t=yt.getAdapter(e.adapter||Be.adapter);return t(e).then((function(t){return wt(e),t.data=Xe.call(e,e.transformResponse,t),t.headers=Ye.from(t.headers),t}),(function(t){return et(t)||(wt(e),t&&t.response&&(t.response.data=Xe.call(e,e.transformResponse,t.response),t.response.headers=Ye.from(t.response.headers))),Promise.reject(t)}))}const _t=e=>e instanceof Ye?e.toJSON():e;function It(e,t){t=t||{};const n={};function r(e,t,n){return se.isPlainObject(e)&&se.isPlainObject(t)?se.merge.call({caseless:n},e,t):se.isPlainObject(t)?se.merge({},t):se.isArray(t)?t.slice():t}function i(e,t,n){return se.isUndefined(t)?se.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function s(e,t){if(!se.isUndefined(t))return r(void 0,t)}function o(e,t){return se.isUndefined(t)?se.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,i,s){return s in t?r(n,i):s in e?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(e,t)=>i(_t(e),_t(t),!0)};return se.forEach(Object.keys(Object.assign({},e,t)),(function(r){const s=c[r]||i,o=s(e[r],t[r],r);se.isUndefined(o)&&s!==a||(n[r]=o)})),n}const St="1.5.1",Et={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Et[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Tt={};function Ct(e,t,n){if("object"!==typeof e)throw new ue("options must be an object",ue.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;while(i-- >0){const s=r[i],o=t[s];if(o){const t=e[s],n=void 0===t||o(t,s,e);if(!0!==n)throw new ue("option "+s+" must be "+n,ue.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new ue("Unknown option "+s,ue.ERR_BAD_OPTION)}}Et.transitional=function(e,t,n){function r(e,t){return"[Axios v"+St+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,i,s)=>{if(!1===e)throw new ue(r(i," has been removed"+(t?" in "+t:"")),ue.ERR_DEPRECATED);return t&&!Tt[i]&&(Tt[i]=!0,console.warn(r(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,i,s)}};var kt={assertOptions:Ct,validators:Et};const xt=kt.validators;class At{constructor(e){this.defaults=e,this.interceptors={request:new Te,response:new Te}}request(e,t){"string"===typeof e?(t=t||{},t.url=e):t=e||{},t=It(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:i}=t;void 0!==n&&kt.assertOptions(n,{silentJSONParsing:xt.transitional(xt.boolean),forcedJSONParsing:xt.transitional(xt.boolean),clarifyTimeoutError:xt.transitional(xt.boolean)},!1),null!=r&&(se.isFunction(r)?t.paramsSerializer={serialize:r}:kt.assertOptions(r,{encode:xt.function,serialize:xt.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=i&&se.merge(i.common,i[t.method]);i&&se.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete i[e]})),t.headers=Ye.concat(s,i);const o=[];let a=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,o.unshift(e.fulfilled,e.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let l,h=0;if(!a){const e=[bt.bind(this),void 0];e.unshift.apply(e,o),e.push.apply(e,c),l=e.length,u=Promise.resolve(t);while(h<l)u=u.then(e[h++],e[h++]);return u}l=o.length;let d=t;h=0;while(h<l){const e=o[h++],t=o[h++];try{d=e(d)}catch(f){t.call(this,f);break}}try{u=bt.call(this,d)}catch(f){return Promise.reject(f)}h=0,l=c.length;while(h<l)u=u.then(c[h++],c[h++]);return u}getUri(e){e=It(this.defaults,e);const t=at(e.baseURL,e.url);return Se(t,e.params,e.paramsSerializer)}}se.forEach(["delete","get","head","options"],(function(e){At.prototype[e]=function(t,n){return this.request(It(n||{},{method:e,url:t,data:(n||{}).data}))}})),se.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,i){return this.request(It(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}At.prototype[e]=t(),At.prototype[e+"Form"]=t(!0)}));var Ot=At;class Nt{constructor(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;while(t-- >0)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,i){n.reason||(n.reason=new nt(e,r,i),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;const t=new Nt((function(t){e=t}));return{token:t,cancel:e}}}var Dt=Nt;function Lt(e){return function(t){return e.apply(null,t)}}function Pt(e){return se.isObject(e)&&!0===e.isAxiosError}const Rt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Rt).forEach((([e,t])=>{Rt[t]=e}));var Mt=Rt;function $t(e){const t=new Ot(e),n=r(Ot.prototype.request,t);return se.extend(n,Ot.prototype,t,{allOwnKeys:!0}),se.extend(n,t,null,{allOwnKeys:!0}),n.create=function(t){return $t(It(e,t))},n}const Ft=$t(Be);Ft.Axios=Ot,Ft.CanceledError=nt,Ft.CancelToken=Dt,Ft.isCancel=et,Ft.VERSION=St,Ft.toFormData=ve,Ft.AxiosError=ue,Ft.Cancel=Ft.CanceledError,Ft.all=function(e){return Promise.all(e)},Ft.spread=Lt,Ft.isAxiosError=Pt,Ft.mergeConfig=It,Ft.AxiosHeaders=Ye,Ft.formToJSON=e=>$e(se.isHTMLForm(e)?new FormData(e):e),Ft.getAdapter=yt.getAdapter,Ft.HttpStatusCode=Mt,Ft.default=Ft;var Vt=Ft},4866:function(e,t,n){n.d(t,{Z:function(){return r.Z}});var r=n(8180),i="firebase",s="10.5.0";
/**
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
 */
r.Z.registerVersion(i,s,"app-compat")},6860:function(e,t,n){var r=n(8180),i=n(4444),s=n(5816),o=n(3333);function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var c=n(8463);
/**
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
 */
const u={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},l={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
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
 */
function h(e){return void 0!==e&&void 0!==e.getResponse}function d(e){return void 0!==e&&void 0!==e.enterprise}class f{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
/**
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
 */function p(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend.",["unsupported-password-policy-schema-version"]:"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.",["password-does-not-meet-requirements"]:"The password does not meet the requirements."}}function m(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const g=p,v=m,y=new i.LL("auth","Firebase",m()),w=new o.Yd("@firebase/auth");function b(e,...t){w.logLevel<=o["in"].WARN&&w.warn(`Auth (${s.SDK_VERSION}): ${e}`,...t)}function _(e,...t){w.logLevel<=o["in"].ERROR&&w.error(`Auth (${s.SDK_VERSION}): ${e}`,...t)}
/**
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
 */function I(e,...t){throw C(e,...t)}function S(e,...t){return C(e,...t)}function E(e,t,n){const r=Object.assign(Object.assign({},v()),{[t]:n}),s=new i.LL("auth","Firebase",r);return s.create(t,{appName:e.name})}function T(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&I(e,"argument-error"),E(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function C(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return y.create(e,...t)}function k(e,t,...n){if(!e)throw C(t,...n)}function x(e){const t="INTERNAL ASSERTION FAILED: "+e;throw _(t),new Error(t)}function A(e,t){e||x(t)}
/**
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
 */function O(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function N(){return"http:"===D()||"https:"===D()}function D(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
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
 */function L(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(N()||(0,i.ru)()||"connection"in navigator))||navigator.onLine}function P(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
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
 */class R{constructor(e,t){this.shortDelay=e,this.longDelay=t,A(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return L()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
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
 */function M(e,t){A(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
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
 */class ${static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void x("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void x("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void x("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const F={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},V=new R(3e4,6e4);
/**
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
 */function B(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function j(e,t,n,r,s={}){return U(e,s,(async()=>{let s={},o={};r&&("GET"===t?o=r:s={body:JSON.stringify(r)});const a=(0,i.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),$.fetch()(q(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))}))}async function U(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},F),t);try{const t=new H(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw G(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw G(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw G(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw G(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw E(e,a,o);I(e,a)}}catch(s){if(s instanceof i.ZR)throw s;I(e,"network-request-failed",{message:String(s)})}}async function z(e,t,n,r,i={}){const s=await j(e,t,n,r,i);return"mfaPendingCredential"in s&&I(e,"multi-factor-auth-required",{_serverResponse:s}),s}function q(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?M(e.config,i):`${e.config.apiScheme}://${i}`}class H{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(S(this.auth,"network-request-failed"))),V.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function G(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=S(e,t,r);return i.customData._tokenResponse=n,i}
/**
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
 */async function K(e){return(await j(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function W(e,t){return j(e,"GET","/v2/recaptchaConfig",B(e,t))}
/**
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
 */async function Z(e,t){return j(e,"POST","/v1/accounts:delete",t)}async function Q(e,t){return j(e,"POST","/v1/accounts:update",t)}async function J(e,t){return j(e,"POST","/v1/accounts:lookup",t)}
/**
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
 */function Y(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
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
 */async function X(e,t=!1){const n=(0,i.m9)(e),r=await n.getIdToken(t),s=te(r);k(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:r,authTime:Y(ee(s.auth_time)),issuedAtTime:Y(ee(s.iat)),expirationTime:Y(ee(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function ee(e){return 1e3*Number(e)}function te(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return _("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.tV)(n);return e?JSON.parse(e):(_("Failed to decode base64 JWT payload"),null)}catch(s){return _("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function ne(e){const t=te(e);return k(t,"internal-error"),k("undefined"!==typeof t.exp,"internal-error"),k("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
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
 */async function re(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i.ZR&&ie(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function ie({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
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
 */class se{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
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
 */class oe{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Y(this.lastLoginAt),this.creationTime=Y(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
 */async function ae(e){var t;const n=e.auth,r=await e.getIdToken(),i=await re(e,J(n,{idToken:r}));k(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?le(s.providerUserInfo):[],a=ue(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new oe(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function ce(e){const t=(0,i.m9)(e);await ae(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ue(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function le(e){return e.map((e=>{var{providerId:t}=e,n=a(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
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
 */async function he(e,t){const n=await U(e,{},(async()=>{const n=(0,i.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=q(e,r,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",$.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
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
 */class de{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){k(e.idToken,"internal-error"),k("undefined"!==typeof e.idToken,"internal-error"),k("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):ne(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return k(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await he(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new de;return n&&(k("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(k("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(k("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new de,this.toJSON())}_performRefresh(){return x("not implemented")}}
/**
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
 */function fe(e,t){k("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class pe{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=a(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new se(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new oe(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await re(this,this.stsTokenManager.getToken(this.auth,e));return k(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return X(this,e)}reload(){return ce(this)}_assign(e){this!==e&&(k(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new pe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){k(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ae(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await re(this,Z(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:w,isAnonymous:b,providerData:_,stsTokenManager:I}=t;k(y&&I,e,"internal-error");const S=de.fromJSON(this.name,I);k("string"===typeof y,e,"internal-error"),fe(l,e.name),fe(h,e.name),k("boolean"===typeof w,e,"internal-error"),k("boolean"===typeof b,e,"internal-error"),fe(d,e.name),fe(f,e.name),fe(p,e.name),fe(m,e.name),fe(g,e.name),fe(v,e.name);const E=new pe({uid:y,auth:e,email:h,emailVerified:w,displayName:l,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:S,createdAt:g,lastLoginAt:v});return _&&Array.isArray(_)&&(E.providerData=_.map((e=>Object.assign({},e)))),m&&(E._redirectEventId=m),E}static async _fromIdTokenResponse(e,t,n=!1){const r=new de;r.updateFromServerResponse(t);const i=new pe({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ae(i),i}}
/**
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
 */const me=new Map;function ge(e){A(e instanceof Function,"Expected a class definition");let t=me.get(e);return t?(A(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,me.set(e,t),t)}
/**
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
 */class ve{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ve.type="NONE";const ye=ve;
/**
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
 */function we(e,t,n){return`firebase:${e}:${t}:${n}`}class be{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=we(this.userKey,r.apiKey,i),this.fullPersistenceKey=we("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new be(ge(ye),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||ge(ye);const s=we(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=pe._fromJSON(e,t);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(c){}}))),new be(i,e,n)):new be(i,e,n)}}
/**
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
 */function _e(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Te(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ie(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ke(t))return"Blackberry";if(xe(t))return"Webos";if(Se(t))return"Safari";if((t.includes("chrome/")||Ee(t))&&!t.includes("edge/"))return"Chrome";if(Ce(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function Ie(e=(0,i.z$)()){return/firefox\//i.test(e)}function Se(e=(0,i.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ee(e=(0,i.z$)()){return/crios\//i.test(e)}function Te(e=(0,i.z$)()){return/iemobile/i.test(e)}function Ce(e=(0,i.z$)()){return/android/i.test(e)}function ke(e=(0,i.z$)()){return/blackberry/i.test(e)}function xe(e=(0,i.z$)()){return/webos/i.test(e)}function Ae(e=(0,i.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Oe(e=(0,i.z$)()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function Ne(e=(0,i.z$)()){var t;return Ae(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function De(){return(0,i.w1)()&&10===document.documentMode}function Le(e=(0,i.z$)()){return Ae(e)||Ce(e)||xe(e)||ke(e)||/windows phone/i.test(e)||Te(e)}function Pe(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
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
 */function Re(e,t=[]){let n;switch(e){case"Browser":n=_e((0,i.z$)());break;case"Worker":n=`${_e((0,i.z$)())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${s.SDK_VERSION}/${r}`}
/**
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
 */class Me{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
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
 */async function $e(e,t={}){return j(e,"GET","/v2/passwordPolicy",B(e,t))}
/**
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
 */const Fe=6;class Ve{constructor(e){var t,n,r,i;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:Fe,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,i,s,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsLowercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
/**
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
 */class Be{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ue(this),this.idTokenSubscription=new Ue(this),this.beforeStateQueue=new Me(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=y,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ge(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await be.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return k(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ae(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=P()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,i.m9)(e):null;return t&&k(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&k(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(ge(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $e(this),t=new Ve(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ge(e)||this._popupRedirectResolver;k(t,this,"argument-error"),this.redirectPersistenceManager=await be.create(this,[ge(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(k(o,this,"internal-error"),o.then((()=>{s||i(this.currentUser)})),"function"===typeof t){const i=e.addObserver(t,n,r);return()=>{s=!0,i()}}{const n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return k(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Re(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&b(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function je(e){return(0,i.m9)(e)}class Ue{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.ne)((e=>this.observer=e))}get next(){return k(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
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
 */function ze(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function qe(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=S("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",ze().appendChild(r)}))}function He(e){return`__${e}${Math.floor(1e6*Math.random())}`}const Ge="https://www.google.com/recaptcha/enterprise.js?render=",Ke="recaptcha-enterprise",We="NO_RECAPTCHA";class Ze{constructor(e){this.type=Ke,this.auth=je(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{W(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new f(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function r(t,n,r){const i=window.grecaptcha;d(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n(We)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{n(this.auth).then((n=>{if(!t&&d(window.grecaptcha))r(n,e,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));qe(Ge+n).then((()=>{r(n,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function Qe(e,t,n,r=!1){const i=new Ze(e);let s;try{s=await i.verify(n)}catch(a){s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}function Je(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ge);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}function Ye(e,t,n){const r=je(e);k(r._canInitEmulator,r,"emulator-config-failed"),k(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Xe(t),{host:o,port:a}=et(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||nt()}function Xe(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function et(e){const t=Xe(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:tt(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:tt(t)}}}function tt(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function nt(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
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
 */class rt{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return x("not implemented")}_getIdTokenResponse(e){return x("not implemented")}_linkToIdToken(e,t){return x("not implemented")}_getReauthenticationResolver(e){return x("not implemented")}}
/**
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
 */async function it(e,t){return j(e,"POST","/v1/accounts:resetPassword",B(e,t))}async function st(e,t){return j(e,"POST","/v1/accounts:update",t)}async function ot(e,t){return j(e,"POST","/v1/accounts:update",B(e,t))}
/**
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
 */async function at(e,t){return z(e,"POST","/v1/accounts:signInWithPassword",B(e,t))}async function ct(e,t){return j(e,"POST","/v1/accounts:sendOobCode",B(e,t))}async function ut(e,t){return ct(e,t)}async function lt(e,t){return ct(e,t)}async function ht(e,t){return ct(e,t)}async function dt(e,t){return ct(e,t)}
/**
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
 */async function ft(e,t){return z(e,"POST","/v1/accounts:signInWithEmailLink",B(e,t))}async function pt(e,t){return z(e,"POST","/v1/accounts:signInWithEmailLink",B(e,t))}
/**
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
 */class mt extends rt{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new mt(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new mt(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await Qe(e,n,"signInWithPassword");return at(e,t)}return at(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await Qe(e,n,"signInWithPassword");return at(e,t)}return Promise.reject(t)}));case"emailLink":return ft(e,{email:this._email,oobCode:this._password});default:I(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return st(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return pt(e,{idToken:t,email:this._email,oobCode:this._password});default:I(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
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
 */async function gt(e,t){return z(e,"POST","/v1/accounts:signInWithIdp",B(e,t))}
/**
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
 */const vt="http://localhost";class yt extends rt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new yt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):I("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=a(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new yt(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return gt(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,gt(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,gt(e,t)}buildRequest(){const e={requestUri:vt,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,i.xO)(t)}return e}}
/**
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
 */async function wt(e,t){return j(e,"POST","/v1/accounts:sendVerificationCode",B(e,t))}async function bt(e,t){return z(e,"POST","/v1/accounts:signInWithPhoneNumber",B(e,t))}async function _t(e,t){const n=await z(e,"POST","/v1/accounts:signInWithPhoneNumber",B(e,t));if(n.temporaryProof)throw G(e,"account-exists-with-different-credential",n);return n}const It={["USER_NOT_FOUND"]:"user-not-found"};async function St(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return z(e,"POST","/v1/accounts:signInWithPhoneNumber",B(e,n),It)}
/**
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
 */class Et extends rt{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Et({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Et({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return bt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return _t(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return St(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Et({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
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
 */function Tt(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ct(e){const t=(0,i.zd)((0,i.pd)(e))["link"],n=t?(0,i.zd)((0,i.pd)(t))["deep_link_id"]:null,r=(0,i.zd)((0,i.pd)(e))["deep_link_id"],s=r?(0,i.zd)((0,i.pd)(r))["link"]:null;return s||r||n||t||e}class kt{constructor(e){var t,n,r,s,o,a;const c=(0,i.zd)((0,i.pd)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=Tt(null!==(r=c["mode"])&&void 0!==r?r:null);k(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=Ct(e);try{return new kt(t)}catch(n){return null}}}
/**
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
 */
class xt{constructor(){this.providerId=xt.PROVIDER_ID}static credential(e,t){return mt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=kt.parseLink(t);return k(n,"argument-error"),mt._fromEmailAndCode(e,n.code,n.tenantId)}}xt.PROVIDER_ID="password",xt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",xt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
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
 */
class At{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
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
 */class Ot extends At{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Nt extends Ot{static credentialFromJSON(e){const t="string"===typeof e?JSON.parse(e):e;return k("providerId"in t&&"signInMethod"in t,"argument-error"),yt._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return k(e.idToken||e.accessToken,"argument-error"),yt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Nt.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Nt.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:s,providerId:o}=e;if(!n&&!r&&!t&&!i)return null;if(!o)return null;try{return new Nt(o)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:i})}catch(a){return null}}}
/**
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
 */class Dt extends Ot{constructor(){super("facebook.com")}static credential(e){return yt._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dt.credentialFromTaggedObject(e)}static credentialFromError(e){return Dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Dt.credential(e.oauthAccessToken)}catch(t){return null}}}Dt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Dt.PROVIDER_ID="facebook.com";
/**
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
 */
class Lt extends Ot{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return yt._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Lt.credential(t,n)}catch(r){return null}}}Lt.GOOGLE_SIGN_IN_METHOD="google.com",Lt.PROVIDER_ID="google.com";
/**
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
 */
class Pt extends Ot{constructor(){super("github.com")}static credential(e){return yt._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Pt.credential(e.oauthAccessToken)}catch(t){return null}}}Pt.GITHUB_SIGN_IN_METHOD="github.com",Pt.PROVIDER_ID="github.com";
/**
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
 */
const Rt="http://localhost";class Mt extends rt{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return gt(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,gt(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,gt(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new Mt(n,i):null}static _create(e,t){return new Mt(e,t)}buildRequest(){return{requestUri:Rt,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
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
 */const $t="saml.";class Ft extends At{constructor(e){k(e.startsWith($t),"argument-error"),super(e)}static credentialFromResult(e){return Ft.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Ft.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Mt.fromJSON(e);return k(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return Mt._create(n,t)}catch(r){return null}}}
/**
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
 */class Vt extends Ot{constructor(){super("twitter.com")}static credential(e,t){return yt._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Vt.credential(t,n)}catch(r){return null}}}
/**
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
 */
async function Bt(e,t){return z(e,"POST","/v1/accounts:signUp",B(e,t))}
/**
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
 */Vt.TWITTER_SIGN_IN_METHOD="twitter.com",Vt.PROVIDER_ID="twitter.com";class jt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await pe._fromIdTokenResponse(e,n,r),s=Ut(n),o=new jt({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Ut(n);return new jt({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Ut(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
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
 */async function zt(e){var t;const n=je(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new jt({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Bt(n,{returnSecureToken:!0}),i=await jt._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
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
 */class qt extends i.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,qt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new qt(e,t,n,r)}}function Ht(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw qt._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
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
 */function Gt(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
/**
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
 */async function Kt(e,t){const n=(0,i.m9)(e);await Zt(!0,n,t);const{providerUserInfo:r}=await Q(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),s=Gt(r||[]);return n.providerData=n.providerData.filter((e=>s.has(e.providerId))),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Wt(e,t,n=!1){const r=await re(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return jt._forOperation(e,"link",r)}async function Zt(e,t,n){await ae(t);const r=Gt(t.providerData),i=!1===e?"provider-already-linked":"no-such-provider";k(r.has(n)===e,t.auth,i)}
/**
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
 */async function Qt(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await re(e,Ht(r,i,t,e),n);k(s.idToken,r,"internal-error");const o=te(s.idToken);k(o,r,"internal-error");const{sub:a}=o;return k(e.uid===a,r,"user-mismatch"),jt._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&I(r,"user-mismatch"),s}}
/**
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
 */async function Jt(e,t,n=!1){const r="signIn",i=await Ht(e,r,t),s=await jt._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Yt(e,t){return Jt(je(e),t)}async function Xt(e,t){const n=(0,i.m9)(e);return await Zt(!1,n,t.providerId),Wt(n,t)}async function en(e,t){return Qt((0,i.m9)(e),t)}
/**
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
 */async function tn(e,t){return z(e,"POST","/v1/accounts:signInWithCustomToken",B(e,t))}
/**
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
 */async function nn(e,t){const n=je(e),r=await tn(n,{token:t,returnSecureToken:!0}),i=await jt._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
/**
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
 */class rn{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?sn._fromServerResponse(e,t):"totpInfo"in t?on._fromServerResponse(e,t):I(e,"internal-error")}}class sn extends rn{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new sn(t)}}class on extends rn{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new on(t)}}
/**
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
 */function an(e,t,n){var r;k((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),k("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(k(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(k(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
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
 */async function cn(e){const t=je(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function un(e,t,n){var r;const i=je(e),s={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await Qe(i,s,"getOobCode",!0);n&&an(i,e,n),await lt(i,e)}else n&&an(i,s,n),await lt(i,s).catch((async e=>{if("auth/missing-recaptcha-token"!==e.code)return Promise.reject(e);{console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const e=await Qe(i,s,"getOobCode",!0);n&&an(i,e,n),await lt(i,e)}}))}async function ln(e,t,n){await it((0,i.m9)(e),{oobCode:t,newPassword:n}).catch((async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&cn(e),t}))}async function hn(e,t){await ot((0,i.m9)(e),{oobCode:t})}async function dn(e,t){const n=(0,i.m9)(e),r=await it(n,{oobCode:t}),s=r.requestType;switch(k(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":k(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":k(r.mfaInfo,n,"internal-error");default:k(r.email,n,"internal-error")}let o=null;return r.mfaInfo&&(o=rn._fromServerResponse(je(n),r.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.newEmail:r.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.email:r.newEmail)||null,multiFactorInfo:o},operation:s}}async function fn(e,t){const{data:n}=await dn((0,i.m9)(e),t);return n.email}async function pn(e,t,n){var r;const i=je(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await Qe(i,s,"signUpPassword");o=Bt(i,e)}else o=Bt(i,s).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await Qe(i,s,"signUpPassword");return Bt(i,e)}throw e}));const a=await o.catch((t=>{throw"auth/password-does-not-meet-requirements"===t.code&&cn(e),t})),c=await jt._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function mn(e,t,n){return Yt((0,i.m9)(e),xt.credential(t,n)).catch((async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&cn(e),t}))}
/**
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
 */async function gn(e,t,n){var r;const i=je(e),s={requestType:"EMAIL_SIGNIN",email:t,clientType:"CLIENT_TYPE_WEB"};function o(e,t){k(t.handleCodeInApp,i,"argument-error"),t&&an(i,e,t)}if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await Qe(i,s,"getOobCode",!0);o(e,n),await ht(i,e)}else o(s,n),await ht(i,s).catch((async e=>{if("auth/missing-recaptcha-token"!==e.code)return Promise.reject(e);{console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const e=await Qe(i,s,"getOobCode",!0);o(e,n),await ht(i,e)}}))}function vn(e,t){const n=kt.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function yn(e,t,n){const r=(0,i.m9)(e),s=xt.credentialWithLink(t,n||O());return k(s._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Yt(r,s)}
/**
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
 */async function wn(e,t){return j(e,"POST","/v1/accounts:createAuthUri",B(e,t))}
/**
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
 */async function bn(e,t){const n=N()?O():"http://localhost",r={identifier:t,continueUri:n},{signinMethods:s}=await wn((0,i.m9)(e),r);return s||[]}async function _n(e,t){const n=(0,i.m9)(e),r=await e.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:r};t&&an(n.auth,s,t);const{email:o}=await ut(n.auth,s);o!==e.email&&await e.reload()}async function In(e,t,n){const r=(0,i.m9)(e),s=await e.getIdToken(),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:s,newEmail:t};n&&an(r.auth,o,n);const{email:a}=await dt(r.auth,o);a!==e.email&&await e.reload()}
/**
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
 */async function Sn(e,t){return j(e,"POST","/v1/accounts:update",t)}
/**
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
 */async function En(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=(0,i.m9)(e),s=await r.getIdToken(),o={idToken:s,displayName:t,photoUrl:n,returnSecureToken:!0},a=await re(r,Sn(r.auth,o));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find((({providerId:e})=>"password"===e));c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function Tn(e,t){return kn((0,i.m9)(e),t,null)}function Cn(e,t){return kn((0,i.m9)(e),null,t)}async function kn(e,t,n){const{auth:r}=e,i=await e.getIdToken(),s={idToken:i,returnSecureToken:!0};t&&(s.email=t),n&&(s.password=n);const o=await re(e,st(r,s));await e._updateTokensIfNecessary(o,!0)}
/**
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
 */function xn(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null===e||void 0===e?void 0:e.idToken)){const r=null===(n=null===(t=te(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n["sign_in_provider"];if(r){const e="anonymous"!==r&&"custom"!==r?r:null;return new An(s,e)}}if(!r)return null;switch(r){case"facebook.com":return new Nn(s,i);case"github.com":return new Dn(s,i);case"google.com":return new Ln(s,i);case"twitter.com":return new Pn(s,i,e.screenName||null);case"custom":case"anonymous":return new An(s,null);default:return new An(s,r,i)}}class An{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class On extends An{constructor(e,t,n,r){super(e,t,n),this.username=r}}class Nn extends An{constructor(e,t){super(e,"facebook.com",t)}}class Dn extends On{constructor(e,t){super(e,"github.com",t,"string"===typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class Ln extends An{constructor(e,t){super(e,"google.com",t)}}class Pn extends On{constructor(e,t,n){super(e,"twitter.com",t,n)}}function Rn(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:xn(n)}
/**
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
 */
/**
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
 */
class Mn{constructor(e,t,n){this.type=e,this.credential=t,this.user=n}static _fromIdtoken(e,t){return new Mn("enroll",e,t)}static _fromMfaPendingCredential(e){return new Mn("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,n;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return Mn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return Mn._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
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
 */class $n{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=je(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map((e=>rn._fromServerResponse(n,e)));k(r.mfaPendingCredential,n,"internal-error");const s=Mn._fromMfaPendingCredential(r.mfaPendingCredential);return new $n(s,i,(async e=>{const i=await e._process(n,s);delete r.mfaInfo,delete r.mfaPendingCredential;const o=Object.assign(Object.assign({},r),{idToken:i.idToken,refreshToken:i.refreshToken});switch(t.operationType){case"signIn":const e=await jt._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return k(t.user,n,"internal-error"),jt._forOperation(t.user,t.operationType,o);default:I(n,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function Fn(e,t){var n;const r=(0,i.m9)(e),s=t;return k(t.customData.operationType,r,"argument-error"),k(null===(n=s.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,r,"argument-error"),$n._fromError(r,s)}
/**
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
 */function Vn(e,t){return j(e,"POST","/v2/accounts/mfaEnrollment:start",B(e,t))}function Bn(e,t){return j(e,"POST","/v2/accounts/mfaEnrollment:finalize",B(e,t))}function jn(e,t){return j(e,"POST","/v2/accounts/mfaEnrollment:start",B(e,t))}function Un(e,t){return j(e,"POST","/v2/accounts/mfaEnrollment:finalize",B(e,t))}function zn(e,t){return j(e,"POST","/v2/accounts/mfaEnrollment:withdraw",B(e,t))}class qn{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>rn._fromServerResponse(e.auth,t))))}))}static _fromUser(e){return new qn(e)}async getSession(){return Mn._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const n=e,r=await this.getSession(),i=await re(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t="string"===typeof e?e:e.uid,n=await this.user.getIdToken();try{const e=await re(this.user,zn(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==t)),await this.user._updateTokensIfNecessary(e),await this.user.reload()}catch(r){throw r}}}const Hn=new WeakMap;function Gn(e){const t=(0,i.m9)(e);return Hn.has(t)||Hn.set(t,qn._fromUser(t)),Hn.get(t)}const Kn="__sak";
/**
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
 */class Wn{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Kn,"1"),this.storage.removeItem(Kn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
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
 */function Zn(){const e=(0,i.z$)();return Se(e)||Ae(e)}const Qn=1e3,Jn=10;class Yn extends Wn{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Zn()&&Pe(),this.fallbackToPolling=Le(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);De()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Jn):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Qn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Yn.type="LOCAL";const Xn=Yn;
/**
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
 */class er extends Wn{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}er.type="SESSION";const tr=er;
/**
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
 */function nr(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
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
 */class rr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new rr(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await nr(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
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
 */
function ir(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
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
 */rr.receivers=[];class sr{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=ir("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
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
 */function or(){return window}function ar(e){or().location.href=e}
/**
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
 */function cr(){return"undefined"!==typeof or()["WorkerGlobalScope"]&&"function"===typeof or()["importScripts"]}async function ur(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function lr(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function hr(){return cr()?self:null}
/**
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
 */const dr="firebaseLocalStorageDb",fr=1,pr="firebaseLocalStorage",mr="fbase_key";class gr{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function vr(e,t){return e.transaction([pr],t?"readwrite":"readonly").objectStore(pr)}function yr(){const e=indexedDB.deleteDatabase(dr);return new gr(e).toPromise()}function wr(){const e=indexedDB.open(dr,fr);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(pr,{keyPath:mr})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(pr)?t(n):(n.close(),await yr(),t(await wr()))}))}))}async function br(e,t,n){const r=vr(e,!0).put({[mr]:t,value:n});return new gr(r).toPromise()}async function _r(e,t){const n=vr(e,!1).get(t),r=await new gr(n).toPromise();return void 0===r?null:r.value}function Ir(e,t){const n=vr(e,!0).delete(t);return new gr(n).toPromise()}const Sr=800,Er=3;class Tr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await wr()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Er)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rr._getInstance(hr()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await ur(),!this.activeServiceWorker)return;this.sender=new sr(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&lr()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wr();return await br(e,Kn,"1"),await Ir(e,Kn),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>br(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>_r(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Ir(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=vr(e,!1).getAll();return new gr(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Sr)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Tr.type="LOCAL";const Cr=Tr;
/**
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
 */function kr(e,t){return j(e,"POST","/v2/accounts/mfaSignIn:start",B(e,t))}function xr(e,t){return j(e,"POST","/v2/accounts/mfaSignIn:finalize",B(e,t))}function Ar(e,t){return j(e,"POST","/v2/accounts/mfaSignIn:finalize",B(e,t))}
/**
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
 */const Or=500,Nr=6e4,Dr=1e12;class Lr{constructor(e){this.auth=e,this.counter=Dr,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new Pr(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||Dr;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||Dr;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||Dr;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class Pr{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"===typeof e?document.getElementById(e):e;k(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=Rr(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(n){}this.isVisible&&this.execute()}),Nr)}),Or))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Rr(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
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
 */const Mr=He("rcb"),$r=new R(3e4,6e4),Fr="https://www.google.com/recaptcha/api.js?";class Vr{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=or().grecaptcha)||void 0===e?void 0:e.render)}load(e,t=""){return k(Br(t),e,"argument-error"),this.shouldResolveImmediately(t)&&h(or().grecaptcha)?Promise.resolve(or().grecaptcha):new Promise(((n,r)=>{const s=or().setTimeout((()=>{r(S(e,"network-request-failed"))}),$r.get());or()[Mr]=()=>{or().clearTimeout(s),delete or()[Mr];const i=or().grecaptcha;if(!i||!h(i))return void r(S(e,"internal-error"));const o=i.render;i.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(i)};const o=`${Fr}?${(0,i.xO)({onload:Mr,render:"explicit",hl:t})}`;qe(o).catch((()=>{clearTimeout(s),r(S(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=or().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Br(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class jr{async load(e){return new Lr(e)}clearedOneInstance(){}}
/**
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
 */const Ur="recaptcha",zr={theme:"light",type:"image"};class qr{constructor(e,t,n=Object.assign({},zr)){this.parameters=n,this.type=Ur,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=je(e),this.isInvisible="invisible"===this.parameters.size,k("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"===typeof t?document.getElementById(t):t;k(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new jr:new Vr,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise((n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){k(!this.parameters.sitekey,this.auth,"argument-error"),k(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),k("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"===typeof e)e(t);else if("string"===typeof e){const n=or()[e];"function"===typeof n&&n(t)}}}assertNotDestroyed(){k(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){k(N()&&!cr(),this.auth,"internal-error"),await Hr(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await K(this.auth);k(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return k(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Hr(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
/**
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
 */class Gr{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Et._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Kr(e,t,n){const r=je(e),s=await Qr(r,t,(0,i.m9)(n));return new Gr(s,(e=>Yt(r,e)))}async function Wr(e,t,n){const r=(0,i.m9)(e);await Zt(!1,r,"phone");const s=await Qr(r.auth,t,(0,i.m9)(n));return new Gr(s,(e=>Xt(r,e)))}async function Zr(e,t,n){const r=(0,i.m9)(e),s=await Qr(r.auth,t,(0,i.m9)(n));return new Gr(s,(e=>en(r,e)))}async function Qr(e,t,n){var r;const i=await n.verify();try{let s;if(k("string"===typeof i,e,"argument-error"),k(n.type===Ur,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){k("enroll"===t.type,e,"internal-error");const n=await Vn(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{k("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;k(n,e,"missing-multi-factor-info");const o=await kr(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await wt(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}async function Jr(e,t){await Wt((0,i.m9)(e),t)}
/**
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
 */class Yr{constructor(e){this.providerId=Yr.PROVIDER_ID,this.auth=je(e)}verifyPhoneNumber(e,t){return Qr(this.auth,e,(0,i.m9)(t))}static credential(e,t){return Et._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Yr.credentialFromTaggedObject(t)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Et._fromTokenResponse(t,n):null}}
/**
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
 */
function Xr(e,t){return t?ge(t):(k(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
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
 */Yr.PROVIDER_ID="phone",Yr.PHONE_SIGN_IN_METHOD="phone";class ei extends rt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return gt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return gt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ti(e){return Jt(e.auth,new ei(e),e.bypassAuthState)}function ni(e){const{auth:t,user:n}=e;return k(n,t,"internal-error"),Qt(n,new ei(e),e.bypassAuthState)}async function ri(e){const{auth:t,user:n}=e;return k(n,t,"internal-error"),Wt(n,new ei(e),e.bypassAuthState)}
/**
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
 */class ii{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ti;case"linkViaPopup":case"linkViaRedirect":return ri;case"reauthViaPopup":case"reauthViaRedirect":return ni;default:I(this.auth,"internal-error")}}resolve(e){A(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){A(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
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
 */const si=new R(2e3,1e4);async function oi(e,t,n){const r=je(e);T(e,t,At);const i=Xr(r,n),s=new ui(r,"signInViaPopup",t,i);return s.executeNotNull()}async function ai(e,t,n){const r=(0,i.m9)(e);T(r.auth,t,At);const s=Xr(r.auth,n),o=new ui(r.auth,"reauthViaPopup",t,s,r);return o.executeNotNull()}async function ci(e,t,n){const r=(0,i.m9)(e);T(r.auth,t,At);const s=Xr(r.auth,n),o=new ui(r.auth,"linkViaPopup",t,s,r);return o.executeNotNull()}class ui extends ii{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,ui.currentPopupAction&&ui.currentPopupAction.cancel(),ui.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return k(e,this.auth,"internal-error"),e}async onExecution(){A(1===this.filter.length,"Popup operations only handle one event");const e=ir();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(S(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(S(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ui.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(S(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,si.get())};e()}}ui.currentPopupAction=null;
/**
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
 */
const li="pendingRedirect",hi=new Map;class di extends ii{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=hi.get(this.auth._key());if(!e){try{const t=await fi(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}hi.set(this.auth._key(),e)}return this.bypassAuthState||hi.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function fi(e,t){const n=yi(t),r=vi(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}async function pi(e,t){return vi(e)._set(yi(t),"true")}function mi(){hi.clear()}function gi(e,t){hi.set(e._key(),t)}function vi(e){return ge(e._redirectPersistence)}function yi(e){return we(li,e.config.apiKey,e.name)}
/**
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
 */function wi(e,t,n){return bi(e,t,n)}async function bi(e,t,n){const r=je(e);T(e,t,At),await r._initializationPromise;const i=Xr(r,n);return await pi(i,r),i._openRedirect(r,t,"signInViaRedirect")}function _i(e,t,n){return Ii(e,t,n)}async function Ii(e,t,n){const r=(0,i.m9)(e);T(r.auth,t,At),await r.auth._initializationPromise;const s=Xr(r.auth,n);await pi(s,r.auth);const o=await ki(r);return s._openRedirect(r.auth,t,"reauthViaRedirect",o)}function Si(e,t,n){return Ei(e,t,n)}async function Ei(e,t,n){const r=(0,i.m9)(e);T(r.auth,t,At),await r.auth._initializationPromise;const s=Xr(r.auth,n);await Zt(!1,r,t.providerId),await pi(s,r.auth);const o=await ki(r);return s._openRedirect(r.auth,t,"linkViaRedirect",o)}async function Ti(e,t){return await je(e)._initializationPromise,Ci(e,t,!1)}async function Ci(e,t,n=!1){const r=je(e),i=Xr(r,t),s=new di(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}async function ki(e){const t=ir(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
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
 */const xi=6e5;class Ai{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Di(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Ni(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(S(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xi&&this.cachedEventUids.clear(),this.cachedEventUids.has(Oi(e))}saveEventToCache(e){this.cachedEventUids.add(Oi(e)),this.lastProcessedEventTime=Date.now()}}function Oi(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Ni({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Di(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ni(e);default:return!1}}
/**
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
 */async function Li(e,t={}){return j(e,"GET","/v1/projects",t)}
/**
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
 */const Pi=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ri=/^https?/;async function Mi(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Li(e);for(const r of t)try{if($i(r))return}catch(n){}I(e,"unauthorized-domain")}function $i(e){const t=O(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Ri.test(n))return!1;if(Pi.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
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
 */const Fi=new R(3e4,6e4);function Vi(){const e=or().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Bi(e){return new Promise(((t,n)=>{var r,i,s;function o(){Vi(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Vi(),n(S(e,"network-request-failed"))},timeout:Fi.get()})}if(null===(i=null===(r=or().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=or().gapi)||void 0===s?void 0:s.load)){const t=He("iframefcb");return or()[t]=()=>{gapi.load?o():n(S(e,"network-request-failed"))},qe(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw ji=null,e}))}let ji=null;function Ui(e){return ji=ji||Bi(e),ji}
/**
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
 */const zi=new R(5e3,15e3),qi="__/auth/iframe",Hi="emulator/auth/iframe",Gi={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ki=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Wi(e){const t=e.config;k(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?M(t,Hi):`https://${e.config.authDomain}/${qi}`,r={apiKey:t.apiKey,appName:e.name,v:s.SDK_VERSION},o=Ki.get(e.config.apiHost);o&&(r.eid=o);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${(0,i.xO)(r).slice(1)}`}async function Zi(e){const t=await Ui(e),n=or().gapi;return k(n,e,"internal-error"),t.open({where:document.body,url:Wi(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Gi,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=S(e,"network-request-failed"),s=or().setTimeout((()=>{r(i)}),zi.get());function o(){or().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
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
 */const Qi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ji=500,Yi=600,Xi="_blank",es="http://localhost";class ts{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function ns(e,t,n,r=Ji,s=Yi){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Qi),{width:r.toString(),height:s.toString(),top:o,left:a}),l=(0,i.z$)().toLowerCase();n&&(c=Ee(l)?Xi:n),Ie(l)&&(t=t||es,u.scrollbars="yes");const h=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(Ne(l)&&"_self"!==c)return rs(t||"",c),new ts(null);const d=window.open(t||"",c,h);k(d,e,"popup-blocked");try{d.focus()}catch(f){}return new ts(d)}function rs(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
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
 */const is="__/auth/handler",ss="emulator/auth/handler",os=encodeURIComponent("fac");async function as(e,t,n,r,o,a){k(e.config.authDomain,e,"auth-domain-config-required"),k(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:s.SDK_VERSION,eventId:o};if(t instanceof At){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,i.xb)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Ot){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const i of Object.keys(u))void 0===u[i]&&delete u[i];const l=await e._getAppCheckToken(),h=l?`#${os}=${encodeURIComponent(l)}`:"";return`${cs(e)}?${(0,i.xO)(u).slice(1)}${h}`}function cs({config:e}){return e.emulator?M(e,ss):`https://${e.authDomain}/${is}`}
/**
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
 */const us="webStorageSupport";class ls{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tr,this._completeRedirectFn=Ci,this._overrideRedirectResult=gi}async _openPopup(e,t,n,r){var i;A(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=await as(e,t,n,O(),r);return ns(e,s,ir())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await as(e,t,n,O(),r);return ar(i),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(A(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Zi(e),n=new Ai(e);return t.register("authEvent",(t=>{k(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(us,{type:us},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[us];void 0!==i&&t(!!i),I(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Mi(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Le()||Se()||Ae()}}const hs=ls;class ds{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return x("unexpected MultiFactorSessionType")}}}class fs extends ds{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new fs(e)}_finalizeEnroll(e,t,n){return Bn(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return xr(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class ps{constructor(){}static assertion(e){return fs._fromCredential(e)}}ps.FACTOR_ID="phone";class ms{static assertionForEnrollment(e,t){return gs._fromSecret(e,t)}static assertionForSignIn(e,t){return gs._fromEnrollmentId(e,t)}static async generateSecret(e){var t;const n=e;k("undefined"!==typeof(null===(t=n.user)||void 0===t?void 0:t.auth),"internal-error");const r=await jn(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return vs._fromStartTotpMfaEnrollmentResponse(r,n.user.auth)}}ms.FACTOR_ID="totp";class gs extends ds{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new gs(t,void 0,e)}static _fromEnrollmentId(e,t){return new gs(t,e)}async _finalizeEnroll(e,t,n){return k("undefined"!==typeof this.secret,e,"argument-error"),Un(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){k(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return Ar(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class vs{constructor(e,t,n,r,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new vs(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return(ys(e)||ys(t))&&(r=!0),r&&(ys(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),ys(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function ys(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var ws="@firebase/auth",bs="1.3.0";
/**
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
 */
class _s{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){k(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
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
 */function Is(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ss(e){(0,s._registerComponent)(new c.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;k(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Re(e)},u=new Be(r,i,s,c);return Je(u,n),u}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,s._registerComponent)(new c.wA("auth-internal",(e=>{const t=je(e.getProvider("auth").getImmediate());return(e=>new _s(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.registerVersion)(ws,bs,Is(e)),(0,s.registerVersion)(ws,bs,"esm2017")}
/**
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
 */const Es=300;(0,i.Pz)("authIdTokenMaxAge");
/**
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
 */
function Ts(){return window}
/**
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
 */Ss("Browser");const Cs=2e3;async function ks(e,t,n){var r;const{BuildInfo:i}=Ts();A(t.sessionId,"AuthEvent did not contain a session ID");const s=await Ds(t.sessionId),o={};return Ae()?o["ibi"]=i.packageName:Ce()?o["apn"]=i.packageName:I(e,"operation-not-supported-in-this-environment"),i.displayName&&(o["appDisplayName"]=i.displayName),o["sessionId"]=s,as(e,n,t.type,void 0,null!==(r=t.eventId)&&void 0!==r?r:void 0,o)}async function xs(e){const{BuildInfo:t}=Ts(),n={};Ae()?n.iosBundleId=t.packageName:Ce()?n.androidPackageName=t.packageName:I(e,"operation-not-supported-in-this-environment"),await Li(e,n)}function As(e){const{cordova:t}=Ts();return new Promise((n=>{t.plugins.browsertab.isAvailable((r=>{let i=null;r?t.plugins.browsertab.openUrl(e):i=t.InAppBrowser.open(e,Oe()?"_blank":"_system","location=yes"),n(i)}))}))}async function Os(e,t,n){const{cordova:r}=Ts();let i=()=>{};try{await new Promise(((s,o)=>{let a=null;function c(){var e;s();const t=null===(e=r.plugins.browsertab)||void 0===e?void 0:e.close;"function"===typeof t&&t(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function u(){a||(a=window.setTimeout((()=>{o(S(e,"redirect-cancelled-by-user"))}),Cs))}function l(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&u()}t.addPassiveListener(c),document.addEventListener("resume",u,!1),Ce()&&document.addEventListener("visibilitychange",l,!1),i=()=>{t.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}}))}finally{i()}}function Ns(e){var t,n,r,i,s,o,a,c,u,l;const h=Ts();k("function"===typeof(null===(t=null===h||void 0===h?void 0:h.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),k("undefined"!==typeof(null===(n=null===h||void 0===h?void 0:h.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),k("function"===typeof(null===(s=null===(i=null===(r=null===h||void 0===h?void 0:h.cordova)||void 0===r?void 0:r.plugins)||void 0===i?void 0:i.browsertab)||void 0===s?void 0:s.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),k("function"===typeof(null===(c=null===(a=null===(o=null===h||void 0===h?void 0:h.cordova)||void 0===o?void 0:o.plugins)||void 0===a?void 0:a.browsertab)||void 0===c?void 0:c.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),k("function"===typeof(null===(l=null===(u=null===h||void 0===h?void 0:h.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===l?void 0:l.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function Ds(e){const t=Ls(e),n=await crypto.subtle.digest("SHA-256",t),r=Array.from(new Uint8Array(n));return r.map((e=>e.toString(16).padStart(2,"0"))).join("")}function Ls(e){if(A(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}
/**
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
 */const Ps=20;class Rs extends Ai{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInialized=e}))}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach((t=>t(e))),super.onEvent(e)}async initialized(){await this.initPromise}}function Ms(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:Bs(),postBody:null,tenantId:e.tenantId,error:S(e,"no-auth-event")}}function $s(e,t){return js()._set(Us(e),t)}async function Fs(e){const t=await js()._get(Us(e));return t&&await js()._remove(Us(e)),t}function Vs(e,t){var n,r;const i=qs(t);if(i.includes("/__/auth/callback")){const t=Hs(i),s=t["firebaseError"]?zs(decodeURIComponent(t["firebaseError"])):null,o=null===(r=null===(n=null===s||void 0===s?void 0:s["code"])||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],a=o?S(o):null;return a?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:i,postBody:null}}return null}function Bs(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<Ps;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function js(){return ge(Xn)}function Us(e){return we("authEvent",e.config.apiKey,e.name)}function zs(e){try{return JSON.parse(e)}catch(t){return null}}function qs(e){const t=Hs(e),n=t["link"]?decodeURIComponent(t["link"]):void 0,r=Hs(n)["link"],i=t["deep_link_id"]?decodeURIComponent(t["deep_link_id"]):void 0,s=Hs(i)["link"];return s||i||r||n||e}function Hs(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return(0,i.zd)(n.join("?"))}
/**
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
 */const Gs=500;class Ks{constructor(){this._redirectPersistence=tr,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Ci,this._overrideRedirectResult=gi}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new Rs(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){I(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,r){Ns(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),mi(),await this._originValidation(e);const s=Ms(e,n,r);await $s(e,s);const o=await ks(e,s,t),a=await As(o);return Os(e,i,a)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=xs(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:r,BuildInfo:i}=Ts(),s=setTimeout((async()=>{await Fs(e),t.onEvent(Zs())}),Gs),o=async n=>{clearTimeout(s);const r=await Fs(e);let i=null;r&&(null===n||void 0===n?void 0:n["url"])&&(i=Vs(r,n["url"])),t.onEvent(i||Zs())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,o);const a=r,c=`${i.packageName.toLowerCase()}://`;Ts().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(c)&&o({url:e}),"function"===typeof a)try{a(e)}catch(t){console.error(t)}}}}const Ws=Ks;function Zs(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:S("no-auth-event")}}
/**
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
 */function Qs(e,t){je(e)._logFramework(t)}var Js="@firebase/auth-compat",Ys="0.4.6";
/**
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
 */
const Xs=1e3;function eo(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function to(){return"http:"===eo()||"https:"===eo()}function no(e=(0,i.z$)()){return!("file:"!==eo()&&"ionic:"!==eo()&&"capacitor:"!==eo()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function ro(){return(0,i.b$)()||(0,i.UG)()}function io(){return(0,i.w1)()&&11===(null===document||void 0===document?void 0:document.documentMode)}function so(e=(0,i.z$)()){return/Edge\/\d+/.test(e)}function oo(e=(0,i.z$)()){return io()||so(e)}function ao(){try{const e=self.localStorage,t=ir();if(e)return e["setItem"](t,"1"),e["removeItem"](t),!oo()||(0,i.hl)()}catch(e){return co()&&(0,i.hl)()}return!1}function co(){return"undefined"!==typeof n.g&&"WorkerGlobalScope"in n.g&&"importScripts"in n.g}function uo(){return(to()||(0,i.ru)()||no())&&!ro()&&ao()&&!co()}function lo(){return no()&&"undefined"!==typeof document}async function ho(){return!!lo()&&new Promise((e=>{const t=setTimeout((()=>{e(!1)}),Xs);document.addEventListener("deviceready",(()=>{clearTimeout(t),e(!0)}))}))}function fo(){return"undefined"!==typeof window?window:null}
/**
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
 */const po={LOCAL:"local",NONE:"none",SESSION:"session"},mo=k,go="persistence";function vo(e,t){mo(Object.values(po).includes(t),e,"invalid-persistence-type"),(0,i.b$)()?mo(t!==po.SESSION,e,"unsupported-persistence-type"):(0,i.UG)()?mo(t===po.NONE,e,"unsupported-persistence-type"):co()?mo(t===po.NONE||t===po.LOCAL&&(0,i.hl)(),e,"unsupported-persistence-type"):mo(t===po.NONE||ao(),e,"unsupported-persistence-type")}async function yo(e){await e._initializationPromise;const t=bo(),n=we(go,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function wo(e,t){const n=bo();if(!n)return[];const r=we(go,e,t),i=n.getItem(r);switch(i){case po.NONE:return[ye];case po.LOCAL:return[Cr,tr];case po.SESSION:return[tr];default:return[]}}function bo(){var e;try{return(null===(e=fo())||void 0===e?void 0:e.sessionStorage)||null}catch(t){return null}}
/**
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
 */const _o=k;class Io{constructor(){this.browserResolver=ge(hs),this.cordovaResolver=ge(Ws),this.underlyingResolver=null,this._redirectPersistence=tr,this._completeRedirectFn=Ci,this._overrideRedirectResult=gi}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return lo()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return _o(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await ho();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
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
 */function So(e){return e.unwrap()}function Eo(e){return e.wrapped()}
/**
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
 */function To(e){return ko(e)}function Co(e,t){var n;const r=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===(null===t||void 0===t?void 0:t.code)){const n=t;n.resolver=new Oo(e,Fn(e,t))}else if(r){const e=ko(t),n=t;e&&(n.credential=e,n.tenantId=r.tenantId||void 0,n.email=r.email||void 0,n.phoneNumber=r.phoneNumber||void 0)}}function ko(e){const{_tokenResponse:t}=e instanceof i.ZR?e.customData:e;if(!t)return null;if(!(e instanceof i.ZR)&&"temporaryProof"in t&&"phoneNumber"in t)return Yr.credentialFromResult(e);const n=t.providerId;if(!n||n===u.PASSWORD)return null;let r;switch(n){case u.GOOGLE:r=Lt;break;case u.FACEBOOK:r=Dt;break;case u.GITHUB:r=Pt;break;case u.TWITTER:r=Vt;break;default:const{oauthIdToken:e,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:o,nonce:a}=t;return i||s||e||o?o?n.startsWith("saml.")?Mt._create(n,o):yt._fromParams({providerId:n,signInMethod:n,pendingToken:o,idToken:e,accessToken:i}):new Nt(n).credential({idToken:e,accessToken:i,rawNonce:a}):null}return e instanceof i.ZR?r.credentialFromError(e):r.credentialFromResult(e)}function xo(e,t){return t.catch((t=>{throw t instanceof i.ZR&&Co(e,t),t})).then((e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:To(e),additionalUserInfo:Rn(e),user:No.getOrCreate(n)}}))}async function Ao(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>xo(e,n.confirm(t))}}class Oo{constructor(e,t){this.resolver=t,this.auth=Eo(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return xo(So(this.auth),this.resolver.resolveSignIn(e))}}
/**
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
 */class No{constructor(e){this._delegate=e,this.multiFactor=Gn(e)}static getOrCreate(e){return No.USER_MAP.has(e)||No.USER_MAP.set(e,new No(e)),No.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return xo(this.auth,Xt(this._delegate,e))}async linkWithPhoneNumber(e,t){return Ao(this.auth,Wr(this._delegate,e,t))}async linkWithPopup(e){return xo(this.auth,ci(this._delegate,e,Io))}async linkWithRedirect(e){return await yo(je(this.auth)),Si(this._delegate,e,Io)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return xo(this.auth,en(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return Ao(this.auth,Zr(this._delegate,e,t))}reauthenticateWithPopup(e){return xo(this.auth,ai(this._delegate,e,Io))}async reauthenticateWithRedirect(e){return await yo(je(this.auth)),_i(this._delegate,e,Io)}sendEmailVerification(e){return _n(this._delegate,e)}async unlink(e){return await Kt(this._delegate,e),this}updateEmail(e){return Tn(this._delegate,e)}updatePassword(e){return Cn(this._delegate,e)}updatePhoneNumber(e){return Jr(this._delegate,e)}updateProfile(e){return En(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return In(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}No.USER_MAP=new WeakMap;
/**
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
 */
const Do=k;class Lo{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;Do(n,"invalid-api-key",{appName:e.name}),Do(n,"invalid-api-key",{appName:e.name});const r="undefined"!==typeof window?Io:void 0;this._delegate=t.initialize({options:{persistence:Ro(n,e.name),popupRedirectResolver:r}}),this._delegate._updateErrorMap(g),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?No.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){Ye(this._delegate,e,t)}applyActionCode(e){return hn(this._delegate,e)}checkActionCode(e){return dn(this._delegate,e)}confirmPasswordReset(e,t){return ln(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return xo(this._delegate,pn(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return bn(this._delegate,e)}isSignInWithEmailLink(e){return vn(this._delegate,e)}async getRedirectResult(){Do(uo(),this._delegate,"operation-not-supported-in-this-environment");const e=await Ti(this._delegate,Io);return e?xo(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){Qs(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:r,error:i,complete:s}=Po(e,t,n);return this._delegate.onAuthStateChanged(r,i,s)}onIdTokenChanged(e,t,n){const{next:r,error:i,complete:s}=Po(e,t,n);return this._delegate.onIdTokenChanged(r,i,s)}sendSignInLinkToEmail(e,t){return gn(this._delegate,e,t)}sendPasswordResetEmail(e,t){return un(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(vo(this._delegate,e),e){case po.SESSION:t=tr;break;case po.LOCAL:const e=await ge(Cr)._isAvailable();t=e?Cr:Xn;break;case po.NONE:t=ye;break;default:return I("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return xo(this._delegate,zt(this._delegate))}signInWithCredential(e){return xo(this._delegate,Yt(this._delegate,e))}signInWithCustomToken(e){return xo(this._delegate,nn(this._delegate,e))}signInWithEmailAndPassword(e,t){return xo(this._delegate,mn(this._delegate,e,t))}signInWithEmailLink(e,t){return xo(this._delegate,yn(this._delegate,e,t))}signInWithPhoneNumber(e,t){return Ao(this._delegate,Kr(this._delegate,e,t))}async signInWithPopup(e){return Do(uo(),this._delegate,"operation-not-supported-in-this-environment"),xo(this._delegate,oi(this._delegate,e,Io))}async signInWithRedirect(e){return Do(uo(),this._delegate,"operation-not-supported-in-this-environment"),await yo(this._delegate),wi(this._delegate,e,Io)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return fn(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function Po(e,t,n){let r=e;"function"!==typeof e&&({next:r,error:t,complete:n}=e);const i=r,s=e=>i(e&&No.getOrCreate(e));return{next:s,error:t,complete:n}}function Ro(e,t){const n=wo(e,t);if("undefined"===typeof self||n.includes(Cr)||n.push(Cr),"undefined"!==typeof window)for(const r of[Xn,tr])n.includes(r)||n.push(r);return n.includes(ye)||n.push(ye),n}
/**
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
 */Lo.Persistence=po;class Mo{constructor(){this.providerId="phone",this._delegate=new Yr(So(r.Z.auth()))}static credential(e,t){return Yr.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}Mo.PHONE_SIGN_IN_METHOD=Yr.PHONE_SIGN_IN_METHOD,Mo.PROVIDER_ID=Yr.PROVIDER_ID;
/**
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
 */
const $o=k;class Fo{constructor(e,t,n=r.Z.app()){var i;$o(null===(i=n.options)||void 0===i?void 0:i.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new qr(n.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
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
 */const Vo="auth-compat";function Bo(e){e.INTERNAL.registerComponent(new c.wA(Vo,(e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new Lo(t,n)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:l.EMAIL_SIGNIN,PASSWORD_RESET:l.PASSWORD_RESET,RECOVER_EMAIL:l.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:l.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:l.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:l.VERIFY_EMAIL}},EmailAuthProvider:xt,FacebookAuthProvider:Dt,GithubAuthProvider:Pt,GoogleAuthProvider:Lt,OAuthProvider:Nt,SAMLAuthProvider:Ft,PhoneAuthProvider:Mo,PhoneMultiFactorGenerator:ps,RecaptchaVerifier:Fo,TwitterAuthProvider:Vt,Auth:Lo,AuthCredential:rt,Error:i.ZR}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(Js,Ys)}Bo(r.Z)},4673:function(e,t,n){var r,i=n(8180),s=n(5816),o=n(8463),a=n(3333),c=n(4444),u="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},l={},h=h||{},d=u||self;function f(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function p(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function m(e){return Object.prototype.hasOwnProperty.call(e,g)&&e[g]||(e[g]=++v)}var g="closure_uid_"+(1e9*Math.random()>>>0),v=0;function y(e,t,n){return e.call.apply(e.bind,arguments)}function w(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function b(e,t,n){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:w,b.apply(null,arguments)}function _(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function I(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function S(){this.s=this.s,this.o=this.o}var E=0;S.prototype.s=!1,S.prototype.sa=function(){this.s||(this.s=!0,this.N(),0==E)||m(this)},S.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const T=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function C(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function k(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(f(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function x(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}x.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{d.addEventListener("test",(()=>{}),t),d.removeEventListener("test",(()=>{}),t)}catch(n){}return e}();function O(e){return/^[\s\xa0]*$/.test(e)}function N(){var e=d.navigator;return e&&(e=e.userAgent)?e:""}function D(e){return-1!=N().indexOf(e)}function L(e){return L[" "](e),e}function P(e,t){var n=_r;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}L[" "]=function(){};var R,M,$=D("Opera"),F=D("Trident")||D("MSIE"),V=D("Edge"),B=V||F,j=D("Gecko")&&!(-1!=N().toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),U=-1!=N().toLowerCase().indexOf("webkit")&&!D("Edge");function z(){var e=d.document;return e?e.documentMode:void 0}e:{var q="",H=function(){var e=N();return j?/rv:([^\);]+)(\)|;)/.exec(e):V?/Edge\/([\d\.]+)/.exec(e):F?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):U?/WebKit\/(\S+)/.exec(e):$?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(H&&(q=H?H[1]:""),F){var G=z();if(null!=G&&G>parseFloat(q)){R=String(G);break e}}R=q}if(d.document&&F){var K=z();M=K||(parseInt(R,10)||void 0)}else M=void 0;var W=M;function Z(e,t){if(x.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(j){e:{try{L(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:Q[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Z.$.h.call(this)}}I(Z,x);var Q={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var J="closure_listenable_"+(1e6*Math.random()|0),Y=0;function X(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++Y,this.fa=this.ia=!1}function ee(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function te(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function ne(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function re(e){const t={};for(const n in e)t[n]=e[n];return t}const ie="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function se(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<ie.length;t++)n=ie[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function oe(e){this.src=e,this.g={},this.h=0}function ae(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=T(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ee(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ce(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}oe.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=ce(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new X(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};var ue="closure_lm_"+(1e6*Math.random()|0),le={};function he(e,t,n,r,i){if(r&&r.once)return pe(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)he(e,t[s],n,r,i);return null}return n=_e(n),e&&e[J]?e.O(t,n,p(r)?!!r.capture:!!r,i):de(e,t,n,!1,r,i)}function de(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=p(i)?!!i.capture:!!i,a=we(e);if(a||(e[ue]=a=new oe(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=fe(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)A||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(ve(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function fe(){function e(n){return t.call(e.src,e.listener,n)}const t=ye;return e}function pe(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)pe(e,t[s],n,r,i);return null}return n=_e(n),e&&e[J]?e.P(t,n,p(r)?!!r.capture:!!r,i):de(e,t,n,!0,r,i)}function me(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)me(e,t[s],n,r,i);else r=p(r)?!!r.capture:!!r,n=_e(n),e&&e[J]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=ce(s,n,r,i),-1<n&&(ee(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=we(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ce(t,n,r,i)),(n=-1<e?t[e]:null)&&ge(n))}function ge(e){if("number"!==typeof e&&e&&!e.fa){var t=e.src;if(t&&t[J])ae(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ve(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=we(t))?(ae(n,e),0==n.h&&(n.src=null,t[ue]=null)):ee(e)}}}function ve(e){return e in le?le[e]:le[e]="on"+e}function ye(e,t){if(e.fa)e=!0;else{t=new Z(t,this);var n=e.listener,r=e.la||e.src;e.ia&&ge(e),e=n.call(r,t)}return e}function we(e){return e=e[ue],e instanceof oe?e:null}var be="__closure_events_fn_"+(1e9*Math.random()>>>0);function _e(e){return"function"===typeof e?e:(e[be]||(e[be]=function(t){return e.handleEvent(t)}),e[be])}function Ie(){S.call(this),this.i=new oe(this),this.S=this,this.J=null}function Se(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,"string"===typeof t)t=new x(t,e);else if(t instanceof x)t.target=t.target||e;else{var i=t;t=new x(r,e),se(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Ee(o,r,!0,t)&&i}if(o=t.g=e,i=Ee(o,r,!0,t)&&i,i=Ee(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Ee(o,r,!1,t)&&i}function Ee(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&ae(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}I(Ie,S),Ie.prototype[J]=!0,Ie.prototype.removeEventListener=function(e,t,n,r){me(this,e,t,n,r)},Ie.prototype.N=function(){if(Ie.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ee(n[r]);delete t.g[e],t.h--}}this.J=null},Ie.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Ie.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Te=d.JSON.stringify;class Ce{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function ke(){var e=Re;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class xe{constructor(){this.h=this.g=null}add(e,t){const n=Ae.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Ae=new Ce((()=>new Oe),(e=>e.reset()));class Oe{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Ne(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function De(e){d.setTimeout((()=>{throw e}),0)}let Le,Pe=!1,Re=new xe,Me=()=>{const e=d.Promise.resolve(void 0);Le=()=>{e.then($e)}};var $e=()=>{for(var e;e=ke();){try{e.h.call(e.g)}catch(n){De(n)}var t=Ae;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Pe=!1};function Fe(e,t){Ie.call(this),this.h=e||1,this.g=t||d,this.j=b(this.qb,this),this.l=Date.now()}function Ve(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function Be(e,t,n){if("function"===typeof e)n&&(e=b(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=b(e.handleEvent,e)}return 2147483647<Number(t)?-1:d.setTimeout(e,t||0)}function je(e){e.g=Be((()=>{e.g=null,e.i&&(e.i=!1,je(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}I(Fe,Ie),r=Fe.prototype,r.ga=!1,r.T=null,r.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Se(this,"tick"),this.ga&&(Ve(this),this.start()))}},r.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.N=function(){Fe.$.N.call(this),Ve(this),delete this.g};class Ue extends S{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:je(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ze(e){S.call(this),this.h=e,this.g={}}I(ze,S);var qe=[];function He(e,t,n,r){Array.isArray(n)||(n&&(qe[0]=n.toString()),n=qe);for(var i=0;i<n.length;i++){var s=he(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Ge(e){te(e.g,(function(e,t){this.g.hasOwnProperty(t)&&ge(e)}),e),e.g={}}function Ke(){this.g=!0}function We(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function Ze(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function Qe(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+Ye(e,n)+(r?" "+r:"")}))}function Je(e,t){e.info((function(){return"TIMEOUT: "+t}))}function Ye(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Te(n)}catch(a){return t}}ze.prototype.N=function(){ze.$.N.call(this),Ge(this)},ze.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ke.prototype.Ea=function(){this.g=!1},Ke.prototype.info=function(){};var Xe={},et=null;function tt(){return et=et||new Ie}function nt(e){x.call(this,Xe.Ta,e)}function rt(e){const t=tt();Se(t,new nt(t))}function it(e,t){x.call(this,Xe.STAT_EVENT,e),this.stat=t}function st(e){const t=tt();Se(t,new it(t,e))}function ot(e,t){x.call(this,Xe.Ua,e),this.size=t}function at(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return d.setTimeout((function(){e()}),t)}Xe.Ta="serverreachability",I(nt,x),Xe.STAT_EVENT="statevent",I(it,x),Xe.Ua="timingevent",I(ot,x);var ct={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ut={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function lt(){}function ht(e){return e.h||(e.h=e.i())}function dt(){}lt.prototype.h=null;var ft,pt={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function mt(){x.call(this,"d")}function gt(){x.call(this,"c")}function vt(){}function yt(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new ze(this),this.P=bt,e=B?125:void 0,this.V=new Fe(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new wt}function wt(){this.i=null,this.g="",this.h=!1}I(mt,x),I(gt,x),I(vt,lt),vt.prototype.g=function(){return new XMLHttpRequest},vt.prototype.i=function(){return{}},ft=new vt;var bt=45e3,_t={},It={};function St(e,t,n){e.L=1,e.v=Ht(Bt(t)),e.s=n,e.S=!0,Et(e,null)}function Et(e,t){e.G=Date.now(),xt(e),e.A=Bt(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),sn(n.i,"t",r),e.C=0,n=e.l.J,e.h=new wt,e.g=lr(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Ue(b(e.Pa,e,e.g),e.O)),He(e.U,e.g,"readystatechange",e.nb),t=e.I?re(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),rt(),We(e.j,e.u,e.A,e.m,e.W,e.s)}function Tt(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function Ct(e,t,n){let r,i=!0;for(;!e.J&&e.C<n.length;){if(r=kt(e,n),r==It){4==t&&(e.o=4,st(14),i=!1),Qe(e.j,e.m,null,"[Incomplete Response]");break}if(r==_t){e.o=4,st(15),Qe(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Qe(e.j,e.m,r,null),Lt(e,r)}Tt(e)&&r!=It&&r!=_t&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,st(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),nr(t),t.M=!0,st(11))):(Qe(e.j,e.m,n,"[Invalid Chunked Response]"),Dt(e),Nt(e))}function kt(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?It:(n=Number(t.substring(n,r)),isNaN(n)?_t:(r+=1,r+n>t.length?It:(t=t.slice(r,r+n),e.C=r+n,t)))}function xt(e){e.Y=Date.now()+e.P,At(e,e.P)}function At(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=at(b(e.lb,e),t)}function Ot(e){e.B&&(d.clearTimeout(e.B),e.B=null)}function Nt(e){0==e.l.H||e.J||sr(e.l,e)}function Dt(e){Ot(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,Ve(e.V),Ge(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Lt(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||fn(n.i,e)))if(!e.K&&fn(n.i,e)&&3==n.H){try{var r=n.Ja.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;ir(n),Kn(n)}tr(n),st(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=at(b(n.ib,n),6e3));if(1>=dn(n.i)&&n.oa){try{n.oa()}catch(u){}n.oa=void 0}}else ar(n,11)}else if((e.K||n.g==e)&&ir(n),!O(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.K=u[1],n.pa=u[2];const t=u[3];null!=t&&(n.ra=t,n.l.info("VER="+n.ra));const i=u[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(pn(s,s.h),s.h=null))}if(r.F){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.Da=e,qt(r.I,r.F,e))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=ur(r,r.J?r.pa:null,r.Y),o.K){mn(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Ot(a),xt(a)),r.g=o}else er(r);0<n.j.length&&Zn(n)}else"stop"!=u[0]&&"close"!=u[0]||ar(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?ar(n,7):Gn(n):"noop"!=u[0]&&n.h&&n.h.Aa(u),n.A=0)}rt(4)}catch(u){}}function Pt(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(f(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Rt(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(f(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Mt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(f(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=Rt(e),r=Pt(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}r=yt.prototype,r.setTimeout=function(e){this.P=e},r.nb=function(e){e=e.target;const t=this.M;t&&3==Vn(e)?t.l():this.Pa(e)},r.Pa=function(e){try{if(e==this.g)e:{const l=Vn(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>l)&&(3!=l||B||this.g&&(this.h.h||this.g.ja()||Bn(this.g)))){this.J||4!=l||7==t||rt(8==t||0>=h?3:2),Ot(this);var n=this.g.da();this.ca=n;t:if(Tt(this)){var r=Bn(this.g);e="";var i=r.length,s=4==Vn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Dt(this),Nt(this);var o="";break t}this.h.i=new d.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,Ze(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,st(12),Dt(this),Nt(this);break e}Qe(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Lt(this,n)}this.S?(Ct(this,l,o),B&&this.i&&3==l&&(He(this.U,this.V,"tick",this.mb),this.V.start())):(Qe(this.j,this.m,o,null),Lt(this,o)),4==l&&Dt(this),this.i&&!this.J&&(4==l?sr(this.l,this):(this.i=!1,xt(this)))}else jn(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,st(12)):(this.o=0,st(13)),Dt(this),Nt(this)}}}catch(l){}},r.mb=function(){if(this.g){var e=Vn(this.g),t=this.g.ja();this.C<t.length&&(Ot(this),Ct(this,e,t),this.i&&4!=e&&xt(this))}},r.cancel=function(){this.J=!0,Dt(this)},r.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Je(this.j,this.A),2!=this.L&&(rt(),st(17)),Dt(this),this.o=2,Nt(this)):At(this,this.Y-e)};var $t=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ft(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Vt(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Vt){this.h=e.h,jt(this,e.j),this.s=e.s,this.g=e.g,Ut(this,e.m),this.l=e.l;var t=e.i,n=new en;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),zt(this,n),this.o=e.o}else e&&(t=String(e).match($t))?(this.h=!1,jt(this,t[1]||"",!0),this.s=Gt(t[2]||""),this.g=Gt(t[3]||"",!0),Ut(this,t[4]),this.l=Gt(t[5]||"",!0),zt(this,t[6]||"",!0),this.o=Gt(t[7]||"")):(this.h=!1,this.i=new en(null,this.h))}function Bt(e){return new Vt(e)}function jt(e,t,n){e.j=n?Gt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ut(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function zt(e,t,n){t instanceof en?(e.i=t,an(e.i,e.h)):(n||(t=Kt(t,Yt)),e.i=new en(t,e.h))}function qt(e,t,n){e.i.set(t,n)}function Ht(e){return qt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Gt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Kt(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Wt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Wt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Vt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Kt(t,Zt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Kt(t,Zt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Kt(n,"/"==n.charAt(0)?Jt:Qt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Kt(n,Xt)),e.join("")};var Zt=/[#\/\?@]/g,Qt=/[#\?:]/g,Jt=/[#\?]/g,Yt=/[#\?@]/g,Xt=/#/g;function en(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function tn(e){e.g||(e.g=new Map,e.h=0,e.i&&Ft(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function nn(e,t){tn(e),t=on(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function rn(e,t){return tn(e),t=on(e,t),e.g.has(t)}function sn(e,t,n){nn(e,t),0<n.length&&(e.i=null,e.g.set(on(e,t),C(n)),e.h+=n.length)}function on(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function an(e,t){t&&!e.j&&(tn(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(nn(this,t),sn(this,n,e))}),e)),e.j=t}r=en.prototype,r.add=function(e,t){tn(this),this.i=null,e=on(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){tn(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},r.ta=function(){tn(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},r.Z=function(e){tn(this);let t=[];if("string"===typeof e)rn(this,e)&&(t=t.concat(this.g.get(on(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},r.set=function(e,t){return tn(this),this.i=null,e=on(this,e),rn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};var cn=class{constructor(e,t){this.g=e,this.map=t}};function un(e){this.l=e||ln,d.PerformanceNavigationTiming?(e=d.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(d.g&&d.g.Ka&&d.g.Ka()&&d.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ln=10;function hn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function dn(e){return e.h?1:e.g?e.g.size:0}function fn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function pn(e,t){e.g?e.g.add(t):e.h=t}function mn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function gn(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return C(e.i)}un.prototype.cancel=function(){if(this.i=gn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var vn=class{stringify(e){return d.JSON.stringify(e,void 0)}parse(e){return d.JSON.parse(e,void 0)}};function yn(){this.g=new vn}function wn(e,t,n){const r=n||"";try{Mt(e,(function(e,n){let i=e;p(e)&&(i=Te(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function bn(e,t){const n=new Ke;if(d.Image){const r=new Image;r.onload=_(_n,n,r,"TestLoadImage: loaded",!0,t),r.onerror=_(_n,n,r,"TestLoadImage: error",!1,t),r.onabort=_(_n,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=_(_n,n,r,"TestLoadImage: timeout",!1,t),d.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function _n(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function In(e){this.l=e.ec||null,this.j=e.ob||!1}function Sn(e,t){Ie.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=En,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}I(In,lt),In.prototype.g=function(){return new Sn(this.l,this.j)},In.prototype.i=function(e){return function(){return e}}({}),I(Sn,Ie);var En=0;function Tn(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function Cn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,kn(e)}function kn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=Sn.prototype,r.open=function(e,t){if(this.readyState!=En)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,kn(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||d).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Cn(this)),this.readyState=En},r.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,kn(this)),this.g&&(this.readyState=3,kn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof d.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Tn(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},r.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Cn(this):kn(this),3==this.readyState&&Tn(this)}},r.Za=function(e){this.g&&(this.response=this.responseText=e,Cn(this))},r.Ya=function(e){this.g&&(this.response=e,Cn(this))},r.ka=function(){this.g&&Cn(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Sn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var xn=d.JSON.parse;function An(e){Ie.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=On,this.L=this.M=!1}I(An,Ie);var On="",Nn=/^https?$/i,Dn=["POST","PUT"];function Ln(e){return F&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Pn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Rn(e),$n(e)}function Rn(e){e.F||(e.F=!0,Se(e,"complete"),Se(e,"error"))}function Mn(e){if(e.h&&"undefined"!=typeof h&&(!e.C[1]||4!=Vn(e)||2!=e.da()))if(e.v&&4==Vn(e))Be(e.La,0,e);else if(Se(e,"readystatechange"),4==Vn(e)){e.h=!1;try{const a=e.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===a){var i=String(e.I).match($t)[1]||null;!i&&d.self&&d.self.location&&(i=d.self.location.protocol.slice(0,-1)),r=!Nn.test(i?i.toLowerCase():"")}n=r}if(n)Se(e,"complete"),Se(e,"success");else{e.m=6;try{var s=2<Vn(e)?e.g.statusText:""}catch(o){s=""}e.j=s+" ["+e.da()+"]",Rn(e)}}finally{$n(e)}}}function $n(e,t){if(e.g){Fn(e);const r=e.g,i=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Se(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function Fn(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(d.clearTimeout(e.A),e.A=null)}function Vn(e){return e.g?e.g.readyState:0}function Bn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case On:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(Jr){return null}}function jn(e){const t={};e=(e.g&&2<=Vn(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(O(e[r]))continue;var n=Ne(e[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}ne(t,(function(e){return e.join(", ")}))}function Un(e){let t="";return te(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function zn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Un(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):qt(e,t,n))}function qn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Hn(e){this.Ga=0,this.j=[],this.l=new Ke,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=qn("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=qn("baseRetryDelayMs",5e3,e),this.hb=qn("retryDelaySeedMs",1e4,e),this.eb=qn("forwardChannelMaxRetries",2,e),this.xa=qn("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new un(e&&e.concurrentRequestLimit),this.Ja=new yn,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Gn(e){if(Wn(e),3==e.H){var t=e.W++,n=Bt(e.I);if(qt(n,"SID",e.K),qt(n,"RID",t),qt(n,"TYPE","terminate"),Yn(e,n),t=new yt(e,e.l,t),t.L=2,t.v=Ht(Bt(n)),n=!1,d.navigator&&d.navigator.sendBeacon)try{n=d.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&d.Image&&((new Image).src=t.v,n=!0),n||(t.g=lr(t.l,null),t.g.ha(t.v)),t.G=Date.now(),xt(t)}cr(e)}function Kn(e){e.g&&(nr(e),e.g.cancel(),e.g=null)}function Wn(e){Kn(e),e.u&&(d.clearTimeout(e.u),e.u=null),ir(e),e.i.cancel(),e.m&&("number"===typeof e.m&&d.clearTimeout(e.m),e.m=null)}function Zn(e){if(!hn(e.i)&&!e.m){e.m=!0;var t=e.Na;Le||Me(),Pe||(Le(),Pe=!0),Re.add(t,e),e.C=0}}function Qn(e,t){return!(dn(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=t.F.concat(e.j),!0):!(1==e.H||2==e.H||e.C>=(e.cb?0:e.eb))&&(e.m=at(b(e.Na,e,t),or(e,e.C)),e.C++,!0))}function Jn(e,t){var n;n=t?t.m:e.W++;const r=Bt(e.I);qt(r,"SID",e.K),qt(r,"RID",n),qt(r,"AID",e.V),Yn(e,r),e.o&&e.s&&zn(r,e.o,e.s),n=new yt(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Xn(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),pn(e.i,n),St(n,r,t)}function Yn(e,t){e.na&&te(e.na,(function(e,n){qt(t,n,e)})),e.h&&Mt({},(function(e,n){qt(t,n,e)}))}function Xn(e,t,n){n=Math.min(e.j.length,n);var r=e.h?b(e.h.Va,e.h,e):null;e:{var i=e.j;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].g;const a=i[o].map;if(n-=t,0>n)t=Math.max(0,i[o].g-100),s=!1;else try{wn(a,e,"req"+n+"_")}catch(gs){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function er(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Le||Me(),Pe||(Le(),Pe=!0),Re.add(t,e),e.A=0}}function tr(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=at(b(e.Ma,e),or(e,e.A)),e.A++,!0)}function nr(e){null!=e.B&&(d.clearTimeout(e.B),e.B=null)}function rr(e){e.g=new yt(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=Bt(e.wa);qt(t,"RID","rpc"),qt(t,"SID",e.K),qt(t,"AID",e.V),qt(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&qt(t,"TO",e.qa),qt(t,"TYPE","xmlhttp"),Yn(e,t),e.o&&e.s&&zn(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Ht(Bt(t)),n.s=null,n.S=!0,Et(n,e)}function ir(e){null!=e.v&&(d.clearTimeout(e.v),e.v=null)}function sr(e,t){var n=null;if(e.g==t){ir(e),nr(e),e.g=null;var r=2}else{if(!fn(e.i,t))return;n=t.F,mn(e.i,t),r=1}if(0!=e.H)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=tt(),Se(r,new ot(r,n)),Zn(e)}else er(e);else if(i=t.o,3==i||0==i&&0<t.ca||!(1==r&&Qn(e,t)||2==r&&tr(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:ar(e,5);break;case 4:ar(e,10);break;case 3:ar(e,6);break;default:ar(e,2)}}function or(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function ar(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var r=b(e.pb,e);n||(n=new Vt("//www.google.com/images/cleardot.gif"),d.location&&"http"==d.location.protocol||jt(n,"https"),Ht(n)),bn(n.toString(),r)}else st(2);e.H=0,e.h&&e.h.za(t),cr(e),Wn(e)}function cr(e){if(e.H=0,e.ma=[],e.h){const t=gn(e.i);0==t.length&&0==e.j.length||(k(e.ma,t),k(e.ma,e.j),e.i.i.length=0,C(e.j),e.j.length=0),e.h.ya()}}function ur(e,t,n){var r=n instanceof Vt?Bt(n):new Vt(n);if(""!=r.g)t&&(r.g=t+"."+r.g),Ut(r,r.m);else{var i=d.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Vt(null);r&&jt(s,r),t&&(s.g=t),i&&Ut(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&qt(r,n,t),qt(r,"VER",e.ra),Yn(e,r),r}function lr(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new An(new In({ob:!0})):new An(e.va),t.Oa(e.J),t}function hr(){}function dr(){if(F&&!(10<=Number(W)))throw Error("Environmental error: no available transport.")}function fr(e,t){Ie.call(this),this.g=new Hn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!O(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!O(t)&&(this.g.F=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new gr(this)}function pr(e){mt.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function mr(){gt.call(this),this.status=1}function gr(e){this.g=e}function vr(){this.blockSize=-1}function yr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function wr(e,t,n){n||(n=0);var r=Array(16);if("string"===typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function br(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}r=An.prototype,r.Oa=function(e){this.M=e},r.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ft.g(),this.C=this.u?ht(this.u):ht(ft),this.g.onreadystatechange=b(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){return void Pn(this,s)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=d.FormData&&e instanceof d.FormData,!(0<=T(Dn,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Fn(this),0<this.B&&((this.L=Ln(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.ua,this)):this.A=Be(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Pn(this,s)}},r.ua=function(){"undefined"!=typeof h&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Se(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Se(this,"complete"),Se(this,"abort"),$n(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),$n(this,!0)),An.$.N.call(this)},r.La=function(){this.s||(this.G||this.v||this.l?Mn(this):this.kb())},r.kb=function(){Mn(this)},r.isActive=function(){return!!this.g},r.da=function(){try{return 2<Vn(this)?this.g.status:-1}catch(e){return-1}},r.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),xn(t)}},r.Ia=function(){return this.m},r.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Hn.prototype,r.ra=8,r.H=1,r.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new yt(this,this.l,e);let s=this.s;if(this.U&&(s?(s=re(s),se(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){var r=this.j[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Xn(this,i,t),n=Bt(this.I),qt(n,"RID",e),qt(n,"CVER",22),this.F&&qt(n,"X-HTTP-Session-Id",this.F),Yn(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Un(s)))+"&"+t:this.o&&zn(n,this.o,s)),pn(this.i,i),this.bb&&qt(n,"TYPE","init"),this.P?(qt(n,"$req",t),qt(n,"SID","null"),i.aa=!0,St(i,n,null)):St(i,n,t),this.H=2}}else 3==this.H&&(e?Jn(this,e):0==this.j.length||hn(this.i)||Jn(this))},r.Ma=function(){if(this.u=null,rr(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=at(b(this.jb,this),e)}},r.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,st(10),Kn(this),rr(this))},r.ib=function(){null!=this.v&&(this.v=null,Kn(this),tr(this),st(19))},r.pb=function(e){e?(this.l.info("Successfully pinged google.com"),st(2)):(this.l.info("Failed to ping google.com"),st(1))},r.isActive=function(){return!!this.h&&this.h.isActive(this)},r=hr.prototype,r.Ba=function(){},r.Aa=function(){},r.za=function(){},r.ya=function(){},r.isActive=function(){return!0},r.Va=function(){},dr.prototype.g=function(e,t){return new fr(e,t)},I(fr,Ie),fr.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;st(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=ur(e,null,e.Y),Zn(e)},fr.prototype.close=function(){Gn(this.g)},fr.prototype.u=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Te(e),e=n);t.j.push(new cn(t.fb++,e)),3==t.H&&Zn(t)},fr.prototype.N=function(){this.g.h=null,delete this.j,Gn(this.g),delete this.g,fr.$.N.call(this)},I(pr,mt),I(mr,gt),I(gr,hr),gr.prototype.Ba=function(){Se(this.g,"a")},gr.prototype.Aa=function(e){Se(this.g,new pr(e))},gr.prototype.za=function(e){Se(this.g,new mr)},gr.prototype.ya=function(){Se(this.g,"b")},I(yr,vr),yr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},yr.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(0==i)for(;s<=n;)wr(this,e,s),s+=this.blockSize;if("string"===typeof e){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){wr(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){wr(this,r),i=0;break}}this.h=i,this.i+=t},yr.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var _r={};function Ir(e){return-128<=e&&128>e?P(e,(function(e){return new br([0|e],0>e?-1:0)})):new br([0|e],0>e?-1:0)}function Sr(e){if(isNaN(e)||!isFinite(e))return Cr;if(0>e)return Nr(Sr(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Tr;return new br(t,0)}function Er(e,t){if(0==e.length)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if("-"==e.charAt(0))return Nr(Er(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Sr(Math.pow(t,8)),r=Cr,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=Sr(Math.pow(t,s)),r=r.R(s).add(Sr(o))):(r=r.R(n),r=r.add(Sr(o)))}return r}var Tr=4294967296,Cr=Ir(0),kr=Ir(1),xr=Ir(16777216);function Ar(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function Or(e){return-1==e.h}function Nr(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new br(n,~e.h).add(kr)}function Dr(e,t){return e.add(Nr(t))}function Lr(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Pr(e,t){this.g=e,this.h=t}function Rr(e,t){if(Ar(t))throw Error("division by zero");if(Ar(e))return new Pr(Cr,Cr);if(Or(e))return t=Rr(Nr(e),t),new Pr(Nr(t.g),Nr(t.h));if(Or(t))return t=Rr(e,Nr(t)),new Pr(Nr(t.g),t.h);if(30<e.g.length){if(Or(e)||Or(t))throw Error("slowDivide_ only works with positive integers.");for(var n=kr,r=t;0>=r.X(e);)n=Mr(n),r=Mr(r);var i=$r(n,1),s=$r(r,1);for(r=$r(r,2),n=$r(n,2);!Ar(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=$r(r,1),n=$r(n,1)}return t=Dr(e,i.R(t)),new Pr(i,t)}for(i=Cr;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Sr(n),o=s.R(t);Or(o)||0<o.X(e);)n-=r,s=Sr(n),o=s.R(t);Ar(s)&&(s=kr),i=i.add(s),e=Dr(e,o)}return new Pr(i,e)}function Mr(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new br(n,e.h)}function $r(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new br(i,e.h)}r=br.prototype,r.ea=function(){if(Or(this))return-Nr(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Tr+r)*t,t*=Tr}return e},r.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Ar(this))return"0";if(Or(this))return"-"+Nr(this).toString(e);for(var t=Sr(Math.pow(e,6)),n=this,r="";;){var i=Rr(n,t).g;n=Dr(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Ar(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},r.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},r.X=function(e){return e=Dr(this,e),Or(e)?-1:Ar(e)?0:1},r.abs=function(){return Or(this)?Nr(this):this},r.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(65535&this.D(i))+(65535&e.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new br(n,-2147483648&n[n.length-1]?-1:0)},r.R=function(e){if(Ar(this)||Ar(e))return Cr;if(Or(this))return Or(e)?Nr(this).R(Nr(e)):Nr(Nr(this).R(e));if(Or(e))return Nr(this.R(Nr(e)));if(0>this.X(xr)&&0>e.X(xr))return Sr(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=e.D(i)>>>16,c=65535&e.D(i);n[2*r+2*i]+=o*c,Lr(n,2*r+2*i),n[2*r+2*i+1]+=s*c,Lr(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Lr(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Lr(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new br(n,0)},r.gb=function(e){return Rr(this,e).h},r.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new br(n,this.h&e.h)},r.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new br(n,this.h|e.h)},r.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new br(n,this.h^e.h)},dr.prototype.createWebChannel=dr.prototype.g,fr.prototype.send=fr.prototype.u,fr.prototype.open=fr.prototype.m,fr.prototype.close=fr.prototype.close,ct.NO_ERROR=0,ct.TIMEOUT=8,ct.HTTP_ERROR=6,ut.COMPLETE="complete",dt.EventType=pt,pt.OPEN="a",pt.CLOSE="b",pt.ERROR="c",pt.MESSAGE="d",Ie.prototype.listen=Ie.prototype.O,An.prototype.listenOnce=An.prototype.P,An.prototype.getLastError=An.prototype.Sa,An.prototype.getLastErrorCode=An.prototype.Ia,An.prototype.getStatus=An.prototype.da,An.prototype.getResponseJson=An.prototype.Wa,An.prototype.getResponseText=An.prototype.ja,An.prototype.send=An.prototype.ha,An.prototype.setWithCredentials=An.prototype.Oa,yr.prototype.digest=yr.prototype.l,yr.prototype.reset=yr.prototype.reset,yr.prototype.update=yr.prototype.j,br.prototype.add=br.prototype.add,br.prototype.multiply=br.prototype.R,br.prototype.modulo=br.prototype.gb,br.prototype.compare=br.prototype.X,br.prototype.toNumber=br.prototype.ea,br.prototype.toString=br.prototype.toString,br.prototype.getBits=br.prototype.D,br.fromNumber=Sr,br.fromString=Er;var Fr=l.createWebChannelTransport=function(){return new dr},Vr=l.getStatEventTarget=function(){return tt()},Br=l.ErrorCode=ct,jr=l.EventType=ut,Ur=l.Event=Xe,zr=l.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},qr=(l.FetchXmlHttpFactory=In,l.WebChannel=dt),Hr=l.XhrIo=An,Gr=l.Md5=yr,Kr=l.Integer=br;const Wr="@firebase/firestore";
/**
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
 */class Zr{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Zr.UNAUTHENTICATED=new Zr(null),Zr.GOOGLE_CREDENTIALS=new Zr("google-credentials-uid"),Zr.FIRST_PARTY=new Zr("first-party-uid"),Zr.MOCK_USER=new Zr("mock-user");
/**
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
 */
let Qr="10.5.0";
/**
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
 */const Jr=new a.Yd("@firebase/firestore");function Yr(){return Jr.logLevel}function Xr(e){Jr.setLogLevel(e)}function ei(e,...t){if(Jr.logLevel<=a["in"].DEBUG){const n=t.map(ri);Jr.debug(`Firestore (${Qr}): ${e}`,...n)}}function ti(e,...t){if(Jr.logLevel<=a["in"].ERROR){const n=t.map(ri);Jr.error(`Firestore (${Qr}): ${e}`,...n)}}function ni(e,...t){if(Jr.logLevel<=a["in"].WARN){const n=t.map(ri);Jr.warn(`Firestore (${Qr}): ${e}`,...n)}}function ri(e){if("string"==typeof e)return e;try{
/**
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
 */
return function(e){return JSON.stringify(e)}(e)}catch(t){return e}}
/**
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
 */function ii(e="Unexpected state"){const t=`FIRESTORE (${Qr}) INTERNAL ASSERTION FAILED: `+e;throw ti(t),new Error(t)}function si(e,t){e||ii()}function oi(e,t){e||ii()}function ai(e,t){return e}
/**
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
 */const ci={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ui extends c.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class li{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
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
 */class hi{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class di{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Zr.UNAUTHENTICATED)))}shutdown(){}}class fi{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class pi{constructor(e){this.t=e,this.currentUser=Zr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new li;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new li,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{ei("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(ei("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new li)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(ei("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(si("string"==typeof t.accessToken),new hi(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return si(null===e||"string"==typeof e),new Zr(e)}}class mi{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Zr.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class gi{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new mi(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(Zr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class vi{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yi{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const n=e=>{null!=e.error&&ei("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.R;return this.R=e.token,ei("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{ei("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?r(e):ei("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(si("string"==typeof e.token),this.R=e.token,new vi(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
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
 */
function wi(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
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
 */class bi{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=wi(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function _i(e,t){return e<t?-1:e>t?1:0}function Ii(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}function Si(e){return e+"\0"}
/**
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
 */class Ei{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ui(ci.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ui(ci.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ui(ci.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ui(ci.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ei.fromMillis(Date.now())}static fromDate(e){return Ei.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Ei(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?_i(this.nanoseconds,e.nanoseconds):_i(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
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
 */class Ti{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ti(e)}static min(){return new Ti(new Ei(0,0))}static max(){return new Ti(new Ei(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
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
 */class Ci{constructor(e,t,n){void 0===t?t=0:t>e.length&&ii(),void 0===n?n=e.length-t:n>e.length-t&&ii(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Ci.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ci?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ki extends Ci{construct(e,t,n){return new ki(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new ui(ci.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new ki(t)}static emptyPath(){return new ki([])}}const xi=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ai extends Ci{construct(e,t,n){return new Ai(e,t,n)}static isValidIdentifier(e){return xi.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ai.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ai(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new ui(ci.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new ui(ci.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new ui(ci.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new ui(ci.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ai(t)}static emptyPath(){return new Ai([])}}
/**
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
 */class Oi{constructor(e){this.path=e}static fromPath(e){return new Oi(ki.fromString(e))}static fromName(e){return new Oi(ki.fromString(e).popFirst(5))}static empty(){return new Oi(ki.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===ki.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ki.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Oi(new ki(e.slice()))}}
/**
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
 */class Ni{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function Di(e){return e.fields.find((e=>2===e.kind))}function Li(e){return e.fields.filter((e=>2!==e.kind))}Ni.UNKNOWN_ID=-1;class Pi{constructor(e,t){this.fieldPath=e,this.kind=t}}class Ri{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Ri(0,Fi.min())}}function Mi(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=Ti.fromTimestamp(1e9===r?new Ei(n+1,0):new Ei(n,r));return new Fi(i,Oi.empty(),t)}function $i(e){return new Fi(e.readTime,e.key,-1)}class Fi{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Fi(Ti.min(),Oi.empty(),-1)}static max(){return new Fi(Ti.max(),Oi.empty(),-1)}}function Vi(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Oi.comparator(e.documentKey,t.documentKey),0!==n?n:_i(e.largestBatchId,t.largestBatchId))}
/**
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
 */const Bi="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ji{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
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
 */async function Ui(e){if(e.code!==ci.FAILED_PRECONDITION||e.message!==Bi)throw e;ei("LocalStore","Unexpectedly lost primary lease")}
/**
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
 */class zi{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ii(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new zi(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof zi?t:zi.resolve(t)}catch(e){return zi.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):zi.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):zi.reject(t)}static resolve(e){return new zi(((t,n)=>{t(e)}))}static reject(e){return new zi(((t,n)=>{n(e)}))}static waitFor(e){return new zi(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=zi.resolve(!1);for(const n of e)t=t.next((e=>e?zi.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new zi(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new zi(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
/**
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
 */class qi{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.m=new li,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{t.error?this.m.reject(new Ki(e,t.error)):this.m.resolve()},this.transaction.onerror=t=>{const n=Yi(t.target.error);this.m.reject(new Ki(e,n))}}static open(e,t,n,r){try{return new qi(t,e.transaction(r,n))}catch(e){throw new Ki(t,e)}}get g(){return this.m.promise}abort(e){e&&this.m.reject(e),this.aborted||(ei("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}p(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Zi(t)}}class Hi{constructor(e,t,n){this.name=e,this.version=t,this.S=n,12.2===Hi.D((0,c.z$)())&&ti("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return ei("SimpleDb","Removing database:",e),Qi(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!(0,c.hl)())return!1;if(Hi.v())return!0;const e=(0,c.z$)(),t=Hi.D(e),n=0<t&&t<10,r=Hi.F(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static v(){var e;return"undefined"!=typeof process&&"YES"===(null===(e={NODE_ENV:"production",BASE_URL:"/heroes-of-the-storm/"})||void 0===e?void 0:e.M)}static O(e,t){return e.store(t)}static D(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static F(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async N(e){return this.db||(ei("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new Ki(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new ui(ci.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new ui(ci.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Ki(e,r))},r.onupgradeneeded=e=>{ei("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.S.B(t,r.transaction,e.oldVersion,this.version).next((()=>{ei("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.L&&(this.db.onversionchange=e=>this.L(e)),this.db}k(e){this.L=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.N(e);const t=qi.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next((e=>(t.p(),e))).catch((e=>(t.abort(e),zi.reject(e)))).toPromise();return s.catch((()=>{})),await t.g,s}catch(e){const t=e,n="FirebaseError"!==t.name&&s<3;if(ei("SimpleDb","Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Gi{constructor(e){this.q=e,this.K=!1,this.$=null}get isDone(){return this.K}get U(){return this.$}set cursor(e){this.q=e}done(){this.K=!0}W(e){this.$=e}delete(){return Qi(this.q.delete())}}class Ki extends ui{constructor(e,t){super(ci.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Wi(e){return"IndexedDbTransactionError"===e.name}class Zi{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(ei("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(ei("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Qi(n)}add(e){return ei("SimpleDb","ADD",this.store.name,e,e),Qi(this.store.add(e))}get(e){return Qi(this.store.get(e)).next((t=>(void 0===t&&(t=null),ei("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return ei("SimpleDb","DELETE",this.store.name,e),Qi(this.store.delete(e))}count(){return ei("SimpleDb","COUNT",this.store.name),Qi(this.store.count())}G(e,t){const n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){const e=this.cursor(n),t=[];return this.j(e,((e,n)=>{t.push(n)})).next((()=>t))}{const e=this.store.getAll(n.range);return new zi(((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}}))}}H(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new zi(((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}}))}J(e,t){ei("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.Y=!1;const r=this.cursor(n);return this.j(r,((e,t,n)=>n.delete()))}Z(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.j(r,t)}X(e){const t=this.cursor({});return new zi(((n,r)=>{t.onerror=e=>{const t=Yi(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next((e=>{e?r.continue():n()})):n()}}))}j(e,t){const n=[];return new zi(((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new Gi(i),o=t(i.primaryKey,i.value,s);if(o instanceof zi){const e=o.catch((e=>(s.done(),zi.reject(e))));n.push(e)}s.isDone?r():null===s.U?i.continue():i.continue(s.U)}})).next((()=>zi.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.Y?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Qi(e){return new zi(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=Yi(e.target.error);n(t)}}))}let Ji=!1;function Yi(e){const t=Hi.D((0,c.z$)());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new ui("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Ji||(Ji=!0,setTimeout((()=>{throw e}),0)),e}}return e}class Xi{constructor(e,t){this.asyncQueue=e,this.ee=t,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}te(e){ei("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{ei("IndexBackiller",`Documents written: ${await this.ee.ne()}`)}catch(e){Wi(e)?ei("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await Ui(e)}await this.te(6e4)}))}}class es{constructor(e,t){this.localStore=e,this.persistence=t}async ne(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.re(t,e)))}re(e,t){const n=new Set;let r=t,i=!0;return zi.doWhile((()=>!0===i&&r>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((t=>{if(null!==t&&!n.has(t))return ei("IndexBackiller",`Processing collection: ${t}`),this.ie(e,t,r).next((e=>{r-=e,n.add(t)}));i=!1})))).next((()=>t-r))}ie(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next((n=>{const i=n.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next((()=>this.se(r,n))).next((n=>(ei("IndexBackiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n)))).next((()=>i.size))}))))}se(e,t){let n=e;return t.changes.forEach(((e,t)=>{const r=$i(t);Vi(r,n)>0&&(n=r)})),new Fi(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}
/**
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
 */class ts{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.oe(e),this._e=e=>t.writeSequenceNumber(e))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}function ns(e){return null==e}function rs(e){return 0===e&&1/e==-1/0}function is(e){return"number"==typeof e&&Number.isInteger(e)&&!rs(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
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
 */function ss(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=as(t)),t=os(e.get(n),t);return as(t)}function os(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function as(e){return e+""}function cs(e){const t=e.length;if(si(t>=2),2===t)return si(""===e.charAt(0)&&""===e.charAt(1)),ki.emptyPath();const n=t-2,r=[];let i="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&ii(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=e.substring(s,t),i+="\0";break;case"":i+=e.substring(s,t+1);break;default:ii()}s=t+2}return new ki(r)}
/**
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
 */ts.ae=-1;const us=["userId","batchId"];
/**
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
 */function ls(e,t){return[e,ss(t)]}function hs(e,t,n){return[e,ss(t),n]}const ds={},fs=["prefixPath","collectionGroup","readTime","documentId"],ps=["prefixPath","collectionGroup","documentId"],ms=["collectionGroup","readTime","prefixPath","documentId"],gs=["canonicalId","targetId"],vs=["targetId","path"],ys=["path","targetId"],ws=["collectionId","parent"],bs=["indexId","uid"],_s=["uid","sequenceNumber"],Is=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Ss=["indexId","uid","orderedDocumentKey"],Es=["userId","collectionPath","documentId"],Ts=["userId","collectionPath","largestBatchId"],Cs=["userId","collectionGroup","largestBatchId"],ks=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],xs=[...ks,"documentOverlays"],As=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Os=As,Ns=[...Os,"indexConfiguration","indexState","indexEntries"];
/**
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
 */class Ds extends ji{constructor(e,t){super(),this.ue=e,this.currentSequenceNumber=t}}function Ls(e,t){const n=ai(e);return Hi.O(n.ue,t)}
/**
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
 */function Ps(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Rs(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Ms(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
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
 */class $s{constructor(e,t){this.comparator=e,this.root=t||Vs.EMPTY}insert(e,t){return new $s(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Vs.BLACK,null,null))}remove(e){return new $s(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Vs.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fs(this.root,e,this.comparator,!0)}}class Fs{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Vs{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Vs.RED,this.left=null!=r?r:Vs.EMPTY,this.right=null!=i?i:Vs.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Vs(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Vs.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Vs.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Vs.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Vs.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ii();if(this.right.isRed())throw ii();const e=this.left.check();if(e!==this.right.check())throw ii();return e+(this.isRed()?0:1)}}Vs.EMPTY=null,Vs.RED=!0,Vs.BLACK=!1,Vs.EMPTY=new class{constructor(){this.size=0}get key(){throw ii()}get value(){throw ii()}get color(){throw ii()}get left(){throw ii()}get right(){throw ii()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Vs(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
 */
class Bs{constructor(e){this.comparator=e,this.data=new $s(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new js(this.data.getIterator())}getIteratorFrom(e){return new js(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Bs))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Bs(this.comparator);return t.data=e,t}}class js{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Us(e){return e.hasNext()?e.getNext():void 0}
/**
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
 */class zs{constructor(e){this.fields=e,e.sort(Ai.comparator)}static empty(){return new zs([])}unionWith(e){let t=new Bs(Ai.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new zs(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ii(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
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
 */class qs extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
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
 */function Hs(){return"undefined"!=typeof atob}
/**
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
 */class Gs{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new qs("Invalid base64 string: "+e):e}}(e);return new Gs(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Gs(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _i(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Gs.EMPTY_BYTE_STRING=new Gs("");const Ks=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ws(e){if(si(!!e),"string"==typeof e){let t=0;const n=Ks.exec(e);if(si(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Zs(e.seconds),nanos:Zs(e.nanos)}}function Zs(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Qs(e){return"string"==typeof e?Gs.fromBase64String(e):Gs.fromUint8Array(e)}
/**
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
 */function Js(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ys(e){const t=e.mapValue.fields.__previous_value__;return Js(t)?Ys(t):t}function Xs(e){const t=Ws(e.mapValue.fields.__local_write_time__.timestampValue);return new Ei(t.seconds,t.nanos)}
/**
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
 */class eo{constructor(e,t,n,r,i,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class to{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new to("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof to&&e.projectId===this.projectId&&e.database===this.database}}
/**
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
 */const no={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},ro={nullValue:"NULL_VALUE"};function io(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Js(e)?4:wo(e)?9007199254740991:10:ii()}function so(e,t){if(e===t)return!0;const n=io(e);if(n!==io(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Xs(e).isEqual(Xs(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Ws(e.timestampValue),r=Ws(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Qs(e.bytesValue).isEqual(Qs(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Zs(e.geoPointValue.latitude)===Zs(t.geoPointValue.latitude)&&Zs(e.geoPointValue.longitude)===Zs(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Zs(e.integerValue)===Zs(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Zs(e.doubleValue),r=Zs(t.doubleValue);return n===r?rs(n)===rs(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Ii(e.arrayValue.values||[],t.arrayValue.values||[],so);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Ps(n)!==Ps(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!so(n[i],r[i])))return!1;return!0}(e,t);default:return ii()}}function oo(e,t){return void 0!==(e.values||[]).find((e=>so(e,t)))}function ao(e,t){if(e===t)return 0;const n=io(e),r=io(t);if(n!==r)return _i(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return _i(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Zs(e.integerValue||e.doubleValue),r=Zs(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return co(e.timestampValue,t.timestampValue);case 4:return co(Xs(e),Xs(t));case 5:return _i(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Qs(e),r=Qs(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=_i(n[i],r[i]);if(0!==e)return e}return _i(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=_i(Zs(e.latitude),Zs(t.latitude));return 0!==n?n:_i(Zs(e.longitude),Zs(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=ao(n[i],r[i]);if(e)return e}return _i(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===no.mapValue&&t===no.mapValue)return 0;if(e===no.mapValue)return 1;if(t===no.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=_i(r[o],s[o]);if(0!==e)return e;const t=ao(n[r[o]],i[s[o]]);if(0!==t)return t}return _i(r.length,s.length)}(e.mapValue,t.mapValue);default:throw ii()}}function co(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return _i(e,t);const n=Ws(e),r=Ws(t),i=_i(n.seconds,r.seconds);return 0!==i?i:_i(n.nanos,r.nanos)}function uo(e){return lo(e)}function lo(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Ws(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(e){return Qs(e).toBase64()}(e.bytesValue):"referenceValue"in e?function(e){return Oi.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=lo(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${lo(e.fields[i])}`;return n+"}"}(e.mapValue):ii()}function ho(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function fo(e){return!!e&&"integerValue"in e}function po(e){return!!e&&"arrayValue"in e}function mo(e){return!!e&&"nullValue"in e}function go(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function vo(e){return!!e&&"mapValue"in e}function yo(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Rs(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=yo(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=yo(e.arrayValue.values[n]);return t}return Object.assign({},e)}function wo(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function bo(e){return"nullValue"in e?ro:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?ho(to.empty(),Oi.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?{mapValue:{}}:ii()}function _o(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?ho(to.empty(),Oi.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?{mapValue:{}}:"mapValue"in e?no:ii()}function Io(e,t){const n=ao(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function So(e,t){const n=ao(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
/**
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
 */class Eo{constructor(e){this.value=e}static empty(){return new Eo({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!vo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=yo(t)}setAll(e){let t=Ai.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=yo(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());vo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return so(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];vo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Rs(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new Eo(yo(this.value))}}function To(e){const t=[];return Rs(e.fields,((e,n)=>{const r=new Ai([e]);if(vo(n)){const e=To(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new zs(t)
/**
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
 */}class Co{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Co(e,0,Ti.min(),Ti.min(),Ti.min(),Eo.empty(),0)}static newFoundDocument(e,t,n,r){return new Co(e,1,t,Ti.min(),n,r,0)}static newNoDocument(e,t){return new Co(e,2,t,Ti.min(),Ti.min(),Eo.empty(),0)}static newUnknownDocument(e,t){return new Co(e,3,t,Ti.min(),Ti.min(),Eo.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ti.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Eo.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Eo.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ti.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Co&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Co(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
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
 */class ko{constructor(e,t){this.position=e,this.inclusive=t}}function xo(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?Oi.comparator(Oi.fromName(o.referenceValue),n.key):ao(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Ao(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!so(e.position[n],t.position[n]))return!1;return!0}
/**
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
 */class Oo{constructor(e,t="asc"){this.field=e,this.dir=t}}function No(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
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
 */class Do{}class Lo extends Do{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new zo(e,t,n):"array-contains"===t?new Ko(e,n):"in"===t?new Wo(e,n):"not-in"===t?new Zo(e,n):"array-contains-any"===t?new Qo(e,n):new Lo(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new qo(e,n):new Ho(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(ao(t,this.value)):null!==t&&io(this.value)===io(t)&&this.matchesComparison(ao(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return ii()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Po extends Do{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new Po(e,t)}matches(e){return Ro(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Ro(e){return"and"===e.op}function Mo(e){return"or"===e.op}function $o(e){return Fo(e)&&Ro(e)}function Fo(e){for(const t of e.filters)if(t instanceof Po)return!1;return!0}function Vo(e){if(e instanceof Lo)return e.field.canonicalString()+e.op.toString()+uo(e.value);if($o(e))return e.filters.map((e=>Vo(e))).join(",");{const t=e.filters.map((e=>Vo(e))).join(",");return`${e.op}(${t})`}}function Bo(e,t){return e instanceof Lo?function(e,t){return t instanceof Lo&&e.op===t.op&&e.field.isEqual(t.field)&&so(e.value,t.value)}(e,t):e instanceof Po?function(e,t){return t instanceof Po&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&Bo(n,t.filters[r])),!0)}(e,t):void ii()}function jo(e,t){const n=e.filters.concat(t);return Po.create(n,e.op)}function Uo(e){return e instanceof Lo?function(e){return`${e.field.canonicalString()} ${e.op} ${uo(e.value)}`}(e):e instanceof Po?function(e){return e.op.toString()+" {"+e.getFilters().map(Uo).join(" ,")+"}"}(e):"Filter"}class zo extends Lo{constructor(e,t,n){super(e,t,n),this.key=Oi.fromName(n.referenceValue)}matches(e){const t=Oi.comparator(e.key,this.key);return this.matchesComparison(t)}}class qo extends Lo{constructor(e,t){super(e,"in",t),this.keys=Go("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Ho extends Lo{constructor(e,t){super(e,"not-in",t),this.keys=Go("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Go(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Oi.fromName(e.referenceValue)))}class Ko extends Lo{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return po(t)&&oo(t.arrayValue,this.value)}}class Wo extends Lo{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&oo(this.value.arrayValue,t)}}class Zo extends Lo{constructor(e,t){super(e,"not-in",t)}matches(e){if(oo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!oo(this.value.arrayValue,t)}}class Qo extends Lo{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!po(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>oo(this.value.arrayValue,e)))}}
/**
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
 */class Jo{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.le=null}}function Yo(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Jo(e,t,n,r,i,s,o)}function Xo(e){const t=ai(e);if(null===t.le){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>Vo(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),ns(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>uo(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>uo(e))).join(",")),t.le=e}return t.le}function ea(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!No(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Bo(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ao(e.startAt,t.startAt)&&Ao(e.endAt,t.endAt)}function ta(e){return Oi.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function na(e,t){return e.filters.filter((e=>e instanceof Lo&&e.field.isEqual(t)))}function ra(e,t,n){let r=ro,i=!0;for(const s of na(e,t)){let e=ro,t=!0;switch(s.op){case"<":case"<=":e=bo(s.value);break;case"==":case"in":case">=":e=s.value;break;case">":e=s.value,t=!1;break;case"!=":case"not-in":e=ro}Io({value:r,inclusive:i},{value:e,inclusive:t})<0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];Io({value:r,inclusive:i},{value:e,inclusive:n.inclusive})<0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}function ia(e,t,n){let r=no,i=!0;for(const s of na(e,t)){let e=no,t=!0;switch(s.op){case">=":case">":e=_o(s.value),t=!1;break;case"==":case"in":case"<=":e=s.value;break;case"<":e=s.value,t=!1;break;case"!=":case"not-in":e=no}So({value:r,inclusive:i},{value:e,inclusive:t})>0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];So({value:r,inclusive:i},{value:e,inclusive:n.inclusive})>0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}
/**
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
 */class sa{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.he=null,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function oa(e,t,n,r,i,s,o,a){return new sa(e,t,n,r,i,s,o,a)}function aa(e){return new sa(e)}function ca(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function ua(e){return null!==e.collectionGroup}function la(e){const t=ai(e);if(null===t.he){t.he=[];const e=new Set;for(const i of t.explicitOrderBy)t.he.push(i),e.add(i.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc",r=function(e){let t=new Bs(Ai.comparator);return e.filters.forEach((e=>{e.getFlattenedFilters().forEach((e=>{e.isInequality()&&(t=t.add(e.field))}))})),t}(t);r.forEach((r=>{e.has(r.canonicalString())||r.isKeyField()||t.he.push(new Oo(r,n))})),e.has(Ai.keyField().canonicalString())||t.he.push(new Oo(Ai.keyField(),n))}return t.he}function ha(e){const t=ai(e);return t.Pe||(t.Pe=da(t,la(e))),t.Pe}function da(e,t){if("F"===e.limitType)return Yo(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map((e=>{const t="desc"===e.dir?"asc":"desc";return new Oo(e.field,t)}));const n=e.endAt?new ko(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new ko(e.startAt.position,e.startAt.inclusive):null;return Yo(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function fa(e,t){const n=e.filters.concat([t]);return new sa(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function pa(e,t,n){return new sa(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function ma(e,t){return ea(ha(e),ha(t))&&e.limitType===t.limitType}function ga(e){return`${Xo(ha(e))}|lt:${e.limitType}`}function va(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>Uo(e))).join(", ")}]`),ns(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>uo(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>uo(e))).join(",")),`Target(${t})`}(ha(e))}; limitType=${e.limitType})`}function ya(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Oi.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of la(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=xo(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,la(e),t))&&!(e.endAt&&!function(e,t,n){const r=xo(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,la(e),t))}(e,t)}function wa(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function ba(e){return(t,n)=>{let r=!1;for(const i of la(e)){const e=_a(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function _a(e,t,n){const r=e.field.isKeyField()?Oi.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?ao(r,i):ii()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return ii()}}
/**
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
 */class Ia{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Rs(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return Ms(this.inner)}size(){return this.innerSize}}
/**
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
 */const Sa=new $s(Oi.comparator);function Ea(){return Sa}const Ta=new $s(Oi.comparator);function Ca(...e){let t=Ta;for(const n of e)t=t.insert(n.key,n);return t}function ka(e){let t=Ta;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function xa(){return Oa()}function Aa(){return Oa()}function Oa(){return new Ia((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Na=new $s(Oi.comparator),Da=new Bs(Oi.comparator);function La(...e){let t=Da;for(const n of e)t=t.add(n);return t}const Pa=new Bs(_i);function Ra(){return Pa}
/**
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
 */function Ma(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rs(t)?"-0":t}}function $a(e){return{integerValue:""+e}}function Fa(e,t){return is(t)?$a(t):Ma(e,t)}
/**
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
 */class Va{constructor(){this._=void 0}}function Ba(e,t,n){return e instanceof za?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Js(t)&&(t=Ys(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof qa?Ha(e,t):e instanceof Ga?Ka(e,t):function(e,t){const n=Ua(e,t),r=Za(n)+Za(e.Te);return fo(n)&&fo(e.Te)?$a(r):Ma(e.serializer,r)}(e,t)}function ja(e,t,n){return e instanceof qa?Ha(e,t):e instanceof Ga?Ka(e,t):n}function Ua(e,t){return e instanceof Wa?function(e){return fo(e)||function(e){return!!e&&"doubleValue"in e}(e)}(t)?t:{integerValue:0}:null}class za extends Va{}class qa extends Va{constructor(e){super(),this.elements=e}}function Ha(e,t){const n=Qa(t);for(const r of e.elements)n.some((e=>so(e,r)))||n.push(r);return{arrayValue:{values:n}}}class Ga extends Va{constructor(e){super(),this.elements=e}}function Ka(e,t){let n=Qa(t);for(const r of e.elements)n=n.filter((e=>!so(e,r)));return{arrayValue:{values:n}}}class Wa extends Va{constructor(e,t){super(),this.serializer=e,this.Te=t}}function Za(e){return Zs(e.integerValue||e.doubleValue)}function Qa(e){return po(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
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
 */class Ja{constructor(e,t){this.field=e,this.transform=t}}function Ya(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof qa&&t instanceof qa||e instanceof Ga&&t instanceof Ga?Ii(e.elements,t.elements,so):e instanceof Wa&&t instanceof Wa?so(e.Te,t.Te):e instanceof za&&t instanceof za}(e.transform,t.transform)}class Xa{constructor(e,t){this.version=e,this.transformResults=t}}class ec{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ec}static exists(e){return new ec(void 0,e)}static updateTime(e){return new ec(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tc(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class nc{}function rc(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new fc(e.key,ec.none()):new cc(e.key,e.data,ec.none());{const n=e.data,r=Eo.empty();let i=new Bs(Ai.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new uc(e.key,r,new zs(i.toArray()),ec.none())}}function ic(e,t,n){e instanceof cc?function(e,t,n){const r=e.value.clone(),i=hc(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof uc?function(e,t,n){if(!tc(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=hc(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(lc(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function sc(e,t,n,r){return e instanceof cc?function(e,t,n,r){if(!tc(e.precondition,t))return n;const i=e.value.clone(),s=dc(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof uc?function(e,t,n,r){if(!tc(e.precondition,t))return n;const i=dc(e.fieldTransforms,r,t),s=t.data;return s.setAll(lc(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return tc(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function oc(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Ua(r.transform,e||null);null!=i&&(null===n&&(n=Eo.empty()),n.set(r.field,i))}return n||null}function ac(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Ii(e,t,((e,t)=>Ya(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class cc extends nc{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class uc extends nc{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function lc(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function hc(e,t,n){const r=new Map;si(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,ja(o,a,n[i]))}return r}function dc(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,Ba(e,s,t))}return r}class fc extends nc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class pc extends nc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
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
 */class mc{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&ic(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=sc(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=sc(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Aa();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=rc(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(Ti.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),La())}isEqual(e){return this.batchId===e.batchId&&Ii(this.mutations,e.mutations,((e,t)=>ac(e,t)))&&Ii(this.baseMutations,e.baseMutations,((e,t)=>ac(e,t)))}}class gc{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){si(e.mutations.length===n.length);let r=function(){return Na}();const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new gc(e,t,n,r)}}
/**
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
 */class vc{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
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
 */
/**
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
 */
class yc{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
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
 */var wc,bc;function _c(e){switch(e){default:return ii();case ci.CANCELLED:case ci.UNKNOWN:case ci.DEADLINE_EXCEEDED:case ci.RESOURCE_EXHAUSTED:case ci.INTERNAL:case ci.UNAVAILABLE:case ci.UNAUTHENTICATED:return!1;case ci.INVALID_ARGUMENT:case ci.NOT_FOUND:case ci.ALREADY_EXISTS:case ci.PERMISSION_DENIED:case ci.FAILED_PRECONDITION:case ci.ABORTED:case ci.OUT_OF_RANGE:case ci.UNIMPLEMENTED:case ci.DATA_LOSS:return!0}}function Ic(e){if(void 0===e)return ti("GRPC error has no .code"),ci.UNKNOWN;switch(e){case wc.OK:return ci.OK;case wc.CANCELLED:return ci.CANCELLED;case wc.UNKNOWN:return ci.UNKNOWN;case wc.DEADLINE_EXCEEDED:return ci.DEADLINE_EXCEEDED;case wc.RESOURCE_EXHAUSTED:return ci.RESOURCE_EXHAUSTED;case wc.INTERNAL:return ci.INTERNAL;case wc.UNAVAILABLE:return ci.UNAVAILABLE;case wc.UNAUTHENTICATED:return ci.UNAUTHENTICATED;case wc.INVALID_ARGUMENT:return ci.INVALID_ARGUMENT;case wc.NOT_FOUND:return ci.NOT_FOUND;case wc.ALREADY_EXISTS:return ci.ALREADY_EXISTS;case wc.PERMISSION_DENIED:return ci.PERMISSION_DENIED;case wc.FAILED_PRECONDITION:return ci.FAILED_PRECONDITION;case wc.ABORTED:return ci.ABORTED;case wc.OUT_OF_RANGE:return ci.OUT_OF_RANGE;case wc.UNIMPLEMENTED:return ci.UNIMPLEMENTED;case wc.DATA_LOSS:return ci.DATA_LOSS;default:return ii()}}(bc=wc||(wc={}))[bc.OK=0]="OK",bc[bc.CANCELLED=1]="CANCELLED",bc[bc.UNKNOWN=2]="UNKNOWN",bc[bc.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",bc[bc.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",bc[bc.NOT_FOUND=5]="NOT_FOUND",bc[bc.ALREADY_EXISTS=6]="ALREADY_EXISTS",bc[bc.PERMISSION_DENIED=7]="PERMISSION_DENIED",bc[bc.UNAUTHENTICATED=16]="UNAUTHENTICATED",bc[bc.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",bc[bc.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",bc[bc.ABORTED=10]="ABORTED",bc[bc.OUT_OF_RANGE=11]="OUT_OF_RANGE",bc[bc.UNIMPLEMENTED=12]="UNIMPLEMENTED",bc[bc.INTERNAL=13]="INTERNAL",bc[bc.UNAVAILABLE=14]="UNAVAILABLE",bc[bc.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
let Sc=null;
/**
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
 */function Ec(){return new TextEncoder}
/**
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
 */const Tc=new Kr([4294967295,4294967295],0);function Cc(e){const t=Ec().encode(e),n=new Gr;return n.update(t),new Uint8Array(n.digest())}function kc(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Kr([n,r],0),new Kr([i,s],0)]}class xc{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Ac(`Invalid padding: ${t}`);if(n<0)throw new Ac(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new Ac(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new Ac(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=Kr.fromNumber(this.Ee)}Ae(e,t,n){let r=e.add(t.multiply(Kr.fromNumber(n)));return 1===r.compare(Tc)&&(r=new Kr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.de).toNumber()}Re(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ee)return!1;const t=Cc(e),[n,r]=kc(t);for(let i=0;i<this.hashCount;i++){const e=this.Ae(n,r,i);if(!this.Re(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new xc(i,r,t);return n.forEach((e=>s.insert(e))),s}insert(e){if(0===this.Ee)return;const t=Cc(e),[n,r]=kc(t);for(let i=0;i<this.hashCount;i++){const e=this.Ae(n,r,i);this.Ve(e)}}Ve(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Ac extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
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
 */class Oc{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Nc.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Oc(Ti.min(),r,new $s(_i),Ea(),La())}}class Nc{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Nc(n,t,La(),La(),La())}}
/**
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
 */class Dc{constructor(e,t,n,r){this.me=e,this.removedTargetIds=t,this.key=n,this.fe=r}}class Lc{constructor(e,t){this.targetId=e,this.ge=t}}class Pc{constructor(e,t,n=Gs.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Rc{constructor(){this.pe=0,this.ye=Fc(),this.we=Gs.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return 0!==this.pe}get Ce(){return this.be}ve(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=La(),t=La(),n=La();return this.ye.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:ii()}})),new Nc(this.we,this.Se,e,t,n)}Me(){this.be=!1,this.ye=Fc()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1}Le(){this.be=!0,this.Se=!0}}class Mc{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Ea(),this.Ke=$c(),this.$e=new $s(_i)}Ue(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.We(t,e.fe):this.Ge(t,e.key,e.fe);for(const t of e.removedTargetIds)this.Ge(t,e.key,e.fe)}ze(e){this.forEachTarget(e,(t=>{const n=this.je(t);switch(e.state){case 0:this.He(t)&&n.ve(e.resumeToken);break;case 1:n.Be(),n.De||n.Me(),n.ve(e.resumeToken);break;case 2:n.Be(),n.De||this.removeTarget(t);break;case 3:this.He(t)&&(n.Le(),n.ve(e.resumeToken));break;case 4:this.He(t)&&(this.Je(t),n.ve(e.resumeToken));break;default:ii()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach(((e,n)=>{this.He(n)&&t(n)}))}Ye(e){const t=e.targetId,n=e.ge.count,r=this.Ze(t);if(r){const i=r.target;if(ta(i))if(0===n){const e=new Oi(i.path);this.Ge(t,e,Co.newNoDocument(e,Ti.min()))}else si(1===n);else{const r=this.Xe(t);if(r!==n){const n=this.et(e),i=n?this.tt(n,e,r):1;if(0!==i){this.Je(t);const e=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.$e=this.$e.insert(t,e)}null==Sc||Sc.nt(function(e,t,n,r,i){var s,o,a,c,u,l;const h={localCacheCount:e,existenceFilterCount:t.count,databaseId:n.database,projectId:n.projectId},d=t.unchangedNames;return d&&(h.bloomFilter={applied:0===i,hashCount:null!==(s=null==d?void 0:d.hashCount)&&void 0!==s?s:0,bitmapLength:null!==(c=null===(a=null===(o=null==d?void 0:d.bits)||void 0===o?void 0:o.bitmap)||void 0===a?void 0:a.length)&&void 0!==c?c:0,padding:null!==(l=null===(u=null==d?void 0:d.bits)||void 0===u?void 0:u.padding)&&void 0!==l?l:0,mightContain:e=>{var t;return null!==(t=null==r?void 0:r.mightContain(e))&&void 0!==t&&t}}),h}
/**
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
 */(r,e.ge,this.ke.rt(),n,i))}}}}et(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let s,o;try{s=Qs(n).toUint8Array()}catch(e){if(e instanceof qs)return ni("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{o=new xc(s,r,i)}catch(e){return ni(e instanceof Ac?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===o.Ee?null:o}tt(e,t,n){return t.ge.count===n-this.it(e,t.targetId)?0:2}it(e,t){const n=this.ke.getRemoteKeysForTarget(t);let r=0;return n.forEach((n=>{const i=this.ke.rt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.Ge(t,n,null),r++)})),r}st(e){const t=new Map;this.qe.forEach(((n,r)=>{const i=this.Ze(r);if(i){if(n.current&&ta(i.target)){const t=new Oi(i.target.path);null!==this.Qe.get(t)||this.ot(r,t)||this.Ge(r,t,Co.newNoDocument(t,e))}n.Ce&&(t.set(r,n.Fe()),n.Me())}}));let n=La();this.Ke.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Ze(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.Qe.forEach(((t,n)=>n.setReadTime(e)));const r=new Oc(e,t,this.$e,this.Qe,n);return this.Qe=Ea(),this.Ke=$c(),this.$e=new $s(_i),r}We(e,t){if(!this.He(e))return;const n=this.ot(e,t.key)?2:0;this.je(e).xe(t.key,n),this.Qe=this.Qe.insert(t.key,t),this.Ke=this.Ke.insert(t.key,this._t(t.key).add(e))}Ge(e,t,n){if(!this.He(e))return;const r=this.je(e);this.ot(e,t)?r.xe(t,1):r.Oe(t),this.Ke=this.Ke.insert(t,this._t(t).delete(e)),n&&(this.Qe=this.Qe.insert(t,n))}removeTarget(e){this.qe.delete(e)}Xe(e){const t=this.je(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.je(e).Ne()}je(e){let t=this.qe.get(e);return t||(t=new Rc,this.qe.set(e,t)),t}_t(e){let t=this.Ke.get(e);return t||(t=new Bs(_i),this.Ke=this.Ke.insert(e,t)),t}He(e){const t=null!==this.Ze(e);return t||ei("WatchChangeAggregator","Detected inactive target",e),t}Ze(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.ut(e)}Je(e){this.qe.set(e,new Rc),this.ke.getRemoteKeysForTarget(e).forEach((t=>{this.Ge(e,t,null)}))}ot(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function $c(){return new $s(Oi.comparator)}function Fc(){return new $s(Oi.comparator)}const Vc=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),Bc=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),jc=(()=>{const e={and:"AND",or:"OR"};return e})();class Uc{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function zc(e,t){return e.useProto3Json||ns(t)?t:{value:t}}function qc(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Hc(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Gc(e,t){return qc(e,t.toTimestamp())}function Kc(e){return si(!!e),Ti.fromTimestamp(function(e){const t=Ws(e);return new Ei(t.seconds,t.nanos)}(e))}function Wc(e,t){return function(e){return new ki(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Zc(e){const t=ki.fromString(e);return si(_u(t)),t}function Qc(e,t){return Wc(e.databaseId,t.path)}function Jc(e,t){const n=Zc(t);if(n.get(1)!==e.databaseId.projectId)throw new ui(ci.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new ui(ci.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Oi(tu(n))}function Yc(e,t){return Wc(e.databaseId,t)}function Xc(e){const t=Zc(e);return 4===t.length?ki.emptyPath():tu(t)}function eu(e){return new ki(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function tu(e){return si(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function nu(e,t,n){return{name:Qc(e,t),fields:n.value.mapValue.fields}}function ru(e,t,n){const r=Jc(e,t.name),i=Kc(t.updateTime),s=t.createTime?Kc(t.createTime):Ti.min(),o=new Eo({mapValue:{fields:t.fields}}),a=Co.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function iu(e,t){return"found"in t?function(e,t){si(!!t.found),t.found.name,t.found.updateTime;const n=Jc(e,t.found.name),r=Kc(t.found.updateTime),i=t.found.createTime?Kc(t.found.createTime):Ti.min(),s=new Eo({mapValue:{fields:t.found.fields}});return Co.newFoundDocument(n,r,i,s)}(e,t):"missing"in t?function(e,t){si(!!t.missing),si(!!t.readTime);const n=Jc(e,t.missing),r=Kc(t.readTime);return Co.newNoDocument(n,r)}(e,t):ii()}function su(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:ii()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.useProto3Json?(si(void 0===t||"string"==typeof t),Gs.fromBase64String(t||"")):(si(void 0===t||t instanceof Uint8Array),Gs.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?ci.UNKNOWN:Ic(e.code);return new ui(t,e.message||"")}(o);n=new Pc(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Jc(e,r.document.name),s=Kc(r.document.updateTime),o=r.document.createTime?Kc(r.document.createTime):Ti.min(),a=new Eo({mapValue:{fields:r.document.fields}}),c=Co.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Dc(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Jc(e,r.document),s=r.readTime?Kc(r.readTime):Ti.min(),o=Co.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Dc([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Jc(e,r.document),s=r.removedTargetIds||[];n=new Dc([],s,i,null)}else{if(!("filter"in t))return ii();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new yc(r,i),o=e.targetId;n=new Lc(o,s)}}return n}function ou(e,t){let n;if(t instanceof cc)n={update:nu(e,t.key,t.value)};else if(t instanceof fc)n={delete:Qc(e,t.key)};else if(t instanceof uc)n={update:nu(e,t.key,t.data),updateMask:bu(t.fieldMask)};else{if(!(t instanceof pc))return ii();n={verify:Qc(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof za)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof qa)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ga)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Wa)return{fieldPath:t.field.canonicalString(),increment:n.Te};throw ii()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Gc(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:ii()}(e,t.precondition)),n}function au(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?ec.updateTime(Kc(e.updateTime)):void 0!==e.exists?ec.exists(e.exists):ec.none()}(t.currentDocument):ec.none(),r=t.updateTransforms?t.updateTransforms.map((t=>function(e,t){let n=null;if("setToServerValue"in t)si("REQUEST_TIME"===t.setToServerValue),n=new za;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new qa(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new Ga(e)}else"increment"in t?n=new Wa(e,t.increment):ii();const r=Ai.fromServerFormat(t.fieldPath);return new Ja(r,n)}(e,t))):[];if(t.update){t.update.name;const i=Jc(e,t.update.name),s=new Eo({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new zs(t.map((e=>Ai.fromServerFormat(e))))}(t.updateMask);return new uc(i,s,e,n,r)}return new cc(i,s,n,r)}if(t.delete){const r=Jc(e,t.delete);return new fc(r,n)}if(t.verify){const r=Jc(e,t.verify);return new pc(r,n)}return ii()}function cu(e,t){return e&&e.length>0?(si(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Kc(e.updateTime):Kc(t);return n.isEqual(Ti.min())&&(n=Kc(t)),new Xa(n,e.transformResults||[])}(e,t)))):[]}function uu(e,t){return{documents:[Yc(e,t.path)]}}function lu(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Yc(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Yc(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0!==e.length)return wu(Po.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:vu(e.field),direction:pu(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=zc(e,t.limit);return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(e){return{before:e.inclusive,values:e.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function hu(e){let t=Xc(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){si(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=fu(e);return t instanceof Po&&$o(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=function(e){return e.map((e=>function(e){return new Oo(yu(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)))}(n.orderBy));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,ns(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new ko(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new ko(n,t)}(n.endAt)),oa(t,i,o,s,a,"F",c,u)}function du(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ii()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}function fu(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=yu(e.unaryFilter.field);return Lo.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=yu(e.unaryFilter.field);return Lo.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=yu(e.unaryFilter.field);return Lo.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=yu(e.unaryFilter.field);return Lo.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ii()}}(e):void 0!==e.fieldFilter?function(e){return Lo.create(yu(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ii()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Po.create(e.compositeFilter.filters.map((e=>fu(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return ii()}}(e.compositeFilter.op))}(e):ii()}function pu(e){return Vc[e]}function mu(e){return Bc[e]}function gu(e){return jc[e]}function vu(e){return{fieldPath:e.canonicalString()}}function yu(e){return Ai.fromServerFormat(e.fieldPath)}function wu(e){return e instanceof Lo?function(e){if("=="===e.op){if(go(e.value))return{unaryFilter:{field:vu(e.field),op:"IS_NAN"}};if(mo(e.value))return{unaryFilter:{field:vu(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(go(e.value))return{unaryFilter:{field:vu(e.field),op:"IS_NOT_NAN"}};if(mo(e.value))return{unaryFilter:{field:vu(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vu(e.field),op:mu(e.op),value:e.value}}}(e):e instanceof Po?function(e){const t=e.getFilters().map((e=>wu(e)));return 1===t.length?t[0]:{compositeFilter:{op:gu(e.op),filters:t}}}(e):ii()}function bu(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function _u(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
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
 */class Iu{constructor(e,t,n,r,i=Ti.min(),s=Ti.min(),o=Gs.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new Iu(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Iu(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Iu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Iu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
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
 */class Su{constructor(e){this.ct=e}}function Eu(e,t){let n;if(t.document)n=ru(e.ct,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=Oi.fromSegments(t.noDocument.path),r=xu(t.noDocument.readTime);n=Co.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return ii();{const e=Oi.fromSegments(t.unknownDocument.path),r=xu(t.unknownDocument.version);n=Co.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){const t=new Ei(e[0],e[1]);return Ti.fromTimestamp(t)}(t.readTime)),n}function Tu(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Cu(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document=function(e,t){return{name:Qc(e,t.key),fields:t.data.value.mapValue.fields,updateTime:qc(e,t.version.toTimestamp()),createTime:qc(e,t.createTime.toTimestamp())}}(e.ct,t);else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:ku(t.version)};else{if(!t.isUnknownDocument())return ii();r.unknownDocument={path:n.path.toArray(),version:ku(t.version)}}return r}function Cu(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function ku(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function xu(e){const t=new Ei(e.seconds,e.nanoseconds);return Ti.fromTimestamp(t)}function Au(e,t){const n=(t.baseMutations||[]).map((t=>au(e.ct,t)));for(let s=0;s<t.mutations.length-1;++s){const e=t.mutations[s];if(s+1<t.mutations.length&&void 0!==t.mutations[s+1].transform){const n=t.mutations[s+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const r=t.mutations.map((t=>au(e.ct,t))),i=Ei.fromMillis(t.localWriteTimeMs);return new mc(t.batchId,i,n,r)}function Ou(e){const t=xu(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?xu(e.lastLimboFreeSnapshotVersion):Ti.min();let r;return r=function(e){return void 0!==e.documents}(e.query)?function(e){return si(1===e.documents.length),ha(aa(Xc(e.documents[0])))}(e.query):function(e){return ha(hu(e))}(e.query),new Iu(r,e.targetId,"TargetPurposeListen",e.lastListenSequenceNumber,t,n,Gs.fromBase64String(e.resumeToken))}function Nu(e,t){const n=ku(t.snapshotVersion),r=ku(t.lastLimboFreeSnapshotVersion);let i;i=ta(t.target)?uu(e.ct,t.target):lu(e.ct,t.target);const s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:Xo(t.target),readTime:n,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Du(e){const t=hu({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?pa(t,t.limit,"L"):t}function Lu(e,t){return new vc(t.largestBatchId,au(e.ct,t.overlayMutation))}function Pu(e,t){const n=t.path.lastSegment();return[e,ss(t.path.popLast()),n]}function Ru(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:ku(r.readTime),documentKey:ss(r.documentKey.path),largestBatchId:r.largestBatchId}}
/**
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
 */class Mu{getBundleMetadata(e,t){return $u(e).get(t).next((e=>{if(e)return function(e){return{id:e.bundleId,createTime:xu(e.createTime),version:e.version}}(e)}))}saveBundleMetadata(e,t){return $u(e).put(function(e){return{bundleId:e.id,createTime:ku(Kc(e.createTime)),version:e.version}}(t))}getNamedQuery(e,t){return Fu(e).get(t).next((e=>{if(e)return function(e){return{name:e.name,query:Du(e.bundledQuery),readTime:xu(e.readTime)}}(e)}))}saveNamedQuery(e,t){return Fu(e).put(function(e){return{name:e.name,readTime:ku(Kc(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function $u(e){return Ls(e,"bundles")}function Fu(e){return Ls(e,"namedQueries")}
/**
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
 */class Vu{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const n=t.uid||"";return new Vu(e,n)}getOverlay(e,t){return Bu(e).get(Pu(this.userId,t)).next((e=>e?Lu(this.serializer,e):null))}getOverlays(e,t){const n=xa();return zi.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){const r=[];return n.forEach(((n,i)=>{const s=new vc(t,i);r.push(this.ht(e,s))})),zi.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach((e=>r.add(ss(e.getCollectionPath()))));const i=[];return r.forEach((t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(Bu(e).J("collectionPathOverlayIndex",r))})),zi.waitFor(i)}getOverlaysForCollection(e,t,n){const r=xa(),i=ss(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Bu(e).G("collectionPathOverlayIndex",s).next((e=>{for(const t of e){const e=Lu(this.serializer,t);r.set(e.getKey(),e)}return r}))}getOverlaysForCollectionGroup(e,t,n,r){const i=xa();let s;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Bu(e).Z({index:"collectionGroupOverlayIndex",range:o},((e,t,n)=>{const o=Lu(this.serializer,t);i.size()<r||o.largestBatchId===s?(i.set(o.getKey(),o),s=o.largestBatchId):n.done()})).next((()=>i))}ht(e,t){return Bu(e).put(function(e,t,n){const[r,i,s]=Pu(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:ou(e.ct,n.mutation)}}(this.serializer,this.userId,t))}}function Bu(e){return Ls(e,"documentOverlays")}
/**
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
 */class ju{constructor(){}Pt(e,t){this.It(e,t),t.Tt()}It(e,t){if("nullValue"in e)this.Et(t,5);else if("booleanValue"in e)this.Et(t,10),t.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(t,15),t.dt(Zs(e.integerValue));else if("doubleValue"in e){const n=Zs(e.doubleValue);isNaN(n)?this.Et(t,13):(this.Et(t,15),rs(n)?t.dt(0):t.dt(n))}else if("timestampValue"in e){const n=e.timestampValue;this.Et(t,20),"string"==typeof n?t.At(n):(t.At(`${n.seconds||""}`),t.dt(n.nanos||0))}else if("stringValue"in e)this.Rt(e.stringValue,t),this.Vt(t);else if("bytesValue"in e)this.Et(t,30),t.ft(Qs(e.bytesValue)),this.Vt(t);else if("referenceValue"in e)this.gt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Et(t,45),t.dt(n.latitude||0),t.dt(n.longitude||0)}else"mapValue"in e?wo(e)?this.Et(t,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,t),this.Vt(t)):"arrayValue"in e?(this.wt(e.arrayValue,t),this.Vt(t)):ii()}Rt(e,t){this.Et(t,25),this.St(e,t)}St(e,t){t.At(e)}yt(e,t){const n=e.fields||{};this.Et(t,55);for(const r of Object.keys(n))this.Rt(r,t),this.It(n[r],t)}wt(e,t){const n=e.values||[];this.Et(t,50);for(const r of n)this.It(r,t)}gt(e,t){this.Et(t,37),Oi.fromName(e).path.forEach((e=>{this.Et(t,60),this.St(e,t)}))}Et(e,t){e.dt(t)}Vt(e){e.dt(2)}}function Uu(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function zu(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=Uu(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}ju.bt=new ju;class qu{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ct(n.value),n=t.next();this.vt()}Ft(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Mt(n.value),n=t.next();this.xt()}Ot(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Ct(e);else if(e<2048)this.Ct(960|e>>>6),this.Ct(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ct(480|e>>>12),this.Ct(128|63&e>>>6),this.Ct(128|63&e);else{const e=t.codePointAt(0);this.Ct(240|e>>>18),this.Ct(128|63&e>>>12),this.Ct(128|63&e>>>6),this.Ct(128|63&e)}}this.vt()}Nt(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Mt(e);else if(e<2048)this.Mt(960|e>>>6),this.Mt(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Mt(480|e>>>12),this.Mt(128|63&e>>>6),this.Mt(128|63&e);else{const e=t.codePointAt(0);this.Mt(240|e>>>18),this.Mt(128|63&e>>>12),this.Mt(128|63&e>>>6),this.Mt(128|63&e)}}this.xt()}Bt(e){const t=this.Lt(e),n=zu(t);this.kt(1+n),this.buffer[this.position++]=255&n;for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=255&t[r]}qt(e){const t=this.Lt(e),n=zu(t);this.kt(1+n),this.buffer[this.position++]=~(255&n);for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Lt(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let r=1;r<t.length;++r)t[r]^=n?255:0;return t}Ct(e){const t=255&e;0===t?(this.Kt(0),this.Kt(255)):255===t?(this.Kt(255),this.Kt(0)):this.Kt(t)}Mt(e){const t=255&e;0===t?(this.Ut(0),this.Ut(255)):255===t?(this.Ut(255),this.Ut(0)):this.Ut(e)}vt(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class Hu{constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Bt(e)}Tt(){this.Gt.Qt()}}class Gu{constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}}class Ku{constructor(){this.Gt=new qu,this.zt=new Hu(this.Gt),this.jt=new Gu(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return 0===e?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}
/**
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
 */class Wu{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}Jt(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new Wu(this.indexId,this.documentKey,this.arrayValue,n)}}function Zu(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=Qu(e.arrayValue,t.arrayValue),0!==n?n:(n=Qu(e.directionalValue,t.directionalValue),0!==n?n:Oi.comparator(e.documentKey,t.documentKey)))}function Qu(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}
/**
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
 */class Ju{constructor(e){this.Yt=new Bs(((e,t)=>Ai.comparator(e.field,t.field))),this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Zt=e.orderBy,this.Xt=[];for(const t of e.filters){const e=t;e.isInequality()?this.Yt=this.Yt.add(e):this.Xt.push(e)}}get en(){return this.Yt.size>1}tn(e){if(si(e.collectionGroup===this.collectionId),this.en)return!1;const t=Di(e);if(void 0!==t&&!this.nn(t))return!1;const n=Li(e);let r=new Set,i=0,s=0;for(;i<n.length&&this.nn(n[i]);++i)r=r.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.Yt.size>0){const e=this.Yt.getIterator().getNext();if(!r.has(e.field.canonicalString())){const t=n[i];if(!this.rn(e,t)||!this.sn(this.Zt[s++],t))return!1}++i}for(;i<n.length;++i){const e=n[i];if(s>=this.Zt.length||!this.sn(this.Zt[s++],e))return!1}return!0}on(){if(this.en)return null;let e=new Bs(Ai.comparator);const t=[];for(const n of this.Xt)if(!n.field.isKeyField())if("array-contains"===n.op||"array-contains-any"===n.op)t.push(new Pi(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new Pi(n.field,0))}for(const n of this.Zt)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new Pi(n.field,"asc"===n.dir?0:1)));return new Ni(Ni.UNKNOWN_ID,this.collectionId,t,Ri.empty())}nn(e){for(const t of this.Xt)if(this.rn(t,e))return!0;return!1}rn(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
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
 */function Yu(e){var t,n;if(si(e instanceof Lo||e instanceof Po),e instanceof Lo){if(e instanceof Wo){const r=(null===(n=null===(t=e.value.arrayValue)||void 0===t?void 0:t.values)||void 0===n?void 0:n.map((t=>Lo.create(e.field,"==",t))))||[];return Po.create(r,"or")}return e}const r=e.filters.map((e=>Yu(e)));return Po.create(r,e.op)}function Xu(e){if(0===e.getFilters().length)return[];const t=rl(Yu(e));return si(nl(t)),el(t)||tl(t)?[t]:t.getFilters()}function el(e){return e instanceof Lo}function tl(e){return e instanceof Po&&$o(e)}function nl(e){return el(e)||tl(e)||function(e){if(e instanceof Po&&Mo(e)){for(const t of e.getFilters())if(!el(t)&&!tl(t))return!1;return!0}return!1}(e)}function rl(e){if(si(e instanceof Lo||e instanceof Po),e instanceof Lo)return e;if(1===e.filters.length)return rl(e.filters[0]);const t=e.filters.map((e=>rl(e)));let n=Po.create(t,e.op);return n=ol(n),nl(n)?n:(si(n instanceof Po),si(Ro(n)),si(n.filters.length>1),n.filters.reduce(((e,t)=>il(e,t))))}function il(e,t){let n;return si(e instanceof Lo||e instanceof Po),si(t instanceof Lo||t instanceof Po),n=e instanceof Lo?t instanceof Lo?function(e,t){return Po.create([e,t],"and")}(e,t):sl(e,t):t instanceof Lo?sl(t,e):function(e,t){if(si(e.filters.length>0&&t.filters.length>0),Ro(e)&&Ro(t))return jo(e,t.getFilters());const n=Mo(e)?e:t,r=Mo(e)?t:e,i=n.filters.map((e=>il(e,r)));return Po.create(i,"or")}(e,t),ol(n)}function sl(e,t){if(Ro(t))return jo(t,e.getFilters());{const n=t.filters.map((t=>il(e,t)));return Po.create(n,"or")}}function ol(e){if(si(e instanceof Lo||e instanceof Po),e instanceof Lo)return e;const t=e.getFilters();if(1===t.length)return ol(t[0]);if(Fo(e))return e;const n=t.map((e=>ol(e))),r=[];return n.forEach((t=>{t instanceof Lo?r.push(t):t instanceof Po&&(t.op===e.op?r.push(...t.filters):r.push(t))})),1===r.length?r[0]:Po.create(r,e.op)
/**
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
 */}class al{constructor(){this._n=new cl}addToCollectionParentIndex(e,t){return this._n.add(t),zi.resolve()}getCollectionParents(e,t){return zi.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return zi.resolve()}deleteFieldIndex(e,t){return zi.resolve()}deleteAllFieldIndexes(e){return zi.resolve()}createTargetIndexes(e,t){return zi.resolve()}getDocumentsMatchingTarget(e,t){return zi.resolve(null)}getIndexType(e,t){return zi.resolve(0)}getFieldIndexes(e,t){return zi.resolve([])}getNextCollectionGroupToUpdate(e){return zi.resolve(null)}getMinOffset(e,t){return zi.resolve(Fi.min())}getMinOffsetFromCollectionGroup(e,t){return zi.resolve(Fi.min())}updateCollectionGroup(e,t,n){return zi.resolve()}updateIndexEntries(e,t){return zi.resolve()}}class cl{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Bs(ki.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Bs(ki.comparator)).toArray()}}
/**
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
 */const ul=new Uint8Array(0);class ll{constructor(e,t){this.user=e,this.databaseId=t,this.an=new cl,this.un=new Ia((e=>Xo(e)),((e,t)=>ea(e,t))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.an.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener((()=>{this.an.add(t)}));const i={collectionId:n,parent:ss(r)};return hl(e).put(i)}return zi.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[Si(t),""],!1,!0);return hl(e).G(r).next((e=>{for(const r of e){if(r.collectionId!==t)break;n.push(cs(r.parent))}return n}))}addFieldIndex(e,t){const n=fl(e),r=function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map((e=>[e.fieldPath.canonicalString(),e.kind]))}}(t);delete r.indexId;const i=n.add(r);if(t.indexState){const n=pl(e);return i.next((e=>{n.put(Ru(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))}))}return i.next()}deleteFieldIndex(e,t){const n=fl(e),r=pl(e),i=dl(e);return n.delete(t.indexId).next((()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}deleteAllFieldIndexes(e){const t=fl(e),n=dl(e),r=pl(e);return t.J().next((()=>n.J())).next((()=>r.J()))}createTargetIndexes(e,t){return zi.forEach(this.cn(t),(t=>this.getIndexType(e,t).next((n=>{if(0===n||1===n){const n=new Ju(t).on();if(null!=n)return this.addFieldIndex(e,n)}}))))}getDocumentsMatchingTarget(e,t){const n=dl(e);let r=!0;const i=new Map;return zi.forEach(this.cn(t),(t=>this.ln(e,t).next((e=>{r&&(r=!!e),i.set(t,e)})))).next((()=>{if(r){let e=La();const r=[];return zi.forEach(i,((i,s)=>{ei("IndexedDbIndexManager",`Using index ${function(e){return`id=${e.indexId}|cg=${e.collectionGroup}|f=${e.fields.map((e=>`${e.fieldPath}:${e.kind}`)).join(",")}`}(i)} to execute ${Xo(t)}`);const o=function(e,t){const n=Di(t);if(void 0===n)return null;for(const r of na(e,n.fieldPath))switch(r.op){case"array-contains-any":return r.value.arrayValue.values||[];case"array-contains":return[r.value]}return null}(s,i),a=function(e,t){const n=new Map;for(const r of Li(t))for(const t of na(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,i),c=function(e,t){const n=[];let r=!0;for(const i of Li(t)){const t=0===i.kind?ra(e,i.fieldPath,e.startAt):ia(e,i.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new ko(n,r)}(s,i),u=function(e,t){const n=[];let r=!0;for(const i of Li(t)){const t=0===i.kind?ia(e,i.fieldPath,e.endAt):ra(e,i.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new ko(n,r)}(s,i),l=this.hn(i,s,c),h=this.hn(i,s,u),d=this.Pn(i,s,a),f=this.In(i.indexId,o,l,c.inclusive,h,u.inclusive,d);return zi.forEach(f,(i=>n.H(i,t.limit).next((t=>{t.forEach((t=>{const n=Oi.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))}))}))))})).next((()=>r))}return zi.resolve(null)}))}cn(e){let t=this.un.get(e);return t||(t=0===e.filters.length?[e]:Xu(Po.create(e.filters,"and")).map((t=>Yo(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt))),this.un.set(e,t),t)}In(e,t,n,r,i,s,o){const a=(null!=t?t.length:1)*Math.max(n.length,i.length),c=a/(null!=t?t.length:1),u=[];for(let l=0;l<a;++l){const a=t?this.Tn(t[l/c]):ul,h=this.En(e,a,n[l%c],r),d=this.dn(e,a,i[l%c],s),f=o.map((t=>this.En(e,a,t,!0)));u.push(...this.createRange(h,d,f))}return u}En(e,t,n,r){const i=new Wu(e,Oi.empty(),t,n);return r?i:i.Jt()}dn(e,t,n,r){const i=new Wu(e,Oi.empty(),t,n);return r?i.Jt():i}ln(e,t){const n=new Ju(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next((e=>{let t=null;for(const r of e)n.tn(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t}))}getIndexType(e,t){let n=2;const r=this.cn(t);return zi.forEach(r,(t=>this.ln(e,t).next((e=>{e?0!==n&&e.fields.length<function(e){let t=new Bs(Ai.comparator),n=!1;for(const r of e.filters)for(const e of r.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field));for(const r of e.orderBy)r.field.isKeyField()||(t=t.add(r.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})))).next((()=>function(e){return null!==e.limit}(t)&&r.length>1&&2===n?1:n))}An(e,t){const n=new Ku;for(const r of Li(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const i=n.Ht(r.kind);ju.bt.Pt(e,i)}return n.Wt()}Tn(e){const t=new Ku;return ju.bt.Pt(e,t.Ht(0)),t.Wt()}Rn(e,t){const n=new Ku;return ju.bt.Pt(ho(this.databaseId,t),n.Ht(function(e){const t=Li(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.Wt()}Pn(e,t,n){if(null===n)return[];let r=[];r.push(new Ku);let i=0;for(const s of Li(e)){const e=n[i++];for(const n of r)if(this.Vn(t,s.fieldPath)&&po(e))r=this.mn(r,s,e);else{const t=n.Ht(s.kind);ju.bt.Pt(e,t)}}return this.fn(r)}hn(e,t,n){return this.Pn(e,t,n.position)}fn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Wt();return t}mn(e,t,n){const r=[...e],i=[];for(const s of n.arrayValue.values||[])for(const e of r){const n=new Ku;n.seed(e.Wt()),ju.bt.Pt(s,n.Ht(t.kind)),i.push(n)}return i}Vn(e,t){return!!e.filters.find((e=>e instanceof Lo&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op)))}getFieldIndexes(e,t){const n=fl(e),r=pl(e);return(t?n.G("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.G()).next((e=>{const t=[];return zi.forEach(e,(e=>r.get([e.indexId,this.uid]).next((n=>{t.push(function(e,t){const n=t?new Ri(t.sequenceNumber,new Fi(xu(t.readTime),new Oi(cs(t.documentKey)),t.largestBatchId)):Ri.empty(),r=e.fields.map((([e,t])=>new Pi(Ai.fromServerFormat(e),t)));return new Ni(e.indexId,e.collectionGroup,r,n)}(e,n))})))).next((()=>t))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((e=>0===e.length?null:(e.sort(((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:_i(e.collectionGroup,t.collectionGroup)})),e[0].collectionGroup)))}updateCollectionGroup(e,t,n){const r=fl(e),i=pl(e);return this.gn(e).next((e=>r.G("collectionGroupIndex",IDBKeyRange.bound(t,t)).next((t=>zi.forEach(t,(t=>i.put(Ru(t.indexId,this.user,e,n))))))))}updateIndexEntries(e,t){const n=new Map;return zi.forEach(t,((t,r)=>{const i=n.get(t.collectionGroup);return(i?zi.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next((i=>(n.set(t.collectionGroup,i),zi.forEach(i,(n=>this.pn(e,t,n).next((t=>{const i=this.yn(r,n);return t.isEqual(i)?zi.resolve():this.wn(e,r,n,t,i)})))))))}))}Sn(e,t,n,r){return dl(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.Rn(n,t.key),documentKey:t.key.path.toArray()})}bn(e,t,n,r){return dl(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.Rn(n,t.key),t.key.path.toArray()])}pn(e,t,n){const r=dl(e);let i=new Bs(Zu);return r.Z({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.Rn(n,t)])},((e,r)=>{i=i.add(new Wu(n.indexId,t,r.arrayValue,r.directionalValue))})).next((()=>i))}yn(e,t){let n=new Bs(Zu);const r=this.An(t,e);if(null==r)return n;const i=Di(t);if(null!=i){const s=e.data.field(i.fieldPath);if(po(s))for(const i of s.arrayValue.values||[])n=n.add(new Wu(t.indexId,e.key,this.Tn(i),r))}else n=n.add(new Wu(t.indexId,e.key,ul,r));return n}wn(e,t,n,r,i){ei("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const s=[];return function(e,t,n,r,i){const s=e.getIterator(),o=t.getIterator();let a=Us(s),c=Us(o);for(;a||c;){let e=!1,t=!1;if(a&&c){const r=n(a,c);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(c),c=Us(o)):t?(i(a),a=Us(s)):(a=Us(s),c=Us(o))}}(r,i,Zu,(r=>{s.push(this.Sn(e,t,n,r))}),(r=>{s.push(this.bn(e,t,n,r))})),zi.waitFor(s)}gn(e){let t=1;return pl(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((e,n,r)=>{r.done(),t=n.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((e,t)=>Zu(e,t))).filter(((e,t,n)=>!t||0!==Zu(e,n[t-1])));const r=[];r.push(e);for(const s of n){const n=Zu(s,e),i=Zu(s,t);if(0===n)r[0]=e.Jt();else if(n>0&&i<0)r.push(s),r.push(s.Jt());else if(i>0)break}r.push(t);const i=[];for(let s=0;s<r.length;s+=2){if(this.Dn(r[s],r[s+1]))return[];const e=[r[s].indexId,this.uid,r[s].arrayValue,r[s].directionalValue,ul,[]],t=[r[s+1].indexId,this.uid,r[s+1].arrayValue,r[s+1].directionalValue,ul,[]];i.push(IDBKeyRange.bound(e,t))}return i}Dn(e,t){return Zu(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(ml)}getMinOffset(e,t){return zi.mapArray(this.cn(t),(t=>this.ln(e,t).next((e=>e||ii())))).next(ml)}}function hl(e){return Ls(e,"collectionParents")}function dl(e){return Ls(e,"indexEntries")}function fl(e){return Ls(e,"indexConfiguration")}function pl(e){return Ls(e,"indexState")}function ml(e){si(0!==e.length);let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){const i=e[r].indexState.offset;Vi(i,t)<0&&(t=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Fi(t.readTime,t.documentKey,n)}
/**
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
 */const gl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class vl{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new vl(e,vl.DEFAULT_COLLECTION_PERCENTILE,vl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
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
 */function yl(e,t,n){const r=e.store("mutations"),i=e.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Z({range:o},((e,t,n)=>(a++,n.delete())));s.push(c.next((()=>{si(1===a)})));const u=[];for(const l of n.mutations){const e=hs(t,l.key.path,n.batchId);s.push(i.delete(e)),u.push(l.key)}return zi.waitFor(s).next((()=>u))}function wl(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw ii();t=e.noDocument}return JSON.stringify(t).length}
/**
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
 */vl.DEFAULT_COLLECTION_PERCENTILE=10,vl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vl.DEFAULT=new vl(41943040,vl.DEFAULT_COLLECTION_PERCENTILE,vl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vl.DISABLED=new vl(-1,0,0);class bl{constructor(e,t,n,r){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=r,this.Cn={}}static lt(e,t,n,r){si(""!==e.uid);const i=e.isAuthenticated()?e.uid:"";return new bl(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Il(e).Z({index:"userMutationsIndex",range:n},((e,n,r)=>{t=!1,r.done()})).next((()=>t))}addMutationBatch(e,t,n,r){const i=Sl(e),s=Il(e);return s.add({}).next((o=>{si("number"==typeof o);const a=new mc(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map((t=>ou(e.ct,t))),i=n.mutations.map((t=>ou(e.ct,t)));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.serializer,this.userId,a),u=[];let l=new Bs(((e,t)=>_i(e.canonicalString(),t.canonicalString())));for(const e of r){const t=hs(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),u.push(s.put(c)),u.push(i.put(t,ds))}return l.forEach((t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))})),e.addOnCommittedListener((()=>{this.Cn[o]=a.keys()})),zi.waitFor(u).next((()=>a))}))}lookupMutationBatch(e,t){return Il(e).get(t).next((e=>e?(si(e.userId===this.userId),Au(this.serializer,e)):null))}vn(e,t){return this.Cn[t]?zi.resolve(this.Cn[t]):this.lookupMutationBatch(e,t).next((e=>{if(e){const n=e.keys();return this.Cn[t]=n,n}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return Il(e).Z({index:"userMutationsIndex",range:r},((e,t,r)=>{t.userId===this.userId&&(si(t.batchId>=n),i=Au(this.serializer,t)),r.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Il(e).Z({index:"userMutationsIndex",range:t,reverse:!0},((e,t,r)=>{n=t.batchId,r.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Il(e).G("userMutationsIndex",t).next((e=>e.map((e=>Au(this.serializer,e)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=ls(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return Sl(e).Z({range:r},((n,r,s)=>{const[o,a,c]=n,u=cs(a);if(o===this.userId&&t.path.isEqual(u))return Il(e).get(c).next((e=>{if(!e)throw ii();si(e.userId===this.userId),i.push(Au(this.serializer,e))}));s.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Bs(_i);const r=[];return t.forEach((t=>{const i=ls(this.userId,t.path),s=IDBKeyRange.lowerBound(i),o=Sl(e).Z({range:s},((e,r,i)=>{const[s,o,a]=e,c=cs(o);s===this.userId&&t.path.isEqual(c)?n=n.add(a):i.done()}));r.push(o)})),zi.waitFor(r).next((()=>this.Fn(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=ls(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new Bs(_i);return Sl(e).Z({range:s},((e,t,i)=>{const[s,a,c]=e,u=cs(a);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):i.done()})).next((()=>this.Fn(e,o)))}Fn(e,t){const n=[],r=[];return t.forEach((t=>{r.push(Il(e).get(t).next((e=>{if(null===e)throw ii();si(e.userId===this.userId),n.push(Au(this.serializer,e))})))})),zi.waitFor(r).next((()=>n))}removeMutationBatch(e,t){return yl(e.ue,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.Mn(t.batchId)})),zi.forEach(n,(t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))))}Mn(e){delete this.Cn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return zi.resolve();const n=IDBKeyRange.lowerBound(function(e){return[e]}(this.userId)),r=[];return Sl(e).Z({range:n},((e,t,n)=>{if(e[0]===this.userId){const t=cs(e[1]);r.push(t)}else n.done()})).next((()=>{si(0===r.length)}))}))}containsKey(e,t){return _l(e,this.userId,t)}xn(e){return El(e).get(this.userId).next((e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""}))}}function _l(e,t,n){const r=ls(t,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Sl(e).Z({range:s,Y:!0},((e,n,r)=>{const[s,a,c]=e;s===t&&a===i&&(o=!0),r.done()})).next((()=>o))}function Il(e){return Ls(e,"mutations")}function Sl(e){return Ls(e,"documentMutations")}function El(e){return Ls(e,"mutationQueues")}
/**
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
 */class Tl{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Tl(0)}static Bn(){return new Tl(-1)}}
/**
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
 */class Cl{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Ln(e).next((t=>{const n=new Tl(t.highestTargetId);return t.highestTargetId=n.next(),this.kn(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.Ln(e).next((e=>Ti.fromTimestamp(new Ei(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.Ln(e).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.Ln(e).next((r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.kn(e,r))))}addTargetData(e,t){return this.qn(e,t).next((()=>this.Ln(e).next((n=>(n.targetCount+=1,this.Qn(t,n),this.kn(e,n))))))}updateTargetData(e,t){return this.qn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>kl(e).delete(t.targetId))).next((()=>this.Ln(e))).next((t=>(si(t.targetCount>0),t.targetCount-=1,this.kn(e,t))))}removeTargets(e,t,n){let r=0;const i=[];return kl(e).Z(((s,o)=>{const a=Ou(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))})).next((()=>zi.waitFor(i))).next((()=>r))}forEachTarget(e,t){return kl(e).Z(((e,n)=>{const r=Ou(n);t(r)}))}Ln(e){return xl(e).get("targetGlobalKey").next((e=>(si(null!==e),e)))}kn(e,t){return xl(e).put("targetGlobalKey",t)}qn(e,t){return kl(e).put(Nu(this.serializer,t))}Qn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.Ln(e).next((e=>e.targetCount))}getTargetData(e,t){const n=Xo(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return kl(e).Z({range:r,index:"queryTargetsIndex"},((e,n,r)=>{const s=Ou(n);ea(t,s.target)&&(i=s,r.done())})).next((()=>i))}addMatchingKeys(e,t,n){const r=[],i=Al(e);return t.forEach((t=>{const s=ss(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))})),zi.waitFor(r)}removeMatchingKeys(e,t,n){const r=Al(e);return zi.forEach(t,(t=>{const i=ss(t.path);return zi.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])}))}removeMatchingKeysForTargetId(e,t){const n=Al(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=Al(e);let i=La();return r.Z({range:n,Y:!0},((e,t,n)=>{const r=cs(e[1]),s=new Oi(r);i=i.add(s)})).next((()=>i))}containsKey(e,t){const n=ss(t.path),r=IDBKeyRange.bound([n],[Si(n)],!1,!0);let i=0;return Al(e).Z({index:"documentTargetsIndex",Y:!0,range:r},(([e,t],n,r)=>{0!==e&&(i++,r.done())})).next((()=>i>0))}ut(e,t){return kl(e).get(t).next((e=>e?Ou(e):null))}}function kl(e){return Ls(e,"targets")}function xl(e){return Ls(e,"targetGlobal")}function Al(e){return Ls(e,"targetDocuments")}
/**
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
 */function Ol([e,t],[n,r]){const i=_i(e,n);return 0===i?_i(t,r):i}class Nl{constructor(e){this.Kn=e,this.buffer=new Bs(Ol),this.$n=0}Un(){return++this.$n}Wn(e){const t=[e,this.Un()];if(this.buffer.size<this.Kn)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();Ol(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Dl{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Gn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.zn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return null!==this.Gn}zn(e){ei("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Wi(e)?ei("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await Ui(e)}await this.zn(3e5)}))}}class Ll{constructor(e,t){this.jn=e,this.params=t}calculateTargetCount(e,t){return this.jn.Hn(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return zi.resolve(ts.ae);const n=new Nl(t);return this.jn.forEachTarget(e,(e=>n.Wn(e.sequenceNumber))).next((()=>this.jn.Jn(e,(e=>n.Wn(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.jn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.jn.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(ei("LruGarbageCollector","Garbage collection skipped; disabled"),zi.resolve(gl)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(ei("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),gl):this.Yn(e,t)))}getCacheSize(e){return this.jn.getCacheSize(e)}Yn(e,t){let n,r,i,s,o,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(ei("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(e,n,t)))).next((t=>(i=t,c=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(u=Date.now(),Yr()<=a["in"].DEBUG&&ei("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-l}ms\n\tDetermined least recently used ${r} in `+(o-s)+"ms\n"+`\tRemoved ${i} targets in `+(c-o)+"ms\n"+`\tRemoved ${e} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),zi.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e}))))}}function Pl(e,t){return new Ll(e,t)}
/**
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
 */class Rl{constructor(e,t){this.db=e,this.garbageCollector=Pl(this,t)}Hn(e){const t=this.Zn(e);return this.db.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}Zn(e){let t=0;return this.Jn(e,(e=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Jn(e,t){return this.Xn(e,((e,n)=>t(n)))}addReference(e,t,n){return Ml(e,n)}removeReference(e,t,n){return Ml(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Ml(e,t)}er(e,t){return function(e,t){let n=!1;return El(e).X((r=>_l(e,r,t).next((e=>(e&&(n=!0),zi.resolve(!e)))))).next((()=>n))}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Xn(e,((s,o)=>{if(o<=t){const t=this.er(e,s).next((t=>{if(!t)return i++,n.getEntry(e,s).next((()=>(n.removeEntry(s,Ti.min()),Al(e).delete(function(e){return[0,ss(e.path)]}(s)))))}));r.push(t)}})).next((()=>zi.waitFor(r))).next((()=>n.apply(e))).next((()=>i))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Ml(e,t)}Xn(e,t){const n=Al(e);let r,i=ts.ae;return n.Z({index:"documentTargetsIndex"},(([e,n],{path:s,sequenceNumber:o})=>{0===e?(i!==ts.ae&&t(new Oi(cs(r)),i),i=o,r=s):i=ts.ae})).next((()=>{i!==ts.ae&&t(new Oi(cs(r)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Ml(e,t){return Al(e).put(function(e,t){return{targetId:0,path:ss(e.path),sequenceNumber:t}}(t,e.currentSequenceNumber))}
/**
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
 */class $l{constructor(){this.changes=new Ia((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Co.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?zi.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
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
 */class Fl{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Ul(e).put(n)}removeEntry(e,t,n){return Ul(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],Cu(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.tr(e,n))))}getEntry(e,t){let n=Co.newInvalidDocument(t);return Ul(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(zl(t))},((e,r)=>{n=this.nr(t,r)})).next((()=>n))}rr(e,t){let n={size:0,document:Co.newInvalidDocument(t)};return Ul(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(zl(t))},((e,r)=>{n={document:this.nr(t,r),size:wl(r)}})).next((()=>n))}getEntries(e,t){let n=Ea();return this.ir(e,t,((e,t)=>{const r=this.nr(e,t);n=n.insert(e,r)})).next((()=>n))}sr(e,t){let n=Ea(),r=new $s(Oi.comparator);return this.ir(e,t,((e,t)=>{const i=this.nr(e,t);n=n.insert(e,i),r=r.insert(e,wl(t))})).next((()=>({documents:n,_r:r})))}ir(e,t,n){if(t.isEmpty())return zi.resolve();let r=new Bs(Hl);t.forEach((e=>r=r.add(e)));const i=IDBKeyRange.bound(zl(r.first()),zl(r.last())),s=r.getIterator();let o=s.getNext();return Ul(e).Z({index:"documentKeyIndex",range:i},((e,t,r)=>{const i=Oi.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&Hl(o,i)<0;)n(o,null),o=s.getNext();o&&o.isEqual(i)&&(n(o,t),o=s.hasNext()?s.getNext():null),o?r.W(zl(o)):r.done()})).next((()=>{for(;o;)n(o,null),o=s.hasNext()?s.getNext():null}))}getDocumentsMatchingQuery(e,t,n,r,i){const s=t.path,o=[s.popLast().toArray(),s.lastSegment(),Cu(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ul(e).G(IDBKeyRange.bound(o,a,!0)).next((e=>{null==i||i.incrementDocumentReadCount(e.length);let n=Ea();for(const i of e){const e=this.nr(Oi.fromSegments(i.prefixPath.concat(i.collectionGroup,i.documentId)),i);e.isFoundDocument()&&(ya(t,e)||r.has(e.key))&&(n=n.insert(e.key,e))}return n}))}getAllFromCollectionGroup(e,t,n,r){let i=Ea();const s=ql(t,n),o=ql(t,Fi.max());return Ul(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,o,!0)},((e,t,n)=>{const s=this.nr(Oi.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);i=i.insert(s.key,s),i.size===r&&n.done()})).next((()=>i))}newChangeBuffer(e){return new Bl(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((e=>e.byteSize))}getMetadata(e){return jl(e).get("remoteDocumentGlobalKey").next((e=>(si(!!e),e)))}tr(e,t){return jl(e).put("remoteDocumentGlobalKey",t)}nr(e,t){if(t){const e=Eu(this.serializer,t);if(!e.isNoDocument()||!e.version.isEqual(Ti.min()))return e}return Co.newInvalidDocument(e)}}function Vl(e){return new Fl(e)}class Bl extends $l{constructor(e,t){super(),this.ar=e,this.trackRemovals=t,this.ur=new Ia((e=>e.toString()),((e,t)=>e.isEqual(t)))}applyChanges(e){const t=[];let n=0,r=new Bs(((e,t)=>_i(e.canonicalString(),t.canonicalString())));return this.changes.forEach(((i,s)=>{const o=this.ur.get(i);if(t.push(this.ar.removeEntry(e,i,o.readTime)),s.isValidDocument()){const a=Tu(this.ar.serializer,s);r=r.add(i.path.popLast());const c=wl(a);n+=c-o.size,t.push(this.ar.addEntry(e,i,a))}else if(n-=o.size,this.trackRemovals){const n=Tu(this.ar.serializer,s.convertToNoDocument(Ti.min()));t.push(this.ar.addEntry(e,i,n))}})),r.forEach((n=>{t.push(this.ar.indexManager.addToCollectionParentIndex(e,n))})),t.push(this.ar.updateMetadata(e,n)),zi.waitFor(t)}getFromCache(e,t){return this.ar.rr(e,t).next((e=>(this.ur.set(t,{size:e.size,readTime:e.document.readTime}),e.document)))}getAllFromCache(e,t){return this.ar.sr(e,t).next((({documents:e,_r:t})=>(t.forEach(((t,n)=>{this.ur.set(t,{size:n,readTime:e.get(t).readTime})})),e)))}}function jl(e){return Ls(e,"remoteDocumentGlobal")}function Ul(e){return Ls(e,"remoteDocumentsV14")}function zl(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function ql(e,t){const n=t.documentKey.path.toArray();return[e,Cu(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Hl(e,t){const n=e.path.toArray(),r=t.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=_i(n[s],r[s]),i)return i;return i=_i(n.length,r.length),i||(i=_i(n[n.length-2],r[r.length-2]),i||_i(n[n.length-1],r[r.length-1]))
/**
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
 */
/**
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
 */}class Gl{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
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
 */class Kl{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&sc(n.mutation,e,zs.empty(),Ei.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,La()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=La()){const r=xa();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=Ca();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=xa();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,La())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=Ea();const s=Oa(),o=function(){return Oa()}();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof uc)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),sc(o.mutation,t,o.mutation.getFieldMask(),Ei.now())):s.set(t.key,zs.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Gl(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Oa();let r=new $s(((e,t)=>e-t)),i=La();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||zs.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||La()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Aa();c.forEach((e=>{if(!i.has(e)){const r=rc(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return zi.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n,r){return function(e){return Oi.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ua(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):zi.resolve(xa());let o=-1,a=i;return s.next((t=>zi.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?zi.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,La()))).next((e=>({batchId:o,changes:ka(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Oi(t)).next((e=>{let t=Ca();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let s=Ca();return this.indexManager.getCollectionParents(e,i).next((o=>zi.forEach(o,(o=>{const a=function(e,t){return new sa(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,o.child(i));return this.getDocumentsMatchingCollectionQuery(e,a,n,r).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r)))).next((e=>{i.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,Co.newInvalidDocument(r)))}));let n=Ca();return e.forEach(((e,r)=>{const s=i.get(e);void 0!==s&&sc(s.mutation,r,zs.empty(),Ei.now()),ya(t,r)&&(n=n.insert(e,r))})),n}))}}
/**
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
 */class Wl{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return zi.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,function(e){return{id:e.id,version:e.version,createTime:Kc(e.createTime)}}(t)),zi.resolve()}getNamedQuery(e,t){return zi.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,function(e){return{name:e.name,query:Du(e.bundledQuery),readTime:Kc(e.readTime)}}(t)),zi.resolve()}}
/**
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
 */class Zl{constructor(){this.overlays=new $s(Oi.comparator),this.hr=new Map}getOverlay(e,t){return zi.resolve(this.overlays.get(t))}getOverlays(e,t){const n=xa();return zi.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.ht(e,t,r)})),zi.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.hr.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.hr.delete(n)),zi.resolve()}getOverlaysForCollection(e,t,n){const r=xa(),i=t.length+1,s=new Oi(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return zi.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new $s(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=xa(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=xa(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return zi.resolve(o)}ht(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.hr.get(r.largestBatchId).delete(n.key);this.hr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new vc(t,n));let i=this.hr.get(t);void 0===i&&(i=La(),this.hr.set(t,i)),this.hr.set(t,i.add(n.key))}}
/**
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
 */class Ql{constructor(){this.Pr=new Bs(Jl.Ir),this.Tr=new Bs(Jl.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){const n=new Jl(e,t);this.Pr=this.Pr.add(n),this.Tr=this.Tr.add(n)}dr(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.Ar(new Jl(e,t))}Rr(e,t){e.forEach((e=>this.removeReference(e,t)))}Vr(e){const t=new Oi(new ki([])),n=new Jl(t,e),r=new Jl(t,e+1),i=[];return this.Tr.forEachInRange([n,r],(e=>{this.Ar(e),i.push(e.key)})),i}mr(){this.Pr.forEach((e=>this.Ar(e)))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const t=new Oi(new ki([])),n=new Jl(t,e),r=new Jl(t,e+1);let i=La();return this.Tr.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new Jl(e,0),n=this.Pr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Jl{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return Oi.comparator(e.key,t.key)||_i(e.pr,t.pr)}static Er(e,t){return _i(e.pr,t.pr)||Oi.comparator(e.key,t.key)}}
/**
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
 */class Yl{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new Bs(Jl.Ir)}checkEmpty(e){return zi.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new mc(i,t,n,r);this.mutationQueue.push(s);for(const o of r)this.wr=this.wr.add(new Jl(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return zi.resolve(s)}lookupMutationBatch(e,t){return zi.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.br(n),i=r<0?0:r;return zi.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return zi.resolve(0===this.mutationQueue.length?-1:this.yr-1)}getAllMutationBatches(e){return zi.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Jl(t,0),r=new Jl(t,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([n,r],(e=>{const t=this.Sr(e.pr);i.push(t)})),zi.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Bs(_i);return t.forEach((e=>{const t=new Jl(e,0),r=new Jl(e,Number.POSITIVE_INFINITY);this.wr.forEachInRange([t,r],(e=>{n=n.add(e.pr)}))})),zi.resolve(this.Dr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Oi.isDocumentKey(i)||(i=i.child(""));const s=new Jl(new Oi(i),0);let o=new Bs(_i);return this.wr.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.pr)),!0)}),s),zi.resolve(this.Dr(o))}Dr(e){const t=[];return e.forEach((e=>{const n=this.Sr(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){si(0===this.Cr(t.batchId,"removed")),this.mutationQueue.shift();let n=this.wr;return zi.forEach(t.mutations,(r=>{const i=new Jl(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.wr=n}))}Mn(e){}containsKey(e,t){const n=new Jl(t,0),r=this.wr.firstAfterOrEqual(n);return zi.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,zi.resolve()}Cr(e,t){return this.br(e)}br(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Sr(e){const t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
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
 */class Xl{constructor(e){this.vr=e,this.docs=function(){return new $s(Oi.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.vr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return zi.resolve(n?n.document.mutableCopy():Co.newInvalidDocument(t))}getEntries(e,t){let n=Ea();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Co.newInvalidDocument(e))})),zi.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=Ea();const s=t.path,o=new Oi(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||Vi($i(o),n)<=0||(r.has(o.key)||ya(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return zi.resolve(i)}getAllFromCollectionGroup(e,t,n,r){ii()}Fr(e,t){return zi.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new eh(this)}getSize(e){return zi.resolve(this.size)}}class eh extends $l{constructor(e){super(),this.ar=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.ar.addEntry(e,r)):this.ar.removeEntry(n)})),zi.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}
/**
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
 */class th{constructor(e){this.persistence=e,this.Mr=new Ia((e=>Xo(e)),ea),this.lastRemoteSnapshotVersion=Ti.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Ql,this.targetCount=0,this.Br=Tl.Nn()}forEachTarget(e,t){return this.Mr.forEach(((e,n)=>t(n))),zi.resolve()}getLastRemoteSnapshotVersion(e){return zi.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return zi.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),zi.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Or&&(this.Or=t),zi.resolve()}qn(e){this.Mr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Br=new Tl(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,zi.resolve()}updateTargetData(e,t){return this.qn(t),zi.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,zi.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Mr.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Mr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),zi.waitFor(i).next((()=>r))}getTargetCount(e){return zi.resolve(this.targetCount)}getTargetData(e,t){const n=this.Mr.get(t)||null;return zi.resolve(n)}addMatchingKeys(e,t,n){return this.Nr.dr(t,n),zi.resolve()}removeMatchingKeys(e,t,n){this.Nr.Rr(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),zi.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),zi.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Nr.gr(t);return zi.resolve(n)}containsKey(e,t){return zi.resolve(this.Nr.containsKey(t))}}
/**
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
 */class nh{constructor(e,t){this.Lr={},this.overlays={},this.kr=new ts(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new th(this),this.indexManager=new al,this.remoteDocumentCache=function(e){return new Xl(e)}((e=>this.referenceDelegate.Kr(e))),this.serializer=new Su(t),this.$r=new Wl(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Zl,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Lr[e.toKey()];return n||(n=new Yl(t,this.referenceDelegate),this.Lr[e.toKey()]=n),n}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,n){ei("MemoryPersistence","Starting transaction:",e);const r=new rh(this.kr.next());return this.referenceDelegate.Ur(),n(r).next((e=>this.referenceDelegate.Wr(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Gr(e,t){return zi.or(Object.values(this.Lr).map((n=>()=>n.containsKey(e,t))))}}class rh extends ji{constructor(e){super(),this.currentSequenceNumber=e}}class ih{constructor(e){this.persistence=e,this.zr=new Ql,this.jr=null}static Hr(e){return new ih(e)}get Jr(){if(this.jr)return this.jr;throw ii()}addReference(e,t,n){return this.zr.addReference(n,t),this.Jr.delete(n.toString()),zi.resolve()}removeReference(e,t,n){return this.zr.removeReference(n,t),this.Jr.add(n.toString()),zi.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),zi.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach((e=>this.Jr.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Jr.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Ur(){this.jr=new Set}Wr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return zi.forEach(this.Jr,(n=>{const r=Oi.fromPath(n);return this.Yr(e,r).next((e=>{e||t.removeEntry(r,Ti.min())}))})).next((()=>(this.jr=null,t.apply(e))))}updateLimboDocument(e,t){return this.Yr(e,t).next((e=>{e?this.Jr.delete(t.toString()):this.Jr.add(t.toString())}))}Kr(e){return 0}Yr(e,t){return zi.or([()=>zi.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}
/**
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
 */class sh{constructor(e){this.serializer=e}B(e,t,n,r){const i=new qi("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore("owner")}(e),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",us,{unique:!0}),e.createObjectStore("documentMutations")}(e),oh(e),function(e){e.createObjectStore("remoteDocuments")}(e));let s=zi.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),oh(e)),s=s.next((()=>function(e){const t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Ti.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)}(i)))),n<4&&r>=4&&(0!==n&&(s=s.next((()=>function(e,t){return t.store("mutations").G().next((n=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",us,{unique:!0});const r=t.store("mutations"),i=n.map((e=>r.put(e)));return zi.waitFor(i)}))}(e,i)))),s=s.next((()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)}))),n<5&&r>=5&&(s=s.next((()=>this.Xr(i)))),n<6&&r>=6&&(s=s.next((()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.ei(i))))),n<7&&r>=7&&(s=s.next((()=>this.ti(i)))),n<8&&r>=8&&(s=s.next((()=>this.ni(e,i)))),n<9&&r>=9&&(s=s.next((()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)}))),n<10&&r>=10&&(s=s.next((()=>this.ri(i)))),n<11&&r>=11&&(s=s.next((()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)}))),n<12&&r>=12&&(s=s.next((()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:Es});t.createIndex("collectionPathOverlayIndex",Ts,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",Cs,{unique:!1})}(e)}))),n<13&&r>=13&&(s=s.next((()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:fs});t.createIndex("documentKeyIndex",ps),t.createIndex("collectionGroupIndex",ms)}(e))).next((()=>this.ii(e,i))).next((()=>e.deleteObjectStore("remoteDocuments")))),n<14&&r>=14&&(s=s.next((()=>this.si(e,i)))),n<15&&r>=15&&(s=s.next((()=>function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:bs}).createIndex("sequenceNumberIndex",_s,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:Is}).createIndex("documentKeyIndex",Ss,{unique:!1})}(e)))),s}ei(e){let t=0;return e.store("remoteDocuments").Z(((e,n)=>{t+=wl(n)})).next((()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)}))}Xr(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.G().next((t=>zi.forEach(t,(t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.G("userMutationsIndex",r).next((n=>zi.forEach(n,(n=>{si(n.userId===t.userId);const r=Au(this.serializer,n);return yl(e,t.userId,r).next((()=>{}))}))))}))))}ti(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next((e=>{const r=[];return n.Z(((n,i)=>{const s=new ki(n),o=function(e){return[0,ss(e)]}(s);r.push(t.get(o).next((n=>n?zi.resolve():(n=>t.put({targetId:0,path:ss(n),sequenceNumber:e.highestListenSequenceNumber}))(s))))})).next((()=>zi.waitFor(r)))}))}ni(e,t){e.createObjectStore("collectionParents",{keyPath:ws});const n=t.store("collectionParents"),r=new cl,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:ss(r)})}};return t.store("remoteDocuments").Z({Y:!0},((e,t)=>{const n=new ki(e);return i(n.popLast())})).next((()=>t.store("documentMutations").Z({Y:!0},(([e,t,n],r)=>{const s=cs(t);return i(s.popLast())}))))}ri(e){const t=e.store("targets");return t.Z(((e,n)=>{const r=Ou(n),i=Nu(this.serializer,r);return t.put(i)}))}ii(e,t){const n=t.store("remoteDocuments"),r=[];return n.Z(((e,n)=>{const i=t.store("remoteDocumentsV14"),s=function(e){return e.document?new Oi(ki.fromString(e.document.name).popFirst(5)):e.noDocument?Oi.fromSegments(e.noDocument.path):e.unknownDocument?Oi.fromSegments(e.unknownDocument.path):ii()}
/**
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
 */(n).path.toArray(),o={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(o))})).next((()=>zi.waitFor(r)))}si(e,t){const n=t.store("mutations"),r=Vl(this.serializer),i=new nh(ih.Hr,this.serializer.ct);return n.G().next((e=>{const n=new Map;return e.forEach((e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:La();Au(this.serializer,e).keys().forEach((e=>r=r.add(e))),n.set(e.userId,r)})),zi.forEach(n,((e,n)=>{const s=new Zr(n),o=Vu.lt(this.serializer,s),a=i.getIndexManager(s),c=bl.lt(s,this.serializer,a,i.referenceDelegate);return new Kl(r,c,o,a).recalculateAndSaveOverlaysForDocumentKeys(new Ds(t,ts.ae),e).next()}))}))}}function oh(e){e.createObjectStore("targetDocuments",{keyPath:vs}).createIndex("documentTargetsIndex",ys,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",gs,{unique:!0}),e.createObjectStore("targetGlobal")}const ah="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class ch{constructor(e,t,n,r,i,s,o,a,c,u,l=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.oi=i,this.window=s,this.document=o,this._i=c,this.ai=u,this.ui=l,this.kr=null,this.qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.li=null,this.hi=null,this.Pi=Number.NEGATIVE_INFINITY,this.Ii=e=>Promise.resolve(),!ch.C())throw new ui(ci.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Rl(this,r),this.Ti=t+"main",this.serializer=new Su(a),this.Ei=new Hi(this.Ti,this.ui,new sh(this.serializer)),this.Qr=new Cl(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Vl(this.serializer),this.$r=new Mu,this.window&&this.window.localStorage?this.di=this.window.localStorage:(this.di=null,!1===u&&ti("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ai().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new ui(ci.FAILED_PRECONDITION,ah);return this.Ri(),this.Vi(),this.mi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.Qr.getHighestSequenceNumber(e)))})).then((e=>{this.kr=new ts(e,this._i)})).then((()=>{this.qr=!0})).catch((e=>(this.Ei&&this.Ei.close(),Promise.reject(e))))}fi(e){return this.Ii=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ei.k((async t=>{null===t.newVersion&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.oi.enqueueAndForget((async()=>{this.started&&await this.Ai()})))}Ai(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>lh(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.gi(e).next((e=>{e||(this.isPrimary=!1,this.oi.enqueueRetryable((()=>this.Ii(!1))))}))})).next((()=>this.pi(e))).next((t=>this.isPrimary&&!t?this.yi(e).next((()=>!1)):!!t&&this.wi(e).next((()=>!0)))))).catch((e=>{if(Wi(e))return ei("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return ei("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.oi.enqueueRetryable((()=>this.Ii(e))),this.isPrimary=e}))}gi(e){return uh(e).get("owner").next((e=>zi.resolve(this.Si(e))))}bi(e){return lh(e).delete(this.clientId)}async Di(){if(this.isPrimary&&!this.Ci(this.Pi,18e5)){this.Pi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const t=Ls(e,"clientMetadata");return t.G().next((e=>{const n=this.vi(e,18e5),r=e.filter((e=>-1===n.indexOf(e)));return zi.forEach(r,(e=>t.delete(e.clientId))).next((()=>r))}))})).catch((()=>[]));if(this.di)for(const t of e)this.di.removeItem(this.Fi(t.clientId))}}mi(){this.hi=this.oi.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.Ai().then((()=>this.Di())).then((()=>this.mi()))))}Si(e){return!!e&&e.ownerId===this.clientId}pi(e){return this.ai?zi.resolve(!0):uh(e).get("owner").next((t=>{if(null!==t&&this.Ci(t.leaseTimestampMs,5e3)&&!this.Mi(t.ownerId)){if(this.Si(t)&&this.networkEnabled)return!0;if(!this.Si(t)){if(!t.allowTabSynchronization)throw new ui(ci.FAILED_PRECONDITION,ah);return!1}}return!(!this.networkEnabled||!this.inForeground)||lh(e).G().next((e=>void 0===this.vi(e,5e3).find((e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))))})).next((e=>(this.isPrimary!==e&&ei("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.qr=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Oi(),this.Ni(),await this.Ei.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(e=>{const t=new Ds(e,ts.ae);return this.yi(t).next((()=>this.bi(t)))})),this.Ei.close(),this.Bi()}vi(e,t){return e.filter((e=>this.Ci(e.updateTimeMs,t)&&!this.Mi(e.clientId)))}Li(){return this.runTransaction("getActiveClients","readonly",(e=>lh(e).G().next((e=>this.vi(e,18e5).map((e=>e.clientId))))))}get started(){return this.qr}getMutationQueue(e,t){return bl.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new ll(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Vu.lt(this.serializer,e)}getBundleCache(){return this.$r}runTransaction(e,t,n){ei("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",i=function(e){return 15===e?Ns:14===e?Os:13===e?As:12===e?xs:11===e?ks:void ii()}(this.ui);let s;return this.Ei.runTransaction(e,r,i,(r=>(s=new Ds(r,this.kr?this.kr.next():ts.ae),"readwrite-primary"===t?this.gi(s).next((e=>!!e||this.pi(s))).next((t=>{if(!t)throw ti(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.oi.enqueueRetryable((()=>this.Ii(!1))),new ui(ci.FAILED_PRECONDITION,Bi);return n(s)})).next((e=>this.wi(s).next((()=>e)))):this.ki(s).next((()=>n(s)))))).then((e=>(s.raiseOnCommittedEvent(),e)))}ki(e){return uh(e).get("owner").next((e=>{if(null!==e&&this.Ci(e.leaseTimestampMs,5e3)&&!this.Mi(e.ownerId)&&!this.Si(e)&&!(this.ai||this.allowTabSynchronization&&e.allowTabSynchronization))throw new ui(ci.FAILED_PRECONDITION,ah)}))}wi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return uh(e).put("owner",t)}static C(){return Hi.C()}yi(e){const t=uh(e);return t.get("owner").next((e=>this.Si(e)?(ei("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):zi.resolve()))}Ci(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(ti(`Detected an update time that is in the future: ${e} > ${n}`),!1))}Ri(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.li=()=>{this.oi.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.Ai())))},this.document.addEventListener("visibilitychange",this.li),this.inForeground="visible"===this.document.visibilityState)}Oi(){this.li&&(this.document.removeEventListener("visibilitychange",this.li),this.li=null)}Vi(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.ci=()=>{this.xi();const e=/(?:Version|Mobile)\/1[456]/;(0,c.G6)()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.oi.enterRestrictedMode(!0),this.oi.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.ci))}Ni(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Mi(e){var t;try{const n=null!==(null===(t=this.di)||void 0===t?void 0:t.getItem(this.Fi(e)));return ei("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return ti("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}xi(){if(this.di)try{this.di.setItem(this.Fi(this.clientId),String(Date.now()))}catch(e){ti("Failed to set zombie client id.",e)}}Bi(){if(this.di)try{this.di.removeItem(this.Fi(this.clientId))}catch(e){}}Fi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function uh(e){return Ls(e,"owner")}function lh(e){return Ls(e,"clientMetadata")}function hh(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
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
 */}class dh{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.qi=n,this.Qi=r}static Ki(e,t){let n=La(),r=La();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new dh(e,t.fromCache,n,r)}}
/**
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
 */class fh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
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
 */class ph{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=8}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.ji(e,t).next((e=>{i.result=e})).next((()=>{if(!i.result)return this.Hi(e,t,r,n).next((e=>{i.result=e}))})).next((()=>{if(i.result)return;const n=new fh;return this.Ji(e,t,n).next((r=>{if(i.result=r,this.Ui)return this.Yi(e,t,n,r.size)}))})).next((()=>i.result))}Yi(e,t,n,r){return n.documentReadCount<this.Wi?(Yr()<=a["in"].DEBUG&&ei("QueryEngine","SDK will not create cache indexes for query:",va(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),zi.resolve()):(Yr()<=a["in"].DEBUG&&ei("QueryEngine","Query:",va(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Gi*r?(Yr()<=a["in"].DEBUG&&ei("QueryEngine","The SDK decides to create cache indexes for query:",va(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ha(t))):zi.resolve())}ji(e,t){if(ca(t))return zi.resolve(null);let n=ha(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=pa(t,null,"F"),n=ha(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=La(...r);return this.zi.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.Zi(t,r);return this.Xi(t,s,i,n.readTime)?this.ji(e,pa(t,null,"F")):this.es(e,s,t,n)}))))})))))}Hi(e,t,n,r){return ca(t)||r.isEqual(Ti.min())?zi.resolve(null):this.zi.getDocuments(e,n).next((i=>{const s=this.Zi(t,i);return this.Xi(t,s,n,r)?zi.resolve(null):(Yr()<=a["in"].DEBUG&&ei("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),va(t)),this.es(e,s,t,Mi(r,-1)).next((e=>e)))}))}Zi(e,t){let n=new Bs(ba(e));return t.forEach(((t,r)=>{ya(e,r)&&(n=n.add(r))})),n}Xi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ji(e,t,n){return Yr()<=a["in"].DEBUG&&ei("QueryEngine","Using full collection scan to execute query:",va(t)),this.zi.getDocumentsMatchingQuery(e,t,Fi.min(),n)}es(e,t,n,r){return this.zi.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
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
 */class mh{constructor(e,t,n,r){this.persistence=e,this.ts=t,this.serializer=r,this.ns=new $s(_i),this.rs=new Ia((e=>Xo(e)),ea),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(n)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Kl(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.ns)))}}function gh(e,t,n,r){return new mh(e,t,n,r)}async function vh(e,t){const n=ai(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n._s(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=La();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({us:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function yh(e,t){const n=ai(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=zi.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);si(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=La();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function wh(e){const t=ai(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Qr.getLastRemoteSnapshotVersion(e)))}function bh(e,t){const n=ai(e),r=t.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Qr.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Qr.addMatchingKeys(e,s.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?u=u.withResumeToken(Gs.EMPTY_BYTE_STRING,Ti.min()).withLastLimboFreeSnapshotVersion(Ti.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.Qr.updateTargetData(e,u))}));let a=Ea(),c=La();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(_h(e,s,t.documentUpdates).next((e=>{a=e.cs,c=e.ls}))),!r.isEqual(Ti.min())){const t=n.Qr.getLastRemoteSnapshotVersion(e).next((t=>n.Qr.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return zi.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.ns=i,e)))}function _h(e,t,n){let r=La(),i=La();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Ea();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(Ti.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):ei("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{cs:r,ls:i}}))}function Ih(e,t){const n=ai(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function Sh(e,t){const n=ai(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Qr.getTargetData(e,t).next((i=>i?(r=i,zi.resolve(r)):n.Qr.allocateTargetId(e).next((i=>(r=new Iu(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Qr.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.ns.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ns=n.ns.insert(e.targetId,e),n.rs.set(t,e.targetId)),e}))}async function Eh(e,t,n){const r=ai(e),i=r.ns.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!Wi(e))throw e;ei("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.ns=r.ns.remove(t),r.rs.delete(i.target)}function Th(e,t,n){const r=ai(e);let i=Ti.min(),s=La();return r.persistence.runTransaction("Execute query","readwrite",(e=>function(e,t,n){const r=ai(e),i=r.rs.get(n);return void 0!==i?zi.resolve(r.ns.get(i)):r.Qr.getTargetData(t,n)}(r,e,ha(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.ts.getDocumentsMatchingQuery(e,t,n?i:Ti.min(),n?s:La()))).next((e=>(xh(r,wa(t),e),{documents:e,hs:s})))))}function Ch(e,t){const n=ai(e),r=ai(n.Qr),i=n.ns.get(t);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",(e=>r.ut(e,t).next((e=>e?e.target:null))))}function kh(e,t){const n=ai(e),r=n.ss.get(t)||Ti.min();return n.persistence.runTransaction("Get new document changes","readonly",(e=>n.os.getAllFromCollectionGroup(e,t,Mi(r,-1),Number.MAX_SAFE_INTEGER))).then((e=>(xh(n,t,e),e)))}function xh(e,t,n){let r=e.ss.get(t)||Ti.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.ss.set(t,r)}async function Ah(e,t,n,r){const i=ai(e);let s=La(),o=Ea();for(const u of n){const e=t.Ps(u.metadata.name);u.document&&(s=s.add(e));const n=t.Is(u);n.setReadTime(t.Ts(u.metadata.readTime)),o=o.insert(e,n)}const a=i.os.newChangeBuffer({trackRemovals:!0}),c=await Sh(i,function(e){return ha(aa(ki.fromString(`__bundle__/docs/${e}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",(e=>_h(e,a,o).next((t=>(a.apply(e),t))).next((t=>i.Qr.removeMatchingKeysForTargetId(e,c.targetId).next((()=>i.Qr.addMatchingKeys(e,s,c.targetId))).next((()=>i.localDocuments.getLocalViewOfDocuments(e,t.cs,t.ls))).next((()=>t.cs))))))}async function Oh(e,t,n=La()){const r=await Sh(e,ha(Du(t.bundledQuery))),i=ai(e);return i.persistence.runTransaction("Save named query","readwrite",(e=>{const s=Kc(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i.$r.saveNamedQuery(e,t);const o=r.withResumeToken(Gs.EMPTY_BYTE_STRING,s);return i.ns=i.ns.insert(o.targetId,o),i.Qr.updateTargetData(e,o).next((()=>i.Qr.removeMatchingKeysForTargetId(e,r.targetId))).next((()=>i.Qr.addMatchingKeys(e,n,r.targetId))).next((()=>i.$r.saveNamedQuery(e,t)))}))}function Nh(e,t){return`firestore_clients_${e}_${t}`}function Dh(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function Lh(e,t){return`firestore_targets_${e}_${t}`}class Ph{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static Es(e,t,n){const r=JSON.parse(n);let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code,s&&(i=new ui(r.error.code,r.error.message))),s?new Ph(e,t,r.state,i):(ti("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Rh{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Es(e,t){const n=JSON.parse(t);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new ui(n.error.code,n.error.message))),i?new Rh(e,n.state,r):(ti("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Mh{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Es(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=Ra();for(let s=0;r&&s<n.activeTargetIds.length;++s)r=is(n.activeTargetIds[s]),i=i.add(n.activeTargetIds[s]);return r?new Mh(e,i):(ti("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class $h{constructor(e,t){this.clientId=e,this.onlineState=t}static Es(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new $h(t.clientId,t.onlineState):(ti("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Fh{constructor(){this.activeTargetIds=Ra()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Vh{constructor(e,t,n,r,i){this.window=e,this.oi=t,this.persistenceKey=n,this.Vs=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.fs=this.gs.bind(this),this.ps=new $s(_i),this.started=!1,this.ys=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.ws=Nh(this.persistenceKey,this.Vs),this.Ss=function(e){return`firestore_sequence_number_${e}`}
/**
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
 */(this.persistenceKey),this.ps=this.ps.insert(this.Vs,new Fh),this.bs=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.Ds=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.Cs=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.vs=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this.Fs=function(e){return`firestore_bundle_loaded_v2_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this.fs)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Li();for(const n of e){if(n===this.Vs)continue;const e=this.getItem(Nh(this.persistenceKey,n));if(e){const t=Mh.Es(n,e);t&&(this.ps=this.ps.insert(t.clientId,t))}}this.Ms();const t=this.storage.getItem(this.vs);if(t){const e=this.xs(t);e&&this.Os(e)}for(const n of this.ys)this.gs(n);this.ys=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ss,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ns(this.ps)}isActiveQueryTarget(e){let t=!1;return this.ps.forEach(((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.Bs(e,"pending")}updateMutationState(e,t,n){this.Bs(e,t,n),this.Ls(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(Lh(this.persistenceKey,e));if(n){const r=Rh.Es(e,n);r&&(t=r.state)}}return this.ks.As(e),this.Ms(),t}removeLocalQueryTarget(e){this.ks.Rs(e),this.Ms()}isLocalQueryTarget(e){return this.ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Lh(this.persistenceKey,e))}updateQueryState(e,t,n){this.qs(e,t,n)}handleUserChange(e,t,n){t.forEach((e=>{this.Ls(e)})),this.currentUser=e,n.forEach((e=>{this.addPendingMutation(e)}))}setOnlineState(e){this.Qs(e)}notifyBundleLoaded(e){this.Ks(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.fs),this.removeItem(this.ws),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return ei("SharedClientState","READ",e,t),t}setItem(e,t){ei("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){ei("SharedClientState","REMOVE",e),this.storage.removeItem(e)}gs(e){const t=e;if(t.storageArea===this.storage){if(ei("SharedClientState","EVENT",t.key,t.newValue),t.key===this.ws)return void ti("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.oi.enqueueRetryable((async()=>{if(this.started){if(null!==t.key)if(this.bs.test(t.key)){if(null==t.newValue){const e=this.$s(t.key);return this.Us(e,null)}{const e=this.Ws(t.key,t.newValue);if(e)return this.Us(e.clientId,e)}}else if(this.Ds.test(t.key)){if(null!==t.newValue){const e=this.Gs(t.key,t.newValue);if(e)return this.zs(e)}}else if(this.Cs.test(t.key)){if(null!==t.newValue){const e=this.js(t.key,t.newValue);if(e)return this.Hs(e)}}else if(t.key===this.vs){if(null!==t.newValue){const e=this.xs(t.newValue);if(e)return this.Os(e)}}else if(t.key===this.Ss){const e=function(e){let t=ts.ae;if(null!=e)try{const n=JSON.parse(e);si("number"==typeof n),t=n}catch(e){ti("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==ts.ae&&this.sequenceNumberHandler(e)}else if(t.key===this.Fs){const e=this.Js(t.newValue);await Promise.all(e.map((e=>this.syncEngine.Ys(e))))}}else this.ys.push(t)}))}}get ks(){return this.ps.get(this.Vs)}Ms(){this.setItem(this.ws,this.ks.ds())}Bs(e,t,n){const r=new Ph(this.currentUser,e,t,n),i=Dh(this.persistenceKey,this.currentUser,e);this.setItem(i,r.ds())}Ls(e){const t=Dh(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Qs(e){const t={clientId:this.Vs,onlineState:e};this.storage.setItem(this.vs,JSON.stringify(t))}qs(e,t,n){const r=Lh(this.persistenceKey,e),i=new Rh(e,t,n);this.setItem(r,i.ds())}Ks(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Fs,t)}$s(e){const t=this.bs.exec(e);return t?t[1]:null}Ws(e,t){const n=this.$s(e);return Mh.Es(n,t)}Gs(e,t){const n=this.Ds.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return Ph.Es(new Zr(i),r,t)}js(e,t){const n=this.Cs.exec(e),r=Number(n[1]);return Rh.Es(r,t)}xs(e){return $h.Es(e)}Js(e){return JSON.parse(e)}async zs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Zs(e.batchId,e.state,e.error);ei("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Hs(e){return this.syncEngine.Xs(e.targetId,e.state,e.error)}Us(e,t){const n=t?this.ps.insert(e,t):this.ps.remove(e),r=this.Ns(this.ps),i=this.Ns(n),s=[],o=[];return i.forEach((e=>{r.has(e)||s.push(e)})),r.forEach((e=>{i.has(e)||o.push(e)})),this.syncEngine.eo(s,o).then((()=>{this.ps=n}))}Os(e){this.ps.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ns(e){let t=Ra();return e.forEach(((e,n)=>{t=t.unionWith(n.activeTargetIds)})),t}}class Bh{constructor(){this.no=new Fh,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,n){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Fh,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
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
 */class jh{io(e){}shutdown(){}}
/**
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
 */class Uh{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){ei("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){ei("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
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
 */let zh=null;function qh(){return null===zh?zh=function(){return 268435456+Math.round(2147483648*Math.random())}():zh++,"0x"+zh.toString(16)
/**
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
 */}const Hh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
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
 */class Gh{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}
/**
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
 */const Kh="WebChannelConnection";class Wh extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.fo=t+"://"+e.host,this.po=`projects/${n}/databases/${r}`,this.yo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get wo(){return!1}So(e,t,n,r,i){const s=qh(),o=this.bo(e,t);ei("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(a,r,i),this.Co(e,o,a,n).then((t=>(ei("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw ni("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}vo(e,t,n,r,i,s){return this.So(e,t,n,r,i)}Do(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}bo(e,t){const n=Hh[e];return`${this.fo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,t,n,r){const i=qh();return new Promise(((s,o)=>{const a=new Hr;a.setWithCredentials(!0),a.listenOnce(jr.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Br.NO_ERROR:const t=a.getResponseJson();ei(Kh,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case Br.TIMEOUT:ei(Kh,`RPC '${e}' ${i} timed out`),o(new ui(ci.DEADLINE_EXCEEDED,"Request time out"));break;case Br.HTTP_ERROR:const n=a.getStatus();if(ei(Kh,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(ci).indexOf(t)>=0?t:ci.UNKNOWN}(t.status);o(new ui(e,t.message))}else o(new ui(ci.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new ui(ci.UNAVAILABLE,"Connection failed."));break;default:ii()}}finally{ei(Kh,`RPC '${e}' ${i} completed.`)}}));const c=JSON.stringify(r);ei(Kh,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",c,n,15)}))}Fo(e,t,n){const r=qh(),i=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Fr(),o=Vr(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Do(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const u=i.join("");ei(Kh,`Creating RPC '${e}' stream ${r}: ${u}`,a);const l=s.createWebChannel(u,a);let h=!1,d=!1;const f=new Gh({lo:t=>{d?ei(Kh,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(h||(ei(Kh,`Opening RPC '${e}' stream ${r} transport.`),l.open(),h=!0),ei(Kh,`RPC '${e}' stream ${r} sending:`,t),l.send(t))},ho:()=>l.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return p(l,qr.EventType.OPEN,(()=>{d||ei(Kh,`RPC '${e}' stream ${r} transport opened.`)})),p(l,qr.EventType.CLOSE,(()=>{d||(d=!0,ei(Kh,`RPC '${e}' stream ${r} transport closed`),f.Vo())})),p(l,qr.EventType.ERROR,(t=>{d||(d=!0,ni(Kh,`RPC '${e}' stream ${r} transport errored:`,t),f.Vo(new ui(ci.UNAVAILABLE,"The operation could not be completed")))})),p(l,qr.EventType.MESSAGE,(t=>{var n;if(!d){const i=t.data[0];si(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){ei(Kh,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=wc[e];if(void 0!==t)return Ic(t)}(t),i=o.message;void 0===n&&(n=ci.INTERNAL,i="Unknown error status: "+t+" with message "+o.message),d=!0,f.Vo(new ui(n,i)),l.close()}else ei(Kh,`RPC '${e}' stream ${r} received:`,i),f.mo(i)}})),p(o,Ur.STAT_EVENT,(t=>{t.stat===zr.PROXY?ei(Kh,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===zr.NOPROXY&&ei(Kh,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.Ro()}),0),f}}
/**
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
 */
/**
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
 */function Zh(){return"undefined"!=typeof window?window:null}function Qh(){return"undefined"!=typeof document?document:null}
/**
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
 */function Jh(e){return new Uc(e,!0)}
/**
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
 */class Yh{constructor(e,t,n=1e3,r=1.5,i=6e4){this.oi=e,this.timerId=t,this.Mo=n,this.xo=r,this.Oo=i,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const t=Math.floor(this.No+this.Qo()),n=Math.max(0,Date.now()-this.Lo),r=Math.max(0,t-n);r>0&&ei("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.No} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,r,(()=>(this.Lo=Date.now(),e()))),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){null!==this.Bo&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){null!==this.Bo&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}
/**
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
 */class Xh{constructor(e,t,n,r,i,s,o,a){this.oi=e,this.$o=n,this.Uo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new Yh(e,t)}Ho(){return 1===this.state||5===this.state||this.Jo()}Jo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&null===this.Go&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,(()=>this.e_())))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,t){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,4!==e?this.jo.reset():t&&t.code===ci.RESOURCE_EXHAUSTED?(ti(t.toString()),ti("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):t&&t.code===ci.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(t)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),t=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Wo===t&&this.o_(e,n)}),(t=>{e((()=>{const e=new ui(ci.UNKNOWN,"Fetching auth token failed: "+t.message);return this.__(e)}))}))}o_(e,t){const n=this.s_(this.Wo);this.stream=this.a_(e,t),this.stream.Po((()=>{n((()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,(()=>(this.Jo()&&(this.state=3),Promise.resolve()))),this.listener.Po())))})),this.stream.To((e=>{n((()=>this.__(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Yo(){this.state=5,this.jo.qo((async()=>{this.state=0,this.start()}))}__(e){return ei("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return t=>{this.oi.enqueueAndForget((()=>this.Wo===e?t():(ei("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class ed extends Xh{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}a_(e,t){return this.connection.Fo("Listen",e,t)}onMessage(e){this.jo.reset();const t=su(this.serializer,e),n=function(e){if(!("targetChange"in e))return Ti.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Ti.min():t.readTime?Kc(t.readTime):Ti.min()}(e);return this.listener.u_(t,n)}c_(e){const t={};t.database=eu(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=ta(r)?{documents:uu(e,r)}:{query:lu(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Hc(e,t.resumeToken);const r=zc(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(Ti.min())>0){n.readTime=qc(e,t.snapshotVersion.toTimestamp());const r=zc(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=du(this.serializer,e);n&&(t.labels=n),this.t_(t)}l_(e){const t={};t.database=eu(this.serializer),t.removeTarget=e,this.t_(t)}}class td extends Xh{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,t){return this.connection.Fo("Write",e,t)}onMessage(e){if(si(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const t=cu(e.writeResults,e.commitTime),n=Kc(e.commitTime);return this.listener.T_(n,t)}return si(!e.writeResults||0===e.writeResults.length),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=eu(this.serializer),this.t_(e)}I_(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>ou(this.serializer,e)))};this.t_(t)}}
/**
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
 */class nd extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.A_=!1}R_(){if(this.A_)throw new ui(ci.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,n){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.So(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===ci.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ui(ci.UNKNOWN,e.toString())}))}vo(e,t,n,r){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.vo(e,t,n,i,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===ci.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ui(ci.UNKNOWN,e.toString())}))}terminate(){this.A_=!0}}class rd{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){0===this.m_&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve()))))}S_(e){"Online"===this.state?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,"Online"===e&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(ti(t),this.g_=!1):ei("OnlineStateTracker",t)}b_(){null!==this.f_&&(this.f_.cancel(),this.f_=null)}}
/**
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
 */class id{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io((e=>{n.enqueueAndForget((async()=>{fd(this)&&(ei("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=ai(e);t.v_.add(4),await od(t),t.x_.set("Unknown"),t.v_.delete(4),await sd(t)}(this))}))})),this.x_=new rd(n,r)}}async function sd(e){if(fd(e))for(const t of e.F_)await t(!0)}async function od(e){for(const t of e.F_)await t(!1)}function ad(e,t){const n=ai(e);n.C_.has(t.targetId)||(n.C_.set(t.targetId,t),dd(n)?hd(n):Nd(n).Jo()&&ud(n,t))}function cd(e,t){const n=ai(e),r=Nd(n);n.C_.delete(t),r.Jo()&&ld(n,t),0===n.C_.size&&(r.Jo()?r.Xo():fd(n)&&n.x_.set("Unknown"))}function ud(e,t){if(e.O_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Ti.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Nd(e).c_(t)}function ld(e,t){e.O_.Ne(t),Nd(e).l_(t)}function hd(e){e.O_=new Mc({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>e.C_.get(t)||null,rt:()=>e.datastore.serializer.databaseId}),Nd(e).start(),e.x_.p_()}function dd(e){return fd(e)&&!Nd(e).Ho()&&e.C_.size>0}function fd(e){return 0===ai(e).v_.size}function pd(e){e.O_=void 0}async function md(e){e.C_.forEach(((t,n)=>{ud(e,t)}))}async function gd(e,t){pd(e),dd(e)?(e.x_.S_(t),hd(e)):e.x_.set("Unknown")}async function vd(e,t,n){if(e.x_.set("Online"),t instanceof Pc&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.C_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.C_.delete(r),e.O_.removeTarget(r))}(e,t)}catch(n){ei("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await yd(e,n)}else if(t instanceof Dc?e.O_.Ue(t):t instanceof Lc?e.O_.Ye(t):e.O_.ze(t),!n.isEqual(Ti.min()))try{const t=await wh(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.O_.st(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.C_.get(r);i&&e.C_.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.C_.get(t);if(!r)return;e.C_.set(t,r.withResumeToken(Gs.EMPTY_BYTE_STRING,r.snapshotVersion)),ld(e,t);const i=new Iu(r.target,t,n,r.sequenceNumber);ud(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){ei("RemoteStore","Failed to raise snapshot:",t),await yd(e,t)}}async function yd(e,t,n){if(!Wi(t))throw t;e.v_.add(1),await od(e),e.x_.set("Offline"),n||(n=()=>wh(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{ei("RemoteStore","Retrying IndexedDB access"),await n(),e.v_.delete(1),await sd(e)}))}function wd(e,t){return t().catch((n=>yd(e,n,t)))}async function bd(e){const t=ai(e),n=Dd(t);let r=t.D_.length>0?t.D_[t.D_.length-1].batchId:-1;for(;_d(t);)try{const e=await Ih(t.localStore,r);if(null===e){0===t.D_.length&&n.Xo();break}r=e.batchId,Id(t,e)}catch(e){await yd(t,e)}Sd(t)&&Ed(t)}function _d(e){return fd(e)&&e.D_.length<10}function Id(e,t){e.D_.push(t);const n=Dd(e);n.Jo()&&n.P_&&n.I_(t.mutations)}function Sd(e){return fd(e)&&!Dd(e).Ho()&&e.D_.length>0}function Ed(e){Dd(e).start()}async function Td(e){Dd(e).d_()}async function Cd(e){const t=Dd(e);for(const n of e.D_)t.I_(n.mutations)}async function kd(e,t,n){const r=e.D_.shift(),i=gc.from(r,t,n);await wd(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await bd(e)}async function xd(e,t){t&&Dd(e).P_&&await async function(e,t){if(function(e){return _c(e)&&e!==ci.ABORTED}(t.code)){const n=e.D_.shift();Dd(e).Zo(),await wd(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await bd(e)}}(e,t),Sd(e)&&Ed(e)}async function Ad(e,t){const n=ai(e);n.asyncQueue.verifyOperationInProgress(),ei("RemoteStore","RemoteStore received new credentials");const r=fd(n);n.v_.add(3),await od(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.v_.delete(3),await sd(n)}async function Od(e,t){const n=ai(e);t?(n.v_.delete(2),await sd(n)):t||(n.v_.add(2),await od(n),n.x_.set("Unknown"))}function Nd(e){return e.N_||(e.N_=function(e,t,n){const r=ai(e);return r.R_(),new ed(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
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
 */}(e.datastore,e.asyncQueue,{Po:md.bind(null,e),To:gd.bind(null,e),u_:vd.bind(null,e)}),e.F_.push((async t=>{t?(e.N_.Zo(),dd(e)?hd(e):e.x_.set("Unknown")):(await e.N_.stop(),pd(e))}))),e.N_}function Dd(e){return e.B_||(e.B_=function(e,t,n){const r=ai(e);return r.R_(),new td(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Po:Td.bind(null,e),To:xd.bind(null,e),E_:Cd.bind(null,e),T_:kd.bind(null,e)}),e.F_.push((async t=>{t?(e.B_.Zo(),await bd(e)):(await e.B_.stop(),e.D_.length>0&&(ei("RemoteStore",`Stopping write stream with ${e.D_.length} pending writes`),e.D_=[]))}))),e.B_
/**
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
 */}class Ld{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new li,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new Ld(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ui(ci.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Pd(e,t){if(ti("AsyncQueue",`${t}: ${e}`),Wi(e))return new ui(ci.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
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
 */class Rd{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Oi.comparator(t.key,n.key):(e,t)=>Oi.comparator(e.key,t.key),this.keyedMap=Ca(),this.sortedSet=new $s(this.comparator)}static emptySet(e){return new Rd(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Rd))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Rd;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
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
 */class Md{constructor(){this.L_=new $s(Oi.comparator)}track(e){const t=e.doc.key,n=this.L_.get(t);n?0!==e.type&&3===n.type?this.L_=this.L_.insert(t,e):3===e.type&&1!==n.type?this.L_=this.L_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.L_=this.L_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.L_=this.L_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.L_=this.L_.remove(t):1===e.type&&2===n.type?this.L_=this.L_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.L_=this.L_.insert(t,{type:2,doc:e.doc}):ii():this.L_=this.L_.insert(t,e)}k_(){const e=[];return this.L_.inorderTraversal(((t,n)=>{e.push(n)})),e}}class $d{constructor(e,t,n,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new $d(e,t,Rd.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ma(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
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
 */class Fd{constructor(){this.q_=void 0,this.listeners=[]}}class Vd{constructor(){this.queries=new Ia((e=>ga(e)),ma),this.onlineState="Unknown",this.Q_=new Set}}async function Bd(e,t){const n=ai(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Fd),i)try{s.q_=await n.onListen(r)}catch(e){const n=Pd(e,`Initialization of query '${va(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.K_(n.onlineState),s.q_&&t.U_(s.q_)&&qd(n)}async function jd(e,t){const n=ai(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Ud(e,t){const n=ai(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.U_(i)&&(r=!0);t.q_=i}}r&&qd(n)}function zd(e,t,n){const r=ai(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function qd(e){e.Q_.forEach((e=>{e.next()}))}class Hd{constructor(e,t,n){this.query=e,this.W_=t,this.G_=!1,this.z_=null,this.onlineState="Unknown",this.options=n||{}}U_(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new $d(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.G_?this.j_(e)&&(this.W_.next(e),t=!0):this.H_(e,this.onlineState)&&(this.J_(e),t=!0),this.z_=e,t}onError(e){this.W_.error(e)}K_(e){this.onlineState=e;let t=!1;return this.z_&&!this.G_&&this.H_(this.z_,e)&&(this.J_(this.z_),t=!0),t}H_(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Y_||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}j_(e){if(e.docChanges.length>0)return!0;const t=this.z_&&this.z_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}J_(e){e=$d.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.G_=!0,this.W_.next(e)}}
/**
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
 */class Gd{constructor(e,t){this.Z_=e,this.byteLength=t}X_(){return"metadata"in this.Z_}}
/**
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
 */class Kd{constructor(e){this.serializer=e}Ps(e){return Jc(this.serializer,e)}Is(e){return e.metadata.exists?ru(this.serializer,e.document,!1):Co.newNoDocument(this.Ps(e.metadata.name),this.Ts(e.metadata.readTime))}Ts(e){return Kc(e)}}class Wd{constructor(e,t,n){this.ea=e,this.localStore=t,this.serializer=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Zd(e)}ta(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Z_.namedQuery)this.queries.push(e.Z_.namedQuery);else if(e.Z_.documentMetadata){this.documents.push({metadata:e.Z_.documentMetadata}),e.Z_.documentMetadata.exists||++t;const n=ki.fromString(e.Z_.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.Z_.document&&(this.documents[this.documents.length-1].document=e.Z_.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}na(e){const t=new Map,n=new Kd(this.serializer);for(const r of e)if(r.metadata.queries){const e=n.Ps(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||La()).add(e);t.set(n,r)}}return t}async complete(){const e=await Ah(this.localStore,new Kd(this.serializer),this.documents,this.ea.id),t=this.na(this.documents);for(const n of this.queries)await Oh(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,ra:this.collectionGroups,ia:e}}}function Zd(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
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
 */class Qd{constructor(e){this.key=e}}class Jd{constructor(e){this.key=e}}class Yd{constructor(e,t){this.query=e,this.sa=t,this.oa=null,this.hasCachedResults=!1,this.current=!1,this._a=La(),this.mutatedKeys=La(),this.aa=ba(e),this.ua=new Rd(this.aa)}get ca(){return this.sa}la(e,t){const n=t?t.ha:new Md,r=t?t.ua:this.ua;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=ya(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Pa(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.aa(l,a)>0||c&&this.aa(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{ua:s,ha:n,Xi:o,mutatedKeys:i}}Pa(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.ua;this.ua=e.ua,this.mutatedKeys=e.mutatedKeys;const i=e.ha.k_();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ii()}};return n(e)-n(t)}
/**
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
 */(e.type,t.type)||this.aa(e.doc,t.doc))),this.Ia(n);const s=t?this.Ta():[],o=0===this._a.size&&this.current?1:0,a=o!==this.oa;return this.oa=o,0!==i.length||a?{snapshot:new $d(this.query,e.ua,r,i,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ea:s}:{Ea:s}}K_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ua:this.ua,ha:new Md,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Ea:[]}}da(e){return!this.sa.has(e)&&!!this.ua.has(e)&&!this.ua.get(e).hasLocalMutations}Ia(e){e&&(e.addedDocuments.forEach((e=>this.sa=this.sa.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.sa=this.sa.delete(e))),this.current=e.current)}Ta(){if(!this.current)return[];const e=this._a;this._a=La(),this.ua.forEach((e=>{this.da(e.key)&&(this._a=this._a.add(e.key))}));const t=[];return e.forEach((e=>{this._a.has(e)||t.push(new Jd(e))})),this._a.forEach((n=>{e.has(n)||t.push(new Qd(n))})),t}Aa(e){this.sa=e.hs,this._a=La();const t=this.la(e.documents);return this.applyChanges(t,!0)}Ra(){return $d.fromInitialDocuments(this.query,this.ua,this.mutatedKeys,0===this.oa,this.hasCachedResults)}}class Xd{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class ef{constructor(e){this.key=e,this.Va=!1}}class tf{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.ma={},this.fa=new Ia((e=>ga(e)),ma),this.ga=new Map,this.pa=new Set,this.ya=new $s(Oi.comparator),this.wa=new Map,this.Sa=new Ql,this.ba={},this.Da=new Map,this.Ca=Tl.Bn(),this.onlineState="Unknown",this.va=void 0}get isPrimaryClient(){return!0===this.va}}async function nf(e,t){const n=Df(e);let r,i;const s=n.fa.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Ra();else{const e=await Sh(n.localStore,ha(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await rf(n,t,r,"current"===s,e.resumeToken),n.isPrimaryClient&&ad(n.remoteStore,e)}return i}async function rf(e,t,n,r,i){e.Fa=(t,n,r)=>async function(e,t,n,r){let i=t.view.la(n);i.Xi&&(i=await Th(e.localStore,t.query,!1).then((({documents:e})=>t.view.la(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return vf(e,t.targetId,o.Ea),o.snapshot}(e,t,n,r);const s=await Th(e.localStore,t,!0),o=new Yd(t,s.hs),a=o.la(s.documents),c=Nc.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,c);vf(e,n,u.Ea);const l=new Xd(t,n,o);return e.fa.set(t,l),e.ga.has(n)?e.ga.get(n).push(t):e.ga.set(n,[t]),u.snapshot}async function sf(e,t){const n=ai(e),r=n.fa.get(t),i=n.ga.get(r.targetId);if(i.length>1)return n.ga.set(r.targetId,i.filter((e=>!ma(e,t)))),void n.fa.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Eh(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),cd(n.remoteStore,r.targetId),mf(n,r.targetId)})).catch(Ui)):(mf(n,r.targetId),await Eh(n.localStore,r.targetId,!0))}async function of(e,t,n){const r=Lf(e);try{const e=await function(e,t){const n=ai(e),r=Ei.now(),i=t.reduce(((e,t)=>e.add(t.key)),La());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Ea(),c=La();return n.os.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=oc(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new uc(e.key,t,To(t.value.mapValue),ec.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:ka(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.ba[e.currentUser.toKey()];r||(r=new $s(_i)),r=r.insert(t,n),e.ba[e.currentUser.toKey()]=r}(r,e.batchId,n),await bf(r,e.changes),await bd(r.remoteStore)}catch(e){const t=Pd(e,"Failed to persist write");n.reject(t)}}async function af(e,t){const n=ai(e);try{const e=await bh(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.wa.get(t);r&&(si(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.Va=!0:e.modifiedDocuments.size>0?si(r.Va):e.removedDocuments.size>0&&(si(r.Va),r.Va=!1))})),await bf(n,e,t)}catch(e){await Ui(e)}}function cf(e,t,n){const r=ai(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.fa.forEach(((n,r)=>{const i=r.view.K_(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=ai(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.listeners)i.K_(t)&&(r=!0)})),r&&qd(n)}(r.eventManager,t),e.length&&r.ma.u_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function uf(e,t,n){const r=ai(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.wa.get(t),s=i&&i.key;if(s){let e=new $s(Oi.comparator);e=e.insert(s,Co.newNoDocument(s,Ti.min()));const n=La().add(s),i=new Oc(Ti.min(),new Map,new $s(_i),e,n);await af(r,i),r.ya=r.ya.remove(s),r.wa.delete(t),wf(r)}else await Eh(r.localStore,t,!1).then((()=>mf(r,t,n))).catch(Ui)}async function lf(e,t){const n=ai(e),r=t.batch.batchId;try{const e=await yh(n.localStore,t);pf(n,r,null),ff(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await bf(n,e)}catch(e){await Ui(e)}}async function hf(e,t,n){const r=ai(e);try{const e=await function(e,t){const n=ai(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(si(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);pf(r,t,n),ff(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await bf(r,e)}catch(n){await Ui(n)}}async function df(e,t){const n=ai(e);fd(n.remoteStore)||ei("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=ai(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(e=>t.mutationQueue.getHighestUnacknowledgedBatchId(e)))}(n.localStore);if(-1===e)return void t.resolve();const r=n.Da.get(e)||[];r.push(t),n.Da.set(e,r)}catch(e){const n=Pd(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}function ff(e,t){(e.Da.get(t)||[]).forEach((e=>{e.resolve()})),e.Da.delete(t)}function pf(e,t,n){const r=ai(e);let i=r.ba[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.ba[r.currentUser.toKey()]=i}}function mf(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.ga.get(t))e.fa.delete(r),n&&e.ma.Ma(r,n);e.ga.delete(t),e.isPrimaryClient&&e.Sa.Vr(t).forEach((t=>{e.Sa.containsKey(t)||gf(e,t)}))}function gf(e,t){e.pa.delete(t.path.canonicalString());const n=e.ya.get(t);null!==n&&(cd(e.remoteStore,n),e.ya=e.ya.remove(t),e.wa.delete(n),wf(e))}function vf(e,t,n){for(const r of n)r instanceof Qd?(e.Sa.addReference(r.key,t),yf(e,r)):r instanceof Jd?(ei("SyncEngine","Document no longer in limbo: "+r.key),e.Sa.removeReference(r.key,t),e.Sa.containsKey(r.key)||gf(e,r.key)):ii()}function yf(e,t){const n=t.key,r=n.path.canonicalString();e.ya.get(n)||e.pa.has(r)||(ei("SyncEngine","New document in limbo: "+n),e.pa.add(r),wf(e))}function wf(e){for(;e.pa.size>0&&e.ya.size<e.maxConcurrentLimboResolutions;){const t=e.pa.values().next().value;e.pa.delete(t);const n=new Oi(ki.fromString(t)),r=e.Ca.next();e.wa.set(r,new ef(n)),e.ya=e.ya.insert(n,r),ad(e.remoteStore,new Iu(ha(aa(n.path)),r,"TargetPurposeLimboResolution",ts.ae))}}async function bf(e,t,n){const r=ai(e),i=[],s=[],o=[];r.fa.isEmpty()||(r.fa.forEach(((e,a)=>{o.push(r.Fa(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=dh.Ki(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.ma.u_(i),await async function(e,t){const n=ai(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>zi.forEach(t,(t=>zi.forEach(t.qi,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>zi.forEach(t.Qi,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!Wi(e))throw e;ei("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.ns.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.ns=n.ns.insert(e,i)}}}(r.localStore,s))}async function _f(e,t){const n=ai(e);if(!n.currentUser.isEqual(t)){ei("SyncEngine","User change. New user:",t.toKey());const e=await vh(n.localStore,t);n.currentUser=t,function(e,t){e.Da.forEach((e=>{e.forEach((e=>{e.reject(new ui(ci.CANCELLED,t))}))})),e.Da.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await bf(n,e.us)}}function If(e,t){const n=ai(e),r=n.wa.get(t);if(r&&r.Va)return La().add(r.key);{let e=La();const r=n.ga.get(t);if(!r)return e;for(const t of r){const r=n.fa.get(t);e=e.unionWith(r.view.ca)}return e}}async function Sf(e,t){const n=ai(e),r=await Th(n.localStore,t.query,!0),i=t.view.Aa(r);return n.isPrimaryClient&&vf(n,t.targetId,i.Ea),i}async function Ef(e,t){const n=ai(e);return kh(n.localStore,t).then((e=>bf(n,e)))}async function Tf(e,t,n,r){const i=ai(e),s=await function(e,t){const n=ai(e),r=ai(n.mutationQueue);return n.persistence.runTransaction("Lookup mutation documents","readonly",(e=>r.vn(e,t).next((t=>t?n.localDocuments.getDocuments(e,t):zi.resolve(null)))))}(i.localStore,t);null!==s?("pending"===n?await bd(i.remoteStore):"acknowledged"===n||"rejected"===n?(pf(i,t,r||null),ff(i,t),function(e,t){ai(ai(e).mutationQueue).Mn(t)}(i.localStore,t)):ii(),await bf(i,s)):ei("SyncEngine","Cannot apply mutation batch with id: "+t)}async function Cf(e,t){const n=ai(e);if(Df(n),Lf(n),!0===t&&!0!==n.va){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await kf(n,e.toArray());n.va=!0,await Od(n.remoteStore,!0);for(const r of t)ad(n.remoteStore,r)}else if(!1===t&&!1!==n.va){const e=[];let t=Promise.resolve();n.ga.forEach(((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then((()=>(mf(n,i),Eh(n.localStore,i,!0)))),cd(n.remoteStore,i)})),await t,await kf(n,e),function(e){const t=ai(e);t.wa.forEach(((e,n)=>{cd(t.remoteStore,n)})),t.Sa.mr(),t.wa=new Map,t.ya=new $s(Oi.comparator)}(n),n.va=!1,await Od(n.remoteStore,!1)}}async function kf(e,t,n){const r=ai(e),i=[],s=[];for(const o of t){let e;const t=r.ga.get(o);if(t&&0!==t.length){e=await Sh(r.localStore,ha(t[0]));for(const e of t){const t=r.fa.get(e),n=await Sf(r,t);n.snapshot&&s.push(n.snapshot)}}else{const t=await Ch(r.localStore,o);e=await Sh(r.localStore,t),await rf(r,xf(t),o,!1,e.resumeToken)}i.push(e)}return r.ma.u_(s),i}function xf(e){return oa(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function Af(e){return function(e){return ai(ai(e).persistence).Li()}(ai(e).localStore)}async function Of(e,t,n,r){const i=ai(e);if(i.va)return void ei("SyncEngine","Ignoring unexpected query state notification.");const s=i.ga.get(t);if(s&&s.length>0)switch(n){case"current":case"not-current":{const e=await kh(i.localStore,wa(s[0])),r=Oc.createSynthesizedRemoteEventForCurrentChange(t,"current"===n,Gs.EMPTY_BYTE_STRING);await bf(i,e,r);break}case"rejected":await Eh(i.localStore,t,!0),mf(i,t,r);break;default:ii()}}async function Nf(e,t,n){const r=Df(e);if(r.va){for(const e of t){if(r.ga.has(e)){ei("SyncEngine","Adding an already active target "+e);continue}const t=await Ch(r.localStore,e),n=await Sh(r.localStore,t);await rf(r,xf(t),n.targetId,!1,n.resumeToken),ad(r.remoteStore,n)}for(const e of n)r.ga.has(e)&&await Eh(r.localStore,e,!1).then((()=>{cd(r.remoteStore,e),mf(r,e)})).catch(Ui)}}function Df(e){const t=ai(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=af.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=If.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=uf.bind(null,t),t.ma.u_=Ud.bind(null,t.eventManager),t.ma.Ma=zd.bind(null,t.eventManager),t}function Lf(e){const t=ai(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=lf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=hf.bind(null,t),t}function Pf(e,t,n){const r=ai(e);(async function(e,t,n){try{const r=await t.getMetadata();if(await function(e,t){const n=ai(e),r=Kc(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",(e=>n.$r.getBundleMetadata(e,t.id))).then((e=>!!e&&e.createTime.compareTo(r)>=0))}(e.localStore,r))return await t.close(),n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(r)),Promise.resolve(new Set);n._updateProgress(Zd(r));const i=new Wd(r,e.localStore,t.serializer);let s=await t.xa();for(;s;){const e=await i.ta(s);e&&n._updateProgress(e),s=await t.xa()}const o=await i.complete();return await bf(e,o.ia,void 0),await function(e,t){const n=ai(e);return n.persistence.runTransaction("Save bundle","readwrite",(e=>n.$r.saveBundleMetadata(e,t)))}(e.localStore,r),n._completeWith(o.progress),Promise.resolve(o.ra)}catch(e){return ni("SyncEngine",`Loading bundle failed with ${e}`),n._failWith(e),Promise.resolve(new Set)}}
/**
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
 */)(r,t,n).then((e=>{r.sharedClientState.notifyBundleLoaded(e)}))}class Rf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Jh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return gh(this.persistence,new ph,e.initialUser,this.serializer)}createPersistence(e){return new nh(ih.Hr,this.serializer)}createSharedClientState(e){return new Bh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Mf extends Rf{constructor(e,t,n){super(),this.Oa=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Oa.initialize(this,e),await Lf(this.Oa.syncEngine),await bd(this.Oa.remoteStore),await this.persistence.fi((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}createLocalStore(e){return gh(this.persistence,new ph,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new Dl(n,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const n=new es(t,this.persistence);return new Xi(e.asyncQueue,n)}createPersistence(e){const t=hh(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?vl.withCacheSize(this.cacheSizeBytes):vl.DEFAULT;return new ch(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Zh(),Qh(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new Bh}}class $f extends Mf{constructor(e,t){super(e,t,!1),this.Oa=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Oa.syncEngine;this.sharedClientState instanceof Vh&&(this.sharedClientState.syncEngine={Zs:Tf.bind(null,t),Xs:Of.bind(null,t),eo:Nf.bind(null,t),Li:Af.bind(null,t),Ys:Ef.bind(null,t)},await this.sharedClientState.start()),await this.persistence.fi((async e=>{await Cf(this.Oa.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())}))}createSharedClientState(e){const t=Zh();if(!Vh.C(t))throw new ui(ci.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=hh(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Vh(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class Ff{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>cf(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=_f.bind(null,this.syncEngine),await Od(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Vd}()}createDatastore(e){const t=Jh(e.databaseInfo.databaseId),n=function(e){return new Wh(e)}(e.databaseInfo);return function(e,t,n,r){return new nd(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(e,t,n,r,i){return new id(e,t,n,r,i)}(this.localStore,this.datastore,e.asyncQueue,(e=>cf(this.syncEngine,e,0)),function(){return Uh.C()?new Uh:new jh}())}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new tf(e,t,n,r,i,s);return o&&(a.va=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=ai(e);ei("RemoteStore","RemoteStore shutting down."),t.v_.add(5),await od(t),t.M_.shutdown(),t.x_.set("Unknown")}(this.remoteStore)}}
/**
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
 */function Vf(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}
/**
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
 */
/**
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
 */class Bf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Na(this.observer.next,e)}error(e){this.observer.error?this.Na(this.observer.error,e):ti("Uncaught Error in snapshot listener:",e.toString())}Ba(){this.muted=!0}Na(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
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
 */class jf{constructor(e,t){this.La=e,this.serializer=t,this.metadata=new li,this.buffer=new Uint8Array,this.ka=function(){return new TextDecoder("utf-8")}(),this.qa().then((e=>{e&&e.X_()?this.metadata.resolve(e.Z_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.Z_)}`))}),(e=>this.metadata.reject(e)))}close(){return this.La.cancel()}async getMetadata(){return this.metadata.promise}async xa(){return await this.getMetadata(),this.qa()}async qa(){const e=await this.Qa();if(null===e)return null;const t=this.ka.decode(e),n=Number(t);isNaN(n)&&this.Ka(`length string (${t}) is not valid number`);const r=await this.$a(n);return new Gd(JSON.parse(r),e.length+n)}Ua(){return this.buffer.findIndex((e=>e==="{".charCodeAt(0)))}async Qa(){for(;this.Ua()<0;)if(await this.Wa())break;if(0===this.buffer.length)return null;const e=this.Ua();e<0&&this.Ka("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async $a(e){for(;this.buffer.length<e;)await this.Wa()&&this.Ka("Reached the end of bundle when more is expected.");const t=this.ka.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Ka(e){throw this.La.cancel(),new Error(`Invalid bundle format: ${e}`)}async Wa(){const e=await this.La.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
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
 */class Uf{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new ui(ci.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=ai(e),r=eu(n.serializer)+"/documents",i={documents:t.map((e=>Qc(n.serializer,e)))},s=await n.vo("BatchGetDocuments",r,i,t.length),o=new Map;s.forEach((e=>{const t=iu(n.serializer,e);o.set(t.key.toString(),t)}));const a=[];return t.forEach((e=>{const t=o.get(e.toString());si(!!t),a.push(t)})),a}(this.datastore,e);return t.forEach((e=>this.recordVersion(e))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new fc(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((e,t)=>{const n=Oi.fromPath(t);this.mutations.push(new pc(n,this.precondition(n)))})),await async function(e,t){const n=ai(e),r=eu(n.serializer)+"/documents",i={writes:t.map((e=>ou(n.serializer,e)))};await n.So("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw ii();t=Ti.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new ui(ci.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(Ti.min())?ec.exists(!1):ec.updateTime(t):ec.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Ti.min()))throw new ui(ci.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ec.updateTime(t)}return ec.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
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
 */class zf{constructor(e,t,n,r,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=i,this.Ga=n.maxAttempts,this.jo=new Yh(this.asyncQueue,"transaction_retry")}run(){this.Ga-=1,this.za()}za(){this.jo.qo((async()=>{const e=new Uf(this.datastore),t=this.ja(e);t&&t.then((t=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(t)})).catch((e=>{this.Ha(e)}))))})).catch((e=>{this.Ha(e)}))}))}ja(e){try{const t=this.updateFunction(e);return!ns(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Ha(e){this.Ga>0&&this.Ja(e)?(this.Ga-=1,this.asyncQueue.enqueueAndForget((()=>(this.za(),Promise.resolve())))):this.deferred.reject(e)}Ja(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||"already-exists"===t||!_c(t)}return!1}}
/**
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
 */class qf{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Zr.UNAUTHENTICATED,this.clientId=bi.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{ei("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(ei("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ui(ci.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new li;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Pd(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Hf(e,t){e.asyncQueue.verifyOperationInProgress(),ei("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await vh(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function Gf(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Wf(e);ei("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>Ad(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Ad(t.remoteStore,n))),e._onlineComponents=t}function Kf(e){return"FirebaseError"===e.name?e.code===ci.FAILED_PRECONDITION||e.code===ci.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function Wf(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){ei("FirestoreClient","Using user provided OfflineComponentProvider");try{await Hf(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Kf(n))throw n;ni("Error using user provided cache. Falling back to memory cache: "+n),await Hf(e,new Rf)}}else ei("FirestoreClient","Using default OfflineComponentProvider"),await Hf(e,new Rf);return e._offlineComponents}async function Zf(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(ei("FirestoreClient","Using user provided OnlineComponentProvider"),await Gf(e,e._uninitializedComponentsProvider._online)):(ei("FirestoreClient","Using default OnlineComponentProvider"),await Gf(e,new Ff))),e._onlineComponents}function Qf(e){return Wf(e).then((e=>e.persistence))}function Jf(e){return Wf(e).then((e=>e.localStore))}function Yf(e){return Zf(e).then((e=>e.remoteStore))}function Xf(e){return Zf(e).then((e=>e.syncEngine))}function ep(e){return Zf(e).then((e=>e.datastore))}async function tp(e){const t=await Zf(e),n=t.eventManager;return n.onListen=nf.bind(null,t.syncEngine),n.onUnlisten=sf.bind(null,t.syncEngine),n}function np(e){return e.asyncQueue.enqueue((async()=>{const t=await Qf(e),n=await Yf(e);return t.setNetworkEnabled(!0),function(e){const t=ai(e);return t.v_.delete(0),sd(t)}(n)}))}function rp(e){return e.asyncQueue.enqueue((async()=>{const t=await Qf(e),n=await Yf(e);return t.setNetworkEnabled(!1),async function(e){const t=ai(e);t.v_.add(0),await od(t),t.x_.set("Offline")}(n)}))}function ip(e,t){const n=new li;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await function(e,t){const n=ai(e);return n.persistence.runTransaction("read document","readonly",(e=>n.localDocuments.getDocument(e,t)))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new ui(ci.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=Pd(e,`Failed to get document '${t} from cache`);n.reject(r)}}(await Jf(e),t,n))),n.promise}function sp(e,t,n={}){const r=new li;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new Bf({next:s=>{t.enqueueAndForget((()=>jd(e,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new ui(ci.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new ui(ci.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new Hd(aa(n.path),s,{includeMetadataChanges:!0,Y_:!0});return Bd(e,o)}(await tp(e),e.asyncQueue,t,n,r))),r.promise}function op(e,t){const n=new li;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await Th(e,t,!0),i=new Yd(t,r.hs),s=i.la(r.documents),o=i.applyChanges(s,!1);n.resolve(o.snapshot)}catch(e){const r=Pd(e,`Failed to execute query '${t} against cache`);n.reject(r)}}(await Jf(e),t,n))),n.promise}function ap(e,t,n={}){const r=new li;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new Bf({next:n=>{t.enqueueAndForget((()=>jd(e,o))),n.fromCache&&"server"===r.source?i.reject(new ui(ci.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new Hd(n,s,{includeMetadataChanges:!0,Y_:!0});return Bd(e,o)}(await tp(e),e.asyncQueue,t,n,r))),r.promise}function cp(e,t){const n=new Bf(t);return e.asyncQueue.enqueueAndForget((async()=>function(e,t){ai(e).Q_.add(t),t.next()}(await tp(e),n))),()=>{n.Ba(),e.asyncQueue.enqueueAndForget((async()=>function(e,t){ai(e).Q_.delete(t)}(await tp(e),n)))}}function up(e,t,n,r){const i=function(e,t){let n;return n="string"==typeof e?Ec().encode(e):e,function(e,t){return new jf(e,t)}(function(e,t){if(e instanceof Uint8Array)return Vf(e,t);if(e instanceof ArrayBuffer)return Vf(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}(n,Jh(t));e.asyncQueue.enqueueAndForget((async()=>{Pf(await Xf(e),i,r)}))}function lp(e,t){return e.asyncQueue.enqueue((async()=>function(e,t){const n=ai(e);return n.persistence.runTransaction("Get named query","readonly",(e=>n.$r.getNamedQuery(e,t)))}(await Jf(e),t)))}
/**
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
 */
function hp(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
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
 */}const dp=new Map;
/**
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
 */function fp(e,t,n){if(!n)throw new ui(ci.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function pp(e,t,n,r){if(!0===t&&!0===r)throw new ui(ci.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function mp(e){if(!Oi.isDocumentKey(e))throw new ui(ci.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function gp(e){if(Oi.isDocumentKey(e))throw new ui(ci.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function vp(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":ii()}function yp(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new ui(ci.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vp(e);throw new ui(ci.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function wp(e,t){if(t<=0)throw new ui(ci.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
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
 */class bp{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new ui(ci.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new ui(ci.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}pp("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hp(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new ui(ci.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new ui(ci.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new ui(ci.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
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
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class _p{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ui(ci.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new ui(ci.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bp(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new di;switch(e.type){case"firstParty":return new gi(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new ui(ci.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=dp.get(e);t&&(ei("ComponentProvider","Removing Datastore"),dp.delete(e),t.terminate())}(this),Promise.resolve()}}function Ip(e,t,n,r={}){var i;const s=(e=yp(e,_p))._getSettings(),o=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&ni("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Zr.MOCK_USER;else{t=(0,c.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new ui(ci.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Zr(s)}e._authCredentials=new fi(new hi(t,n))}}
/**
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
 */class Sp{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Sp(this.firestore,e,this._query)}}class Ep{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tp(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ep(this.firestore,e,this._key)}}class Tp extends Sp{constructor(e,t,n){super(e,t,aa(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ep(this.firestore,null,new Oi(e))}withConverter(e){return new Tp(this.firestore,e,this._path)}}function Cp(e,t,...n){if(e=(0,c.m9)(e),fp("collection","path",t),e instanceof _p){const r=ki.fromString(t,...n);return gp(r),new Tp(e,null,r)}{if(!(e instanceof Ep||e instanceof Tp))throw new ui(ci.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ki.fromString(t,...n));return gp(r),new Tp(e.firestore,null,r)}}function kp(e,t){if(e=yp(e,_p),fp("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new ui(ci.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Sp(e,null,function(e){return new sa(ki.emptyPath(),e)}(t))}function xp(e,t,...n){if(e=(0,c.m9)(e),1===arguments.length&&(t=bi.V()),fp("doc","path",t),e instanceof _p){const r=ki.fromString(t,...n);return mp(r),new Ep(e,null,new Oi(r))}{if(!(e instanceof Ep||e instanceof Tp))throw new ui(ci.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ki.fromString(t,...n));return mp(r),new Ep(e.firestore,e instanceof Tp?e.converter:null,new Oi(r))}}function Ap(e,t){return e=(0,c.m9)(e),t=(0,c.m9)(t),(e instanceof Ep||e instanceof Tp)&&(t instanceof Ep||t instanceof Tp)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function Op(e,t){return e=(0,c.m9)(e),t=(0,c.m9)(t),e instanceof Sp&&t instanceof Sp&&e.firestore===t.firestore&&ma(e._query,t._query)&&e.converter===t.converter
/**
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
 */}class Np{constructor(){this.Ya=Promise.resolve(),this.Za=[],this.Xa=!1,this.eu=[],this.tu=null,this.nu=!1,this.ru=!1,this.iu=[],this.jo=new Yh(this,"async_queue_retry"),this.su=()=>{const e=Qh();e&&ei("AsyncQueue","Visibility state changed to "+e.visibilityState),this.jo.Ko()};const e=Qh();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.su)}get isShuttingDown(){return this.Xa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ou(),this._u(e)}enterRestrictedMode(e){if(!this.Xa){this.Xa=!0,this.ru=e||!1;const t=Qh();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.su)}}enqueue(e){if(this.ou(),this.Xa)return new Promise((()=>{}));const t=new li;return this._u((()=>this.Xa&&this.ru?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Za.push(e),this.au())))}async au(){if(0!==this.Za.length){try{await this.Za[0](),this.Za.shift(),this.jo.reset()}catch(e){if(!Wi(e))throw e;ei("AsyncQueue","Operation failed with retryable error: "+e)}this.Za.length>0&&this.jo.qo((()=>this.au()))}}_u(e){const t=this.Ya.then((()=>(this.nu=!0,e().catch((e=>{this.tu=e,this.nu=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
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
 */(e);throw ti("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.nu=!1,e))))));return this.Ya=t,t}enqueueAfterDelay(e,t,n){this.ou(),this.iu.indexOf(e)>-1&&(t=0);const r=Ld.createAndSchedule(this,e,t,n,(e=>this.uu(e)));return this.eu.push(r),r}ou(){this.tu&&ii()}verifyOperationInProgress(){}async cu(){let e;do{e=this.Ya,await e}while(e!==this.Ya)}lu(e){for(const t of this.eu)if(t.timerId===e)return!0;return!1}hu(e){return this.cu().then((()=>{this.eu.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.eu)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.cu()}))}Pu(e){this.iu.push(e)}uu(e){const t=this.eu.indexOf(e);this.eu.splice(t,1)}}function Dp(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
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
 */(e,["next","error","complete"])}class Lp{constructor(){this._progressObserver={},this._taskCompletionResolver=new li,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
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
 */const Pp=-1;class Rp extends _p{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=function(){return new Np}(),this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||$p(this),this._firestoreClient.terminate()}}function Mp(e){return e._firestoreClient||$p(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function $p(e){var t,n,r;const i=e._freezeSettings(),s=function(e,t,n,r){return new eo(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,hp(r.experimentalLongPollingOptions),r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new qf(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function Fp(e,t){Kp(e=yp(e,Rp));const n=Mp(e);if(n._uninitializedComponentsProvider)throw new ui(ci.FAILED_PRECONDITION,"SDK cache is already specified.");ni("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=e._freezeSettings(),i=new Ff;return Bp(n,i,new Mf(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function Vp(e){Kp(e=yp(e,Rp));const t=Mp(e);if(t._uninitializedComponentsProvider)throw new ui(ci.FAILED_PRECONDITION,"SDK cache is already specified.");ni("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=e._freezeSettings(),r=new Ff;return Bp(t,r,new $f(r,n.cacheSizeBytes))}function Bp(e,t,n){const r=new li;return e.asyncQueue.enqueue((async()=>{try{await Hf(e,n),await Gf(e,t),r.resolve()}catch(e){const n=e;if(!Kf(n))throw n;ni("Error enabling indexeddb cache. Falling back to memory cache: "+n),r.reject(n)}})).then((()=>r.promise))}function jp(e){if(e._initialized&&!e._terminated)throw new ui(ci.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new li;return e._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(e){if(!Hi.C())return Promise.resolve();const t=e+"main";await Hi.delete(t)}(hh(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}})),t.promise}function Up(e){return function(e){const t=new li;return e.asyncQueue.enqueueAndForget((async()=>df(await Xf(e),t))),t.promise}(Mp(e=yp(e,Rp)))}function zp(e){return np(Mp(e=yp(e,Rp)))}function qp(e){return rp(Mp(e=yp(e,Rp)))}function Hp(e,t){const n=Mp(e=yp(e,Rp)),r=new Lp;return up(n,e._databaseId,t,r),r}function Gp(e,t){return lp(Mp(e=yp(e,Rp)),t).then((t=>t?new Sp(e,null,t.query):null))}function Kp(e){if(e._initialized||e._terminated)throw new ui(ci.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
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
 */
/**
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
 */
/**
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
 */
class Wp{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Wp(Gs.fromBase64String(e))}catch(e){throw new ui(ci.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Wp(Gs.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
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
 */class Zp{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new ui(ci.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ai(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
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
 */
class Qp{constructor(e){this._methodName=e}}
/**
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
 */class Jp{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ui(ci.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ui(ci.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _i(this._lat,e._lat)||_i(this._long,e._long)}}
/**
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
 */const Yp=/^__.*__$/;class Xp{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new uc(e,this.data,this.fieldMask,t,this.fieldTransforms):new cc(e,this.data,t,this.fieldTransforms)}}class em{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new uc(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function tm(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ii()}}class nm{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Iu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new nm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}du(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Eu({path:n,Au:!1});return r.Ru(e),r}Vu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Eu({path:n,Au:!1});return r.Iu(),r}mu(e){return this.Eu({path:void 0,Au:!0})}fu(e){return Im(e,this.settings.methodName,this.settings.gu||!1,this.path,this.settings.pu)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Iu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ru(this.path.get(e))}Ru(e){if(0===e.length)throw this.fu("Document fields must not be empty");if(tm(this.Tu)&&Yp.test(e))throw this.fu('Document fields cannot begin and end with "__"')}}class rm{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Jh(e)}yu(e,t,n,r=!1){return new nm({Tu:e,methodName:t,pu:n,path:Ai.emptyPath(),Au:!1,gu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function im(e){const t=e._freezeSettings(),n=Jh(e._databaseId);return new rm(e._databaseId,!!t.ignoreUndefinedProperties,n)}function sm(e,t,n,r,i,s={}){const o=e.yu(s.merge||s.mergeFields?2:0,t,n,i);ym("Data must be an object, but it was:",o,r);const a=gm(r,o);let c,u;if(s.merge)c=new zs(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=wm(t,r,n);if(!o.contains(i))throw new ui(ci.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Sm(e,i)||e.push(i)}c=new zs(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new Xp(new Eo(a),c,u)}class om extends Qp{_toFieldTransform(e){if(2!==e.Tu)throw 1===e.Tu?e.fu(`${this._methodName}() can only appear at the top level of your update data`):e.fu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof om}}function am(e,t,n){return new nm({Tu:3,pu:t.settings.pu,methodName:e._methodName,Au:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class cm extends Qp{_toFieldTransform(e){return new Ja(e.path,new za)}isEqual(e){return e instanceof cm}}class um extends Qp{constructor(e,t){super(e),this.wu=t}_toFieldTransform(e){const t=am(this,e,!0),n=this.wu.map((e=>mm(e,t))),r=new qa(n);return new Ja(e.path,r)}isEqual(e){return this===e}}class lm extends Qp{constructor(e,t){super(e),this.wu=t}_toFieldTransform(e){const t=am(this,e,!0),n=this.wu.map((e=>mm(e,t))),r=new Ga(n);return new Ja(e.path,r)}isEqual(e){return this===e}}class hm extends Qp{constructor(e,t){super(e),this.Su=t}_toFieldTransform(e){const t=new Wa(e.serializer,Fa(e.serializer,this.Su));return new Ja(e.path,t)}isEqual(e){return this===e}}function dm(e,t,n,r){const i=e.yu(1,t,n);ym("Data must be an object, but it was:",i,r);const s=[],o=Eo.empty();Rs(r,((e,r)=>{const a=_m(t,e,n);r=(0,c.m9)(r);const u=i.Vu(a);if(r instanceof om)s.push(a);else{const e=mm(r,u);null!=e&&(s.push(a),o.set(a,e))}}));const a=new zs(s);return new em(o,a,i.fieldTransforms)}function fm(e,t,n,r,i,s){const o=e.yu(1,t,n),a=[wm(t,r,n)],u=[i];if(s.length%2!=0)throw new ui(ci.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let c=0;c<s.length;c+=2)a.push(wm(t,s[c])),u.push(s[c+1]);const l=[],h=Eo.empty();for(let f=a.length-1;f>=0;--f)if(!Sm(l,a[f])){const e=a[f];let t=u[f];t=(0,c.m9)(t);const n=o.Vu(e);if(t instanceof om)l.push(e);else{const r=mm(t,n);null!=r&&(l.push(e),h.set(e,r))}}const d=new zs(l);return new em(h,d,o.fieldTransforms)}function pm(e,t,n,r=!1){return mm(n,e.yu(r?4:3,t))}function mm(e,t){if(vm(e=(0,c.m9)(e)))return ym("Unsupported field value:",t,e),gm(e,t);if(e instanceof Qp)return function(e,t){if(!tm(t.Tu))throw t.fu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.fu(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Au&&4!==t.Tu)throw t.fu("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=mm(i,t.mu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,c.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Fa(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Ei.fromDate(e);return{timestampValue:qc(t.serializer,n)}}if(e instanceof Ei){const n=new Ei(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:qc(t.serializer,n)}}if(e instanceof Jp)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Wp)return{bytesValue:Hc(t.serializer,e._byteString)};if(e instanceof Ep){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.fu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Wc(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.fu(`Unsupported field value: ${vp(e)}`)}(e,t)}function gm(e,t){const n={};return Ms(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Rs(e,((e,r)=>{const i=mm(r,t.du(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function vm(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Ei||e instanceof Jp||e instanceof Wp||e instanceof Ep||e instanceof Qp)}function ym(e,t,n){if(!vm(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=vp(n);throw"an object"===r?t.fu(e+" a custom object"):t.fu(e+" "+r)}}function wm(e,t,n){if((t=(0,c.m9)(t))instanceof Zp)return t._internalPath;if("string"==typeof t)return _m(e,t);throw Im("Field path arguments must be of type string or ",e,!1,void 0,n)}const bm=new RegExp("[~\\*/\\[\\]]");function _m(e,t,n){if(t.search(bm)>=0)throw Im(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Zp(...t.split("."))._internalPath}catch(I){throw Im(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Im(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new ui(ci.INVALID_ARGUMENT,a+e+c)}function Sm(e,t){return e.some((e=>e.isEqual(t)))}
/**
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
 */class Em{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ep(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Tm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Cm("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Tm extends Em{data(){return super.data()}}function Cm(e,t){return"string"==typeof t?_m(e,t):t instanceof Zp?t._internalPath:t._delegate._internalPath}
/**
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
 */function km(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new ui(ci.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class xm{}class Am extends xm{}function Om(e,t,...n){let r=[];t instanceof xm&&r.push(t),r=r.concat(n),function(e){const t=e.filter((e=>e instanceof Lm)).length,n=e.filter((e=>e instanceof Nm)).length;if(t>1||t>0&&n>0)throw new ui(ci.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
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
 */(r);for(const i of r)e=i._apply(e);return e}class Nm extends Am{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Nm(e,t,n)}_apply(e){const t=this._parse(e);return Wm(e._query,t),new Sp(e.firestore,e.converter,fa(e._query,t))}_parse(e){const t=im(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new ui(ci.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){Km(o,s);const t=[];for(const n of o)t.push(Gm(r,e,n));a={arrayValue:{values:t}}}else a=Gm(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Km(o,s),a=pm(n,t,o,"in"===s||"not-in"===s);return Lo.create(i,s,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function Dm(e,t,n){const r=t,i=Cm("where",e);return Nm._create(i,r,n)}class Lm extends xm{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Lm(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:Po.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const i of r)Wm(n,i),n=fa(n,i)}(e._query,t),new Sp(e.firestore,e.converter,fa(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class Pm extends Am{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Pm(e,t)}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new ui(ci.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new ui(ci.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Oo(t,n)}(e._query,this._field,this._direction);return new Sp(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new sa(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function Rm(e,t="asc"){const n=t,r=Cm("orderBy",e);return Pm._create(r,n)}class Mm extends Am{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new Mm(e,t,n)}_apply(e){return new Sp(e.firestore,e.converter,pa(e._query,this._limit,this._limitType))}}function $m(e){return wp("limit",e),Mm._create("limit",e,"F")}function Fm(e){return wp("limitToLast",e),Mm._create("limitToLast",e,"L")}class Vm extends Am{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Vm(e,t,n)}_apply(e){const t=Hm(e,this.type,this._docOrFields,this._inclusive);return new Sp(e.firestore,e.converter,function(e,t){return new sa(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function Bm(...e){return Vm._create("startAt",e,!0)}function jm(...e){return Vm._create("startAfter",e,!1)}class Um extends Am{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Um(e,t,n)}_apply(e){const t=Hm(e,this.type,this._docOrFields,this._inclusive);return new Sp(e.firestore,e.converter,function(e,t){return new sa(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function zm(...e){return Um._create("endBefore",e,!1)}function qm(...e){return Um._create("endAt",e,!0)}function Hm(e,t,n,r){if(n[0]=(0,c.m9)(n[0]),n[0]instanceof Em)return function(e,t,n,r,i){if(!r)throw new ui(ci.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of la(e))if(o.field.isKeyField())s.push(ho(t,r.key));else{const e=r.data.field(o.field);if(Js(e))throw new ui(ci.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new ui(ci.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new ko(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const i=im(e.firestore);return function(e,t,n,r,i,s){const o=e.explicitOrderBy;if(i.length>o.length)throw new ui(ci.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<i.length;c++){const s=i[c];if(o[c].field.isKeyField()){if("string"!=typeof s)throw new ui(ci.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof s}`);if(!ua(e)&&-1!==s.indexOf("/"))throw new ui(ci.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${s}' contains a slash.`);const n=e.path.child(ki.fromString(s));if(!Oi.isDocumentKey(n))throw new ui(ci.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new Oi(n);a.push(ho(t,i))}else{const e=pm(n,r,s);a.push(e)}}return new ko(a,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function Gm(e,t,n){if("string"==typeof(n=(0,c.m9)(n))){if(""===n)throw new ui(ci.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ua(t)&&-1!==n.indexOf("/"))throw new ui(ci.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(ki.fromString(n));if(!Oi.isDocumentKey(r))throw new ui(ci.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ho(e,new Oi(r))}if(n instanceof Ep)return ho(e,n._key);throw new ui(ci.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vp(n)}.`)}function Km(e,t){if(!Array.isArray(e)||0===e.length)throw new ui(ci.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Wm(e,t){const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new ui(ci.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new ui(ci.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class Zm{convertValue(e,t="none"){switch(io(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Zs(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Qs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw ii()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Rs(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Jp(Zs(e.latitude),Zs(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Ys(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Xs(e));default:return null}}convertTimestamp(e){const t=Ws(e);return new Ei(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ki.fromString(e);si(_u(n));const r=new to(n.get(1),n.get(3)),i=new Oi(n.popFirst(5));return r.isEqual(t)||ti(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
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
 */function Qm(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class Jm extends Zm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Wp(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ep(this.firestore,null,t)}}
/**
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
 */
/**
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
 */
class Ym{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Xm extends Em{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new eg(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Cm("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class eg extends Xm{data(e={}){return super.data(e)}}class tg{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Ym(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new eg(this._firestore,this._userDataWriter,n.key,n,new Ym(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ui(ci.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new eg(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Ym(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new eg(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Ym(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:ng(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function ng(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ii()}}function rg(e,t){return e instanceof Xm&&t instanceof Xm?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof tg&&t instanceof tg&&e._firestore===t._firestore&&Op(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
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
 */function ig(e){e=yp(e,Ep);const t=yp(e.firestore,Rp);return sp(Mp(t),e._key).then((n=>yg(t,e,n)))}class sg extends Zm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Wp(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ep(this.firestore,null,t)}}function og(e){e=yp(e,Ep);const t=yp(e.firestore,Rp),n=Mp(t),r=new sg(t);return ip(n,e._key).then((n=>new Xm(t,r,e._key,n,new Ym(null!==n&&n.hasLocalMutations,!0),e.converter)))}function ag(e){e=yp(e,Ep);const t=yp(e.firestore,Rp);return sp(Mp(t),e._key,{source:"server"}).then((n=>yg(t,e,n)))}function cg(e){e=yp(e,Sp);const t=yp(e.firestore,Rp),n=Mp(t),r=new sg(t);return km(e._query),ap(n,e._query).then((n=>new tg(t,r,e,n)))}function ug(e){e=yp(e,Sp);const t=yp(e.firestore,Rp),n=Mp(t),r=new sg(t);return op(n,e._query).then((n=>new tg(t,r,e,n)))}function lg(e){e=yp(e,Sp);const t=yp(e.firestore,Rp),n=Mp(t),r=new sg(t);return ap(n,e._query,{source:"server"}).then((n=>new tg(t,r,e,n)))}function hg(e,t,n){e=yp(e,Ep);const r=yp(e.firestore,Rp),i=Qm(e.converter,t,n);return vg(r,[sm(im(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,ec.none())])}function dg(e,t,n,...r){e=yp(e,Ep);const i=yp(e.firestore,Rp),s=im(i);let o;return o="string"==typeof(t=(0,c.m9)(t))||t instanceof Zp?fm(s,"updateDoc",e._key,t,n,r):dm(s,"updateDoc",e._key,t),vg(i,[o.toMutation(e._key,ec.exists(!0))])}function fg(e){return vg(yp(e.firestore,Rp),[new fc(e._key,ec.none())])}function pg(e,t){const n=yp(e.firestore,Rp),r=xp(e),i=Qm(e.converter,t);return vg(n,[sm(im(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,ec.exists(!1))]).then((()=>r))}function mg(e,...t){var n,r,i;e=(0,c.m9)(e);let s={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||Dp(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Dp(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let u,l,h;if(e instanceof Ep)l=yp(e.firestore,Rp),h=aa(e._key.path),u={next:n=>{t[o]&&t[o](yg(l,e,n))},error:t[o+1],complete:t[o+2]};else{const n=yp(e,Sp);l=yp(n.firestore,Rp),h=n._query;const r=new sg(l);u={next:e=>{t[o]&&t[o](new tg(l,r,n,e))},error:t[o+1],complete:t[o+2]},km(e._query)}return function(e,t,n,r){const i=new Bf(r),s=new Hd(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>Bd(await tp(e),s))),()=>{i.Ba(),e.asyncQueue.enqueueAndForget((async()=>jd(await tp(e),s)))}}(Mp(l),h,a,u)}function gg(e,t){return cp(Mp(e=yp(e,Rp)),Dp(t)?t:{next:t})}function vg(e,t){return function(e,t){const n=new li;return e.asyncQueue.enqueueAndForget((async()=>of(await Xf(e),t,n))),n.promise}(Mp(e),t)}function yg(e,t,n){const r=n.docs.get(t._key),i=new sg(e);return new Xm(e,i,t._key,r,new Ym(n.hasPendingWrites,n.fromCache),t.converter)}
/**
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
 */
/**
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
 */
const wg={maxAttempts:5};
/**
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
 */class bg{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=im(e)}set(e,t,n){this._verifyNotCommitted();const r=_g(e,this._firestore),i=Qm(r.converter,t,n),s=sm(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,ec.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=_g(e,this._firestore);let s;return s="string"==typeof(t=(0,c.m9)(t))||t instanceof Zp?fm(this._dataReader,"WriteBatch.update",i._key,t,n,r):dm(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(s.toMutation(i._key,ec.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=_g(e,this._firestore);return this._mutations=this._mutations.concat(new fc(t._key,ec.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ui(ci.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function _g(e,t){if((e=(0,c.m9)(e)).firestore!==t)throw new ui(ci.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
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
 */
/**
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
 */class Ig extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=im(e)}get(e){const t=_g(e,this._firestore),n=new Jm(this._firestore);return this._transaction.lookup([t._key]).then((e=>{if(!e||1!==e.length)return ii();const r=e[0];if(r.isFoundDocument())return new Em(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new Em(this._firestore,n,t._key,null,t.converter);throw ii()}))}set(e,t,n){const r=_g(e,this._firestore),i=Qm(r.converter,t,n),s=sm(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){const i=_g(e,this._firestore);let s;return s="string"==typeof(t=(0,c.m9)(t))||t instanceof Zp?fm(this._dataReader,"Transaction.update",i._key,t,n,r):dm(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,s),this}delete(e){const t=_g(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=_g(e,this._firestore),n=new sg(this._firestore);return super.get(e).then((e=>new Xm(this._firestore,n,t._key,e._document,new Ym(!1,!1),t.converter)))}}function Sg(e,t,n){e=yp(e,Rp);const r=Object.assign(Object.assign({},wg),n);return function(e){if(e.maxAttempts<1)throw new ui(ci.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(e,t,n){const r=new li;return e.asyncQueue.enqueueAndForget((async()=>{const i=await ep(e);new zf(e.asyncQueue,i,n,t,r).run()})),r.promise}(Mp(e),(n=>t(new Ig(e,n))),r)}
/**
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
 */function Eg(){return new om("deleteField")}function Tg(){return new cm("serverTimestamp")}function Cg(...e){return new um("arrayUnion",e)}function kg(...e){return new lm("arrayRemove",e)}function xg(e){return new hm("increment",e)}
/**
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
 */new WeakMap;
/**
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
 */!function(e,t=!0){!function(e){Qr=e}(s.SDK_VERSION),(0,s._registerComponent)(new o.wA("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new Rp(new pi(e.getProvider("auth-internal")),new yi(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new ui(ci.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new to(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,s.registerVersion)(Wr,"4.3.0",e),(0,s.registerVersion)(Wr,"4.3.0","esm2017")}();const Ag="@firebase/firestore-compat",Og="0.3.19";
/**
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
 */
function Ng(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new ui("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
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
 */function Dg(){if("undefined"===typeof Uint8Array)throw new ui("unimplemented","Uint8Arrays are not available in this environment.")}function Lg(){if(!Hs())throw new ui("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Pg{constructor(e){this._delegate=e}static fromBase64String(e){return Lg(),new Pg(Wp.fromBase64String(e))}static fromUint8Array(e){return Dg(),new Pg(Wp.fromUint8Array(e))}toBase64(){return Lg(),this._delegate.toBase64()}toUint8Array(){return Dg(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
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
 */function Rg(e){return Mg(e,["next","error","complete"])}function Mg(e,t){if("object"!==typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"===typeof n[r])return!0;return!1}
/**
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
 */class $g{enableIndexedDbPersistence(e,t){return Fp(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return Vp(e._delegate)}clearIndexedDbPersistence(e){return jp(e._delegate)}}class Fg{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof to||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||ni("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){Ip(this._delegate,e,t,n)}enableNetwork(){return zp(this._delegate)}disableNetwork(){return qp(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,pp("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Up(this._delegate)}onSnapshotsInSync(e){return gg(this._delegate,e)}get app(){if(!this._appCompat)throw new ui("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Xg(this,Cp(this._delegate,e))}catch(t){throw Hg(t,"collection()","Firestore.collection()")}}doc(e){try{return new qg(this,xp(this._delegate,e))}catch(t){throw Hg(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Qg(this,kp(this._delegate,e))}catch(t){throw Hg(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Sg(this._delegate,(t=>e(new jg(this,t))))}batch(){return Mp(this._delegate),new Ug(new bg(this._delegate,(e=>vg(this._delegate,e))))}loadBundle(e){return Hp(this._delegate,e)}namedQuery(e){return Gp(this._delegate,e).then((e=>e?new Qg(this,e):null))}}class Vg extends Zm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pg(new Wp(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return qg.forKey(t,this.firestore,null)}}function Bg(e){Xr(e)}class jg{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Vg(e)}get(e){const t=ev(e);return this._delegate.get(t).then((e=>new Wg(this._firestore,new Xm(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter))))}set(e,t,n){const r=ev(e);return n?(Ng("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=ev(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=ev(e);return this._delegate.delete(t),this}}class Ug{constructor(e){this._delegate=e}set(e,t,n){const r=ev(e);return n?(Ng("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=ev(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=ev(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class zg{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new eg(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Zg(this._firestore,n),null!==t&&void 0!==t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=zg.INSTANCES;let r=n.get(e);r||(r=new WeakMap,n.set(e,r));let i=r.get(t);return i||(i=new zg(e,new Vg(e),t),r.set(t,i)),i}}zg.INSTANCES=new WeakMap;class qg{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Vg(e)}static forPath(e,t,n){if(e.length%2!==0)throw new ui("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new qg(t,new Ep(t._delegate,n,new Oi(e)))}static forKey(e,t,n){return new qg(t,new Ep(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new Xg(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Xg(this.firestore,Cp(this._delegate,e))}catch(t){throw Hg(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=(0,c.m9)(e),e instanceof Ep&&Ap(this._delegate,e)}set(e,t){t=Ng("DocumentReference.set",t);try{return t?hg(this._delegate,e,t):hg(this._delegate,e)}catch(n){throw Hg(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?dg(this._delegate,e):dg(this._delegate,e,t,...n)}catch(r){throw Hg(r,"updateDoc()","DocumentReference.update()")}}delete(){return fg(this._delegate)}onSnapshot(...e){const t=Gg(e),n=Kg(e,(e=>new Wg(this.firestore,new Xm(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))));return mg(this._delegate,t,n)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?og(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?ag(this._delegate):ig(this._delegate),t.then((e=>new Wg(this.firestore,new Xm(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))))}withConverter(e){return new qg(this.firestore,e?this._delegate.withConverter(zg.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Hg(e,t,n){return e.message=e.message.replace(t,n),e}function Gg(e){for(const t of e)if("object"===typeof t&&!Rg(t))return t;return{}}function Kg(e,t){var n,r;let i;return i=Rg(e[0])?e[0]:Rg(e[1])?e[1]:"function"===typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{i.next&&i.next(t(e))},error:null===(n=i.error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class Wg{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new qg(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return rg(this._delegate,e._delegate)}}class Zg extends Wg{data(e){const t=this._delegate.data(e);return oi(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class Qg{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Vg(e)}where(e,t,n){try{return new Qg(this.firestore,Om(this._delegate,Dm(e,t,n)))}catch(r){throw Hg(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Qg(this.firestore,Om(this._delegate,Rm(e,t)))}catch(n){throw Hg(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Qg(this.firestore,Om(this._delegate,$m(e)))}catch(t){throw Hg(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Qg(this.firestore,Om(this._delegate,Fm(e)))}catch(t){throw Hg(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Qg(this.firestore,Om(this._delegate,Bm(...e)))}catch(t){throw Hg(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Qg(this.firestore,Om(this._delegate,jm(...e)))}catch(t){throw Hg(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Qg(this.firestore,Om(this._delegate,zm(...e)))}catch(t){throw Hg(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Qg(this.firestore,Om(this._delegate,qm(...e)))}catch(t){throw Hg(t,"endAt()","Query.endAt()")}}isEqual(e){return Op(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?ug(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?lg(this._delegate):cg(this._delegate),t.then((e=>new Yg(this.firestore,new tg(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))))}onSnapshot(...e){const t=Gg(e),n=Kg(e,(e=>new Yg(this.firestore,new tg(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))));return mg(this._delegate,t,n)}withConverter(e){return new Qg(this.firestore,e?this._delegate.withConverter(zg.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class Jg{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Zg(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Yg{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Qg(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map((e=>new Zg(this._firestore,e)))}docChanges(e){return this._delegate.docChanges(e).map((e=>new Jg(this._firestore,e)))}forEach(e,t){this._delegate.forEach((n=>{e.call(t,new Zg(this._firestore,n))}))}isEqual(e){return rg(this._delegate,e._delegate)}}class Xg extends Qg{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new qg(this.firestore,e):null}doc(e){try{return new qg(this.firestore,void 0===e?xp(this._delegate):xp(this._delegate,e))}catch(t){throw Hg(t,"doc()","CollectionReference.doc()")}}add(e){return pg(this._delegate,e).then((e=>new qg(this.firestore,e)))}isEqual(e){return Ap(this._delegate,e._delegate)}withConverter(e){return new Xg(this.firestore,e?this._delegate.withConverter(zg.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ev(e){return yp(e,Ep)}
/**
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
 */class tv{constructor(...e){this._delegate=new Zp(...e)}static documentId(){return new tv(Ai.keyField().canonicalString())}isEqual(e){return e=(0,c.m9)(e),e instanceof Zp&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
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
 */class nv{constructor(e){this._delegate=e}static serverTimestamp(){const e=Tg();return e._methodName="FieldValue.serverTimestamp",new nv(e)}static delete(){const e=Eg();return e._methodName="FieldValue.delete",new nv(e)}static arrayUnion(...e){const t=Cg(...e);return t._methodName="FieldValue.arrayUnion",new nv(t)}static arrayRemove(...e){const t=kg(...e);return t._methodName="FieldValue.arrayRemove",new nv(t)}static increment(e){const t=xg(e);return t._methodName="FieldValue.increment",new nv(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
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
 */const rv={Firestore:Fg,GeoPoint:Jp,Timestamp:Ei,Blob:Pg,Transaction:jg,WriteBatch:Ug,DocumentReference:qg,DocumentSnapshot:Wg,Query:Qg,QueryDocumentSnapshot:Zg,QuerySnapshot:Yg,CollectionReference:Xg,FieldPath:tv,FieldValue:nv,setLogLevel:Bg,CACHE_SIZE_UNLIMITED:Pp};function iv(e,t){e.INTERNAL.registerComponent(new o.wA("firestore-compat",(e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("firestore").getImmediate();return t(n,r)}),"PUBLIC").setServiceProps(Object.assign({},rv)))}
/**
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
 */function sv(e){iv(e,((e,t)=>new Fg(e,t,new $g))),e.registerVersion(Ag,Og)}sv(i.Z)}}]);
//# sourceMappingURL=chunk-vendors.ed061ac0.js.map