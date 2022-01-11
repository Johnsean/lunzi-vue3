import {createRouter, createWebHistory} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Documentation.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import IconDemo from './components/IconDemo.vue'
import DocDemo from './components/DocDemo.vue'
import Markdown from './components/Markdown.vue'

import {h} from 'vue'

const md = (filename) => {
  return h(Markdown, {path: `../markdown/${filename}.md`, key: filename})
}

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
        {path:'',component:DocDemo},
        {path: 'intro',component: md('intro')},
        {path: 'get-start', component: md('get-start')},
        {path: 'install', component: md('install')},
        {path: 'switch', component: SwitchDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'tabs', component: TabsDemo},
        {path: 'icon', component: IconDemo}
      ]
    },
  ]
})