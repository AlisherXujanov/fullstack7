import Button from 'react-bootstrap/Button';
import MemoTest from './MemoTest';
import { useState, useReducer } from 'react';
import { motion } from 'framer-motion'

const initialState = { count: 0 }
function reducer(state, action) {
    // {type: "increment"}
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
    }
}

function MainPage() {
    // const [count, setCount] = useState(0)

    const [state, dispatch] = useReducer(reducer, initialState)


    const initialMotion = { transform: 'translateY(-100vw)' }
    const animate = { transform: 'translateY(0)' }
    const exit = { transform: 'translateY(100vw)' }

    return (
        <motion.div initial={initialMotion} animate={animate} exit={exit} >
            <h1>Main Page</h1>
            <h1>Count: {state.count}</h1>
            <Button
                variant='primary'
                onClick={() => { dispatch({type: "increment"}) }}
            >
                Increment
            </Button>

            <MemoTest />
        </motion.div>
    );
}

export default MainPage;