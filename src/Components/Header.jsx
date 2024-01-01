// import  "../styles/Header.css"
import { FaEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";



const Header = () => {
    return ( 
       <div className="flex justify-between">
        <div className="flex w-1/3 gap-10 bg-green-400">
        <p className="flex items-center gap-3"> <FiPhone />07061996492</p>
        <p className="flex items-center gap-3"> <FaEnvelope />jabow@hfkjbkkbkn</p>
        </div>
        <div className="flex gap-4">
        <FaFacebook />
        <FaLinkedin />
        <FaSquareInstagram />
        <FaSquareTwitter />

        </div>
       </div>
       


     );
}
 
export default Header;