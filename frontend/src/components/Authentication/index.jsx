import Registration from './Registration.jsx';
import Login from './Login.jsx';
import { useState } from 'react';
import './style.scss'
import { useContext } from "react";
import { globalContext } from "../../state";

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

                <p>
                    <small>
                        {isRegistred ? 'Don\'t have an account?' : 'Already have an account?'}
                        <button style={{ cursor: 'pointer' }} className='toggle-auth' onClick={() => setIsRegistred(!isRegistred)}>
                            {isRegistred ? 'Create an account' : 'Log in'}
                        </button>
                    </small>
                </p>
            </section>
        </div>
    );
}

export default Authentication;