import React, {useState} from 'react' 
import './styles.css' 
import '../../global.css'

const MobileMenu = ({visible=false}) =>{
    return(
        <nav className={visible ? "mobile-menu" : "mobile-menu is_none"}>
           <a href="#">Home</a>
           <a href="#">About</a>
           <a href="#">Contact</a>
           <a href="#">Blog</a>
           <a href="#">Careers</a>
        </nav>
    )
}

export default MobileMenu