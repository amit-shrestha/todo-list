(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(t,e,n){t.exports=n(32)},,,,,,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),i=n(9),r=n.n(i),c=n(6),s=n(7),d=n(1),u=n(2),l=n(4),m=n(3),p=n(5),f=(n(16),n(18),n(20),n(22),n(24),n(26),n(28),n(30),function(t){function e(){var t;return Object(d.a)(this,e),(t=Object(l.a)(this,Object(m.a)(e).call(this))).handleChange=function(e){t.props.edit?t.setState({editTodo:e.target.value}):t.setState({newTodo:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.edit?t.props.onEdit(t.props.index,t.state.value):t.props.onAdd(t.state.newTodo),t.setState({newTodo:"",editTodo:""})},t.state={editTodo:"",newTodo:""},t}return Object(p.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){this.setState({editTodo:this.props.value})}},{key:"render",value:function(){var t=this;return this.props.edit?a.a.createElement("form",{onSubmit:function(e){return t.handleSubmit(e)},className:"edit-form"},a.a.createElement("input",{type:"text",placeholder:"",value:this.state.editTodo,onChange:function(e){return t.handleChange(e)}})):a.a.createElement("form",{onSubmit:function(e){return t.handleSubmit(e)},className:"input-form"},a.a.createElement("input",{type:"text",placeholder:"Add new task",value:this.state.newTodo,onChange:function(e){return t.handleChange(e)}}),a.a.createElement("button",null,"Add"))}}]),e}(a.a.Component)),h=function(t){var e=t.value,n=t.onClick;return a.a.createElement("button",{className:e,onClick:function(){return n()}},e)},v=function(t){var e=t.todoList,n=t.option,o=t.completeTodo,i=t.deleteTodo,r=t.onEdit,c=t.updateTodo,s=t.searchParameter,d=function(){return"Remaining"===n?e.filter(function(t){return!t.isCompleted&&t.todo.includes(s)}):"Completed"===n?e.filter(function(t){return t.isCompleted&&t.todo.includes(s)}):e.filter(function(t){return t.todo.includes(s)})};return 0!==d().length?a.a.createElement("ul",null,d().map(function(t,e){return a.a.createElement("li",{className:"clearfix",key:e},t.isEditing?a.a.createElement(f,{onEdit:c,edit:!0,index:e,value:t.todo}):a.a.createElement("div",{className:t.isCompleted?"task-list complete":"task-list",onClick:function(){return o(e)}},t.todo),a.a.createElement("div",{className:"menu"},a.a.createElement(h,{value:"Edit",onClick:function(){return r(e)}}),a.a.createElement(h,{value:"Delete",onClick:function(){return i(e)}})))})):a.a.createElement("div",{className:"no-results"},"No Results Found")},E=function(t){var e=t.onButtonClick,n=t.value,o=t.activeOption;return a.a.createElement("button",{className:o===n?"active":n,onClick:function(){return e(n)}},n)},T=function(t){var e=t.onChange,n=function(t){e(t.target.value)};return a.a.createElement("form",{onSubmit:function(t){return function(t){t.preventDefault()}(t)},className:"search-form"},a.a.createElement("input",{type:"text",placeholder:"Search",onChange:function(t){return n(t)}}))},g=function(t){var e=t.onButtonClick,n=t.activeOption,o=t.addTodo,i=t.edit,r=t.todoList,c=t.completeTodo,s=t.option,d=t.deleteTodo,u=t.onEdit,l=t.updateTodo,m=t.onChange,p=t.searchParameter;return a.a.createElement("div",{className:"container"},a.a.createElement("h1",null,"TO-DO LIST"),a.a.createElement(E,{value:"All",onButtonClick:e,activeOption:n}),a.a.createElement(E,{value:"Remaining",onButtonClick:e,activeOption:n}),a.a.createElement(E,{value:"Completed",onButtonClick:e,activeOption:n}),a.a.createElement(f,{onAdd:o,edit:i}),a.a.createElement(T,{onChange:m}),a.a.createElement(v,{todoList:r,completeTodo:c,option:s,deleteTodo:d,onEdit:u,updateTodo:l,searchParameter:p}))},C="All",b=function(t){function e(){var t;return Object(d.a)(this,e),(t=Object(l.a)(this,Object(m.a)(e).call(this))).addTodo=function(e){t.isTaskValid(e)&&t.setState({todos:[{todo:e,isCompleted:!1,isEditing:!1}].concat(Object(s.a)(t.state.todos))})},t.completeTodo=function(e){var n=t.state.todos.map(function(t){return Object(c.a)({},t)});n[e].isCompleted=!t.state.todos[e].isCompleted,t.setState({todos:n})},t.changeOption=function(e){t.setState({option:e})},t.deleteTodo=function(e){var n=t.state.todos.filter(function(t,n){return n!==e});t.setState({todos:n})},t.enableEdit=function(e){var n=t.state.todos.map(function(t){return Object(c.a)({},t)});n[e].isEditing=!t.state.todos[e].isEditing,t.setState({todos:n})},t.updateTodo=function(e,n){var o=t.state.todos.map(function(t){return Object(c.a)({},t)});o[e].isEditing=!t.state.todos[e].isEditing,t.isTaskValid(n)&&(o[e].todo=n),t.setState({todos:o})},t.isTaskValid=function(t){return!(!t||null===t||!Object(s.a)(t).some(function(t){return" "!==t}))},t.search=function(e){t.setState({searchParameter:e})},t.state={todos:[],searchParameter:"",option:C},t}return Object(p.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=window.localStorage.getItem("storeTodos"),e=t?JSON.parse(t):[];this.setState({todos:e})}},{key:"componentDidUpdate",value:function(){window.localStorage.setItem("storeTodos",JSON.stringify(this.state.todos))}},{key:"render",value:function(){return a.a.createElement("div",{className:"wrapper"},a.a.createElement(g,{onButtonClick:this.changeOption,activeOption:this.state.option,addTodo:this.addTodo,edit:!1,todoList:this.state.todos,completeTodo:this.completeTodo,option:this.state.option,deleteTodo:this.deleteTodo,onEdit:this.enableEdit,updateTodo:this.updateTodo,onChange:this.search,searchParameter:this.state.searchParameter}))}}]),e}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[10,2,1]]]);
//# sourceMappingURL=main.93123258.chunk.js.map