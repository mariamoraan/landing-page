import React from 'react' 
import './styles.css' 
import '../../global.css'

const Benefit = ({image,title,info}) => {
    console.log(title)
    return(
        <li className="benefit">
            <img src={image} alt="" />
            <h3>{title}</h3>
            <p>{info}</p>
        </li>
    )
}

export default Benefit

