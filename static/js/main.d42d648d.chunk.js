(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,n){"use strict";n.r(t);n(62),n(87);var a=n(0),c=n.n(a),i=n(37),r=n.n(i),s=n(16),o=n.n(s),l=n(23),u=n(24),h=n(26),m=n(25),p=n(27),d=n(18),b=n(7),f=(n(111),n(60)),k=n.n(f),v=function(e){function t(e){return Object(l.a)(this,t),Object(h.a)(this,Object(m.a)(t).call(this,e))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.items;return c.a.createElement(b.Panel,{id:t},c.a.createElement(b.PanelHeader,null,"\u0422\u043e\u0432\u0430\u0440\u044b"),c.a.createElement(b.Group,null,c.a.createElement(b.List,null,n.length>0&&n.map(function(e,t){return c.a.createElement(b.Cell,{key:t,before:c.a.createElement("img",{style:{width:40,height:40,margin:10},src:e.thumb_photo}),multiline:!0,description:e.description},e.title,", ",e.price.amount," ",e.price.currency.name)}),0==n.length&&c.a.createElement(b.Div,null,"\u0425\u043c, \u043d\u043e \u043c\u044b \u043d\u0435 \u043d\u0430\u0448\u043b\u0438 \u0442\u043e\u0432\u0430\u0440\u043e\u0432."))))}}]),t}(c.a.Component),g=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).go=function(e){n.setState({activePanel:e.currentTarget.dataset.to})},n.state={activePanel:"home",fetchedUser:null,authToken:null,items:[]},n.getItems=n.getItems.bind(Object(d.a)(Object(d.a)(n))),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;o.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;case"VKWebAppAccessTokenReceived":e.setState({authToken:t.detail.data.access_token}),e.getItems();break;default:console.log(t.detail.type)}}),o.a.send("VKWebAppGetUserInfo",{}),o.a.send("VKWebAppGetAuthToken",{app_id:6906999,scope:"market"})}},{key:"getItems",value:function(){var e=this,t="https://api.vk.com/method/market.get?v=5.52&access_token=".concat(this.state.authToken,"&owner_id=-").concat(124527492);k()(t).then(function(e){return e.json()}).then(function(t){return e.setState({items:t.response.items})}).catch(function(e){return[]})}},{key:"render",value:function(){return c.a.createElement(b.View,{activePanel:this.state.activePanel},c.a.createElement(v,{id:"home",items:this.state.items,fetchedUser:this.state.fetchedUser,go:this.go}))}}]),t}(c.a.Component);o.a.send("VKWebAppInit",{}),r.a.render(c.a.createElement(g,null),document.getElementById("root"))},61:function(e,t,n){e.exports=n(112)}},[[61,1,2]]]);
//# sourceMappingURL=main.d42d648d.chunk.js.map