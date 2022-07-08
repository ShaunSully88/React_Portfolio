import coverImage from "../../assets/cover/BogeyChill.jpg";
const React = require('react');


function About() {

    return (
        <section className='my-5'>
            <h1 id="about">Welcome to my Portfolio...</h1>
            <p>
                I am a Full Stack Web Developer based in Ottawa, Canada. When I am not working on projects I am spending time outside in my vegetable garden, going fishing, or wandering through the forest with my dogs. 
                </p>
             <img src={coverImage} className="my-2" style={{ width: "50%" }} alt="cover" />
             <div className='my-2'>
                
             </div>
        </section>
       
    );
}


export default About;