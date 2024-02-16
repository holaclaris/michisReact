import { FaBars } from "react-icons/fa";
import { SlMagnifier } from "react-icons/sl";


function Navbar(){
    return(
        <nav>
            <div className='barras'>
              <FaBars />
            </div>
            <ul className="lista">
                <li>Inicio</li>
                <li>Productos</li>
                <li>Nosotros</li>
                <li>Contacto</li>
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