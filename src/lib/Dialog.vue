<template>
  <template v-if="visible">
    <teleport to="body">
      <div class="cot-dialog-overlay" @click="onClickOverlay"></div>
      <div class="cot-dialog-wrapper" :style="styles">
        <div class="cot-dialog">
          <span class="cot-dialog-close" @click="close"></span>
          <header v-if="showTitle">
            <h1>{{ title }}</h1>
          </header>
          <main>
            <slot />
            <slot name="content" />
          </main>
          <footer v-if="bottomBtn">
            <Button level="primary" @click="ok" >confirm</Button>
            <Button @click="cancel" >Cancel</Button>
          </footer>
        </div>
      </div>
    </teleport>
  </template>
</template>

<script lang="ts">
import { computed } from 'vue'
import Button from './Button.vue'

export default {
  name: 'Dialog',
  props: {
    visible: {
      type: Boolean,
      default: false,
    }, 
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
    title:{
      type:String,
      default: ''
    },
    bottomBtn: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '100px'
    },
    ok: Function,
    cancel: Function,
  },
  components: {
    Button,
  },
  setup(props, context) {
    const styles = {
      minWidth: props.width,
      top: props.top
    }

    const close = () => {
      context.emit('update:visible',!props.visible)
    }
    const onClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close();
      }
    }
    const showTitle = computed(() => {
      if (props.title == "") {
        return false;
      } else {
        return true;
      }
    })
    
    const ok = () => {
      if (props.ok && props.ok() !== false) {  // 等价于props.ok?.() !==false
        close();
      }
    }
    const cancel = () => {
      props.cancel && props.cancel(); // 等价于props.cancel?.()
      close();
    }

    return {
      styles, 
      close,
      onClickOverlay,
      showTitle,
      ok,
      cancel
    }
  }
}
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.cot-dialog {
  position: relative;
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade-out(#333, 0.5);
  min-width: 18em;
  // max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(rgb(17,17,18), 0.3);
    z-index: 30;
  }
  &-wrapper {
    min-width: 50%;
    position: fixed;
    left: 50%;
    // top: 50%;
    // transform: translate(-50%, -50%);
    top: 0;
    transform: translateX(-50%);
    z-index: 31;
  }
  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    > h1 {
      font-size: 1em;
    }
  }
  > main {
    min-height: 8em;
    padding: 32px 16px 16px 20px;
  }
  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 2px;
    text-align: right;
  }
  &-close {
    position: absolute;
    display: inline-block;
    top: 10px;
    right: 10px;
    width: 32px;
    height: 32px;
    border-radius: 32px;
    cursor: pointer;
    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      width: 50%;
      top: 50%;
      left: 50%;
      background: black;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    @media (min-width: 500px) {
      &:hover {
        background-color: #f57272;
        &::before,
        &::after {
          background-color: #fff;
        }
      }
    }
  }
}
</style>