import valuesDB from "../../db/values.json"
import "./style.scss"
import Heading from "../common/Heading"
import Diamond from "../../assets/icons/diamond.png"
import Bag from "../../assets/icons/bag.png"
import Graph from "../../assets/icons/graph.png"
import HandShake from "../../assets/icons/handShake.png"
import ValueItem from "./ValueItem.jsx"

function Values() {
    const imgs = [Diamond, Graph, Bag, HandShake]
    return (
        <div className="values-wrapper">
            <Heading size={2}>Наши ценности</Heading>

            <div className="values-content">
                {
                    valuesDB.map((item, index) => {
                        return (
                            <ValueItem 
                                key={index}
                                image={imgs[index]}
                                title={item.title}
                                subtitle={item.subtitle}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Values;