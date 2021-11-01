import React from 'react' 
import './styles.css' 
import '../../global.css'

import Button from '../Button'

import bg from '../../assets/bg-intro-desktop.svg'
import mockups from '../../assets/image-mockups.png'

const Cover = () => {
    return(
        <main className="cover">
            <div className="left">
                <div className="info">
                    <h1>Next generation digital bank</h1>
                    <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing and much more.</p>
                    <Button message="Request invite" />
                </div>
                
            </div>
            <div className="right">
                <img src={bg} alt="" />
                <img src={mockups} alt="" />
            </div>
        </main>
    )
}
export default Cover
