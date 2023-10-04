"use strict";(self.webpackChunkloopback_blog=self.webpackChunkloopback_blog||[]).push([[3829],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),g=a,k=m["".concat(p,".").concat(g)]||m[g]||u[g]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"LoopBack 4 April 2020 Milestone Update",date:new Date("2020-05-06T00:00:00.000Z"),authors:"deepakrkris",slug:"april-2020-milestone",tags:["Milestone update"]},i=void 0,l={permalink:"/blog/april-2020-milestone",editUrl:"https://github.com/loopbackio/loopback-blog/blog/2020/2020-05-06-april-milestone.md",source:"@site/blog/2020/2020-05-06-april-milestone.md",title:"LoopBack 4 April 2020 Milestone Update",description:"Originally published on strongloop.com",date:"2020-05-06T00:00:00.000Z",formattedDate:"May 6, 2020",tags:[{label:"Milestone update",permalink:"/blog/tags/milestone-update"}],readingTime:7.915,hasTruncateMarker:!0,authors:[{name:"Deepak Rajamohan",title:"LoopBack Maintainer",url:"https://github.com/deepakrkris",imageURL:"https://avatars0.githubusercontent.com/u/7688315",key:"deepakrkris"}],frontMatter:{title:"LoopBack 4 April 2020 Milestone Update",date:"2020-05-06T00:00:00.000Z",authors:"deepakrkris",slug:"april-2020-milestone",tags:["Milestone update"]},prevItem:{title:"LoopBack - Taking Express to the Next Level",permalink:"/blog/express-to-loopback"},nextItem:{title:"Community Q&A Monthly Digest - April 2020",permalink:"/blog/2020-april-slack-qa"}},p={authorsImageUrls:[void 0]},s=[],c={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Originally published on ",(0,a.kt)("a",{parentName:"em",href:"https://strongloop.com"},"strongloop.com"))),(0,a.kt)("p",null,"In April, we focused mostly on completing migration activities, like the migration guide and other related\ntasks like running existing tests in a LoopBack 3 application after composing it within a LoopBack 4 application. But, that didn't stop us from exploring and adding some cool features."),(0,a.kt)("p",null,"We now have a new ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/packages/express"},"Express")," package, which enables modeling Express middleware functions as an interceptor chain. Also it is possible now to break a complex application into much smaller components and wire them in a main application. You can find more details on thsese below in ",(0,a.kt)("a",{parentName:"p",href:"#exploring-new-territories"},(0,a.kt)("inlineCode",{parentName:"a"},"Exploring new territories")),"."),(0,a.kt)("p",null,"Also our community has published many ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/search?q=keywords:loopback-extension"},"LoopBack 4 extensions in NPM"),". Many of these extensions are addressing a variety of usecases like pub-sub messaging, mqtt, graphql, rate-limiting, authentication, logging, AWS cloud integration, etc. The extensibility of LoopBack in real time use cases are even surprising us and the possibilities seems to be endless."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#migration-guide"},"Migration Guide")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#exploring-new-territories"},"Exploring new territories")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#apiconnect-extension"},"APIConnect Extension")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#miscellaneous"},"Miscellaneous")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#documentation"},"Documentation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#community-contributions"},"Community Contributions"))))}u.isMDXComponent=!0}}]);