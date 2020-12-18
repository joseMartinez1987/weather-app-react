import react from 'react'
import Forecast from './Forecast'
import { render } from '@testing-library/react'


const forecastItemList = [
    {hour:18, state:'clear', temperature:17, weekDay:'Jueves'},
    {hour:15, state:'clouds', temperature:18, weekDay:'Miercoles'},
    {hour:10, state:'rain', temperature:12, weekDay:'Lunes'},
]

test('Forecast render', async () => {
    const  {findAllByTestId} = render (
        <Forecast forecastItemList={forecastItemList} />
    )

        const forecastItems = await findAllByTestId('forecast-item-container')

        expect(forecastItems).toHaveLength(3)

})