import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const navOption = <>
    <NavLink to='/' className='mr-4 text-xl'>Home</NavLink>
    <NavLink to='/menu' className='mr-4 text-xl'>Menu</NavLink>
    <NavLink to='/order' className='mr-4 text-xl'>Order</NavLink>
    <NavLink to='/contact' className='mr-4 text-xl'>Contact</NavLink>
    <NavLink to='/about' className='mr-4 text-xl'>About</NavLink>

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