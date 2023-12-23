import "./style.scss"
import Rectangle from "./Rectangle.png"

function ContactsForm() {
    function submit(e) {
        e.preventDefault()
    }
    return (
        <div id="contacts-form-wrapper">
            <form onSubmit={submit}>
                <input id="full-name-input" type="text" placeholder="Полное имя" /> 
                <div>
                    <input id="email-input" type="email" placeholder="Почта" />
                    <input id="number-input" type="number" placeholder="Номер телефона" />
                </div>
                <textarea 
                    id="description-area" 
                    cols="10" 
                    rows="8"
                    placeholder="Текст сообщения"
                ></textarea>
                <button className="warning-btn">
                    Получить консультацию
                </button>
            </form>
            <img src={Rectangle} alt="Rectangle" width={"100%"} height={"100%"} />
        </div>
    );
}

export default ContactsForm;