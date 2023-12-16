import Heading from "../common/Heading"
import { Link } from 'react-router-dom'
import SM from "../../assets/SM.png"

function Footer(props) {
    return (
        <div className="footer-wrapper">
            <div className="footer-top">
                <Heading size={2} color={"darkgray"} />

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
                    <div className="social-media">
                        <img src={SM} alt="Social Media" />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">

            </div>
        </div>
    );
}

export default Footer;