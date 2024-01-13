import Heading from "../common/Heading"
import { Link, useNavigate } from 'react-router-dom'

import { useContext } from "react";
import { globalContext } from "../../state";

// 1. Create a burger
// 2. Put the input checkbox onto the burger and make it invisible
// 3. Open the Nav-width div when the checkbox is checked

function Nav(props) {
    const navigate = useNavigate();
    const state = useContext(globalContext);

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
        <div className="nav-wrapper">
            <div className="logo">
                <h2>
                    <Link to={"/"}>
                        <Heading size={1.5}>Fonte</Heading>
                    </Link>
                </h2>
            </div>

            <div className="menu">
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
                    <span 
                        onClick={(e) => {state.dispatch(
                            { type: "CHANGE_LANG" }
                        )}}
                    >
                        { state.currentLanguage }
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Nav;