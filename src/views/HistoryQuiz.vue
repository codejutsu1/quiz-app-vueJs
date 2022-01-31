<template>
  <Questions :questions="historyQuiz"/>
</template>

<script>
import Questions from '../components/Questions.vue'

export default {
  components: { Questions },
  data() {
    return {
      historyQuiz: [],
    }
  },

  created() {
    fetch('http://localhost:3000/history')
      .then(res => res.json())
      .then(data => this.historyQuiz = data)
      .catch(err => console.log(err.message))
  },
}
</script>

<style>

</style>