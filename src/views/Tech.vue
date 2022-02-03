<template>
  <Questions :questions="tech" :course="name"/>
</template>

<script>
import Questions from '../components/Questions.vue'

export default {
  components: { Questions },
  data() {
    return {
        name: 'Tech',
        tech: [
            {
                "id": 1,
                "question": "What does it mean for a company to attain a unicorn?",
                "answers": {
                    "a": "It generates $1 billion in revenue",
                    "b": "It has a networth of $1billion",
                    "c": "It generates $1 million in revenue",
                    "d": "It has a networth of $1billion"
                },
                "correctAnswer" : "a"
            }
        ]
    }
  },
}
</script>

<style>

</style>