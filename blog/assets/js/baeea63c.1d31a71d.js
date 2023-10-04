"use strict";(self.webpackChunkloopback_blog=self.webpackChunkloopback_blog||[]).push([[9135],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(o),h=n,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||i;return o?a.createElement(m,r(r({ref:t},c),{},{components:o})):a.createElement(m,r({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:n,r[1]=s;for(var l=2;l<i;l++)r[l]=o[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}h.displayName="MDXCreateElement"},2403:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=o(7462),n=(o(7294),o(3905));const i={title:"LoopBack 4 April 2020 Milestone Update",date:new Date("2020-05-06T00:00:00.000Z"),authors:"deepakrkris",slug:"april-2020-milestone",tags:["Milestone update"]},r=void 0,s={permalink:"/blog/april-2020-milestone",editUrl:"https://github.com/loopbackio/loopback-blog/blog/2020/2020-05-06-april-milestone.md",source:"@site/blog/2020/2020-05-06-april-milestone.md",title:"LoopBack 4 April 2020 Milestone Update",description:"Originally published on strongloop.com",date:"2020-05-06T00:00:00.000Z",formattedDate:"May 6, 2020",tags:[{label:"Milestone update",permalink:"/blog/tags/milestone-update"}],readingTime:7.915,hasTruncateMarker:!0,authors:[{name:"Deepak Rajamohan",title:"LoopBack Maintainer",url:"https://github.com/deepakrkris",imageURL:"https://avatars0.githubusercontent.com/u/7688315",key:"deepakrkris"}],frontMatter:{title:"LoopBack 4 April 2020 Milestone Update",date:"2020-05-06T00:00:00.000Z",authors:"deepakrkris",slug:"april-2020-milestone",tags:["Milestone update"]},prevItem:{title:"LoopBack - Taking Express to the Next Level",permalink:"/blog/express-to-loopback"},nextItem:{title:"Community Q&A Monthly Digest - April 2020",permalink:"/blog/2020-april-slack-qa"}},p={authorsImageUrls:[void 0]},l=[{value:"Migration Guide",id:"migration-guide",level:2},{value:"Differences in Request-Response Cycle",id:"differences-in-request-response-cycle",level:3},{value:"Example to use Passport Strategies for Authentication in LoopBack 4",id:"example-to-use-passport-strategies-for-authentication-in-loopback-4",level:3},{value:"Booting Migration Guide",id:"booting-migration-guide",level:3},{value:"Custom Validation",id:"custom-validation",level:3},{value:"Differences between LB3 and LB 4 CLI Commands",id:"differences-between-lb3-and-lb-4-cli-commands",level:3},{value:"Exploring New Territories",id:"exploring-new-territories",level:2},{value:"The NEW Express Package and Enabling Express Middleware as Interceptors",id:"the-new-express-package-and-enabling-express-middleware-as-interceptors",level:3},{value:"Spike - Migrating OAuth2 Component",id:"spike---migrating-oauth2-component",level:3},{value:"Running LoopBack 3 Tests when Mounted on a LoopBack 4 project",id:"running-loopback-3-tests-when-mounted-on-a-loopback-4-project",level:3},{value:"Simplify your Complex Applications - Booting Component Applications",id:"simplify-your-complex-applications---booting-component-applications",level:3},{value:"APIConnect Extension",id:"apiconnect-extension",level:2},{value:"Miscellaneous",id:"miscellaneous",level:2},{value:"Extracting JWT Authentication to an Extension Module",id:"extracting-jwt-authentication-to-an-extension-module",level:3},{value:"Strong-Soap Features and Support",id:"strong-soap-features-and-support",level:3},{value:"Customizing Explorer Theme",id:"customizing-explorer-theme",level:3},{value:"Move Datasource Configurations from .json to .ts File",id:"move-datasource-configurations-from-json-to-ts-file",level:3},{value:"Build with TS Project-References",id:"build-with-ts-project-references",level:3},{value:"Other Build Features",id:"other-build-features",level:3},{value:"Complex OpenAPI Validations",id:"complex-openapi-validations",level:3},{value:"Documentation",id:"documentation",level:2},{value:"Working with Data",id:"working-with-data",level:3},{value:"Calling APIs with OpenAPI Specification",id:"calling-apis-with-openapi-specification",level:3},{value:"Community Contributions",id:"community-contributions",level:2},{value:"Added tsdocs for LoopBack Packages",id:"added-tsdocs-for-loopback-packages",level:3},{value:"Consolidate Openapi Schema using a New Spec Enhancer",id:"consolidate-openapi-schema-using-a-new-spec-enhancer",level:3},{value:"May Milestones",id:"may-milestones",level:2},{value:"Call to Action",id:"call-to-action",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Originally published on ",(0,n.kt)("a",{parentName:"em",href:"https://strongloop.com"},"strongloop.com"))),(0,n.kt)("p",null,"In April, we focused mostly on completing migration activities, like the migration guide and other related\ntasks like running existing tests in a LoopBack 3 application after composing it within a LoopBack 4 application. But, that didn't stop us from exploring and adding some cool features."),(0,n.kt)("p",null,"We now have a new ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/packages/express"},"Express")," package, which enables modeling Express middleware functions as an interceptor chain. Also it is possible now to break a complex application into much smaller components and wire them in a main application. You can find more details on thsese below in ",(0,n.kt)("a",{parentName:"p",href:"#exploring-new-territories"},(0,n.kt)("inlineCode",{parentName:"a"},"Exploring new territories")),"."),(0,n.kt)("p",null,"Also our community has published many ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/search?q=keywords:loopback-extension"},"LoopBack 4 extensions in NPM"),". Many of these extensions are addressing a variety of usecases like pub-sub messaging, mqtt, graphql, rate-limiting, authentication, logging, AWS cloud integration, etc. The extensibility of LoopBack in real time use cases are even surprising us and the possibilities seems to be endless."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#migration-guide"},"Migration Guide")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#exploring-new-territories"},"Exploring new territories")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#apiconnect-extension"},"APIConnect Extension")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#miscellaneous"},"Miscellaneous")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#documentation"},"Documentation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#community-contributions"},"Community Contributions"))),(0,n.kt)("h2",{id:"migration-guide"},"Migration Guide"),(0,n.kt)("p",null,"We have made very good progress with migration guides and LoopBack 3 users should have a solid ground now to explore and migrate to LoopBack 4. The well used LoopBack 3 components are all covered with migrations examples and tutorials. There are certain components which are having fewer downloads per day, that are not covered yet. But we are pursuing steadily to address all migration questions."),(0,n.kt)("h3",{id:"differences-in-request-response-cycle"},"Differences in Request-Response Cycle"),(0,n.kt)("p",null,"We have created a document describing the differences between the ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/LB3-vs-LB4-request-response-cycle.html"},"request-response cycle")," in LoopBack 3 and LoopBack 4. Those of you coming from LoopBack 3 will have a better understanding about how the request-response cycle works in LoopBack 4 compared to LoopBack 3."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/doc/en/lb4/Request-response-cycle.html"},"LoopBack 4 request-response cycle documentation")," contains the details in more depth for LoopBack 4."),(0,n.kt)("h3",{id:"example-to-use-passport-strategies-for-authentication-in-loopback-4"},"Example to use Passport Strategies for Authentication in LoopBack 4"),(0,n.kt)("p",null,"A new ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/examples/passport-login"},"Passport Login example")," is now available. It shows how to use ",(0,n.kt)("a",{parentName:"p",href:"http://www.passportjs.org/docs/"},"Passport Strategies")," in LoopBack 4 as an independent authentication step in the application ",(0,n.kt)("inlineCode",{parentName:"p"},"Sequence")," as well as standard express middleware. If you are using the loopback-component-passport in LoopBack 3, this example can help you migrate your application to LoopBack 4."),(0,n.kt)("h3",{id:"booting-migration-guide"},"Booting Migration Guide"),(0,n.kt)("p",null,"Because of the architectural differences, the booting process is very different in LoopBack 3 and LoopBack 4. ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/LB3-vs-LB4-booting.html"},"This document")," describes the differences and lists the various artifacts that take part in the booting process in LoopBack 4."),(0,n.kt)("h3",{id:"custom-validation"},"Custom Validation"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/LB3-vs-LB4-request-response-cycle.html#data-coercion-and-validation"},"data coercion and validation")," and ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/LB3-vs-LB4-request-response-cycle.html#access-to-data-before-writing-to-the-databases"},"access to data before writing to the databases")," sections of the ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/LB3-vs-LB4-request-response-cycle.html"},"LB3 to LB4 request-response migration guide")," deals with the topic of access and application of custom validation to data in Loopback 4."),(0,n.kt)("h3",{id:"differences-between-lb3-and-lb-4-cli-commands"},"Differences between LB3 and LB 4 CLI Commands"),(0,n.kt)("p",null,"The command line interfaces of LoopBack 3 and LoopBack 4 have some similarities, but also some differences. We have outlined these similarities and differences in ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/migration-cli.html"},"Migrating CLI usage patterns"),"."),(0,n.kt)("h2",{id:"exploring-new-territories"},"Exploring New Territories"),(0,n.kt)("h3",{id:"the-new-express-package-and-enabling-express-middleware-as-interceptors"},"The NEW Express Package and Enabling Express Middleware as Interceptors"),(0,n.kt)("p",null,"The new ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/packages/express"},"Express Package"),", has enabled injecting single and multiple express middleware functions as ",(0,n.kt)("inlineCode",{parentName:"p"},"interceptors")," into ",(0,n.kt)("inlineCode",{parentName:"p"},"Controller")," invocations and also as a middleware step in the application ",(0,n.kt)("inlineCode",{parentName:"p"},"Sequence")," as follows:"),(0,n.kt)("p",null,"The default sequence now has a Middleware step. It creates an invocation chain to call registered middleware handlers with the extension pattern. The sequence can be customized to have more than one Middleware step. Express middleware can also be wrapped as LB4 interceptors, which can in turn be added to global/class/method level. Move built-in cors and openapi endpoints as express middleware functions."),(0,n.kt)("p",null,"You can check the ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Express-middleware.html"},"express middleware page in loopback docs"),"."),(0,n.kt)("h3",{id:"spike---migrating-oauth2-component"},"Spike - Migrating OAuth2 Component"),(0,n.kt)("p",null,"In story ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/3959"},"#3959")," we explored the possibility and evaluated the required effort to migrate module ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-component-oauth2"},(0,n.kt)("inlineCode",{parentName:"a"},"loopback-component-oauth2")),". Considering that LoopBack 4 currently focuses on the integration with third party OAuth 2.0 providers, and the module is complicated, we decide to defer the migration guide and demo a simplified server with OAuth 2.0 enabled on it."),(0,n.kt)("p",null,"You can find details about the mock server on page ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/migration-auth-oauth2.html"},"migration-auth-oauth2"),"."),(0,n.kt)("h3",{id:"running-loopback-3-tests-when-mounted-on-a-loopback-4-project"},"Running LoopBack 3 Tests when Mounted on a LoopBack 4 project"),(0,n.kt)("p",null,"With users being able to ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/migration-mounting-lb3app.html"},"mount their LoopBack 3 tests on a LoopBack 4 project"),", we explored how they can also migrate their LB3 tests onto the LB4 project. Documentation is ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/5298"},"coming"),", but if you want to see how an example of how to do it now, see the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/5251"},"spike"),". The spike demonstrates running LB3 tests in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/examples/lb3-application"},(0,n.kt)("inlineCode",{parentName:"a"},"lb3-application")," example"),"."),(0,n.kt)("h3",{id:"simplify-your-complex-applications---booting-component-applications"},"Simplify your Complex Applications - Booting Component Applications"),(0,n.kt)("p",null,"Users can now break down a complex application into much smaller components and wire them all together in a main application, with a new feature to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/5304"},"Boot up Component Applications"),"."),(0,n.kt)("h2",{id:"apiconnect-extension"},"APIConnect Extension"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/extensions/apiconnect"},"LoopBack APIConnect extension")," is now tested by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/4498"},"publishing shopping app APIs, enhanced with the extension, on a IBM DataPower Gateway"),"."),(0,n.kt)("p",null,"We took the shopping example for a close-to-real-life scenario. This would help IBM APIConnect customers to develop their applications with LoopBack and manage them with IBM APIConnect."),(0,n.kt)("p",null,"Once LoopBack developers have their REST APIs created they could use the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/extensions/apiconnect"},"LoopBack APIConnect extension")," to enhance their OpenAPI spec with ",(0,n.kt)("inlineCode",{parentName:"p"},"x-ibm-")," OpenAPI metadata. For the shopping example, we followed the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback4-example-shopping/blob/master/kubernetes/docs/deploy-to-ibmcloud.md"},"steps in the example repository")," to deploy to IBM Cloud and then imported the OpenAPI specification to APIConnect with ",(0,n.kt)("a",{parentName:"p",href:"https://developer.ibm.com/apiconnect/2019/10/30/manage-and-enforce-openapi-v3-oai-v3/"},"steps explained in the IBM developer portal"),"."),(0,n.kt)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,n.kt)("h3",{id:"extracting-jwt-authentication-to-an-extension-module"},"Extracting JWT Authentication to an Extension Module"),(0,n.kt)("p",null,"After creating the demo for JWT authentication in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback4-example-shopping"},(0,n.kt)("inlineCode",{parentName:"a"},"loopback4-shopping-example")),", and applied a similar auth system in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/examples/access-control-migration"},(0,n.kt)("inlineCode",{parentName:"a"},"access-control-migration")),", we think it's time to extract the JWT authentication system into a separate extension package, so that people can quickly mount a component to try out the feature. "),(0,n.kt)("p",null,"Last month, we created the extension as ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/extensions/authentication-jwt"},"authentication-jwt"),", and its usage is well documented in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/extensions/authentication-jwt"},"README.md file"),"."),(0,n.kt)("h3",{id:"strong-soap-features-and-support"},"Strong-Soap Features and Support"),(0,n.kt)("p",null,"Strong-Soap now supports validation of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/strong-soap/pull/275"},"anonymous simple types")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/strong-soap/pull/271"},"RPC suffixes"),"."),(0,n.kt)("h3",{id:"customizing-explorer-theme"},"Customizing Explorer Theme"),(0,n.kt)("p",null,"As many community users show the interests in changing the look of explorer, we introduced a configuration property called ",(0,n.kt)("inlineCode",{parentName:"p"},"swaggerThemeFile")," to specify user provided .css themes. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"// Inside application constructor\n// customize the swagger-ui\nthis.configure(RestExplorerBindings.COMPONENT).to({\n  swaggerThemeFile: '/theme-newspaper.css',\n});\n")),(0,n.kt)("p",null,"You can check the complete guide in section ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/blob/956a6aa574995c6cdd5066f6af7b92a93382eefc/packages/rest-explorer/README.md#customizing-swagger-ui-theme"},"customizing Swagger UI theme"),"."),(0,n.kt)("h3",{id:"move-datasource-configurations-from-json-to-ts-file"},"Move Datasource Configurations from .json to .ts File"),(0,n.kt)("p",null,"To align with existing typescript files and dynamic configuration of datasources, we have ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/5000"},"switched datasource configurations to .ts files")," from LoopBack 3 style json files. Please watch the ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=S3BKXh7wDYE&feature=youtu.be"},"video tutorial")," from Miroslav on migrating ",(0,n.kt)("inlineCode",{parentName:"p"},"Migrate LoopBack 4 datasource config to TypeScript"),"."),(0,n.kt)("h3",{id:"build-with-ts-project-references"},"Build with TS Project-References"),(0,n.kt)("p",null,"LoopBack monorepo was configured in a hacky way to allow TypeScript to build individual packages. We have made ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/5155"},"changes to leverage TypeScript's Project-References"),". Project references are a new feature in TypeScript 3.0 that allow to structure TypeScript projects into smaller pieces."),(0,n.kt)("h3",{id:"other-build-features"},"Other Build Features"),(0,n.kt)("p",null,"Changes done to make ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/5205"},"default compilation target as ES2018")," and enable all ES2020 features for ",(0,n.kt)("inlineCode",{parentName:"p"},"lib")," configuration."),(0,n.kt)("h3",{id:"complex-openapi-validations"},"Complex OpenAPI Validations"),(0,n.kt)("p",null,"A list of AJV features have been added in the past few months including ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/3539"},"AJV keywords"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/4979"},"AJV extensibility"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/4808"},"AJV service provider")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/4762"},"asynchronous validations"),"."),(0,n.kt)("h2",{id:"documentation"},"Documentation"),(0,n.kt)("h3",{id:"working-with-data"},"Working with Data"),(0,n.kt)("p",null,"In LoopBack 4, models describe the shape of data, repositories provide behavior like CRUD operations, and controllers define routes. It's easy to manipulate and query data with LB4. However, for a long time LoopBack 4 documentation was missing the ",(0,n.kt)("em",{parentName:"p"},"Woring with Data")," section and users were referencing the old docs in LoopBack 3. Even though LB3 has almost the same querying rules as LB4, the different styles between LB4 and LB3 sometimes are still causing confusion."),(0,n.kt)("p",null,"Gladly, we added that section with different filters under the page ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Working-with-data.html"},"Usage Scenarios - Working with Data"),". For each filter, we introduced the basic usage with Node.js and REST APIs and also show examples of using both APIs. For instance, we have an example of showing how the ",(0,n.kt)("inlineCode",{parentName:"p"},"limit")," filter works with Node.js API and also the corresponding example of using REST. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Node.js API:\n\nawait orderRepository.find({limit: 5});\n\nREST:\n\n/orders?filter[limit]=5\n")),(0,n.kt)("h3",{id:"calling-apis-with-openapi-specification"},"Calling APIs with OpenAPI Specification"),(0,n.kt)("p",null,"If you want to connect to a REST service with an OpenAPI description, the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-connector-openapi"},"OpenAPI connector")," would be what you need. We updated the documentation in the ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Calling-other-APIs-and-web-services.html"},"Calling other APIs and web services\n")," to include this usage. Besides, we added more configuration details in the ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/OpenAPI-connector.html"},"OpenAPI connector docs page"),"."),(0,n.kt)("h2",{id:"community-contributions"},"Community Contributions"),(0,n.kt)("h3",{id:"added-tsdocs-for-loopback-packages"},"Added tsdocs for LoopBack Packages"),(0,n.kt)("p",null,"Autogenerated API docs had descriptions empty for all packages which now fixed by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/4711"},"adding ts docs to all packages"),". Please take a look at the ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/apidocs.index.html"},"API docs")," to see the difference."),(0,n.kt)("h3",{id:"consolidate-openapi-schema-using-a-new-spec-enhancer"},"Consolidate Openapi Schema using a New Spec Enhancer"),(0,n.kt)("p",null,"LoopBack users will be able to automatically extract schemas used in multiple places into ",(0,n.kt)("inlineCode",{parentName:"p"},"#/components/schemas")," and replace the references with a ",(0,n.kt)("inlineCode",{parentName:"p"},"$ref"),", with a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/4365"},"new OAS enhancer"),"."),(0,n.kt)("h2",{id:"may-milestones"},"May Milestones"),(0,n.kt)("p",null,"This month, we would like to work on the remaining items for the migration guide epic, documentation improvement and more. For more detials, take a look at our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/5301"},"May milestone list on GitHub"),"."),(0,n.kt)("h2",{id:"call-to-action"},"Call to Action"),(0,n.kt)("p",null,"In 2020, we look forward to helping you and seeing you around! LoopBack's success depends on you. We appreciate your continuous support and engagement to make LoopBack even better and meaningful for your API creation experience. Here's how you can join us and help the project:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues"},"Report issues"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/blob/master/docs/CONTRIBUTING.md"},"Contribute")," code and documentation."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/labels/good%20first%20issue"},'Open a pull request on one of our "good first issues"'),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues/110"},"Join")," our user group.")))}d.isMDXComponent=!0}}]);