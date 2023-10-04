"use strict";(self.webpackChunkloopback_blog=self.webpackChunkloopback_blog||[]).push([[1029],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?o.createElement(h,r(r({ref:t},u),{},{components:n})):o.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4943:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const i={title:"LoopBack 4 July 2020 Milestone Update",date:new Date("2020-08-05T00:00:00.000Z"),authors:"agnes512",slug:"july-2020-milestone",tags:["Milestone update"]},r=void 0,l={permalink:"/blog/july-2020-milestone",editUrl:"https://github.com/loopbackio/loopback-blog/blog/2020/2020-08-05-july-milestone.md",source:"@site/blog/2020/2020-08-05-july-milestone.md",title:"LoopBack 4 July 2020 Milestone Update",description:"Originally published on strongloop.com",date:"2020-08-05T00:00:00.000Z",formattedDate:"August 5, 2020",tags:[{label:"Milestone update",permalink:"/blog/tags/milestone-update"}],readingTime:5.975,hasTruncateMarker:!0,authors:[{name:"Agnes Lin",title:"LoopBack Maintainer",url:"https://github.com/agnes512",imageURL:"https://avatars3.githubusercontent.com/u/50331796",key:"agnes512"}],frontMatter:{title:"LoopBack 4 July 2020 Milestone Update",date:"2020-08-05T00:00:00.000Z",authors:"agnes512",slug:"july-2020-milestone",tags:["Milestone update"]},prevItem:{title:"Community Q&A Monthly Digest - July 2020",permalink:"/blog/2020-jul-slack-qa"},nextItem:{title:"Making Your Contribution Process Simpler - Switching from CLA to DCO",permalink:"/blog/switching-to-dco"}},s={authorsImageUrls:[void 0]},p=[{value:"HasManyThrough Relation",id:"hasmanythrough-relation",level:2},{value:"Documentation",id:"documentation",level:3},{value:"CLI Command",id:"cli-command",level:3},{value:"Documentation Enhancements",id:"documentation-enhancements",level:2},{value:"Apply JWT Authentication Component to Shopping Example",id:"apply-jwt-authentication-component-to-shopping-example",level:3},{value:"How to Access Multiple Models in a Single Transaction",id:"how-to-access-multiple-models-in-a-single-transaction",level:3},{value:"Custom AJV Validation",id:"custom-ajv-validation",level:3},{value:"Reorganize Code and Docs Along Abstraction Levels",id:"reorganize-code-and-docs-along-abstraction-levels",level:2},{value:"Execute Raw NoSQL Queries",id:"execute-raw-nosql-queries",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Unable to Perform Nested Filters",id:"unable-to-perform-nested-filters",level:3},{value:"Query with Dollar Signs in MongoDB Connector",id:"query-with-dollar-signs-in-mongodb-connector",level:3},{value:"Community Contribution",id:"community-contribution",level:2},{value:"New Community Maintainers",id:"new-community-maintainers",level:3},{value:"Highlights",id:"highlights",level:3},{value:"What&#39;s Next?",id:"whats-next",level:2},{value:"Call to Action",id:"call-to-action",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Originally published on ",(0,a.kt)("a",{parentName:"em",href:"https://strongloop.com"},"strongloop.com"))),(0,a.kt)("p",null,"We can't believe that it is already August! Let's check out the work we did in July:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#hasmanythrough-relation"},"HasManyThrough Relation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#documentation-enhancements"},"Documentation Enhancements")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#reorganize-code-and-docs-along-abstraction-levels"},"Reorganize Code and Docs Along Abstraction Levels")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#bug-fixes"},"Bug Fixes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#community-contribution"},"Community Contribution"))),(0,a.kt)("h2",{id:"hasmanythrough-relation"},"HasManyThrough Relation"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"HasManyThrough")," relation sets up a many-to-many connection through another model. A real-world example is a doctor has many patients through appointments. The relation can be defined with ",(0,a.kt)("inlineCode",{parentName:"p"},"@hasMany")," decorator as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"  //...\n  @hasMany(() => Patient, {through: {model: () => Appointment}})\n  patients: Patient[];\n")),(0,a.kt)("p",null,"We finished most of implementation in June, and we added ",(0,a.kt)("inlineCode",{parentName:"p"},"HasManyThrough")," to the relation CLI and also related documentation so that users could learn it better. Please make sure you have ",(0,a.kt)("inlineCode",{parentName:"p"},"@loopback/repository")," with version 2.10.0 or higher installed."),(0,a.kt)("h3",{id:"documentation"},"Documentation"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/HasManyThrough-relation.html"},(0,a.kt)("inlineCode",{parentName:"a"},"hasManyThrough")," Relation")," page is being added under ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Relations.html"},"Relations")," page. We introduced the use cases, definitions, and examples of how you can customize the relation to meet your requirements. Nevertheless, as mentioned in the docs, because it is an experimental feature, there are some missing functionalities such as ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/5946"},(0,a.kt)("inlineCode",{parentName:"a"},"inclusionResolver")),". Feel free to join discussions on GitHub or even contribute :D"),(0,a.kt)("h3",{id:"cli-command"},"CLI Command"),(0,a.kt)("p",null,"Command line interfaces (CLI) is a convenient tool to help you create artifacts quickly. We added ",(0,a.kt)("inlineCode",{parentName:"p"},"hasManyThrough")," relation to ",(0,a.kt)("inlineCode",{parentName:"p"},"lb4 relation")," command. With a few prompts, you can define a ",(0,a.kt)("inlineCode",{parentName:"p"},"hasManyThrough")," relation easily:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ lb4 relation\n? Please select the relation type hasManyThrough\n? Please select source model Doctor\n? Please select target model Patient\n? Please select through model Appointment\n? Foreign key name that references the source model to define on the through model\n doctorId\n? Foreign key name that references the target model to define on the through model\n patientId\n? Source property name for the relation getter (will be the relation name)\n patients\n")),(0,a.kt)("p",null,"Don't forget to install the latest ",(0,a.kt)("inlineCode",{parentName:"p"},"@loopback/cli")," to try it out!"),(0,a.kt)("h2",{id:"documentation-enhancements"},"Documentation Enhancements"),(0,a.kt)("p",null,"One of our recent targets is to upgrade the documentation system. As you can see on the site, we reorganized most of the items in sidebar. In the overview page, the section ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/index.html#how-is-our-documentation-organized"},"How is our documentation organized")," introduces how you can find documentation in the four quadrants."),(0,a.kt)("p",null,"Besides improving the structure, here are some documentation enhancements we'd like to share:"),(0,a.kt)("h3",{id:"apply-jwt-authentication-component-to-shopping-example"},"Apply JWT Authentication Component to Shopping Example"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/extensions/authentication-jwt"},(0,a.kt)("inlineCode",{parentName:"a"},"@loopback/authentication-jwt"))," component was created to make adding JWT authentication to your application earlier. We've applied it to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback4-example-shopping"},"shopping example"),". To find out more, see the ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/JWT-authentication-extension.html"},"JWT authentication extension documentation page"),"."),(0,a.kt)("h3",{id:"how-to-access-multiple-models-in-a-single-transaction"},"How to Access Multiple Models in a Single Transaction"),(0,a.kt)("p",null,"A ",(0,a.kt)("em",{parentName:"p"},"transaction")," is a sequence of data operations performed as a single logical\nunit of work. LoopBack 4 has many relational database connectors support such logic requirements. We added a section ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Using-database-transactions.html#accessing-multiple-models-inside-one-transaction"},"Accessing multiple models inside one transaction")," to show how it can be achieved."),(0,a.kt)("h3",{id:"custom-ajv-validation"},"Custom AJV Validation"),(0,a.kt)("p",null,"We realized that the current AJV Validation documentation is missing a crucial information piece on how to enable custom validation and error messages. Please check out the section ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Model.html#custom-validation-rules-and-error-messages"},"Custom validation rules and error messages")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/examples/validation-app"},"Validation example")," for details."),(0,a.kt)("h2",{id:"reorganize-code-and-docs-along-abstraction-levels"},"Reorganize Code and Docs Along Abstraction Levels"),(0,a.kt)("p",null,"As LoopBack 4 is growing larger, we decide to hide some low-level tools from users so that the framework looks neat and friendly. In July, we hid module ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/packages/openapi-v3"},(0,a.kt)("inlineCode",{parentName:"a"},"@loopback/openapi-v3"))," as it can be loaded from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/packages/rest"},(0,a.kt)("inlineCode",{parentName:"a"},"@loopback/rest")),"."),(0,a.kt)("p",null,"We removed ",(0,a.kt)("inlineCode",{parentName:"p"},"@loopback/openapi-v3")," from dependencies and also our CLI template dependencies. If you check the page ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Extending-OpenAPI-specification.html"},"Extending OpenAPI Specification")," or other related pages, you will notice it is now hidden and replaced by ",(0,a.kt)("inlineCode",{parentName:"p"},"@loopback/rest"),"."),(0,a.kt)("h2",{id:"execute-raw-nosql-queries"},"Execute Raw NoSQL Queries"),(0,a.kt)("p",null,"If you have a SQL database as back-end service, you can execute raw queries using the ",(0,a.kt)("inlineCode",{parentName:"p"},"execute")," method that we have in ",(0,a.kt)("inlineCode",{parentName:"p"},"Repository"),", and it works great. Unfortunately, ",(0,a.kt)("inlineCode",{parentName:"p"},"execute")," does not work for NoSQL connectors such as MongoDB as they require more than just a ",(0,a.kt)("inlineCode",{parentName:"p"},"command")," string and ",(0,a.kt)("inlineCode",{parentName:"p"},"args")," array."),(0,a.kt)("p",null,"In July, we started working on how we can improve LB4 API and MongoDB connector API to make it easy to execute raw MongoDB commands. We added a ",(0,a.kt)("inlineCode",{parentName:"p"},"DataSource.execute")," method to the Juggler, and leveraged it to support different ",(0,a.kt)("inlineCode",{parentName:"p"},"execute")," styles. We also added support for non-SQL variants of ",(0,a.kt)("inlineCode",{parentName:"p"},"Repository.execute()")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"loopback/repository")," module. More works will be done in August. You can check the progress in story ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/3342"},"Execute raw NoSQL queries")," on GitHub if you're interested."),(0,a.kt)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,a.kt)("p",null,"There was a story that a boy woke up in one morning and found himself transformed into a gigantic bug. We don't want that to happen, so we fixed a few bugs in July:"),(0,a.kt)("h3",{id:"unable-to-perform-nested-filters"},"Unable to Perform Nested Filters"),(0,a.kt)("p",null,"As we added the support for coercing query object with schema last month, it exposed a bug that the nested scope filters don't have the correct constraints. It is being fixed and released in ",(0,a.kt)("inlineCode",{parentName:"p"},"@loopback/rest@5.2.1"),". Now you can include nested navigational properties using filter like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'{\n  include: [\n    {\n      relation: "orders",\n      scope: {\n        // nested relation\n        include: [\n          {\n            relation: "someOtherRelation",\n          },\n  ...\n}\n')),(0,a.kt)("h3",{id:"query-with-dollar-signs-in-mongodb-connector"},"Query with Dollar Signs in MongoDB Connector"),(0,a.kt)("p",null,"If you're using MongoDB, you would be used to have dollar signs ($) in your queries. However, the dollar signs are not needed in LB4 general queries, and that's why ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-connector-mongodb"},"loopback-mongodb-connector")," users get confused usually. To improve the user experience, we made some changes in the connector ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-connector-mongodb"},"loopback-mongodb-connector"),", so that the connector users won't get errors even if the queries contain extra dollar signs. The change is released in ",(0,a.kt)("inlineCode",{parentName:"p"},"@loopback-connector-mongodb@5.3.0")),(0,a.kt)("h2",{id:"community-contribution"},"Community Contribution"),(0,a.kt)("h3",{id:"new-community-maintainers"},"New Community Maintainers"),(0,a.kt)("p",null,"We are glad to have ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nabdelgadir"},"@nabdelgadir")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/madaky"},"@madaky")," to be one of our community maintainers. We appreciate your great work you've done and welcome to the team."),(0,a.kt)("h3",{id:"highlights"},"Highlights"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"As LoopBack 4 is designed to be more scalable and extensible, there are numbers of extensions created by the open source community. You may find some interesting and helpful extensions under the ",(0,a.kt)("a",{parentName:"li",href:"https://loopback.io/doc/en/lb4/Community-extensions.html"},"Community extensions")," page. We are also considering adding example usages of LB4 from the community. Please let us know if you got any great extensions or examples you would like to share with us!"),(0,a.kt)("li",{parentName:"ul"},"The community user ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/zyqVizzzzz"},"@zyqVizzzzz")," translated several tutorials for LB4 in Chinese. They can be found in the page ",(0,a.kt)("a",{parentName:"li",href:"https://loopback.io/doc/zh/lb4/Tutorials"},"\u6559\u7a0b\uff08Tutorials\uff09"),". We really appreciate it! If you're interested in translating LB4 documentation, the instructions can be found in the page ",(0,a.kt)("a",{parentName:"li",href:"https://loopback.io/doc/en/contrib/translation.html"},"Translation"),".")),(0,a.kt)("p",null,"In order to make your contribution process simpler, we will be gradually changing the contribution method from Contribution License Agreement (CLA) to Developer Certificate of Origin (DCO). Take a look at ",(0,a.kt)("a",{parentName:"p",href:"https://strongloop.com/strongblog/switching-to-dco/"},"this blog")," to find out what the changes are and what it means to you."),(0,a.kt)("h2",{id:"whats-next"},"What's Next?"),(0,a.kt)("p",null,"If you're interested in what we're working on next, you can check out the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/6028"},"August Milestone"),"."),(0,a.kt)("h2",{id:"call-to-action"},"Call to Action"),(0,a.kt)("p",null,"In 2020, we look forward to helping you and seeing you around! LoopBack's success depends on you. We appreciate your continuous support and engagement to make LoopBack even better and meaningful for your API creation experience. Here's how you can join us and help the project:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues"},"Report issues"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/blob/master/docs/CONTRIBUTING.md"},"Contribute")," code and documentation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/labels/good%20first%20issue"},'Open a pull request on one of our "good first issues"'),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues/110"},"Join")," our user group.")))}m.isMDXComponent=!0}}]);