import { createContext } from "react"

const BASE_URL = "http://127.0.0.1:8000"

const initialState = { // изначальное состояние
    currentLanguage: 'en',
    currentUser: {},
    
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