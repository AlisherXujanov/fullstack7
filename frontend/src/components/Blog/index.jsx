import "./style.scss"
import Heading from "../common/Heading"
import Item from "./Item.jsx"
import BlogItems from "../../db/blog.json"



function Blog(props) {
    return (
        <div id="blog-wrapper">
            <div style={{ padding: "0 0 20px 20px" }}>
                <Heading size={1.5} >Blog</Heading>
            </div>

            {
                BlogItems.map((item, index) => {
                    return (
                        <Item key={index} 
                            h2={item.h2}
                            id={item.id}
                        />
                    )
                })
            }
        </div>
    );
}

export default Blog;