export default {
  name: "fRadio",
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
    return <RadioGroup {...this.options.group} value={this.trueValue}
        on-input={this.onInput}>{this.options.radios.map((opt, index) => {
            const label = opt.label
            const props = {...opt,label: opt.key}
            return <Radio {...{props}} >{label}</Radio>
        })}</RadioGroup>
}
}
