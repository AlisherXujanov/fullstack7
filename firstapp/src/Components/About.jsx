import { motion } from 'framer-motion'
import { useContext, createContext } from 'react'
const context = createContext()


function C2(props) {
    return (
        <>
            <h1>Component 2</h1>
            <C3 title={props.title} />
        </>
    )
}
function C3(props) {
    return (
        <>
            <h1>Component 3</h1>
            <C4 title={props.title} />
        </>
    )
}
function C4(props) {
    return (
        <>
            <h1>Component 4</h1>
            <C5 title={props.title} />
        </>
    )
}
function C5(props) {
    const title = useContext(context)

    return (
        <>
            <h1>Component 5</h1>
            <u>
                <b>{title}</b>
            </u>
        </>
    )
}





function About() {
    const initialMotion = { transform: 'translateX(-100vw)' }
    const animate = { transform: 'translateX(0)' }
    const exit = { transform: 'translateX(100vw)' }

    const title = 'This is prop drilling'
    return (
        <context.Provider value={title}>
            <motion.div
                initial={initialMotion}
                animate={animate}
                exit={exit}
            >
                <h1>About Page</h1>
                <p>
                    Далеко-далеко за словесными горами в стране гласных и согласных, живут рыбные тексты. Подзаголовок рукописи, рукопись дорогу послушавшись взобравшись обеспечивает рыбного. Рукопись, страна ему? Своего lorem запятой но жизни, переулка страна текста по всей?
                </p>
                <C2 />
            </motion.div>
        </context.Provider>
    );
}

export default About;