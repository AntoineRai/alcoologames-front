import './playerAdd.css';
import React, { useState } from 'react';

export default function PlayerAdd({ onAdd }) {
    const [playerName, setPlayerName] = useState('');

    const handleAdd = () => {
        if (playerName.trim() !== '') {
            onAdd(playerName);
            setPlayerName('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAdd();
        }
    };

    return (
        <div className="player-add">
            <input
                type="text"
                placeholder="Nom du joueur"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                onKeyPress={handleKeyPress} // Ajout du gestionnaire d'événements
            />
            <button onClick={handleAdd}>Ajouter le joueur</button>
        </div>
    );
}
