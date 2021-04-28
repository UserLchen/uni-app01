<template>
	<view class="box-all">

		<view class="user-box">
			<view class="userdata">
				<view class="user-img">
					<image src="../../static/3.png" mode=""></image>
				</view>
				<view class="user-text">
					<view>用户名称</view>
					<view class="text">账号： <span>465465465465456</span></view>
				</view>
			</view>
			<view class="money-box">
				<view class="money-item">
					余额 <span>
						￥0
					</span>
					>
				</view>
				<view class="money-item">
					优惠券
					<span>
						2
					</span>
					张
				</view>
			</view>
		</view>
		<uni-card title="我的订单" extra="查看全部 >" is-shadow="true" style="border-radius: 20rpx; border: none;">
			<view class="box">
				<view class="box-item">
					<view class="box-img">
						<image src="../../static/icon.png" mode=""></image>
					</view>
					<view class="box-text">待付款</view>
				</view>
				<view class="box-item">
					<view class="box-img">
						<image src="../../static/icon.png" mode=""></image>
					</view>
					<view class="box-text">待提货</view>
				</view>
				<view class="box-item">
					<view class="box-img">
						<image src="../../static/icon.png" mode=""></image>
					</view>
					<view class="box-text">待付款</view>
				</view>
				<view class="box-item">
					<view class="box-img">
						<image src="../../static/icon.png" mode=""></image>
					</view>
					<view class="box-text">售后</view>
				</view>
			</view>
		</uni-card>
		<uni-card title="赚钱中心"  is-shadow="true" style="border-radius: 20rpx; border: none;">
			<view class="box">
				<view class="box-item">
					<view class="box-img">
						<image src="../../static/icon.png" mode=""></image>
					</view>
					<view class="box-text">待付款</view>
				</view>
			</view>
		</uni-card>
		<uni-card title="我的服务"  is-shadow="true" style="border-radius: 20rpx; border: none;">
			<view class="box">
				<view class="box-item">
					<view class="box-img">
						<image src="../../static/icon.png" mode=""></image>
					</view>
					<view class="box-text">待付款</view>
				</view>
				<view class="box-item">
					<view class="box-img">
						<image src="../../static/icon.png" mode=""></image>
					</view>
					<view class="box-text">待付款</view>
				</view>
				<view class="box-item">
					<view class="box-img">
						<image src="../../static/icon.png" mode=""></image>
					</view>
					<view class="box-text">待付款</view>
				</view>
				<view class="box-item">
					<view class="box-img">
						<image src="../../static/icon.png" mode=""></image>
					</view>
					<view class="box-text">待付款</view>
				</view>
				<view class="box-item">
					<view class="box-img">
						<image src="../../static/icon.png" mode=""></image>
					</view>
					<view class="box-text">待付款</view>
				</view>
				<view class="box-item">
					<view class="box-img">
						<image src="../../static/icon.png" mode=""></image>
					</view>
					<view class="box-text">待付款</view>
				</view>

			</view>
		</uni-card>
	</view>
</template>

<script>
	import uniCard from '@/components/uni-card/uni-card.vue'

	export default {
		components: {
			uniCard
		},
		data() {
			return {

			}
		},
		methods: {


		}
	}
</script>

<style lang="scss">
	.user-box{
	   background-color: rgb(216,0,0);
	   padding-bottom: 20rpx;
	}
	.userdata{
		display: flex;
		padding-left: 20rpx;
		.user-img{
			width: 90rpx;
			height: 90rpx;
			border-radius: 50%;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.user-text{
			color: #FFFFFF;
			padding-left: 20rpx;
			padding-top: 10rpx;
			.text{
				font-size: 20rpx;
			}
		}
	}
	.money-box {
		width: 100%;
		display: flex;

		.money-item {
			line-height: 40rpx;
			width: 50%;
			display: flex;
			justify-content: center;
			font-size: 24rpx;
		    color: #F1F1F1;
			text-align: center;

			span {
				line-height: 40rpx;
				display: inline-block;
				padding-left: 20rpx;
				padding-right: 10rpx;
				font-size: 36rpx;
				color: #FFFFFF;
				font-weight: bolder;
			}
		}
	}

	.box-all {
		background-color: #F1F1F1;
	}

	.uni-card__header-title-text>>> {
		font-weight: bolder;
	}

	.box {
		margin-top: 30rpx;
		width: 100%;
		display: flex;
		flex-wrap: wrap;

		.box-item {
			width: 160rpx;
			height: 180rpx;

			.box-img {
				width: 160rpx;
				height: 100rpx;
				display: flex;
				justify-content: center;

				image {
					width: 70rpx;
					height: 70rpx;
				}
			}

			.box-text {
				width: 100%;
				text-align: center;
				font-size: 28rpx;
				color: #555555;
			}
		}
	}
</style>
