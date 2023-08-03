import nav from './nav.scss';
import { useState } from 'react';
import Nav from './Nav.jsx'
import { Outlet } from 'react-router-dom'

function Navbar() {

    return (
        <>
            <Nav />
            <div id='outlet'>
                <Outlet />
            </div>

            <footer>
                <p>Footer</p>
            </footer>
        </>
    );
}

export default Navbar;