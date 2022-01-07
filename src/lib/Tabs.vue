<template>
    <div>
        <slot></slot>
    </div>
</template>
<script lang="ts">
import Tab from './Tab.vue'

export default{
    name: 'Tabs',
    props:{
        titles:Object
    },
    setup(props,context){
        const tagList = context.slots.default()
        console.log(context.slots.default())
        tagList.forEach((tag)=>{
            if (tag.type !== Tab){
                throw new Error('Tabs 的内部必须是 Tab')
            }
        })
    }
}
</script>