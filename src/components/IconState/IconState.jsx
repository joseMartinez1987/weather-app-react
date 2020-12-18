import React from 'react'
import PropTypes from 'prop-types'
import { WiDayCloudy,
    WiDaySunny,
    WiRain,
    WiSnow,
    WiRaindrop,
    WiThunderstorm } from 'react-icons/wi'

 export const validValue = [
    "clouds",
    "clear",
    "rain",
    'snow',
    'drizzle',
    'thunderstorm',
    'haze',
    'fog'
]

const stateByName = {
clouds: WiDayCloudy,
clear: WiDaySunny,
rain: WiRain,
snow: WiSnow ,
drizzle:WiRaindrop ,
thunderstorm: WiThunderstorm,
haze: WiSnow,
fog:WiRaindrop
}

// const renderState = {state} => {

// const Icon = stateByName[state] !== undefined ? stateByName[state] : stateByName['sunny']
// return <Icon />
// }


const IconState = ({state}) => {
    const StateByName =  stateByName[state]
    return (
        <StateByName />
    )
}

IconState.propTypes = {
    state:PropTypes.oneOf(validValue).isRequired
}

export default IconState
