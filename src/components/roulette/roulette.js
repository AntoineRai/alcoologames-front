import "./roulette.css";
import React, { useEffect, useState } from "react";
import Popup from "../popup/popup.js"
import { Wheel } from "react-custom-roulette";

const data = [
    { option: "0" }, 
    { option: "1" }, 
    { option: "2" },
    { option: "3" },
    { option: "4" },
    { option: "5" },
    { option: "6" }
];

export default function Roulette() {

  const [players, setPlayers] = useState([]);
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [giveDrink, setGiveDrink] = useState(false)

  useEffect(() => {
    const storedPlayers = JSON.parse(localStorage.getItem("players"));

    if (storedPlayers){
        setPlayers(storedPlayers)
    }

  }, []);

  const handleSpinClick = () => {

    setGiveDrink(Math.random() < 0.5)

    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
    
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

    <div className="wheelContent">
    <h2>C'est au tour de :</h2>
    <h1>{players[0]}</h1>
    <div>
    <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        perpendicularText
        backgroundColors={['#3e3e3e', '#df3428']}
        spinDuration={"0.8"}
        onStopSpinning={() => {
          setMustSpin(false);
          setButtonPopup(true)
        }}
      />
    </div>
    
      <button onClick={handleSpinClick}>SPIN</button>
      <div style={{zIndex: 99}}>
      <Popup trigger={buttonPopup} closePopup={closePopup}>
         {players[0]} {giveDrink ? 'doit donner' : 'doit boire'}
      </Popup>
      </div>
      
    </div>
    
  );
}
