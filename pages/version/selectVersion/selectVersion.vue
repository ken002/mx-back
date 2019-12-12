<template>
	<view>
		<view v-for="(item, index) in items" :key="index">
			<view>
				<text v-if="item.platform===1">安卓</text>
				<text v-else>ios</text>
				<text>{{ item.appVersion }}</text>
				<button @tap="deleteVersion(item.id)">删除</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items:[],
			}
		},
		onLoad() {
			this.selectVersions();
		},
		methods: {
			async deleteVersion(id){
				uni.showModal({
					title: '删除',
					content: '确定删除？',
					success: async res => {
						if (res.confirm) {
							const res = await this.$util.request({
								requestUrl:'api/version/'+id,
								method:'DELETE'
							});
							console.log('删除某版本',res);
							
							if(res){
								this.$util.toast('删除成功');
								this.selectVersions();
							}
						}
					}
				});
			},
			async selectVersions(){
				const res = await this.$util.request({
					requestUrl:'api/versions'
				});
				console.log('查询所有版本：',res);
				
				if(res){
					this.items = res.data.data;
				}
			}
			
		}
	}
</script>

<style>

</style>
