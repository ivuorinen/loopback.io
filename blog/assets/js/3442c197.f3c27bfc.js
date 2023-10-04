"use strict";(self.webpackChunkloopback_blog=self.webpackChunkloopback_blog||[]).push([[4102],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(o),d=a,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return o?n.createElement(h,r(r({ref:t},c),{},{components:o})):n.createElement(h,r({ref:t},c))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=o[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},9757:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=o(7462),a=(o(7294),o(3905));const i={title:"LoopBack 4 May 2020 Milestone Update",date:new Date("2020-06-04T00:00:00.000Z"),authors:"jannyhou",slug:"may-2020-milestone",tags:["Milestone update"]},r=void 0,l={permalink:"/blog/may-2020-milestone",editUrl:"https://github.com/loopbackio/loopback-blog/blog/2020/2020-06-03-may-milestone.md",source:"@site/blog/2020/2020-06-03-may-milestone.md",title:"LoopBack 4 May 2020 Milestone Update",description:"Originally published on strongloop.com",date:"2020-06-04T00:00:00.000Z",formattedDate:"June 4, 2020",tags:[{label:"Milestone update",permalink:"/blog/tags/milestone-update"}],readingTime:6.88,hasTruncateMarker:!0,authors:[{name:"Janny Hou",title:"LoopBack Maintainer",url:"https://github.com/jannyhou",imageURL:"https://avatars2.githubusercontent.com/u/12554153",key:"jannyhou"}],frontMatter:{title:"LoopBack 4 May 2020 Milestone Update",date:"2020-06-04T00:00:00.000Z",authors:"jannyhou",slug:"may-2020-milestone",tags:["Milestone update"]},prevItem:{title:"How We Improved LoopBack REST Performance by 45%",permalink:"/blog/2020-improve-looopback-performance-uuid"},nextItem:{title:"How to reuse custom LoopBack Repository code",permalink:"/blog/2020-share-repository-code"}},p={authorsImageUrls:[void 0]},s=[{value:"Migration Epic",id:"migration-epic",level:2},{value:"Migrating components",id:"migrating-components",level:3},{value:"Migrating LoopBack 3 tests to LoopBack 4",id:"migrating-loopback-3-tests-to-loopback-4",level:3},{value:"Features",id:"features",level:2},{value:"Preserving prototype for toObject",id:"preserving-prototype-for-toobject",level:3},{value:"Express Middleware",id:"express-middleware",level:3},{value:"Context Improvements",id:"context-improvements",level:3},{value:"Build Improvements",id:"build-improvements",level:3},{value:"Application Booter",id:"application-booter",level:3},{value:"Documentation and Blog",id:"documentation-and-blog",level:2},{value:"What LoopBack can offer on top of Express",id:"what-loopback-can-offer-on-top-of-express",level:3},{value:"Managing LoopBack APIs with IBM APIConnect",id:"managing-loopback-apis-with-ibm-apiconnect",level:3},{value:"Setting Debug String",id:"setting-debug-string",level:3},{value:"Strong Error Handler",id:"strong-error-handler",level:3},{value:"Postgresql Connector",id:"postgresql-connector",level:3},{value:"Youtube Videos",id:"youtube-videos",level:2},{value:"Authentication",id:"authentication",level:2},{value:"June Milestones",id:"june-milestones",level:2},{value:"Call to Action",id:"call-to-action",level:2}],c={toc:s},u="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Originally published on ",(0,a.kt)("a",{parentName:"em",href:"https://strongloop.com"},"strongloop.com"))),(0,a.kt)("p",null,"The completion of the migration epic would be the biggest news in May. Now LoopBack 3 users can find the migration guide ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/migration-overview.html"},"here"),". Meanwhile, we have feature contributions and bug fixes happened across all the functional areas. "),(0,a.kt)("p",null,"There are more than 20 community PRs merged in May and we really appreciate every community member's help. We set up community calls every four weeks to keep in touch with our maintainers. See the latest schedule and recording in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-governance/issues/4"},"this story"),"."),(0,a.kt)("p",null,"Keep reading to learn about what happened in May."),(0,a.kt)("h2",{id:"migration-epic"},"Migration Epic"),(0,a.kt)("h3",{id:"migrating-components"},"Migrating components"),(0,a.kt)("p",null,'The migration guide for components, which is a powerful way to contribute any artifacts, is the last but most widely covered story in the migration epic. To make the migration guide easier to navigate, we split component-related instructions into several sub-sections as "project layout", "models, entities and repositories", "current context", "model mixins", "REST API endpoints". You can check the documentation ',(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/migration-extensions-overview.html"},"migration-extensions-overview")," and its sub-pages to learn the details."),(0,a.kt)("h3",{id:"migrating-loopback-3-tests-to-loopback-4"},"Migrating LoopBack 3 tests to LoopBack 4"),(0,a.kt)("p",null,"When a LoopBack 3 application is mounted in a LoopBack 4 project, its endpoints are exposed through the LoopBack 4's REST server. To reuse the existing LoopBack 3 tests, you can easily migrate them by following the instructions in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/examples/lb3-application#running-lb3-tests-from-lb4"},"example ",(0,a.kt)("inlineCode",{parentName:"a"},"lb3-application")),". It covers how to set up clients to test requests and how to test runtime functions."),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("h3",{id:"preserving-prototype-for-toobject"},"Preserving prototype for toObject"),(0,a.kt)("p",null,"LoopBack CRUD operations invoke ",(0,a.kt)("inlineCode",{parentName:"p"},"toObject")," function internally to return a model instance. ",(0,a.kt)("inlineCode",{parentName:"p"},"toObject")," converts a value to a plain object as DTO (Data transfer object). It returned a JSON representation before, which doesn't preserve the prototype of complicated types like ",(0,a.kt)("inlineCode",{parentName:"p"},"Date"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ObjectId")," but returned the value as a string instead. Now such values' prototypes are kept, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const DATE = new Date('2020-05-01');\nconst created = await repo.create({\n  createdAt: DATE,\n});\n// The returned model instance has `createdAt` as type Date\nexpect(created.toObject()).to.deepEqual({\n  id: 1,\n  createdAt: DATE,\n});\n")),(0,a.kt)("h3",{id:"express-middleware"},"Express Middleware"),(0,a.kt)("p",null,"LookBack 4 leverages Express behind the scenes for its REST server implementation. We decided to not use Express middleware as-is but now we support integrating the middleware in different ways. You can invoke it explicitly in the sequence, or register it to be executed by ",(0,a.kt)("inlineCode",{parentName:"p"},"InvokeMiddleware")," action, or use it as controller interceptors."),(0,a.kt)("p",null,"Page ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Express-middleware.html"},"Express middlware")," explains all the scenarios and usages. And page ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Middleware.html"},"Middleware")," provides the general knowledge of LoopBack 4 middleware."),(0,a.kt)("h3",{id:"context-improvements"},"Context Improvements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Function ",(0,a.kt)("inlineCode",{parentName:"p"},"createBindingFromClass")," allow bindings to be created from dynamic value provider classes, for example: "),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@bind({tags: {greeting: 'c'}})\nclass DynamicGreetingProvider {\n  static value(@inject('currentUser') user: string) {\n    return `Hello, ${this.user}`;\n  }\n}\n// toDynamicValue() is used internally\n// A tag `{type: 'dynamicValueProvider'}` is added\nconst binding = createBindingFromClass(GreetingProvider);\nctx.add(binding);\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A provider class can use dependency injection to receive resolution-related\nmetadata such as context and binding. But the overhead to wrap a factory\nfunction is not desired for some use cases. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/5370"},"PR#5370")," introduces a lightweight alternative using toDynamicValue as follows:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import {ValueFactory} from '@loopback/context';\n// The factory function now have access extra metadata about the resolution\nconst factory: ValueFactory<string> = resolutionCtx => {\n  return `Hello, ${resolutionCtx.context.name}#${\n    resolutionCtx.binding.key\n  } ${resolutionCtx.options.session?.getBindingPath()}`;\n};\nconst b = ctx.bind('msg').toDynamicValue(factory);\n")),(0,a.kt)("p",{parentName:"li"},"  A benchmark is added to measure the performance of\ndifferent styles of context bindings in package ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/benchmark"},"@loopback/benchmark"),". You can run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run -s benchmark:context")," to see the result.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/5378"},"PR#5378")," introduced a model booter to automatically bind model classes to the application during boot. You can retrieve and inject model constructors using key ",(0,a.kt)("inlineCode",{parentName:"p"},"models.<model_name>"),". For example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@model()\nclass MyModel extends Model {}\n\nclass MyModelComponent {\n  models = [MyModel];\n}\n// you can get MyModel by `models.MyModel`\nconst modelCtor = myApp.getSync<typeof MyModel>('models.MyModel');\n")))),(0,a.kt)("h3",{id:"build-improvements"},"Build Improvements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We upgraded the dependency to ",(0,a.kt)("a",{parentName:"p",href:"mailto:TypeScript@3.9.2."},"TypeScript@3.9.2.")," Code adjustments including ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," check and type intersection were made to be compatible with the new version. You can check ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/5041/commits"},"PR#5041")," for more details.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Replace eslint rule ",(0,a.kt)("inlineCode",{parentName:"p"},"no-invalid-this")," with TypeScript-aware one: In code accessing ",(0,a.kt)("inlineCode",{parentName:"p"},"this")," variable, eslint-ignore comment for ",(0,a.kt)("inlineCode",{parentName:"p"},"no-invalid-this")," will no longer work. You can either\nchange those comments to disable ",(0,a.kt)("inlineCode",{parentName:"p"},"@typescript-eslint/no-invalid-this"),",  or better tell TypeScript what is the type of ",(0,a.kt)("inlineCode",{parentName:"p"},"this")," in your function."),(0,a.kt)("p",{parentName:"li"},"  A TypeScript example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import {Suite} from 'mocha';\ndescribe('my mocha suite', function(this: Suite) {\n  this.timeout(1000);\n  it('is slow', function(this: Mocha.Context) {\n    this.timeout(2000);\n  });\n})\n")),(0,a.kt)("p",{parentName:"li"},"  A JavaScript example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"describe('my mocha suite', /** @this {Mocha.Suite} */ function() {\n  this.timeout(1000);\n  it('is slow', /** @this {Mocha.Context} */ function() {\n    this.timeout(2000);\n  });\n})\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Remove hand-written index files: We removed the root level dummy index files and changed the entry point of project to be the index file inside ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," folder. An example of the latest layout of a package can be found in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/examples/todo"},"Todo application"),"."))),(0,a.kt)("h3",{id:"application-booter"},"Application Booter"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can register a booter to boot a sub-application as:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class MainAppWithSubAppBooter extends BootMixin(Application) {\n  constructor() {\n    super();\n    this.projectRoot = __dirname;\n    // boot a sub-application `app`, its bindings will be added as well\n    this.applicationBooter(app);\n  }\n}\n")))),(0,a.kt)("h2",{id:"documentation-and-blog"},"Documentation and Blog"),(0,a.kt)("h3",{id:"what-loopback-can-offer-on-top-of-express"},"What LoopBack can offer on top of Express"),(0,a.kt)("p",null,"LoopBack is a framework built on top of Express. It comes packed with tools, features, and capabilities that enables rapid API and micro-services development and easy maintenance. Last month we published a blog summarizing the points that make LoopBack a compelling choice for Express developers when it comes to API development. You can read ",(0,a.kt)("a",{parentName:"p",href:"https://strongloop.com/strongblog/express-to-loopback/"},"this blog")," to see how LoopBack can bring Express to the next level."),(0,a.kt)("h3",{id:"managing-loopback-apis-with-ibm-apiconnect"},"Managing LoopBack APIs with IBM APIConnect"),(0,a.kt)("p",null,"LoopBack 4 application can integrate with API Connect framework. We've prepared an article on how you can take the APIs created from LoopBack and import them into API Connect for API management. Stay tuned for the published article."),(0,a.kt)("h3",{id:"setting-debug-string"},"Setting Debug String"),(0,a.kt)("p",null,"Documentation ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Setting-debug-strings.html"},"setting debug string")," explains the usage of running a LoopBack 4 application with debug string turned on. You can check the documentation above to learn the debug string pattern and the format in each package."),(0,a.kt)("h3",{id:"strong-error-handler"},"Strong Error Handler"),(0,a.kt)("p",null,"As a dependency of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/packages/rest"},(0,a.kt)("inlineCode",{parentName:"a"},"@loopback/rest")),", package ",(0,a.kt)("inlineCode",{parentName:"p"},"strong-error-handler")," is an error handler for use in both development (debug) and production environments. You can use it to customize the error rejection in the LoopBack 4 sequence. For its detailed usage, please read the documentation ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Using-strong-error-handler.html"},"using string error handler"),"."),(0,a.kt)("h3",{id:"postgresql-connector"},"Postgresql Connector"),(0,a.kt)("p",null,"We've been sharing the connector documentation with LB3, which might be confusing, especially for new LB4 users. We updated the PostgreSQL connector page and also the tutorial. By walking you through the steps of creating a LB4 application and connecting to the PostgreSQL database, we hope the new tutorial helps new users to pick up LoopBack 4 better."),(0,a.kt)("p",null,"You can read page ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Connecting-to-PostgreSQL.html"},"connecting to PostgreSQL")," to follow the tutorial."),(0,a.kt)("h2",{id:"youtube-videos"},"Youtube Videos"),(0,a.kt)("p",null,"For creating tutorials, we have more materials than documentations. Last month, one of our core maintainers ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bajtos"},"Miroslav")," published two video tutorials on ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/channel/UCR8LLOxVNwSEWLMqoZzQNXw"},"our StrongLoop YouTube channel"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How to reuse LoopBack repository code: ",(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=s2yDaKiNYCg"},"Click to watch the video")),(0,a.kt)("li",{parentName:"ul"},"Migrate LoopBack 4 datasource config to TypeScript: ",(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=S3BKXh7wDYE"},"Click to watch the video"))),(0,a.kt)("h2",{id:"authentication"},"Authentication"),(0,a.kt)("p",null,"There are several documentation and user experience improvements happened this month to make the authentication system more automatic and easy to use:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Added example ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/examples/todo-jwt"},(0,a.kt)("inlineCode",{parentName:"a"},"@loopback/todo-jwt"))," to demo enabling JWT authentication in the Todo application. Its corresponding tutorial ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Authentication-Tutorial.html"},"JWT authentication tutorial")," is coming soon.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Added security specification enhancer in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/extensions/authentication-jwt"},"@loopback/authentication-jwt")," to automatically bind the JWT scheme and global security specification to application. You don't need to manually add them in the application constructor anymore. The updated usage is documented in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/extensions/authentication-jwt#usage"},"README.md")," file."))),(0,a.kt)("h2",{id:"june-milestones"},"June Milestones"),(0,a.kt)("p",null,"This month, we would like to work on the remaining items for the migration guide epic, documentation improvement and more. For more details, take a look at our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/5607"},"June milestone list on GitHub"),"."),(0,a.kt)("h2",{id:"call-to-action"},"Call to Action"),(0,a.kt)("p",null,"In 2020, we look forward to helping you and seeing you around! LoopBack's success depends on you. We appreciate your continuous support and engagement to make LoopBack even better and meaningful for your API creation experience. Here's how you can join us and help the project:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues"},"Report issues"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/blob/master/docs/CONTRIBUTING.md"},"Contribute")," code and documentation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/labels/good%20first%20issue"},'Open a pull request on one of our "good first issues"'),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues/110"},"Join")," our user group.")))}m.isMDXComponent=!0}}]);