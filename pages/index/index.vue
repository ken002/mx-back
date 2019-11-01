<template>
	<view class="content">
		<button @tap="selectProduct">按分页查询商品</button>
		<button @tap="addProduct">添加商品</button>
		
		<button @tap="selectCategory">查询所有分类</button>
		<button @tap="addCategory">添加分类</button>
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
				url:'../selectCategory/selectCategory'
			})
		},
		addCategory(){
			uni.navigateTo({
				url:'../addCategory/addCategory'
			})
		},
		addProduct(){
			uni.navigateTo({
				url:'../addProduct/addProduct'
			})
		},
		selectProduct(){
			uni.navigateTo({
				url:'../selectProducts/selectProducts'
			})
		},
	}
};
</script>

<style></style>
