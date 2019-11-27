<template>
	<view>
		<view @tap="toModify" v-for="(item,index) in items">
			<image :src="item.image"></image>
			<text>{{item.intro}}</text>
			<button @tap.stop="toDelete(item.id)">删除</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items:[]
			}
		},
		methods: {
			toModify(){
				
			},
			toDelete(){
				
			}
		}
	}
</script>

<style>

</style>
