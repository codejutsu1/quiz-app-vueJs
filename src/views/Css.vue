<template>
  <Questions :questions="maths" :course="name"/>
</template>

<script>
import Questions from '../components/Questions.vue'

export default {
  components: { Questions },
  data() {
    return {
      name: 'CSS',
       maths: [
        {
            "id": 1,
            "question": "Which is an even number",
            "answers": {
                "a": 2,
                "b": 5,
                "c": 7,
                "d": 9
            },
            "correctAnswer" : "a"
        },

        {
            "id": 2,
            "question": "Which is divisible by 3",
            "answers": {
                "a": 2,
                "b": 5,
                "c": 7,
                "d": 9
            },
            "correctAnswer" : "d"
        },

        {
            "id": 3,
            "question": "Which of these is divisible by 2",
            "answers": {
                "a": 2,
                "b": 5,
                "c": 7,
                "d": 9
            },
            "correctAnswer" : "a"
        },

        {
            "id": 4,
            "question": "Which is an odd number",
            "answers":{
                "a": 2,
                "b": 6,
                "c": 8,
                "d": 9
            },
            "correctAnswer" : "d"
        }

        
      ]
    }
  },
}
</script>

<style>

</style>