<template>
  <div style="display:inline-block;">
    <label class="radio-label" style="padding-left:0;">自定文件名: </label>
    <el-input v-model="filename" placeholder="默认为excel-list" style="width:345px;" prefix-icon="el-icon-document" />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    filename: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>
