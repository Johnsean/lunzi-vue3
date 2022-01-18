// @ts-nocheck

import { md } from "./plugins/md";
import fs from "fs";
import { baseParse } from "@vue/compiler-core"

export default {
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