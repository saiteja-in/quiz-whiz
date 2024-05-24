import React, { useState, useContext } from 'react';
import { Questions } from '../helpers/Questions';
import '../Quiz.css';
import { GameStateContext } from '../helpers/context';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const { score, setScore, setGameState } = useContext(GameStateContext);

  const nextQuestion = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    if (currentQuestion < Questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setOptionChosen("");  // Reset optionChosen for the next question
    } else {
      setGameState("finished");
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setOptionChosen("");  // Reset optionChosen for the previous question
    }
  };

  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h2>Question {currentQuestion + 1} of {Questions.length}</h2>
      </div>
      <h1 className="quiz-prompt">{Questions[currentQuestion].prompt}</h1>
      <div className="quiz-options">
        <button
          onClick={() => chooseOption('optionA')}
          className={`quiz-button ${optionChosen === 'optionA' ? 'selected' : ''}`}
        >
          {Questions[currentQuestion].optionA}
        </button>
        <button
          onClick={() => chooseOption('optionB')}
          className={`quiz-button ${optionChosen === 'optionB' ? 'selected' : ''}`}
        >
          {Questions[currentQuestion].optionB}
        </button>
        <button
          onClick={() => chooseOption('optionC')}
          className={`quiz-button ${optionChosen === 'optionC' ? 'selected' : ''}`}
        >
          {Questions[currentQuestion].optionC}
        </button>
        <button
          onClick={() => chooseOption('optionD')}
          className={`quiz-button ${optionChosen === 'optionD' ? 'selected' : ''}`}
        >
          {Questions[currentQuestion].optionD}
        </button>
      </div>
      <div className="quiz-footer">
        <button className="footer-button" onClick={previousQuestion}>Previous</button>
        <button className="footer-button" onClick={nextQuestion}>Next</button>
        {score}
      </div>
    </div>
  );
}

export default Quiz;
