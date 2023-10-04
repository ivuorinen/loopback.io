"use strict";(self.webpackChunkloopback_blog=self.webpackChunkloopback_blog||[]).push([[3284],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(n),h=o,g=c["".concat(p,".").concat(h)]||c[h]||m[h]||a;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7159:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={title:"LoopBack 4 June 2020 Milestone Update",date:new Date("2020-07-08T00:00:00.000Z"),authors:["hacksparrow","bajtos"],slug:"june-2020-milestone",tags:["Milestone update"]},i=void 0,l={permalink:"/blog/june-2020-milestone",editUrl:"https://github.com/loopbackio/loopback-blog/blog/2020/2020-07-08-june-milestone.md",source:"@site/blog/2020/2020-07-08-june-milestone.md",title:"LoopBack 4 June 2020 Milestone Update",description:"Originally published on strongloop.com",date:"2020-07-08T00:00:00.000Z",formattedDate:"July 8, 2020",tags:[{label:"Milestone update",permalink:"/blog/tags/milestone-update"}],readingTime:7.23,hasTruncateMarker:!0,authors:[{name:"Yaapa Hage",title:"LoopBack Maintainer",url:"https://github.com/hacksparrow",imageURL:"https://avatars2.githubusercontent.com/u/950112",key:"hacksparrow"},{name:"Miroslav Bajto\u0161",title:"LoopBack Maintainer",url:"http://github.com/bajtos",imageURL:"https://avatars.githubusercontent.com/u/1140553",key:"bajtos"}],frontMatter:{title:"LoopBack 4 June 2020 Milestone Update",date:"2020-07-08T00:00:00.000Z",authors:["hacksparrow","bajtos"],slug:"june-2020-milestone",tags:["Milestone update"]},prevItem:{title:"LoopBack 4 2020 Q2 Overview",permalink:"/blog/loopback-4-2020-q2-overview"},nextItem:{title:"Community Q&A Monthly Digest - May 2020",permalink:"/blog/2020-may-slack-qa"}},p={authorsImageUrls:[void 0,void 0]},u=[],s={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Originally published on ",(0,o.kt)("a",{parentName:"em",href:"https://strongloop.com"},"strongloop.com"))),(0,o.kt)("p",null,"Documentation restructuring, TypeORM support, and HasManyThrough were the three main accomplishments in the month of June. Based on the community feedback, documentation improvement remains our number one priority in the coming month. Besides, while welcoming Nathan Chen join as a maintainer of the ",(0,o.kt)("inlineCode",{parentName:"p"},"strong-globalize")," repo, we said farewell to Deepak. "),(0,o.kt)("p",null,"Here is what we did in the month June:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#documentation-improvements"},"Documentation Improvements")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#hasmanythrough"},"HasManyThrough")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#typeormsupport"},"TypeORM Support")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#miscellaneous"},"Miscellaneous"))))}m.isMDXComponent=!0}}]);