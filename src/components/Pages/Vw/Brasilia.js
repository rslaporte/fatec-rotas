import React from 'react'
import { useHistory } from 'react-router'

export default function Brasilia() {
    const history = useHistory()

    return(
        <>
            <div className='images'>
                <img alt='brasilia' src={require('../../../assets/img/brasilia.jpg').default} />
            </div>

            <div className='backButtonContainer'>
                <button className='backButton' onClick={() => {history.push('/vw')}}>Voltar</button>
            </div>       
        </>
    )
}