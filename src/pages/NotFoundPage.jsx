import React from 'react'
import Grid from '@material-ui/core/Grid'
import { IconContext } from 'react-icons/'
import { WiRain } from 'react-icons/wi'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import {Link as RouterLink } from 'react-router-dom'

export const NotFoundPage = () => {
    return (
            <Grid container direction="column" justify="center" className="full">
                <div className="hightlight">
                    <Grid container item xs={12} justify="center" alignItems="center">
                        <Grid item> 
                            <IconContext.Provider value={{size:"6em"}}>
                                <WiRain />
                            </IconContext.Provider>
                        </Grid>
                        <Grid container item justify="center" alignItems="center" direction="column">
                            <Typography variant="h4" color="inherit"> 404 | La pagina no existe</Typography>
                            <Link color="inherit" arial-label="menu" component={RouterLink} to="/main">Volver al inicio </Link>
                        </Grid>
                    </Grid>

                </div>

            </Grid>
    )
}
