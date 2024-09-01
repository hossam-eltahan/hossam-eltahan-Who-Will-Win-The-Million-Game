import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import clocktick from "../assets/sounds/clock-tick.wav";
// import wrong from "../assets/sounds/wrongEnd.mp3";

const Timer = ({ questionNumber, setStop, pauseTimer }) => {
  let [clockticked] = useSound(clocktick);
  // let [wrongEnd] = useSound(wrong);

  const [clock, setclock] = useState(40);
  useEffect(() => {
    setclock(40);
  }, [questionNumber]);
  useEffect(() => {
    if (pauseTimer) {
      return; // Do nothing if the timer is paused
    }
    if (clock == 0) {
      setStop(true);
      // wrongEnd();
    }
    if (clock <= 5) {
      clockticked();
    }
    let interval = setTimeout(() => {
      setclock(clock - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [clock, setStop, pauseTimer]);

  return clock;
};

export default Timer;
