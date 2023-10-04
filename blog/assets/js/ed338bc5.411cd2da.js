"use strict";(self.webpackChunkloopback_blog=self.webpackChunkloopback_blog||[]).push([[2281],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(o),m=n,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return o?a.createElement(h,r(r({ref:t},c),{},{components:o})):a.createElement(h,r({ref:t},c))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,r[1]=l;for(var p=2;p<i;p++)r[p]=o[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},5538:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=o(7462),n=(o(7294),o(3905));const i={title:"LoopBack 4 March 2020 Milestone Update",date:new Date("2020-04-08T00:00:00.000Z"),authors:"agnes512",slug:"march-2020-milestone",tags:["Milestone update"]},r=void 0,l={permalink:"/blog/march-2020-milestone",editUrl:"https://github.com/loopbackio/loopback-blog/blog/2020/2020-04-08-march-milestone.md",source:"@site/blog/2020/2020-04-08-march-milestone.md",title:"LoopBack 4 March 2020 Milestone Update",description:"Originally published on strongloop.com",date:"2020-04-08T00:00:00.000Z",formattedDate:"April 8, 2020",tags:[{label:"Milestone update",permalink:"/blog/tags/milestone-update"}],readingTime:7.32,hasTruncateMarker:!0,authors:[{name:"Agnes Lin",title:"LoopBack Maintainer",url:"https://github.com/agnes512",imageURL:"https://avatars3.githubusercontent.com/u/50331796",key:"agnes512"}],frontMatter:{title:"LoopBack 4 March 2020 Milestone Update",date:"2020-04-08T00:00:00.000Z",authors:"agnes512",slug:"march-2020-milestone",tags:["Milestone update"]},prevItem:{title:"LoopBack 4 2020 Q1 Overview",permalink:"/blog/loopback-4-2020-q1-overview"},nextItem:{title:"LoopBack 4 February 2020 Milestone Update",permalink:"/blog/february-2020-milestone"}},s={authorsImageUrls:[void 0]},p=[{value:"Migration Guide",id:"migration-guide",level:2},{value:"Migrating Built-in Authentication",id:"migrating-built-in-authentication",level:3},{value:"Features Not Planned for LoopBack 4",id:"features-not-planned-for-loopback-4",level:3},{value:"From Model to REST API",id:"from-model-to-rest-api",level:2},{value:"CLI Command",id:"cli-command",level:3},{value:"Example Application",id:"example-application",level:3},{value:"Documentation",id:"documentation",level:3},{value:"More Usage Scenarios",id:"more-usage-scenarios",level:2},{value:"Validation Example",id:"validation-example",level:3},{value:"File Upload and Download Example",id:"file-upload-and-download-example",level:3},{value:"Documentation Enhancement",id:"documentation-enhancement",level:2},{value:"Request Response Cycle",id:"request-response-cycle",level:3},{value:"CHANGELOG Docs",id:"changelog-docs",level:3},{value:"Miscellaneous",id:"miscellaneous",level:2},{value:"User Testimonials",id:"user-testimonials",level:3},{value:"IBM i Connector",id:"ibm-i-connector",level:3},{value:"Newly Added Extensions",id:"newly-added-extensions",level:3},{value:"Extracting JWT Component",id:"extracting-jwt-component",level:3},{value:"Supporting Type Any",id:"supporting-type-any",level:3},{value:"Bug fixes",id:"bug-fixes",level:3},{value:"Community Contribution",id:"community-contribution",level:2},{value:"Enable Authentication Strategies to Contribute OASEnhancer",id:"enable-authentication-strategies-to-contribute-oasenhancer",level:3},{value:"Japanese Translation for LB4",id:"japanese-translation-for-lb4",level:3},{value:"Call to Action",id:"call-to-action",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Originally published on ",(0,n.kt)("a",{parentName:"em",href:"https://strongloop.com"},"strongloop.com"))),(0,n.kt)("p",null,"The whole world has been through a lot in the past month. The LoopBack team hopes that everyone stays safe and gets through this together."),(0,n.kt)("p",null,"Let's check out the work we did in March:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#migration-guide"},"Migration Guide")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#from-model-to-rest-api"},"From Model to REST API")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#more-usage-scenarios"},"More Usage Scenarios")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#miscellaneous"},"Miscellaneous")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#documentation-enhancement"},"Documentation Enhancement")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#community-contribution"},"Community Contribution"))),(0,n.kt)("h2",{id:"migration-guide"},"Migration Guide"),(0,n.kt)("p",null,"As LoopBack 3 will go end of life at the end of 2020, we've been focusing on the migration guide for the past months. Here is the content we added in March to help LB3 users adopt LoopBack 4:"),(0,n.kt)("h3",{id:"migrating-built-in-authentication"},"Migrating Built-in Authentication"),(0,n.kt)("p",null,"In LoopBack 3, the authentication system is a token-based one and has built-in models involved in the mechanism. In LB4, we built a more flexible authentication system that is compatible with different authentication strategies. Even though there are lots of differences, the newly created ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/examples/access-control-migration"},"access control migration example")," explores how to migrate and build an equivalent LoopBack 3 authentication system in LoopBack 4 with detailed steps. The tutorial includes two main parts: "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"How to migrate the LoopBack 3 User model's definition and its persistence and login endpoint."),(0,n.kt)("li",{parentName:"ol"},"How to secure endpoints using a token based authentication system and enable the authorize dialog in the API explorer like what we have in LoopBack 3.")),(0,n.kt)("p",null,"The tutorial also uses the handy LB4 CLI to help LB3 users to get familiar with LB4 terms. Read the ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/migration-authentication.html"},"migration-authentication")," tutorial to learn about the details."),(0,n.kt)("h3",{id:"features-not-planned-for-loopback-4"},"Features Not Planned for LoopBack 4"),(0,n.kt)("p",null,"Besides migrating artifacts from LB3, there are several features/components we no longer support anymore in LB4. They are listed in the page ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/migration-not-planned.html"},"LoopBack 3 features not planned in LoopBack 4"),". We also provide workarounds for these features if users would like to continue using them in LB4. "),(0,n.kt)("h2",{id:"from-model-to-rest-api"},"From Model to REST API"),(0,n.kt)("p",null,"The story ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/2036"},"From Model to REST API with no custom repository/controller epic")," is almost done! In the past few months, we created the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/packages/rest-crud"},(0,n.kt)("inlineCode",{parentName:"a"},"@loopback/rest-crud"))," package, as well as the the ",(0,n.kt)("inlineCode",{parentName:"p"},"ModelApiBooter")," booter. And this month, we built the CLI command ",(0,n.kt)("inlineCode",{parentName:"p"},"lb4 rest-crud"),". To glue these pieces together, we added an example and documentation to help you pick up this convenience tool. Details are listed below. We will have a blog post in the near future."),(0,n.kt)("h3",{id:"cli-command"},"CLI Command"),(0,n.kt)("p",null,"In order to make it easier for users to use this feature, we've added a CLI command to simplify the process. If you have model classes and a valid(",(0,n.kt)("em",{parentName:"p"},"persisted"),") datasource, the following command will generate model endpoints for you:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"lb4 rest-crud\n")),(0,n.kt)("h3",{id:"example-application"},"Example Application"),(0,n.kt)("p",null,"We've added a new ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/examples/rest-crud"},(0,n.kt)("inlineCode",{parentName:"a"},"rest-crud")," example")," which creates the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/examples/todo"},(0,n.kt)("inlineCode",{parentName:"a"},"Todo")," example")," without the need to define a repository or controller for the Todo model. By loading the ",(0,n.kt)("inlineCode",{parentName:"p"},"CrudRestComponent"),", it demonstrates how to use the default CRUD REST repository and controller with a single model class , datasource, and configuration. The example can be downloaded by running:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"lb4 example rest-crud\n")),(0,n.kt)("p",null,"You can find more information on how to use the command in the ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Rest-Crud-generator.html"},"REST CRUD generator documentation"),"."),(0,n.kt)("h3",{id:"documentation"},"Documentation"),(0,n.kt)("p",null,"Now that most of the epic is completed, we've added ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Creating-crud-rest-apis.html"},"documentation")," explaining how to use the feature and the configuration options that come with it. Additionally, we also added ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Extending-Model-API-builder.html"},"documentation")," on extending the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/packages/model-api-builder"},(0,n.kt)("inlineCode",{parentName:"a"},"@loopback/model-api-builder"))," package to create your own custom model API builders; similar to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/packages/rest-crud"},(0,n.kt)("inlineCode",{parentName:"a"},"@loopback/rest-crud")),"'s ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/apidocs.rest-crud.crudrestapibuilder.html"},(0,n.kt)("inlineCode",{parentName:"a"},"CrudRestApiBuilder")),"."),(0,n.kt)("h2",{id:"more-usage-scenarios"},"More Usage Scenarios"),(0,n.kt)("p",null,"We've been adding more examples to show what you can build with, and how you can configure a LoopBack 4 app. One of our favorite examples is the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback4-example-shopping/"},"Shopping App"),". It shows how you can integrate LB4 APIs with a simple front-end design to build a site. Besides the ",(0,n.kt)("a",{parentName:"p",href:"#example-application"},(0,n.kt)("inlineCode",{parentName:"a"},"rest-crud"))," example mentioned above, we added more examples to show various LoopBack 4 features."),(0,n.kt)("h3",{id:"validation-example"},"Validation Example"),(0,n.kt)("p",null,"LB4 allows you to add validations at three different layers: REST, controller, and ORM. The newly added documentation ",(0,n.kt)("a",{parentName:"p",href:"#Validation.md"},"Validation")," explains these three different types of validations. We added a corresponding example ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/examples/validation-app"},"Validation Example")," to our ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Examples.html"},"Examples list")," demonstrating how to add and make use of different kinds of validations in a LoopBack 4 application."),(0,n.kt)("h3",{id:"file-upload-and-download-example"},"File Upload and Download Example"),(0,n.kt)("p",null,"Uploading/downloading files is a common requirement for API applications. The documentation for ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/File-upload-download.html"},"Upload and download files")," shows the code snippets to create artifacts such as controllers and UI to achieve such a requirement. A fully-functional example is available at ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/examples/file-transfer"},"File Transfer Example"),"."),(0,n.kt)("h2",{id:"documentation-enhancement"},"Documentation Enhancement"),(0,n.kt)("p",null,"We made some changes in the layout design of the website. Hope you like the new look!"),(0,n.kt)("h3",{id:"request-response-cycle"},"Request Response Cycle"),(0,n.kt)("p",null,"To help users have a better understanding of all the components involved in the request-response handling process, in the  ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Request-response-cycle.html"},"Request-Response cycle")," document, we walk through the path taken by a request to see how it makes its way through the various parts of the framework to return a result. In the near future, we will also add documentation in the migration guide to explain the differences of the request-response cycle between LB3 and LB4. See the GH story ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/4836"},"Migration Guide: Request-response cycle")," for more details."),(0,n.kt)("h3",{id:"changelog-docs"},"CHANGELOG Docs"),(0,n.kt)("p",null,"We made the CHANGELOG easier to find on our site. It is available in the section ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/changelog.index.html"},"CHANGELOG"),". We hope it helps developers to check out the changes of different packages for each release."),(0,n.kt)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,n.kt)("h3",{id:"user-testimonials"},"User Testimonials"),(0,n.kt)("p",null,"We're glad to see a growing number of user testimonials. We refactored it in a new page. Check out the ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/what-our-users-say.html"},"what our users say")," section. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/3047"},"Let us know")," if you would like to tell us about your LoopBack usage!"),(0,n.kt)("h3",{id:"ibm-i-connector"},"IBM i Connector"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-connector-ibmi"},"IBM Db2 for i connector")," was added to the connector list. You can now conveniently create an IBM Db2 for i datasource using our CLI. See the ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/DB2-for-i-connector.html"},"Db2 for i connector page")," for more details."),(0,n.kt)("h3",{id:"newly-added-extensions"},"Newly Added Extensions"),(0,n.kt)("p",null,"Here are the extensions we added to the framework:"),(0,n.kt)("p",null,"The IBM API Connect OpenAPI enhancer ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/extensions/apiconnect"},"@loopback/apiconnect")," extension was added to extend LoopBack with the ability to integrate with ",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/cloud/api-connect"},"IBM API Connect"),"."),(0,n.kt)("p",null,"An experimental extension ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/extensions/cron"},(0,n.kt)("inlineCode",{parentName:"a"},"@loopback/cron"))," was added. With it, LB4 apps can be integrated with ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kelektiv/node-cron"},"Cron")," to schedule jobs using ",(0,n.kt)("inlineCode",{parentName:"p"},"cron")," based schedules."),(0,n.kt)("h3",{id:"extracting-jwt-component"},"Extracting JWT Component"),(0,n.kt)("p",null,"After creating the demo for JWT authentication in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback4-example-shopping"},"loopback4-example-shopping")," and applying a similar system in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/examples/access-control-migration"},"loopback-example-access-control"),", we think it's time to extract the JWT authentication system into a separate component. This will benefit users who want to quickly mount a prototype token based authentication module to their application. As the first step, we extracted the JWT strategies, the token, and user services into a local module under ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/examples/access-control-migration/src/components/jwt-authentication"},"components/jwt-authentication"),". Next we will move it to a standalone extension package. Feel free to join the discussion in GH story ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/4903"},"Extract the jwt authentication to an extension module"),"."),(0,n.kt)("h3",{id:"supporting-type-any"},"Supporting Type Any"),(0,n.kt)("p",null,"Model property of type ",(0,n.kt)("inlineCode",{parentName:"p"},"any")," is now supported. The corresponding OpenAPI and JSON schema is ",(0,n.kt)("inlineCode",{parentName:"p"},"{}")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," (according to ",(0,n.kt)("a",{parentName:"p",href:"https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.3.2"},"the draft JSON schema standard"),"). If your model property allows arbitrary values, now you can define it as:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"class MyModel extends Entity {\n  // ...other code\n  @property({\n    // specify the type name here as 'any'\n    type: 'any'\n  })\n  // use `any` as its TypeScript type\n  // eslint-disable-next-line @typescript-eslint/no-explicit-any\n  anyProperty: any\n}\n")),(0,n.kt)("h3",{id:"bug-fixes"},"Bug fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"We fixed a bug in module ",(0,n.kt)("inlineCode",{parentName:"p"},"@loopback-ibmdb")," where a put request ",(0,n.kt)("inlineCode",{parentName:"p"},"PUT /Model/{instanceId}")," now operates correctly. The fix trickles down into any LoopBack connector with a dependency on ",(0,n.kt)("inlineCode",{parentName:"p"},"@loopback-ibmdb")," like ",(0,n.kt)("inlineCode",{parentName:"p"},"@loopback-connector-db2")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"@loopback-connector-dashdb"),", for example.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"We fixed a bug in connector ",(0,n.kt)("inlineCode",{parentName:"p"},"@loopback-connector-mssql")," which was causing permission problems during installation on Windows. Some extra folders ended up in the package tgz file, and this was causing the problem. The fix went out for several LoopBack connectors: MSSQL, DB2, dashDB, Cloudant, MongoDb, MySQL, Oracle, PostgreSQL, and Redis KeyValue. "))),(0,n.kt)("h2",{id:"community-contribution"},"Community Contribution"),(0,n.kt)("p",null,"Our community maintainers and users have been very helpful with building a better LoopBack 4, we really appreciate all the help! Here are the highlights this month:"),(0,n.kt)("h3",{id:"enable-authentication-strategies-to-contribute-oasenhancer"},"Enable Authentication Strategies to Contribute OASEnhancer"),(0,n.kt)("p",null,"The community maintainer ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/dougal83"},(0,n.kt)("inlineCode",{parentName:"a"},"dougal83"))," improved the authentication strategies ",(0,n.kt)("inlineCode",{parentName:"p"},"AuthenticationStrategy")," so that it can be bound with the OAS enhancer extension point via a binding key instead of a constant."),(0,n.kt)("h3",{id:"japanese-translation-for-lb4"},"Japanese Translation for LB4"),(0,n.kt)("p",null,"The community user ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/saotak"},(0,n.kt)("inlineCode",{parentName:"a"},"saotak"))," added several LB4 pages in Japanese. See ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/ja/lb4/index.html"},"the site"),". We need your help to have more translations for the LB4 documentations! The instructions can be found in the page ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/contrib/translation.html"},"Translation"),"."),(0,n.kt)("h2",{id:"call-to-action"},"Call to Action"),(0,n.kt)("p",null,"In 2020, we look forward to helping you and seeing you around! LoopBack's success depends on you. We appreciate your continuous support and engagement to make LoopBack even better and meaningful for your API creation experience. Here's how you can join us and help the project:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues"},"Report issues"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/blob/master/docs/CONTRIBUTING.md"},"Contribute")," code and documentation."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/labels/good%20first%20issue"},'Open a pull request on one of our "good first issues"'),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues/110"},"Join")," our user group.")))}u.isMDXComponent=!0}}]);