import React from 'react' 
import './styles.css' 
import '../../global.css'

import Article from '../Article'

import currency from "../../assets/image-currency.jpg"
import confetti from "../../assets/image-confetti.jpg"
import plane from "../../assets/image-plane.jpg"
import restaurant from "../../assets/image-restaurant.jpg"

const ListOfArticles = () => {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper quam id volutpat varius. Nullam ac imperdiet nibh. Maecenas ullamcorper, turpis in convallis vulputate, lorem lacus tristique elit, vitae egestas libero tellus non nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam at nisl nec nulla sagittis fermentum blandit nec nisl. In sed velit eros. Fusce sed lorem at tortor ultrices pellentesque. Vestibulum varius pharetra justo vel pharetra. Sed in nisl finibus, varius nisl eget, tempus velit. Suspendisse euismod ultricies augue et varius. Vivamus non tortor tortor."
    const benefits = [
        {
            key:1,
            author:'Claire Robinson',
            title:'Online Banking',
            info:'Our modern web and website...',
            image:currency
        },
        {
            key:2,
            author:'Wilson Hutton',
            title:'Treat yourself without worrying about money',
            info:'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …',
            image:restaurant
        },
        {
            key:3,
            author:'Wilson Hutton',
            title:'Take your Easybank card wherever you go',
            info:' We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …',
            image:plane
        },
        {
            key:4,
            author:'Claire Robinson',
            title:'Our invite-only Beta accounts are now live!',
            info:'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...',
            image:confetti
        },
    ]
    return(
        <div className="list-of-articles">
            <h2>Last articles</h2>
            <ul >
                {benefits.map(e=>(<Article key={e.key} info={e.info} title={e.title} image={e.image} author={e.author}/>))}
            </ul>
        </div>
        
    )
}
export default ListOfArticles
