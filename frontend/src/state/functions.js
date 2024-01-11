// RULES OF useReducer
// useReducer  is identical to useState, but allows us reduce the code 
// that we write to manage the state of our component
// RU: useReducer  идентичен useState, но позволяет нам уменьшить код,
// который мы пишем для управления состоянием нашего компонента


// payload == the information that we pass to the dispatch function
// state   == the current state of our component
function globalReducerFunction(state, payload) {
    switch (payload.type) {
        case "increment":
            return { ...state, count: state.count + 1 }
        case "decrement":
            return { ...state, count: state.count - 1 }
        case "color":
            return { ...state, color: payload.color }
        case "name":
            return { ...state, name: payload.name }
        case "left":
            return { ...state, transform: "translateX(-200px)" }
        case "right":
            return { ...state, transform: "translateX(200px)" }
        case "middle":
            return { ...state, transform: "translateX(0)" }
        default:
            return state
    }
}


export {
    globalReducerFunction
}