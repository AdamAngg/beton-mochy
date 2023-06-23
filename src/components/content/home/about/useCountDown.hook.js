import { useEffect, useState } from "react";

export const useCountDown = ({ delay }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const countDown = () => {
      setCount(count + 1);
    };
    const interval = setInterval(countDown, delay);

    if (count === 25) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [count]);

  return count;
};
