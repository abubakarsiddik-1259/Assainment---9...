import logo2 from "../assets/logo/dddd.jpg";
import React, { useEffect, useState } from "react";

const Enroll = () => {
  const [time, setTime] = useState({
    days: 14,
    hours: 10,
    minutes: 23,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        } else {
          // Countdown finished
          clearInterval(timer);
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="">
      <div className="card lg:card-side bg-gray-400 px-1 py-33 shadow-sm">
        <figure>
          <img src={logo2} alt="Movie" />
        </figure>
        <div className="card-body bg-gray-200">
          <h2 className="card-title">
            Don’t waste time. Start your skill journey today. Limited seats —
            enroll now.
          </h2>
          <p>Click the button to watch on videos.</p>
          {/* For TSX uncomment the commented types below */}
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": time.days }}>{time.days}</span>
              </span>
              days
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": time.hours }}>{time.hours}</span>
              </span>
              hours
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": time.minutes }}>{time.minutes}</span>
              </span>
              min
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": time.seconds }}>{time.seconds}</span>
              </span>
              sec
            </div>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Enroll Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enroll;
