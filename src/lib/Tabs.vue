<template>
    <div class="cot-tabs">
        <div class="cot-tabs-nav" ref="containerRef">
            <div class="cot-tabs-nav-item" 
                v-for="(t,index) in titles" :key="index"
                :class = "{ selected: t === selected }"
                @click="select(t)"
                :ref="(el)=>{ if (t === selected ) selectedItem = el}">
                    {{t}}
            </div>
            <div class="cot-tabs-nav-indicator" ref="indicator"/>
        </div>
    </div>
    <div class="cot-tabs-content">
        <component :is="current"
            :key="current.props.title"
            class="cot-tabs-content-item"
        />
    </div>
</template>
<script lang="ts">
import { computed,ref,onMounted,watchEffect } from 'vue'
import Tab from './Tab.vue'

export default{
    name: 'Tabs',
    props:{
        selected: {
            type:String,
            default: '导航1'
        }
    },
    setup(props, context){
        const containerRef = ref<HTMLDivElement>(null)
        const selectedItem = ref<HTMLDivElement>(null)
        const indicator = ref<HTMLDivElement>(null)

        onMounted(()=>{ // 挂载的时候确定下划线的长度
            watchEffect(()=>{
                const { left: left1}   = (containerRef.value as HTMLDivElement).getBoundingClientRect()
                const { width,left: left2 } = selectedItem.value.getBoundingClientRect()
                const left: number = left2 -  left1

                indicator.value.style.width = width + 'px'
                indicator.value.style.left = `${left}px`
            },{ // 解决异步
                flush: "sync", //效果更新需要缓冲时间
            })
        })

        const defaults = context.slots.default()  // tab节点 （获取插槽内容）
        defaults.forEach((tag)=>{
            // if (tag.type !== Tab){
           
           // @ts-ignore
            if (tag.type.name !== Tab.name){ //生产环境
                throw new Error('Tabs 子标签必须是 Tab')
            }
        })

        const titles = defaults.map(tag=>{
            return tag.props.title
        })
        const select  = (title: String)=>{
            context.emit('update:selected',title)
        }
        const current = computed(()=>{
            return defaults.find((tag) => tag.props.title === props.selected)
        })

        return {defaults,titles,select,current,selectedItem,indicator,containerRef}
    }
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.cot-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>