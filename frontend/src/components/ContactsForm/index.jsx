import "./style.scss"
import Rectangle from "./Rectangle.png"
import { useState } from "react"

function ContactsForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        number: "",
        notes: ""
    })

    function fireSetForm(e) {
        let key = e.target.name
        let val = e.target.value
        setForm({...form, [key]: val})
    }

    function submit(e) {
        e.preventDefault()
    }

    return (
        <div id="contacts-form-wrapper">
            <h2>{form.email}</h2>

            <form onSubmit={submit}>
                <input id="full-name-input" type="text" placeholder="Полное имя" name='name' /> 
                <div>
                    <input id="email-input" type="email" placeholder="Почта" 
                        onChange={fireSetForm} name='email'
                    />
                    <input id="number-input" type="number" placeholder="Номер телефона" name='number' />
                </div>
                <textarea 
                    id="description-area" 
                    cols="10" 
                    rows="8"
                    placeholder="Текст сообщения"
                    name='notes'
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