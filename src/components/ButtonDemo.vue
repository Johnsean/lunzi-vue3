<template>
    <div> 
        <h2>Button 示例</h2>
        <Button> 你好 </Button>
        <Button theme="button"> 你好 </Button>
        <Button theme="link"> 你好 </Button>
        <Button theme="text"> 你好 </Button>
    </div>
    <div>
        <Button size="big"> 大大大 </Button>
        <Button> normal </Button>
        <Button size="small"> 小小小 </Button>
    </div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue'

export default {
    components: { Button }
}
</script>