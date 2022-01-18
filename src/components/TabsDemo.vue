<template>
    <h1>Tabs示例</h1>
    <Tabs v-model:selected="selected">
        <Tab title="学习">学习</Tab>
        <Tab title="吃">吃饭</Tab>
        <Tab title="睡觉21111">睡觉</Tab>
    </Tabs>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';
import { ref } from 'vue';

export default {
  name: 'TabsDemo',
  components: {Tabs, Tab},
  setup(){
    const selected = ref('学习')
    return {selected}
  }
};
</script>