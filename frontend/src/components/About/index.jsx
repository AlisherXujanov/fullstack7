import "./style.scss"
import AboutPic from "../../assets/images/about.png"
import Licence from "../../assets/icons/licence.png"
import Heading from "../common/Heading"
import Values from "./Values.jsx"
import Team from "./Team.jsx"
import Marquee from "../common/Marquee"
import ContactsForm from "../ContactsForm"
import CarouselComponent from "../common/Carousel"

import Img1 from "../../assets/images/img1.png"
import Img2 from "../../assets/images/img2.png"
import Img3 from "../../assets/images/img3.png"
import Img4 from "../../assets/images/img4.png"
import Img5 from "../../assets/images/img5.png"

function About() {
    const images = [Img1, Img2, Img3, Img4, Img5]

    return (
        <div id="about-wrapper">
            <CarouselComponent images={images} blurred={true}>
                <div className="inner-carousel">
                    <h1>Хедж-фонд</h1>
                    <br />
                    <p>Классический выбор профессиональных инвесторов с заданными умеренными параметрами риска. Основан на инвестировании в бумаги индекса S&P 500 с диверсификацией по 11 секторам экономики.</p>
                    <br />
                    <button className="warning-btn">Подробнее</button>
                </div>
            </CarouselComponent>


            <div className="about">
                <Heading size={2}>О нас</Heading>
                <div className="about-content">
                    <div className="left">
                        <img src={AboutPic} alt="About" width="100%" height={400} />
                    </div>
                    <div className="right">
                        <p>Наша Команда успешно осуществляет деятельность на нескольких рынках инвестиций. Богатство выбора инструментов этих рынков позволяет Нам успешно сохранять и преумножать капитал клиентов. </p>
                        <br />
                        <p>Вступить в партнерство с Fonte могут как профессиональные инвестора, так и частные лица, только начинающие открывать для себя новые перспективы. Наша юрисдикция - Международный финансовый центр «Астана» (МФЦА). Комфортные налоговые условия и регуляторные политики обеспечивают необходимые свободы и преимущества для достижения целей инвестиций. </p>
                        <br />
                        <p>В партнерстве с Fonte Capital LTD, инвесторы имеют возможность воспользоваться не только проверенными стратегиями, но и смогут совместно разработать персональные инвестиционные решения.</p>
                        <br />
                        <button className="warning-btn">
                            <img src={Licence} alt="Licence" />
                            Лицензии
                        </button>
                    </div>
                </div>
            </div>

            <Marquee />

            <div className="values">
                <Values />
            </div>

            <Marquee reversed={true} />

            <div id="teams">
                <Heading size={2}>Наша команда</Heading>
                <Team />
            </div>
            
            <Marquee />
            <ContactsForm />
        </div>
    );
}

export default About;