import React, { createContext, useEffect, useRef, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  console.log("a");
  const [info, setInfo] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://opensheet.elk.sh/11dKBVpsyXQLvdklj1hhDVElgj4eONrlgNywyijdccOg/1"
      )
      .then((res) => {
        setInfo(res.data);
      });
  }, []);

  return (
    <DataContext.Provider value={{ info }}>{children}</DataContext.Provider>
  );
};
