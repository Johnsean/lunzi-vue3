<template>
    <button class="cot-button" :class="{[`theme-${theme}`]:theme}">
        <slot/>
    </button>
</template>

<script lang="ts">
export default {
   props:{
       theme:{
           type: String,
           default: 'button'
       }
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
}
</style>