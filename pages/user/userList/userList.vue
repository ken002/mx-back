<template>
	<view>
		<view v-for="(item, index) in items">
			<view>昵称：{{item.nickName}}</view>
			<image :src="item.avatarUrl"></image>
			<view>性别：{{item.gender==1?'男':'女'}}</view>
			<view>国家：{{item.country}}</view>
			<view>省份：{{item.province}}</view>
			<view>城市：{{item.city}}</view>
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
				if (res !== undefined) {
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
