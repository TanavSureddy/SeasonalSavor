"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3536],{3536:(q,O,y)=>{y.r(O),y.d(O,{startInputShims:()=>Z});var w=y(1528),l=y(4829),T=y(6016),m=y(1448),R=y(56);y(1008);const M=new WeakMap,P=(e,t,r,s=0,o=!1)=>{M.has(e)!==r&&(r?k(e,t,s,o):G(e,t))},k=(e,t,r,s=!1)=>{const o=t.parentNode,n=t.cloneNode(!1);n.classList.add("cloned-input"),n.tabIndex=-1,s&&(n.disabled=!0),o.appendChild(n),M.set(e,n);const a="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${a}px,${r}px,0) scale(0)`},G=(e,t)=>{const r=M.get(e);r&&(M.delete(e),r.remove()),e.style.pointerEvents="",t.style.transform=""},C="input, textarea, [no-blur], [contenteditable]",N="$ionPaddingTimer",p=(e,t,r)=>{const s=e[N];s&&clearTimeout(s),t>0?e.style.setProperty("--keyboard-offset",`${t}px`):e[N]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),r&&r()},120)},F=(e,t,r)=>{e.addEventListener("focusout",()=>{t&&p(t,0,r)},{once:!0})};let b=0;const B="data-ionic-skip-scroll-assist",V=(e,t,r,s,o,n,i,a=!1)=>{const _=n&&(void 0===i||i.mode===R.a.None);let L=!1;const c=void 0!==l.w?l.w.innerHeight:0,f=S=>{!1!==L?W(e,t,r,s,S.detail.keyboardHeight,_,a,c,!1):L=!0},u=()=>{L=!1,null==l.w||l.w.removeEventListener("ionKeyboardDidShow",f),e.removeEventListener("focusout",u,!0)},h=function(){var S=(0,w.c)(function*(){t.hasAttribute(B)?t.removeAttribute(B):(W(e,t,r,s,o,_,a,c),null==l.w||l.w.addEventListener("ionKeyboardDidShow",f),e.addEventListener("focusout",u,!0))});return function(){return S.apply(this,arguments)}}();return e.addEventListener("focusin",h,!0),()=>{e.removeEventListener("focusin",h,!0),null==l.w||l.w.removeEventListener("ionKeyboardDidShow",f),e.removeEventListener("focusout",u,!0)}},x=e=>{document.activeElement!==e&&(e.setAttribute(B,"true"),e.focus())},W=function(){var e=(0,w.c)(function*(t,r,s,o,n,i,a=!1,_=0,L=!0){if(!s&&!o)return;const c=((e,t,r,s)=>{var o;return((e,t,r,s)=>{const o=e.top,n=e.bottom,i=t.top,_=i+15,c=Math.min(t.bottom,s-r)-50-n,f=_-o,u=Math.round(c<0?-c:f>0?-f:0),h=Math.min(u,o-i),g=Math.abs(h)/.3;return{scrollAmount:h,scrollDuration:Math.min(400,Math.max(150,g)),scrollPadding:r,inputSafeY:4-(o-_)}})((null!==(o=e.closest("ion-item,[ion-item]"))&&void 0!==o?o:e).getBoundingClientRect(),t.getBoundingClientRect(),r,s)})(t,s||o,n,_);if(s&&Math.abs(c.scrollAmount)<4)return x(r),void(i&&null!==s&&(p(s,b),F(r,s,()=>b=0)));if(P(t,r,!0,c.inputSafeY,a),x(r),(0,m.r)(()=>t.click()),i&&s&&(b=c.scrollPadding,p(s,b)),typeof window<"u"){let f;const u=function(){var S=(0,w.c)(function*(){void 0!==f&&clearTimeout(f),window.removeEventListener("ionKeyboardDidShow",h),window.removeEventListener("ionKeyboardDidShow",u),s&&(yield(0,T.c)(s,0,c.scrollAmount,c.scrollDuration)),P(t,r,!1,c.inputSafeY),x(r),i&&F(r,s,()=>b=0)});return function(){return S.apply(this,arguments)}}(),h=()=>{window.removeEventListener("ionKeyboardDidShow",h),window.addEventListener("ionKeyboardDidShow",u)};if(s){const S=yield(0,T.g)(s);if(L&&c.scrollAmount>S.scrollHeight-S.clientHeight-S.scrollTop)return"password"===r.type?(c.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",h)):window.addEventListener("ionKeyboardDidShow",u),void(f=setTimeout(u,1e3))}u()}});return function(r,s,o,n,i,a){return e.apply(this,arguments)}}(),Z=function(){var e=(0,w.c)(function*(t,r){if(void 0===l.d)return;const s="ios"===r,o="android"===r,n=t.getNumber("keyboardHeight",290),i=t.getBoolean("scrollAssist",!0),a=t.getBoolean("hideCaretOnScroll",s),_=t.getBoolean("inputBlurring",s),L=t.getBoolean("scrollPadding",!0),c=Array.from(l.d.querySelectorAll("ion-input, ion-textarea")),f=new WeakMap,u=new WeakMap,h=yield R.K.getResizeMode(),S=function(){var v=(0,w.c)(function*(d){yield new Promise(I=>(0,m.c)(d,I));const K=d.shadowRoot||d,D=K.querySelector("input")||K.querySelector("textarea"),A=(0,T.f)(d),j=A?null:d.closest("ion-footer");if(D){if(A&&a&&!f.has(d)){const I=((e,t,r)=>{if(!r||!t)return()=>{};const s=a=>{(e=>e===e.getRootNode().activeElement)(t)&&P(e,t,a)},o=()=>P(e,t,!1),n=()=>s(!0),i=()=>s(!1);return(0,m.a)(r,"ionScrollStart",n),(0,m.a)(r,"ionScrollEnd",i),t.addEventListener("blur",o),()=>{(0,m.b)(r,"ionScrollStart",n),(0,m.b)(r,"ionScrollEnd",i),t.removeEventListener("blur",o)}})(d,D,A);f.set(d,I)}if("date"!==D.type&&"datetime-local"!==D.type&&(A||j)&&i&&!u.has(d)){const I=V(d,D,A,j,n,L,h,o);u.set(d,I)}}});return function(K){return v.apply(this,arguments)}}();_&&(()=>{let e=!0,t=!1;const r=document;(0,m.a)(r,"ionScrollStart",()=>{t=!0}),r.addEventListener("focusin",()=>{e=!0},!0),r.addEventListener("touchend",i=>{if(t)return void(t=!1);const a=r.activeElement;if(!a||a.matches(C))return;const _=i.target;_!==a&&(_.matches(C)||_.closest(C)||(e=!1,setTimeout(()=>{e||a.blur()},50)))},!1)})();for(const v of c)S(v);l.d.addEventListener("ionInputDidLoad",v=>{S(v.detail)}),l.d.addEventListener("ionInputDidUnload",v=>{(v=>{if(a){const d=f.get(v);d&&d(),f.delete(v)}if(i){const d=u.get(v);d&&d(),u.delete(v)}})(v.detail)})});return function(r,s){return e.apply(this,arguments)}}()}}]);