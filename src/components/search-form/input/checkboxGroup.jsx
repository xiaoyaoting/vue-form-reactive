export default {
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
    onInput(n) {
      this.$emit('input', this.trueValue);
    },
    update() {
      this.trueValue = this.value
    }
  },
  render() {
    return <Input value={this.trueValue}  on-input={this.onInput} placeholder={options.placeholder}/>;
  }
}
