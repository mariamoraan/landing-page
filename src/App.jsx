import React from 'react' 
import './global.css'
import Menu  from "./components/Menu/"
import Cover from "./components/Cover"
import ListOfBenefits from './components/ListOfBenefits'
import ListOfArticles from './components/ListOfArticles'
import Footer from './components/Footer'
const App = () => {
    return(
        <div className="app-container">
            <Menu />
            <Cover />
            <ListOfBenefits />
            <ListOfArticles />
            <Footer/>
        </div>
    )
}

export default App