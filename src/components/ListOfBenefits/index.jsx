import React from 'react' 
import './styles.css' 
import '../../global.css'

import budgeting from "../../assets/icon-budgeting.svg"
import online from "../../assets/icon-online.svg"
import onboarding from "../../assets/icon-onboarding.svg"
import api from "../../assets/icon-api.svg"

import Benefit from '../Benefit'

const ListOfBenefits = () =>{
    const benefits = [
        {
            key:1,
            title:'Online Banking',
            info:'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
            image:online
        },
        {
            key:2,
            title:'Simple Budgeting',
            info:'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limit',
            image:budgeting
        },
        {
            key:3,
            title:'Fast Onboarding',
            info:'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.',
            image:onboarding
        },
        {
            key:4,
            title:'Open API',
            info:'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
            image:api
        },
    ]
    return(
        <div className="list-of-benefits">
            <h2>Why choose Eastbank ?</h2>
            <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
            <ul >
                {benefits.map(e => (<Benefit key={e.key} image={e.image} title={e.title} info={e.info}/>))}
            </ul>
        </div>
        
    )
}
export default ListOfBenefits
