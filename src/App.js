import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';


function App() {

  return (
   <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Portfolio></Portfolio>
      </main>
      <footer>
        <ContactForm></ContactForm>
        
      </footer>
   </div>
  );
}

export default App;
