Page({
    /**
     * 页面的初始数据
     */
    data: {
        typeList: [
            { id: 1, name: '全部商品 ↓' },
            { id: 2, name: '默认排序 ↓' }
        ],
        orderList: [
            { id: 1, name: '默认排序' },
            { id: 2, name: '价格最低' },
            { id: 3, name: '价格最高' }
        ],
        orderListSH: 'hide',
        animationData: {}
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
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        wx.setNavigationBarColor({
            frontColor: '#ffffff',
            backgroundColor: '#1aad16',
            animation: {
                duration: 500,
                timingFunc: 'easeInOut'
            }
        });

        // 气泡.
        wx.setTabBarBadge({
            index: 2,
            text: '99'
        });

        // 红点.
        wx.showTabBarRedDot({
            index: 0
        });

        // 隐藏tabBar.
        // wx.hideTabBar({
        //     animation: true
        // });
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        this.setData({
            orderListSH: 'hide'
        });
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
    },

    /**
     * 排序显示.
     */
    orderListHandle: function () {
        let that = this;
        let typeList = this.data.typeList;
        typeList[1].name = '默认排序 ↑';

        let orderListSH = 'show';
        if (this.data.orderListSH === 'show') {
            orderListSH = 'hide';
            typeList[1].name = '默认排序 ↓';
        }

        this.setData({
            typeList: typeList,
            orderListSH: orderListSH
        });
    },

    /**
     * 排序处理
     */
    orderHandle: function (e) {
        let that = this;
        let ele = e.target;

        that.orderListHandle();
        wx.showLoading({
            title: 'loading...',
            mask: true,
            success: function () {
                setTimeout(function () {
                    console.log(ele.dataset.id);
                    wx.hideLoading();
                }, 1000);
            }
        });
    }
})