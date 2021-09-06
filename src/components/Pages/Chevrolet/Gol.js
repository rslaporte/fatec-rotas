import React from 'react'
import { useHistory } from 'react-router'

export default function Gol() {
    const history = useHistory()

    return(
        <>
            <div className='images'>
                <img alt='brasilia' src={require('../../../assets/img/gol.jpg').default} />
            </div>

            <div className='backButtonContainer'>
                <button className='backButton' onClick={() => {history.push('/chevrolet')}}>Voltar</button>
            </div>       
        </>
    )
}