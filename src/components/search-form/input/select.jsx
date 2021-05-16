export default {
  name: 'fSelect',
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
    return (
      <Select value={this.trueValue}  on-input={this.onInput}  placeholder={this.options.placeholder}>
        {
          this.options.options.map( item => {
            return <Option value={item.key} key={item.key} label={item.label}/>
          })
        }
      </Select>
    )
  }
}
