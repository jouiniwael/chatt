// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from "bootstrap-vue";
import VueChatScroll from 'vue-chat-scroll';
import store from './store/index';

import io from 'socket.io-client';
// let socket = null;
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import './assets/css/loading.css'
import './assets/css/loading-btn.css'


// if (process.env.NODE_ENV === 'development') {
//   socket = io('http://localhost:3000');
// } else {
//   socket = io('/');
// }



// const URL = "http://localhost:3000";
// const socket = io(URL, { autoConnect: false });

// export default socket;
// socket.onAny((event, ...args) => {
//   console.log(event, args);
// });

 

Vue.use(BootstrapVue);
Vue.use(VueChatScroll);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')