import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./components/Base/_base.scss";
import Base from "./components/Base/Base";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Router>
      <div className='main_wrapper'>
      <Base>            
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />        
      </Routes>
      </Base>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
