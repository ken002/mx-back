<template>
	<view>
		<view v-for="(item, index) in items">
			<image :src="item.image"></image>
			<text>￥{{ item.price }}</text>
			<button @tap.stop="toDelete(item.id)">删除</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items:[]
			}
		},
		onShow() {
			this.selectColors();
		},
		methods: {
			async selectColors(){
				const res = await this.$util.request({
					requestUrl: 'api/colors'
				});
				console.log('查询色板：', res);
				
				if (res) {
					this.items = res.data.data;
				}
			},
			async toDelete(id){
				uni.showModal({
					title: '删除',
					content: '确定删除？',
					success: async res => {
						if (res.confirm) {
							const res = await this.$util.request({
								requestUrl: 'api/color/' + id,
								method: 'DELETE'
							});
							console.log('删除色板', res);
				
							if (res) {
								this.$util.toast('删除成功');
								this.selectColors();
							}
						}
					}
				});
			}
		}
	}
</script>

<style>

</style>
