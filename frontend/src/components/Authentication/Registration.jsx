import Heading from '../common/Heading'
import "./authContent.scss"
import { useState } from 'react'
import { toast } from 'react-toastify'
import { BASE_URL } from '../../state'
import { useContext } from "react";
import { globalContext } from "../../state";

function Registration(props) {
    const [regState, setRegState] = useState({
        username: '',
        email: '',
        password1: '',
        re_password: ''
    })
    const [errors, setErrors] = useState({})
    const state = useContext(globalContext);

    async function submit(e) {
        e.preventDefault();

        if (!regState.username || !regState.email || !regState.password1 || !regState.re_password) {
            // if (!regState.username) { setErrors({...errors, 'username':true}) }
            // else { setErrors({...errors, 'username':false}) }

            // if (!regState.email) { setErrors({...errors, 'email':true}) }
            // else { setErrors({...errors, 'email':false}) }

            // if (!regState.password1) { setErrors({...errors, 'password1':true}) }
            // else { setErrors({...errors, 'password1':false}) }

            // if (!regState.re_password) { setErrors({...errors, 're_password':true}) }
            // else { setErrors({...errors, 're_password':false}) }
            toast.error("Please, fill in all fields", { theme: "dark", toastId: 10 })
            return
        } else if (regState.password1 !== regState.re_password) {
            toast.error("Passwords do not match", { theme: "dark", toastId: 10 })
            return
        }
        try {
            await createNewAccount(e)
            state.

            toast.success(
                "Successfully created a new account for " + regState.username,
                { theme: "dark", toastId: 10 }
            )
        } catch (e) {
            console.log(e)
            return
        }
        e.target.reset()
        state.toggleAuthModal(e)
    }

    async function createNewAccount(e) {
        const URL_address = BASE_URL + "/auth/users/"
        const response = await fetch(URL_address,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // "Authorization": "Token ..."
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
                        className={errors.re_password ? "input-error" : ""}
                        type="password" id="password-conf" placeholder='Password confirmation' name='re_password'
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