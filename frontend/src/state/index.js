import { createContext } from "react"

const initialState = { // изначальное состояние
    currentLanguage: 'en',
    count: 0,
}
const globalContext = createContext(initialState)

export {
    initialState,
    globalContext
}