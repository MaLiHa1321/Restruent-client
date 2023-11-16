import { useQueries, useQuery } from "@tanstack/react-query";
import useAxios, { axiosSecure } from "../../../hook/useAxios";
import { AiOutlineDelete, AiOutlineUser } from "react-icons/ai";
import Swal from "sweetalert2";


const AllUser = () => {
    const axiosSecure = useAxios()
    const {data: users=[], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
      const res = await axiosSecure.get('/users')
      return res.data;
        }
    })

    // role maker
    const handlemakeAdmin = user =>{
        axiosSecure.patch(`/user/admin/${user._id}`)
        .then(res => {
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an admin now`,
                    showConfirmButton: false,
                    timer: 1500
                   });
            }
    })
    }


    // delete User
    const handleDeleteUser = user =>{
        console.log(user)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                .then(res => {
                    if(res.data.deletedCount > 0){
                        refetch()
                Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });


                    }
                })
        

            }
          });
    }





    return (
        <div>
            <div className="flex justify-evenly my-4">

            <h2 className="text-3xl font-bold">All Users</h2>
            <h2 className="text-3xl font-bold">Total User: {users?.length}</h2>
            </div>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users?.map((user,idx) =>   <tr key={user._id}>
            <th>{idx + 1}</th>
            <td>{user?.name}</td>
            <td>{user?.email}</td>
            <td>
                {
                    user.role === 'admin' ? 'admin' :
                    <button onClick={() => handlemakeAdmin(user)} className="btn bg-orange-400 btn-lg">
                    <AiOutlineUser className='text-white text-lg'></AiOutlineUser>
                  </button>
                }
           
            </td>
            <td>
            <button onClick={() => handleDeleteUser(user)} className="btn bg-red-400 btn-lg">
                <AiOutlineDelete className='text-white text-lg'></AiOutlineDelete>
              </button>
            </td>
          </tr> )
      }
    
   
  
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default AllUser;