<demo>
支持value
</demo>
<template>
  <div>
    <Input v-model:value="val"></Input> 
     <div>{{val}}</div>
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
    const val = ref("111");
    return { val };
  },
};
</script>