import { useEffect, useState } from "react";

interface CountdownTimerProps {
  seconds: number;
  onExpire: () => void;
}

export function CountdownTimer({ seconds, onExpire }: CountdownTimerProps) {
  const [remaining, setRemaining] = useState(seconds);

  useEffect(() => {
    if (remaining <= 0) {
      onExpire();
      return;
    }
    const timer = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onExpire();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [remaining, onExpire]);

  const mins = Math.floor(remaining / 60);
  const secs = remaining % 60;
  const isUrgent = remaining < 60;

  return (
    <span className={`font-mono text-lg font-bold ${isUrgent ? "text-red-400 animate-pulse" : "text-white"}`}>
      {mins}:{secs.toString().padStart(2, "0")}
    </span>
  );
}
