"use strict";(self.webpackChunkloopback_blog=self.webpackChunkloopback_blog||[]).push([[8615],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(o),h=a,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||i;return o?n.createElement(m,r(r({ref:t},u),{},{components:o})):n.createElement(m,r({ref:t},u))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:a,r[1]=p;for(var s=2;s<i;s++)r[s]=o[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},7967:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=o(7462),a=(o(7294),o(3905));const i={title:"LoopBack 4 February 2019 Milestone Update",date:new Date("2019-03-06T00:00:00.000Z"),authors:"nabdelgadir",slug:"february-2019-milestone",tags:["Milestone update"]},r=void 0,p={permalink:"/blog/february-2019-milestone",editUrl:"https://github.com/loopbackio/loopback-blog/blog/2019/2019-03-06-february-milestone.md",source:"@site/blog/2019/2019-03-06-february-milestone.md",title:"LoopBack 4 February 2019 Milestone Update",description:"Originally published on strongloop.com",date:"2019-03-06T00:00:00.000Z",formattedDate:"March 6, 2019",tags:[{label:"Milestone update",permalink:"/blog/tags/milestone-update"}],readingTime:6.31,hasTruncateMarker:!0,authors:[{name:"Nora Abdelgadir",title:"LoopBack Maintainer",url:"https://github.com/nabdelgadir",imageURL:"https://avatars0.githubusercontent.com/u/42985749",key:"nabdelgadir"}],frontMatter:{title:"LoopBack 4 February 2019 Milestone Update",date:"2019-03-06T00:00:00.000Z",authors:"nabdelgadir",slug:"february-2019-milestone",tags:["Milestone update"]},prevItem:{title:"LoopBack 3 Receives Extended Long Term Support",permalink:"/blog/lb3-extended-lts"},nextItem:{title:"Watch Video from our Meetup - Quickly Build APIs with Existing Services and Data Using LoopBack!",permalink:"/blog/watch-meetup-quickly-build-apis-with-loopback"}},l={authorsImageUrls:[void 0]},s=[{value:"Authentication and Authorization",id:"authentication-and-authorization",level:2},{value:"Migration from LoopBack 3 to LoopBack 4",id:"migration-from-loopback-3-to-loopback-4",level:2},{value:"Generate Docker Files through the CLI",id:"generate-docker-files-through-the-cli",level:2},{value:"Documentation on Submitting a Pull Request",id:"documentation-on-submitting-a-pull-request",level:2},{value:"Tutorial on Mounting LoopBack REST API on an Express Application",id:"tutorial-on-mounting-loopback-rest-api-on-an-express-application",level:2},{value:"New Layout for Test Files",id:"new-layout-for-test-files",level:2},{value:"Other Updates",id:"other-updates",level:2},{value:"Events",id:"events",level:2},{value:"Community Contributions",id:"community-contributions",level:2},{value:"Call to Action",id:"call-to-action",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Originally published on ",(0,a.kt)("a",{parentName:"em",href:"https://strongloop.com"},"strongloop.com"))),(0,a.kt)("p",null,"It feels like 2019 just started, but we are somehow already in March. February flew by, but while the month was short, the list of things the LoopBack team accomplished in the month was the opposite. In February, we tackled authentication and authorization, spikes on migration from LoopBack 3 to LoopBack 4, preparation for events, and others. You can see the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/2313"},"February milestone")," and see the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/2516"},"March milestone")," to see what we are working on next. Read more to see the details of our progress in February."),(0,a.kt)("h2",{id:"authentication-and-authorization"},"Authentication and Authorization"),(0,a.kt)("p",null,"We refactored the JWT authentication strategy in ",(0,a.kt)("inlineCode",{parentName:"p"},"loopback4-example-shopping")," to be more modular and leveraged functions from ",(0,a.kt)("inlineCode",{parentName:"p"},"jsonwebtoken")," to perform a more robust password hashing and comparison. The token based utilities are refactored into a token service, so that it can be injected into the controller and strategy classes using Dependency Injection. The ",(0,a.kt)("inlineCode",{parentName:"p"},"bcrypt")," password hasher service is created similarly."),(0,a.kt)("p",null,"Our next step is to write a guide for plugging in different authentication strategies and depicting the API flow of authenticating the endpoints. In the meantime, we will be adding more abstractions to shape the authentication system as the groundwork before opening the extension points for the authentication system. You could check the subsequent stories in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/1035"},"issue #1035")," and track our progress there."),(0,a.kt)("h2",{id:"migration-from-loopback-3-to-loopback-4"},"Migration from LoopBack 3 to LoopBack 4"),(0,a.kt)("p",null,"LoopBack has a guide on ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb3/Migrating-to-3.0.html"},"migrating")," applications from LoopBack 2 to LoopBack 3, and it's only fitting that we include a guide on migrating applications from LoopBack 3 to LoopBack 4 as they reach feature parity. However, the latter's transition is more complicated than the former's transition. We have an ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/1849"},"epic"),", if you would like to see more details. "),(0,a.kt)("p",null,"This month, we did two spikes to work on this transition. We started with a proof of concept demonstrating how to take LoopBack 3 model definition files (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"common/models/product.json")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"common/models/product.js"),") and drop them without any modifications into a LoopBack 4 project. You can find the original idea in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/2224"},"issue #2224")," and the working code in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/2274"},"pull request #2274"),"."),(0,a.kt)("p",null,"Unfortunately, this approach turned out to be too expensive to implement and maintain, and we decided to abandon it."),(0,a.kt)("p",null,"Not all is lost, though! While discussing the proof of concept, we realized there is a simpler way how to build a bridge between LoopBack 3 and LoopBack 4: mount the entire LoopBack 3 application as a REST component of the LoopBack 4 project."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/2318"},"pull request #2318")," presents a proof of concept that we will use to drive the actual implementation tracked by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/2479"},"Epic #2479"),"."),(0,a.kt)("p",null,"We have also identified few new stories to bridge the gap preventing LoopBack 3 applications to be migrated to LoopBack 4, see the following ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/1849#issuecomment-467471409"},"GitHub comment"),"."),(0,a.kt)("h2",{id:"generate-docker-files-through-the-cli"},"Generate Docker Files through the CLI"),(0,a.kt)("p",null,"We added a new feature to the CLI: the ",(0,a.kt)("a",{parentName:"p",href:"https://www.docker.com/"},(0,a.kt)("inlineCode",{parentName:"a"},"--docker"))," option when generating a LoopBack application. This option generates ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile"),", ",(0,a.kt)("inlineCode",{parentName:"p"},".dockerignore"),", and two Docker scripts: ",(0,a.kt)("inlineCode",{parentName:"p"},"docker:build")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"docker:run"),". See ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Application-generator.html"},"Application generator")," to see how to generate an application with ",(0,a.kt)("inlineCode",{parentName:"p"},"--docker"),". "),(0,a.kt)("p",null,"Following this feature, we added a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/2433"},"fix")," that forces the test host to be ",(0,a.kt)("inlineCode",{parentName:"p"},"HOST")," environment variable or IPv4 interface, which makes it easier to run LoopBack 4 application tests inside a Docker container."),(0,a.kt)("h2",{id:"documentation-on-submitting-a-pull-request"},"Documentation on Submitting a Pull Request"),(0,a.kt)("p",null,"We introduced a detailed list of steps to follow if you want to submit a pull request for LoopBack 4. This ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/submitting_a_pr.html"},"guide")," includes steps for ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/submitting_a_pr.html#beginner-instructions"},"beginners")," and for ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/submitting_a_pr.html#expert-instructions"},"experienced")," users. It took a lot of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/2364"},"discussion")," to finally nail a balanced read that was both concise and informative. You can now follow this handy resource if you would like to submit a PR to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next"},(0,a.kt)("inlineCode",{parentName:"a"},"loopback-next")),"."),(0,a.kt)("h2",{id:"tutorial-on-mounting-loopback-rest-api-on-an-express-application"},"Tutorial on Mounting LoopBack REST API on an Express Application"),(0,a.kt)("p",null,"We added a new tutorial demonstrating how to mount LoopBack 4's REST API on an Express application. Users can now mix both the Express and LoopBack 4 frameworks in order to best match their own use cases. In this tutorial, we mounted a ",(0,a.kt)("inlineCode",{parentName:"p"},"Note")," application created by the LoopBack 4 CLI on top of a simple Express server and served a static file. You can follow the ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/express-with-lb4-rest-tutorial.html"},"tutorial")," or see the completed example by using the command ",(0,a.kt)("inlineCode",{parentName:"p"},"lb4 example express-composition"),"."),(0,a.kt)("h2",{id:"new-layout-for-test-files"},"New Layout for Test Files"),(0,a.kt)("p",null,"In a series of incremental pull requests, we reworked our project layout, moved all test files from ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"src/__tests__")," directory and updated TypeScript build configuration to place files directly to ",(0,a.kt)("inlineCode",{parentName:"p"},"dist")," folder, instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"dist/src")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"dist/test"),". This change simplifies the build setup and unifies file references between TypeScript sources and JavaScript runtime. It allows us to further improve our project infrastructure, for example start using TypeScript ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/project-references.html"},"Project References"),"."),(0,a.kt)("p",null,"LoopBack 4 projects scaffolded with recent versions of ",(0,a.kt)("inlineCode",{parentName:"p"},"lb4")," tool will use the new layout too. "),(0,a.kt)("p",null,"Existing projects can be updated with a bit of manual work:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Move your test files from ",(0,a.kt)("inlineCode",{parentName:"li"},"test")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"src/__tests__"),"."),(0,a.kt)("li",{parentName:"ul"},"Edit script in ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json")," to use the new test location."),(0,a.kt)("li",{parentName:"ul"},"Change ",(0,a.kt)("inlineCode",{parentName:"li"},"tsconfig.json"),": set ",(0,a.kt)("inlineCode",{parentName:"li"},"rootDir")," to ",(0,a.kt)("inlineCode",{parentName:"li"},'"src"'),", remove ",(0,a.kt)("inlineCode",{parentName:"li"},'"index.ts"')," and ",(0,a.kt)("inlineCode",{parentName:"li"},'"test"')," entries from the ",(0,a.kt)("inlineCode",{parentName:"li"},"include")," field."),(0,a.kt)("li",{parentName:"ul"},"Fix any broken ",(0,a.kt)("inlineCode",{parentName:"li"},"import")," statements.")),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/2316/files"},"pull request #2316")," shows how we updated our example applications; you can use it as a reference guide. "),(0,a.kt)("h2",{id:"other-updates"},"Other Updates"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can now disable the OpenAPI spec endpoints (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"/openapi.json"),") which will also disable the ",(0,a.kt)("inlineCode",{parentName:"p"},"/explorer")," endpoint by setting your rest's ",(0,a.kt)("inlineCode",{parentName:"p"},"openApiSpec.disabled")," option to true. See ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Server.html#customize-how-openapi-spec-is-served"},"Customize How OpenAPI Spec is Served")," for more ",(0,a.kt)("inlineCode",{parentName:"p"},"rest.openApiSpec")," options. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/2470"},"PR #2470"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Another ",(0,a.kt)("inlineCode",{parentName:"p"},"rest")," option introduced is ",(0,a.kt)("inlineCode",{parentName:"p"},"requestBodyParser"),", so you can now ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Server.html#configure-the-request-body-parser-options"},"configure the request body parser"),". ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/2432"},"PR #2432"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"LoopBack cares a lot about your security. A security issue related to ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON.parse()")," was ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/hapijs/bourne#introduction"},"discovered")," and this PR added a sanitizer for JSON. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/2348"},"PR #2348"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Now you can override the default ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Server.html#express-settings"},"Express settings")," and also add your own. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/2423"},"PR #2423"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can now use a custom repository base class in your LoopBack application. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/2235"},"PR #2235"),"."))),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("p",null,"This month, the team went to downtown Toronto for a ",(0,a.kt)("a",{parentName:"p",href:"https://www.meetup.com/Toronto-Cloud-Integration-Meetup/events/257171001/"},"meetup"),". This included an overview of LoopBack 4, along with demonstrations of what LoopBack 4 can do. Check out the ",(0,a.kt)("a",{parentName:"p",href:"https://strongloop.com/strongblog/watch-meetup-quickly-build-apis-with-loopback/"},"blog post")," about it. There was also a ",(0,a.kt)("a",{parentName:"p",href:"https://developer.ibm.com/tutorials/create-rest-apis-minutes-with-loopback-4/"},"Quick Lab")," and ",(0,a.kt)("a",{parentName:"p",href:"https://myibm.ibm.com/events/think/all-sessions/session/7764A"},"Master Class session")," for LoopBack 4 in IBM's Code@Think in mid-February. And finally, ",(0,a.kt)("a",{parentName:"p",href:"https://strongloop.com/authors/Raymond_Feng/"},"Raymond")," presented at DeveloperWeek 2019 where he talked about ",(0,a.kt)("a",{parentName:"p",href:"https://developerweek2019.sched.com/event/JXDc/pro-talk-speed-and-scale-building-apis-with-nodejs-typescript-and-loopback"},"Building APIs with Node.js, TypeScript, and LoopBack"),"."),(0,a.kt)("p",null,"If you want to come to our future events, keep an eye out on the ",(0,a.kt)("a",{parentName:"p",href:"https://strongloop.com/strongblog/"},"Strongblog")," for announcements."),(0,a.kt)("h2",{id:"community-contributions"},"Community Contributions"),(0,a.kt)("p",null,"As the number of contributions from our community rises, we are spending an increasing part of our time on reviewing these pull requests and helping our volunteers to get their changes landed. In fact, every fifth pull request opened this month was contributed by you! Check out the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pulls?q=is%3Apr+is%3Aopen+label%3Acommunity-contribution"},"community-contribution label")," to see pull requests by the community."),(0,a.kt)("p",null,"We would like to take a moment to thank everyone who has submitted a pull request; the team really appreciates your contributions."),(0,a.kt)("p",null,"There are also other ways for getting involved beyond code contributions. Triaging issues and reviewing pull requests are examples of activities that would help us to accelerate the success of LoopBack as an open-source project. You can learn more about different contribution opportunities in ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/contrib/index.html"},"Contributing to LoopBack"),"."),(0,a.kt)("h2",{id:"call-to-action"},"Call to Action"),(0,a.kt)("p",null,"LoopBack's future success depends on you. We appreciate your continuous support and engagement to make LoopBack even better and meaningful for your API creation experience. Please join us and help the project by:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues"},"Reporting issues"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/blob/master/docs/CONTRIBUTING.md"},"Contributing"),"\ncode and documentation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/labels/good%20first%20issue"},'Opening a pull request on one of our "good first issues"'),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues/110"},"Joining")," our user group.")))}d.isMDXComponent=!0}}]);