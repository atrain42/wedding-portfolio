import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SocialLinks, FixedEmail, Navbar } from "./components";
import { Home, Contact, About, Portfolio } from "./pages";

import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <Router>
      <Navbar />
      <FixedEmail />
      <SocialLinks />
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
