const app = getApp();
const config = require('../../../config');

Page({
    /**
     * 页面的初始数据
     */
    data: {
        info: {
            title: '',
            time: '',
            desc: ''
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;
        wx.showLoading({
            title: app.globalData.allScreenLoading.title,
            mask: true,
            success: function (res) {
                that.detail(options);
            }
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
    },

    /**
     * 获取详情.
     */
    detail: function (params) { // detail.
        var that = this;
        wx.request({
            url: `${config.service.productDetailUrl}`,
            data: {
                id: params.id
            },
            success: function (res) {
                if (res.data.code != 0) {
                    return;
                }

                var { detail } = res.data;
                wx.setNavigationBarTitle({
                    title: detail.title
                });

                var info = that.data.info;
                that.setData({
                    info: { ...detail }
                }, function () {
                    setTimeout(function () {
                        wx.hideLoading();
                    }, app.globalData.delaylTime.loadingDelay500);
                });
            }
        })
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})