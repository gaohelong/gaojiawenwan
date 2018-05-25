// component/detail/detail.js
Component({
    /**
     * 配置项.
     */
    options: {
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },

    /**
     * 组件的属性列表
     */
    properties: {
        cptInfo: {
            type: Object
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        getInfoHandle: function () {
            console.log(this.properties);
        }
    }
})
