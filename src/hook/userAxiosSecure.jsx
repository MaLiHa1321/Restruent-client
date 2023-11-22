import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://final-restruent-server.vercel.app'
})

const userAxiosSecure = () => {
    return axiosPublic;
};

export default userAxiosSecure;