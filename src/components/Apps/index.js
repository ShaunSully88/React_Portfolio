import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import ProjectList from '../ProjectList'

function Apps(props) {
  const currentCategory = {
    name: "project",
    description: "App used for seraching for coffee shops and book clubs",
  };
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.name}</p>
      <div className='flex-row'>
        <img
          src={photo}
          alt="Example"
          className='img-thumbnail mx-1'
        />
      </div>
      
    </section>
  );
}



export default Apps;