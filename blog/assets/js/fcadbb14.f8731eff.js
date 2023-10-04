"use strict";(self.webpackChunkloopback_blog=self.webpackChunkloopback_blog||[]).push([[9601],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>u});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(o),h=n,u=m["".concat(p,".").concat(h)]||m[h]||d[h]||r;return o?a.createElement(u,i(i({ref:t},c),{},{components:o})):a.createElement(u,i({ref:t},c))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<r;s++)i[s]=o[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}h.displayName="MDXCreateElement"},5805:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=o(7462),n=(o(7294),o(3905));const r={title:"LoopBack 4 2020 Q1 Overview",date:new Date("2020-04-15T00:00:00.000Z"),authors:"dhmlau",slug:"loopback-4-2020-q1-overview",tags:["Quarterly update"]},i=void 0,l={permalink:"/blog/loopback-4-2020-q1-overview",editUrl:"https://github.com/loopbackio/loopback-blog/blog/2020/2020-04-15-loopback-q1-overview.md",source:"@site/blog/2020/2020-04-15-loopback-q1-overview.md",title:"LoopBack 4 2020 Q1 Overview",description:"Originally published on strongloop.com",date:"2020-04-15T00:00:00.000Z",formattedDate:"April 15, 2020",tags:[{label:"Quarterly update",permalink:"/blog/tags/quarterly-update"}],readingTime:6.26,hasTruncateMarker:!0,authors:[{name:"Diana Lau",title:"LoopBack Maintainer",url:"https://github.com/dhmlau",imageURL:"https://avatars2.githubusercontent.com/u/25489897",key:"dhmlau"}],frontMatter:{title:"LoopBack 4 2020 Q1 Overview",date:"2020-04-15T00:00:00.000Z",authors:"dhmlau",slug:"loopback-4-2020-q1-overview",tags:["Quarterly update"]},prevItem:{title:"Build REST APIs for CRUD operations from a model without coding",permalink:"/blog/model-to-rest-api-feature"},nextItem:{title:"LoopBack 4 March 2020 Milestone Update",permalink:"/blog/march-2020-milestone"}},p={authorsImageUrls:[void 0]},s=[{value:"Migration Guide",id:"migration-guide",level:2},{value:"Migration Tooling and Examples",id:"migration-tooling-and-examples",level:2},{value:"From Model Definitions to REST APIs",id:"from-model-definitions-to-rest-apis",level:2},{value:"Integrate with IBM API Connect",id:"integrate-with-ibm-api-connect",level:2},{value:"Newly Added Examples",id:"newly-added-examples",level:2},{value:"Newly Added Extensions",id:"newly-added-extensions",level:2},{value:"IBM Db2 for i Connector",id:"ibm-db2-for-i-connector",level:2},{value:"Enhancements in LoopBack core and OpenAPI areas",id:"enhancements-in-loopback-core-and-openapi-areas",level:2},{value:"Rework of Shopping Example",id:"rework-of-shopping-example",level:2},{value:"Refreshed Look for LoopBack Web Site",id:"refreshed-look-for-loopback-web-site",level:2},{value:"Previous Milestone Blogs",id:"previous-milestone-blogs",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2},{value:"Call to Action",id:"call-to-action",level:2}],c={toc:s},m="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Originally published on ",(0,n.kt)("a",{parentName:"em",href:"https://strongloop.com"},"strongloop.com"))),(0,n.kt)("p",null,"The past few weeks have been challenging for many of us. While this pandemic situation affected our lives in different ways, we hope you all stay safe."),(0,n.kt)("p",null,"In Q1, we continued to make good progress in the following areas:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#migration-guide"},"Migration guide")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#migration-tooling-and-examples"},"Migration Tooling and Examples")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#from-model-definitions-to-rest-apis"},"From Model Definitions to REST APIs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#newly-added-examples"},"Newly added examples")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#newly-added-extensions"},"Newly added extensions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#enhancements-in-loopback-core-and-openapi-areas"},"Enhancements in LoopBack core and OpenAPI areas")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#rework-of-shopping-example"},"Rework of shopping example")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#refreshed-look-for-loopback-documentation"},"Refreshed look for LoopBack documentation"))),(0,n.kt)("p",null,"Let's take a closer look."),(0,n.kt)("h2",{id:"migration-guide"},"Migration Guide"),(0,n.kt)("p",null,"Building the migration guide is one of the key focuses for us this year. We made good progress in completing the migration guide. Please check out our ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/migration-overview.html"},"migration guide"),". LoopBack 3 is currently in maintenance LTS. Read ",(0,n.kt)("a",{parentName:"p",href:"https://strongloop.com/strongblog/lb3-entered-maintenance-mode/"},"this blog")," to find out what it means and how it affects you."),(0,n.kt)("p",null,"In LB3, it was possible to use mixins to enhance a model with a new property, a custom method, or a custom remote method. In LB4, this can be accomplished by using a mixin class factory function against model, repository, or controller classes.\nWe added a ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/migration-models-mixins.html"},"Migrating model mixins")," page to demonstrate how to accomplish this."),(0,n.kt)("p",null,"In LB3, Operation hooks are useful tools that are triggered by all methods that execute a particular high-level CRUD operation. However, LB4 hasn't supported this feature yet. To help LB3 users to continue using the feature, we provide a workaround and explain how they can migrate LB3 operation hooks to LB4 repositories in page ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/migration-models-operation-hooks.html"},"Migrating operation hooks"),"."),(0,n.kt)("p",null,"LB3 has the built-in User/AccessToken model based authentication. In LB4, we provide a more flexible authentication system. We explain how LB3 users can migrate it to LB4 with handy LB4 CLI tools. The content can be found in page ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/migration-authentication.html"},"Migrating built-in authentication"),"."),(0,n.kt)("p",null,"In addition, we added the ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/migration-not-planned.html"},"LB3 features not in-plan documentation page")," to clarify which LB3 features are not supported in LB4 or the workarounds for those features if users would like to continue using them in LB4. "),(0,n.kt)("h2",{id:"migration-tooling-and-examples"},"Migration Tooling and Examples"),(0,n.kt)("p",null,"Besides documentation, we migrated the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/examples/access-control-migration"},"LoopBack 3 access control example to LoopBack 4"),". In the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/examples/lb3-application"},"lb3-application example"),", we added instructions on how to move the middleware from the LoopBack 3 application to a common location where both the LB3 and LB4 applications can use it."),(0,n.kt)("p",null,"For tooling that helps your migration process easier, the ",(0,n.kt)("inlineCode",{parentName:"p"},"lb4 import-lb3-models")," command now supports migrating models inheriting from all other models, including LoopBack 3 built-in models."),(0,n.kt)("h2",{id:"from-model-definitions-to-rest-apis"},"From Model Definitions to REST APIs"),(0,n.kt)("p",null,"One of the frequent inputs we got from users is that they would like to see fewer steps from creating the models to having runnable endpoints. We now have the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/packages/rest-crud"},(0,n.kt)("inlineCode",{parentName:"a"},"rest-crud"))," package, the app booter, and the CLI command. You can see how to create a simple LoopBack 4 app with the ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Rest-Crud-generator.html"},(0,n.kt)("inlineCode",{parentName:"a"},"lb4 rest-crud")," CLI command"),"."),(0,n.kt)("p",null,"To glue these pieces together and helper users to understand the feature, we added a page ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Creating-crud-rest-apis.html"},"Creating CRUD REST APIs"),". You can also run this ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/examples/rest-crud"},"CRUD REST example"),"."),(0,n.kt)("h2",{id:"integrate-with-ibm-api-connect"},"Integrate with IBM API Connect"),(0,n.kt)("p",null,"Earlier, we identified the work items required for the integration with ",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/cloud/api-connect"},"IBM API Connect"),". When importing an OpenAPI spec generated by a LoopBack 4 application, there is additional metadata needs to be added. Instead of having our users to modify the OpenAPI spec manually, we introduced an ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/extensions/apiconnect"},"API Connect OpenAPI enhancer")," to inject the ",(0,n.kt)("inlineCode",{parentName:"p"},"x-ibm-configuration")," and other required attributes in the OpenAPI spec. "),(0,n.kt)("p",null,"Additionally, we extracted and translated the messages for our CLI tooling."),(0,n.kt)("h2",{id:"newly-added-examples"},"Newly Added Examples"),(0,n.kt)("p",null,"We continue to add examples which demonstrate commonly used scenarios. With the growing number of examples, we also categorized the ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Examples.html"},"Example list"),". Here are the newly added examples:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/blob/master/examples/access-control-migration"},"access control migration example")," to show how to migrate a LoopBack 3 application with access control to LoopBack 4.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/examples/file-transfer"},"file transfer example")," for exposing APIs to upload and download files using Express Multer.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/examples/validation-app"},"validation example")," for adding different kinds of validations in a LoopBack 4 application.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/examples/rest-crud"},"rest-crud example")," for using ",(0,n.kt)("inlineCode",{parentName:"p"},"CrudRestComponent")," to define repository and controller classes for a model without creating those classes"))),(0,n.kt)("p",null,"If there's any example you'd like to see, feel free to open an issue in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next"},"loopback-next repo"),". Better yet, submit a PR and contribute! "),(0,n.kt)("h2",{id:"newly-added-extensions"},"Newly Added Extensions"),(0,n.kt)("p",null,"LoopBack 4 is designed to be extensible. We added three extensions in this quarter for various usages: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/blob/master/extensions/logging"},"@loopback/extension-logging")," provides logging facilities based on Winston and Fluentd.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/extensions/apiconnect"},"@loopback/apiconnect")," is the IBM API Connect OpenAPI enhancer  extension extends LoopBack with the ability to integrate with ",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/cloud/api-connect"},"IBM API Connect"),". ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/extensions/cron"},"@loopback/cron")," provides integration with ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kelektiv/node-cron"},"Cron")," so that applications can schedule jobs using ",(0,n.kt)("inlineCode",{parentName:"p"},"cron")," based schedule."))),(0,n.kt)("h2",{id:"ibm-db2-for-i-connector"},"IBM Db2 for i Connector"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-connector-ibmi"},"IBM Db2 for i connector")," was added to the connector list. You can now conveniently create a IBM Db2 for i datasource using our CLI. If you are starting a new project that connects to IBM Db2 for i, we recommend you to use this connector instead of ",(0,n.kt)("inlineCode",{parentName:"p"},"loopback-connector-db2iseries")," connector.  You can find more details in the ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/DB2-for-i-connector.html"},"Db2 for i connector page"),"."),(0,n.kt)("h2",{id:"enhancements-in-loopback-core-and-openapi-areas"},"Enhancements in LoopBack core and OpenAPI areas"),(0,n.kt)("p",null,"In this quarter, thanks to our community contributors, we had a number of important enhancements in the OpenAPI area. An ",(0,n.kt)("inlineCode",{parentName:"p"},"OASEnhancerService")," was introduced which allows other enhancers to register and contribute OpenAPI specs into the application. This also provides the base for the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/extensions/apiconnect"},"API Connect OpenAPI enhancer")," mentioned above. On top of that, a few OpenAPI convenience decorators were added, for example, the ",(0,n.kt)("inlineCode",{parentName:"p"},"@deprecated()")," decorator and the ",(0,n.kt)("inlineCode",{parentName:"p"},"@tags(tagNames: string [])")," decorator for a class and method."),(0,n.kt)("p",null,"For the core of the framework, we have added the support hot-loading of controllers during application startup. Besides, the context and binding inspection APIs were improved with more options and information to print out their injections. More details can be found in the ",(0,n.kt)("a",{parentName:"p",href:"https://strongloop.com/strongblog/february-2020-milestone/"},"February milestone blog"),"."),(0,n.kt)("h2",{id:"rework-of-shopping-example"},"Rework of Shopping Example"),(0,n.kt)("p",null,"The most noticeable changes for ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback4-example-shopping"},"our shopping example")," is the newly added frontend. There was some rework on the authentication and authorization side to make the app working from end to end."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/strongloop/loopback4-example-shopping/master/shoppy.png",alt:"Shopping example web site"})),(0,n.kt)("h2",{id:"refreshed-look-for-loopback-web-site"},"Refreshed Look for LoopBack Web Site"),(0,n.kt)("p",null,"Last but not least, if you haven't noticed already, ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/"},"our documentation site")," has a refreshed look. Don't forget to check it out!"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"LoopBack documentation site",src:o(9933).Z,width:"2402",height:"1300"})),(0,n.kt)("p",null,"With increasing number of user testimonials, we created a ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/what-our-users-say.html"},"separate page")," for it. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/3047"},"Let us know")," if you would like to tell us about your LoopBack usage!"),(0,n.kt)("h2",{id:"previous-milestone-blogs"},"Previous Milestone Blogs"),(0,n.kt)("p",null,"There are many more accomplishments that cannot be captured in this blog, make sure you check out our previously published monthly milestone blog posts in Q1 for more details:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://strongloop.com/strongblog/january-2020-milestone/"},"Janurary 2020")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://strongloop.com/strongblog/february-2020-milestone/"},"February 2020")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://strongloop.com/strongblog/march-2020-milestone/"},"March 2020"))),(0,n.kt)("h2",{id:"whats-next"},"What's Next?"),(0,n.kt)("p",null,"We have published a blog ",(0,n.kt)("a",{parentName:"p",href:"https://strongloop.com/strongblog/2020-goals/"},"LoopBack - 2020 Goals and Focus")," about our plans this year. Here is a summary of the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/blob/master/docs/ROADMAP.md#q2-2020-roadmap"},"Q2 2020 roadmap"),": "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"finish migration guide for both general runtime and authentication & authorization"),(0,n.kt)("li",{parentName:"ul"},"continue with API Connect and LoopBack integration"),(0,n.kt)("li",{parentName:"ul"},"look into feature parity gaps that are highly requested by users")),(0,n.kt)("h2",{id:"call-to-action"},"Call to Action"),(0,n.kt)("p",null,"In 2020, we look forward to helping you and seeing you around! LoopBack's success depends on you. We appreciate your continuous support and engagement to make LoopBack even better and meaningful for your API creation experience. Here's how you can join us and help the project:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues"},"Report issues"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/blob/master/docs/CONTRIBUTING.md"},"Contribute")," code and documentation."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/labels/good%20first%20issue"},'Open a pull request on one of our "good first issues"'),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues/110"},"Join")," our user group.")))}d.isMDXComponent=!0},9933:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/new-docs-site-d900be09d06e488451fdf4935fffcd2c.png"}}]);