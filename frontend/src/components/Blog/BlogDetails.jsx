import { useParams } from "react-router-dom"
import { useEffect } from "react"
import BlogItems from '../../db/blog.json'
import "./blogDetails.scss"

import Blog1 from "../../assets/images/blog-1.png"
import Blog2 from "../../assets/images/blog-2.png"
import Blog3 from "../../assets/images/blog-3.png"
import Blog4 from "../../assets/images/img2.png"
import Blog5 from "../../assets/images/img3.png"

function BlogDetails(props) {
    const { id } = useParams()

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])

    const item = BlogItems.find(item => item.id === parseInt(id))
    const images = [Blog1, Blog2, Blog3, Blog4, Blog5]
    let imgIndex = null
    if (item.id < images.length) { imgIndex = item.id }
    else { imgIndex = item.id % images.length }

    const subtitle = item.title.split(" ").slice(0, 3).join(" ")

    return (
        <div className="blog-details-wrapper">
            <p className="nav-subtitle">
                Blog / {subtitle}
            </p>
            <h1>{item.title}</h1>

            <h3 className="author">
                <span className="name">{item.author},</span>
                <span className="date">{item.date}</span>
            </h3>
            <img
                src={images[imgIndex]}
                alt={"Blog-" + item.id}
                className={"blog-" + item.id}
                height={400}
            />
            <p className="subtitle-1">{item.subtitle1}</p>
            <p className="subtitle-2">{item.subtitle2}</p>
        </div>
    );
}

export default BlogDetails;