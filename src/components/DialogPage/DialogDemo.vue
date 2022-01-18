<template>
  <h1>dialog 基本用法</h1>
  <Button @click="toggle" size="small">打开对话框</Button>
  <Dialog 
    v-model:visible="visible"
    :closeOnClickOverlay="closeOnClickOverlay"
    :ok="fn1"
    :cancel="fn2"
  >
    <template #title><strong>加粗的标题</strong></template>
    <template #content> <strong>hi</strong><div>hi2</div></template>
  </Dialog>
  <h1>示例 2 函数式调用</h1>
  <Button @click="showDialog" size="small">一键打开Dialog</Button>
</template>
<script lang="ts">
import Dialog from "../lib/Dialog.vue"
import Button from "../lib/Button.vue";
import { ref, h } from "vue";
import { openDialog } from "../lib/openDialog";

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
        const showDialog = () => {
          openDialog({
            title: h("strong", {}, "标题"),
            content: "你好",
            ok() {
              console.log("ok");
            },
            cancel() {
              console.log("cancel");
            },
          });
        };
        return {visible,closeOnClickOverlay,toggle,fn1,fn2,showDialog}
    }
}
</script>