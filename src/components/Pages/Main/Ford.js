import React from 'react'
import Header from '../../Header/Header'
import { useHistory } from 'react-router'
import '../../style.css'

export default function Ford() {
    const history = useHistory()

    return(
        <>
            <Header menu='main' />
            <div className='images'>
                <img className='logoPage' alt='ford' src={require('../../../assets/img/ford.png').default} />
                
            </div>
            <div className='backButtonContainer'>
                <button className='backButton' onClick={() => {history.push('/')}}>Menu Principal</button>
            </div>       
        </>
    )
}