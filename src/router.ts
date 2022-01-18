import {createRouter, createWebHistory} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Documentation.vue'
import SwitchDemo from './components/SwitchPage/SwitchDemo.vue'
import ButtonDemo from './components/ButtonPage/ButtonDemo.vue'
import DialogDemo from './components/DialogPage/DialogDemo.vue'
import TabsDemo from './components/TabsPage/TabsDemo.vue'
import IconDemo from './components/IconDemo.vue'
import DocDemo from './components/DocDemo.vue'

import Intro from "./views/Intro.vue";
import Install from "./views/Install.vue";
import Getstart from "./views/Getstart.vue";


// const md = (filename) => {
//   return h(Markdown, {path: `../markdown/${filename}.md`, key: filename})
// }

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
        {path: 'intro',component: Intro},
        {path: 'get-start', component: Getstart},
        {path: 'install', component: Install},
        {path: 'switch', component: SwitchDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'tabs', component: TabsDemo},
        {path: 'icon', component: IconDemo}
      ]
    },
  ]
})