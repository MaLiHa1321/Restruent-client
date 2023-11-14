import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import useAuth from '../../../hook/useAuth';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import useCart from '../../../hook/useCart';


const Navbar = () => {
  const {user,logOutUser} = useAuth()
  const [cart] = useCart()
  const handleLogOut = () =>{
    logOutUser()
    .then(() => {})
    .catch(err => console.log(err))
  }
    const navOption = <>
    <NavLink to='/' className='mr-4 text-xl'>Home</NavLink>
    <NavLink to='/menu' className='mr-4 text-xl'>Menu</NavLink>
    <NavLink to='/order/salad' className='mr-4 text-xl'>Order</NavLink>
    <NavLink to='/contact' className='mr-4 text-xl'>Contact</NavLink>
    <NavLink to='/about' className='mr-4 text-xl'>About</NavLink>
    <NavLink to='/cart' className='mr-4 text-xl'>
    <button className="btn">
    <AiOutlineShoppingCart className='text-2xl'></AiOutlineShoppingCart>
  <div className="badge badge-secondary">{cart.length}</div>
</button>
    </NavLink>
  
    {
      user ? <>
      {/* <button onClick={handleLogOut} className='btn btn-ghost'>Logout</button> */}
      <span>{user?.displayName}</span>
      <NavLink onClick={handleLogOut} to='/login' className='mr-4 text-xl'>Logout</NavLink>
      </> : <>
      <NavLink to='/login' className='mr-4 text-xl'>Login</NavLink>
      </>
    }
   

    </>
    return (
        <>
        <div className="navbar fixed z-10 max-w-screen-xl bg-opacity-30 bg-black">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navOption}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl text-white">Bistro Boss</a>
  </div>
  <div className="navbar-center hidden lg:flex text-white">
    <ul className="menu menu-horizontal px-1">
   {navOption}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
            
        </>
    );
};

export default Navbar;