import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Apps from './components/Apps';


function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [categories] = useState([
    {
      name: 'Books and Beans',
      description: 'App used to find book clubs and/or coffee shops in cities across Ontario',
    },
    { name: 'Open Fields', description: ' App used to help with planting and harvesting a vegebtable garden'},

  ]); 

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
      <About></About>
        <Apps currentCategory={currentCategory}></Apps>
        
      </main>
      <footer>
      <ContactForm></ContactForm>
      </footer>
    </div>
  );
}

 

export default App;
