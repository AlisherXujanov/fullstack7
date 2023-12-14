import valuesDB from "../../db/values.json"
import "./style.scss"
import Heading from "../common/Heading"
import Diamond from "../../assets/icons/diamond.png"
import Bag from "../../assets/icons/bag.png"
import Graph from "../../assets/icons/graph.png"
import HandShake from "../../assets/icons/handShake.png"

function Values() {
    return (
        <div className="values-wrapper">
            <Heading size={2}>Наши ценности</Heading>

            <div className="values-content">
                <div className="value-item">
                    <img 
                        src={Diamond}
                        alt="diamond" 
                        width={200}
                        height={200}
                    />
                    <div>
                        <h2>Стабильность</h2>
                        <p>Сохранность капитала клиентов приоритетнее доходности - каждое решение взвешено, обдумано и оценено.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Values;