import Navigation from "./components/Navigation"
import About from "./components/About"

function App() {
  return (
    <div className="App">
      <nav>
        <Navigation />
      </nav>

      <main>
        <About />
      </main>
    </div>
  );
}

export default App;
