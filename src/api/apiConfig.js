import axios from 'axios';

const api=axios.create({
    baseURL:"https://backend-school-3xgd.onrender.com/api" //backend url
})

//add a token to the request headers

api.interceptors.request.use((config)=>{
    const token=localStorage.getItem("authToken");
    if(token){
        config.headers.Authorization=`Bearer ${token}`
    }
    return config;
})

export default api;