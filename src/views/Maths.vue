<template>
  <Questions :questions="maths"/>
</template>

<script>
import Questions from '../components/Questions.vue'

export default {
  components: { Questions },
  data() {
    return {
      maths: [],
    }
  },

  created() {
    fetch('http://localhost:3000/maths')
      .then(res => res.json())
      .then(data => this.maths = data)
      .catch(err => console.log(err.message))
  },
}
</script>

<style>

</style>