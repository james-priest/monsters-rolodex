(window["webpackJsonpmonsters-rolodex"]=window["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(2),r=n.n(o),s=(n(13),n(3)),l=n(4),i=n(6),u=n(5),h=n(7),d=(n(14),n(15),function(e){var t=e.cat;return c.a.createElement("div",{className:"card-container"},c.a.createElement("img",{alt:"cat".concat(t.id),src:"https://robohash.org/".concat(t.id,"?set=set4&size=150x150")}),c.a.createElement("h2",null,t.name),c.a.createElement("p",null,t.email))}),m=function(e){return c.a.createElement("div",{className:"card-list"},e.cats.map(function(e){return c.a.createElement(d,{key:e.id,cat:e})}))},f=(n(16),function(e){var t=e.placeholder,n=e.handleChange;return c.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n,autoFocus:!0})}),p=(n(17),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={cats:[],searchField:""},e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({cats:t})})}},{key:"render",value:function(){var e=this.state,t=e.cats,n=e.searchField,a=t.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Cats Rolodex"),c.a.createElement(f,{placeholder:"search cats",handleChange:this.handleChange}),c.a.createElement(m,{cats:a}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.5df908d5.chunk.js.map