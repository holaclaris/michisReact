import './Carrito.css';
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Carrito(){
    return(
       <div>
         <Header />
         <Navbar />
         <div className='prueba'>Este es el carrito</div>
         <Footer />
       </div>
    )
}
export default Carrito;