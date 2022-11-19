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
                component={<About />}
                />
              <Route 
                path="/About" 
                component={<About />} 
              />
              <Route 
                path="/Projects" 
                component={<Projects />} 
              />
              <Route
                path="/Contact"
                component={<Contact />}
              />
            </Routes>
          
          <Footer />
        </div>
      </Router>
  );

 
}

 

export default App;
