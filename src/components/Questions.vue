<template>
  <div v-show="showQuestion">
    <div class="w-full h-screen flex justify-center items-center">
        <div class="max-w-xl w-full py-10 px-8 h-screen md:h-fit shadow-2xl bg-main rounded-sm">
            <section>
            <div>
                <p class="text-gray-500 font-semibold text-xl">Mathematics quiz</p>
                <p class="text-2xl text-gray-300 font-semibold">Question <span class="text-gray-100 text-3xl">{{ questions[index]['id'] }}</span><span class="text-gray-500">/{{ questions.length }}</span></p>
            </div>

            <div class="py-10 text-lg text-gray-300 font-semibold">
                <p v-if="questions">
                {{ questions[index]['question'] }}
                </p>
            </div>

            <form class="md:grid grid-cols-2 gap-10 md:space-y-0 space-y-6">
                <label 
                :for="key" 
                v-for="answer,key in questions[index]['answers']" 
                :key="answer"  
                class="flex justify-between border-2 border-gray-500 md:p-10 p-5 md:relative md:rounded-md rounded-2xl"
                :class="{'border-red': selectedAnswer == key && selectedAnswer != questions[index]['correctAnswer'],'border-green' : key == questions[index]['correctAnswer'] && selectedAnswer != ''}"
                >
                <!-- <p class="md:absolute top-2 text-white left-4 font-bold text-2xl"> {{ key }}</p> -->
                <p class="text-gray-500 text-md font-semibold" :class="{'text-red text-lg' : selectedAnswer == key && selectedAnswer != questions[index]['correctAnswer'],'text-green text-lg' : key == questions[index]['correctAnswer'] && selectedAnswer != ''}"> {{ answer }}</p>
                <input 
                    type="radio" 
                    :id="key" 
                    :value="key" 
                    class="md:absolute top-4 right-4 bg-transparent border-2 border-gray-500 rounded-full"
                    @click="answered($event)"
                    :disabled="selectedAnswer != ''"
                >
                </label>
            </form>

            <div class="mt-12 flex justify-between">
                <router-link :to="{ name: 'Home'}" class="text-gray-300 py-4 text-lg rounded-md px-10">Quit quiz</router-link>
                <button @click="nextQuestion()" v-show="selectedAnswer && index < questions.length-1" class="py-4 px-16 text-white font-semibold text-center bg-blue rounded-md">Next</button>
                <button @click="showResults()" v-show="selectedAnswer && index == questions.length-1" class="py-4 px-16 text-white font-semibold text-center bg-blue rounded-md">Finish</button>
            </div>
            </section>
        </div>
    </div>
  </div>
  <Result 
    v-show="showResult" 
    :correctScore="correctScore" 
    :wrongScore="wrongScore" 
    :totalScore="totalScore" 
    :percent="percent"
    :grade="grade"
    :color="color" 
    />
</template>

<script>
import Result from '../components/Result.vue'

export default {
    components: { Result },
    props: ['questions'],
    data() {
        return {
            selectedAnswer: '',
            index: 0,
            correctScore: 0,
            wrongScore: 0,
            totalScore: 0,
            percent: 0,
            showResult: false,
            showQuestion: true,
            grade: '',
            color: null

        }
    },

    methods: {
        answered(e) {
            this.selectedAnswer = e.target.value;
            if(this.selectedAnswer == this.questions[this.index]['correctAnswer']){
                this.correctScore++;
            }else{
                this.wrongScore++;
            };
        },

        nextQuestion() {
            this.index++;
            this.selectedAnswer = '';
        },

        showResults() {
            this.showResult = true;
            this.showQuestion = false;
            this.totalScore = this.correctScore + this.wrongScore;
            this.percent = (this.correctScore * 100)/this.totalScore;

            if(this.percent > 75){
                this.grade = 'A';
                this.color = 'green';
            }else if(this.percent > 60){
                this.grade = 'B';
                this.color = 'yellow';
            }else if(this.percent > 40){
                this.grade = 'C';
                this.color = 'orange'
            }else{
                this.grade = 'F';
                this.color = 'red'
            }
        },

        resetQuiz() {
            this.index = 0;
            this.selectedAnswer = '';
            this.correctScore = 0;
            this.wrongScore = 0;
        }
    }
}
</script>

<style>

</style>