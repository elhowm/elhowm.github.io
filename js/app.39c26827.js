(function(e){function t(t){for(var a,o,l=t[0],s=t[1],c=t[2],u=0,m=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);d&&d(t);while(m.length)m.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,l=1;l<n.length;l++){var s=n[l];0!==i[s]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},i={app:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("8a23"),i=n.n(a);i.a},"49f8":function(e,t,n){var a={"./en.json":"edd4"};function i(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=r,e.exports=i,i.id="49f8"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-content",{attrs:{fluid:""}},[n("CV")],1)],1)},r=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{staticClass:"ma-2",attrs:{justify:"center"}},[n("v-col",{staticClass:"cols-12 col-lg-10 col-xl-6"},[n("v-row",[n("v-col",{staticClass:"col-12 col-md-6"},[n("p",{staticClass:"display-1"},[e._v(e._s(e.$t("name")))]),n("p",{staticClass:"headline"},[e._v(e._s(e.$t("position")))])]),n("v-col",{staticClass:"col-12 col-md-6"},[n("p",[e._v(e._s(e.$t("overview")))])])],1),n("v-row",[n("v-col",{staticClass:"col-12 col-md-4"},[n("Contacts"),n("v-spacer"),n("Skills")],1),n("v-col",{staticClass:"col-12 col-md-8"},[n("Experience"),n("v-spacer"),n("Education"),n("v-spacer"),n("Interests")],1)],1)],1)],1)},l=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-title",[e._v("Contacts")]),n("v-card-text",[n("v-divider"),e._l(e.$t("contacts"),(function(t){return n("p",{key:t.value},[n("v-icon",{attrs:{small:""}},[e._v(e._s(t.icon))]),e._v(" "),t.link?n("a",{attrs:{href:t.link}},[e._v(e._s(t.value))]):n("span",[e._v(e._s(t.value))])],1)}))],2)],1)},c=[],d=n("2877"),u=n("6544"),m=n.n(u),v=n("b0af"),p=n("99d9"),f=n("ce7e"),b=n("132d"),h={},g=Object(d["a"])(h,s,c,!1,null,null,null),k=g.exports;m()(g,{VCard:v["a"],VCardText:p["a"],VCardTitle:p["b"],VDivider:f["a"],VIcon:b["a"]});var w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-title",[e._v("Skills")]),n("v-card-text",[n("v-divider"),e._l(e.$t("skills"),(function(t){return n("v-row",{key:t.name},[n("v-col",[n("v-icon",{attrs:{small:""}},[e._v(e._s(t.icon||"mdi-bookshelf"))]),e._v(" "),n("span",[e._v(e._s(t.name))])],1),n("v-col",{staticClass:"text-right"},[e._l(t.power,(function(t){return n("v-icon",{key:"full-"+t},[e._v("mdi-flask-empty")])})),e._l(5-t.power,(function(t){return n("v-icon",{key:"empty-"+t},[e._v("mdi-flask-empty-outline")])}))],2)],1)}))],2)],1)},y=[],_=n("62ad"),V=n("0fd9"),R={},x=Object(d["a"])(R,w,y,!1,null,null,null),C=x.exports;m()(x,{VCard:v["a"],VCardText:p["a"],VCardTitle:p["b"],VCol:_["a"],VDivider:f["a"],VIcon:b["a"],VRow:V["a"]});var j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-title",[e._v("Experience")]),n("v-card-text",[n("v-divider"),n("v-timeline",{attrs:{right:"",dense:""}},e._l(e.$t("timeline"),(function(t){return n("v-timeline-item",{key:t.timeframe,attrs:{"fill-dot":"",small:"",color:"blue-grey darken-2"}},[n("v-card",{staticClass:"elevation-2"},[n("v-card-title",{staticClass:"headline"},[e._v(" "+e._s(t.title)+" ")]),n("v-card-text",[n("p",[n("b",[e._v(e._s(t.timeframe))])]),n("p",[e._v(e._s(t.description))])])],1)],1)})),1)],1)],1)},O=[],S=n("8414"),T=n("1e06"),A={},E=Object(d["a"])(A,j,O,!1,null,null,null),P=E.exports;m()(E,{VCard:v["a"],VCardText:p["a"],VCardTitle:p["b"],VDivider:f["a"],VTimeline:S["a"],VTimelineItem:T["a"]});var D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-title",[e._v("Education")]),n("v-card-text",[n("v-divider"),n("v-timeline",{attrs:{right:"",dense:""}},e._l(e.$t("education"),(function(t){return n("v-timeline-item",{key:t.timeframe,attrs:{"fill-dot":"",small:"",color:"blue-grey darken-2"}},[n("v-card",{staticClass:"elevation-2"},[n("v-card-title",{staticClass:"headline"},[e._v(" "+e._s(t.title)+" ")]),n("v-card-text",[n("p",[n("b",[e._v(e._s(t.timeframe))])]),n("p",[e._v(e._s(t.description))])])],1)],1)})),1)],1)],1)},$=[],I={},N=Object(d["a"])(I,D,$,!1,null,null,null),M=N.exports;m()(N,{VCard:v["a"],VCardText:p["a"],VCardTitle:p["b"],VDivider:f["a"],VTimeline:S["a"],VTimelineItem:T["a"]});var F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-title",[e._v("Interests")]),n("v-card-text",[n("v-divider"),e._l(e.$t("interests"),(function(t){return n("p",{key:t.name},[n("v-icon",[e._v(e._s(t.icon))]),e._v(" "+e._s(t.name)+" ")],1)}))],2)],1)},L=[],z={},B=Object(d["a"])(z,F,L,!1,null,null,null),J=B.exports;m()(B,{VCard:v["a"],VCardText:p["a"],VCardTitle:p["b"],VDivider:f["a"],VIcon:b["a"]});var q={name:"cv",components:{Contacts:k,Skills:C,Experience:P,Education:M,Interests:J}},U=q,W=n("2fa4"),K=Object(d["a"])(U,o,l,!1,null,null,null),Q=K.exports;m()(K,{VCol:_["a"],VRow:V["a"],VSpacer:W["a"]});var Y={name:"App",components:{CV:Q},created:function(){document.title=this.$t("name")}},G=Y,Z=(n("034f"),n("7496")),H=n("a75b"),X=Object(d["a"])(G,i,r,!1,null,null,null),ee=X.exports;m()(X,{VApp:Z["a"],VContent:H["a"]});var te=n("f309");a["a"].use(te["a"]);var ne=new te["a"]({}),ae=(n("4160"),n("d3b7"),n("ac1f"),n("466d"),n("159b"),n("ddb0"),n("a925"));function ie(){var e=n("49f8"),t={};return e.keys().forEach((function(n){var a=n.match(/([A-Za-z0-9-_]+)\./i);if(a&&a.length>1){var i=a[1];t[i]=e(n)}})),t}a["a"].use(ae["a"]);var re=new ae["a"]({locale:"en",fallbackLocale:"en",messages:ie()});a["a"].config.productionTip=!1,new a["a"]({vuetify:ne,i18n:re,render:function(e){return e(ee)},mounted:function(){return document.dispatchEvent(new Event("x-app-rendered"))}}).$mount("#app")},"8a23":function(e,t,n){},edd4:function(e){e.exports=JSON.parse('{"name":"Rostyslav Ros Safonov","position":"Ruby developer","overview":"Really love to use style guides, best practices solutions, design patterns etc. Like to work with and write simple, understandable code. A big fan of using time management(pomodoro) what helps me to get result in desired timeframe. Always interested in to work with new projects in friendly team. Often work with clients dirretly (self-manager) without any problems.","contacts":[{"icon":"mdi-link-variant","value":"elhowm.github.io","link":"https://elhowm.github.io/"},{"icon":"mdi-email","value":"elhowm@gmail.com","link":"mailto:elhowm@gmail.com"},{"icon":"mdi-phone","value":"+38 (093) 466 98 99","link":"tel:+380934669899"},{"icon":"mdi-github","value":"elhowm","link":"https://github.com/elhowm"},{"icon":"mdi-telegram","value":"knockfog","link":"https://t.me/knockfog"}],"skills":[{"name":"Ruby","power":5,"icon":"mdi-language-ruby"},{"name":"Ruby on Rails","power":5,"icon":"mdi-language-ruby-on-rails"},{"name":"Rspec","power":5},{"name":"Sidekiq","power":5},{"name":"PostgreSQL","power":4,"icon":"mdi-database"},{"name":"Redis","power":4,"icon":"mdi-database"},{"name":"Vue.js","power":4,"icon":"mdi-vuejs"},{"name":"Docker","power":4,"icon":"mdi-docker"},{"name":"Digital Ocean","power":4,"icon":"mdi-digital-ocean"},{"name":"Sinatra","power":4},{"name":"Vuetify.js","power":3,"icon":"mdi-vuetify"},{"name":"AWS","power":3,"icon":"mdi-aws"},{"name":"Kubernetes","power":2,"icon":"mdi-kubernetes"},{"name":"Markup","power":2,"icon":"mdi-language-html5"}],"timeline":[{"timeframe":"APR 2020 - NOW","title":"Freelance full-stack developer","description":"Developing medical services marketplace. Rails backend & Vue.js (nuxt) frontend. Three separated front apps for: super-admin, clinic admin, customers. Docker deployment."},{"timeframe":"NOV 2019 - APR 2020","title":"Rails API & Vue.js developer(full-stack) at <NDA>","description":"Worked on building cryptocurrency exchange. Rails backend & Vue.js (nuxt) frontend. Encrypted data connection between different prject apps. Backgound jobs for fetching fresh prices."},{"timeframe":"MAY 2018 - NOV 2019","title":"Ruby on Rails full-stack developer at \\"KodoLabs\\"","description":"Worked on a different projects with different teams (building from \\"zero\\" & helping with existed apps). First Vue.js experience. Converted Rails native app into Rails API only & Vue.js frontend. API for mobile devices presented. DB views for statistic included. Docker deployment."},{"timeframe":"FEB 2017 - APR 2018","title":"Ruby on Rails backend developer at \\"Loomlogic\\"","description":"Almost all time worked on restful API for Angular 1.6 app. Also had a deal with Sidekiq background jobs, Redis, Amazon SES and S3, connecting to third party services. Did all tasks by using TDD and continuous integration. Created clear, understandable, SOLID code with rubocop verifying + avoiding callbacks and metaprogramming usage. Refactored a lot of bad legacy code. Team: 6 full stack devs, 3 QA, 1 manager, 4 mobile devs, 2 frontend devs"},{"timeframe":"NOV 2016 - FEB 2017","title":"Ruby on Rails full stack developer at \\"Gera-IT\\"","description":"Full stack tasks with RoR and Angular 1.6. Supported existing and developed new features like integrations with third party services(Pivotal, Jira, YouTrack and so on), refactoring and optimizing ruby code + DB queries for better performance. First continuous integration experience :) Team: 2 full stack devs, 1 QA, 1 manager"},{"timeframe":"APR 2016 - SEP 2016","title":"Ruby on Rails full stack developer at \\"Rexsoft\\"","description":"Developed e-commerce apps with microservices architecture(with Rails native frontend). Team: 3 full stack devs"},{"timeframe":"NOV 2014 - APR 2016","title":"Ruby on Rails full stack developer at \\"Softbistro\\"","description":"Developed CRM with Rails(Sidekiq, Redis, Amazon SES, Amazon S3) and native frontend. Team: 6 full stack devs, 1 manager"},{"timeframe":"SEP 2014 - NOV 2014","title":"Ruby on Rails full stack developer at \\"Tehnoprostir\\"","description":"Developed and supported e-commerce shop(with Rails native frontend). Team: 3 full stack devs"}],"education":[{"timeframe":"SEP 2012 - JUN 2016","title":"Khmelnitsky Polytechnical College","description":"Software engineering specialist diploma"}],"interests":[{"name":"Cycling","icon":"mdi-bicycle"},{"name":"SUP-Surfing","icon":"mdi-sail-boat"},{"name":"Board games","icon":"mdi-cards"},{"name":"Melomania","icon":"mdi-music-box"}]}')}});
//# sourceMappingURL=app.39c26827.js.map