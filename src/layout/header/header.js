import './header.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="header">
            <div className="headerLogo">
                <Link to="/">
                    <img src="pintelogo.png" alt="Logo" />
                </Link>
            </div>
            <div className="headerContent">
                <Link to="/player">
                    <div className="headerContentItem">Les joueurs</div>
                </Link>
            </div>
        </header>
    )
}