import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";



function Navbar(){
    return(
        <nav>
            <button className='barras'>
                <FaBars />
            </button>
            <ul className="lista">
                <li>
                    <Link to='/' className='links'> INICIO </Link>
                </li>

                <li>
                    <Link to='/Contact' className='links'> CONTACTO </Link>
                </li>
            </ul>

                <div className='carrito'>
                    <Link to='/Carrito' className='links'> <IoCartOutline id='carritoCompras' /> </Link>
                </div>
        </nav>
    )
}
export default Navbar;