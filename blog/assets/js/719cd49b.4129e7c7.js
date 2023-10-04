"use strict";(self.webpackChunkloopback_blog=self.webpackChunkloopback_blog||[]).push([[2151],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(o),h=a,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||r;return o?n.createElement(m,i(i({ref:t},c),{},{components:o})):n.createElement(m,i({ref:t},c))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},8960:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=o(7462),a=(o(7294),o(3905));const r={title:"Building an Online Game With LoopBack 4 - Wrap-Up (Part 7)",date:new Date("2019-11-20T00:00:00.000Z"),authors:"wenbo",slug:"building-an-online-game-with-loopback-4-pt7",tags:["how-to"]},i=void 0,l={permalink:"/blog/building-an-online-game-with-loopback-4-pt7",editUrl:"https://github.com/loopbackio/loopback-blog/blog/2019/2019-11-20-building-an-online-game-with-loopback-4-pt7.md",source:"@site/blog/2019/2019-11-20-building-an-online-game-with-loopback-4-pt7.md",title:"Building an Online Game With LoopBack 4 - Wrap-Up (Part 7)",description:"Originally published on strongloop.com",date:"2019-11-20T00:00:00.000Z",formattedDate:"November 20, 2019",tags:[{label:"how-to",permalink:"/blog/tags/how-to"}],readingTime:2.225,hasTruncateMarker:!0,authors:[{name:"Wen Bo",title:"LoopBack Maintainer",url:"https://github.com/gobackhuoxing",imageURL:"https://avatars.githubusercontent.com/u/22156589",key:"wenbo"}],frontMatter:{title:"Building an Online Game With LoopBack 4 - Wrap-Up (Part 7)",date:"2019-11-20T00:00:00.000Z",authors:"wenbo",slug:"building-an-online-game-with-loopback-4-pt7",tags:["how-to"]},prevItem:{title:"Going Cloud Native with LoopBack 4",permalink:"/blog/going-cloud-native-with-loopback-4"},nextItem:{title:"CASCONxEVOKE Conference Recap for LoopBack",permalink:"/blog/cascon-evoke-2019"}},p={authorsImageUrls:[void 0]},s=[{value:"Part 7: Wrap-Up",id:"part-7-wrap-up",level:2},{value:"In This Episode",id:"in-this-episode",level:3},{value:"What We Have Achieved",id:"what-we-have-achieved",level:3},{value:"Last But Not Least",id:"last-but-not-least",level:3}],c={toc:s},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Originally published on ",(0,a.kt)("a",{parentName:"em",href:"https://strongloop.com"},"strongloop.com"))),(0,a.kt)("h2",{id:"part-7-wrap-up"},"Part 7: Wrap-Up"),(0,a.kt)("h3",{id:"in-this-episode"},"In This Episode"),(0,a.kt)("p",null,"This is the final episode of this series. We've used LoopBack 4 to build an online web text-based adventure game. We've built the foundation with LoopBack, and I am going to summarize what we have achieved so far, and how can you apply all of this to your own project. "),(0,a.kt)("h3",{id:"what-we-have-achieved"},"What We Have Achieved"),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"https://strongloop.com/strongblog/building-online-game-with-loopback-4-pt1/"},"episode 1"),", we created a simple APIs. You can do the same to create a start point for your own project, for example, a student registration system which has a ",(0,a.kt)("inlineCode",{parentName:"p"},"student")," model with properties like ",(0,a.kt)("inlineCode",{parentName:"p"},"studentId"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"major"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"course"),". Then we connected our project to MongoDB. You have the freedom to choose any database you want. LB4 supports most databases very well."),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"https://strongloop.com/strongblog/building-an-online-game-with-loopback-4-pt2/"},"episode 2"),", we used a third-party library to generate UUID. You can easily use any external library in you LoopBack 4 project. We also built relations between ",(0,a.kt)("inlineCode",{parentName:"p"},"character"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"weapon"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"aromr"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"skill"),". In a real world application, most of entities have relationships between each other. You can use LoopBack 4 to easily manage that in your project."),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"https://strongloop.com/strongblog/building-an-online-game-with-loopback-4-pt3/"},"episode 3"),", we covered how to customize APIs to achieve the function to manage users data. You can always implement your own amazing idea in your LoopBack 4 project."),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"https://strongloop.com/strongblog/building-an-online-game-with-loopback-4-pt4/"},"episode 4"),", we combined self-defined authorization strategies and services with ",(0,a.kt)("inlineCode",{parentName:"p"},"@loopback/authentication")," and how to apply it to your API. You can always design your own strategies and services based on your project needs."),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"https://strongloop.com/strongblog/building-an-online-game-with-loopback-4-pt5/"},"episode 5"),", we deployed our project with Docker and Kubernetes on IBM Cloud. Once you create a Docker image, you can run it almost everywhere. You can also push your own project image to other cloud like AWS, Azure, and Google Cloud."),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"https://strongloop.com/strongblog/building-an-online-game-with-loopback-4-pt6/"},"episode 6"),", we created simple login, signup and home pages with React. We also learned how to connect front-end and back-end. React is the most popular front-end framework today. You can easily use it to create your own front-end UI."),(0,a.kt)("h3",{id:"last-but-not-least"},"Last But Not Least"),(0,a.kt)("p",null,"Congratulations! You have built your own web application with LoopBack!"),(0,a.kt)("p",null,"What we built in this series doesn't matter. It doesn't have to be an online game! You can use these concepts for online shopping or food delivery APIs. What ",(0,a.kt)("em",{parentName:"p"},"is")," important is improving your design thinking, what methodology and tools we were using, and adding to the ways you think as a developer. Now, you've established stronger skills to build! "),(0,a.kt)("p",null,"I hope you enjoyed this series. Thank you so much for all of the following and support. The series may be ending, but your journey with LoopBack is just starting."),(0,a.kt)("p",null,"Happy coding!"))}d.isMDXComponent=!0}}]);