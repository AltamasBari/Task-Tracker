(this["webpackJsonptask-tracker"]=this["webpackJsonptask-tracker"]||[]).push([[0],{16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(9),s=n.n(c),o=(n(16),n(6)),i=n(11),u=n(2),d=n.n(u),j=n(4),l=n(3),b=n(0);var f=function(e){var t=e.color,n=e.text,r=e.onClick;return Object(b.jsx)("button",{onClick:r,style:{backgroundColor:t},className:"btn",children:n})};var p=function(e){var t=e.onAdd,n=e.showAdd;return Object(b.jsxs)("header",{className:"header",children:[Object(b.jsx)("h1",{children:"Task Tracker"}),Object(b.jsx)(f,{color:n?"red":"green",text:n?"Close":"Add",onClick:t})]})},h=n(10);var m=function(e){var t=e.task,n=e.onDelete,r=e.onToggle;return Object(b.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return r(t.id)},children:[Object(b.jsxs)("h3",{children:[t.text," ",Object(b.jsx)(h.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(b.jsx)("p",{children:t.day})]})};var O=function(e){var t=e.tasks,n=e.onDelete,r=e.onToggle;return Object(b.jsx)(b.Fragment,{children:t.map((function(e,t){return Object(b.jsx)(m,{task:e,onDelete:n,onToggle:r},t)}))})};var x=function(e){var t=e.onAdd,n=Object(r.useState)(""),a=Object(l.a)(n,2),c=a[0],s=a[1],o=Object(r.useState)(""),i=Object(l.a)(o,2),u=i[0],d=i[1],j=Object(r.useState)(!1),f=Object(l.a)(j,2),p=f[0],h=f[1];return Object(b.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),c?(t({text:c,day:u,reminder:p}),s(""),d(""),h(!1)):alert("Please add a task")},children:[Object(b.jsxs)("div",{className:"form-control",children:[Object(b.jsx)("label",{children:"Task"}),Object(b.jsx)("input",{type:"text",placeholder:"Add Task",value:c,onChange:function(e){return s(e.target.value)}})]}),Object(b.jsxs)("div",{className:"form-control",children:[Object(b.jsx)("label",{children:"Day & Time"}),Object(b.jsx)("input",{type:"text",placeholder:"Add Day & Time",value:u,onChange:function(e){return d(e.target.value)}})]}),Object(b.jsxs)("div",{className:"form-control form-control-check",children:[Object(b.jsx)("label",{children:"Set Reminder"}),Object(b.jsx)("input",{type:"checkbox",checked:p,value:p,onChange:function(e){return h(e.currentTarget.checked)}})]}),Object(b.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})};var v=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)([]),s=Object(l.a)(c,2),u=s[0],f=s[1];Object(r.useEffect)((function(){(function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var h=function(){var e=Object(j.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://my-json-server.typicode.com/altamasbari/db.json/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(j.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://my-json-server.typicode.com/altamasbari/db.json/tasks/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(j.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://my-json-server.typicode.com/altamasbari/db.json/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,f([].concat(Object(i.a)(u),[r]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://my-json-server.typicode.com/altamasbari/db.json/tasks/".concat(t),{method:"DELETE"});case 2:f(u.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(j.a)(d.a.mark((function e(t){var n,r,a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t);case 2:return n=e.sent,r=Object(o.a)(Object(o.a)({},n),{},{reminder:!n.reminder}),e.next=6,fetch("https://my-json-server.typicode.com/altamasbari/db.json/tasks/".concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(r)});case 6:return a=e.sent,e.next=9,a.json();case 9:c=e.sent,f(u.map((function(e){return e.id===t?Object(o.a)(Object(o.a)({},e),{},{reminder:c.reminder}):e})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(p,{onAdd:function(){return a(!n)},showAdd:n}),n&&Object(b.jsx)(x,{onAdd:v}),u.length>0?Object(b.jsx)(O,{tasks:u,onDelete:k,onToggle:y}):"No Tasks To Show"]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),k()}},[[19,1,2]]]);
//# sourceMappingURL=main.71803019.chunk.js.map