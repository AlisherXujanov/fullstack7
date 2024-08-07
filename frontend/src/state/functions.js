// RULES OF useReducer
// useReducer  is identical to useState, but allows us reduce the code 
// that we write to manage the state of our component
// RU: useReducer  идентичен useState, но позволяет нам уменьшить код,
// который мы пишем для управления состоянием нашего компонента


// payload == the information that we pass to the dispatch function
// state   == the current state of our component
function globalReducerFunction(state, action) {
    switch (action.type) {
        case "CHANGE_LANG":
            return { ...state, currentLanguage: action.currentLanguage }
        case "SET_USER":
            return { ...state, currentUser: action.currentUser }
        case "increment":
            return { ...state, count: state.count + 1 }
        case "decrement":
            return { ...state, count: state.count - 1 }
        case "setJoke":
            return { ...state, joke: action.payload }
        case "toggleAuthModal":
            return { ...state, showAuth: !state.showAuth }
        default:
            return state
    }
}


export {
    globalReducerFunction
}