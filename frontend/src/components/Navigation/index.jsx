import './style.scss'
import { Outlet, Link } from 'react-router-dom'
import Heading from "../common/Heading"
import Footer from "../Footer"

function Navigation() {
    return (
        <div>
            <div className="nav-wrapper">
                <div className="logo">
                    <h2>
                        <Link to={"/"}>
                            <Heading size={1.5}>Fonte</Heading>
                        </Link>
                    </h2>
                </div>

                <div className="nav-links">
                    <Link to={"/about"}>О нас</Link>
                    <a href={"/about#teams"}>Команда</a>
                    <Link to={"/blog"}>Блог</Link>
                    <Link to={"/products"}>Продукты</Link>
                    <Link to={"/contacts"}>Контакты</Link>
                </div>

                <div className="auth">
                    <button className="warning-btn">
                        Войти
                    </button>
                    <a href="/#Рус">Рус</a>
                </div>
            </div>

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