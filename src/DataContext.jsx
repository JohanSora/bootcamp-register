import React, { createContext, useEffect, useRef, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [info, setInfo] = useState([]);
  const [companys, setCompanys] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://opensheet.elk.sh/1P4dqtPxnDmUPWl5HwGBea3AtLcuU2HffTu8STxsxuGI/1"
      )
      .then((res) => {
        setInfo(res.data);
      });

    axios
      .get(
        "https://opensheet.elk.sh/15IeBWnYWgssITGxTySRUwodjZWt8d94bZ00mjhW4kqY/1"
      )
      .then((res) => setCompanys(res.data));
  }, []);

  return (
    <DataContext.Provider value={{ info, setInfo, companys, setCompanys }}>
      {children}
    </DataContext.Provider>
  );
};
