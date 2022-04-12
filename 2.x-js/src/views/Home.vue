<template>
  <div class="home">
    这是Home
    <button @click="click">点击</button>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  data() {
    return {
      test: {
        a: 1
      }
    }
  },
  methods: {
    temp(val) {
      if(val === 1) {
        console.log('debug2');
        val = 2
      }
    },
    click() {
      this.temp(this.test.a)
      console.log('debug1');
      setTimeout(() => {
        console.log(this.test.a);
      })
    }
  }
}
</script>
