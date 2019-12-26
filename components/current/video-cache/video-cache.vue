<template>
	<video :src="resource"></video>
</template>

<script>
export default {
	props: {
		src: {
			type: String,
			default: '',
			required: true
		},
		saveDirectory: {
			type: String,
			default: '_downloads/'
		},
		errorUrl: {
			type: String,
			default: ''
		},
	},
	computed: {
		resource() {
			if (!this.isCached && this.error) {
				// 加载失败
				return this.errorUrl;
			} else if (this.isCached) {
				return this.localFile;
			} else if (!this.isCached && !this.error) {
				// 正在加载
				return this.errorUrl;
			}
		}
	},
	mounted() {
		this.init();
	},
	data() {
		return {
			error: false,
			isCached: false,
			localFile: null
		};
	},
	methods: {
		async init() {
			// #ifdef APP-PLUS || APP-PLUS-NVUE
			let isCache = await this.isCache(this.src);
			if (!isCache) {
				let filePath = await this.downloadFile(this.src).catch(e => {
					this.error = true;
				});
				this.isCached = true;
				this.localFile = filePath;
			} else {
				this.isCached = true;
				this.localFile = isCache;
			}
			// #endif
			// #ifndef APP-PLUS || APP-PLUS-NVUE
			this.isCached = true;
			this.localFile = this.src;
			// #endif
		},
		downloadFile(url) {
			return new Promise((resolve, reject) => {
				let savePath = this.saveDirectory + this.getFileName(url);
				let task = plus.downloader.createDownload(
					url,
					{
						filename: savePath
					},
					(download, status) => {
						if (status == 200) {
							resolve(savePath);
						} else {
							console.log('文件下载失败');
							reject();
						}
					}
				);
				task.start();
			});
		},
		isCache(url) {
			let savePath = this.saveDirectory + this.getFileName(url);
			return new Promise((resolve, reject) => {
				plus.io.resolveLocalFileSystemURL(
					savePath,
					entry => {
						resolve(savePath);
					},
					e => {
						console.log(e);
						resolve(null);
					}
				);
			});
		},
		getFileName(path) {
			return path.substring(path.lastIndexOf('/') + 1);
		},
	}
};
</script>

<style lang="scss" scoped>
video {
	width: 100%;
	height: 100%;
}
</style>
