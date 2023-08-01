import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import Nav from './Components/Nav'
import MainPage from './Components/MainPage.jsx'
import NoPage from './Components/NoPage.jsx'
import About from './Components/About.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<MainPage />} />
            <Route path="/About" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
