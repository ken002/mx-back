<template>
	<view>
		<view>
			筛选：
			<input v-model="name" type="text" placeholder="请输入商品关键字" />
			<button @tap="searchProduct">搜索</button>
		</view>

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
			btnShow: true,
			name: ''
		};
	},
	onShow() {
		this.productList();
	},
	methods: {
		searchProduct() {
			if (this.name === '') {
				this.$util.toast('请输入商品名称关键字');
				return;
			}

			this.page = 1;
			this.toSearch();
		},
		async toSearch() {
			const res = await this.$util.request({
				requestUrl: 'api/products',
				data: {
					limit: 10,
					page: this.page,
					name: this.name,
					pType:null,
					online:null,
				}
			});
			console.log('关键字搜索：', res);
			if (res !== undefined) {
				if (res.data.data.length > 0) {
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
		},
		async toDelete(id) {
			uni.showModal({
				title: '删除',
				content: '确定删除？',
				success: async res => {
					if (res.confirm) {
						const res = await this.$util.request({
							requestUrl: 'api/products/' + id,
							method: 'DELETE'
						});
						console.log('删除商品：', res);
						if (res !== undefined) {
							this.page = 1;
							this.productList();
						}
					}
				}
			});
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
					page: this.page,
					name: null,
					pType:null,
					online:null,
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
