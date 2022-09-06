import React from "react";
import ReactDOM from "react-dom/client";
import LandingForm from "./Landing-form";
import "./index.scss";
import { DataProvider } from "./DataContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <LandingForm />
    </DataProvider>
  </React.StrictMode>
);
