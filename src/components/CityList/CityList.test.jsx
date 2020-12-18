import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CityList from './Citylist'



const cityAndContry = [
    {city:"Caracas", contry:"Venezuela", contryCode:'VE'} ,
    {city:"Bogota", contry:"Colombia", contryCode:'CO'},
    {city:"Quito", contry:"Ecuador", contryCode:'EC'},
    {city:"Montevideo", contry:"Uruguay", contryCode:'UY'},
]

test("cityList render", async () => {
    // AAA Arrange, Act, Assert

    const { findAllByRole } = render(<CityList cities={cityAndContry} onClickCity={()=> {} } />)
 
    const items = await findAllByRole('button')

    expect(items).toHaveLength(4)
})

test("cityList click on item", async () => {

    const fnClickOnItem =  jest.fn()

    const {findAllByRole} = render(<CityList cities={cityAndContry} onClickCity={fnClickOnItem} />)

     const items = await findAllByRole('button')

     fireEvent.click(items[0])

     expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})