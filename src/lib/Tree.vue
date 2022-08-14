<template>
    <div class="trees">
        <div class="list-item" v-for="(item, index) in list" :key="index">
            <div class="item-name">
                <span>{{item.label}}</span>
            </div>
            <div v-if="item.children" class="children-item">
                <Tree :list="item.children" />
            </div>
        </div>
    </div>
</template>

<script>
import { computed, ref } from "vue";
export default {
  name: "tree",
  props:{
      list:{
          type:Array,
          default:[]
      }
  },

}
</script>
