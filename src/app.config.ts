export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/home/home',
    'pages/login/login'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/home/home',
        text: '首页',
      },
      {
        pagePath: 'pages/login/login',
        text: '个人中心',
      },
    ],
  },
})
