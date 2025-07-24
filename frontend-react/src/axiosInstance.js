import axios from "axios"
const  baseURL = import.meta.env.VITE_BACKEND_BASE_API
const axiosInstance = axios.create({
    baseURL:baseURL,
    headers:{
        'Content-Type':'application/json'
    }
})

//Request Inceptor

axiosInstance.interceptors.request.use(
    function(config){
        const accessToken = localStorage.getItem('accessToken')
        if (accessToken){
            config.headers['Authorization'] = `Bearer ${accessToken}`
        }

        return config
    },
    function(error){
        return Promise.reject(error)
    }
)


//Response Interceptors
axiosInstance.interceptors.response.use(
    function (response) {
        return response
    },
    async function (error) {
        const originalRequest = error.config

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true

            const refreshToken = localStorage.getItem('refreshToken')  // ✅ use correct key
            if (!refreshToken) {
                window.location.href = '/login'
                return Promise.reject(error)
            }

            try {
                const response = await axiosInstance.post('/token/refresh/', {
                    refresh: refreshToken
                })


                localStorage.setItem('accessToken', response.data.access)

                // ✅ Set new access token in original request
                originalRequest.headers['Authorization'] = `Bearer ${response.data.access}`

                return axiosInstance(originalRequest)  // ✅ retry request
            } catch (err) {
                localStorage.removeItem('accessToken')
                localStorage.removeItem('refreshToken')

                return Promise.reject(err)
            }
        }

        return Promise.reject(error)
    }
)



export default axiosInstance