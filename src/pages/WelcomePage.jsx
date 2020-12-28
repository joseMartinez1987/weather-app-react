import React, { useMemo } from 'react'
import WelcomeScreen from './../components/WelcomeScreen.jsx'
import Grid from '@material-ui/core/Grid'
import { IconContext } from 'react-icons/'
import { WiDaySunny } from 'react-icons/wi'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import {Link as RouterLink } from 'react-router-dom'

const WelcomePage = props => {

    const iconContextSize = useMemo(() => ({size:"6em"}),[])
    return (
        <WelcomeScreen>
            <Grid container direction="column" justify="center" className="full">
                <div className="hightlight">
                    <Grid container item xs={12} justify="center" alignItems="center">
                        <Grid item> 
                            <IconContext.Provider value={iconContextSize}>
                                <WiDaySunny />
                            </IconContext.Provider>
                        </Grid>
                        <Grid container item justify="center" alignItems="center" direction="column">
                            <Typography variant="h4" color="inherit"> Weather App</Typography>
                            <Link color="inherit" arial-label="menu" component={RouterLink} to="/main">Ingresar</Link>
                        </Grid>
                    </Grid>

                </div>

            </Grid>
        </WelcomeScreen>
    )
}


export default WelcomePage
