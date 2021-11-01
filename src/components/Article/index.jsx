import React from 'react' 
import './styles.css' 
import '../../global.css'


const Article = ({title, author, image, info}) =>{
    return(
        <li className="article">
            <img src={image} alt="" />
            <div className="article-info">
                <p className="article-author">{author}</p>
                <h4 className="article-title">{title}</h4>
                <p className="article-info-text">{info}</p>
            </div>
        </li>
    )
}

export default Article
