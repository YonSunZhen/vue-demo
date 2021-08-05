<template>
  <div>
    <h2>{{name}}, 上方组件求和为 {{this.$store.state.count.count}}</h2>
    <input v-model="inputName" type="text" placeholder="name"/>&nbsp;
    <input v-model="inputAge" type="text" placeholder="age"/>&nbsp;
    <button @click="addPerson">添加</button>
    <ul :style="{listStyle: 'none'}">
      <li v-for="person in this.$store.state.person.person" :key="person.id">{{person.name}} -- {{person.age}}</li>
    </ul>
  </div>
</template>

<script>
import { ADD_PERSON } from '../store/mutation-types';

export default {

  props: {
    name: {
      default: 'XX组件',
      type: String
    }
  },
  data() {
    return {
      inputName: '',
      inputAge: ''
    }
  },

  methods: {
    addPerson() {
      if(this.inputName && this.inputAge) {
        this.$store.commit(ADD_PERSON, {name: this.inputName, age: this.inputAge})
        this.$emit("addPerson", {name: this.inputName, age: this.inputAge});
        this.inputName = ''
        this.inputAge = ''
      }
    }
  }
}
</script>

<style>

</style>