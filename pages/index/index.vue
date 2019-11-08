<template>
	<view class="content">
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
		}
	}
};
</script>

<style></style>
