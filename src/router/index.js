import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ComponentA from '@/components/ComponentA'

Vue.use(Router)

// ルーティングの設定をしている
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/component-a',
      name: 'ComponentA',
      component: ComponentA
    }
  ]
})
