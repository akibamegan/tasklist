(this.webpackJsonptasklist=this.webpackJsonptasklist||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n(2),i=n(3),r=n(5),s=n(4),c=n(6),m=n(0),u=n.n(m),l=n(8),d=n.n(l);n(15),n(9),n(16);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(17);var h=[];h.push({index:1,value:"Work on React",done:!1}),h.push({index:2,value:"Take a Shower",done:!0}),h.push({index:3,value:"Go to the gym",done:!0});var p=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.items.map((function(t,n){return u.a.createElement(b,{key:n,item:t,index:n,removeItem:e.props.removeItem,markTodoDone:e.props.markTodoDone})}));return u.a.createElement("ul",{className:"list-group"}," ",t," ")}}]),t}(u.a.Component),b=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(s.a)(t).call(this,e))).onClickClose=n.onClickClose.bind(Object(o.a)(n)),n.onClickDone=n.onClickDone.bind(Object(o.a)(n)),n}return Object(c.a)(t,e),Object(i.a)(t,[{key:"onClickClose",value:function(){var e=parseInt(this.props.index);this.props.removeItem(e)}},{key:"onClickDone",value:function(){var e=parseInt(this.props.index);this.props.markTodoDone(e)}},{key:"render",value:function(){var e=this.props.item.done?"done":"undone";return u.a.createElement("li",{className:"list-group-item "},u.a.createElement("div",{className:e},u.a.createElement("span",{className:"glyphicon glyphicon-ok icon","aria-hidden":"true",onClick:this.onClickDone}),this.props.item.value,u.a.createElement("button",{type:"button",className:"close",onClick:this.onClickClose},"\xd7")))}}]),t}(u.a.Component),v=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(s.a)(t).call(this,e))).onSubmit=n.onSubmit.bind(Object(o.a)(n)),n}return Object(c.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.refs.itemName.focus()}},{key:"onSubmit",value:function(e){e.preventDefault();var t=this.refs.itemName.value;t&&(this.props.addItem({newItemValue:t}),this.refs.form.reset())}},{key:"render",value:function(){return u.a.createElement("form",{ref:"form",onSubmit:this.onSubmit,className:"form-inline"},u.a.createElement("input",{type:"text",ref:"itemName",className:"form-control",placeholder:"NEW TASK"}),u.a.createElement("button",{type:"submit",className:"btn"},"Add"))}}]),t}(u.a.Component),f=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return u.a.createElement("h1",null,"Today's To-Do List:")}}]),t}(u.a.Component),k=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(s.a)(t).call(this,e))).addItem=n.addItem.bind(Object(o.a)(n)),n.removeItem=n.removeItem.bind(Object(o.a)(n)),n.markTodoDone=n.markTodoDone.bind(Object(o.a)(n)),n.state={todoItems:h},n}return Object(c.a)(t,e),Object(i.a)(t,[{key:"addItem",value:function(e){h.unshift({index:h.length+1,value:e.newItemValue,done:!1}),this.setState({todoItems:h})}},{key:"removeItem",value:function(e){h.splice(e,1),this.setState({todoItems:h})}},{key:"markTodoDone",value:function(e){var t=h[e];h.splice(e,1),t.done=!t.done,t.done?h.push(t):h.unshift(t),this.setState({todoItems:h})}},{key:"render",value:function(){return u.a.createElement("div",{id:"main"},u.a.createElement(f,null),u.a.createElement(v,{addItem:this.addItem}),u.a.createElement(p,{items:this.props.initItems,removeItem:this.removeItem,markTodoDone:this.markTodoDone}))}}]),t}(u.a.Component);d.a.render(u.a.createElement(k,{initItems:h}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"}},[[10,1,2]]]);
//# sourceMappingURL=main.863d78ab.chunk.js.map