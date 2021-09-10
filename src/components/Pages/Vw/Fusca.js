import React from 'react'
import { useHistory } from 'react-router'

export default function Fusca() {
    const history = useHistory()

    return(
        <>
            <div className='images'>
                <img alt='brasilia' src={require('../../../assets/img/fusca.jpg').default} />
            </div>

            <div className='backButtonContainer'>
                <button className='backButton' onClick={() => {history.push('/vw')}}>Voltar</button>
            </div>       
        </>
    )
}