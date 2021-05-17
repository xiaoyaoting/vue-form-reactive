export default {
  name: 'fInput',
  props: {
    options: {
      type: [Object, Array],
      default: () => { }
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
    return <Input value={this.trueValue} on-input={this.onInput} placeholder={this.options.placeholder} />;
  }
}
