import './header.css'

export default function Header() {
    return (
        <header className="header">
            <div className="headerLogo">
                <img src="pintelogo.png" alt="Logo" />
            </div>
            <div className="headerContent">
                <div className="headerContentItem">Item 1</div>
                <div className="headerContentItem">Item 2</div>
            </div>
        </header>
    )
}