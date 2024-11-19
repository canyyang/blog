import axios, { AxiosInstance, AxiosResponse } from 'axios';

// 创建 Axios 实例，设置基础配置
const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://120.77.36.205:3000', // 替换为你的 API 基础 URL
  timeout: 10000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json',
  },
});

// 响应拦截器，统一处理响应数据
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data; // 返回响应数据
  },
  (error) => {
    // 统一处理错误
    console.error('请求错误：', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;