import React from 'react'
import { useHistory } from 'react-router'

import Header from '../../Header/Header'
import Brasilia from '../Chevrolet/Brasilia'
import Fusca from '../Chevrolet/Fusca'
import Gol from '../Chevrolet/Gol'
import Kombi from '../Chevrolet/Kombi'
import Polo from '../Chevrolet/Polo'

import '../../style.css'

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

export default function Chevrolet() {
    const history = useHistory()

    return(
        <>
            <Header menu='chevrolet'/>
            <Router>
                <Switch>
                    <Route exact path='/chevrolet/'>                        
                        <div className='images'>
                            <img className='logoPage' alt='chevrolet' src={require('../../../assets/img/chevrolet.jpg').default} />
                        </div>
                    </Route>

                    <Route path='/chevrolet/brasilia'>
                        <Brasilia />
                    </Route>

                    <Route path='/chevrolet/fusca'>
                        <Fusca />
                    </Route>

                    <Route path='/chevrolet/kombi'>
                        <Kombi />
                    </Route>

                    <Route path='/chevrolet/polo'>
                        <Polo />
                    </Route>

                    <Route path='/chevrolet/gol'>
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