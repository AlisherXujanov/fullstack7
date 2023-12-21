import './style.scss'
import Heading from '../common/Heading';

function Contacts(props) {
    function submit(e) {
        e.preventDefault()
    }

    return (
        <div id="contacts-wrapper">
            <div className="left">
                <Heading size={1.6}>Контакты</Heading>
                <div className='info'>
                    <h4>Задайте нам любой вопрос</h4>
                    <p>+998 33 4747477</p>
                </div>
                <div className='info'>
                    <h4>Электронная почта</h4>
                    <p>alisherxujanov163@gmail.com</p>
                </div>
                <div className='info'>
                    <h4>Юридический адрес</h4>
                    <p>050040/A15E3H4, проспект Изучай-React, 24/7, 2 этаж, Samarkand, Uzbekistan Z05T3D0, проспект Мангилик Ел, 55/20, Офисы 345-346, Астана, Казахстан</p>
                </div>
            </div>
            <div className="right">
                <form onSubmit={submit}>
                    <input type="text" placeholder='Полное Имя' required />
                    <input type="email" placeholder='Email' required />
                    <input type="text" placeholder='Телефон' required />
                    <input className='submit-btn' type='button' value="Отправить"></input>
                </form>
            </div>
        </div>
    );
}

export default Contacts;
