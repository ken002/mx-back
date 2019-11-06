<template>
	<view>
		<view @tap="toDetail(item.id)" v-for="(item, index) in items" :key="index">
			<image class="image" :src="item.image"></image>
			<view>{{ item.name }}</view>
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
		nextPage() {
			this.page++;
			this.productList();
		},
		toDetail(id){
			uni.navigateTo({
				url:`/pages/product/addProduct/addProduct?id=${id}&type=modify`
			})
		},
		productList() {
			uni.request({
				url: 'http://localhost:3000/api/products',
				data: {
					limit: 10,
					page: this.page
				},
				success: res => {
					console.log('查询商品(分页):', res);
					if (res.data.data.length < 10) {
						this.btnShow = false;
					}
					
					if(this.page===1){
						this.items = res.data.data;
					}else{
						this.items = this.items.concat(res.data.data);
					}
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
	.image{
		width: 200rpx;
		height: 200rpx;
	}
</style>
