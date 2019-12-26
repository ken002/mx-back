<template>
	<view>
		<view v-for="(item, index) in items">
			<view>账号：{{item.account}}</view>
			<view class="image-container">
				<image-cache :src="item.avatar"></image-cache>
			</view>
		</view>
		<button v-show="btnShow" @tap="nextPage">下一页</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				page:1,
				items:[],
				btnShow:true,
			}
		},
		onLoad(){
			this.selectUserList();
		},
		methods: {
			nextPage() {
				this.page++;
				this.selectUserList();
			},
			async selectUserList(){
				const res = await this.$util.request({
					requestUrl: 'api/users',
					data: {
						limit: 10,
						page: this.page,
					}
				});
				console.log('查询用户列表：', res);
				if (res) {
					if (res.data.data.length < 10) {
						this.btnShow = false;
					}
					
					if (this.page === 1) {
						this.items = res.data.data;
					} else {
						this.items = this.items.concat(res.data.data);
					}
				}
			}
		}
	}
</script>

<style>

</style>
