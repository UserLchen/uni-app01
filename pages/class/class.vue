<template>
	<view>
		<view style="padding: 20rpx;">
			<view class="outer-input">
				<input class="uni-input" confirm-type="search" placeholder="s搜索" />
			</view>
		</view>
		<view class="flexss">
			<view class="left">
				<view>
					<view v-for="(val,index) in data" class="flex-item" :class="{back:val.stateclass}" @click="switchdata(val,index)">{{val.name}}</view>
				</view>
			</view>
			<view class="right">
				<view style="overflow: hidden;">
					<view class="flexss" v-for=" val in list" @click='goDetail'>
						<view>
							<image :src="val.url" mode="" style="height: 220rpx;width: 220rpx; border-radius: 20rpx;"></image>
						</view>
						<view class="text">
							<view class="text-title">
								<span class="xinren" v-if="val.Discount">
									新人专享
								</span>
								{{val.title}}
							</view>
							<view class="flexss " >
								<view>
									<view class="pricetext">
										{{val.price}}
									</view>
									<del class="right-pricetext">
										{{val.overduePrice}}
									</del>
								</view>
								<view class="">

								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					url: "../../static/2222.jpg",
					title: "最新炫酷跑鞋250ml",
					price: "￥0.01",
					overduePrice: "￥1.9"
				}],
				data: [{
					name: '新人专享',
					stateclass: false,
					data: [{
							url: "../../static/2222.jpg",
							title: "最新炫酷跑鞋250ml",
							price: "￥10.00",
							overduePrice: "￥80.00",
							Discount: true
						}, {
							url: "../../static/2222.jpg",
							title: "最新炫酷跑鞋250ml",
							price: "￥20.00",
							overduePrice: "￥80.00",
							Discount: true
						}, {
							url: "../../static/2222.jpg",
							title: "最新炫酷跑鞋250ml",
							price: "￥20.00",
							overduePrice: "￥60.00",
							Discount: true
						}, {
							url: "../../static/2222.jpg",
							title: "最新炫酷跑鞋250ml",
							price: "￥50.00",
							overduePrice: "￥100.00",
							Discount: true
						},
						{
							url: "../../static/2222.jpg",
							title: "最新炫酷跑鞋250ml",
							price: "￥10.00",
							overduePrice: "￥80.00",
							Discount: true
						}, {
							url: "../../static/2222.jpg",
							title: "最新炫酷跑鞋250ml",
							price: "￥20.00",
							overduePrice: "￥80.00",
							Discount: true
						}, {
							url: "../../static/2222.jpg",
							title: "最新炫酷跑鞋250ml",
							price: "￥20.00",
							overduePrice: "￥60.00",
							Discount: true
						}, {
							url: "../../static/2222.jpg",
							title: "最新炫酷跑鞋250ml",
							price: "￥50.00",
							overduePrice: "￥100.00",
							Discount: true
						},
					]
				}, {
					name: '潮流跑鞋',
					stateclass: true,
					data: [{
						url: "../../static/2222.jpg",
						title: "最新炫酷跑鞋250ml",
						price: "￥50.00",
						overduePrice: "￥100.00",
						Discount: true
					}, {
						url: "../../static/2222.jpg",
						title: "最新炫酷跑鞋250ml",
						price: "￥80.00",
						overduePrice: "￥100.00",
						Discount: true
					}, {
						url: "../../static/2222.jpg",
						title: "最新炫酷跑鞋250ml",
						price: "￥40.00",
						overduePrice: "￥100.00",
						Discount: true
					}, ]
				}, {
					stateclass: false,
					name: '炫酷跑鞋',
					data: [{
						url: "../../static/2222.jpg",
						title: "最新炫酷跑鞋250ml",
						price: "￥50.00",
						overduePrice: "￥100.00",
						Discount: true
					}, ]
				}, {
					stateclass: false,
					name: '炫酷跑鞋',
					data: [{
						url: "../../static/2222.jpg",
						title: "最新炫酷跑鞋250ml",
						price: "￥50.00",
						overduePrice: "￥100.00",
						Discount: true
					}, ]
				}, {
					stateclass: false,
					name: '炫酷跑鞋',
					data: [{
						url: "../../static/2222.jpg",
						title: "最新炫酷跑鞋250ml",
						price: "￥50.00",
						overduePrice: "￥100.00",
						Discount: true
					}, ]
				}, {
					stateclass: false,
					name: '炫酷跑鞋',
					data: [{
						url: "../../static/2222.jpg",
						title: "最新炫酷跑鞋250ml",
						price: "￥50.00",
						overduePrice: "￥100.00",
						Discount: true
					}, ]
				}, {
					stateclass: false,
					name: '炫酷跑鞋',
					data: [{
						url: "../../static/2222.jpg",
						title: "最新炫酷跑鞋250ml",
						price: "￥50.00",
						overduePrice: "￥100.00",
						Discount: true
					}, ]
				}, {
					stateclass: false,
					name: '炫酷跑鞋',
					data: [{
						url: "../../static/2222.jpg",
						title: "最新炫酷跑鞋250ml",
						price: "￥50.00",
						overduePrice: "￥100.00",
						Discount: true
					}, ]
				}, {
					stateclass: false,
					name: '炫酷跑鞋',
					data: [{
						url: "../../static/2222.jpg",
						title: "最新炫酷跑鞋250ml",
						price: "￥50.00",
						overduePrice: "￥100.00",
						Discount: true
					}, ]
				}, {
					stateclass: false,
					name: '炫酷跑鞋',
					data: [{
						url: "../../static/2222.jpg",
						title: "最新炫酷跑鞋250ml",
						price: "￥50.00",
						overduePrice: "￥100.00",
						Discount: true
					}, ]
				}, ]
			}
		},
		mounted:function(){
			uni.$on('datesss',(val)=>{
				console.log(val)
			})
		},
		methods: {
			switchdata(val, inde) {
				this.data.forEach(el => el.stateclass = false)
				val.stateclass = true;
				this.list = val.data
				console.log(this.$store.getters.doneTodos)
			},
			goDetail(){
				uni.navigateTo({
					url: '/pages/details/details'
				});
			}
		}
	}
</script>

<style lang="scss">
	.outer-input {
		padding: 0rpx 40rpx;
		background-color: #F1F1F1;
		border-radius: 50rpx;

		input {
			background-color: #F1F1F1;
			height: 68rpx;
		}
	}

	.text {
		padding: 10rpx;
		display: flex;
		flex-direction: column;

		.text-title {
			font-size: 32rpx;
			height: 120rpx;

			.xinren {
				background-color: #DD524D;
				color: #FFFFFF;
				font-size: 12rpx;
				padding: 0px 6rpx;
				border-radius: 6rpx;
			}
		}

		.pricetext {
			color: #DD524D;
			font-size: 30rpx;
			font-weight: bolder;
		}

		.right-pricetext {
			font-size: 28rpx;
		}

	}

	.flexss {
		display: flex;
	}

	.left {
		height: 80%;
	}

	.right {
		padding: 0 20rpx;
		height:1100rpx;
		overflow: auto;
	}

	.flex-item {
		width: 160rpx;
		height: 80rpx;
		background-color: #F1F1F1;
		text-align: center;
		line-height: 80rpx;
		color: #999999;
		font-size: 26rpx;
	}

	.back {
		background-color: #FFFFFF;
	}
</style>
