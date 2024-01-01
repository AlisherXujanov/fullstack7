import './style.scss'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import Heading from "../common/Heading"
import Footer from "../Footer"

function Navigation() {
    const navigate = useNavigate();

    const goToTeamsHash = () => {
        navigate('/about');
        setTimeout(() => {
            const element = document.getElementById('teams');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 0);
      };
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
                    <button onClick={goToTeamsHash}>Команда</button>
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