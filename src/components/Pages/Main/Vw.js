import React from 'react'
import Header from '../../Header/Header'
import { useHistory } from 'react-router'
import '../../style.css'

export default function Vw() {
    const history = useHistory()

    return(
        <>
            <Header menu='main' />
            <div className='images'>
                <img className='logoPage' alt='vw' src={require('../../../assets/img/vw.png').default} />
                
            </div>
            <div className='backButtonContainer'>
                <button className='backButton' onClick={() => {history.push('/')}}>Menu Principal</button>
            </div>       
        </>
    )
}