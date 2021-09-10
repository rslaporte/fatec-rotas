import React from 'react'
import { useHistory } from 'react-router'

import Header from '../../Header/Header'

import '../../style.css'

export default function Chevrolet() {
    const history = useHistory()

    return(
        <>
            <Header menu='main' />
            <div className='images'>
                <img className='logoPage' alt='chevrolet' src={require('../../../assets/img/chevrolet.jpg').default} />
                
            </div>
            <div className='backButtonContainer'>
                <button className='backButton' onClick={() => {history.push('/')}}>Menu Principal</button>
            </div>       
        </>
    )
}