import './player.css'
import React, { useState, useEffect } from 'react';
import PlayerAdd from '../playerAdd/playerAdd';

export default function Player() {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const storedPlayers = JSON.parse(localStorage.getItem('players'));
        if (storedPlayers) {
            setPlayers(storedPlayers);
        }
    }, []);

    const handlerOfLocalStorage = () => {
        localStorage.clear();
        setPlayers([]);
    }

    const handleAddPlayer = (playerName) => {
        const updatedPlayers = [...players, playerName];
        setPlayers(updatedPlayers);
        localStorage.setItem('players', JSON.stringify(updatedPlayers));
    };

    return (
        <div className="player-container">
            <h1>Edition des joueurs</h1>
            {players.length === 0 ? (
                <p>Editez les joueurs</p>
            ) : (
                <p>Voici les joueurs déjà enregistrés: {players.join(', ')}</p>
            )}
            <div className='button-player'>
                <PlayerAdd onAdd={handleAddPlayer} />
                <button onClick={handlerOfLocalStorage}>Supprimer les joueurs</button>
            </div>
        </div>
    );
}
