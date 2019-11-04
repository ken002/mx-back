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
			addCategory(){
				uni.request({
						url: 'http://localhost:3000/api/category',
						method: 'POST',
						data: {
							name: this.name,
						},
						success: res => {
							console.log('添加分类',res);
						}
					});
			}
		}
	}
</script>

<style>

</style>
