import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";


const useAdmin = () => {
    const {user} = useAuth()
    const axios = useAxios()
    const {data: isadmin, isPending: isAdminLoading} = useQuery({
        queryKey: [user?.email, 'admin'],
        queryFn: async() =>{
            const res = await axios.get(`/users/admin/${user.email}`);
            return res.data?.admin;
        }
    })
    return [isadmin, isAdminLoading]
};

export default useAdmin;