import Vue from 'vue'
import App from './App'
import store from './store/index/index.vue'
import {
	myRequest
} from 'util/api.js'

Vue.prototype.$store = store
Vue.config.productionTip = false
Vue.prototype.$myRequest = myRequest
App.mpType = 'app'

const app = new Vue({
	...App,
	store
})
app.$mount()
