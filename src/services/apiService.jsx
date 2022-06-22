import axios from 'axios';
// import { axiosResponseInterceptor, axiosRequestInterceptor } from './aes-cli';
// const backendUrl = process.env.REACT_APP_API_URL;
import { apiUrl } from '../config/general';

const apiCli = axios.create({
    baseURL: apiUrl,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    }
});

// apiCli.interceptors.response.use(axiosResponseInterceptor)

const dataResponseInterceptor = (response) => {
    const { data, status: status_code } = response;
    return { data, status_code, success: true };
}

apiCli.interceptors.response.use(dataResponseInterceptor)


const authRequestInteceptor = (request) => {
    let auth = JSON.parse(localStorage.getItem("auth"));

    if (auth && "token" in auth) {
        request.headers["Authorization"] = "Bearer " + auth.token;
    }
    return request;
}

// apiCli.interceptors.request.use(axiosRequestInterceptor);

apiCli.interceptors.request.use(authRequestInteceptor);

export default apiCli;