import AllComponents from "./components/AllComponents"
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AllComponents />
      </BrowserRouter>
    </div>
  );
}

export default App;
