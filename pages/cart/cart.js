const app = getApp();
Component({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' && this.getTabBar()) {
        this.getTabBar().setData({
          selected: 2
        })
      }
    }
  },
   methods: {
        // 跳转到资讯详情
        navActivity(e) {
            wx.navigateTo({
                url: '../activity/activity',
            });
        },


    }
})