import React from 'react'
import CityList from "./Citylist"
import {action} from '@storybook/addon-actions'

export default {
    title:"CityList",
    component: CityList
}

const cityAndContry = [
    {city:"Caracas", contry:"Venezuela", contryCode:'VE'} ,
    {city:"Bogota", contry:"Colombia", contryCode:'CO'},
    {city:"Quito", contry:"Ecuador", contryCode:'EC'},
    {city:"Montevideo", contry:"Uruguay", contryCode:'UY'},
]

export const CityListExample = () => <CityList cities={cityAndContry} onClickCity={action("click in city")}/>