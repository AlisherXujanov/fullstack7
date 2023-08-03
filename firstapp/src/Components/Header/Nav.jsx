import style from './nav.scss'
import Theme from '../Theme'
import audioFile from '../../click.mp3'
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

function Nav() {
    const [theme, setTheme] = useState(false)

    function changeTheme() {
        const audio = new Audio(audioFile)
        audio.play()
        return setTheme(!theme)
    }

    return (
        <nav className={theme ? "dark-theme" : "light-theme"} style={style}>
            <a id="logo" href="#">Logo</a>

            <a id='theme-link' href="#" onClick={changeTheme}>
                <Theme theme={theme} />
            </a>
            <Link to={'/'}> Home </Link>
            <Link to={'/About'}> About </Link>
        </nav>
    );
}

export default Nav;