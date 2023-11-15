import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'http://localhost:5000'
})

const userAxiosSecure = () => {
    return axiosPublic;
};

export default userAxiosSecure;