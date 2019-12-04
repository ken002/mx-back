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
			<switch :checked="form.online == 1 ? true : false" @change="switch1Change" />
		</view>
		<view>
			<view>属于本店</view>
			<switch :checked="form.pType == 1 ? true : false" @change="switch2Change" />
		</view>
		<view>
			<view>上传图片/视频：(选择视频的话都得传，非视频的话只传图片)</view>
			<view>视频</view>
			<switch :checked="form.showType == 1 ? true : false" @change="switch3Change" />
		</view>
		<image :src="form.image"></image>
		<video :src="form.video"></video>
		<button @tap="uploadImage">上传图片</button>
		<button @tap="uploadVideo">上传视频</button>
		<button @tap="confirm">{{ confirmBtnName }}</button>
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
				video: '',
				intro: '',
				online: 1,
				pType: 1,
				showType: 0,
				category: ''
			},
			type: '',
			id: '',
			confirmBtnName: '确定'
		};
	},
	onLoad(option) {
		(async () => {
			console.log(option);
			this.type = option.type;
			this.id = option.id;

			await this.selectCategory();

			if (this.type === 'modify') {
				this.confirmBtnName = '修改';
				this.selectDetail();
			}
		})();
	},
	methods: {
		async selectCategory() {
			const res = await this.$util.request({
				requestUrl: 'api/category'
			});
			console.log('查询所有类别：', res);

			if (res !== undefined) {
				this.items = res.data.data;
				if (this.items.length === 0) {
					this.$util.toast('无类别可选，请先去添加类别');
				} else {
					if (this.type !== 'modify') {
						this.current = 0;
						this.form.category = this.items[0].id;
					}
				}
			}
		},
		async selectDetail() {
			const res = await this.$util.request({
				requestUrl: 'api/products/' + this.id
			});
			console.log('查询商品详情', res);
			if (res !== undefined) {
				this.form = res.data.data;
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].id === this.form.category) {
						this.current = i;
						this.form.category = this.items[i].id;
						break;
					}
				}
			}
		},
		uploadVideo() {
			var path='',me=this;
			uni.chooseVideo({
				count: 1,
				sourceType: ['camera', 'album'],
				success: function(res) {
					path = res.tempFilePath;
					
					uni.uploadFile({
						url: me.$util.url+'api/upload',
						filePath: path,
						fileType: 'video',
						name: 'file',
						success: res => {
							me.$util.toast('上传成功');
							me.form.video=JSON.parse(res.data).data.url;
						},
						fail:e=>{
							me.$util.toast('上传失败');
						}
					});
				}
			});
		},
		async uploadImage() {
			const path = await this.$util.selectImage();
			const backPath = await this.$util.uploadImage(path);
			this.form.image = backPath;
		},
		async confirm() {
			if (this.form.category === '') {
				this.$util.toast('请选择类别');
				return;
			}

			if (this.form.name === '') {
				this.$util.toast('请输入名称');
				return;
			}
			if (this.form.intro === '') {
				this.$util.toast('请输入描述');
				return;
			}

			if (this.form.image === '') {
				this.$util.toast('请上传图片');
				return;
			}

			if (this.form.showType === 1 && this.form.video === '') {
				this.$util.toast('请上传视频');
				return;
			}
			console.log(this.form);

			if (this.type === 'modify') {
				const res = await this.$util.request({
					requestUrl: 'api/products/' + this.id,
					method: 'PUT',
					data: this.form
				});
				console.log('修改商品信息', res);
				if (res !== undefined) {
					this.$util.toast('修改成功');
					setTimeout(() => {
						uni.navigateBack();
					}, 500);
				}
			} else {
				const res = await this.$util.request({
					requestUrl: 'api/products',
					method: 'POST',
					data: this.form
				});
				console.log('添加商品', res);
				if (res !== undefined) {
					this.$util.toast('添加成功');
					this.current = 0;
					this.form = {
						name: '',
						image: '',
						video: '',
						intro: '',
						online: 1,
						pType: 1,
						showType: 0,
						category: this.items[0].id,
						type: '',
						id: ''
					};
				}
			}
		},
		radioChange: function(evt) {
			for (let i = 0; i < this.items.length; i++) {
				if (this.items[i].id === evt.target.value) {
					this.current = i;
					this.form.category = this.items[i].id;
					break;
				}
			}
		},
		switch1Change: function(e) {
			if (e.target.value) {
				this.form.online = 1;
			} else {
				this.form.online = 0;
			}
		},
		switch2Change: function(e) {
			if (e.target.value) {
				this.form.pType = 1;
			} else {
				this.form.pType = 0;
			}
		},
		switch3Change: function(e) {
			if (e.target.value) {
				this.form.showType = 1;
			} else {
				this.form.showType = 0;
				this.form.video = '';
			}
		}
	}
};
</script>

<style></style>
