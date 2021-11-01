import React from 'react' 
import './styles.css' 
import '../../global.css'

import logo from "../../assets/logo.svg"
const Logo = ({light=false}) => {
    return <img src={logo} alt="logo" className={light ? 'light' : ''}/>
}

export default Logo