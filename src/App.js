import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Mission from './Pages/Mission';
import Technology from './Pages/Technology';
import JoinUs from './Pages/JoinUs';
import Navbar from './components/Navbar';
import Apply from './Pages/Apply';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </Router>
  );
}

export default App;
