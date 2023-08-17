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
                <div className='left'>
                    <img src="" alt="" width={50} height={50} />
                    ©️ 2023 by Alisher & Fullstack Team
                </div>
                <div className="right">
                    <ul>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Github</a></li>
                        <li><a href="#">Pricing</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">API</a></li>
                        <li><a href="#">Training</a></li>
                        <li><a href="#">Status</a></li>
                        <li><a href="#">Security</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Teams</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Docs</a></li>
                    </ul>
                </div>
            </footer>
        </>
    );
}

export default Navbar;