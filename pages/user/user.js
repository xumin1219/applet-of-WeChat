// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   hasUserInfo: true,
  },
  getUserInfo: function () {
   wx.navigateTo({
    url: '../login/login'
   })
   // this.setData({
   //  hasUserInfo: false
   // })
  },
  onShareAppMessage: function () {
   return {
    title: '微信小程序联盟',
    desc: '最具人气的小程序开发联盟!',
    path: '/page/index'
   }
  }
})