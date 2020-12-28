import React, {useReducer, useContext} from 'react'

const WeatherStateContext = React.createContext()

const WeatherDispatchContext = React.createContext()


const initialValue = {
    
    allWeather: {},
    allChartData: {},
    allForecastItemList: {}

}

const reducer =(state,  action) => {

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




const WatherContext = ({children}) => {

const [state, dispatch] = useReducer(reducer, initialValue)

    return (
        <WeatherDispatchContext.Provider value={dispatch}>
            <WeatherStateContext.Provider value={state}>
                {children}
            </WeatherStateContext.Provider >
        </WeatherDispatchContext.Provider>
    )
}


const useWeatherStateContext = () => {
    const dispatch = useContext(WeatherStateContext)

    return dispatch
}

const useWeatherDispatchContext= () => {
    const state = useContext(WeatherDispatchContext)
    
    return state
}







export {
    WatherContext,
    useWeatherDispatchContext,
    useWeatherStateContext
}
