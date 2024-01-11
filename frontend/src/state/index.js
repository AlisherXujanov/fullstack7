import { createContext } from "react"

const initialState = { // изначальное состояние
    lang: 'Рус'
}
const globalContext = createContext(initialState)

export {
    initialState,
    globalContext
}