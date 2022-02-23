<template>
  <h1 class="first-title">Dialog 示例</h1>
  <section class="second-title">
    <h2>基础用法</h2>
    <p>
      使用<span>v-model</span>绑定一个<span>Boolean</span>类型的变量到<span>Dialog</span>组件
    </p>
  </section>
  <Demo :component="DialogNormal" />

    <section class="second-title">
    <h2>支持 closeOnClickOverlay</h2>
    <p>
      在<span>Dialog</span>组件中添加<span>closeOnClickOverlay</span>属性，以此来决定是否通过<span>点击遮罩层</span>关闭<span>Dialog</span>组件
    </p>
  </section>
  <Demo :component="DialogOverlay" />

  <section class="second-title">
    <h2>支持 title</h2>
    <p>
      在<span>Dialog</span>组件中添加<span>title</span>属性，以此来决定<span>Dialog</span>组件是否显示<span
        >标题</span
      >
    </p>
  </section>
  <Demo :component="DialogTitle" />

  <section class="second-title">
    <h2>支持 bottomBtn</h2>
    <p>
      在<span>Dialog</span>组件中添加<span>bottomBtn</span>属性，以此来决定<span>Dialog</span>组件是否显示<span
        >处理button</span
      >
    </p>
  </section>
  <Demo :component="DialogBottom" />

  <section class="second-title">
    <h2>利用TS打开 Dialog</h2>
    <p>引入<span>openDialog</span>模块创建一个<span>Dialog</span>组件</p>
  </section>
  <Demo :component="DialogOnCode" />

  <Attr :columns="columns" :data="data"/>
</template>
<script lang="ts">
import Demo from '../Demo.vue'
import DialogNormal from "./DialogDemo/DialogNormal.vue"
import DialogOnCode from "./DialogDemo/DialogOnCode.vue"
import DialogTitle from "./DialogDemo/DialogTitle.vue";
import DialogBottom from "./DialogDemo/DialogBottom.vue";
import DialogOverlay from "./DialogDemo/DialogOverlay.vue";

import Attr from '../Attr.vue'
import {ref} from 'vue'
import {columns} from '../../lib/data'

export default {
  components: { Demo, Attr },
  setup() {
    const data = ref([
      {
        params: 'visible',
        desc: '是否展示',
        type: 'boolean',
        select: 'true / false',
        default: 'false',
      },
      {
        params: 'closeOnClickOverlay',
        desc: '是否点击遮罩层关闭弹出框',
        type: 'boolean',
        select: 'true / false',
        default: 'true',
      },
      {
        params: 'title',
        desc: '打开自定义标题',
        type: 'string',
        select: '自定义标题',
        default: 'default',
      },
      {
        params: 'bottomBtn',
        desc: '显示处理功能按钮',
        type: 'boolean',
        select: 'bottomBtn',
        default: 'false',
      },
      {
        params: 'ok',
        desc: '确认触发函数',
        type: 'function',
        select: '()=>{}',
        default: '--',
      },
      {
        params: 'cancel',
        desc: '取消触发函数',
        type: 'function',
        select: '()=>{}',
        default: '--',
      },
    ])
    return {
      DialogNormal,
      DialogOnCode,      
      DialogOverlay,
      DialogTitle,
      DialogBottom,
      data, 
      columns, 
    }
  }
}
</script>