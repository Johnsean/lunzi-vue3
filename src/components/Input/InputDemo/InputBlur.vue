<demo>
支持value
</demo>
<template>
  <div>
    <Input v-model:value="val" v-model="blurval"></Input>   
    <div class="showValue">
      <p>实时值val：
          <span class="card">{{ val }}</span>
      </p>
      <p>失焦更新值blurval ：
        <span class="card">{{ blurval }}</span>
      </p>
    </div>
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
    const blurval = ref("");
    return { val, blurval };
  },
};
</script>
<style lang="scss" scoped>
.showValue {
  > p {
    font-size: 14px;
    padding-left: 8px;
    margin: 0.5em;
    > .card {
        width: 20em;
        color: #3296fa;
        font-size: 14px;
        padding: 0 1em;
    } 
  }
}
</style>