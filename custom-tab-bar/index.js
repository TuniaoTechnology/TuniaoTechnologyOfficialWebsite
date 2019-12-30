Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    selected: 0,
    "list": [
      {
        "pagePath": "/pages/gift/gift",
        "iconPath": "/images/tabbar/index1.png",
        "selectedIconPath": "/images/tabbar/index2.png",
        "text": "首页"
      },
      {
        "pagePath": "/pages/cate/cate",
        "iconPath": "/images/tabbar/cate1.png",
        "selectedIconPath": "/images/tabbar/cate2.png",
        "text": "案例"
      },
      {
        "pagePath": "/pages/cart/cart",
        "iconPath": "/images/tabbar/cart1.png",
        "selectedIconPath": "/images/tabbar/cart2.png",
        "text": "资讯"
      },
      {
        "pagePath": "/pages/my/my",
        "iconPath": "/images/tabbar/my1.png",
        "selectedIconPath": "/images/tabbar/my2.png",
        "text": "我的"
      }
    ]
  },

  methods: {
    switchTab(e) {      
      const url = e.currentTarget.dataset.path
      wx.switchTab({
        url
      })
    }
  },
  pageLifetimes: {
  },
})