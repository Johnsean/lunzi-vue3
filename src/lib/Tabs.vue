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
import { computed,ref,onMounted,onUpdated } from 'vue'
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
        const defaults = context.slots.default()
        defaults.forEach((tag)=>{
            if (tag.type !== Tab){
                throw new Error('Tabs 的内部必须是 Tab')
            }
        })
        const titles = defaults.map(item=>{
            return item.props.title
        })
        const select  = (title: string)=>{
            context.emit('update:selected',title)
            return defaults.filter(item=> item.props.title === title)[0]
        }
        const current = computed(()=>{
            return select(props.selected)
        })

        const containerRef = ref<HTMLDivElement>(null)
        const selectedItem = ref<HTMLDivElement>(null)
        const indicator = ref<HTMLDivElement>(null)
        const x = ()=>{ // 挂载的时候确定下划线的长度
            const { width } = selectedItem.value.getBoundingClientRect()
            indicator.value.style.width = width + 'px'
            const { left: containerLeft}   = (containerRef.value as HTMLDivElement).getBoundingClientRect()
            const { left: beSelectedNavLeft}   = selectedItem.value.getBoundingClientRect()
            const indicatorLeft: number = beSelectedNavLeft -  containerLeft
            indicator.value.style.left = `${indicatorLeft}px`
            console.log(indicator.value.style.left)
         
        }
        onMounted(x)
        onUpdated(x)

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