import './index.css'
import { FaFacebookF, FaInstagram ,FaTwitter,FaTelegramPlane } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
    return(
        <footer className='footer-container d-flex justify-content'>
          
            <div className='icon-container '>
                 <a href='/' target='_blank' className='footer-icon'><FaFacebookF size={24} /></a>
            </div>
           
            <a href='/' target='_blank'className='footer-icon' ><FaInstagram size={24} /></a>
            <a href='/' target='_blank'className='footer-icon'><FaTwitter size={24}/></a>
            <a href='/' target='_blank'className='footer-icon'><TbBrandGithubFilled size={24} /></a>
            <a href='/' target='_blank'className='footer-icon'><FaLinkedinIn size={24} /></a>
            <a href='/' target='_blank'className='footer-icon'><FaTelegramPlane  size={24}/></a>
            
            

            

        </footer>
    )
}
export default Footer