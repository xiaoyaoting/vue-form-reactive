<<<<<<< HEAD
const NAME = 'fInput'
export default {
  name: NAME,
=======
export default {
  name: 'fInput',
>>>>>>> d9bf39bcee69af4eea98bf29f600f6c532855534
  props: {
    options: {
      type: [Object, Array],
      default: () => { }
    },
    value: {}
  },
  watch: {
    value() {
<<<<<<< HEAD
      console.log('123')
=======
>>>>>>> d9bf39bcee69af4eea98bf29f600f6c532855534
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
<<<<<<< HEAD
    console.log(this.options)
=======
>>>>>>> d9bf39bcee69af4eea98bf29f600f6c532855534
    return <Input value={this.trueValue} on-input={this.onInput} placeholder={this.options.placeholder} />;
  }
}
