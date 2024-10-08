import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import click from "../assets/sounds/general-click.wav";
import correct from "../assets/sounds/correct.m4a";
import wrong from "../assets/sounds/wrong.mp3";

const Questions = ({
  setStop,
  setquestionNumber,
  questionNumber,
  setPauseTimer,
}) => {
  // Sounds
  const [clicked] = useSound(click);
  const [correctAns] = useSound(correct);
  const [wrongAns] = useSound(wrong);

  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerStates, setAnswerStates] = useState({}); // Track the state of each answer

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/questions`);
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };
  
    fetchQuestions();
  }, []);
  

  useEffect(() => {
    if (questions.length > 0 && questionNumber > 0) {
      setQuestion(questions[questionNumber - 1]);
      setAnswerStates({}); // Reset answer states when question changes
    }
  }, [questions, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (ans, index) => {
    setPauseTimer(true);
    clicked();
    setSelectedAnswer(ans);
    const isCorrect = index === question.correctAnswer;
    setAnswerStates((prev) => ({
      ...prev,
      [index]: isCorrect ? "correct" : "wrong"
    }));

    delay(500, () => {
      if (isCorrect) {
        correctAns();
        delay(2000, () => {
          setquestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
          setAnswerStates({});
          setPauseTimer(false);
        });
      } else {
        wrongAns();
        delay(3000, () => {
          // Show correct answer
          const correctIndex = question.correctAnswer;
          setAnswerStates((prev) => ({
            ...prev,
            [correctIndex]: "correct"
          }));
        });
        delay(5000, () => {
          setStop(true);
        });
      }
    });
  };

  return (
    <>
      <div className="question text-[35px]">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((ans, index) => (
          <div
            key={index}
            className={`answer ${answerStates[index] || ""} ${selectedAnswer === ans ? "selected" : ""}`}
            onClick={() => handleClick(ans, index)}
          >
            {ans}
          </div>
        ))}
      </div>
    </>
  );
};

export default Questions;
