<template>
	<view>
		<textarea v-model="form.intro" placeholder="内容" />
		
		<button @tap="confirm">{{ confirmBtnName }}</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				confirmBtnName:'确定',
				form:{
					intro:''
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
				if(this.form.intro===''){
					this.$util.toast('请输入内容');
					return;
				}
				
				if (this.type === 'modify') {
					const res = await this.$util.request({
						requestUrl: 'api/recharge/' + this.id,
						method: 'PUT',
						data: this.form
					});
					console.log('修改充值优惠', res);
					if (res) {
						this.$util.toast('修改成功');
						setTimeout(() => {
							uni.navigateBack();
						}, 500);
					}
				}else{
					const res = await this.$util.request({
						requestUrl: 'api/recharge',
						method: 'POST',
						data: this.form
					});
					console.log('添加充值优惠', res);
					if(res){
						this.$util.toast('添加成功');
						
						this.form = {
							intro: '',
						};
					}
				}
				
			},
			async selectDetail() {
				const res = await this.$util.request({
					requestUrl: 'api/recharge/' + this.id
				});
				console.log('查询某优惠', res);
				if (res) {
					this.form = res.data.data[0];
				}
			},
		}
	}
</script>

<style>

</style>
