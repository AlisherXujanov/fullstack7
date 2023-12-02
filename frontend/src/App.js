import Navigation from "./components/Navigation"
import About from "./components/About"

function App() {
  // const x = 1+1 == 2  ? 'malenkiy' : 'NE malenkiy'
  // let a = {
  //     x: 1,
  //     y: {
  //       z: 4
  //     }
  // }
  // a.y.z 
  // a.y?.z
  // ... || ...
  // [] && ...

  return (
    <div className="App">
      <nav>
        <Navigation />
      </nav>

      <main>
        <About title={"About page ..."} >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, temporibus, recusandae veniam, doloribus minima officiis debitis nihil error est illum magni molestias vitae facilis laudantium. Incidunt saepe tenetur aliquam ullam.</p>
        </About>
      </main>
    </div>
  );
}

export default App;
