import { Link } from "react-router-dom";

const NavBar = () => {

     return (
         <nav>
            <Link to='/'>Accueil</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='incr'>Incr</Link>
         </nav>
     )
 }

 export default NavBar;
