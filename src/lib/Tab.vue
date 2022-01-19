<template>
    <div :disabled="disabled">
        <slot />
    </div>
</template>

<script lang="ts">
export default{
   name: "CotTab",
    props: {
      disabled: {
        type: Boolean,
        default: false,
    },
  },
}
</script>