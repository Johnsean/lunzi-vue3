# 开始使用

请先[安装](#/doc/install)本组件库。

然后在你的代码中写入下面的代码
```
    import {Button, Tabs, Tab, Switch, Dialog, openDialog, Input} from 'cot-ui'
```
> 以上代码便完成了 cot-ui 的引入。

#### Vue 单文件组件

> 如果你只希望引入部分组件，比如 Button ，那么需要在 main.js 中写入以下内容：
```
    <template>
        <div>
            <Button>按钮</Button>
        </div>
    </template>
    <script>
    import { Button } from "cot-ui"
    export default {
        components: { Button }
    }
    </script>
```
#### 完整引入

```
    import { createApp } from 'vue'
    import App from './App.vue'
    import { cotUI } from 'cot-ui'
    
    createApp(App)
      .use(cotUI)
      .mount('#app')
```
> 以上代码便完成了 cot-ui 的引入。



> 完整组件列表和引入方式
```
    import App from './App.vue'
    import { createApp } from 'vue'
    import {
        Button,
        Switch,
        Dialog,
        Tabs,
        Input
    } from 'cot-ui'

    createApp(App)
        .component('Button',Button)
        .component('Switch',Switch)
        .component('Dialog',Dialog)
        .component('Tabs',Tabs)
        .component('Input',Input)
```
---
