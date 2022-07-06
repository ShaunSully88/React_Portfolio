import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Project from './components/Project'

function Portfolio() {
    return (
        <section>
            <p>{description}</p>
            <Project project={currentProject.name}/>
        </section>
    );
}

export default Portfolio;