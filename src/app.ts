import { createApp } from 'vue'
import { Tabs, TabPane } from '@nutui/nutui-taro'
import './app.less'
import './assets/icon-font/iconfont.css'
import { Ellipsis } from '@nutui/nutui-taro'

const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
App.use(Tabs)
App.use(TabPane)
App.use(Ellipsis)

export default App
