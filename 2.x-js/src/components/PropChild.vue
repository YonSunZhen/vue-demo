<template>
  <div>
    
  </div>
</template>

<script>
export default {
  name: 'PropChild',
  props: {
    title: {
      default: ''
    },
    count: {
      default: 1
    }
  },
  computed: {
    test() {
      console.log('debug3');
      // 只要这里面的值其中一个发生变化 就会触发执行 
      return this.title + this.count
    },
    test1() {
      return this.test
    }
  },
  watch: {
    title(){
      console.log('debug1');
      // return this.title
    }
  },
  mounted() {
    // console.log('debug2');
    // console.log(this.title);
  },
  methods: {
    
  }
}
</script>

<style scoped>

</style>
