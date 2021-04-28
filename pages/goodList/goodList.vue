<template>
	<view class='goodsList'>
	<goodslist :goodList='goodList'></goodslist>
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
				goodList: [
					{
						imglist: '../../static/1111.jpg',
						title: 'arena阿瑞娜 游泳潜水呼吸管水下呼吸器 浮潜训练游泳套装',
						new: '289',
						old: '652'
					},
					{
						imglist: '../../static/2222.jpg',
						title: '安踏男鞋休闲运动鞋男士2020秋冬耐磨保暖轻便板鞋慢跑步鞋子户外训练旅游 -5黑【推荐】 42',
						new: '2589',
						old: '6352'
					},
					{
						imglist: '../../static/3333.jpg',
						title: 'arena阿瑞娜 游泳潜水呼吸管水下呼吸器 浮潜训练游泳套装',
						new: '589',
						old: '652'
					},
					{
						imglist: '../../static/1111.jpg',
						title: '安踏男鞋休闲运动鞋男士2020秋冬耐磨保暖轻便板鞋慢跑步鞋子户外训练旅游 -5黑【推荐】 42',
						new: '2589',
						old: '6352'
					},
					{
						imglist: '../../static/4444.jpg',
						title: '外训练旅游 -5黑【推荐】 42',
						new: '259',
						old: '6352'
					},
					{
						imglist: '../../static/2222.jpg',
						title: '安踏男鞋休闲运动鞋男士2020秋冬耐磨保暖轻便板鞋慢跑步鞋子户外训练旅游 -5黑【推荐】 42',
						new: '2589',
						old: '6352'
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang='scss'>
.goodsList{
	background-color: #eee;
}

</style>
