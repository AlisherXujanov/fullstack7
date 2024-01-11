import { createContext } from "react"

const initialState = { // изначальное состояние
    lang: 'Рус',
    count: 0,
}
const globalContext = createContext(initialState)

export {
    initialState,
    globalContext
}