import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url,url前缀
  timeout: 5000, //设置超时时间
  responseType: 'json', //返回数据类型
})
/* axios请求配置
  url: '/user',
  method: 'get', // 默认是 get
  baseURL: 'https://some-domain.com/api/',
  headers: {'X-Requested-With': 'XMLHttpRequest'},
  params: {ID: 12345},
  data: {firstName: 'Fred'},
  timeout: 1000,
  responseType: 'json', // 默认的
*/

// request拦截器在每个请求头里面塞入token,添加请求拦截器
service.interceptors.request.use(config => {
  //在请求发出之前进行一些操作
  if (store.getters.token) {
    config.headers['X-Token'] = getToken() // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
  }
  return config
}, error => {
  // 对请求错误做些什么
  console.log(error)
  Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use(response => {
  //在这里对返回的数据进行处理
  /**
  * 下面的为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
  * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
  请求返回内容
  data:{},
  status:200, //从服务器返回的http状态文本
  statusText:'OK',//响应头信息
  headers: {},
  config: {} //`config`是在请求的时候的一些配置信息
  */
  const res = response.data;
  if (res.code !== 20000) {
    Message({
      message: res.message,
      type: 'error',
      duration: 5 * 1000
    });
    // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
    if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        store.dispatch('FedLogOut').then(() => {
          location.reload();// 为了重新实例化vue-router对象 避免bug
        });
      })
    }
    return Promise.reject('error');
  } else {
    return res;
  }
},error => {
    // 对响应错误做点什么
    console.log('err' + error)
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  })

export default service
