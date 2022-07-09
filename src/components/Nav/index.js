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
        
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About Me
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#portfolio">
                            Portfolio
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#contact">
                            Contact
                        </a>
                    </li>
                  
                    <li className="mx-2">
                        <a href="#resume">
                            Resume
                        </a>
                    </li>
                    
                    
                </ul>
            </nav>
        </header>
    );
}

export default Nav;
