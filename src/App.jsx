import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import CityPage from './pages/CityPage'
import { NotFoundPage } from './pages/NotFoundPage'
import {WatherContext} from './WeatherContext'





const App = props => {

    return (
        <WatherContext>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <WelcomePage />
                    </Route>
                    <Route path='/main'>
                        <MainPage />
                    </Route>
                    <Route path='/city/:contryCode/:city'>
                        <CityPage/>
                    </Route>
                    <Route>
                        <NotFoundPage />
                    </Route>
                </Switch>
            </Router>
        </WatherContext>
    )
}

App.propTypes = {

}

export default App
