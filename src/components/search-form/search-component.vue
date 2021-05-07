/*
  1. 使用h函数渲染，基于iview
  2. 解决不同问题，后期会基于多UI组件库
  3. 结合的是vue2 + composition api , 最近会更新vue3 + ts 
*/


<script>
import { h, defineComponent } from '@vue/composition-api';
import Form from "./search-form";
const HelloWorld = defineComponent(function HelloWorld() {
  return () => h('div', '456')
})
export default defineComponent({
   props: {
    queryForm: Array,
  },
  setup(props) {
    console.log(HelloWorld)
    return () => h('div', {}, [HelloWorld])
  }
})
</script>