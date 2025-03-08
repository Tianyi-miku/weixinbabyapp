

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
        "clff/clff",
        "ryzb/clff",
        "caidan/caidan1/clff",
        "caidan/caidan2/clff",
        "caidan/caidan3/clff",


        // "children/jiankangyinshi/jiankangyinshi",
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
        "children/yonghutongjishuju/yonghutongjishuju",


        "weiyangfangshi/fansi/fansi",
        "weiyangfangshi/gerenyali/gerenyali",
        "weiyangfangshi/jiena/jiena",
        "weiyangfangshi/kuanrong/kuanrong",
        "weiyangfangshi/zunzhong/zunzhong",
        // "zhushou/zhushou/zhushou",
        

        "ssjy/jkys/jkys",
        "ssjy/yyjy/yyjy",
        "ssjy/syhd/syhd",
        "ssjy/hbgs/hbgs",
        "ssjy/rssw/rssw",
        "ssjy/yxjy/yxjy",

        "swzs/swzs1/swzs1",
        "swzs/swzs2/swzs2",
        "swzs/swzs3/swzs3",
        "swzs/swzs4/swzs4",
        "swzs/swzs5/swzs5",
        "swzs/swzs6/swzs6",
        "swzs/swzs7/swzs7",
        "swzs/swzs8/swzs8",
        "swzs/swzs9/swzs9",
        "swzs/swzs10/swzs5",
        "swzs/swzs11/swzs5",
        "swzs/swzs12/swzs5",
        "swzs/swzs13/swzs5",
        "swzs/swzs14/swzs5",
        "swzs/swzs15/swzs5",
        "swzs/swzs16/swzs5",
        "swzs/swzs17/swzs5",
        "swzs/swzs18/swzs5",
        "swzs/swzs19/swzs5",
        "swzs/swzs20/swzs5",
        "swzs/swzs21/swzs5",
        "swzs/swzs22/swzs5",
        "swzs/swzs23/swzs5",
        "swzs/swzs24/swzs5",
        "swzs/swzs25/swzs5",
        "swzs/swzs26/swzs5",
        "swzs/swzs27/swzs5",
        "swzs/swzs28/swzs5",
        "swzs/swzs29/swzs5",
        "swzs/swzs30/swzs5",


        "zzjs/zzjs1/zzjs1",
        "zzjs/zzjs2/zzjs2",
        "zzjs/zzjs3/zzjs3",
        "zzjs/zzjs4/zzjs4",

       


        "celue/kexue/kexue",
        "celue/kexue2/kexue2",
        "celue/celve/celve",
        "celue/gedai/gedai",
        "celue/taidu/taidu",

      ],

    

    },
    {
      root: "subPackages1",
      pages: [
        
        "pages/shiyu/shanshijiaoyu/shanshijiaoyu",
        "pages/shiyu/zizhujinshi/zizhujinshi",

        // "pages/shiwu/jihua/jihua",
        // "pages/shiwu/fenwei/fenwei",
        // "pages/shiwu/huanjin/huanjin",
        // "pages/shiwu/liyi/liyi",
        // "pages/shiwu/weian/weian",
        // "pages/shiwu/qingxu/qingxu",
        // "pages/shiwu/xuanze/xuanze",
        // "pages/shiwu/zhibei/zhibei",

        "pages/gongyu/qinziguanxi/qinziguanxi",
        "pages/gongyu/jiayuangongyu/jiayuangongyu",
        "pages/gongyu/qzyd/qzyd",
        "pages/gongyu/zzyd/zzyd",
        "pages/gongyu/shequfatie/shequaftie",

        "pages/shunyinweiyang/shunyinweiyang/shunyinweiyang",
        "pages/shunyinweiyang/shunyinweiyang1/shunyinweiyang1",
        "pages/shunyinweiyang/xianzhi/xianzhi",
        "pages/shunyinweiyang/fanfu/fanfu",
        "pages/shunyinweiyang/jiangli1/jiangli1",
        "pages/shunyinweiyang/jiangli2/jiangli2",
        "pages/shunyinweiyang/kongzhiweiyang/kongzhiweiyang",
        "pages/shunyinweiyang/bangyangshifan/bangyangshifan",
        "pages/shunyinweiyang/yali/yali",
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

        "pages/dongtai/dongtai",

        // "celue/kexue/kexue",
        // "celue/celve/celve",
        // "celue/gedai/gedai",
        // "celue/taidu/taidu",
        "login/index",
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
    selectedColor: '#3E721D',
  },
});
