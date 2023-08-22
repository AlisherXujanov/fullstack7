import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import RoutesHome from './Components/Routes.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RoutesHome />
      </BrowserRouter>
    </div>
  );
}

export default App;
