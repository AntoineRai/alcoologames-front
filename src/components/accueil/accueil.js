import './accueil.css'
import { Link } from 'react-router-dom'

export default function Accueil() {
    return (
        <div className="accueil">
            <div className="accueilContent">
                <div className="accueilContentItem">
                    <Link to="/biskit">
                        <button>Biskit</button>
                    </Link>
                </div>
                <div className="accueilContentItem">
                    <Link to="/roulette">
                        <button>Roulette</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}