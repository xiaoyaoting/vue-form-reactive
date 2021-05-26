const NAME = 'fText'
export default {
  name: NAME,
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
    const props = {...this.options,type: 'textarea'}
    return <Input on-input={this.onInput}  {...{props}}/>;
  }
}
