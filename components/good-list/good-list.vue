<template>
	<view class="goods-list">
		<view class="goods-item" v-for="item in goodList" @click="goDetail">
			<image :src="item.imglist" mode=""></image>
			<view class="prise">
				<text class="new-parise">{{ item.new }}</text>
				<text class="old-parise">{{ item.old }}</text>
			</view>
			<view class="goods-name">{{ item.title }}</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	props: {
		goodList: {
			type: Array,
			default: () => []
		}
	},
	methods: {
		goDetail(){
			uni.navigateTo({
				url: '/pages/details/details'
			})
			}

		}
	
};
</script>

<style lang="scss">
.goods-list {
	padding: 0 15rpx;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	.goods-item {
		background-color: #fff;
		width: 355rpx;
		margin: 10rpx 0;
		padding: 20rpx;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;

		image {
			width: 80%;
			height: 150px;
			display: block;
			margin: 0 auto;
		}
		.prise {
			margin-top: 10rpx;
			.new-parise {
				color: $shop-color;
				margin-right: 10px;
				font-size: 36rpx;
			}
			.old-parise {
				color: #ccc;
				font-size: 28rpx;
				text-decoration: line-through;
			}
		}
		.goods-name {
			font-size: 28rpx;
			line-height: 48rpx;
			padding-top: 10rpx;
			word-break: break-all;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		}
	}
}
</style>
