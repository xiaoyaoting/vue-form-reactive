import sForm from './form'
import './style/search.less'
export default {
  components: {
    sForm
  },
  props: {
    formDescriptors: {
      type: Object
    },
    queryData: {
      type: Object
    }
  },
  watch: {
    queryData() {
      this.updateFormData()
    }
  },
  data() {
    return {
      showMore: false,
      formData: {},
    }
  },
  computed: {
    formRules() {
      const { item } = this.formDescriptors
      let rules = {};
      item.forEach(item => {
        rules[item.field] = item.rule || []
      })
      return rules
    }
  },
  mounted() {
    this.formModel()
  },
  methods: {
    // 
    handleSubmit() {
      let formNode = this.formDescriptors.form.ref
      //校验
      this.$refs[formNode].validate(valid => {
        if (valid) {
          // 成功，传值
          this.$emit('onSubmit', this.formData)
        }
      })
    },
    // 重置表单
    handleReset() {
      let formNode = this.formDescriptors.form.ref
      this.$refs[formNode].resetFields()
    },
    // 拼接表单数据对象
    formModel() {
      const { item } = this.formDescriptors
      this.formData = item.reduce((preItem, curItem) => {
        preItem[curItem.field] = ''
        return preItem
      }, {})
    },
    // 更新表单数据
    updateFormData(data) {
      Object.keys(data).map(key => {
        this.formData[key] = data[key];
      });
    },
    // 是否为 inline 模式
    isInline() {
      const { layout, item, subresetBtn } = this.formDescriptors
      if (!layout && !item) {
        throw new Error(`[Form warn]: layout or item is undefined`)
      }
      if (layout.isInline) {
        return <div class="search mb20">
          <div class="search-form">
            <Form ref={this.formDescriptors.form.ref} props={{ model: this.formData, rules: this.formRules }}>
              <sForm formOptions={this.formDescriptors} itemOptions={item} on-updateItem={this.updateFormData} />
            </Form>
          </div>
          <div class="search-handle">
            {this.showMoreIcon()}
            <Button type="primary" on-click={this.handleSearch}>{subresetBtn.submitText}</Button>
            <Button style="marginLeft: 10px" on-click={this.handleReset}>{subresetBtn.resetText}</Button>
          </div>
        </div>
      } else {
        const { marginLeft } = subresetBtn;
        return <div>
          <span>{this.data}</span>
          <Form ref={this.formDescriptors.form.ref} props={{ model: this.formData, rules: this.formRules }}>
            <sForm formOptions={this.formDescriptors} itemOptions={item} on-updateItem={this.updateFormData} />
          </Form>
          <div className="sub-handle" style={{ marginLeft: marginLeft ? marginLeft : 'marginLeft:120px' }}>
            <Button type="primary" on-click={this.handleSubmit}>{subresetBtn.submitText}</Button>
            <Button style="marginLeft: 10px" on-click={this.handleReset}>{subresetBtn.resetText}</Button>
          </div>
        </div>
      }
    },
    // 为非 inline 模式是否展示展开收起
    showMoreIcon() {
      const { item, layout } = this.formDescriptors;
      let isShowMoreIcon = item?.length > 3 && layout?.isInline;
      if (isShowMoreIcon) {
        return <div class="search-handle-more" on-click={() => (this.showMore = !this.showMore)}>
          <Icon type={this.showMore ? 'ios-arrow-up' : 'ios-arrow-down'} size="20" />
        </div>
      }
    }
  },
  render() {
    return this.isInline()
  }
}