import { useParams } from "react-router-dom"
import BlogItems from "../../db/blog.json"
import './blogDetails.scss'

import Blog1 from "../../assets/images/blog-1.png"
import Blog2 from "../../assets/images/blog-2.png"
import Blog3 from "../../assets/images/blog-3.png"
import Blog4 from "../../assets/images/img2.png"
import Blog5 from "../../assets/images/img3.png"

import { useEffect } from 'react'

function BlogDetails() {
    const { id } = useParams()
    const images = [Blog1, Blog2, Blog3, Blog4, Blog5]

    const blogItem = BlogItems.find(item => item.id === parseInt(id))
    const shortTitle = blogItem.title.split(" ").slice(0, 3).join(" ")

    let img_index = null
    if (blogItem.id < images.length) { img_index = blogItem.id } 
    else { img_index = blogItem.id % images.length }

    function scrollUpSmoothly() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    useEffect(() => {
        scrollUpSmoothly()
    }, [])

    return (
        <div className="blog-item">
            <p className="blog-nav">Blog / {shortTitle}</p>
            <h1>{blogItem.title}</h1>
            <p className="blog-author">
                <span className="name">{blogItem.author},</span>
                <span className="date">{blogItem.date}</span>
            </p>
            <img src={images[img_index]} alt=""  width={"100%"}/>
            <p className="subtitle-1">
                {blogItem.subtitle1}
            </p>
            <p className="subtitle-2">
                {blogItem.subtitle2}
            </p>

        </div>
    );
}

export default BlogDetails;