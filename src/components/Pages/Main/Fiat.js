import React from 'react'
import { useHistory } from 'react-router'
import Header from '../../Header/Header'
import '../../style.css'

export default function Fiat() {
    const history = useHistory()

    return(
        <>
            <Header menu='main' />
            <div className='images'>
                <img className='logoPage' alt='fiat' src={require('../../../assets/img/fiat.png').default} />   
            </div>
            <div className='backButtonContainer'>
                <button className='backButton' onClick={() => {history.push('/')}}>Menu Principal</button>
            </div>       
        </>
    )
}