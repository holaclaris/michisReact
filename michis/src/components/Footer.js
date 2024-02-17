import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <div className="contenedorSeguinosRedes">
                <p>Seguinos en redes sociales!</p>
                <div className="redesSociales">
                    <div><a href="https://www.facebook.com"> <FaFacebook className="facebook"/> </a>
                        <a href="https://www.twitter.com"> <FaXTwitter className="twitter"/> </a>
                        <a href="https://www.instagram.com" > <FaInstagram className="instagram"/></a>
                        <a href="https://www.linkedin.com" > <FaLinkedinIn className="linkedin"/> </a>
                    </div>
                </div>
            </div>
            <p className="copyright">
                <FaRegCopyright />
                 2024 Claris
            </p>
        </footer>
    )
}
export default Footer;