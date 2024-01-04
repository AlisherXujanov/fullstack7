import './style.scss'
import { Outlet } from 'react-router-dom'
import Nav from "./Nav.jsx"
import Footer from "../Footer"

function Navigation() {
    return (
        <div>
            <header>
                <div className="burger-menu-wrapper">
                    <div className='first-div'></div>    
                    <div className='second-div'></div>    
                    <div className='third-div'></div>    
                </div>
                <input id='burger-menu-toggler' type="checkbox" />
                {/* ...:checked + .nav-wrapper > .menu */}
                <Nav />
            </header>

            <div id='outlet'>
                <Outlet />
            </div>

            <footer id="footer">
                <Footer />
            </footer>
        </div>

    );
}

export default Navigation;