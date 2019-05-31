import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <NavLink to='/smurfs'>Home</NavLink> <br />
            <NavLink to='/smurf-form'>New Smurfs</NavLink>
        </div>
    )
}

export default NavBar