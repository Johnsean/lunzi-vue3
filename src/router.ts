import {createRouter, createWebHistory} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Documentation.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import IconDemo from './components/IconDemo.vue'

export const router = createRouter({
  //hash
  history: createWebHistory(),
  routes: [
    { 
      path: '/', component: Home 
    },
    { 
      path: '/doc', component: Doc,
      children:[
        {path: 'switch', component: SwitchDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'icon', component: IconDemo}
      ]
    },
  ]
})