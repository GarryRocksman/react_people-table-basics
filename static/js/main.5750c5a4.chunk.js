(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{39:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var n=c(28),a=c(12),r=(c(37),c(38),c(39),c(3)),s=c(2),j=function(){return Object(s.jsx)("h1",{className:"title",children:"Home Page"})},i=c(4),l=c(7),o=c(5),b=c(0),d=c.n(b),h=c(11),O=c.n(h),x="https://mate-academy.github.io/react_people-table/api/people.json";function u(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch(x)})).then((function(e){return e.json()}));var e}var p=function(e){var t=e.person,c=t.slug,n=t.sex,r=t.name;return Object(s.jsx)(a.b,{to:"/people/".concat(c),className:O()({"has-text-danger":"f"===n}),children:r})},m=d.a.memo((function(e){var t=e.people,c=Object(r.p)().slug;return Object(s.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Name"}),Object(s.jsx)("th",{children:"Sex"}),Object(s.jsx)("th",{children:"Born"}),Object(s.jsx)("th",{children:"Died"}),Object(s.jsx)("th",{children:"Mother"}),Object(s.jsx)("th",{children:"Father"})]})}),Object(s.jsx)("tbody",{children:t.map((function(e){var t=e.fatherName||"-",n=e.motherName||"-";return Object(s.jsxs)("tr",{"data-cy":"person",className:O()({"has-background-warning":c===e.slug}),children:[Object(s.jsx)("td",{children:Object(s.jsx)(p,{person:e})}),Object(s.jsx)("td",{children:e.sex}),Object(s.jsx)("td",{children:e.born}),Object(s.jsx)("td",{children:e.died}),Object(s.jsx)("td",{children:e.mother?Object(s.jsx)(p,{person:e.mother}):Object(s.jsx)("p",{children:n})}),Object(s.jsx)("td",{children:e.father?Object(s.jsx)(p,{person:e.father}):Object(s.jsx)("p",{children:t})})]},e.slug)}))})]})})),f=(c(41),function(){return Object(s.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(s.jsx)("div",{className:"Loader__content"})})}),v=c(26),g=function(e){return e.map((function(t){return Object(v.a)(Object(v.a)({},t),{},{mother:e.find((function(e){var c;return 0===(null===(c=t.motherName)||void 0===c?void 0:c.localeCompare(e.name))?e:0})),father:e.find((function(e){var c;return 0===(null===(c=t.fatherName)||void 0===c?void 0:c.localeCompare(e.name))?e:0}))})}))},N=function(){var e=Object(b.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],a=Object(b.useState)(!1),r=Object(o.a)(a,2),j=r[0],d=r[1],h=Object(b.useState)(!1),x=Object(o.a)(h,2),p=x[0],v=x[1],N=Object(b.useCallback)(Object(l.a)(Object(i.a)().mark((function e(){var t;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(!0),e.next=4,u();case 4:t=e.sent,n(g(t)),v(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),d(!0),v(!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])}))),[]);return Object(b.useEffect)((function(){N()}),[]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{className:"title",children:"People Page"}),Object(s.jsx)("div",{className:"block",children:Object(s.jsx)("div",{className:"box table-container",children:p?Object(s.jsx)(f,{}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("p",{"data-cy":"peopleLoadingError",className:O()("has-text-danger",{"is-hidden":!j}),children:"Something went wrong"}),Object(s.jsx)("p",{"data-cy":"noPeopleMessage",className:O()({"is-hidden":!!c.length}),children:"There are no people on the server"}),!!c.length&&Object(s.jsx)(m,{people:c})]})})})]})},w=function(e){var t=e.to,c=e.text;return Object(s.jsx)(a.c,{className:function(e){var t=e.isActive;return O()("navbar-item",{"has-background-grey-lighter":t})},to:t,children:c})},y=function(){return Object(s.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"navbar-brand",children:[Object(s.jsx)(w,{to:"/",text:"Home"}),Object(s.jsx)(w,{to:"/people",text:"People"})]})})})},k=function(){return Object(s.jsx)("h1",{className:"title",children:"Page not found"})},P=function(){return Object(s.jsxs)("div",{"data-cy":"app",children:[Object(s.jsx)(y,{}),Object(s.jsx)("main",{className:"section",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)(r.d,{children:[Object(s.jsx)(r.b,{path:"/",element:Object(s.jsx)(j,{})}),Object(s.jsxs)(r.b,{path:"people",children:[Object(s.jsx)(r.b,{index:!0,element:Object(s.jsx)(N,{})}),Object(s.jsx)(r.b,{path:":slug",element:Object(s.jsx)(N,{})})]}),Object(s.jsx)(r.b,{path:"*",element:Object(s.jsx)(k,{})}),Object(s.jsx)(r.b,{path:"/home",element:Object(s.jsx)(r.a,{to:"/",replace:!0})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(s.jsx)(a.a,{children:Object(s.jsx)(P,{})}))}},[[42,1,2]]]);
//# sourceMappingURL=main.5750c5a4.chunk.js.map