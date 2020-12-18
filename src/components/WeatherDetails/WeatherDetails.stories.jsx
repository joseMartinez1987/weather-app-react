import React from 'react'
import WeatherDetails from './WeatherDetails'


export default {
    title:"WeatherDeatils",
    component: WeatherDetails
}

export const WeatherDetail = () => {
   return  <WeatherDetails humidity={10} wind={80} />
}
