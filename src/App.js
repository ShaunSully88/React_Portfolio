import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';

import Apps from './components/Apps';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [categories] = useState([
    { name: 'About'},
    { name: 'project'}
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  

  return (
    <div>

      <header>
        <Header></Header>
      </header>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
      <Apps currentCategory={currentCategory}></Apps>
      <About></About>
      
        
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

 

export default App;
