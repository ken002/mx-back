<template>
	<view>
		<view>
			<view>安卓</view>
			<switch :checked="form.platform == 1 ? true : false" @change="switch1Change" />
		</view>
		<view>
			<view>整包</view>
			<switch :checked="form.allUpdate == 1 ? true : false" @change="switch2Change" />
		</view>
		<input v-model="form.realAppVersion" type="text" placeholder="输入版本,如1.0.0" />
		<input v-model="form.appVersion" type="number" placeholder="输入版本值,如100" />
		<textarea v-model="form.updateContent" placeholder="输入更新内容" />
		<view ref="input" class="input"></view>
		<button @tap="confirm">确定</button>
	</view>
</template>

<script>
export default {
	mounted() {
		var input = document.createElement('input');
		input.type = 'file';
		input.onchange = event => {
			console.log(event);
			var file = event.target.files[0];
			//上传方法
			this.uploadPackage(file);
		};
		this.$refs.input.$el.appendChild(input);
	},
	data() {
		return {
			form: {
				platform: 1,
				appVersion: '',
				realAppVersion:'',
				updateContent: '',
				allUpdate: 1,
				downloadUrl: ''
			}
		};
	},
	methods: {
		switch1Change(e) {
			if (e.target.value) {
				this.form.platform = 1;
			} else {
				this.form.platform = 0;
			}
		},
		switch2Change(e) {
			if (e.target.value) {
				this.form.allUpdate = 1;
			} else {
				this.form.allUpdate = 0;
			}
		},
		uploadPackage(path) {
			const me=this;
			var fData = new FormData();
			fData.append('file', path);
			var xhr = new XMLHttpRequest();
			xhr.open('POST', `${this.$util.url}api/upload`, true);
			xhr.onload = function(e) {
				console.log(e);
				
				if(e.target.readyState===4 && e.target.status===200){
					me.$util.toast('上传成功');
					me.form.downloadUrl=JSON.parse(e.target.response).data.url;
				}else{
					me.$util.toast('上传失败');
				}
			};
			xhr.send(fData);
		},
		async confirm() {
			if (this.form.realAppVersion === '') {
				this.$util.toast('请输入版本');
				return;
			}
			if (this.form.appVersion === '') {
				this.$util.toast('请输入版本值');
				return;
			}
			if (this.form.updateContent === '') {
				this.$util.toast('请输入更新内容');
				return;
			}
			if (this.form.downloadUrl === '') {
				this.$util.toast('请上传安装包');
				return;
			}

			const res = await this.$util.request({
				requestUrl: 'api/version',
				method: 'POST',
				data: this.form
			});
			console.log('添加版本', res);
			if(res){
				this.$util.toast('添加成功');
				setTimeout(()=>{
					uni.navigateBack();
				},500)
			}
		}
	}
};
</script>

<style></style>
