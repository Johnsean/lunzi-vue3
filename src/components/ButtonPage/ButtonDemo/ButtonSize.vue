<demo>
支持 size
</demo>
<template>
  <div>
    <Button level="primary" size="big">大大大</Button>
    <Button level="primary">普普通</Button>
    <Button level="primary" size="small">小小小</Button>
  </div>
</template>

<script lang="ts">
import {Button} from '../../../lib/index'

export default {
  components: {
    Button,
  },
}
</script>