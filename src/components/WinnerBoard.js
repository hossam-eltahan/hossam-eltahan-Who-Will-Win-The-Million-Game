import React, { useState, useEffect } from "react";
import "./WinnerBoard.css";

const API_URL = `${process.env.REACT_APP_BACKEND_URL}/api`;

const WinnerBoard = () => {
  const [winners, setWinners] = useState([]);

  const fetchWinners = async () => {
    try {
      const response = await fetch(`${API_URL}/winners`);
      if (!response.ok) {
        throw new Error('Error fetching winners');
      }
      const data = await response.json();
      console.log("Fetched winners:", data);
      setWinners(data);
    } catch (error) {
      console.error("Error fetching winners:", error);
    }
  };

  useEffect(() => {
    fetchWinners();
  }, []);

  return (
    <div className="winner-board-container">
      <h1 className="title">Winner Board</h1>
      <div className="winners-list">
        {winners.length === 0 ? (
          <p className="no-winners">No winners yet.</p>
        ) : (
          <ul>
            {winners.map((winner) => (
              <li key={winner.id} className="winner-item">{winner.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default WinnerBoard;
