import React from 'react'
import { useHistory } from 'react-router'

export default function Polo() {
    const history = useHistory()

    return(
        <>
            <div className='images'>
                <img alt='brasilia' src={require('../../../assets/img/polo.jpg').default} />
            </div>

            <div className='backButtonContainer'>
                <button className='backButton' onClick={() => {history.push('/chevrolet')}}>Voltar</button>
            </div>       
        </>
    )
}