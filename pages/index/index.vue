<template>
	<view class="content">
		<view>
			<h1>用户模块：</h1>
			<view>
				<button @tap="selectUsers">按分页查询用户</button>
			</view>
		</view>
		<view>
			<h1>公告模块：</h1>
			<view>
				<button @tap="selectNotice">查询公告列表</button>
				<button @tap="addNotice">添加公告</button>
			</view>
		</view>
		<view>
			<h1>广告模块：</h1>
			<view>
				<button @tap="selectAd">查询广告列表</button>
				<button @tap="addAd">添加广告</button>
			</view>
		</view>
		<view>
			<h1>色板模块：</h1>
			<view>
				<button @tap="selectColor">查询色板列表</button>
				<button @tap="addColor">添加色板</button>
			</view>
		</view>
		<view>
			<h1>商品模块：</h1>
			<view>
				<button @tap="selectProduct">按分页查询商品</button>
				<button @tap="addProduct">添加商品</button>
			</view>
		</view>
		<view>
			<h1>类别模块：</h1>
			<view>
				<button @tap="selectCategory">查询所有分类</button>
				<button @tap="addCategory">添加分类</button>
			</view>
		</view>
		<view>
			<h1>充值模块：</h1>
			<view>
				<button @tap="selectRecharge">查询</button>
				<button @tap="addRecharge">添加</button>
			</view>
		</view>
		<view>
			<h1>版本模块：</h1>
			<view>
				<button @tap="selectVersion">查询</button>
				<button @tap="addVersion">添加</button>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			
		};
	},
	onLoad() {
		
	},
	methods: {
		selectVersion(){
			uni.navigateTo({
				url:'/pages/version/selectVersion/selectVersion'
			})
		},
		addVersion(){
			uni.navigateTo({
				url:'/pages/version/addVersion/addVersion'
			})
		},
		selectRecharge(){
			uni.navigateTo({
				url:'/pages/recharge/selectRecharge/selectRecharge'
			})
		},
		addRecharge(){
			uni.navigateTo({
				url:'/pages/recharge/addRecharge/addRecharge'
			})
		},
		selectColor(){
			uni.navigateTo({
				url:'/pages/color/colorList/colorList'
			})
		},
		addColor(){
			uni.navigateTo({
				url:'/pages/color/addColor/addColor'
			})
		},
		selectUsers(){
			uni.navigateTo({
				url:'/pages/user/userList/userList'
			})
		},
		selectNotice(){
			uni.navigateTo({
				url:'/pages/notice/noticeList/noticeList'
			})
		},
		addNotice(){
			uni.navigateTo({
				url:'/pages/notice/addNotice/addNotice'
			})
		},
		selectCategory(){
			uni.navigateTo({
				url:'/pages/category/selectCategory/selectCategory'
			})
		},
		addCategory(){
			uni.navigateTo({
				url:'/pages/category/addCategory/addCategory'
			})
		},
		addProduct(){
			uni.navigateTo({
				url:'/pages/product/addProduct/addProduct'
			})
		},
		selectProduct(){
			uni.navigateTo({
				url:'/pages/product/selectProducts/selectProducts'
			})
		},
		searchProductByName(){
			uni.navigateTo({
				url:'/pages/product/searchProductByName/searchProductByName'
			})
		},
		selectAd(){
			uni.navigateTo({
				url:'/pages/ad/adList/adList'
			})
		},
		addAd(){
			uni.navigateTo({
				url:'/pages/ad/addAd/addAd'
			})
		},
		
	}
};
</script>

<style></style>
