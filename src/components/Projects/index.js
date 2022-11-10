import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import EmployeeTracker from '../../assets/project/1.jpg';
import OpenFields from '../../assets/project/2.jpg';
import Greenside from '../../assets/project/3.jpg';
import VeganMart from '../../assets/project/4.png';

function Projects () {
    return (
        <Carousel fade interval={5000}>
        <Carousel.Item>
            <img
                className="mx-auto d-block w-75 "
                src={OpenFields}
                alt="Open Fields"
            />
            <Carousel.Caption>
                <h3>Open Fields</h3>
                <p className="apps">Website that helps gardeners learn the basics of vegetable gardening and harvesting.</p> 
                <p className="apps"> Languages: HTML, CSS, Third-party API </p>
                <a className="githubrepo" href="https://github.com/ShaunSully88/Open-Fields" target="_blank" rel="noreferrer">GitHub Repo</a>
                <a className="deployedprojects" href="https://shaunsully88.github.io/Open-Fields/" target="_blank" rel="noreferrer">Deployed Link</a>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="mx-auto d-block w-75"
                src={EmployeeTracker}
                alt="Employee Tracker"
            />

            <Carousel.Caption>
                <h3>Employee Tracker</h3>
                <p className="apps">Website that helps organize Employee database by different categories</p> 
                <p className="apps"> Languages: SQL, Javascript, Node</p>
                <a className="githubrepo" href="https://github.com/ShaunSully88/EmployeeTracker" target="_blank" rel="noreferrer">GitHub Repo</a>
                <a className="deployedprojects" href="https://drive.google.com/file/d/1yLK-1TxzVoqAsq7Bv5mKL4EvmvP74gDP/view" target="_blank" rel="noreferrer">Deployed Link</a>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="mx-auto d-block w-75"
                src={VeganMart}
                alt="Vegan Mart"
            />

            <Carousel.Caption>
                <h3>Vegan Mart</h3>
                <p className="apps">E-commerce site for online grocery shopping</p> 
                <p className="apps"> Languages: JavaScript, SQL, MongoDB, React </p>
                <a className="githubrepo" href="https://github.com/ShaunSully88/VeganMart" target="_blank" rel="noreferrer">GitHub Repo</a>
                <a className="deployedprojects" href="https://pure-spire-62048.herokuapp.com/" target="_blank" rel="noreferrer">Deployed Link</a>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="mx-auto d-block w-75"
                src={Greenside}
                alt="Greenside"
            />

            <Carousel.Caption>
                <h3>Greenside</h3>
                <p className="apps">Website to search and filter for golf courses across Ontario</p> 
                <p className="apps"> Languages: SQL, Javascsript, Express.js, React, MongoDB </p>
                <a className="githubrepo" href="https://github.com/ShaunSully88/Greenside" target="_blank" rel="noreferrer">GitHub Repo</a>
                
            </Carousel.Caption>
        </Carousel.Item>

    </Carousel>
    );
}

export default Projects;