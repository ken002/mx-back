(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-notice-addNotice-addNotice"],{"3ecd":function(t,e,n){"use strict";n.r(e);var r=n("7449"),i=n("56a2");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);var o=n("2877"),u=Object(o["a"])(i["default"],r["a"],r["b"],!1,null,"febe24a0",null);e["default"]=u.exports},"46d3":function(t,e,n){"use strict";var r=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var i=r(n("3b8d")),a={data:function(){return{confirmBtnName:"确定",form:{title:"",content:""},type:null,id:null}},onLoad:function(t){console.log(t),this.type=t.type,this.id=t.id,"modify"===this.type&&(this.confirmBtnName="修改",this.selectDetail())},methods:{confirm:function(){var t=(0,i.default)(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(""!==this.form.title){t.next=3;break}return this.$util.toast("请输入标题"),t.abrupt("return");case 3:if(""!==this.form.content){t.next=6;break}return this.$util.toast("请输入内容"),t.abrupt("return");case 6:if("modify"!==this.type){t.next=14;break}return t.next=9,this.$util.request({requestUrl:"api/notice/"+this.id,method:"PUT",data:this.form});case 9:e=t.sent,console.log("修改公告",e),e&&(this.$util.toast("修改成功"),setTimeout(function(){uni.navigateBack()},500)),t.next=19;break;case 14:return t.next=16,this.$util.request({requestUrl:"api/notice",method:"POST",data:this.form});case 16:n=t.sent,console.log("添加公告",n),n&&(this.$util.toast("添加成功"),this.form={title:"",content:""});case 19:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),selectDetail:function(){var t=(0,i.default)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$util.request({requestUrl:"api/notice/"+this.id});case 2:e=t.sent,console.log("查询公告",e),e&&(this.form=e.data.data[0]);case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}};e.default=a},"56a2":function(t,e,n){"use strict";n.r(e);var r=n("46d3"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);e["default"]=i.a},7449:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-input",{attrs:{type:"text",placeholder:"标题"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}}),n("v-uni-textarea",{attrs:{placeholder:"公告内容"},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}}),n("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)}}},[t._v(t._s(t.confirmBtnName))])],1)},i=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i})}}]);