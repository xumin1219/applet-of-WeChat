// pages/set/set.js
Page({
 /**
  * 页面的初始数据
  */
 data: {
  storage: '0'
 },
 keyChange: function (e) {
  this.data.storagekey = e.detail.value
 },
 /**
  * 生命周期函数--监听页面加载
  */
 onLoad: function (options) {

 },
 /**
  * 生命周期函数--监听页面初次渲染完成
  */
 onReady: function () {
  try {
   var res = wx.getStorageInfoSync();
   var rdata = res.currentSize/1000;
   if (rdata < '0.01') {
    this.setData({
     'storage': " 0.01M"
    })
   } else {
   this.setData({
     'storage': res.currentSize / 1000 + "M"
   })
   }
  } catch (e) {
   // Do something when catch error  
  }
 },
 clearStorage: function () {
  wx.clearStorageSync()
  this.setData({
   'storage': " 0"
  })
  wx.showToast({
   title: '缓存清理成功',
   icon: 'success',
   duration: 2000
  })
 },
 about: function () {
  wx.navigateTo({
   url: '../about/about'
  })
 },








})