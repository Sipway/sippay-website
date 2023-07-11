import React, { useState } from 'react';

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      correctAnswer: 'Paris',
    },
    {
      question: 'Who painted the Mona Lisa?',
      options: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Michelangelo'],
      correctAnswer: 'Leonardo da Vinci',
    },
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Mercury', 'Venus', 'Jupiter', 'Saturn'],
      correctAnswer: 'Jupiter',
    },
    {
      question: 'What is the chemical symbol for gold?',
      options: ['Au', 'Ag', 'Cu', 'Fe'],
      correctAnswer: 'Au',
    },
    {
      question: 'What is the tallest mountain in the world?',
      options: ['Mount Everest', 'K2', 'Kangchenjunga', 'Makalu'],
      correctAnswer: 'Mount Everest',
    },
  ];

  const handleAnswer = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);

    const selectedQuestion = questions[currentQuestion];
    if (answer === selectedQuestion.correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const renderOptions = (options) => {
    return options.map((option, index) => (
      <button key={index} onClick={() => handleAnswer(option)}>
        {option}
      </button>
    ));
  };

  return (
    <div>
      {currentQuestion < questions.length ? (
        <div>
          <div>Question {currentQuestion + 1}</div>
          <div>{questions[currentQuestion].question}</div>
          <div>{renderOptions(questions[currentQuestion].options)}</div>
        </div>
      ) : (
        <div>
          <h2>Quiz completed!</h2>
          <h3>Score: {score}/{questions.length}</h3>
          <h3>Answers:</h3>
          <ul>
            {questions.map((question, index) => (
              <li key={index}>
                {question.question} - Correct Answer: {question.correctAnswer}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
