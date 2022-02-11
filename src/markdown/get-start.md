# 开始使用

请先[安装](/doc/install)本组件库。

## 引入 `cot-ui`

#### 完整引入

```
    import 'cot-ui/dist/lib/cot.css'
    import { createApp } from 'vue'
    import App from './App.vue'
    import { cotUI } from 'cot-ui'
    
    createApp(App)
      .use(cotUI)
      .mount('#app')
```
> 以上代码便完成了 cot-ui 的引入。需要注意的是，样式文件需要单独引入。

#### 按需引入

> 如果你只希望引入部分组件，比如 Button ，那么需要在 main.js 中写入以下内容：
```
    import 'cot-ui/dist/lib/cot.css'
    import { createApp } from 'vue'
    import { Button } from 'cot-ui'
    import App from './App.vue'

    createApp(App).use(Button).mount('#app')
```

> 完整组件列表和引入方式
```
    import App from './App.vue'
    import { createApp } from 'vue'
    import {
        Button,
        Switch,
        Dialog,
        Tabs,
    } from 'cot-ui'

    createApp(App)
        .component('Button',Button)
        .component('Switch',Switch)
        .component('Dialog',Dialog)
        .component('Tabs',Tabs)
```

