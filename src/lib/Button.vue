<template>
    <button class="cot-button" :class="classes">
        <slot/>
    </button>
</template>

<script lang="ts">
import { computed } from 'vue'

export default {
   props:{
       theme:{
          type: String,
          default: 'button'
       },
       size:{
          type: String,
          default: 'normal'
       }
   },
   setup(props, context) {
     const {theme, size} = props
     const classes = computed(()=>{
       return {
        [`cot-theme-${theme}`]: theme,
        [`cot-size-${size}`]: size
       }
     })
    return { classes }
   }
}
</script>
<style lang="scss">
$h: 32px; // 默认高度
$border-color: #d9d9d9; // 边框默认颜色
$color: #333; // 默认字体颜色
$blue: #40a9ff; // 颜色参数
$radius: 4px; // 角度参数
.cot-button {
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap; //文本不换行显示
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  box-sizing: border-box;
  & + & {
    margin-left: 8px; //  相邻组件间相隔8px
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.cot-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 20%);
    }
  }
  &.cot-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  &.cot-theme-button {
    &.cot-size-big {
      font-size: 24px;
      height: 48px;
      padding: 0 16px;
    }
    &.cot-size-small {
      font-size: 12px;
      height: 20px;
      padding: 0 4px;
    }
  }
}
</style>