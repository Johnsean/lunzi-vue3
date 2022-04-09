<template>
  <h1 class="first-title">Tabs示例</h1>
  <section class="second-title">
    <h2>基础用法</h2>
    <p>
      使用<span>selected</span>属性,指定展示的默认<span>子Tab</span>
    </p>
  </section>
  <Demo :component="TabsNormal"/>

  <section class="second-title">
    <h2>禁用子Tab</h2>
    <p>
      在<span>Tab</span>组件中添加<span>disabled</span>属性，以此来禁止选中<span>该Tab</span>组件
    </p>
  </section>
  <Demo :component="TabsDisabled" />

  <Attr :columns="columns" :data="data"/>
</template>

<script lang="ts">
import Demo from '../Demo.vue'
import TabsNormal from '../TabsPage/TabsDemo/TabsNormal.vue'
import TabsDisabled from './TabsDemo/TabsDisabled.vue'

import Attr from '../Attr.vue'
import {ref} from 'vue'
import {columns} from '../../lib/data'

export default {
  name: 'TabsDemo',
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

    return { TabsNormal, TabsDisabled, data, columns}
  }
};
</script>