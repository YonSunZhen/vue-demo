<template>
  <div>
    <h2>我是Count组件</h2>
    <h4>{{this.$store.state.count.count}}, 下方组件总人数为: {{this.$store.state.person.person.length}}</h4>
    <select v-model="selectCount">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>&nbsp;
    <button @click="increment">+</button>&nbsp;
    <button @click="decrement">-</button>&nbsp;
    <button @click="incrementIfOdd">奇数加</button>&nbsp;
    <button @click="incrementAsync">异步加</button>
  </div>
</template>

<script>
import { INCREMENT_TYPE, DECREMENT_TYPE, INCREMENT_ASYNC_TYPE } from '../store/mutation-types';

export default {
  props: {
    test: String
  },
  // 组件内部私有变量 TODO: data为什么需要是一个function
  data() {
    return {
      selectCount: 1
    }
  },

  methods: {
    // 为什么不能用箭头函数
    increment() {
      this.$store.commit(INCREMENT_TYPE, this.selectCount);
    },

    decrement() {
      this.$store.commit(DECREMENT_TYPE, this.selectCount);
    },

    incrementIfOdd() {
      if(this.count % 2 != 0) {
        this.$store.commit(INCREMENT_TYPE, this.selectCount);
      }
    },
    
    async incrementAsync() {
      await this.$store.dispatch(INCREMENT_ASYNC_TYPE, this.selectCount);
    }
  },
}
</script>

<style>

</style>