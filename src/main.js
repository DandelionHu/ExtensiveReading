import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Element from 'element-ui'

/* 引入mock.js */
require('./mock')

Vue.use(Element);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
