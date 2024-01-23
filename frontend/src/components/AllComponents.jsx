import { useLocation, Route, Routes } from 'react-router-dom'
import Navigation from "./Navigation"
import About from "./About"
import Blog from "./Blog"
import BlogDetails from "./Blog/Details.jsx"
import NoPage from "./NoPage"
import Products from "./Products"
import Contacts from "./Contacts"
import { useReducer } from 'react'
import { globalContext, initialState } from '../state'
import { globalReducerFunction } from '../state/functions.js'

function AllComponents(props) {
    const location = useLocation()
    const [state, dispatch] = useReducer(globalReducerFunction, initialState)
    state.dispatch = dispatch

    return (
        <>
            <globalContext.Provider value={state}>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Navigation />} >
                        <Route index element={<About />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:id" element={<BlogDetails />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </globalContext.Provider>
        </>
    );
}

export default AllComponents;