import Heading from '../common/Heading'
import "./authContent.scss"
import { useState } from 'react'
import { toast } from 'react-toastify'
import { BASE_URL } from '../../state'
import { useContext } from "react";
import { globalContext } from "../../state";

function Registration(props) {
    const [regState, setRegState] = useState({})
    const [errors, setErrors] = useState({})
    const state = useContext(globalContext);

    async function submit(e) {
        e.preventDefault();

        if (!regState.username || !regState.email || !regState.password1 || !regState.password2) {
            // if (!regState.username) { setErrors({...errors, 'username':true}) }
            // else { setErrors({...errors, 'username':false}) }

            // if (!regState.email) { setErrors({...errors, 'email':true}) }
            // else { setErrors({...errors, 'email':false}) }

            // if (!regState.password1) { setErrors({...errors, 'password1':true}) }
            // else { setErrors({...errors, 'password1':false}) }

            // if (!regState.password2) { setErrors({...errors, 'password2':true}) }
            // else { setErrors({...errors, 'password2':false}) }
            toast.error("Please, fill in all fields", { theme: "dark", toastId: 10 })
            return
        } else if (regState.password1 !== regState.password2) {
            toast.error("Passwords do not match", { theme: "dark", toastId: 10 })
            return
        }

        // fetch()    
        toast.success(
            "Successfully created a new account for " + regState.username,
            { theme: "dark", toastId: 10 }
        )
        await createNewAccount(e)
        setRegState({})
        e.target.reset()
        state.toggleAuthModal(e)
    }

    async function createNewAccount(e) {
        const URL_address = BASE_URL + "users"
        const response = await fetch(URL_address,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(regState)
            }
        )
        console.log(response)
        const data = await response.json()
        console.log(data)
    }

    function handleState(e) {
        const key = e.target.name
        const val = e.target.value
        setRegState({ ...regState, [key]: val })
    }

    return (
        <div className="auth-content-wrapper">
            <Heading size={2}>Registration</Heading>

            <form onSubmit={submit}>
                <div className="form-control">
                    <label htmlFor="name">Username</label>
                    <input
                        className={errors.username ? "input-error" : ""}
                        type="name" id="name" placeholder='Username' name='username'
                        onChange={handleState}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input
                        className={errors.email ? "input-error" : ""}
                        type="email" id="email" placeholder='Email' name='email'
                        onChange={handleState}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input
                        className={errors.password1 ? "input-error" : ""}
                        type="password" id="password" placeholder='Password' name='password1'
                        onChange={handleState}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="password-conf">Password confirmation</label>
                    <input
                        className={errors.password2 ? "input-error" : ""}
                        type="password" id="password-conf" placeholder='Password confirmation' name='password2'
                        onChange={handleState}
                    />
                </div>
                <div className="form-control">
                    <button className='warning-btn'>
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Registration;