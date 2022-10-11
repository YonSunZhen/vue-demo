<!--
 * @Author: yongzhen.sun
 * @Date: 2022-10-11 16:59:57
 * @LastEditors: yongzhen.sun
 * @LastEditTime: 2022-10-11 17:31:57
 * @Description: file content
-->
<template>
  <div>
    <li v-for="(item, index) in evenNumbers" :key="index">
      {{item}}
    </li>
  </div>
</template>

<script>
export default {
  name: 'Computed',
  data() {
    return {
      numbers: [1,2,3,5,4]
    }
  },
  computed: {
    evenNumbers() {
      console.log('debug1')
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.numbers.reverse()
      // return this.numbers
    }
  },
  async mounted() {
    
  },
  watch: {
    
  },
  methods: {

  }
}
</script>

<style scoped>

</style>

