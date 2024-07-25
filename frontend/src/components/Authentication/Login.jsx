import Heading from '../common/Heading'
import "./authContent.scss"
import { useState } from 'react'
import { toast } from 'react-toastify'
import { BASE_URL } from '../../state'
import { useContext } from "react";
import { globalContext } from "../../state";

function Login(props) {
    const [regState, setRegState] = useState({})
    const state = useContext(globalContext);


    async function submit(e) {
        e.preventDefault();
        if (!regState.username || !regState.password1) {
            toast.error("Please, fill in all fields", { theme: "dark", toastId: 10 })
            return
        }
        await loginToAccount(e)
        setRegState({})
        e.target.reset()
    }

    async function loginToAccount(e) {
        const URL_address = BASE_URL + "users"
        const response = await fetch(URL_address)
        const users = await response.json()

        for (let user of users) {
            if (user.username === regState.username && user.password1 === regState.password1) {
                toast.success(
                    "Successfully logged in as " + regState.username,
                    { theme: "dark", toastId: 10 }
                )
                state.toggleAuthModal(e)
                return
            }
        }
        toast.error("Incorrect credentials", { theme: "dark", toastId: 10 })
        state.toggleAuthModal(e)
        return
    }

    function handleState(e) {
        const key = e.target.name
        const val = e.target.value
        setRegState({ ...regState, [key]: val })
    }

    return (
        <div className="auth-content-wrapper">
            <Heading size={2}>Login</Heading>


            <form onSubmit={submit}>
                <div className="form-control">
                    <label htmlFor="name">Username or e-mail</label>
                    <input
                        type="name" id="name" placeholder='Username or e-mail' name='username'
                        onChange={handleState}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password" id="password" placeholder='Password' name='password1'
                        onChange={handleState}
                    />
                </div>
                <div className="form-control">
                    <button className='warning-btn'>
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;