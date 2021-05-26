<<<<<<< HEAD
const NAME = 'fRadio'
export default {
  name: NAME,
=======
export default {
  name: "fRadio",
>>>>>>> d9bf39bcee69af4eea98bf29f600f6c532855534
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
<<<<<<< HEAD
    onInput(n) {
      console.log(n)
      this.$emit('input', this.trueValue);
=======
    onInput(nVal) {
      this.$emit('input', nVal);
>>>>>>> d9bf39bcee69af4eea98bf29f600f6c532855534
    },
    update() {
      this.trueValue = this.value
    }
  },
  render() {
    return <RadioGroup {...this.options.group} value={this.trueValue}
        on-input={this.onInput}>{this.options.radios.map((opt, index) => {
<<<<<<< HEAD
          const label = opt.label
          const props = {...opt,label: opt.key}
            return <Radio {...{props}} key={opt.key}>{label}</Radio>
=======
            const label = opt.label
            const props = {...opt,label: opt.key}
            return <Radio {...{props}} >{label}</Radio>
>>>>>>> d9bf39bcee69af4eea98bf29f600f6c532855534
        })}</RadioGroup>
}
}
