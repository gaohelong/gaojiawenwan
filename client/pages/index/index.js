const app = getApp(); // 获取应用实例
var config = require('../../config');
// var qcloud = require('../../vendor/wafer2-client-sdk/index');

Page({
    data: {
        'swiperInfo': {}
    },
    onLoad: function () {
    },
    onReady: function () {
        var that = this;
        wx.request({
            url: `${config.service.swiperUrl}`,
            success: function (res) {
                that.setData({
                    swiperInfo: res.data.data
                });
            }
        })
    },
    // 分享.
    onShareAppMessage: function () {
        return {
            title: '高家文玩',
            path: '/index/index?id=share'
        }
    }
});