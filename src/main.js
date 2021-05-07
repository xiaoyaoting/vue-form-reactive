import Vue from 'vue'
import App from './App.vue'
import  iview from "iview";
Vue.config.productionTip = false
Vue.use(iview)
import 'iview/dist/styles/iview.css';
// var Child = {
//   template: "<div>123123123123</div>",
//   // created:function() {
//   //   console.log('child')
//   // }
// }
// Vue.mixin({
//   data() {
//     return {
//       data: 90
//     }
//   },
//   methods: {
//     fn() {
//       console.log('mixin methods')
//     }
//   },
//   created() {
//     // console.log('mixin')
//     this.fn()

//   }
// })

import CompositionApi from '@vue/composition-api'
Vue.use(CompositionApi)
new Vue({
  render: h => h(App),
}).$mount('#app')
