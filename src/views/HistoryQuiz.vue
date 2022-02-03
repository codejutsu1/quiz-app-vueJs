<template>
  <Questions :questions="historyQuiz"/>
</template>

<script>
import Questions from '../components/Questions.vue'

export default {
  components: { Questions },
  data() {
    return {
      historyQuiz: [
        {
            "id": 1,
            "question": "Who is the first president of the Nigeria",
            "answers": {
                "a": "Obafemi Awolowo",
                "b": "Amadu Bello",
                "c": "Nnamdi Azikiwe",
                "d": "Sani Abacha"
            },
            "correctAnswer" : "c"
        },
        {
            "id": 2,
            "question": "When did Nigeria gain her independence",
            "answers": {
                "a": "1st October, 1950",
                "b": "1st November, 1960",
                "c": "1st October, 1960",
                "d": "1st October, 1963"
            },
            "correctAnswer" : "c"
        },
        {
            "id": 3,
            "question": "Who is the current Governor of Anambra as of Recent (2022)",
            "answers": {
                "a": "Soludo",
                "b": "Peter Obi",
                "c": "Willie Obiano",
                "d": "Adam Oshimole"
            },
            "correctAnswer" : "a"
        },
        {
            "id": 4,
            "question": "When did the massacre at Lekki tollgate occur?",
            "answers": {
                "a": "10th October, 2020",
                "b": "20th October, 2020",
                "c": "23rd October, 2020",
                "d": "18th October, 2020"
            },
            "correctAnswer" : "b"
        },
        {
            "id": 5,
            "question": "Which country defeated the super Eagles in the AFCON tournament 2022",
            "answers": {
                "a": "Burkina Faso",
                "b": "Tunisan",
                "c": "Mali",
                "d": "Cameroon"
            },
            "correctAnswer" : "b"
        }
    ]
    }
  },
}
</script>

<style>

</style>