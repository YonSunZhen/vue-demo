<template>
  <div>
    <div>
      <span v-for="item in arr" :key="item">
        {{item}}
      </span>
      <button @click="changeArr">点击改变数组</button>
    </div>
    <div>
      <!-- <span v-for="(value, name) in obj" :key="name">
        {{ name }} : {{ value }}
      </span> -->
      <span>{{obj.a}}</span>
      <span>{{obj.c}}</span>
      <!-- <span>{{obj.d}}</span> -->
      <button @click="changeObj">点击改变对象</button>
      <button @click="changeObj1">点击改变对象1</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Set',
  data() {
    return {
      arr: [],
      obj: {}
    }
  },
  computed: {
    
  },
  beforeCreate() {
    // this.arr = [1,2,3]
    // this.obj = {
    //   a: 'a1',
    //   b: 'b1'
    // }
  },
  created() {
    // this.arr = [1,2,3]
    // this.obj = {
    //   a: 'a1',
    //   b: 'b1'
    // }
  },
  async mounted() {
    this.arr = [1,2,3]
    this.obj = {
      a: 'a1',
      b: 'b1',
      c: 'c1'
    }
  },

  watch: {
    // 'obj.a' () {
    //   console.log('debug1')
    // }
  },
  methods: {
    changeArr() {
      // this.arr[0] = 11
      // this.arr[3] = 3
      // this.$set(this.arr, 0, 11)
      // this.$set(this.arr, 3, 44)
    },
    async changeObj() {
      // TODO: 为何会触发视图刷新？
      // await this.test()
      console.log('debug1')
      this.obj.a = 'a11'
      this.$set(this.arr, 0, 11)
      this.obj.c = 'c11'
      // this.obj.d = 'd'
    },
    changeObj1() {
      // 没有执行依赖收集 所以不会更新
      this.obj.c = 'c1'
    },
    async test() {
      return new Promise((res) => {
        setTimeout(() => {
          res()
        },3000)
      })
    }
  }
}
</script>

<style scoped>

</style>
