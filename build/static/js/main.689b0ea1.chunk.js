(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),c=a(6),l=a.n(c),s=(a(13),a(2)),r=(a(14),a(7)),i=function(e){var t=e.setInputText,a=e.todos,o=e.setTodos,c=e.inputText,l=e.setStatus;return n.a.createElement("form",null,n.a.createElement("input",{value:c,onChange:function(e){console.log(e.target.value),t(e.target.value)},type:"text",className:"todo-input"}),n.a.createElement("button",{onClick:function(e){e.preventDefault(),o([].concat(Object(r.a)(a),[{text:c,completed:!1,id:1e3*Math.random()}])),t("")},className:"todo-button",type:"submit"},n.a.createElement("i",{className:"fas fa-plus-square"})),n.a.createElement("div",{className:"select"},n.a.createElement("select",{onChange:function(e){l(e.target.value)},name:"todos",className:"filter-todo"},n.a.createElement("option",{value:"all"},"All"),n.a.createElement("option",{value:"completed"},"Completed"),n.a.createElement("option",{value:"uncompleted"},"Uncompleted"))))},u=a(4),m=function(e){var t=e.text,a=e.todo,o=e.todos,c=e.setTodos;return n.a.createElement("div",{className:"todo"},n.a.createElement("li",{className:"todo-item ".concat(a.completed?"completed":"")},t),n.a.createElement("button",{onClick:function(){c(o.map((function(e){return e.id===a.id?Object(u.a)(Object(u.a)({},e),{},{completed:!e.completed}):e})))},className:"complete-btn"},n.a.createElement("i",{className:"fas fa-check"})),n.a.createElement("button",{onClick:function(){c(o.filter((function(e){return e.id!==a.id})))},className:"trash-btn"},n.a.createElement("i",{className:"fas fa-trash"})))},d=function(e){var t=e.todos,a=e.setTodos,o=e.filteredTodos;return n.a.createElement("div",{className:"todo-container"},n.a.createElement("ul",{className:"todo-list"},o.map((function(e){return n.a.createElement(m,{setTodos:a,todos:t,key:e.id,todo:e,text:e.text})}))))};var p=function(){var e=Object(o.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(o.useState)([]),r=Object(s.a)(l,2),u=r[0],m=r[1],p=Object(o.useState)("all"),f=Object(s.a)(p,2),E=f[0],b=f[1],v=Object(o.useState)([]),h=Object(s.a)(v,2),N=h[0],T=h[1];Object(o.useEffect)((function(){j()}),[u,E]);var j=function(){switch(E){case"completed":T(u.filter((function(e){return!0===e.completed})));break;case"uncompleted":T(u.filter((function(e){return!1===e.completed})));break;default:T(u)}};return n.a.createElement("div",{className:"App"},n.a.createElement("header",null,n.a.createElement("h1",null,"Your's Todo List")),n.a.createElement(i,{inputText:a,todos:u,setTodos:m,setInputText:c,setStatus:b}),n.a.createElement(d,{filteredTodos:N,setTodos:m,todos:u}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.689b0ea1.chunk.js.map