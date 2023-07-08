import { useEffect } from "react";
import { useState } from "react";
export const useFakeSpinner = ({ isOnMainPage }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    // Symulacja ładowania danych
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [isOnMainPage]);

  return { isLoading };
};
