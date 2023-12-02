import "./style.scss"


// PROPS   =>  are the items that are passed through 
//         the component when it is called 
//         (as parameters in simple functions)
// RU:     =>  это элементы, которые передаются через
//         компонент при его вызове
//         (как параметры в простые функции)
// 


function About({ title, children }) {
    return (
        <div className="about-page">
            <h1>{ title }</h1>
            <div>
                { children }
            </div>
        </div>
    );
}

export default About;