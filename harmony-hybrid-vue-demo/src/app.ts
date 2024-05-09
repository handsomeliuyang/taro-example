
import { createApp } from 'vue'
import './app.css'
import Taro, { requirePlugin } from "@tarojs/taro";

const App = createApp({
  onShow (options) {
    console.log('App onShow.', Taro.setGlobalDataPlugin)
    console.log('Taro Object', Taro)
    console.log('requirePlugin', requirePlugin)
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

export default App
