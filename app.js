//app.js
App({
  onLaunch: function () {
    // 获取系统状态栏信息
    wx.getSystemInfo({
      success: e => {
            this.globalData.StatusBar = e.statusBarHeight;
            let custom = wx.getMenuButtonBoundingClientRect();
            if (custom) {
                this.globalData.Custom = custom;
                this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
            } else {
                this.globalData.CustomBar = e.statusBarHeight + 50;
            }
        }
    })
  },
  globalData: {
    
  }
})