import "./style.scss"
import { useState } from "react"

// hooks - useState
// darkMode example
// onClick={...} with try-catch 

function About({ title, children }) {
    const [theme, setTheme] = useState(false)
    const [number, setNumber] = useState(0)

    const themeStyle = {
        backgroundColor: theme ? "#333" : "#fff",
        color: theme ? "#fff" : "black"
    }

    function toggle(e) {
        try {
            setTheme(!theme)
            // let response = "..."
            // console.log(response.data)
        } catch (e) {
            console.error(e.message)
        }
    }

    return (
        <div style={themeStyle} className="about-page">
            
            <h1>{ title }</h1>
            <div>
                { children }
            </div>

            <hr />
            {/* <button onClick={() => {setTheme(!theme)}}>
                Toggle theme
            </button> */}
            <button onClick={toggle}>
                Toggle theme
            </button>

            <hr />

            <h2>{number}</h2>
            <button onClick={() => {setNumber(number+1)}}>Increment +</button>
            <button onClick={() => {setNumber(number-1)}}>Decrement -</button>
        </div>
    );
}

export default About;