const app = getApp();
Component({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    cardCur: 0,
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' && this.getTabBar()) {
        this.getTabBar().setData({
          selected: 4
        })
      }
    }
  },
   methods: {
     DotStyle(e) {
       this.setData({
         DotStyle: e.detail.value
       })
     },
     // cardSwiper
     cardSwiper(e) {
       this.setData({
         cardCur: e.detail.current
       })
     },
  }
})