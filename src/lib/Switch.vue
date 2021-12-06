<template>
    <div>
        <button :class="{checked:value}" @click="toggle" >
            <span></span>
        </button>
    </div>
</template>
<script lang="ts">
import { ref } from "vue"

export default {
    props:{
        value:Boolean
    },
    emits:['toggleSwitch'],
    setup(props, context){
        const toggle=()=>{
            context.emit('toggleSwitch',!props.value)
        }
        return {
            toggle
        }
    }
}
</script>
<style lang="scss" scoped>
 $h: 22px;
 $h2: $h - 4px;
button {
  position: relative;
  display: inline-block;
  width: $h * 2;
  height: $h;
  line-height: $h;
  vertical-align: middle;
  border: none;
  background-color: #bfbfbf;;
  border-radius: calc($h / 2);
  outline: none;
  cursor: pointer;
  transition: all 0.2s;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    width: $h2;
    height: $h2;
    border: none;
    border-radius: calc($h / 2);
    background-color: #fff;
  }
}
 button.checked {
  background-color: #1890ff;
  > span {
    left: calc(100% - #{$h2} - 2px);
  }
}
</style>