import React from "react";
import Navbar from "./components/Navbar";
import NovelsContextProvider from "./context/NovelsContext";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./components/Clamp.css";

const App = () => {
  return (
    <div className="box-border text-[#333] bg-[#F3F3F3]">
      <NovelsContextProvider>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </NovelsContextProvider>
    </div>
  );
};

export default App;
