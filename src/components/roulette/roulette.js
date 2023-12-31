import "./roulette.css";
import React, { useEffect, useState } from "react";
import Popup from "../popup/popup.js"
import { Wheel } from "react-custom-roulette";

export default function Roulette() {

  const [players, setPlayers] = useState([]);
  const [data, setData] = useState([])
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [giveDrink, setGiveDrink] = useState(false)
  const [numbersPart, setNumbersPart] = useState(JSON.parse(localStorage.getItem('numberspart')))

  useEffect(() => {
    setData(data, [])

    if (!JSON.parse(localStorage.getItem('numberspart')) > 0){
      localStorage.setItem('numberspart', JSON.stringify(5));
    }
    
    const storedPlayers = JSON.parse(localStorage.getItem("players"));

    if (storedPlayers){
        setPlayers(storedPlayers)
    }

    if (data.length == 0){
      for(let i = 0; i<JSON.parse(localStorage.getItem('numberspart')); i++){
        let texte = "Cul Sec"
        if (i > 0){
          texte = i
        }
        let object = {option: texte}
        data.push(object)
      }
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

  const handleChange = (event) => {
    setNumbersPart(event.target.value)
  }

  const changePage = () => {
    localStorage.setItem('numberspart', JSON.stringify(numbersPart));
    window.location.reload();
  }

  return (
    
    players.length === 0 ? (
            <div className='container-biskit'>
                <h1>Vous devez ajouter des joueurs</h1>
            </div>
        ) :

    
    <div className="wheelContent">
      <div style={{display: "flex", gap: "15px", alignItems: "center"}}>
        <label>Nombre de choix : </label><input onChange={handleChange}></input> 
        <button onClick={changePage}>Change</button>
      </div>
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
