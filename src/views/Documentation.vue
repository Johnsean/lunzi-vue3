<template>
<div class="doc">
    <Topnav/>  
    <div class="content">  
        <aside>
            <h2>组件列表</h2>
            <ul>
                <li>
                <router-link to="/doc/switch">Switch 组件</router-link>
                </li>
                <li>
                <router-link to="/doc/icon">Icon 组件</router-link>
                </li>
                <li>
                <router-link to="/doc/button">Button 组件</router-link>
                </li>
                <!-- <li>
                <router-link to="/doc/dialog">Dialog 组件</router-link>
                </li>
                <li>
                <router-link to="/doc/input">Input 组件</router-link>
                </li>
                <li>
                <router-link to="/doc/tree">Tree 组件</router-link>
                </li>
                <li>
                <router-link to="/doc/table">Table 组件</router-link>
                </li>
                <li>
                <router-link to="/doc/scroll">Scroll 组件</router-link>
                </li>
                <li>
                <router-link to="/doc/form">Form 组件</router-link>
                </li> -->
            </ul>
        </aside>
        <main>
            <router-view/>
        </main>
    </div>

</div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
    components: { Topnav }
}
</script>

<style lang="scss" scoped>
.doc {
    display: flex;
    flex-direction: column;
    height:100vh;
    .content {
        flex-grow: 1;
        display: flex;
        max-width: 1000px;
        width: 100%;
        margin: 0 auto;
    }
}
aside {
  background: lightblue;
  width: 200px;
}
main {
  flex-grow: 1;
  background: lightgreen;
}
</style>