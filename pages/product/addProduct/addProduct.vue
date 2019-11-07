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
			<switch :checked="form.online" @change="switch1Change" />
		</view>
		<view>
			<view>推荐</view>
			<switch :checked="form.hot" @change="switch2Change" />
		</view>
		<image :src="form.image"></image>
		<button @tap="uploadImage">上传图片</button>
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
				intro: '',
				online: true,
				hot: true,
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
		})
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
				for(const i=0;i<this.items.length;i++){
					if(this.items[i].id===this.form.category){
						this.current=i;
						this.form.category = this.items[i].id;
						break;
					}
				}
			}
		},
		async toUploadImage(path) {
			const backPath = await this.$util.uploadImage(path);
			this.form.image = backPath;
		},
		async uploadImage() {
			const path = await this.$util.selectImage();
			this.toUploadImage(path);
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
					this.form = {
						name: '',
						image: '',
						intro: '',
						online: true,
						hot: true,
						category: '',
						type: '',
						id: ''
					};
				}
			}
		},
		radioChange: function(evt) {
			for (let i = 0; i < this.items.length; i++) {
				if (this.items[i].id === evt.target.value) {
					this.current=i;
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
