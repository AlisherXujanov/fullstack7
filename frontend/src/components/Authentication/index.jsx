import Registration from './Registration.jsx';
import Login from './Login.jsx';
import { useState } from 'react';
import './style.scss'
import { useContext } from "react";
import { globalContext } from "../../state";

const URL_address = "http://localhost:7070/users"

function Authentication(props) {
    const [isRegistred, setIsRegistred] = useState(true)
    const state = useContext(globalContext);


    return (
        <div id='authentication-wrapper'>
            <section className='content'>
                <button className="close-btn" onClick={state.toggleAuthModal}>&times;</button>  
                {
                    isRegistred ? <Login /> : <Registration />
                }
                <button className='toggle-auth' onClick={() => setIsRegistred(!isRegistred)}>
                    Toggle Registration
                </button>
            </section>
        </div>
    );
}

export default Authentication;