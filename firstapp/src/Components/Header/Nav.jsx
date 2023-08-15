import style from './nav.scss'
import Theme from '../Theme'
import audioFile from '../../Assets/click.mp3'
import clickSound from '../../Assets/link_click.mp3'
import logo from '../../Assets/images/logo.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'


function Nav() {
    const [theme, setTheme] = useState(false)

    function playClickSound() {
        const sound = new Audio(clickSound);
        sound.play();
    }
    function changeTheme() {
        const audio = new Audio(audioFile)
        audio.play()
        return setTheme(!theme)
    }

    return (
        <nav className={theme ? "dark-theme" : "light-theme"} style={style}>
            <a id="logo" href="#">
                <img src={logo} width='30' height={18} />
            </a>

            <a id='theme-link' href="#" onClick={changeTheme}>
                <Theme theme={theme} />
            </a>


            <Link to={'/Cards'} onClick={playClickSound}> Cards </Link>
            <Link to={'/Paginate'} onClick={playClickSound}> Paginate </Link>
            
            <Link to={'/About'} onClick={playClickSound}> About </Link>
            <Link to={'/'} onClick={playClickSound}> Home </Link>
        </nav>
    );
}

export default Nav;