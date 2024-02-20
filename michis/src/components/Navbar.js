import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";



function Navbar(){
    return(
        <nav>
            <div className="barrasLinks">
            <button className='barras'>
                <FaBars />
            </button>
            <ul className="lista">
                <li>
                    <Link to='/' className='links'> PRODUCTOS </Link>
                </li>

                <li>
                    <Link to='/Contact' className='links'> CONTACTO </Link>
                </li>
                <li>
                    <Link to='/Adopt' className='links'> Adoptá un gatito! </Link>
                </li>
            </ul>
            </div>

                <div className='carrito'>
                    <Link to='/Carrito' className='links'> <IoCartOutline id='carritoCompras' /> </Link>
                    <div id='contador'><p>0</p></div>
                </div>
        </nav>
    )
}
export default Navbar;