import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'

// iview
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    components: { App },
    router,
    store,
    template: '<App/>'
}).$mount('#app')