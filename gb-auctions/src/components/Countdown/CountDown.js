import React, { useState, useEffect } from "react";
import "./count.css";
import { Link } from "react-router-dom";

function CountDown({ targetDate,id }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [countdownFinished, setCountdownFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const timeLeft = calculateTimeLeft();
      if (Object.keys(timeLeft).length === 0) {
        setCountdownFinished(true);
      } else {
        setTimeLeft(timeLeft);
      }
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className="count-down">
      {countdownFinished ? (
        <div className="Time-over">Time Over!</div>
      ) : (
        <div className="count-down-inner">
          {timeLeft.days > 0 && (
            <div>
              <span>{formatTime(timeLeft.days)}d</span>:
              <span> {formatTime(timeLeft.hours)}h</span>:
              <span> {formatTime(timeLeft.minutes)}m</span>:
              <span> {formatTime(timeLeft.seconds)}s</span>
            </div>
          )}
          <Link to={`/product/${id}`} disabled={countdownFinished}>
            {countdownFinished ? "Countdown Finished!" : "Submit A Bid"}
          </Link>
        </div>
      )}
    </div>
  );
}

export default CountDown;
