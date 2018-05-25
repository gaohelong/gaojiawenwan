//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({
    globalData: {
        allScreenLoading: {
            // title: 'loading……'
            title: '加载中'
        },
        delaylTime: {
            loadingDelay500: 500,
            loadingDelay800: 800
        }
    },

    onLaunch: function (options) {
        console.log(options);
        qcloud.setLoginUrl(config.service.loginUrl)
    },

    onShow: function () {
    }
})