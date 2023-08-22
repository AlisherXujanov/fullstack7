import { useState, useEffect } from "react";
import cardStyles from "./card.scss";
import Items from './Items.jsx'
import { motion } from 'framer-motion'

function Card() {
    const CardKey = 'cards'
    const [cards, setCards] = useState(getLSfunction(CardKey));
    const [content, setContent] = useState("");
    const [error, setError] = useState("");

    const initialMotion = { transform: 'translateY(100vh)' }
    const animate = { transform: 'translateY(0)' }
    const exit = { transform: 'translateY(100vh)' }

    function showError(message) {
        setError(message);
    }

    function validated() {
        // this function is used to validate the input field
        // if there is smth wrong with it, we can show proper message here
        // and return false
        if (content.length < 5) {
            setError("Please enter at least 5 characters!")
            return false
        }
        const cardContentPattern = /^[a-zA-Z0-9 ]*$/;
        if (!cardContentPattern.test(content)) {
            setError("Invalid characters detected!")
            return false
        }
        const exists = cards.find(card => card.content === content)
        if (exists) {
            setError("This card title already exists!")
            return false
        }

        return true
    }

    function setContentFunction(value) {
        showError("")
        setContent(value)
    }

    function createCard(event) {
        event.preventDefault()

        if (!content) return showError("Please enter a title")
        else {
            if (validated()) {
                showError("")
                const newCard = {
                    id: Date.now(),
                    content: content
                }
                setCards([...cards, newCard]);
                setContent("")
            }
        }
    }

    function getLSfunction(key) {
        return JSON.parse(localStorage.getItem(key)) || []
    }
    function setLSfunction(key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    }

    useEffect(() => {
        setLSfunction(CardKey, cards)
    }, [cards])

    return (
        <motion.div 
            style={cardStyles}
            initial={initialMotion}
            animate={animate}
            exit={exit}
        >
            <h1>Cards</h1>

            <form id="create-card-form"
                onSubmit={e => { createCard(e) }}
            >
                <div className="form-control">
                    <label htmlFor="card-title">Card Title</label>
                    <input
                        id="card-title"
                        type="text"
                        value={content}
                        onChange={e => { setContentFunction(e.target.value) }}
                        placeholder="Title"
                    />
                    <p id="error-field">{error}</p>
                </div>

                <button>Submit</button>
            </form>


            <hr width='70%' style={{ margin: "0 auto" }} />

            <div>
                <Items 
                    elements={cards} 
                    elClass={'card'}
                    containerClass={"cards"}
                    itemsPerPage={6}
                />
                {/* {cards.map(card => {
                    return (
                        <div
                            key={card.id}
                            id={card.id + "-card"}
                            className="card"
                        >
                            <h3>{card.content}</h3>
                            <p>
                                <em>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam magni ex, nihil cum alias molestias.
                                </em>
                            </p>
                        </div>
                    )
                })} */}
            </div>
        </motion.div>
    );
}

export default Card;