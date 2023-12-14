import { useLocation, Route, Routes } from 'react-router-dom'
import Navigation from "./Navigation"
import About from "./About"
import Blog from "./Blog"
import NoPage from "./NoPage"
import Products from "./Products"
import Contacts from "./Contacts"

function AllComponents(props) {
    const location = useLocation()
    return (
        <>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Navigation />} >
                    <Route index element={<About />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default AllComponents;