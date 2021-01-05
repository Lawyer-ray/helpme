// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRoute from 'vue-route'
import Users from './components/Users'
import HelloWorld from "./components/HelloWorld";
import Home from "./components/Home"

Vue.config.productionTip = false
Vue.use(VueRoute)

// 配置路由

const router = new VueRoute({
  routes: [
    {path: '/', component: Home},
    {path: '/hello', component: HelloWorld},
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})


