import axios from 'axios';
import {AsyncStorage} from "react-native";

const instance = axios.create({
    baseURL : 'http://4c11b899.ngrok.io'
});

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');

        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        console.log(config.url);
        return config;
    },
    (err) => {
        console.log(err);
        return Promise.reject(err);
    });

export default instance;
