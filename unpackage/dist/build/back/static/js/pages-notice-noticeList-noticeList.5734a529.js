(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-notice-noticeList-noticeList"],{"0f3e":function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var r=i(n("3b8d")),u={data:function(){return{items:[]}},onShow:function(){this.selectNotices()},methods:{toModify:function(t){uni.navigateTo({url:"/pages/notice/addNotice/addNotice?id=".concat(t,"&type=modify")})},toDelete:function(){var t=(0,r.default)(regeneratorRuntime.mark(function t(e){var n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:uni.showModal({title:"删除",content:"确定删除？",success:function(){var t=(0,r.default)(regeneratorRuntime.mark(function t(i){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!i.confirm){t.next=6;break}return t.next=3,n.$util.request({requestUrl:"api/notice/"+e,method:"DELETE"});case 3:r=t.sent,console.log("删除公告",r),r&&(n.$util.toast("删除成功"),n.selectNotices());case 6:case"end":return t.stop()}},t,this)}));function i(e){return t.apply(this,arguments)}return i}()});case 1:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),selectNotices:function(){var t=(0,r.default)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$util.request({requestUrl:"api/notices"});case 2:e=t.sent,console.log("查询所有公告：",e),e&&(this.items=e.data.data);case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}};e.default=u},"99b3":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",t._l(t.items,function(e,i){return n("v-uni-view",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toModify(e.id)}}},[n("v-uni-view",[t._v(t._s(e.title))]),n("v-uni-view",[t._v(t._s(e.content))]),n("v-uni-button",{on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.toDelete(e.id)}}},[t._v("删除")])],1)}),1)},r=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r})},c083:function(t,e,n){"use strict";n.r(e);var i=n("0f3e"),r=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);e["default"]=r.a},fff4:function(t,e,n){"use strict";n.r(e);var i=n("99b3"),r=n("c083");for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);var o=n("2877"),c=Object(o["a"])(r["default"],i["a"],i["b"],!1,null,"115bb86b",null);e["default"]=c.exports}}]);