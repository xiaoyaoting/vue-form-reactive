import InputComponents from './input'
export default {
  props: {
    formOptions: {
      type: Object,
      default: () => { }
    },
    itemOptions: {
      type: Array,
      default: () => []
    },
    data: {}
  },
  watch: {
    data() {
      this.update();
    }
  },
  data() {
    return {
      trueData: {}
    }
  },
  methods: {
    onChangeData(field, val) {
      this.trueData[field] = val;
      this.$emit('updateItem', this.trueData)
    },
    update() {
      this.trueData = this.data
    },
    renderFormItemChildren(item) {
      const FormItemChildren = InputComponents.find(({ name }) => name === item.type);
      if (FormItemChildren) {
        return <FormItemChildren value={this.trueData[item.field]} on-input={(val) => { this.onChangeData(item.field, val) }} options={item} />
      } else {
        throw new Error('[Form warn]: The form element is not supported at present, Please check the config type attribute')
      }
    },
    isGrid() {
      if (this.formOptions.layout.isInline) {
        // row col 的 props 开放
        return <Row props={this.formOptions.layout.rowOptions}>
          {
            this.itemOptions.map(item => {
              return <Col props={item.colOptions ? item.colOptions : this.formOptions.layout.colOptions}>
                <FormItem label={item.labelColon ? item.title + '：' : item.title} prop={item.field} label-width={item.labelWidth}>
                  {
                    this.renderFormItemChildren(item)
                  }
                </FormItem>
              </Col>
            })
          }
        </Row>
      } else {
        // 非栅格布局
        return this.itemOptions.map(item => {
          return <FormItem label={item.labelColon ? item.title + '：' : item.title} prop={item.field} label-width={item.labelWidth}>
            {
              this.renderFormItemChildren(item)
            }
          </FormItem>
        })
      }
    }
  },
  render() {
    // 非栅格布局直接返回表单，适用于弹窗、修改编辑页面，表单布局完全由调用方配置
    return <div>
      {this.isGrid()}
    </div>
  }
}
