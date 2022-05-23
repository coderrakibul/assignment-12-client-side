import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div class="navbar bg-accent text-white">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-primary">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/purchase'>Purchase</Link></li>
                        <li><Link to='/reviews'>Reviews</Link></li>

                    </ul>
                </div>
                <Link to='/' class="btn btn-ghost normal-case text-2xl font-bold">Car Parts</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/purchase'>Purchase</Link></li>
                    <li><Link to='/reviews'>Reviews</Link></li>

                </ul>
            </div>
            <div class="navbar-end">
                <Link to="/login" class="text-white">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;