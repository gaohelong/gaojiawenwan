Page({
    /**
     * 页面的初始数据
     */
    data: {
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
        /* toast */
        wx.showToast({
            title: '开发中',
            icon: 'loading',
            mask: true,
            complete: function () {
                /* modal */
                wx.showModal({
                    title: '返回首页',
                    content: '点击确定返回',
                    // showCancel: false
                    cancelText: '我是取消',
                    // cancelColor: '#1AAD16',
                    confirmText: '返回首页',
                    success: function (res) {
                        if (res.confirm) {
                            console.log('success');
                            /* reLaunch */
                            wx.reLaunch({
                                url: '/pages/index/index'
                            });
                        } else {
                            console.log('cancel');
                            /* actionSheet */
                            wx.showActionSheet({
                                itemList: ['A', 'B', 'C'],
                                success: function (res) {
                                    console.log(res.tapIndex);
                                },
                                fail: function (res) {
                                    console.log(res.errMsg);
                                }
                            })
                        }
                    }
                });
            }
        });
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