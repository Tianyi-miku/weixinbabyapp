import { createApp } from "vue";
import {
  Tabs,
  TabPane,
  Calendar,
  Ellipsis,
  CalendarCard,
  Uploader,
  Toast,
  Tag,
  Textarea,
} from "@nutui/nutui-taro";
import "./app.less";
import "./assets/icon-font/iconfont.css";
import Taro from "@tarojs/taro";
import Axios from "./util/axios";


let startTime = 0; // 用户进入页面的时间
let totalTime = 0; // 累计使用时长
const App = createApp({
  onShow(options) {
    startTime = new Date().getTime();
  },
  onHide() {
    const endTime = new Date().getTime();
    const duration = endTime - startTime;
    totalTime += duration;
    let babyId = Taro.getStorageSync('user')?.id
    if (babyId) {
      Axios.post(`/logout/updateTime`, {
        userCode: babyId,
        lastTime: totalTime
      })
    }
    // 存储或上报使用时长
    // Taro.setStorageSync('totalTime', totalTime);
    // console.log('本次使用时长:', duration, '累计使用时长:', totalTime);
  }
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});
App.use(Tabs);
App.use(TabPane);
App.use(Ellipsis);
App.use(Calendar);
App.use(CalendarCard);
App.use(Tag)
App.use(Toast)
App.use(Uploader)
App.use(Textarea)
export default App;
