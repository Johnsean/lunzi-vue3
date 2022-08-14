<template>
  <h1 class="first-title">Tree示例</h1>
  <section class="second-title">
    <h2>基础用法</h2>
    <p>
      使用<span>selected</span>属性,指定展示的默认<span>子Tab</span>
    </p>
  </section>
  <!-- <Demo :component="TreeDemo"/> -->
 



  <Attr :columns="columns" :data="data"/>
</template>

<script lang="ts">
import Demo from '../Demo.vue'
import Attr from '../Attr.vue'
import {ref} from 'vue'
import {columns} from '../../lib/data'

export default {
  name: 'TreeDemo',
  components: { Demo, Attr },
  setup(){
    const data = ref([
      {        
        params: 'selected',
        desc: '默认显示的子标签名',
        type: 'string',
        select: '子标签title值',
        default: '导航1', 
      },
      {
        params: 'disabled',
        desc: '未生效的子标签',
        type: 'boolean',
        select: 'disabled',
        default: 'false',
      },
    ])

    return {  data, columns }
  }
};
</script>