import { useEffect } from "react";
import { useState } from "react";
export const useFakeSpinner = ({ isOnMainPage }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    // Symulacja ładowania danych
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [isOnMainPage]);

  return { isLoading };
};
