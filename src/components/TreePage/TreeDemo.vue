<template>
  <h1 class="first-title">Tabs示例</h1>
  <section class="second-title">
    <h2>基础用法</h2>
    <p>
      使用<span> data </span>属性,传入树形结构的<span>各个节点</span>
    </p>
  </section>
  <Demo :component="TreeNormal"/>



  <Attr :columns="columns" :data="data"/>
</template>

<script lang="ts">
import Demo from '../Demo.vue'
import TreeNormal from './TreeDemo/TreeNomal.vue'

import Attr from '../Attr.vue'
import {ref} from 'vue'
import {columns} from '../../lib/data'

export default {
  name: 'TreeDemo',
  components: { Demo, Attr, TreeNormal },
  setup(){
    const data = ref([
      {        
        params: 'data',
        desc: '展示数据',
        type: 'array',
        select: '---',
        default: '---', 
      },
      {
        params: 'data[]',
        desc: 'data中数据结构如下',
        type: '---',
        select: '---',
        default: '---', 
      },
      {
        params: 'label',
        desc: '指定节点标签为节点对象的某个属性值',
        type: 'string, function(data, node)',
        select: '---',
        default: '---',
      },
      {
        params: 'children',
        desc: '指定子树为节点对象的某个属性值',
        type: 'string',
        select: '---',
        default: '---',
      },
    ])

    return { TreeNormal, data, columns}
  }
};
</script>