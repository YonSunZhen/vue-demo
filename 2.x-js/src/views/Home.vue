<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Count/>
    <Person></Person>
  </div>
</template>

<script>
// @ is an alias to /src
import Count from '@/components/Count.vue'
import Person from '@/components/Person.vue'

export default {
  name: 'Home',
  components: {
    Count,
    Person
  }
}
</script>
