import "./App.css";
import { useState } from "react";
import Player from "./Player";

// 1. definir variables de estado usando useState (activePlayer, score, current, diceNumber)
// 2. definir funciones para manejar los eventos de click (handleNewGame, handleRollDice, handleHold)
// 3. pasar las variables de estado y las funciones a los componentes Player y Dice
// 4. manejar los eventos de click en los botones de New game, Roll dice y Hold
// 5. manejar el cambio de imagen de dado cuando se hace click en el botón rolldice
// 5. manejar el cambio de jugadozr activo cuando se hace click en el botón Hold
// 6. manejar el cambio de jugador activo cuando se obtiene un 1 al hacer click en el botón Roll dice
// 7. manejar el cambio de jugador activo cuando se obtiene un 6 al hacer click en el botón Roll dice
// 8. manejar el cambio de jugador activo cuando se obtiene un número diferente de 1 o 6 al hacer click en el botón Roll dice
// 9. manejar el cambio de jugador activo cuando se hace click en el botón New game

function App() {
  const [activePlayer, setActivePlayer] = useState(1);
  const [score, setScore] = useState([0, 0]);
  const [current, setCurrent] = useState(0);
  const [diceNumber, setDiceNumber] = useState(0);

  const handleHold = () => {
    if (isTerminado()) {
      return;
    }

    // para cambiar el score, se debe definir una nueva variable
    // no modificamos el array, creamos uno nuevo!!!!
    const newScore = [...score];
    // newScore[activaPlayer -1] = newScore[activePlayer -1] + current
    newScore[activePlayer - 1] += current;
    setScore(newScore);
    setActivePlayer(activePlayer === 1 ? 2 : 1);
    setCurrent(0);
  };
  const handleNewGame = () => {
    setActivePlayer(1);
    setScore([0, 0]);
    setCurrent(0);
    setDiceNumber(0);
    document.querySelector(".btn--hold").disabled = false;
    document.querySelector(".btn--roll").disabled = false;
  };

  const handleRollDice = () => {
    if (isTerminado()) {
      return;
    }

    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(randomNumber);

    if (randomNumber === 1) {
      setActivePlayer((prevPlayer) => (prevPlayer === 1 ? 2 : 1));
      setCurrent(0);
    } else {
      //Debido a que React trabaja de forma asíncrona, se utiliza randomNumber en lugar de diceNumber
      setCurrent((prevCurrent) => prevCurrent + randomNumber);
    }
  };

  const isTerminado = () => {
    if (score[0] >= 100 || score[1] >= 100) {
      document.querySelector(".btn--hold").disabled = true;
      document.querySelector(".btn--roll").disabled = true;
      return true;
    }
    return false;
  };

  return (
    <main>
      <Player
        name="Player 1"
        score={score[0]}
        current={activePlayer === 1 && current}
        isActive={activePlayer === 1}
      />
      <Player
        name="Player 2"
        score={score[1]}
        current={activePlayer === 2 && current}
        isActive={activePlayer === 2}
      />
      {diceNumber && (
        <img
          src={`dice-${diceNumber}.png`}
          alt="Playing dice"
          className="dice"
        />
      )}
      <button className="btn btn--new" onClick={handleNewGame}>
        🔄 New game
      </button>
      <button className="btn btn--roll" onClick={handleRollDice}>
        🎲 Roll dice
      </button>
      <button className="btn btn--hold" onClick={handleHold}>
        📥 Hold
      </button>
    </main>
  );
}

export default App;
