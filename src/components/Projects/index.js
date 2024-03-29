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
                    className="mx-auto d-block w-50 vh-50"
                    src={OpenFields}
                    alt="Open Fields"
                />
                <Carousel.Caption className= "mx-auto d-block w-50">
                    <h3>Open Fields</h3>
                    <p className="apps">App that helps gardeners learn the basics of vegetable gardening and harvesting.</p> 
                    <p className="apps"> Languages Used: HTML, CSS, Javascript, API </p>
                    <a className="githubrepo" href="https://github.com/ShaunSully88/Open-Fields" target="_blank" rel="noreferrer">GitHub Code</a>
                    <a className="deployedprojects" href="https://shaunsully88.github.io/Open-Fields/" target="_blank" rel="noreferrer">Deployed Link</a>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="mx-auto d-block w-50 vh-50"
                    src={EmployeeTracker}
                    alt="Employee Tracker"
                />

                <Carousel.Caption className= "mx-auto d-block w-50">
                    <h3>Employee Tracker</h3>
                    <p className="apps">Node application that organizes employee database by different categories</p> 
                    <p className="apps"> Languages Used: Node, Javascript, SQL</p>
                    <a className="githubrepo" href="https://github.com/ShaunSully88/EmployeeTracker" target="_blank" rel="noreferrer">GitHub Code</a>
                    <a className="deployedprojects" href="https://drive.google.com/file/d/1yLK-1TxzVoqAsq7Bv5mKL4EvmvP74gDP/view" target="_blank" rel="noreferrer">Deployed Link</a>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="mx-auto d-block w-50 vh-50"
                    src={VeganMart}
                    alt="Vegan Mart"
                />

                <Carousel.Caption className= "mx-auto d-block w-50">
                    <h3>Vegan Mart</h3>
                    <p className="apps">E-commerce site for online grocery shopping</p> 
                    <p className="apps"> Languages Used: React, SQL, MongoDB, Express. </p>
                    <a className="githubrepo" href="https://github.com/ShaunSully88/VeganMart" target="_blank" rel="noreferrer">GitHub Code</a>
                    <a className="deployedprojects" href="https://pure-spire-62048.herokuapp.com/" target="_blank" rel="noreferrer">Deployed Link</a>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="mx-auto d-block w-50 vh-50"
                    src={Greenside}
                    alt="Greenside"
                />

                <Carousel.Caption className= "mx-auto d-block w-50">
                    <h3>Greenside</h3>
                    <p className="apps">Website to search and filter for golf courses across Ontario</p> 
                    <p className="apps"> Languages Used: SQL, Javascsript, Express, React, MongoDB </p>
                    <a className="githubrepo" href="https://github.com/ShaunSully88/Greenside" target="_blank" rel="noreferrer">GitHub Code</a>                    
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
}

export default Projects;