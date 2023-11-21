import useAuth from "../../../hook/useAuth";


const AdminHome = () => {
    const {user} = useAuth()
    return (
        <div>
            <h2 className="text-center text-3xl text-orange-500 font-bold p-4">Hi Welcome Back {user?.displayName}</h2>
        </div>
    );
};

export default AdminHome;