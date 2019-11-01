<template>
	<view>
		<view v-for="(item,index) in items" :key="index">
			{{item.name}}
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			items:[]
		};
	},
	onLoad() {
		this.selectCategory();
	},
	methods: {
		selectCategory() {
			uni.request({
				url: 'http://localhost:3000/api/category',
				success: res => {
					console.log('商品分类',res);
					this.items=res.data.data;
				}
			});
		}
	}
};
</script>

<style></style>
