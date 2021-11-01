import React from 'react' 
import './styles.css' 
import '../../global.css'

const Button = ({message='Ejemplo'}) => {
    return (<button className="default-button">{message}</button>)
}

export default Button