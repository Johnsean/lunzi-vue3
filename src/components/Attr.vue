<template>
  <div class="c-attr">
    <h2>Attributes</h2>
    <table class="attr-table">
      <thead>
        <tr>
          <th class="c-attr-title" v-for="(item,index) in columns" :key="index">{{ item.title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item">
          <td class="c-attr-title td" v-for="(value,key) in item" :key="key">{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
export default {
  name: 'attr',
  props: {
    columns: {
      type: Object
    },
    data: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.c-attr {
  width: 100%;
  overflow-x: auto;
  h2 {
    font-weight: 400;
    color: #1f2f3d;
    font-size: 22px;
    margin: 55px 0 20px;
  }
  .attr-table {
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
    font-size: 14px;
    margin-bottom: 45px;
    line-height: 1.5em;
  }
  .c-attr-title {
    text-align: left;
    white-space: nowrap;
    color: #909399;
    font-weight: 400;
    border-bottom: 1px solid #dcdfe6;
    padding: 15px;
    max-width: 250px;
  }
  .td {
    color: #606266;
    font-size: 14px;
  }
}
</style>