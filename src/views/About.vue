<!--
@file: 主APP引入文件
-->
<template>
  <div class="p25">
    <SearchForm ref="search" :formDescriptors="formDescriptors" @onSubmit="handleSubmit" />
  </div>
</template>


<script>
import { reactive } from '@vue/composition-api'
import SearchForm from '@/components/search-form'
const typeOptions = () => {
  return [
    {
      key: 'New York',
      label: 'New York',
    },
    {
      key: 'London',
      label: 'London',
    },
    {
      key: 'Sydney',
      label: 'Sydney',
    },
    {
      key: 'Ottawa',
      label: 'Ottawa',
    },
    {
      key: 'Paris',
      label: 'Paris',
    },
    {
      key: 'Canberra',
      label: 'Canberra',
    },
  ]
}
export default {
  components: {
    SearchForm,
  },
  props: {
    // approvalData: Object
  },
  setup(props, context) {
    const approvalData = reactive({
      name: '发布生啤流程',
      desc: '该流程用于什么什么发布服务审批',
    })
    const tableA = { gutter: 30 }
    const formDescriptors = reactive({
      form: {
        ref: 'node',
      },
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
          // rule: [{ required: true, message: '请输入通知类型' }],
        },
        {
          type: 'fRadio',
          labelWidth: 120,
          title: '操作类型',
          field: 'handleType',
          group: {},
          radios: [
            {
              label: '上线',
              key: '00',
            },
            {
              label: '下线',
              key: '01',
              disabled: true,
            },
          ],
          // rule: [{ required: true, message: '请输入通知类型' }],
        },
      ],
      subresetBtn: {
        showSubmit: true,
        submitText: '提交',
        showReset: true,
        resetText: '取消',
        marginLeft: '120px',
      },
      layout: {
        isInline: true,
        isGrid: true,
        rowOptions: { gutter: 30 },
        colOptions: { span: 8 },
      },
    })
    function validatePass() {
      if (value === '') {
        callback(new Error('Please enter your password'))
      } else {
        if (this.formCustom.passwdCheck !== '') {
          // 对第二个密码框单独验证
          this.$refs.formCustom.validateField('passwdCheck')
        }
        callback()
      }
    }

    function handleSubmit(data) {
      console.log(data)
      // context.emit('onSearch')
    }
    return { approvalData, formDescriptors, handleSubmit }
  },
}
</script>
