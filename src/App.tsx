import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SierpinksiTriangle from './pages/sierpinski';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sierpinski" element={<SierpinksiTriangle />} />
      </Routes>
    </Router>
  );
}

export default App;
