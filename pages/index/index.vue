<template>
	<view class="home">
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper">
						<swiper-item v-for="(item, index) in imglist"><image :src="item" mode=""></image></swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<view class="home-nav">
			<view class="nav-item" @click="navigateClick">
				<view class="nav-item-tubiao">
					<image src="../../static/yifu.png" mode=""></image>
				</view>
				商品列表
			</view>
			<view class="nav-item" @click='contactUs'>
				<view class="nav-item-tubiao"><image src="../../static/juan.png" mode=""></image></view>
				优惠劵
			</view>
			<view class="nav-item">
				<view class="nav-item-tubiao"><image src="../../static/wuliu.png" mode=""></image></view>
				物流
			</view>
			<view class="nav-item">
				<view class="nav-item-tubiao"><image src="../../static/fenlei.png" mode=""></image></view>
				分类
			</view>
		</view>
		<view class="hot-goods">
			<view class="good-title">商品列表</view>
			<view>
			<goodslist :goodList='goodList'></goodslist>
			</view>
		</view>
	</view>
</template>

<script>
import goodslist from '../../components/good-list/good-list.vue';
export default {
	components: {
		goodslist
	},
	data() {
		return {
			imglist: ['//m.360buyimg.com/mobilecms/s700x280_jfs/t1/145453/10/4081/167087/5f225087E6b297412/1186c60ce342e5ab.jpg!cr_1125x445_0_171!q70.jpg.dpg', '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/141855/11/5982/101447/5f3e6b08E5b839492/f8d78f1e21cd29e3.jpg!cr_1125x445_0_171!q70.jpg.dpg', '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/126858/8/331/235723/5eb4c7a0E42f135fc/103aa967e0840cd8.jpg!cr_1125x445_0_171!q70.jpg.dpg', '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/151872/32/7124/136624/5fbcad3bEfa6276bf/74a1c9fc7078b29b.jpg!q70.jpg.dpg'],
			goodList: [
				{
					imglist: '../../static/1111.jpg',
					title: '川崎KAWASAKI 羽毛球鞋 飞织透气防扭高弹 男女同款运动训练鞋k-525黑色（41）',
					new: '2589',
					old: '6352'
				},
				{
					imglist: '../../static/1111.jpg',
					title: '川崎KAWASAKI 羽毛球鞋 飞织透气防扭高弹',
					new: '2589',
					old: '6352'
				},
				{
					imglist: '../../static/1111.jpg',
					title: '川崎KAWASAKI 羽毛球鞋 飞织透气防扭高弹 男女同款运动训练鞋k-525黑色（41）',
					new: '2589',
					old: '6352'
				}
			]
		};
	},
	onLoad() {},
	methods: {
		navigateClick() {
			console.log('1');
			uni.navigateTo({
				url: '/pages/goodList/goodList'
			});
		},
		contactUs(){
			uni.navigateTo({
				url: '/pages/contact/contact'
			});
			}
	}
};
</script>

<style lang="scss">
.home {
	swiper {
		width: 750rpx;
		height: 380rpx;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.home-nav {
		display: flex;
		justify-content: space-between;
		padding-bottom: 10rpx;

		.nav-item {
			width: 25%;
			text-align: center;
			padding-bottom: 20rpx;
			font-size: 25rpx;
			.nav-item-tubiao {
				width: 120rpx;
				height: 120rpx;
				line-height: 120rpx;
				margin: 20rpx auto 10rpx auto;
				// background-color: #cb0000;
				border-radius: 60rpx;
				color: #fff;
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	.hot-goods {
		background-color: #eee;
		overflow: hidden;
		.good-title {
			height: 50px;
			line-height: 50px;
			color: $shop-color;
			text-align: center;
			letter-spacing: 20px;
			background-color: #fff;
			margin: 7px 0px;
		}
	}
	.goods-list {
		padding: 0 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.goods-item {
			background-color: #fff;
			width: 50%;
			margin: 10rpx 0;
			padding: 15rpx;
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
				line-height: 50rpx;
				padding-top: 10rpx;
				padding-bottom: 15rpx;
			}
		}
	}
}
</style>
