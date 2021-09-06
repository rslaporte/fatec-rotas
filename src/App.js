import './App.css';
import Home from './components/Pages/Home'

//Main pages
import Fiat from './components/Pages/Main/Fiat'
import Ford from './components/Pages/Main/Ford'
import Chevrolet from './components/Pages/Main/Chevrolet'
import Vw from './components/Pages/Main/Vw'
import Hyundai from './components/Pages/Main/Hyundai'

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="index">
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>

            <Route path='/fiat'>
              <Fiat />
            </Route>

            <Route path='/ford'>
              <Ford />
            </Route>

            <Route path='/chevrolet'>
              <Chevrolet />
            </Route>

            <Route path='/vw'>
              <Vw />
            </Route>

            <Route path='/hyundai'>
              <Hyundai />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}