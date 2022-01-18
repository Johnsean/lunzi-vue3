<demo>
常规使用
</demo>
<template>
  <div>
    <Button @click="toggle" size="small">打开对话框</Button>
      <Dialog 
        v-model:visible="x"
        :closeOnClickOverlay="false"
        :ok="f1"
        :cancel="f2"
      >
      <template #title><strong>加粗的标题</strong></template>
      <template #content> <strong>hi</strong><div>hi2</div></template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import Dialog from "../../../lib/Dialog.vue";
import Button from "../../../lib/Button.vue";
import { ref } from "vue";
import { openDialog } from "../../../lib/openDialog";
export default {
  components: { Dialog, Button },
  setup() {
    const x = ref(false);  // 对话框是否可见
    const closeOnClickOverlay = ref(true) // 点击对话框外时，对话框是否会关闭
    const toggle = () => { //控制对话框是否可见
      x.value = !x.value;
    };
    const f1 = () => { //控制取消和 x一个按钮即可
      return false;
    };
    const f2 = () => {};
    return {
      x,
      toggle,
      f1,
      f2,
    };
  },
};
</script>