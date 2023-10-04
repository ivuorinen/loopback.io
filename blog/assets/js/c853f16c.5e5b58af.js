"use strict";(self.webpackChunkloopback_blog=self.webpackChunkloopback_blog||[]).push([[455],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,b=u["".concat(c,".").concat(d)]||u[d]||m[d]||n;return r?a.createElement(b,i(i({ref:t},s),{},{components:r})):a.createElement(b,i({ref:t},s))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<n;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1243:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>p,toc:()=>l});var a=r(7462),o=(r(7294),r(3905));const n={title:"Experimenting with Plain JavaScript Programming in LoopBack 4",date:new Date("2019-03-28T00:00:00.000Z"),authors:"hacksparrow",slug:"loopback4-javascript-experience",tags:["javascript","experiment"]},i=void 0,p={permalink:"/blog/loopback4-javascript-experience",editUrl:"https://github.com/loopbackio/loopback-blog/blog/2019/2019-03-28-loopback4-javascript-experience.md",source:"@site/blog/2019/2019-03-28-loopback4-javascript-experience.md",title:"Experimenting with Plain JavaScript Programming in LoopBack 4",description:"Originally published on strongloop.com",date:"2019-03-28T00:00:00.000Z",formattedDate:"March 28, 2019",tags:[{label:"javascript",permalink:"/blog/tags/javascript"},{label:"experiment",permalink:"/blog/tags/experiment"}],readingTime:4.715,hasTruncateMarker:!0,authors:[{name:"Yaapa Hage",title:"LoopBack Maintainer",url:"https://github.com/hacksparrow",imageURL:"https://avatars2.githubusercontent.com/u/950112",key:"hacksparrow"}],frontMatter:{title:"Experimenting with Plain JavaScript Programming in LoopBack 4",date:"2019-03-28T00:00:00.000Z",authors:"hacksparrow",slug:"loopback4-javascript-experience",tags:["javascript","experiment"]},prevItem:{title:"LoopBack 4 March 2019 Milestone Update",permalink:"/blog/march-2019-milestone"},nextItem:{title:"LoopBack 3 Receives Extended Long Term Support",permalink:"/blog/lb3-extended-lts"}},c={authorsImageUrls:[void 0]},l=[],s={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Originally published on ",(0,o.kt)("a",{parentName:"em",href:"https://strongloop.com"},"strongloop.com"))),(0,o.kt)("p",null,"LoopBack is a popular open source Node.js framework. Its latest version (4) is written in TypeScript, while the older version were written in JavaScript. We chose to write LoopBack 4 to make it ",(0,o.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/FAQ.html#why-typescript"},"more extensible, scalable, and sustainable"),". TypeScript features made it easy for us to build dependency injection in the framework and leverage it for controllers, models, and other constructs using TypeScript decorators."),(0,o.kt)("p",null,"We believe that TypeScript is the right move and it will help you and us in the long run. However, some developers are constrained to use plain JavaScript at the moment for various reasons. We didn't want to leave our JavaScript users behind and decided to explore the possibilities of creating a JavaScript interface to LoopBack 4. This blog post is about what we did in that regard and what we will be doing next."))}m.isMDXComponent=!0}}]);