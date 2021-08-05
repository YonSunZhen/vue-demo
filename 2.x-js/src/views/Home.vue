<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Count/>
    <Person :[name]="'我是Person组件'" @addPerson="handleAddPerson"></Person>
    <h2 v-if="personName">我是Home组件，Person组件添加了 '{{personName}}'</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import Count from '@/components/Count.vue'
import Person from '@/components/Person.vue'

export default {
  name: 'Home',
  data() {
    return {
      name: 'name',
      personName: ''
    }
  },
  components: {
    Count,
    Person
  },
  methods: {
    handleAddPerson(data) {
      this.personName = data.name;
    }
  }
}
</script>
