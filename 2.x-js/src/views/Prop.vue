<template>
  <div>
    <PropChild  :title="title" :count="count"></PropChild>
    <button @click="changeTitle">点击变化数据</button>
  </div>
</template>

<script>
import PropChild from '../components/PropChild.vue'
export default {
  name: 'Prop',
  components: { PropChild },
  data() {
    return {
      title: '',
      count: ''
    }
  },
  mounted() {
    setTimeout(() => {
      console.log('debug1');
      this.title = '222'
    }, 3000)
    setTimeout(() => {
      console.log('debug11');
      this.title = '2222'
    }, 6000)
    setTimeout(() => {
      console.log('debug111');
      this.count = '22222'
    }, 9000)
  },
  methods: {
    changeTitle() {
      this.title = '111'
    }
  }
}
</script>

<style scoped>

</style>
