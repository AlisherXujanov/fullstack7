import './style.scss'
import { Outlet } from 'react-router-dom'

function Navigation() {
    return (
        <div>
            <div className="nav-wrapper">
                <div className="logo">
                    <h2>Fonte</h2>
                </div>

                <div className="nav-links">
                    <a href="/#О-нас">О нас</a>
                    <a href="/#Команда">Команда</a>
                    <a href="/#Блог">Блог</a>
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