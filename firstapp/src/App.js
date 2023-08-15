import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Components/Header'
import MainPage from './Components/MainPage.jsx'
import NotFound from './Components/NotFound'
import About from './Components/About.jsx'
import Cards from './Components/Cards'
import TestPaginate from './Components/TestPaginate.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<MainPage />} />
            <Route path="/About" element={<About />} />
            <Route path="/Cards" element={<Cards />} />
            <Route path="/Paginate" element={<TestPaginate />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
