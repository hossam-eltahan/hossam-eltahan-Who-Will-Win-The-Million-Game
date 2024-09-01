import React, { useState, useEffect } from "react";
import "./AdminControlPanel.css";

const AdminControlPanel = () => {
  const [questions, setQuestions] = useState([]);
  const [questionText, setQuestionText] = useState("");
  const [answers, setAnswers] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    // Fetch questions from localStorage or initialize
    const savedQuestions = JSON.parse(localStorage.getItem("questions")) || [];
    setQuestions(savedQuestions);
  }, []);

  const handleAddOrUpdateQuestion = () => {
    if (!questionText || answers.some(answer => !answer)) {
      alert("Please fill out all fields.");
      return;
    }

    const newQuestion = {
      question: questionText,
      answers: answers,
      correctAnswer: correctAnswer,
    };

    const updatedQuestions = editingIndex !== null
      ? questions.map((q, index) =>
          index === editingIndex ? newQuestion : q
        )
      : [...questions, newQuestion];

    setQuestions(updatedQuestions);
    localStorage.setItem("questions", JSON.stringify(updatedQuestions));
    resetForm();
  };

  const handleRemoveQuestion = (index) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
    localStorage.setItem("questions", JSON.stringify(updatedQuestions));
  };

  const handleEditQuestion = (index) => {
    const questionToEdit = questions[index];
    setQuestionText(questionToEdit.question);
    setAnswers(questionToEdit.answers);
    setCorrectAnswer(questionToEdit.correctAnswer);
    setEditingIndex(index);
  };

  const resetForm = () => {
    setQuestionText("");
    setAnswers(["", "", "", ""]);
    setCorrectAnswer(0);
    setEditingIndex(null);
  };

  return (
    <div className="admin-panel">
      <div className="control-panel">
        <h1>Admin Control Panel</h1>
        <div className="form">
          <input
            type="text"
            placeholder="Enter question text"
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
          />
          {answers.map((answer, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Answer ${index + 1}`}
              value={answer}
              onChange={(e) => {
                const newAnswers = [...answers];
                newAnswers[index] = e.target.value;
                setAnswers(newAnswers);
              }}
            />
          ))}
          <select
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(Number(e.target.value))}
          >
            <option value={0}>Answer 1</option>
            <option value={1}>Answer 2</option>
            <option value={2}>Answer 3</option>
            <option value={3}>Answer 4</option>
          </select>
          <button onClick={handleAddOrUpdateQuestion}>
            {editingIndex !== null ? "Update Question" : "Add Question"}
          </button>
        </div>
        <div className="questions-container">
          {questions.map((question, index) => (
            <div key={index} className="question-box">
              <p>{question.question}</p>
              <ul>
                {question.answers.map((answer, i) => (
                  <li
                    key={i}
                    style={{ color: i === question.correctAnswer ? "green" : "black" }}
                  >
                    {answer}
                  </li>
                ))}
              </ul>
              <button onClick={() => handleEditQuestion(index)}>Edit</button>
              <button onClick={() => handleRemoveQuestion(index)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminControlPanel;
