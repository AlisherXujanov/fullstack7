import "./style.scss"
import Heading from "../common/Heading"
import Item from "./Item.jsx"
import Blog1 from "../../assets/images/blog-1.png"
import Blog2 from "../../assets/images/blog-2.png"
import Blog3 from "../../assets/images/blog-3.png"

function Blog(props) {
    return (
        <div id="blog-wrapper">
            <div style={{padding: "0 0 20px 20px"}}>
                <Heading size={2} >Blog</Heading>
            </div>

            <Item img={Blog1} 
                h2={"Минфин предложил единый налоговый вычет"}
            />

            <Item img={Blog2} 
                h2={"Рэй Далио перестал считать наличные «мусором»"}
            />

            <Item img={Blog3} 
                h2={"Инвестиции в 5G – необходимое условие экономического развития"}
            />
        </div>
    );
}

export default Blog;