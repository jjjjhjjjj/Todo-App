(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(7),r=n.n(o),l=(n(15),n(1)),i=n(9),u=n(2),s=(n(16),Object(c.memo)((function(){return a.a.createElement("header",null,a.a.createElement("h1",{className:"title"},"To-Do List"),a.a.createElement("p",{className:"desc"},"What is your One Small Step?"))}))),d=(n(17),Object(c.memo)((function(){var e=Object(c.useContext)(j),t=Object(c.useState)(""),n=Object(l.a)(t,2),o=n[0],r=n[1];return a.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.todoDispatch({type:"ADD_TODO",text:o}),r("")},className:"insert-form"},a.a.createElement("input",{className:"todo-input",type:"text",onChange:function(e){e.preventDefault(),r(e.target.value)},value:o,placeholder:"\ud560 \uc77c\uc744 \uc801\uc5b4\uc8fc\uc138\uc694."}),a.a.createElement("button",{className:"todo-submit-btn",type:"submit"},"\ucd94\uac00"))}))),m=(n(18),Object(c.memo)((function(){var e=Object(c.useContext)(j).todoState.todos,t=Object(c.useState)(),n=Object(l.a)(t,2),o=n[0],r=n[1],i=Object(c.useState)(),u=Object(l.a)(i,2),s=u[0],d=u[1];return Object(c.useEffect)((function(){r(e.filter((function(e){return!1===e.checked})).length),d(e.filter((function(e){return!0===e.checked})).length)}),[e]),a.a.createElement("p",{className:"todo-count"},"Doing : ",o," || completed: ",s)}))),f=(n(19),n(8)),E=n.n(f),b=n(5),p=Object(c.memo)((function(e){var t=e.todo,n=Object(c.useContext)(j).todoDispatch,o=t.checked;return a.a.createElement("li",{className:"todo-item"},a.a.createElement("strong",{className:E()("item-text",{checked:o})},t.text),a.a.createElement("div",{className:"btn-box"},!0===o?a.a.createElement(b.a,{onClick:function(){return n({type:"CHECK_TODO",id:t.id})}}):a.a.createElement(b.b,{onClick:function(){return n({type:"CHECK_TODO",id:t.id})}}),a.a.createElement(b.c,{onClick:function(){return n({type:"DELETE_TODO",id:t.id})}})))})),O=(n(20),Object(c.memo)((function(){var e=Object(c.useContext)(j),t=e.todoState.listType,n=function(t){e.todoDispatch({type:"CHANGE_LIST_TYPE",listType:t})};return a.a.createElement("ul",{className:"todo-button-list"},a.a.createElement("li",null,a.a.createElement("button",{type:"button",onClick:function(){return n("all")},className:"all"===t?"active":""},"|| ALL")),a.a.createElement("li",null,a.a.createElement("button",{type:"button",onClick:function(){return n("doing")},className:"doing"===t?"active":""},"|| DOING")),a.a.createElement("li",null,a.a.createElement("button",{type:"button",onClick:function(){return n("completed")},className:"completed"===t?"active":""},"|| COMPLETED")))}))),h=(n(21),Object(c.memo)((function(){var e=Object(c.useContext)(j).todoState,t=e.listType,n=e.todos,o=Object(c.useState)([]),r=Object(l.a)(o,2),i=r[0],u=r[1],s=Object(c.useRef)("");return Object(c.useEffect)((function(){"doing"===t?(s.current="Cheer Up !",u(n.filter((function(e){return!1===e.checked})))):"completed"===t?(s.current="Congratulations !",u(n.filter((function(e){return!0===e.checked})))):(s.current="It's up to you !",u(n))}),[t,n]),a.a.createElement("div",null,a.a.createElement(O,null),a.a.createElement("h2",{className:"list-title"},s.current),a.a.createElement("ul",null,i.map((function(e){return a.a.createElement(p,{key:e.id,todo:e})}))))}))),j=(n(22),a.a.createContext()),k={todos:[{id:1,text:"\ub9ac\uc561\ud2b8 \uacf5\ubd80\ud558\uae30",checked:!0},{id:2,text:"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uacf5\ubd80\ud558\uae30",checked:!1},{id:3,text:"\ucc45 \uc77d\uae30",checked:!0},{id:4,text:"\uac8c\uc784\ud558\uae30",checked:!0},{id:5,text:"\uc6b4\ub3d9\ud558\uae30",checked:!1}],listType:"all"},v=6,C=function(e,t){switch(t.type){case"ADD_TODO":return Object(u.a)({},e,{todos:[].concat(Object(i.a)(e.todos),[{id:v++,text:t.text,checked:!1}])});case"CHECK_TODO":return Object(u.a)({},e,{todos:e.todos.map((function(e){return e.id===t.id?Object(u.a)({},e,{checked:!e.checked}):e}))});case"DELETE_TODO":return Object(u.a)({},e,{todos:e.todos.filter((function(e){return e.id!==t.id}))});case"CHANGE_LIST_TYPE":return Object(u.a)({},e,{listType:t.listType});default:return e}};var D=function(){var e=Object(c.useReducer)(C,k),t=Object(l.a)(e,2),n=t[0],o=t[1];return a.a.createElement("div",{className:"landing"},a.a.createElement(s,null),a.a.createElement(j.Provider,{value:{todoState:n,todoDispatch:o}},a.a.createElement(d,null),a.a.createElement(m,null),a.a.createElement(h,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.e1fc147a.chunk.js.map