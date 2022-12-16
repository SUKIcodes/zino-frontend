import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Add from "./components/Add";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const URL = process.env.REACT_APP_SERVER_URL;

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/add" element={<Add />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
