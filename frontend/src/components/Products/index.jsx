import './style.scss'
import { useState } from 'react'

// RULES OF HOOKS
// 1. Always import hook from 'react'
// 2. Always call it at the top level of the component

function Products(props) {
    const [state, setState] = useState({
        count: 0,
        color: 'red',
        name: 'John',
        transform: 'translateX(0)'
    })

    function inc(e) {
        setState({
            count: state.count + 1,
            color: 'blue',
            name: 'Joseph',
            transform: 'translateX(-150px)'
        })
    }
    function dec(e) {
        setState({
            count: state.count - 1,
            color: 'yellow',
            name: 'Martha',
            transform: 'translateX(150px)'
        })
    }

    return (
        <div id="products-wrapper">
            <h2>Products</h2>
            <div style={{
                color: state.color, 
                textAlign: 'center', 
                transform:state.transform
            }}>
                { state.count } by { state.name }

                <br />
                <br />
                <button onClick={inc}>Increment</button>
                <button onClick={dec}>Decrement</button>
            </div>

            {/* 
                function(e) { 
                    setCounter(counter+1)
                } 
            */}
            
        </div>
    );
}

export default Products;
