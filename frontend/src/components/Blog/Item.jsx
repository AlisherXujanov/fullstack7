import { Link } from "react-router-dom"
 
import Blog1 from "../../assets/images/blog-1.png"
import Blog2 from "../../assets/images/blog-2.png"
import Blog3 from "../../assets/images/blog-3.png"
import Blog4 from "../../assets/images/img2.png"
import Blog5 from "../../assets/images/img3.png"

function Item(props) {
    const images = [Blog1, Blog2, Blog3, Blog4, Blog5]

    let img_index = null
    if (props.id < images.length) { img_index = props.id } 
    else { img_index = props.id % images.length }

    return (
        <>
            <div className="content">
                <div className="left">
                    <img src={images[img_index]} alt="Blog" width={"100%"}  height={300} />
                </div>
                <div className="right">
                    <h4>Менеджемент</h4>
                    <h2>{props.h2}</h2>
                    <h4>Арман Арманов, Октябрь 13, 2022</h4>
                    <p>Минфин разработал новый формат индивидуальных инвестиционных счетов (ИИС-III) — его включат в систему единого налогового вычета наряду с пенсионными и страховыми инвестициями. С 2024 года ИИС-III полностью заменит ИИС-I, запущенный в 2015 году. Новый инвестсчет будет неинтересен для инвесторов в предложенной </p>
                    <Link to={"/blog/"+props.id}>
                        <button className="warning-btn">
                            Подробнее 
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Item;