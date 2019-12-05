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
		async selectCategory() {
			const res = await this.$util.request({
				requestUrl:'api/category'
			});
			console.log('查询所有类别：',res);
			
			if(res){
				this.items = res.data.data;
			}
		},
		async deleteCategory(id){
			uni.showModal({
				title: '删除',
				content: '确定删除？',
				success: async res => {
					if (res.confirm) {
						const res = await this.$util.request({
							requestUrl:'api/category/'+id,
							method:'DELETE'
						});
						console.log('删除某类别',res);
						
						if(res){
							this.$util.toast('删除成功');
							this.selectCategory();
						}
					}
				}
			});
		}
	}
};
</script>

<style></style>
