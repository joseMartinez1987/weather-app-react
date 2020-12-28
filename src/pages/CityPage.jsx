import React, {useMemo} from 'react'
import Grid from '@material-ui/core/Grid'
import CityInfo from './../components/CityInfo'
import Weather from './../components/Weather'
import WeatherDetail from './../components/WeatherDetails'
import ForecastChart from './../components/ForecastChart'
import Forecast from './../components/Forecast'
import AppFrame from '../components/AppFrame'
import { useCityPage } from './../hooks//useCityPage'
import LinearProgress from '@material-ui/core/LinearProgress'
import useCityList from './../hooks/useCityList'
import {getCityCode} from './../utils/utils'
import { getContryNameByCode } from './../utils/serviceCities'
import {useWeatherStateContext, useWeatherDispatchContext} from "./../WeatherContext"




const CityPage = () => {

    const actions = useWeatherDispatchContext()
    const data = useWeatherStateContext()
    const { allWeather, allChartData, allForecastItemList } = data

    // const { onSetAllWeather, onSetChartData, onSetForecastItemList } = actions



    const {city,contryCode } = useCityPage(allChartData, allForecastItemList, actions)

    const cities = useMemo(() =>([{city,contryCode}]), [city, contryCode])


    useCityList(cities, allWeather, actions)


    const weather = allWeather[getCityCode(city,contryCode)]

    const cityCode =[getCityCode(city,contryCode)]

    const chartData = allChartData[cityCode]
    const forecastItemList = allForecastItemList[cityCode]

    



    const contry = getContryNameByCode(contryCode)
    const state = weather && weather.state
    const temperature = weather && weather.temperature
    const humidity = weather && weather.humidity
    const wind = weather && weather.wind


    return (
       <AppFrame>
            <Grid container justify='space-around' direction='column' spacing={2}>
                <Grid item container justify="center" alignItems="flex-end" xs={12} >
                    <CityInfo city={city} contry={contry} />
                </Grid>
                <Grid container item justify="center">
                    <Weather justify="center" state={state} temperature={temperature} />

                    {
                        humidity && wind && 
                        <WeatherDetail humidity={humidity} wind={wind} />
                    }
                </Grid>

                <Grid item>
                    {
                        !chartData && !forecastItemList && <LinearProgress />
                    }
                </Grid>

                <Grid item xs={12}>
                    {  
                        chartData && <ForecastChart data={chartData} />
                    }

                </Grid>
                <Grid item xs={12}>
                    {
                       forecastItemList && <Forecast forecastItemList={forecastItemList}/>
                    }
                </Grid>
            </Grid>
        </AppFrame>
    )
}



export default CityPage
