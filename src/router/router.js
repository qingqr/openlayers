import Vue from 'vue'
import Router from 'vue-router'

import MapTest from '@/components/MapTest.vue' // 突发事件

Vue.use(Router)

const isProduction = process.env.NODE_ENV.includes('production')

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/MapTest',
      component: MapTest,
    },
  ],
})

export default router
