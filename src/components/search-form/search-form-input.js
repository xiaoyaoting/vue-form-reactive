/*
  1. 使用h函数渲染，基于iview
  2. 解决不同问题，后期会基于多UI组件库
  3. 结合的是vue2 + composition api , 最近会更新vue3 + ts 
*/

import { h, ref } from '@vue/composition-api'

export default {
  props: {
    queryForm: Array,
  },
  modle: {
    prop: 'queryData',
    event: 'change'
  },
  setup(props, context) {
    const queryForm = props.queryForm
    const queryData = context.attrs.value
    const sea = ref(null)
    let nodeArr = []
    function joinItem() {
      for (let i = 0; i < queryForm.length; i++) {
        let key = defValue(queryData, queryForm[i].key);
        console.log(key);
        if (queryForm[i].nodeType === 'Select') {
          var options = joinOptions(queryForm[i].options)
        }
        const textIn = () => h(queryForm[i].nodeType, { props: { value: queryData[key] }, attrs: { placeholder: queryForm[i].placeholder }, on: { input(val) { queryData[key] = val; changeForm() } } }, options);
        const item = h(`Form-item`, { props: { label: queryForm[i].label + '：', prop: queryForm[i].key } }, [textIn()])
        const col8 = h(`Col`, { props: { span: 8 } }, [item])
        nodeArr.push(col8)
      }
    }

    function changeForm() {
      console.log(sea);
      context.emit('change', queryData)
    }

    function joinOptions(optionsArr) {
      return optionsArr.map(item => {
        return h(`Option`, { props: { value: item.key, key: item.key } }, `${item.label}`)
      })
    }

    function defValue(obj, cKey) {
      return Object.keys(obj).find(key => key == cKey)
    }

    joinItem()

    return () => h(`Form`, {  ref:'sea', props: { model: queryData }, attrs: {  }},[h(`Row`, { props: { gutter: 30 } }, nodeArr)],)
  },
}