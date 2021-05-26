const NAME = 'fRadio'
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
    onInput(n) {
      console.log(n)
      this.$emit('input', this.trueValue);
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
            return <Radio {...{props}} key={opt.key}>{label}</Radio>
        })}</RadioGroup>
}
}
