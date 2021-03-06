const app = getApp(); // 获取应用实例
let config = require('../../config');
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
            { url: '/pages/me/index', title: '活动专区' },
            { url: '/pages/topic/index', title: '核桃专区' },
            { url: '/pages/classify/index', title: '手串专区' },
            { url: '/pages/cart/index', title: '纸币专区' },
            { url: '/pages/me/abc', title: '潘家园' }
        ],
        list: []
    },
    onLoad: function () {
    },
    onReady: function () {
        let that = this;

        wx.showLoading({
            title: app.globalData.allScreenLoading.title,
            mask: true
        });

        that.list();
    },
    onShow: function () {
        // wx.pageScrollTo({
        //     scrollTop: 0,
        //     duration: 1000
        // });
    },
    onPullDownRefresh: function () { // 下拉刷新.
    },
    list: function () {
        let that = this;
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

                let { data } = res.data;
                let loading = that.data.loading;
                if (data.list == '') {
                    loading.sh = 'block';
                    loading.title = '已经到底!';
                    loading.offOn = false;
                    that.setData({
                        loading
                    });
                    return;
                }

                let list = that.data.list;
                list = list.concat(data.list);
                that.setData({
                    swiperInfo: data.swiper,
                    list: list
                });
            }
        });
    },
    onReachBottom: function () { // 上拉触底.
        let that = this;
        let loading = this.data.loading;
        // loading.sh = 'block';

        if (!this.data.loading.offOn) {
            return;
        }

        wx.showLoading({
            title: app.globalData.allScreenLoading.title,
            mask: true
        });

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