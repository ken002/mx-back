<template>
	<view>
		<view v-for="(item,index) in items" :key="index">
			{{item.name}}
		</view>
		<button v-show="btnShow" @tap="nextPage">下一页</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items:[],
				page:1,
				btnShow:true
			}
		},
		onLoad(){
			this.productList();
		},
		methods: {
			nextPage(){
				this.page++;
				this.productList();
			},
			productList() {
				uni.request({
					url: 'http://localhost:3000/api/products',
					data:{
						limit:10,
						page:this.page
					},
					success: res => {
						console.log(res);
						if(res.data.data.length<10){
							this.btnShow=false;
						}
						this.items=this.items.concat(res.data.data);
					}
				});
			},
		}
	}
</script>

<style>

</style>
