import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { SlMagnifier } from "react-icons/sl";


function Navbar(){
    return(
        <nav>
            <button className='barras'>
              <FaBars />
            </button>
            <ul className="lista">
                <li>
                    <Link to='/' className='links'> Inicio </Link>
                </li>
             
                <li>
                    <Link to='/Contact' className='links'> Contacto </Link>
                </li>
            </ul>

            <div className="busqueda">
                <p className='lupa'>
                  <SlMagnifier />
                </p>
                <form>
                    <input type="text" name="busqueda" placeholder="Buscar"/>
                </form>
            </div>
        </nav>
    )
}
export default Navbar;