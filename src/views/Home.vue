<template>
    <div class="w-full h-screen flex justify-center items-center">
      <div class="max-w-xl w-full py-10 px-8 shadow-2xl rounded-sm">
        <h1 class="mb-6 text-center font-bold text-xl tracking-wider">
          Quiz Categories
        </h1>
          <section>
            <div class="grid grid-cols-3 md:gap-10 gap-4">
              <router-link :to="{ name: course.topic}" v-for="course in courses" :key="course.id" class="flex items-center py-6 bg-white rounded-lg tracking-wider">
                  <div class="w-full">
                    <div class="flex justify-center mb-4">
                      <img :src="course.logo" :alt="course.topic" width="70">
                    </div>
                    <p class="font-bold text-lg text-center">{{ course.topic }}</p>
                  </div>
              </router-link>
            </div>
          </section>
      </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';

export default {
  data() {
    return {
      courses: [
        { topic: 'Maths', logo: 'images/maths.png', id: 1},
        { topic: 'History', logo: 'images/history.png', id: 2},
        { topic: 'Science', logo: 'images/science.png', id: 3},
        { topic: 'Tech', logo: 'images/tech.png', id: 4},
        { topic: 'HTML', logo: 'images/html.png', id: 5},
        { topic: 'CSS', logo: 'images/css.png', id: 6}
      ]
    }
  }
  
}
</script>
