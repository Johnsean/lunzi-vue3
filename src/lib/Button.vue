<template>
    <button class="cot-button" :class="classes"  :disabled="disabled">
        <span v-if="loading" class="cot-loadingIndicator"></span>
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
  },
  level: {
    type: String,
    default: "normal",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  }
},
setup(props) {
  const {theme, size, level} = props
  const classes = computed(()=>{
    return {
      [`cot-theme-${theme}`]: theme,
      [`cot-size-${size}`]: size,
      [`cot-level-${level}`]: level
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
$red: #f56c6c;
$radius: 4px; // 角度参数
$grey: #909399;
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
  transition: background 0.25s;
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
      text-decoration: underline;
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
  &.cot-theme-button {
    &.cot-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.cot-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }
  &.cot-theme-link {
    &.cot-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.cot-theme-text {
    &.cot-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.cot-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
   &.cot-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      border-color: $grey;
      &:hover {
        border-color: $grey;
      }
      //   pointer-events: none;
    }
  }
  &.cot-theme-link,
  &.cot-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        text-decoration: none;
        background-color: transparent;
      }
    }
  }
  > .cot-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: lighten($blue, 20%) lighten($blue, 10%) $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: cot-spin 1s infinite linear;
  }
  @keyframes cot-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>