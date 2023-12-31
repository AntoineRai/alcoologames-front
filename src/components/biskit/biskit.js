import './biskit.css';
import React, { useEffect, useState } from 'react';
import Popup from "../popup/popup.js"

export default function Biskit() {
    const [players, setPlayers] = useState([]);
    const [diceResult, setDiceResult] = useState(null);
    const [message, setMessage] = useState(null);
    const [buttonPopup, setButtonPopup] = useState(false);

    useEffect(() => {
        const storedPlayers = JSON.parse(localStorage.getItem('players'));
        if (storedPlayers) {
            setPlayers(storedPlayers);
        }
    }, []);

    const rollDice = () => {
        const result = Math.floor(Math.random() * 6) + 1;
        setDiceResult(result);
        handleDiceResult(result);
        setButtonPopup(true);
    };

    const handleDiceResult = (result) => {
        switch (result) {
            case 1:
                setMessage(`${players[0]} boit une gorgée`);
                break;
            case 2:
                setMessage(`Le joueur à gauche et à droite de ${players[0]} boivent une gorgée`);
                break;
            case 3:
                setMessage(`${players[0]} distribue 3 gorgées`);
                break;
            case 4:
                setMessage(`Tout les joueurs boivent une gorgée`);
                break;
            case 5:
                setMessage("Criez Biskit !\nLe dernier à le faire boit 5 gorgées");
                break;
            case 6:
                setMessage(`${players[0]} distribue 6 gorgées`);
                break;
            default:
                break;
        }
        setPlayers((prevPlayers) => [...prevPlayers.slice(1), prevPlayers[0]]);
    };

    const closePopup = () => {
        setButtonPopup(false);
        setPlayers((prevPlayers) => [...prevPlayers.slice(1), prevPlayers[0]]);
      };

    return (
        players.length === 0 ? (
            <div className='container-biskit'>
                <h1>Vous devez ajouter des joueurs</h1>
            </div>
        ) :
            (
                <div className="container-biskit">
                    <h1>Bienvenue sur le jeu du Biskit</h1>
                    <p>Faites rouler le dé !</p>
                    <div className='container-dice'>
                        <h2>C'est au tour de :</h2>
                        <h1>{players[0]}</h1>
                        <button onClick={rollDice}>Lancer le dé</button>
                        <Popup trigger={buttonPopup} closePopup={closePopup}>
                            <p>Le dé : {diceResult}</p>
                            {message && <h2>{message}</h2>}
                        </Popup>
                    </div>
                </div>)
    );
}
