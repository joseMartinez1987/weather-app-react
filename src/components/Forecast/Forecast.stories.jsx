import React from 'react'
import Forecast from './Forecast'

export default {
    title:'Forecast',
    component:Forecast
}

const forecastItemList = [
    {hour:18, state:'clear', temperature:17, weekDay:'Jueves'},
    {hour:15, state:'clouds', temperature:18, weekDay:'Miercoles'},
    {hour:10, state:'rain', temperature:12, weekDay:'Lunes'},
]

export const ForecastExcaple = () => <Forecast forecastItemList={forecastItemList} />