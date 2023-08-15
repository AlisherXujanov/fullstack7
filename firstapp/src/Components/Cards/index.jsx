import { useState } from "react";
import cardStyles from "./card.scss";
import Items from './Items.jsx'

function Card() {
    const [cards, setCards] = useState([]);
    const [content, setContent] = useState("");
    const [error, setError] = useState("");

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

    return (
        <div style={cardStyles}>
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

            <div className="cards">
                <Items elements={cards} />
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
        </div>
    );
}

export default Card;