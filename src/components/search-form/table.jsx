import './style/search.less'

const NAME = 'fTable';
export default {
  name: NAME,
  props: {
    title: String, // 标题
    tableColumns: Array, // 表格展示字段和插槽
    tableData: Array, // 表格数据
    initData: Object // 初始分页数据
  },
  data() {
    return {
      totalRows: 0, // 总条数
      pageNum: 1, // 页码
      pageSize: 10, // 每页条数
      pageSizeOpts: [10, 15, 20, 25, 40, 60, 80, 100], // 每页条数切换
    }
  },
  methods: {
    // 切换页码
    handlePageChange(pageNum) {
      this.pageNum = pageNum
      this.$emit('changePage', { pageNum, pageSize: this.pageSize })
    },
    // 切换每页条数
    // iview的Page组件改变每页条数会默认再调用改变页码函数
    handlePageTotalChange(pageSize) {
      this.pageSize = pageSize
      this.$emit('changePage', { pageNum: this.pageNum, pageSize })
    },
    // 解析slot 
    parseSlot() {
      const scopedSlots = {}
      for( let key in this.$scopedSlots) {
        scopedSlots[key] = (props) => this.$scopedSlots[key](props)[0]
      }
      return scopedSlots
    }
  },
  render() {
    return <div class="table-list">
      <div class="title">
        <span class="title-text">{ this.title || '标题' }</span>
        {/* 操作插槽 */}
        { this.$scopedSlots['button']?.() }
      </div>
      <Table columns={this.tableColumns} data={this.tableData} scopedSlots={this.parseSlot()}/>
      {/* 分页模块 */}
      <div class="table-page">
        <Page
          total={this.initData.total}
          show-sizer
          show-total
          show-elevator
          current={this.initData.pageNum}
          page-size={this.initData.pageSize}
          on={{
            'on-change': this.handlePageChange,
            'on-page-size-change': this.handlePageTotalChange
          }}
          page-size-opts={this.pageSizeOpts}
        ></Page>
      </div>
    </div>

  }
}