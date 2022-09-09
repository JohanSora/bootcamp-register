import React from "react";
import ReactDOM from "react-dom/client";
import LandingForm from "./Landing-form";
import "./index.scss";
import { DataProvider } from "./DataContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path="/" element={<LandingForm />} />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>
);
