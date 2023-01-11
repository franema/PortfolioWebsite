import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./CSS/App.css"
import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {

  const [showWelcome, setShowWelcome] = useState(true)

  function changeShowWelcome () {
    setShowWelcome(false)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home showWelcome={showWelcome} changeShowWelcome={changeShowWelcome}/>}/>
          <Route path="/aboutme" element={<AboutMe/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
