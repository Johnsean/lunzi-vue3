// @ts-nocheck

import { md } from "./plugins/md";
import fs from "fs";
import { baseParse } from "@vue/compiler-core"

export default {
  base: "./",
  assetsDir: "",
  plugins: [md()],
  vueCustomBlockTransforms: { //通过该选项 指定自定义块的转换规则
    demo: (options) => {
      const { code, path } = options
      const file = fs.readFileSync(path).toString() //异步读取文件内容并转为 String类型
      const parsed = baseParse(file).children.find(n => n.tag === "demo")  //将读取到的自定义块 渲染为AST ，并找demo标签
      const title = parsed.children[0].content //读取自定义块中文本内容
      const main = file.split(parsed.loc.source).join("").trim() //将读取文件中自定义块切分，并转为 String类型
      return `export default function (Component) {
        Component.__sourceCode = ${JSON.stringify(main)}
        Component.__sourceCodeTitle = ${JSON.stringify(title)}
      }`.trim()  //以JSON数据类型范围
    }
  }
};

// rollup bulid
// import { defineConfig } from 'vite'
// import vue  from '@vitejs/plugin-vue'
// import { resolve } from 'path' // 主要用于alias文件路径别名

// //发布库的设置
// export default defineConfig({
//   plugins: [vue()],
//   //打包配置
//   build: {
//     lib: {
//       entry: resolve(__dirname, './lib/index.ts'), // 设置入口文件
//       name: 'cot', // 起个名字，安装、引入用
//       filename: (format) => `cot.${format}.js` // 打包后的文件名
//     },
//     sourcemap: true, // 输出.map文件
//     rollupOptions: {
//       // 确保外部化处理那些你不想打包进库的依赖
//       external: ['vue'],
//       output: {
//         // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
//         globals: {
//           vue: 'Vue'
//         }
//       }
//     }
//   }
// })
