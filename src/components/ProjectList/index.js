import React, { useState } from 'react';
import Apps from '../Apps';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const ProjectList = ({ category, link }) => {
    const [photos] = useState([
        {
            name: 'Open Fields',
            category: 'project',
            link: 'https://shaunsully88.github.io/Open-Fields/'
        },
        {
            name: 'Books and Beans',
            category: 'project',
            link: 'https://github.com/haleytelega/Book-Beans'
        },
        {
            name: "Employee Tracker",
            category: "project",
            description: "App used to explore employee database via mySQL"
        }
       
    ]);

    return (
        <div>
            <Container>
            <div className="flex-row">
            <Row>
                {photos.map((image, i ) => (
                    <Apps key={image.name} 
                    img={image} i={i} category="portfolio" link={photos[i].link}  / >
            ))}
            </Row>
            </div>
            </Container>
        </div>
    );

   
};

export default ProjectList;