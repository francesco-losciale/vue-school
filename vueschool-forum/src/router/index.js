import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ThreadShow from '@/components/ThreadShow'

Vue.use(Router)

export default new Router({
  mode: 'history', // https://router.vuejs.org/en/essentials/history-mode.html
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/thread/:id',
      name: 'ThreadShow',
      component: ThreadShow,
      props: true // pass the params to the component as properties (:id goes into ThreadShow)
    }
  ]
})
