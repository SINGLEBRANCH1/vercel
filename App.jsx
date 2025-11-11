import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Directory from "./pages/Directory";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: 20, fontFamily: 'Arial' }}>
        <nav style={{ marginBottom: 20 }}>
          <Link to="/" style={{ marginRight: 15 }}>Home</Link>
          <Link to="/about" style={{ marginRight: 15 }}>About</Link>
          <Link to="/services" style={{ marginRight: 15 }}>Services</Link>
          <Link to="/directory" style={{ marginRight: 15 }}>Directory</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}