# vue-form-reactive （Vue + iView 动态表单组件, 可自定义表单组件）

## Introduction
```
vue-form-reactive is a reactive form component base on iview. You just need to write descriptors of the data you want, vue-form-reactive will generate the form automatically.

vue-form-reactive 是基于iview的动态表单组件。您只需编写所需数据的描述符 ，vue-form-reactive 将自动生成表单。
```

### Usage Example
``` vue
<template>
  <div>
    <SearchForm ref="search" :formDescriptors="formDescriptors" @onSubmit="handleSubmit" />
  </div>
</template>


<script>
import { reactive } from '@vue/composition-api'
import SearchForm from '@/components/search-form'
// 下拉选择数据
const typeOptions = () => {
  return [
    {
      key: '00',
      label: 'New York',
    },
    {
      key: '01',
      label: 'London',
    },
    {
      key: '02',
      label: 'Sydney',
    },
    {
      key: '03',
      label: 'Ottawa',
    },
    {
      key: '04',
      label: 'Paris',
    },
    {
      key: '05',
      label: 'Canberra',
    },
  ]
}
export default {
  components: {
    SearchForm,
  },
  setup(props, context) {
    // 表单配置JSON
    const formDescriptors = reactive({
      form: {
        ref: 'node',
      },
      // 表单输入类型字段及校验配置
      item: [
        {
          type: 'fSelect',
          labelWidth: 120,
          title: 'Select',
          field: 'resource',
          options: typeOptions(),
          rule: [{ required: true}],
        },
        {
          type: 'fInput',
          labelWidth: 120,
          title: 'Type',
          field: 'type',
          placeholder: '请输入类型',
          rule: [
            { required: true, message: '请输入类型', trigger: 'blur' },
          ],
        },

        {
          type: 'fInput',
          labelWidth: 120,
          title: 'Title',
          field: 'title',
          placeholder: '请输入标题',
          rule: [
            { required: true, message: '请输入标题', trigger: 'blur' },
          ],
        },
        {
          type: 'fInput',
          labelWidth: 120,
          title: 'Content',
          field: 'content',
          placeholder: '请输入内容',
          rule: [{ validator: validateContent }],
        },
        {
          type: 'fRadio',
          labelWidth: 120,
          title: '性别',
          field: 'handleType',
          group: {},
          radios: [
            {
              label: '男',
              key: '00',
            },
            {
              label: '女',
              key: '01',
              disabled: true,
            },
          ],
        },
      ],
      // 表单操作配置
      subresetBtn: {
        showSubmit: true,
        submitText: '提交',
        showReset: true,
        resetText: '取消',
        marginLeft: '120px',
      },
      // 表单布局配置
      layout: {
        isInline: false,
        isGrid: true,
        rowOptions: { gutter: 30 },
        colOptions: { span: 8 },
      },
    })
    // 支持自定义校验
    function validateContent(rule, value, callback) {
      if (value === '') {
        callback(new Error('请输入内容'))
      } else {
        callback()
      }
    }
    // 表单提交
    function handleSubmit(data) {
      console.log(data)
      // alert(JSON.stringify(data))
    }

    return { formDescriptors, handleSubmit}
  },
}
</script>

```

## Features

- Generate form from descriptors （从描述符生成表单）
- Base on iView and jsx（基于 iView 和 jsx 语法）
- The operation is simple， Small size（体积小，配置简单）



## Question

Please submit your question in [Github Issue](https://github.com/xiaoyaoting/vue-form-reactive/issues) .
提问在 [Github Issue](https://github.com/xiaoyaoting/vue-form-reactive/issues) .


## TODO

**vue-form-reactive** Short term plan（近期计划）:
- [ ] Configure forms to generate tables （配置表单生成表格）
- [ ] Compatible more ui components library ( element-ui, ant disign vue ) （兼容更多UI组件库，比如element-ui, antd-vue）
- [ ] Compatible react （兼容react框架）
- [ ] Custom component ( base on slot ) （自定义嵌套组件，vue版本准备基于solt去做）

## Thanks

Ms.Y & excellent ui components library

## License

[MIT license](https://tldrlegal.com/license/mit-license)

