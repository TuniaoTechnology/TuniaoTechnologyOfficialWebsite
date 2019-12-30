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
                    selected: 0
                })
            }
        }
    },
    methods: {

            // 跳转到业务详情
        navProcess(e) {
                wx.navigateTo({
                    url: '../process/process',
                });
            },
        // 跳转到案例详情
        navDetail(e) {
            wx.navigateTo({
                url: '../detail/detail',
            });
        },
        // 跳转到搜索
        navSearch(e) {
            wx.navigateTo({
                url: '../search/search',
            });
        },

    }
})