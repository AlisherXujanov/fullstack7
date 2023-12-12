import './style.scss'
import { Outlet, Link } from 'react-router-dom'

function Navigation() {
    return (
        <div>
            <div className="nav-wrapper">
                <div className="logo">
                    <h2>
                        <Link to={"/"}>Fonte</Link>
                    </h2>
                </div>

                <div className="nav-links">
                    <a href="/#О-нас">О нас</a>
                    <a href="/#Команда">Команда</a>
                    <Link to={"/blog"}>Блог</Link>
                    <a href="/#Продукты">Продукты</a>
                    <a href="/#Контакты">Контакты</a>
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
        </div>

    );
}

export default Navigation;