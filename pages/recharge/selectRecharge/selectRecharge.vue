<template>
	<view>
		<view @tap="toModify(item.id)" v-for="(item, index) in items">
			<text>{{ item.intro }}</text>
			<button style="margin-top: 30px;" @tap.stop="toDelete(item.id)">删除</button>
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
		onShow(){
			this.selectRecharges();
		},
		methods: {
			toModify(id) {
				uni.navigateTo({
					url: `/pages/recharge/addRecharge/addRecharge?id=${id}&type=modify`
				});
			},
			async toDelete(id){
				uni.showModal({
					title: '删除',
					content: '确定删除？',
					success: async res => {
						if (res.confirm) {
							const res = await this.$util.request({
								requestUrl: 'api/recharge/' + id,
								method: 'DELETE'
							});
							console.log('删除某优惠', res);
				
							if (res) {
								this.$util.toast('删除成功');
								this.selectRecharges();
							}
						}
					}
				});
			},
			async selectRecharges() {
				const res = await this.$util.request({
					requestUrl: 'api/recharges'
				});
				console.log('查询所有充值优惠：', res);
			
				if (res) {
					this.items = res.data.data;
				}
			}
		}
	}
</script>

<style>

</style>
