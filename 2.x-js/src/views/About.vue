<!--
 * @Author: yongzhen.sun
 * @Date: 2022-07-20 15:45:25
 * @LastEditors: yongzhen.sun
 * @LastEditTime: 2022-11-10 14:39:20
 * @Description: file content
-->
<template>
  <div>
    <Child ref="child"></Child>
    <button @click="click">点击</button>
  </div>
</template>

<script>
import Child from '@/components/Child.vue'
export default {
  name: 'About',
  components: {
    Child
  },
  data() {
    return {

    }
  },
  computed: {
    
  },
  async mounted() {
    
  },
  watch: {
    
  },
  methods: {
    async click() {
      // const a = this.$refs.child.test()
      // console.log('debug2')
      // console.log(a);
      console.log('debug9');
      await this.test().then(res => {
        console.log('debug2')
        console.log(res);
      })
      console.log('debug3')
    },
    test() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(2)
        },2000)
      })
    }
  }
}
</script>

<style scoped>

</style>

