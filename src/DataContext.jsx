import React, { createContext, useEffect, useRef, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://opensheet.elk.sh/1P4dqtPxnDmUPWl5HwGBea3AtLcuU2HffTu8STxsxuGI/1"
      )
      .then((res) => {
        setInfo(res.data);
      });
  }, []);

  return (
    <DataContext.Provider value={{ info, setInfo }}>
      {children}
    </DataContext.Provider>
  );
};
