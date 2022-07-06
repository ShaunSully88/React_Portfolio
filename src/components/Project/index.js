import React, { useState } from 'react';

const ProjectList = ({ category }) => {
  const [projects] = useState([
    {
      name: 'Open-Fields',
      category: 'JavaScript, HTML, CSS, Bootstrap',
      description:
        'App used to search instructions on how to plant certain vegetables'
        
    },
    {
      name: 'Books and Beans',
      category: 'JavaScript, BootStrap, SQL',
      description:
        'App used to find book clubs and coffee shops in cities across Ontario'
    },
    
  ]);

  const currentProjects = project.filter(project => project.category === category);

  return (
    <div>
      <div className="flex-row">
        {currentProjects.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
