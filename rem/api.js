/**
 * @description 公共的api接口管理
 */
export default {
    baseUrl:"http://erp.steelji.com",
    baseErpUrl:"http://erp.steelji.com",
    baseAssetsImg:"/public/static/skin/m03skinBlue/modules/mall-index2/phonestatic/phone-assets-img/", //图片服务器公共地址
    
    home:{
        login:"llaal", //test
        qgdt:"http://localhost:5000/api/qgdt", //求购动态
    },
    shop:{
        all:"http://localhost:5000/api/shop",//现货大厅 参数=> page:1
    },
    shidan:{
        shidan:"http://localhost:5000/api/shidan",
    },
    store:{
        base:"http://localhost:5000/api/store",
    },
    search:{
        ipt:"http://localhost:5000/api/search", //搜索返回后台
    },
    process:{
        index:"http://localhost:5000/api/process", //加工
    },
    logistics:{
        index:"http://localhost:5000/api/logistics",//物流
    },
    login:"http://localhost:5000/api/login",
    register:"http://localhost:5000/api/register",


    echartsApi:"/web/API/Ajaxdata/get_hangqing", //echarts
    shopApi:"http://erp.steelji.com/web/API/Ajaxdata/ajax_web_category_list",//分类
    shopApi2:"ajax_web_category_list",//分类接口2
}