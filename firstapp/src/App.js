import Heading from './Components/Heading.jsx'
import Nav from './Components/Nav'
import { useState } from 'react'

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  function changeTheme() {
    setDarkTheme(!darkTheme)
  }

  return (
    <div class={darkTheme ? 'dark-theme' : ''} className="App">
      <button onClick={changeTheme}>
        Change Theme
      </button>

      <Nav />
      <Heading>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, nobis sequi. Modi doloribus maiores voluptates minus, facilis autem tempore? Repudiandae quae ratione natus incidunt, vitae ipsum tenetur esse id eaque!</p>
      </Heading>
    </div>
  );
}

export default App;
