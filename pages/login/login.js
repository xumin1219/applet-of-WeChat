// pages/login/login.js
Page({
  data: {

  },
  showTopTips: function () {
    var that = this;
    this.setData({
      showTopTips: true
    });
    setTimeout(function () {
      that.setData({
        showTopTips: false
      });
    }, 3000);
  },
  register: function () {
    wx.navigateTo({
      url: '../register/register'
    })
  },
  password: function () {
    wx.navigateTo({
      url: '../password/password'
    })
  },
})