<template>
    <div class="w-full h-screen flex justify-center items-center">
    <div class="max-w-xl w-full py-10 px-8 h-screen md:h-fit shadow-2xl bg-main rounded-sm">
        <section>
          <div>
            <p class="text-gray-500 font-semibold text-xl">Mathematics quiz</p>
            <p class="text-2xl text-gray-300 font-semibold">Question <span class="text-gray-100 text-3xl">{{ maths[index]['id'] }}</span><span class="text-gray-500">/{{ maths.length }}</span></p>
          </div>

          <div class="py-10 text-lg text-gray-300 font-semibold">
            <p v-if="maths">
              {{ maths[index]['question'] }}
            </p>
          </div>

          <form class="md:grid grid-cols-2 gap-10 md:space-y-0 space-y-6">
            <label 
              :for="key" 
              v-for="answer,key in maths[index]['answers']" 
              :key="answer"  
              class="flex justify-between border-2 border-gray-500 md:p-10 p-5 md:relative md:rounded-md rounded-2xl"
              :class="{'border-green bg-white' : key == maths[index]['correctAnswer'] && selectedAnswer != ''}"
              >
              <!-- <p class="md:absolute top-2 text-white left-4 font-bold text-2xl"> {{ key }}</p> -->
              <p class="text-gray-500 text-md font-semibold"> {{ answer }}</p>
              <input 
                type="radio" 
                :id="key" 
                :value="key" 
                class="md:absolute top-4 right-4 bg-transparent border-2 border-gray-500 rounded-full"
                @click="answered($event)"
                :disabled="selectedAnswer != ''"
              >
            </label>

              <!-- <label for="ans" class="flex justify-between border-2 border-green md:p-10 p-5 md:relative md:rounded-md rounded-2xl">
              <p class="text-green text-lg font-semibold">Dangote</p>
              <input type="checkbox" class="md:absolute top-4 right-4 bg-transparent bg-green rounded-full">
            </label>

            <label for="ans" class="flex justify-between border-2 border-red md:p-10 p-5 md:relative md:rounded-md rounded-2xl">
              <p class="text-red text-lg font-semibold">Arthur Eze</p>
              <input type="checkbox" class="md:absolute top-4 right-4 bg-transparent border-2 border-gray-500 rounded-full">
            </label> -->
          </form>

          <div class="mt-12 flex justify-between">
            <router-link :to="{ name: 'Home'}" class="text-gray-300 py-4 text-lg rounded-md px-10">Quit quiz</router-link>
            <button @click="nextQuestion()" v-show="selectedAnswer && index < maths.length-1" class="py-4 px-16 text-white font-semibold text-center bg-blue rounded-md">Next</button>
            <button @click="showResults()" v-show="selectedAnswer && index == maths.length-1" class="py-4 px-16 text-white font-semibold text-center bg-blue rounded-md">Finish</button>
          </div>
        </section>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      maths: [],
      selectedAnswer: '',
      index: 0,
      correctScore: 0,
      wrongScore: 0
    }
  },

  created() {
    fetch('http://localhost:3000/maths')
      .then(res => res.json())
      .then(data => this.maths = data)
      .catch(err => console.log(err.message))
  },

  methods: {
    answered(e) {
      this.selectedAnswer = e.target.value;
      if(this.selectedAnswer == this.maths[this.index]['correctAnswer']){
        this.correctScore++;
      }else{
        this.wrongScore++;
      };
      console.log(this.correctPickedAnswer + ' ' + this.wrongPickedAnswer);
    },

    nextQuestion() {
      this.index++;
      this.selectedAnswer = '';
    },

    showResults() {
      
    }
  }

}
</script>

<style>

</style>