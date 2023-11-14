import React, { useState } from 'react';
import useAuth from '../../hook/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxios from '../../hook/useAxios';
import useCart from '../../hook/useCart';

const FoodCard = ({item}) => {
    const {name,recipe,image,category,price,_id} = item;
    const {user} = useAuth();
    const navigate = useNavigate()
    const location = useLocation()
    const axios = useAxios();
    const [,refetch] = useCart();

    const handleCart = (items) =>{
      if(user && user?.email){
        const cartItem = {
          menuId: _id,
          email: user.email,
          name,image,price
        
        }
    
       axios.post('/cart', cartItem)
       .then(res => {
         console.log(res.data)
         if(res.data.error){
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: `${name} already added to the cart`,
            showConfirmButton: false,
            timer: 1500
           });
         }
         if(res.data.insertedId){
           Swal.fire({
             position: "top-end",
             icon: "success",
             title: `${name} has been added to the cart`,
             showConfirmButton: false,
             timer: 1500
            });
            refetch()
         }

       })
      }

      else{

        Swal.fire({
          title: "You are not logged in!",
          text: "plz login to add to cart",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Login!"
        }).then((result) => {
          if (result.isConfirmed) {
          navigate('/login', {state: {from: location}})
          }
        });
      }
      
     
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-12">
        <figure><img src={image} alt="Shoes" /></figure>
        <p className='absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white'>${price}</p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
          <button onClick={() => handleCart(item)}
           className='btn btn-outline bg-slate-100  border-0 border-orange-800 border-b-4  mt-8'>
            Add to cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;