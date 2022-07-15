const request = require('request')

const forecast = (latitude,longtitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=d9e0b993bc242ee3e56050c9bff41c68&query=${latitude},${longtitude}&units=m`
    
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!')
        } else if (body.error) {
            callback('Unable to find location')
        }
        else {
            const data = body.current
            temp = data.temperature
            feelslike = data.feelslike
            callback(undefined,
                `${data.weather_descriptions[0]}.  It is currently ${temp} degrees out. It feels like ${feelslike} degrees out.`
            )

        }

    })
}

module.exports = forecast