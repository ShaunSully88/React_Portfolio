import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import ProjectList from '../ProjectList'
import photo from "../../assets/project/OpenFields.jpg";

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
        <ProjectList category={currentCategory.name} />
      </div>
      
    </section>
  );
}



export default Apps;