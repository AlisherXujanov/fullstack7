import { useState } from "react";
import cardStyles from "./card.scss";

function Card() {
    const [cards, setCards] = useState([]);

    function createCard(event) {
        event.preventDefault()
        const newCard = {
            id: Date.now(),
            content: 'New Card'
        }
        setCards([...cards, newCard]);
    }

    return (
        <div style={cardStyles}>
            <h1>Cards</h1>

            <form id="create-card-form"
                onSubmit={e => { createCard(e) }}
            >
                <div className="form-control">
                    <label htmlFor="card-title">Card Title</label>
                    <input id="card-title" type="text" />
                </div>

                <button>Submit</button>
            </form>


            <hr width='70%' style={{margin: "0 auto"}} />

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