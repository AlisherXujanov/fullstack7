import nav from './nav.scss';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom'

function Navbar() {
    
    return (
        <>
            <nav style={nav}>
                <Link to={'/'}> Home </Link>
                <Link to={'/About'}> About </Link>
            </nav>

            <Outlet />
        </>
    );
}

export default Navbar;