<template>
	<view>
		<view @tap="toModify(item.id)" v-for="(item,index) in items">
			<view>{{item.title}}</view>
			<view>{{item.content}}</view>
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
			this.selectNotices();
		},
		methods: {
			toModify(id){
				uni.navigateTo({
					url: `/pages/notice/addNotice/addNotice?id=${id}&type=modify`
				});
			},
			async toDelete(id){
				uni.showModal({
					title: '删除',
					content: '确定删除？',
					success: async res => {
						if (res.confirm) {
							const res = await this.$util.request({
								requestUrl:'api/notice/'+id,
								method:'DELETE'
							});
							console.log('删除公告',res);
							
							if(res!==undefined){
								this.$util.toast('删除成功');
								this.selectNotices();
							}
						}
					}
				});
			},
			async selectNotices() {
				const res = await this.$util.request({
					requestUrl:'api/notices'
				});
				console.log('查询所有公告：',res);
				
				if(res!==undefined){
					this.items = res.data.data;
				}
			},
		}
	}
</script>

<style>

</style>
