import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

export const axiosSecure = axios.create({
    baseURL: 'https://final-restruent-server.vercel.app'
    

})
const useAxios = () => {
    const {logOutUser} = useContext(AuthContext)
    const navigate = useNavigate()

    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        console.log('interceptor hit')
        config.headers.authorization = `Bearer ${token}`;
     return config;
    },
    function(error){
        return Promise.reject(error)
    }
    )

    // interceptors 401 and 403 status
    axiosSecure.interceptors.response.use(function(response){
        return response;
    }, async (error) =>{
        const status = error.response.status;
        // logout the user
        if(status === 401 || status === 403){
          await logOutUser();
           navigate('/login')
        }
        return Promise.reject(error);
    })
    return axiosSecure;
};

export default useAxios;