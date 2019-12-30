const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    TabCur: 1,
    scrollLeft: 0
  },
  /**
     * 切换顶部菜单
     */
  tabSelect(e) {
    // console.log(e);
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      orderArr: [],
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    });
    // this.data.orderArr = [];
    // this._getOrdersWithStatus(this.data.TabCur);
    // order.execSetStorageSync(false); //更新标志位
  },
});