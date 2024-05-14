
import { createApp } from 'vue'
import './app.css'
import Taro, { requirePlugin } from "@tarojs/taro";
const Taro2 = require("@tarojs/taro")

const App = createApp({
  onShow () {
    console.log('ES Taro', Taro)
    console.log('CommonJs Taro', Taro2)

    console.log('ES getWindowInfo', Taro.getWindowInfo)
    console.log('CommonJs getWindowInfo', Taro2.getWindowInfo)

    console.log('ES getEnv', Taro.getEnv)
    console.log('CommonJs getEnv', Taro2.getEnv)

    console.log('ES setGlobalDataPlugin', Taro.setGlobalDataPlugin)
    console.log('requirePlugin', requirePlugin)
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

export default App
