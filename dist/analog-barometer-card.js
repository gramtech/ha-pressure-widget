function t(t,e,s,i){var r,n=arguments.length,o=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,s,o):r(e,s))||o);return n>3&&o&&Object.defineProperty(e,s,o),o}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),r=new WeakMap;let n=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&r.set(e,t))}return t}toString(){return this.cssText}};const o=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:a,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:h,getOwnPropertySymbols:d,getPrototypeOf:u}=Object,f=globalThis,p=f.trustedTypes,y=p?p.emptyScript:"",$=f.reactiveElementPolyfillSupport,m=(t,e)=>t,g={toAttribute(t,e){switch(e){case Boolean:t=t?y:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},_=(t,e)=>!a(t,e),b={attribute:!0,type:String,converter:g,reflect:!1,useDefault:!1,hasChanged:_};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let v=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&l(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const n=i?.call(this);r?.call(this,e),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...h(t),...d(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(s)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of i){const i=document.createElement("style"),r=e.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=s.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const r=(void 0!==s.converter?.toAttribute?s.converter:g).toAttribute(e,s.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:g;this._$Em=i;const n=r.fromAttribute(e,t.type);this[i]=n??this._$Ej?.get(i)??n,this._$Em=null}}requestUpdate(t,e,s,i=!1,r){if(void 0!==t){const n=this.constructor;if(!1===i&&(r=this[t]),s??=n.getPropertyOptions(t),!((s.hasChanged??_)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==r||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[m("elementProperties")]=new Map,v[m("finalized")]=new Map,$?.({ReactiveElement:v}),(f.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A=globalThis,k=t=>t,w=A.trustedTypes,x=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+S,P=`<${C}>`,U=document,M=()=>U.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,D=Array.isArray,H="[ \t\n\f\r]",z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,N=/>/g,R=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,L=/"/g,F=/^(?:script|style|textarea|title)$/i,I=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),V=I(1),B=I(2),W=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),G=new WeakMap,J=U.createTreeWalker(U,129);function K(t,e){if(!D(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(e):e}const Z=(t,e)=>{const s=t.length-1,i=[];let r,n=2===e?"<svg>":3===e?"<math>":"",o=z;for(let e=0;e<s;e++){const s=t[e];let a,l,c=-1,h=0;for(;h<s.length&&(o.lastIndex=h,l=o.exec(s),null!==l);)h=o.lastIndex,o===z?"!--"===l[1]?o=T:void 0!==l[1]?o=N:void 0!==l[2]?(F.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=R):void 0!==l[3]&&(o=R):o===R?">"===l[0]?(o=r??z,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?R:'"'===l[3]?L:j):o===L||o===j?o=R:o===T||o===N?o=z:(o=R,r=void 0);const d=o===R&&t[e+1].startsWith("/>")?" ":"";n+=o===z?s+P:c>=0?(i.push(a),s.slice(0,c)+E+s.slice(c)+S+d):s+S+(-2===c?e:d)}return[K(t,n+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class Y{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0;const o=t.length-1,a=this.parts,[l,c]=Z(t,e);if(this.el=Y.createElement(l,s),J.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=J.nextNode())&&a.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(E)){const e=c[n++],s=i.getAttribute(t).split(S),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:o[2],strings:s,ctor:"."===o[1]?st:"?"===o[1]?it:"@"===o[1]?rt:et}),i.removeAttribute(t)}else t.startsWith(S)&&(a.push({type:6,index:r}),i.removeAttribute(t));if(F.test(i.tagName)){const t=i.textContent.split(S),e=t.length-1;if(e>0){i.textContent=w?w.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],M()),J.nextNode(),a.push({type:2,index:++r});i.append(t[e],M())}}}else if(8===i.nodeType)if(i.data===C)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(S,t+1));)a.push({type:7,index:r}),t+=S.length-1}r++}}static createElement(t,e){const s=U.createElement("template");return s.innerHTML=t,s}}function Q(t,e,s=t,i){if(e===W)return e;let r=void 0!==i?s._$Co?.[i]:s._$Cl;const n=O(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(e=Q(t,r._$AS(t,e.values),r,i)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??U).importNode(e,!0);J.currentNode=i;let r=J.nextNode(),n=0,o=0,a=s[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new tt(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new nt(r,this,t)),this._$AV.push(e),a=s[++o]}n!==a?.index&&(r=J.nextNode(),n++)}return J.currentNode=U,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),O(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>D(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(U.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Y.createElement(K(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new X(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=G.get(t.strings);return void 0===e&&G.set(t.strings,e=new Y(t)),e}k(t){D(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new tt(this.O(M()),this.O(M()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=k(t).nextSibling;k(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=q}_$AI(t,e=this,s,i){const r=this.strings;let n=!1;if(void 0===r)t=Q(this,t,e,0),n=!O(t)||t!==this._$AH&&t!==W,n&&(this._$AH=t);else{const i=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=Q(this,i[s+o],e,o),a===W&&(a=this._$AH[o]),n||=!O(a)||a!==this._$AH[o],a===q?t=q:t!==q&&(t+=(a??"")+r[o+1]),this._$AH[o]=a}n&&!i&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class st extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class it extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class rt extends et{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??q)===W)return;const s=this._$AH,i=t===q&&s!==q||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==q&&(s===q||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const ot=A.litHtmlPolyfillSupport;ot?.(Y,tt),(A.litHtmlVersions??=[]).push("3.3.3");const at=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let lt=class extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let r=i._$litPart$;if(void 0===r){const t=s?.renderBefore??null;i._$litPart$=r=new tt(e.insertBefore(M(),t),t,void 0,s??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}};lt._$litElement$=!0,lt.finalized=!0,at.litElementHydrateSupport?.({LitElement:lt});const ct=at.litElementPolyfillSupport;ct?.({LitElement:lt}),(at.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ht=t=>(e,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},dt={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:_},ut=(t=dt,e,s)=>{const{kind:i,metadata:r}=s;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),n.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const r=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,r,t,!0,s)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const r=this[i];e.call(this,s),this.requestUpdate(i,r,t,!0,s)}}throw Error("Unsupported decorator location: "+i)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ft(t){return(e,s)=>"object"==typeof s?ut(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pt(t){return ft({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yt=1;class $t{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mt=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends $t{constructor(t){if(super(t),t.type!==yt||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const s=t.element.classList;for(const t of this.st)t in e||(s.remove(t),this.st.delete(t));for(const t in e){const i=!!e[t];i===this.st.has(t)||this.nt?.has(t)||(i?(s.add(t),this.st.add(t)):(s.remove(t),this.st.delete(t)))}return W}}),gt="analog-barometer-card",_t="analog-barometer-card-editor",bt={classic:"#333333",silver:"#222222",dark:"#e8e8e8",light:"#333333","led-backlit":"#ff4d4d",fluorescent:"#baff29",futuristic:"#ff2fd0"},vt=[{key:"stormy",label:"Stormy",from:950,to:980,color:"#8b1a1a"},{key:"rain",label:"Rain",from:980,to:1e3,color:"#b5651d"},{key:"change",label:"Change",from:1e3,to:1015,color:"#c9a227"},{key:"fair",label:"Fair",from:1015,to:1030,color:"#4a7a3c"},{key:"v-dry",label:"Very Dry",from:1030,to:1050,color:"#2f5f4f"}],At={hPa:{major:10,minor:2},inHg:{major:.5,minor:.1}};function kt(t,e,s){if(s<=e)return-135;return 270*((Math.min(s,Math.max(e,t))-e)/(s-e))-135}function wt(t,e,s,i){const r=(i-90)*Math.PI/180;return{x:t+s*Math.cos(r),y:e+s*Math.sin(r)}}function xt(t,e,s,i,r){const n=wt(t,e,s,i),o=wt(t,e,s,r),a=r-i<=180?0:1;return`M ${n.x} ${n.y} A ${s} ${s} 0 ${a} 1 ${o.x} ${o.y}`}const Et=33.8639,St=new Set(["inhg","inHg","in"]),Ct=new Set(["hpa","mbar","mb"]);function Pt(t){return t/Et}function Ut(t,e){return"inHg"===e?Pt(t):t}function Mt(t,e){return"inHg"===e?t*Et:t}function Ot(t,e,s){return e===s?t:Ut(Mt(t,e),s)}function Dt(t,e){const s=t.states[e]?.attributes?.unit_of_measurement;if(!s)return"hPa";const i=s.toLowerCase();return St.has(i)||i.includes("inhg")?"inHg":(Ct.has(i),"hPa")}const Ht=100;function zt(t,e,s){const{major:i,minor:r}=At[s],n=function(t,e,s,i){if(s<=0||i<=0||e<=t)return[];const r=[],n=i/1e3;for(let o=t;o<=e+n;o+=i){const a=Math.round(o/i)*i,l=Math.abs(a/s-Math.round(a/s))<n;r.push({value:a,angle:kt(a,t,e),major:l})}return r}(t,e,i,r);return n.map(t=>{const e=t.major?8:4,s=wt(Ht,Ht,72-e,t.angle),i=wt(Ht,Ht,72,t.angle),r=B`<line
      x1=${s.x} y1=${s.y} x2=${i.x} y2=${i.y}
      class=${t.major?"tick tick-major":"tick tick-minor"}
    />`;if(!t.major)return r;const n=wt(Ht,Ht,50,t.angle),o=B`<text x=${n.x} y=${n.y} class="tick-label" text-anchor="middle" dominant-baseline="middle">${Math.round(10*t.value)/10}</text>`;return B`${r}${o}`})}function Tt(t){const{min:e,max:s,unit:i,value:r,pastValue:n,needleColor:o}=t;return B`
    <svg viewBox="0 0 200 200" class="dial" role="img" aria-label="Barometer dial">
      <defs>
        <radialGradient id="barometer-silver-face" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stop-color="#fdfdfd" />
          <stop offset="55%" stop-color="#d8d8d8" />
          <stop offset="100%" stop-color="#a8a8a8" />
        </radialGradient>
        <linearGradient id="barometer-silver-bezel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f2f2f2" />
          <stop offset="25%" stop-color="#bdbdbd" />
          <stop offset="50%" stop-color="#e8e8e8" />
          <stop offset="75%" stop-color="#9c9c9c" />
          <stop offset="100%" stop-color="#e0e0e0" />
        </linearGradient>
      </defs>
      <circle cx=${Ht} cy=${Ht} r="97" class="bezel" />
      <circle cx=${Ht} cy=${Ht} r="90" class="face" />
      ${function(t,e,s){return vt.map(i=>{const r=Ut(i.from,s),n=Ut(i.to,s);if(n<=t||r>=e)return B``;const o=kt(r,t,e),a=kt(n,t,e);if(a<=o)return B``;const l=xt(Ht,Ht,86,o,a);return B`<path
      d=${l}
      stroke=${i.color}
      stroke-width=${9}
      fill="none"
    />`})}(e,s,i)}
      ${zt(e,s,i)}
      ${function(t,e,s){return vt.map(i=>{const r=Math.max(Ut(i.from,s),t),n=Math.min(Ut(i.to,s),e);if(n<=r)return B``;const o=kt(r,t,e),a=kt(n,t,e),l=`zone-label-path-${i.key}`,c=xt(Ht,Ht,77,o,a);return B`
      <path id=${l} d=${c} fill="none" stroke="none" />
      <text class="zone-label" dominant-baseline="middle">
        <textPath href=${"#"+l} startOffset="50%" text-anchor="middle">${i.label}</textPath>
      </text>
    `})}(e,s,i)}
      ${function(t,e,s){if(null===t)return B``;const i=kt(t,e,s),r=wt(Ht,Ht,88,i),n=wt(Ht,Ht,95,i);return B`<line
    x1=${r.x} y1=${r.y} x2=${n.x} y2=${n.y}
    class="trend-marker"
  />`}(n,e,s)}
      ${function(t,e,s,i){if(null===t)return B``;const r=kt(t,e,s);return B`<g class="needle" transform="rotate(${r} ${Ht} ${Ht})">
    <polygon
      points="${Ht},${38} ${97},${114} ${103},${114}"
      fill=${i}
    />
  </g>`}(r,e,s,o)}
      <circle cx=${Ht} cy=${Ht} r="6" class="hub" />
    </svg>
  `}function Nt(t,e,s){const i=t-e;return Math.abs(i)<s?"steady":i>0?"rising":"falling"}function Rt(t){return`analog-barometer-card-trend-${t}`}class jt{constructor(){this.cache=null,this.cachedEntityId=null,this.inFlight=null}getCached(t){return this.cachedEntityId!==t&&(this.cachedEntityId=t,this.cache=function(t){try{const e=localStorage.getItem(Rt(t));return e?JSON.parse(e):null}catch{return null}}(t)),this.cache}shouldFetch(t){const e=this.getCached(t);return!e||Date.now()-e.fetchedAt>3e5}update(t,e,s,i,r,n,o,a){const l=this.getCached(e);return this.inFlight||!this.shouldFetch(e)||(this.inFlight=async function(t,e,s){const i=`history/period/${new Date(Date.now()-36e5*s).toISOString()}?filter_entity_id=${encodeURIComponent(e)}&minimal_response&no_attributes`,r=await t.callApi("GET",i),n=r?.[0];if(!n?.length)return null;const o=n[0],a=o.state??o.s;if(void 0===a)return null;const l=parseFloat(a);return Number.isFinite(l)?l:null}(t,e,n).then(t=>{if(null===t)return{direction:"unknown",pastValueDisplay:null,fetchedAt:Date.now()};const e=Ot(t,i,r);return{direction:Nt(s,e,o),pastValueDisplay:e,fetchedAt:Date.now()}}).catch(()=>({direction:l?.direction??"unknown",pastValueDisplay:l?.pastValueDisplay??null,fetchedAt:Date.now()})).then(t=>(this.cache=t,function(t,e){try{localStorage.setItem(Rt(t),JSON.stringify(e))}catch{}}(e,t),this.inFlight=null,a?.(t),t))),l}}const Lt=[{name:"entity",selector:{entity:{domain:"sensor"}}},{name:"name",selector:{text:{}}},{name:"unit",selector:{select:{mode:"dropdown",options:[{value:"auto",label:"Auto-detect"},{value:"hPa",label:"hPa"},{value:"inHg",label:"inHg"}]}}},{name:"trend_hours",selector:{number:{min:1,max:12,step:1,mode:"box"}}},{name:"trend_threshold",selector:{number:{min:0,step:.1,mode:"box"}}},{name:"face_style",selector:{select:{mode:"dropdown",options:[{value:"classic",label:"Classic"},{value:"silver",label:"Silver"},{value:"dark",label:"Dark"},{value:"light",label:"Light"},{value:"led-backlit",label:"LED Backlit"},{value:"fluorescent",label:"Fluorescent"},{value:"futuristic",label:"Futuristic"}]}}},{name:"needle_color",selector:{text:{}}}],Ft={entity:"Pressure sensor entity",name:"Name (optional)",unit:"Display unit",trend_hours:"Trend lookback (hours)",trend_threshold:"Trend threshold",face_style:"Face style",needle_color:"Needle color (optional, overrides face style default)"};function It(t){return Ft[t.name]??t.name}let Vt=class extends lt{setConfig(t){this._config=t}render(){return this.hass&&this._config?V`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${Lt}
        .computeLabel=${It}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:V``}_valueChanged(t){!function(t,e,s={},i={}){const r=new CustomEvent(e,{bubbles:i.bubbles??!0,cancelable:i.cancelable??!1,composed:i.composed??!0,detail:s});t.dispatchEvent(r)}(this,"config-changed",{config:t.detail.value})}};t([ft({attribute:!1})],Vt.prototype,"hass",void 0),t([pt()],Vt.prototype,"_config",void 0),Vt=t([ht(_t)],Vt);const Bt={rising:"↑",falling:"↓",steady:"→",unknown:""},Wt={rising:"Rising",falling:"Falling",steady:"Steady",unknown:""};let qt=class extends lt{constructor(){super(...arguments),this._trendDirection="unknown",this._pastValueDisplay=null,this._tracker=new jt,this._lastEntityUpdate=null}setConfig(t){if(!t.entity)throw new Error("You must specify a pressure sensor entity.");this._config=t}getCardSize(){return 4}static getConfigElement(){return document.createElement(_t)}static getStubConfig(t){const e=Object.values(t?.states??{}).find(t=>t.entity_id.startsWith("sensor.")&&"atmospheric_pressure"===t.attributes.device_class);return{type:"custom:analog-barometer-card",entity:e?.entity_id??""}}willUpdate(t){t.has("hass")&&this._maybeUpdateTrend()}_maybeUpdateTrend(){if(!this.hass||!this._config?.entity)return;const t=this.hass.states[this._config.entity];if(!t)return;const e=parseFloat(t.state);if(!Number.isFinite(e))return;const s=Dt(this.hass,this._config.entity),i=this._config.unit??s,r=Ot(e,s,i),n=this._config.trend_hours??3,o=this._config.trend_threshold??("inHg"===i?Pt(1.5):1.5);if(this._lastEntityUpdate===t.last_updated)return;this._lastEntityUpdate=t.last_updated;const a=this._tracker.update(this.hass,this._config.entity,r,s,i,n,o,t=>{this._trendDirection=t.direction,this._pastValueDisplay=t.pastValueDisplay});this._trendDirection=a?.direction??"unknown",this._pastValueDisplay=a?.pastValueDisplay??null}render(){if(!this._config||!this.hass)return V``;const t=this.hass.states[this._config.entity];if(!t)return V`<ha-card>
        <div class="warning">Entity not found: ${this._config.entity}</div>
      </ha-card>`;const e=Dt(this.hass,this._config.entity),s=this._config.unit??e,i=parseFloat(t.state),r=Number.isFinite(i),n=r?Ot(i,e,s):null,o="inHg"===s?{min:Pt(950),max:Pt(1050)}:{min:950,max:1050};const a=this._config.min??o.min,l=this._config.max??o.max,c=this._config.face_style??"classic",h=this._config.needle_color||bt[c],d=this._config.name??t.attributes.friendly_name??this._config.entity;return V`
      <ha-card>
        <div class=${mt({"card-content":!0,[`style-${c}`]:!0})}>
          <div class="title">${d}</div>
          ${Tt({min:a,max:l,unit:s,value:n,pastValue:this._pastValueDisplay,needleColor:h})}
          <div class="readout">
            <span class="value">${r?n.toFixed(1):"--"}</span>
            <span class="unit">${s}</span>
          </div>
          <div class="trend trend-${this._trendDirection}">
            <span class="arrow">${Bt[this._trendDirection]}</span>
            <span class="label">${Wt[this._trendDirection]}</span>
          </div>
        </div>
      </ha-card>
    `}};qt.styles=((t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new n(s,t,i)})`
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

    /* Silver: brushed-metal gradients standing in for a real chrome case. */
    .style-silver .bezel {
      fill: url(#barometer-silver-bezel);
      stroke: #7a7a7a;
    }
    .style-silver .face {
      fill: url(#barometer-silver-face);
      stroke: #9a9a9a;
    }
    .style-silver .tick {
      stroke: #2b2b2b;
    }
    .style-silver .tick-label {
      fill: #202020;
    }
    .style-silver .zone-label {
      fill: #1a1a1a;
    }
    .style-silver .hub {
      fill: #3a3a3a;
      stroke: #111;
    }
    .style-silver .trend-marker {
      stroke: #444;
    }

    /* Dark: charcoal face for dark dashboards, no glow. */
    .style-dark .bezel {
      fill: #2b2b2e;
      stroke: #111113;
    }
    .style-dark .face {
      fill: #1c1c1f;
      stroke: #000;
    }
    .style-dark .tick {
      stroke: #d8d8d8;
    }
    .style-dark .tick-label {
      fill: #e8e8e8;
    }
    .style-dark .zone-label {
      fill: #f0f0f0;
    }
    .style-dark .hub {
      fill: #111;
      stroke: #555;
    }
    .style-dark .trend-marker {
      stroke: #bbb;
    }

    /* Light: clean, minimal, high-key face. */
    .style-light .bezel {
      fill: #f5f5f5;
      stroke: #cfcfcf;
    }
    .style-light .face {
      fill: #ffffff;
      stroke: #e0e0e0;
    }
    .style-light .tick {
      stroke: #666;
    }
    .style-light .tick-label {
      fill: #444;
    }
    .style-light .zone-label {
      fill: #333;
    }
    .style-light .hub {
      fill: #555;
      stroke: #333;
    }
    .style-light .trend-marker {
      stroke: #999;
    }

    /* LED backlit: black face, glowing cyan ticks like a backlit gauge. */
    .style-led-backlit .bezel {
      fill: #0a0a0c;
      stroke: #000;
    }
    .style-led-backlit .face {
      fill: #05070a;
      stroke: #000;
    }
    .style-led-backlit .tick {
      stroke: #35d0ff;
      filter: drop-shadow(0 0 2px #35d0ff);
    }
    .style-led-backlit .tick-label {
      fill: #a8ecff;
      filter: drop-shadow(0 0 1px #35d0ff);
    }
    .style-led-backlit .zone-label {
      fill: #cdf5ff;
    }
    .style-led-backlit .hub {
      fill: #111;
      stroke: #35d0ff;
    }
    .style-led-backlit .trend-marker {
      stroke: #35d0ff;
    }
    .style-led-backlit .needle {
      filter: drop-shadow(0 0 3px #ff4d4d) drop-shadow(0 1px 1px rgba(0, 0, 0, 0.6));
    }

    /* Fluorescent: old radium-dial glow-in-the-dark look. */
    .style-fluorescent .bezel {
      fill: #2e2b1a;
      stroke: #1a1810;
    }
    .style-fluorescent .face {
      fill: #1c1f14;
      stroke: #0e0f0a;
    }
    .style-fluorescent .tick {
      stroke: #baff29;
      filter: drop-shadow(0 0 2px #baff29);
    }
    .style-fluorescent .tick-label {
      fill: #d4ff7a;
      filter: drop-shadow(0 0 1px #baff29);
    }
    .style-fluorescent .zone-label {
      fill: #e8ffb0;
    }
    .style-fluorescent .hub {
      fill: #232316;
      stroke: #baff29;
    }
    .style-fluorescent .trend-marker {
      stroke: #baff29;
    }
    .style-fluorescent .needle {
      filter: drop-shadow(0 0 3px #baff29) drop-shadow(0 1px 1px rgba(0, 0, 0, 0.6));
    }

    /* Futuristic: dark face with neon cyan/magenta accents. */
    .style-futuristic .bezel {
      fill: #10141c;
      stroke: #00e5ff;
    }
    .style-futuristic .face {
      fill: #0b0e14;
      stroke: #131a24;
    }
    .style-futuristic .tick {
      stroke: #00e5ff;
    }
    .style-futuristic .tick-major {
      filter: drop-shadow(0 0 2px #00e5ff);
    }
    .style-futuristic .tick-label {
      fill: #7df9ff;
    }
    .style-futuristic .zone-label {
      fill: #c7fbff;
    }
    .style-futuristic .hub {
      fill: #0b0e14;
      stroke: #ff2fd0;
    }
    .style-futuristic .trend-marker {
      stroke: #ff2fd0;
    }
    .style-futuristic .needle {
      filter: drop-shadow(0 0 3px #ff2fd0) drop-shadow(0 1px 1px rgba(0, 0, 0, 0.6));
    }
  `,t([ft({attribute:!1})],qt.prototype,"hass",void 0),t([pt()],qt.prototype,"_config",void 0),t([pt()],qt.prototype,"_trendDirection",void 0),t([pt()],qt.prototype,"_pastValueDisplay",void 0),qt=t([ht(gt)],qt),window.customCards=window.customCards||[],window.customCards.push({type:gt,name:"Analog Barometer",description:"A classic analog-style barometer with pressure trend tracking."});export{qt as AnalogBarometerCard};
