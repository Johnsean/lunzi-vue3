<template>
  <div class="home">
    <div class="topnavAndBanner">
      <Topnav/>
      <div class="banner">
        <h1>Cot UI</h1>
        <h2>基于 Vue 3 <span>和 TypeScript </span>的 UI 框架</h2>
        <p class="actions">
          <a target="_blank" href="https://gitee.com/Jonhsean/lunzi-vue3">GitHub</a>
          <router-link to="/doc">开始</router-link> 
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-Vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-typescript"></use>
          </svg>
          <h3>基于 TypeScript</h3>
          <p>源代码采用 TypeScript 书写</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-icon-test"></use>
           </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import  Topnav from '../components/Topnav.vue'
export default {
  components: {Topnav}
}
</script>

<style lang="scss" scoped>
.topnavAndBanner {
  background: #e8cbc0; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    145deg,
    #bee7cf,
    #4f62ce
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    145deg,
  #bee7cf,
  #4f62ce
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  
  clip-path: ellipse(80% 60% at 50% 40%); // 使用圆弧
}
.features {
  margin: 64px auto;
  width: 400px;
  padding: 0 16px;
  @media (min-width: 800px) {
    width: 800px;
    > ul {
      > li {
        width: 50%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
    > ul {
      > li {
        width: 33.3333%;
      }
    }
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      color: #000;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3 {
        grid-area: title;
        font-size: 28px;
      }
      > p {
        grid-area: text;
      }
    }
  }
}
.banner {
  padding: 120px 0 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: rgba(255, 255, 255, 0.842);
  // background: rgb(202, 249, 234)44295b;
  > .actions{
    margin-top: 20px;
    padding: 8px 4px;
    color: rgb(8, 8, 8);
    outline: none;
    a {
      display: inline-block;
      $h: 32px;
      height: $h;
      line-height: $h;
      margin:0 8px;
      padding: 0 16px;
      background: rgba(252, 243, 243, 0.945); 
      border-radius: calc($h/2); 
    }
  }
  @media  screen and (max-width: 420px) {
    span{
      display: none;
    }
  }
}
.home{
  height: 100vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>