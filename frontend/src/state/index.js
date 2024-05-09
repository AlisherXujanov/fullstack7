import { createContext } from "react"

const BASE_URL = "http://localhost:7070/"

const initialState = { // изначальное состояние
    currentLanguage: 'en',
    count: 0,
    joke: {},
    showAuth: false,
}
const globalContext = createContext(initialState)

export {
    initialState,
    globalContext,
    BASE_URL
}