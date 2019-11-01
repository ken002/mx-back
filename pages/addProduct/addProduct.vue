<template>
	<view>
		<view>选择类别</view>
		<radio-group @change="radioChange">
			<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.id">
				<view><radio :value="item.id" :checked="index === current" /></view>
				<view>{{ item.name }}</view>
			</label>
		</radio-group>
		<view><input v-model="form.name" placeholder="输入名称" type="text" /></view>
		<view><input v-model="form.intro" placeholder="输入描述" type="text" /></view>
		<view>
			<view>上架</view>
			<switch checked @change="switch1Change" />
		</view>
		<view>
			<view>推荐</view>
			<switch checked @change="switch2Change" />
		</view>

		<button @tap="uploadImage">上传图片</button>
		<button @tap="confirm">确定</button>
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
				category: ''
			}
		};
	},
	onLoad() {
		this.selectCategory();
	},
	methods: {
		selectCategory() {
			uni.request({
				url: 'http://localhost:3000/api/category',
				success: res => {
					console.log('商品分类', res);
					this.items = res.data.data;
					this.form.category = this.items[0].id;
				}
			});
		},
		uploadImage() {
			uni.chooseImage({
				count: 1, //默认9
				sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album'], //从相册选择
				success: res => {
					this.image = res.tempFilePaths[0];

					uni.uploadFile({
						url: 'http://localhost:3000/api/upload',
						filePath: this.image,
						fileType: 'image',
						name: 'file',
						success: res => {
							console.log('上传图片:', res);
							this.form.image = JSON.parse(res.data).data.url;
						},
						fail: e => {
							console.log(e);
						}
					});
				}
			});
		},
		confirm() {
			console.log(this.form);
			uni.request({
				url: 'http://localhost:3000/api/products',
				method: 'POST',
				data: this.form,
				success: res => {
					console.log(res);
				}
			});
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
