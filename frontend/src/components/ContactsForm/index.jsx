import "./style.scss"
import Rectangle from "./Rectangle.png"
import { useState } from "react"
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

function ContactsForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        number: "",
        notes: ""
    })

    const templateParams = {
        from_name: form.name,
        email: form.email,
        number: form.number,
        message: form.notes
    };

    function fireSetForm(e) {
        let key = e.target.name
        let val = e.target.value
        setForm({ ...form, [key]: val })
    }

    function submit(e) {
        e.preventDefault()
        emailjs.send('...', '...', templateParams, '...')
            .then((response) => {
                toast.success(`Successfully sent!`, {
                    theme: "dark"
                })
            }, (err) => {
                toast.error(`Ooops!  Something went wrong. Tyr again!`, {
                    theme: "dark"
                })
            });
        e.target.reset()
    }

    return (
        <div id="contacts-form-wrapper">
            <form onSubmit={submit}>
                <input
                    id="full-name-input" type="text"
                    placeholder="Полное имя" name='name'
                    onChange={fireSetForm} required
                />
                <div>
                    <input
                        id="email-input" type="email" placeholder="Почта"
                        onChange={fireSetForm} name='email' required
                    />
                    <input
                        id="number-input" type="number" placeholder="Номер телефона"
                        onChange={fireSetForm} name='number' required
                    />
                </div>
                <textarea
                    id="description-area"
                    cols="10"
                    rows="8"
                    placeholder="Текст сообщения"
                    name='notes'
                    onChange={fireSetForm}
                    required
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