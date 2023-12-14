import FirstImage from "../../assets/images/team/1.png"
import SecondImage from "../../assets/images/team/2.png"
import ThirdImage from "../../assets/images/team/3.png"
import FourthImage from "../../assets/images/team/4.jpg"
import FifthImage from "../../assets/images/team/5.jpg"
import SixthImage from "../../assets/images/team/6.jpg"

function Team(props) {
    return (
        <div>
            <p className="info">Команда Fonte Capital LTD – основа успеха. Каждый сотрудник Компании – это ценный актив в рабочем процессе фонда. Наша цель – создание такой рабочей атмосферы и условий, которые позволят максимально раскрыть потенциал каждого сотрудника для достижения максимального результата.</p>
            <div className="teams-wrapper">
                <div className="images">
                    <div className="member">
                        <img src={FirstImage} alt="Member" width={150} height={150} />
                        <h4>Эржан Мусин</h4>
                        <p>CEO</p>
                    </div>
                    <div className="member">
                        <img src={SecondImage} alt="Member" width={150} height={150} />
                        <h4>Олжас Укенов</h4>
                        <p>CEO</p>
                    </div>
                    <div className="member">
                        <img src={ThirdImage} alt="Member" width={150} height={150} />
                        <h4>Бродяга Хасанов</h4>
                        <p>CEO</p>
                    </div>
                    <div className="member">
                        <img src={FourthImage} alt="Member" width={150} height={150} />
                        <h4>EsedNode Muxaev</h4>
                        <p>CEO</p>
                    </div>
                    <div className="member">
                        <img src={FifthImage} alt="Member" width={150} height={150} />
                        <h4>Dominik Toretto</h4>
                        <p>CEO</p>
                    </div>
                    <div className="member">
                        <img src={SixthImage} alt="Member" width={150} height={150} />
                        <h4>Alisher Xujanov</h4>
                        <p>CEO</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;