<template>
    <div class="topnav">
        <span class="toggleAside" @click="toggleAside"></span>
        <div class="logo">
             <svg class="icon">
                <use xlink:href="#icon-kouzi1"></use>
                <span> 123</span>
            </svg>
            <!-- <router-link to="/">Cot UI</router-link> -->
        </div>
        <ul class="menu">
            <li>文档</li>
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
        }
        return {toggleAside}
    }
}
</script>
<style lang="scss" scoped>
.topnav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 20;
    > .logo {
        max-width: 4em; 
        // max-width 随内容宽
        margin-right: auto;
        > svg {
            width: 32px;
            height: 32px;
            // background: inherit;
        }
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
        display: none;
        width: 24px;
        height: 24px;
        background: red;
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
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