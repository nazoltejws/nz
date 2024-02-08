"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[351],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,l=/([\p{Alpha}\p{N}_]|$)/u,n=/[_.\- ]+/,s=new RegExp("^"+n.source),o=new RegExp(n.source+l.source,"gu"),i=new RegExp("\\d+"+l.source,"gu"),c=(e,l)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(l={pascalCase:!1,preserveConsecutiveUppercase:!1,...l},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const n=!1===l.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(l.locale),c=!1===l.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(l.locale);if(1===e.length)return l.pascalCase?c(e):n(e);return e!==n(e)&&(e=((e,r,l)=>{let n=!1,s=!1,o=!1;for(let i=0;i<e.length;i++){const c=e[i];n&&t.test(c)?(e=e.slice(0,i)+"-"+e.slice(i),n=!1,o=s,s=!0,i++):s&&o&&a.test(c)?(e=e.slice(0,i-1)+"-"+e.slice(i-1),o=s,s=!1,n=!0):(n=r(c)===c&&l(c)!==c,o=s,s=l(c)===c&&r(c)!==c)}return e})(e,n,c)),e=e.replace(s,""),e=l.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,n):n(e),l.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(o.lastIndex=0,i.lastIndex=0,e.replace(o,((e,a)=>t(a))).replace(i,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{G:function(){return F},L:function(){return f},M:function(){return C},P:function(){return E},S:function(){return B},_:function(){return o},a:function(){return s},b:function(){return u},c:function(){return c},g:function(){return m},h:function(){return i}});var r=a(7294),l=(a(3204),a(5697)),n=a.n(l);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)t.indexOf(a=n[r])>=0||(l[a]=e[a]);return l}const i=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function d(e,t,a){const r={};let l="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(l="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:l,"data-gatsby-image-wrapper":"",style:r}}function u(e,t,a,r,l){return void 0===l&&(l={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},l,{opacity:t?1:0})})}function m(e,t,a,r,l,n,o,i){const c={};n&&(c.backgroundColor=n,"fixed"===a?(c.width=r,c.height=l,c.backgroundColor=n,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),i&&(c.objectPosition=i);const d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const g=["children"],p=function(e){let{layout:t,width:a,height:l}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:l/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+l+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){let{children:t}=e,a=o(e,g);return r.createElement(r.Fragment,null,r.createElement(p,s({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],b=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:l,alt:n="",shouldLoad:i}=e,c=o(e,h);return r.createElement("img",s({},c,{decoding:"async",loading:l,src:i?t:void 0,"data-src":i?void 0:t,srcSet:i?a:void 0,"data-srcset":i?void 0:a,alt:n}))},w=function(e){let{fallback:t,sources:a=[],shouldLoad:l=!0}=e,n=o(e,b);const i=n.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,s({},n,t,{sizes:i,shouldLoad:l}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:n}=e;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,sizes:i})})),c):c};var v;y.propTypes={src:l.string.isRequired,alt:l.string.isRequired,sizes:l.string,srcSet:l.string,shouldLoad:l.bool},w.displayName="Picture",w.propTypes={alt:l.string.isRequired,shouldLoad:l.bool,fallback:l.exact({src:l.string.isRequired,srcSet:l.string,sizes:l.string}),sources:l.arrayOf(l.oneOfType([l.exact({media:l.string.isRequired,type:l.string,sizes:l.string,srcSet:l.string.isRequired}),l.exact({media:l.string,type:l.string.isRequired,sizes:l.string,srcSet:l.string.isRequired})]))};const x=["fallback"],E=function(e){let{fallback:t}=e,a=o(e,x);return t?r.createElement(w,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};E.displayName="Placeholder",E.propTypes={fallback:l.string,sources:null==(v=w.propTypes)?void 0:v.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const C=function(e){return r.createElement(r.Fragment,null,r.createElement(w,s({},e)),r.createElement("noscript",null,r.createElement(w,s({},e,{shouldLoad:!0}))))};C.displayName="MainImage",C.propTypes=w.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],N=["style","className"],L=e=>e.replace(/\n/g,""),S=function(e,t,a){for(var r=arguments.length,l=new Array(r>3?r-3:0),s=3;s<r;s++)l[s-3]=arguments[s];return e.alt||""===e.alt?n().string.apply(n(),[e,t,a].concat(l)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},j={image:n().object.isRequired,alt:S},z=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],_=["style","className"],T=new Set;let I,O;const M=function(e){let{as:t="div",image:l,style:n,backgroundColor:c,className:u,class:m,onStartLoad:g,onLoad:p,onError:f}=e,h=o(e,z);const{width:b,height:y,layout:w}=l,v=d(b,y,w),{style:x,className:E}=v,C=o(v,_),k=(0,r.useRef)(),N=(0,r.useMemo)((()=>JSON.stringify(l.images)),[l.images]);m&&(u=m);const L=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(w,b,y);return(0,r.useEffect)((()=>{I||(I=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return O=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=k.current.querySelector("[data-gatsby-image-ssr]");if(e&&i())return e.complete?(null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void T.add(N);if(O&&T.has(N))return;let t,r;return I.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;k.current&&(k.current.innerHTML=a(s({isLoading:!0,isLoaded:T.has(N),image:l},h)),T.has(N)||(t=requestAnimationFrame((()=>{k.current&&(r=o(k.current,N,T,n,g,p,f))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[l]),(0,r.useLayoutEffect)((()=>{T.has(N)&&O&&(k.current.innerHTML=O(s({isLoading:T.has(N),isLoaded:T.has(N),image:l},h)),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}))}),[l]),(0,r.createElement)(t,s({},C,{style:s({},x,n,{backgroundColor:c}),className:E+(u?" "+u:""),ref:k,dangerouslySetInnerHTML:{__html:L},suppressHydrationWarning:!0}))},F=(0,r.memo)((function(e){return e.image?(0,r.createElement)(M,e):null}));F.propTypes=j,F.displayName="GatsbyImage";const A=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function R(e){return function(t){let{src:a,__imageData:l,__error:n}=t,i=o(t,A);return n&&console.warn(n),l?r.createElement(e,s({image:l},i)):(console.warn("Image not loaded",a),null)}}const q=R((function(e){let{as:t="div",className:a,class:l,style:n,image:i,loading:c="lazy",imgClassName:g,imgStyle:p,backgroundColor:h,objectFit:b,objectPosition:y}=e,w=o(e,k);if(!i)return console.warn("[gatsby-plugin-image] Missing image prop"),null;l&&(a=l),p=s({objectFit:b,objectPosition:y,backgroundColor:h},p);const{width:v,height:x,layout:S,images:j,placeholder:z,backgroundColor:_}=i,T=d(v,x,S),{style:I,className:O}=T,M=o(T,N),F={fallback:void 0,sources:[]};return j.fallback&&(F.fallback=s({},j.fallback,{srcSet:j.fallback.srcSet?L(j.fallback.srcSet):void 0})),j.sources&&(F.sources=j.sources.map((e=>s({},e,{srcSet:L(e.srcSet)})))),r.createElement(t,s({},M,{style:s({},I,n,{backgroundColor:h}),className:O+(a?" "+a:"")}),r.createElement(f,{layout:S,width:v,height:x},r.createElement(E,s({},m(z,!1,S,v,x,_,b,y))),r.createElement(C,s({"data-gatsby-image-ssr":"",className:g},w,u("eager"===c,!1,F,c,p)))))})),P=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),l=2;l<a;l++)r[l-2]=arguments[l];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?n().number.apply(n(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},D=new Set(["fixed","fullWidth","constrained"]),W={src:n().string.isRequired,alt:S,width:P,height:P,sizes:n().string,layout:e=>{if(void 0!==e.layout&&!D.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};q.displayName="StaticImage",q.propTypes=W;const B=R(F);B.displayName="StaticImage",B.propTypes=W},4610:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(7294),l=a(1883),n=a(8032);var s=()=>{const{0:e,1:t}=(0,r.useState)(!1),{0:s,1:o}=(0,r.useState)(!1),i=()=>{window.scrollY>=10?o(!0):o(!1)};return(0,r.useEffect)((()=>{i(),window.addEventListener("scroll",i)})),r.createElement("header",{className:"\r z-50 mx-auto sticky top-0 text-center\r "},r.createElement("div",{className:"realtive bg-transparent transition-colors duration-200 w-full"},r.createElement("div",{className:"absolute bg-black/40 h-full w-full"}),r.createElement("div",{className:s?"h-full w-full py-1 bg-black/20 absolute top-0 -z-10 backdrop-blur-md transition-colors duration-500":"h-full w-full py-1 absolute top-0 -z-10 transition-colors duration-300"}),r.createElement("nav",{className:e?"max-w-screen-2xl mx-auto px-4 py-2 md:py-4 flex items-center justify-between w-full navTextColor bg-black/90 transition-colors duration-200":"max-w-screen-2xl mx-auto px-4 py-2 md:py-2 flex items-center justify-between lg:px-[15%] w-full navTextColor transition-colors duration-200"},r.createElement(l.Link,{to:"/",className:"flex lg:static items-center justify-center","aria-label":"logo"},r.createElement(n.S,{loading:"eager",className:"h-auto w-44",alt:"logo zółte rejestracje",src:"../assets/logo.png",__imageData:a(5865)})),r.createElement("button",{"aria-label":"Menu",onClick:()=>{t(!e)},className:"bg-slate-200/80 group hover:bg-slate-100/90 lg:hidden p-2.5 transition-colors duration-200 z-50 rounded-lg"},r.createElement("div",{className:e?"w-5 h-1 group-hover:bg-gray-700 transition-all duration-200 bg-gray-600 m-1 translate-y-2 rotate-45 rounded-lg":"w-5 h-1 group-hover:bg-gray-700 transition-all duration-200 bg-gray-600 m-1 rounded-lg"}),r.createElement("div",{className:e?"w-3 h-1 group-hover:bg-gray-700 transition-all duration-200 bg-gray-600 m-1 opacity-0":"w-3 h-1 group-hover:bg-gray-700 transition-all duration-200 bg-gray-600 m-1 rounded-lg"}),r.createElement("div",{className:e?"w-5 h-1 group-hover:bg-gray-700 transition-all duration-200 bg-gray-600 m-1 -translate-y-2 -rotate-45 rounded-lg":"w-5 h-1 group-hover:bg-gray-700 transition-all duration-200 bg-gray-600 m-1 rounded-lg"})),r.createElement("ul",{className:e?"absolute text-lg top-full left-0 pb-4 flex flex-col lg:static text-main text-center w-full bg-black/90 opacity-100 transition duration-200 -translate-x-0 -z-10":"absolute top-full left-0 py-2 flex flex-col lg:opacity-100 lg:static lg:flex lg:flex-row lg:items-center lg:justify-end lg:top-0 lg:translate-x-0 lg:py-0 text-main text-center w-full opacity-0 -translate-x-full transition duration-100 -z-10 lg:z-10 lg:ml-8"},r.createElement("li",{className:"mx-2 my-2 px-2 py-3"},r.createElement(l.Link,{"aria-label":"Strona Główna",className:"hover:text-orange-400 transition-colors duration-200",to:"/"},"Home")),r.createElement("li",{className:"mx-2 my-2 px-2 py-3"},r.createElement(l.Link,{"aria-label":"O Nas",className:"hover:text-orange-400 transition-colors duration-200",to:"/oNas"},"O Nas")),r.createElement("li",{className:"mx-2 my-2 px-2 py-3"},r.createElement(l.Link,{"aria-label":"Oferta",className:"hover:text-orange-400 transition-colors duration-200",to:"/oferta"},"Oferta")),r.createElement("li",{className:"mx-2 my-2 px-2 py-3"},r.createElement(l.Link,{"aria-label":"Fakty i Mity",className:"hover:text-orange-400 transition-colors duration-200",to:"/faktyMity"},"Fakty & Mity")),r.createElement("li",{className:"mx-2 my-2 px-2 py-3"},r.createElement(l.Link,{"aria-label":"Kontakt",className:"hover:text-orange-400 transition-colors duration-200",to:"/kontakt"},"Kontakt"))))))};var o=()=>{const{0:e,1:t}=(0,r.useState)(!1),a=()=>{window.scrollY>=1200?t(!0):t(!1)};return(0,r.useEffect)((()=>{a(),window.addEventListener("scroll",a)})),r.createElement(l.Link,{"aria-label":"Przewiń do góry",className:e?"fixed right-6 hover:scale-110 bottom-24 translate-x-0 transition-transform duration-500 z-50 ":"fixed right-6 bottom-24 transition-transform duration-1000 z-50 translate-x-[200%]",to:"#"},r.createElement("svg",{className:"h-11 w-11 md:h-12 md:w-12",width:"571",height:"571",viewBox:"0 0 571 571",xmlns:"http://www.w3.org/2000/svg"},r.createElement("rect",{x:"121",y:"147",width:"337",height:"256",fill:"black"}),r.createElement("path",{d:"M264.31 0.658076C202.976 5.72474 147.643 28.3914 100.843 67.5914C52.7097 107.725 18.3097 165.858 5.64301 228.125C-15.0237 329.858 22.043 436.525 100.976 502.658C208.31 592.525 361.643 592.525 468.976 502.658C517.11 462.391 551.643 404.258 564.31 341.991C581.643 256.658 559.11 168.525 502.443 100.925C455.243 44.3914 384.976 7.99141 310.31 1.19141C295.91 -0.141924 276.576 -0.408591 264.31 0.658076ZM296.176 203.058C298.443 204.125 321.776 226.525 347.91 252.791C396.843 301.725 398.31 303.591 398.31 313.591C398.31 327.458 384.71 340.925 370.576 341.058C359.91 341.058 356.576 338.525 319.91 301.991L284.976 267.058L249.91 301.991C213.376 338.525 210.043 341.058 199.376 341.058C185.243 340.925 171.643 327.458 171.643 313.591C171.643 303.591 173.11 301.725 222.043 252.791C248.176 226.525 271.376 204.258 273.643 203.058C278.843 200.525 290.71 200.525 296.176 203.058Z",fill:"yellow"}),r.createElement("defs",null,r.createElement("linearGradient",{id:"paint0_linear_1033_163",x1:"78.0807",y1:"465.591",x2:"607.558",y2:"-42.9764",gradientUnits:"userSpaceOnUse"},r.createElement("stop",{offset:"0.0416667","stop-color":"#FF8A00"}),r.createElement("stop",{offset:"1","stop-color":"#5CFF58"})))))};var i=()=>r.createElement("footer",{class:"text-gray-300 body-font bg-black/70 relative bottom-0 w-full px-6"},r.createElement("div",{class:"container px-5 py-12 mx-auto flex items-center sm:flex-row flex-col"},r.createElement(l.Link,{"aria-label":"Nażółtej.pl",to:"/",class:"flex title-font font-medium items-center md:justify-start justify-center text-gray-900"},r.createElement(n.S,{className:"h-auto w-32",alt:"logo",src:"../assets/logo.png",__imageData:a(214)})),r.createElement("p",{class:"text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-500 sm:py-2 sm:mt-0 mt-4"},"© 2023 Nażółtej.pl —",r.createElement(l.Link,{"aria-label":"seovileo.pl",href:"https://seovileo.pl/",class:"text-gray-300 ml-1",target:"_blank"},"@seovileo.pl")),r.createElement("span",{class:"inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"},r.createElement(l.Link,{"aria-label":"facebook",to:"https://www.facebook.com/rejestracjanazolte",class:"text-gray-400"},r.createElement("svg",{fill:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"w-5 h-5",viewBox:"0 0 24 24"},r.createElement("path",{d:"M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"}))),r.createElement(l.Link,{"aria-label":"instagram",to:"https://www.instagram.com/nazoltej.pl/",class:"ml-3 text-gray-400"},r.createElement("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"w-5 h-5",viewBox:"0 0 24 24"},r.createElement("rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"}),r.createElement("path",{d:"M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"}))))));var c=()=>{const{0:e,1:t}=(0,r.useState)(!1);return(0,r.useEffect)((()=>{const e=setTimeout((()=>{t(!0)}),3e3);return()=>e})),r.createElement(l.Link,{"aria-label":"Messenger",className:e?"fixed right-6 hover:scale-110 bottom-8 translate-x-0 transition-transform duration-500 z-50":"fixed right-6 bottom-8 transition-transform duration-1000 z-50 translate-x-[200%]",to:"http://m.me/106209071457987"},r.createElement("svg",{className:"h-11 w-11 md:h-12 md:w-12 msg-rotate ",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("rect",{x:"14",y:"23",width:"72",height:"52",fill:"white"}),r.createElement("path",{d:"M0 48.5C0 20.6312 21.8312 0 50 0C78.1688 0 100 20.6312 100 48.5C100 76.3688 78.1688 97 50 97C44.9375 97 40.0875 96.3313 35.525 95.0813C34.6403 94.8351 33.6978 94.9013 32.8563 95.2688L22.9312 99.6562C22.3318 99.9207 21.6766 100.034 21.0232 99.9857C20.3698 99.9376 19.7383 99.7298 19.184 99.3804C18.6298 99.0311 18.1698 98.551 17.8446 97.9822C17.5193 97.4135 17.3388 96.7736 17.3187 96.1188L17.0438 87.225C17.0248 86.6837 16.8958 86.1518 16.6648 85.6619C16.4338 85.1719 16.1056 84.7341 15.7 84.375C5.975 75.675 0 63.075 0 48.5ZM34.6625 39.3813L19.975 62.6813C18.5688 64.9188 21.3125 67.4375 23.4188 65.8438L39.2 53.8688C39.719 53.4745 40.3524 53.26 41.0042 53.2578C41.6559 53.2555 42.2907 53.4656 42.8125 53.8562L54.4937 62.6188C55.3226 63.2403 56.2711 63.6834 57.2797 63.9201C58.2883 64.1568 59.3349 64.182 60.3537 63.9941C61.3725 63.8062 62.3413 63.4092 63.1991 62.8283C64.0568 62.2474 64.7849 61.4951 65.3375 60.6188L80.025 37.3188C81.4375 35.0813 78.6875 32.5625 76.5813 34.1562L60.8 46.1312C60.281 46.5255 59.6476 46.7399 58.9958 46.7422C58.3441 46.7445 57.7093 46.5344 57.1875 46.1437L45.5063 37.375C44.6774 36.7535 43.7289 36.3104 42.7203 36.0737C41.7117 35.837 40.6651 35.8118 39.6463 35.9997C38.6275 36.1876 37.6587 36.5845 36.8009 37.1654C35.9432 37.7464 35.2151 38.5049 34.6625 39.3813Z",fill:"url(#paint0_linear_862_91)"}),r.createElement("defs",null,r.createElement("linearGradient",{id:"paint0_linear_862_91",x1:"87.5",y1:"-1.63772e-07",x2:"10.5",y2:"93.5",gradientUnits:"userSpaceOnUse"},r.createElement("stop",{"stop-color":"#FF8A00"}),r.createElement("stop",{offset:"0.270833","stop-color":"#DB00FF"}),r.createElement("stop",{offset:"0.807292","stop-color":"#5263FF"})))),r.createElement("div",{className:"w-5/6 md:w-3/4 md:left-6 flex items-center justify-around h-4 rounded-md left-5 bg-white absolute bottom-9 md:bottom-[2.2rem] px-[.15rem] border"},r.createElement("div",{className:"h-2 w-2 rounded-full bg-gray-600 shadow-lg slide-top"}),r.createElement("div",{className:"h-2 w-2 rounded-full bg-gray-600 shadow-lg slide-top1"}),r.createElement("div",{className:"h-2 w-2 rounded-full bg-gray-600 shadow-lg slide-top2"})))};var d=e=>{var t;let{children:a}=e;const n=(0,l.useStaticQuery)("3649515864");return r.createElement("div",{className:"text-base text-black max-w-[2000px] mx-auto"},r.createElement(s,{siteTitle:(null===(t=n.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),r.createElement("div",null,r.createElement("main",{className:"w-full overflow-hidden"},a),r.createElement(o,null),r.createElement(c,null),r.createElement(i,null)))}},214:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8d818","images":{"fallback":{"src":"/static/f6e2fe3ff4b1cc4dd9e2cb1982aef0aa/4384e/logo.png","srcSet":"/static/f6e2fe3ff4b1cc4dd9e2cb1982aef0aa/88432/logo.png 125w,\\n/static/f6e2fe3ff4b1cc4dd9e2cb1982aef0aa/b5c5c/logo.png 250w,\\n/static/f6e2fe3ff4b1cc4dd9e2cb1982aef0aa/4384e/logo.png 500w","sizes":"(min-width: 500px) 500px, 100vw"},"sources":[{"srcSet":"/static/f6e2fe3ff4b1cc4dd9e2cb1982aef0aa/bd41e/logo.webp 125w,\\n/static/f6e2fe3ff4b1cc4dd9e2cb1982aef0aa/30963/logo.webp 250w,\\n/static/f6e2fe3ff4b1cc4dd9e2cb1982aef0aa/b41d6/logo.webp 500w","type":"image/webp","sizes":"(min-width: 500px) 500px, 100vw"}]},"width":500,"height":119.99999999999999}')},5865:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8d818","images":{"fallback":{"src":"/static/f6e2fe3ff4b1cc4dd9e2cb1982aef0aa/4384e/logo.png","srcSet":"/static/f6e2fe3ff4b1cc4dd9e2cb1982aef0aa/88432/logo.png 125w,\\n/static/f6e2fe3ff4b1cc4dd9e2cb1982aef0aa/b5c5c/logo.png 250w,\\n/static/f6e2fe3ff4b1cc4dd9e2cb1982aef0aa/4384e/logo.png 500w","sizes":"(min-width: 500px) 500px, 100vw"},"sources":[{"srcSet":"/static/f6e2fe3ff4b1cc4dd9e2cb1982aef0aa/bd41e/logo.webp 125w,\\n/static/f6e2fe3ff4b1cc4dd9e2cb1982aef0aa/30963/logo.webp 250w,\\n/static/f6e2fe3ff4b1cc4dd9e2cb1982aef0aa/b41d6/logo.webp 500w","type":"image/webp","sizes":"(min-width: 500px) 500px, 100vw"}]},"width":500,"height":119.99999999999999}')}}]);
//# sourceMappingURL=commons-cccfde69e75aa0133b95.js.map