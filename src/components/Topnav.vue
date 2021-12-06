<template>
    <div class="topnav">
        <div class="logo"><router-link to="/">Cot UI</router-link></div>
        <ul class="menu">
            <li>文档</li>
            <li>捐款</li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.topnav {
    background: pink;
    display: flex;
    padding: 16px;
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
}
</style>