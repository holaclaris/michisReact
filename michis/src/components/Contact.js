import Header from "./Header";
import Navbar from "./Navbar";
import Form from "./Form";
import Footer from "./Footer";
import './Contact.css';

function Contact(){
    return (
      <body className='bodyContact'>  
        <Header />
        <Navbar/>
        <Form/>
        <Footer/>
      </body>
    )
}
export default Contact;