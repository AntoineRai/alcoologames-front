import './biskit.css';
import React, { useState } from 'react';

export default function Biskit() {
    const [players, setPlayers] = useState(["Antoine", "Esteban"]);
    const [diceResult, setDiceResult] = useState(null);
    const [message, setMessage] = useState(null);
    const [rule, setRule] = useState([]);

    const rollDice = () => {
        const result = Math.floor(Math.random() * 6) + 1;
        setDiceResult(result);
        handleDiceResult(result);
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
                setMessage(`Le Biskit boit une gorgée`);
                break;
            case 4:
                const newRule = prompt("Inventez une règle");
                if (newRule) {
                    setRule(`Règle: ${newRule}`);
                    setMessage("Nouvelle règle !");
                }
                break;
            case 5:
                setMessage("Criez Biskit !");
                break;
            case 6:
                setMessage("Vous distribuez 6 gorgées");
                break;
            default:
                break;
        }
        setPlayers((prevPlayers) => [...prevPlayers.slice(1), prevPlayers[0]]);
    };

    return (
        <div className="container-biskit">
            <h1>Bienvenue sur le jeu du Biskit</h1>
            <p>Faites rouler le dé !</p>
            <div className='container-dice'>
                <h2>C'est au tour de :</h2>
                <h1>{players[0]}</h1>
                {rule && <p>{rule}</p>}
                <button onClick={rollDice}>Lancer le dé</button>
                <h2>Le dé : {diceResult}</h2>
                {message && <h2>{message}</h2>}
            </div>
        </div>
    );
}
