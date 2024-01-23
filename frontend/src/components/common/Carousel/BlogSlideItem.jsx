import "./slideStyle.scss"
import Blog1 from "../../../assets/images/blog-1.png"
import Blog2 from "../../../assets/images/blog-2.png"
import Blog3 from "../../../assets/images/blog-3.png"
import Blog4 from "../../../assets/images/img2.png"
import Blog5 from "../../../assets/images/img3.png"



function BlogSlideItem(props) {
    const images = [Blog1, Blog2, Blog3, Blog4, Blog5]

    let img_index = null

    if (props.info.id < images.length) { img_index = props.info.id } 

    else { img_index = props.info.id % images.length }

    return (
        <div className="slide-content">
            <img src={images[img_index]} alt="" />
            <h3>{props.info.title}</h3>
            <button className="warning-btn">
                Подробнее
            </button>
        </div>
    );
}

export default BlogSlideItem;