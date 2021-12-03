<template>
<div class="doc">
    <Topnav/>  
    <div class="content">  
        <Aside/>
        <Main/>
    </div>

</div>
</template>

<script>
import Topnav from '../components/Topnav.vue'
import Aside from '../components/Doc/Aside.vue'
import Main from '../components/Doc/Main.vue'
export default {
    components: { Topnav, Aside, Main }
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
</style>