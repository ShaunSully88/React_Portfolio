import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          
            <Routes>
              <Route exact
                path="/"
                element={<About />}
                />
              <Route 
                path="/About" 
                element={<About />} 
              />
              <Route 
                path="/Projects" 
                element={<Projects />} 
              />
              <Route
                path="/Contact"
                element={<Contact />}
              />
            </Routes>
          
          <Footer />
        </div>
      </Router>
  );

 
}

 

export default App;
