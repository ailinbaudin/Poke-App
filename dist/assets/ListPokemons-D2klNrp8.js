import{e as re,f as w,B as _,s as U,c as v,o as i,a as r,m,g as ae,R as ie,h as X,i as le,j as K,k as ce,l as ue,Z as B,T as C,n as ee,p as k,q as M,t as H,F as A,v as x,x as de,y as F,r as q,w as y,b as f,z as pe,A as me,C as fe,D as te,E as ge,d as S,G as d,H as R,I as L,J as ve,K as be,L as ye,M as he,N as Ce,O as D}from"./index-Dj1PfwWp.js";import we from"./LoadingPokebola-ksrsvJrA.js";const ne=re("pokeStore",()=>{const e=w([]),t=w(new Set),n=w(!0);return{pokemons:e,favorites:t,loading:n,fetchPokemons:async()=>{try{const p=Math.ceil(22.36),a=[],$=[];for(let b=0;b<p;b++)$.push(fetch(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=${b*50}`).then(u=>u.json()).then(u=>a.push(...u.results)));await Promise.all($);const E=await Promise.all(a.map(async b=>{const u=await fetch(b.url).then(I=>I.json());return{...b,image:u.sprites.front_default,weight:u.weight,height:u.height,types:u.types.map(I=>I.type.name).join(", ")}}));e.value=E}catch(c){console.error("Error al obtener la lista de Pokémon:",c)}finally{n.value=!1}},toggleFavorite:c=>{t.value.has(c)?t.value.delete(c):t.value.add(c)},filteredPokemons:c=>c?e.value.filter(h=>t.value.has(h.name)):e.value}});var $e=({dt:e})=>`
.p-toast {
    width: ${e("toast.width")};
    white-space: pre-line;
    word-break: break-word;
}

.p-toast-message {
    margin: 0 0 1rem 0;
}

.p-toast-message-icon {
    flex-shrink: 0;
    font-size: ${e("toast.icon.size")};
    width: ${e("toast.icon.size")};
    height: ${e("toast.icon.size")};
}

.p-toast-message-content {
    display: flex;
    align-items: flex-start;
    padding: ${e("toast.content.padding")};
    gap: ${e("toast.content.gap")};
}

.p-toast-message-text {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    gap: ${e("toast.text.gap")};
}

.p-toast-summary {
    font-weight: ${e("toast.summary.font.weight")};
    font-size: ${e("toast.summary.font.size")};
}

.p-toast-detail {
    font-weight: ${e("toast.detail.font.weight")};
    font-size: ${e("toast.detail.font.size")};
}

.p-toast-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    background: transparent;
    transition: background ${e("toast.transition.duration")}, color ${e("toast.transition.duration")}, outline-color ${e("toast.transition.duration")}, box-shadow ${e("toast.transition.duration")};
    outline-color: transparent;
    color: inherit;
    width: ${e("toast.close.button.width")};
    height: ${e("toast.close.button.height")};
    border-radius: ${e("toast.close.button.border.radius")};
    margin: -25% 0 0 0;
    right: -25%;
    padding: 0;
    border: none;
    user-select: none;
}

.p-toast-close-button:dir(rtl) {
    margin: -25% 0 0 auto;
    left: -25%;
    right: auto;
}

.p-toast-message-info,
.p-toast-message-success,
.p-toast-message-warn,
.p-toast-message-error,
.p-toast-message-secondary,
.p-toast-message-contrast {
    border-width: ${e("toast.border.width")};
    border-style: solid;
    backdrop-filter: blur(${e("toast.blur")});
    border-radius: ${e("toast.border.radius")};
}

.p-toast-close-icon {
    font-size: ${e("toast.close.icon.size")};
    width: ${e("toast.close.icon.size")};
    height: ${e("toast.close.icon.size")};
}

.p-toast-close-button:focus-visible {
    outline-width: ${e("focus.ring.width")};
    outline-style: ${e("focus.ring.style")};
    outline-offset: ${e("focus.ring.offset")};
}

.p-toast-message-info {
    background: ${e("toast.info.background")};
    border-color: ${e("toast.info.border.color")};
    color: ${e("toast.info.color")};
    box-shadow: ${e("toast.info.shadow")};
}

.p-toast-message-info .p-toast-detail {
    color: ${e("toast.info.detail.color")};
}

.p-toast-message-info .p-toast-close-button:focus-visible {
    outline-color: ${e("toast.info.close.button.focus.ring.color")};
    box-shadow: ${e("toast.info.close.button.focus.ring.shadow")};
}

.p-toast-message-info .p-toast-close-button:hover {
    background: ${e("toast.info.close.button.hover.background")};
}

.p-toast-message-success {
    background: ${e("toast.success.background")};
    border-color: ${e("toast.success.border.color")};
    color: ${e("toast.success.color")};
    box-shadow: ${e("toast.success.shadow")};
}

.p-toast-message-success .p-toast-detail {
    color: ${e("toast.success.detail.color")};
}

.p-toast-message-success .p-toast-close-button:focus-visible {
    outline-color: ${e("toast.success.close.button.focus.ring.color")};
    box-shadow: ${e("toast.success.close.button.focus.ring.shadow")};
}

.p-toast-message-success .p-toast-close-button:hover {
    background: ${e("toast.success.close.button.hover.background")};
}

.p-toast-message-warn {
    background: ${e("toast.warn.background")};
    border-color: ${e("toast.warn.border.color")};
    color: ${e("toast.warn.color")};
    box-shadow: ${e("toast.warn.shadow")};
}

.p-toast-message-warn .p-toast-detail {
    color: ${e("toast.warn.detail.color")};
}

.p-toast-message-warn .p-toast-close-button:focus-visible {
    outline-color: ${e("toast.warn.close.button.focus.ring.color")};
    box-shadow: ${e("toast.warn.close.button.focus.ring.shadow")};
}

.p-toast-message-warn .p-toast-close-button:hover {
    background: ${e("toast.warn.close.button.hover.background")};
}

.p-toast-message-error {
    background: ${e("toast.error.background")};
    border-color: ${e("toast.error.border.color")};
    color: ${e("toast.error.color")};
    box-shadow: ${e("toast.error.shadow")};
}

.p-toast-message-error .p-toast-detail {
    color: ${e("toast.error.detail.color")};
}

.p-toast-message-error .p-toast-close-button:focus-visible {
    outline-color: ${e("toast.error.close.button.focus.ring.color")};
    box-shadow: ${e("toast.error.close.button.focus.ring.shadow")};
}

.p-toast-message-error .p-toast-close-button:hover {
    background: ${e("toast.error.close.button.hover.background")};
}

.p-toast-message-secondary {
    background: ${e("toast.secondary.background")};
    border-color: ${e("toast.secondary.border.color")};
    color: ${e("toast.secondary.color")};
    box-shadow: ${e("toast.secondary.shadow")};
}

.p-toast-message-secondary .p-toast-detail {
    color: ${e("toast.secondary.detail.color")};
}

.p-toast-message-secondary .p-toast-close-button:focus-visible {
    outline-color: ${e("toast.secondary.close.button.focus.ring.color")};
    box-shadow: ${e("toast.secondary.close.button.focus.ring.shadow")};
}

.p-toast-message-secondary .p-toast-close-button:hover {
    background: ${e("toast.secondary.close.button.hover.background")};
}

.p-toast-message-contrast {
    background: ${e("toast.contrast.background")};
    border-color: ${e("toast.contrast.border.color")};
    color: ${e("toast.contrast.color")};
    box-shadow: ${e("toast.contrast.shadow")};
}

.p-toast-message-contrast .p-toast-detail {
    color: ${e("toast.contrast.detail.color")};
}

.p-toast-message-contrast .p-toast-close-button:focus-visible {
    outline-color: ${e("toast.contrast.close.button.focus.ring.color")};
    box-shadow: ${e("toast.contrast.close.button.focus.ring.shadow")};
}

.p-toast-message-contrast .p-toast-close-button:hover {
    background: ${e("toast.contrast.close.button.hover.background")};
}

.p-toast-top-center {
    transform: translateX(-50%);
}

.p-toast-bottom-center {
    transform: translateX(-50%);
}

.p-toast-center {
    min-width: 20vw;
    transform: translate(-50%, -50%);
}

.p-toast-message-enter-from {
    opacity: 0;
    transform: translateY(50%);
}

.p-toast-message-leave-from {
    max-height: 1000px;
}

.p-toast .p-toast-message.p-toast-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin-bottom: 0;
    overflow: hidden;
}

.p-toast-message-enter-active {
    transition: transform 0.3s, opacity 0.3s;
}

.p-toast-message-leave-active {
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;
}
`;function T(e){"@babel/helpers - typeof";return T=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(e)}function z(e,t,n){return(t=ke(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ke(e){var t=xe(e,"string");return T(t)=="symbol"?t:t+""}function xe(e,t){if(T(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(T(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Ie={root:function(t){var n=t.position;return{position:"fixed",top:n==="top-right"||n==="top-left"||n==="top-center"?"20px":n==="center"?"50%":null,right:(n==="top-right"||n==="bottom-right")&&"20px",bottom:(n==="bottom-left"||n==="bottom-right"||n==="bottom-center")&&"20px",left:n==="top-left"||n==="bottom-left"?"20px":n==="center"||n==="top-center"||n==="bottom-center"?"50%":null}}},Se={root:function(t){var n=t.props;return["p-toast p-component p-toast-"+n.position]},message:function(t){var n=t.props;return["p-toast-message",{"p-toast-message-info":n.message.severity==="info"||n.message.severity===void 0,"p-toast-message-warn":n.message.severity==="warn","p-toast-message-error":n.message.severity==="error","p-toast-message-success":n.message.severity==="success","p-toast-message-secondary":n.message.severity==="secondary","p-toast-message-contrast":n.message.severity==="contrast"}]},messageContent:"p-toast-message-content",messageIcon:function(t){var n=t.props;return["p-toast-message-icon",z(z(z(z({},n.infoIcon,n.message.severity==="info"),n.warnIcon,n.message.severity==="warn"),n.errorIcon,n.message.severity==="error"),n.successIcon,n.message.severity==="success")]},messageText:"p-toast-message-text",summary:"p-toast-summary",detail:"p-toast-detail",closeButton:"p-toast-close-button",closeIcon:"p-toast-close-icon"},Pe=_.extend({name:"toast",style:$e,classes:Se,inlineStyles:Ie}),Z={name:"ExclamationTriangleIcon",extends:U};function Te(e,t,n,o,l,s){return i(),v("svg",m({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[r("path",{d:"M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z",fill:"currentColor"},null,-1),r("path",{d:"M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z",fill:"currentColor"},null,-1),r("path",{d:"M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z",fill:"currentColor"},null,-1)]),16)}Z.render=Te;var V={name:"InfoCircleIcon",extends:U};function je(e,t,n,o,l,s){return i(),v("svg",m({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[r("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z",fill:"currentColor"},null,-1)]),16)}V.render=je;var G={name:"TimesCircleIcon",extends:U};function Oe(e,t,n,o,l,s){return i(),v("svg",m({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[r("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z",fill:"currentColor"},null,-1)]),16)}G.render=Oe;var Ee={name:"BaseToast",extends:K,props:{group:{type:String,default:null},position:{type:String,default:"top-right"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},breakpoints:{type:Object,default:null},closeIcon:{type:String,default:void 0},infoIcon:{type:String,default:void 0},warnIcon:{type:String,default:void 0},errorIcon:{type:String,default:void 0},successIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null},onMouseEnter:{type:Function,default:void 0},onMouseLeave:{type:Function,default:void 0},onClick:{type:Function,default:void 0}},style:Pe,provide:function(){return{$pcToast:this,$parentInstance:this}}},oe={name:"ToastMessage",hostName:"Toast",extends:K,emits:["close"],closeTimeout:null,createdAt:null,lifeRemaining:null,props:{message:{type:null,default:null},templates:{type:Object,default:null},closeIcon:{type:String,default:null},infoIcon:{type:String,default:null},warnIcon:{type:String,default:null},errorIcon:{type:String,default:null},successIcon:{type:String,default:null},closeButtonProps:{type:null,default:null}},mounted:function(){this.message.life&&(this.lifeRemaining=this.message.life,this.startTimeout())},beforeUnmount:function(){this.clearCloseTimeout()},methods:{startTimeout:function(){var t=this;this.createdAt=new Date().valueOf(),this.closeTimeout=setTimeout(function(){t.close({message:t.message,type:"life-end"})},this.lifeRemaining)},close:function(t){this.$emit("close",t)},onCloseClick:function(){this.clearCloseTimeout(),this.close({message:this.message,type:"close"})},clearCloseTimeout:function(){this.closeTimeout&&(clearTimeout(this.closeTimeout),this.closeTimeout=null)},onMessageClick:function(t){var n;!((n=this.props)===null||n===void 0)&&n.onClick&&this.props.onClick({originalEvent:t,message:this.message})},onMouseEnter:function(t){var n;!((n=this.props)===null||n===void 0)&&n.onMouseEnter&&this.props.onMouseEnter({originalEvent:t,message:this.message}),!t.defaultPrevented&&this.message.life&&(this.lifeRemaining=this.createdAt+this.lifeRemaining-Date().valueOf(),this.createdAt=null,this.clearCloseTimeout())},onMouseLeave:function(t){var n;!((n=this.props)===null||n===void 0)&&n.onMouseLeave&&this.props.onMouseLeave({originalEvent:t,message:this.message}),!t.defaultPrevented&&this.message.life&&this.startTimeout()}},computed:{iconComponent:function(){return{info:!this.infoIcon&&V,success:!this.successIcon&&X,warn:!this.warnIcon&&Z,error:!this.errorIcon&&G}[this.message.severity]},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{TimesIcon:le,InfoCircleIcon:V,CheckIcon:X,ExclamationTriangleIcon:Z,TimesCircleIcon:G},directives:{ripple:ie}};function j(e){"@babel/helpers - typeof";return j=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(e)}function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,o)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?J(Object(n),!0).forEach(function(o){Me(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function Me(e,t,n){return(t=ze(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ze(e){var t=Le(e,"string");return j(t)=="symbol"?t:t+""}function Le(e,t){if(j(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(j(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Ae=["aria-label"];function Be(e,t,n,o,l,s){var c=ee("ripple");return i(),v("div",m({class:[e.cx("message"),n.message.styleClass],role:"alert","aria-live":"assertive","aria-atomic":"true"},e.ptm("message"),{onClick:t[1]||(t[1]=function(){return s.onMessageClick&&s.onMessageClick.apply(s,arguments)}),onMouseenter:t[2]||(t[2]=function(){return s.onMouseEnter&&s.onMouseEnter.apply(s,arguments)}),onMouseleave:t[3]||(t[3]=function(){return s.onMouseLeave&&s.onMouseLeave.apply(s,arguments)})}),[n.templates.container?(i(),k(M(n.templates.container),{key:0,message:n.message,closeCallback:s.onCloseClick},null,8,["message","closeCallback"])):(i(),v("div",m({key:1,class:[e.cx("messageContent"),n.message.contentStyleClass]},e.ptm("messageContent")),[n.templates.message?(i(),k(M(n.templates.message),{key:1,message:n.message},null,8,["message"])):(i(),v(A,{key:0},[(i(),k(M(n.templates.messageicon?n.templates.messageicon:n.templates.icon?n.templates.icon:s.iconComponent&&s.iconComponent.name?s.iconComponent:"span"),m({class:e.cx("messageIcon")},e.ptm("messageIcon")),null,16,["class"])),r("div",m({class:e.cx("messageText")},e.ptm("messageText")),[r("span",m({class:e.cx("summary")},e.ptm("summary")),x(n.message.summary),17),r("div",m({class:e.cx("detail")},e.ptm("detail")),x(n.message.detail),17)],16)],64)),n.message.closable!==!1?(i(),v("div",de(m({key:2},e.ptm("buttonContainer"))),[F((i(),v("button",m({class:e.cx("closeButton"),type:"button","aria-label":s.closeAriaLabel,onClick:t[0]||(t[0]=function(){return s.onCloseClick&&s.onCloseClick.apply(s,arguments)}),autofocus:""},Y(Y({},n.closeButtonProps),e.ptm("closeButton"))),[(i(),k(M(n.templates.closeicon||"TimesIcon"),m({class:[e.cx("closeIcon"),n.closeIcon]},e.ptm("closeIcon")),null,16,["class"]))],16,Ae)),[[c]])],16)):H("",!0)],16))],16)}oe.render=Be;function De(e){return Ve(e)||Ze(e)||Re(e)||Fe()}function Fe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Re(e,t){if(e){if(typeof e=="string")return N(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(e,t):void 0}}function Ze(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ve(e){if(Array.isArray(e))return N(e)}function N(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}var Ge=0,se={name:"Toast",extends:Ee,inheritAttrs:!1,emits:["close","life-end"],data:function(){return{messages:[]}},styleElement:null,mounted:function(){C.on("add",this.onAdd),C.on("remove",this.onRemove),C.on("remove-group",this.onRemoveGroup),C.on("remove-all-groups",this.onRemoveAllGroups),this.breakpoints&&this.createStyle()},beforeUnmount:function(){this.destroyStyle(),this.$refs.container&&this.autoZIndex&&B.clear(this.$refs.container),C.off("add",this.onAdd),C.off("remove",this.onRemove),C.off("remove-group",this.onRemoveGroup),C.off("remove-all-groups",this.onRemoveAllGroups)},methods:{add:function(t){t.id==null&&(t.id=Ge++),this.messages=[].concat(De(this.messages),[t])},remove:function(t){var n=this.messages.findIndex(function(o){return o.id===t.message.id});n!==-1&&(this.messages.splice(n,1),this.$emit(t.type,{message:t.message}))},onAdd:function(t){this.group==t.group&&this.add(t)},onRemove:function(t){this.remove({message:t,type:"close"})},onRemoveGroup:function(t){this.group===t&&(this.messages=[])},onRemoveAllGroups:function(){this.messages=[]},onEnter:function(){this.autoZIndex&&B.set("modal",this.$refs.container,this.baseZIndex||this.$primevue.config.zIndex.modal)},onLeave:function(){var t=this;this.$refs.container&&this.autoZIndex&&ue(this.messages)&&setTimeout(function(){B.clear(t.$refs.container)},200)},createStyle:function(){if(!this.styleElement&&!this.isUnstyled){var t;this.styleElement=document.createElement("style"),this.styleElement.type="text/css",ce(this.styleElement,"nonce",(t=this.$primevue)===null||t===void 0||(t=t.config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce),document.head.appendChild(this.styleElement);var n="";for(var o in this.breakpoints){var l="";for(var s in this.breakpoints[o])l+=s+":"+this.breakpoints[o][s]+"!important;";n+=`
                        @media screen and (max-width: `.concat(o,`) {
                            .p-toast[`).concat(this.$attrSelector,`] {
                                `).concat(l,`
                            }
                        }
                    `)}this.styleElement.innerHTML=n}},destroyStyle:function(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)}},components:{ToastMessage:oe,Portal:ae}};function O(e){"@babel/helpers - typeof";return O=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(e)}function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,o)}return n}function Ne(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Q(Object(n),!0).forEach(function(o){Ue(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function Ue(e,t,n){return(t=Ke(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ke(e){var t=He(e,"string");return O(t)=="symbol"?t:t+""}function He(e,t){if(O(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(O(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function We(e,t,n,o,l,s){var c=q("ToastMessage"),h=q("Portal");return i(),k(h,null,{default:y(function(){return[r("div",m({ref:"container",class:e.cx("root"),style:e.sx("root",!0,{position:e.position})},e.ptmi("root")),[f(pe,m({name:"p-toast-message",tag:"div",onEnter:s.onEnter,onLeave:s.onLeave},Ne({},e.ptm("transition"))),{default:y(function(){return[(i(!0),v(A,null,me(l.messages,function(p){return i(),k(c,{key:p.id,message:p,templates:e.$slots,closeIcon:e.closeIcon,infoIcon:e.infoIcon,warnIcon:e.warnIcon,errorIcon:e.errorIcon,successIcon:e.successIcon,closeButtonProps:e.closeButtonProps,unstyled:e.unstyled,onClose:t[0]||(t[0]=function(a){return s.remove(a)}),pt:e.pt},null,8,["message","templates","closeIcon","infoIcon","warnIcon","errorIcon","successIcon","closeButtonProps","unstyled","pt"])}),128))]}),_:1},16,["onEnter","onLeave"])],16)]}),_:1})}se.render=We;var Xe=({dt:e})=>`
.p-divider-horizontal {
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    margin: ${e("divider.horizontal.margin")};
    padding: ${e("divider.horizontal.padding")};
}

.p-divider-horizontal:before {
    position: absolute;
    display: block;
    inset-block-start: 50%;
    inset-inline-start: 0;
    width: 100%;
    content: "";
    border-block-start: 1px solid ${e("divider.border.color")};
}

.p-divider-horizontal .p-divider-content {
    padding: ${e("divider.horizontal.content.padding")};
}

.p-divider-vertical {
    min-height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    margin: ${e("divider.vertical.margin")};
    padding: ${e("divider.vertical.padding")};
}

.p-divider-vertical:before {
    position: absolute;
    display: block;
    inset-block-start: 0;
    inset-inline-start: 50%;
    height: 100%;
    content: "";
    border-inline-start: 1px solid ${e("divider.border.color")};
}

.p-divider.p-divider-vertical .p-divider-content {
    padding: ${e("divider.vertical.content.padding")};
}

.p-divider-content {
    z-index: 1;
    background: ${e("divider.content.background")};
    color: ${e("divider.content.color")};
}

.p-divider-solid.p-divider-horizontal:before {
    border-block-start-style: solid;
}

.p-divider-solid.p-divider-vertical:before {
    border-inline-start-style: solid;
}

.p-divider-dashed.p-divider-horizontal:before {
    border-block-start-style: dashed;
}

.p-divider-dashed.p-divider-vertical:before {
    border-inline-start-style: dashed;
}

.p-divider-dotted.p-divider-horizontal:before {
    border-block-start-style: dotted;
}

.p-divider-dotted.p-divider-vertical:before {
    border-inline-start-style: dotted;
}

.p-divider-left:dir(rtl),
.p-divider-right:dir(rtl) {
    flex-direction: row-reverse;
}
`,qe={root:function(t){var n=t.props;return{justifyContent:n.layout==="horizontal"?n.align==="center"||n.align===null?"center":n.align==="left"?"flex-start":n.align==="right"?"flex-end":null:null,alignItems:n.layout==="vertical"?n.align==="center"||n.align===null?"center":n.align==="top"?"flex-start":n.align==="bottom"?"flex-end":null:null}}},Je={root:function(t){var n=t.props;return["p-divider p-component","p-divider-"+n.layout,"p-divider-"+n.type,{"p-divider-left":n.layout==="horizontal"&&(!n.align||n.align==="left")},{"p-divider-center":n.layout==="horizontal"&&n.align==="center"},{"p-divider-right":n.layout==="horizontal"&&n.align==="right"},{"p-divider-top":n.layout==="vertical"&&n.align==="top"},{"p-divider-center":n.layout==="vertical"&&(!n.align||n.align==="center")},{"p-divider-bottom":n.layout==="vertical"&&n.align==="bottom"}]},content:"p-divider-content"},Ye=_.extend({name:"divider",style:Xe,classes:Je,inlineStyles:qe}),Qe={name:"BaseDivider",extends:K,props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},style:Ye,provide:function(){return{$pcDivider:this,$parentInstance:this}}},P={name:"Divider",extends:Qe,inheritAttrs:!1},_e=["aria-orientation"];function et(e,t,n,o,l,s){return i(),v("div",m({class:e.cx("root"),style:e.sx("root"),role:"separator","aria-orientation":e.layout},e.ptmi("root")),[e.$slots.default?(i(),v("div",m({key:0,class:e.cx("content")},e.ptm("content")),[fe(e.$slots,"default")],16)):H("",!0)],16,_e)}P.render=et;const tt={class:"pokemon-header"},nt=["src"],ot={class:"content"},st={class:"pokemon-attributes"},rt={class:"button-container"},at={__name:"CardPokemons",props:{visible:Boolean,pokemon:Object},emits:["update:visible"],setup(e,{emit:t}){const n=ne(),o=ge(),l=t,s=p=>{l("update:visible",p)},c=p=>{n.toggleFavorite(p.name)},h=p=>{try{const a=`Name: ${p.name}, Weight: ${p.weight} kg, Height: ${p.height} m, Types: ${p.types}.`;navigator.clipboard.writeText(a).then(()=>{o.add({severity:"secondary",summary:"Epic Capture!",detail:"Pokémon Caught!",life:3e3})})}catch(a){console.error("Error copying to clipboard:",a),o.add({severity:"error",summary:"Error",detail:"Failed capture.",life:3e3})}};return(p,a)=>(i(),v(A,null,[f(d(ve),{class:"custom-dialog",visible:e.visible,"onUpdate:visible":s,style:{maxWidth:"600px",width:"100%"},closable:!0,modal:!0},{default:y(()=>[a[7]||(a[7]=r("div",{class:"dialog-header-background"},null,-1)),r("button",{class:"close-button",onClick:a[0]||(a[0]=$=>s(!1))},"X"),r("div",tt,[r("img",{class:"pokemon-image",src:e.pokemon.image,alt:"Pokemon Image"},null,8,nt)]),r("div",ot,[r("div",st,[r("p",null,[a[3]||(a[3]=r("strong",null,"Name:",-1)),S(" "+x(e.pokemon.name),1)]),f(d(P)),r("p",null,[a[4]||(a[4]=r("strong",null,"Weight:",-1)),S(" "+x(e.pokemon.weight)+" kg",1)]),f(d(P)),r("p",null,[a[5]||(a[5]=r("strong",null,"Height:",-1)),S(" "+x(e.pokemon.height)+" m",1)]),f(d(P)),r("p",null,[a[6]||(a[6]=r("strong",null,"Types:",-1)),S(" "+x(e.pokemon.types),1)]),f(d(P))]),r("div",rt,[f(d(R),{label:"Share to my friends",onClick:a[1]||(a[1]=$=>h(e.pokemon)),rounded:"",severity:"danger"}),r("i",{class:L(["pi",d(n).favorites.has(e.pokemon.name)?"pi-star-fill text-yellow-500":"pi-star text-gray-500"]),onClick:a[2]||(a[2]=$=>c(e.pokemon))},null,2)])])]),_:1},8,["visible"]),f(d(se))],64))}},it=te(at,[["__scopeId","data-v-dcd5f5e8"]]),lt={class:"card"},ct={class:"flex justify-content-center"},ut={class:"p-input-icon-left topbar"},dt={class:"image-container"},pt=["src","onClick"],mt=["onClick"],ft=["onClick"],gt={class:"buttons"},vt={__name:"ListPokemons",setup(e){const t=ne(),n=w(!1),o=w(!0),l=w(null),s=w(!1),c=w({global:{value:null}}),h=b=>{t.toggleFavorite(b.name)},p=be(()=>t.filteredPokemons(n.value)),a=()=>{n.value=!1,o.value=!0},$=()=>{n.value=!0,o.value=!0},E=b=>{console.log("Selected Pokemon:",b),l.value={...b},s.value=!0};return ye(()=>{t.fetchPokemons()}),(b,u)=>{const I=ee("tooltip");return i(),v(A,null,[r("div",lt,[r("div",ct,[r("span",ut,[F(f(d(he),{modelValue:c.value.global.value,"onUpdate:modelValue":u[0]||(u[0]=g=>c.value.global.value=g),placeholder:"Search",class:"full-width-input",type:"text"},null,8,["modelValue"]),[[I,"Find your pokemon",void 0,{top:!0}]])])]),f(d(Ce),{value:p.value,paginator:o.value,rows:10,dataKey:"name",filters:c.value,"onUpdate:filters":u[1]||(u[1]=g=>c.value=g),filterDisplay:"menu",globalFilterFields:["name"],loading:d(t).loading,scrollable:!o.value,style:{"max-height":"500px","overflow-y":"auto"}},{default:y(()=>[f(d(D),{field:"image",style:{"max-width":"30px"}},{body:y(({data:g})=>[r("div",dt,[F(r("img",{src:g.image,alt:"data.name",onClick:W=>E(g)},null,8,pt),[[I,{value:"Learn more about this Pokémon"},void 0,{bottom:!0}]])])]),_:1}),f(d(D),{field:"name"},{body:y(({data:g})=>[r("span",{onClick:W=>E(g),style:{cursor:"pointer"}},x(g.name),9,mt)]),_:1}),f(d(D),{field:"favorite",alignFrozen:"right",style:{width:"80px","text-align":"center"}},{body:y(({data:g})=>[r("i",{class:L(["pi",d(t).favorites.has(g.name)?"pi-star-fill text-yellow-500":"pi-star text-gray-400"]),onClick:W=>h(g),style:{cursor:"pointer","font-size":"1.5rem","border-radius":"50%",padding:"6px","background-color":"rgba(0, 0, 0, 0.05)","box-shadow":"0 1px 3px rgba(0, 0, 0, 0.1)"}},null,10,ft)]),_:1})]),_:1},8,["value","paginator","filters","loading","scrollable"]),r("div",gt,[f(d(R),{class:L({allButtons:!n.value,"p-button-danger p-button-outlined":n.value,"p-button-disabled":n.value}),rounded:"",onClick:a},{default:y(()=>u[3]||(u[3]=[r("i",{class:"pi pi-bars text-white-500 mr-2"},null,-1),S(" All ")])),_:1},8,["class"]),f(d(R),{class:L({allButtons:n.value,"p-button-danger p-button-outlined":!n.value,"p-button-disabled":!n.value}),rounded:"",onClick:$},{default:y(()=>u[4]||(u[4]=[r("i",{class:"pi pi-star-fill text-white-500 mr-2"},null,-1),S(" Favorites ")])),_:1},8,["class"])]),f(it,{visible:s.value,pokemon:l.value,"onUpdate:visible":u[2]||(u[2]=g=>s.value=g)},null,8,["visible","pokemon"])]),d(t).loading?(i(),k(we,{key:0})):H("",!0)],64)}}},ht=te(vt,[["__scopeId","data-v-fdf9a960"]]);export{ht as default};
