import React, {useState, useCallback, useMemo } from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import CityPage from './pages/CityPage'
import { NotFoundPage } from './pages/NotFoundPage'

const App = props => {

    const [allWeather, setAllWeather] = useState({})
    const [allChartData, setallChartData] = useState({}); 
    const [allForecastItemList, setallForecastItemList] = useState({}); 

    const onSetAllWeather = useCallback((weatherCity) => {
        setAllWeather(allWeather =>{
            return ({...allWeather, ...weatherCity })
        })
     },[setAllWeather])


    const onSetChartData = useCallback((chartDataCity) => {
        setallChartData (allChartData => ({...allChartData, ...chartDataCity}))
    },[setallChartData])

    const onSetForecastItemList = useCallback(forecastItemListCity => {
        setallForecastItemList(allForecastItemList => ({...allForecastItemList, ...forecastItemListCity}))
    },[setallForecastItemList])



     const actions = useMemo( ()=> (
        {
            onSetAllWeather,
            onSetChartData,
            onSetForecastItemList
        }
     ),[onSetAllWeather, onSetChartData,onSetForecastItemList ])


     const data = useMemo( () => (
         {
            allWeather,
            allChartData,
            allForecastItemList
         }
     ),[allWeather,  allChartData, allForecastItemList])

    return (

        <Router>
            <Switch>
                <Route exact path='/'>
                    <WelcomePage />
                </Route>
                <Route path='/main'>
                    <MainPage data={data} actions={actions}/>
                </Route>
                <Route path='/city/:contryCode/:city'>
                    <CityPage data={data} actions={actions}/>
                </Route>
                <Route>
                    <NotFoundPage />
                </Route>
            </Switch>
        </Router>

    )
}

App.propTypes = {

}

export default App
