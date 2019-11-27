<template>
	<view>
		<input v-model="intro" type="text" placeholder="输入说明">
		<image :src="image"></image>
		<button @tap="uploadImage">上传图片</button>
		<button @tap="confirm">{{ confirmBtnName }}</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				intro:'',
				image:'',
				confirmBtnName: '确定'
			}
		},
		methods: {
			async toUploadImage(path) {
				const backPath = await this.$util.uploadImage(path);
				this.image = backPath;
			},
			async uploadImage() {
				const path = await this.$util.selectImage();
				this.toUploadImage(path);
			},
			confirm(){
				if(this.intro===''){
					this.$util.toast('请输入说明');
					return;
				}
				if(this.image===''){
					this.$util.toast('请上传banner图');
					return;
				}
			}
		}
	}
</script>

<style>

</style>
