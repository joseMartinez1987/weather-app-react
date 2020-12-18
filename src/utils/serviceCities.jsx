const cityAndContry = [
    {city:"Caracas", contry:"Venezuela", contryCode:'VE'} ,
    {city:"Bogota", contry:"Colombia", contryCode:'CO'},
    {city:"Santiago", contry:"Chile", contryCode:'CL'},
    {city:"Montevideo", contry:"Uruguay", contryCode:'UY'},
]

export const getCities = () => (cityAndContry)


export const getContryNameByCode = contryCode => (
    cityAndContry.filter(code => code.contryCode === contryCode[0].contry)
)