import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Header from './components/header/header';


function App() {
  return (
    <Router>
       <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </Router>
  );
}

export default App;


