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
  &.cot-theme-default {
    background: #fff;
    border: 1px solid #dcdfe6;
    &:hover, &:focus {
      color: #222831;
      border-color: #222831;
      background-color: #eeeeee;
    }
  }
  &.cot-theme-primary {
    background: #00adb5;
    border: 1px solid #00adb5;
    color: #eeeeee;
    &:hover, &:focus {
      color: #eeeeee;
      border-color: #222831;
      background-color: #40babf;
    }
  }
  &.cot-theme-success {
    background: #4ecca3;
    border: 1px solid #4ecca3;
    color: #eeeeee;
    &:hover, &:focus {
      color: #eeeeee;
      border-color: #222831;
      background-color: #6be3bc;
    }
  }
  &.cot-theme-danger {
    background: #d72323;
    border: 1px solid #d72323;
    color: #eeeeee;
    &:hover, &:focus {
      color: #eeeeee;
      border-color: #222831;
      background-color: #dd5656;
    }
  }
  &.cot-theme-info {
    background: #52616b;
    border: 1px solid #52616b;
    color: #eeeeee;
    &:hover, &:focus {
      color: #eeeeee;
      border-color: #222831;
      background-color: #6c777d;
    }
  }
  &.cot-theme-warning {
    background: #fce38a;
    border: 1px solid #fce38a;
    color: #4a4444;
    &:hover, &:focus {
      color: #8e8282;
      border-color: #222831;
      background-color: #f7e4a4;
    }
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
</style>