<template>
  <div class="trees">
    <div class="list-item" v-for="(item, index) in myList" :key="index">
      <div class="item-name" @click="item.isShow = !item.isShow">
          <svg class="icon" aria-hidden="true" v-show="item.children" :class="item.isShow?'ro90deg':'normal'">
              <use xlink:href="#icon-trees"></use>
          </svg>
        <span>{{ item.label }}</span>
      </div>
      <transition name="slide-fade">
      <Tree
        v-if="item.children"
        :data="item.children"
        style="margin-left: 20px"
        class="children-item"
        v-show="item.isShow"
      />
      </transition>

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
.list-item{
  padding: 4px;
}

/* 展开 */
.ro90deg.icon{
  transform: rotate(90deg);
  transition: all 0.1s linear;
}

/* 整体过渡 */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>