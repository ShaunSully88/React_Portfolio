import coverImage from "../../assets/cover/BogeyChill.jpg";
const React = require('react');


function About() {

    return (
        <section className='my-5'>
            <h1 id="about">ESPN 30 for 30 on Shaun Sullivan...</h1>
             <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        </section>
       
    );
}


export default About;