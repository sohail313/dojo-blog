(this["webpackJsonpdojo-blog"]=this["webpackJsonpdojo-blog"]||[]).push([[0],{22:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),o=c(16),s=c.n(o),l=(c(22),c(7)),i=c(0),j=function(){return Object(i.jsxs)("nav",{className:"navbar",children:[Object(i.jsx)("h1",{children:"The Dojo Blog"}),Object(i.jsxs)("div",{className:"links",children:[Object(i.jsx)(l.b,{to:"/",children:"Home"}),Object(i.jsx)(l.b,{to:"/create",children:"New Blog"})]})]})},a=function(e){var t=e.blogs,c=e.title;return Object(i.jsxs)("div",{className:"blog-list",children:[Object(i.jsx)("h2",{children:c}),t.map((function(e){return Object(i.jsx)("div",{className:"blog-preview",children:Object(i.jsxs)(l.b,{to:"blogs/".concat(e.id),children:[Object(i.jsx)("h2",{children:e.title}),Object(i.jsxs)("p",{children:["Written by ",e.author]})]})},e.id)}))]})},b=c(8),d=function(e){var t=Object(n.useState)(null),c=Object(b.a)(t,2),r=c[0],o=c[1],s=Object(n.useState)(!0),l=Object(b.a)(s,2),i=l[0],j=l[1],a=Object(n.useState)(null),d=Object(b.a)(a,2),h=d[0],u=d[1];return Object(n.useEffect)((function(){var t=new AbortController;return setTimeout((function(){fetch(e,{signal:t.signal}).then((function(e){if(!e.ok)throw Error("Unable to fetch data from server");return e.json()})).then((function(e){o(e),j(!1),u(null)})).catch((function(e){"AbortError"===e.name?console.log("Fetch aborted"):(j(!1),u(e.message))}))}),1e3),function(){return t.abort()}}),[e]),{data:r,isPending:i,error:h}},h=function(){var e=d("http://localhost:8000/blogs"),t=e.data,c=e.isPending,n=e.error;return Object(i.jsxs)("div",{className:"home",children:[n&&Object(i.jsx)("div",{children:n}),c&&Object(i.jsx)("div",{children:"Loading..."}),t&&Object(i.jsx)(a,{blogs:t,title:"All Blogs!"})]})},u=c(2),O=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],r=t[1],o=Object(n.useState)(""),s=Object(b.a)(o,2),l=s[0],j=s[1],a=Object(n.useState)("mario"),d=Object(b.a)(a,2),h=d[0],O=d[1],x=Object(n.useState)(!1),g=Object(b.a)(x,2),f=g[0],v=g[1],p=Object(u.f)();return Object(i.jsxs)("div",{className:"create",children:[Object(i.jsx)("h2",{children:"Add a new blog"}),Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={title:c,body:l,author:h};v(!0),fetch("http://localhost:8000/blogs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){console.log("new blog added"),v(!1)})),p.push("/")},children:[Object(i.jsx)("label",{children:"Blog Title : "}),Object(i.jsx)("input",{type:"text",required:!0,value:c,onChange:function(e){return r(e.target.value)}}),Object(i.jsx)("label",{children:"Blog Body :"}),Object(i.jsx)("textarea",{required:!0,value:l,onChange:function(e){return j(e.target.value)}}),Object(i.jsx)("label",{children:"Blog Author : "}),Object(i.jsxs)("select",{value:h,onChange:function(e){return O(e.target.value)},children:[Object(i.jsx)("option",{value:"mario",children:"mario"}),Object(i.jsx)("option",{value:"yoshi",children:"yoshi"})]}),!f&&Object(i.jsx)("button",{children:"Add Blog"}),f&&Object(i.jsx)("button",{children:"Adding Blog..."})]})]})},x=function(){var e=Object(u.g)().id,t=d("http://localhost:8000/blogs/"+e),c=t.data,n=t.error,r=t.isPending,o=Object(u.f)();return Object(i.jsxs)("div",{className:"blog-details",children:[r&&Object(i.jsx)("div",{children:"Loading"}),n&&Object(i.jsx)("div",{children:n}),c&&Object(i.jsxs)("article",{children:[Object(i.jsx)("h2",{children:c.title}),Object(i.jsxs)("p",{children:["Written by ",c.author]}),Object(i.jsx)("div",{children:c.body}),Object(i.jsx)("button",{onClick:function(){fetch("http://localhost:8000/blogs/"+c.id,{method:"DELETE"}).then((function(){console.log("blog deleted"),o.push("/")}))},children:"delete"})]})]})},g=function(){return Object(i.jsxs)("div",{className:"not-found",children:[Object(i.jsx)("h2",{children:"Sorry"}),Object(i.jsx)("p",{children:"Page not found"}),Object(i.jsx)(l.b,{to:"/",children:"Back to Home"})]})};var f=function(){return Object(i.jsx)(l.a,{children:Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(j,{}),Object(i.jsx)("div",{className:"content",children:Object(i.jsxs)(u.c,{children:[Object(i.jsx)(u.a,{exact:!0,path:"/",children:Object(i.jsx)(h,{})}),Object(i.jsx)(u.a,{path:"/create",children:Object(i.jsx)(O,{})}),Object(i.jsx)(u.a,{path:"/blogs/:id",children:Object(i.jsx)(x,{})}),Object(i.jsx)(u.a,{path:"*",children:Object(i.jsx)(g,{})})]})})]})})};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.854b36e0.chunk.js.map