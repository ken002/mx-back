<template>
	<view>
		<view @tap="toModify(item.id)" v-for="(item,index) in items">
			<image :src="item.image"></image>
			<text>{{item.intro}}</text>
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
		onShow(){
			this.selectAds();
		},
		methods: {
			toModify(id){
				uni.navigateTo({
					url: `/pages/ad/addAd/addAd?id=${id}&type=modify`
				});
			},
			async toDelete(id){
				const res = await this.$util.request({
					requestUrl:'api/ad/'+id,
					method:'DELETE'
				});
				console.log('删除广告',res);
				
				if(res!==undefined){
					this.$util.toast('删除成功');
					this.selectAds();
				}
			},
			async selectAds() {
				const res = await this.$util.request({
					requestUrl:'api/ads'
				});
				console.log('查询所有广告：',res);
				
				if(res!==undefined){
					this.items = res.data.data;
				}
			},
		}
	}
</script>

<style>

</style>
