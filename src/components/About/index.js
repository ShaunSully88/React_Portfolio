import React from 'react';
import coverImage from "../../assets/cover/ShaunDogs.jpg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function About() {

    return (
        <Container>
        <section className="my-5">
            <Row lg="auto">
                <Col>
                    <img src={coverImage} className="my-2 Shaun" style={{ width: "30%" }} alt="cover" />
                </Col>
                <Col>
                    <h1 id="about">Life and Times Of...</h1>
                    <p>
                           I am Shaun. Avid outdoorsman, grower of beards, lover of dogs, and all else that provides peace and tranquility. Born and raised in a small town west of Ottawa, Canada, I bring that 
                       small town vibe with me wherever I go. I dream to one day own a cabin in the woods and be able to work from there, and will do whatever it takes to make that dream come true!


                    </p>
                </Col>
                <Col>
                <h1 id="Shaun_Tech_Skills"> Technical Skills </h1>
                <h1 className="ShaunLF">Languages/frameworks:</h1>
                <p className="Shaun_Description" >- HTML, CSS, JavaScript, React,
                    JSON, Node.js, Express.js, MySQL, Sequelize,
                    MongoDB, Mongoose and GraphQL.
                </p>
                <h1 className="ShaunLF">Other Technologies:</h1>
                <p className="Shaun_Description">- GitHub, Heroku and Visual Studio Code.</p>
            </Col>
            </Row>
        </section>
        </Container>
        );
    
}


export default About;