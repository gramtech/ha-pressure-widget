function t(t,e,s,i){var n,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,s,o):n(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;let r=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&n.set(e,t))}return t}toString(){return this.cssText}};const o=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:a,defineProperty:l,getOwnPropertyDescriptor:h,getOwnPropertyNames:c,getOwnPropertySymbols:d,getPrototypeOf:u}=Object,p=globalThis,f=p.trustedTypes,$=f?f.emptyScript:"",m=p.reactiveElementPolyfillSupport,_=(t,e)=>t,g={toAttribute(t,e){switch(e){case Boolean:t=t?$:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},y=(t,e)=>!a(t,e),v={attribute:!0,type:String,converter:g,reflect:!1,useDefault:!1,hasChanged:y};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&l(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const r=i?.call(this);n?.call(this,e),this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??v}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const t=this.properties,e=[...c(t),...d(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(s)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of i){const i=document.createElement("style"),n=e.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=s.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const n=(void 0!==s.converter?.toAttribute?s.converter:g).toAttribute(e,s.type);this._$Em=t,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:g;this._$Em=i;const r=n.fromAttribute(e,t.type);this[i]=r??this._$Ej?.get(i)??r,this._$Em=null}}requestUpdate(t,e,s,i=!1,n){if(void 0!==t){const r=this.constructor;if(!1===i&&(n=this[t]),s??=r.getPropertyOptions(t),!((s.hasChanged??y)(n,e)||s.useDefault&&s.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:n},r){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==n||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[_("elementProperties")]=new Map,b[_("finalized")]=new Map,m?.({ReactiveElement:b}),(p.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A=globalThis,w=t=>t,x=A.trustedTypes,E=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+C,k=`<${P}>`,U=document,M=()=>U.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,D=Array.isArray,H="[ \t\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,R=/>/g,j=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,I=/"/g,V=/^(?:script|style|textarea|title)$/i,L=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),F=L(1),B=L(2),W=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),J=new WeakMap,K=U.createTreeWalker(U,129);function Z(t,e){if(!D(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const G=(t,e)=>{const s=t.length-1,i=[];let n,r=2===e?"<svg>":3===e?"<math>":"",o=T;for(let e=0;e<s;e++){const s=t[e];let a,l,h=-1,c=0;for(;c<s.length&&(o.lastIndex=c,l=o.exec(s),null!==l);)c=o.lastIndex,o===T?"!--"===l[1]?o=N:void 0!==l[1]?o=R:void 0!==l[2]?(V.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=j):void 0!==l[3]&&(o=j):o===j?">"===l[0]?(o=n??T,h=-1):void 0===l[1]?h=-2:(h=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?j:'"'===l[3]?I:z):o===I||o===z?o=j:o===N||o===R?o=T:(o=j,n=void 0);const d=o===j&&t[e+1].startsWith("/>")?" ":"";r+=o===T?s+k:h>=0?(i.push(a),s.slice(0,h)+S+s.slice(h)+C+d):s+C+(-2===h?e:d)}return[Z(t,r+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class Y{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,r=0;const o=t.length-1,a=this.parts,[l,h]=G(t,e);if(this.el=Y.createElement(l,s),K.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=K.nextNode())&&a.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(S)){const e=h[r++],s=i.getAttribute(t).split(C),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:o[2],strings:s,ctor:"."===o[1]?st:"?"===o[1]?it:"@"===o[1]?nt:et}),i.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:n}),i.removeAttribute(t));if(V.test(i.tagName)){const t=i.textContent.split(C),e=t.length-1;if(e>0){i.textContent=x?x.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],M()),K.nextNode(),a.push({type:2,index:++n});i.append(t[e],M())}}}else if(8===i.nodeType)if(i.data===P)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(C,t+1));)a.push({type:7,index:n}),t+=C.length-1}n++}}static createElement(t,e){const s=U.createElement("template");return s.innerHTML=t,s}}function Q(t,e,s=t,i){if(e===W)return e;let n=void 0!==i?s._$Co?.[i]:s._$Cl;const r=O(e)?void 0:e._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(t),n._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=n:s._$Cl=n),void 0!==n&&(e=Q(t,n._$AS(t,e.values),n,i)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??U).importNode(e,!0);K.currentNode=i;let n=K.nextNode(),r=0,o=0,a=s[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new tt(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new rt(n,this,t)),this._$AV.push(e),a=s[++o]}r!==a?.index&&(n=K.nextNode(),r++)}return K.currentNode=U,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),O(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>D(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(U.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Y.createElement(Z(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new X(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=J.get(t.strings);return void 0===e&&J.set(t.strings,e=new Y(t)),e}k(t){D(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new tt(this.O(M()),this.O(M()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=w(t).nextSibling;w(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=q}_$AI(t,e=this,s,i){const n=this.strings;let r=!1;if(void 0===n)t=Q(this,t,e,0),r=!O(t)||t!==this._$AH&&t!==W,r&&(this._$AH=t);else{const i=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=Q(this,i[s+o],e,o),a===W&&(a=this._$AH[o]),r||=!O(a)||a!==this._$AH[o],a===q?t=q:t!==q&&(t+=(a??"")+n[o+1]),this._$AH[o]=a}r&&!i&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class st extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class it extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class nt extends et{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??q)===W)return;const s=this._$AH,i=t===q&&s!==q||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==q&&(s===q||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const ot=A.litHtmlPolyfillSupport;ot?.(Y,tt),(A.litHtmlVersions??=[]).push("3.3.3");const at=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class lt extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let n=i._$litPart$;if(void 0===n){const t=s?.renderBefore??null;i._$litPart$=n=new tt(e.insertBefore(M(),t),t,void 0,s??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}lt._$litElement$=!0,lt.finalized=!0,at.litElementHydrateSupport?.({LitElement:lt});const ht=at.litElementPolyfillSupport;ht?.({LitElement:lt}),(at.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct=t=>(e,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},dt={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:y},ut=(t=dt,e,s)=>{const{kind:i,metadata:n}=s;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),r.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const n=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,n,t,!0,s)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const n=this[i];e.call(this,s),this.requestUpdate(i,n,t,!0,s)}}throw Error("Unsupported decorator location: "+i)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pt(t){return(e,s)=>"object"==typeof s?ut(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ft(t){return pt({...t,state:!0,attribute:!1})}const $t="ha-pressure-widget",mt="ha-pressure-widget-editor",_t=[{key:"stormy",label:"Stormy",from:950,to:980,color:"#8b1a1a"},{key:"rain",label:"Rain",from:980,to:1e3,color:"#b5651d"},{key:"change",label:"Change",from:1e3,to:1015,color:"#c9a227"},{key:"fair",label:"Fair",from:1015,to:1030,color:"#4a7a3c"},{key:"v-dry",label:"Very Dry",from:1030,to:1050,color:"#2f5f4f"}],gt={hPa:{major:10,minor:2},inHg:{major:.5,minor:.1}};function yt(t,e,s){if(s<=e)return-135;return 270*((Math.min(s,Math.max(e,t))-e)/(s-e))-135}function vt(t,e,s,i){const n=(i-90)*Math.PI/180;return{x:t+s*Math.cos(n),y:e+s*Math.sin(n)}}const bt=33.8639,At=new Set(["inhg","inHg","in"]),wt=new Set(["hpa","mbar","mb"]);function xt(t){return t/bt}function Et(t,e){return"inHg"===e?xt(t):t}function St(t,e){return"inHg"===e?t*bt:t}function Ct(t,e,s){return e===s?t:Et(St(t,e),s)}function Pt(t,e){const s=t.states[e]?.attributes?.unit_of_measurement;if(!s)return"hPa";const i=s.toLowerCase();return At.has(i)||i.includes("inhg")?"inHg":(wt.has(i),"hPa")}const kt=100;function Ut(t,e,s){return _t.map(i=>{const n=Et(i.from,s),r=Et(i.to,s);if(r<=t||n>=e)return B``;const o=yt(n,t,e),a=yt(r,t,e);if(a<=o)return B``;const l=function(t,e,s,i,n){const r=vt(t,e,s,i),o=vt(t,e,s,n),a=n-i<=180?0:1;return`M ${r.x} ${r.y} A ${s} ${s} 0 ${a} 1 ${o.x} ${o.y}`}(kt,kt,86,o,a);return B`<path
      d=${l}
      stroke=${i.color}
      stroke-width=${9}
      fill="none"
    />`})}function Mt(t,e,s){const{major:i,minor:n}=gt[s],r=function(t,e,s,i){if(s<=0||i<=0||e<=t)return[];const n=[],r=i/1e3;for(let o=t;o<=e+r;o+=i){const a=Math.round(o/i)*i,l=Math.abs(a/s-Math.round(a/s))<r;n.push({value:a,angle:yt(a,t,e),major:l})}return n}(t,e,i,n);return r.map(t=>{const e=t.major?8:4,s=vt(kt,kt,72-e,t.angle),i=vt(kt,kt,72,t.angle),n=B`<line
      x1=${s.x} y1=${s.y} x2=${i.x} y2=${i.y}
      class=${t.major?"tick tick-major":"tick tick-minor"}
    />`;if(!t.major)return n;const r=vt(kt,kt,50,t.angle),o=B`<text x=${r.x} y=${r.y} class="tick-label" text-anchor="middle" dominant-baseline="middle">${Math.round(10*t.value)/10}</text>`;return B`${n}${o}`})}function Ot(t){const{min:e,max:s,unit:i,value:n,pastValue:r,needleColor:o}=t;return B`
    <svg viewBox="0 0 200 200" class="dial" role="img" aria-label="Barometer dial">
      <circle cx=${kt} cy=${kt} r="97" class="bezel" />
      <circle cx=${kt} cy=${kt} r="90" class="face" />
      ${Ut(e,s,i)}
      ${Mt(e,s,i)}
      ${function(t,e,s){return _t.map(i=>{const n=Et(i.from,s),r=Et(i.to,s),o=(Math.max(n,t)+Math.min(r,e))/2;if(o<t||o>e)return B``;const a=yt(o,t,e),l=vt(kt,kt,78,a);return B`<text x=${l.x} y=${l.y} class="zone-label" text-anchor="middle" dominant-baseline="middle">${i.label}</text>`})}(e,s,i)}
      ${function(t,e,s){if(null===t)return B``;const i=yt(t,e,s),n=vt(kt,kt,88,i),r=vt(kt,kt,95,i);return B`<line
    x1=${n.x} y1=${n.y} x2=${r.x} y2=${r.y}
    class="trend-marker"
  />`}(r,e,s)}
      ${function(t,e,s,i){if(null===t)return B``;const n=yt(t,e,s);return B`<g class="needle" transform="rotate(${n} ${kt} ${kt})">
    <polygon
      points="${kt},${38} ${97},${114} ${103},${114}"
      fill=${i}
    />
  </g>`}(n,e,s,o)}
      <circle cx=${kt} cy=${kt} r="6" class="hub" />
    </svg>
  `}function Dt(t,e,s){const i=t-e;return Math.abs(i)<s?"steady":i>0?"rising":"falling"}function Ht(t){return`ha-pressure-widget-trend-${t}`}class Tt{constructor(){this.cache=null,this.cachedEntityId=null,this.inFlight=null}getCached(t){return this.cachedEntityId!==t&&(this.cachedEntityId=t,this.cache=function(t){try{const e=localStorage.getItem(Ht(t));return e?JSON.parse(e):null}catch{return null}}(t)),this.cache}shouldFetch(t){const e=this.getCached(t);return!e||Date.now()-e.fetchedAt>3e5}update(t,e,s,i,n,r,o,a){const l=this.getCached(e);return this.inFlight||!this.shouldFetch(e)||(this.inFlight=async function(t,e,s){const i=`history/period/${new Date(Date.now()-36e5*s).toISOString()}?filter_entity_id=${encodeURIComponent(e)}&minimal_response&no_attributes`,n=await t.callApi("GET",i),r=n?.[0];if(!r?.length)return null;const o=r[0],a=o.state??o.s;if(void 0===a)return null;const l=parseFloat(a);return Number.isFinite(l)?l:null}(t,e,r).then(t=>{if(null===t)return{direction:"unknown",pastValueDisplay:null,fetchedAt:Date.now()};const e=Ct(t,i,n);return{direction:Dt(s,e,o),pastValueDisplay:e,fetchedAt:Date.now()}}).catch(()=>({direction:l?.direction??"unknown",pastValueDisplay:l?.pastValueDisplay??null,fetchedAt:Date.now()})).then(t=>(this.cache=t,function(t,e){try{localStorage.setItem(Ht(t),JSON.stringify(e))}catch{}}(e,t),this.inFlight=null,a?.(t),t))),l}}const Nt=[{name:"entity",selector:{entity:{domain:"sensor"}}},{name:"name",selector:{text:{}}},{name:"unit",selector:{select:{mode:"dropdown",options:[{value:"auto",label:"Auto-detect"},{value:"hPa",label:"hPa"},{value:"inHg",label:"inHg"}]}}},{name:"trend_hours",selector:{number:{min:1,max:12,step:1,mode:"box"}}},{name:"trend_threshold",selector:{number:{min:0,step:.1,mode:"box"}}},{name:"needle_color",selector:{text:{}}}],Rt={entity:"Pressure sensor entity",name:"Name (optional)",unit:"Display unit",trend_hours:"Trend lookback (hours)",trend_threshold:"Trend threshold",needle_color:"Needle color (optional)"};function jt(t){return Rt[t.name]??t.name}let zt=class extends lt{setConfig(t){this._config=t}render(){return this.hass&&this._config?F`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${Nt}
        .computeLabel=${jt}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:F``}_valueChanged(t){!function(t,e,s={},i={}){const n=new CustomEvent(e,{bubbles:i.bubbles??!0,cancelable:i.cancelable??!1,composed:i.composed??!0,detail:s});t.dispatchEvent(n)}(this,"config-changed",{config:t.detail.value})}};t([pt({attribute:!1})],zt.prototype,"hass",void 0),t([ft()],zt.prototype,"_config",void 0),zt=t([ct(mt)],zt);const It={rising:"↑",falling:"↓",steady:"→",unknown:""},Vt={rising:"Rising",falling:"Falling",steady:"Steady",unknown:""};let Lt=class extends lt{constructor(){super(...arguments),this._trendDirection="unknown",this._pastValueDisplay=null,this._tracker=new Tt,this._lastEntityUpdate=null}setConfig(t){if(!t.entity)throw new Error("You must specify a pressure sensor entity.");this._config=t}getCardSize(){return 4}static getConfigElement(){return document.createElement(mt)}static getStubConfig(t){const e=Object.values(t?.states??{}).find(t=>t.entity_id.startsWith("sensor.")&&"atmospheric_pressure"===t.attributes.device_class);return{type:"custom:ha-pressure-widget",entity:e?.entity_id??""}}willUpdate(t){t.has("hass")&&this._maybeUpdateTrend()}_maybeUpdateTrend(){if(!this.hass||!this._config?.entity)return;const t=this.hass.states[this._config.entity];if(!t)return;const e=parseFloat(t.state);if(!Number.isFinite(e))return;const s=Pt(this.hass,this._config.entity),i=this._config.unit??s,n=Ct(e,s,i),r=this._config.trend_hours??3,o=this._config.trend_threshold??("inHg"===i?xt(1.5):1.5);if(this._lastEntityUpdate===t.last_updated)return;this._lastEntityUpdate=t.last_updated;const a=this._tracker.update(this.hass,this._config.entity,n,s,i,r,o,t=>{this._trendDirection=t.direction,this._pastValueDisplay=t.pastValueDisplay});this._trendDirection=a?.direction??"unknown",this._pastValueDisplay=a?.pastValueDisplay??null}render(){if(!this._config||!this.hass)return F``;const t=this.hass.states[this._config.entity];if(!t)return F`<ha-card>
        <div class="warning">Entity not found: ${this._config.entity}</div>
      </ha-card>`;const e=Pt(this.hass,this._config.entity),s=this._config.unit??e,i=parseFloat(t.state),n=Number.isFinite(i),r=n?Ct(i,e,s):null,o="inHg"===s?{min:xt(950),max:xt(1050)}:{min:950,max:1050};const a=this._config.min??o.min,l=this._config.max??o.max,h=this._config.needle_color||"var(--primary-text-color, #333)",c=this._config.name??t.attributes.friendly_name??this._config.entity;return F`
      <ha-card>
        <div class="card-content">
          <div class="title">${c}</div>
          ${Ot({min:a,max:l,unit:s,value:r,pastValue:this._pastValueDisplay,needleColor:h})}
          <div class="readout">
            <span class="value">${n?r.toFixed(1):"--"}</span>
            <span class="unit">${s}</span>
          </div>
          <div class="trend trend-${this._trendDirection}">
            <span class="arrow">${It[this._trendDirection]}</span>
            <span class="label">${Vt[this._trendDirection]}</span>
          </div>
        </div>
      </ha-card>
    `}};Lt.styles=((t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new r(s,t,i)})`
    :host {
      display: block;
    }
    .card-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 16px;
    }
    .title {
      font-size: 1rem;
      font-weight: 500;
      color: var(--primary-text-color, #212121);
      margin-bottom: 4px;
      text-align: center;
    }
    .warning {
      padding: 16px;
      color: var(--error-color, #db4437);
    }
    .dial {
      width: 100%;
      max-width: 260px;
      height: auto;
    }
    .bezel {
      fill: #cfc3a5;
      stroke: #7a6a45;
      stroke-width: 2;
    }
    .face {
      fill: #f2e9d0;
      stroke: #b8aa80;
      stroke-width: 1;
    }
    .tick {
      stroke: #4a4232;
    }
    .tick-major {
      stroke-width: 1.6;
    }
    .tick-minor {
      stroke-width: 0.8;
      opacity: 0.7;
    }
    .tick-label {
      font-size: 7px;
      fill: #3a3426;
    }
    .zone-label {
      font-size: 6px;
      fill: #2b2b2b;
      font-weight: 600;
      letter-spacing: 0.3px;
    }
    .needle {
      filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.4));
    }
    .hub {
      fill: #333;
      stroke: #111;
      stroke-width: 1;
    }
    .trend-marker {
      stroke: #555;
      stroke-width: 1.5;
      opacity: 0.55;
    }
    .readout {
      margin-top: 4px;
      font-size: 1.4rem;
      font-weight: 600;
      color: var(--primary-text-color, #212121);
    }
    .readout .unit {
      font-size: 0.9rem;
      font-weight: 400;
      margin-left: 4px;
      color: var(--secondary-text-color, #727272);
    }
    .trend {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 0.9rem;
      margin-top: 2px;
    }
    .trend-rising {
      color: #c0392b;
    }
    .trend-falling {
      color: #2471a3;
    }
    .trend-steady {
      color: #27633f;
    }
    .trend .arrow {
      font-size: 1.1rem;
      line-height: 1;
    }
  `,t([pt({attribute:!1})],Lt.prototype,"hass",void 0),t([ft()],Lt.prototype,"_config",void 0),t([ft()],Lt.prototype,"_trendDirection",void 0),t([ft()],Lt.prototype,"_pastValueDisplay",void 0),Lt=t([ct($t)],Lt),window.customCards=window.customCards||[],window.customCards.push({type:$t,name:"Analog Barometer",description:"A classic analog-style barometer with pressure trend tracking."});export{Lt as HaPressureWidget};
