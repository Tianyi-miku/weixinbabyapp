import Taro from "@tarojs/taro";
import axios from "axios";

const Axios = axios.create({
  baseURL: "http://192.168.1.71:8070"
});

// 请求拦截器
Axios.interceptors.request.use(
  (config) => {
    if (config.url !== "/user") {   // 判断请求是否是登录接口
      config.headers.token = Taro.getStorageSync('token'); // 如果不是登录接口，就给请求头里面设置token
    }
    return config; // 返回这个配置对象，如果没有返回，这个请求就不会发送出去
  },
  (error) => {
    return Promise.reject(error);
  }
)

// 响应拦截器
Axios.interceptors.response.use(
  (res) => {
    let code = res.data.code  // 获取后端返回的状态码
    if (code === 1) {           // 成功
      return res.data.data  // 返回里面的数据，在使用这个axios时，获取到的东西就是这里返回的东西
    } else if (code === 2) {
      console.log(res.data);
    } else {
      Taro.showToast({
        title: res.data.msg,
        icon: 'error',
        duration: 2000
      })
      return Promise.reject(res.data.msg);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
)

export default Axios;