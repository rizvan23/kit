(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,a){"use strict";a.r(t);a(61),a(86);var n=a(0),i=a.n(n),l=a(37),r=a.n(l),s=a(8),c=a.n(s),o=a(17),m=a(18),u=a(20),d=a(19),h=a(21),p=a(1),g=(a(109),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.items;return i.a.createElement(p.Panel,{id:a},i.a.createElement(p.PanelHeader,null,"\u0422\u043e\u0432\u0430\u0440\u044b"),i.a.createElement(p.Group,null,i.a.createElement(p.List,null,n.length>0&&n.map(function(t,a){return i.a.createElement(p.Cell,{key:a,"data-to":"item",onClick:function(a){return e.props.go(a,{itemId:t.id})},before:i.a.createElement("img",{alt:"",style:{width:40,height:40,margin:10},src:t.thumb_photo}),multiline:!0,description:t.description},t.title,", ",t.price.amount," ",t.price.currency.name)}),0===n.length&&i.a.createElement(p.Div,null,"\u0425\u043c, \u043d\u043e \u043c\u044b \u043d\u0435 \u043d\u0430\u0448\u043b\u0438 \u0442\u043e\u0432\u0430\u0440\u043e\u0432."))))}}]),t}(i.a.Component)),f=a(27),b=a.n(f),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={slideIndex:0,imageHeight:350},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.item;return i.a.createElement(p.Panel,{id:a,style:{marginBottom:100}},null!==n&&i.a.createElement("div",null,i.a.createElement(p.PanelHeader,{left:i.a.createElement(p.HeaderButton,{"data-to":"items",onClick:function(t){return e.props.go(t)}},i.a.createElement(b.a,null))},"\u0422\u043e\u0432\u0430\u0440"),i.a.createElement(p.Header,null,n.title," ",i.a.createElement("b",null,n.price.text)),n.photos.length>0&&i.a.createElement(p.Gallery,{slideWidth:"100%",style:{height:this.state.imageHeight,textAlign:"center"},bullets:"dark"},n.photos.map(function(t,a){return i.a.createElement("div",{key:a,style:{width:"100%",height:"100%",backgroundColor:"#fff"}},i.a.createElement("img",{alt:"",style:{maxHeight:e.state.imageHeight},src:t.sizes[t.sizes.length-1].url}))})),0===n.photos.length&&i.a.createElement(p.Gallery,{slideWidth:"100%",style:{height:this.state.imageHeight,textAlign:"center"}},i.a.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"#fff"}},i.a.createElement("img",{alt:"",style:{maxHeight:"350px"},src:n.thumb_photo}))),i.a.createElement(p.Group,null,i.a.createElement(p.Div,null,n.description)),i.a.createElement(p.FixedLayout,{vertical:"bottom"},i.a.createElement(p.Div,null,i.a.createElement(p.Button,{size:"xl",level:"commerce"},"\u041a\u0443\u043f\u0438\u0442\u044c")))),null==n&&i.a.createElement("div",null,i.a.createElement(p.PanelHeader,{left:i.a.createElement(p.HeaderButton,{"data-to":"items",onClick:function(t){return e.props.go(t)}},i.a.createElement(b.a,null))},"\u0422\u043e\u0432\u0430\u0440"),i.a.createElement(p.Group,null,i.a.createElement(p.Div,null,"\u0425\u043c, \u043d\u043e \u043c\u044b \u043d\u0435 \u043d\u0430\u0448\u043b\u0438 \u0442\u043e\u0432\u0430\u0440."))))}}]),t}(i.a.Component),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).go=function(e,t){var n=e.currentTarget.dataset.to;a.setState({activePanel:n}),"items"===n&&(c.a.send("VKWebAppSetLocation",{location:"items"}),a.getItems()),"item"===n&&(c.a.send("VKWebAppSetLocation",{location:"item".concat(t.itemId)}),a.getInfoItem(t.itemId))},a.state={activePanel:"items",authToken:null,items:[],item:null},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"getLocationHash",value:function(){return window.location.hash.replace("#","")}},{key:"componentWillMount",value:function(){var e=this;c.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppAccessTokenReceived":e.setState({authToken:t.detail.data.access_token},function(){var e=this.getLocationHash();if("items"===e)this.setState({activePanel:"items"},function(){this.getItems()});else if(-1!==e.indexOf("item")){var t=e.replace("item","");this.setState({activePanel:"item"},function(){this.getInfoItem(t)})}else this.setState({activePanel:"items"},function(){this.getItems()})});break;case"VKWebAppCallAPIMethodResult":"items"===t.detail.data.request_id&&e.setState({items:t.detail.data.response.items}),"item"===t.detail.data.request_id&&e.setState({item:t.detail.data.response.items[0]});break;default:console.log(t.detail)}}),c.a.send("VKWebAppGetAuthToken",{app_id:6906999,scope:"market"})}},{key:"getItems",value:function(){c.a.send("VKWebAppCallAPIMethod",{method:"market.get",request_id:"items",params:{owner_id:-124527492,v:"5.92",access_token:this.state.authToken}})}},{key:"getInfoItem",value:function(e){var t="".concat(-124527492,"_").concat(e);c.a.send("VKWebAppCallAPIMethod",{method:"market.getById",request_id:"item",params:{item_ids:t,v:"5.92",extended:1,access_token:this.state.authToken}})}},{key:"render",value:function(){return i.a.createElement(p.View,{activePanel:this.state.activePanel},i.a.createElement(g,{id:"items",items:this.state.items,go:this.go}),i.a.createElement(v,{id:"item",item:this.state.item,go:this.go}))}}]),t}(i.a.Component);c.a.send("VKWebAppInit",{}),r.a.render(i.a.createElement(E,null),document.getElementById("root"))},60:function(e,t,a){e.exports=a(110)}},[[60,1,2]]]);
//# sourceMappingURL=main.fda0a720.chunk.js.map