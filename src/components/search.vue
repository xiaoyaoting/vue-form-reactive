<!--
@file: 主APP引入文件
-->
<template>
  <div class="search">
    <div class="form">
      <SearchForm
        ref="search"
        v-model="queryData"
        :formDescriptors="formDescriptors"
        @onSubmit="handleSubmit"
      />
    </div>
    <div>
       <Table-list
      :title="'表格标题'"
      :tableColumns="tableColumns"
      :tableData="tableData"
      :initData="initData"
      @changePage="changePage"
    >
      <template slot="action" slot-scope="{ row, index}">
        <a>删除{{ index }}</a>
      </template>
      <template slot="button" slot-scope="{ row, index}">
        <Button>新增</Button>
      </template>
    </Table-list>
    </div>
    <!-- <div class="search-handle">
      <Button type="primary" @click="handleSearch">查询</Button>
      <Button @click="handleReset">重置</Button>
    </div>-->
  </div>
</template>

<style>
.search {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.form {
   display: flex;
  width: calc(100% - 200px);
}
.handle {
  width: 200px;
  height: 100%;
  margin-top: 33px;
  margin-left: 20px;
  display: flex;
}
.search-handle-more {
  width: 35px;
  height: 35px;
  background: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-right: 12px;
  cursor: pointer;
}
</style>

<script>
import { reactive, ref } from '@vue/composition-api'
import SearchForm from '@/components/search-form/search-form.jsx'

import TableList from "@/components/search-form/table.jsx";
export default {
  components: {
    SearchForm,
    TableList
  },
  props: {
    // approvalData: Object
  },
  setup(props, context) {
    const formDescriptors = reactive({
      form: {
        ref: 'node',
      },
      item: [
        {
          type: 'fInput',
          title: '标题',
          field: 'name',
          placeholder: '请输入标题',
        },
        {
          type: 'fSelect',
          field: 'status',
          title: '状态',
          options: [
            {
              label: '第一',
              key: '01',
            },
            {
              label: '第二',
              key: '02',
            },
            {
              label: '第三',
              key: '03',
            },
          ],
          placeholder: '请选择状态',
        },
      ],
      subresetBtn: {
        showSubmit: true,
        submitText: '查询',
        showReset: true,
        resetText: '重置',
        marginLeft: '120px',
      },
      layout: {
        isInline: true,
        isGrid: true,
        rowOptions: { gutter: 30 },
        colOptions: { span: 8 },
      },
    })

    const queryData = reactive({ title: '', type: '', status: '' })

    const tableData = reactive([
      {
        name: 'Shawn',
        sex: '男',
        addr: '北京市北京市朝阳区',
      },
    ])

    const tableColumns = reactive([
      {
        title: '姓名',
        key: 'name',
      },
      {
        title: '性别',
        key: 'sex',
      },
      {
        title: '家庭住址',
        key: 'addr',
      },
      {
        title: '操作',
        slot: 'action',
      },
    ])

    const initData = reactive({
      pageSize: 10,
      pageNum: 1,
      total: 21,
    })
    const search = ref(null)
    function handleSubmit() {
      context.emit('onSearch')
    }

    function handleReset() {
      console.dir(context)
    }

    return {
      search,
      formDescriptors,
      queryData,
      handleSubmit,
      handleReset,
      tableData,
      tableColumns,
      initData,
    }
  },
}
</script>
