import{b as a,d as p}from"./chunk-WR5KXOBV.js";import{c as e}from"./chunk-424VDZPE.js";import{c as r,d as i,g,k as n}from"./chunk-ELRP26ST.js";import{d as l}from"./chunk-H3GX5QFY.js";import"./chunk-AGYSVWMR.js";var x=":host{--ion-safe-area-left:0px;--ion-safe-area-right:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.card-disabled){cursor:default;opacity:0.3;pointer-events:none}.card-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:inherit}.card-native::-moz-focus-inner{border:0}button,a{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}ion-ripple-effect{color:var(--ripple-color)}:host{--background:var(--ion-card-background, var(--ion-item-background, var(--ion-background-color, #fff)));--color:var(--ion-card-color, var(--ion-item-color, var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))));-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:24px;margin-bottom:24px;border-radius:8px;-webkit-transition:-webkit-transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);transition:-webkit-transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);transition:transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);transition:transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1), -webkit-transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);font-size:0.875rem;-webkit-box-shadow:0 4px 16px rgba(0, 0, 0, 0.12);box-shadow:0 4px 16px rgba(0, 0, 0, 0.12)}:host(.ion-activated){-webkit-transform:scale3d(0.97, 0.97, 1);transform:scale3d(0.97, 0.97, 1)}",v=x,k=":host{--ion-safe-area-left:0px;--ion-safe-area-right:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.card-disabled){cursor:default;opacity:0.3;pointer-events:none}.card-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:inherit}.card-native::-moz-focus-inner{border:0}button,a{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}ion-ripple-effect{color:var(--ripple-color)}:host{--background:var(--ion-card-background, var(--ion-item-background, var(--ion-background-color, #fff)));--color:var(--ion-card-color, var(--ion-item-color, var(--ion-color-step-550, var(--ion-text-color-step-450, #737373))));-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px;margin-top:10px;margin-bottom:10px;border-radius:4px;font-size:0.875rem;-webkit-box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)}",w=k,B=(()=>{let o=class{constructor(t){n(this,t),this.inheritedAriaAttributes={},this.color=void 0,this.button=!1,this.type="button",this.disabled=!1,this.download=void 0,this.href=void 0,this.rel=void 0,this.routerDirection="forward",this.routerAnimation=void 0,this.target=void 0}componentWillLoad(){this.inheritedAriaAttributes=l(this.el,["aria-label"])}isClickable(){return this.href!==void 0||this.button}renderCard(t){let s=this.isClickable();if(!s)return[r("slot",null)];let{href:d,routerAnimation:h,routerDirection:b,inheritedAriaAttributes:m}=this,c=s?d===void 0?"button":"a":"div",f=c==="button"?{type:this.type}:{download:this.download,href:this.href,rel:this.rel,target:this.target};return r(c,Object.assign({},f,m,{class:"card-native",part:"native",disabled:this.disabled,onClick:u=>p(d,u,b,h)}),r("slot",null),s&&t==="md"&&r("ion-ripple-effect",null))}render(){let t=e(this);return r(i,{key:"8584300522f382ee8891c039d71da82533dfa36a",class:a(this.color,{[t]:!0,"card-disabled":this.disabled,"ion-activatable":this.isClickable()})},this.renderCard(t))}get el(){return g(this)}};return o.style={ios:v,md:w},o})(),y="ion-card-content{display:block;position:relative}.card-content-ios{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:20px;padding-bottom:20px;font-size:1rem;line-height:1.4}.card-content-ios h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:1.5rem;font-weight:normal}.card-content-ios h2{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:1rem;font-weight:normal}.card-content-ios h3,.card-content-ios h4,.card-content-ios h5,.card-content-ios h6{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:0.875rem;font-weight:normal}.card-content-ios p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:0.875rem}ion-card-header+.card-content-ios{padding-top:0}",C=y,z="ion-card-content{display:block;position:relative}.card-content-md{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:13px;padding-bottom:13px;font-size:0.875rem;line-height:1.5}.card-content-md h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:1.5rem;font-weight:normal}.card-content-md h2{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:1rem;font-weight:normal}.card-content-md h3,.card-content-md h4,.card-content-md h5,.card-content-md h6{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:0.875rem;font-weight:normal}.card-content-md p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:0.875rem;font-weight:normal;line-height:1.5}ion-card-header+.card-content-md{padding-top:0}",I=z,F=(()=>{let o=class{constructor(t){n(this,t)}render(){let t=e(this);return r(i,{key:"2a2d0b48aad4b83990a1748fce60e772514eb223",class:{[t]:!0,[`card-content-${t}`]:!0}})}};return o.style={ios:C,md:I},o})(),S=":host{--background:transparent;--color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column;background:var(--background);color:var(--color)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:20px;padding-bottom:16px;-ms-flex-direction:column-reverse;flex-direction:column-reverse}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.card-header-translucent){background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.9);-webkit-backdrop-filter:saturate(180%) blur(30px);backdrop-filter:saturate(180%) blur(30px)}}",M=S,A=":host{--background:transparent;--color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column;background:var(--background);color:var(--color)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:16px;padding-bottom:16px}::slotted(ion-card-title:not(:first-child)),::slotted(ion-card-subtitle:not(:first-child)){margin-top:8px}",_=A,G=(()=>{let o=class{constructor(t){n(this,t),this.color=void 0,this.translucent=!1}render(){let t=e(this);return r(i,{key:"18d12507ec6e650a72d721e9d0f4128b5e86df1d",class:a(this.color,{"card-header-translucent":this.translucent,"ion-inherit-color":!0,[t]:!0})},r("slot",{key:"3374c087d8c3f014082787e255432e7a335ef44f"}))}};return o.style={ios:M,md:_},o})(),T=":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666));margin-left:0;margin-right:0;margin-top:0;margin-bottom:4px;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:0.75rem;font-weight:700;letter-spacing:0.4px;text-transform:uppercase}",H=T,D=":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-550, var(--ion-text-color-step-450, #737373));margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:0.875rem;font-weight:500}",L=D,J=(()=>{let o=class{constructor(t){n(this,t),this.color=void 0}render(){let t=e(this);return r(i,{key:"cbcb01bd01cf6de64a0b04fb626e42b07ceb8f53",role:"heading","aria-level":"3",class:a(this.color,{"ion-inherit-color":!0,[t]:!0})},r("slot",{key:"cbcaa73aa5799882c48d6c0aabfb13651bcc91c0"}))}};return o.style={ios:H,md:L},o})(),j=":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-text-color, #000);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:1.75rem;font-weight:700;line-height:1.2}",E=j,O=":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626));margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:1.25rem;font-weight:500;line-height:1.2}",R=O,K=(()=>{let o=class{constructor(t){n(this,t),this.color=void 0}render(){let t=e(this);return r(i,{key:"f904a0ca6489f147d03c9c5f9f2c5549cdb38d1a",role:"heading","aria-level":"2",class:a(this.color,{"ion-inherit-color":!0,[t]:!0})},r("slot",{key:"effb921de4ad8dfbbe318b3f692f4005812da7b1"}))}};return o.style={ios:E,md:R},o})();export{B as ion_card,F as ion_card_content,G as ion_card_header,J as ion_card_subtitle,K as ion_card_title};