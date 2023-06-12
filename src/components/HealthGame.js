import React, { useState } from 'react';
import './App.css';

const HealthGame = () => {
  const gameQuestions = [
    {
      question: 'What is the recommended daily water intake for seniors?',
      options: ['4 liters', '2 liters', '8 liters', '1 liter'],
      answer: '2 liters',
    },
    {
      question: 'Which exercise is beneficial for improving balance in seniors?',
      options: ['Running', 'Cycling', 'Yoga', 'Weightlifting'],
      answer: 'Yoga',
    },
    {
      question: 'What is the recommended daily serving of fruits and vegetables for seniors?',
      options: ['1 serving', '3 servings', '5 servings', '7 servings'],
      answer: '5 servings',
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const startGame = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setGameOver(false);
  };

  const handleAnswer = (selectedAnswer) => {
    const currentQuestion = gameQuestions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.answer) {
      setScore(score + 1);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < gameQuestions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setGameOver(true);
    }
  };

  return (
    <div className="container">
      <h1>Health Game</h1>
      {!gameOver && currentQuestionIndex !== -1 ? (
        <div>
          <h2>{gameQuestions[currentQuestionIndex].question}</h2>
          <div className="options">
            {gameQuestions[currentQuestionIndex].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2>Game Over</h2>
          <p>Your score: {score}</p>
          <button onClick={startGame}>Play Again</button>

          <table>
            <thead>
              <tr>
                <th>Question</th>
                <th>Answer</th>
              </tr>
            </thead>
            <tbody>
              {gameQuestions.map((question, index) => (
                <tr key={index}>
                  <td>{question.question}</td>
                  <td>{question.answer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default HealthGame;
