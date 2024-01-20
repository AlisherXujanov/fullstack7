import "./slideStyle.scss"
import Blog1 from "../../../assets/images/blog-1.png"
import Blog2 from "../../../assets/images/blog-2.png"
import Blog3 from "../../../assets/images/blog-3.png"


function BlogSlideItem(props) {
    // "id"   // "title"   // "author"   // "date"   // "subtitle1"   // "subtitle2"
    const images = [Blog1, Blog2, Blog3]

    let img_index = null
    
    if (props.info.id < 3) { img_index = props.info.id } 

    else { img_index = props.info.id % 3 }

    return (
        <div className="slide-content">
            <img src={images[img_index]} alt="" />
            <h2>{props.info.title}</h2>
            <button className="warning-btn">
                Подробнее
            </button>
        </div>
    );
}

export default BlogSlideItem;