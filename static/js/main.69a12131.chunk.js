(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(7),s=n.n(c),a=(n(12),n(13),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))}),i=n(2),o=n(3),h=n(5),l=n(4),u=n(0),b=function(e){var t=e.name,n=e.email,r=e.id;return Object(u.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(u.jsx)("img",{src:"https://robohash.org/".concat(r,"?200x200"),alt:"robot"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:t}),Object(u.jsx)("p",{children:n})]})]})},d=function(e){var t=e.robots,n=t.map((function(e,n){return Object(u.jsx)(b,{id:t[n].id,name:t[n].name,email:t[n].email},n)}));return Object(u.jsx)("div",{children:n})},j=function(e){var t=e.searchChange;return Object(u.jsx)("div",{className:"p2",children:Object(u.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},f=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(o.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(u.jsx)("h1",{children:"I'm sorry, we can't display the results"}):this.props.children}}]),n}(r.Component),O=function(e){return Object(u.jsx)("div",{style:{overflow:"scroll",border:"2px solid black",height:"500px",margin:"2em 0"},children:e.children})},p=(n(15),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField;if(!Array.isArray(t)||!t.length)return Object(u.jsx)("h1",{children:"Loading"});var r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(u.jsxs)("div",{className:"tc",children:[Object(u.jsx)("h1",{children:"RoboFriends"}),Object(u.jsx)(j,{searchChange:this.onSearchChange}),Object(u.jsx)(O,{children:Object(u.jsxs)(f,{children:[Object(u.jsx)(d,{robots:r}),";"]})})]})}}]),n}(r.Component));s.a.render(Object(u.jsx)(p,{}),document.getElementById("root")),a()}},[[16,1,2]]]);
//# sourceMappingURL=main.69a12131.chunk.js.map