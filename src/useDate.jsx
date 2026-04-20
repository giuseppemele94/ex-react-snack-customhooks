import { useState, useEffect } from "react";

function useDate() {
  const [currentDate, setCurrentDate] = useState(new Date());

  //ogni secondo mi restituisce la data attuale 
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return currentDate;
}

export default useDate;