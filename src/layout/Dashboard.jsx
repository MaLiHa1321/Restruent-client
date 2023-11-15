import React from 'react';
import { AiFillMessage, AiOutlineAccountBook, AiOutlineCalendar, AiOutlineHome, AiOutlineOrderedList, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {

   const isAdmin =true;
    return (
        <div className='flex'>
            <div className='w-64 min-h-screen bg-orange-500'>
               <ul className='p-4'>
                {
                    isAdmin ? <>

                  <li className='flex justify-center items-center text-xl gap-3 text-black m-8'>
                <AiOutlineHome></AiOutlineHome>
                <NavLink to='/dashboard/adminHome'>Admin Home</NavLink>
                </li>
                <li className='flex justify-center items-center text-xl gap-3 text-black m-8'>
                <AiOutlineCalendar></AiOutlineCalendar>
                <NavLink to='/dashboard/addItems'>Add Items</NavLink>
                </li>
                <li className='flex justify-center items-center text-xl gap-3 text-black m-8'>
                <AiOutlineShoppingCart></AiOutlineShoppingCart>
                <NavLink to='/dashboard/manageItems'>Manage Items</NavLink>
                </li>
                <li className='flex justify-center items-center text-xl gap-3 text-black m-8'>
                <AiOutlineOrderedList></AiOutlineOrderedList>
                <NavLink to='/dashboard/manageBookings'>Manage Bookings</NavLink>
                </li>
                <li className='flex justify-center items-center text-xl gap-3 text-black m-8'>
                <AiOutlineOrderedList></AiOutlineOrderedList>
                <NavLink to='/dashboard/allUsers'>All User</NavLink>
                </li>
                    </> : 
                    <>
                         <li className='flex justify-center items-center text-2xl gap-3 text-black m-8'>
                <AiOutlineHome></AiOutlineHome>
                <NavLink to='/dashboard/userHome'>Home</NavLink>
                </li>
                <li className='flex justify-center items-center text-2xl gap-3 text-black m-8'>
                <AiOutlineCalendar></AiOutlineCalendar>
                <NavLink to='/dashboard/reservation'>Reservation</NavLink>
                </li>
                <li className='flex justify-center items-center text-2xl gap-3 text-black m-8'>
                <AiOutlineAccountBook></AiOutlineAccountBook>
                <NavLink to='/dashboard/review'>Review</NavLink>
                </li>
                <li className='flex justify-center items-center text-2xl gap-3 text-black m-8'>
                <AiOutlineShoppingCart></AiOutlineShoppingCart>
                <NavLink to='/dashboard/cart'>My cart</NavLink>
                </li>
                <li className='flex justify-center items-center text-2xl gap-3 text-black m-8'>
                <AiOutlineOrderedList></AiOutlineOrderedList>
                <NavLink to='/dashboard/bookings'>My Bookings</NavLink>
                </li>

                    </>

                }
           
                <div className="divider"></div>
                {/* shared  */}
                <li className='flex justify-center items-center text-2xl gap-3 text-black m-8'>
                <AiOutlineHome></AiOutlineHome>
                <NavLink to='/'>Home</NavLink>
                </li>
                <li className='flex justify-center items-center text-2xl gap-3 text-black m-8'>
                <AiOutlineSearch></AiOutlineSearch>
                <NavLink to='/order/salad'>menu</NavLink>
                </li>
                <li className='flex justify-center items-center text-2xl gap-3 text-black m-8'>
                <AiFillMessage></AiFillMessage>
                <NavLink to='/order/contact'>Contact</NavLink>
                </li>
               </ul>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;