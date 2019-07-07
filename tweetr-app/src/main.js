// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VeeValidate from 'vee-validate'
import moment from 'moment'

Vue.config.productionTip = false

window.axios = axios
axios.defaults.baseURL = 'http://127.0.0.1:3333'

Vue.use(VeeValidate)
// Global filter to format dates with momentjs
Vue.filter('timeAgo', date => moment(date).fromNow())
Vue.filter('joined', date => moment(date).format('MMMM YYYY'))
Vue.filter('dob', date => moment(date).format('MMMM Do YYYY'))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// Vue.use(VeeValidate)
// // Global filter to format dates with momentjs
// Vue.filter('timeAgo', date => moment(date).fromNow())
// Vue.filter('joined', date => moment(date).format('MMMM YYYY'))
// Vue.filter('dob', date => moment(date).format('MMMM Do YYYY'))
