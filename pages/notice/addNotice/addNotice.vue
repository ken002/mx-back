<template>
	<view>
		<input v-model="form.title" type="text" placeholder="标题">
		<textarea v-model="form.content" placeholder="公告内容" />
		
		<button @tap="confirm">{{ confirmBtnName }}</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				confirmBtnName:'确定',
				form:{
					title:'',
					content:''
				},
				type:null,
				id:null,
			}
		},
		onLoad(option){
			console.log(option);
			this.type = option.type;
			this.id = option.id;
			
			if (this.type === 'modify') {
				this.confirmBtnName = '修改';
				this.selectDetail();
			}
		},
		methods: {
			async confirm(){
				if(this.form.title===''){
					this.$util.toast('请输入标题');
					return;
				}
				if(this.form.content===''){
					this.$util.toast('请输入内容');
					return;
				}
				
				if (this.type === 'modify') {
					const res = await this.$util.request({
						requestUrl: 'api/notice/' + this.id,
						method: 'PUT',
						data: this.form
					});
					console.log('修改公告', res);
					if (res) {
						this.$util.toast('修改成功');
						setTimeout(() => {
							uni.navigateBack();
						}, 500);
					}
				}else{
					const res = await this.$util.request({
						requestUrl: 'api/notice',
						method: 'POST',
						data: this.form
					});
					console.log('添加公告', res);
					if(res){
						this.$util.toast('添加成功');
						
						this.form = {
							title: '',
							content: '',
						};
					}
				}
				
			},
			async selectDetail() {
				const res = await this.$util.request({
					requestUrl: 'api/notice/' + this.id
				});
				console.log('查询公告', res);
				if (res) {
					this.form = res.data.data[0];
				}
			},
		}
	}
</script>

<style>

</style>
