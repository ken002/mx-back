<template>
	<view>
		<input v-model="form.intro" type="text" placeholder="输入说明">
		<image :src="form.image"></image>
		<button @tap="uploadImage">上传图片</button>
		<button @tap="confirm">{{ confirmBtnName }}</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form:{
					intro:'',
					image:'',
				},
				confirmBtnName: '确定',
				type:null,
				id:null,
			}
		},
		onLoad(option) {
			console.log(option);
			this.type = option.type;
			this.id = option.id;
			
			if (this.type === 'modify') {
				this.confirmBtnName = '修改';
				this.selectDetail();
			}
		},
		methods: {
			async uploadImage() {
				const path = await this.$util.selectImage();
				const backPath = await this.$util.uploadImage(path);
				this.form.image = backPath;
			},
			async confirm(){
				if(this.form.intro===''){
					this.$util.toast('请输入说明');
					return;
				}
				if(this.form.image===''){
					this.$util.toast('请上传banner图');
					return;
				}
				
				if (this.type === 'modify') {
					const res = await this.$util.request({
						requestUrl: 'api/ad/' + this.id,
						method: 'PUT',
						data: this.form
					});
					console.log('修改广告', res);
					if (res) {
						this.$util.toast('修改成功');
						setTimeout(() => {
							uni.navigateBack();
						}, 500);
					}
				}else{
					const res = await this.$util.request({
						requestUrl: 'api/ad',
						method: 'POST',
						data: this.form
					});
					console.log('添加广告', res);
					if(res){
						this.$util.toast('添加成功');
						
						this.form = {
							image: '',
							intro: '',
						};
					}
				}
				
			},
			async selectDetail() {
				const res = await this.$util.request({
					requestUrl: 'api/ad/' + this.id
				});
				console.log('查询广告', res);
				if (res) {
					this.form = res.data.data[0];
				}
			},
		}
	}
</script>

<style>

</style>
