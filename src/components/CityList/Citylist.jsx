import React from 'react'
import PropTypes from 'prop-types'
import CityInfo from "../CityInfo"
import Weather from "../Weather"
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Alert from '@material-ui/lab/Alert'
import useCityList from './../../hooks/useCityList'
import { getCityCode } from './../../utils/utils'




 
const CityListItem = React.memo( ( {city, contry, contryCode, EventonClickCity, weather} ) => {

        return (
            <ListItem button onClick={() => EventonClickCity(city,contryCode)}> 
                <Grid container
                justify="center" 
                alignItems="center">
                    <Grid item
                    md={3}
                    xs={12}>
                        <CityInfo city={city} contry={contry} />
                    </Grid>
                    
                    <Grid item
                    md={4}
                    xs={12}>
                        <Weather temperature={weather && weather.temperature} state={weather && weather.state}/>       
                    </Grid>

                </Grid>
            </ListItem>
    )
})


const renderCityAndContry = EventonClickCity => {

    const renderCItyAndContryInternal = (CityAndContry, weather) => {
        console.log(weather)

        const {city, contryCode } = CityAndContry

        return <CityListItem key={getCityCode(city,contryCode )} EventonClickCity={EventonClickCity} weather={weather} {...CityAndContry} />

    }

    return renderCItyAndContryInternal;
} 


    const Citylist = ({cities, onClickCity, actions, data}) => {
    
    // const { onSetAllWeather } = actions
    const { allWeather } = data

    const {error,setError} = useCityList(cities, allWeather, actions)
  
 
    const funcAux = renderCityAndContry(onClickCity)

    return (
        <div>
            {
                error && <Alert severity='error' onClose={() => setError(null)}>{error}</Alert>
            }
            <List>
                {
                    
                cities.map(cityAndContry => funcAux(cityAndContry,allWeather[getCityCode(cityAndContry.city, cityAndContry.contryCode )]))
                }
            </List>
        </div>

    )
}

Citylist.propTypes = {
    cities:PropTypes.arrayOf(
        PropTypes.shape({
            city:PropTypes.string.isRequired,
            contry:PropTypes.string.isRequired,
            contryCode:PropTypes.string.isRequired,
        })
    ).isRequired,
    onClickCity:PropTypes.func.isRequired
}

export default React.memo(Citylist)
