import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import  LandingPage  from './Pages/LandingPage/index'


function App() {
  return (
    <div className="App ">
      <div className='' >
      <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      </Routes>
        
      </Router>
      </div>
    </div>
  );
}

export default App;
