import './style.scss'
import { useReducer } from 'react'

// 1. Move everything into state.js
// RU: Перенести все в state.js
// 2. Import all global functions ONLY from state.js
// RU: Импортировать все глобальные функции ТОЛЬКО из state.js
// 3. Create useContext in state.js so that we could import global state from it
//    in every possible component
// RU: Создать useContext в state.js, чтобы мы могли 
// импортировать глобальное состояние//память из него во всех возможных компонентах

function Products(props) {
    

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
