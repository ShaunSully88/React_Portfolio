import React from 'react';
import coverImage from "../../assets/cover/ShaunZuka.jpg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function About() {

    return (
        <Container>
        <section className="my-1">
            <Row lg="auto" class="row">
                <Col>
                    <img src={coverImage} className="my-1 Shaun" style={{ width: "30%" }} alt="cover" />
                </Col>
            </Row>  
            <Row>   
                <Col className="col-md-6 border-end border-info mt-3" id="inLeft">
                    
                      <h3 id="about" className="mt-3">Life and Times Of...</h3>
                      <p>
                        I am Shaun. Avid outdoorsman, grower of beards, lover of dogs, and all else that provides peace and tranquility. Born and raised in a small town west of Ottawa, Canada, I bring that 
                       small town vibe with me wherever I go. I dream to one day own a cabin in the woods and be able to work from there, and will do whatever it takes to make that dream come true!
                      </p>
                    
                </Col>
                <Col className="col-md-6 mt-3" id="inRight">
                  <h3 id="Shaun_Tech_Skills"> Technical Skills </h3>
                  <h5 className="ShaunLF">Languages/frameworks:</h5>
                  <p className="Shaun_Description" >- HTML, CSS, JavaScript, React,
                    JSON, Node.js, Express.js, MySQL, Sequelize, MongoDB, Mongoose and GraphQL.
                  </p>
                  <h5 className="ShaunLF">Other Technologies:</h5>
                  <p className="Shaun_Description">- GitHub, Git, CLI, Heroku and Visual Studio Code.</p>
                </Col>
            </Row>
            
        </section>
        </Container>
        );
    
}


export default About;