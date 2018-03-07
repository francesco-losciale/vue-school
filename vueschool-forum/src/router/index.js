import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/PageHome'
import ThreadShow from '@/pages/PageThreadShow'

Vue.use(Router)

export default new Router({
  mode: 'history', // https://router.vuejs.org/en/essentials/history-mode.html
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/thread/:id',
      name: 'ThreadShow',
      component: ThreadShow,
      props: true // pass the params to the component as properties (:id goes into ThreadShow)
    }
  ]
})
