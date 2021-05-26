export default {
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
      trueValue: '',
      aoptions: {
        size: 'large',
          value: '2asdaasdasdsd31',
          placeholder: '123123123'
      }
    }
  },
  methods: {
    onInput(n) {
      // this.$emit('input', this.trueValue);
      console.log(123123)
    },
    update() {
      this.trueValue = this.value
    }
  },
  render() {
    return <Input props={this.aoptions} placeholder="asdasd" on-input={this.onInput} />;
  }
}
