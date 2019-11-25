import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Bands from './components/Bands'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ul className="nav">
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <NavBar></NavBar>
        </ul>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/:band" component={Bands}></Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
