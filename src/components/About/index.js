import coverImage from "../../assets/cover/BogeyChill.jpg";
const React = require('react');


function About() {

    return (
        <section className='my-5'>
            <h1 id="about">ESPN 30 for 30 on Shaun Sullivan...</h1>
             <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
             <div className='my-2'>
                <p>
                I am a Full Stack Web Developer based in Ottawa, Canada. When I am not working on projects I am spending time outside in my vegetable garden, going fishing, or wandering through the forest with my dogs. 
                </p>
             </div>
        </section>
       
    );
}


export default About;