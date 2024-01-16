import './style.scss'
import { useContext, useEffect } from 'react'
import { globalContext } from '../../state'

function Products(props) {
    const state = useContext(globalContext)
    
    function inc(e) { state.dispatch({type: "increment"}) }

    function dec(e) { state.dispatch({type: "decrement"}) }



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
            </div>
        </div>
    );
}

export default Products;
