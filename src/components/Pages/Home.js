import React from 'react'
import Header from '../Header/Header'
import '../style.css'

export default function Home() {
    return(
        <>
            <Header menu='main'/>
            <div className='images'>
                <img className='logo' alt='fiat' src={require('../../assets/img/fiat.png').default} />
                <img className='logo' alt='ford' src={require('../../assets/img/ford.png').default} />
                <img className='logo' alt='chevrolet' src={require('../../assets/img/chevrolet.jpg').default} />
                <img className='logo' alt='vw' src={require('../../assets/img/vw.png').default} />
                <img className='logo' alt='hyundai' src={require('../../assets/img/hyundai.png').default} />
            </div>
        </>
    )
}