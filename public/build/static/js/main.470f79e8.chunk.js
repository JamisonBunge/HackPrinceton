(this["webpackJsonpfind-joe"]=this["webpackJsonpfind-joe"]||[]).push([[0],{35:function(e,t,n){e.exports=n(61)},40:function(e,t,n){},41:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n.n(a),c=n(18),o=n.n(c),l=(n(40),n(11)),r=n(12),s=n(14),u=n(13),m=n(15),d=(n(41),n(23)),h=n(5),p=n(62),g=function(e){function t(e){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props;return i.a.createElement("div",{id:"spots"},i.a.createElement("div",{id:"chain"},i.a.createElement("h5",null,"Chain: ",e.chain.name," .... ",e.chain.distance," / ",e.chain.time," Away")),i.a.createElement("div",{id:"quick"},i.a.createElement("h5",null,"Quick: ",e.quick.name," .... ",e.quick.distance," / ",e.quick.time," Away")),i.a.createElement("div",{id:"sitdown"},i.a.createElement("h5",null,"Sitdown: ",e.sitdown.name," .... ",e.sitdown.distance," / ",e.sitdown.time," Away")))}}]),t}(a.Component),b=n(16),v={width:"100%",height:"100%"},f=function(e){function t(e){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props;return console.log(e),i.a.createElement("div",null,i.a.createElement(b.Map,{google:this.props.google,zoom:15,style:v,initialCenter:{lat:e.curLat,lng:e.curLng},center:{lat:e.curLat,lng:e.curLng}},i.a.createElement(b.Marker,{position:{lat:e.curLat,lng:e.curLng}}),i.a.createElement(b.Marker,{position:{lat:e.chain.lat,lng:e.chain.lng},icon:{url:"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}}),i.a.createElement(b.Marker,{position:{lat:e.sitdown.lat,lng:e.sitdown.lng},icon:{url:"http://maps.google.com/mapfiles/ms/icons/pink-dot.png"}}),i.a.createElement(b.Marker,{position:{lat:e.quick.lat,lng:e.quick.lng},icon:{url:"http://maps.google.com/mapfiles/ms/icons/purple-dot.png"}})))}}]),t}(a.Component),E=Object(b.GoogleApiWrapper)({apiKey:"AIzaSyCn_2DiLqysX40xZh5KKeVadEJEpmkN76A"})(f),k=n(29);function j(){var e=Object(k.a)([" \nquery($lat: String!, $lng: String!) {\n    placesAt(lat: $lat, lng: $lng) {\n        sitdown {\n            name\n            distance\n            time\n            lat\n            lng\n        }\n        chain {\n            name\n            distance\n            time\n            lat\n            lng\n        }\n        quick {\n            name\n            distance\n            time\n            lat\n            lng\n        }\n    }\n}\n"]);return j=function(){return e},e}var w=Object(d.b)(j()),O=function(e){function t(e){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.data;if(!0===e.loading||void 0===e.placesAt)return i.a.createElement("div",null,i.a.createElement("p",null,"Loading..."));var t=e.placesAt;return i.a.createElement("div",null,i.a.createElement("div",{id:"title"},i.a.createElement("h1",null,"Get Joe Coffee :)"),i.a.createElement(g,{chain:t.chain,sitdown:t.sitdown,quick:t.quick})),i.a.createElement("div",{id:"map"},i.a.createElement(E,{curLat:e.variables.lat,curLng:e.variables.lng,chain:t.chain,sitdown:t.sitdown,quick:t.quick})))}}]),t}(a.Component),L=Object(p.a)(w,{options:function(e){return{variables:{lat:e.selectedLocation.lat,lng:e.selectedLocation.lng}}}})(O),y=new d.a({uri:"/graphql"}),q=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).chooseRandomLocation=function(){var e=[{lat:"40.807537",lng:"-73.962570"},{lat:"40.350121",lng:"-74.652781"},{lat:"40.757972",lng:"-73.985556"}][Math.floor(3*Math.random())];console.log(e),n.setState({currLoc:e})},n.state={currLoc:{lat:"40.807537",lng:"-73.962570"}},n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(h.b,{client:y},i.a.createElement("div",{className:"App"},i.a.createElement(L,{selectedLocation:this.state.currLoc}),i.a.createElement("div",{id:"options"},i.a.createElement("form",null,i.a.createElement("button",{type:"button",className:"button",onClick:this.chooseRandomLocation},"Locate")))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.470f79e8.chunk.js.map