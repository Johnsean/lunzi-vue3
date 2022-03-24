<template>
    <div class="cot-tabs">
        <div class="cot-tabs-nav" ref="containerRef">
            <div class="cot-tabs-nav-item" 
                v-for="(CNode,index) in CNodes" :key="index"
                :class="
                    [CNode.props.title === selected ? 'selected' : ''] +
                    [CNode.props.disabled === '' ? 'disabled' : '']
                "
                @click="select(CNode)"
                :ref="(el)=>{ if (CNode.props.title === selected ) selectedItem = el}">
                    {{CNode.props.title}}
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
import { computed,ref,onMounted,watchEffect, Slot } from 'vue'
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
                const { left: NavLeft }   = (containerRef.value as HTMLDivElement).getBoundingClientRect()
                const { width,left: SelectedLeft } = selectedItem.value.getBoundingClientRect()
                const left: number = SelectedLeft - NavLeft

                indicator.value.style.width = width + 'px'
                indicator.value.style.left = `${left}px`
            },{ // 解决异步
                flush: "post", //效果更新需要缓冲时间
            })
        })

        const CNodes = context.slots.default()  // tab节点 （获取插槽结点）
        CNodes.forEach((CNode)=>{
            // if (CNode.type !== Tab){
           
           // @ts-ignore
            if (CNode.type.name !== Tab.name){ //生产环境
                throw new Error('Tabs 子标签必须是 Tab')
            }
        })

        // 返回当前选中结点
        const current = computed(()=>{  
            return CNodes.find((CNode) => CNode.props.title === props.selected)
        })

        // 处理点击事件，当有disabled属性时不更新选中结点，否则选中点击结点
        const select  = (CNode)=>{
            if (CNode.props.disabled === "") {
                return;
            }
            context.emit("update:selected", CNode.props.title);
        }

        return {CNodes,select,current,selectedItem,indicator,containerRef}
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
      padding: 8px;
      margin: 0 8px;
      cursor: pointer;
      &.disabled {
        color: #ccc;
        cursor: not-allowed;
      }
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
      transition: all 0.25s cubic-bezier(1, 1.67, 0.21, 0.84);
    }
  }
  &-content {
    padding: 20px 8px;
  }
}
</style>