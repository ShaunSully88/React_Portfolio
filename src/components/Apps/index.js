import React from 'react';
import Col from 'react-bootstrap/Col';
import BooksAndBeans from '../../assets/project/0.jpg';
import OpenFields from '../../assets/project/2.jpg';
import Greenside from '../../assets/project/3.jpg';
import VeganMart from '../../assets/project/4.png';

function Apps( item ) {
    
    const { img, i, category, link } = item;
    return (
        <>
        <Col md={4}>
        <div className="portfolio_container">
            <div className="portfolio_container-info">
                <a className="portfolio_container-name" href={link} target="_blank" rel="noreferrer">{img.name}</a>
            </div>
            <img
                src={require(`../../assets/${category}/${i}.jpg`).default}
                alt={img.name}
                className="portfolio_container-image"
            />
        </div>
        </Col>
        </>
    )
}


export default Apps;