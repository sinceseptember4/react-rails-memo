(this["webpackJsonpreact-rails-memo"]=this["webpackJsonpreact-rails-memo"]||[]).push([[0],{27:function(t,e){},61:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),s=n(26),r=n.n(s),o=n(10),i=n(2),j=n(27),h=n(17),u=n(14),l=n.n(u),b=n(1),d=function(){var t=Object(c.useState)(""),e=Object(h.a)(t,2),n=e[0],a=e[1],s=Object(c.useState)([]),r=Object(h.a)(s,2),o=r[0],j=r[1],u=Object(i.g)(),d=Object(i.f)();console.log(u),l.a.get("/users/".concat(u.state)).then((function(t){return j(t.data)})).catch((function(t){return console.log(t)}));return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:o.name}),Object(b.jsx)("input",{value:n,onChange:function(t){a(t.target.value)},children:o.name}),Object(b.jsx)("button",{onClick:function(){l.a.patch("https://jsonplaceholder.typicode.com/users/".concat(u.state),{name:n}).then(d.push("/")).catch((function(t){return console.log(t)}))},children:"\u7de8\u96c6"})]})};var O=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"aaa"}),Object(b.jsxs)(o.a,{children:[Object(b.jsx)(o.b,{to:"/",children:"\u623b\u308b"}),Object(b.jsx)(o.b,{to:"/edit",children:"\u7de8\u96c6"}),Object(b.jsxs)(i.c,{children:[Object(b.jsx)(i.a,{exact:!0,path:"/",children:Object(b.jsx)(j.Main,{})}),Object(b.jsx)(i.a,{path:"/edit",children:Object(b.jsx)(d,{})})]})]})]})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),s(t),r(t)}))};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),x()}},[[61,1,2]]]);
//# sourceMappingURL=main.8e3f0fed.chunk.js.map