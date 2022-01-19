import {createRouter, createWebHistory} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Documentation.vue'
import SwitchDemo from './components/SwitchPage/SwitchDemo.vue'
import ButtonDemo from './components/ButtonPage/ButtonDemo.vue'
import DialogDemo from './components/DialogPage/DialogDemo.vue'
import TabsDemo from './components/TabsPage/TabsDemo.vue'

import Intro from './markdown/intro.md'
import Install from './markdown/install.md'
import Getstart from './markdown/get-start.md'

import { h } from "vue";
import Markdown from "./components/Markdown.vue";
const md = (string) => h(Markdown, {content: string, key: string})


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
        {path:'',redirect: "/doc/intro"},
        {path: 'intro',component: md(Intro)},
        {path: 'get-start', component: md(Getstart)},
        {path: 'install', component: md(Install)},
        {path: 'switch', component: SwitchDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'tabs', component: TabsDemo},
      ]
    },
  ]
})