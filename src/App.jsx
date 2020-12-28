import React, { useReducer, useCallback,  } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import CityPage from './pages/CityPage'
import { NotFoundPage } from './pages/NotFoundPage'
import {    WeatherStateContext, WeatherDispatchContext} from './WeatherContext'



const initialValue = {
    
    allWeather: {},
    allChartData: {},
    allForecastItemList: {}

}

const App = props => {


    const reducer = useCallback((state,  action) => {

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

    },[])


    const [state, dispatch] = useReducer(reducer, initialValue)

    return (
        
        
        <WeatherDispatchContext.Provider value={dispatch}>
            <WeatherStateContext.Provider value={state}>
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
            </WeatherStateContext.Provider >
        </WeatherDispatchContext.Provider>
       

    )
}

App.propTypes = {

}

export default App
