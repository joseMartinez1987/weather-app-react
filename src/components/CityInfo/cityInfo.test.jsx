import  React  from "react";
import { render } from "@testing-library/react";
import CityInfo from './CityInfo'

test('cityInfo', async () => {

    const city = "Santiago";
    const contry = 'Chile';

    const {findAllByRole} = render(<CityInfo city={city} contry={contry} />)

    const cityComponents = await findAllByRole('heading')


    expect(cityComponents[0]).toHaveTextContent(city)
    expect(cityComponents[1]).toHaveTextContent(contry)
})