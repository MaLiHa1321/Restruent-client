import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hook/useAdmin";
import useAuth from "../hook/useAuth";


const AdminRoutes = ({children}) => {
    const[isAdmin, isAdminLoading] = useAdmin();
    const {user, loading} = useAuth();
    const location = useLocation()
    if(loading || isAdminLoading){
        return <p>Loading.....</p>
    }
    if(!user && !isAdmin){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>

    }
    return children;
};

export default AdminRoutes;