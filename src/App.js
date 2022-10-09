import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Characters from "./components/Characters";
import "./index.css";
import Pagination from "./components/Pagination";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SingleCharacter from "./pages/SingleCharacter";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/:id" element={<SingleCharacter />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
