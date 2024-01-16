import './style.scss'
import { useContext, useState } from 'react'
import { globalContext } from '../../state'
import Test from "./Test.jsx"

function Products(props) {
    // const state = useContext(globalContext)
    // function inc(e) { state.dispatch({type: "increment"}) }
    // function dec(e) { state.dispatch({type: "decrement"}) }
    const [count, setCount] = useState(0)

    return (
        <div id="products-wrapper">
            <h2>Products</h2>
            <div>
                {/* <p style={{
                    color: state.color, 
                    textAlign: 'center', 
                    transform: state.transform
                }}>
                    { state.count } by { state.name }
                </p> */}

                <p>{count}</p>

                <br />
                <br />
                <button 
                    className='warning-btn' 
                    onClick={() => {setCount(count - 1)}}
                >
                    Decrement
                </button>
                <button 
                    className='warning-btn' 
                    onClick={() => {setCount(count + 1)}}
                >
                    Increment
                </button>

                <hr />
                <hr />
                <Test />
            </div>
        </div>
    );
}

export default Products;
