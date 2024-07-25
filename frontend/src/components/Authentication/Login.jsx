import Heading from '../common/Heading'
import "./authContent.scss"
import { useState } from 'react'
import { toast } from 'react-toastify'
import { BASE_URL } from '../../state'
import { useContext } from "react";
import { globalContext } from "../../state";

function Login(props) {
    const [loginState, setloginState] = useState({})
    const state = useContext(globalContext);


    async function submit(e) {
        e.preventDefault();
        if (!loginState.username || !loginState.password) {
            toast.error("Please, fill in all fields", { theme: "dark", toastId: 10 })
            return
        }
        await loginToAccount(e)
        setloginState({})
        e.target.reset()
    }

    async function loginToAccount(e) {
        const URL_address = BASE_URL + "/api/token/create/"

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginState)
        }

        try {
            const response = await fetch(URL_address, options)
            if (response.ok) {
                toast.success("Successfully logged in", { theme: "dark", toastId: 10 })
                const data = await response.json()
                console.log(data)
            } else {
                throw new Error("Failed to login")
            }
        } catch (e) {
            toast.error("Incorrect credentials", { theme: "dark", toastId: 10 })
            console.log(e)
        } finally {
            state.toggleAuthModal(e)
        }
    }

    function handleState(e) {
        const key = e.target.name
        const val = e.target.value
        setloginState({ ...loginState, [key]: val })
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
                        type="password" id="password" placeholder='Password' name='password'
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