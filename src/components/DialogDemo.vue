<template>
  <div>Dialog 示例</div>
  <h1>示例 1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog 
    v-model:visible="visible"
    :closeOnClickOverlay="closeOnClickOverlay"
    :ok="fn1"
    :cancel="fn2"
  >
    <template #title><strong>加粗的标题</strong></template>
    <template #content> <strong>hi</strong><div>hi2</div></template>
  </Dialog>
</template>
<script lang="ts">
import Dialog from "../lib/Dialog.vue"
import Button from "../lib/Button.vue";
import { ref } from "vue";

export default {
    name: 'DialogDemo',
    components: { Dialog,Button },
    setup() {
        const visible = ref(false) // 对话框是否可见
        const closeOnClickOverlay = ref(true) // 点击对话框外时，对话框是否会关闭
        const toggle = ()=>{ //控制对话框是否可见
            visible.value = !visible.value
        }
        const fn1 = () => {   //控制取消和 x一个按钮即可
            return false;
        };
        const fn2 = () => { return true};
        return {visible,closeOnClickOverlay,toggle,fn1,fn2}
    }
}
</script>