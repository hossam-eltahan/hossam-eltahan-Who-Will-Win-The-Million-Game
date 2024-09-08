import React, { useEffect, useRef, useState } from "react";
import useSound from "use-sound";
import play from "../assets/sounds/play.m4a";
import logo from "../assets/logo.png";
import data, { shuffleArray } from "../components/data";
import { useNavigate } from 'react-router-dom';

const User = ({ setUser }) => {
  let [letsPlay, { pause }] = useSound(play);
  const [isPlaying, setIsPlaying] = useState(true);
  const inp = useRef();
  const navigate = useNavigate(); // Use useNavigate here

  if (isPlaying) {
    letsPlay();
  }

  const handleClick = () => {
    inp.current.value && setUser(inp.current.value);
    setIsPlaying(false);
    pause();
    shuffleArray(data);
  };

  const handleAdminLogin = () => {
    const username = prompt("Enter username:");
    const password = prompt("Enter password:");

    // Check credentials
    if (username === "admin" && password === "password") {
      navigate("/AdminControlPanel"); // Use navigate here
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="users">
      <div className="user w-[350px]">
        <h1 className="mb-4 mx-auto w-full text-center tracking-wider text-[40px]">
          لعبة من سيربح المليون
        </h1>
        <img src={logo} alt="logo" className="mb-6" />
        <input
          ref={inp}
          type="text"
          placeholder="Enter your name"
          className="w-full h-[40px] rounded-xl text-black text-center text-[18px]"
        />
        <button
          className="w-full h-[40px] my-5 rounded-xl"
          onClick={handleClick}
        >
          Start
        </button>
        <button
          className="w-full h-[40px] my-5 rounded-xl"
          onClick={handleAdminLogin}
        >
          Admin Login
        </button>
      </div>
    </div>
  );
};

export default User;

