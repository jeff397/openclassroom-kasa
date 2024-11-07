import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Housing from "./pages/Housing/Housing";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Housing/:id" element={<Housing />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
