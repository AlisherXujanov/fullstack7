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
        password: '',
        re_password: ''
    })
    const [errors, setErrors] = useState({})
    const state = useContext(globalContext);

    async function submit(e) {
        e.preventDefault();

        if (!regState.username || !regState.email || !regState.password || !regState.re_password) {
            // if (!regState.username) { setErrors({...errors, 'username':true}) }
            // else { setErrors({...errors, 'username':false}) }

            // if (!regState.email) { setErrors({...errors, 'email':true}) }
            // else { setErrors({...errors, 'email':false}) }

            // if (!regState.password) { setErrors({...errors, 'password':true}) }
            // else { setErrors({...errors, 'password':false}) }

            // if (!regState.re_password) { setErrors({...errors, 're_password':true}) }
            // else { setErrors({...errors, 're_password':false}) }
            toast.error("Please, fill in all fields", { theme: "dark", toastId: 10 })
            return
        } else if (regState.password !== regState.re_password) {
            toast.error("Passwords do not match", { theme: "dark", toastId: 10 })
            return
        }
        try {
            if (await createNewAccount(e)) {
                toast.success(
                    "Successfully created a new account for " + regState.username,
                    { theme: "dark", toastId: 10 }
                )
            } else {
                throw new Error("Failed to create a new account")
            }
        } catch (e) {
            toast.error("Failed to create a new account", { theme: "dark", toastId: 10 })
        } finally {
            e.target.reset()
            state.toggleAuthModal(e)
        }
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
        const data = await response.json()
        console.log(data)
        console.log(response)
        // state.

        return response.ok
    }

    function handleState(e) {
        const key = e.target.name
        const val = e.target.value
        setRegState({ ...regState, [key]: val })
    }

    return (
        <div className="auth-content-wrapper">
            <Heading size={2}>Sign up</Heading>

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
                        className={errors.password ? "input-error" : ""}
                        type="password" id="password" placeholder='Password' name='password'
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