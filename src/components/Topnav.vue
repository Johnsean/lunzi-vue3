<template>
    <div class="topnav">
        <span 
            v-if="toggleMenuButtonVisible" 
            class="toggleAside" 
            @click="toggleAside">
            <transition name="fade">
                <svg v-if="asideVisible">
                    <use xlink:href="#icon-_caidan"></use>
                </svg>
                <svg v-else>
                    <use xlink:href="#icon-caidan"></use>
                </svg>
            </transition>
        </span>
        <router-link to="/" class="logo">
             <svg class="icon">
                <use xlink:href="#icon-kouzi1"></use>
            </svg>
        </router-link>
        <ul class="menu">
            <li>
                <router-link to="/doc">文档</router-link>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'

export default {
    props: {
        toggleMenuButtonVisible: {
            type: Boolean,
            default: false
        }
    },
    setup(){
        const asideVisible = inject<Ref<boolean>>('asideVisible')
        const toggleAside=()=>{
            asideVisible.value = !asideVisible.value
        }
        return {toggleAside, asideVisible}
    }
}
</script>

<style lang="scss" scoped>
$lightbgc: #e8cbc0;
$deepbgc: #44295b;
$text: #6f2e6a;
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
    color: $text;
    background-color: #fff;
    box-shadow: 0 5px 5px rgba(#333, 0.1);
    > .logo {
        max-width: 4em; 
        // max-width 随内容宽
        margin-right: auto;
        > a {
            text-decoration: none;
            svg {
                width: 42px;
                height: 34px;
                // margin-top:2px;
                // background: inherit;
            }
        }
    }
    > .menu {
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;
        > li {
            margin: 10px 1em;
            > a {
                text-decoration: none;
                &:hover {
                color: #be3765;
                border-bottom: none;
                }
            }
        }
    }
    >.toggleAside{
        display: none;
        width: 32px;
        height: 32px;
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
        overflow: hidden;  
        > svg {
            width: 32px;
            height: 32px;
        }
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