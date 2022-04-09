<template>
    <h1 class="first-title">Button 示例</h1>
    <section class="second-title">
      <h2>基础用法</h2>
      <p>
        使用<span>level</span>属性改变<span>Button</span>组件的颜色，以此突显<span>Button</span>组件的重要等级
      </p>
    </section>
    <Demo :component="ButtonNormal" />

    <section class="second-title">
      <h2>尺寸大小</h2>
      <p>使用<span>size</span>属性改变<span>Button</span>组件的大小</p>
    </section>
    <Demo :component="ButtonSize" />

    <section class="second-title">
      <h2>禁用按钮</h2>
      <p>
        使用<span>disabled</span>属性改变<span>Button</span>组件的状态，以此<span>禁止点击Button</span>组件
      </p>
    </section>
    <Demo :component="ButtonDisabled" />
    
    <section class="second-title">
      <h2>加载中</h2>
      <p>使用<span>loading</span>属性表示<span>Button</span>组件正在加载</p>
    </section>
    <Demo :component="ButtonLoading" />

    <section class="second-title">
      <h2>支持 round</h2>
      <p>使用<span>round</span>属性改变<span>Button</span>组件的形状</p>
    </section>
    <Demo :component="ButtonRound" />

    <Attr :columns="columns" :data="data"/>
</template>

<script lang="ts">
import Demo from '../Demo.vue'
import ButtonNormal from './ButtonDemo/ButtonNormal.vue'
import ButtonSize from './ButtonDemo/ButtonSize.vue'
import ButtonRound from './ButtonDemo/ButtonRound.vue'
import ButtonDisabled from './ButtonDemo/ButtonDisabled.vue'
import ButtonLoading from './ButtonDemo/ButtonLoading.vue'

import Attr from '../Attr.vue'
import {ref} from 'vue'
import {columns} from '../../lib/data'

export default {
  components: { Demo, Attr },
  setup() {
    const data = ref([
      {
        params: 'level',
        desc: '按钮类型',
        type: 'string',
        select: 'primary / success / warning / error',
        default: 'normal',
      },
      {
        params: 'size',
        desc: '按钮大小',
        type: 'string',
        select: 'small / normal / big',
        default: 'normal',
      },      
      {
        params: 'round',
        desc: '改变按钮形状',
        type: 'boolean',
        select: 'round',
        default: 'false',
      }, 
      {
        params: 'disabled',
        desc: '按钮失效状态',
        type: 'boolean',
        select: 'disabled',
        default: 'false',
      },
      {
        params: 'loading',
        desc: '按钮载入状态',
        type: 'boolean',
        select: 'loading',
        default: 'false',
      }
    ])
    
    return { ButtonNormal, ButtonSize, ButtonRound, ButtonDisabled, ButtonLoading, columns, data }
  }
}
</script>