<template>
<div class="layout">
    <Topnav class="nav"/>  
    <div class="content">  
        <aside v-if="asideVisible">
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
                <li>
                <router-link to="/doc/dialog">Dialog 组件</router-link>
                </li>
                <li>
                <router-link to="/doc/Tabs">Tabs 组件</router-link>
                </li>
                <!-- <router-link to="/doc/input">Input 组件</router-link>
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
import { inject, Ref } from 'vue'
import Topnav from '../components/Topnav.vue'
export default {
    components: { Topnav },
    setup(){
        const asideVisible = inject<Ref<boolean>>('asideVisible')
        return {asideVisible}
    }
}
</script>

<style lang="scss" scoped>
$aside-index : 10;
.layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
    > .nav {
      flex-shrink: 0;
    }
    > .content {
        flex-grow:1;
        padding-top: 60px;
        padding-left: 156px;
        @media (max-width: 500px) {
        padding-left: 0;
        }
    }
}
.content {
  display: flex;

  >aside {
    flex-shrink: 0;
  }

  >main {
    flex-grow: 1;
    padding: 16px;
    background: lightgreen;
  }
}

aside {
  background: lightblue;
  width: 150px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  z-index: $aside-index;
  >h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }
  >ul {
    >li {
      >a {
        display: block;
        padding: 4px 16px;
        text-decoration: none;
      }
      .router-link-active {
        background: white;
      }
    }
  }
}

main {
  overflow: auto;
}
</style>