import { useParams } from "react-router-dom";
import BlogItems from "../../db/blog.json"

function BlogDetails() {
    const { id } = useParams()

    const blogItem = BlogItems.find(item => item.id === parseInt(id))

    return (
        <div className="blog-item">
            <h1>{blogItem.title}</h1>
        </div>
    );
}

export default BlogDetails;