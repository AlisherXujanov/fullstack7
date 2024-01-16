import './style.scss'
import { useContext, useEffect } from 'react'
import { globalContext } from '../../state'
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'


function Products(props) {
    const state = useContext(globalContext)

    // useEffect(callback, dependencyArray)
    useEffect(() => {
        console.log("Products component is rendered")
    }, [])
    // 1. Every time calls callback function when the component is rendered
    // RU: Каждый раз вызывает функцию обратного вызова при запуске компонента
    // 2. Can (if we want it) call cb function when the state changes
    // RU: Может (если мы хотим) вызывать функцию cb при изменении состояния памяти
    // NOTE: 
    // If we want to call cb function only once, 
    // we should pass empty array as second argument
    // RU: Если мы хотим вызвать функцию cb только один раз,
    // мы должны передать пустой массив в качестве второго аргумента

    function inc(e) { state.dispatch({ type: "increment" }) }
    function dec(e) { state.dispatch({ type: "decrement" }) }

    return (
        <div id="products-wrapper">
            <h2>Products</h2>
            <div>
                <p style={{
                    color: state.color,
                    textAlign: 'center',
                    transform: state.transform
                }}>
                    {state.count} by {state.name}
                </p>

                <br />
                <br />
                <button className='warning-btn' onClick={dec}>Decrement</button>
                <button className='warning-btn' onClick={inc}>Increment</button>
            </div>

            <hr />
            <hr />
            <div>
                {/* 
                    
                    HTTP or REQUEST METHODS
                    RU: МЕТОДЫ ЗАПРОСОВ
                
                        GET     =>  Брать данные
                        POST    =>  Создавать данные (Отправлять данные)
                        PUT     =>  Обновлять данные (Целиком)
                        PATCH   =>  Обновлять данные (Частично)
                        DELETE  =>  Удалять данные
                */}
                <Get url="https://jsonplaceholder.typicode.com/posts" params={{}}>
                    {(error, response, isLoading, makeRequest, axios) => {
                        if (error) {
                            return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
                        }
                        else if (isLoading) {
                            return (<div>Loading...</div>)
                        }
                        else if (response !== null) {
                            return (
                                <div>
                                    <button 
                                        className='warning-btn' 
                                        onClick={() => makeRequest({ params: { refresh: true } })}
                                    >
                                        Refresh
                                    </button>
                                    {
                                        response.data.map((post, index) => {
                                            return (
                                                <div key={index}>
                                                    <h2>{post.title}</h2>
                                                    <p>{post.body}</p>
                                                    <br />
                                                </div>
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
        </div>
    );
}

export default Products;
