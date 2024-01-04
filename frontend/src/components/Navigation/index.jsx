import './style.scss'
import { Outlet } from 'react-router-dom'
import Nav from "./Nav.jsx"
import Footer from "../Footer"

function Navigation() {
    return (
        <div>
            <header>
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