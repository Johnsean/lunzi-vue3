<template>
    <div class="topnav">
        <span class="toggleAside" @click="toggleAside"></span>
        <div class="logo"><router-link to="/">Cot UI</router-link></div>
        <ul class="menu">
            <li>文档</li>
            <li>捐款</li>
        </ul>
    </div>
</template>
<script lang="ts">
import { inject, Ref } from 'vue'

export default {
    setup(){
        const asideVisible = inject<Ref<boolean>>('asideVisible')
        const toggleAside=()=>{
            asideVisible.value = !asideVisible.value
            console.log(asideVisible)
        }
        return {toggleAside}
    }
}
</script>
<style lang="scss" scoped>
.topnav {
    background: pink;
    display: flex;
    padding: 16px;
    position: relative;
    justify-content: center;
    align-items: center;
    z-index: 10;
    > .logo {
        max-width: 4em; 
        // max-width 随内容宽
        margin-right: auto;
    }
    > .menu {
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;
        > li {
            margin: 0 1em;
        }
    }
    >.toggleAside{
        display: inline-block;
        width: 24px;
        height: 24px;
        background: red;
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
        display: none;
    }
     @media (max-width:500px) {
        > .menu{
            display: none;
        } 
        > .logo{
            margin: 0 auto;
        }
        >.toggleAside{
            display: inline-block;
        }
    }
}
</style>