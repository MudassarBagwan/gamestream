import { Link } from "react-router-dom";
import "./navbar.css"

function NavBar(){


    return(

        <div className="navbar"> 
            <h1><Link to="/">Home</Link></h1>
        </div>

    )

}

export default NavBar;
