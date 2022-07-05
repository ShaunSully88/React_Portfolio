const React = require('react');

function Nav() {

    const projects = [
        {
            name: "Open Fields",
            description: "App to search for veggie planting instructions"
        },
        {
            name: "Books and Beans",
            description: "App used to find book clubs in Coffee Shops across the globe"
        }
    ];
    function projectSelected() {
        console.log("hello")
      }
    return (
        <header>
           <h2>
             <a href="/">
                <span role="img" areia-label="dog"></span> Code for K9
              </a>
            </h2> 
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About Me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {projects.map((project) => (
                        <li
                        className="mx-1"
                        key={project.name}
                        >
                            <span onClick={projectSelected} >
                                {project.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;
