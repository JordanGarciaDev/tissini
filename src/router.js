import Vue from 'vue'
import Router from 'vue-router'

import App from './App.vue'
import Categoria from './views/Categoria.vue'
import Catalogo from './views/Catalogo.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'categoria',
      component: Categoria
    },
    {
      path: '/categoria',
      name: 'categoria',
     component: Categoria
    },
    ,
    {
      path: '/catalogo',
      name: 'catalogo',
     component: Catalogo
    }

  ]
})
