import { useState } from "react";
import cardStyles from "./card.scss";

function Card() {
    const [cards, setCards] = useState([]);
    const [content, setContent] = useState("");

    function createCard(event) {
        event.preventDefault()

        if (!content) return alert("Please enter a card title first!")

        const newCard = {
            id: Date.now(),
            content: content
        }
        setCards([...cards, newCard]);
        setContent("")
    }

    return (
        <div style={cardStyles}>
            <h1>Cards</h1>

            <form id="create-card-form"
                onSubmit={e => { createCard(e) }}
            >
                <div className="form-control">
                    <label htmlFor="card-title">Card Title</label>
                    <p>
                        <b>{content}</b>
                    </p>
                    <input
                        id="card-title"
                        type="text"
                        value={content}
                        onChange={e => { setContent(e.target.value) }}
                        placeholder="Title"
                    />
                    <p id="error-field"></p>
                </div>

                <button>Submit</button>
            </form>


            <hr width='70%' style={{ margin: "0 auto" }} />

            <div className="cards">
                {cards.map(card => {
                    return (
                        <div
                            key={card.id}
                            id={card.id + "-card"}
                            className="card"
                        >
                            <h3>{card.content}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Card;