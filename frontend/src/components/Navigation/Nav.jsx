import Heading from "../common/Heading"
import { Link, useNavigate } from 'react-router-dom'

import { useContext } from "react";
import { globalContext } from "../../state";
import { useTranslation } from "react-i18next";

// 1. Create a burger
// 2. Put the input checkbox onto the burger and make it invisible
// 3. Open the Nav-width div when the checkbox is checked

function Nav(props) {
    const navigate = useNavigate();
    const state = useContext(globalContext);
    const { t, i18n: { changeLanguage, language } } = useTranslation();

    const newLanguage = () => {
        return language === "en" ? "ru" : "en";
    }
    const initiateChangeLanguage = () => {
        state.dispatch({ type: "CHANGE_LANG", currentLanguage: newLanguage() })
        changeLanguage(newLanguage());
    }

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
                    <Link to={"/about"}>
                        {t('about')}
                    </Link>
                    <button onClick={goToTeamsHash}>
                        {t('team')}
                    </button>
                    <Link to={"/blog"}>
                        {t('blog')}
                    </Link>
                    <Link to={"/products"}>
                        {t('products')}
                    </Link>
                    <Link to={"/contacts"}>
                        {t('contacts')}
                    </Link>
                </div>

                <div className="auth">
                    <button className="warning-btn">
                        {t('login')}
                    </button>
                    <span onClick={initiateChangeLanguage} >
                        {newLanguage()}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Nav;