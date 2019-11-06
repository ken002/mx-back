<template>
	<view>
		<view>选择类别</view>
		<radio-group v-if="items.length>0" @change="radioChange">
			<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.id">
				<view><radio :value="item.id" :checked="index === current" /></view>
				<view>{{ item.name }}</view>
			</label>
		</radio-group>
		<view><input v-model="form.name" placeholder="输入名称" type="text" /></view>
		<view><input v-model="form.intro" placeholder="输入描述" type="text" /></view>
		<view>
			<view>上架</view>
			<switch :checked="form.online" @change="switch1Change" />
		</view>
		<view>
			<view>推荐</view>
			<switch :checked="form.hot" @change="switch2Change" />
		</view>
		<image :src="form.image"></image>
		<button @tap="uploadImage">上传图片</button>
		<button @tap="confirm">{{confirmBtnName}}</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			items: [],
			current: 0,
			form: {
				name: '',
				image: '',
				intro: '',
				online: true,
				hot: true,
				category: '',
			},
			type:'',
			id:'',
			confirmBtnName:'确定',
		};
	},
	onLoad(option) {
		console.log(option);
		this.type=option.type;
		this.id=option.id;
		if(this.type==='modify'){
			this.confirmBtnName='修改';
			this.selectDetail();
		}
		
		this.selectCategory();
	},
	methods: {
		selectCategory() {
			uni.request({
				url: 'http://localhost:3000/api/category',
				success: res => {
					console.log('查询商品分类:', res);
					this.items = res.data.data;
					this.form.category = this.items[0].id;
				}
			});
		},
		selectDetail(){
			uni.request({
				url: 'http://localhost:3000/api/products/'+this.id,
				success: res => {
					console.log('查询某商品:', res);
					
					this.form=res.data.data;
				}
			});
		},
		uploadImage() {
			uni.chooseImage({
				count: 1, //默认9
				sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album'], //从相册选择
				success: res => {
					uni.uploadFile({
						url: 'http://localhost:3000/api/upload',
						filePath: res.tempFilePaths[0],
						fileType: 'image',
						name: 'file',
						success: res => {
							console.log('上传图片:', res);
							this.form.image = JSON.parse(res.data).data.url;
						}
					});
				}
			});
		},
		confirm() {
			if(this.form.name===''){
				uni.showToast({
				    title: '请输入名称',
				});
				return;
			}
			if(this.form.intro===''){
				uni.showToast({
				    title: '请输入描述',
				});
				return;
			}
			if(this.form.image===''){
				uni.showToast({
				    title: '请上传图片',
				});
				return;
			}
			
			console.log(this.form);
			
			if(this.type==='modify'){
				uni.request({
					url: 'http://localhost:3000/api/products/'+this.id,
					method: 'PUT',
					data: this.form,
					success: res => {
						console.log('修改商品:',res);
						
						uni.showToast({
						    title: res.data.message,
						});
						
						if(res.data.code==1){
							uni.navigateBack();
						}
					}
				});
			}else{
				uni.request({
					url: 'http://localhost:3000/api/products',
					method: 'POST',
					data: this.form,
					success: res => {
						console.log('添加商品:',res);
						
						uni.showToast({
						    title: res.data.message,
						});
						
						if(res.data.code==1){
							this.form={
								name: '',
								image: '',
								intro: '',
								online: true,
								hot: true,
								category: '',
								type:'',
								id:'',
							};
						}
					}
				});
			}
		},
		radioChange: function(evt) {
			for (let i = 0; i < this.items.length; i++) {
				if (this.items[i].id === evt.target.value) {
					this.form.category = this.items[i].id;
					break;
				}
			}
		},
		switch1Change: function(e) {
			this.form.online = e.target.value;
		},
		switch2Change: function(e) {
			this.form.hot = e.target.value;
		}
	}
};
</script>

<style></style>
