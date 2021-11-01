import React from 'react' 
import './styles.css' 
import '../../global.css'

import Article from '../Article'

import ic1 from "../../assets/image-currency.jpg"

const ListOfArticles = () => {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper quam id volutpat varius. Nullam ac imperdiet nibh. Maecenas ullamcorper, turpis in convallis vulputate, lorem lacus tristique elit, vitae egestas libero tellus non nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam at nisl nec nulla sagittis fermentum blandit nec nisl. In sed velit eros. Fusce sed lorem at tortor ultrices pellentesque. Vestibulum varius pharetra justo vel pharetra. Sed in nisl finibus, varius nisl eget, tempus velit. Suspendisse euismod ultricies augue et varius. Vivamus non tortor tortor."
    const benefits = [
        {
            key:1,
            author:'Juan Oswall',
            title:'Online Banking',
            info:'Our modern web and website...',
            image:ic1
        },
        {
            key:2,
            author:'Juan Oswall',
            title:'Online Banking',
            info:'Our modern web and website...',
            image:ic1
        },
        {
            key:3,
            author:'Juan Oswall',
            title:'Online Banking',
            info:'Our modern web and website...',
            image:ic1
        },
        {
            key:4,
            author:'Juan Oswall',
            title:'Online Banking',
            info:'Our modern web and website...',
            image:ic1
        },
    ]
    return(
        <div className="list-of-articles">
            <h2>Last articles</h2>
            <ul >
                {benefits.map(e=>(<Article key={e.key} info={text} title={e.title} image={e.image} author={e.author}/>))}
            </ul>
        </div>
        
    )
}
export default ListOfArticles
