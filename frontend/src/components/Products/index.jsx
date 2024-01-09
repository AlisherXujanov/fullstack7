import './style.scss'
import { useReducer } from 'react'

// RULES OF useReducer
// useReducer  is identical to useState, but allows us reduce the code 
// that we write to manage the state of our component
// RU: useReducer  идентичен useState, но позволяет нам уменьшить код,
// который мы пишем для управления состоянием нашего компонента

const initialState = { // изначальное состояние
    count: 0,                   // useState(0)
    color: 'red',               // useState('red')
    name: 'John',               // useState('John')
    transform: 'translateX(0)'  // useState('translateX(0)')
}
// payload == the information that we pass to the dispatch function
// state   == the current state of our component
function globalFunction(state, payload) {
    switch(payload.type) {
        case "increment":
            return { ...state, count: state.count + 1 }
        case "decrement":
            return { ...state, count: state.count - 1 }
        case "color":
            return { ...state, color: payload.color }
        case "name":
            return { ...state, name: payload.name }
        case "left":
            return { ...state, transform: "translateX(-200px)" }
        case "right":
            return { ...state, transform: "translateX(200px)" }
        case "middle":
            return { ...state, transform: "translateX(0)" }
        default:
            return state
    }
}

function Products(props) {
    const [state, dispatch] = useReducer(globalFunction, initialState)

    function inc(e) { dispatch({type: "increment"}) }

    function dec(e) { dispatch({type: "decrement"}) }

    const names = ['John', 'Bob', 'Alice', 'Kate']
    const colors = ['red', 'green', 'blue', 'yellow']
    const randomNumber = Math.floor(Math.random() * names.length)

    function setColor(e) { dispatch({type: 'color', color: colors[randomNumber]}) }
    function setName(e)  { dispatch({type: 'name',  name: names[randomNumber]}) }

    function setLeft(e)  { dispatch({type: "left"}) }
    function setMiddle(e) { dispatch({type: "middle"}) }
    function setRight(e) { dispatch({type: "right"}) }
    

    return (
        <div id="products-wrapper">
            <h2>Products</h2>
            <div>
                <p style={{
                    color: state.color, 
                    textAlign: 'center', 
                    transform: state.transform
                }}>
                    { state.count } by { state.name }
                </p>

                <br />
                <br />
                <button className='warning-btn' onClick={dec}>Decrement</button>
                <button className='warning-btn' onClick={inc}>Increment</button>
                <br />
                <br />
                <hr />
                <br />
                <button className='warning-btn' onClick={setColor}>Color</button>
                <button className='warning-btn' onClick={setName}>Name</button>
                <br />
                <br />
                <hr />
                <br />
                <button className='warning-btn' onClick={setLeft}>Left</button>
                <button className='warning-btn' onClick={setMiddle}>Middle</button>
                <button className='warning-btn' onClick={setRight}>Right</button>
            </div>
        </div>
    );
}

export default Products;
