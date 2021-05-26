const NAME = 'timerTask'
export default {
  name: NAME,
  props: {
    options: {
      type: [Object, Array],
      default: () => {}
    },
    value: {},
    
  },
  watch: {
    value() {
      this.update();
    }
  },
  data() {
    return {
      dateArr: [],
      switchFlag: true
    }
  },
  methods: {
    onInput(flag) {
      if(flag instanceof Array) {
        this.dateArr = flag
      }else {
        this.switchFlag = flag
      }
      this.$emit('input', { dateArr: this.dateArr, switchFlag: this.switchFlag});
    },
    update() {
      this.trueValue = this.value
    },
    // 显示日期选择
    showDate() {
      const props = {...this.options}
      props.type = this.options.dateType
      if( this.switchFlag ) {
        return <DatePicker  style='marginLeft: 10px' {...{props}}  on-input={this.onInput}></DatePicker>
      }else {
        return <span style='marginLeft: 10px'>{props.disabledText}</span>
      }
    }
  },
  render() {
    return <div>
      <i-switch value={this.switchFlag}  on-input={this.onInput} />
      { this.showDate() }
    </div>
    
  }
}
