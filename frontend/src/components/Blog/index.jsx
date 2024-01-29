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


            {/* <Get url="https://reqres.in/api/users?page=2" params={{}}>
                {(error, response, isLoading, makeRequest, axios) => {
                    if (error) {
                        return (
                            <div>
                                Something bad happened: {error.message} 
                                <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button>
                            </div>)
                    }
                    else if (isLoading) {
                        return (<div>Loading...</div>)
                    }
                    else if (response !== null) {
                        return (
                            <div>
                                <button className="warning-btn" onClick={() => makeRequest({ params: { refresh: true } })}>
                                    Refresh
                                </button>
                                {
                                    response.data.data.map((user, index) => {
                                        return (
                                            <Item key={index} img={user.avatar}
                                                h2={user.email}
                                            />
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                    return (<div>Default message before request is made.</div>)
                }}
            </Get> */}
        </div>
    );
}

export default Blog;