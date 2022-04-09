<template>
  <div class="demo">
    <h2 v-if="false">{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-actions">
      <Button @click="toggleCode"> {{ codeVisible === true ? '隐藏代码' : '显示代码' }} </Button>
    </div>
    <div :class="'demo-code' + [codeVisible ? ' code-show ' : ' code-hidden '] ">
      <HighLightCode :codeString="component.__sourceCode" codeType="html"/>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'

import { ref } from 'vue'
import HighLightCode from './HighLightCode.vue'

export default {
    components: { 
      Button,
      HighLightCode,
    },
    props: { component: Object },
    setup() {
      const codeVisible = ref(false)
      const toggleCode = () => { codeVisible.value = !codeVisible.value }
      return { codeVisible, toggleCode}
    }
}
</script>

<style lang="scss" scoped>
$border-color: #333;
.demo {
  border: 1px solid $border-color;
  border-radius: 5px;
  margin: 16px 0 32px;
  max-width: 500px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px solid $border-color;
  }
  &-code {
    border-top: 1px dashed $border-color;
    overflow: auto;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
      padding: 24px;
    }
  }
  .code-hidden {
    transition: all 0.4s cubic-bezier(0.39, 0.7, 0.18, 0.9);
    max-height: 0;
    border: none;
  }
  .code-show {
    max-height: 800px;
    transition: all 1s cubic-bezier(0.39, 0.7, 0.18, 0.9);
  }
}
</style>