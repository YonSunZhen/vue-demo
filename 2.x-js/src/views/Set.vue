<template>
  <div>
    <div>
      <span v-for="item in arr" :key="item">
        {{item}}
      </span>
      <button @click="changeArr">点击改变数组</button>
    </div>
    <div>
      <span v-for="(value, name) in obj" :key="name">
        {{ name }} : {{ value }}
      </span>
      <button @click="changeObj">点击改变对象</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Set',
  data() {
    return {
      arr: [1,2,3],
      obj: {
        a: 'a1',
        b: 'b1'
      }
    }
  },
  computed: {
    
  },
  async mounted() {

  },
  watch: {
    
  },
  methods: {
    changeArr() {
      // this.arr[0] = 11
      // this.arr[3] = 3
      // this.$set(this.arr, 0, 11)
      // this.$set(this.arr, 3, 44)
    },
    changeObj() {
      // TODO: 为何会触发视图刷新？
      this.obj.a = 'a11'
      // this.obj.c = 'c1'
      // this.$set(this.obj, 'c', 'c1')
    }
  }
}
</script>

<style scoped>

</style>
