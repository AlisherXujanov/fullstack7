import "./style.scss"
import AboutPic from "../../assets/images/about.png"

function About() {

    return (
        <div id="about-wrapper">
            <h2>О нас</h2>

            <div className="about">
                <div className="left">
                    <img src={AboutPic} alt="About" width="100%" height={400} />
                </div>
                <div className="right"></div>
            </div>
        </div>
    );
}

export default About;