// import  "../styles/Header.css"
import { FaEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";



const Header = () => {
    return ( 
       <div className="flex">
        <div className="flex w-1/3 bg-green-400 ">
        <p className="flex items-center "> <FiPhone />07061996492</p>
        <p className="flex items-center "> <FaEnvelope />jabow@hfkjbkkbkn</p>
        </div>
        <div>
        <FaFacebook />
        <FaLinkedin />
        <FaSquareInstagram />

        </div>
       </div>


     );
}
 
export default Header;