import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import AuthLogin from "./components/AuthLogin";
import AuthRegister from "./components/AuthRegister";
//import Login from "./components/Login";
//import Register from "./components/Register";

const app = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<AuthLogin />} />
            <Route path="/register" element={<AuthRegister />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default app;
