(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/common/cpimg/cpimg"],{"260d":function(t,e,i){"use strict";i.r(e);var n=i("e8d4"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=r.a},3673:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},r=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return r})},"55eb":function(t,e,i){},"81dd":function(t,e,i){"use strict";i.r(e);var n=i("3673"),r=i("260d");for(var a in r)"default"!==a&&function(t){i.d(e,t,function(){return r[t]})}(a);i("deba");var s=i("2877"),o=Object(s["a"])(r["default"],n["a"],n["b"],!1,null,"408ca634",null);e["default"]=o.exports},deba:function(t,e,i){"use strict";var n=i("55eb"),r=i.n(n);r.a},e8d4:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=[],n="",r=0,a={name:"cpimg",props:{maxWidth:{type:Number,default:750},type:{type:String,default:"url"},ql:{type:Number,default:.92},src:{type:String,default:""},number:{type:Number,default:1},fixOrientation:{type:Boolean,default:!0},size:{type:Number,default:5e5}},data:function(){return{cWidth:750,cHeight:750}},onUnload:function(){},methods:{_changImg:function(){var e=this;""==e.src?t.chooseImage({count:e.number,sizeType:["compressed"],success:function(t){i=[],n=t.tempFilePaths,r=0,e._cpImg()},fail:function(t){e._err(t)}}):_cpImg(e.src)},_cpImg:function(){var e=this,i=n[r];function a(n,r){var a,s,o=n.width,h=n.height,u=1,d=1;(r/1024>=e.size||n.width>=e.maxWidth)&&(n.width>=n.height&&n.width>=e.maxWidth?(n.height=e.maxWidth*n.height/n.width,n.width=e.maxWidth):n.width<n.height&&n.height>=e.maxWidth&&(n.width=e.maxWidth*n.width/n.height,n.height=e.maxWidth),u=n.width/o,d=n.height/h),a=o*u,s=h*d;var c=t.createCanvasContext("_myCanvas",e);if(e.cWidth=n.width,e.cHeight=n.height,e.fixOrientation){var f=n.orientation;[5,6,7,8,"right","left","right-mirrored","left-mirrored"].indexOf(f)>-1&&(e.cWidth=n.height,e.cHeight=n.width),2==f||"up-mirrored"==f?(c.translate(a,0),c.scale(-1,1)):3==f||"down"==f?(c.translate(a,s),c.rotate(Math.PI)):4==f||"down-mirrored"==f?(c.translate(0,s),c.scale(1,-1)):5==f||"right-mirrored"==f?(c.rotate(.5*Math.PI),c.scale(1,-1)):6==f||"right"==f?(c.rotate(.5*Math.PI),c.translate(0,-s)):7==f||"left-mirrored"==f?(c.rotate(.5*Math.PI),c.translate(a,-s),c.scale(-1,1)):8==f||"left"==f?(c.rotate(-.5*Math.PI),c.translate(-a,0)):c.translate(0,0)}var l=0;l=10,setTimeout(function(){c.drawImage(i,0,0,a,s),c.draw(!1,function(){var i=0;i=10,setTimeout(function(){t.canvasToTempFilePath({width:Number(e.cWidth),height:Number(e.cHeight),destWidth:Number(e.cWidth),destHeight:Number(e.cHeight),canvasId:"_myCanvas",fileType:"jpg",quality:Number(e.ql),success:function(t){if("base64"==e.type){plus.io.resolveLocalFileSystemURL(t.tempFilePath,function(t){t.file(function(t){var i=new plus.io.FileReader;i.readAsDataURL(t),i.onloadend=function(t){2==t.target.readyState?e._result(t.target.result):e._err(t)}})},function(t){e._err(t)})}else e._result(t.tempFilePath)},fail:function(t){e._err(t)}},e)},i)})},l)}t.getImageInfo({src:i,success:function(n){t.getFileInfo({filePath:i,success:function(t){a(n,t.size)},fail:function(t){e._err(t)}})},fail:function(t){e._err(t)}})},_reverseImgData:function(t){for(var e=t.width,i=t.height,n=0,r=0;r<i/2;r++)for(var a=0;a<4*e;a++)n=t.data[r*e*4+a],t.data[r*e*4+a]=t.data[(i-r-1)*e*4+a],t.data[(i-r-1)*e*4+a]=n;return t},_getH5ImageInfo:function(t,e){var i=new Image;i.src=t,i.onload=function(i){var n=this,r=new XMLHttpRequest;r.open("GET",t,!0),r.responseType="blob",r.onload=function(t){var i=this;if(200==i.status||0===i.status){var r=new FileReader;r.onload=function(t){var r=new DataView(this.result);if(65496!=r.getUint16(0,!1))return e({size:i.response.size,type:i.response.type,width:n.width,height:n.height,orientation:-1});var a=r.byteLength,s=2;while(s<a){var o=r.getUint16(s,!1);if(s+=2,65505==o){if(1165519206!=r.getUint32(s+=2,!1))return e({size:i.response.size,type:i.response.type,width:n.width,height:n.height,orientation:-1});var h=18761==r.getUint16(s+=6,!1);s+=r.getUint32(s+4,h);var u=r.getUint16(s,h);s+=2;for(var d=0;d<u;d++)if(274==r.getUint16(s+12*d,h))return e({size:i.response.size,type:i.response.type,width:n.width,height:n.height,orientation:r.getUint16(s+12*d+8,h)})}else{if(65280!=(65280&o))break;s+=r.getUint16(s,!1)}}return e({size:i.response.size,type:i.response.type,width:n.width,height:n.height,orientation:-1})},r.readAsArrayBuffer(i.response)}},r.send()}},_result:function(t,e){i.push(t),r+=1,n.length-1>=r?this._cpImg():this.$emit("result",i)},_err:function(t){this.$util.toast("图片压缩处理失败"),this.$emit("err",t)}}};e.default=a}).call(this,i("6e42")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/common/cpimg/cpimg-create-component',
    {
        'components/common/cpimg/cpimg-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("81dd"))
        })
    },
    [['components/common/cpimg/cpimg-create-component']]
]);