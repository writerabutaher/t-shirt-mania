import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 gap-4">
                            <li><NavLink to='/home'>Home</NavLink></li>
                            <li> <NavLink to='/order'>Order</NavLink></li>
                            <li> <NavLink to='/about'>About</NavLink></li>
                        </ul>
                    </div>
                    <NavLink to='/' className="btn btn-ghost normal-case text-xl">T-Shirt Mania</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 gap-8">
                        <li><NavLink to='/home'>Home</NavLink></li>
                        <li> <NavLink to='/order'>Order</NavLink></li>
                        <li> <NavLink to='/about'>About</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="form-control">
                        <div className="input-group">
                            <input type="search" placeholder="Search Your Shirt" className="input input-bordered" />
                            <button className="btn btn-square" type='submit'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;