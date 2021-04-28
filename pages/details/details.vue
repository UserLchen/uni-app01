<template>
	<view class="detail-box">
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper">
						<swiper-item v-for="(item, index) in imglist">
							<image :src="item" mode=""></image>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<view class="prise">
			<text class="new-parise">$399</text>
			<text class="old-parise">$693</text>
		</view>
		<view class="detail-name">
			川崎KAWASAKI 羽毛球鞋 飞织透气防扭高弹 男女同款运动训练鞋k-525黑色（41）
		</view>
		<view class="detail-log">
			安踏年终盛典丨秒券满499减100丨满359减70丨满259减20丨活动限12.1-12.3丨火速下单~手慢无更多优惠<text class='detail-juan'>领卷</text>
		</view>
		<view class="detail-log">

			<view class='detail-get'>
				现在下单，明天取货
			</view>
			<view class="">
				自提点：东桃园社区3号楼
			</view>
		</view>
		<view class="goods-detail">
			<view class="goods-name">
				商品信息
			</view>
			<view class="goods-namelist">
				<view class="goods-namelist1">
					<text class='goods-listName'>品牌</text>
					<text class='goods-listContent'>川崎</text>
				</view>
				<view class="goods-namelist1">
					<text class='goods-listName'>产地</text>
					<text class='goods-listContent'>上海</text>
				</view>
				<view class="goods-namelist1">
					<text class='goods-listName'>类别</text>
					<text class='goods-listContent'>生活用品</text>
				</view>
				<view class="goods-namelist1">
					<text class='goods-listName'>产品净重（kg）</text>
					<text class='goods-listContent'>0.2</text>
				</view>

			</view>
		</view>
		<view class='tupian'>
			<image src="../../static/2222.jpg" mode=""></image>
		</view>
		<view class='tupian'>
			<image src="../../static/2222.jpg" mode=""></image>
		</view>

		<view class='tupian'>
			<image src="../../static/2222.jpg" mode=""></image>
		</view>




		<view class="goods-nav">
			<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick" @buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue';
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'
	export default {
		data() {
			return {
				imglist: [
					'../../static/2222.jpg'
					// '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/147343/24/10723/151625/5f87b2e7E3275ca73/98b91de0e7491a97.jpg!q70.dpg.webp',
					// '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/147343/24/10723/151625/5f87b2e7E3275ca73/98b91de0e7491a97.jpg!q70.dpg.webp'
				],
				options: [{
						icon: 'headphones',
						text: '客服'
					},
					{
						icon: 'cart',
						text: '购物车',
						info: 2
					},

				],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			};
		},
		components: {
			uniGoodsNav,
			uniPopup,
			uniPopupDialog
		},
		methods: {
			onClick(e) {x	
				console.log(e);
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				});
			},
			buttonClick(e) {
				this.options[1].info++;
				this.$store.commit("datainfo" , this.options[1].info)
				// this.$store.commit("datainfo" , this.options[1].info)
				
			    console.log(this.$store.getters.datainfo)
				// console.log(e);
			},
			open() {
				this.$refs.popup.open()
			}
		}
	};
</script>
<style lang="scss">
	.uni-transition {
		background-color: #fff;
	}
</style>
<style lang="scss">
	.detail-box {
		// height:calc(100vh - 100rpx);
		padding-bottom: 50px;

		// background-color: #f2f2f2;
		swiper {
			width: 750rpx;
			height: 480rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		// ,
		.prise {
			padding: 20rpx;
			list-height: 50rpx;
			color: #fff;
			background-image: linear-gradient(90deg, rgba(255, 0, 105, 0.99) 0, #ff7a00 99%);

			.new-parise {
				margin-right: 10px;
				font-size: 36rpx;
			}

			.old-parise {
				font-size: 28rpx;
				text-decoration: line-through;
			}
		}

		.goods-nav {
			position: fixed;
			bottom: 0px;
			z-index: 666;
			width: 750rpx;
		}

		.detail-name {
			padding: 20rpx;
			color: #3F536E;
			font-size: 30rpx;
		}

		.detail-log {
			width: 90%;
			padding: 20rpx;
			font-size: 15rpx;
			border-radius: 20rpx;
			color: #a1a1a1;
			background-color: #f3f3f3;
			margin: 10rpx auto
		}

		.detail-juan {
			color: #ee051c;
		}

		.detail-get {
			font-size: 30rpx;
			color: #3F536E
		}

		.goods-detail {
			padding: 20rpx;
			font-size: 25rpx;
		}

		.goods-name {
			font-size: 35rpx;
			font-weight: 500;
		}

		.goods-namelist {
			margin-top: 10rpx;
			background-color: #eeeeee;

			.goods-namelist1 {
				padding: 20rpx;
				display: flex;
				color: #ababab;

				.goods-listName {
					width: 100rpx;
					display: block;
					margin-right: 40rpx;
					border-right: 1px solid #ababab;
				}
			}
		}

		.tupian {
			width: 100%;
			height: 360rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
