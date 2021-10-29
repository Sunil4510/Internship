import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return(
        <>
        <div className="link    ">
            <NavLink exact activeClassName="active_class"  to="/">Home</NavLink>
            <NavLink exact activeClassName="active_class"  to="/about">About</NavLink>
            <NavLink exact activeClassName="active_class"  to="/search">Search</NavLink>
            <NavLink exact activeClassName="active_class"  to="/about/name">Name</NavLink>
            <NavLink exact activeClassName="active_class"  to="/user/sunil/kurapati">User</NavLink>

        </div>
        </>
    );
}

export default Navbar;