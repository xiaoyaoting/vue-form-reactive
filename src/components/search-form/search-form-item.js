/*
  1. 使用h函数渲染，基于iview
  2. 解决不同问题，后期会基于多UI组件库
  3. 结合的是vue2 + composition api , 最近会更新vue3 + ts 
*/

import { h, ref } from '@vue/composition-api'

export default {
  
  setup(props, context) {


    return () => h(`Form`)
  },
}