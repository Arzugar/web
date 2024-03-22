import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home'; // Import Home component from the correct file path
import ConstructionPage from './pages/construction';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/construction" element={<ConstructionPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
