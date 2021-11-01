import React from 'react' 
import './styles.css' 
import '../../global.css'

import Logo from '../Logo'
import Button from "../Button"

import fb from "../../assets/icon-facebook.svg"
import ig from "../../assets/icon-instagram.svg"
import yt from "../../assets/icon-youtube.svg"
import pn from "../../assets/icon-pinterest.svg"
import tw from "../../assets/icon-twitter.svg"

const Footer = () =>{
    return(
        <footer>
            <div className="identity">
                <Logo light={true}/>
                <ul className="social-links">
                    <li><a href="/"><img src={fb} alt="" /></a></li>
                    <li><a href="/"><img src={yt} alt="" /></a></li>
                    <li><a href="/"><img src={tw} alt="" /></a></li>
                    <li><a href="/"><img src={pn} alt="" /></a></li>
                    <li><a href="/"><img src={ig} alt="" /></a></li>
                </ul>
            </div>
            <div className="links">
                <ul>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#blog">Blog</a></li>
                </ul>
                <ul>
                    <li><a href="#careers">Careers</a></li>
                    <li><a href="#support">Support</a></li>
                    <li><a href="#privacy">Privacy Policy</a></li>
                </ul>
            </div>
            <div className="action">
                <Button message={'Request Invite'}/>
                <p>&copy; Easybank. All right reserved</p>
            </div>
        </footer>
    )
}
export default Footer
