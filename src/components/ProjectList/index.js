import React, { useState } from 'react';

import photo from "../../assets/project/OpenFields.jpg";

const ProjectList = ({ category }) => {
    const [photos] = useState([
        {
            name: 'Open Fields',
            category: 'project',
            description: ' App used to help with planting and harvesting a vegebtable garden'
        },
        {
            name: 'Books and Beans',
            category: 'project',
            description: 'App used to find book clubs and/or coffee shops in cities across Ontario'
        },
        {
            name: "Employee Tracker",
            category: "project",
            description: "App used to explore employee database via mySQL"
        }
       
    ]);

    const currentPhotos = photos.filter((photo) => photo.category === category);

    return (
        <div>
            <div className='flex-row'>
                {currentPhotos.map((image, i) => (
                    <img
                    src={require(`../../assets/project/${category}/${i}.jpg`).default}
                    alt={image.name}
                    className='img-thumbnail mx-1'
                    key={image.name}
                    />
                ))}
            </div>
        </div>
    )
};

export default ProjectList;