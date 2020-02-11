import axios from 'axios'
import JSONBig from 'json-bigint'
import router from '@/router/index.js'

// 引入vuex(用于判断用户是否登录系统)
import store from '@/store'

// 创建新的axios实例对象，和原来的axios没有关系
const instance = axios.create({
  // 请求根地址
  baseURL: 'http://ttapi.research.itcast.cn/',
  // 请求完毕的数据【转换器】，超大整型数字转换处理
  transformResponse: [function (data) {
    // if (data) {
    //   return JSONBig.parse(data)
    // }
    // return data
    try {
      return JSONBig.parse(data)
    } catch (error) {
      return data
    }
  }]
})

// 配置请求拦截器
instance.interceptors.request.use(function (config) {
  if (store.state.user.token) {
    config.headers.Authorization = 'Bearer ' + store.state.user.token
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

// 配置响应拦截器
instance.interceptors.response.use(function (response) {
  // 正常响应处理
  try {
    return response.data.data
  } catch (error) {
    return response.data
  }
}, function (error) {
  // 非正常响应处理(包括401)
  // console.dir(error) // 对象： config request response isAxiosError toJSON
  if (error.response.status === 401) {
    // token不ok(token在服务器端已经失效了，2个小时时效)
    // 强制用户重新登录系统，以刷新服务器端的token时效
    router.push('/login')
    // 不要给做错误提示了
    return new Promise(function () {}) // 空的Promise对象，没有机会执行catch，进而不做错误提示了
  }
  // return new Promise((resolve,reject)=>{
  // reject('获得文章失败！')
  // })
  return Promise.reject(error)
})

// es6默认导出动作
export default instance
