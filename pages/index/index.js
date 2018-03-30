//index.js
var sliderWidth = 96;
Page({
 data: {
  imgUrls: [],
  marquee: {},
  tabs: ["全部", "待接单", "派送中", "已完成"],
  si_0: [
   [{ express: '中通', site: '大门', time: '2017-12-15 06:03', num: '111', state: '已完成', mobile: '13815815614' }],
   [{ express: '中通', site: '大门', time: '2017-12-15 06:03', num: '111', state: '未完成', mobile: '13815815614' }],
   [{ express: '中通', site: '大门', time: '2017-12-15 06:03', num: '111', state: '派送中', mobile: '13815815614' }],
   [{ express: '中通', site: '大门', time: '2017-12-15 06:03', num: '111', state: '已完成', mobile: '13815815614' }],
   [{ express: '中通', site: '大门', time: '2017-12-15 06:03', num: '111', state: '已完成', mobile: '13815815614' }]
  ],
  si_1: [
   [{ express: '中通', site: '大门', time: '2017-12-15 06:03', num: '111', state: '未完成', mobile: '13815815614' }],
   [{ express: '中通', site: '大门', time: '2017-12-15 06:03', num: '111', state: '未完成', mobile: '13815815614' }],
   [{ express: '中通', site: '大门', time: '2017-12-15 06:03', num: '111', state: '未完成', mobile: '13815815614' }],
   [{ express: '中通', site: '大门', time: '2017-12-15 06:03', num: '111', state: '未完成', mobile: '13815815614' }],
   [{ express: '中通', site: '大门', time: '2017-12-15 06:03', num: '111', state: '未完成', mobile: '13815815614' }],
  ],
  si_2: [
   [{ express: '中通', site: '大门', time: '2017-12-15 06:03', num: '111', state: '派送中', mobile: '13815815614' }],
   [{ express: '中通', site: '大门', time: '2017-12-15 06:03', num: '111', state: '派送中', mobile: '13815815614' }],
   [{ express: '中通', site: '大门', time: '2017-12-15 06:03', num: '111', state: '派送中', mobile: '13815815614' }],
   [{ express: '中通', site: '大门', time: '2017-12-15 06:03', num: '111', state: '派送中', mobile: '13815815614' }],
   [{ express: '中通', site: '大门', time: '2017-12-15 06:03', num: '111', state: '派送中', mobile: '13815815614' }]
  ],
  si_3: [
   [{ express: '中通', site: '大门', time: '2017-12-15 06:03', num: '111', state: '已完成', mobile: '13815815614' }],
   [{ express: '中通', site: '大门', time: '2017-12-15 06:03', num: '111', state: '已完成', mobile: '13815815614' }],
   [{ express: '中通', site: '大门', time: '2017-12-15 06:03', num: '111', state: '已完成', mobile: '13815815614' }],
   [{ express: '中通', site: '大门', time: '2017-12-15 06:03', num: '111', state: '已完成', mobile: '13815815614' }],
   [{ express: '中通', site: '大门', time: '2017-12-15 06:03', num: '111', state: '已完成', mobile: '13815815614' }]
  ],
  activeIndex: 0,
  sliderOffset: 0,
  sliderLeft: 0
 },
 onLoad: function () {
  var that = this;
  wx.getSystemInfo({
   success: function (res) {
    that.setData({
     sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
     sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
    });
   }
  });
 },
 onReady: function () {
  var that = this
  wx.request({
   url: 'http://127.0.0.1:8082/pmd',
   header: {
    'content-type': 'application/json' // 默认值
   },
   success: function (res) {
    that.setData({
     marquee: res.data
    })
   },
  }),
  wx.request({
   url: 'http://127.0.0.1:8082/pmd/lbt',
   header: {
    'content-type': 'application/json' // 默认值
   },
   success: function (res) {
    that.setData({
     imgUrls: res.data.list
    })
   },
  })

 },
 tabClick: function (e) {
  this.setData({
   sliderOffset: e.currentTarget.offsetLeft,
   activeIndex: e.currentTarget.id
  });
 },
 issue: function (e) {
  wx.navigateTo({
   url: '../issue/issue'
  })
 },

 uesr: function (e) {
  wx.navigateTo({
   url: '../user/user'
  })
 },
 makePhoneCall: function (e) {
  wx.makePhoneCall({
   phoneNumber: e.target.dataset.tell,
  })
 }
})

