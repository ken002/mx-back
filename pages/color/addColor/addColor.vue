<template>
	<view>
		<input v-model="form.price" type="number" placeholder="输入价格">
		<image :src="form.image"></image>
		<button @tap="uploadImage">上传图片</button>
		<button @tap="confirm">确定</button>
		<cpimg ref="cpimg" @result="cpimgOk"></cpimg>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form:{
					price:'',
					image:'',
				},
			}
		},
		methods: {
			async uploadImage() {
				// #ifdef APP-PLUS
				const path = await this.$util.selectImage();
				const backPath = await this.$util.uploadImage(path);
				this.form.image = backPath;
				// #endif
				
				// #ifndef APP-PLUS
					this.$refs.cpimg._changImg();
				// #endif
			},
			async cpimgOk(res){
				console.log(res);
				
				const backPath = await this.$util.uploadImage(res[0]);
				this.form.image = backPath;
			},
			async confirm(){
				if(this.form.price===''){
					this.$util.toast('请输入价格');
					return;
				}
				if(this.form.image===''){
					this.$util.toast('请上传色板图片');
					return;
				}
				const res = await this.$util.request({
					requestUrl: 'api/color',
					method: 'POST',
					data: this.form
				});
				console.log('添加色板', res);
				if(res){
					this.$util.toast('添加成功');
					
					this.form = {
						image: '',
						price: '',
					};
				}
			}
		}
	}
</script>

<style>

</style>
