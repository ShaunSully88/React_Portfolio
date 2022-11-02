import coverImage from "../../assets/cover/ShaunAlices.jpg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const React = require('react');


function About() {

    return (
        <Container>
        <section className="my-5">
            <Row>
                <Col>
                    <img src={coverImage} className="my-2 Haley" style={{ width: "50%" }} alt="cover" />
                </Col>
                <Col>
                    <h1 id="about">Shaun Sullivan</h1>
                    <p>
                        I am Full Stack Web Developer proficient with HTML, CSS, JS and React, as well as Node, SQL, and MongoDB. I am a recent graduate
                        of the Full Stack Web Development Bootcamp from Carleton University. I have over 15 years of Customer Service experience, half of which 
                        was spent in various leadership roles. I am a quick thinker, able to react to the chaos that comes with any workplace, and help 
                        my teammates reach their goals. Looking forward to a new career path and everything that comes with it!
                    </p>
                </Col>
            </Row>
        </section>
        </Container>
        );
    
}


export default About;