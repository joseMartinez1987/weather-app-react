import { getCityCode, toCelsius } from './../utils'

const getAllWeather = (response, city, contryCode) => {

    const { data } = response

    const temperature = toCelsius(data.main.temp)
    const state = data.weather[0].main.toLowerCase()
    const humidity = data.main.humidity
    const wind = data.wind.speed
    const propName = getCityCode(city,contryCode )
    const propValue = {temperature, state, humidity, wind}

    return ({[ propName] : propValue })
}

export default getAllWeather