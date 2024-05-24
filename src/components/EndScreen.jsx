import React, { useContext } from 'react';
import { GameStateContext } from '../helpers/context';
import { Questions } from '../helpers/Questions';
import '../EndScreen.css';

const EndScreen = () => {
  const { score, userName, setGameState, setScore, setUserName } = useContext(GameStateContext);

  const restartQuiz = () => {
    setScore(0);
    setUserName("");
    setGameState("menu");
  };

  return (
    <div className="end-container">
      <h1>Quiz Finished</h1>
      <h2>{userName}, your score is:</h2>
      <h3>{score} / {Questions.length}</h3>
      <button className="restart-button" onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
}

export default EndScreen;
