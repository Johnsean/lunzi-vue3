<demo>
常规使用
</demo>
<template>
  <Tree :data="data"/>
</template>

<script>
import Tree from "../../../lib/Tree.vue";
import { ref } from "vue";

export default {
  name: 'TreesDemo1',
  components: { Tree },
  setup() {
    const data = ref([
      {
        label: "Level one 1",
        children: [
          {
            label: "Level two 1-1",
            children: [
              {
                label: "Level three 1-1-1",
              },
            ],
          },
        ],
      },
      {
        label: "Level one 2",
        children: [
          {
            label: "Level two 2-1",
            children: [
              {
                label: "Level three 2-1-1",
              },
            ],
          },
          {
            label: "Level two 2-2",
            children: [
              {
                label: "Level three 2-2-1",
              },
            ],
          },
        ],
      },
      {
        label: "Level one 3",
        children: [
          {
            label: "Level two 3-1",
            children: [
              {
                label: "Level three 3-1-1",
              },
            ],
          },
          {
            label: "Level two 3-2",
            children: [
              {
                label: "Level three 3-2-1",
              },
            ],
          },
        ],
      },
    ])

    return { data };
  },
};
</script>
