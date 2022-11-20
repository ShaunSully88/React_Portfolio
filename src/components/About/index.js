import React from 'react';
import coverImage from "../../assets/cover/ShaunBogey.jpg";
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
                <Col className="col-md-6 border-end border-white mt-3" >
                      <h3 id="about" className="h3 mt-3 ">Life and Times Of...</h3>
                      <p id="inLeft">
                      I am Shaun. Avid outdoorsman, grower of beards, and a Full Stack Web Developer. I dream to one day own a cabin in the woods and be able to work from there, and will do whatever it takes to make that dream come true!
                        <br></br><br></br>
                       
                        I recently sold my home care company, which I owned and operated from 2016 to 2022. It was as rewarding as it was taxing, I am looking forward to starting a new career that allows me to
                        focus more on Myself, my Wife, my two dogs and three cats!
                      
                      </p>      
                </Col>
                <Col className="col-md-6 mt-3" >
                    <h3 className="h3" id="Shaun_Tech_Skills"> Technical Skills </h3>
                  <Row>
                    <Col className="col-sm-3 mx-auto">
                      <p className="Shaun_Description" id="inRight">
                        <ul>
                        <li>HTML5</li> 
                        <li>CSS</li>
                        <li>Typescript</li>
                        <li>Java</li>
                        <li>JavaScript</li> 
                        <li>NodeJS</li> 
                        <li>Bootstrap</li>
                        <li>JSON</li>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>API's</li>
                        </ul>
                      </p>
                    </Col>
                    <Col className="col-sm-3 mx-auto">
                      <p className="Shaun_Description" id="inRight">
                        <ul>
                          <li>React</li>
                          <li>ExpressJS</li>
                          <li>SQL</li>
                          <li>NoSQL</li>
                          <li>Sequelize</li>
                          <li>MongoDB</li>
                          <li>Mongoose</li>
                          <li>GraphQL</li>
                          <li>VSCode</li>
                          <li>Heroku</li> 
                        </ul>
                      </p>
                    </Col>
                  </Row>
                 </Col>
              </Row>
        </section>
        </Container>
        );
    
}


export default About;