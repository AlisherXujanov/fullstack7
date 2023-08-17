import Nav from './Nav.jsx'
import { Outlet } from 'react-router-dom'
import logo from '../../Assets/images/logo.png'

function Navbar() {



    return (
        <>
            <span id='starting-point'></span>
            <Nav />

            <div id='outlet'>
                <Outlet />
            </div>

            <footer>
                <div className='left'>
                    <img
                        src={logo}
                        alt="Alisher Company"
                        className='me-3'
                        width={50}
                        height={30}
                    />
                    ©️ 2023
                    <br /> by Alisher & Fullstack Team
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

                    <span id='go-to-top-icon'>
                        <a href="#starting-point">🔝</a>
                    </span>
                </div>
            </footer>
        </>
    );
}

export default Navbar;