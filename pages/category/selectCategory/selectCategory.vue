<template>
	<view>
		<view v-for="(item, index) in items" :key="index">
			<view>
				<text>{{ item.name }}</text>
				<button @tap="deleteCategory(item.id)">删除</button>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			items: []
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
					console.log('查询商品分类:', res);
					this.items = res.data.data;
				}
			});
		},
		deleteCategory(id){
			uni.request({
				url: 'http://localhost:3000/api/category/'+id,
				method:'DELETE',
				success: res => {
					console.log('删除商品:', res);
					uni.showToast({
					    title: res.data.message,
					});
					
					if(res.data.code===1){
						this.selectCategory();
					}
				}
			});
		}
	}
};
</script>

<style></style>
