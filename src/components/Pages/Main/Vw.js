import React from 'react'
import Header from '../../Header/Header'
import { useHistory } from 'react-router'
import '../../style.css'

import Brasilia from '../Vw/Brasilia'
import Fusca from '../Vw/Fusca'
import Gol from '../Vw/Gol'
import Kombi from '../Vw/Kombi'
import Polo from '../Vw/Polo'

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

export default function Vw() {
    const history = useHistory()

    return(
        <>
            <Header menu='vw'/>
            <Router>
                <Switch>
                    <Route exact path='/vw/'>                        
                        <div className='images'>
                            <img className='logoPage' alt='vw' src={require('../../../assets/img/vw.png').default} />
                        </div>
                    </Route>

                    <Route path='/vw/brasilia'>
                        <Brasilia />
                    </Route>

                    <Route path='/vw/fusca'>
                        <Fusca />
                    </Route>

                    <Route path='/vw/kombi'>
                        <Kombi />
                    </Route>

                    <Route path='/vw/polo'>
                        <Polo />
                    </Route>

                    <Route path='/vw/gol'>
                        <Gol />
                    </Route>
                </Switch>
            </Router>

            <div className='backButtonContainer'>
                <button className='backButton' onClick={() => {history.push('/')}}>Menu Principal</button>
            </div>       
        </>
    )
}