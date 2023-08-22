import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './Header'
import MainPage from './MainPage.jsx'
import NotFound from './NotFound'
import About from './About.jsx'
import Cards from './Cards'

export default function RoutesHome() {
    const location = useLocation()
    // This location is the location of the current page
    // Every time it gets updated, the Routes component will re-render

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Header />}>
                    <Route index element={<MainPage />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Cards" element={<Cards />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </AnimatePresence>
    )
}
