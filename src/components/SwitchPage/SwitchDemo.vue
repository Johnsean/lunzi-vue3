<template>
  <div>
    <h1>Switch 组件示例</h1>
    <Demo :component="Switch1Demo"></Demo>
    <Demo :component="Switch2Demo"></Demo>
  </div>
</template>
<script lang="ts">
import Switch1Demo from  './SwitchDemo/Switch1.demo.vue'
import Switch2Demo from  './SwitchDemo/Switch2.demo.vue'

import Demo from '../Demo.vue'

export default{
    components:{ Demo },
    setup() {
        return { Switch1Demo, Switch2Demo }
    }
}
</script>

<style lang="scss" scoped></style> 