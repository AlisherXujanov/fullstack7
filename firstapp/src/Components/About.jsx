import { motion } from 'framer-motion'


function About() {
    const initialMotion = { transform: 'translateX(-100vw)' }
    const animate = { transform: 'translateX(0)' }
    const exit = { transform: 'translateX(100vw)' }

    return (
        <motion.div
            initial={initialMotion}
            animate={animate}
            exit={exit}
        >
            <h1>About Page</h1>
            <p>
                Далеко-далеко за словесными горами в стране гласных и согласных, живут рыбные тексты. Подзаголовок рукописи, рукопись дорогу послушавшись взобравшись обеспечивает рыбного. Рукопись, страна ему? Своего lorem запятой но жизни, переулка страна текста по всей?
            </p>
        </motion.div>
    );
}

export default About;