import React, { useState } from 'react';

const ProjectList = ({ category }) => {
    const [projects] = useState([
        {
            name: 'Books and Beans',
            category: 'Full Stack',
            description: 'App used to find book clubs and/or coffee shops in cities across Ontario'
        },
        {
            name: 'Open Fields',
            category: 'Front End',
            description: ' App used to help with planting and harvesting a vegebtable garden'
        }
    ]);

    const currentProjects = projects.filter(project => project.category === category);

    return (
        <div>
            <div className='flex-row'>
                {currentProjects.map((image, i) => {
                    <img
                    src={require().default}
                    alt={image.name}
                    className='img-thumbnail mx-1'
                    key={image.name}
                    />
                })}
            </div>
        </div>
    )
};

export default ProjectList;