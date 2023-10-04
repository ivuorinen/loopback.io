"use strict";(self.webpackChunkloopback_blog=self.webpackChunkloopback_blog||[]).push([[4850],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return n?o.createElement(h,r(r({ref:t},d),{},{components:n})):o.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=n(7462),a=(n(7294),n(3905));const i={title:"LoopBack 4 November 2019 Milestone Update",date:new Date("2019-12-05T00:00:00.000Z"),authors:"jannyhou",slug:"november-2019-milestone",tags:["Milestone update"]},r=void 0,l={permalink:"/blog/november-2019-milestone",editUrl:"https://github.com/loopbackio/loopback-blog/blog/2019/2019-12-05-november-milestone.md",source:"@site/blog/2019/2019-12-05-november-milestone.md",title:"LoopBack 4 November 2019 Milestone Update",description:"Originally published on strongloop.com",date:"2019-12-05T00:00:00.000Z",formattedDate:"December 5, 2019",tags:[{label:"Milestone update",permalink:"/blog/tags/milestone-update"}],readingTime:8.455,hasTruncateMarker:!0,authors:[{name:"Janny Hou",title:"LoopBack Maintainer",url:"https://github.com/jannyhou",imageURL:"https://avatars2.githubusercontent.com/u/12554153",key:"jannyhou"}],frontMatter:{title:"LoopBack 4 November 2019 Milestone Update",date:"2019-12-05T00:00:00.000Z",authors:"jannyhou",slug:"november-2019-milestone",tags:["Milestone update"]},prevItem:{title:"LoopBack 2019 Year in Review",permalink:"/blog/loopback-2019-review"},nextItem:{title:"Going Cloud Native with LoopBack 4",permalink:"/blog/going-cloud-native-with-loopback-4"}},p={authorsImageUrls:[void 0]},s=[{value:"Inclusion of Related Models",id:"inclusion-of-related-models",level:2},{value:"Running Repository Tests for Cloudant",id:"running-repository-tests-for-cloudant",level:3},{value:"Verifying Relation Type in Metadata",id:"verifying-relation-type-in-metadata",level:3},{value:"Migration from LoopBack 3",id:"migration-from-loopback-3",level:2},{value:"Authentication and Authorization",id:"authentication-and-authorization",level:2},{value:"Adding Authorization Example and Tutorial",id:"adding-authorization-example-and-tutorial",level:3},{value:"Refactoring Customer Credentials",id:"refactoring-customer-credentials",level:3},{value:"Context Improvement",id:"context-improvement",level:2},{value:"Inspect",id:"inspect",level:3},{value:"Choosing the Right Scope",id:"choosing-the-right-scope",level:3},{value:"@service Decorator",id:"service-decorator",level:3},{value:"Receive Information of Current Binding",id:"receive-information-of-current-binding",level:3},{value:"Application Life Cycle",id:"application-life-cycle",level:2},{value:"Partitioned Database in Cloudant",id:"partitioned-database-in-cloudant",level:2},{value:"Creating Partitioned Index",id:"creating-partitioned-index",level:3},{value:"Partitioned Find",id:"partitioned-find",level:3},{value:"Build Improvements",id:"build-improvements",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Documentation Improvements",id:"documentation-improvements",level:2},{value:"Miscellaneous",id:"miscellaneous",level:2},{value:"Community Contributions",id:"community-contributions",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2},{value:"Call to Action",id:"call-to-action",level:2}],d={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Originally published on ",(0,a.kt)("a",{parentName:"em",href:"https://strongloop.com"},"strongloop.com"))),(0,a.kt)("p",null,"The LoopBack team greeted November with the CASCONxEVOKE conference in Toronto. CASCONxEVOKE is one of Canada's largest combined academic, research and developer conferences. As its speakers and attendees, we had a booth with posters to advocate LoopBack, and also delivered a workshop about developing extensible LoopBack applications. You can check this ",(0,a.kt)("a",{parentName:"p",href:"https://strongloop.com/strongblog/cascon-evoke-2019/"},"blog")," for more details. "),(0,a.kt)("p",null,"For Q4 achievements, we finished 3 epics this month: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/1352"},"Inclusion of related models"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/1054"},"Deployment guide in a cloud native environment")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-connector-cloudant/issues/219"},"Support partitioned database in Cloudant connector"),", and significantly progressed in the Migration, Authentication & Authorization epics."),(0,a.kt)("p",null,"Keep reading to learn about the recently added features!"),(0,a.kt)("h2",{id:"inclusion-of-related-models"},"Inclusion of Related Models"),(0,a.kt)("h3",{id:"running-repository-tests-for-cloudant"},"Running Repository Tests for Cloudant"),(0,a.kt)("p",null,"To ensure our relations test suites work against real databases, we've been adding different kinds of databases to our test environment. This month we added a new repository",(0,a.kt)("inlineCode",{parentName:"p"},"@loopback/test-repository-cloudant")," to run shared CRUD and relation tests on Cloudant. You can also set up docker instance easily with our setup script to test out your application. See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/3968"},"PR#3968")," for more details and try it out if you're interested."),(0,a.kt)("h3",{id:"verifying-relation-type-in-metadata"},"Verifying Relation Type in Metadata"),(0,a.kt)("p",null,"Besides supporting inclusion in queries, we now also set constraints to CRUD operations with navigational properties to avoid unexpected errors. For example, if you try to create an instance of TodoList with all Todos it has through the hasMany relation such as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"todoListRepository.create(\n  {\n    id: 1,\n    name: 'my list 1',\n    todos:[\n      {id: 1, description: 'todo 1', todoListId: 1},\n      {id: 2, description: 'todo 1', todoListId: 2}, // incorrect foreign key\n    ]\n  }\n)\n")),(0,a.kt)("p",null,"Such requests might be problematic because they might contain incorrect primary key or foreign key. Therefore, with such concerns, request contains navigational properties will be rejected. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/4148"},"PR#4148")," implements the verification for CRUD methods. "),(0,a.kt)("p",null,"Additionally, in order to ensure that the correct metadata type is being using when it is resolved, we've added tests in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/4046/"},"PR#4046")," and simplified our test setup."),(0,a.kt)("h2",{id:"migration-from-loopback-3"},"Migration from LoopBack 3"),(0,a.kt)("p",null,"We keep incrementally building the migration guide for LoopBack 3 users upgrading to LoopBack 4. In November, we added content for ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/migration-models-relations.html"},"migrating model relations"),". We explained how to convert a relation defined in LoopBack 3 model JSON files into corresponding LoopBack 4 artifacts."),(0,a.kt)("h2",{id:"authentication-and-authorization"},"Authentication and Authorization"),(0,a.kt)("h3",{id:"adding-authorization-example-and-tutorial"},"Adding Authorization Example and Tutorial"),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"loopback4-example-shopping"),", the ",(0,a.kt)("inlineCode",{parentName:"p"},"/users/{userId}/orders")," endpoints are now secured by an authorization system. When a request comes in, the authentication module resolves the user profile and passes it to the authorization module. Then an interceptor retrieves the metadata from the decorated endpoint, and invokes registered authorizers to determine whether the user can perform the operation. We also have a documentation ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/4185"},"PR")," in progress that explains the usage of authorization module."),(0,a.kt)("h3",{id:"refactoring-customer-credentials"},"Refactoring Customer Credentials"),(0,a.kt)("p",null,"In LoopBack 3.x, we store users' passwords together with user data in the same model (table), which opens a lot of security vulnerabilities to deal with. For example, when returning user data in HTTP response, the password property must be filtered out and when searching for users, the password must be excluded from the query."),(0,a.kt)("p",null,"Our example ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback4-example-shopping"},"Shopping App")," used to store user credentials together with other profile information too. In November, we refactored the domain model of our example app and extracted the password property into a new model ",(0,a.kt)("inlineCode",{parentName:"p"},"UserCredentials"),". Beside the immediate benefits in increased security, this new domain model makes it easier to implement additional features in the future. For example: 2-factor authentication, and the password validation rule forbiding repeated use of the same password."),(0,a.kt)("h2",{id:"context-improvement"},"Context Improvement"),(0,a.kt)("h3",{id:"inspect"},"Inspect"),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/4193"},"PR#4193")," we've improved the context/binding with an ",(0,a.kt)("inlineCode",{parentName:"p"},"inspect()")," method for metadata dumping. ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx.inspect()")," can now be used to print out the context hierarchy in JSON. This is useful for troubleshooting and rendering in UI. An example snippet of calling the new function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const ctx = new Context();\nconsole.log(ctx.inspect());\n")),(0,a.kt)("h3",{id:"choosing-the-right-scope"},"Choosing the Right Scope"),(0,a.kt)("p",null,"When creating a binding, you can configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"scope")," as ",(0,a.kt)("inlineCode",{parentName:"p"},"SINGLETON")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"TRANSIENT"),". To know more about how to make the right choice based on requests, see the new documentation in ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Binding.html#choose-the-right-scope"},"Choosing the right scope"),"."),(0,a.kt)("h3",{id:"service-decorator"},"@service Decorator"),(0,a.kt)("p",null,"A new shortcut decorator ",(0,a.kt)("inlineCode",{parentName:"p"},"@service")," was introduced to inject an instance of a given service from a binding that matches the service interface. You can inject a service as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class MyController {\n  constructor(@service(MyService) public myService: MyService) {}\n}\n")),(0,a.kt)("p",null,"More details of its usage and explanation could be found in ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Decorators_service.html"},"Service Decorator")),(0,a.kt)("h3",{id:"receive-information-of-current-binding"},"Receive Information of Current Binding"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/4121"},"PR#4121")," allows a class or provider to receive its own binding information as follow:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export class HelloController {\n  // If the `bindingKey` is not specified, \n  // the current binding from the resolution session is injected.\n  @inject.binding() private myBinding: Binding<string>;\n  @get('/hello')\n  async greet() {\n    return `Hello from ${this.myBinding.key}`;\n  }\n}\n")),(0,a.kt)("h2",{id:"application-life-cycle"},"Application Life Cycle"),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/4145"},"PR#4145")," we improved states and introduced graceful shutdown for LoopBack applications."),(0,a.kt)("p",null,"Now an application's states are classified as ",(0,a.kt)("em",{parentName:"p"},"stable")," or ",(0,a.kt)("em",{parentName:"p"},"in process"),". Operations can only be called at a stable state. Calling a different operation in an in-process state will throw an error. See ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Life-cycle.html#application-states"},"Application states")," for details."),(0,a.kt)("p",null,"The shutdown of application is now controllable by specifying an array of signals in the configuration. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const app = new Application({\n  shutdown: {\n    signals: ['SIGINT'],\n  },\n});\n// Schedule some work such as a timer or database connection\nawait app.start();\n")),(0,a.kt)("p",null,"When the application is running inside a terminal, it can respond to ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl+C"),", which sends ",(0,a.kt)("inlineCode",{parentName:"p"},"SIGINT")," to the process. The application calls ",(0,a.kt)("inlineCode",{parentName:"p"},"stop")," first before it exits with the captured signal. This gives you a better control when the LoopBack 4 application is running inside a managed container, such as a Kubernetes Pod. See ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Life-cycle.html#graceful-shutdown"},"graceful-shutdown")," for more details."),(0,a.kt)("h2",{id:"partitioned-database-in-cloudant"},"Partitioned Database in Cloudant"),(0,a.kt)("p",null,"We've finished the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-connector-cloudant/issues/219"},"Partitioned Database Epic")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"loopback-connector-cloudant")," by supporting partitioned index, find, and property definition."),(0,a.kt)("h3",{id:"creating-partitioned-index"},"Creating Partitioned Index"),(0,a.kt)("p",null,"To create partitioned indexes as the secondary optimization for Cloudant query, you can add index entry in your model configuration with ",(0,a.kt)("inlineCode",{parentName:"p"},"{partitioned: true}")," like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Product = db.define('Product', {\n  name: {type: String},\n  }, {\n    forceId: false,\n    indexes: {\n      // create a partitioned index for frequently queried\n      // fields like `name`\n      'product_name_index': {\n        partitioned: true,\n        keys: {\n            name: 1\n        },\n      },\n    }\n  });\n")),(0,a.kt)("p",null,"Learn more about its signature and usage in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-connector-cloudant/blob/master/doc/partitioned-db.md#adding-partitioned-index"},"Adding Partitioned Index")),(0,a.kt)("h3",{id:"partitioned-find"},"Partitioned Find"),(0,a.kt)("p",null,"When the partition key is discovered in the query's options or filter, ",(0,a.kt)("inlineCode",{parentName:"p"},"Model.find()")," will invoke the underlying partitioned find to optimize the query. Here are two examples:"),(0,a.kt)("p",null,"Specifying the partition key in the ",(0,a.kt)("inlineCode",{parentName:"p"},"options"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Product.find({where: {name: 'food'}}, {partitionKey: 'toronto'});")),(0,a.kt)("p",null,"Or defining a model property as the partition key field. So that the find method could infer the partition key from the query filter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Define `city` as the partition key field in model `Product`\nProduct = db.define('Product', {\n  id: {type: String, id: true},\n  name: String,\n  // partition key field\n  city: {type: String, isPartitionKey: true},\n});\n\n// `Product.find()` will infer the partition key `toronto`\n// from the filter\nProduct.find({\n  where: {\n    city: 'toronto',\n    name: 'food'\n  }\n});\n")),(0,a.kt)("p",null,"You can learn more about the partitioned query in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-connector-cloudant/blob/master/doc/partitioned-db.md#defining-partitioned-property-and-performing-partitioned-find"},"Performing Partitioned Find")),(0,a.kt)("h2",{id:"build-improvements"},"Build Improvements"),(0,a.kt)("p",null,"We upgraded the version of TypeScript to 3.7.2. An application created by the new CLI module ",(0,a.kt)("inlineCode",{parentName:"p"},"^@loopback/cli@1.26.0")," is able to use the latest TypeScript features such as ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/4212"},"optional chaining")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/4213"},"nullish coalescing"),". A list of new features can be found in ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html"},"TypeScript's release blog"),"."),(0,a.kt)("p",null,"Now, in the new generated application, the json configuration files are renamed from ",(0,a.kt)("inlineCode",{parentName:"p"},"*.datasource.json")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"*.datasource.config.json")," to avoid generating declarations. Explanations see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/TypeScript/issues/34761"},"TypeScript issue#34761"),"."),(0,a.kt)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"lb4 discover")," should generate the correct type for property definition. Fixed by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/4143"},"PR#4143"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"@param.path.<primitive_type>")," generated with ",(0,a.kt)("inlineCode",{parentName:"p"},"lb4 relation")," considers Wrapper datatypes. Also fixed by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/4143"},"PR#4143"),"."))),(0,a.kt)("h2",{id:"documentation-improvements"},"Documentation Improvements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We've added a series of tutorials to illustrate how LoopBack can be used as an enabler to build large-scale Node.js applications. If you want to have a deeper understanding of LoopBack and/or to build an application with great flexibility and extensibility, don't miss ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/core-tutorial.html"},"this tutorial series"),"!")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In ",(0,a.kt)("inlineCode",{parentName:"p"},"loopback-component-explorer"),", we added a note in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-component-explorer#a-note-on-swagger-ui-vulnerabilities"},"README file")," to explain why the module is not affected by the security vulnerabilities in ",(0,a.kt)("inlineCode",{parentName:"p"},"swagger-ui"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'We\'ve added "Boot" and "Advanced Topics" to the core tutorial in ',(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/core-tutorial-part10.html"},"Advanced Recipes")," and ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/core-tutorial-part9.html"},"Discover and load artifacts by convention"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We've updated the steps of ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/todo-list-tutorial-relations.html"},"creating model relations")," to use ",(0,a.kt)("inlineCode",{parentName:"p"},"lb4 relation")," command in the TodoList tutorial."))),(0,a.kt)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We added the ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb3/OpenAPI-connector.html"},"OpenAPI")," and ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb3/gRPC-connector.html"},"gRPC")," connectors to be a part of our available connectors in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-workspace/pull/558"},"PR#558")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback.io/pull/906"},"PR#906"),". Now, when a user calls ",(0,a.kt)("inlineCode",{parentName:"p"},"lb4 datasource"),", they will have OpenAPI and gRPC as options for the connector.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"lb4 update")," command runs against a LoopBack 4 project and checks dependencies against the installed ",(0,a.kt)("inlineCode",{parentName:"p"},"@loopback/cli"),". Optionally, it updates the dependencies in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),". Details can be found on page ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Update-generator.html"},"Update generator"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/3770"},"spike story#3770")," we came up with a plan to support querying with nested filter in the API Explorer by re-designing the ",(0,a.kt)("inlineCode",{parentName:"p"},"@param.query.object()")," decorator. The follow-up implementation story is tracked in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/2208"},"#2208"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We fixed a bug in ",(0,a.kt)("inlineCode",{parentName:"p"},"loopback-datasource-juggler")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"applyDefaultOnWrites")," was not being applied in nested objects and arrays. You can find the details in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-datasource-juggler/pull/1797"},"PR#1797"),"."))),(0,a.kt)("h2",{id:"community-contributions"},"Community Contributions"),(0,a.kt)("p",null,"Here are some of the highlighted contributions from the community: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For the model definition created by running ",(0,a.kt)("inlineCode",{parentName:"p"},"lb4 openapi"),", we fixed the JavaScript type mapping of ",(0,a.kt)("inlineCode",{parentName:"p"},"date")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"Date")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),". Details see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/4142"},"PR#142"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A flag ",(0,a.kt)("inlineCode",{parentName:"p"},"useDefaultIdType")," was introduced in ",(0,a.kt)("inlineCode",{parentName:"p"},"loopback-datasource-juggler")," to preserve the user provided id(primary key) property against the one generated by connectors. Details see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-datasource-juggler/pull/1783"},"PR#1783"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We now reject the the promise properly for ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"replaceById")," when model initialization has errors. Details see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-datasource-juggler/pull/1790"},"PR#1790"),"."))),(0,a.kt)("h2",{id:"whats-next"},"What's Next?"),(0,a.kt)("p",null,"If you're interested in what we're working on next, you can check out the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/4236"},"December Milestone"),"."),(0,a.kt)("h2",{id:"call-to-action"},"Call to Action"),(0,a.kt)("p",null,"LoopBack's success depends on you. We appreciate your continuous support and engagement to make LoopBack even better and meaningful for your API creation experience. Here's how you can join us and help the project:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues"},"Report issues"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/blob/master/docs/CONTRIBUTING.md"},"Contribute")," code and documentation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/labels/good%20first%20issue"},'Open a pull request on one of our "good first issues"'),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues/110"},"Join")," our user group.")))}u.isMDXComponent=!0}}]);