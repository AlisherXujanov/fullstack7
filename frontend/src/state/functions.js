// RULES OF useReducer
// useReducer  is identical to useState, but allows us reduce the code 
// that we write to manage the state of our component
// RU: useReducer  идентичен useState, но позволяет нам уменьшить код,
// который мы пишем для управления состоянием нашего компонента


// payload == the information that we pass to the dispatch function
// state   == the current state of our component
function globalReducerFunction(state, payload) {
    switch (payload.type) {
        case "CHANGE_LANG":
            return { ...state, currentLanguage: payload.currentLanguage }
        case "increment":
            return { ...state, count: state.count + 1 }
        case "decrement":
            return { ...state, count: state.count - 1 }
        default:
            return state
    }
}


export {
    globalReducerFunction
}