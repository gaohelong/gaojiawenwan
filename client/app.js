//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({
    globalData: {
        allScreenLoading: {
            title: 'loading……'
        },
        delaylTime: {
            loadingDelay500: 500,
            loadingDelay800: 800
        }
    },
    onLaunch: function () {
        qcloud.setLoginUrl(config.service.loginUrl)
    },
    onShow: function () {
    }
})