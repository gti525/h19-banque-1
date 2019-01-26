import axios from "axios";
import router from './router';


export default axios.create({
    baseURL: "http://localhost:8888/api",
    headers: {
        "Content-type": "application/json",
    }

});

// http request 拦截器
axios.interceptors.request.use(
    config => {
        if (localStorage.token) { //判断token是否存在
                alert("SDFDF")
            config.headers.Authorization = localStorage.token;  //将token设置成请求头
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

