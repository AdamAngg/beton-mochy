import { useEffect, useState } from "react";

export const useCountDown = ({ inView, delay }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const countDown = () => {
      setCount((prevCount) => prevCount + 1);
    };
    const interval = setInterval(countDown, delay);

    if (count === 25) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [inView, count]);

  return count;
};
