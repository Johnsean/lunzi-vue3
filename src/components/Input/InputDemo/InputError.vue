<demo>
支持error
</demo>
<template>
  <div>
    <Input :error="errorMessage"></Input>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
import Input from "../../../lib/Input.vue";
export default {
  components: {
    Input,
  },
  setup() {
    const errorMessage = ref("错误");
    return {
      errorMessage,
    };
  },
};
</script>