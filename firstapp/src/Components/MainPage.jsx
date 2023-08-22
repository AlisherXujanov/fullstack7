import Button from 'react-bootstrap/Button';
import MemoTest from './MemoTest';
import { useState } from 'react';
import { motion } from 'framer-motion'



function MainPage() {
    const [count, setCount] = useState(0)

    const initialMotion = { transform: 'translateY(-100vw)' }
    const animate = { transform: 'translateY(0)' }
    const exit = { transform: 'translateY(100vw)' }

    return (
        <motion.div
            initial={initialMotion}
            animate={animate}
            exit={exit}
        >
            <h1>Main Page</h1>
            <h1>Count: {count}</h1>
            <Button 
                variant='outline-primary' 
                onClick={() => { setCount(count + 1) }}
            >
                Increment
            </Button>

            <MemoTest />
        </motion.div>
    );
}

export default MainPage;