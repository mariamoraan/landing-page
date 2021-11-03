import React, {useState} from 'react' 
import './styles.css' 
import '../../global.css'

import Button  from '../Button/'
import Logo from '../Logo'
import MobileMenu from '../MobileMenu'

import open_menu from "../../assets/icon-hamburger.svg"

import close_menu from "../../assets/icon-close.svg"

const Menu = () =>{
    const [isActive, setIsActive] = useState(false);
    return(
        <nav className="menu">
            <div className="left">
                <Logo />
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
            </ul>
            <div className="right">
                <Button message='Request Invite'/>
            </div>
            <img src={isActive ?  close_menu : open_menu} alt="" onClick={()=>{setIsActive(!isActive)}} id="menu-button"/>
            <MobileMenu visible={isActive}/>
        </nav>
    )
}
export default Menu
