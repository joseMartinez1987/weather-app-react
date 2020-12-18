import React from 'react'
import {useHistory} from 'react-router-dom'
import CityList from './../components/CityList'
import AppFrame from './../components/AppFrame'
import Paper from '@material-ui/core/Paper'
import { getCities } from './../utils/serviceCities'


const MainPage = ({actions, data}) => {

    const history = useHistory();

    const onClickHandle = (city,contryCode) => {
        console.log(city,contryCode)
        //Allow switch the URL by programation
        history.push(`/city/${contryCode}/${city}`)
    }

    return (
        <AppFrame>
            <Paper elevation={10}>
                <CityList cities={getCities()} onClickCity={onClickHandle} actions={actions} data={data}/>
            </Paper>
        </AppFrame>
    )
}

export default MainPage
