import { useEffect,  useState } from 'react'
import axios  from 'axios'
import { getWeatherUrl } from './../utils/urls'
import  getAllWeather  from './../utils/transform/getAllWeather'
import {getCityCode} from  '../utils/utils'


const useCityList = (cities, allWeather,  onSetAllWeather) => {
    
    // const [allWeather, setAllWeather] = useState({})
    const [error, setError ] = useState(null)
    
    useEffect(()=> {
        
        const setWeather =  async (city, contryCode) => {
            
            const url = getWeatherUrl( {city, contryCode} )
            try {
                
                onSetAllWeather({[getCityCode(city,contryCode)] : {} })

                const response = await axios.get(url)
                const allWeatherAux = getAllWeather(response, city, contryCode) 
                
                // setAllWeather(allWeather => ({...allWeather, ...allWeatherAux }))

                onSetAllWeather(allWeatherAux )


            } catch (err) {

                if(err.response) {
                    const {data, status} = err.response
                    console.log('data',data, 'status', status)
                    setError('Ha ocurrido un error en el servidor.')
                } else if(err.request) {
                    console.log('server unaccess or without internet')
                    setError('Verifica tu conexión a internet.')

                } else {
                    console.log('imprevisto')
                    setError('Error al cargar los datos.')

                }
            }
            
        }
        
        cities.forEach(({city, contryCode}) => {

            if(!allWeather[getCityCode(city,contryCode)]) {
                setWeather(city, contryCode)
            }
        });


    },[cities, allWeather, onSetAllWeather]) 
    

    return {error,setError }
}

export default useCityList