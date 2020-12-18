const appId = "c494e57430b039f012b24d9fc09b9e2e"

export const getWeatherUrl =({city,contryCode}) => (
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${contryCode}&appid=${appId}`
) 

export const getForecastUrl = ( {city,contryCode} ) => (
    `https://api.openweathermap.org/data/2.5/forecast?q=${city},${contryCode}&appid=${appId}`
)