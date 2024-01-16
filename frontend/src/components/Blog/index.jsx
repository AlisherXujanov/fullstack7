import "./style.scss"
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
import Heading from "../common/Heading"
import Item from "./Item.jsx"
import Blog1 from "../../assets/images/blog-1.png"
import Blog2 from "../../assets/images/blog-2.png"
import Blog3 from "../../assets/images/blog-3.png"

function Blog(props) {
    return (
        <div id="blog-wrapper">
            <div style={{ padding: "0 0 20px 20px" }}>
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

            <Get url="https://reqres.in/api/users?page=2" params={{}}>
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
            </Get>
        </div>
    );
}

export default Blog;