<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Count />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Count from '@/components/Count.vue'

@Component({
  components: {
    Count
  },
})
export default class Home extends Vue {}
</script>
