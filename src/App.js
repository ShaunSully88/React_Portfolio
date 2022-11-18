import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (

    <div>
      <Router>
        
          <Header />
          
            
              <Route
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
            
          
          <Footer />
        
      </Router>

    </div>
  );

 
}

 

export default App;
