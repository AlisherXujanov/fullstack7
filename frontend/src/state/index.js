import { createContext } from "react"

const initialState = { // изначальное состояние
    count: 0,                   // useState(0)
    color: 'red',               // useState('red')
    name: 'John',               // useState('John')
    transform: 'translateX(0)'  // useState('translateX(0)')
}
const globalContext = createContext(initialState)

export {
    initialState,
    globalContext
}