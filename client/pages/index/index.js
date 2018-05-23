const app = getApp(); // 获取应用实例
var config = require('../../config');
// var qcloud = require('../../vendor/wafer2-client-sdk/index');

Page({
    data: {
        loading: {
            title: 'loading……',
            sh: 'none',
            offOn: true
        },
        page: 1,
        swiperInfo: {},
        navList: [
            { url: '/pages/topic/index', title: '个性专区' },
            { url: '/pages/classify/index', title: '热门排行' },
            { url: '/pages/cart/index', title: '积分商城' },
            { url: '/pages/me/index', title: '活动专区' }
        ],
        list: []
    },
    onLoad: function () {
    },
    onReady: function () {
        var that = this;

        wx.showLoading({
            title: app.globalData.allScreenLoading.title,
            mask: true
        });

        that.list();
    },
    onShow: function () {
    },
    onPullDownRefresh: function () { // 下拉刷新.
    },
    list: function () {
        var that = this;

        if (!that.data.loading.offOn) {
            return;
        }

        wx.showLoading({
            title: 'loading...',
            mask: true
        });

        wx.request({
            url: `${config.service.swiperUrl}?page=${this.data.page}`,
            success: function (res) {
                // wx.pageScrollTo({
                //     scrollTop: 300,
                //     duration: 300
                // });

                setTimeout(function () {
                    wx.hideLoading();
                }, app.globalData.delaylTime.loadingDelay800);

                var { data } = res.data;
                var loading = that.data.loading;
                if (data.list == '') {
                    loading.sh = 'block';
                    loading.title = '已经到底!';
                    loading.offOn = false;
                    that.setData({
                        loading
                    });
                    return;
                }

                var list = that.data.list;
                list = list.concat(data.list);
                that.setData({
                    swiperInfo: data.swiper,
                    list: list
                });
            }
        });
    },
    onReachBottom: function () { // 上拉触底.
        var that = this;
        var loading = this.data.loading;
        loading.sh = 'block';

        this.setData({
            loading,
            page: ++this.data.page
        }, function () {
            that.list();
        });
    },
    // 分享.
    onShareAppMessage: function () {
        return {
            title: '高家文玩',
            path: '/index/index?id=share'
        }
    }
});