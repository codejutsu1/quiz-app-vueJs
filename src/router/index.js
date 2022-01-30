import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Maths from '../views/Maths.vue'
import HistoryQuiz from '../views/HistoryQuiz.vue'
import Science from '../views/Science.vue'
import Tech from '../views/Tech.vue'
import Html from '../views/Html.vue'
import Css from '../views/Css.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/maths',
    name: 'Maths',
    component: Maths
  },
  {
    path: '/history',
    name: 'History',
    component: HistoryQuiz
  },
  {
    path: '/science',
    name: 'Science',
    component: Science
  },
  {
    path: '/tech',
    name: 'Tech',
    component: Tech
  },
  {
    path: '/html',
    name: 'HTML',
    component: Html
  },
  {
    path: '/css',
    name: 'CSS',
    component: Css
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
