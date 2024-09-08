import React, { useState, useEffect } from "react";
import "./AdminControlPanel.css";

const AdminControlPanel = () => {
  const [questions, setQuestions] = useState([]);
  const [questionText, setQuestionText] = useState("");
  const [answers, setAnswers] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [editingIndex, setEditingIndex] = useState(null);

  // Fetch questions from the API
  const fetchQuestions = async () => {
    try {
      const response = await fetch("http://192.168.0.100:5000/api/questions");
      if (!response.ok) {
        throw new Error('Error fetching questions');
      }
      const data = await response.json();
      setQuestions(data);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  // Fetch questions when the component mounts
  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleAddOrUpdateQuestion = async () => {
    if (!questionText || answers.some(answer => !answer)) {
      alert("Please fill out all fields.");
      return;
    }

    const newQuestion = {
      question: questionText,
      answers: answers,
      correctAnswer: correctAnswer,
    };

    try {
      if (editingIndex !== null) {
        // Update an existing question
        const response = await fetch(
          `http://192.168.0.100:5000/api/questions/${questions[editingIndex].id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newQuestion),
          }
        );
        if (!response.ok) {
          throw new Error("Failed to update question");
        }

        // Update the state immediately
        const updatedQuestions = [...questions];
        updatedQuestions[editingIndex] = { ...newQuestion, id: questions[editingIndex].id };
        setQuestions(updatedQuestions);
      } else {
        // Add a new question
        const response = await fetch("http://localhost:5000/api/questions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newQuestion),
        });

        if (!response.ok) {
          throw new Error("Failed to add question");
        }

        const addedQuestion = await response.json();
        // Update the state with the new question
        setQuestions([...questions, { ...newQuestion, id: addedQuestion.id }]);
      }

      resetForm();
    } catch (error) {
      console.error("Error saving question:", error);
    }
  };

  const handleRemoveQuestion = async (index) => {
    try {
      await fetch(`http://localhost:5000/api/questions/${questions[index].id}`, {
        method: "DELETE",
      });

      // Remove the question locally
      const updatedQuestions = questions.filter((_, i) => i !== index);
      setQuestions(updatedQuestions);
    } catch (error) {
      console.error("Error deleting question:", error);
    }
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
