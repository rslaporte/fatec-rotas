import React from 'react'
import { useHistory } from 'react-router-dom'
import menu from '../menu.json'
import './Header.css'

export default function Header(props) {
    const history = useHistory()

    return (
        <header style={{'height' : '10vh'}}>
            <div className='main-menu'>
                {menu[props.menu].map(e => {
                   return <button className='menu-button' style={{'color': e.color}} onClick={() => {history.push(e.path)}}>{e.title}</button>
                })}
            </div>
        </header>
    )
}