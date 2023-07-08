import { useEffect } from "react";
import { useState } from "react";
export const useFakeSpinner = ({ isOnMainPage, dynamicPath, delay }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    // Symulacja ładowania danych
    setTimeout(() => {
      setIsLoading(false);
    }, delay);
  }, [isOnMainPage, dynamicPath]);

  return { isLoading };
};
