<template>
    <div class="w-full h-screen flex justify-center items-center">
        <div class="max-w-xl w-full py-10 h-screen md:h-fit px-8 shadow-2xl bg-main rounded-sm">
            <h1 class="text-center font-semibold text-xl text-white">Quiz Result</h1>
            <div class="my-5 flex justify-center">
                <img v-if="grade == 'A'" src="images/trophy.png" alt="Winner trophy" width="150">
            </div>

            <div>
                <h2 class="text-center font-semibold text-2xl text-white">
                    Congratulations!
                </h2>
                <p class="text-center text-gray-300 my-3 font-semibold text-sm">
                    You passed {{ percent }}% of applicants. Endevour to try again to understand better.
                </p>
            </div>

            <div class="text-center font-semibold tracking-wider my-8">
                <h3 class="text-sm text-gray-500 mt-1">
                    YOUR SCORE
                </h3>
                <p class="text-4xl my-3 font-bold text-white">
                    <span :class="{
                        'text-green' : color == 'green', 
                        'text-red': color == 'red',
                        'text-yellow-200': color == 'yellow',
                        'text-orange-600': color == 'orange'
                    }">
                        {{ percent }}% - {{ grade }}
                    </span>
                </p>
                <p class="space-x-6">
                    <span class="text-gray-300 text-md">Passed: <span class="text-green">{{ correctScore }}</span></span> 
                    <span class="text-gray-300 text-md">Failed: <span class="text-red">{{ wrongScore }}</span></span>
                    <span class="text-gray-300 text-md">Total: <span class="text-gray-100">{{ totalScore }}</span></span>     
                </p>
            </div>

            <div class="my-5 flex justify-between">
                <a href="#" class="py-4 md:px-12 px-8 text-gray-500 font-semibold text-center bg-white rounded-lg">Share Results</a>
                <button @click="resetQuiz" class="py-4 md:px-12 px-8 text-white font-semibold text-center bg-blue rounded-lg">Take New Quiz</button>
            </div>

            <div class="rounded-full border-2 p-5 border-white bg-gray-500 text-white flex items-center justify-center mx-auto text-lg" style="width: 70px; height: 70px;">
                <router-link :to="{ name: 'Home'}">Home</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'correctScore', 
        'wrongScore', 
        'totalScore', 
        'percent', 
        'color', 
        'grade' 
    ],
    methods: {
        resetQuiz() {
            document.location.reload();
        }
    }
}
</script>

<style>

</style>