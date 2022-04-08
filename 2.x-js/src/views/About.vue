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
    click() {
      const a = this.$refs.child.test()
      console.log('debug2')
      console.log(a);
    }
  }
}
</script>

<style scoped>

</style>

