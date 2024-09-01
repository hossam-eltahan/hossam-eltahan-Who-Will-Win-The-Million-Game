import React, { useState, useEffect } from "react";
import "./WinnerBoard.css";

const WinnerBoard = () => {
  const [winners, setWinners] = useState([]);

  useEffect(() => {
    // Fetch winners from localStorage
    const savedWinners = JSON.parse(localStorage.getItem("winners")) || [];
    setWinners(savedWinners);
  }, []);

  return (
    <div className="winner-board-container">
      <h1 className="title">Winner Board</h1>
      <div className="winners-list">
        {winners.length === 0 ? (
          <p className="no-winners">No winners yet.</p>
        ) : (
          <ul>
            {winners.map((winner, index) => (
              <li key={index} className="winner-item">{winner}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default WinnerBoard;
