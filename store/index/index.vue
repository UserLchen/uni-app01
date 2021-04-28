<template>
	<view>

	</view>
</template>

<script>
	import Vue from 'vue'
	import Vuex from 'vuex'
	Vue.use(Vuex)
	const store = new Vuex.Store({
		state: {
			data: {
				list: [],
				info: '123',
			}
		},
		mutations: {
			datainfo(state, value) {
				state.data.info = value
			}
		},
		getters: {
			doneTodos: state => {
				return state.data
			},
			datainfo: state=>{
				return state.data
			}
		},
		actions: {}
	})
	export default store
</script>

<style>

</style>
