"use strict";(self.webpackChunkloopback_blog=self.webpackChunkloopback_blog||[]).push([[3729],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(o),u=a,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||r;return o?n.createElement(h,i(i({ref:t},c),{},{components:o})):n.createElement(h,i({ref:t},c))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},8906:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=o(7462),a=(o(7294),o(3905));const r={title:"LoopBack 4 July 2019 Milestone Update",date:new Date("2019-08-07T00:00:00.000Z"),authors:"agnes512",slug:"july-2019-milestone",tags:["Milestone update"]},i=void 0,l={permalink:"/blog/july-2019-milestone",editUrl:"https://github.com/loopbackio/loopback-blog/blog/2019/2019-08-07-july-milestone.md",source:"@site/blog/2019/2019-08-07-july-milestone.md",title:"LoopBack 4 July 2019 Milestone Update",description:"Originally published on strongloop.com",date:"2019-08-07T00:00:00.000Z",formattedDate:"August 7, 2019",tags:[{label:"Milestone update",permalink:"/blog/tags/milestone-update"}],readingTime:8.315,hasTruncateMarker:!0,authors:[{name:"Agnes Lin",title:"LoopBack Maintainer",url:"https://github.com/agnes512",imageURL:"https://avatars3.githubusercontent.com/u/50331796",key:"agnes512"}],frontMatter:{title:"LoopBack 4 July 2019 Milestone Update",date:"2019-08-07T00:00:00.000Z",authors:"agnes512",slug:"july-2019-milestone",tags:["Milestone update"]},prevItem:{title:"Congratulations to LoopBack, Winner of 2019 API Award for API Middleware",permalink:"/blog/loopback-2019-api-award-api-middleware"},nextItem:{title:"Learning LoopBack 4 Interceptors (Part 1) - Global Interceptors",permalink:"/blog/loopback4-interceptors-part1"}},p={authorsImageUrls:[void 0]},s=[{value:"Improvements of Developer Experience",id:"improvements-of-developer-experience",level:2},{value:"Improvement of @loopback/cli",id:"improvement-of-loopbackcli",level:3},{value:"New Features in @loopback/context",id:"new-features-in-loopbackcontext",level:3},{value:"<code>@config</code> Decorator",id:"config-decorator",level:4},{value:"Parameter Injection",id:"parameter-injection",level:4},{value:"New Options for JSON Schema Generation",id:"new-options-for-json-schema-generation",level:3},{value:"Exclude",id:"exclude",level:4},{value:"Optional",id:"optional",level:4},{value:"Simplifying @requestBody",id:"simplifying-requestbody",level:3},{value:"Adding Cloud Native Features",id:"adding-cloud-native-features",level:3},{value:"Documentation Improvements",id:"documentation-improvements",level:2},{value:"More Detailed Content for <code>@model</code> and <code>@property</code> Decorators",id:"more-detailed-content-for-model-and-property-decorators",level:3},{value:"Supporting and Documenting Transactions",id:"supporting-and-documenting-transactions",level:3},{value:"Connector Reference",id:"connector-reference",level:3},{value:"Code Base Improvements",id:"code-base-improvements",level:2},{value:"Running Shared Tests in Connectors",id:"running-shared-tests-in-connectors",level:3},{value:"Fixing CI Failures",id:"fixing-ci-failures",level:3},{value:"Other Changes",id:"other-changes",level:2},{value:"New Feature On The Way - Inclusion of Related Models",id:"new-feature-on-the-way---inclusion-of-related-models",level:2},{value:"Team Changes",id:"team-changes",level:2},{value:"Looking for User References",id:"looking-for-user-references",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2},{value:"Call to Action",id:"call-to-action",level:2}],c={toc:s},d="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Originally published on ",(0,a.kt)("a",{parentName:"em",href:"https://strongloop.com"},"strongloop.com"))),(0,a.kt)("p",null,'This July 20th was the 50th anniversary of The Moon Landing and the famous quote, "That\'s one small step for man, one giant leap for mankind." This great, memorable event reminds me that every task the LoopBack team finishes will end up enhancing our project. From starting to build new features such as ',(0,a.kt)("inlineCode",{parentName:"p"},"inclusion"),", to enriching the documentation, we believe that we are making LoopBack better by taking all these small steps!"),(0,a.kt)("p",null,"We finished up 85 story points this month. See the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/3241"},"July milestone")," for an overview of what we have worked on, and read on for more details."),(0,a.kt)("h2",{id:"improvements-of-developer-experience"},"Improvements of Developer Experience"),(0,a.kt)("h3",{id:"improvement-of-loopbackcli"},"Improvement of @loopback/cli"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The original CLI version is now stored in the ",(0,a.kt)("inlineCode",{parentName:"p"}," .yo.rc.json")," file. This allows users to check the version of CLI when upgrading their dependencies. See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/3338"},"PR #3338")," for details.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We refactored the way that the property generator is invoked in the model generator. Now when generating a new model, the loop prompts for adding properties are more robust. See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/generator-loopback/pull/412"},"PR #412")," for more information. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For the CLI ",(0,a.kt)("inlineCode",{parentName:"p"},"lb4 app")," can now handle a hyphened path and will generate default names properly. See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/2092"},"PR #2092")," for more details."))),(0,a.kt)("h3",{id:"new-features-in-loopbackcontext"},"New Features in @loopback/context"),(0,a.kt)("h4",{id:"config-decorator"},(0,a.kt)("inlineCode",{parentName:"h4"},"@config")," Decorator"),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/3329"},"PR #3329"),", we introduce new config metadata, which allows ",(0,a.kt)("inlineCode",{parentName:"p"},"@config.*")," to be resolved from a binding other than the current one. For example, before we could inject ",(0,a.kt)("inlineCode",{parentName:"p"},"@config")," this way:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export class MyRestServer {\n  constructor(\n    // injects `RestServerConfig.port` to the target\n    @config('host')\n    host: string,\n  )\n  //...\n}\n")),(0,a.kt)("p",null,"Now this kind of injection can be done this way:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export class MyRestServer {\n  constructor(\n    // Inject the `rest.host` from the application config\n    @config({fromBinding: 'application', propertyPath: 'rest.host'})\n    host: string,\n  )\n}\n")),(0,a.kt)("h4",{id:"parameter-injection"},"Parameter Injection"),(0,a.kt)("p",null,"The module ",(0,a.kt)("inlineCode",{parentName:"p"},"Context")," didn't use the invocation context to resolve parameter injection. This might limit some use cases such as ",(0,a.kt)("inlineCode",{parentName:"p"},"@inceptors")," which couldn't rebind new values. With this implementation, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"options.skipParameterInjection")," to resolve parameter injection."),(0,a.kt)("h3",{id:"new-options-for-json-schema-generation"},"New Options for JSON Schema Generation"),(0,a.kt)("p",null,"We enabled the ",(0,a.kt)("inlineCode",{parentName:"p"},"exclude")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"optional")," options to ",(0,a.kt)("inlineCode",{parentName:"p"},"JsonSchemaOptions"),"."),(0,a.kt)("h4",{id:"exclude"},"Exclude"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"exclude")," option takes in an array of model properties which you can exclude from your ",(0,a.kt)("inlineCode",{parentName:"p"},"requestBody"),". For example, you can exclude the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," property from the body of a ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," request:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"POST /todos")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"async create(\n  @requestBody({\n    content: {\n      'application/json': {\n        schema: getModelSchemaRef(Note, {exclude: ['id']}),\n      },\n    },\n  })\n  note: Omit<Note, 'id'>,\n): Promise<Note> {\n  // ...\n}\n")),(0,a.kt)("p",null,"Any new generated controllers scaffolded by ",(0,a.kt)("inlineCode",{parentName:"p"},"lb4 controller")," will have the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," property excluded by default. See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/3297/"},"PR #3297")," for details."),(0,a.kt)("p",null,"We also added support for excluding a custom primary key name (not the default ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),") in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/3347"},"PR #3347"),"."),(0,a.kt)("h4",{id:"optional"},"Optional"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"optional")," option takes in an array of model properties which you can mark optional in your ",(0,a.kt)("inlineCode",{parentName:"p"},"requestBody"),". For example, you can mark the foreign key property from the body of a ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," request as optional:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"POST /todo-lists/{id}/todos")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"async create(\n  @param.path.number('id') id: number,\n  @requestBody({\n    content: {\n      'application/json': {\n        schema: getModelSchemaRef(Todo, {\n          exclude: ['id'],\n          optional: ['todoListId'],\n        }),\n      },\n    },\n  })\n  todo: Omit<Todo, 'id'>,\n): Promise<Todo> {\n  // ...\n}\n")),(0,a.kt)("p",null,"If this option is set and is not empty, it will override the ",(0,a.kt)("inlineCode",{parentName:"p"},"partial")," option. See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/3309"},"PR #3309")," for details."),(0,a.kt)("h3",{id:"simplifying-requestbody"},"Simplifying @requestBody"),(0,a.kt)("p",null,"The current ",(0,a.kt)("inlineCode",{parentName:"p"},"@requestBody()")," only takes in an entire request body (with very nested content object) or infers the schema from the parameter type. To simplify the signature so that users can describe the schema with concise configure options, we explored a new signature in a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/2654"},"spike story"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"@requestBody(spec, model, schemaOptions)"),". Most of the discussions are tracked in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/3398"},"PR #3398"),", and additional opinions and feedback are welcomed before we start implementing the simplified decorator."),(0,a.kt)("h3",{id:"adding-cloud-native-features"},"Adding Cloud Native Features"),(0,a.kt)("p",null,"To provide observability for LoopBack 4 applications deployed to a cloud environment, we start to add more integrations to expose health, metrics, and distributed tracing data. These packages are positioned as extensions to the framework."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/extensions/health"},"Health extension")," has been released as an experimental feature. Two more PRs are up for review:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Metrics extension for ",(0,a.kt)("a",{parentName:"li",href:"https://prometheus.io/"},"Prometheus"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/pull/3339"},"strongloop/loopback-next#3339")))),(0,a.kt)("li",{parentName:"ul"},"OpenTracing extension based on ",(0,a.kt)("a",{parentName:"li",href:"https://www.jaegertracing.io/"},"Jaeger"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/pull/3389"},"strongloop/loopback-next#3389"))))),(0,a.kt)("h2",{id:"documentation-improvements"},"Documentation Improvements"),(0,a.kt)("h3",{id:"more-detailed-content-for-model-and-property-decorators"},"More Detailed Content for ",(0,a.kt)("inlineCode",{parentName:"h3"},"@model")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"@property")," Decorators"),(0,a.kt)("p",null,"As we always try to beef up the documentation for LB4, this month we improved docs of the decorators ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Model.html#model-decorator"},(0,a.kt)("inlineCode",{parentName:"a"},"@model"))," and ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Model.html#property-decorator"},(0,a.kt)("inlineCode",{parentName:"a"},"@property")),". Before we were simply using docs from LB3 site. However, since the implementation structures are different for LB3 and LB4, some parts of the docs are not precise or correct for LB4. We updated the documentation with more details and pointed out the differences between LB3 and LB4. We also added more links so that users can find more references and join the dicussion on GitHub with us. More details are in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/3354"},"PR #3354"),"."),(0,a.kt)("h3",{id:"supporting-and-documenting-transactions"},"Supporting and Documenting Transactions"),(0,a.kt)("p",null,"We also worked on bridging the gap between LoopBack 3 and 4 in terms of exposing transactions from repositories in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/3397"},"PR #3397"),". We've introduced sugar API ",(0,a.kt)("inlineCode",{parentName:"p"},"beginTransaction()"),"\nat the repository level, which delegates work to the data source that belongs to it to start a transaction. "),(0,a.kt)("p",null,"With it, we've created ",(0,a.kt)("inlineCode",{parentName:"p"},"TransactionalRepository")," interface that is meant to be used with connectors that support transactions and ",(0,a.kt)("inlineCode",{parentName:"p"},"DefaultTransactionalRepository")," which can be used for CRUD repositories that support transactions. Once a transaction object is obtained from ",(0,a.kt)("inlineCode",{parentName:"p"},"beginTransaction()"),", it can be passed into any CRUD calls made for the models attached to the backing datasource. The user can then either call ",(0,a.kt)("inlineCode",{parentName:"p"},"commit()")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"rollback()")," actions for the transaction object to persist or revert the changes made. "),(0,a.kt)("p",null,"Note that only select SQL connectors support transactions to use this feature. For more information, check out the ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Using-database-transactions.html"},"documentation"),"."),(0,a.kt)("h3",{id:"connector-reference"},"Connector Reference"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb3/Connectors-reference.html"},"Connector reference")," pages that were missing in the LoopBack 4 docs have been added now. Check ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/2598"},"issue #2598")," for more details.  "),(0,a.kt)("h2",{id:"code-base-improvements"},"Code Base Improvements"),(0,a.kt)("h3",{id:"running-shared-tests-in-connectors"},"Running Shared Tests in Connectors"),(0,a.kt)("p",null,"This month we continued refactoring the tests for ",(0,a.kt)("inlineCode",{parentName:"p"},"mysql"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"mssql"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"oracle")," connectors in LoopBack 3 so that they can run the imported juggler tests in both 3.x and 4.x versions. Now our ",(0,a.kt)("inlineCode",{parentName:"p"},"mongodb"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"postgresql"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"kv-redis"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"cloudant"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"mysql"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"mssql"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"oracle")," connectors run shared tests. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For ",(0,a.kt)("inlineCode",{parentName:"li"},"mysql"),", see ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-connector-mysql/pull/390"},"PR #390"),"."),(0,a.kt)("li",{parentName:"ul"},"For ",(0,a.kt)("inlineCode",{parentName:"li"},"mssql"),", see ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-connector-mssql/pull/205"},"PR #205"),"."),(0,a.kt)("li",{parentName:"ul"},"For ",(0,a.kt)("inlineCode",{parentName:"li"},"oracle"),", see ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-connector-oracle/pull/180"},"PR #180"),".")),(0,a.kt)("h3",{id:"fixing-ci-failures"},"Fixing CI Failures"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For ",(0,a.kt)("inlineCode",{parentName:"li"},"dashdb")," see ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-connector-dashdb/pull/81"},"PR #81")," and ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-connector-dashdb/pull/82"},"PR #82")),(0,a.kt)("li",{parentName:"ul"},"For ",(0,a.kt)("inlineCode",{parentName:"li"},"db2")," see ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-connector-db2/pull/135"},"PR #135"))),(0,a.kt)("h2",{id:"other-changes"},"Other Changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We updated our templates and existing examples to leverage ",(0,a.kt)("inlineCode",{parentName:"p"},"getModelSchemaRef")," in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/3402"},"PR #3402"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We updated our ",(0,a.kt)("inlineCode",{parentName:"p"},"oracle")," connector to ",(0,a.kt)("inlineCode",{parentName:"p"},"oracledb")," v4.0.0 in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-connector-oracle/pull/186"},"PR #186"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We tested/enabled Node.js 12 for some of our connectors. "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"For SQL connectors, see the PRs in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues/3110"},"issue #3110"),"."),(0,a.kt)("li",{parentName:"ul"},"For NoSQL connectors, see the PRs in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues/3111"},"issue #3111"),"."),(0,a.kt)("li",{parentName:"ul"},"For service connectors, see the PRs in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues/3112"},"issue #3112"),"."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We fixed an edge case where ",(0,a.kt)("inlineCode",{parentName:"p"},"replaceById")," was not working for MongoDB database when the data came from the REST API layer. Check ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/3431"},"issue #3431")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-datasource-juggler/pull/1759"},"issue #1759")," for more details.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We removed the source code of ",(0,a.kt)("inlineCode",{parentName:"p"},"@loopback/openapi-v3-types")," package from our monorepo. This package was deprecated last month in favor of ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/openapi3-ts"},(0,a.kt)("inlineCode",{parentName:"a"},"openapi3-ts"))," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@loopback/openapi-v3"},(0,a.kt)("inlineCode",{parentName:"a"},"@loopback/openapi-v3")),". Check ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/3385"},"PR #3385")," for more details.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We fixed automigrate & autoupdate to wait until the datasource is connected to the database. This addressed a bug in the npm script ",(0,a.kt)("inlineCode",{parentName:"p"},"migrate")," (scaffolded by ",(0,a.kt)("inlineCode",{parentName:"p"},"lb4 app"),"), where errors thrown by the database migration were not caught correctly and thus the script did not indicate the failure via a non-zero exit code. Check ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-datasource-juggler/pull/1756"},"issue #1756")," for more details.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We improved the type definition of ",(0,a.kt)("inlineCode",{parentName:"p"},"toJSON")," helper from ",(0,a.kt)("inlineCode",{parentName:"p"},"@loopback/testlab")," to better support union types like ",(0,a.kt)("inlineCode",{parentName:"p"},"MyModel | null")," (e.g. as returned by Repository ",(0,a.kt)("inlineCode",{parentName:"p"},"findOne")," method). Check ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/3283"},"PR #3823")," for more details.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We fixed REST API to better handle the case where a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"basePath")," is configured via ",(0,a.kt)("inlineCode",{parentName:"p"},"app.basePath()")," API. As a result, the ",(0,a.kt)("inlineCode",{parentName:"p"},"server")," entry in OpenAPI spec now correctly includes the configured base path again. Check ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/3266"},"PR #3266")," for more details.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We fixed a MongoDB connector bug which caused the id from the input data object to be deleted. See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/3267"},"issue #3267")," for more details."))),(0,a.kt)("h2",{id:"new-feature-on-the-way---inclusion-of-related-models"},"New Feature On The Way - Inclusion of Related Models"),(0,a.kt)("p",null,"After many weeks in making, Miroslav finally finished researching how to resolve included models when querying datasources. This concluded the spike ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/2634"},"issue #2634"),"."),(0,a.kt)("p",null,"The essence:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We will introduce a concept of ",(0,a.kt)("inlineCode",{parentName:"li"},"InclusionResolver")," functions. These functions implement the logic for fetching related models."),(0,a.kt)("li",{parentName:"ul"},"Base repository classes (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"DefaultCrudRepository"),") will handle inclusions by calling resolvers registered for individual relations."),(0,a.kt)("li",{parentName:"ul"},"Model-specific repositories (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"TodoRepository")," scaffolded in your project) will register inclusion resolvers for relations that are allowed to be traversed."),(0,a.kt)("li",{parentName:"ul"},"LoopBack will provide built-in inclusion resolvers for each relation type we implement (",(0,a.kt)("inlineCode",{parentName:"li"},"hasMany"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"belongsTo"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"hasOne")," at the time of writing).")),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/3387"},"spike PR #3387")," shows a proof-of-concept implementation and includes high-level description of the proposed design in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/blob/spike/resolve-included-models/_SPIKE_.md"},"SPIKE document"),", where you can find more details."),(0,a.kt)("h2",{id:"team-changes"},"Team Changes"),(0,a.kt)("p",null,"Our LoopBack core maintainer ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/b-admike"},"Biniam")," is leaving to join the ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/ca-en/marketplace/api-management"},"API Connect")," team. His hard work and dedication were an important part of our team. We appreciate the inspiration he gave us and all the contributions he's made. We believe that he will do an outstanding job in the next phase of his career! "),(0,a.kt)("h2",{id:"looking-for-user-references"},"Looking for User References"),(0,a.kt)("p",null,"We have updated our ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/"},"loopback.io")," website with our users and their testimonials. If you would like to be a part of it, see the details in this ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/3047"},"GitHub issue"),"."),(0,a.kt)("h2",{id:"whats-next"},"What's Next?"),(0,a.kt)("p",null,"If you're interested in what we're working on next, you can check out the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/3482"},"August milestone"),"."),(0,a.kt)("h2",{id:"call-to-action"},"Call to Action"),(0,a.kt)("p",null,"LoopBack's future success depends on you. We appreciate your continuous support and engagement to make LoopBack even better and meaningful for your API creation experience. Here's how you can join us and help the project:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues"},"Report issues"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/blob/master/docs/CONTRIBUTING.md"},"Contribute")," code and documentation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/labels/good%20first%20issue"},'Open a pull request on one of our "good first issues"'),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues/110"},"Join")," our user group.")))}m.isMDXComponent=!0}}]);