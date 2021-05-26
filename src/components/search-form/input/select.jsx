const NAME = 'fSelect'
export default {
  name: NAME,
  props: {
    options: {
      type: [Object, Array],
      default: () => {}
    },
    value: {}
  },
  watch: {
    value() {
      this.update();
    }
  },
  data() {
    return {
      trueValue: ''
    }
  },
  methods: {
    onInput(nVal) {
      this.$emit('input', nVal);
    },
    update() {
      this.trueValue = this.value
    }
  },
  render() {
    if( !this.options.options || !(this.options.options instanceof Array)) {
      throw new Error(`[Form warn]: Invalid options for Form Select Options 请传入正确的下拉列表`)
    }
    return (
      <Select value={this.trueValue}  on-input={this.onInput}  placeholder={this.options.placeholder}>
        {
          this.options.options?.map( item => {
            return <Option value={item.key} key={item.key} label={item.label}/>
          })
        }
      </Select>
    )
  }
}
