import "./style.scss"
import { useState } from "react"

// hooks - useState
// darkMode example
// onClick={...} with try-catch 

function About({ title, children }) {
    const [theme, setTheme] = useState(false)


    return (
        <div className="about-page">
            <h2>{theme}</h2>
            
            <h1>{ title }</h1>
            <div>
                { children }
            </div>
        </div>
    );
}

export default About;