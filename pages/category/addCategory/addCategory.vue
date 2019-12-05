<template>
	<view>
		<view>
			<input v-model="name" placeholder="请输入类别" type="text">
		</view>
		<button @tap="addCategory">确定</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:''
			}
		},
		methods: {
			async addCategory(){
				if(this.name===''){
					this.$util.toast('请输入类别');
					return;
				}
				
				const res = await this.$util.request({
					requestUrl:'api/category',
					method:'POST',
					data: {
						name: this.name,
					},
				});
				console.log('添加分类',res);
				
				if(res){
					this.$util.toast('添加成功');
					this.name='';
				}
			}
		}
	}
</script>

<style>

</style>
