import  { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import 'moment/locale/es'
import { getForecastUrl } from './../utils/urls'
import  getChartData from './../utils/transform/getChartData'  
import getForescastItemList from './../utils/transform/getForecasItemList'
import { getCityCode } from './../utils/utils'



export const useCityPage = (allChartData, allForecastItemList, onSetChartData, onSetForecastItemList) => {


    // const [chartData, setChartData] = useState(null);
    // const [forecastItemList, setForecastItemList] = useState(null);


    const params = useParams();
    const {city, contryCode } = params

    useEffect(() => {



        const getForecast = async () => {
            const url = getForecastUrl ( {city, contryCode} )
            const cityCode = getCityCode(city, contryCode)
            
            try {

                const {data } = await axios.get(url)
                const dataAux = getChartData(data)
                const getForecastItemListAux = getForescastItemList(data)

                onSetChartData({[cityCode] :dataAux})
                onSetForecastItemList({ [cityCode] : getForecastItemListAux})

            } catch (error) {
                console.log(error)
            }
        }

        const cityCode =  getCityCode(city, contryCode)
        if( allChartData && allForecastItemList && !allChartData[cityCode] && !allForecastItemList[cityCode]) {
            getForecast()

        }


    },[city,contryCode,onSetChartData, onSetForecastItemList, allChartData, allForecastItemList])


    return { city,contryCode }
}
