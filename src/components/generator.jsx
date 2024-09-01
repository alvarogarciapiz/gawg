import React, { useState } from 'react';
import '../styles/generator.css';

const Generator = () => {
  const [questions, setQuestions] = useState([
    { id: 1, question: "What is your project name?", answer: "" },
    { id: 2, question: "What language is your project written in?", answer: "" },
    // Add more questions as needed
  ]);

  const handleInputChange = (id, value) => {
    setQuestions(questions.map(q => q.id === id ? { ...q, answer: value } : q));
  };

  const handleSubmit = () => {
    // Logic to generate and download the file based on answers
    console.log("Generating file with answers:", questions);
  };

  return (
    <div id="get-started" className="generator_container">
      <h2 className="generator_title">Create your custom GitHub workflow</h2>
      <p className="generator_subtitle">Answer a few questions to generate your personalized GitHub workflow file.</p>
      <div className="questions_container">
        {questions.map(q => (
          <div key={q.id} className="question_block">
            <label className="question_label">{q.question}</label>
            <input
              type="text"
              className="question_input"
              value={q.answer}
              onChange={(e) => handleInputChange(q.id, e.target.value)}
            />
          </div>
        ))}
      </div>
      <button className="submit_button" onClick={handleSubmit}>Generate File</button>
    </div>
  );
};

export default Generator;