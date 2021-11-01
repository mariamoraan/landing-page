import React from 'react' 
import './styles.css' 
import '../../global.css'

import ic1 from "../../assets/icon-budgeting.svg"

import Benefit from '../Benefit'

const ListOfBenefits = () =>{
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper quam id volutpat varius. Nullam ac imperdiet nibh. Maecenas ullamcorper, turpis in convallis vulputate, lorem lacus tristique elit, vitae egestas libero tellus non nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam at nisl nec nulla sagittis fermentum blandit nec nisl. In sed velit eros. Fusce sed lorem at tortor ultrices pellentesque. Vestibulum varius pharetra justo vel pharetra. Sed in nisl finibus, varius nisl eget, tempus velit. Suspendisse euismod ultricies augue et varius. Vivamus non tortor tortor."
    const benefits = [
        {
            key:1,
            title:'Online Banking',
            info:'Our modern web and website...',
            image:ic1
        },
        {
            key:2,
            title:'Online Banking',
            info:'Our modern web and website...',
            image:ic1
        },
        {
            key:3,
            title:'Online Banking',
            info:'Our modern web and website...',
            image:ic1
        },
        {
            key:4,
            title:'Online Banking',
            info:'Our modern web and website...',
            image:ic1
        },
    ]
    return(
        <div className="list-of-benefits">
            <h2>Why choose Eastbank ?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fuga laborum enim consequuntur eveniet accusantium eum optio natus doloribus dolor similique, ratione eaque. Quo fuga laborum enim consequuntur eveniet accusantium eum optio natus doloribus dolor similique, ratione eaque. Nam odit esse quis. Similique, molestiae quasi.</p>
            <ul >
                {benefits.map(e => (<Benefit key={e.key} image={e.image} title={e.title} info={text}/>))}
            </ul>
        </div>
        
    )
}
export default ListOfBenefits
