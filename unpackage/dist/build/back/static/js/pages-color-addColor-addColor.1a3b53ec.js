(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-color-addColor-addColor"],{5556:function(e,t,n){"use strict";n.r(t);var r=n("bbf3"),i=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);t["default"]=i.a},a0c7:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-input",{attrs:{type:"number",placeholder:"输入价格"},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}}),n("v-uni-image",{attrs:{src:e.form.image}}),n("v-uni-button",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.uploadImage.apply(void 0,arguments)}}},[e._v("上传图片")]),n("v-uni-button",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.confirm.apply(void 0,arguments)}}},[e._v("确定")]),n("cpimg",{ref:"cpimg",on:{result:function(t){arguments[0]=t=e.$handleEvent(t),e.cpimgOk.apply(void 0,arguments)}}})],1)},i=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i})},bbf3:function(e,t,n){"use strict";var r=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var i=r(n("3b8d")),a={data:function(){return{form:{price:"",image:""}}},methods:{uploadImage:function(){var e=(0,i.default)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.$refs.cpimg._changImg();case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),cpimgOk:function(){var e=(0,i.default)(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,this.$util.uploadImage(t[0]);case 3:n=e.sent,this.form.image=n;case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),confirm:function(){var e=(0,i.default)(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(""!==this.form.price){e.next=3;break}return this.$util.toast("请输入价格"),e.abrupt("return");case 3:if(""!==this.form.image){e.next=6;break}return this.$util.toast("请上传色板图片"),e.abrupt("return");case 6:return e.next=8,this.$util.request({requestUrl:"api/color",method:"POST",data:this.form});case 8:t=e.sent,console.log("添加色板",t),t&&(this.$util.toast("添加成功"),this.form={image:"",price:""});case 11:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}};t.default=a},f0d8:function(e,t,n){"use strict";n.r(t);var r=n("a0c7"),i=n("5556");for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var u=n("2877"),o=Object(u["a"])(i["default"],r["a"],r["b"],!1,null,"054567b5",null);t["default"]=o.exports}}]);