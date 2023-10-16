import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <NavLink className="mr-3 underline" to="/">Home</NavLink>
            <NavLink className="mr-3 underline" to="/addshop">AddShop</NavLink>
            <NavLink className="mr-3 underline" to="/login">Login</NavLink>
            <NavLink className="mr-3 underline" to="/register">Register</NavLink>

            
        </div>
    );
};

export default Navbar;