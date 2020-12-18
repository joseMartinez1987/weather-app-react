import convertUnits from 'convert-units'



export const getCityCode = (city, contryCode) => `${city}-${contryCode}`

export const toCelsius = temp =>  + convertUnits(temp).from('K').to('C').toFixed(0)