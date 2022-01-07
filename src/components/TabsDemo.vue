<template>
    <h2>Tabs示例</h2>
    <Tabs>
        <Tab title="学习">学习</Tab>
        <Tab title="吃饭">吃饭</Tab>
        <Tab title="睡觉">睡觉</Tab>
    </Tabs>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';
  
export default {
  name: 'TabsDemo',
  components: {Tabs, Tab},
};
</script>