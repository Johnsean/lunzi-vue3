<template>
  <h1 class="first-title">Input 示例</h1>
  
  <section class="second-title">
    <h2>双向绑定</h2>
    <p>使用<span>value</span>属性绑定一个<span>String</span>类型的变量到<span>Input</span>组件</p>
  </section>
  <Demo :component="InputValue"/>


  <section class="second-title">
    <h2>失去焦点才更新</h2>
    <p>
      使用<span>modelValue</span>绑定变量到<span>Input</span>组件,监测组件焦点事件并更新<span>blurval</span>值。
    </p>
  </section>
  <Demo :component="InputBlur"/>

  <section class="second-title">
    <h2>禁用input</h2>
    <p>
      使用<span>disabled</span>属性改变<span>Input</span>组件的状态，以此<span>禁用Input</span>组件
    </p>
  </section>
  <Demo :component="InputDisabled"/>

  <section class="second-title">
    <h2>支持只读</h2>
    <p>
      使用<span>readonly</span>属性改变<span>Input</span>组件的状态，以此<span>禁止Input</span>组件输入事件。
    </p>
  </section>
  <Demo :component="InputReadOnly"/>

  <section class="second-title">
    <h2>支持error</h2>
    <p>
      使用<span>error</span>属性改变<span>Input</span>组件的状态，同时传递错误信息。
    </p>
  </section>
  <Demo :component="InputError"/>
  
  <Attr :columns="columns" :data="data"/>
</template>
<script lang="ts">
import Demo from "../Demo.vue";
import InputValue from "./InputDemo/InputValue.vue";
import InputBlur from "./InputDemo/InputBlur.vue";
import InputError from "./InputDemo/InputError.vue";
import InputDisabled from "./InputDemo/InputDisabled.vue";
import InputReadOnly from "./InputDemo/InputReadOnly.vue";

import Attr from '../Attr.vue'
import {ref} from 'vue'
import {columns} from '../../lib/data'

export default {
  components: { Demo, Attr },
  setup() {
    const data = ref([
      {
        params: 'value',
        desc: '输入展示实时值',
        type: 'string',
        select: '-',
        default: "",
      },
      {
        params: 'modelValue',
        desc: '失去焦点时展示改变值',
        type: 'string',
        select: '-',
        default: "",
      },
      {
        params: 'disabled',
        desc: '是否禁用',
        type: 'boolean',
        select: 'true/ false',
        default: 'false',
      },
      {
        params: 'readonly',
        desc: '是否只读',
        type: 'boolean',
        select: 'true/ false',
        default: 'false',
      },
       {
        params: 'error',
        desc: '展示错误状态',
        type: 'string',
        select: '-',
        default: '空',
      }
    ])

    return {
      InputValue,
      InputError,
      InputDisabled,
      InputReadOnly,
      InputBlur,
      data,
      columns
    };
  },
};
</script>