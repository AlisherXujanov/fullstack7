import Blog1 from "../../assets/images/blog-1.png"
import Blog2 from "../../assets/images/blog-2.png"
import Blog3 from "../../assets/images/blog-3.png"
import Blog4 from "../../assets/images/img2.png"
import Blog5 from "../../assets/images/img3.png"
import { Link } from "react-router-dom"

function BlogLayout(props) {
    const images = [Blog1, Blog2, Blog3, Blog4, Blog5]

    let imgIndex = null
    if (props.item.id < images.length) {
        imgIndex = props.item.id
    } else {
        imgIndex = props.item.id % images.length
    }

    return (
        <div className={"blog blog-" + props.item.id}>
            <img 
                src={images[imgIndex]} 
                alt={"Blog-" + props.item.id}
                className={"blog-" + props.item.id + "-img"}
                width={"100%"}
                height={200}
            />
            <h3>{props.item.title}</h3>
            

            <Link to={"/blog/details/" + props.item.id}>
                <button className="warning-btn">
                    Подробнее
                </button>
            </Link>
        </div>
    );
}

export default BlogLayout;