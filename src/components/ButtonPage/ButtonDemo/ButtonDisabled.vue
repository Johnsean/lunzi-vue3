<demo>
支持 disabled
</demo>
<template>
  <Button size="big" disabled>disabled Button</Button>
  <Button round disabled>disabled Button</Button>
  <Button size="small" disabled>disabled Button</Button>
</template>

<script lang="ts">
import {Button} from '../../../lib/index'

export default {
  components: {
    Button,
  },
}
</script>