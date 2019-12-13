//本机
var url = "http://localhost:81/";

//线上
// var url = "http://180.76.175.210:81/";
// var url = "http://www.jinluoyang.top:81/";

async function request({
	requestUrl,
	method = 'GET',
	data = {},
}) {
	var [error, res] = await uni.request({
		url: url + requestUrl,
		method,
		data
	});
	
	if (res === undefined) {
		toast('连接服务失败');
		return false;
	} else {
		if (res.statusCode == 200) {
			if (res.data.code === 1) {
				return res;
			} else {
				toast(res.data.message);
			}
		}
		if (res.statusCode == 400) {
			toast('参数错误');
			return false;
		}
		if (res.statusCode == 404) {
			toast('请求地址错误');
			return false;
		}
		if (res.statusCode == 415) {
			toast('请求方式错误');
			return false;
		}
		if (res.statusCode == 500) {
			toast('服务器内部错误');
			return false;
		}
	}
}

function toast(title) {
	uni.showToast({
		title,
		icon: 'none'
	})
}

async function selectImage() {
	return new Promise((resolve, reject) => {
		uni.chooseImage({
			count: 1, //默认9
			sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
			success: function(res) {
				resolve(res.tempFilePaths[0]);
			}
		});
	})
}

async function uploadImage(path) {
	return new Promise((resolve, reject) => {
		uni.uploadFile({
			url: `${url}api/upload`,
			filePath: path,
			fileType: 'image',
			name: 'file',
			success: res => {
				toast('上传成功');
				resolve(JSON.parse(res.data).data.url);
			},
			fail:e=>{
				toast('上传失败');
			}
		});
	})
}

function navigateTo(url = "", params = {}) {
	url += '?params=' + JSON.stringify(params);
	uni.navigateTo({
		url
	})
}

function toLogin(){
	navigateTo('/pages/my/login/login');
}

function toProductDetail(productDetail){
	const params={
		productDetail
	}
	navigateTo('/pages/index/productDetail/productDetail',params);
}

export default {
	url, //url
	request, //请求
	toast, //提示
	selectImage, //选择图片
	uploadImage, //上传图片
	navigateTo,//跳转页面
	toLogin,//去登录
	toProductDetail,//去详情	
}
