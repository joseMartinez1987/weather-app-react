import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

const CityInfo = ({ city,contry }) => {
    return (
        <div>
            <Typography style={{display:'inline'}}  variant="h3">{city}, </Typography>
            <Typography style={{display:'inline'}}  variant="h4">{contry}</Typography>
        </div>
    )
}

CityInfo.propTypes = {
    city:PropTypes.string.isRequired,
    contry:PropTypes.string.isRequired
}

export default CityInfo
