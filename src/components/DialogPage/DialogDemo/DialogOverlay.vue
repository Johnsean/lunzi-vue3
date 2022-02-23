<demo>
支持 closeOnClickOverlay
</demo>
<template>
  <div>
    <Button level="warning" @click="toggle">禁用遮罩层关闭Dialog</Button>
    <Dialog v-model:visible="showDialog" :closeOnClickOverlay="false">
      <p>这是内容</p>
    </Dialog>
  </div>
</template>

<script lang="ts">
import Dialog from '../../../lib/Dialog.vue'
import Button from '../../../lib/Button.vue'
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