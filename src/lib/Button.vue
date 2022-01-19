<template>
    <button class="cot-button" :class="classes"  :disabled="loading ? true : disabled">
        <span v-if="loading" class="cot-loadingIndicator"></span>
        <slot/>
    </button>
</template>

<script lang="ts">
import { computed } from 'vue'

export default {
  props:{
    size:{
      type: String,
      default: 'normal'
    },
    level: {
      type: String,
      default: 'normal'
    },
    round: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const {round, size, level} = props
    const classes = computed(()=>{
      return {
        [`cot-size-${size}`]: size,
        [`cot-level-${level}`]: level,
        [`cot-theme-${round ? "round" : "normal"}`]: round
      }
    })
    
    return { classes }
  }
}
</script>

<style lang="scss">
$h: 32px; // 默认高度
$border-color: #333; // 边框默认颜色
$color: #333; // 默认字体颜色
$blue: #40a9ff; // 颜色参数
$red: #f56c6c;
$radius: 4px; // 角度参数
$roundRadius: 32px;
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
  margin: 0 10px 8px 0;
  @media (min-width: 500px) {
    &:hover {
      animation: button-hover 0.5s linear forwards;
      &[disabled] {
        animation: none;
      }
    }
  }

  &:focus {
    color: $blue;
    border-color: $blue;
    box-shadow: 0px 0px 10px #ccc;
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &.cot-theme-round {
    border-radius: $roundRadius;
  }
  &[disabled] {
    cursor: not-allowed;
    color: #fff;
    background-color: #ddd;
    border: none;
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
  
  &.cot-level-primary {
    color: #fff;
    border: none;
    background-color: #1976d2;
  }
  &.cot-level-success {
    color: #fff;
    border: none;
    background-color: #13ce66;
  }
  &.cot-level-warning {
    color: #fff;
    border: none;
    background-color: #ffc107;
  }
  &.cot-level-error {
    color: #fff;
    border: none;
    background-color: #ff4f57;
  }
  &.cot-level-primary {
    color: #fff;
    border: none;
    background-color: #1976d2;
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
}
</style>