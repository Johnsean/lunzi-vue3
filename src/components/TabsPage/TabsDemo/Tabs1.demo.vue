<demo>
常规使用
</demo>
<template>
  <Tabs v-model:selected="selected">
    <Tab title="学习">学习</Tab>
    <Tab title="吃">吃饭</Tab>
    <Tab title="睡觉21111">睡觉</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tab from '../../../lib/Tab.vue'
import Tabs from '../../../lib/Tabs.vue'
import { ref } from 'vue'

export default {
  name: 'TabsDemo1',
  components: { Tab, Tabs },
  setup(){
    const selected = ref('吃')
    return {selected}
  }
}
</script>