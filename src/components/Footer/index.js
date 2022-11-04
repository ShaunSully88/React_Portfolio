import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer () {
    return (
    <footer>
    <Row>
    <Col>
        <div className="footer">
        <a href="https://github.com/ShaunSully88" target="_blank" rel="noreferrer">
            <img style={{ width: "10%" }}
            src={require(`../../assets/footer/0.png`).default}
            alt={'GitHub logo'}
            className="footer-img1"
            key={'GitHub logo'}
            />
            </a>
        </div>
        </Col>
        <Col>
        <div className="footer">
        <a href="https://www.linkedin.com/in/shaunsully88" target="_blank" rel="noreferrer">
            <img style={{ width: "10%" }}
            src={require(`../../assets/footer/1.png`).default}
            alt={'LinkedIn logo'}
            className="footer-img2"
            key={'LinkedIn logo'}
            />
            </a>
        </div>
        </Col>
    </Row>
    </footer>
    );
}

export default Footer;