<template>
    <div> 
        <h2>Button 主题示例1</h2>
        <Button> 你好 </Button>
        <Button theme="button"> 你好 </Button>
        <Button theme="link"> 你好 </Button>
        <Button theme="text"> 你好 </Button>
        <h2>主题示例2</h2>
        <Button>default</Button>
        <Button theme="primary">primary</Button>
        <Button theme="warning">warning</Button>
        <Button theme="success">success</Button>
        <Button theme="danger">danger</Button>
        <Button theme="info">info</Button>
    </div>
    <h1> size示例 </h1>
    <div>
        <div>
            <Button size="big"> 大大大 </Button>
            <Button> normal </Button>
            <Button size="small"> 小小小 </Button>
        </div>
         <div>
            <Button theme="link" size="big">大大大 </Button>
            <Button theme="link">normal </Button>
            <Button theme="link" size="small">小小小 </Button>
        </div>
        <div>
            <Button theme="text" size="big">大大大 </Button>
            <Button theme="text">normal </Button>
            <Button theme="text" size="small">小小小 </Button>
        </div>
    </div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue'

export default {
    components: { Button }
}
</script>