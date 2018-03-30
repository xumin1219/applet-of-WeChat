// pages/payment/payment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   radioItems: [
    { name: '微信', value: '0' },
    { name: '支付宝', value: '1', checked: true }
   ],
  },
  radioChange: function (e) {
   var radioItems = this.data.radioItems;
   for (var i = 0, len = radioItems.length; i < len; ++i) {
    radioItems[i].checked = radioItems[i].value == e.detail.value;
   }

   this.setData({
    radioItems: radioItems
   });
  }
})