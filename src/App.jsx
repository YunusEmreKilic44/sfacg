import React from "react";
import Navbar from "./components/Navbar";
import NovelsContextProvider from "./context/NovelsContext";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./components/Clamp.css";
import Footer from "./components/Footer";
import SingleBookPage from "./pages/SingleBookPage";

const App = () => {
  return (
    <NovelsContextProvider>
      <div className="box-border text-[#333] bg-[#F3F3F3]">
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/novel/:slug" element={<SingleBookPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </NovelsContextProvider>
  );
};

export default App;
