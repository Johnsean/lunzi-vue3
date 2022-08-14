<template>
  <div class="trees">
    <div class="list-item" v-for="(item, index) in myList" :key="index">
      <div class="item-name" @click="item.isShow = !item.isShow">
          <svg class="icon" aria-hidden="true" v-show="item.children" :class="item.isShow?'ro90deg':'normal'">
              <use xlink:href="#icon-trees"></use>
          </svg>
        <span>{{ item.label }}</span>
      </div>
      <Tree
        v-if="item.children"
        :data="item.children"
        style="margin-left: 20px"
        class="children-item"
        v-show="item.isShow"
      />
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
export default {
  name: "tree",
  props: {
    data: {
      type: Array,
      required: true,
      default: [],
    },
  },
  setup(props, context) {
    const myList = computed(() =>
      props.data.map((r) => Object.assign(r, { isShow: false }))
    );
    return { myList };
  },
};
</script>

<style scoped>
.ro90deg.icon{
  transform: rotate(90deg);
}
</style>