import React from 'react';
import useCart from '../../../hook/useCart';
import { AiOutlineDelete, AiOutlineShoppingCart } from 'react-icons/ai';
import Swal from 'sweetalert2';
import useAxios from '../../../hook/useAxios';

const Cart = () => {
    const [cart, refetch] = useCart()
    const totalPrice = cart.reduce((total,item) => total + item.price, 0)
    const axios = useAxios();

    const handleDelete = id =>{
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
                axios.delete(`/cart/${id}`)
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
        <div className='p-8'>
            <div className='flex gap-12'>

            <h2 className='text-2xl'>Items: {cart.length}</h2>
            <h2 className='text-2xl'>Items: {totalPrice}</h2>
            <button className='btn btn-primary'>Pay</button>
            </div>
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
        #
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        cart.map((item,index) =>   <tr key={item._id}>
            <th>
             <p>{index + 1}</p>
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
        
              <span className="badge badge-ghost badge-sm">{item.name}</span>
            </td>
            <td>$ {item.price}</td>
            <th>
              <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-lg">
                <AiOutlineDelete className='text-red-700'></AiOutlineDelete>
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

export default Cart;