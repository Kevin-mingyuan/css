import axios from 'axios';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // console.log(config , 'congifffffffff拦截器');

    //存储token
    // console.log(localStorage , '222222222222222222222222222222222222222');
    
    // if (localStorage.token) {
    //     config.headers['Authorization'] = 'localStorage.token';
    //     config.headers['token'] = '123';
    //     config.headers['Accept'] = 'application/json';
    //     // config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
    // }
   
    return config;
  }, function (error) {
    // 对请求错误做些什么
    // alert('错误的传参方式');
    return Promise.reject(error);
  });

  // 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    // console.log(response , '666666666666666666 响应器')
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

  export default axios;