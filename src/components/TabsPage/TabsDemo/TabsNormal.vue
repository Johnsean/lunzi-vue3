<demo>
常规使用
</demo>
<template>
  <Tabs v-model:selected="TabFlag">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
    <Tab title="导航3">内容3</Tab>
  </Tabs>
</template>

<script lang="ts">
import {Tab,Tabs} from '../../../lib/index'
import { ref } from 'vue'

export default {
  name: 'TabsDemo1',
  components: { Tab, Tabs },
  setup(){
    const TabFlag = ref('导航1')
    
    return {TabFlag}
  }
}
</script>