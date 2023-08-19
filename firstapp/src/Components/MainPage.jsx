import Button from 'react-bootstrap/Button';
import MemoTest from './MemoTest';
import { useState } from 'react';

function MainPage() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>Main Page</h1>
            <h1>Count: {count}</h1>
            <Button 
                variant='outline-primary' 
                onClick={() => { setCount(count + 1) }}
            >
                Increment
            </Button>

            <MemoTest />
        </>
    );
}

export default MainPage;