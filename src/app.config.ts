export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/fazhan/fazhan",
    "pages/celue/celue",
    "pages/yinshi/yinshi",
    "pages/shiyu/shiyu",
    "pages/gongyu/gongyu",
  ],
  subPackages: [
    {
      root: "subPackages",
      pages: [
        "pages/geren/geren",
        "pages/guanlipg/guanlipg",
        "pages/kouqiang/kouqiang",
        "pages/kouqiangjilu/kouqiangjilu",
        "pages/paibian/paibian",
        "pages/paibianjilu/paibianjilu",
        "pages/shenti/shenti",
        "pages/shuimian/shuimian",
        "pages/shuimianguanli/shuimianguanli",
        "pages/tizhong/tizhong",
        "children/jiankangyinshi/jiankangyinshi",
        "children/jinshizhushou/jinshizhushou",
        "children/caidan/caidan",
        "children/guominshicai/guominshicai",
        "children/shiwuzhishi/shiwuzhishi",
        "children/lianxiwomen/lianxiwomen",
        "children/yinsizhengce/yinsizhengce",
        "children/shujutongji/shujutongji",
        "children/zhanghaoshezhi/zhanghaoshezhi",
        "children/xinzengbaobao/xinzengbaobao",
        "children/xiugaibaobao/xiugaibaobao",
      ],
    },
    {
      root: "subPackages1",
      pages: [
        "celue/kexue/kexue",
        "celue/celve/celve",
        "celue/gedai/gedai",
        "celue/taidu/taidu",
        "login/index"
      ],
    },
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
    'color': '#3E721D',
  },
});
