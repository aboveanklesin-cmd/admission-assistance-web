import { useState, useEffect } from "react";

export function CountdownTimer() {
  // 🔥 Always 7 days from now
  const [targetDate] = useState(() => {
    const now = new Date();
    now.setDate(now.getDate() + 7);
    return now.getTime();
  });

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex flex-wrap justify-center sm:justify-start gap-3">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div
          key={unit}
          className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-3 w-[65px] sm:w-[75px] text-center"
        >
          <div className="text-2xl sm:text-3xl font-bold text-white">
            {String(value).padStart(2, "0")}
          </div>
          <div className="text-[10px] sm:text-xs text-gray-300 uppercase mt-1">
            {unit}
          </div>
        </div>
      ))}
    </div>
  );
}
