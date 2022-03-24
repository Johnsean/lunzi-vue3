<demo>
基本用法
</demo>
<template>
  <div>
    <Button level="primary" @click="toggle">打开Dialog</Button>
    <Dialog v-model:visible="showDialog">
      <p>这是内容</p>    
    </Dialog>
  </div>
</template>

<script lang="ts">
import {Button,Dialog} from '../../../lib/index'
import { ref } from 'vue'

export default {
  components: { Dialog, Button },
  setup() {
    const showDialog = ref(false)  // 对话框是否可见
    const toggle = () => { //控制对话框是否可见
      showDialog.value = !showDialog.value
    }
    
    return {
      showDialog,
      toggle,
    }
  },
}
</script>