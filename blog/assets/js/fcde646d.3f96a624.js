"use strict";(self.webpackChunkloopback_blog=self.webpackChunkloopback_blog||[]).push([[779],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(o),h=n,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||i;return o?a.createElement(m,r(r({ref:t},u),{},{components:o})):a.createElement(m,r({ref:t},u))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,r[1]=l;for(var p=2;p<i;p++)r[p]=o[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}h.displayName="MDXCreateElement"},2444:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=o(7462),n=(o(7294),o(3905));const i={title:"LoopBack 4 2019 Q4 Overview",date:new Date("2020-01-22T00:00:00.000Z"),authors:["dhmlau","agnes512"],slug:"loopback4-2019-q4-overview",tags:["Quarterly update"]},r=void 0,l={permalink:"/blog/loopback4-2019-q4-overview",editUrl:"https://github.com/loopbackio/loopback-blog/blog/2020/2020-01-22-loopback-q4-overview.md",source:"@site/blog/2020/2020-01-22-loopback-q4-overview.md",title:"LoopBack 4 2019 Q4 Overview",description:"Originally published on strongloop.com",date:"2020-01-22T00:00:00.000Z",formattedDate:"January 22, 2020",tags:[{label:"Quarterly update",permalink:"/blog/tags/quarterly-update"}],readingTime:5.51,hasTruncateMarker:!0,authors:[{name:"Diana Lau",title:"LoopBack Maintainer",url:"https://github.com/dhmlau",imageURL:"https://avatars2.githubusercontent.com/u/25489897",key:"dhmlau"},{name:"Agnes Lin",title:"LoopBack Maintainer",url:"https://github.com/agnes512",imageURL:"https://avatars3.githubusercontent.com/u/50331796",key:"agnes512"}],frontMatter:{title:"LoopBack 4 2019 Q4 Overview",date:"2020-01-22T00:00:00.000Z",authors:["dhmlau","agnes512"],slug:"loopback4-2019-q4-overview",tags:["Quarterly update"]},prevItem:{title:"LoopBack 4 January 2020 Milestone Update",permalink:"/blog/january-2020-milestone"},nextItem:{title:"LoopBack 4 December 2019 Milestone Update",permalink:"/blog/december-2019-milestone"}},s={authorsImageUrls:[void 0,void 0]},p=[{value:"Migration Guide",id:"migration-guide",level:2},{value:"Going Cloud Native",id:"going-cloud-native",level:2},{value:"Authentication and Authorization",id:"authentication-and-authorization",level:2},{value:"Inclusion of Related Models",id:"inclusion-of-related-models",level:2},{value:"Partition Key with Cloudant and CouchDB",id:"partition-key-with-cloudant-and-couchdb",level:2},{value:"Creating REST API from Model",id:"creating-rest-api-from-model",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2},{value:"Previous Milestone Blogs",id:"previous-milestone-blogs",level:2},{value:"Call for Action",id:"call-for-action",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Originally published on ",(0,n.kt)("a",{parentName:"em",href:"https://strongloop.com"},"strongloop.com"))),(0,n.kt)("p",null,"Happy New Year! The number of LoopBack 4 downloads in 2019 increased more than double than that in 2018. Thank you for your continuous support in using and contributing to LoopBack. We cannot do this alone and we really appreciate all the contributions from the community. In December, we were happy to have 3 community members join us as maintainers: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/derdeka"},"@derdeka"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/dougal83"},"dougal83")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/achrinza"},"achrinza"),"!"),(0,n.kt)("p",null,"As year 2020 commences, let us summarize our development activities in the last quarter of 2019."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#migration-guide"},"Migration Guide"),": created the outline for general runtime migration and added details on migrating Express middleware and model relations."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#going-cloud-native"},"Going cloud native"),": added extensions for observability and deployment documentation"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#authentication-and-authorization"},"Authentication and authorization"),": enhanced the documentation and enabled token based authentication in API Explorer"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#inclusion-of-related-models"},"Inclusion of Related Models"),": completed MVP and ability to allow custom scope."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#partition-key-with-cloudant-and-couchdb"},"Partition Key with Cloudant and CouchDB"),": added support for partitioned database"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#creating-rest-api-from-model-classes"},"Creating REST API from Model Classes"),": added the ability to generate controller from Model and Repository classes")),(0,n.kt)("h2",{id:"migration-guide"},"Migration Guide"),(0,n.kt)("p",null,"Enriching the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/453"},"Migration Guide from LB3")," story is our focus of this quarter and will continue to be the focus. Adding on top of the comparison between the concepts in LoopBack 3 and that in LoopBack 4, we created the skeleton on the areas that need more explanation in the migration. You can find it on our site: ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/migration-overview.html"},"Migration Guide")),(0,n.kt)("p",null,"In Q4, we added pages for migrating: ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/migration-models-core.html"},"Model"),", ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/migration-datasources.html"},"Datasource"),", ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/migration-models-relations.html"},"Model Relation"),", ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/migration-express-middleware.html"},"Express Middleware"),", etc. If there are other topics you'd like to see in the migration guide, please let us know on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/453"},"GitHub"),"."),(0,n.kt)("h2",{id:"going-cloud-native"},"Going Cloud Native"),(0,n.kt)("p",null,"In the past few months, we made significant amount of enhancement in the cloud native area. Not only we added the extensions for logging, health check, tracing and metrics, we also created the deployment to Kubernetes tutorial in our shopping example application. For details, take a look at the ",(0,n.kt)("a",{parentName:"p",href:"https://strongloop.com/strongblog/going-cloud-native-with-loopback-4/"},"blog post")," from ",(0,n.kt)("a",{parentName:"p",href:"https://strongloop.com/authors/Raymond_Feng/"},"Raymond"),"."),(0,n.kt)("p",null,"Besides, the Node.js LoopBack stack provides a powerful solution to build microservices in TypeScript with LoopBack. Appsody is an open source project that makes creating cloud native applications simple. It has many cool features which are pre-configured with cloud native capabilities for Kubernetes and Knative deployments. In our detailed ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Appsody-LoopBack.html"},"Appsody with LoopBack Tutorial")," on developing and deploying LoopBack applications, we would like to show you the possibility and potential of how these kinds of tools can work well with LoopBack of building microservices."),(0,n.kt)("h2",{id:"authentication-and-authorization"},"Authentication and Authorization"),(0,n.kt)("p",null,"We added the support for authentication and authorization in LoopBack 4. Check out the ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Loopback-component-authentication.html"},"Authentication page")," and the ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Loopback-component-authorization.html"},"Authorization page")," for the latest features. Want to try out a real-world example? We updated the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback4-example-shopping"},"shopping example application")," to use the authentication and authorization systems to help you get familiar with it."),(0,n.kt)("p",null,"Also, we made some progress on the story ",(0,n.kt)("em",{parentName:"p"},"allow users to have token-based authentication in API Explorer")," in Q4. Starting with ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/2027"},"a spike")," as the blueprint, we now added an extension point for the OpenAPI enhancers as the first brick in the wall. Check out the ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Extending-OpenAPI-specification.html"},'"Extending OpenAPI Specification"')," page for details. As always, we'd love to get any help from you. Here are some follow-up stories if you're interested in contributing:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues/4380"},"Add OpenAPI enhancer service in @loopback/rest")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues/4385"},"Ordering the enhancers by group name for OpenAPI spec enhancer service ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues/4386"},"Add bearer auth scheme as the default security scheme"))),(0,n.kt)("h2",{id:"inclusion-of-related-models"},"Inclusion of Related Models"),(0,n.kt)("p",null,"We finished the Inclusion of Related Models ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/1352"},"MVP")," in Q4! This addition not only simplifies querying data and reduces database calls in LoopBack 4, but it closes one feature gap between LoopBack 3 and LoopBack 4 as well."),(0,n.kt)("p",null,"In the past few months, we released a bunch of features such as ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/HasMany-relation.html#query-multiple-relations"},"custom scope for inclusion"),", and we ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/3451"},"added inclusion resolvers to lb4 relation CLI"),", etc. We enhanced the ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/HasMany-relation.html#querying-related-models"},"documentation")," with examples and usages along with ",(0,n.kt)("a",{parentName:"p",href:"https://strongloop.com/strongblog/inclusion-of-related-models/"},"a blog post")," to show how you can query data over different relations easily. Still, there are some limitations and unfinished tasks. Check ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/3585"},"Post MVP")," if you'd like to contribute."),(0,n.kt)("h2",{id:"partition-key-with-cloudant-and-couchdb"},"Partition Key with Cloudant and CouchDB"),(0,n.kt)("p",null,"Speaking of better performance and manageability of databases, the database that supports partitioning is one of the ideal choices. Are you considering to use databases that have the feature such as Cloudant and CouchDB with LoopBack? We now support such features in the corresponding connectors. It not only makes the query less computationally, but also reduces cost for LoopBack users using the Cloudant service on IBM Cloud. We have prepared a tutorial and documentation to help you get started! See the details and examples on the usage in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-connector-cloudant/blob/master/doc/partitioned-db.md"},"Partition Databases"),"."),(0,n.kt)("h2",{id:"creating-rest-api-from-model"},"Creating REST API from Model"),(0,n.kt)("p",null,"As LoopBack 4 provides more scalability and extensibility, we ask users to create artifacts such as Model, Datasource, Repository, and Controller to start building their applications. Compared to LoopBack 3, it adds complexity and extra steps to create APIs. This story aims to improve the developer experience for those who may not need that extra flexibility."),(0,n.kt)("p",null,"You might wonder how simple it would be. In the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/4235"},"spike"),", if you already have the database (we use MySQL in the spike) and tables set up, you can create basic CRUD APIs just through the API Explorer. For example, all you need to do is to make a POST request with a valid MySQL connection string and a list of existing tables,"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'{\n  "connectionString": "mysql://root@localhost/test",\n  "tableNames": [\n    "Coffeeshop"\n  ]\n}\n')),(0,n.kt)("p",null,"then the new endpoints will be created for you."),(0,n.kt)("p",null,"Implementations are on the way! Feel free to try out the spike and join the discussion on GitHub :D"),(0,n.kt)("h2",{id:"whats-next"},"What's Next?"),(0,n.kt)("p",null,"If you have been following us, you probably realize that we now start our planning of the milestones and roadmaps with a pull request. We think it is useful to our users to get to know our plans and possibly provide inputs in our planning stage. See our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/blob/master/docs/ROADMAP.md#2020-goals-and-focus"},"2020 Goals and Focus")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/blob/master/docs/ROADMAP.md#q1-2020-roadmap"},"Q1 roadmap"),". There is also the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/4376"},"Janurary milestone"),"."),(0,n.kt)("h2",{id:"previous-milestone-blogs"},"Previous Milestone Blogs"),(0,n.kt)("p",null,"Check out our previously published monthly milestone blog posts in Q4 for more details:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://strongloop.com/strongblog/october-2019-milestone/"},"October milestone blog")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://strongloop.com/strongblog/november-2019-milestone/"},"November milestone blog")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://strongloop.com/strongblog/december-2019-milestone/"},"December milestone blog"))),(0,n.kt)("p",null,"If you want to see a 2019 summary, don't forget to check out ",(0,n.kt)("a",{parentName:"p",href:"https://strongloop.com/strongblog/loopback-2019-review/"},"this blog"),"!"),(0,n.kt)("h2",{id:"call-for-action"},"Call for Action"),(0,n.kt)("p",null,"LoopBack's success depends on you. We appreciate your continuous support and engagement to make LoopBack even better and meaningful for your API creation experience. Please join us and help the project by:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues"},"Reporting issues"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/blob/master/docs/CONTRIBUTING.md"},"Contributing"),"\ncode and documentation."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/labels/good%20first%20issue"},'Opening a pull request on one of our "good first issues"'),".")))}d.isMDXComponent=!0}}]);