import Heading from "../common/Heading"
import { Link } from 'react-router-dom'
import SM from "../../assets/sm.png"
import "./style.scss"

function Footer(props) {
    return (
        <div className="footer-wrapper">
            <div className="footer-top">
                <div className="footer-heading">
                    <Heading size={2} color={"darkgray"} >
                        Fonte
                    </Heading>
                </div>

                <div className="footer-links">
                    <div className="left">
                        <Link to={"/about"}>О нас</Link>
                        <Link to={"/team"}>Команда</Link>
                        <Link to={"/blog"}>Блог</Link>
                        <Link to={"/products"}>Продукты</Link>
                        <Link to={"/contacts"}>Контакты</Link>
                    </div>
                    <div className="right">
                        <Link to={"/#"}>Terms and conditions</Link>
                        <Link to={"/#"}>Privacy Policy</Link>
                    </div>
                </div>

                <div className="social-media">
                    <img src={SM} alt="Social Media" />
                </div>
            </div>
            <div className="footer-bottom">
                <h2>© 2022 • Fonte • All rights reserved</h2>

                <p>Частная компания «FONTE Capital Ltd.»,  зарегистрированная по адресу: Есильский район, г. Нур-Султан, Мангилик Ел, 55/20, офис 345-346, БИН 220140900035, осуществляет свою деятельность в соответствии с законодательством Международного Финансового центра «Астана» (МФЦА)  имеет право осуществлять регулируемую деятельность по управлению коллективными инвестициями – на основании лицензии № AFSA-A-LA-2022-0004, от 27 января 2022 года на бессрочной основе</p>
                <p>Стоимость инвестиции инвестора в инвестиционный фонд может увеличиваться или уменьшаться. Результаты инвестирования в прошлом не определяют доходы в будущем. Управляющая компания инвестиционного фонда или МФЦА не гарантируют доходности инвестиций. Инвестору необходимо ознакомиться с Уставом (Constitution) и Инвестиционным меморандумом (Offering Memorandum) инвестиционного фонда, его инвестиционной декларацией и определенными рисками перед инвестированием активов в инвестиционный фонд.</p>
            </div>
        </div>
    );
}

export default Footer;