import './style.scss'
import Spinner from "../common/Spinner"
import { globalContext } from '../../state'
import { useContext, useEffect } from 'react'
import { Get } from 'react-axios'

const URL = 'https://official-joke-api.appspot.com/random_joke'

function Products(props) {
    const state = useContext(globalContext)

    useEffect(() => {
        fetchJoke()
        // NOTE: This next line is a hack to get rid of the warning messages in the console.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function fetchJoke() {
        // fetch(URL)
        // .then(res => res.json())
        // .then(data => setstate({ type: 'setJoke', payload: data }))
        const respone = await fetch(URL)
        state.dispatch({ type: 'setJoke', payload: await respone.json() })
    }

    const punchlineStyle = {
        color: 'green',
        textAlign: 'right'
    }

    return (
        <div id="products-wrapper">
            <h2>Products</h2>
            <div className="container">
                <h3>{state.count}</h3>
                <button className="warning-btn"
                    onClick={() => state.dispatch({ type: 'increment' })}
                >
                    Increment
                </button>
            </div>

            <div className="container">
                <button className="warning-btn" onClick={fetchJoke}>
                    Get New Joke
                </button>
                <br />
                <br />
                <h3>{state.joke.setup}</h3>
                <h3 style={punchlineStyle}>{state.joke.punchline}</h3>
            </div>

            <div className="container">
                <Get url={URL} params={{}}>
                    {(error, response, isLoading, makeRequest, axios) => {
                        if (error) {
                            return (
                                <div>
                                    Something bad happened: {error.message}
                                    <button className='warning-btn'
                                        onClick={() => makeRequest({ params: { reload: true } })}
                                    >
                                        Retry
                                    </button>
                                </div>
                            )
                        }
                        else if (isLoading) {
                            return (
                                <div>
                                    <Spinner />
                                </div>
                            )
                        }
                        else if (response !== null) {
                            return (
                                <div>
                                    <h3>{response.data.setup}</h3>
                                    <h3 style={punchlineStyle}>{response.data.punchline}</h3>
                                    <button className='warning-btn' onClick={() => makeRequest({ params: { refresh: true } })}>
                                        Refresh
                                    </button>
                                </div>
                            )
                        }
                        return (<div>Default message before request is made.</div>)
                    }}
                </Get>
            </div>
        </div>
    );
}

export default Products;
