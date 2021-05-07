
<script>
import { h, defineComponent } from '@vue/composition-api'
export default defineComponent({
   props: {
    queryForm: Array,
  },
  setup(props) {
    return () => h('div', '123')
  }
})
</script>