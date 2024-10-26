// src/gamification/Quiz.js
import React, { useState } from "react";

const Quiz = () => {
  const [score, setScore] = useState(0);
  const [questions] = useState([
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is 2 + 2?", answer: "4" },
  ]);

  const handleAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      setScore(score + 10);
    }
  };

  return (
    <div>
      <h3>Quiz</h3>
      {questions.map((q, index) => (
        <div key={index}>
          <p>{q.question}</p>
          <button onClick={() => handleAnswer("Paris", q.answer)}>Paris</button>
          <button onClick={() => handleAnswer("4", q.answer)}>4</button>
        </div>
      ))}
      <p>Your Score: {score}</p>
    </div>
  );
};

export default Quiz;
