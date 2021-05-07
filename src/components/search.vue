<!--
@file: 主APP引入文件
-->
<template>
  <div class="search">
    <div class="form">
      <SearchForm ref="search" v-model="queryData" :queryForm="queryForm" />
    </div>
    <!-- <div class="search-handle">
      <Button type="primary" @click="handleSearch">查询</Button>
      <Button @click="handleReset">重置</Button>
    </div> -->
  </div>
</template>

<style>
.search {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.form {
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
import { reactive, ref } from "@vue/composition-api";
import SearchForm from "@/components/search-form/search-component.vue";

// import SearchForm from "@/components/search-form/search-form.vue";
export default {
  components: {
    SearchForm,
  },
  setup(props, context) {
    const queryForm = reactive([
      {
        key: "title",
        label: "标题",
        nodeType: "Input",
        placeholder: "请输入标题",
      },
      {
        key: "status",
        label: "状态",
        nodeType: "Select",
        options: [
          {
            label: "第一",
            key: "01",
          },
          {
            label: "第二",
            key: "02",
          },
          {
            label: "第三",
            key: "03",
          },
        ],
        placeholder: "请选择状态",
      },
    ]);

    const queryData = reactive({ title: "", type: "", status: "" });

    const search = ref(null);
    function handleSearch() {
      context.emit("onSearch");
    }

    function handleReset() {
      console.dir(context);
    }

    return { search, queryForm, queryData, handleSearch, handleReset };
  },
};
</script>