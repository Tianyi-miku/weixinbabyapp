export default defineAppConfig({
  pages: [
    "pages/fazhan/fazhan",
    "pages/fazhan/children/geren/geren",
    "pages/fazhan/children/guanlipg/guanlipg",
    "pages/fazhan/children/shenti/shenti",
    "pages/index/index",
    "pages/celue/celue",
    "pages/celue/children/jiankangyinshi/jiankangyinshi",
    "pages/celue/children/jinshizhushou/jinshizhushou",

    "pages/yinshi/yinshi",
    "pages/shiyu/shiyu",
    "pages/gongyu/gongyu",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    list: [
      {
        pagePath: "pages/fazhan/fazhan",
        text: "发展",
        iconPath: "./assets/img/fazhan.png",
        selectedIconPath: "./assets/img/fazhan1.png",
      },
      {
        pagePath: "pages/celue/celue",
        text: "策略",
        iconPath: "./assets/img/celue.png",
        selectedIconPath: "./assets/img/celue1.png",
      },
      {
        pagePath: "pages/yinshi/yinshi",
        text: "饮食",
        iconPath: "./assets/img/yinshi.png",
        selectedIconPath: "./assets/img/yinshi1.png",
      },
      {
        pagePath: "pages/shiyu/shiyu",
        text: "食育",
        iconPath: "./assets/img/shiyu.png",
        selectedIconPath: "./assets/img/shiyu1.png",
      },
      {
        pagePath: "pages/gongyu/gongyu",
        text: "共育",
        iconPath: "./assets/img/gongyu.png",
        selectedIconPath: "./assets/img/gongyu1.png",
      },
    ],
  },
});
