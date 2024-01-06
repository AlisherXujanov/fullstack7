import './style.scss'
import { useState } from 'react'

// RULES OF HOOKS
// 1. Always import hook from 'react'
// 2. Always call it at the top level of the component

function Products(props) {
    const [counter, setCounter] = useState(0)

    return (
        <div id="products-wrapper">
            <h2>Products</h2>
            <p>{counter}</p>

            {/* 
                function(e) { 
                    setCounter(counter+1) 
                } 
            */}
            <button onClick={(e) => { setCounter(counter + 1) }}>
                Increment
            </button>
            <button onClick={(e) => { setCounter(counter - 1) }}>
                Decrement
            </button>
        </div>
    );
}

export default Products;
