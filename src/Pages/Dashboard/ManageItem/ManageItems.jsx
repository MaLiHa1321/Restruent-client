import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import SectionTitle from "../../../component/sectionTitle/SectionTitle";
import useMenu from "../../../hook/useMenu";
import useAxios from "../../../hook/useAxios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const ManageItems = () => {
    const [menu,,refetch] = useMenu()
    const axiosSecure = useAxios()

    const handleDeleteItem = item =>{
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
                axiosSecure.delete(`/menu/${item._id}`)
                .then(res => {
                    if(res.data.deletedCount > 0){
                        refetch()
                Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success"
              });


                    }
                })
        

            }
          });
    }
    return (
        <div>
            <SectionTitle heading={"manage All item"} subHeading={"Hurry up"}></SectionTitle>

            <div>
            <div className="overflow-x-auto w-full">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
        #
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>price</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
{
    menu.map((item,idx) => <tr key={item._id}>
        <th>
        {idx +1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
        
          </div>
        </td>
        <td>
        {item.name}
   
        </td>
        <td>$ {item.price}</td>
        <th>
            <Link to={`/dashboard/updateItem/${item._id}`}>
        <button className="btn bg-green-400 btn-lg">
                <AiOutlineEdit className='text-white text-lg'></AiOutlineEdit>
              </button>
            </Link>
        </th>
        <th>
        <button onClick={() => handleDeleteItem(item)} className="btn bg-red-400 btn-lg">
                <AiOutlineDelete className='text-white text-lg'></AiOutlineDelete>
              </button>
        </th>
      </tr>)
}
      
    
    </tbody>
  
    
  </table>
</div>
            </div>
            
        </div>
    );
};

export default ManageItems;