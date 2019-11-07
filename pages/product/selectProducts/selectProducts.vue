<template>
	<view>
		<view @tap="toDetail(item.id)" v-for="(item, index) in items" :key="index">
			<image class="image" :src="item.image"></image>
			<view>{{ item.name }}</view>
			<button @tap.stop="toDelete(item.id)">删除</button>
		</view>
		<button v-show="btnShow" @tap="nextPage">下一页</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			items: [],
			page: 1,
			btnShow: true
		};
	},
	onShow() {
		this.productList();
	},
	methods: {
		async toDelete(id) {
			const res = await this.$util.request({
				requestUrl: 'api/products/' + id,
				method: 'DELETE'
			});
			console.log('删除商品：', res);
			if (res !== undefined) {
				this.page = 1;
				this.productList();
			}
		},
		nextPage() {
			this.page++;
			this.productList();
		},
		toDetail(id) {
			uni.navigateTo({
				url: `/pages/product/addProduct/addProduct?id=${id}&type=modify`
			});
		},
		async productList() {
			const res = await this.$util.request({
				requestUrl: 'api/products',
				data: {
					limit: 10,
					page: this.page
				}
			});
			console.log('查询商品列表：', res);

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
};
</script>

<style lang="scss" scoped>
.image {
	width: 200rpx;
	height: 200rpx;
}
</style>
