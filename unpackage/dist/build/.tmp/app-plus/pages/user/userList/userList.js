(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/userList/userList"],{3440:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return u})},"69cd":function(t,e,n){"use strict";(function(t){n("31b3"),n("921b");a(n("66fd"));var e=a(n("9d5a3"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"855d":function(t,e,n){"use strict";n.r(e);var a=n("ee93"),u=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=u.a},"9d5a3":function(t,e,n){"use strict";n.r(e);var a=n("3440"),u=n("855d");for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);var i=n("2877"),s=Object(i["a"])(u["default"],a["a"],a["b"],!1,null,null,null);e["default"]=s.exports},ee93:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=u(n("a34a"));function u(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n,a,u,r,i){try{var s=t[r](i),o=s.value}catch(c){return void n(c)}s.done?e(o):Promise.resolve(o).then(a,u)}function i(t){return function(){var e=this,n=arguments;return new Promise(function(a,u){var i=t.apply(e,n);function s(t){r(i,a,u,s,o,"next",t)}function o(t){r(i,a,u,s,o,"throw",t)}s(void 0)})}}var s={data:function(){return{page:1,items:[],btnShow:!0}},onLoad:function(){this.selectUserList()},methods:{nextPage:function(){this.page++,this.selectUserList()},selectUserList:function(){var e=i(a.default.mark(function e(){var n;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$util.request({requestUrl:"api/users",data:{limit:10,page:this.page}});case 2:n=e.sent,console.log(t("查询用户列表：",n," at pages\\user\\userList\\userList.vue:38")),n&&(n.data.data.length<10&&(this.btnShow=!1),1===this.page?this.items=n.data.data:this.items=this.items.concat(n.data.data));case 5:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}()}};e.default=s}).call(this,n("0de9")["default"])}},[["69cd","common/runtime","common/vendor"]]]);