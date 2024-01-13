import { createContext } from "react"

const initialState = { // изначальное состояние
    currentLanguage: 'ru',
    count: 0,
}
const globalContext = createContext(initialState)

export {
    initialState,
    globalContext
}