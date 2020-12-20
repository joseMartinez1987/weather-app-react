import React, {useState, useCallback, useMemo, useReducer } from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import CityPage from './pages/CityPage'
import { NotFoundPage } from './pages/NotFoundPage'

const App = props => {



    const initialValue = {
    
        allWeather: {},
        allChartData: {},
        allForecastItemList: {}

    }

    const reducer = (state,  action) => {

        switch (action.type) {
            case "SET_ALL_WEATHER":

            const weatherCity = action.payload
            const newAllWeather = { ...state.allWeather, ...weatherCity }
            return {...state, allWeather:  newAllWeather }

            case "SET_CHART_DATA":

                const chartData = action.payload
                const newAllChartData = { ...state.allChartData, ...chartData }
                return {...state, allChartData:  newAllChartData }

            case "SET_FORECAST_ITEM_LIST":
                const allForecastItemList = action.payload
                const newAllForecastItemList = { ...state.allForecastItemList, ...allForecastItemList }
                return {...state, allForecastItemList:  newAllForecastItemList }
        
            default:
                return state
        }

    }


    const [state, dispatch] = useReducer(reducer, initialValue)

    // const [allWeather, setAllWeather] = useState({})
    // const [allChartData, setallChartData] = useState({}); 
    // const [allForecastItemList, setallForecastItemList] = useState({}); 

    // const onSetAllWeather = useCallback((weatherCity) => {
    //     setAllWeather(allWeather =>{
    //         return ({...allWeather, ...weatherCity })
    //     })
    //  },[setAllWeather])


    // const onSetChartData = useCallback((chartDataCity) => {
    //     setallChartData (allChartData => ({...allChartData, ...chartDataCity}))
    // },[setallChartData])

    // const onSetForecastItemList = useCallback(forecastItemListCity => {
    //     setallForecastItemList(allForecastItemList => ({...allForecastItemList, ...forecastItemListCity}))
    // },[setallForecastItemList])



    //  const actions = useMemo( ()=> (
    //     {
    //         onSetAllWeather,
    //         onSetChartData,
    //         onSetForecastItemList
    //     }
    //  ),[onSetAllWeather, onSetChartData,onSetForecastItemList ])


    //  const data = useMemo( () => (
    //      {
    //         allWeather,
    //         allChartData,
    //         allForecastItemList
    //      }
    //  ),[allWeather,  allChartData, allForecastItemList])

    return (

        <Router>
            <Switch>
                <Route exact path='/'>
                    <WelcomePage />
                </Route>
                <Route path='/main'>
                    <MainPage data={state} actions={dispatch}/>
                </Route>
                <Route path='/city/:contryCode/:city'>
                    <CityPage data={state} actions={dispatch}/>
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
