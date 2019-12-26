<template>
	<view>
		<view @tap="toModify(item.id)" v-for="(item, index) in items">
			<view class="image-container">
				<image-cache :src="item.image"></image-cache>
			</view>
			<text>{{ item.intro }}</text>
			<button @tap.stop="toDelete(item.id)">删除</button>
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
	onShow() {
		this.selectAds();
	},
	methods: {
		toModify(id) {
			uni.navigateTo({
				url: `/pages/ad/addAd/addAd?id=${id}&type=modify`
			});
		},
		async toDelete(id) {
			uni.showModal({
				title: '删除',
				content: '确定删除？',
				success: async res => {
					if (res.confirm) {
						const res = await this.$util.request({
							requestUrl: 'api/ad/' + id,
							method: 'DELETE'
						});
						console.log('删除广告', res);

						if (res) {
							this.$util.toast('删除成功');
							this.selectAds();
						}
					}
				}
			});
		},
		async selectAds() {
			const res = await this.$util.request({
				requestUrl: 'api/ads'
			});
			console.log('查询所有广告：', res);

			if (res) {
				this.items = res.data.data;
			}
		}
	}
};
</script>

<style></style>
