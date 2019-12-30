const app = getApp();

Component({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    TabCur: 0,
    tabNav: ['全部', '小程序', '网站', 'APP', 'UI设计'],
    scrollLeft: 0
  },
  
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' && this.getTabBar()) {
        this.getTabBar().setData({
          selected: 1
        })
      }
    }
  },
  methods: {
    tabSelect(e) {
      console.log(e);
      this.setData({
        TabCur: e.currentTarget.dataset.id,
        scrollLeft: (e.currentTarget.dataset.id - 1) * 60
      })
    },
      // 跳转到案例详情
      navDetail(e) {
          wx.navigateTo({
              url: '../detail/detail',
          });
      },


  }
})

// Page({
//   data: {
//     StatusBar: app.globalData.StatusBar,
//     CustomBar: app.globalData.CustomBar,
//     TabCur: 0,
//     tabNav: ['热卖', '数码', '办公', '母婴', '美妆', '居家生活', '户外运动'],
//     scrollLeft: 0
//   },
//   tabSelect(e) {
//     console.log(e);
//     this.setData({
//       TabCur: e.currentTarget.dataset.id,
//       scrollLeft: (e.currentTarget.dataset.id - 1) * 60
//     })
//   }
// })